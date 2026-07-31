import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";

const PAGE_URL = "https://www.japantrippicks.com/kiyosumi-cafe";
const OG_IMAGE = "/kiyosumi-cafe/iki-1.jpg";

export const metadata: Metadata = {
  title: "清澄白河咖啡廳推薦2選｜B² ＆ iki Roastery・東京咖啡聖地【實際造訪】",
  description:
    "清澄白河咖啡廳推薦！日本首間「麵包工廠＋咖啡烘焙廠」一體的 B²（B Squared），以及隅田川旁倉庫改建的紐西蘭風咖啡廳 iki Roastery & Eatery。附交通、營業時間、必吃麵包與價格。台灣・香港旅客東京自由行必收藏☕",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "清澄白河咖啡廳推薦2選｜B² ＆ iki Roastery・東京咖啡聖地",
    description: "麵包工廠×咖啡烘焙廠的 B²，隅田川旁倉庫改建的 iki Roastery，清澄白河必去2間。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "清澄白河咖啡廳推薦・iki Roastery & Eatery 拿鐵與開心果丹麥" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "清澄白河咖啡廳推薦2選｜B² ＆ iki Roastery",
    description: "東京咖啡聖地清澄白河，麵包×自家烘焙咖啡的2間必去名店☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "清澄白河咖啡廳推薦2選｜B² ＆ iki Roastery・東京咖啡聖地【實際造訪】",
  description:
    "清澄白河必去咖啡廳「B²（B Squared）」與「iki Roastery & Eatery」完整介紹，附交通、營業時間與必點推薦。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-31T00:00:00+09:00",
  dateModified: "2026-07-31T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "清澄白河咖啡廳推薦", item: PAGE_URL },
  ],
};

type Shop = {
  id: string;
  no: string;
  name: string;
  sub: string;
  photos: { src: string; alt: string }[];
  intro: string;
  reason: string;
  tags: string[];
  pickTitle: string;
  picks: { label: string; desc: string }[];
  info: string[];
  tip: string;
  links: { href: string; label: string }[];
};

const shops: Shop[] = [
  {
    id: "bsquared",
    no: "1",
    name: "B²（B Squared／ビースクエアード）",
    sub: "清澄白河本店・麵包工廠×咖啡烘焙廠",
    photos: [
      { src: "/kiyosumi-cafe/bsquared-1.jpg", alt: "B² 清澄白河 - 丹麥麵包、司康與冰咖啡、拿鐵" },
      { src: "/kiyosumi-cafe/bsquared-2.jpg", alt: "B² 清澄白河 - 托盤上的丹麥麵包與巧克力司康" },
      { src: "/kiyosumi-cafe/bsquared-3.jpg", alt: "B² 清澄白河 - 陳列架上滿滿的麵包與價格牌" },
      { src: "/kiyosumi-cafe/bsquared-4.jpg", alt: "B² 清澄白河 - 法棍麵包與三明治冷藏櫃" },
      { src: "/kiyosumi-cafe/bsquared-5.jpg", alt: "B² 清澄白河 - 黑色磁磚吧台與 Victoria Arduino 咖啡機" },
    ],
    intro:
      "打著<strong>「日本第一間麵包工廠與咖啡烘焙廠合而為一」</strong>的工業風麵包咖啡廳🥐 一走進去就是滿滿一整面的麵包牆——可頌、明太子法棍、玉米法式吐司、蘑菇鹹派、和三盆甜甜圈⋯⋯每一款都插著手寫黑板小卡寫著介紹與價格，光是挑選就要花上十分鐘。內用區是黑白磁磚吧台配上義大利 <strong>Victoria Arduino</strong> 咖啡機，麵包買完直接坐下來配一杯自家烘焙咖啡，是清澄白河最典型的早餐風景。",
    reason:
      "對旅客來說最大的優點是<strong>「不用會日文也能點」</strong>——麵包全部陳列在架上，看到喜歡的直接夾進托盤就好👍 價格也非常親民，大多數麵包落在 <strong>¥300〜¥500</strong>，鹹麵包與三明治約 ¥500〜¥800，一個人 ¥1,000〜¥1,500 就能吃得很滿足。<strong>早上9點就開門</strong>，很適合排進東京早晨的行程；買幾個麵包帶去附近的<strong>清澄庭園</strong>或隅田川邊野餐也非常推薦🧺",
    tags: ["🥐 現烤麵包滿牆", "☕ 自家烘焙咖啡", "🏭 工業風空間", "🕘 早上9點開門", "💴 ¥300起銅板價", "🧺 適合外帶野餐"],
    pickTitle: "🥐 必點推薦（價格為實際造訪時參考）",
    picks: [
      { label: "可頌（クロワッサン）", desc: "使用發酵奶油，外層酥脆到會掉屑，約 ¥398" },
      { label: "湯種法棍（湯種バゲット）", desc: "外脆內Q，吃得到小麥甜味，約 ¥381" },
      { label: "紅豆奶油（あんバター）", desc: "自家紅豆餡＋奶油夾在法棍裡，日式經典，約 ¥359" },
      { label: "布里歐吐司（ブリオッシュ食パン）", desc: "雞蛋與奶油超濃郁，帶回飯店當早餐也很讚，約 ¥698" },
      { label: "紅蘿蔔蛋糕・馬斯卡彭起司蛋糕", desc: "甜點櫃的人氣款，約 ¥574／¥599" },
    ],
    info: [
      "📍 東京都江東區深川1-9-10 1F",
      "🚃 東京地下鐵「門前仲町」駅 徒歩約7〜10分／「清澄白河」駅 徒歩約10分",
      "⏰ 9:00〜18:00（L.O. 17:30）",
      "🚫 年末年始公休（其餘全年無休）",
      "💴 每人約 ¥1,000〜¥2,000",
      "🪑 店內約12席＋露台4席（座位不多）",
      "📞 03-6240-3006",
    ],
    tip: "座位數很少，假日早上常常客滿。如果只是想買麵包，外帶完全不用等；想內用建議避開10〜12點的尖峰",
    links: [
      { href: "https://bsquared.jp/", label: "🔗 官方網站" },
      { href: "https://www.instagram.com/bsquaredtokyo/", label: "📷 官方 Instagram" },
    ],
  },
  {
    id: "iki",
    no: "2",
    name: "iki Roastery & Eatery",
    sub: "隅田川旁倉庫改建・紐西蘭風咖啡廳",
    photos: [
      { src: "/kiyosumi-cafe/iki-1.jpg", alt: "iki Roastery & Eatery - 拿鐵與開心果丹麥麵包" },
      { src: "/kiyosumi-cafe/iki-2.jpg", alt: "iki Roastery & Eatery - 狗狗壁畫與黃色義式咖啡機" },
      { src: "/kiyosumi-cafe/iki-3.jpg", alt: "iki Roastery & Eatery - 保留倉庫時代的木造挑高屋頂" },
      { src: "/kiyosumi-cafe/iki-4.jpg", alt: "iki Roastery & Eatery - 白牆上的 COFFEE BREAD iki 招牌" },
    ],
    intro:
      "清澄白河人氣店「iki ESPRESSO」的姊妹店，<strong>2022年8月</strong>開在隅田川旁，把一棟<strong>舊倉庫整棟改建</strong>而成🏚️ 最震撼的是抬頭就能看到<strong>完整保留下來的木造挑高屋架</strong>，配上天窗灑進來的自然光，空間開闊到會忘記自己在東京市區。店內同時擁有<strong>自家烘焙機＋麵包工房</strong>，招牌是<strong>紐西蘭風格</strong>的咖啡——Flat White、Long Black、麥蘆卡蜂蜜拿鐵，都是在日本比較少見的選項☕ 牆上那幅巨大的狗狗壁畫是必拍打卡點📸",
    reason:
      "<strong>早上8點就開始營業</strong>，是東京少數能好好吃一頓「西式早午餐」的咖啡廳，麵包、帕尼尼、湯品、濃湯吐司套餐都有，坐下來吃早餐完全不趕時間🍽️ 咖啡走紐西蘭路線，喝慣澳紐系咖啡的人會很有感；<strong>全席可帶寵物</strong>，露台座位還聽得到隅田川的水聲🐶 從清澄白河站走過來只要5分鐘，逛完藍瓶咖啡一號店、東京都現代美術館之後順路過來剛剛好。",
    tags: ["🏚️ 倉庫改建挑高空間", "🇳🇿 紐西蘭風咖啡", "🕗 早上8點開門", "🐶 全席寵物友善", "🌊 隅田川旁", "📸 狗狗壁畫打卡"],
    pickTitle: "☕ 必點推薦（價格為實際造訪時參考）",
    picks: [
      { label: "Flat White／Long Black", desc: "紐西蘭系咖啡的代表，Long Black 約 ¥610" },
      { label: "拿鐵（Latte）", desc: "咖啡師手繪拉花，約 ¥720" },
      { label: "麥蘆卡蜂蜜拿鐵（Manuka Honey Latte）", desc: "紐西蘭產麥蘆卡蜂蜜，這裡才喝得到的一杯" },
      { label: "現烤丹麥麵包・可頌", desc: "附設麵包工房現做，開心果口味特別受歡迎" },
      { label: "湯品吐司套餐・帕尼尼", desc: "想吃正餐早午餐就點這個，套餐約 ¥1,400" },
    ],
    info: [
      "📍 東京都江東區常盤1-4-7",
      "🚃 東京地下鐵・都營地下鐵「清澄白河」駅 徒歩約5分（隅田川旁）",
      "⏰ 平日 8:00〜17:00（餐點 L.O. 16:00）／週末・假日 8:00〜18:00（餐點 L.O. 17:00）",
      "🚫 週三公休",
      "💴 每人約 ¥1,000〜¥2,000",
      "🐶 全席可帶寵物",
      "📞 03-6659-2570",
    ],
    tip: "同集團在附近還有本店「iki ESPRESSO」（常盤2-2-12），兩間走路只要幾分鐘，時間夠的話可以一次比較看看",
    links: [
      { href: "https://iki-espresso.com/", label: "🔗 官方網站" },
      { href: "https://www.instagram.com/iki_espresso/", label: "📷 官方 Instagram" },
    ],
  },
];

const relatedLinks = [
  { href: "/ikejiri-cafe", label: "🍓 池尻大橋咖啡廳推薦｜UN LIVRE 法式甜點店", desc: "澀谷搭車一站直達的隱藏名店" },
  { href: "/nakameguro-cafe", label: "☕ 中目黑咖啡廳推薦｜星巴克臻選東京烘焙工坊", desc: "隈研吾建築・目黑川賞櫻聖地" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京必去咖啡散步地區", desc: "貝果・義式冰淇淋・起司披薩" },
];

export default function KiyosumiCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">清澄白河咖啡廳推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・清澄白河</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          清澄白河咖啡廳推薦2選｜B² ＆<br />iki Roastery・東京咖啡聖地☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-31</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">清澄白河——東京公認的「咖啡聖地」</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>清澄白河</strong>位在東京東側的下町地區，原本是倉庫與工廠林立的老街，因為<strong>藍瓶咖啡（Blue Bottle Coffee）日本一號店</strong>在2015年選在這裡開幕，整個區域一口氣變成東京最熱鬧的<strong>咖啡烘焙聚落</strong>☕ 挑高的舊倉庫最適合擺放大型烘豆機，於是一間接一間的自家烘焙咖啡店在這裡落腳。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇整理我實際去過、<strong>而且都自己烘豆＋自己烤麵包</strong>的兩間店：主打麵包牆的<strong>「B²（B Squared）」</strong>，以及倉庫改建、走紐西蘭路線的<strong>「iki Roastery & Eatery」</strong>。兩間都<strong>早上就開門</strong>，是規劃東京早晨行程時非常好用的選擇🥐
          </p>
        </section>

        <PrepBannerCompact />

        {/* 比較 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">🔍 兩間店怎麼選？</h2>
          <div className="space-y-3">
            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3">
              <p className="text-sm font-bold text-pink-700 mb-1">① B²（B Squared）</p>
              <p className="text-xs text-stone-600 leading-relaxed">想<strong>大量挑麵包</strong>、想外帶去公園野餐、預算想壓在銅板價 → 選這間。座位少，比較適合外帶。</p>
            </div>
            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3">
              <p className="text-sm font-bold text-pink-700 mb-1">② iki Roastery &amp; Eatery</p>
              <p className="text-xs text-stone-600 leading-relaxed">想<strong>坐下來好好吃早午餐</strong>、想拍挑高倉庫空間、想喝紐西蘭系咖啡、有帶狗 → 選這間。</p>
            </div>
          </div>
          <p className="text-xs text-stone-400 mt-3">※ 兩間相距步行約15分鐘，早上先去 iki 吃早餐、回程繞去 B² 買麵包當宵夜是很順的走法</p>
        </section>

        {/* Shops */}
        <h2 className="text-lg font-black text-stone-800 mb-4">清澄白河咖啡廳推薦2選</h2>

        <div className="space-y-8 mb-8">
          {shops.map((shop) => (
            <section key={shop.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-2 gap-0.5">
                {shop.photos.map((p, i) => (
                  <div
                    key={p.src}
                    className={`relative bg-stone-100 ${
                      shop.photos.length % 2 === 1 && i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes={shop.photos.length % 2 === 1 && i === 0 ? "100vw" : "50vw"}
                      className="object-cover"
                      {...(shop.id === "bsquared" && i === 0 ? { priority: true } : {})}
                    />
                  </div>
                ))}
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">{shop.no}</div>
                  <div>
                    <h3 className="text-base font-black text-stone-800">{shop.name}</h3>
                    <span className="text-xs text-stone-400">{shop.sub}</span>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: shop.intro }} />

                <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
                  <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
                  <p className="text-sm text-stone-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: shop.reason }} />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {shop.tags.map((t) => (
                    <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
                  <p className="text-xs font-bold text-amber-700 mb-2">{shop.pickTitle}</p>
                  <ul className="text-xs text-stone-600 space-y-1.5">
                    {shop.picks.map((p) => (
                      <li key={p.label}><strong>{p.label}</strong>：{p.desc}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
                  <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
                  {shop.info.map((line) => (
                    <p key={line} className="text-xs text-stone-600">{line}</p>
                  ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
                  <span className="text-sm shrink-0">💡</span>
                  <p className="text-xs text-stone-600">{shop.tip}</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {shop.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">清澄白河咖啡散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 兩間都是<strong>早上就開門</strong>的店，安排成東京行程的「早晨場」CP值最高🌅</li>
            <li>✅ iki Roastery <strong>週三公休</strong>、B² 基本上全年無休，行程排在週三請留意</li>
            <li>✅ 順路景點：<strong>藍瓶咖啡日本一號店</strong>、<strong>東京都現代美術館</strong>、<strong>清澄庭園</strong>都在步行範圍內</li>
            <li>✅ 從清澄白河站可搭<strong>半藏門線</strong>直達澀谷、<strong>大江戶線</strong>直達新宿，交通比想像中方便🚃</li>
            <li>✅ 這一帶麵包店密度極高，買麵包的預算建議多抓一點，很容易失控🥐</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            清澄白河沒有大型景點，卻是東京最適合「慢慢走、慢慢喝」的區域☕<br />
            早上從一杯自家烘焙咖啡和一個剛出爐的麵包開始，一整天的心情都會不一樣。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「東京的早晨，就交給清澄白河的咖啡香吧🥐」</p>
            </div>
          </div>
        </div>

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
