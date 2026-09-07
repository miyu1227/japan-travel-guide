import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/shin-okubo";
const OG_IMAGE = "/shin-okubo/sawee-1.jpg";

export const metadata: Metadata = {
  title: "新大久保美食推薦｜東京韓國街必吃散步指南",
  description:
    "實際走訪整理3間必吃：章魚蝦內臟鍋「サウィ食堂」、韓系咖啡廳SHINCHON CAFE、話題杜拜麻糬MUJIGE。附新宿出發交通、價格、逛街順序與避開人潮的時段。",
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
    title: "新大久保美食推薦｜東京韓國街必吃散步指南",
    description: "東京最有韓國氛圍的街區。實際走訪3間必吃：章魚蝦內臟鍋・韓系咖啡廳・話題杜拜麻糬。附交通與逛街順序。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "新大久保グルメ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "新大久保美食推薦｜東京韓國街必吃散步指南",
    description: "章魚蝦內臟鍋・韓系咖啡廳・話題杜拜麻糬。東京韓國街散步指南🇰🇷",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "新大久保美食推薦｜東京韓國街必吃散步指南",
  description: "實際走訪新大久保3間店：章魚蝦內臟鍋、韓系咖啡廳、話題杜拜麻糬。附交通與逛街順序。",
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
    reason: "韓系設計感很強，非常適合喜歡拍照的旅客。晚上的氣氛燈光特別美，很適合情侶或女生旅遊。飲料可以外帶邊逛邊喝，是新大久保散步途中的經典中繼站✨",
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
  { href: "/ramen", label: "🍜 東京必吃拉麵推薦6選｜排隊名店・柚子鹽・家系", desc: "三軒茶屋無招牌名店・台場豚骨・六本木柚子鹽" },
  { href: "/shibuya-yakiniku", label: "🥩 澀谷燒肉推薦｜肉 ホルモン千葉", desc: "同樣是山手線沿線，想再吃一頓肉的話" },
  { href: "/spot", label: "🌿 東京野餐推薦｜新宿御苑＆代代木公園", desc: "從新大久保搭一站就到，散步收尾剛好" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
  {
    "@type": "Question",
    "name": "新大久保美食推薦哪些？",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "實際走訪推薦3間：サウィ食堂的ナッコプセ鍋（一人¥1,500〜2,500）、SHINCHON CAFE的韓系咖啡（¥600〜1,200）、MUJIGE的甜點（¥400〜800）。三間都在JR新大久保站走路5分內。"
    }
  },
  {
    "@type": "Question",
    "name": "新大久保怎麼去？",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "JR山手線「新大久保」站，從新宿1站約2分、澀谷約15分、池袋約10分。出站就是大久保通り，主要的店都在這條路上。"
    }
  },
  {
    "@type": "Question",
    "name": "需要事先訂位嗎？",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "這3間都是走進去排隊的類型，基本上不需要訂位。週末12:00〜14:00與18:00之後鍋物店常要等，避開週末或11點多先去會順很多。"
    }
  },
  {
    "@type": "Question",
    "name": "半天真的逛得完嗎？",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "可以。店與店之間走路都在5分鐘內，照「鍋物午餐→咖啡廳休息→外帶甜點」走，3〜4小時就很充實。"
    }
  },
  {
    "@type": "Question",
    "name": "不太能吃辣也可以去嗎？",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "ナッコプセ鍋是中辣，夠味但不會痛。怕辣可以配飲料或白飯，或把重點放在咖啡廳與甜點。"
    }
  }
],
};

export default function ShinOkuboPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-09-07</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">為什麼要去新大久保？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            這篇寫給<strong>第一次去新大久保、只有半天空檔</strong>的台灣・香港旅人。新大久保是東京最有韓國感的街區，從新宿搭JR只要一站，走幾步就能看到韓國料理店、可愛咖啡廳（咖啡店）和各種韓系甜點（甜品）🇰🇷
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            這次實際走訪，整理了3間特別推薦（推介）的店——從熱騰騰的鍋物到打卡咖啡廳、再到人氣甜點，<strong>一個下午就能全部逛完</strong>！
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            <strong>這篇會告訴你</strong>：3間實際吃過的店與價格帶、從新宿・澀谷・池袋怎麼去、什麼時段人最少，還有把鍋物→咖啡→甜點串起來的散步順序👇
          </p>
        </section>

        <PrepBannerCompact />

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
            <p className="text-xs text-stone-400 mt-2">※ 從新大久保站出口沿著「大久保通り」走，主要的店幾乎都集中在這條路上</p>
            <p className="text-xs text-stone-500 mt-2">
              新大久保只靠JR山手線就能到，如果同一天還要去淺草、上野等地下鐵沿線，可以先看看 <Link href="/tokyo-subway-ticket" className="text-blue-600 underline underline-offset-2">東京地鐵乘車券的使用範圍</Link>再決定要不要買。
            </p>
          </div>
        </section>

        {/* Travel tips */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">旅遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 週末人很多，建議平日或早上前往</li>
            <li>✅ 鍋物午餐→咖啡廳→甜點的順序最順暢</li>
            <li>✅ 附近有很多韓國食品超市，買伴手禮（手信）也很方便</li>
            <li>✅ 來日本前先準備網路，方便用 Google Map 找店 📱</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">新大久保美食 常見問題</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 新大久保美食推薦哪些？預算多少？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                這篇3間都實際走訪過：<strong>サウィ食堂</strong>的ナッコプセ鍋（一人¥1,500〜2,500）、<strong>SHINCHON CAFE</strong>的韓系咖啡（¥600〜1,200）、<strong>MUJIGE</strong>的甜點（¥400〜800）。三間都在JR新大久保站走路5分內，一個下午吃得完。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 需要事先訂位嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                這3間都是走進去排隊的類型，基本上不需要訂位。不過週末的用餐時間（12:00〜14:00、18:00之後）鍋物店常常要等，想省時間的話<strong>避開週末、或是11點多就先去吃</strong>會順很多。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 半天真的逛得完嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                可以。主要的店都集中在大久保通り沿線，<strong>店與店之間走路都在5分鐘內</strong>。照「鍋物午餐→咖啡廳休息→外帶甜點」的順序走，大約3〜4小時就很充實了。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 不太能吃辣也可以去嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                ナッコプセ鍋的辣度屬於中辣，實際吃起來是「夠味但不會痛」的程度。真的怕辣的話，可以先點<strong>飲料或白飯一起吃</strong>，或是把重點放在咖啡廳與甜點這兩間。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 逛完新大久保，附近還可以去哪裡？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                新宿只有一站，走回新宿方向可以接<Link href="/spot" className="text-blue-600 underline underline-offset-2">新宿御苑散步</Link>；想再吃一輪的話，
                <Link href="/ramen" className="text-blue-600 underline underline-offset-2">東京拉麵推薦</Link>裡也有幾間在山手線沿線，安排在同一天不會太趕。
              </p>
            </div>
          </div>
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

        <RelatedArticles slug="shin-okubo" exclude={["/ramen", "/shibuya-yakiniku", "/spot"]} />

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
