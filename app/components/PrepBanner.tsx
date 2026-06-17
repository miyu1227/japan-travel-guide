import Link from "next/link";

export default function PrepBanner() {
  return (
    <section className="my-8">
      <Link
        href="/#prep"
        className="block bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all"
      >
        <div className="flex items-start gap-3">
          <div className="text-2xl shrink-0 mt-0.5">🎒</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-stone-800 mb-1">日本自由行出發前準備</p>
            <p className="text-xs text-stone-600 leading-relaxed">
              第一次來日本自由行，可以先確認 eSIM、交通票券、機場交通和熱門景點門票。出發前準備好，旅程會更安心。
            </p>
            <p className="mt-2 text-xs font-semibold text-yellow-700 inline-flex items-center gap-1">
              查看出發前準備清單 →
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}
