// CSVの読み書き。
//
// スプレッドシートから書き出したCSVを読むだけなので依存は足さない。
// ただし住所や問い合わせ手段の欄に「,」も改行も普通に入ってくるため、
// split(",") 方式ではまず壊れる。RFC4180 の引用符ルールに沿って読む。

/** 先頭のBOMを落とす。Googleスプレッドシートの書き出しには付いてくる。 */
function stripBom(text) {
  return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
}

/**
 * CSV文字列を行の配列（文字列の配列）にする。
 *
 * 改行は CRLF / LF どちらも受ける。引用符の中の改行はセルの中身として保持する。
 */
export function parseCsv(text) {
  const src = stripBom(text);
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  let i = 0;

  // 空文字のときに空行1つを返してしまわないよう、最後に空セルだけの行は捨てる
  while (i < src.length) {
    const ch = src[i];

    if (quoted) {
      if (ch === '"') {
        if (src[i + 1] === '"') {
          // "" は引用符そのもの
          field += '"';
          i += 2;
          continue;
        }
        quoted = false;
        i += 1;
        continue;
      }
      field += ch;
      i += 1;
      continue;
    }

    if (ch === '"') {
      quoted = true;
      i += 1;
      continue;
    }
    if (ch === ",") {
      row.push(field);
      field = "";
      i += 1;
      continue;
    }
    if (ch === "\r") {
      // CRLF の CR は読み飛ばす
      i += 1;
      continue;
    }
    if (ch === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      i += 1;
      continue;
    }
    field += ch;
    i += 1;
  }

  row.push(field);
  rows.push(row);

  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

/**
 * 1行目をヘッダーとみなしてオブジェクトの配列にする。
 *
 * 列名の前後の空白は落とす。スプレッドシート側で「店名 」のように
 * 空白が紛れていても列名で引けるようにするため。
 */
export function readTable(text) {
  const rows = parseCsv(text);
  if (rows.length === 0) return { header: [], records: [] };

  const header = rows[0].map((h) => h.trim());
  const records = rows.slice(1).map((cells, index) => {
    const record = { __row: index + 2 }; // 元CSVの行番号（1始まり・ヘッダー込み）
    header.forEach((name, col) => {
      record[name] = (cells[col] ?? "").trim();
    });
    return record;
  });

  return { header, records };
}

function escapeCell(value) {
  const text = value == null ? "" : String(value);
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

/**
 * オブジェクトの配列をCSV文字列にする。
 *
 * Excelで開いたときに文字化けしないよう、書き出し側でBOMを付ける。
 * 改行は CRLF。Excelはこちらのほうが素直に開く。
 */
export function writeTable(columns, records) {
  const lines = [columns.map(escapeCell).join(",")];
  for (const record of records) {
    lines.push(columns.map((c) => escapeCell(record[c])).join(","));
  }
  return "﻿" + lines.join("\r\n") + "\r\n";
}
