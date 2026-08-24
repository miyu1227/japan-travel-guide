// 台湾・香港市場のデータ。
//
// ここに置く数値は「公的統計で裏が取れるもの」だけにする。
// 自社の実績（記事数・検索順位・表示回数）は媒体資料側で提示するので、ここには置かない。
//
// 【重要】数値を更新するときは、必ず出典の原典を引き直してから直すこと。
// 訪日統計は毎年更新され、古い値は黙って陳腐化する。
// 出典URLと確認日を SOURCES に必ず残す。

export type SourceId = "jnto2025" | "jta2025";

export const SOURCES: Record<
  SourceId,
  { label: string; url: string; checked: string }
> = {
  jnto2025: {
    label: "日本政府観光局（JNTO）訪日外客数 2025年",
    url: "https://www.jnto.go.jp/statistics/data/_files/20260121_1615-4.pdf",
    checked: "2026-08-24",
  },
  jta2025: {
    label: "観光庁 インバウンド消費動向調査 2025年 年次報告書",
    url: "https://www.mlit.go.jp/kankocho/content/002003329.pdf",
    checked: "2026-08-24",
  },
};

export type MarketStat = {
  /** 大きく出す数値 */
  value: string;
  /** 数値の単位・補足 */
  unit?: string;
  label: string;
  detail: string;
  source: SourceId;
};

/** 市場規模。TOPと台湾・香港市場ページで共用する。 */
export const MARKET_STATS: MarketStat[] = [
  {
    value: "928",
    unit: "万人",
    label: "2025年の訪日客数（台湾＋香港）",
    detail: "台湾 676万人（国・地域別3位）、香港 252万人。訪日客全体は4,268万人。",
    source: "jnto2025",
  },
  {
    value: "1.7",
    unit: "兆円",
    label: "2025年の訪日旅行消費額（台湾＋香港）",
    detail:
      "台湾 1兆2,033億円は中国に次ぐ2位。香港 5,614億円は5位。訪日消費額全体は9兆4,549億円。",
    source: "jta2025",
  },
  {
    value: "9",
    unit: "割前後",
    label: "2回以上の訪日経験がある人の割合",
    detail:
      "台湾 87.9%、香港 90.6%。全国籍・地域の平均は64.9%で、台湾・香港はそれを大きく上回る。",
    source: "jta2025",
  },
];

/** リピーターの深さ。表で出す。 */
export type RepeatRow = {
  market: string;
  again: string;
  tenPlus: string;
  withinYear: string;
};

export const REPEAT_ROWS: RepeatRow[] = [
  { market: "台湾", again: "87.9%", tenPlus: "26.4%", withinYear: "55.7%" },
  { market: "香港", again: "90.6%", tenPlus: "38.4%", withinYear: "65.2%" },
  { market: "全国籍・地域の平均", again: "64.9%", tenPlus: "15.0%", withinYear: "38.7%" },
];

export const REPEAT_SOURCE: SourceId = "jta2025";

/** データから言えること。断定しすぎず、事実と解釈を分けて書く。 */
export type Insight = {
  emoji: string;
  title: string;
  body: string;
  /** この解釈の根拠になっている事実 */
  basis: string;
};

export const INSIGHTS: Insight[] = [
  {
    emoji: "🔁",
    title: "初来日の人より、何度も来ている人が多い市場です",
    body:
      "台湾は10人に約9人、香港も同じく約9人が2回目以降の訪日です。香港は10回以上訪れている人が38.4%と、全体平均15.0%の2倍以上になります。",
    basis: "観光庁 インバウンド消費動向調査 2025年 図表1-5（来訪回数）",
  },
  {
    emoji: "📍",
    title: "何度も来ている人ほど、定番以外の行き先を探します",
    body:
      "一度行った場所にもう一度行く必要はないため、次に行く場所を探すことになります。有名観光地の情報はすでに知られており、まだ知られていない店や街の情報に価値が生まれます。",
    basis: "上記のリピーター比率からの解釈です（当サイトの見解）",
  },
  {
    emoji: "⏱",
    title: "再訪までの間隔が短く、検討が繰り返し発生します",
    body:
      "前回の訪日が「1年以内」の人が台湾で55.7%、香港で65.2%を占めます。全体平均は38.7%です。年に1回以上のペースで「次はどこへ行くか」を考える人が多い市場だといえます。",
    basis: "観光庁 インバウンド消費動向調査 2025年 図表1-6（前回の来訪時期）",
  },
  {
    emoji: "🈶",
    title: "繁体字で情報があるかどうかが、検討の入口になります",
    body:
      "旅行の計画は現地の言葉での検索から始まります。繁体字の情報が存在しない店舗・施設は、知名度に関係なく検討の候補に入りません。逆に、繁体字のページが1枚あるだけで候補に入る場面が生まれます。",
    basis: "検索行動についての当サイトの見解です（統計に基づく断定ではありません）",
  },
];

/** 誇大にならないよう、この市場データで言えないことを明記する。 */
export const MARKET_DISCLAIMER =
  "掲載した統計は市場全体の規模を示すもので、個別の店舗・施設への集客を示すものではありません。当サイトへの掲載によって、来店数・検索順位・売上が伸びることを保証するものではありません。";
