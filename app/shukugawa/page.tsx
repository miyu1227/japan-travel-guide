import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const PAGE_URL = "https://www.japantrippicks.com/shukugawa";
const OG_IMAGE = "/shukugawa/crepe-1.jpg";

export const metadata: Metadata = {
  title: "夙川咖啡廳推薦2選｜關西必去法式可麗餅＆精品咖啡【實際造訪】",
  description:
    "兵庫・夙川咖啡廳推薦2選！法式可麗餅午餐「クレープリー・ルポ」與精品自家焙煎「ゆげ焙煎所」。關西旅遊咖啡廳散步好去處，附交通方式・菜單・推薦。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "夙川咖啡廳推薦2選｜關西必去法式可麗餅＆精品咖啡",
    description: "兵庫・夙川人氣咖啡廳2選！法式可麗餅＆精品咖啡。關西咖啡散步推薦。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "夙川咖啡廳推薦・クレープリー・ルポ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "夙川咖啡廳推薦2選｜關西必去法式可麗餅＆精品咖啡",
    description: "兵庫・夙川人氣咖啡廳！法式可麗餅＆精品咖啡，關西推薦☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "夙川咖啡廳推薦2選｜關西必去法式可麗餅＆精品咖啡【實際造訪】",
  description: "兵庫・夙川咖啡廳推薦2選。法式可麗餅＆精品咖啡。",
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
    { "@type": "ListItem", position: 2, name: "夙川咖啡廳推薦", item: PAGE_URL },
  ],
};

const shops = [
  {
    id: "crepe",
    number: 1,
    icon: "🥞",
    name: "クレープリー・ルポ",
    nameZh: "法式可麗餅專門店",
    subtitle: "正宗法式可麗餅午餐的人氣店",
    url: "https://www.hotpepper.jp/strJ001053495/",
    urlLabel: "店家資訊",
    images: ["/shukugawa/crepe-1.jpg", "/shukugawa/crepe-2.jpg", "/shukugawa/crepe-3.jpg"],
    desc: "在夙川想吃可麗餅，這間絕對不能錯過🥞 法式風格的外觀和沉穩的店內空間令人印象深刻。午餐的蕎麥粉鹹可麗餅（galette）口感Q彈又香氣十足，份量也非常滿足！",
    reason: "正宗法式鹹可麗餅在關西很少見，這間的品質讓人驚艷✨ 蕎麥粉香氣迷人，搭配火腿和蛋的經典組合完美無缺。店內氛圍沉穩放鬆，非常適合約會或女生聚餐💑",
    tags: ["🥞 法式可麗餅", "🍽️ 午餐推薦", "💑 約會推薦"],
    poyaComment: "蕎麥粉的香氣真的好迷人！吃完還想再來一次🥞",
  },
  {
    id: "coffee",
    number: 2,
    icon: "☕",
    name: "ゆげ焙煎所 夙川店",
    nameZh: "湯氣烘焙所・精品咖啡",
    subtitle: "靜謐氛圍的自家焙煎咖啡廳",
    url: "https://yuge-roaster.stores.jp/",
    urlLabel: "官方網站",
    images: ["/shukugawa/coffee-1.jpg", "/shukugawa/coffee-2.jpg"],
    desc: "喜歡咖啡的人一定要來這間「ゆげ焙煎所」☕ 店內設計簡約洗練，非常安靜舒適。咖啡品質很高，一口喝下去香氣立刻蔓延。也可以外帶，搭配夙川河畔散步最完美！",
    reason: "精品咖啡品質出色，每一杯都能感受到用心☕ 一個人也能輕鬆入座，適合獨自閱讀或作業。可外帶搭配夙川河畔散步，春天的櫻花季來更是絕配🌸",
    tags: ["☕ 精品咖啡", "📚 適合一人", "🚶 外帶散步"],
    poyaComment: "咖啡香氣超棒，靜靜待著就很幸福✨",
  },
];

const relatedLinks = [
  { href: "/kobe-cafe", label: "☕ 神戶咖啡推薦｜フロインドリーブ＆異人館咖啡", desc: "教堂改建咖啡廳・北野異人館洋館咖啡" },
  { href: "/steak-zen", label: "🥩 神戶牛推薦｜ステーキハウスZEN 三宮店", desc: "A5鐵板燒名店・主廚現煎" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京必去咖啡散步地區", desc: "貝果・義式冰淇淋・起司披薩" },
];

export default function ShukugawaPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">夙川咖啡廳推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badges */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="bg-pink-100 text-pink-600 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 兵庫・夙川</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          夙川咖啡廳推薦2選｜<br />關西必去法式可麗餅＆精品咖啡☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">夙川——關西隱藏版的咖啡廳散步好去處</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            兵庫・<strong>夙川</strong>是關西地區最受歡迎的悠閒住宅區之一，擁有靜謐的街道和美麗的河岸步道🌿 春天河畔的櫻花更是美不勝收，是關西人心中的賞櫻名所🌸
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦兩間實際造訪過、最值得去的<strong>夙川咖啡廳</strong>——正宗法式可麗餅<strong>「クレープリー・ルポ」</strong>和精品自家焙煎<strong>「ゆげ焙煎所」</strong>。來關西旅遊時，不妨安排一個悠閒的咖啡散步行程✨
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">クレープリー・ルポ → 法式鹹可麗餅・午餐推薦</p>
                <p className="text-xs text-stone-500 leading-relaxed">沉穩法式空間，約會或女生聚餐推薦</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">ゆげ焙煎所 → 精品自家焙煎・安靜舒適</p>
                <p className="text-xs text-stone-500 leading-relaxed">一人也能輕鬆入座，外帶搭配河畔散步最棒</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">夙川咖啡廳推薦・2選</h2>

        {/* Shops */}
        <div className="space-y-6 mb-10">
          {shops.map((shop) => (
            <section key={shop.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              {/* Photos */}
              {shop.images.length === 2 ? (
                <div className="grid grid-cols-2 gap-0.5">
                  {shop.images.map((src, i) => (
                    <div key={i} className="relative aspect-[4/3] bg-stone-100">
                      <Image src={src} alt={`${shop.name} - 夙川咖啡廳推薦`} fill sizes="50vw" className="object-cover" priority={shop.number === 1 && i === 0} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-0.5">
                  {shop.images.map((src, i) => (
                    <div key={i} className="relative aspect-square bg-stone-100">
                      <Image src={src} alt={`${shop.name} - 夙川咖啡廳推薦`} fill sizes="33vw" className="object-cover" priority={shop.number === 1 && i === 0} />
                    </div>
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">
                    {shop.number}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-stone-800 leading-tight">{shop.name}</h3>
                    <p className="text-xs text-stone-400">{shop.nameZh}</p>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-3">{shop.desc}</p>

                <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
                  <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{shop.reason}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {shop.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-xl px-3 py-2 mb-3">
                  <span className="text-lg shrink-0">🐥</span>
                  <p className="text-xs text-stone-600 font-medium">「{shop.poyaComment}」</p>
                </div>

                <a href={shop.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                  🔗 {shop.urlLabel}
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">夙川咖啡散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從大阪搭阪急電鐵約30分鐘即可抵達夙川</li>
            <li>✅ 春天（3〜4月）夙川河畔的<strong>櫻花</strong>非常美，推薦搭配咖啡散步🌸</li>
            <li>✅ 兩間店距離不遠，可以安排同一天順遊</li>
            <li>✅ 附近也有許多雜貨店和麵包店，很適合慢慢逛</li>
            <li>✅ 也可以從神戶出發，搭配三宮・北野行程一起安排</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            法式可麗餅和精品咖啡——兩間風格完全不同的咖啡廳✨<br />
            夙川是關西旅遊中讓人最放鬆的散步地區，一定要來體驗！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「夙川真的是很適合慢慢享受的地方！春天來賞櫻花＋咖啡，完美✨」</p>
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
