import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import RelatedArticles from "../components/RelatedArticles";

const KLOOK_HAKONE_GLASS =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1347315&k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Factivity%2F132015-hakone-open-air-museum-pola-museum-of-art-one-day-tour-from-tokyo";

const PAGE_URL = "https://www.japantrippicks.com/hakone";
const OG_IMAGE = "/hakone/shrine-1.jpg";

export const metadata: Metadata = {
  title: "箱根一日遊推薦｜從東京出發的浪漫特快完整攻略",
  description:
    "從新宿搭浪漫特快約1.5小時。實際走過的一日行程：玻璃美術館、箱根神社湖上鳥居、足湯、自然薯蕎麥麵共5個景點。附浪漫特快訂位與周遊券該不該買的判斷。",
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
    title: "箱根一日遊推薦｜從東京出發的浪漫特快完整攻略",
    description: "從東京搭浪漫特快1.5小時到箱根！玻璃美術館・神社・足湯・蕎麥麵5個必去景點完整攻略。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "箱根神社・箱根一日遊" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "箱根一日遊推薦｜從東京搭浪漫特快出發",
    description: "浪漫特快1.5小時到箱根！神社・美術館・足湯・蕎麥麵完整攻略。",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "箱根一日遊推薦｜從東京出發的浪漫特快完整攻略",
  description: "從東京搭浪漫特快1.5小時到箱根。玻璃美術館・箱根神社・足湯・蕎麥麵5個必去景點。",
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
    { "@type": "ListItem", position: 2, name: "箱根一日遊", item: PAGE_URL },
  ],
};

const spots = [
  {
    id: "glass",
    number: 1,
    icon: "🖼️",
    title: "箱根ガラスの森美術館",
    subtitle: "超夢幻的歐式玻璃美術館",
    images: ["/hakone/glass-1.jpg", "/hakone/glass-2.jpg"],
    intro: "整個園區設計成歐洲庭園風格，陽光照在玻璃裝置上會閃閃發光，美得讓人屏息✨",
    reason: "非常適合拍照，到處都是IG等級的美景📸 情侶或女生旅行特別推薦，光是在這裡就能花上一到兩個小時。",
    basicInfo: {
      address: "神奈川県足柄下郡箱根町仙石原940-48",
      access: "箱根登山バス「ガラスの森」バス停 すぐ",
      price: "大人¥1,800",
    },
    tags: ["📸 拍照首選", "💑 情侶・女生推薦", "🌿 歐式庭園"],
    url: "https://www.hakone-garasunomori.jp/",
  },
  {
    id: "dolce",
    number: 2,
    icon: "🍨",
    title: "Hakone Dolce studio STELLA",
    subtitle: "箱根必吃甜點",
    images: ["/hakone/dolce-1.jpg", "/hakone/dolce-2.jpg"],
    intro: "箱根人氣甜點店，口味種類豐富，無論外觀還是口感都很出色🍦",
    reason: "逛街途中吃一個剛剛好，拍照也很好看📸 價格親民，是箱根行程中的小確幸甜點時間✨",
    basicInfo: {
      address: "箱根湯本周辺",
      access: "箱根湯本駅 徒歩圏内",
      price: "¥500〜¥900",
    },
    tags: ["🍦 必吃甜點", "📸 拍照打卡", "💴 價格親民"],
    url: "https://hakonestella.com/",
  },
  {
    id: "hatsuhana",
    number: 3,
    icon: "🍜",
    title: "箱根 はつ花",
    subtitle: "箱根名物・自然薯蕎麥麵",
    images: ["/hakone/hatsuhana.jpg"],
    intro: "箱根最有名的蕎麥麵老店，使用自然薯（山藥）製作，口感獨特，清爽又有嚼勁🍜",
    reason: "在箱根吃蕎麥麵是一種旅行儀式感✨ 很適合當午餐，店內氣氛也很有日式風情，值得專程來品嚐。",
    basicInfo: {
      address: "神奈川県足柄下郡箱根町湯本635",
      access: "箱根湯本駅 徒歩約5分",
      price: "¥1,200〜¥2,000",
    },
    tags: ["🥢 午餐推薦", "🌿 清爽好吃", "🏮 老舖名店"],
    url: "https://hatsuhana.co.jp/",
  },
  {
    id: "kappa",
    number: 4,
    icon: "♨️",
    title: "かっぱ天国",
    subtitle: "超推薦的足湯體驗",
    images: ["/hakone/kappa-1.jpg", "/hakone/kappa-2.jpg"],
    intro: "箱根湯本附近的人氣足湯設施，走了一整天後泡腳真的是最大的享受♨️",
    reason: "價格便宜，不需要換衣服，隨時都能輕鬆體驗溫泉♨️ 一日遊的旅客不用住宿也能享受箱根的溫泉文化！",
    basicInfo: {
      address: "神奈川県足柄下郡箱根町湯本612",
      access: "箱根湯本駅 徒歩約5分",
      price: "約¥800〜¥1,000",
    },
    tags: ["♨️ 足湯體驗", "💰 價格便宜", "👣 不住宿也OK"],
    url: "https://www.kappa1059.co.jp/",
  },
  {
    id: "shrine",
    number: 5,
    icon: "⛩️",
    title: "箱根神社",
    subtitle: "箱根最有名的神社・湖上鳥居",
    images: ["/hakone/shrine-1.jpg", "/hakone/shrine-2.jpg"],
    intro: "芦ノ湖畔的箱根神社，湖上的紅色鳥居是箱根最具代表性的風景📸 很多人專程來拍這個角度。",
    reason: "非常有日本氛圍，是箱根一日遊的完美收尾✨ 免費參拜，景色優美，強烈推薦安排進行程。",
    basicInfo: {
      address: "神奈川県足柄下郡箱根町元箱根80-1",
      access: "バス「元箱根港」停留所より 徒歩約7分",
      price: "參拜免費",
    },
    tags: ["⛩️ 必去景點", "🎌 日本氛圍滿點", "🆓 免費參拜"],
    url: "https://hakonejinja.or.jp/",
  },
];

const itinerary = [
  { icon: "🚃", text: "新宿 → 箱根湯本（浪漫特快 約1.5小時）" },
  { icon: "🚉", text: "箱根湯本駅 到達・散策" },
  { icon: "🖼️", text: "箱根ガラスの森美術館" },
  { icon: "🍨", text: "Dolce studio STELLA でスイーツ" },
  { icon: "🍜", text: "はつ花 で蕎麥麵午餐" },
  { icon: "♨️", text: "かっぱ天国 で足湯" },
  { icon: "⛩️", text: "箱根神社" },
];

const relatedLinks = [
  { href: "/ramen", label: "🍜 東京必吃拉麵推薦6選｜排隊名店・柚子鹽・家系", desc: "三軒茶屋無招牌名店・台場豚骨・六本木柚子鹽" },
  { href: "/spot", label: "🌿 東京野餐推薦｜新宿御苑・代代木公園", desc: "悠閒散步的人氣公園完全指南" },
  { href: "/rokko-arima", label: "♨️ 六甲・有馬溫泉｜纜車夜景與日本三古湯", desc: "同樣是從大都市當天來回的溫泉行程" },
];

export default function HakonePage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">箱根一日遊</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-blue-100 text-blue-600 border border-blue-300 text-xs font-semibold px-3 py-1 rounded-full">🚃 一日遊</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">📍 神奈川・箱根</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際走過</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          箱根一日遊推薦｜從東京搭<br />浪漫特快出發的完整攻略🚃
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-12</p>

        {/* Why Hakone */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-6">
          <h2 className="text-base font-black text-stone-800 mb-3">為什麼選擇箱根一日遊？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            想從東京出發輕鬆玩一天，<strong>箱根一日遊</strong>是最多人推薦（推介）的選擇✨ 從新宿搭浪漫特快只需約1.5小時，抵達後就能感受到截然不同的溫泉鄉氛圍。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇寫給<strong>行程排在東京、想抽一天去近郊</strong>的台灣・香港旅人。<strong>你會知道</strong>：浪漫特快怎麼搭與要不要先訂位、一天玩得完哪幾個點、山上移動大概要抓多少時間，還有雨天與冬天要注意什麼。以下是我實際走過的完整行程👇
          </p>
        </section>

        {/* 浪漫特快 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">🚃 怎麼從東京去箱根（浪漫特快）</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            從<strong>新宿站</strong>搭乘小田急「<strong>浪漫特快（ロマンスカー）</strong>」直達箱根湯本，約1.5小時，座位舒適，是旅行的美好開始🌄
          </p>
          <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
            <p className="text-xs text-stone-600">🚉 新宿 → 箱根湯本：約1小時30分</p>
            <p className="text-xs text-stone-600">💴 費用：約¥2,000〜¥2,500（含特急券）</p>
            <p className="text-xs text-stone-600">💺 指定席制，座位舒適</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 flex items-center gap-2">
            <span className="text-sm shrink-0">💡</span>
            <p className="text-xs text-stone-600">週末容易客滿，建議提前在網路預訂座位</p>
          </div>
        </section>

        {/* H2: 景點推薦 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">箱根一日遊景點推薦・5選</h2>

        {/* Spots */}
        <div className="space-y-6 mb-10">
          {spots.map((spot) => (
            <section key={spot.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              <div className={`grid ${spot.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-0.5`}>
                {spot.images.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] bg-stone-100">
                    <Image
                      src={src}
                      alt={`${spot.title} - 箱根一日遊`}
                      fill
                      sizes={spot.images.length > 1 ? "50vw" : "100vw"}
                      className="object-cover"
                      {...(spot.number === 1 && i === 0 ? { priority: true } : {})}
                    />
                  </div>
                ))}
              </div>

              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center text-sm font-black shrink-0">
                    {spot.number}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-stone-800 leading-tight">{spot.title}</h3>
                    <p className="text-xs text-stone-400">{spot.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-3">{spot.intro}</p>

                <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-3">
                  <p className="text-xs font-bold text-blue-600 mb-1">✨ 推薦給旅客的理由</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{spot.reason}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {spot.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>

                <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
                  <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
                  <p className="text-xs text-stone-600">📍 {spot.basicInfo.address}</p>
                  <p className="text-xs text-stone-600">🚃 {spot.basicInfo.access}</p>
                  <p className="text-xs text-stone-600">💴 {spot.basicInfo.price}</p>
                </div>

                <a href={spot.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                  🔗 官方網站
                </a>

                {spot.number === 1 && (
                  <a
                    href={KLOOK_HAKONE_GLASS}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="mt-5 block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl p-5 shadow-md overflow-hidden hover:shadow-lg transition-all"
                  >
                    <span className="absolute top-3 right-3 text-2xl opacity-50 select-none">🎨</span>
                    <div className="relative flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full tracking-wide shadow-sm">
                        🎫 Travel Tips
                      </span>
                      <span className="text-[10px] text-stone-500 bg-white/60 backdrop-blur px-2 py-0.5 rounded-full">東京出發箱根美術館一日遊</span>
                    </div>
                    <div className="relative flex items-center gap-3 mb-4">
                      <div className="relative w-20 h-20 shrink-0">
                        <div className="absolute inset-0 bg-white/70 backdrop-blur rounded-2xl border-2 border-white shadow-sm"></div>
                        <Image src="/poyapiyo-flag.png" alt="ぽやぴよ" fill sizes="80px" className="object-contain p-1 relative -rotate-[4deg]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-black text-stone-800 leading-tight mb-1">想輕鬆玩箱根美術館？</h3>
                        <p className="text-xs text-stone-700 leading-relaxed">從<strong>東京出發</strong>的一日巴士行程，可以一次逛<strong>雕刻の森美術館＋POLA美術館</strong>，不用自己排箱根登山バス，適合行程有限的旅客🎨</p>
                      </div>
                    </div>
                    <div className="relative block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 rounded-full py-3 shadow-md">
                      🎫 查看 東京出發箱根美術館一日遊 →
                    </div>
                    <p className="relative text-[10px] text-stone-500 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
                  </a>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* 行程總結 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-stone-800 mb-4">🗓️ 一日行程總結</h2>
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 space-y-3">
            {itinerary.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl shrink-0">{item.icon}</span>
                <span className="text-sm text-stone-700">{item.text}</span>
              </div>
            ))}
            <p className="text-xs text-stone-400 pt-2 border-t border-stone-100">👉 輕鬆又充實的一天！</p>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">旅遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 建議早一點出發，才有時間慢慢玩</li>
            <li>✅ 穿好走的鞋子，景點之間需要步行</li>
            <li>✅ 週末人多，平日前往更舒適</li>
            <li>✅ 浪漫特快建議提前預訂，週末容易售完</li>
            <li>✅ 箱根神社在湖邊，傍晚光線很美，建議留到最後</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">箱根一日遊 常見問題</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 一天真的玩得完嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                玩得完，但<strong>景點要挑</strong>。箱根的移動要一直換車（登山電車、纜車、巴士），光是移動就會吃掉不少時間。像這篇一樣鎖定<strong>4〜5個點</strong>剛剛好，想再加蘆之湖遊船或大涌谷的話，就要有一個行程得放掉的心理準備。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 浪漫特快一定要先訂位嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                浪漫特快是<strong>全車指定席</strong>，沒有座位就搭不了，<strong>週末與連假很容易客滿</strong>，建議先訂。如果訂不到也不用慌——搭小田急的普通・急行電車一樣到得了箱根湯本，只是要換車、時間會多一些。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 需要買箱根周遊券（箱根フリーパス）嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                要看你會不會用到山上的交通。周遊券涵蓋<strong>登山電車、纜車、空中纜車、海賊觀光船與部分巴士</strong>，如果打算跑大涌谷、蘆之湖那一圈，通常會比一段一段買划算；但如果像這篇一樣以<strong>箱根湯本周邊＋幾個定點</strong>為主，其實不一定用得到。要注意<strong>浪漫特快的特急券是另外計費</strong>的。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 下雨天去箱根還值得嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                美術館、餐廳、足湯這類行程雨天完全不受影響，反而人比較少。要注意的是<strong>山上的纜車遇到強風或天候不佳可能停駛</strong>，湖上的展望也會被雲霧擋住，這種日子就把重點放在室內景點會比較不失望。
              </p>
            </div>
          </div>
        </section>

        {/* eSIM CTA */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border border-blue-200 p-6 mb-8">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl">📱</span>
            <div>
              <h2 className="font-black text-stone-800 text-base mb-1">來箱根前先準備網路</h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                箱根交通比較複雜，建議用 Google Map 查路線📍<br />
                出發前準備好 eSIM，到日本就能直接使用！
              </p>
            </div>
          </div>
          <Link
            href="/japan-esim"
            className="block bg-white rounded-2xl border border-blue-200 hover:border-blue-400 transition-colors px-4 py-3 text-center"
          >
            <p className="text-sm font-bold text-stone-700">👉 日本自由行 eSIM 使用指南</p>
            <p className="text-xs text-stone-500 mt-0.5">出發前先確認手機支不支援、什麼時候啟用</p>
          </Link>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <div className="flex items-start gap-3">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-1">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「箱根一日遊真的很充實！泡完足湯再逛神社，完美結束旅程🌿 強烈推薦！」</p>
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

        <RelatedArticles slug="hakone" exclude={["/ramen", "/rokko-arima", "/spot"]} />

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
