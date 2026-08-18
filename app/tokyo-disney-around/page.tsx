import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";

const KLOOK_SHUTTLE =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1339860&k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Factivity%2F127556-tokyo-disneyland-disneysea-shared-transfer-city";

const PAGE_URL = "https://www.japantrippicks.com/tokyo-disney-around";
const OG_IMAGE = "/tokyo-disney-around/cover.jpg";

export const metadata: Metadata = {
  title: "東京迪士尼周邊玩法｜不進園也能玩的舞浜半日遊",
  description:
    "舞浜站周邊不進園也玩得起來。迪士尼度假區線一日券與米奇車廂、イクスピアリ的法式咖啡廳與Disney Store，加上從東京市區怎麼來、半日行程怎麼排。",
  alternates: {
    canonical: PAGE_URL,
    // 台湾・香港の両方を対象にする（同一URLで両地域を明示）
    languages: {
      "zh-Hant": PAGE_URL,
      "zh-TW": PAGE_URL,
      "zh-HK": PAGE_URL,
      "zh-MO": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    title: "東京迪士尼周邊玩法｜不進園也能玩的舞浜半日遊",
    description: "迪士尼度假區線一日券＆イクスピアリ人氣咖啡廳完整指南。舞浜站周邊不進園也能玩的半日行程。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "東京迪士尼度假區線・周邊玩法" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京迪士尼周邊玩法｜不進園也能玩的舞浜半日遊",
    description: "迪士尼度假區線＆イクスピアリ美食，不進園也能玩的舞浜半日遊✨",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京迪士尼周邊玩法｜不進園也能玩的舞浜半日遊",
  description: "迪士尼度假區線（Disney Resort Line）一日券・可愛車廂與イクスピアリ人氣咖啡廳CAFÉ AUX BACCHANALES。舞浜站周邊半日遊指南。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-08-12T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "東京迪士尼周邊玩法", item: PAGE_URL },
  ],
};

const spots = [
  {
    id: "resort-line",
    number: 1,
    name: "Disney Resort Line 迪士尼度假區線",
    highlight: "一日券乘り放題・可愛車廂＆景色BGM",
    url: "https://www.tokyodisneyresort.jp/tdr/resortline.html",
    tag: "舞浜",
    recommend: "1日フリーきっぷ（一日券）",
    images: [
      "/tokyo-disney-around/resort-line/resort-line-1.jpg",
      "/tokyo-disney-around/resort-line/resort-line-2.jpg",
      "/tokyo-disney-around/resort-line/resort-line-3.jpg",
      "/tokyo-disney-around/resort-line/resort-line-4.jpg",
      "/tokyo-disney-around/resort-line/resort-line-5.jpg",
      "/tokyo-disney-around/resort-line/resort-line-6.jpg",
    ],
    intro:
      "連接東京迪士尼樂園、迪士尼海洋、周邊飯店與舞浜站的環狀單軌電車。車窗上有米奇造型、車內BGM也是迪士尼專屬曲目，光是搭一圈就有滿滿的度假感✨",
    reason:
      "就算不進園，也可以買「1日フリーきっぷ（一日券）」整天無限次搭乘，繞行一圈約13分鐘，從車窗可以眺望兩座樂園、海洋、飯店群的外觀景色🎢 車廂座位也做成米奇形狀，超級好拍！雨天備案或是行程剩下半天時最推薦。",
    basicInfo: {
      address: "千葉県浦安市舞浜1-2（起點：リゾートゲートウェイ・ステーション）",
      access: "JR京葉線・武藏野線「舞浜」駅 徒歩約2分",
      price: "1日フリーきっぷ ¥660／單程 ¥260前後（依區間）",
    },
    tags: ["🚝 環狀單軌", "🎫 一日券最推薦", "📸 車廂超好拍"],
  },
  {
    id: "bacchanales",
    number: 2,
    name: "CAFÉ AUX BACCHANALES（イクスピアリ店）",
    highlight: "法式露天咖啡廳・イクスピアリ內",
    url: "https://www.ikspiari.com/gourmet/shops/2335/",
    tag: "舞浜",
    recommend: "早餐套餐＆可頌",
    images: [
      "/tokyo-disney-around/bacchanales/bacchanales-1.jpg",
      "/tokyo-disney-around/bacchanales/bacchanales-2.jpg",
      "/tokyo-disney-around/bacchanales/bacchanales-3.jpg",
    ],
    intro:
      "位在舞浜站旁購物中心「イクスピアリ」1F的法式Brasserie＆Café。原宿・銀座也有分店的人氣品牌，露天座位＆巴黎風格內裝，一秒進入歐洲小巷氛圍☕",
    reason:
      "早晨開店較早，很適合開園前先來吃早餐，或是不進園當作舞浜周邊散步的午茶點。可頌、法式吐司、鵝肝三明治等經典法式菜色都有，價格也比園內親民很多🥐 平日午後空位多，可以慢慢坐。",
    basicInfo: {
      address: "千葉県浦安市舞浜1-4 イクスピアリ 1F",
      access: "JR京葉線・武藏野線「舞浜」駅 徒歩約5分（イクスピアリ內）",
      price: "¥1,500〜¥2,500（早餐・午茶）",
    },
    tags: ["🥐 法式Brasserie", "🛍️ イクスピアリ內", "☕ 舞浜早餐"],
  },
];

const relatedLinks = [
  { href: "/tokyo-tower", label: "🗼 東京鐵塔推薦｜東京必去地標・夜景景點", desc: "333公尺東京象徵・主展望台＆頂層展望台夜景" },
  { href: "/skytree", label: "🌃 東京晴空塔攻略｜門票、交通、夜景整理", desc: "Tokyo Skytree展望台＆東京ソラマチ完整指南" },
  { href: "/tokyo-subway-ticket", label: "🚇 東京地鐵24/48/72小時乘車券", desc: "東京自由行交通指南・地下鐵周遊券完整解說" },
];

export default function TokyoDisneyAroundPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">東京迪士尼周邊玩法</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-blue-100 text-blue-700 border border-blue-300 text-xs font-semibold px-3 py-1 rounded-full">📍 景點</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">🎢 東京・舞浜</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際玩過</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京迪士尼周邊玩法｜<br />不進園也能玩！🎢
        </h1>
        <p className="text-sm text-stone-500 mb-2">度假區線一日券＆イクスピアリ美食巡禮</p>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-12</p>

        {/* Cover */}
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm mb-6 bg-stone-100">
          <Image
            src={OG_IMAGE}
            alt="東京迪士尼度假區線・車廂內景"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
            priority
          />
        </div>

        {/* Why this article */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">不進迪士尼樂園也能玩！</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            雖然來東京大家都想衝<strong>東京迪士尼樂園</strong>或<strong>迪士尼海洋</strong>，但門票越來越貴、人潮也不少。這篇整理的是<strong>「不進園」也能享受迪士尼氛圍的玩法</strong>——舞浜站周邊其實有一整片度假區可以散步，用半天的預算就能玩得很滿足✨
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇寫給<strong>沒搶到門票、行程只剩半天，或遇到雨天想找備案</strong>的台灣・香港旅人。<strong>你會知道</strong>：不進園可以玩到什麼、度假區線一日券怎麼買與值不值得、從東京市區怎麼過來，還有半天的時間該怎麼排。這次介紹兩個實際去過的點：<strong>迪士尼度假區線一日券</strong>可以無限次搭乘環狀電車繞行度假區，加上位在舞浜站旁購物中心<strong>イクスピアリ</strong>的法式咖啡廳（咖啡店）<strong>CAFÉ AUX BACCHANALES</strong>🎢☕
          </p>
        </section>

        <PrepBannerCompact />

        {/* H2: 推薦 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">舞浜周邊玩法・2個推薦（推介）</h2>

        {/* Spots */}
        <div className="space-y-8 mb-10">
          {spots.map((spot) => (
            <section key={spot.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              {/* Photos */}
              <div className={`grid ${spot.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-0.5`}>
                {spot.images.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] bg-stone-100">
                    <Image
                      src={src}
                      alt={`${spot.name} - 東京迪士尼周邊玩法`}
                      fill
                      sizes={spot.images.length > 1 ? "50vw" : "100vw"}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center text-sm font-black shrink-0">
                    {spot.number}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-stone-800 leading-tight">{spot.name}</h3>
                    <p className="text-xs text-stone-400">{spot.highlight}</p>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-3">{spot.intro}</p>

                <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-3">
                  <p className="text-xs font-bold text-blue-500 mb-1">✨ 推薦給旅客的理由</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{spot.reason}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {spot.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-blue-50 text-blue-600 border border-blue-200 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>

                <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
                  <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
                  <p className="text-xs text-stone-600">📍 {spot.basicInfo.address}</p>
                  <p className="text-xs text-stone-600">🚃 {spot.basicInfo.access}</p>
                  <p className="text-xs text-stone-600">💴 {spot.basicInfo.price}</p>
                  <p className="text-xs text-blue-600 font-semibold">💡 推薦：{spot.recommend}</p>
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

        {/* 半日行程範例 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">舞浜半日遊行程範例</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>🕘 09:30｜到達舞浜站，先到イクスピアリ的<strong>CAFÉ AUX BACCHANALES</strong>吃早餐＆可頌</li>
            <li>🕚 11:00｜買一張<strong>迪士尼度假區線1日券</strong>，先繞一圈欣賞景色＆BGM</li>
            <li>🕐 13:00｜下車到度假區飯店（酒店）群、迪士尼商店（イクスピアリ內Disney Store）逛逛</li>
            <li>🕒 15:00｜再搭度假區線回舞浜站，結束半日行程</li>
          </ul>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">旅遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 度假區線的票券可用IC卡（Suica/PASMO）或現場售票機購入</li>
            <li>✅ 1日券適合「不進園但想拍照＆逛周邊」的旅客，是最C/P值選擇</li>
            <li>✅ 車廂座位是米奇形狀，車窗上有米奇剪影，記得拍照📸</li>
            <li>✅ イクスピアリ內有Disney Store，不進園也能買迪士尼商品</li>
            <li>✅ 雨天或行程剩半天時最推薦的舞浜備案</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">舞浜周邊 常見問題</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 不進園真的玩得起來嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                如果你要的是遊樂設施，那還是得進園；但如果想要的是<strong>氛圍、拍照與買周邊</strong>，舞浜周邊就很夠。度假區線的米奇車窗、飯店群的外觀、イクスピアリ 裡的 Disney Store，都不需要門票。<strong>半天</strong>是最剛好的長度。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 度假區線一日券值得買嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                看你會搭幾趟。<strong>只搭一、兩趟的話用 IC 卡就好</strong>；如果打算繞圈欣賞景色、中途下車逛飯店再回來，一日券就會比較划算，也不用每次掏卡。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 從東京市區怎麼過來？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                舞浜站在 <strong>JR 京葉線</strong>上，從東京站搭過來大約15分鐘左右。要注意<strong>地鐵周遊券不能搭 JR</strong>，這段要另外付；如果是剛下飛機直接過來，機場巴士有到舞浜地區飯店的路線，可以參考
                <Link href="/narita-airport-access" className="text-blue-600 underline underline-offset-2">成田</Link>與
                <Link href="/haneda-airport-access" className="text-blue-600 underline underline-offset-2">羽田</Link>的交通攻略。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 下雨天來會不會很掃興？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                這個行程本來就<strong>很適合雨天</strong>。度假區線是有屋頂的電車，イクスピアリ 是室內購物中心，幾乎不用淋到雨。反而是原本要進園的人遇到下雨時，把行程換成這樣會舒服很多。
              </p>
            </div>
          </div>
        </section>

        {/* Klook Shuttleバナー */}
        <section className="mb-8">
          <a
            href={KLOOK_SHUTTLE}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl p-5 shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <span className="absolute top-3 right-3 text-2xl opacity-50 select-none">🚌</span>
            <span className="absolute bottom-4 left-4 text-base opacity-40 select-none">✨</span>

            <div className="relative flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full tracking-wide shadow-sm">
                🎫 Travel Tips
              </span>
              <span className="text-[10px] text-stone-500 bg-white/60 backdrop-blur px-2 py-0.5 rounded-full">新宿・上野・淺草・銀座出發</span>
            </div>

            <div className="relative flex items-center gap-3 mb-4">
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
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-black text-stone-800 leading-tight mb-1">
                  想從東京市區直達迪士尼？
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  從<strong>新宿・上野・淺草・銀座</strong>出發的東京迪士尼專車接駁巴士，不用換車、免拉行李在電車裡人擠人，適合帶小孩或行李多的旅客🚌
                </p>
              </div>
            </div>

            <div className="relative w-full aspect-[1200/628] rounded-2xl overflow-hidden mb-3 border border-white/60 shadow-sm">
              <Image
                src="/tokyo-disney-around/klook-shuttle.png"
                alt="東京迪士尼接駁巴士 Klook 票券"
                fill
                sizes="(max-width: 672px) 100vw, 672px"
                className="object-cover"
              />
            </div>

            <div className="relative block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 rounded-full py-3 shadow-md">
              🎫 查看迪士尼接駁巴士 →
            </div>
            <p className="relative text-[10px] text-stone-500 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
          </a>
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

        <RelatedArticles slug="tokyo-disney-around" exclude={["/skytree", "/tokyo-subway-ticket", "/tokyo-tower"]} />

      </article>
    </div>
  );
}
