import Image from "next/image";
import { KLOOK_ESIM_URL } from "@/lib/affiliate";

// ハブページ用の細いバナー。以前は東京の交通票券（内部記事）へ送っていたが、
// 関西・神戸・大阪のハブにも東京の票券が出てしまうため、地域を問わず必要な eSIM の
// 予約ページへ1ホップで送る形にそろえた。
export default function PrepBannerCompact() {
  return (
    <a
      href={KLOOK_ESIM_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl px-4 py-3 mb-8 shadow-md hover:shadow-lg hover:border-pink-300 transition-all overflow-hidden"
    >
      {/* 装飾 */}
      <span className="absolute top-2 right-3 text-lg opacity-50 select-none">🌸</span>

      <div className="relative flex items-center gap-3">
        <div className="relative w-14 h-14 shrink-0">
          <div className="absolute inset-0 bg-white/70 backdrop-blur rounded-2xl border-2 border-white shadow-sm"></div>
          <Image
            src="/poyapiyo-flag.png"
            alt="ぽやぴよ"
            fill
            sizes="56px"
            className="object-contain p-1 relative -rotate-[4deg]"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-pink-700 bg-white/80 backdrop-blur px-2 py-0.5 rounded-full mb-1 shadow-sm">
            📱 Travel Tips
          </span>
          <p className="text-sm font-bold text-stone-800 leading-tight">
            日本上網怎麼解決？
          </p>
          <p className="text-[11px] text-stone-600 leading-snug mt-0.5">
            日本 eSIM 掃 QR code 就能用，落地不用找櫃台。
          </p>
        </div>
        <span className="hidden sm:inline-flex shrink-0 items-center gap-1 text-xs font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 px-3 py-2 rounded-full shadow-sm">
          看方案
          <span>→</span>
        </span>
        <span className="sm:hidden shrink-0 text-pink-500 text-xl font-bold">›</span>
      </div>
    </a>
  );
}
