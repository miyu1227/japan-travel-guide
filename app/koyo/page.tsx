import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/koyo";
const OG_IMAGE = "/koyo/gaien-1.jpg";

export const metadata: Metadata = {
  title: "東京紅葉推薦｜外苑前銀杏並木・金黃大道【實際造訪】",
  description:
    "東京紅葉季必去景點「神宮外苑銀杏並木」。約300公尺長的金黃銀杏大道，從青山通一路延伸，是東京最具代表性的秋景之一。附交通方式・最佳觀賞期・拍照秘訣。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "東京紅葉推薦｜外苑前銀杏並木・金黃大道",
    description: "東京紅葉必去景點「神宮外苑銀杏並木」。約300公尺的金黃銀杏隧道。附交通・觀賞期・拍照攻略。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "東京紅葉推薦・神宮外苑銀杏並木" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京紅葉推薦｜外苑前銀杏並木",
    description: "東京紅葉必去！金黃銀杏隧道約300公尺的人氣景點。",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京紅葉推薦｜外苑前銀杏並木・金黃大道【實際造訪】",
  description: "東京紅葉季必去景點「神宮外苑銀杏並木」。金黃銀杏大道・交通・觀賞期完整指南。",
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
    { "@type": "ListItem", position: 2, name: "紅葉推薦", item: PAGE_URL },
  ],
};

const gaienPhotos = ["/koyo/gaien-1.jpg", "/koyo/gaien-2.jpg", "/koyo/gaien-3.jpg"];

const relatedLinks = [
  { href: "/spot", label: "🌿 東京野餐推薦｜新宿御苑＆代代木公園", desc: "悠閒散步的人氣公園完全指南" },
  { href: "/ramen", label: "🍜 日本拉麵推薦｜東京・大阪必吃拉麵4選", desc: "濃厚魚介系つけ麺から家系まで" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京必去咖啡散步地區", desc: "貝果・義式冰淇淋・起司披薩3間人氣店" },
];

export default function KoyoPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">紅葉推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-orange-100 text-orange-700 border border-orange-300 text-xs font-semibold px-3 py-1 rounded-full">🍁 紅葉</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京紅葉推薦｜神宮外苑<br />銀杏並木の金黃大道🍁
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">秋天來東京，絕不能錯過的風景</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            每到11月下旬，東京就會換上最美的秋裝🍁 這次要推薦的是東京紅葉季最具代表性的景點——<strong>神宮外苑銀杏並木</strong>。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            從青山通往聖德紀念繪畫館延伸，約300公尺長的銀杏隧道鋪滿金黃落葉，整條路像是被染成金色一樣✨ 是很多電影、廣告都會取景的場所。
          </p>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">東京紅葉景點・1選（持續更新中）</h2>

        {/* Spot: 神宮外苑銀杏並木 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {gaienPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="神宮外苑銀杏並木 - 東京紅葉推薦"
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
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">神宮外苑銀杏並木</h3>
                <span className="text-xs text-stone-400">Jingu Gaien Ginkgo Avenue</span>
              </div>
            </div>

            {/* 介紹 */}
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              約146棵銀杏樹沿著青山通整齊排列，形成一條金黃色的隧道🌟 這裡是東京最具代表性的紅葉景點，也是日本最早將銀杏當作行道樹種植的地方之一。
            </p>

            {/* 推薦理由 */}
            <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-orange-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                交通超方便，從地下鉄「外苑前」駅走出來馬上就能看到🚇 拍照隨手一張都像明信片，是東京秋天絕對要排進行程的景點。建議穿深色或米白色衣服，金黃銀杏會更突出📸
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["📸 IG拍照聖地", "🚇 交通便利", "🍁 東京紅葉代表", "🆓 免費入場"].map((t) => (
                <span key={t} className="text-xs bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 基本資訊 */}
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都港區北青山2丁目</p>
              <p className="text-xs text-stone-600">🚇 東京メトロ銀座線「外苑前」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 全日開放（自由散策）</p>
              <p className="text-xs text-stone-600">💴 免費</p>
              <p className="text-xs text-stone-600">🍁 最佳觀賞期：11月中旬〜12月上旬</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">每年11月下旬會舉辦「神宮外苑いちょう祭り」，會有許多美食攤位可以一邊賞楓一邊享用</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.app.goo.gl/RJb1VLZjPF2RozdA7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🗺️ Google Maps
              </a>
              <a
                href="https://visit-minato-city.tokyo/ja-jp/places/989"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 港區觀光情報
              </a>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">賞銀杏小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 最佳觀賞期是11月中旬〜12月上旬，建議出發前查詢「紅葉情報」確認狀況</li>
            <li>✅ 清晨或平日人少，拍照會更順利📸</li>
            <li>✅ 從青山通入口往內看，是最經典的拍攝角度</li>
            <li>✅ 附近的明治神宮外苑・表參道也很推薦順路散步</li>
            <li>✅ 秋天早晚溫差大，記得帶件薄外套🧥</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <div className="flex items-start gap-3">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-1">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「親眼看到金黃銀杏大道的瞬間真的會忘記呼吸🍁 秋天來東京一定要安排！」</p>
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
