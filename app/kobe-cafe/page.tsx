import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";

const PAGE_URL = "https://www.japantrippicks.com/kobe-cafe";
const OG_IMAGE = "/kobe-cafe/caffarel-3.jpg";

export const metadata: Metadata = {
  title: "神戶咖啡推薦4選｜教堂咖啡・異人館・巧克力老店【實際造訪】",
  description:
    "教堂改建的「フロインドリーブ」、北野異人館的「パンとエスプレッソと」、熊熊主題吃到飽「くまポチ邸」、巧克力老店「Caffarel」。附交通、營業時間與散步路線。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "神戶咖啡推薦4選｜教堂咖啡・異人館・巧克力老店",
    description: "教堂咖啡廳・北野異人館咖啡・熊熊麵包吃到飽・義大利巧克力老店。神戶必去4間人氣咖啡廳。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "神戶咖啡推薦・Caffarel 神戶北野本店的甜點盤" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "神戶咖啡推薦4選｜教堂咖啡・異人館・巧克力老店",
    description: "教堂咖啡廳・異人館咖啡・熊熊麵包吃到飽・義大利巧克力老店☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "神戶咖啡推薦4選｜教堂咖啡・異人館・巧克力老店【實際造訪】",
  description: "神戶必去咖啡廳：教堂改建的フロインドリーブ生田店、北野異人館的パンとエスプレッソと異人館、熊熊主題麵包吃到飽的ケーニヒスクローネ くまポチ邸，以及義大利巧克力老店Caffarel 神戶北野本店。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-08-13T00:00:00+09:00",
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
const kumapochiPhotos = ["/kobe-cafe/kumapochi-1.jpg", "/kobe-cafe/kumapochi-2.jpg"];
const caffarelPhotos = ["/kobe-cafe/caffarel-1.jpg", "/kobe-cafe/caffarel-2.jpg", "/kobe-cafe/caffarel-3.jpg"];

const relatedLinks = [
  { href: "/shukugawa", label: "☕ 夙川おすすめカフェ2選｜兵庫・神戸", desc: "ガレットランチ＆本格コーヒー" },
  { href: "/steak-zen", label: "🥩 神戶牛推薦｜ステーキハウスZEN 三宮店", desc: "A5鐵板燒名店・主廚現煎" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京必去咖啡散步地區", desc: "貝果・義式冰淇淋・起司披薩" },
];

const faqItems = [
  { q: "需要排隊嗎？", a: "フロインドリーブ的熱門時段常要排隊，くまポチ邸平日開店前就有人排。四間都建議平日上午造訪。" },
  { q: "四間怎麼串成一天？", a: "三宮→生田神社→フロインドリーブ→托爾街的Caffarel→北野異人館街，這條路線走起來剛剛好。" },
  { q: "公休日是哪天？", a: "フロインドリーブ生田店週三休、Caffarel 神戶北野本店週二休（L.O. 17:00）。出發前以官網為準。" },
  { q: "預算大概多少？", a: "每人約¥1,200〜¥2,500。くまポチ邸的主餐約¥2,310起，含麵包吃到飽與迷你甜點。" },
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
          神戶咖啡推薦4選｜教堂咖啡・異人館<br />熊熊麵包吃到飽＆巧克力老店☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-13</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">神戶是日本最適合咖啡散步的城市之一</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            神戶從明治時代就深受西洋文化影響，是日本最早接觸咖啡與西式點心的地區之一☕ 整座城市充滿異國風情，街角隨處都能遇見有故事的咖啡廳。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            這次推薦的是四間實際造訪過、最有特色的<strong>神戶咖啡廳</strong>——由教堂改建的歷史名店<strong>「フロインドリーブ 生田店」</strong>、位於北野異人館街、洋館氛圍滿點的<strong>「パンとエスプレッソと異人館」</strong>、超人氣熊熊主題、麵包吃到飽的<strong>「ケーニヒスクローネ くまポチ邸」</strong>，以及來自義大利杜林的巧克力老店<strong>「Caffarel 神戶北野本店」</strong>。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇寫給<strong>安排神戶半日〜一日散步、想挑一間坐下來休息</strong>的台灣・香港旅人。<strong>你會知道</strong>：四間各自的特色與價格帶、公休日與容易排隊的時段、從三宮・元町怎麼走，還有怎麼把它們串成一條散步路線。
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
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">ケーニヒスクローネ くまポチ邸 → 熊熊主題・麵包吃到飽</p>
                <p className="text-xs text-stone-500 leading-relaxed">神戶老牌洋菓子的療癒熊熊咖啡，20多種現烤麵包吃到飽</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">Caffarel 神戶北野本店 → 義大利巧克力・甜點咖啡</p>
                <p className="text-xs text-stone-500 leading-relaxed">杜林老牌巧克力品牌的日本唯一咖啡空間，貓咪巧克力超好買</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">神戶咖啡推薦・4選</h2>

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
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
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

        {/* Spot 3: ケーニヒスクローネ くまポチ邸 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {kumapochiPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="ケーニヒスクローネ くまポチ邸 - 神戶咖啡推薦"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div>
                <h3 className="text-base font-black text-stone-800">ケーニヒスクローネ くまポチ邸</h3>
                <span className="text-xs text-stone-400">Konigs Krone Kumapochi-tei</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              神戶老牌洋菓子品牌<strong>「ケーニヒスクローネ」</strong>經營的熊熊主題咖啡廳🐻 招牌吉祥物「くまポチ」到處都是，整間店超級療癒好拍。最大的賣點是點主餐就能享用<strong>每天現烤、常時20種以上的麵包吃到飽</strong>，還附迷你甜點，是神戶超人氣的排隊名店。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                麵包吃到飽＋迷你甜點＋飯後霜淇淋，CP值超高又好拍🥐🍦 招牌菜「蛋與麻糬的燉牛肉」很有特色，先著50名還能吃到限定的招牌點心「クローネ」。位在飯店內、可眺望神戶市街，混雜時最長可待3小時，很適合逛街逛累來吃頓豐盛的早午餐。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🐻 熊熊主題", "🥐 麵包吃到飽", "🍦 飯後霜淇淋", "📸 IG拍照熱點", "🏨 飯店內眺望"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 兵庫縣神戶市中央區三宮町2-3-10（ホテルケーニヒスクローネ神戸内）</p>
              <p className="text-xs text-stone-600">🚉 各線「三宮」駅 徒歩約7分／JR「元町」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 依官網為準（麵包吃到飽・霜淇淋兌換至15:00左右）</p>
              <p className="text-xs text-stone-600">💴 主餐約¥2,310〜（含麵包吃到飽・迷你甜點）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">超人氣店，平日開店前就會排隊，建議<strong>提早前往</strong>；部分麵包售完為止</p>
            </div>

            <a
              href="https://konigs-krone.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 4: Caffarel 神戶北野本店 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {caffarelPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="Caffarel 神戶北野本店 - 神戶咖啡推薦"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">4</div>
              <div>
                <h3 className="text-base font-black text-stone-800">Caffarel 神戶北野本店</h3>
                <span className="text-xs text-stone-400">カファレル 神戸北野本店</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              來自<strong>義大利杜林（Torino）</strong>、1826年創業的巧克力老牌<strong>Caffarel</strong>。招牌是以榛果製作的<strong>「ジャンドゥーヤ」巧克力</strong>，而神戶北野本店最特別的地方是——這裡是<strong>日本國內的Caffarel直營店中，唯一設有咖啡座的店</strong>🍫 店在托爾街（トアロード）上，藍色遮陽棚就是地標。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                點一份<strong>「お皿盛りドルチェ」（附飲料）</strong>就能一次吃到蛋糕、義式冰淇淋與當季水果，盤子上還有拉糖裝飾，端上來的瞬間就想拍照📸 想喝點特別的，可以試試杜林名產<strong>「Bicerin」</strong>——巧克力、濃縮咖啡與牛奶分成三層的熱飲。<strong>貓咪造型的巧克力</strong>做得超可愛，當伴手禮送人幾乎不會失手🐱
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍫 義大利杜林老牌", "☕ 日本唯一咖啡座", "🐱 貓咪造型巧克力", "🎁 伴手禮好買", "🪑 座位少"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 兵庫縣神戶市中央區山本通3-7-29 神戸トアロードビル1F</p>
              <p className="text-xs text-stone-600">🚉 地下鐵西神・山手線「三宮」駅 徒歩約8分／JR・阪神「元町」駅 徒歩約12分</p>
              <p className="text-xs text-stone-600">⏰ 11:00〜18:00（L.O. 17:00）／週二公休</p>
              <p className="text-xs text-stone-600">💴 甜點盤約¥1,700〜、飲品約¥900〜（價格以店頭菜單為準）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">咖啡座只有<strong>桌位5席＋吧台3席</strong>，人多時要等；一個人來反而很好坐</p>
            </div>

            <a
              href="https://www.caffarel.co.jp/view/page/kobe-kitano"
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
          <h2 className="text-base font-black text-stone-800 mb-3">神戶咖啡散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 四間都是人氣店，建議<strong>平日上午</strong>造訪比較不用排隊</li>
            <li>✅ 三宮→生田神社→フロインドリーブ→托爾街的Caffarel→北野異人館街，路線剛剛好可以串成散步行程</li>
            <li>✅ くまポチ邸的麵包吃到飽建議空腹前往，開店前就會排隊要有心理準備🥐</li>
            <li>✅ 神戶是個小巧的城市，幾乎所有景點都能用走的串起來👟</li>
            <li>✅ フロインドリーブ的德式餅乾很適合當伴手禮帶回家🍪</li>
            <li>✅ Caffarel<strong>週二公休</strong>、フロインドリーブ<strong>週三公休</strong>，安排行程時要注意</li>
            <li>✅ 出發前查詢營業時間與公休日，避免白跑一趟</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            夢幻教堂咖啡廳、洋館裡的麵包店、療癒的熊熊麵包吃到飽，再加上義大利巧克力老店的甜點盤——四間風格完全不同，但都讓人難忘✨<br />
            來神戶旅遊，請務必挑一兩間排進咖啡散步行程！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「神戶的咖啡廳每一間都很有故事，散步邊喝咖啡是最幸福的旅行方式☕」</p>
            </div>
          </div>
        </div>

        <FaqSection items={faqItems} />

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

        <RelatedArticles slug="kobe-cafe" exclude={["/cafe", "/shukugawa", "/steak-zen"]} />

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
