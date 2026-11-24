/**
 * 記事に出てくるお店・スポットをまとめた Google マップの共有リストへ案内するカード。
 *
 * リストは旅行サイト用の Google アカウントで作ってある（開いた人には作成者名が見える）。
 * サイトから相手の「保存済み」に直接入れることはできないので、
 * リストを開いて「追蹤／フォロー」してもらう形。
 *
 * リストの中身を変えたら count も直すこと。
 */

type MapList = { url: string; title: string; count: number; areas: string };

export const MAP_LISTS = {
  kansai: {
    url: "https://maps.app.goo.gl/HS8CyfrWmR9MuJhN7",
    title: "關西美食・景點地圖清單",
    count: 27,
    areas: "大阪・神戶・京都・白濱・彥根",
  },
  tokyo: {
    url: "https://maps.app.goo.gl/So1mJaXL7opfiqwi8",
    title: "東京美食・咖啡・景點地圖清單",
    count: 76,
    areas: "澀谷・下北澤・中目黑・銀座・六本木等",
  },
} satisfies Record<string, MapList>;

export type MapListId = keyof typeof MAP_LISTS;

export default function MapListCard({ list, className = "mb-8" }: { list: MapListId; className?: string }) {
  const l: MapList = MAP_LISTS[list];
  return (
    <a
      href={l.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 shadow-sm hover:bg-emerald-100 ${className}`}
    >
      <span className="text-3xl shrink-0" aria-hidden="true">🗺️</span>
      <span className="min-w-0">
        <span className="block text-sm font-black text-emerald-800">一鍵收藏｜{l.title}</span>
        <span className="block text-xs text-stone-600 leading-relaxed mt-0.5">
          本站實地造訪的{l.areas}共{l.count}個地點，打開Google地圖清單按「追蹤」就能全部存起來，旅行時直接導航。
        </span>
      </span>
      <span className="ml-auto shrink-0 text-emerald-700 text-lg" aria-hidden="true">›</span>
    </a>
  );
}
