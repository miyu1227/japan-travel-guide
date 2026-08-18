import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/ajisai";
const OG_IMAGE = "/ajisai/cover.jpg";

export const metadata: Metadata = {
  title: "東京繡球花景點推薦2選｜台場シンボルプロムナード＆文京白山神社紫陽花🌸",
  description:
    "6月的東京限定景色！精選2個免費賞紫陽花（あじさい）景點：台場シンボルプロムナード公園、文京區白山神社「文京あじさいまつり」。含最佳花期、交通方式與拍照攻略。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "東京繡球花景點推薦2選｜台場シンボルプロムナード＆文京白山神社🌸",
    description: "6月東京限定景色！紫陽花景點：台場シンボルプロムナード＆文京白山神社。花期・交通・拍照攻略。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "東京繡球花景點・紫陽花" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京繡球花景點推薦2選｜台場＆文京白山神社🌸",
    description: "6月東京限定！紫陽花景點2選・免費入場・拍照攻略",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京繡球花景點推薦2選｜台場シンボルプロムナード＆文京白山神社紫陽花",
  description: "6月東京限定景色！紫陽花（あじさい）景點：台場シンボルプロムナード公園、文京區白山神社「文京あじさいまつり」。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-07-21T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "東京繡球花景點", item: PAGE_URL },
  ],
};

const spots = [
  {
    id: "symbol-promenade",
    number: 1,
    name: "シンボルプロムナード公園",
    highlight: "台場・免費賞紫陽花散步道",
    url: "https://www.tptc.co.jp/park/flower/ajisai",
    recommend: "沿散步道漫步・拍紫陽花與都市共演",
    images: [
      "/ajisai/symbol/symbol-1.jpg",
      "/ajisai/symbol/symbol-2.jpg",
      "/ajisai/symbol/symbol-3.jpg",
      "/ajisai/symbol/symbol-4.jpg",
    ],
    intro:
      "橫貫東京臨海副都心（台場）的<strong>免費開放</strong>散步道公園🌸 每年6月初〜7月初，園內約有<strong>3,000株紫陽花</strong>沿路盛開，藍・紫・粉的花海與台場的高樓、彩虹大橋一起入鏡。",
    reason:
      "免費入場，觀光間隙輕鬆順路造訪✨ 不像鎌倉那樣人擠人，可以慢慢散步慢慢拍。剛好排在台場觀光行程中間、或是搭Disney Resort Line之前來，時間掌控超彈性。花況高峰通常落在<strong>6月中旬</strong>。",
    basicInfo: {
      address: "東京都江東区青海1・港区台場1〜2 一帶",
      access: "百合海鷗線「台場」「青海」駅 徒歩約3〜5分",
      price: "免費",
      season: "6月上旬〜7月上旬（高峰6月中旬）",
    },
    tags: ["🌸 免費入場", "🏙️ 台場都市景", "📸 散步邊拍", "🚝 百合海鷗線便利"],
  },
  {
    id: "hakusan-jinja",
    number: 2,
    name: "白山神社（文京あじさいまつり）",
    highlight: "文京區・約3,000株紫陽花＆祭典",
    url: "https://hakusanshita.com/bunkyo-ajisaifes_no42/index.html",
    recommend: "白山神社＋隔壁的白山公園連走",
    images: [
      "/ajisai/hakusan/hakusan-1.jpg",
      "/ajisai/hakusan/hakusan-2.jpg",
      "/ajisai/hakusan/hakusan-3.jpg",
      "/ajisai/hakusan/hakusan-4.jpg",
    ],
    intro:
      "文京區代表性的紫陽花名所，神社境內＆隔壁的白山公園合計約<strong>3,000株</strong>紫陽花🌿 每年6月中會舉辦<strong>「文京あじさいまつり（文京繡球花祭）」</strong>，期間有屋台・物產展・盆栽展示，是東京都心賞紫陽花最有廟會氛圍的景點。",
    reason:
      "神社的階梯兩旁被紫陽花包圍，是IG熱門構圖點📸 <strong>祭典期間才會開放</strong>的紫陽花園也很值得，加上白山神社境內免費、隔壁白山公園可以延伸散步。從東京メトロ「白山」駅徒步約3分就到，交通超方便。",
    basicInfo: {
      address: "東京都文京区白山5-31-26",
      access: "東京メトロ都営三田線「白山」駅 徒歩約3分",
      price: "免費（祭典期間部分區域限時開放）",
      season: "6月上旬〜下旬（文京あじさいまつり通常6月中の1週間）",
    },
    tags: ["⛩️ 神社階梯", "🎪 有屋台祭典", "🚇 白山駅徒歩3分", "🌸 都心賞花"],
  },
];

const relatedLinks = [
  { href: "/tokyo-tower", label: "🗼 東京鐵塔推薦｜東京必去地標・夜景景點", desc: "333公尺東京象徵・主展望台＆頂層展望台夜景" },
  { href: "/skytree", label: "🌃 東京晴空塔攻略｜門票、交通、夜景整理", desc: "Tokyo Skytree展望台＆東京ソラマチ完整指南" },
  { href: "/tokyo-disney-around", label: "🎢 東京迪士尼周邊玩法｜不進園也能玩！", desc: "Disney Resort Line一日券＆イクスピアリ美食" },
];

export default function AjisaiPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">東京繡球花景點</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-blue-100 text-blue-700 border border-blue-300 text-xs font-semibold px-3 py-1 rounded-full">📍 景點</span>
          <span className="bg-purple-50 text-purple-600 border border-purple-200 text-xs font-semibold px-3 py-1 rounded-full">🌸 6月限定</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京繡球花景點推薦2選｜<br />台場＆文京白山神社紫陽花🌸
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Cover */}
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm mb-6 bg-stone-100">
          <Image
            src={OG_IMAGE}
            alt="東京繡球花景點・紫陽花"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
            priority
          />
        </div>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">6月的東京限定：紫陽花景色🌸</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            提到日本的<strong>紫陽花（あじさい／Hydrangea）</strong>，大家會想到鎌倉的明月院或箱根登山電車，但其實<strong>東京都心也有免費且交通方便的紫陽花景點</strong>。這篇整理2個實際造訪過的地方——都免費入場、都靠地鐵徒步就能到。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            如果你的東京自由行剛好排在6月，別錯過這個<strong>期間限定</strong>的畫面。花期通常落在<strong>6月上旬〜下旬</strong>，梅雨季的雨後花色會更飽和，是攝影迷的黃金時段📸
          </p>
        </section>

        <PrepBannerCompact />

        {/* H2: 推薦 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">東京紫陽花景點・2選</h2>

        {/* Spots */}
        <div className="space-y-8 mb-10">
          {spots.map((spot) => (
            <section key={spot.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              {/* Photos */}
              <div className="grid grid-cols-2 gap-0.5">
                {spot.images.map((src, i) => (
                  <div key={i} className="relative aspect-square bg-stone-100">
                    <Image
                      src={src}
                      alt={`${spot.name} - 東京繡球花景點`}
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-400 text-white flex items-center justify-center text-sm font-black shrink-0">
                    {spot.number}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-stone-800 leading-tight">{spot.name}</h3>
                    <p className="text-xs text-stone-400">{spot.highlight}</p>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: spot.intro }} />

                <div className="bg-purple-50 border border-purple-100 rounded-xl px-4 py-3 mb-3">
                  <p className="text-xs font-bold text-purple-500 mb-1">✨ 推薦給旅客的理由</p>
                  <p className="text-sm text-stone-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: spot.reason }} />
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {spot.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-purple-50 text-purple-600 border border-purple-200 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>

                <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
                  <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
                  <p className="text-xs text-stone-600">📍 {spot.basicInfo.address}</p>
                  <p className="text-xs text-stone-600">🚃 {spot.basicInfo.access}</p>
                  <p className="text-xs text-stone-600">💴 {spot.basicInfo.price}</p>
                  <p className="text-xs text-stone-600">🌸 花期：{spot.basicInfo.season}</p>
                  <p className="text-xs text-purple-600 font-semibold">💡 推薦：{spot.recommend}</p>
                </div>

                <a
                  href={spot.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
                >
                  🔗 查看官方資訊
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">賞紫陽花小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 花期以<strong>6月中旬</strong>為顛峰，行程可以往這個時段靠近</li>
            <li>✅ 雨後花色會更飽和，帶把小傘反而是攝影加分項☔</li>
            <li>✅ 兩個景點都<strong>免費入場</strong>，適合排進東京市內散步行程</li>
            <li>✅ 白山神社的祭典期間有屋台，記得空腹前往🎪</li>
            <li>✅ 台場シンボルプロムナード可以順路排Disney Resort Line＆イクスピアリ</li>
          </ul>
        </section>

        {/* 延伸閱讀 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">延伸閱讀</h2>
          <div className="space-y-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block bg-amber-50 border border-yellow-100 rounded-xl px-4 py-3 hover:bg-amber-100 transition-colors">
                <p className="text-sm font-bold text-stone-700 mb-0.5">{link.label}</p>
                <p className="text-xs text-stone-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <AuthorCard />
        <PrepBanner />

        {/* Back */}
        <div className="text-center mt-8">
          <Link href="/" className="inline-block text-sm text-stone-500 hover:text-stone-800 underline underline-offset-2">
            ← 返回首頁
          </Link>
        </div>

        <RelatedArticles slug="ajisai" exclude={["/skytree", "/tokyo-disney-around", "/tokyo-tower"]} />

      </article>
    </div>
  );
}
