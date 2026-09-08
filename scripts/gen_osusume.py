# -*- coding: utf-8 -*-
# 7〜8月上旬ねらい おすすめ共有用まとめ
import os
import xlsxwriter

# おすすめ（着手順）: 順, 資格名, タイプ, 次の試験, 推し理由, 想定工数, 優先度
osusume = [
    (1, "知的財産管理技能検定 3級", "7月本命", "2026年7月12日",
     "ニッチ3・公式テキストAmazon可・4択化ラク。バランス最強の本命。", "約15h", "A(21)"),
    (2, "世界遺産検定 3級", "7月本命", "2026年7月 公開",
     "趣味層で買い切り単価の耐性◎。写真映えしてストア画像も作りやすい。", "約15h", "A(21)"),
    (3, "食生活アドバイザー 3級", "7月本命", "2026年7月(第1回)",
     "食ジャンルで既存ライン（日本酒等）と相性◎。受験者3万で母数も十分。", "約15h", "A(21)"),
    (4, "第一種衛生管理者", "即出し", "随時(月数回・通年)",
     "2種が既存アプリ→テンプレ横展開で最速。受験者7万・通年需要で土台が堅い。", "約12h", "A(21)"),
    (5, "ビジネス実務法務検定 3級", "安定枠", "随時IBT/CBT(通年)",
     "通年受験で需要が途切れん。法務系で競合も薄め。工数小。", "約15h", "A(21)"),
    (6, "福祉住環境コーディネーター 2級", "安定枠", "随時IBT(通年)",
     "通年×公式テキストAmazon可。福祉・住宅の手堅い母数。", "約15h", "A(21)"),
    (7, "気象予報士", "8月ニッチ", "2026年8月(第2日曜)",
     "ニッチ度5で競合スカスカ。範囲広く工数大だが当たれば独占しやすい。", "約40h", "B(17)"),
]

out_dir = r"C:\Users\miyul\japan-travel-guide\outputs"
os.makedirs(out_dir, exist_ok=True)
path = os.path.join(out_dir, "おすすめアプリ候補_7-8月_共有用.xlsx")
wb = xlsxwriter.Workbook(path)

title_fmt = wb.add_format({"bold": True, "font_size": 15, "font_color": "#1F4E78"})
note_fmt = wb.add_format({"font_size": 10, "font_color": "#555555", "italic": True})
hdr = wb.add_format({"bold": True, "bg_color": "#1F4E78", "font_color": "#FFFFFF",
                     "border": 1, "align": "center", "valign": "vcenter", "text_wrap": True})
cell = wb.add_format({"border": 1, "valign": "vcenter", "text_wrap": True})
cell_c = wb.add_format({"border": 1, "valign": "vcenter", "align": "center"})
rank_fmt = wb.add_format({"border": 1, "valign": "vcenter", "align": "center",
                          "bold": True, "font_size": 13, "bg_color": "#FFD966"})
type_fmt = {
    "7月本命": wb.add_format({"border": 1, "align": "center", "valign": "vcenter", "bold": True, "bg_color": "#A9D08E"}),
    "即出し": wb.add_format({"border": 1, "align": "center", "valign": "vcenter", "bold": True, "bg_color": "#9DC3E6"}),
    "安定枠": wb.add_format({"border": 1, "align": "center", "valign": "vcenter", "bg_color": "#DDEBF7"}),
    "8月ニッチ": wb.add_format({"border": 1, "align": "center", "valign": "vcenter", "bg_color": "#FCE4D6"}),
}

ws = wb.add_worksheet("おすすめ")
ws.hide_gridlines(2)
ws.write(0, 0, "次に作る資格アプリ おすすめ（2026年7月〜8月上旬ねらい）", title_fmt)
ws.write(1, 0, "基準2026年6月初旬 ／ 5軸25点満点で採点 ／ いずれも公式テキストがAmazonで入手可(◎)", note_fmt)

headers = ["おすすめ順", "資格名", "タイプ", "次の試験", "推し理由", "想定工数", "優先度"]
widths = [9, 28, 11, 20, 52, 9, 9]
start = 3
for c, (h, w) in enumerate(zip(headers, widths)):
    ws.set_column(c, c, w)
    ws.write(start, c, h, hdr)

for i, r in enumerate(osusume):
    row = start + 1 + i
    ws.set_row(row, 42)
    ws.write(row, 0, r[0], rank_fmt)
    ws.write(row, 1, r[1], cell)
    ws.write(row, 2, r[2], type_fmt[r[2]])
    ws.write(row, 3, r[3], cell_c)
    ws.write(row, 4, r[4], cell)
    ws.write(row, 5, r[5], cell_c)
    ws.write(row, 6, r[6], cell_c)

# 進め方メモ
m = start + 1 + len(osusume) + 1
ws.write(m, 0, "進め方の目安", wb.add_format({"bold": True, "font_color": "#1F4E78", "font_size": 12}))
plan = [
    "① まず即出しの『第一種衛生管理者』でテンプレ横展開→7月前半に1本リリース",
    "② 7月本命は『知財3級』を軸に。余力で世界遺産3級 or 食生活アドバイザー3級を並走",
    "③ 安定枠（ビジ法3級・福祉住環境2級）は随時受験なのでいつ出してもOK＝端境期の保険",
    "④ 8月は気象予報士をニッチ狙いで仕込み（工数大なので早めに着手）",
    "→ 決まり次第 exam-question-generator で step1（問題作成）へ",
]
for j, t in enumerate(plan):
    ws.write(m + 1 + j, 0, t, wb.add_format({"font_size": 10}))

# シート2: 全候補（参考）
full = [
    ("知的財産管理技能検定 3級","国家・法律","約3万","2026年7月12日(年3回)",3,5,5,5,3,"A"),
    ("世界遺産検定 3級","趣味・教養","約2万","2026年7月 公開試験",3,5,5,5,3,"A"),
    ("食生活アドバイザー 3級","食・健康","約3万","2026年7月(第1回)",3,5,5,5,3,"A"),
    ("第一種衛生管理者","国家・労務","約7万","随時(月数回・通年)",1,5,5,5,5,"A"),
    ("ビジネス実務法務検定 3級","ビジネス法務","約2万","随時IBT/CBT(通年)",3,5,5,5,3,"A"),
    ("福祉住環境コーディネーター 2級","福祉・住宅","約2万","随時IBT(通年)",3,5,5,5,3,"A"),
    ("販売士(リテールマーケティング) 3級","流通・販売","約2万","随時ネット試験(通年)",3,5,5,5,3,"A"),
    ("秘書検定 2級","ビジネス","約13万","随時CBT(通年)",1,5,5,5,5,"A"),
    ("危険物取扱者 乙4","国家・安全","約20万","随時(都道府県で毎月)",1,5,5,5,5,"A"),
    ("ITパスポート","国家・IT","約28万","随時CBT(通年)",1,5,5,5,5,"A"),
    ("QC検定 3級","品質管理・製造","約5万","2026年9月(年2回)",3,3,5,5,5,"A"),
    ("統計検定 3級","データ・IT","約1万","随時CBT(通年)",3,5,3,5,3,"A"),
    ("知的財産管理技能検定 2級","国家・法律","約2万","2026年7月12日(年3回)",3,5,5,3,3,"A"),
    ("ビジネス実務法務検定 2級","ビジネス法務","約1万","随時IBT/CBT(通年)",3,5,5,3,3,"A"),
    ("気象予報士","国家・専門","約1万","2026年8月(第2日曜)",5,5,3,1,3,"B"),
    ("基本情報技術者","国家・IT","約20万","随時CBT(通年)",1,5,3,3,5,"B"),
    ("FP技能士 3級","金融・国家","約30万超","随時CBT(通年)",1,5,3,3,5,"B"),
    ("簿記 3級","会計","約30万","随時ネット試験(通年)",1,5,3,3,5,"B"),
    ("全国通訳案内士","国家・観光","約5千","2026年8月 一次筆記",5,5,3,1,1,"B"),
    ("登録販売者(北海道東北/関西)","医薬・国家","約5万","2026年8月下旬",1,3,3,3,5,"B"),
    ("電験三種(第三種電気主任技術者)","国家・電気","約3万","2026年8月下旬〜9月CBT",3,3,3,1,3,"C"),
]
full.sort(key=lambda x: -(x[4]+x[5]+x[6]+x[7]+x[8]))
ws3 = wb.add_worksheet("全候補(参考)")
ws3.freeze_panes(1, 2)
h2 = ["順位","資格名","カテゴリ","年間受験者数","次の試験","ニッチ","タイミング","AI効率","時間","到達性","合計","優先度"]
w2 = [5,28,13,12,22,7,9,8,7,8,7,7]
for c,(h,w) in enumerate(zip(h2,w2)):
    ws3.set_column(c,c,w); ws3.write(0,c,h,hdr)
pf = {"S":wb.add_format({"border":1,"align":"center","bold":True,"bg_color":"#FFD966"}),
      "A":wb.add_format({"border":1,"align":"center","bold":True,"bg_color":"#A9D08E"}),
      "B":wb.add_format({"border":1,"align":"center","bg_color":"#DDEBF7"}),
      "C":wb.add_format({"border":1,"align":"center","bg_color":"#F2F2F2"})}
for i,x in enumerate(full):
    row=i+1; tot=x[4]+x[5]+x[6]+x[7]+x[8]
    ws3.write(row,0,row,cell_c); ws3.write(row,1,x[0],cell); ws3.write(row,2,x[1],cell_c)
    ws3.write(row,3,x[2],cell_c); ws3.write(row,4,x[3],cell)
    for k in range(5): ws3.write(row,5+k,x[4+k],cell_c)
    ws3.write_formula(row,10,f"=SUM(F{row+1}:J{row+1})",cell_c,tot)
    ws3.write(row,11,x[9],pf[x[9]])
ws3.autofilter(0,0,len(full),len(h2)-1)

wb.close()
print("WROTE", path)
