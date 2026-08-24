// 掲載プランの定義。
//
// 現在ご提供しているのは「貴店専用ページ」1プランと、SNS紹介のオプションのみ。
// 金額は媒体資料（資料請求）でのみ提示するため、
// サイトに出すかどうかは lib/business/site.ts の SHOW_PRICES で切り替える。

export type Plan = {
  id: string;
  name: string;
  /** プランの正体 */
  kind: string;
  price: number;
  priceLabel: string;
  taxNote: string;
  summary: string;
  features: string[];
  recommended?: boolean;
  /** 対応するサービスID */
  serviceId: string;
};

export const PLANS: Plan[] = [
  {
    id: "feature",
    name: "貴店専用ページ",
    kind: "記事を1本まるごと制作します",
    price: 10000,
    priceLabel: "10,000円",
    taxNote: "税込・お支払いは初回のみ",
    summary:
      "1店舗ごとに独立したページを作ります。他店と埋もれず、検索から直接お店のページに届きます。",
    features: [
      "貴店専用の記事を1本制作",
      "写真5〜10枚",
      "基本情報（住所・アクセス・営業時間）",
      "紹介文の作成（日本語＋繁体字）",
      "公式サイト・地図へのリンク",
      "修正2回",
      "永久掲載（月額費用・更新料なし）",
    ],
    recommended: true,
    serviceId: "feature",
  },
];

export type PricingOption = {
  id: string;
  name: string;
  priceLabel: string;
  note: string;
  serviceId: string;
};

export const OPTIONS: PricingOption[] = [
  {
    id: "sns",
    name: "SNS紹介",
    priceLabel: "3,000円",
    note: "Instagram・Threads での紹介投稿を追加します。繁体字のキャプションつき。",
    serviceId: "sns",
  },
];

export const CONSULT_ITEMS: PricingOption[] = [
  {
    id: "content",
    name: "繁体字コンテンツ制作",
    priceLabel: "要相談",
    note: "店舗紹介文・Webページ文章・メニュー説明などの繁体字テキスト制作。",
    serviceId: "content",
  },
  {
    id: "inbound",
    name: "台湾・香港向け集客支援",
    priceLabel: "要相談",
    note: "台湾・香港向けの情報発信について、個別にご相談を承ります。",
    serviceId: "inbound",
  },
];

/** 掲載プランに含まれるもの／含まれないものを、誤解が出ないように並べる。 */
export const INCLUDED: string[] = [
  "貴店専用ページの記事制作（日本語＋繁体字）",
  "基本情報（住所・アクセス・営業時間）の掲載",
  "公式サイト・地図へのリンク",
  "公開前のご確認と修正2回",
  "サイト運営期間中の継続掲載（追加費用なし）",
  "記事冒頭への広告表示（景品表示法にもとづく表記）",
];

export const NOT_INCLUDED: string[] = [
  "写真の撮影（お客様よりご提供いただきます）",
  "取材でのご訪問（いただいた写真と情報をもとに制作します）",
  "集客数・検索順位・売上の保証",
  "掲載枠の第三者への譲渡・転売",
];

/** 料金まわりの注意書き。誇大にならないよう事実だけ書く。 */
export const PRICING_NOTES: string[] = [
  "料金は買い切りです。月額費用・更新料はいただきません。",
  "掲載はサイトの運営期間中、継続して掲載されます（永久掲載）。",
  "写真はお客様よりご提供いただきます。当方での撮影・取材でのご訪問は承っておりません。",
  "情報・写真をいただいてから公開まで、約1ヶ月を目安としています（制作状況により前後します）。",
  "掲載による集客効果・検索順位・売上を保証するものではありません。",
  "掲載内容によってはお受けできない場合があります（掲載基準をご確認ください）。",
  "掲載記事には、広告であることが分かる表示を記事の冒頭に入れます（景品表示法にもとづく対応です）。",
];
