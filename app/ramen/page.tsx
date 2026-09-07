import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/ramen";
const OG_IMAGE = "/ramen/washo-1.jpg";

export const metadata: Metadata = {
  title: "東京拉麵推薦6選｜必吃排隊名店・柚子鹽・家系【實際吃過】",
  description:
    "實際吃過的6間東京拉麵：三軒茶屋「めん和正」、目黑和利道、中目黑俺流鹽味、台場神仙、六本木AFURI柚子鹽、家系町田商店。附地址・交通・價格・推薦菜單。",
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
    title: "東京拉麵推薦6選｜必吃排隊名店・柚子鹽・家系",
    description: "三軒茶屋無招牌名店・目黑排隊店・中目黑鹽味・台場豚骨・六本木柚子鹽・家系拉麵。實際吃過的東京拉麵6選！",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "東京拉麵推薦・めん和正的中華麵" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京拉麵推薦6選｜必吃排隊名店・柚子鹽・家系",
    description: "三軒茶屋無招牌名店・目黑排隊店・台場豚骨・六本木柚子鹽。實際吃過的東京拉麵6選🍜",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京拉麵推薦6選｜必吃排隊名店・柚子鹽・家系【實際吃過】",
  description: "整理6間實際吃過的東京拉麵推薦，包含三軒茶屋めん和正、目黑和利道、中目黑俺流鹽味、台場神仙、六本木AFURI柚子鹽、家系町田商店。",
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
    { "@type": "ListItem", position: 2, name: "東京拉麵推薦", item: PAGE_URL },
  ],
};

const shops = [
  {
    id: "washo",
    number: 1,
    name: "めん 和正（Men Washo）",
    highlight: "三軒茶屋・無招牌的煮干魚介名店",
    url: "https://tabelog.com/tokyo/A1317/A131706/13050021/",
    tag: "東京",
    recommend: "中華麵（中華麺）／沾麵（つけ麺）",
    images: ["/ramen/washo-1.jpg", "/ramen/washo-2.jpg"],
    intro:
      "位在三軒茶屋、開在246大馬路旁卻幾乎沒有招牌的隱藏名店。店主出身自東京煮干系的傳奇名店「永福町大勝軒」，湯頭以煮干（小魚乾）與柴魚熬成，香氣濃烈、帶著微微的稠度，卻是無添加化學調味料的做法。菜單只有「中華麵」與「沾麵」兩種，連白飯類都沒有，是一間把全部力氣都放在麵上的店。",
    reason:
      "門口只掛著一塊小小的木牌，第一次去100%會走過頭😅 但推開拉門後端出來的那碗，是東京少見的正統煮干系——湯色偏深卻不死鹹，捲曲的粗麵吸滿魚介香，配上厚實的煮豬叉燒與大量筍乾，滿足度極高🔥 麵量可以用<strong>0.5玉為單位加價增量</strong>，食量大的人也不怕。座位只有10席、僅收現金，是很有「東京在地拉麵店」感覺的一間。",
    basicInfo: {
      address: "東京都世田谷區太子堂2-6-2",
      access: "東急田園都市線・世田谷線「三軒茶屋」駅 徒歩約7分（沿國道246號往澀谷方向）",
      price: "¥900〜¥1,200（僅收現金）",
    },
    tags: ["🐟 煮干魚介系", "🏮 永福町大勝軒系", "🈚 無招牌隱藏店", "💵 僅收現金"],
  },
  {
    id: "warido",
    number: 2,
    name: "和利道",
    highlight: "東京排隊名店・濃厚魚介",
    url: "https://www.hotpepper.jp/strJ000815400/",
    tag: "東京",
    recommend: "つけ麺",
    images: ["/ramen/warido.jpg"],
    intro: "東京人氣極高的排隊拉麵店，以濃厚魚介系湯頭聞名。味道偏重但非常香濃，令人印象深刻。",
    reason: "很多人專程來吃，常常需要排隊，但真的很值得🔥 如果你來東京旅遊想吃拉麵，這間是非常推薦的選擇之一。建議平日早點去避開人潮。",
    basicInfo: {
      address: "東京都目黑區目黑周邊",
      access: "JR・東急「目黑」駅 徒歩約10分",
      price: "¥1,100〜¥1,600",
    },
    tags: ["🔥 排隊名店", "🐟 濃厚魚介", "⭐ 東京必吃"],
  },
  {
    id: "oreryuu",
    number: 3,
    name: "俺流鹽味拉麵 中目黑店",
    highlight: "配料自由搭配・清爽鹽味",
    url: "https://oreryushio.co.jp/?page_id=129",
    tag: "東京",
    recommend: "鹽味拉麵（自由加配料）",
    images: ["/ramen/oreryuu-1.jpg", "/ramen/oreryuu-2.jpg"],
    intro: "位於中目黑的人氣鹽味拉麵店，湯頭清爽卻帶有深度，是不分客層都喜愛的一碗。氛圍輕鬆，一個人也很容易進去用餐。",
    reason: "最大魅力是配料自由度超高！種類豐富，可以依自己喜好客製化，這次點的一碗加了滿滿的叉燒和半熟蛋，分量十足✨ 不會太油膩，無論午餐或晚餐都剛剛好。",
    basicInfo: {
      address: "東京都目黑區上目黑3-1-4",
      access: "東急東橫線・東京地下鐵日比谷線「中目黑」駅 徒歩約2分",
      price: "¥800〜¥1,200",
    },
    tags: ["🧂 清爽鹽味", "🥚 配料自由", "🚶 中目黑徒步2分"],
  },
  {
    id: "shinsen",
    number: 4,
    name: "金澤濃厚豚骨拉麵 神仙 台場店",
    highlight: "金澤發祥・濃厚豚骨醬油",
    url: "https://tabelog.com/tokyo/A1313/A131306/13206967/",
    tag: "東京",
    recommend: "特製王道豚骨醬油拉麵",
    images: [
      "/ramen/shinsen/shinsen-5.jpg",
      "/ramen/shinsen/shinsen-2.jpg",
      "/ramen/shinsen/shinsen-1.jpg",
      "/ramen/shinsen/shinsen-3.jpg",
      "/ramen/shinsen/shinsen-4.jpg",
    ],
    intro: "位於台場AQUA CiTY 5樓「東京拉麵國技館 舞」內的人氣店，本店在金澤，以濃厚豚骨醬油系拉麵聞名。這次點了王道豚骨醬油拉麵＋叉燒飯＋葱花煎餃，湯頭濃郁但不會膩，搭配半熟糖心蛋和厚切叉燒非常滿足。",
    reason: "台場逛街逛累了直接進來一碗超補血🍜 湯頭表面浮著豚骨油、但入口意外地圓潤好喝，麵條偏粗有嚼勁。叉燒飯上的葱和海苔香氣十足，跟拉麵是絕配。台場觀光行程中吃飯很方便，帶行李入店也OK。",
    basicInfo: {
      address: "東京都港區台場1-7-1 AQUA CiTY ODAIBA 5F 東京拉麵國技館 舞",
      access: "百合海鷗線「台場」駅 徒歩約1分／臨海線「東京Teleport」駅 徒歩約6分",
      price: "¥1,200〜¥1,800",
    },
    tags: ["🐷 濃厚豚骨醬油", "🏬 台場AQUA CiTY內", "🍥 金澤發祥"],
  },
  {
    id: "afuri",
    number: 5,
    name: "AFURI 六本木",
    highlight: "柚子鹽拉麵・東京話題名店",
    url: "https://www.hotpepper.jp/strJ001118169/",
    tag: "東京",
    recommend: "柚子鹽拉麵",
    images: ["/ramen/afuri-1.jpg"],
    intro: "東京最具話題的柚子鹽拉麵名店「AFURI」的六本木店。位於六本木Hills內，是觀光客也方便造訪的人氣店。湯頭以雞骨、煮干、柚子調製，清澈卻香氣豐富。",
    reason: "招牌的「柚子鹽拉麵」是日本拉麵的革命性存在！柚子的清香完美襯托雞骨高湯的鮮甜🍋 麵條細而Q彈，搭配低溫慢煮的雞肉叉燒，每一口都很驚艷。海外旅客也容易接受的口味，是東京拉麵入門的首選。",
    basicInfo: {
      address: "東京都港區六本木6-10-1 六本木Hills METRO HAT B2F",
      access: "東京地下鐵日比谷線「六本木」駅 徒歩約3分",
      price: "¥1,200〜¥1,600",
    },
    tags: ["🍋 柚子鹽", "🐔 雞骨清湯", "🏬 六本木Hills內"],
  },
  {
    id: "machida",
    number: 6,
    name: "町田商店",
    highlight: "家系拉麵・全國連鎖",
    url: "https://www.machidashoten.com/menu",
    tag: "全國",
    recommend: "豚骨醬油拉麵",
    images: ["/ramen/machida.jpg"],
    intro: "日本超有名的連鎖家系拉麵，特色是濃厚豚骨醬油湯頭，搭配海苔和白飯完美絕配！東京各地都有分店，臨時想吃拉麵時最方便。",
    reason: "可以選擇麵硬度、湯頭濃度、油量，自由度很高，非常適合第一次體驗日本拉麵的旅客👍 日本各地都有分店，隨時都能去。",
    basicInfo: {
      address: "東京都內多間分店（全國連鎖）",
      access: "各地都有，可用Google Map搜尋最近分店",
      price: "¥800〜¥1,200",
    },
    tags: ["🐷 豚骨醬油", "🏪 全國連鎖", "👶 初次挑戰OK"],
  },
];

const ramenTypes = [
  { name: "つけ麺（沾麵）", desc: "麵和湯分開，把麵沾著濃湯吃。湯頭通常很濃郁，非常有特色。" },
  { name: "家系拉麵", desc: "發源自橫濱的濃厚豚骨醬油系拉麵，配料通常有海苔、菠菜、叉燒。" },
  { name: "煮干・魚介系", desc: "使用小魚乾與柴魚等魚貝類熬製的湯底，帶有濃厚海鮮香氣，是東京拉麵的代表流派之一。" },
  { name: "柚子鹽", desc: "以雞骨清湯搭配柚子皮香氣的清爽系拉麵，口味清淡，海外旅客接受度很高。" },
];

const relatedLinks = [
  { href: "/kansai-ramen", label: "🍜 大阪沾麵推薦｜肥後橋つじ田的濃厚豚骨魚介沾麵", desc: "濃厚沾麵¥1,050・酢橘與黑七味三段吃法" },
  { href: "/shibuya-yakiniku", label: "🥩 澀谷燒肉推薦｜ホルモン千葉・內臟燒肉名店", desc: "京都發跡・店員全程代烤" },
  { href: "/shin-okubo", label: "🍲 新大久保美食推薦｜韓國料理・咖啡・甜點", desc: "ナッコプセ鍋・韓系咖啡廳・杜拜巧克力" },
];

export default function RamenArticle() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">東京拉麵推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍜 拉麵</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際吃過</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京拉麵推薦6選｜必吃排隊<br />名店・柚子鹽・家系拉麵🍜
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-12</p>

        {/* Why ramen */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">來東京一定要吃拉麵！</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>東京</strong>是全世界拉麵店密度最高的城市，光是市區就有<strong>數千間</strong>拉麵店，而且流派非常多元——醬油、鹽味、豚骨、煮干、沾麵⋯⋯每一間都有自己的個性🍜
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇整理了<strong>6間我實際吃過的東京拉麵</strong>：三軒茶屋幾乎沒有招牌的煮干名店「めん和正」、目黑的排隊名店和利道、中目黑可以自由加配料的鹽味拉麵、台場「神仙」的金澤濃厚豚骨醬油、六本木AFURI的柚子鹽清湯，以及全國到處都有的家系連鎖町田商店。從硬派老饕店到觀光客友善店都有，請依行程選擇！
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-2">
            這篇寫給<strong>不知道該挑哪一碗、又怕踩雷</strong>的台灣・香港旅人。<strong>你會知道</strong>：東京拉麵有哪些流派、6間店各自的位置與價格帶、食券機怎麼買、排隊時間怎麼抓，以及一個人去會不會尷尬。
          </p>
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
            <p className="text-xs text-stone-600">
              🚄 找關西的拉麵嗎？請看 <Link href="/kansai-ramen" className="text-blue-600 underline underline-offset-2 font-semibold">大阪沾麵推薦｜肥後橋つじ田的濃厚豚骨魚介沾麵</Link>
            </p>
          </div>
        </section>

        <PrepBannerCompact />

        {/* H2: 拉麵種類 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">東京拉麵種類簡單說明</h2>
          <div className="space-y-3">
            {ramenTypes.map((type) => (
              <div key={type.name} className="flex gap-3">
                <span className="text-red-400 font-black text-sm shrink-0">▸</span>
                <div>
                  <p className="text-sm font-bold text-stone-700">{type.name}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* H2: 推薦 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">東京拉麵推薦（推介）・6間必吃（必食）</h2>

        {/* Shops */}
        <div className="space-y-8 mb-10">
          {shops.map((shop) => (
            <section key={shop.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              {/* Photos */}
              <div className={`grid ${shop.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-0.5`}>
                {shop.images.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] bg-stone-100">
                    <Image
                      src={src}
                      alt={`${shop.name} - 東京拉麵推薦`}
                      fill
                      sizes={shop.images.length > 1 ? "50vw" : "100vw"}
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
                    <p className="text-xs text-stone-400">{shop.highlight}</p>
                  </div>
                </div>

                {/* 介紹 */}
                <p className="text-sm text-stone-600 leading-relaxed mb-3">{shop.intro}</p>

                {/* 推薦理由 */}
                <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
                  <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
                  <p className="text-sm text-stone-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: shop.reason }} />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {shop.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>

                {/* 基本資訊 */}
                <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
                  <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
                  <p className="text-xs text-stone-600">📍 {shop.basicInfo.address}</p>
                  <p className="text-xs text-stone-600">🚃 {shop.basicInfo.access}</p>
                  <p className="text-xs text-stone-600">💴 {shop.basicInfo.price}</p>
                  {shop.id === "washo" && (
                    <p className="text-xs text-stone-600">⏰ 11:30〜14:30／18:30〜22:00（週一公休）</p>
                  )}
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

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">東京吃拉麵小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 熱門店通常需要排隊，建議<strong>平日、開店後不久</strong>前往</li>
            <li>✅ 很多店是<strong>食券機（售票機）先買餐券</strong>，也有像和正一樣後付現金的店</li>
            <li>✅ つけ麺可以選麵量（並・中・大），通常同價或加價很少</li>
            <li>✅ 家系拉麵可以選麵硬度・湯頭濃淡・油量，不確定就說「普通」</li>
            <li>✅ 吃完沾麵可以加湯（割りスープ），把濃湯稀釋成清湯喝完</li>
            <li>✅ 老店不少<strong>只收現金</strong>，建議隨身帶日幣（日圓）紙鈔</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">東京吃拉麵 常見問題</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 排隊名店大概要等多久？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                看時段差很多。<strong>12:00〜13:30 的午餐尖峰</strong>是最慘的，人氣店排上30分鐘以上很常見。想省時間就抓<strong>開店後不久或下午2點以後</strong>，通常可以直接進去。拉麵店的翻桌很快，隊伍看起來長也不代表要等很久。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 不會日文也點得到嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                多數店是<strong>食券機（售票機）先買餐券</strong>，機器上大多有照片，有些也有中文或英文切換，指著按就可以。真的看不懂時，按最上排左邊那格通常就是招牌拉麵——這是日本拉麵店不成文的排法。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 可以刷卡或用行動支付嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                新一點的店與連鎖店多半可以，但<strong>老店只收現金的情況還是不少</strong>。食券機有些也只吃紙鈔硬幣。建議身上留一點日幣現金，會比較不會卡住。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 一個人去會不會很奇怪？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                完全不會，<strong>拉麵店本來就是一個人吃的地方</strong>，吧台座位就是為此設計的。反而是三、四個人一起去比較難併桌。吃完就走是常態，不用擔心要待多久才禮貌。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 這幾間可以排在同一天嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                中目黑與六本木都在東京メトロ日比谷線上，串在同一天很順；三軒茶屋與台場則要另外換車。如果當天會搭好幾趟地下鐵，可以順便看看
                <Link href="/tokyo-subway-ticket" className="text-blue-600 underline underline-offset-2">Tokyo Subway Ticket 划不划算</Link>。
              </p>
            </div>
          </div>
        </section>

        {/* ぽやぴよ總結 */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            這6間各有特色✨ 三軒茶屋的硬派煮干、目黑的排隊名店、中目黑的自由配料鹽味、台場的濃厚豚骨、六本木的柚子鹽清湯，還有隨處可見的家系拉麵——<br />
            來東京旅遊，一定要安排一餐專程去吃拉麵！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「東京的拉麵真的每一間都有自己的個性，吃完一碗還想再來一碗🍜」</p>
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

        <RelatedArticles slug="ramen" exclude={["/kansai-ramen", "/shibuya-yakiniku", "/shin-okubo"]} />

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
