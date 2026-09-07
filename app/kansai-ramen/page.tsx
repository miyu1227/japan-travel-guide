import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";

const PAGE_URL = "https://www.japantrippicks.com/kansai-ramen";
const OG_IMAGE = "/kansai-ramen/tsujita-2.jpg";

export const metadata: Metadata = {
  title: "大阪沾麵推薦｜つじ田肥後橋濃厚魚介沾麵✅實吃",
  description:
    "大阪沾麵（沾面）推薦：肥後橋名店「つじ田」的濃厚豚骨魚介沾麵，一碗¥1,050、11:00〜22:00營業、肥後橋站8號出口1分。附酢橘與黑七味的三段吃法、菜單價格、排隊時段與交通，實際吃過整理。",
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
    title: "大阪沾麵推薦｜つじ田肥後橋濃厚魚介沾麵",
    description: "大阪沾麵名店つじ田肥後橋店：濃厚豚骨魚介沾麵¥1,050，酢橘與黑七味三段吃法。附菜單、營業時間、交通。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "大阪沾麵推薦・つじ田 肥後橋店的濃厚魚介沾麵" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "大阪沾麵推薦｜つじ田肥後橋濃厚魚介沾麵",
    description: "大阪沾麵名店つじ田，¥1,050的濃厚豚骨魚介沾麵，酢橘與黑七味三段吃法🍜",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "大阪沾麵推薦｜つじ田肥後橋濃厚魚介沾麵【實際吃過】",
  description: "大阪沾麵推薦。肥後橋名店つじ田的濃厚豚骨魚介沾麵完整介紹：菜單價格、營業時間、交通、酢橘與黑七味的三段吃法，另整理關西拉麵的地域特色。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-31T00:00:00+09:00",
  dateModified: "2026-09-07T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "大阪沾麵推薦", item: PAGE_URL },
  ],
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "つじ田 肥後橋店",
  servesCuisine: "つけ麺（沾麵）",
  address: { "@type": "PostalAddress", streetAddress: "西区江戸堀1-10-1", addressLocality: "大阪市", addressRegion: "大阪府", postalCode: "550-0002", addressCountry: "JP" },
  telephone: "+81-6-6676-8797",
  url: "https://tsukemen-tsujita.com/shop/?id=0010030",
  priceRange: "¥1,000〜¥1,500",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "11:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "11:00", closes: "21:30" },
  ],
};

const shops = [
  {
    id: "tsujita",
    number: 1,
    name: "つじ田 肥後橋店",
    highlight: "濃厚豚骨魚介沾麵・東京名店的大阪首間路面店",
    url: "https://tsukemen-tsujita.com/shop/?id=0010030",
    recommend: "濃厚つけ麺（濃厚沾麵）¥1,050",
    images: ["/kansai-ramen/tsujita-2.jpg", "/kansai-ramen/tsujita-1.jpg"],
    intro:
      "つじ田是2005年創業於東京神田的沾麵名店，被稱為「濃厚豚骨魚介沾麵的先驅」，肥後橋店是2024年3月開幕的大阪首間路面店。沾醬以豚骨與大量柴魚、小魚乾熬煮而成，濃稠到會掛在麵上；麵條偏粗、口感非常有嚼勁，是能明顯感受到「麵本身好吃」的一碗。",
    reason:
      "最有趣的是店家指定的<strong>三段式吃法</strong>——前三分之一原味吃，中間三分之一把麵上那顆<strong>酢橘（すだち，日本的小青柑橘）</strong>擠進麵裡讓味道變清爽，最後三分之一撒<strong>黑七味</strong>增添辛香，一碗麵能吃出三種表情✨ 關西的拉麵大多走清爽路線，這種硬派的濃厚魚介沾麵在大阪反而少見，很值得專程排進行程。位置在肥後橋商辦區，中午上班族多、稍微避開12點前後會比較順。",
    basicInfo: {
      address: "大阪市西區江戶堀1-10-1（〒550-0002）",
      access: "Osaka Metro 四橋線「肥後橋」站8號出口 徒步1分／京阪中之島線「渡邊橋」站 徒步約4分",
      hours: "平日 11:00〜22:00／週六日・假日 11:00〜21:30（無固定公休）",
      price: "濃厚沾麵 ¥1,050・特製（加叉燒味玉）¥1,320・麵大盛 +¥150・特盛 +¥250",
      order: "入口的食券機先買餐券再入座，有圖片不用會日文。建議帶現金",
    },
    tags: ["🐟 濃厚豚骨魚介", "🍊 酢橘變化", "🌶️ 黑七味", "🎫 食券機", "⭐ 大阪必吃"],
  },
];

const faqs = [
  {
    q: "大阪沾麵和拉麵差在哪？第一次吃要注意什麼？",
    a: "沾麵（つけ麺，簡體寫作沾面）是麵和湯分開上：麵是冷水冰鎮過的粗麵，湯是濃縮過的沾醬。吃法是一口麵沾一點醬，不要把麵全倒進去，會太鹹。份量通常比拉麵多，並盛就有200g以上。",
  },
  {
    q: "つじ田肥後橋店一碗多少錢？要排多久？",
    a: "濃厚沾麵¥1,050，加叉燒味玉的特製¥1,320，麵大盛+¥150、特盛+¥250。平日12:00〜13:00是附近上班族的尖峰，會排10〜20分；13:30以後或晚餐時段幾乎不用等。",
  },
  {
    q: "つじ田肥後橋店的營業時間和交通？",
    a: "平日11:00〜22:00、週六日・假日11:00〜21:30，沒有固定公休。Osaka Metro四橋線「肥後橋」站8號出口走1分鐘就到，從梅田搭四橋線2站、從難波3站。",
  },
  {
    q: "沾麵怎麼吃才對？",
    a: "照店家建議：前三分之一原味吃，中間三分之一把酢橘擠進麵裡，最後三分之一撒黑七味。吃完麵把沾醬的碗舉起來跟店員說「スープ割りください」，會加高湯讓你把湯喝完。",
  },
  {
    q: "大阪還有哪些沾麵推薦？",
    a: "本站只寫實際吃過的店，目前大阪的沾麵先推這一間。大阪的拉麵・沾麵名店集中在梅田、難波、福島一帶，之後吃過會陸續追加到這篇。",
  },
];


const kansaiStyles = [
  {
    name: "大阪：多元混戰型",
    desc: "大阪沒有單一的「大阪拉麵」流派，反而是各種系統混戰——濃厚魚介沾麵、雞白湯、醬油清湯、九州豚骨都有，是關西拉麵激戰區。",
  },
  {
    name: "京都：濃厚醬油系",
    desc: "京都拉麵意外地重口味，以背脂醬油、雞白湯（濃厚どろどろ系）為代表，跟「京都=清淡」的印象完全相反。",
  },
  {
    name: "和歌山：中華そば",
    desc: "和歌山的「中華そば」是豚骨醬油系，湯色偏深、味道濃郁，是關西少數擁有明確地域流派的拉麵。",
  },
  {
    name: "神戶：豚骨與中華系並存",
    desc: "神戶因為港口城市的背景，受九州豚骨與中華料理影響都很深，濃厚豚骨與清爽醬油系的店同時存在。",
  },
];

const relatedLinks = [
  { href: "/ramen", label: "🍜 東京必吃拉麵推薦6選｜排隊名店・柚子鹽・家系", desc: "三軒茶屋無招牌名店・台場豚骨・六本木柚子鹽" },
  { href: "/osaka-gourmet", label: "🍻 大阪鐵板燒・居酒屋推薦｜梅田・福島在地人氣2店", desc: "鉄板屋な。＆酒場ビリー" },
  { href: "/steak-zen", label: "🥩 神戶牛推薦｜ステーキハウスZEN 三宮店", desc: "A5鐵板燒名店・主廚現煎" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function KansaiRamenArticle() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 transition-colors text-sm flex items-center gap-1">
            ← 返回
          </Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">大阪沾麵推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍜 沾麵・拉麵</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 大阪・肥後橋</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際吃過</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          大阪沾麵推薦｜肥後橋つじ田的<br />濃厚豚骨魚介沾麵🍜
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-09-07（價格為2026年9月時點）</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">在大阪，留一餐給沾麵</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            說到<strong>大阪</strong>的美食，大家先想到的通常是章魚燒、大阪燒、串炸，<strong>沾麵（つけ麺）</strong>常常被排到後面。但大阪其實是全日本競爭最激烈的拉麵戰區之一，濃厚魚介、雞白湯、九州豚骨全部混戰在一起，而且<strong>來自東京的沾麵名店這幾年也陸續進駐</strong>🍜
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            這篇寫給<strong>想在大阪吃一碗像樣的沾麵</strong>的台灣・香港旅人。<strong>你會知道</strong>：肥後橋名店<strong>「つじ田」</strong>的菜單與價格（濃厚沾麵¥1,050）、營業時間、從梅田・難波怎麼去、什麼時段不用排，以及店家指定的酢橘・黑七味三段吃法。
          </p>
          <p className="text-xs text-stone-500 leading-relaxed">
            本站只寫實際吃過的店。大阪的沾麵目前先推這一間，之後吃過的店會陸續追加（<strong>持續更新中</strong>）。
          </p>
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
            <p className="text-xs text-stone-600">
              🗼 找東京的拉麵嗎？請看 <Link href="/ramen" className="text-blue-600 underline underline-offset-2 font-semibold">東京必吃拉麵推薦6選｜排隊名店・柚子鹽・家系</Link>
            </p>
          </div>
        </section>

        {/* 沾麵とは */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">先搞懂：沾麵跟拉麵差在哪？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            <strong>沾麵（つけ麺）</strong>是麵和湯分開上桌：麵條煮好後過冷水冰鎮，口感Q彈；湯則是把拉麵湯頭再濃縮成<strong>沾醬</strong>，鹹度和濃度都比拉麵高，所以是「一口麵沾一點醬」，不是把麵倒進去。
          </p>
          <ul className="space-y-1.5 text-sm text-stone-600">
            <li>🍜 <strong>份量比拉麵多</strong>：並盛通常就有200g以上，女生點並盛就很飽</li>
            <li>🐟 <strong>豚骨魚介</strong>是沾麵最主流的味型：豚骨的濃＋柴魚・小魚乾的香，つじ田就是這一派的代表</li>
            <li>🍊 桌上或麵上的<strong>酢橘、黑七味</strong>不是裝飾，是店家設計好的「換口味」道具</li>
            <li>🥣 最後的<strong>スープ割り</strong>（加高湯）是沾麵專屬儀式，拉麵沒有</li>
          </ul>
        </section>

        {/* H2: 推薦 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">大阪沾麵推薦・推介（實際吃過）</h2>

        {/* Shops */}
        <div className="space-y-8 mb-10">
          {shops.map((shop) => (
            <section key={shop.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              <div className={`grid ${shop.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-0.5`}>
                {shop.images.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] bg-stone-100">
                    <Image
                      src={src}
                      alt={i === 0 ? `${shop.name} 濃厚豚骨魚介沾麵（附酢橘） - 大阪沾麵推薦` : `${shop.name} - 大阪沾麵推薦`}
                      fill
                      sizes={shop.images.length > 1 ? "50vw" : "100vw"}
                      className="object-cover"
                      {...(shop.number === 1 && i === 0 ? { priority: true } : {})}
                    />
                  </div>
                ))}
              </div>

              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">
                    {shop.number}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-stone-800 leading-tight">{shop.name}</h3>
                    <p className="text-xs text-stone-400">{shop.highlight}</p>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-3">{shop.intro}</p>

                <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
                  <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
                  <p className="text-sm text-stone-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: shop.reason }} />
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {shop.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>

                <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
                  <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
                  <p className="text-xs text-stone-600">📍 {shop.basicInfo.address}</p>
                  <p className="text-xs text-stone-600">🚃 {shop.basicInfo.access}</p>
                  <p className="text-xs text-stone-600">⏰ {shop.basicInfo.hours}</p>
                  <p className="text-xs text-stone-600">💴 {shop.basicInfo.price}</p>
                  <p className="text-xs text-stone-600">🎫 {shop.basicInfo.order}</p>
                  <p className="text-xs text-red-600 font-semibold">💡 推薦：{shop.recommend}</p>
                </div>

                <a
                  href={shop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
                >
                  🔗 查看店家資訊
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* 沾麵吃法 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">🍜 つじ田指定的沾麵吃法（三段式）</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>1️⃣ <strong>前三分之一</strong>：什麼都不加，麵條一口份量沾進濃醬（不要整碗倒下去，會太鹹），先感受豚骨魚介的原味</li>
            <li>2️⃣ <strong>中間三分之一</strong>：把麵上那顆<strong>酢橘</strong>擠在麵條上拌勻再沾，酸香讓濃醬瞬間變清爽</li>
            <li>3️⃣ <strong>最後三分之一</strong>：撒桌上的<strong>黑七味</strong>在麵上，多一層山椒的辛香收尾</li>
            <li>4️⃣ 麵吃完後把沾醬的碗舉起來跟店員說「<strong>スープ割りください</strong>」，會加高湯稀釋成可以喝完的湯</li>
            <li>5️⃣ 麵量：並盛¥1,050、<strong>大盛+¥150、特盛+¥250</strong>，食量大的人在食券機直接選</li>
          </ul>
          <p className="text-xs text-stone-500 leading-relaxed mt-3">
            ※ 這個順序是店家官方建議的吃法，桌上也有日文說明卡。照著吃，一碗會有三種味道。
          </p>
        </section>

        {/* 交通・時段 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">從梅田・難波怎麼去？什麼時段不用排？</h2>
          <ul className="space-y-2 text-sm text-stone-600 mb-3">
            <li>🚇 <strong>從梅田</strong>：Osaka Metro 四橋線「西梅田」站→「肥後橋」站，2站約3分，8號出口走1分</li>
            <li>🚇 <strong>從難波</strong>：四橋線「難波」站→「肥後橋」站，3站約5分</li>
            <li>🚶 <strong>從中之島・大阪市立科學館</strong>：走路約5〜8分，可以排在中之島散步的午餐</li>
          </ul>
          <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-xs text-stone-600 leading-relaxed space-y-1">
            <p>⏰ <strong>平日 12:00〜13:00</strong>：附近上班族的尖峰，會排10〜20分</p>
            <p>⏰ <strong>平日 13:30 以後・晚餐時段</strong>：幾乎不用等，觀光客最推這個時間</p>
            <p>⏰ <strong>週六日</strong>：商辦區反而人少，中午也很好進，只是收班提早到21:30</p>
          </div>
        </section>

        {/* 關西拉麵流派 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">延伸：關西各地的拉麵特色</h2>
          <p className="text-xs text-stone-500 leading-relaxed mb-3">吃完大阪的沾麵，如果行程還會去京都、神戶、和歌山，各地的拉麵風格差很多，順手記一下。</p>
          <div className="space-y-3">
            {kansaiStyles.map((s) => (
              <div key={s.name} className="flex gap-3">
                <span className="text-red-400 font-black text-sm shrink-0">▸</span>
                <div>
                  <p className="text-sm font-bold text-stone-700">{s.name}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">大阪吃沾麵・拉麵小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 多數店採<strong>食券機（售票機）</strong>，先買餐券再入座，有圖片的機器不會日文也能點</li>
            <li>✅ 肥後橋・本町一帶是商辦區，<strong>週末部分店家會公休</strong>（つじ田沒有固定公休），出發前建議查官網</li>
            <li>✅ 沾麵的麵是冰鎮過的，<strong>想吃熱的可以選「あつもり」</strong>（熱盛，麵過熱水），冬天很多人這樣點</li>
            <li>✅ 想一次吃多間的話，大阪梅田・難波周邊拉麵店密度最高</li>
            <li>✅ 老店不少只收現金，建議隨身帶日幣（日圓）紙鈔</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            來大阪除了粉物之外，也很推薦留一餐給拉麵✨<br />
            尤其是這種能自己調味、越吃越有變化的濃厚沾麵，吃完會很有成就感。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「沾麵吃到一半擠上酢橘，是我每次都會做的小儀式🍊」</p>
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

        <RelatedArticles slug="kansai-ramen" exclude={["/osaka-gourmet", "/ramen", "/steak-zen"]} />

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
