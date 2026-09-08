from pathlib import Path


review = """<!-- editable-by-ai: true -->

# Codex 内容検証: 作業環境測定士 問題集レビュー 2026-06-02

## 対象

- 対象ファイル: `C:\\Users\\miyul\\Downloads\\作業環境測定士.xlsx`
- 対象資格: 作業環境測定士 第1種・第2種
- 対象シート: ① 労働衛生一般（共通）〜⑨ 放射性物質（第1種）、最終フォーマット、アプリ内容
- バックアップ: `C:\\Users\\miyul\\Downloads\\作業環境測定士.backup.xlsx`
- 内容検証バックアップ: `C:\\Users\\miyul\\Downloads\\作業環境測定士.fact_check_backup.xlsx`

## レビュー方法

- 9ブロック各50問、合計450問について、block / question / a / b / c / d / answer / explanation の整合性を確認。
- 試験範囲は安全衛生技術試験協会の公表問題・JAWEの資格説明・作業環境測定基準に照合。
- 法令・測定基準・管理濃度・個人サンプリング法・電離放射線の線量限度は厚生労働省一次情報を優先。
- 数値計算問題は式と選択肢の整合を確認。
- 最終フォーマットは①〜⑨から再集約し、idを1〜450で振り直した。

## 良い点

- 第2種共通4科目と第1種選択5科目の構成は、試験制度と整合している。
- GHS、CREATE-SIMPLE、A/B/C/D測定、管理区分、各分析法、放射線測定など、公開問題で見られる論点を広く含んでいる。
- answer列は全450問で `a`〜`d` の範囲に収まっており、最終フォーマットも450問に再集約済み。
- アプリ内容シートは文字数制限内で、公式アプリと誤認させない注記も入っている。

## 懸念点

- mid: ②-31「個人サンプリング法について登録を受けようとする作業環境測定機関」の要件は、作業環境測定法施行規則上の登録要件と、第1種測定士の登録区分要件の読み分けが必要。現設問は正答を1つにできるが、「指定作業場の種類ごとに」の表現は受験者にやや迷いを生む可能性がある。
- low: ⑤〜⑨の一部は、捕集材・脱着溶媒・検知管妨害など公式テキスト依存の細目が多い。一次情報の作業環境測定基準に合うものは大きな問題なしだが、教材内表現と完全一致させたい場合は公式テキスト索引で再照合推奨。

## 改善提案

- 自動修正済み: ①-38 WBGT解説に「0.7×自然湿球温度＋0.3×黒球温度」を明記。
- 自動修正済み: ②-33 D測定の選択肢・解説に「濃度が最も高くなると思われる連続した15分間」を明記。
- 最終フォーマットを①〜⑨から再集約し、idを全ブロック横断で1〜450に振り直し。
- 今後の微修正候補: ②-31は過去問風の表現に合わせ、「個人サンプリング法登録を受けた作業環境測定士」と「第1種登録区分」を分離して問うと一意性がさらに上がる。

## 優先度表

| 項目 | 優先度 | 対応状況 |
| --- | --- | --- |
| ②-33 D測定の採取時間表現 | mid | 自動修正済み |
| ①-38 WBGT式の解説補強 | low | 自動修正済み |
| ②-31 登録要件の表現精密化 | mid | 報告のみ |
| ⑤〜⑨の公式テキスト細目照合 | low | 報告のみ |

## 参照した一次情報源

- 公益財団法人 安全衛生技術試験協会 公表試験問題: https://www.exam.or.jp/emkohyo/
- 公益財団法人 安全衛生技術試験協会 第一種作業環境測定士紹介: https://www.exam.or.jp/introduction/h_shokaisakan01/
- 公益社団法人 日本作業環境測定協会 資格取得プロセス: https://www.jawe.or.jp/about/process/
- 公益社団法人 日本作業環境測定協会 作業環境測定の基礎知識: https://www.jawe.or.jp/evaluation/basic-knowledge.html
- 厚生労働省 作業環境測定関係: https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000094161.html
- 厚生労働省 作業環境測定基準: https://www.mhlw.go.jp/web/t_doc?dataId=74087000
- 厚生労働省 作業環境評価基準: https://www.mhlw.go.jp/web/t_doc?dataId=74088000
- 厚生労働省 作業環境測定法施行規則: https://www.mhlw.go.jp/web/t_doc?dataId=74158000
- 厚生労働省 電離放射線障害防止規則: https://www.mhlw.go.jp/web/t_doc?dataId=74101000
- 厚生労働省 職場のあんぜんサイト GHS: https://anzeninfo.mhlw.go.jp/user/anzen/kag/ghs_class.html
- 厚生労働省 化学物質リスクアセスメントQ&A: https://www.mhlw.go.jp/stf/newpage_11389.html

## 総合判定

⚠️ 条件付き合格。重大な正答誤りは検出せず、2件の表現補正を反映済み。②-31のような法令要件の一意性だけ、教材品質向上のため追加調整を推奨。
"""

path = Path(r"C:\Users\miyul\Documents\vault\10_projects\shikaku_taisaku\codex_review_20260602_workenv_fact_check.md")
path.write_text(review, encoding="utf-8", newline="\n")
print(path)
