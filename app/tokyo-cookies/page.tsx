import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/tokyo-cookies";
const OG_IMAGE = "/tokyo-cookies/kayanuma-1.jpg";

export const metadata: Metadata = {
  title: "東京伴手禮推薦｜高級手工餅乾・必買甜點【實際購買】",
  description:
    "東京伴手禮推薦！赤坂「ツッカベッカライ カヤヌマ」的手工餅乾禮盒，奧地利國家認證甜點大師的絕品餅乾。需預約才能買到的超人氣伴手禮，附購買方式・價格・交通。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "東京伴手禮推薦｜高級手工餅乾・必買甜點",
    description: "東京必買伴手禮！奧地利認證大師的手工餅乾禮盒。需預約的超人氣甜點。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "東京伴手禮推薦・ツッカベッカライ カヤヌマ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京伴手禮推薦｜高級手工餅乾・必買甜點",
    description: "東京必買！奧地利認證大師的手工餅乾禮盒🍪",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京伴手禮推薦｜高級手工餅乾・必買甜點【實際購買】",
  description: "東京必買伴手禮：赤坂ツッカベッカライ カヤヌマ的手工餅乾禮盒。",
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
    { "@type": "ListItem", position: 2, name: "伴手禮推薦", item: PAGE_URL },
  ],
};

const relatedLinks = [
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京必去咖啡散步地區", desc: "貝果・義式冰淇淋・起司披薩" },
  { href: "/ramen", label: "🍜 日本拉麵推薦｜東京・大阪必吃拉麵4選", desc: "濃厚魚介系つけ麺から家系まで" },
  { href: "/museum", label: "🎨 東京美術館推薦｜國立新美術館＆根津美術館", desc: "現代建築・日本庭園" },
];

export default function TokyoCookiesPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">伴手禮推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-orange-100 text-orange-700 border border-orange-300 text-xs font-semibold px-3 py-1 rounded-full">🍪 伴手禮</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・赤坂</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際購買</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京伴手禮推薦｜高級手工<br />餅乾・必買甜點🍪
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">來東京旅遊，帶什麼伴手禮回去最有面子？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            來日本旅遊，<strong>伴手禮</strong>是行程中很重要的一環🎁 不想買到處都有的觀光零食？那就試試東京當地人才知道的<strong>高級手工餅乾</strong>。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦的是位於赤坂的老字號甜點名店<strong>「ツッカベッカライ カヤヌマ」</strong>——由奧地利國家認證甜點大師手工製作，需要<strong>預約才能買到</strong>的超人氣餅乾禮盒✨ 不論送禮或自用，都是最有品味的選擇。
          </p>
        </section>

        {/* Shop */}
        <h2 className="text-lg font-black text-stone-800 mb-4">東京伴手禮推薦（持續更新中）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image
                src="/tokyo-cookies/kayanuma-1.jpg"
                alt="ツッカベッカライ カヤヌマ - 東京伴手禮推薦"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">ツッカベッカライ カヤヌマ</h3>
                <span className="text-xs text-stone-400">Zuckerbäckerei Kayanuma</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              1987年創業，由<strong>奧地利國家認證</strong>的日本人甜點大師所開設。店名來自德語「Zucker（糖）+ Bäckerei（烘焙坊）」，是赤坂在地人心目中的頂級甜點名店。外觀以奧地利國旗為標誌，店內充滿歐式高級感。
            </p>

            {/* 推薦理由 */}
            <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-orange-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                招牌<strong>餅乾禮盒</strong>有三種口味：<strong>香草・巧克力・肉桂</strong>，每一片都是手工製作🍪 入口即化、酥鬆細緻，帶有濃郁奶油香氣，甜度恰到好處。黑色高級包裝非常適合送禮，送給家人朋友絕對會被稱讚！因為每天限量手工製作，建議出發前先<strong>電話預約</strong>📞
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["🍪 手工餅乾", "🎁 送禮首選", "📞 需預約", "🇦🇹 奧地利認證"].map((t) => (
                <span key={t} className="text-xs bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 推薦菜單 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍽️ 推薦商品</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・餅乾禮盒 A缶（3種口味）約¥4,400</li>
                <li>・餅乾禮盒 小缶・中缶・大缶 可選</li>
                <li>・口味：香草（Vanille）・巧克力（Schokolade）・肉桂（Zimt）</li>
              </ul>
            </div>

            {/* 基本資訊 */}
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都港區赤坂1-4-5</p>
              <p className="text-xs text-stone-600">🚇 東京メトロ銀座線・南北線「溜池山王」駅 徒歩約3分</p>
              <p className="text-xs text-stone-600">⏰ 11:00〜16:00（週日・週一・國定假日公休）</p>
              <p className="text-xs text-stone-600">💴 餅乾禮盒 約¥4,400〜</p>
              <p className="text-xs text-stone-600">📞 03-3582-5689（可電話預約，最多5盒）</p>
              <p className="text-xs text-stone-600">💳 僅收現金</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">數量有限，建議出發前先電話預約。旺季（年末年始等）更容易售罄，早點預訂最安心</p>
            </div>

            <a
              href="http://www.z-kayanuma.com/menu2.html"
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
          <h2 className="text-base font-black text-stone-800 mb-3">買伴手禮小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 一定要<strong>事先電話預約</strong>，直接去可能會撲空</li>
            <li>✅ 僅收現金，記得準備好日幣💴</li>
            <li>✅ 營業時間到16:00，建議安排在中午前後前往</li>
            <li>✅ 餅乾常溫保存即可，適合帶回台灣送禮</li>
            <li>✅ 附近就是溜池山王・赤坂，可以順便散步觀光</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            需要預約才買得到的手工餅乾，光是這一點就讓人覺得特別珍貴✨<br />
            送給重要的人，絕對是最有品味的東京伴手禮！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「入口即化的餅乾，一打開黑色禮盒的瞬間就覺得好高級🍪」</p>
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
