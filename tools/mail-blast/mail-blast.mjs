#!/usr/bin/env node
// 営業リスト（CSV）から、1件ずつ個別にメールを送るツール。
//
//   node tools/mail-blast/mail-blast.mjs prepare --in <スプレッドシートの書き出し.csv>
//   node tools/mail-blast/mail-blast.mjs preview
//   node tools/mail-blast/mail-blast.mjs send --yes
//
// 宛先は必ず1通1宛先で送る。CC/BCCは使わない。
// 相手から見て「自分だけに届いた1通」に見えることが前提のツールなので、
// まとめて送る仕組みは意図的に持たせていない。
//
// 送信は send を叩いたときだけ実行する。prepare と preview は1通も送らない。

import fs from "node:fs";
import path from "node:path";
import { readTable, writeTable } from "./lib/csv.mjs";
import { splitRecipients } from "./lib/prepare.mjs";
import {
  parseTemplate,
  renderAll,
  checkLegal,
  previewHtml,
  usedColumns,
} from "./lib/render.mjs";
import {
  ROOT,
  loadEnv,
  sendConfig,
  configProblems,
  createSender,
  sleep,
  appendLog,
  readSentEmails,
  logPath,
  loadAttachments,
} from "./lib/sender.mjs";

/* ------------------------------------------------------------ 引数 */

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith("--")) {
      args._.push(token);
      continue;
    }
    const name = token.slice(2);
    const next = argv[i + 1];
    if (next == null || next.startsWith("--")) {
      args[name] = true;
    } else {
      args[name] = next;
      i += 1;
    }
  }
  return args;
}

const rel = (p) => path.relative(process.cwd(), p) || p;
const resolve = (p) => (path.isAbsolute(p) ? p : path.resolve(process.cwd(), p));

const DEFAULTS = {
  recipients: path.join(ROOT, "data", "recipients.csv"),
  manual: path.join(ROOT, "data", "manual-follow.csv"),
  duplicates: path.join(ROOT, "data", "duplicates.csv"),
  done: path.join(ROOT, "data", "already-sent.csv"),
  template: path.join(ROOT, "templates", "default.txt"),
};

function die(message) {
  console.error(`\n✗ ${message}\n`);
  process.exit(1);
}

/* --------------------------------------------------- prepare（リスト整形） */

const PREPARE_COLUMNS = [
  "店名",
  "email",
  "エリア",
  "ジャンル",
  "公式URL",
  "担当者名",
  "日付",
  "予備email",
  "問い合わせ手段",
];

function cmdPrepare(args) {
  const input = args.in ?? args._[0];
  if (!input) {
    die("元CSVを指定してください: --in <ファイル>（スプレッドシートを「.csvで書き出し」したもの）");
  }
  const file = resolve(input);
  if (!fs.existsSync(file)) die(`ファイルが見つかりません: ${file}`);

  const { records } = readTable(fs.readFileSync(file, "utf8"));
  const { sendable, manual, duplicates, done } = splitRecipients(records, {
    includeSent: Boolean(args["include-sent"]),
  });

  const outRecipients = resolve(args.out ?? DEFAULTS.recipients);
  fs.mkdirSync(path.dirname(outRecipients), { recursive: true });
  fs.writeFileSync(outRecipients, writeTable(PREPARE_COLUMNS, sendable), "utf8");

  const outManual = resolve(args.manual ?? DEFAULTS.manual);
  fs.writeFileSync(
    outManual,
    writeTable(
      ["店名", "対応方法", "フォームURL", "TEL", "エリア", "ジャンル", "公式URL", "問い合わせ手段"],
      manual
    ),
    "utf8"
  );

  console.log(`\n読み込み: ${records.length} 行（${rel(file)}）`);
  if (done.length) {
    const outDone = resolve(args.done ?? DEFAULTS.done);
    fs.writeFileSync(
      outDone,
      writeTable(["日付", "店名", "email", "エリア", "問い合わせ手段"], done),
      "utf8"
    );
    console.log(`  日付あり＝送信済み: ${done.length} 件 → 対象から除外（${rel(outDone)}）`);
  }
  console.log(`  メール送信できる  : ${sendable.length} 件 → ${rel(outRecipients)}`);
  console.log(`  フォーム／電話のみ: ${manual.length} 件 → ${rel(outManual)}`);

  if (duplicates.length) {
    const outDup = resolve(args.duplicates ?? DEFAULTS.duplicates);
    fs.writeFileSync(outDup, writeTable(["店名", "email", "重複元"], duplicates), "utf8");
    console.log(`  アドレス重複で除外: ${duplicates.length} 件 → ${rel(outDup)}`);
  }

  console.log(
    `\n次は ${rel(outRecipients)} を開いて、担当者名を足したり送らない先を消したりしてください。`
  );
  console.log("そのあと preview で全通ぶんの文面を確認します。\n");
}

/* ---------------------------------------------------- 共通（読み込み） */

function loadJob(args) {
  const templateFile = resolve(args.template ?? DEFAULTS.template);
  if (!fs.existsSync(templateFile)) die(`テンプレートが見つかりません: ${templateFile}`);

  const csvFile = resolve(args.csv ?? DEFAULTS.recipients);
  if (!fs.existsSync(csvFile)) {
    die(`宛先CSVが見つかりません: ${csvFile}\n  先に prepare を実行してください。`);
  }

  let template;
  try {
    template = parseTemplate(fs.readFileSync(templateFile, "utf8"));
  } catch (error) {
    die(`${rel(templateFile)}: ${error.message}`);
  }

  // テンプレートの雛形に残した「あとで書き換える箇所」の目印。
  // 差出人名が【要編集】のまま100件に届くのがいちばん恥ずかしいので、ここで止める。
  if (/【要編集/.test(template.subject + template.body)) {
    die(`${rel(templateFile)} に【要編集】が残っています。書き換えてください。`);
  }

  const campaign = String(
    args.campaign ?? path.basename(templateFile).replace(/\.[^.]+$/, "")
  ).replace(/[^\w\-一-龠ぁ-んァ-ヶ]/g, "_");

  const { records, header } = readTable(fs.readFileSync(csvFile, "utf8"));
  if (!header.includes("email")) die(`${rel(csvFile)} に email 列がありません`);

  // テンプレートが使っている列がCSVに無ければ、全件差し込み失敗になる。先に気づく。
  const missingColumns = usedColumns(template).filter((c) => !header.includes(c));
  if (missingColumns.length) {
    die(
      `テンプレートが使っている列がCSVにありません: ${missingColumns.join(", ")}\n` +
        `  CSVの列: ${header.join(", ")}`
    );
  }

  const limited = args.limit ? records.slice(0, Number(args.limit)) : records;
  const rendered = renderAll(template, limited);

  return { template, templateFile, csvFile, campaign, rendered };
}

/* ---------------------------------------------------- preview（下見） */

/**
 * 文面ごとの既定の添付ファイル。
 *
 * 添付は毎回同じものなのに、コマンドで手打ちさせると
 *   ・付け忘れる
 *   ・店舗向けに agency 版（価格なし）を付けてしまう
 * という2つの事故が起きる。後者は代理店が上乗せして売れなくなるので致命的。
 * だから「どの文面にどの資料を付けるか」はコード側で固定する。
 */
const MEDIA_KIT_DIR = "C:/Users/miyul/OneDrive/Desktop";
const DEFAULT_ATTACHMENTS = {
  default: {
    file: `${MEDIA_KIT_DIR}/JapanTripPicks_媒体資料_店舗向け_2026-08.pdf`,
    label: "店舗向け（価格あり）",
  },
  agency: {
    file: `${MEDIA_KIT_DIR}/JapanTripPicks_媒体資料_代理店向け_2026-08.pdf`,
    label: "代理店向け（価格なし）",
  },
};

/**
 * PDFより新しいPPTXがあれば、書き出し忘れとみなして止める。
 *
 * 資料の数字を直してPDFにするのを忘れると、古い数字のまま配ってしまう。
 * 送ったあとでは取り返しがつかないので、送信前にここで気づく。
 */
function assertFresh(pdfPath) {
  const pptx = pdfPath.replace(/\.pdf$/i, ".pptx");
  if (!fs.existsSync(pptx) || !fs.existsSync(pdfPath)) return;
  if (fs.statSync(pptx).mtimeMs > fs.statSync(pdfPath).mtimeMs) {
    die(
      `資料のPDFが古いままです。\n` +
        `  ${path.basename(pptx)} のほうが新しく更新されています。\n` +
        `  PowerPointで開いて PDF に書き出し直してから、もう一度実行してください。`
    );
  }
}

/**
 * 添付ファイルを読む。
 *
 * --attach を付ければ上書きでき、--no-attach で資料なしにもできるが、
 * 何も指定しなければ文面に対応した資料が自動で付く。
 */
function readAttachments(args, templateFile) {
  if (args["no-attach"]) return [];

  let files;
  if (args.attach && args.attach !== true) {
    files = String(args.attach)
      .split(",")
      .map((f) => f.trim())
      .filter(Boolean)
      .map(resolve);
  } else {
    const key = path.basename(templateFile ?? "").replace(/\.[^.]+$/, "");
    const preset = DEFAULT_ATTACHMENTS[key];
    if (!preset) {
      die(
        `この文面（${key}）に対応する資料が決まっていません。\n` +
          `  --attach でファイルを指定するか、資料なしなら --no-attach を付けてください。`
      );
    }
    if (!fs.existsSync(preset.file)) {
      die(`資料が見つかりません: ${preset.file}`);
    }
    assertFresh(preset.file);
    files = [preset.file];
  }

  try {
    return loadAttachments(files);
  } catch (error) {
    die(error.message);
  }
}

/** 添付が「いつの資料か」まで出す。古いものを配っていないか目で確かめるため。 */
function describeAttachmentSource(templateFile) {
  const key = path.basename(templateFile ?? "").replace(/\.[^.]+$/, "");
  return DEFAULT_ATTACHMENTS[key]?.label ?? "";
}

function describeAttachments(attachments, templateFile) {
  if (!attachments.length) return "なし";
  const kind = describeAttachmentSource(templateFile);
  return attachments
    .map((a) => {
      const stamp = a.updated ? `・${a.updated}更新` : "";
      return `${a.filename}（${Math.round(a.bytes / 1024)}KB${stamp}）${kind ? ` ← ${kind}` : ""}`;
    })
    .join(", ");
}

function reportLegal(template) {
  const problems = checkLegal(template);
  if (!problems.length) return problems;

  console.log("\n【特定電子メール法の体裁】");
  for (const p of problems) console.log(`  ・${p}`);
  console.log("  広告・宣伝を含むメールには、送信者名・住所・受信拒否の連絡先を書く義務があります。");
  return problems;
}

function cmdPreview(args) {
  const { template, rendered, campaign, csvFile, templateFile } = loadJob(args);

  const ng = rendered.filter((r) => r.errors.length);
  const outFile = path.join(ROOT, "out", `preview-${campaign}.html`);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, previewHtml({ rendered, template, campaign }), "utf8");

  console.log(`\n宛先: ${rel(csvFile)}（${rendered.length} 件）`);
  console.log(`件名: ${template.subject}`);
  console.log(`添付: ${describeAttachments(readAttachments(args, templateFile), templateFile)}`);
  console.log(`\nプレビュー: ${rel(outFile)}`);
  if (ng.length) {
    console.log(`\n要修正 ${ng.length} 件（このままだと send は止まります）:`);
    for (const item of ng.slice(0, 10)) {
      console.log(`  行${item.record.__row} ${item.record.店名}: ${item.errors.join(" / ")}`);
    }
    if (ng.length > 10) console.log(`  ...ほか ${ng.length - 10} 件`);
  }
  reportLegal(template);
  console.log("");
}

/* ------------------------------------------------------- send（送信） */

async function cmdSend(args) {
  loadEnv();
  const config = sendConfig();
  const { template, rendered, campaign, templateFile } = loadJob(args);

  const problems = configProblems(config);
  if (problems.length) {
    die(`${problems.join("\n  ")}\n  tools/mail-blast/.env に書いてください。`);
  }

  config.attachments = readAttachments(args, templateFile);

  // 差し込みに失敗した行が1件でもあれば止める。
  // 「{{店名}} ご担当者さま」が届く事故は、送ってしまうと取り返しがつかない。
  const ng = rendered.filter((r) => r.errors.length);
  if (ng.length && !args["skip-invalid"]) {
    console.error(`\n✗ 差し込みに失敗した行が ${ng.length} 件あります。`);
    for (const item of ng.slice(0, 10)) {
      console.error(`  行${item.record.__row} ${item.record.店名}: ${item.errors.join(" / ")}`);
    }
    console.error("\n  CSVを直すか、その行だけ飛ばすなら --skip-invalid を付けてください。\n");
    process.exit(1);
  }

  const legal = checkLegal(template);
  if (legal.length && !args["skip-legal-check"]) {
    reportLegal(template);
    console.error("\n✗ 本文の体裁を直すか、承知のうえなら --skip-legal-check を付けてください。\n");
    process.exit(1);
  }

  let queue = rendered.filter((r) => !r.errors.length);

  // テスト送信。宛先を自分たちのアドレスに差し替えて、実際に届く姿を確かめる。
  //
  // 本文は全員同じなので、先頭の1通ぶんの文面を、指定したアドレスへ1通ずつ送る。
  // 受信箱によって見え方も迷惑メール判定も変わるので、複数指定できるようにしてある。
  const testAddresses =
    typeof args.test === "string"
      ? args.test.split(",").map((a) => a.trim()).filter(Boolean)
      : [];

  if (testAddresses.length) {
    const sample = queue[0];
    if (!sample) {
      console.log("\n送れる文面がありません（宛先CSVが空か、全部エラーです）。\n");
      return;
    }
    queue = testAddresses.map((address) => ({ ...sample, testAddress: address }));
    console.log(`\n■ テスト送信: ${queue.length} 通（${testAddresses.join(" / ")}）`);
    console.log("　 本番リストには送りません。送信ログにも残しません。");
  } else {
    const alreadySent = readSentEmails(campaign);
    const before = queue.length;
    queue = queue.filter((r) => !alreadySent.has(r.record.email.toLowerCase()));
    if (before !== queue.length) {
      console.log(`\n送信済み ${before - queue.length} 件は飛ばします（${rel(logPath(campaign))}）`);
    }
  }

  // Gmailは短時間に連投すると一時的に送信を止められることがあるので、間隔を広めに取る。
  const interval = Number(args.interval ?? (config.transport === "gmail" ? 4000 : 1200));

  console.log(`\nキャンペーン: ${campaign}`);
  console.log(`送信元      : ${config.from}`);
  console.log(`返信先      : ${config.replyTo || "（送信元と同じ）"}`);
  console.log(`件名        : ${template.subject}`);
  console.log(`添付        : ${describeAttachments(config.attachments, templateFile)}`);
  console.log(`送信数      : ${queue.length} 通（${interval}ms 間隔・1通ずつ個別に送信）`);

  if (queue.length === 0) {
    console.log("\n送る相手がいません。\n");
    return;
  }

  if (!args.yes) {
    console.log("\n実際に送るには --yes を付けてください。（いまは何も送っていません）\n");
    return;
  }

  const sender = createSender(config);
  console.log("");
  let sent = 0;
  let failed = 0;

  for (const [index, item] of queue.entries()) {
    const to = item.testAddress ?? item.record.email;
    const label = `[${index + 1}/${queue.length}] ${item.record.店名} <${to}>`;

    const result = await sender.send({ to, subject: item.subject, text: item.body });

    if (result.ok) {
      sent += 1;
      console.log(`  ✓ ${label}`);
    } else {
      failed += 1;
      console.log(`  ✗ ${label} — ${result.error}`);
    }

    // テスト送信はログに残さない。本番の送信済み判定が汚れる。
    if (!item.testAddress) {
      appendLog(campaign, {
        email: item.record.email,
        company: item.record.店名,
        status: result.ok ? "sent" : "failed",
        id: result.id,
        error: result.error,
      });
    }

    if (index < queue.length - 1) await sleep(interval);
  }

  sender.close();

  console.log(`\n完了: 送信 ${sent} 件 / 失敗 ${failed} 件`);
  if (!testAddresses.length) console.log(`ログ: ${rel(logPath(campaign))}`);
  if (failed) console.log("失敗ぶんは、原因を直してもう一度同じコマンドを叩けば再送されます。");
  console.log("");
}

/* ------------------------------------------------- verify（接続確認） */

/**
 * ログインできるかだけ確かめる。1通も送らない。
 *
 * アプリパスワードの打ち間違いは、送信を始めてから全件失敗して気づくのがいちばん困る。
 */
async function cmdVerify() {
  loadEnv();
  const config = sendConfig();

  const problems = configProblems(config);
  if (problems.length) {
    die(`${problems.join("\n  ")}\n  tools/mail-blast/.env に書いてください。`);
  }

  const sender = createSender(config);
  console.log(`\n接続先: ${sender.label}`);

  const result = await sender.verify();
  sender.close();

  if (result.ok) {
    console.log("✓ ログインできました。送信の準備はできています。（1通も送っていません）\n");
  } else {
    console.error(`✗ ログインできません: ${result.error}\n`);
    process.exit(1);
  }
}

/* ------------------------------------------------------------- 入口 */

const HELP = `
営業リスト一括メール（1通ずつ個別送信）

  prepare  スプレッドシートの書き出しCSVから、送信用リストを作る
             node tools/mail-blast/mail-blast.mjs prepare --in 直営業9月.csv

  preview  全通ぶんの文面をHTMLに書き出して確認する（1通も送らない）
             node tools/mail-blast/mail-blast.mjs preview
             node tools/mail-blast/mail-blast.mjs preview --attach 媒体資料.pdf

  verify   送信アカウントにログインできるか確かめる（1通も送らない）
             node tools/mail-blast/mail-blast.mjs verify

  send     実際に送る
             node tools/mail-blast/mail-blast.mjs send --test 自分@example.com,別の自分@example.com --yes
             node tools/mail-blast/mail-blast.mjs send --yes

主なオプション
  --csv <file>        宛先CSV（既定: data/recipients.csv）
  --template <file>   テンプレート（既定: templates/default.txt）
  --campaign <name>   送信ログの名前（既定: テンプレート名）
  --limit <n>         先頭n件だけ
  --test <addr,addr>  宛先を差し替えて自分たちに送る。カンマ区切りで複数可（ログに残さない）
  --attach <file>     添付ファイルを指定して上書き（既定は文面ごとに自動）
  --no-attach         資料を付けずに送る
  --interval <ms>     送信間隔（既定: Gmail 4000 / Resend 1200）
  --yes               実際に送る。付けないと送信直前で止まる
  --skip-invalid      差し込み失敗の行を飛ばして送る
  --include-sent      prepare で、日付が入った行（対応済み）も対象に含める
`;

const args = parseArgs(process.argv.slice(2));
const command = args._[0];

try {
  if (command === "prepare") cmdPrepare({ ...args, _: args._.slice(1) });
  else if (command === "preview") cmdPreview(args);
  else if (command === "verify") await cmdVerify();
  else if (command === "send") await cmdSend(args);
  else console.log(HELP);
} catch (error) {
  die(error.stack ?? error.message);
}
