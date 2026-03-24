import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "箱根一日遊推薦｜從東京搭浪漫特快出發的完整攻略【2025】",
  description:
    "從東京搭浪漫特快只需1.5小時即可抵達箱根！整理玻璃美術館、箱根神社、足湯、蕎麥麵等5個必去景點，附交通方式、票價與實際行程安排，適合台灣香港旅客的箱根一日遊完整指南。",
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
  { href: "/ramen", label: "🍜 日本拉麵推薦｜東京・大阪必吃拉麵3選", desc: "魚介つけ麺・家系拉麵・排隊名店" },
  { href: "/spot", label: "🌿 東京野餐推薦｜新宿御苑・代代木公園", desc: "悠閒散步的人氣公園完全指南" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京最值得去的咖啡店", desc: "貝果・義式冰淇淋・起司披薩3間人氣店" },
];

export default function HakonePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">

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
        <p className="text-xs text-stone-400 mb-6">最後更新：2025年</p>

        {/* Why Hakone */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-6">
          <h2 className="text-base font-black text-stone-800 mb-3">為什麼選擇箱根一日遊？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            想從東京出發輕鬆玩一天，<strong>箱根一日遊</strong>是最多人推薦的選擇✨ 從新宿搭浪漫特快只需約1.5小時，抵達後就能感受到截然不同的溫泉鄉氛圍。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次分享我實際走過的完整行程👇 一天就能玩到美術館、足湯、神社、蕎麥麵，充實又不趕。
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
          <div className="bg-white rounded-2xl border border-blue-200 px-4 py-3 text-center">
            <p className="text-xs text-stone-400">👉 eSIM 連結即將放上</p>
          </div>
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
