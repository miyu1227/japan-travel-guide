// 営業リスト（スプレッドシートの書き出し）を、送信できる形に整える。
//
// 元のリストは「問い合わせ手段」の欄に
//   メール info@example.com ／ TEL 03-0000-0000 ／ フォーム https://...
// のように、手段が文章で混ざって入っている。
// ここからメールアドレスを取り出し、
//   - メールが取れた行 → 一括送信の対象
//   - フォーム／電話しかない行 → 手作業リスト
// に振り分ける。フォームしかない相手に送りようはないので、
// 「送れなかった」ではなく「手でやる分」として最初から別ファイルに出す。

const EMAIL_RE = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
const URL_RE = /https?:\/\/[^\s、，／/]*[^\s、，)）]*/g;
const TEL_RE = /(?:TEL|Tel|tel|電話)[\s:：]*([0-9][0-9\-()（） ]{6,})/;

/** 列名のゆらぎを吸収する。スプレッドシート側の見出しを変えられても拾えるように。 */
const ALIASES = {
  company: ["店名", "会社名", "企業名", "店舗名", "宛先", "name"],
  area: ["エリア", "所在地", "地域", "area"],
  genre: ["ジャンル", "業種", "カテゴリ", "genre"],
  url: ["公式URL", "URL", "サイト", "ウェブサイト", "website"],
  contact: ["問い合わせ手段", "問合せ手段", "連絡先", "contact"],
  email: ["email", "Email", "メール", "メールアドレス", "mail"],
  person: ["担当者", "担当者名", "ご担当者", "person"],
  date: ["日付", "date"],
};

function pick(record, key) {
  for (const name of ALIASES[key]) {
    const value = record[name];
    if (value) return value;
  }
  return "";
}

/** 明らかにアドレスではない拾い間違いを弾く */
function isUsableEmail(value) {
  const lower = value.toLowerCase();
  if (lower.endsWith(".png") || lower.endsWith(".jpg") || lower.endsWith(".gif")) return false;
  // example.com などのダミーは送信事故のもとなので落とす
  if (/@example\.(com|org|net)$/.test(lower)) return false;
  return true;
}

export function extractEmails(text) {
  const found = text.match(EMAIL_RE) ?? [];
  const unique = [];
  for (const raw of found) {
    // 末尾に句読点がくっつくことがある
    const value = raw.replace(/[.。、,]+$/, "");
    if (!isUsableEmail(value)) continue;
    if (!unique.some((e) => e.toLowerCase() === value.toLowerCase())) unique.push(value);
  }
  return unique;
}

function extractFormUrl(text) {
  const urls = text.match(URL_RE) ?? [];
  return urls[0] ?? "";
}

function extractTel(text) {
  const m = text.match(TEL_RE);
  return m ? m[1].trim() : "";
}

/**
 * 1行を、送信用のレコードに変換する。
 *
 * email 列があればそれを優先し、無ければ「問い合わせ手段」から拾う。
 * 拾える場所を増やすため、公式URL以外の全列を対象にアドレスを探す。
 */
export function normalizeRecord(record) {
  const company = pick(record, "company");
  const contact = pick(record, "contact");
  const explicit = pick(record, "email");

  const emails = explicit
    ? extractEmails(explicit)
    : extractEmails(contact);

  return {
    row: record.__row,
    日付: pick(record, "date"),
    店名: company,
    エリア: pick(record, "area"),
    ジャンル: pick(record, "genre"),
    公式URL: pick(record, "url"),
    担当者名: pick(record, "person"),
    email: emails[0] ?? "",
    予備email: emails.slice(1).join(" / "),
    問い合わせ手段: contact,
    フォームURL: extractFormUrl(contact),
    TEL: extractTel(contact),
  };
}

/**
 * リスト全体を「送信できる分」と「手作業でやる分」に振り分ける。
 *
 * 同じアドレスが複数行にあるときは最初の1件だけ残す。
 * 同じ相手に同じ内容が2通届くのは、一括送信でいちばんやってはいけない事故なので、
 * ここは黙って通さずに重複として記録に残す。
 */
export function splitRecipients(records, { includeSent = false } = {}) {
  const sendable = [];
  const manual = [];
  const duplicates = [];
  const done = [];
  const seen = new Map();

  for (const raw of records) {
    const record = normalizeRecord(raw);

    if (!record.店名) continue; // 空行や注記の行

    // 日付が入っている行は、手作業でもう送ってある。
    // リストの側が「対応済み」の唯一の記録なので、ここを無視すると同じ相手に2通目が飛ぶ。
    if (record.日付 && !includeSent) {
      done.push(record);
      continue;
    }

    if (!record.email) {
      // フォームのURLが直接書かれていない行もある。
      // その場合は公式サイトの問い合わせページを探しに行くことになるので、公式URLを代わりに入れる。
      const mentionsForm = /フォーム|問い合わせ|問合せ|お問合せ/.test(record.問い合わせ手段);
      const siteUrl = /^https?:\/\//.test(record.公式URL) ? record.公式URL : "";
      manual.push({
        ...record,
        対応方法: record.フォームURL || mentionsForm ? "フォーム" : record.TEL ? "電話" : "手段不明",
        フォームURL: record.フォームURL || (mentionsForm ? siteUrl : ""),
      });
      continue;
    }

    const key = record.email.toLowerCase();
    if (seen.has(key)) {
      duplicates.push({ ...record, 重複元: seen.get(key) });
      continue;
    }
    seen.set(key, record.店名);
    sendable.push(record);
  }

  return { sendable, manual, duplicates, done };
}
