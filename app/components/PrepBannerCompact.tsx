import Image from "next/image";
import Link from "next/link";

export default function PrepBannerCompact() {
  return (
    <Link
      href="/#prep"
      className="block bg-gradient-to-br from-white to-amber-50 border border-amber-200/70 rounded-2xl px-4 py-3 mb-8 shadow-sm hover:shadow-md hover:border-amber-300 transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden bg-yellow-50 border border-yellow-100">
          <Image
            src="/poyapiyo.jpg"
            alt="ぽやぴよ"
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="inline-block text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full mb-1">
            ✈️ Travel Tips
          </span>
          <p className="text-sm font-bold text-stone-800 leading-tight">
            日本自由行前，先準備好這些！
          </p>
          <p className="text-xs text-stone-500 leading-snug mt-0.5">
            eSIM、交通票券、機場交通和熱門景點門票，出發前先確認會更安心。
          </p>
        </div>
        <span className="hidden sm:inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-white bg-amber-500 hover:bg-amber-600 px-3 py-2 rounded-full transition-colors">
          查看
          <span>→</span>
        </span>
        <span className="sm:hidden shrink-0 text-amber-500 text-xl">›</span>
      </div>
    </Link>
  );
}
