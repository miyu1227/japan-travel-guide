import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/shibuya-gohan";
const OG_IMAGE = "/shibuya-gohan/soupstock-1.jpg";

export const metadata: Metadata = {
  title: "Soup Stock Tokyo是什麼？澀谷站直結湯專賣店✅實吃",
  description:
    "澀谷Mark City 4樓、京王井之頭線直結的Soup Stock Tokyo。早上8點開到晚上10點，一個人也能好好吃一餐。附交通・營業時間・當週湯單與素食標示。",
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
    title: "Soup Stock Tokyo是什麼？澀谷站直結的湯專賣店",
    description: "澀谷Mark City 4樓、京王井之頭線直結。早8點〜晚10點，一個人也能好好吃一餐的日本湯專賣店🍲",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Soup Stock Tokyo 澀谷Mark City店的湯與藜麥糙米飯" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soup Stock Tokyo是什麼？澀谷站直結的湯專賣店",
    description: "澀谷Mark City 4樓・京王井之頭線直結。早8點開門，一個人也自在的一餐🍲",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Soup Stock Tokyo 澀谷Mark City店｜澀谷站直結的湯專賣店【實際造訪】",
  description:
    "澀谷美食：京王井之頭線「澀谷」駅直結、Mark City East 4樓的Soup Stock Tokyo（スープストックトーキョー）。營業到晚上10點，一個人也能好好吃一餐。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-09-17T00:00:00+09:00",
  dateModified: "2026-09-17T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "澀谷美食推薦", item: PAGE_URL },
  ],
};

const soupstockPhotos = [
  { src: "/shibuya-gohan/soupstock-1.jpg", alt: "Soup Stock Tokyo 澀谷Mark City店的龍蝦濃湯、冷芝麻豆乳擔擔湯與藜麥糙米飯" },
];

// この店舗で出している（＝公式サイトが店舗ページに出している）スープ。毎週入れ替わる。
const soupMenu = [
  { jp: "オマール海老のビスク", zh: "龍蝦濃湯", note: "招牌" },
  { jp: "東京ボルシチ", zh: "東京羅宋湯", note: "招牌" },
  { jp: "冷たいごま豆乳坦々スープ", zh: "冷芝麻豆乳擔擔湯", note: "限量" },
  { jp: "イタリア産粗ごしトマトの冷たいクリームポタージュ", zh: "義大利番茄冷濃湯", note: "" },
  { jp: "地中海風帆立のブイヤベースカレー", zh: "地中海風干貝馬賽魚湯咖哩", note: "" },
  { jp: "ミネストローネ", zh: "義式蔬菜湯", note: "素食・無麩質" },
  { jp: "北海道産かぼちゃのスープ", zh: "北海道南瓜湯", note: "" },
  { jp: "オニオンスープ", zh: "洋蔥湯", note: "" },
  { jp: "焼き鯛出汁の和風スープ", zh: "烤鯛魚高湯和風湯", note: "" },
  { jp: "7種の野菜の辛くないマイルドカレー", zh: "7種蔬菜的不辣咖哩", note: "不辣" },
  { jp: "カシューナッツのホッダ", zh: "腰果椰奶咖哩（斯里蘭卡風）", note: "" },
];

const relatedLinks = [
  { href: "/shibuya-cafe", label: "☕ 澀谷咖啡廳推薦2選｜RECOCO 黑膠咖啡＆歐舒丹咖啡廳", desc: "唱片聽到飽・站前3分的南法輕食" },
  { href: "/shibuya-yakiniku", label: "🥩 澀谷燒肉推薦｜燒肉的名店 千葉", desc: "澀谷站附近的內臟燒肉與和牛" },
  { href: "/tokyo-gourmet", label: "🍜 東京美食推薦總整理｜拉麵・燒肉・手信", desc: "實際吃過的東京美食依類型整理" },
];

const faqItems = [
  {
    q: "Soup Stock Tokyo 是什麼？",
    a: "日本的湯專賣店（日文寫作スープストックトーキョー），主打「一碗湯就是一餐」。點法是選一種湯，再搭配飯或麵包，做成一份套餐。湯的種類每週更換，而且每家分店的湯單都不一樣，官網的分店頁面會公布這一週供應的品項。",
  },
  {
    q: "澀谷店在哪裡？從車站要走多久？",
    a: "在澀谷Mark City（渋谷マークシティ）East的4樓，地址是渋谷區道玄坂1-12-1。京王井之頭線「澀谷」駅直結，不用出到室外；從JR・東京Metro的澀谷駅走過去也很近，下雨天特別好用。",
  },
  {
    q: "幾點開？一個人可以吃嗎？",
    a: "早上8:00開到22:00（最後點餐21:30），公休日跟著澀谷Mark City的休館日。店內以吧台與小桌為主，很多日本人是一個人來吃，單獨進去完全不會尷尬。想避開人潮就避開12〜13點的午餐尖峰。",
  },
  {
    q: "有素食（vegetarian）或無麩質的湯嗎？",
    a: "有。菜單上會標示「ベジタリアン」（素食）與「グルテンフリー」（無麩質），例如義式蔬菜湯（ミネストローネ）兩種標示都有。官網還公開了全品項的過敏原與營養成分PDF，有飲食限制的人出發前先查得到。",
  },
  {
    q: "可以外帶嗎？要排隊嗎？",
    a: "可以外帶，這間店也支援手機點餐（內用與外帶都可以）。湯是做好保溫的，點完很快就會端出來，趕時間或想帶回飯店吃都行。",
  },
  {
    q: "帶小孩可以嗎？",
    a: "可以。這間店有兒童餐（キッズセット），嬰兒副食品（離乳食）全分店免費提供，店內也有兒童椅，是澀谷少見對親子友善的選擇。",
  },
];

export default function ShibuyaGohanPage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">澀谷美食推薦</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-700 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍽️ 美食（必食）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・澀谷</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          Soup Stock Tokyo 澀谷Mark City店<br />澀谷站直結・一個人也自在的湯專賣店🍲
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-09-17</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">在澀谷，好好吃一餐意外地難</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            澀谷的餐廳多到爆炸，但旅行途中真正的難題是——<strong>拖著行李、只有一個人、又不想排隊</strong>的那一餐要吃什麼🍲 熱門店中午要等、居酒屋一個人進去尷尬、便利商店又覺得可惜。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這種時候最好用的是<strong>「Soup Stock Tokyo（スープストックトーキョー）」</strong>——日本的<strong>湯專賣店</strong>，一碗湯配一碗飯就是一餐。澀谷這間在<strong>Mark City 4樓、京王井之頭線「澀谷」駅直結</strong>，<strong>早上8點開到晚上10點</strong>，是那種「行程卡住的時候先想到它」的存在。
          </p>
        </section>

        <PrepBannerCompact />

        {/* 3つの理由 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">為什麼推薦給旅客</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">不用出站、不用排很久</p>
                <p className="text-xs text-stone-500 leading-relaxed">京王井之頭線直結的4樓，下雨天不用撐傘；湯是保溫好的，點完很快就端出來</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">一個人吃很正常</p>
                <p className="text-xs text-stone-500 leading-relaxed">店內以吧台與小桌為主，日本人一個人來吃是常態；入口附近的吧台每個座位有2個插座</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">素食・無麩質・過敏原都查得到</p>
                <p className="text-xs text-stone-500 leading-relaxed">菜單標示ベジタリアン／グルテンフリー，官網公開全品項的過敏原與營養成分PDF</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3 pt-3 border-t border-stone-100">
            💡 早上8點就開門，剛下飛機、或趕早班車前想吃點熱的，這裡是澀谷少數的選項。
          </p>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">澀谷美食推薦（必食推介）・持續更新中</h2>

        {/* Spot 1 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {soupstockPhotos.map((photo) => (
              <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                <Image src={photo.src} alt={photo.alt} fill sizes="100vw" className="object-cover" priority />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">Soup Stock Tokyo 澀谷Mark City店</h3>
                <span className="text-xs text-stone-400">スープストックトーキョー 渋谷マークシティ店</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              1999年從東京出發的<strong>湯專賣店</strong>。點法很單純：從當天的湯裡選一種，再配上飯或麵包，就是一份套餐🍲 這間澀谷店提供的是<strong>藜麥糙米飯（キヌア玄米）</strong>，吃起來有顆粒感、比白飯耐餓；想一次喝兩種湯的話，也有<strong>2種湯＋飯＋飲料</strong>的組合。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-600 mb-1">✨ 實際點的（實訪）</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                點了招牌的<strong>龍蝦濃湯（オマール海老のビスク）</strong>，和玻璃杯裝的<strong>冷芝麻豆乳擔擔湯（冷たいごま豆乳坦々スープ）</strong>。前者是濃到會沾湯匙的橘紅色濃湯，後者冰冰涼涼、上面浮著毛豆與辣油，夏天喝特別舒服。配上藜麥糙米飯，兩個人各一份套餐，吃完不會脹但很有飽足感。<strong>冷湯是限量供應</strong>，賣完就沒了。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🚃 井之頭線直結", "🕗 早8點〜晚10點", "🍚 藜麥糙米飯", "🌱 有素食・無麩質標示", "📱 可手機點餐"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 当店のスープ */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍲 這間店會出現的湯（官網公布・每週更換）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                {soupMenu.map((s) => (
                  <li key={s.jp}>
                    <strong>{s.zh}</strong>
                    <span className="text-stone-400">（{s.jp}）</span>
                    {s.note && <span className="ml-1 text-red-500">{s.note}</span>}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
                ※ 湯單每週更換，週末的內容也和平日不同。出發前看官網的分店頁面，就知道這一週供應哪幾種。
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都渋谷區道玄坂1-12-1 澀谷Mark City East 4F</p>
              <p className="text-xs text-stone-600 ib ib-train">京王井之頭線「澀谷」駅直結／JR・東京Metro「澀谷」駅</p>
              <p className="text-xs text-stone-600 ib ib-clock">08:00〜22:00（最後點餐 21:30）／公休：澀谷Mark City休館日</p>
              <p className="text-xs text-stone-600 ib ib-yen">湯＋飯（或麵包）＋飲料的套餐制，價格依湯的種類而不同（以店頭與手機點餐畫面為準）</p>
              <p className="text-xs text-stone-600">📱 可手機點餐（內用・外帶）・有免費Wi-Fi・有兒童椅與兒童餐・免費提供嬰兒副食品</p>
              <p className="text-xs text-stone-600">📞 03-6455-1788</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">有飲食限制的話，官網公開了<strong>全品項的過敏原與營養成分表（PDF）</strong>，素食與無麩質的品項也標得很清楚，出發前查得到</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://www.soup-stock-tokyo.com/store/detail/?id=1080"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方分店頁（本週湯單）
              </a>
              <a
                href="https://www.wetable.jp/ja/restaurants/7785911c-e52a-40c9-a007-00e55e025204"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🥄 WE TABLE（過敏原・親子友善資訊）
              </a>
            </div>
          </div>
        </section>

        {/* 點餐步驟 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">不會日文也點得到：3個步驟</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>1️⃣ 先在官網的分店頁面看好<strong>這一週有哪幾種湯</strong>，記住想喝的那個日文名稱</li>
            <li>2️⃣ 到櫃檯選<strong>湯</strong> →  再選<strong>飯或麵包</strong>（這間店是藜麥糙米飯）→ 需要的話加飲料</li>
            <li>3️⃣ 付完錢幾乎馬上就端出來，找位子坐下就好。想外帶的話在點餐時說「テイクアウト（takeout）」</li>
          </ul>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">澀谷吃飯的小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 12〜13點是澀谷的午餐尖峰，<strong>避開這一小時</strong>，等候時間差很多</li>
            <li>✅ 澀谷Mark City和京王井之頭線的驗票口直接相連，<strong>下雨天或拖行李時最好走</strong>🌧️</li>
            <li>✅ 冷湯與季節限定的品項是<strong>限量供應</strong>，想喝就早一點去</li>
            <li>✅ 早上8點就開門，<strong>剛下飛機進市區的第一餐</strong>或搭早班車前都能吃</li>
            <li>✅ 吃完走路就能接上澀谷十字路口、SHIBUYA SKY，再往前就是中目黑的目黑川散步路線</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            旅行中最難處理的，其實是「不想吃大餐、但也不想隨便」的那一餐🍲<br />
            澀谷站直結、早8點到晚10點、一個人也自在——Soup Stock Tokyo 就是為了這種時候存在的。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「一碗熱湯配糙米飯，比想像中還撐得住下午的行程🍲」</p>
            </div>
          </div>
        </div>

        <FaqSection items={faqItems} />

        <AuthorCard />
        <PrepBanner />

        {/* 延伸閱讀 */}
        <section>
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">📚 延伸閱讀</h2>
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

        <RelatedArticles slug="shibuya-gohan" exclude={["/shibuya-cafe", "/shibuya-yakiniku", "/tokyo-gourmet"]} />

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
