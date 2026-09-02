// テンプレートに1件ずつ差し込んで、送る文面を組み立てる。
//
// 一括送信でいちばん怖いのは「{{店名}} ご担当者さま」がそのまま届くこと。
// 差し込みに失敗した行は送信前に必ず止める。警告にはしない。

import { CONTACT } from "./sender.mjs";

/** {{列名}} と {{列名|既定値}} の両方を受ける */
const PLACEHOLDER_RE = /\{\{\s*([^}|]+?)\s*(?:\|\s*([^}]*?)\s*)?\}\}/g;

/**
 * テンプレートファイルの中身を件名と本文に分ける。
 *
 * 1行目が `Subject:` で始まり、空行をはさんで本文が続く形式。
 * メールと同じ並びにしておくと、テンプレートを見ただけで届く姿が分かる。
 */
export function parseTemplate(text) {
  const normalized = text.replace(/\r\n/g, "\n").replace(/^﻿/, "");
  const match = normalized.match(/^Subject:[ \t]*(.*)\n/);
  if (!match) {
    throw new Error("テンプレートの1行目は `Subject: 件名` にしてください");
  }
  const subject = match[1].trim();
  const body = normalized.slice(match[0].length).replace(/^\n+/, "");

  if (!subject) throw new Error("件名が空です");
  if (!body.trim()) throw new Error("本文が空です");

  return { subject, body };
}

/** テンプレートが参照している列名の一覧 */
export function usedColumns(template) {
  const names = new Set();
  for (const source of [template.subject, template.body]) {
    for (const m of source.matchAll(PLACEHOLDER_RE)) names.add(m[1]);
  }
  return [...names];
}

function fill(text, record, missing) {
  return text.replace(PLACEHOLDER_RE, (_, name, fallback) => {
    const value = (record[name] ?? "").toString().trim();
    if (value) return value;
    if (fallback != null) return fallback;
    missing.push(name);
    return `{{${name}}}`;
  });
}

/**
 * 1件ぶんのメールを組み立てる。
 *
 * 件名の改行は必ず潰す。ヘッダーに改行が入るとヘッダーインジェクションになる。
 */
export function renderOne(template, record) {
  const missing = [];
  const subject = fill(template.subject, record, missing).replace(/[\r\n]+/g, " ").trim();
  const body = fill(template.body, record, missing);

  const errors = [];
  if (missing.length) {
    errors.push(`差し込む値がありません: ${[...new Set(missing)].join(", ")}`);
  }
  if (/\{\{|\}\}/.test(subject + body)) {
    errors.push("差し込まれていない {{ }} が残っています");
  }
  if (!record.email) {
    errors.push("メールアドレスがありません");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(record.email)) {
    errors.push(`メールアドレスの形式が不正です: ${record.email}`);
  }

  return { record, subject, body, errors };
}

export function renderAll(template, records) {
  return records.map((r) => renderOne(template, r));
}

/**
 * 特定電子メール法まわりの体裁チェック。
 *
 * 広告・宣伝を含むメールには、送信者の氏名・住所と、
 * 受信拒否の通知先を本文に書く義務がある（特定電子メール法4条）。
 * 100件まとめて出したあとで気づいても直せないので、送る前に見る。
 */
export function checkLegal(template) {
  const problems = [];
  const body = template.body;

  if (!/配信停止|配信を停止|受信拒否|今後のご(案内|連絡)が不要/.test(body)) {
    problems.push("受信拒否の通知先（配信停止の案内）が本文にありません");
  }
  if (!body.includes(CONTACT.email)) {
    problems.push(`問い合わせ先メールアドレス（${CONTACT.email}）が本文にありません`);
  }
  if (!/〒|東京都|都道府県/.test(body)) {
    problems.push("送信者の住所が本文にありません");
  }
  if (!body.includes(CONTACT.operator)) {
    problems.push(`送信者名（${CONTACT.operator}）が本文にありません`);
  }
  return problems;
}

/* --------------------------------------------------------- プレビュー */

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * 送る前に全通ぶんを目で確かめるためのHTML。
 *
 * 100通を1件ずつ端末に流しても読めないので、ファイルに出してブラウザで見る。
 * 差し込みに失敗した件を先頭にまとめる。
 */
export function previewHtml({ rendered, template, campaign }) {
  const failed = rendered.filter((r) => r.errors.length);
  const ok = rendered.filter((r) => !r.errors.length);

  const card = (item, index) => `
    <article class="mail${item.errors.length ? " ng" : ""}">
      <header>
        <span class="no">${index + 1}</span>
        <b>${escapeHtml(item.record.店名)}</b>
        <code>${escapeHtml(item.record.email || "（アドレスなし）")}</code>
      </header>
      ${
        item.errors.length
          ? `<p class="err">${item.errors.map(escapeHtml).join("<br>")}</p>`
          : ""
      }
      <p class="subject">${escapeHtml(item.subject)}</p>
      <pre>${escapeHtml(item.body)}</pre>
    </article>`;

  return `<!doctype html>
<html lang="ja"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>送信プレビュー｜${escapeHtml(campaign)}</title>
<style>
  :root { color-scheme: light dark; --bg:#f6f6f4; --card:#fff; --line:#e2e2dd; --fg:#1b1b19; --muted:#6b6b64; --ng:#b3261e; }
  @media (prefers-color-scheme: dark) {
    :root { --bg:#16161a; --card:#1f1f24; --line:#33333a; --fg:#ececed; --muted:#9a9aa2; --ng:#ff8a80; }
  }
  body { margin:0; padding:24px; background:var(--bg); color:var(--fg);
         font:14px/1.7 system-ui,"Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif; }
  h1 { font-size:18px; margin:0 0 4px; }
  .summary { color:var(--muted); margin:0 0 20px; }
  .mail { background:var(--card); border:1px solid var(--line); border-radius:10px;
          padding:16px 18px; margin:0 0 14px; max-width:860px; }
  .mail.ng { border-color:var(--ng); }
  header { display:flex; gap:10px; align-items:baseline; flex-wrap:wrap; margin-bottom:8px; }
  .no { color:var(--muted); font-variant-numeric:tabular-nums; }
  code { color:var(--muted); font-size:12px; }
  .subject { font-weight:700; margin:0 0 10px; padding-bottom:10px; border-bottom:1px solid var(--line); }
  .err { color:var(--ng); font-weight:700; margin:0 0 10px; }
  pre { margin:0; white-space:pre-wrap; word-break:break-word; font:inherit; }
</style></head><body>
<h1>送信プレビュー｜${escapeHtml(campaign)}</h1>
<p class="summary">全 ${rendered.length} 件（送信可 ${ok.length} 件 / 要修正 ${failed.length} 件）｜件名テンプレート: ${escapeHtml(template.subject)}</p>
${failed.map((item, i) => card(item, i)).join("")}
${ok.map((item, i) => card(item, i)).join("")}
</body></html>`;
}
