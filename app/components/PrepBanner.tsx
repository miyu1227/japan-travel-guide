import Image from "next/image";
import Link from "next/link";

export default function PrepBanner() {
  return (
    <section className="my-8">
      <div className="relative bg-gradient-to-br from-amber-50 via-white to-yellow-50 border border-amber-200/80 rounded-3xl p-6 shadow-sm">
        {/* カテゴリラベル */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block text-[10px] font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full tracking-wide">
            ✈️ Travel Tips
          </span>
          <span className="text-[10px] text-stone-400">出發前準備</span>
        </div>

        <div className="flex items-start gap-4">
          {/* ぽやぴよ */}
          <div className="relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden bg-yellow-50 border border-yellow-200">
            <Image
              src="/poyapiyo-flag.png"
              alt="ぽやぴよ"
              fill
              sizes="80px"
              className="object-contain p-1"
            />
          </div>

          {/* 内容 */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-black text-stone-800 leading-tight mb-2">
              日本自由行出發前準備清單
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              第一次來日本自由行嗎？出發前可以先確認 <strong>eSIM</strong>、<strong>東京地鐵票券</strong>、<strong>機場交通</strong>、<strong>住宿區域</strong>和熱門景點門票。把常用資訊先整理好，旅程會更順利。
            </p>
          </div>
        </div>

        {/* ボタン */}
        <Link
          href="/tokyo-subway-ticket"
          className="mt-4 block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-full py-3 shadow-sm hover:shadow transition-all"
        >
          🎒 前往出發前準備清單 →
        </Link>
      </div>
    </section>
  );
}
