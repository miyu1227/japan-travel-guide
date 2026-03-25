import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/shin-okubo";
const OG_IMAGE = "/shin-okubo/sawee-1.jpg";

export const metadata: Metadata = {
  title: "新大久保グルメおすすめ｜韓国料理・カフェ・スイーツ食べ歩き完全ガイド【2025】",
  description:
    "新大久保で実際に食べ歩いた3店舗を紹介。ナッコプセ鍋のサウィ食堂・韓国カフェSHINCHON CAFE・ドバイ餅MUJIGEまで。初めての新大久保グルメ完全ガイド。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "新大久保グルメおすすめ｜韓国料理・カフェ・スイーツ食べ歩き完全ガイド【2025】",
    description: "新大久保で実際に食べ歩いた3店舗。ナッコプセ鍋・韓国カフェ・ドバイ餅スイーツ。初めての新大久保グルメ完全ガイド。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "新大久保グルメ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "新大久保グルメおすすめ｜韓国料理・カフェ・スイーツ食べ歩き",
    description: "ナッコプセ鍋・韓国カフェ・ドバイ餅。新大久保食べ歩き完全ガイド！",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "新大久保グルメおすすめ｜韓国料理・カフェ・スイーツ食べ歩き完全ガイド【2025】",
  description: "新大久保で実際に食べ歩いた3店舗を紹介。ナッコプセ鍋・韓国カフェ・ドバイ餅スイーツ。",
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
    { "@type": "ListItem", position: 2, name: "景點推薦", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 3, name: "新大久保美食", item: PAGE_URL },
  ],
};

const shops = [
  {
    id: "sawee",
    number: 1,
    icon: "🍲",
    name: "サウィ食堂",
    subtitle: "韓國超人氣！章魚蝦內臟鍋（なっこぷせ）",
    url: "https://sawee.jp/",
    urlLabel: "官方網站",
    images: ["/shin-okubo/sawee-1.jpg", "/shin-okubo/sawee-2.jpg", "/shin-okubo/sawee-3.jpg"],
    intro: "韓國超人氣的「ナッコプセ（章魚・蝦・內臟鍋）」，在新大久保也能吃到！辣味湯底用辣椒醬調製，濃郁又夠味，配白飯根本停不下來🌶️",
    reason: "蝦子很大隻、Q彈有彈性，份量超值，2人以上一起去最划算。辣度適中，不太能吃辣的人也可以挑戰。吃到最後加入拉麵麵條當收尾，非常推薦✨",
    basicInfo: {
      address: "東京都新宿区大久保1丁目付近",
      access: "JR山手線「新大久保」駅 徒歩約3分",
      price: "¥1,500〜¥2,500 / 人",
    },
    tags: ["🍲 章魚蝦內臟鍋", "🌶️ 辣味必吃", "👫 2人以上推薦"],
    poyaComment: "辣度剛好，蝦子超Q彈！最後加麵條收尾是精華🍜",
  },
  {
    id: "shinchon",
    number: 2,
    icon: "☕",
    name: "SHINCHON CAFE",
    subtitle: "新大久保最上鏡的韓系咖啡廳",
    url: "https://www.instagram.com/shinchon_cafe/",
    urlLabel: "Instagram",
    images: ["/shin-okubo/shinchon-1.jpg", "/shin-okubo/shinchon-2.jpg", "/shin-okubo/shinchon-3.jpg"],
    intro: "充滿韓國氛圍的人氣咖啡廳，外觀設計可愛，拍照打卡效果超好📸 不管是內用還是外帶都很適合，是新大久保逛街中途休息的人氣選擇。",
    reason: "韓系設計感很強，非常適合喜歡拍照的旅客。晚上的氣氛燈光特別美，很適合情侶或女生旅遊。飲料可以外帶邊逛邊喝，是新大久保食べ歩きの定番コース✨",
    basicInfo: {
      address: "東京都新宿区百人町付近",
      access: "JR山手線「新大久保」駅 徒歩約5分",
      price: "¥600〜¥1,200",
    },
    tags: ["☕ 韓系咖啡廳", "📸 拍照打卡", "🌙 夜晚氛圍佳"],
    poyaComment: "外觀太可愛了！夜晚燈光很美，拍起來超好看📸",
  },
  {
    id: "mujige",
    number: 3,
    icon: "🍡",
    name: "MUJIGE",
    subtitle: "熱門杜拜麻糬甜點",
    url: "https://tabelog.com/tokyo/A1304/A130404/13300014/",
    urlLabel: "食べログ",
    images: ["/shin-okubo/mujige-1.jpg", "/shin-okubo/mujige-2.jpg"],
    intro: "在新大久保引發話題的韓國甜點「杜拜麻糬」，外層Q彈有嚼勁，內餡甜而不膩，相當有特色🍡",
    reason: "外帶方便，很適合邊走邊吃的食べ歩き。甜度適中，即使不太喜歡甜食的人也容易接受。外觀也很可愛，買來拍照或當伴手禮都很合適✨",
    basicInfo: {
      address: "東京都新宿区大久保付近",
      access: "JR山手線「新大久保」駅 徒歩約5分",
      price: "¥400〜¥800",
    },
    tags: ["🍡 杜拜麻糬", "🎁 伴手禮推薦", "🚶 邊走邊吃OK"],
    poyaComment: "Q彈口感超好吃！外帶邊逛邊吃剛剛好🍡",
  },
];

const relatedLinks = [
  { href: "/ramen", label: "🍜 日本拉麵推薦｜東京・大阪必吃3選", desc: "濃厚魚介系つけ麺から家系まで" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京咖啡散步", desc: "貝果・義式冰淇淋・起司披薩3間人氣店" },
  { href: "/spot", label: "🌿 東京野餐推薦｜新宿御苑＆代代木公園", desc: "悠閒散步的人氣公園完全指南" },
];

export default function ShinOkuboPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">新大久保美食</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🇰🇷 韓國美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・新大久保</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際走訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          新大久保美食推薦｜<br />韓國料理・咖啡・甜點食べ歩き完全指南🍲
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2025年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">為什麼要去新大久保？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            新大久保是東京最有韓國感的街區，走幾步就能看到韓國料理店、可愛咖啡廳和各種韓系甜點🇰🇷
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            這次實際走訪，整理了3間特別推薦的店——從熱騰騰的鍋物到打卡咖啡廳、再到人氣甜點，<strong>一個下午就能全部逛完</strong>！
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            初次來新大久保的人，照這篇的順序走就對了👇
          </p>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">新大久保美食推薦・3間必去</h2>

        {/* Shops */}
        <div className="space-y-8 mb-10">
          {shops.map((shop) => (
            <section key={shop.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              {/* Photos */}
              <div className={`grid gap-0.5 ${shop.images.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                {shop.images.map((src, i) => (
                  <div key={i} className="relative aspect-square bg-stone-100">
                    <Image
                      src={src}
                      alt={`${shop.name} - 新大久保美食`}
                      fill
                      sizes="33vw"
                      className="object-cover"
                      {...(shop.number === 1 && i === 0 ? { priority: true } : {})}
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">
                    {shop.number}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-stone-800 leading-tight">{shop.name}</h3>
                    <p className="text-xs text-stone-400">{shop.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-3">{shop.intro}</p>

                <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
                  <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{shop.reason}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {shop.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-xl px-3 py-2 mb-3">
                  <span className="text-lg shrink-0">🐥</span>
                  <p className="text-xs text-stone-600 font-medium">「{shop.poyaComment}」</p>
                </div>

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
          <h2 className="text-base font-black text-stone-800 mb-3">怎麼去新大久保？</h2>
          <div className="space-y-2 text-sm text-stone-600">
            <p>🚃 <strong>從新宿出發</strong>：JR山手線 約2分鐘（一站）</p>
            <p>🚃 <strong>從澀谷出發</strong>：JR山手線 約15分鐘</p>
            <p>🚃 <strong>從池袋出發</strong>：JR山手線 約10分鐘</p>
            <p className="text-xs text-stone-400 mt-2">※ 新大久保駅出口から大久保通り沿いに歩くと主要な店が集まっています</p>
          </div>
        </section>

        {/* Travel tips */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">旅遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 週末人很多，建議平日或早上前往</li>
            <li>✅ 鍋物午餐→咖啡廳→甜點的順序最順暢</li>
            <li>✅ 附近有很多韓國食品超市，買伴手禮也很方便</li>
            <li>✅ 來日本前先準備網路，方便用 Google Map 找店 📱</li>
          </ul>
        </section>

        {/* 總結 */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            新大久保是個可以輕鬆享受韓國美食的好地方✨ 鍋物・咖啡廳・甜點組合在一起，一個下午就能玩得很充實！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「新大久保一個下午就能玩很滿！韓國氛圍超棒🇰🇷」</p>
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
