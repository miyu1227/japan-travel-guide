"""直営業スプレッドシートの読み書き。A列「日付」が唯一の対応済みフラグ。"""
import os
import re
from pathlib import Path
from google.oauth2 import service_account
from googleapiclient.discovery import build

SPREADSHEET_ID = "1JEganAsDf6SGTNNEr6JkyDWxU8r9uk1ePxefqrZObXY"
# FORM_BLAST_CAMPAIGN でシートを切り替える。未指定なら従来どおり直営業9月。
CAMPAIGN = os.environ.get("FORM_BLAST_CAMPAIGN", "")
SHEET_NAME, SHEET_GID = {
    "jichitai": ("直営業10月", 1977255076),
}.get(CAMPAIGN, ("直営業9月", 594824381))
SA_KEY = Path(__file__).resolve().parents[1] / "gsc" / "sa_key.json"
SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

# フォームに「営業目的お断り」と明記している先。手動でも自動でも送らない。
NG_STORES = {"うなぎ まるや本店（MARUYA）", "浅草 ちんや（WDI GROUP）",
             "焼肉 陽山道（株式会社ヤンサンド）"}   # フォームに営業目的お断りの明記あり

URL_RE = re.compile(r"https?://[^\s／、）)｜|]+")


def _svc():
    creds = service_account.Credentials.from_service_account_file(str(SA_KEY), scopes=SCOPES)
    return build("sheets", "v4", credentials=creds).spreadsheets()


def read_rows():
    """シート全行を dict のリストで返す。_row は1始まりの実際の行番号。"""
    svc = _svc()
    values = svc.values().get(spreadsheetId=SPREADSHEET_ID, range=f"'{SHEET_NAME}'").execute().get("values", [])
    if not values:
        return [], []
    header = values[0]
    rows = []
    for n, raw in enumerate(values[1:], start=2):
        if not any(c.strip() for c in raw):
            continue
        rec = {header[i]: (raw[i].strip() if i < len(raw) else "") for i in range(len(header))}
        rec["_row"] = n
        rows.append(rec)
    return header, rows


def unsent_form_rows():
    """日付が空欄で、手段がフォームの行だけを返す。NG店は除外して別に返す。"""
    _, rows = read_rows()
    targets, excluded = [], []
    for r in rows:
        if r.get("日付"):
            continue
        if r.get("手段") and "フォーム" not in r["手段"]:
            continue
        if r["店名"] in NG_STORES:
            excluded.append({**r, "_reason": "フォームに営業目的お断りの明記あり"})
            continue
        m = URL_RE.search(r.get("問い合わせ手段", ""))
        r["_form_url"] = m.group(0).rstrip("。、） ") if m else ""
        r["_needs_discovery"] = not r["_form_url"]
        targets.append(r)
    return targets, excluded


def stamp_dates(row_numbers, date_text):
    """指定した行のA列に日付を書き込む。送信が完了確認できた行だけに使う。"""
    if not row_numbers:
        return 0
    svc = _svc()
    body = {
        "valueInputOption": "USER_ENTERED",
        "data": [
            {"range": f"'{SHEET_NAME}'!A{n}", "values": [[date_text]]}
            for n in sorted(row_numbers)
        ],
    }
    svc.values().batchUpdate(spreadsheetId=SPREADSHEET_ID, body=body).execute()
    return len(row_numbers)




def clear_rows(row_numbers):
    """背景色を消して白に戻す。手作業でやれば通る見込みがある行に使う。"""
    if not row_numbers:
        return 0
    svc = _svc()
    requests = [{
        "repeatCell": {
            "range": {"sheetId": SHEET_GID, "startRowIndex": n - 1, "endRowIndex": n,
                      "startColumnIndex": 0, "endColumnIndex": 7},
            "cell": {"userEnteredFormat": {"backgroundColor": {"red": 1, "green": 1, "blue": 1}}},
            "fields": "userEnteredFormat.backgroundColor",
        }
    } for n in sorted(set(row_numbers))]
    svc.batchUpdate(spreadsheetId=SPREADSHEET_ID, body={"requests": requests}).execute()
    return len(requests)


def grey_rows(row_numbers, note_col=None):
    """自動では送れない行に灰色の背景を付ける。日付欄は空のままにする。

    日付を入れてしまうと「送信済み」の意味になるので、色だけで印を付ける。
    """
    if not row_numbers:
        return 0
    svc = _svc()
    requests = [{
        "repeatCell": {
            "range": {"sheetId": SHEET_GID, "startRowIndex": n - 1, "endRowIndex": n,
                      "startColumnIndex": 0, "endColumnIndex": 7},
            "cell": {"userEnteredFormat": {"backgroundColor": {"red": 0.85, "green": 0.85, "blue": 0.85}}},
            "fields": "userEnteredFormat.backgroundColor",
        }
    } for n in sorted(set(row_numbers))]
    svc.batchUpdate(spreadsheetId=SPREADSHEET_ID, body={"requests": requests}).execute()
    return len(requests)
