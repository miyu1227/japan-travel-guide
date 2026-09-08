import dims from "./photoDims.json";

/**
 * public/ にある写真の実寸（幅・高さ）。scripts/gen-photo-dims.py で生成する。
 *
 * これまで写真は aspect-square の枠に object-cover で流し込んでいたので、
 * 横長・縦長の写真は主役が切れていた。実寸が分かれば、1行の高さを揃えたまま
 * 幅だけ写真ごとに変えられる（枠の縦横比＝写真の縦横比になるので切れない）。
 *
 * 記事ページはサーバコンポーネントなので、この表はクライアントには送られない。
 */
const PHOTO_DIMS = dims as unknown as Record<string, [number, number]>;

/**
 * 写真1枚ぶんのスタイル。
 *
 * 縦横比と、横並びにしたときの幅の配分だけをCSS変数で渡す。実際にどう使うかは
 * .photo-strip 側（globals.css）が決める：スマホは従来どおりの正方形、
 * PCは「高さを揃えて幅を縦横比で配る」＝切り取りゼロの並び。
 * 実寸が分からない写真は正方形にして、従来の見え方に落とす。
 */
export function photoStyle(src: string): React.CSSProperties {
  const d = PHOTO_DIMS[src];
  const ar = d ? `${d[0]} / ${d[1]}` : "1 / 1";
  const grow = d ? d[0] / d[1] : 1;
  return { "--ar": ar, "--grow": grow } as React.CSSProperties;
}
