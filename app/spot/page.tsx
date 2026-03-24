import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/spot";
const OG_IMAGE = "/spot/shinjuku-1.jpg";

export const metadata: Metadata = {
  title: "東京野餐推薦｜新宿御苑・代代木公園完全指南【2025】",
  description:
    "東京野餐最推薦的兩個公園：新宿御苑和代代木公園。附交通方式、門票資訊、野餐食物推薦，以及最佳造訪季節。來東京旅遊想放鬆的人必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "東京野餐推薦｜新宿御苑・代代木公園完全指南【2025】",
    description: "東京野餐推薦2大公園：新宿御苑・代代木公園。附交通・門票・野餐食物推薦。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "東京野餐推薦・新宿御苑" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京野餐推薦｜新宿御苑・代代木公園",
    description: "東京最適合野餐的2個公園。附交通・門票・食物推薦！",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京野餐推薦｜新宿御苑・代代木公園完全指南【2025】",
  description: "東京野餐推薦2大公園。附交通方式、門票資訊、野餐食物推薦。",
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
    { "@type": "ListItem", position: 2, name: "景點推薦", item: PAGE_URL },
  ],
};

const shinjukuPhotos = [
  "/spot/shinjuku-1.jpg",
  "/spot/shinjuku-2.jpg",
  "/spot/shinjuku-3.jpg",
];

const yoyogiPhotos = [
  "/spot/yoyogi-1.jpg",
  "/spot/yoyogi-2.jpg",
];

const picnicFood = [
  { emoji: "🍙", name: "飯糰", desc: "便利商店種類超豐富，挑不完" },
  { emoji: "🥪", name: "三明治", desc: "輕食首選，好拿好吃" },
  { emoji: "🍗", name: "炸雞", desc: "便利商店熱食必買" },
  { emoji: "🍮", name: "甜點", desc: "布丁・大福・聖代都很好吃" },
];

const relatedLinks = [
  { href: "/ramen", label: "🍜 日本拉麵推薦｜東京・大阪必吃拉麵3選", desc: "魚介つけ麺・家系拉麵・排隊名店" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京最值得去的咖啡店指南", desc: "貝果・義式冰淇淋・起司披薩3間人氣店" },
  { href: "/hakone", label: "🚃 箱根一日遊推薦｜從東京搭浪漫特快出發", desc: "美術館・足湯・神社的完美行程" },
];

export default function SpotPicnicPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">景點推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🌿 景點・公園</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京野餐推薦｜新宿御苑＆<br />代代木公園悠閒散步🌿
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2025年</p>

        {/* Why picnic in Tokyo */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">為什麼要在東京野餐？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            來東京旅遊，不只是逛街吃美食——其實<strong>東京野餐</strong>也是非常受歡迎的行程🌿 日本人很愛在公園鋪墊子、帶便當、慢慢放鬆。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            這次分享兩個東京最受歡迎的野餐公園：<strong>新宿御苑</strong>和<strong>代代木公園</strong>。兩個公園氣氛完全不同，可以依照旅行風格選擇✨
          </p>
          <div className="flex flex-col gap-1.5">
            {["新宿御苑 → 安靜優雅・拍照首選", "代代木公園 → 自由輕鬆・生活感十足"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-stone-700">
                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs flex items-center justify-center shrink-0">✔</span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* H2: 公園推薦 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">東京野餐公園推薦・2選</h2>

        {/* Spot 1: 新宿御苑 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {shinjukuPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="新宿御苑 - 東京野餐推薦"
                  fill
                  sizes="33vw"
                  className="object-cover"
                  {...(i === 0 ? { priority: true } : {})}
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">新宿御苑</h3>
                <span className="text-xs text-stone-400">Shinjuku Gyoen National Garden</span>
              </div>
            </div>

            {/* 介紹 */}
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              東京最漂亮、最乾淨的公園之一。草地非常大，很適合鋪野餐墊放鬆🧺 整體環境安靜優雅，有點像歐洲公園的感覺。
            </p>

            {/* 推薦理由 */}
            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                非常適合拍照，情侶或女生旅行都很推薦💑 春天櫻花季來這裡野餐更是夢幻🌸 整個公園維護得很好，讓人感受不到身處東京市區。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["📸 拍照首選", "💑 情侶・女生旅行推薦", "🌸 春天櫻花季更美"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 基本資訊 */}
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都新宿区内藤町11</p>
              <p className="text-xs text-stone-600">🚃 地下鉄「新宿御苑前」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 9:00〜16:30（週一休園）</p>
              <p className="text-xs text-stone-600">💴 入場料：大人¥500・高中生¥250・中學以下免費</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">需要購買門票，但環境真的非常值得</p>
            </div>

            <a href="https://www.env.go.jp/garden/shinjukugyoen/index.html" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 2: 代々木公園 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {yoyogiPhotos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] bg-stone-100">
                <Image src={src} alt="代代木公園 - 東京野餐" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">代代木公園</h3>
                <span className="text-xs text-stone-400">Yoyogi Park</span>
              </div>
            </div>

            {/* 介紹 */}
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              更自由、更日常感的公園。不用門票，可以隨意進出🎉 很多日本人會帶食物來野餐🍱 有時還會看到街頭表演，熱鬧又有趣。
            </p>

            {/* 推薦理由 */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-blue-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                免費入場，在原宿・表參道逛完之後可以順路過來放鬆☕ 氣氛輕鬆，非常適合帶著便利商店食物來隨興野餐。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["💬 適合輕鬆聊天", "🥡 帶便利商店食物來", "🏙️ 生活感十足", "🆓 免費入場"].map((t) => (
                <span key={t} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 基本資訊 */}
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都渋谷区代々木神園町2-1</p>
              <p className="text-xs text-stone-600">🚃 JR「原宿」駅 徒歩約3分</p>
              <p className="text-xs text-stone-600">⏰ 24小時開放</p>
              <p className="text-xs text-stone-600">💴 入場免費</p>
            </div>

            <a href="https://www.tokyo-park.or.jp/park/yoyogi/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* 野餐食物推薦 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-stone-800 mb-1">🍱 野餐食物推薦</h2>
          <p className="text-xs text-stone-500 mb-4">👉 在便利商店或超市準備，方便又便宜</p>
          <div className="grid grid-cols-2 gap-3">
            {picnicFood.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4 flex items-center gap-3">
                <span className="text-2xl shrink-0">{item.emoji}</span>
                <div>
                  <p className="font-bold text-stone-800 text-sm">{item.name}</p>
                  <p className="text-xs text-stone-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-500 mt-3 text-center">或像我一樣準備簡單便當也很有氛圍✨</p>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">旅遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 記得帶野餐墊，日本超市・百圓店都有賣</li>
            <li>✅ 天氣好的時候最適合，出發前查一下天氣☀️</li>
            <li>✅ 春（3〜5月）・秋（9〜11月）最舒服</li>
            <li>✅ 新宿御苑週一休園，記得確認</li>
            <li>✅ 食物可以在公園附近的便利商店買，省時又方便</li>
          </ul>
        </section>

        {/* eSIM CTA */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border border-blue-200 p-6 mb-8">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl">📱</span>
            <div>
              <h2 className="font-black text-stone-800 text-base mb-1">來東京前先準備網路</h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                在東京野餐時常常需要用 Google Map 找地點或查路線📍<br />
                建議出發前先準備好 eSIM，到日本就能直接使用！
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
              <p className="text-sm text-stone-600">「帶著便當來公園野餐，是我最喜歡的東京行程🌿 推薦大家一定要試試！」</p>
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
