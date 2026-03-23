import Image from "next/image";
import Link from "next/link";

const shops = [
  {
    id: "bagel",
    number: 1,
    icon: "🥯",
    name: "HAL'S BAGEL 自由之丘店",
    subtitle: "Q彈有嚼勁的人氣貝果",
    url: "https://www.instagram.com/halsbagel_tokyo/",
    urlLabel: "Instagram",
    images: ["/cafe/bagel-1.jpg", "/cafe/bagel-2.jpg"],
    desc: [
      "這家主打Q彈有嚼勁的貝果🥯",
      "口感很紮實，越嚼越香！",
      "種類很多，選擇困難（笑）",
      "很適合當早餐或輕食✨",
    ],
    tags: ["🥯 必吃貝果", "🌅 早餐推薦", "📸 拍照打卡"],
    poyaComment: "這個真的很好吃！",
  },
  {
    id: "gelato",
    number: 2,
    icon: "🍨",
    name: "GELATERIA VITALI",
    subtitle: "正統義式冰淇淋",
    url: "https://www.vitali.jp/",
    urlLabel: "官方網站",
    images: ["/cafe/gelato-1.jpg", "/cafe/gelato-2.jpg"],
    desc: [
      "正統義式冰淇淋店🍨",
      "口感非常濃郁但不會太甜",
      "特別是巧克力口味很推薦🍫",
    ],
    tags: ["🍦 義式冰淇淋", "🍫 巧克力必點", "💑 情侶推薦"],
    poyaComment: null,
  },
  {
    id: "pizza",
    number: 3,
    icon: "🍕",
    name: "GOOD CHEESE GOOD PIZZA 自由之丘店",
    subtitle: "現做起司披薩",
    url: "https://goodcheesegoodpizza.com/",
    urlLabel: "官方網站",
    images: ["/cafe/pizza-1.jpg", "/cafe/pizza-2.jpg"],
    desc: [
      "使用店內現做起司的披薩🍕",
      "起司非常新鮮又濃郁",
      "喜歡起司的人一定會愛🧀",
    ],
    tags: ["🧀 起司控必訪", "🍕 現做披薩", "✨ 新鮮食材"],
    poyaComment: null,
  },
];

export default function JiyugaokaCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 transition-colors text-sm flex items-center gap-1">
            ← 返回
          </Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">咖啡廳推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2">
          <span className="bg-pink-100 text-pink-600 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">
            ☕ 咖啡廳
          </span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
            📍 東京・自由之丘
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-4">
          自由之丘咖啡店推薦｜<br />東京必去咖啡散步地區☕
        </h1>

        {/* Intro */}
        <div className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            自由之丘是東京非常受歡迎的咖啡區☕<br />
            街道安靜又可愛，很適合散步＋咖啡巡り✨
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次實際去走訪了幾間人氣店，<br />
            整理成一篇推薦給你！
          </p>
        </div>

        {/* Shops */}
        <div className="space-y-6">
          {shops.map((shop) => (
            <section key={shop.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              {/* Photos */}
              <div className="grid grid-cols-2 gap-0.5">
                {shop.images.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] bg-stone-100">
                    <Image
                      src={src}
                      alt={shop.name}
                      fill
                      sizes="50vw"
                      className="object-cover"
                      {...(shop.number === 1 && i === 0 ? { priority: true } : {})}
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-pink-400 text-white flex items-center justify-center text-sm font-black shrink-0">
                    {shop.number}
                  </div>
                  <div>
                    <h2 className="text-base font-black text-stone-800 leading-tight">{shop.name}</h2>
                    <p className="text-xs text-stone-400">{shop.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  {shop.desc.map((line, i) => (
                    <p key={i} className="text-sm text-stone-600 leading-relaxed">{line}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {shop.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>

                {/* ぽやぴよコメント */}
                {shop.poyaComment && (
                  <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-xl px-3 py-2 mb-3">
                    <span className="text-lg shrink-0">🐥</span>
                    <p className="text-xs text-stone-600 font-medium">「{shop.poyaComment}」</p>
                  </div>
                )}

                <a
                  href={shop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
                >
                  🔗 {shop.urlLabel}
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-10 bg-white rounded-3xl border border-yellow-200 shadow-sm p-6">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            自由之丘真的很適合慢慢逛✨<br />
            不只咖啡店多，整個氛圍也很舒服<br />
            如果來東京，很推薦安排半天來這裡散步＋吃美食！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「這裡真的很適合約會或拍照！半天散步行程完美✨」</p>
            </div>
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
