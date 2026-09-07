import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";

const PAGE_URL = "https://www.japantrippicks.com/daikanyama-cafe";
const OG_IMAGE = "/daikanyama-cafe/princi-1.jpg";

export const metadata: Metadata = {
  title: "代官山咖啡廳4選｜義式烘焙・甜點・可頌・自家烘焙✅實訪",
  description:
    "代官山咖啡廳4選：米蘭義式烘焙「PRINCI」、星級甜點「DOLCE TACUBO」、可頌專門店「Doré」、自家烘焙「DUCT COFFEE LAB」。附交通・菜單・價格。",
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
    title: "代官山咖啡廳推薦4選｜義式烘焙・高級甜點・法式可頌・自家烘焙",
    description: "米蘭義式烘焙PRINCI・星級甜點DOLCE TACUBO・法式可頌Doré・自家烘焙DUCT COFFEE LAB。代官山必去4間人氣咖啡廳。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "代官山咖啡廳推薦・PRINCI代官山" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "代官山咖啡廳推薦4選｜義式烘焙・高級甜點・法式可頌・自家烘焙",
    description: "代官山必去4間人氣咖啡廳！米蘭義式烘焙・星級甜點・法式可頌・自家烘焙咖啡☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "代官山咖啡廳推薦4選｜東京必去義式烘焙・高級甜點・法式可頌・自家烘焙【實際造訪】",
  description: "代官山必去咖啡廳：米蘭PRINCI代官山T-SITE、頂級甜點DOLCE TACUBO代官山、法式可頌專門店Doré by Charles-Henry、自家烘焙DUCT COFFEE LAB。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-09-03T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "代官山咖啡廳推薦4選", item: PAGE_URL },
  ],
};

const ductPhotos = [
  "/daikanyama-cafe/duct-1.jpg",
  "/daikanyama-cafe/duct-2.jpg",
  "/daikanyama-cafe/duct-3.jpg",
  "/daikanyama-cafe/duct-4.jpg",
];
const tacuboPhotos = ["/daikanyama-cafe/tacubo-1.jpg", "/daikanyama-cafe/tacubo-2.jpg", "/daikanyama-cafe/tacubo-3.jpg"];
const charlesHenryPhotos = [
  "/daikanyama-cafe/charleshenry-1.jpg",
  "/daikanyama-cafe/charleshenry-2.jpg",
  "/daikanyama-cafe/charleshenry-3.jpg",
  "/daikanyama-cafe/charleshenry-4.jpg",
  "/daikanyama-cafe/charleshenry-5.jpg",
];

const relatedLinks = [
  { href: "/nakameguro-cafe", label: "☕ 中目黑咖啡廳推薦2選｜星巴克臻選・世界冠軍拉花", desc: "隈研吾建築・拉花世界冠軍的STREAMER" },
  { href: "/shimokitazawa-cafe", label: "☕ 下北澤美食・咖啡廳推薦4選｜甜點、派、純素烘焙", desc: "純素烘焙・起司蛋糕・自家焙煎・BONUS TRACK" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京必去咖啡散步地區", desc: "貝果・義式冰淇淋・起司披薩" },
];

const faqItems = [
  { q: "四間可以排在同一天嗎？", a: "可以。四間都在代官山駅徒步2〜5分的範圍內，走路就能串起來。" },
  { q: "Doré 可以訂位嗎？", a: "不接受訂位，內用座位只有約10席。9:00開門，想內用建議一開門就去，或改成外帶。" },
  { q: "從澀谷怎麼過去？", a: "東急東橫線搭1站就到代官山，非常近。" },
  { q: "有早餐時段嗎？", a: "PRINCI 代官山T-SITE 7:00就開門，麵包¥300起，很適合當代官山散步的第一站。" },
  { q: "想坐下來休息、用電腦的話選哪間？", a: "DUCT COFFEE LAB。約30個座位、有插座與免費Wi-Fi，是四間裡最能久坐的。PRINCI有座位但人多，DOLCE TACUBO是外帶專門，Doré只有約10席。" },
  { q: "可以順路走到中目黑嗎？", a: "可以。DUCT COFFEE LAB 距中目黑駅徒步約8分，代官山逛完接著往中目黑很順，能把兩區串成一條咖啡路線。" },
];

export default function DaikanyamaCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">代官山咖啡廳推薦4選</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳（咖啡店）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・代官山</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          代官山咖啡廳推薦4選｜東京必去<br />義式烘焙・甜點・可頌・自家烘焙☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-09-03</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">代官山——東京最有格調的咖啡散步區</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>代官山</strong>是東京最受歡迎的高級時尚街區之一，從澀谷搭電車只要1站就能抵達🏙️ 街道安靜優雅，聚集了許多設計精品店、選物店和特色咖啡廳，被譽為「東京的巴黎」。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦（推介）的四間店——來自米蘭的義式烘焙名店<strong>「PRINCI 代官山T-SITE」</strong>、星級主廚打造的頂級甜點（甜品）<strong>「DOLCE TACUBO」</strong>、2026年7月才新開幕、由法國主廚坐鎮的可頌專門店<strong>「Doré by Charles-Henry」</strong>，以及自家烘焙、可以坐下來慢慢待的<strong>「DUCT COFFEE LAB」</strong>✨ 風格完全不同，都是代官山必訪的人氣店！
          </p>
        </section>

        <PrepBannerCompact />

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">PRINCI 代官山T-SITE → 米蘭義式烘焙</p>
                <p className="text-xs text-stone-500 leading-relaxed">80種以上原創麵包、開放式廚房、有露台座位</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">DOLCE TACUBO → 星級甜點外帶專賣</p>
                <p className="text-xs text-stone-500 leading-relaxed">濃厚泡芙・焦香費南雪・生冰淇淋（雪糕）</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">Doré by Charles-Henry → 法式可頌專門店</p>
                <p className="text-xs text-stone-500 leading-relaxed">代官山站徒步2分、早上9點開門、可頌牆超好拍</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">DUCT COFFEE LAB → 自家烘焙咖啡・可以久坐</p>
                <p className="text-xs text-stone-500 leading-relaxed">約30席、有插座與免費Wi-Fi，招牌是店內現烤的PUFFIN</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">代官山咖啡廳推薦・4選</h2>

        {/* Spot 1: PRINCI */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image src="/daikanyama-cafe/princi-1.jpg" alt="PRINCI 代官山T-SITE - 代官山咖啡廳推薦" fill sizes="100vw" className="object-cover" priority />
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">PRINCI 代官山T-SITE</h3>
                <span className="text-xs text-stone-400">Princi Daikanyama</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              來自<strong>米蘭的義式烘焙名店</strong>，由創辦人Rocco Princi親自監修，2019年7月在代官山T-SITE開幕，是日本首間PRINCI獨立店舖🥐 由星巴克集團經營，「把米蘭的一天帶到代官山」為概念，從早餐、午餐到晚上都有不同的義式風味。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                店內有<strong>80種以上原創麵包＆甜點</strong>，從早餐的可頌到晚上的Aperol Spritz調酒都有🍷 開放式廚房可以看到師傅現場烘焙，露台座位氛圍超好📸 招牌的<strong>「Bignolata al Cioccolato」</strong>（巧克力泡芙・¥480）是店舖限定，絕對要試！代官山T-SITE（蔦屋書店）本身也是必逛景點。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🥐 米蘭義式烘焙", "🍕 現烤披薩", "🍷 晚上變酒吧", "📚 T-SITE蔦屋書店內"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都澀谷區猿樂町17-5 代官山T-SITE內</p>
              <p className="text-xs text-stone-600">🚃 東急東橫線「代官山」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 7:00〜20:00</p>
              <p className="text-xs text-stone-600">💴 麵包 ¥300〜／套餐 ¥1,500〜</p>
              <p className="text-xs text-stone-600">📞 03-6455-2470</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">7點開店很早，可以當作代官山散步行程的第一站吃早餐！</p>
            </div>

            <a href="https://store.tsite.jp/daikanyama/floor/shop/princi/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方資訊
            </a>
          </div>
        </section>

        {/* Spot 2: DOLCE TACUBO */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {tacuboPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="DOLCE TACUBO 代官山 - 代官山咖啡廳推薦" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">DOLCE TACUBO 代官山</h3>
                <span className="text-xs text-stone-400">頂級外帶甜點專門店</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              由<strong>米其林星級義大利餐廳</strong>主廚打造的外帶專門甜點店🧁 概念是「用甜點重現星級料理的感動」，使用最高級的素材和嚴選配方，把星級餐廳的美味帶回家。店面小巧精緻，甜點櫃裡每一品都像藝術品。
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                每一款甜點的品質都超越一般甜點店✨ 招牌的<strong>濃厚卡士達泡芙</strong>、<strong>焦香費南雪</strong>、<strong>濃厚布丁</strong>都是不可錯過的人氣商品🍮 也有<strong>卡努蕾（canelé）</strong>、薩布雷餅乾（曲奇）、現做生冰淇淋。代官山散步中途買一份當下午茶，是最幸福的享受！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🧁 星級主廚監修", "🍮 濃厚布丁", "🧈 焦香費南雪", "🍦 現做生冰淇淋"].map((t) => (
                <span key={t} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都澀谷區惠比壽西2-15-9 Cellaza代官山1F</p>
              <p className="text-xs text-stone-600">🚃 東急東橫線「代官山」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 11:00〜19:00（不定休）</p>
              <p className="text-xs text-stone-600">💴 費南雪 ¥350／泡芙 ¥550〜／布丁 ¥680〜</p>
              <p className="text-xs text-stone-600">📞 03-6416-3940</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">外帶專門店，買了之後可以在附近的西鄉山公園邊吃邊享受</p>
            </div>

            <a href="https://d-tacubo.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 3: Doré by Charles-Henry */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {charlesHenryPhotos.slice(0, 3).map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="Doré by Charles-Henry 代官山 - 法式可頌專門店" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-0.5">
            {charlesHenryPhotos.slice(3, 5).map((src, i) => (
              <div key={i} className="relative aspect-[3/2] bg-stone-100">
                <Image src={src} alt="Doré by Charles-Henry 代官山 - 可頌與法式甜點" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div>
                <h3 className="text-base font-black text-stone-800">Doré by Charles-Henry</h3>
                <span className="text-xs text-stone-400">ドレ バイ シャルルアンリ・法式可頌專門店</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              <strong>2026年7月才開幕</strong>的法式可頌專門店🥐 主廚<strong>Charles-Henry（夏爾亨利）</strong>來自法國諾曼第，曾在巴黎侯布雄以及倫敦、羅馬、舊金山、東京的米其林星級餐廳歷練，2024年先在代官山開了以「珠寶般的水果塔」聞名的<strong>Charles-Henry</strong>，這間可頌專門店就開在<strong>隔壁</strong>。使用<strong>法國產發酵奶油與嚴選法國小麥粉</strong>，用傳統工法做出外層酥脆、內裡濕潤的可頌。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                櫃檯上一整排的可頌根本是藝術品✨ 甜的有<strong>檸檬蛋白霜可頌（Croissant Citron Meringue）</strong>、草莓香草可頌、開心果覆盆子長條可頌、三重巧克力麵包；鹹的則有<strong>火腿起司（芝士）蛋 Croque Madame（¥1,230）</strong>、香腸三明治、菠菜起司西班牙臘腸的<strong>Pain Suisse</strong>，甚至還有明太子鮭魚（三文魚）檸檬口味🐟 我們點了<strong>Bostock（¥790）</strong>——用可頌吐司烤過再鋪滿莓果與糖粉，配上冰拿鐵剛剛好。店裡最好拍的是<strong>整面純白可頌造型的牆</strong>，坐在前面拍一張就是完美的IG照📸
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🥐 法式可頌專門", "👨‍🍳 米其林經歷主廚", "🧈 法國產發酵奶油", "📸 可頌牆超好拍", "🎁 禮盒包裝好看", "🌅 早上9點開門"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都澀谷區惠比壽西1-35-14（Charles-Henry隔壁）</p>
              <p className="text-xs text-stone-600">🚃 東急東橫線「代官山」駅 徒歩約2分</p>
              <p className="text-xs text-stone-600">⏰ 9:00〜19:00</p>
              <p className="text-xs text-stone-600">💴 可頌類約¥400〜、Bostock ¥790、Croque Madame ¥1,230（價格以店頭為準）</p>
              <p className="text-xs text-stone-600">🪑 內用約10席（不接受訂位）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                座位只有約10席、又<strong>不能訂位</strong>，想內用建議<strong>一開門就去</strong>；外帶禮盒很有質感，當伴手禮（手信）也很加分🎁
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="https://charles-henry.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🔗 官方網站
              </a>
              <a href="https://www.instagram.com/charleshenry_official/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                📷 Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Spot 4: DUCT COFFEE LAB */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {ductPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="DUCT COFFEE LAB - 代官山咖啡廳推薦"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">4</div>
              <div>
                <h3 className="text-base font-black text-stone-800">DUCT COFFEE LAB</h3>
                <span className="text-xs text-stone-400">ダクトコーヒーラボ</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              白磁磚外牆配上一整排<strong>水藍色霓虹燈</strong>店名，是代官山巷子裡辨識度很高的一間☕ 2018年開幕，咖啡豆<strong>自家烘焙</strong>，手沖是點單後才由咖啡師一杯一杯沖給你。店內牆上還有被稱為<strong>「幻之壁畫」</strong>的塗鴉——不定期就會被重新畫過，所以每次來看到的都可能不一樣🎨
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                招牌是店內現烤的<strong>「PUFFIN」</strong>——名字取自 BREAD ＋ MUFFIN，外層帶點酥、裡面濕潤鬆軟，介於司康與馬芬之間的口感🧁 人氣第一是<strong>藍莓奶油起司</strong>，也有巧克力大塊、香蕉，還有<strong>培根菠菜</strong>這種鹹的口味。飲料會裝在印著店名的<strong>量杯造型玻璃杯</strong>裡，刻度看得一清二楚，拍起來很有實驗室感📸 這裡也是四間裡<strong>最能久坐</strong>的一間：約30個座位、有插座與免費Wi-Fi，逛累了想歇腳、整理照片都很適合。想帶東西回去的話，櫃上也賣自家烘焙咖啡豆、原創T恤與那款量杯玻璃杯🛍️
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🧁 現烤PUFFIN", "☕ 自家烘焙手沖", "🔌 插座・免費Wi-Fi", "🎨 不定期更換的壁畫", "🛍️ 咖啡豆・原創周邊"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🧁 這樣點最順（實訪時的價格供參考）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>PUFFIN</strong>：約 ¥460〜（藍莓奶油起司、巧克力大塊、香蕉、培根菠菜等）</li>
                <li><strong>其他甜點</strong>：綜合餅乾約 ¥470／布朗尼・焦糖起司蛋糕約 ¥500</li>
                <li><strong>手沖咖啡</strong> ¥480〜／<strong>拿鐵</strong> ¥570〜／美式 ¥400</li>
                <li>綜合豆與單品豆都有，喝不出來就直接問咖啡師推薦</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都澀谷區惠比壽西1-33-18 コート代官山101</p>
              <p className="text-xs text-stone-600">🚃 東急東橫線「代官山」駅 徒步約5分（「中目黑」駅約8分／「惠比壽」駅約15分）</p>
              <p className="text-xs text-stone-600">⏰ 10:00〜19:30（L.O. 19:00）・不定休</p>
              <p className="text-xs text-stone-600">💴 飲品約 ¥400〜¥660／甜點約 ¥460〜¥500</p>
              <p className="text-xs text-stone-600">📞 03-6455-1204</p>
              <p className="text-xs text-stone-600">🪑 約30席</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">距<strong>中目黑駅只要8分鐘</strong>，很適合當作「代官山逛完往中目黑」路線的中繼站</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="https://www.instagram.com/duct_coffee_lab/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                📷 Instagram
              </a>
              <a href="https://ductcoffeelab.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🔗 官方網站
              </a>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">代官山咖啡散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從澀谷搭東急東橫線只要1站，交通非常方便</li>
            <li>✅ 四間店距離很近，可以安排同一天順遊</li>
            <li>✅ Doré <strong>早上9點開門</strong>、座位又少，最適合當成代官山散步的第一站🥐</li>
            <li>✅ 想吃水果塔的話，Doré隔壁就是同一位主廚的塔專門店<strong>Charles-Henry</strong>，兩間可以一起逛</li>
            <li>✅ <strong>代官山T-SITE（蔦屋書店）</strong>本身也是必逛景點📚</li>
            <li>✅ 代官山街上有許多選物店，可以邊逛邊買</li>
            <li>✅ 走累了就去 <strong>DUCT COFFEE LAB</strong> 坐著休息，有插座與Wi-Fi，是四間裡最能久坐的🔌</li>
            <li>✅ 也可以順遊中目黑（目黑川）或惠比壽，安排一整天散步行程——DUCT走到中目黑只要8分鐘</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            米蘭義式烘焙、星級甜點、法國主廚的可頌，再加上一間可以久坐的自家烘焙咖啡——代官山是東京最有格調的咖啡散步區✨<br />
            從早餐到下午茶，在這四間店之間走一趟，就是最完美的代官山行程！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「代官山的氛圍好像來到歐洲，慢慢散步＋咖啡時間最幸福☕」</p>
            </div>
          </div>
        </div>

        <FaqSection items={faqItems} />

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

        <RelatedArticles slug="daikanyama-cafe" exclude={["/cafe", "/nakameguro-cafe", "/shimokitazawa-cafe"]} />

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
