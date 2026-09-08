// トップの地域フィルタとヘッダーの「地區」メニューで共有する地域の定義。
//
// 記事側（lib/articles.ts の areas）は繁体字のラベルで持っているが、
// URL のハッシュに繁体字を入れると読みにくいので、slug を別に振ってある。
// 例: /#area-tokyo でトップを開くと「東京」で絞り込んだ状態になる。

export type AreaDef = { slug: string; label: string };

export const AREA_DEFS: AreaDef[] = [
  { slug: "tokyo", label: "東京" },
  { slug: "osaka", label: "大阪" },
  { slug: "hyogo", label: "兵庫" },
  { slug: "hokkaido", label: "北海道" },
  { slug: "shikoku", label: "四國" },
  { slug: "other", label: "其他" },
];

export const AREA_LABEL_BY_SLUG: Record<string, string> = Object.fromEntries(
  AREA_DEFS.map((a) => [a.slug, a.label])
);
