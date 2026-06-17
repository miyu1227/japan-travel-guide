import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/kobe-cafe";
const OG_IMAGE = "/kobe-cafe/freundlieb-1.jpg";

export const metadata: Metadata = {
  title: "神戶咖啡推薦｜フロインドリーブ＆パンとエスプレッソと異人館2選【實際造訪】",
  description:
    "神戶旅遊必去的人氣咖啡廳推薦：教堂改建的「フロインドリーブ 生田店」與北野異人館的「パンとエスプレッソと異人館」。氛圍・建築・甜點完整介紹，附交通方式・推薦菜單。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "神戶咖啡推薦｜フロインドリーブ＆パンとエスプレッソと異人館",
    description: "教堂咖啡廳・北野異人館咖啡。神戶必去2間人氣咖啡廳。附交通・菜單・推薦時段。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "神戶咖啡推薦・フロインドリーブ生田店" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "神戶咖啡推薦｜フロインドリーブ＆異人館咖啡",
    description: "教堂咖啡廳・北野異人館咖啡，神戶必去2間人氣咖啡廳！",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "神戶咖啡推薦｜フロインドリーブ＆パンとエスプレッソと異人館2選【實際造訪】",
  description: "神戶必去咖啡廳：教堂改建的フロインドリーブ生田店、北野異人館的パンとエスプレッソと異人館。",
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
    { "@type": "ListItem", position: 2, name: "神戶咖啡推薦", item: PAGE_URL },
  ],
};

const freundliebPhotos = ["/kobe-cafe/freundlieb-1.jpg", "/kobe-cafe/freundlieb-2.jpg", "/kobe-cafe/freundlieb-3.jpg"];
const panePhotos = ["/kobe-cafe/pane-1.jpg", "/kobe-cafe/pane-2.jpg", "/kobe-cafe/pane-3.jpg"];

const relatedLinks = [
  { href: "/shukugawa", label: "☕ 夙川おすすめカフェ2選｜兵庫・神戸", desc: "ガレットランチ＆本格コーヒー" },
  { href: "/steak-zen", label: "🥩 神戶牛推薦｜ステーキハウスZEN 三宮店", desc: "A5鐵板燒名店・主廚現煎" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京必去咖啡散步地區", desc: "貝果・義式冰淇淋・起司披薩" },
];

export default function KobeCafePage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">神戶咖啡推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 神戶</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          神戶咖啡推薦｜フロインドリーブ＆<br />パンとエスプレッソと異人館☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">神戶是日本最適合咖啡散步的城市之一</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            神戶從明治時代就深受西洋文化影響，是日本最早接觸咖啡與西式點心的地區之一☕ 整座城市充滿異國風情，街角隨處都能遇見有故事的咖啡廳。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦的是兩間實際造訪過、最有特色的<strong>神戶咖啡廳</strong>——一間是由教堂改建的歷史名店<strong>「フロインドリーブ 生田店」</strong>，另一間是位於北野異人館街、洋館氛圍滿點的<strong>「パンとエスプレッソと異人館」</strong>。
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">フロインドリーブ 生田店 → 教堂咖啡廳・德式甜點</p>
                <p className="text-xs text-stone-500 leading-relaxed">挑高彩繪玻璃空間，神戶最有名的西點老店</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">パンとエスプレッソと異人館 → 洋館麵包＆濃縮咖啡</p>
                <p className="text-xs text-stone-500 leading-relaxed">北野異人館街、人氣麵包店「パンとエスプレッソと」的神戶店</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">神戶咖啡推薦・2選</h2>

        {/* Spot 1: フロインドリーブ */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {freundliebPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="フロインドリーブ 生田店 - 神戶咖啡推薦"
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
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">フロインドリーブ 生田店</h3>
                <span className="text-xs text-stone-400">FREUNDLIEB Ikuta</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              由<strong>舊神戶聯合教會</strong>改建而成的咖啡廳，挑高的天花板、彩繪玻璃，每一個角落都像在歐洲教堂裡用餐⛪ 由德國麵包師傅 Heinrich Freundlieb 創立的百年西點老店，是神戶最具代表性的咖啡廳之一。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                光是空間本身就值得專程造訪✨ 推薦點他們招牌的<strong>三明治套餐</strong>，麵包是自家烘焙、用料豐富，搭配紅茶或咖啡很有英式下午茶的感覺🫖 也別忘了看一看樓下的烘焙坊，可以買到德式餅乾當伴手禮。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["⛪ 教堂建築", "🥪 招牌三明治", "🍪 德式餅乾伴手禮", "📸 IG拍照熱點"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 兵庫縣神戶市中央區生田町4-6-15</p>
              <p className="text-xs text-stone-600">🚉 JR・阪急「三宮」駅 徒歩約8分</p>
              <p className="text-xs text-stone-600">⏰ 10:00〜18:00（依官網為準・週三休）</p>
              <p className="text-xs text-stone-600">💴 ¥1,500〜¥2,500 / 人</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">熱門時段常常需要排隊，建議平日上午前往</p>
            </div>

            <a
              href="http://h-freundlieb.com/wp1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 2: パンとエスプレッソと異人館 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {panePhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="パンとエスプレッソと異人館 - 神戶咖啡推薦"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">パンとエスプレッソと異人館</h3>
                <span className="text-xs text-stone-400">Pan to Espresso to Ijinkan</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於北野異人館街，由<strong>舊洋館</strong>改建的咖啡廳。是東京表參道人氣麵包店「パンとエスプレッソと」在神戶的分店🥐 庭園綠意盎然，很有歐洲鄉間別墅的氛圍，是神戶散步行程的絕佳休息點。
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                招牌的<strong>「ムー」（鐵板法式吐司）</strong>是必點，外脆內軟、配上鮮奶油與糖漿，超級療癒🍞☕ 從北野異人館街散步過來剛剛好，坐在洋館裡邊吃邊看窗外綠意，是真正會讓人放慢腳步的神戶體驗。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🥐 名店パンとエスプレッソと", "🍞 鐵板法式吐司「ムー」", "🏛️ 北野異人館", "🌿 庭園氛圍"].map((t) => (
                <span key={t} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 兵庫縣神戶市中央區北野町2-15-12</p>
              <p className="text-xs text-stone-600">🚉 各線「三宮」駅 徒歩約15分／新神戶駅 徒歩約10分</p>
              <p className="text-xs text-stone-600">⏰ 10:00〜18:00（依官網為準）</p>
              <p className="text-xs text-stone-600">💴 ¥1,200〜¥2,000 / 人</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">建議與北野異人館街觀光行程一起安排，上午散步完中午來休息剛剛好</p>
            </div>

            <a
              href="https://www.hotpepper.jp/strJ004402297/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 店家資訊
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">神戶咖啡散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 兩間都是人氣店，建議<strong>平日上午</strong>造訪比較不用排隊</li>
            <li>✅ 三宮→生田神社→フロインドリーブ→北野異人館街，路線剛剛好可以串成散步行程</li>
            <li>✅ 神戶是個小巧的城市，幾乎所有景點都能用走的串起來👟</li>
            <li>✅ フロインドリーブ的德式餅乾很適合當伴手禮帶回家🍪</li>
            <li>✅ 出發前查詢營業時間與公休日，避免白跑一趟</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            一間是夢幻教堂咖啡廳，一間是洋館裡的麵包店——兩間風格不同但都讓人難忘✨<br />
            來神戶旅遊，請務必把這兩間排進咖啡散步行程！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「神戶的咖啡廳每一間都很有故事，散步邊喝咖啡是最幸福的旅行方式☕」</p>
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
