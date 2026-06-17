import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import PrepBannerCompact from "../components/PrepBannerCompact";

const PAGE_URL = "https://www.japantrippicks.com/showa-kinen-park";
const OG_IMAGE = "/showa-kinen-park/park-1.jpg";

export const metadata: Metadata = {
  title: "昭和紀念公園推薦｜東京立川散步必去・四季絕景【實際造訪】",
  description:
    "東京散步推薦！立川「昭和紀念公園」是日本最大級的國營公園，廣達165公頃。春櫻、夏向日葵、秋紅葉、冬燈光秀，四季都有不同的絕景。附門票・交通方式・推薦路線。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "昭和紀念公園推薦｜東京立川散步必去・四季絕景",
    description: "東京最大級的國營公園！春櫻・夏向日葵・秋紅葉・冬燈光秀。附門票・交通・推薦路線。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "昭和紀念公園・東京散步推薦" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "昭和紀念公園推薦｜東京立川散步必去・四季絕景",
    description: "東京最大級的國營公園！四季都有不同絕景🌸",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "昭和紀念公園推薦｜東京立川散步必去・四季絕景【實際造訪】",
  description: "東京立川「昭和紀念公園」完整指南。日本最大級的國營公園・四季絕景。",
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
    { "@type": "ListItem", position: 2, name: "昭和紀念公園推薦", item: PAGE_URL },
  ],
};

const photos = [
  "/showa-kinen-park/park-1.jpg",
  "/showa-kinen-park/park-2.jpg",
  "/showa-kinen-park/park-3.jpg",
  "/showa-kinen-park/park-4.jpg",
];

const relatedLinks = [
  { href: "/koyo", label: "🍁 東京紅葉推薦｜神宮外苑銀杏並木", desc: "金黃銀杏大道・東京秋天必去景點" },
  { href: "/spot", label: "🌿 東京野餐推薦｜新宿御苑＆代代木公園", desc: "悠閒散步的人氣公園完全指南" },
  { href: "/ueno-zoo", label: "🐼 上野動物園推薦｜東京必去親子景點", desc: "日本最古老的動物園，大熊貓超人氣" },
];

export default function ShowaKinenParkPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">昭和紀念公園推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🌿 公園散步</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・立川</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          昭和紀念公園推薦｜東京立川<br />散步必去・四季絕景🌿
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">東京最大級的國營公園！四季都有不同絕景</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>昭和紀念公園</strong>（國營昭和紀念公園）位於東京都立川市，占地<strong>約165公頃</strong>，是<strong>日本最大級的國營公園</strong>之一🌳 為紀念昭和天皇即位50年而建，1983年開園。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            園內擁有大草坪、日本庭園、兒童森林、自行車道、湖泊與各種花田。<strong>春天的櫻花</strong>、<strong>夏天的向日葵</strong>、<strong>秋天的銀杏與紅葉</strong>、<strong>冬天的燈光秀</strong>——每個季節都有獨特的絕景，是東京近郊散步、野餐、親子旅遊的最佳選擇✨
          </p>
        </section>

        <PrepBannerCompact />

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4">東京散步景點推薦</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="昭和紀念公園 - 東京立川散步推薦"
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
                <h3 className="text-base font-black text-stone-800">國營昭和紀念公園</h3>
                <span className="text-xs text-stone-400">Showa Kinen Park</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於立川的<strong>國營昭和紀念公園</strong>，是東京近郊最受歡迎的散步勝地之一🌳 面積廣達<strong>165公頃</strong>（相當於東京迪士尼樂園的3倍以上！）。園內有<strong>大草坪「みんなの原っぱ」</strong>、優雅的<strong>日本庭園</strong>、季節限定的<strong>花田</strong>，還有租自行車環園的服務🚲
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                門票只要<strong>¥450</strong>就能享受一整天的療癒散步🌿 適合所有族群——情侶約會、親子野餐、攝影愛好者、想避開東京喧囂的旅客都很適合。<strong>11月底〜12月的銀杏並木</strong>和<strong>冬季的「Winter Vista Illumination」</strong>燈光秀更是必看絕景✨
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🌳 165公頃", "🌸 春櫻名所", "🌻 夏向日葵", "🍁 秋紅葉", "✨ 冬燈光秀", "🚲 自行車租借"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 季節別見所 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🌸 四季絕景</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・<strong>春（3〜5月）</strong>：櫻花、油菜花、鬱金香的花海🌷</li>
                <li>・<strong>夏（7〜8月）</strong>：向日葵田、藍天綠草的對比超美</li>
                <li>・<strong>秋（10〜11月）</strong>：銀杏並木金黃絕景、紅葉🍁</li>
                <li>・<strong>冬（12〜1月）</strong>：Winter Vista Illumination 燈光秀✨</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都立川市綠町3173</p>
              <p className="text-xs text-stone-600">🚃 JR中央線「立川」駅 徒歩約10分／JR青梅線「西立川」駅 徒歩約2分</p>
              <p className="text-xs text-stone-600">⏰ 9:30〜17:00（季節變動・冬季〜16:30）</p>
              <p className="text-xs text-stone-600">💴 大人 ¥450／高校生以下 免費／65歲以上 ¥210</p>
              <p className="text-xs text-stone-600">🚲 自行車租借 大人3小時 ¥520</p>
              <p className="text-xs text-stone-600">🅿️ 停車場有（普通車 ¥900/日）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">公園很大，建議租自行車環園更輕鬆！從新宿搭JR中央線到立川約40分，當天來回剛剛好</p>
            </div>

            <a
              href="https://www.showakinen-koen.jp/"
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
          <h2 className="text-base font-black text-stone-800 mb-3">昭和紀念公園散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從新宿搭JR中央線「快速」到立川約<strong>40分</strong>，當天來回方便</li>
            <li>✅ 入園口有多個，<strong>「あけぼの口」</strong>離立川站最近</li>
            <li>✅ 公園很大，強烈建議<strong>租自行車</strong>環園🚲</li>
            <li>✅ 自帶野餐墊和便當，在大草坪上野餐超舒服🍱</li>
            <li>✅ 冬季「Winter Vista Illumination」期間延長開園，可賞夜景</li>
            <li>✅ 出發前查官網確認當季的花況與活動</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            從新宿搭40分就能到這麼大的綠地公園，是東京人最愛的療癒場所✨<br />
            想遠離城市喧囂、悠閒散步一整天，昭和紀念公園絕對是首選！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「四季都來過一次，每次都被不同的景色感動🌿」</p>
            </div>
          </div>
        </div>

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
