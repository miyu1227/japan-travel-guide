# -*- coding: utf-8 -*-
# 基準: 2026年6月初旬 / 対象ウィンドウ: 2026年7月〜8月上旬の試験（＋随時CBTで通年受験可）
import os
import xlsxwriter

# 列: 資格名, カテゴリ, 年間受験者数, 次の試験, 有料Rank, 無料Rank,
#     ニッチ度, タイミング需要, AI効率化, 時間コスト, 月5万到達性,
#     参考書入手(◎/△/?), 参考書詳細
rows = [
    ("知的財産管理技能検定 3級", "国家・法律", "約3万", "2026年7月12日(年3回)", "圏外", "圏外",
     3, 5, 5, 5, 3, "◎", "公式テキスト（アップロード社）Amazon"),
    ("世界遺産検定 3級", "趣味・教養", "約2万", "2026年7月 公開試験", "圏外", "圏外",
     3, 5, 5, 5, 3, "◎", "公式基礎ガイド・過去問（マイナビ）Amazon"),
    ("食生活アドバイザー 3級", "食・健康", "約3万", "2026年7月(第1回)", "圏外", "圏外",
     3, 5, 5, 5, 3, "◎", "公式テキスト＆問題集 Amazon"),
    ("第一種衛生管理者", "国家・労務", "約7万", "随時(月数回・通年)", "圏外", "圏外",
     1, 5, 5, 5, 5, "◎", "市販問題集多数 Amazon。2種は既存アプリあり横展開"),
    ("ビジネス実務法務検定 3級", "ビジネス法務", "約2万", "随時IBT/CBT(通年)", "圏外", "圏外",
     3, 5, 5, 5, 3, "◎", "東商公式テキスト・問題集 Amazon"),
    ("福祉住環境コーディネーター 2級", "福祉・住宅", "約2万", "随時IBT(通年)", "圏外", "圏外",
     3, 5, 5, 5, 3, "◎", "東商公式テキスト Amazon"),
    ("販売士(リテールマーケティング) 3級", "流通・販売", "約2万", "随時ネット試験(通年)", "圏外", "圏外",
     3, 5, 5, 5, 3, "◎", "一ツ橋書店ほか市販問題集 Amazon"),
    ("秘書検定 2級", "ビジネス", "約13万", "随時CBT(通年)", "圏外", "圏外",
     1, 5, 5, 5, 5, "◎", "早稲田教育出版『実問題集』Amazon。競合多"),
    ("危険物取扱者 乙4", "国家・安全", "約20万", "随時(都道府県で毎月)", "圏外", "圏外",
     1, 5, 5, 5, 5, "◎", "市販問題集多数 Amazon。競合超多"),
    ("ITパスポート", "国家・IT", "約28万", "随時CBT(通年)", "圏外", "圏外",
     1, 5, 5, 5, 5, "◎", "市販多数 Amazon。競合超多"),
    ("QC検定 3級", "品質管理・製造", "約5万", "2026年9月(年2回・要早仕込)", "圏外", "圏外",
     3, 3, 5, 5, 5, "◎", "『過去問で学ぶQC検定3級』日科技連 Amazon"),
    ("統計検定 3級", "データ・IT", "約1万", "随時CBT(通年)", "圏外", "圏外",
     3, 5, 3, 5, 3, "◎", "公式問題集（実務教育出版）Amazon"),
    ("知的財産管理技能検定 2級", "国家・法律", "約2万", "2026年7月12日(年3回)", "圏外", "圏外",
     3, 5, 5, 3, 3, "◎", "公式テキスト（アップロード社）Amazon"),
    ("ビジネス実務法務検定 2級", "ビジネス法務", "約1万", "随時IBT/CBT(通年)", "圏外", "圏外",
     3, 5, 5, 3, 3, "◎", "東商公式テキスト Amazon"),
    ("気象予報士", "国家・専門", "約1万", "2026年8月(第2日曜)", "圏外", "圏外",
     5, 5, 3, 1, 3, "◎", "らくらく突破シリーズ等 市販多数 Amazon。難関で工数大"),
    ("基本情報技術者", "国家・IT", "約20万", "随時CBT(通年)", "圏外", "圏外",
     1, 5, 3, 3, 5, "◎", "市販多数 Amazon。競合超多"),
    ("FP技能士 3級", "金融・国家", "約30万超", "随時CBT(通年)", "圏外", "圏外",
     1, 5, 3, 3, 5, "◎", "市販多数 Amazon。競合超多"),
    ("簿記 3級", "会計", "約30万", "随時ネット試験(通年)", "圏外", "圏外",
     1, 5, 3, 3, 5, "◎", "市販多数 Amazon。競合超多"),
    ("全国通訳案内士", "国家・観光", "約5千", "2026年8月 一次筆記", "圏外", "圏外",
     5, 5, 3, 1, 1, "◎", "公式・市販テキスト Amazon。範囲広く工数大"),
    ("登録販売者(北海道・東北/関西)", "医薬・国家", "約5万", "2026年8月下旬(ブロック別)", "圏外", "圏外",
     1, 3, 3, 3, 5, "◎", "市販テキスト Amazon。競合多"),
    ("電験三種(第三種電気主任技術者)", "国家・電気", "約3万", "2026年8月下旬〜9月CBT(上期)", "圏外", "圏外",
     3, 3, 3, 1, 3, "◎", "みんなが欲しかった等 市販多数 Amazon。難関"),
]

def priority(total, book):
    if total >= 22:
        p = "S"
    elif total >= 19:
        p = "A"
    elif total >= 15:
        p = "B"
    else:
        p = "C"
    if book == "△":
        p = {"S": "A", "A": "B", "B": "C", "C": "C"}[p]
    return p

book_rank = {"◎": 0, "?": 1, "△": 2}
enriched = []
for r in rows:
    total = r[6] + r[7] + r[8] + r[9] + r[10]
    enriched.append((r, total, priority(total, r[11])))

# 合計降順 → 同点なら ◎>?>△ 昇順
enriched.sort(key=lambda e: (-e[1], book_rank[e[0][11]]))

out_dir = r"C:\Users\miyul\japan-travel-guide\outputs"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, "アプリ候補リスト_20260603_7-8月版.xlsx")
wb = xlsxwriter.Workbook(path)

hdr = wb.add_format({"bold": True, "bg_color": "#1F4E78", "font_color": "#FFFFFF",
                     "border": 1, "align": "center", "valign": "vcenter", "text_wrap": True})
cell = wb.add_format({"border": 1, "valign": "vcenter", "text_wrap": True})
cell_c = wb.add_format({"border": 1, "valign": "vcenter", "align": "center"})
num_c = wb.add_format({"border": 1, "valign": "vcenter", "align": "center"})
green = wb.add_format({"border": 1, "align": "center", "valign": "vcenter",
                       "bg_color": "#C6EFCE", "font_color": "#006100", "bold": True})
red = wb.add_format({"border": 1, "align": "center", "valign": "vcenter",
                     "bg_color": "#FFC7CE", "font_color": "#9C0006", "bold": True})
yellow = wb.add_format({"border": 1, "align": "center", "valign": "vcenter",
                        "bg_color": "#FFEB9C", "font_color": "#9C6500", "bold": True})
pri_fmt = {
    "S": wb.add_format({"border": 1, "align": "center", "valign": "vcenter", "bold": True, "bg_color": "#FFD966"}),
    "A": wb.add_format({"border": 1, "align": "center", "valign": "vcenter", "bold": True, "bg_color": "#A9D08E"}),
    "B": wb.add_format({"border": 1, "align": "center", "valign": "vcenter", "bg_color": "#DDEBF7"}),
    "C": wb.add_format({"border": 1, "align": "center", "valign": "vcenter", "bg_color": "#F2F2F2"}),
}

ws = wb.add_worksheet("候補リスト")
ws.freeze_panes(1, 2)
headers = ["順位", "資格名", "カテゴリ", "年間受験者数", "次の試験", "有料Rank", "無料Rank",
           "ニッチ度", "タイミング需要", "AI効率化", "時間コスト", "月5万到達性",
           "合計", "優先度", "参考書入手", "参考書詳細"]
widths = [5, 28, 13, 12, 24, 8, 8, 8, 12, 9, 9, 11, 7, 7, 9, 42]
for c, (h, w) in enumerate(zip(headers, widths)):
    ws.set_column(c, c, w)
    ws.write(0, c, h, hdr)

book_fmt = {"◎": green, "△": red, "?": yellow}
for i, (r, total, pri) in enumerate(enriched):
    row = i + 1
    name, cat, takers, nexte, paid, free, niche, timing, ai, time, reach, book, detail = r
    ws.write(row, 0, row, num_c)
    ws.write(row, 1, name, cell)
    ws.write(row, 2, cat, cell_c)
    ws.write(row, 3, takers, cell_c)
    ws.write(row, 4, nexte, cell)
    ws.write(row, 5, paid, cell_c)
    ws.write(row, 6, free, cell_c)
    ws.write(row, 7, niche, num_c)
    ws.write(row, 8, timing, num_c)
    ws.write(row, 9, ai, num_c)
    ws.write(row, 10, time, num_c)
    ws.write(row, 11, reach, num_c)
    ws.write_formula(row, 12, f"=SUM(H{row+1}:L{row+1})", num_c, total)
    ws.write(row, 13, pri, pri_fmt[pri])
    ws.write(row, 14, book, book_fmt[book])
    ws.write(row, 15, detail, cell)

ws.autofilter(0, 0, len(enriched), len(headers) - 1)

ws2 = wb.add_worksheet("採点基準")
ws2.set_column(0, 0, 16)
ws2.set_column(1, 3, 30)
crit_hdr = ["観点", "5点", "3点", "1点"]
for c, h in enumerate(crit_hdr):
    ws2.write(0, c, h, hdr)
criteria = [
    ("ニッチ度", "競合3社以下・企業ノータッチ", "個人プレイヤー中心", "企業がガチ参入"),
    ("タイミング需要", "来月・再来月試験 or 毎月 or 随時CBT", "3〜5ヶ月後 or 年4回", "6ヶ月以上先 or 年1回"),
    ("AI効率化余地", "4択化容易", "半自動", "手作業"),
    ("時間コスト", "20時間以内", "20〜60時間", "60時間超"),
    ("月5万到達性", "受験者多×単価OK", "不確実", "厳しい"),
]
for rr, row in enumerate(criteria, start=1):
    for c, v in enumerate(row):
        ws2.write(rr, c, v, cell)
ws2.write(7, 0, "対象窓", hdr)
ws2.write(7, 1, "2026年7月〜8月上旬の試験＋随時CBT(通年受験可)を timing=5 として再採点", cell)
ws2.write(8, 0, "優先度", hdr)
ws2.write(8, 1, "S=22点以上 / A=19-21 / B=15-18 / C=14以下。△資格は1段階ダウン", cell)
ws2.write(9, 0, "参考書入手", hdr)
ws2.write(9, 1, "◎=Amazon等で誰でも買える(緑) / △=協会・受講者限定で外部作成困難(赤) / ?=要確認(黄)", cell)

wb.close()
print("WROTE", path)
print("ROWS", len(enriched))
for i, (r, total, pri) in enumerate(enriched[:8]):
    print(i+1, r[0], total, pri, r[3])
