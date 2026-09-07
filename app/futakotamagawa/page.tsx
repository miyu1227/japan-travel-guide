import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";

const PAGE_URL = "https://www.japantrippicks.com/futakotamagawa";
const OG_IMAGE = "/futakotamagawa/sesame-1.jpg";

export const metadata: Metadata = {
  title: "二子玉川美食5選｜芝麻街・中華・蘋果派・咖啡✅實訪",
  description:
    "二子玉川美食5選：芝麻街主題咖啡廳、蒸籠中華「STEAMAN」、蘋果派「GRANNY SMITH」、韓式屋台、精品咖啡「WOODBERRY」。附交通・菜單・價格。",
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
    title: "二子玉川美食推薦5選｜芝麻街主題咖啡廳・中華・甜點・精品咖啡",
    description: "二子玉川必吃美食5選！芝麻街官方店・蒸籠中華・蘋果派・韓式屋台・世田谷精品咖啡。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "二子玉川美食推薦・芝麻街主題咖啡廳的角色甜甜圈" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "二子玉川美食推薦5選｜芝麻街・中華・甜點・精品咖啡",
    description: "二子玉川必吃5間人氣美食！芝麻街官方店・蒸籠中華・蘋果派・韓式屋台・精品咖啡。",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "二子玉川美食推薦5選｜芝麻街主題咖啡廳・中華・甜點・精品咖啡【實際造訪】",
  description: "二子玉川美食推薦5選：芝麻街官方店SESAME STREET MARKET、蒸籠中華STEAMAN、蘋果派GRANNY SMITH、韓式屋台ぶたこたまがわ、精品咖啡WOODBERRY COFFEE。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-09-07T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "二子玉川美食推薦5選", item: PAGE_URL },
  ],
};

const sesamePhotos = [
  "/futakotamagawa/sesame-1.jpg",
  "/futakotamagawa/sesame-2.jpg",
  "/futakotamagawa/sesame-3.jpg",
  "/futakotamagawa/sesame-4.jpg",
];

const woodberryPhotos = [
  "/futakotamagawa/woodberry-1.jpg",
  "/futakotamagawa/woodberry-2.jpg",
  "/futakotamagawa/woodberry-3.jpg",
  "/futakotamagawa/woodberry-4.jpg",
];

const relatedLinks = [
  { href: "/shimokitazawa-cafe", label: "☕ 下北澤美食・咖啡廳推薦4選｜甜點、派、純素烘焙", desc: "純素烘焙・起司蛋糕・自家焙煎・BONUS TRACK" },
  { href: "/ramen", label: "🍜 東京必吃拉麵推薦6選｜排隊名店・柚子鹽・家系", desc: "三軒茶屋無招牌名店・台場豚骨・六本木柚子鹽" },
  { href: "/shin-okubo", label: "🍲 新大久保美食推薦｜韓國料理・咖啡・甜點", desc: "ナッコプセ鍋・韓系咖啡廳・ドバイ餅" },
];

const faqs = [
  { q: "二子玉川怎麼去？從澀谷多久？", a: "東急田園都市線從澀谷約12分直達「二子玉川」站，也可以從大井町線過來。出站就是二子玉川rise購物中心，這篇的5間店都在站周邊走路10分內。" },
  { q: "二子玉川有什麼好玩？", a: "多摩川河岸散步、二子玉川rise與蔦屋家電、芝麻街官方主題店，加上這篇的中華・甜點・韓國料理・精品咖啡，半天到一天剛好。" },
  { q: "二子玉川離澀谷多遠？", a: "東急田園都市線從澀谷過來十幾分鐘就到，是很好插進東京行程的近郊街區。五間店都在車站周邊。" },
  { q: "五間店該怎麼排？", a: "中午先吃蒸籠中華或韓式屋台，下午去芝麻街主題咖啡廳吃角色甜甜圈，再用蘋果派或精品咖啡收尾最順。" },
  { q: "帶小孩的話推薦哪一間？", a: "芝麻街主題咖啡廳（SESAME STREET MARKET）。店裡有芝麻街的路牌、播放動畫的螢幕，甜點也都做成角色造型，是五間裡最適合親子的一間。" },
  { q: "芝麻街主題店需要預約嗎？", a: "採現場排隊，沒有預約制。假日與長假人潮較多，想避開的話建議平日或一開店的10點前後前往。" },
];


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FutakotamagawaPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">二子玉川美食推薦5選</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍽️ 美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・二子玉川</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          二子玉川美食推薦5選｜芝麻街主題店<br />中華・甜點・韓國料理・精品咖啡🍽️
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-09-07</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">二子玉川——東京近郊的悠閒美食散步區</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>二子玉川</strong>位於東京世田谷區，是日本人心中的高級住宅區，擁有河岸公園、購物中心與許多特色餐廳🌿 從澀谷搭電車只要10分鐘，非常適合安排一個半天的散步美食行程。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦（推介）5間實際造訪過的人氣店：2026年3月新開幕的芝麻街官方主題店<strong>「SESAME STREET MARKET」</strong>、時尚蒸籠中華<strong>「STEAMAN」</strong>、蘋果派專門店<strong>「GRANNY SMITH」</strong>、韓國屋台風<strong>「ぶたこたまがわ」</strong>，以及世田谷精品咖啡<strong>「WOODBERRY COFFEE 玉川高島屋S.C.店」</strong>✨
          </p>
        </section>

        <PrepBannerCompact />

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">SESAME STREET MARKET → 芝麻街官方主題咖啡廳</p>
                <p className="text-xs text-stone-500 leading-relaxed">角色甜甜圈與拉花、400種以上周邊，親子最推</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">STEAMAN → 蒸籠中華・小籠包・點心</p>
                <p className="text-xs text-stone-500 leading-relaxed">竹×霓虹的時尚空間、午餐CP值高</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">GRANNY SMITH → 蘋果派專門店</p>
                <p className="text-xs text-stone-500 leading-relaxed">玉川高島屋B1、4種以上口味、外帶也OK</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">ぶたこたまがわ → 韓國屋台風・燒肉＆小吃</p>
                <p className="text-xs text-stone-500 leading-relaxed">深夜營業、サムギョプサル＆起司（芝士）年糕</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">WOODBERRY COFFEE → 世田谷精品咖啡・純素烘焙</p>
                <p className="text-xs text-stone-500 leading-relaxed">早上9點開門、高島屋南館1F、素食與無麩質甜點（甜品）超多</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">二子玉川美食推薦・5選</h2>

        {/* Spot 1: SESAME STREET MARKET */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {sesamePhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="セサミストリートマーケット 玉川高島屋S.C店 - 二子玉川美食推薦"
                  fill
                  sizes="50vw"
                  className="object-cover"
                  {...(i === 0 ? { priority: true } : {})}
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">SESAME STREET MARKET 玉川高島屋S.C店</h3>
                <span className="text-xs text-stone-400">セサミストリートマーケット／芝麻街官方主題店</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              <strong>芝麻街（Sesame Street）的官方主題店</strong>，把咖啡廳、商品店與工作坊結合在同一個空間🧸 這間<strong>2026年3月新開幕</strong>的玉川高島屋S.C店是全日本第4間、東京都內第3間，約104坪的空間裡有<strong>36個座位的內用區</strong>，以及400種以上的周邊商品。店內還立著一塊「SESAME STREET 123」的路牌與路燈，螢幕上循環播放著卡通。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                點得到的東西幾乎都能拍📸 <strong>角色甜甜圈</strong>有撒滿藍色糖粒、叼著一塊餅乾的<strong>餅乾怪獸</strong>，也有黃鼻子的<strong>Elmo</strong>；再配上一杯拉花印著角色圖案的<strong>角色拿鐵</strong>（每間分店的圖案都不一樣）。桌上鋪的是綠色格紋桌巾，餐盤也是店家專用的，隨手一拍都好看。除了甜點，櫃台還有<strong>冰淇淋、披薩與三明治</strong>，當正餐吃也沒問題。帶小孩來最合適，帶伴手禮（手信）回去也很方便🎁
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🧸 芝麻街官方店", "🍩 角色甜甜圈", "☕ 角色拉花拿鐵", "🛍️ 400種以上周邊", "👶 親子友善"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍩 實訪時的菜單價格（供參考）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>經典甜甜圈</strong>（蜂蜜檸檬Elmo／糖霜餅乾怪獸）：各 ¥490</li>
                <li><strong>角色拿鐵</strong>：¥650（冰、熱均有，僅限S size）</li>
                <li><strong>角色甜甜圈</strong>：約 ¥590／<strong>餅乾怪獸冰淇淋三明治</strong>：約 ¥540</li>
                <li><strong>披薩</strong> 約 ¥770／<strong>三明治</strong> 約 ¥860／<strong>義大利麵</strong> 約 ¥1,760</li>
                <li>奶茶・印度奶茶 ¥400〜¥520／汽水 ¥260〜¥380</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都世田谷區玉川2-27-5 玉川高島屋S・C 別館「マロニエコート」1F</p>
              <p className="text-xs text-stone-600">🚃 東急「二子玉川」駅西口 徒步約5分</p>
              <p className="text-xs text-stone-600">⏰ 10:00〜20:00（依玉川高島屋S.C.休館日）</p>
              <p className="text-xs text-stone-600">💴 甜點約 ¥490〜¥590／飲品約 ¥260〜¥650</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                在<strong>別館「マロニエコート」</strong>，與本館・南館是不同棟建築。限定菜單會隨季節更換，出發前可以先看IG
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="https://www.takashimaya.co.jp/tamagawa/sc/shop/?id=3355" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🔗 店家資訊（玉川高島屋S.C.）
              </a>
            </div>
          </div>
        </section>

        {/* Spot 2: STEAMAN */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image src="/futakotamagawa/steaman-1.jpg" alt="中華ビストロ STEAMAN - 二子玉川美食推薦" fill sizes="100vw" className="object-cover" priority />
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">中華ビストロ STEAMAN</h3>
                <span className="text-xs text-stone-400">Herbal Chinese STEAMAN</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              以<strong>「蒸氣的力量」</strong>為理念，主打蒸籠料理的新派中華餐廳🥟 招牌是多種口味的<strong>小籠包</strong>（松露、蟹肉、烏龍茶等），搭配燒賣、魯肉飯等點心。竹材搭配霓虹燈的時尚空間，讓吃中華也變得很潮。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                午餐套餐<strong>¥1,500〜¥2,000</strong>就能吃到精緻蒸籠中華，CP值超高💰 開放式廚房可以看到主廚現場料理，還有精釀啤酒和自然派紅酒。從二子玉川站走路5分鐘，非常適合當午餐或晚餐！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🥟 蒸籠小籠包", "🍺 精釀啤酒", "💰 午餐CP值高", "✨ 時尚空間"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都世田谷區玉川3-14-8 A*G二子玉川 2F</p>
              <p className="text-xs text-stone-600">🚃 東急田園都市線・大井町線「二子玉川」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 11:30〜15:00 / 17:30〜22:00（週二公休）</p>
              <p className="text-xs text-stone-600">💴 午餐 ¥1,500〜 / 晚餐 ¥5,000〜</p>
            </div>

            <a href="https://www.hotpepper.jp/strJ003648788/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 店家資訊
            </a>
          </div>
        </section>

        {/* Spot 3: GRANNY SMITH */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image src="/futakotamagawa/granny-1.jpg" alt="GRANNY SMITH APPLE PIE & COFFEE - 二子玉川美食推薦" fill sizes="100vw" className="object-cover" />
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div>
                <h3 className="text-base font-black text-stone-800">GRANNY SMITH APPLE PIE & COFFEE</h3>
                <span className="text-xs text-stone-400">蘋果派專門店・二子玉川店</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              東京超人氣的<strong>蘋果派專門店</strong>🍎 二子玉川店位於玉川高島屋地下1樓，交通便利。常時備有4種以上口味，包括店舖限定的<strong>佛羅倫汀蘋果派</strong>、經典英式卡士達、荷蘭脆皮等。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                每一款蘋果派都用不同的蘋果品種和做法，口感完全不同🍰 可以內用搭配咖啡，也可以外帶當伴手禮（手信）。內用座位有18席，氛圍溫馨。從二子玉川站走路2分鐘，逛完街順便來一片剛剛好！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍎 蘋果派專門", "☕ 搭配咖啡", "🎁 外帶伴手禮OK", "🚶 車站徒步2分"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都世田谷區玉川3-17-1 玉川高島屋S・C 本館 B1F</p>
              <p className="text-xs text-stone-600">🚃 東急「二子玉川」駅西口 徒歩約2分</p>
              <p className="text-xs text-stone-600">⏰ 10:00〜20:00（L.O. 19:30）</p>
              <p className="text-xs text-stone-600">💴 蘋果派 ¥500〜¥700</p>
            </div>

            <a href="https://grannysmith-pie.com/shop-list/futakotamagawa/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 4: ぶたこたまがわ */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image src="/futakotamagawa/butako-1.jpg" alt="コリアンキッチン ぶたこたまがわ - 二子玉川美食推薦" fill sizes="100vw" className="object-cover" />
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">4</div>
              <div>
                <h3 className="text-base font-black text-stone-800">コリアンキッチン ぶたこたまがわ</h3>
                <span className="text-xs text-stone-400">Korean Kitchen Butakotamagawa</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              以韓國屋台風格打造的<strong>「新韓式居酒屋」</strong>🇰🇷 招牌是現場煎烤的<strong>サムギョプサル（五花肉）</strong>和超人氣的<strong>起司年糕</strong>。裝潢充滿韓式街頭風，拍照也很有氛圍。深夜也營業，適合晚上吃宵夜。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                午餐只要<strong>¥1,000〜¥1,500</strong>就能吃到韓式料理，晚上則可以搭配韓國燒酒和啤酒暢飲🍻 氣氛熱鬧輕鬆，很適合朋友聚餐。和STEAMAN在同一棟大樓2樓，可以安排在同一天！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🇰🇷 韓式屋台風", "🥩 サムギョプサル", "🧀 起司年糕", "🌙 深夜營業"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都世田谷區玉川3-14-8 A*G二子玉川 2F</p>
              <p className="text-xs text-stone-600">🚃 東急「二子玉川」駅 徒歩約3分</p>
              <p className="text-xs text-stone-600">⏰ 11:30〜翌3:00（週日・祝日〜23:00）</p>
              <p className="text-xs text-stone-600">💴 午餐 ¥1,000〜 / 晚餐 ¥3,000〜</p>
            </div>

            <a href="https://www.hotpepper.jp/strJ003559141/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 店家資訊
            </a>
          </div>
        </section>

        {/* Spot 5: WOODBERRY COFFEE */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {woodberryPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="WOODBERRY COFFEE 玉川高島屋S.C.店 - 二子玉川精品咖啡" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">5</div>
              <div>
                <h3 className="text-base font-black text-stone-800">WOODBERRY COFFEE 玉川高島屋S.C.店</h3>
                <span className="text-xs text-stone-400">世田谷發跡的精品咖啡烘焙品牌</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              <strong>WOODBERRY COFFEE</strong> 是2012年從世田谷「用賀」起家的<strong>精品咖啡烘焙品牌</strong>☕ 堅持直接向產地農園採購生豆（Direct Trade）、自家烘焙，現在在東京・神奈川已經有10間以上分店。這家<strong>玉川高島屋S.C.店於2025年9月新開幕</strong>，是二子玉川目前最好逛也最好坐的咖啡廳（咖啡店）之一。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                點單時可以<strong>從好幾支單品豆裡自己挑</strong>，每支都附一張風味卡（產地・品種・處理法・烘焙度），像在喝紅酒一樣有趣🍷 我們點了薩爾瓦多淺焙手沖與夏季限定冰咖啡，配上巧克力布朗尼與檸檬磅蛋糕，酸甜果香和甜點超搭。<strong>甜點櫃裡有大量標示「V（純素）」與「G（無麩質）」的品項</strong>——司康、可麗露、肉桂捲、胡蘿蔔蛋糕都有，這在日本咖啡廳其實很少見，<strong>吃素或對麩質敏感的旅客可以很安心</strong>🌱 店裡也賣咖啡豆、濾掛與Hario／KINTO等器具，很好買伴手禮。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["☕ 自家烘焙精品咖啡", "🌱 純素・無麩質甜點", "🥑 酪梨吐司・巴西莓果碗", "🛍️ 咖啡豆・器具好買", "🪑 全店約40席"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都世田谷區玉川3-17-1 玉川高島屋S・C 南館 1F</p>
              <p className="text-xs text-stone-600">🚃 東急「二子玉川」駅 徒歩約4分</p>
              <p className="text-xs text-stone-600">⏰ 9:00〜20:00（L.O. 餐點19:00／飲料19:30）・依玉川高島屋S.C.休館日</p>
              <p className="text-xs text-stone-600">💴 甜點約¥330〜¥770、咖啡約¥500〜（價格以店頭菜單為準）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                甜點標價分成<strong>「內用」與「外帶」兩種</strong>（外帶稅率較低所以更便宜），點餐時先想好要不要坐下來☕
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="https://www.instagram.com/woodberry_futakotamagawa/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                📷 Instagram
              </a>
              <a href="https://www.takashimaya.co.jp/tamagawa/sc/shop/?id=3204" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🔗 店家資訊（玉川高島屋S.C.）
              </a>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">二子玉川美食散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從澀谷搭東急田園都市線只要10分鐘，交通方便</li>
            <li>✅ 芝麻街主題店在<strong>別館「マロニエコート」</strong>，和本館・南館不同棟，別走錯🧸</li>
            <li>✅ STEAMAN和ぶたこたまがわ在同一棟大樓，可以排同一天</li>
            <li>✅ GRANNY SMITH在高島屋地下，逛百貨順便吃蘋果派</li>
            <li>✅ GRANNY SMITH（本館B1）與WOODBERRY COFFEE（南館1F）都在玉川高島屋，甜點可以一次吃兩間🍎☕</li>
            <li>✅ WOODBERRY <strong>早上9點就開門</strong>，很適合當作二子玉川散步的第一站</li>
            <li>✅ 吃素或不吃麩質的旅客，WOODBERRY的純素・無麩質甜點選擇最多🌱</li>
            <li>✅ 帶小孩的話，芝麻街主題店的角色甜甜圈與周邊最好殺時間👶</li>
            <li>✅ 二子玉川公園就在附近，吃完可以散步走走🌿</li>
            <li>✅ 週末人多，建議平日午餐時段前往比較悠閒</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            芝麻街的角色甜甜圈、蒸籠中華、蘋果派、韓式屋台，再加上一杯自家烘焙的精品咖啡——五種完全不同風格的美食✨<br />
            二子玉川是個很適合慢慢逛、慢慢吃的東京近郊小寶地！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「二子玉川離澀谷超近，卻有完全不同的悠閒氛圍，美食也很厲害🍽️」</p>
            </div>
          </div>
        </div>

        <FaqSection items={faqs} />

        <AuthorCard />
        <PrepBanner />

        {/* 延伸閱讀 */}
        <section>
          <h2 className="text-base font-black text-stone-800 mb-3">📚 延伸閱讀</h2>
          <div className="space-y-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="flex items-center justify-between bg-white border border-stone-100 rounded-2xl px-4 py-3 shadow-sm hover:border-yellow-300 transition-colors">
                <div>
                  <p className="text-sm font-bold text-stone-800">{link.label}</p>
                  <p className="text-xs text-stone-400">{link.desc}</p>
                </div>
                <span className="text-stone-300 text-sm">›</span>
              </Link>
            ))}
          </div>
        </section>

        <RelatedArticles slug="futakotamagawa" exclude={["/ramen", "/shimokitazawa-cafe", "/shin-okubo"]} />

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
