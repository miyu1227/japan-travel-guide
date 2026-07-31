import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";

const PAGE_URL = "https://www.japantrippicks.com/osaka-gourmet";
const OG_IMAGE = "/osaka-gourmet/teppan-1.jpg";

export const metadata: Metadata = {
  title: "大阪美食推薦2選｜鐵板燒名店＆人氣居酒屋【實際造訪】",
  description:
    "大阪必吃美食推薦2選！福島區人氣鐵板燒「鉄板屋な。」與梅田周邊話題居酒屋「酒場ビリー」。大阪在地人氣餐廳完整介紹，附交通方式・推薦菜單・價格。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "大阪美食推薦2選｜鐵板燒名店＆人氣居酒屋",
    description: "大阪必吃！鐵板屋な。＆酒場ビリー，在地人氣餐廳。附交通・菜單・推薦。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "大阪美食推薦・鉄板屋な。" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "大阪美食推薦2選｜鐵板燒名店＆人氣居酒屋",
    description: "大阪必吃！福島區鐵板燒＆梅田話題居酒屋🍻",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "大阪美食推薦2選｜鐵板燒名店＆人氣居酒屋【實際造訪】",
  description: "大阪必吃美食推薦：鉄板屋な。、酒場ビリー。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-07-21T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "大阪美食推薦", item: PAGE_URL },
  ],
};

const teppanPhotos = ["/osaka-gourmet/teppan-1.jpg", "/osaka-gourmet/teppan-2.jpg", "/osaka-gourmet/teppan-3.jpg", "/osaka-gourmet/teppan-4.jpg"];
const billiePhotos = ["/osaka-gourmet/billie-1.jpg", "/osaka-gourmet/billie-2.jpg", "/osaka-gourmet/billie-3.jpg", "/osaka-gourmet/billie-4.jpg"];

const relatedLinks = [
  { href: "/kansai-ramen", label: "🍜 關西拉麵推薦｜大阪必吃濃厚魚介沾麵", desc: "肥後橋つじ田・加檸檬與黑七味變化風味" },
  { href: "/steak-zen", label: "🥩 神戶牛推薦｜ステーキハウスZEN 三宮店", desc: "A5鐵板燒名店・主廚現煎" },
  { href: "/ginza-apollo", label: "🍽️ 銀座美食推薦｜THE APOLLO 希臘料理", desc: "東京話題餐廳・地中海風味分享盤" },
];

export default function OsakaGourmetPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">大阪美食推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍽️ 美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 大阪</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          大阪美食推薦2選｜鐵板燒<br />名店＆人氣居酒屋🍻
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">「天下の台所」大阪——在地人最愛的隱藏美食</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            大阪是日本知名的<strong>「美食之都」</strong>🏙️ 除了道頓堀的章魚燒、大阪燒、串炸這些觀光美食之外，當地人也有許多<strong>隱藏版居酒屋＆名店</strong>，是台灣・香港旅客最容易錯過的寶藏。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦的2間店都是<strong>大阪在地人氣餐廳</strong>——福島區的<strong>「鉄板屋な。」</strong>提供精緻鐵板燒，梅田周邊的<strong>「酒場ビリー」</strong>則是話題居酒屋。離梅田很近、交通方便，是想體驗道地大阪夜美食的最佳選擇✨
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">鉄板屋な。 → 福島區精緻鐵板燒</p>
                <p className="text-xs text-stone-500 leading-relaxed">主廚眼前現煎、神戶牛＆海鮮、適合約會</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">酒場ビリー → 梅田話題居酒屋</p>
                <p className="text-xs text-stone-500 leading-relaxed">時尚居酒屋、招牌串燒、適合朋友聚餐</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">大阪美食推薦・2選</h2>

        {/* Spot 1: 鉄板屋な。 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {teppanPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="鉄板屋な。 - 大阪美食推薦" fill sizes="50vw" className="object-cover" priority={i === 0} />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">鉄板屋な。</h3>
                <span className="text-xs text-stone-400">Teppan-ya Na</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於大阪福島區的<strong>精緻鐵板燒餐廳</strong>🔥 由主廚在眼前現煎，從食材選擇到火候控制都看得到。提供<strong>神戶牛・和牛・新鮮海鮮</strong>等高品質食材，搭配大阪當地的特色調味，氛圍精緻又輕鬆。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                坐在吧台前看著主廚現煎的<strong>「劇場感」</strong>體驗，是這間店最大的魅力✨ 招牌的<strong>鐵板燒牛排</strong>外香內嫩、肉汁四溢🥩 也有大阪燒、什錦燒等經典關西料理。與一般觀光客滿滿的鐵板燒店不同，這裡的氛圍更道地、適合<strong>約會或商務聚餐</strong>💑
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🔥 主廚現煎", "🥩 神戶牛＆和牛", "🦐 新鮮海鮮", "💑 約會推薦", "🍶 在地名店"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 大阪府大阪市福島區福島周邊</p>
              <p className="text-xs text-stone-600">🚃 JR大阪環狀線「福島」駅 徒歩約5分／JR東西線「新福島」駅 徒歩約3分</p>
              <p className="text-xs text-stone-600">⏰ 17:00〜23:00（依日變動）</p>
              <p className="text-xs text-stone-600">💴 套餐 ¥5,000〜／單點 ¥3,000〜</p>
              <p className="text-xs text-stone-600">📞 建議事先預約</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">座位有限，建議提前1〜2天電話預約，特別是週末</p>
            </div>

            <a href="https://www.hotpepper.jp/strJ001277121/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 店家資訊
            </a>
          </div>
        </section>

        {/* Spot 2: 酒場ビリー */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {billiePhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="酒場ビリー - 大阪美食推薦" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">酒場ビリー（Sakaba Billie）</h3>
                <span className="text-xs text-stone-400">Japanese Pub Billie</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              梅田周邊話題的<strong>時尚日式居酒屋</strong>🍻 店內氛圍復古又現代，是大阪在地年輕人最愛的聚會地點。招牌料理是<strong>炭火串燒</strong>，搭配豐富的日本酒、燒酎、生啤等酒類，氛圍熱鬧又輕鬆。
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                想體驗<strong>道地的大阪夜生活</strong>，這間絕對推薦🍻 炭火串燒一串<strong>¥150〜¥300</strong>，CP值超高💰 還有大阪人氣的「土手煮」、「明太子玉子燒」等下酒菜。<strong>2〜4人前往</strong>最棒，可以多點幾道分食！梅田站徒步圈，吃完還能順遊大阪夜景。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍻 炭火串燒", "🍶 日本酒豐富", "💰 CP值超高", "🌃 大阪夜生活", "🚃 梅田徒步"].map((t) => (
                <span key={t} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 大阪府大阪市北區梅田周邊</p>
              <p className="text-xs text-stone-600">🚃 JR・各線「大阪／梅田」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 17:00〜24:00（依日變動）</p>
              <p className="text-xs text-stone-600">💴 串燒 ¥150〜¥300／預算 ¥3,000〜¥5,000</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">人氣很高，週末晚上建議查Instagram確認當日營業＆提前預約</p>
            </div>

            <a href="https://www.instagram.com/japanese_pub_billie/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 Instagram
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">大阪美食小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 兩間店都離<strong>梅田／大阪站</strong>很近，可以排同一晚行程</li>
            <li>✅ <strong>鐵板屋な。</strong>適合精緻晚餐約會（預約必要）</li>
            <li>✅ <strong>酒場ビリー</strong>適合朋友2〜4人聚餐</li>
            <li>✅ 大阪美食「邊吃邊喝」是文化，建議多人前往分享更多料理🍻</li>
            <li>✅ 周邊還有道頓堀、心齋橋可順遊購物</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            想體驗道地的大阪美食，不要只去觀光街！這兩間在地人氣餐廳更能感受真實的大阪味✨<br />
            鐵板燒精緻晚餐＋居酒屋串燒夜遊，是來大阪旅遊最完美的搭配！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「大阪人真的好會吃！在地居酒屋的串燒和酒，氛圍太棒了🍻」</p>
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
