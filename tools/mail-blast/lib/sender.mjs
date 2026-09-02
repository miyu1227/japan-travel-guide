// 実際の送信と、送信ログ。
//
// 送信手段は2つある。
//
//   gmail  … これまで手作業で送っていたのと同じ poyapiyotonemuneko@gmail.com から送る。
//            相手から見て差出人が今までと変わらないので、既に送った24件との連続性がある。
//            無料Gmailの上限は500通/日。
//   resend … サイトの問い合わせフォームと同じ Resend から送る。
//            独自ドメインを差出人にするとき用。gmail.com は差出人にできない。
//
// GMAIL_APP_PASSWORD があれば gmail、無ければ resend を使う。

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";

// site.ts を直接読むので、住所や連絡先の持ち場はサイト側の1ファイルのままにできる。
// Node は .ts の型注釈を落として読めるが、package.json に type が無いと
// 毎回「CommonJS として解釈できない」という体裁の警告を出す。実害は無いので黙らせる。
process.removeAllListeners("warning");
process.on("warning", (w) => {
  if (w.code === "MODULE_TYPELESS_PACKAGE_JSON") return;
  console.warn(w.stack ?? String(w));
});

const site = await import("../../../lib/business/site.ts");

export const CONTACT = site.CONTACT;
export const ORIGIN = site.ORIGIN;
export const BASE_PATH = site.BASE_PATH;

/** tools/mail-blast/ の絶対パス */
export const ROOT = path.resolve(fileURLToPath(new URL("../", import.meta.url)));
/** リポジトリのルート */
export const REPO_ROOT = path.resolve(ROOT, "../..");

/* ------------------------------------------------------------- 環境変数 */

/**
 * .env を読む。
 *
 * Next.js は dev/build のときしか .env.local を読まないので、
 * このツールを単体で動かすぶんは自前で読む。
 * ツール専用の tools/mail-blast/.env を後勝ちにして、
 * 「本番の送信元とは別のアカウントで試す」ができるようにしておく。
 */
export function loadEnv() {
  const files = [
    path.join(REPO_ROOT, ".env.local"),
    path.join(REPO_ROOT, ".env"),
    path.join(ROOT, ".env"),
  ];

  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const text = fs.readFileSync(file, "utf8");
    for (const line of text.split(/\r?\n/)) {
      const m = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
      if (!m) continue;
      const value = m[2].trim().replace(/^["'](.*)["']$/, "$1");
      process.env[m[1]] = value;
    }
  }
}

/* --------------------------------------------------------------- 設定 */

export function sendConfig() {
  // 既定は gmail。手作業で送ってきたのと同じ差出人を保つためにこちらを本線にしている。
  // Resend を使うのは、独自ドメインから送ると決めたときだけ。
  const useResend =
    process.env.MAIL_TRANSPORT === "resend" ||
    (!process.env.GMAIL_APP_PASSWORD && Boolean(process.env.RESEND_API_KEY));
  const transport = process.env.MAIL_TRANSPORT ?? (useResend ? "resend" : "gmail");

  if (transport === "gmail") {
    const user = process.env.GMAIL_USER ?? CONTACT.email;
    return {
      transport,
      user,
      // アプリパスワードは表示に使うと事故るので、値そのものはここから先で触らない
      pass: process.env.GMAIL_APP_PASSWORD ?? "",
      from: process.env.BUSINESS_MAIL_FROM ?? `Japan Trip Picks <${user}>`,
      replyTo: process.env.BUSINESS_MAIL_REPLY_TO ?? "",
      attachments: [],
    };
  }

  return {
    transport: "resend",
    apiKey: process.env.RESEND_API_KEY ?? "",
    from: process.env.BUSINESS_MAIL_FROM ?? "",
    replyTo: process.env.BUSINESS_MAIL_REPLY_TO ?? CONTACT.email,
    attachments: [],
  };
}

/** 設定が足りているか。足りないまま送ろうとして途中で全部失敗するのを防ぐ。 */
export function configProblems(config) {
  if (config.transport === "gmail") {
    const problems = [];
    if (!config.user) problems.push("GMAIL_USER が未設定です");
    if (!config.pass) {
      problems.push(
        "GMAIL_APP_PASSWORD が未設定です（Googleアカウントの2段階認証を有効にしたうえで発行するアプリパスワード）"
      );
    }
    return problems;
  }

  const problems = [];
  if (!config.apiKey) problems.push("RESEND_API_KEY が未設定です");
  if (!config.from) problems.push("BUSINESS_MAIL_FROM が未設定です");
  return problems;
}

/* --------------------------------------------------------- 添付ファイル */

/**
 * 添付ファイルを読み込む。
 *
 * 媒体資料のPDFは全員に同じものを送るので、1度だけ読んでbase64にし、
 * 送信のたびに使い回す。100通ぶんファイルを読み直す意味はない。
 */
export function loadAttachments(paths) {
  return paths.map((file) => {
    if (!fs.existsSync(file)) throw new Error(`添付ファイルが見つかりません: ${file}`);
    const stat = fs.statSync(file);
    return {
      filename: path.basename(file),
      content: fs.readFileSync(file).toString("base64"),
      bytes: stat.size,
      // 「いつの資料を配っているか」を画面に出すために持っておく
      updated: stat.mtime.toISOString().slice(0, 10),
    };
  });
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* --------------------------------------------------------------- 送信 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/**
 * 送信口を作る。
 *
 * to は必ず1件だけ渡す。複数入れると相手に他社のアドレスが見えてしまう。
 * 一括送信を「1対1に見せる」というのは、要はここを守るということ。
 */
export function createSender(config) {
  return config.transport === "gmail" ? gmailSender(config) : resendSender(config);
}

/* -- Gmail (SMTP) -- */

function gmailSender(config) {
  // 1通ごとに繋ぎ直すとGmail側に不審な接続として見えるので、接続は使い回す。
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: config.user, pass: config.pass },
    pool: true,
    maxConnections: 1,
  });

  return {
    label: `Gmail SMTP（${config.user}）`,

    /** 実際には送らずに、ログインできるかだけ確かめる */
    async verify() {
      try {
        await transporter.verify();
        return { ok: true };
      } catch (error) {
        return { ok: false, error: describeGmailError(error) };
      }
    },

    async send({ to, subject, text }) {
      try {
        const info = await transporter.sendMail({
          from: config.from,
          to,
          subject,
          text,
          ...(config.replyTo ? { replyTo: config.replyTo } : {}),
          attachments: config.attachments.map((a) => ({
            filename: a.filename,
            content: a.content,
            encoding: "base64",
          })),
        });
        return { ok: true, id: info.messageId ?? "" };
      } catch (error) {
        return { ok: false, error: describeGmailError(error) };
      }
    },

    close() {
      transporter.close();
    },
  };
}

/** Gmailのエラーは原因が分かりにくいので、よくある2つだけ言葉にしておく */
function describeGmailError(error) {
  const message = error?.response ?? error?.message ?? String(error);
  if (/Username and Password not accepted|BadCredentials/i.test(message)) {
    return `${message}（アプリパスワードが違うか、2段階認証が無効です）`;
  }
  if (/Daily user sending (limit|quota) exceeded|4\.7\.0/i.test(message)) {
    return `${message}（1日の送信上限に達しています。時間をおいて再開してください）`;
  }
  return message;
}

/* -- Resend (HTTP API) -- */

function resendSender(config) {
  async function post(payload, attempt) {
    let res;
    try {
      res = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      if (attempt < 3) {
        await sleep(2000 * attempt);
        return post(payload, attempt + 1);
      }
      return { ok: false, error: `network: ${error.message}` };
    }

    // 送りすぎだけは待ってやり直す。それ以外は諦めてログに残す。
    if (res.status === 429 && attempt < 4) {
      await sleep(3000 * attempt);
      return post(payload, attempt + 1);
    }

    const body = await res.text();
    if (!res.ok) return { ok: false, error: `${res.status} ${body.slice(0, 300)}` };

    let id = "";
    try {
      id = JSON.parse(body).id ?? "";
    } catch {
      /* idが取れなくても送信自体は成功しているので進む */
    }
    return { ok: true, id };
  }

  return {
    label: `Resend（${config.from}）`,

    async verify() {
      // APIキーの当たり判定だけ見る。ドメイン一覧は読み取りだけで副作用がない。
      const res = await fetch("https://api.resend.com/domains", {
        headers: { Authorization: `Bearer ${config.apiKey}` },
      });
      return res.ok ? { ok: true } : { ok: false, error: `${res.status} ${await res.text()}` };
    },

    async send({ to, subject, text }) {
      return post(
        {
          from: config.from,
          to: [to],
          subject,
          text,
          ...(config.replyTo ? { reply_to: config.replyTo } : {}),
          ...(config.attachments.length
            ? {
                attachments: config.attachments.map((a) => ({
                  filename: a.filename,
                  content: a.content,
                })),
              }
            : {}),
        },
        1
      );
    },

    close() {},
  };
}

/* --------------------------------------------------------------- ログ */

const LOG_COLUMNS = ["送信日時", "キャンペーン", "email", "店名", "結果", "id", "エラー"];

export function logPath(campaign) {
  return path.join(ROOT, "out", `sent-${campaign}.csv`);
}

/** ログは後で split(",") で読み直すので、セルの中のカンマと改行は潰しておく */
function flatten(value) {
  return String(value ?? "").replace(/[",\r\n]/g, " ");
}

/**
 * 送信済みのアドレスを読む。
 *
 * 途中で落ちても、もう一度同じコマンドを叩けば残りだけ送れるようにするため。
 * 二重送信は取り消せないので、再開はログを正として判断する。
 */
export function readSentEmails(campaign) {
  const file = logPath(campaign);
  if (!fs.existsSync(file)) return new Set();

  const sent = new Set();
  const text = fs.readFileSync(file, "utf8");
  for (const line of text.split(/\r?\n/).slice(1)) {
    const cells = line.split(",");
    if (cells.length < 5) continue;
    if (cells[4] === "sent") sent.add(cells[2].trim().toLowerCase());
  }
  return sent;
}

export function appendLog(campaign, entry) {
  const file = logPath(campaign);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, "﻿" + LOG_COLUMNS.join(",") + "\r\n", "utf8");
  }
  const row = [
    new Date().toISOString(),
    flatten(campaign),
    flatten(entry.email),
    flatten(entry.company),
    entry.status,
    flatten(entry.id),
    flatten(entry.error),
  ];
  fs.appendFileSync(file, row.join(",") + "\r\n", "utf8");
}
