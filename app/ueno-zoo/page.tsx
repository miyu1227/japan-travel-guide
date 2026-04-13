import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/ueno-zoo";
const OG_IMAGE = "/ueno-zoo/zoo-1.jpg";

export const metadata: Metadata = {
  title: "上野動物園推薦｜東京必去親子景點・大熊貓【實際造訪】",
  description:
    "東京必去景點「上野動物園」完整介紹！日本最古老的動物園，大熊貓・亞洲象・小熊貓等超人氣動物。門票只要¥600，親子旅行・情侶約會都推薦。附交通方式・門票・營業時間。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "上野動物園推薦｜東京必去親子景點・大熊貓",
    description: "東京必去！日本最古老的動物園，大熊貓超人氣。門票¥600，附交通・營業時間。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "上野動物園推薦・東京必去景點" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "上野動物園推薦｜東京必去親子景點",
    description: "東京必去！日本最古老的動物園，大熊貓・門票¥600🐼",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "上野動物園推薦｜東京必去親子景點・大熊貓【實際造訪】",
  description: "東京必去景點「上野動物園」。日本最古老的動物園，大熊貓超人氣。",
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
    { "@type": "ListItem", position: 2, name: "動物園推薦", item: PAGE_URL },
  ],
};

const zooPhotos = ["/ueno-zoo/zoo-1.jpg", "/ueno-zoo/zoo-2.jpg", "/ueno-zoo/zoo-3.jpg", "/ueno-zoo/zoo-4.jpg"];

const relatedLinks = [
  { href: "/museum", label: "🎨 東京美術館推薦｜國立新美術館＆根津美術館", desc: "現代建築・日本庭園" },
  { href: "/spot", label: "🌿 東京野餐推薦｜新宿御苑＆代代木公園", desc: "悠閒散步的人氣公園完全指南" },
  { href: "/ramen", label: "🍜 日本拉麵推薦｜東京・大阪必吃拉麵4選", desc: "濃厚魚介系つけ麺から家系まで" },
];

export default function UenoZooPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">動物園推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🐼 動物園</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・上野</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          上野動物園推薦｜東京必去<br />親子景點・大熊貓🐼
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">來東京旅遊，一定要去一次動物園！</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>上野動物園</strong>是日本最古老的動物園，創立於1882年（明治15年），至今已有超過140年的歷史🏛️ 位於上野公園內，從上野車站走路只要5分鐘。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            園內有超人氣的<strong>大熊貓</strong>、亞洲象、蘇門答臘虎、小熊貓等豐富的動物展示。門票只要<strong>¥600</strong>，小學生以下免費，CP值超高✨ 不論是親子旅行、情侶約會還是朋友出遊都非常適合。
          </p>
        </section>

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4">東京動物園推薦（持續更新中）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {zooPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="上野動物園 - 東京景點推薦"
                  fill
                  sizes="50vw"
                  className="object-cover"
                  {...(i === 0 ? { priority: true } : {})}
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">上野動物園</h3>
                <span className="text-xs text-stone-400">Ueno Zoological Gardens</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              日本歷史最悠久的動物園，園區分為<strong>東園</strong>和<strong>西園</strong>，由單軌電車連接。東園有大熊貓、大猩猩、老虎等人氣動物；西園有企鵝、長頸鹿、河馬等。整個園區走一圈約需2〜3小時，規模適中不會太累。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                門票只要<strong>¥600</strong>，小學生以下<strong>免費</strong>，CP值爆表💰 大熊貓區整修後更加寬敞舒適，可以慢慢觀察。園內也有餐廳和紀念品商店，熊貓周邊超可愛🐼 逛完還可以順遊上野公園、阿美橫丁，一整天的行程安排很充實！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🐼 大熊貓", "💰 門票¥600", "👶 親子推薦", "🚶 上野站徒步5分", "🆓 小學以下免費"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 推薦看點 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🦁 必看動物</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・大熊貓（ジャイアントパンダ）— 上野動物園的超級明星🐼</li>
                <li>・亞洲象 — 園內最大的動物，氣勢十足🐘</li>
                <li>・小熊貓（レッサーパンダ）— 萌度爆表，超療癒</li>
                <li>・蘇門答臘虎 — 稀有品種，近距離觀察很震撼🐯</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都台東區上野公園9-83</p>
              <p className="text-xs text-stone-600">🚃 JR・東京メトロ「上野」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 9:30〜17:00（週一休園・國定假日順延翌日休）</p>
              <p className="text-xs text-stone-600">💴 大人 ¥600／中學生 ¥200／小學以下 免費／65歲以上 ¥300</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">3/20開園紀念日、5/4綠之日、10/1都民之日可免費入園！建議先查官網確認</p>
            </div>

            <a
              href="https://www.tokyo-zoo.net/ueno/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">逛動物園小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 建議<strong>平日上午</strong>前往，假日特別是大熊貓區會很擠</li>
            <li>✅ 園區走一圈約需2〜3小時，穿舒適的鞋子👟</li>
            <li>✅ 園內有餐廳，也可以自帶便當在休息區用餐</li>
            <li>✅ 逛完可以順遊<strong>上野公園</strong>和<strong>阿美橫丁</strong>購物</li>
            <li>✅ 週一休園（遇國定假日則翌日休），出發前確認</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            門票超便宜、動物種類豐富、交通又方便——上野動物園是東京最值得去的景點之一✨<br />
            不論大人還是小孩，都能在這裡度過開心的一天！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「大熊貓真的太可愛了，看到的瞬間心都融化了🐼」</p>
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
