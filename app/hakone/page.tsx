import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    id: "yumoto",
    number: null,
    icon: "🚉",
    title: "箱根湯本駅",
    subtitle: "抵達！箱根的入口站",
    images: ["/hakone/yumoto.jpg"],
    desc: [
      "箱根的入口站，周邊有很多伴手禮店和餐廳🛍️",
      "一下車就能感受到溫泉街的氛圍，讓人期待接下來的行程✨",
    ],
    tags: [],
    tip: null,
  },
  {
    id: "glass",
    number: 1,
    icon: "🖼️",
    title: "箱根ガラスの森美術館",
    subtitle: "超夢幻玻璃美術館",
    images: ["/hakone/glass-1.jpg", "/hakone/glass-2.jpg"],
    desc: [
      "整個園區像歐洲庭園，陽光照在玻璃裝置上會閃閃發光，非常漂亮✨",
    ],
    tags: ["📸 很適合拍照", "💑 情侶・女生旅行推薦"],
    tip: null,
  },
  {
    id: "dolce",
    number: 2,
    icon: "🍨",
    title: "Hakone Dolce studio STELLA",
    subtitle: "來箱根一定要吃的甜點",
    images: ["/hakone/dolce-1.jpg", "/hakone/dolce-2.jpg"],
    desc: [
      "口味很多，拍照也很好看🍦",
      "逛街途中吃一個很剛好✨",
    ],
    tags: ["🍦 必吃甜點", "📸 拍照打卡"],
    tip: null,
  },
  {
    id: "hatsuhana",
    number: 3,
    icon: "🍜",
    title: "箱根 はつ花",
    subtitle: "箱根名物・自然薯蕎麥麵",
    images: ["/hakone/hatsuhana.jpg"],
    desc: [
      "箱根很有名的蕎麥麵店，使用自然薯製作，口感很特別，清爽又好吃🍜",
    ],
    tags: ["🥢 午餐推薦", "🌿 清爽好吃"],
    tip: null,
  },
  {
    id: "kappa",
    number: 4,
    icon: "♨️",
    title: "かっぱ天国",
    subtitle: "超推薦的足湯體驗",
    images: ["/hakone/kappa-1.jpg", "/hakone/kappa-2.jpg"],
    desc: [
      "走一整天後泡腳真的很舒服♨️",
    ],
    tags: ["💰 價格便宜", "⏱️ 不用太多時間", "👣 日帰り也很適合"],
    tip: null,
  },
  {
    id: "shrine",
    number: 5,
    icon: "⛩️",
    title: "箱根神社",
    subtitle: "箱根最有名的神社",
    images: ["/hakone/shrine-1.jpg", "/hakone/shrine-2.jpg"],
    desc: [
      "湖上的紅色鳥居非常有名，很多人專程來拍照📸",
      "非常有日本氛圍，是箱根必去景點✨",
    ],
    tags: ["⛩️ 必去景點", "🎌 日本氛圍滿點"],
    tip: null,
  },
];

const itinerary = [
  { icon: "🚃", text: "東京 新宿 → 箱根（浪漫特快 約1.5小時）" },
  { icon: "🚉", text: "箱根湯本駅 到達・散策" },
  { icon: "🖼️", text: "箱根ガラスの森美術館" },
  { icon: "🍨", text: "Dolce studio STELLA で甜點" },
  { icon: "🍜", text: "はつ花 で蕎麥麵午餐" },
  { icon: "♨️", text: "かっぱ天国 で足湯" },
  { icon: "⛩️", text: "箱根神社" },
];

const tips = [
  { emoji: "🌅", text: "建議早一點出發" },
  { emoji: "👟", text: "穿好走的鞋子" },
  { emoji: "📅", text: "週末人會比較多，平日更舒適" },
];

export default function HakonePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 transition-colors text-sm flex items-center gap-1">
            ← 返回
          </Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">景點推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-600 border border-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
            📍 景點
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-4">
          箱根一日遊推薦｜從東京搭浪漫特快出發🚃
        </h1>

        {/* Intro */}
        <div className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-6">
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            如果想從東京來個輕鬆的一日旅行<br />
            箱根是非常熱門的選擇✨
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次分享我實際走過的箱根一日遊行程👇<br />
            從東京搭「浪漫特快」出發，一天也能玩得很充實🌿
          </p>
        </div>

        {/* 浪漫特快 */}
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🚃</span>
            <div>
              <h2 className="font-black text-stone-800 text-base">從東京出發（浪漫特快）</h2>
              <p className="text-xs text-stone-400">新宿 → 箱根湯本</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {["⏱️ 約1.5小時", "💺 座位舒適", "🌄 旅行的最佳開始"].map((t) => (
              <span key={t} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 flex items-center gap-2">
            <span className="text-base shrink-0">💡</span>
            <p className="text-xs text-stone-600">建議提前預約座位</p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((sec) => (
            <section key={sec.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              {/* Photos */}
              <div className={`grid ${sec.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-0.5`}>
                {sec.images.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] bg-stone-100">
                    <Image
                      src={src}
                      alt={sec.title}
                      fill
                      sizes={sec.images.length > 1 ? "50vw" : "100vw"}
                      className="object-cover"
                      {...(i === 0 && sec.id === "yumoto" ? { priority: true } : {})}
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  {sec.number !== null && (
                    <div className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center text-sm font-black shrink-0">
                      {sec.number}
                    </div>
                  )}
                  <div>
                    <h2 className="text-lg font-black text-stone-800">{sec.title}</h2>
                    <p className="text-xs text-stone-400">{sec.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  {sec.desc.map((line, i) => (
                    <p key={i} className="text-sm text-stone-600 leading-relaxed">{line}</p>
                  ))}
                </div>

                {sec.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {sec.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Itinerary */}
        <section className="mt-10 mb-8">
          <h2 className="text-lg font-black text-stone-800 mb-4">🗓️ 行程總結</h2>
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 space-y-3">
            {itinerary.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl shrink-0">{item.icon}</span>
                <span className="text-sm text-stone-700">{item.text}</span>
              </div>
            ))}
            <p className="text-xs text-stone-400 pt-1 border-t border-stone-100">👉 輕鬆又充實的一天！</p>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-stone-800 mb-3">💡 小建議</h2>
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4 space-y-3">
            {tips.map((tip) => (
              <div key={tip.text} className="flex items-center gap-3 text-sm text-stone-600">
                <span className="text-xl shrink-0">{tip.emoji}</span>
                <span>{tip.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* eSIM CTA */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border border-blue-200 p-6 mb-8">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl">📱</span>
            <div>
              <h3 className="font-black text-stone-800 text-base mb-1">旅行小提醒</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                箱根交通比較複雜，建議用 Google Map 查路線📍<br />
                來日本前先準備好網路會更方便！
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-blue-200 px-4 py-3 text-center">
            <p className="text-xs text-stone-400">👉 eSIM 連結即將放上</p>
          </div>
        </section>

        {/* ぽやぴよ */}
        <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
          <div className="text-3xl shrink-0">🐥</div>
          <div>
            <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
            <p className="text-sm text-stone-600">「箱根一日遊真的很充實！泡完足湯再逛神社，完美結束旅程🌿」</p>
          </div>
        </div>

      </article>

      {/* Footer */}
      <footer className="bg-white border-t border-yellow-100 mt-8 py-6 px-4 text-center text-xs text-stone-400">
        <div className="flex justify-center items-center gap-2 mb-2">
          <span className="text-base">🐣</span>
          <span className="font-semibold text-stone-600">Japan Trip Picks</span>
        </div>
        <p>© 2026 Japan Trip Picks</p>
      </footer>
    </div>
  );
}
