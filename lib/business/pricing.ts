// 料金プランの定義。金額・内容の変更はこのファイルだけで完結する。
// TOPの料金セクションと料金ページが同じ定義を参照する。

export type Plan = {
  id: string;
  name: string;
  /** プランの正体（スポット掲載 / 特集記事掲載） */
  kind: string;
  price: number;
  priceLabel: string;
  taxNote: string;
  summary: string;
  features: string[];
  /** 「おすすめ」バッジを出すか */
  recommended?: boolean;
  /** 対応するサービスID */
  serviceId: string;
};

export const PLANS: Plan[] = [
  {
    id: "light",
    name: "ライトプラン",
    kind: "スポット掲載",
    price: 5000,
    priceLabel: "5,000円",
    taxNote: "税込・買い切り",
    summary: "まずは小さく試したい方へ。既存フォーマットへの掲載です。",
    features: [
      "既存フォーマットに掲載",
      "写真3〜5枚",
      "基本情報掲載",
      "日本語＋繁体字の紹介文",
      "修正1回",
    ],
    serviceId: "spot",
  },
  {
    id: "standard",
    name: "スタンダードプラン",
    kind: "特集記事掲載",
    price: 10000,
    priceLabel: "10,000円",
    taxNote: "税込・買い切り",
    summary: "1記事まるごとを使って、しっかり紹介したい方へ。",
    features: [
      "貴店専用の記事を1本制作",
      "写真5〜10枚",
      "基本情報掲載",
      "日本語＋繁体字の記事本文",
      "修正2回",
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
    priceLabel: "+3,000円",
    note: "Instagram・Threads での紹介投稿を追加します。",
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

/** 料金表の比較行。プランを増やしたらここに1行足す。 */
export type ComparisonRow = { label: string; values: Record<string, string> };

export const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "料金（税込）", values: { light: "5,000円", standard: "10,000円" } },
  { label: "掲載の形", values: { light: "既存フォーマット内", standard: "専用記事1本" } },
  { label: "写真の枚数", values: { light: "3〜5枚", standard: "5〜10枚" } },
  { label: "基本情報の掲載", values: { light: "あり", standard: "あり" } },
  { label: "日本語＋繁体字", values: { light: "紹介文", standard: "記事本文" } },
  { label: "修正回数", values: { light: "1回", standard: "2回" } },
  { label: "掲載期間", values: { light: "サイト運営中は掲載継続", standard: "サイト運営中は掲載継続" } },
  { label: "月額・更新料", values: { light: "なし", standard: "なし" } },
];

/** 料金まわりの注意書き。誇大にならないよう事実だけ書く。 */
export const PRICING_NOTES: string[] = [
  "料金は買い切りです。月額費用・更新料はいただきません。",
  "掲載はサイトの運営期間中、継続して掲載されます（永久掲載）。",
  "写真はお客様よりご提供いただきます。当方での撮影は承っておりません。",
  "掲載による集客効果・検索順位・売上を保証するものではありません。",
  "掲載内容によってはお受けできない場合があります（掲載基準をご確認ください）。",
];
