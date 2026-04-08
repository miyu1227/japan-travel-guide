import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const PAGE_URL = "https://www.japantrippicks.com/shukugawa";
const OG_IMAGE = "/shukugawa/crepe-1.jpg";

export const metadata: Metadata = {
  title: "夙川おすすめカフェ2選｜ガレットランチ＆本格コーヒーで過ごす休日☕",
  description:
    "兵庫・夙川エリアのおすすめカフェ2店を実際に訪問してレポート。本格ガレットランチが楽しめる「クレープリー・ルポ」と、静かに過ごせる「ゆげ焙煎所」。関西でカフェ巡りをするなら夙川が穴場！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "夙川おすすめカフェ2選｜ガレットランチ＆本格コーヒーで過ごす休日☕",
    description: "夙川の人気カフェ2店。本格ガレット「クレープリー・ルポ」＆精品咖啡「ゆげ焙煎所」。関西カフェ巡りの穴場スポット！",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "夙川カフェ・クレープリー・ルポ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "夙川おすすめカフェ2選｜ガレットランチ＆本格コーヒー",
    description: "夙川の人気カフェ。本格ガレット＆精品咖啡。関西カフェ巡り穴場！",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "夙川おすすめカフェ2選｜ガレットランチ＆本格コーヒーで過ごす休日☕",
  description: "兵庫・夙川エリアのおすすめカフェ2店。本格ガレット＆精品咖啡。",
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
    { "@type": "ListItem", position: 2, name: "咖啡廳推薦", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 3, name: "夙川咖啡廳", item: PAGE_URL },
  ],
};

const shops = [
  {
    id: "crepe",
    number: 1,
    icon: "🥞",
    name: "クレープリー・ルポ",
    nameZh: "法式可麗餅專門店",
    subtitle: "本格ガレットランチが楽しめる人気店",
    url: "https://www.hotpepper.jp/strJ001053495/",
    urlLabel: "Hot Pepper",
    images: ["/shukugawa/crepe-1.jpg", "/shukugawa/crepe-2.jpg", "/shukugawa/crepe-3.jpg"],
    desc: "在夙川想吃可麗餅，這間絕對不能錯過🥞 法式風格的外觀和沉穩的店內空間令人印象深刻。午餐點的蕎麥粉可麗餅（galette），口感Q彈又香氣十足，份量也非常滿足！",
    points: [
      "正宗法式鹹可麗餅，午餐份量十足",
      "氛圍沉穩放鬆，適合慢慢享用",
      "約會或女生聚餐都非常推薦",
    ],
    tags: ["🥞 法式可麗餅", "🍽️ 午餐推薦", "💑 約會推薦"],
    poyaComment: "蕎麥粉的香氣真的好迷人！",
  },
  {
    id: "coffee",
    number: 2,
    icon: "☕",
    name: "ゆげ焙煎所 夙川店",
    nameZh: "湯氣烘焙所・精品咖啡",
    subtitle: "静かに過ごせる本格コーヒーカフェ",
    url: "https://yuge-roaster.stores.jp/",
    urlLabel: "官方網站",
    images: ["/shukugawa/coffee-1.jpg", "/shukugawa/coffee-2.jpg"],
    desc: "喜歡咖啡的人一定要來這間「ゆげ焙煎所」☕ 店內設計簡約洗練，非常安靜舒適。提供的咖啡品質很高，一口喝下去香氣立刻蔓延。也可以外帶，很適合在夙川河畔散步時一起享用！",
    points: [
      "一個人也能輕鬆入座，適合獨自作業・閱讀",
      "精品咖啡品質高，香氣豐富",
      "可外帶，搭配夙川散步最完美",
    ],
    tags: ["☕ 精品咖啡", "📚 適合一人", "🚶 外帶散步"],
    poyaComment: "咖啡香氣超棒，靜靜待著就很幸福✨",
  },
];

export default function ShukugawaPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">夙川咖啡廳推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badges */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="bg-pink-100 text-pink-600 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 兵庫・夙川</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">🌸 關西推薦</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-4">
          夙川おすすめカフェ2選｜<br />ゆったり過ごせる人気店☕
        </h1>

        {/* Intro */}
        <div className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            兵庫・夙川エリアは、落ち着いた街並みと自然が魅力のカフェスポット🌿<br />
            春は夙川沿いの桜がとても綺麗で、散歩＋カフェ巡りが最高に気持ちいい！
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            今回は實際に訪れて「また行きたい」と思えたおすすめカフェ2店をご紹介します☕<br />
            ゆっくりランチしたい方・カフェ巡りを楽しみたい方にぴったりです🕊️
          </p>
        </div>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">☕</span> 夙川おすすめカフェ
        </h2>

        {/* Shops */}
        <div className="space-y-6 mb-10">
          {shops.map((shop) => (
            <section key={shop.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              {/* Photos */}
              {shop.images.length === 2 ? (
                <div className="grid grid-cols-2 gap-0.5">
                  {shop.images.map((src, i) => (
                    <div key={i} className="relative aspect-[4/3] bg-stone-100">
                      <Image src={src} alt={shop.name} fill sizes="50vw" className="object-cover" priority={shop.number === 1 && i === 0} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-0.5">
                  {shop.images.map((src, i) => (
                    <div key={i} className="relative aspect-square bg-stone-100">
                      <Image src={src} alt={shop.name} fill sizes="33vw" className="object-cover" priority={shop.number === 1 && i === 0} />
                    </div>
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-pink-400 text-white flex items-center justify-center text-sm font-black shrink-0">
                    {shop.number}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-stone-800 leading-tight">{shop.name}</h3>
                    <p className="text-xs text-stone-400">{shop.nameZh}｜{shop.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-3">{shop.desc}</p>

                <div className="space-y-1.5 mb-3">
                  {shop.points.map((p, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-pink-400 font-bold text-xs mt-0.5 shrink-0">✔</span>
                      <span className="text-xs text-stone-600">{p}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {shop.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>

                {shop.poyaComment && (
                  <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-xl px-3 py-2 mb-3">
                    <span className="text-lg shrink-0">🐥</span>
                    <p className="text-xs text-stone-600 font-medium">「{shop.poyaComment}」</p>
                  </div>
                )}

                <a href={shop.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                  🔗 {shop.urlLabel}
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* H2: まとめ */}
        <h2 className="text-lg font-black text-stone-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🗺️</span> 夙川カフェ巡りプラン
        </h2>
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <div className="space-y-3">
            {[
              { emoji: "🥞", label: "しっかりランチを楽しむなら", shop: "クレープリー・ルポ" },
              { emoji: "☕", label: "ゆったりコーヒータイムなら", shop: "ゆげ焙煎所" },
            ].map((item) => (
              <div key={item.shop} className="flex items-center gap-3 bg-amber-50 rounded-xl px-4 py-3">
                <span className="text-xl shrink-0">{item.emoji}</span>
                <div>
                  <p className="text-xs text-stone-400">{item.label}</p>
                  <p className="text-sm font-bold text-stone-700">→ {item.shop}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-stone-500 leading-relaxed mt-4">
            落ち着いた街だからこそ、"ゆっくり過ごすカフェ時間"を楽しめるのが夙川の魅力✨<br />
            関西でカフェ巡りをするなら、ぜひ訪れてみてください◎
          </p>
        </div>

        {/* ぽやぴよ */}
        <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-8">
          <div className="text-3xl shrink-0">🐥</div>
          <div>
            <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
            <p className="text-sm text-stone-600">「夙川真的是很适合慢慢享受的地方！春天来赏樱花+咖啡，完美✨」</p>
          </div>
        </div>

        {/* 延伸閱讀 */}
        <div className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5">
          <h2 className="text-sm font-black text-stone-700 mb-3">📚 延伸閱讀</h2>
          <div className="space-y-2">
            <Link href="/cafe" className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
              ☕ 自由之丘咖啡店推薦｜東京必去咖啡散步地區
            </Link>
            <Link href="/hakone" className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
              🚃 箱根一日遊推薦｜從東京搭浪漫特快出發
            </Link>
            <Link href="/spot" className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
              🌿 東京野餐推薦｜新宿御苑・代代木公園
            </Link>
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
