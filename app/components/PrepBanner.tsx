import Image from "next/image";
import Link from "next/link";

export default function PrepBanner() {
  return (
    <section className="my-8">
      <div className="relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl p-5 shadow-md overflow-hidden">
        {/* 装飾 */}
        <span className="absolute top-3 right-3 text-2xl opacity-50 select-none">🌸</span>
        <span className="absolute bottom-4 left-4 text-base opacity-40 select-none">✨</span>

        {/* ラベル行 */}
        <div className="relative flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full tracking-wide shadow-sm">
            ✈️ Travel Tips
          </span>
          <span className="text-[10px] text-stone-500 bg-white/60 backdrop-blur px-2 py-0.5 rounded-full">出發前準備</span>
        </div>

        <div className="relative flex items-center gap-3 mb-4">
          {/* ぽやぴよ */}
          <div className="relative w-20 h-20 shrink-0">
            <div className="absolute inset-0 bg-white/70 backdrop-blur rounded-2xl border-2 border-white shadow-sm"></div>
            <Image
              src="/poyapiyo-flag.png"
              alt="ぽやぴよ"
              fill
              sizes="80px"
              className="object-contain p-1 relative -rotate-[4deg]"
            />
          </div>

          {/* 内容 */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-black text-stone-800 leading-tight mb-1">
              日本自由行前，先準備好這些！
            </h3>
            <p className="text-xs text-stone-700 leading-relaxed">
              eSIM、交通票券、機場交通與熱門景點門票，出發前先確認好，旅程會更安心。第一次來日本的旅人，也可以先從 <strong>Travel Prep</strong> 開始查看。
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/japan-esim"
          className="relative block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 hover:from-pink-500 hover:via-rose-500 hover:to-orange-500 rounded-full py-3 shadow-md hover:shadow-lg transition-all"
        >
          📱 查看日本 eSIM 使用指南 →
        </Link>
        <p className="relative text-[10px] text-stone-500 mt-2 text-center">※ 部分內容含聯盟行銷連結，若透過連結預訂，我們可能會獲得佣金。</p>
      </div>
    </section>
  );
}
