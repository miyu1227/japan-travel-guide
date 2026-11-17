import Image from "next/image";
import Link from "next/link";

/**
 * 記事末尾の筆者欄。
 * sponsored（店舗から対価をいただいて作ったPR記事）のときは、
 * 「實際造訪」「親自拍攝」を言わない文面に切り替える。
 * 行っていない店・自分で撮っていない写真で「実際に行った」と書くと、
 * 景品表示法（ステマ規制）と優良誤認の両方で問題になるため。
 */
export default function AuthorCard({ sponsored = false }: { sponsored?: boolean }) {
  return (
    <section className="bg-white rounded-3xl border-2 border-yellow-200 shadow-sm p-5 mb-8">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-20 h-20 shrink-0 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl border border-yellow-100 p-1">
          <Image
            src="/poyapiyo-flag.png"
            alt="ぽやぴよ"
            fill
            sizes="80px"
            className="object-contain p-1"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <p className="text-xs font-bold text-yellow-700 bg-yellow-100 border border-yellow-200 px-2 py-0.5 rounded-full">✍️ 作者</p>
            <p className="text-xs text-stone-400">Japan Trip Picks</p>
          </div>
          <h3 className="text-base font-black text-stone-800 mb-1">ぽやぴよ 🐥</h3>
          {sponsored ? (
            <p className="text-xs text-stone-600 leading-relaxed">
              東京在住的日本人部落客。本篇是店家委託製作的廣告（PR）內容，依店家提供的資訊與照片，用日本人視角＋繁體中文整理給台灣・香港的旅客。
            </p>
          ) : (
            <p className="text-xs text-stone-600 leading-relaxed">
              東京在住的日本人部落客。喜歡旅行與美食，只介紹自己實際造訪過的地方，用日本人視角＋繁體中文分享給台灣・香港的旅客。所有文章都是根據親自拍攝的照片與真實感想撰寫📸
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="bg-amber-50 border border-yellow-100 rounded-xl p-3">
          <p className="text-[10px] text-stone-500 mb-0.5">🗾 據點</p>
          <p className="text-xs font-bold text-stone-700">東京</p>
        </div>
        <div className="bg-amber-50 border border-yellow-100 rounded-xl p-3">
          <p className="text-[10px] text-stone-500 mb-0.5">✈️ 擅長地區</p>
          <p className="text-xs font-bold text-stone-700">關東・關西・北海道</p>
        </div>
      </div>

      <div className="bg-stone-50 border border-stone-100 rounded-xl p-3 mb-3">
        <p className="text-[10px] font-bold text-stone-500 mb-1">📝 執筆方針</p>
        {sponsored ? (
          <ul className="text-xs text-stone-600 space-y-1">
            <li>📢 本篇為店家付費委託的廣告內容（PR）</li>
            <li>📷 照片由店家提供</li>
            <li>📝 內容依店家提供的資訊整理，並經店家確認</li>
            <li>✅ 資訊持續更新・出發前建議確認官方網站</li>
          </ul>
        ) : (
          <ul className="text-xs text-stone-600 space-y-1">
            <li>✅ 只介紹實際造訪過的地方</li>
            <li>✅ 照片全部本人拍攝</li>
            <li>✅ 以台灣・香港旅客視角整理資訊</li>
            <li>✅ 資訊持續更新・出發前建議確認官方網站</li>
          </ul>
        )}
      </div>

      <div className="flex gap-2">
        <Link href="/about" className="flex-1 text-center text-xs font-bold text-stone-700 bg-white border border-stone-200 rounded-full py-2 hover:bg-stone-50 transition-colors">
          👤 關於作者
        </Link>
        <Link href="/contact" className="flex-1 text-center text-xs font-bold text-stone-700 bg-white border border-stone-200 rounded-full py-2 hover:bg-stone-50 transition-colors">
          ✉️ 聯絡我們
        </Link>
      </div>
    </section>
  );
}
