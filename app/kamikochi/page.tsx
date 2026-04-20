import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/kamikochi";
const OG_IMAGE = "/kamikochi/cover.jpg";

export const metadata: Metadata = {
  title: "上高地＆奧飛騨旅行推薦4選｜日本阿爾卑斯山絕景完全指南【實際造訪】",
  description:
    "上高地＆奧飛騨旅行推薦4選！河童橋絕景・平湯大瀑布・新穂高纜車2000m展望・奧飛騨花園飯店燒岳溫泉。日本阿爾卑斯山自然療癒之旅，附交通方式・門票・溫泉資訊。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "上高地＆奧飛騨旅行推薦4選｜日本阿爾卑斯山絕景完全指南",
    description: "上高地河童橋・平湯大瀑布・新穂高纜車・奧飛騨溫泉飯店。日本阿爾卑斯絕景之旅完整指南。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "上高地旅行推薦・河童橋絕景" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "上高地＆奧飛騨旅行推薦4選｜日本阿爾卑斯絕景",
    description: "上高地河童橋・平湯大瀑布・新穂高纜車・奧飛騨溫泉！日本阿爾卑斯之旅🏔️",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "上高地＆奧飛騨旅行推薦4選｜日本阿爾卑斯山絕景完全指南【實際造訪】",
  description: "上高地＆奧飛騨旅行推薦4選。河童橋・平湯大瀑布・新穂高纜車・奧飛騨溫泉飯店。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Organization", name: "Japan Trip Picks" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "上高地旅行推薦", item: PAGE_URL },
  ],
};

const hirayuPhotos = ["/kamikochi/hirayu-1.jpg", "/kamikochi/hirayu-2.jpg"];
const hotelPhotos = ["/kamikochi/hotel-1.jpg", "/kamikochi/hotel-2.jpg", "/kamikochi/hotel-3.jpg"];
const ropewayPhotos = ["/kamikochi/ropeway-1.jpg", "/kamikochi/ropeway-2.jpg", "/kamikochi/ropeway-3.jpg", "/kamikochi/ropeway-4.jpg"];
const kappaPhotos = ["/kamikochi/kappa-1.jpg", "/kamikochi/kappa-2.jpg", "/kamikochi/kappa-3.jpg"];

const relatedLinks = [
  { href: "/hakone", label: "🚃 箱根一日遊推薦｜從東京搭浪漫特快出發", desc: "美術館・足湯・神社・甜點" },
  { href: "/hokkaido", label: "🗾 北海道自由行必去景點10選", desc: "札幌・小樽・富良野一次玩遍" },
  { href: "/koyo", label: "🍁 東京紅葉推薦｜神宮外苑銀杏並木", desc: "金黃銀杏大道・東京秋天必去景點" },
];

export default function KamikochiPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">上高地旅行推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🏔️ 自然景觀</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 長野・岐阜</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          上高地＆奧飛騨旅行推薦4選｜<br />日本阿爾卑斯山絕景之旅🏔️
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">想遠離東京喧囂？到日本阿爾卑斯山看絕景吧</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>上高地</strong>位於長野縣，海拔1,500公尺的高原度假勝地，被譽為<strong>「日本阿爾卑斯山」</strong>的入口🏔️ 鄰接岐阜縣的<strong>奧飛騨溫泉鄉</strong>，是日本最受歡迎的自然景觀＆溫泉旅遊地之一。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦的4個必去景點：<strong>河童橋</strong>的絕景、<strong>平湯大瀑布</strong>的震撼、<strong>新穂高纜車</strong>的2000公尺展望，以及<strong>奧飛騨花園飯店燒岳</strong>的夢幻溫泉✨ 安排2〜3天的行程剛剛好！
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">平湯大瀑布 → 日本百選瀑布・四季絕景</p>
                <p className="text-xs text-stone-500 leading-relaxed">64公尺高・冬季結冰超夢幻</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">奧飛騨花園飯店燒岳 → 翡翠綠超深層溫泉</p>
                <p className="text-xs text-stone-500 leading-relaxed">國內唯一的綠色溫泉・飛騨牛會席料理</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">新穂高纜車 → 日本唯一雙層纜車</p>
                <p className="text-xs text-stone-500 leading-relaxed">標高2,156m展望台・北阿爾卑斯山絕景</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">河童橋 → 上高地地標・絕景打卡點</p>
                <p className="text-xs text-stone-500 leading-relaxed">梓川＆穂高連峰的完美構圖</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">上高地＆奧飛騨推薦・4選</h2>

        {/* Spot 1: 平湯大滝 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {hirayuPhotos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] bg-stone-100">
                <Image src={src} alt="平湯大瀑布 - 上高地旅行推薦" fill sizes="50vw" className="object-cover" priority={i === 0} />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">平湯大瀑布</h3>
                <span className="text-xs text-stone-400">Hirayu Otaki Falls</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              被列為<strong>「日本百選瀑布」</strong>之一的壯觀瀑布💧 高度64公尺、寬度6公尺，從森林步道走進去的瞬間，震撼的水流聲和涼爽的水霧讓人完全放鬆。也是「飛騨三大名瀑」之一。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                四季都有不同景色，春天雪融的氣勢、秋天紅葉環繞、冬天則會變成夢幻的<strong>冰瀑</strong>❄️ 冬季限定的「平湯大瀑布結冰祭」還會在夜晚點燈，是只有那個時節才能看到的絕景。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["💧 日本百選瀑布", "❄️ 冬季冰瀑", "🍁 秋季紅葉", "🌿 森林步道"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 岐阜縣高山市奧飛騨溫泉鄉平湯</p>
              <p className="text-xs text-stone-600">🚃 從高山駅搭巴士約52分→「大滝口／露營場」下車徒步20分</p>
              <p className="text-xs text-stone-600">⏰ 全日開放（步道有時段限制）</p>
              <p className="text-xs text-stone-600">💴 免費</p>
            </div>

            <a href="https://www.hidatakayama.or.jp/spot/detail_1730.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方資訊
            </a>
          </div>
        </section>

        {/* Spot 2: 奥飛騨ガーデンホテル 焼岳 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {hotelPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="奧飛騨花園飯店燒岳 - 上高地旅行推薦" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">奧飛騨花園飯店燒岳</h3>
                <span className="text-xs text-stone-400">Okuhida Garden Hotel Yakedake</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於奧飛騨溫泉鄉新平湯溫泉區的人氣溫泉飯店♨️ 最大特色是<strong>「鶯之湯」</strong>——從3億6千萬年前地層湧出的超深層水溫泉，會隨著時間變成<strong>翡翠綠色</strong>，是日本國內唯一的綠色源泉！館內有12種不同風格的溫泉可泡。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                一邊泡著翡翠綠溫泉，一邊欣賞北阿爾卑斯山的絕景，超級療癒✨ 晚餐是<strong>A4等級飛騨牛</strong>和招牌的「溫泉蒸籠料理」，用溫泉蒸氣蒸出的食材特別鮮甜🥩 整晚85間房間都能欣賞山景，是奧飛騨旅行最適合的住宿選擇！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["♨️ 翡翠綠溫泉", "🥩 A4飛騨牛", "🏔️ 山景客房", "🍽️ 溫泉蒸籠料理"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 岐阜縣高山市奧飛騨溫泉鄉新平湯溫泉</p>
              <p className="text-xs text-stone-600">🚃 高山駅搭巴士約60分（新穂高纜車方向・「ガーデンホテル焼岳前」下車）</p>
              <p className="text-xs text-stone-600">💴 一泊二食 ¥20,900〜（含早晚餐・不含溫泉稅）</p>
              <p className="text-xs text-stone-600">🛏️ 全85間（和室68・洋室17）</p>
            </div>

            <a href="https://www.okuhida-gh.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 3: 新穂高ロープウェイ */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {ropewayPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="新穂高纜車 - 上高地旅行推薦" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div>
                <h3 className="text-base font-black text-stone-800">新穂高纜車</h3>
                <span className="text-xs text-stone-400">Shinhotaka Ropeway</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              <strong>日本唯一的雙層纜車</strong>🚠 搭乘兩段纜車就能輕鬆登上海拔<strong>2,156公尺</strong>的山頂展望台。從展望台可以360度眺望北阿爾卑斯山的壯闊景色，包括穂高岳、燒岳、笠岳等群山。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                不用爬山就能體驗<strong>2000公尺以上的高山絕景</strong>🏔️ 山頂站可以吃到飛騨高山拉麵、冰淇淋，還有免費的足湯！秋天紅葉、冬天雪景、夏天避暑，四季都有不同的魅力。也是日本人氣的<strong>星空觀賞</strong>景點。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🚠 雙層纜車", "🏔️ 標高2,156m", "⭐ 星空觀賞", "🦶 免費足湯"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 岐阜縣高山市奧飛騨溫泉鄉新穂高溫泉</p>
              <p className="text-xs text-stone-600">🚃 高山駅搭巴士約90分→「新穂高纜車」下車</p>
              <p className="text-xs text-stone-600">⏰ 全年營業（每30分鐘一班）</p>
              <p className="text-xs text-stone-600">💴 往返大人 ¥3,800（網路購票有優惠）</p>
            </div>

            <a href="https://shinhotaka-ropeway.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 4: 河童橋 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {kappaPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="河童橋 - 上高地旅行推薦" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">4</div>
              <div>
                <h3 className="text-base font-black text-stone-800">河童橋</h3>
                <span className="text-xs text-stone-400">Kappa Bashi</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              <strong>上高地的地標</strong>，海拔1,500公尺高原上的木製吊橋🌉 從橋上可以同時看到<strong>穂高連峰、梓川、燒岳</strong>，是明信片般的完美構圖📸 目前的橋樑是1997年建造的第5代，歷史可追溯至1910年。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                來上高地絕對不能錯過的必拍景點！從上高地巴士總站走路只要5分鐘🚶 春天新綠、夏天避暑、秋天紅葉，每個季節都有不同的絕景。周圍步道平緩，即使是長輩或小孩也能輕鬆散步✨
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🌉 上高地地標", "📸 絕景打卡點", "🚶 適合散步", "🌿 自然療癒"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 長野縣松本市安曇 上高地</p>
              <p className="text-xs text-stone-600">🚃 上高地巴士總站 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 全日開放（上高地僅開放4/17〜11/15）</p>
              <p className="text-xs text-stone-600">💴 免費</p>
              <p className="text-xs text-stone-600">🍂 最佳季節：春（4〜5月）・夏（7〜8月）・秋（10月紅葉）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">上高地為自然保護區，冬季（11/16〜4/16）全面封山，請提前確認開放時間</p>
            </div>

            <a href="https://www.kamikochi.or.jp/learn/spots/1319/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方資訊
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">上高地＆奧飛騨旅行小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 上高地為自然保護區，<strong>4/17〜11/15</strong>才開放，冬季封山</li>
            <li>✅ 上高地禁止私家車進入，需<strong>轉乘專用巴士</strong>或計程車</li>
            <li>✅ 建議安排<strong>2〜3天行程</strong>，在奧飛騨溫泉住一晚最完美♨️</li>
            <li>✅ 山上氣溫比松本市區低5〜10°C，即使夏天也要帶<strong>薄外套</strong>🧥</li>
            <li>✅ 從東京搭特急列車「あずさ」到松本約2.5小時，再轉巴士進上高地</li>
            <li>✅ 出發前可查看<a href="https://www.kamikochi.or.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">上高地官方網站</a>的即時天氣與開山資訊</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            壯闊的山景、夢幻的瀑布、翡翠綠的溫泉——上高地＆奧飛騨真的是日本最療癒的地方之一✨<br />
            遠離城市喧囂，來這裡被大自然包圍，一切都會變得好舒服🏔️
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「站在河童橋上看著穂高連峰的瞬間，覺得一切辛苦都值得了🏔️」</p>
            </div>
          </div>
        </div>

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
