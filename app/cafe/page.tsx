import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/cafe";
const OG_IMAGE = "/cafe/gelato-1.jpg";

export const metadata: Metadata = {
  title: "自由之丘咖啡推薦｜東京最值得去的咖啡店指南【2025】",
  description:
    "整理自由之丘3間人氣東京咖啡店，包含Q彈貝果、義式冰淇淋、現做起司披薩。街道安靜又可愛，非常適合散步、拍照和享受東京下午茶。來東京旅遊一定要安排半天來這裡！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "自由之丘咖啡推薦｜東京最值得去的咖啡店指南【2025】",
    description: "自由之丘3間人氣東京咖啡店。貝果・義式冰淇淋・起司披薩。適合散步、拍照、東京下午茶。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "自由之丘咖啡推薦" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "自由之丘咖啡推薦｜東京最值得去的咖啡店",
    description: "貝果・義式冰淇淋・起司披薩。東京咖啡散步必去地區！",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "自由之丘咖啡推薦｜東京最值得去的咖啡店指南【2025】",
  description: "整理自由之丘3間人氣東京咖啡店。貝果・義式冰淇淋・起司披薩。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Organization", name: "Japan Trip Picks" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "咖啡廳推薦", item: PAGE_URL },
  ],
};

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
    intro: "東京人氣貝果專門店，主打口感Q彈紮實的手工貝果。種類豐富，從原味到各種夾餡都有，選擇困難症發作（笑）。",
    reason: "很適合當作在自由之丘散步時的輕食早餐。店內裝潢也很可愛，拍照效果很好✨ 非常推薦喜歡咖啡配輕食的旅客。",
    basicInfo: {
      address: "東京都目黒区自由が丘2-9-4",
      access: "東急東横線・大井町線「自由が丘」駅 徒歩約3分",
      price: "¥300〜¥600",
    },
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
    intro: "來自義大利的正統義式冰淇淋店，口感濃郁綿密，甜度剛剛好，不會過甜。",
    reason: "逛街途中吃一球剛剛好，巧克力口味特別推薦🍫 算是自由之丘東京下午茶散步的必吃甜點之一，情侶或女生旅遊都很適合。",
    basicInfo: {
      address: "東京都目黒区自由が丘周辺",
      access: "「自由が丘」駅 徒歩約5分",
      price: "¥500〜¥900",
    },
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
    intro: "使用店內現做新鮮起司的特色披薩店，起司的濃郁香氣讓人難忘🧀",
    reason: "喜歡起司的人一定會愛上這裡！拍照也很上相，很適合在東京咖啡店巡禮途中加入這間當正餐，CP值很高✨",
    basicInfo: {
      address: "東京都目黒区自由が丘周辺",
      access: "「自由が丘」駅 徒歩約5分",
      price: "¥800〜¥1,500",
    },
    tags: ["🧀 起司控必訪", "🍕 現做披薩", "✨ 新鮮食材"],
    poyaComment: null,
  },
];

const relatedLinks = [
  { href: "/ramen", label: "🍜 東京・大阪拉麵推薦｜4間必吃拉麵", desc: "濃厚魚介系つけ麺から家系まで" },
  { href: "/spot", label: "🌿 東京野餐推薦｜新宿御苑＆代代木公園", desc: "悠閒散步的人氣公園完全指南" },
  { href: "/hakone", label: "🚃 箱根一日遊推薦｜從東京搭浪漫特快出發", desc: "美術館・足湯・神社的完美行程" },
];

export default function JiyugaokaCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

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
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-600 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・自由之丘</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際走訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          自由之丘咖啡推薦｜<br />東京最值得去的咖啡店指南☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2025年</p>

        {/* Why Jiyugaoka */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">為什麼要去自由之丘喝咖啡？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            說到東京咖啡推薦，很多人第一個想到的是澀谷或表參道——但其實<strong>自由之丘</strong>才是真正適合慢慢享受的地方☕
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            這裡街道安靜、充滿歐式氛圍，走幾步就能發現隱藏版的東京咖啡店。不趕行程、不擠人群，非常適合安排半天的悠閒散步。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次實際走訪了3間人氣店，整理成最實用的自由之丘咖啡指南👇
          </p>
        </section>

        {/* H2: 自由之丘咖啡推薦 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">自由之丘咖啡推薦・3間必去</h2>

        {/* Shops */}
        <div className="space-y-8 mb-10">
          {shops.map((shop) => (
            <section key={shop.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              {/* Photos */}
              <div className="grid grid-cols-2 gap-0.5">
                {shop.images.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] bg-stone-100">
                    <Image
                      src={src}
                      alt={`${shop.name} - 自由之丘咖啡`}
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
                {/* Shop title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-pink-400 text-white flex items-center justify-center text-sm font-black shrink-0">
                    {shop.number}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-stone-800 leading-tight">{shop.name}</h3>
                    <p className="text-xs text-stone-400">{shop.subtitle}</p>
                  </div>
                </div>

                {/* 介紹 */}
                <p className="text-sm text-stone-600 leading-relaxed mb-2">{shop.intro}</p>

                {/* 推薦理由 */}
                <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
                  <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{shop.reason}</p>
                </div>

                {/* Tags */}
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

                {/* 基本情報 */}
                <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
                  <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
                  <p className="text-xs text-stone-600">📍 {shop.basicInfo.address}</p>
                  <p className="text-xs text-stone-600">🚃 {shop.basicInfo.access}</p>
                  <p className="text-xs text-stone-600">💴 {shop.basicInfo.price}</p>
                </div>

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

        {/* How to get there */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">怎麼去自由之丘？</h2>
          <div className="space-y-2 text-sm text-stone-600">
            <p>🚃 <strong>從澀谷出發</strong>：東急東横線 約15分鐘</p>
            <p>🚃 <strong>從新宿出發</strong>：轉乘約25〜30分鐘</p>
            <p>🚃 <strong>從品川出發</strong>：東急大井町線 約25分鐘</p>
            <p className="text-xs text-stone-400 mt-2">※ 建議用 Google Map 查詢當日最快路線</p>
          </div>
        </section>

        {/* Travel tips */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">旅遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 建議安排半天，慢慢逛才能感受氛圍</li>
            <li>✅ 平日人少，拍照更方便</li>
            <li>✅ 天氣好的時候最適合，帶相機來✨</li>
            <li>✅ 附近也有很多甜點店，可以一間一間逛</li>
          </ul>
        </section>

        {/* ぽやぴよ總結 */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            自由之丘真的很適合慢慢逛✨ 不只東京咖啡店多，整個氛圍也很歐式舒服。<br />
            如果來東京旅遊，很推薦安排半天來這裡散步＋享受東京下午茶！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「這裡真的很適合約會或拍照！半天散步行程完美✨」</p>
            </div>
          </div>
        </div>

        {/* 延伸閱讀 */}
        <section>
          <h2 className="text-base font-black text-stone-800 mb-3">📚 延伸閱讀</h2>
          <div className="space-y-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between bg-white border border-stone-100 rounded-2xl px-4 py-3 shadow-sm hover:border-yellow-300 transition-colors"
              >
                <div>
                  <p className="text-sm font-bold text-stone-800">{link.label}</p>
                  <p className="text-xs text-stone-400">{link.desc}</p>
                </div>
                <span className="text-stone-300 text-sm">›</span>
              </Link>
            ))}
          </div>
        </section>

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
