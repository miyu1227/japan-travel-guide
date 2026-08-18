import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";

const PAGE_URL = "https://www.japantrippicks.com/noge";
const OG_IMAGE = "/noge/cover.jpg";

export const metadata: Metadata = {
  title: "橫濱野毛續攤2選｜壽司¥99起・平價居酒屋✅實訪",
  description:
    "橫濱最大居酒屋街「野毛」的續攤2選：霓虹中華酒場「AM:PM」與壽司一貫¥99起的「スシマヅメ 野毛本店」。櫻木町站徒步3分，一人¥2,000〜3,000。附續攤路線。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "橫濱野毛續攤推薦2選｜平價居酒屋・神級壽司¥99起",
    description: "櫻木町站徒步3分！霓虹中華酒場AM:PM＋壽司¥99起的スシマヅメ，一人¥2,000〜3,000的橫濱夜晚🍶",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "橫濱野毛續攤推薦・スシマヅメ的鐵火卷與天婦羅" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "橫濱野毛續攤推薦2選｜平價居酒屋・神級壽司¥99起",
    description: "櫻木町站徒步3分！霓虹中華酒場＋壽司¥99起的大眾壽司酒場🍶",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "橫濱野毛續攤推薦2選｜平價居酒屋・神級壽司¥99起【實際造訪】",
  description:
    "橫濱野毛的續攤推薦：ネオ町中華AM:PM與大眾壽司酒場スシマヅメ野毛本店。交通、價格、營業時間與續攤路線完整整理。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-08-18T00:00:00+09:00",
  dateModified: "2026-08-18T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "橫濱野毛續攤推薦", item: PAGE_URL },
  ],
};

const ampmPhotos = [
  "/noge/ampm-1.jpg",
  "/noge/ampm-2.jpg",
  "/noge/ampm-3.jpg",
  "/noge/ampm-4.jpg",
  "/noge/ampm-5.jpg",
];
const madumePhotos = ["/noge/madume-1.jpg", "/noge/madume-2.jpg", "/noge/madume-3.jpg"];

const relatedLinks = [
  { href: "/shibuya-yakiniku", label: "🥩 澀谷燒肉推薦｜ホルモン千葉・內臟燒肉名店", desc: "京都發跡・斜面鐵板・店員全程代烤" },
  { href: "/tokyo-yakiniku", label: "🥩 東京高級燒肉推薦｜叙々苑 品川王子大飯店店", desc: "品川站2分・午餐¥2,640起" },
  { href: "/chigasaki", label: "🌊 茅崎夏日推薦｜湘南海灘野餐＆海邊咖啡", desc: "同樣是神奈川的半日小旅行" },
];

const faqItems = [
  { q: "幾點開始續攤最好？", a: "AM:PM 週六從14:00、週日假日14:00〜22:00就有開，平日則是17:00以後。スシマヅメ週六日假日12:00就開門。白天的野毛很安靜，18:00之後整條街才會亮起來。" },
  { q: "有公休日嗎？", a: "スシマヅメ野毛本店週一公休（遇假日順延至週二），AM:PM無公休。" },
  { q: "一個人大概多少錢？", a: "兩間都是一人約¥2,000〜¥3,000。壽司一貫¥99起、生魚片¥429起、口水雞¥890。另外有些店會收お通し（開胃小菜費，約¥300〜500）。" },
  { q: "需要訂位嗎？", a: "野毛的店多半很小，人數越少越好進。4人以上建議先訂位。" },
];

export default function NogePage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">橫濱野毛續攤推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍽️ 美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 神奈川・橫濱野毛</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          橫濱野毛續攤推薦2選｜平價<br />居酒屋・壽司一貫¥99起🍶
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-18</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">野毛——橫濱最大的居酒屋街，也是「續攤」的聖地</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            說到橫濱，大家想到的都是紅磚倉庫、摩天輪、港未來的夜景🎡 但只要從<strong>櫻木町站</strong>往反方向走3分鐘，就會進入完全不同的世界——<strong>野毛（Noge）</strong>。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            這一帶戰後是有名的黑市，後來慢慢長成了<strong>約600間餐飲店擠在一起</strong>的橫濱最大飲酒街🏮 巷子窄、招牌亂、店都很小，正因為這樣，這裡的玩法從來不是「找一間坐一整晚」，而是<strong>「はしご酒（hashigo-zake）」＝續攤</strong>：一間喝兩杯、吃兩盤就換下一間。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇寫給<strong>想體驗日本人真實夜生活、又不想花大錢</strong>的台灣・香港旅人。介紹兩間實際走過、<strong>便宜又好吃</strong>的店：霓虹燈下的新派中華酒場<strong>「AM:PM」</strong>，以及壽司<strong>一貫¥99起</strong>的<strong>「大眾壽司酒場 スシマヅメ 野毛本店」</strong>。兩間走路不用5分鐘，剛好串成一晚。
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
                <p className="text-sm font-bold text-stone-700">AM:PM → 霓虹燈新派中華酒場</p>
                <p className="text-xs text-stone-500 leading-relaxed">口水雞・脆邊煎餃・空心菜，配啤酒或高球最對味</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">スシマヅメ 野毛本店 → 大眾壽司酒場</p>
                <p className="text-xs text-stone-500 leading-relaxed">全國漁港直送的「釣魚」，壽司¥99起、生魚片¥429起</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3">
            推薦順序：<strong>先AM:PM暖身 → 再去スシマヅメ收尾</strong>（壽司當結尾比較不會被中華的重口味蓋過）🍣
          </p>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">橫濱野毛續攤推薦・2選</h2>

        {/* Spot 1: AM:PM */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {ampmPhotos.slice(0, 3).map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="ネオ町中華 AM:PM 野毛・櫻木町 - 橫濱野毛續攤推薦"
                  fill
                  sizes="33vw"
                  className="object-cover"
                  {...(i === 0 ? { priority: true } : {})}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-0.5">
            {ampmPhotos.slice(3, 5).map((src, i) => (
              <div key={i} className="relative aspect-[3/2] bg-stone-100">
                <Image src={src} alt="ネオ町中華 AM:PM - 空心菜與口水雞" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">AM:PM（エーエムピーエム）</h3>
                <span className="text-xs text-stone-400">ネオ町中華 AM:PM 野毛・櫻木町</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              2021年開幕的<strong>「新派中華酒場（ネオ町中華）」</strong>🏮 日文的「町中華」指的是老街上那種平價中華食堂，而這間店把它整個翻新——<strong>黑白八角磁磚桌面、霓虹燈招牌、開放式吧台</strong>，賣的卻是很實在的中華下酒菜，還加了一點東南亞的辛香料風味。價位是很誠實的居酒屋價位，一人<strong>¥2,000〜¥3,000</strong>就能吃得很飽。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                招牌是<strong>口水雞（よだれ鶏・¥890）</strong>——雞肉軟嫩、辣油香麻不嗆，是配啤酒的最強前菜🍺 <strong>手工羊肉煎餃（¥580）</strong>煎出一整片金黃色的脆裙邊，另一款蒜片煎餃則是滿滿的炸蒜香，兩種都很值得點🥟 <strong>蒜炒空心菜</strong>爽脆夠鹹，很適合中和油膩。想吃飽一點的話還有紅油拌米線。對台灣・香港旅客來說，這裡的味道<strong>熟悉又不會踩雷</strong>，是續攤的第一站最安全的選擇。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🏮 霓虹燈中華酒場", "🌶️ 招牌口水雞", "🥟 脆邊手工煎餃", "🍺 啤酒・高球都便宜", "💰 一人¥2,000〜", "🚭 平日17點開店"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 神奈川縣橫濱市中區花咲町1-40 叶家大樓1F</p>
              <p className="text-xs text-stone-600">🚃 JR・市營地下鐵「櫻木町」駅 徒歩約3分</p>
              <p className="text-xs text-stone-600">⏰ 週一〜四 17:00〜23:00／週五 16:00〜／週六 14:00〜／週日・假日 14:00〜22:00（無公休）</p>
              <p className="text-xs text-stone-600">💴 一人約¥2,000〜¥3,000／口水雞¥890・手工羊肉煎餃¥580（價格以店頭菜單為準）</p>
              <p className="text-xs text-stone-600">🪑 56席（吧台20席・桌位26席）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                <strong>週末從下午2點就開門</strong>，想早點開始續攤的話週六日最方便；平日則是17點以後才營業
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="https://ampm-sakuragichou.owst.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🔗 官方網站
              </a>
              <a href="https://www.hotpepper.jp/strJ001282326/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🔗 店家資訊
              </a>
            </div>
          </div>
        </section>

        {/* Spot 2: スシマヅメ */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {madumePhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="大眾壽司酒場 スシマヅメ 野毛本店 - 橫濱野毛續攤推薦" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">大眾壽司酒場 スシマヅメ 野毛本店</h3>
                <span className="text-xs text-stone-400">Sushi Madume Noge</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              概念是<strong>「在都市裡也能吃到好吃的『釣魚』」</strong>🎣 一般的魚是用網子大量捕撈，但這間店特地從<strong>全國各地的漁港與釣船宿</strong>進貨<strong>一支釣</strong>的魚——魚體不會被壓傷、鮮度差很多，卻用大眾酒場的價格賣。店內是熱鬧的吧台＋桌位共59席，完全沒有壽司店的壓迫感。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                <strong>壽司一貫¥99起、生魚片¥429起、飲料¥209起</strong>——這個價格在日本已經是佛心價💰 我們點的<strong>鐵火卷</strong>上面還鋪了整片鮪魚，米飯用的是帶點酸香的紅醋飯，比一般連鎖迴轉壽司紮實太多🍣 <strong>中腹（中トロ）握壽司</strong>油花漂亮，還有<strong>炙燒握壽司</strong>放上一小塊奶油、香氣直接爆炸🔥 炸物的<strong>天婦羅</strong>外衣極薄，配鹽就很好吃。名物還有<strong>「天使炸竹筴魚」（¥1,429）</strong>和<strong>貝類高湯關東煮</strong>。對旅客來說，這裡是<strong>「花小錢吃到高品質日本壽司」</strong>最好的範例。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍣 壽司一貫¥99起", "🎣 全國釣魚直送", "🐟 生魚片¥429起", "🍺 飲料¥209起", "🔥 炙燒握壽司", "🚭 全席禁菸"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 神奈川縣橫濱市中區野毛町1-13-5</p>
              <p className="text-xs text-stone-600">🚃 JR根岸線「櫻木町」駅 徒歩約3分</p>
              <p className="text-xs text-stone-600">⏰ 週二〜五 17:00〜23:00／週六日・假日 12:00〜23:00（L.O. 餐點22:00・飲料22:30）</p>
              <p className="text-xs text-stone-600">📅 週一公休（遇假日順延至週二）</p>
              <p className="text-xs text-stone-600">💴 一人約¥2,000〜¥3,000／壽司¥99〜・生魚片¥429〜（價格以店頭菜單為準）</p>
              <p className="text-xs text-stone-600">🪑 59席</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                <strong>週一公休</strong>要特別注意；週六日中午12點就開，想「白天開始喝」的話這裡最適合🍺
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="https://www.dynacjapan.com/brands/sushi-madume/shops/noge/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🔗 官方網站
              </a>
              <a href="https://www.instagram.com/sushimadume_noge/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                📷 Instagram
              </a>
              <a href="https://www.hotpepper.jp/strJ003708002/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🔗 店家資訊
              </a>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">野毛續攤（はしご酒）小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 野毛就在<strong>櫻木町站</strong>旁，從橫濱站搭JR只要3分鐘、從東京站約35分鐘🚃</li>
            <li>✅ 續攤的鐵則是<strong>「一間只點2〜3道＋一杯」</strong>，吃太飽就走不到第二間了😂</li>
            <li>✅ 兩間店走路不到5分鐘，建議<strong>AM:PM（中華）→ スシマヅメ（壽司）</strong>的順序</li>
            <li>✅ 有些小店會收<strong>お通し（開胃小菜費，約¥300〜500）</strong>，那是日本居酒屋的座位費，不是被騙💴</li>
            <li>✅ 野毛的店多半很小，<strong>人數越少越好進</strong>；4人以上建議先訂位</li>
            <li>✅ 白天的野毛非常安靜，<strong>18:00之後</strong>才會整條街亮起來🏮</li>
            <li>✅ 玩完可以走路約10分鐘到<strong>港未來（Minato Mirai）</strong>看夜景，完美收尾🎡</li>
            <li>✅ 末班電車後就沒車了，回東京的話記得看好時間🚉</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            野毛沒有華麗的裝潢，也沒有排隊名店的儀式感，但那種<strong>「窄巷裡人聲鼎沸、每一間都便宜又好吃」</strong>的氛圍，才是日本人真正的下班日常🏮<br />
            來橫濱看完夜景之後，把晚上留給野毛吧！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「野毛的規則只有一個——不要在第一間吃太飽🍶」</p>
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

        <RelatedArticles slug="noge" exclude={["/chigasaki", "/shibuya-yakiniku", "/tokyo-yakiniku"]} />

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
