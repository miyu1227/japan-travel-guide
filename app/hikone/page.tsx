import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";

const KLOOK_KAMENOI_HIKONE =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1339986&k_site=https%3A%2F%2Fwww.klook.com%2Fja%2Fhotels%2Fdetail%2F416852-kamenoi-hotel-hikone%2F%3Fcheck_in%3D2026-08-17%26check_out%3D2026-08-18%26room_num%3D1%26adult_num%3D1%26child_num%3D0";

const PAGE_URL = "https://www.japantrippicks.com/hikone";
const OG_IMAGE = "/hikone/castle-1.png";

export const metadata: Metadata = {
  title: "彥根城觀光推薦｜滋賀必去國寶城・吉祥物彥根貓【實際造訪】",
  description:
    "滋賀彥根城觀光完整指南！日本國寶之一的彥根城，可以遇見人氣吉祥物「彥根貓（ひこにゃん）」。城下町散步、必吃布丁、彥根貓造型饅頭等周邊巡禮。附門票・交通方式・吉祥物見面時間。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "彥根城觀光推薦｜滋賀必去國寶城・吉祥物彥根貓",
    description: "日本國寶彥根城！可以遇見彥根貓ひこにゃん，城下町散步、必吃布丁。附門票・交通・推薦。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "彥根城觀光推薦・吉祥物彥根貓" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "彥根城觀光推薦｜滋賀必去國寶城・吉祥物彥根貓",
    description: "日本國寶彥根城！可以遇見人氣吉祥物彥根貓ひこにゃん🐱",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "彥根城觀光推薦｜滋賀必去國寶城・吉祥物彥根貓【實際造訪】",
  description: "滋賀「彥根城」完整指南。日本國寶之一、吉祥物彥根貓見面、城下町散步。",
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
    { "@type": "ListItem", position: 2, name: "彥根城觀光推薦", item: PAGE_URL },
  ],
};

const castlePhotos = ["/hikone/castle-1.png", "/hikone/castle-2.png", "/hikone/castle-3.jpg"];
const sweetsPhotos = ["/hikone/sweets-1.jpg", "/hikone/sweets-2.jpg", "/hikone/sweets-3.jpg"];

const relatedLinks = [
  { href: "/shukugawa", label: "☕ 夙川咖啡廳推薦2選｜關西必去咖啡廳", desc: "法式可麗餅＆精品咖啡" },
  { href: "/kobe-cafe", label: "☕ 神戶咖啡推薦｜フロインドリーブ＆異人館咖啡", desc: "教堂改建咖啡廳・北野洋館咖啡" },
  { href: "/steak-zen", label: "🥩 神戶牛推薦｜ステーキハウスZEN 三宮店", desc: "A5鐵板燒名店・主廚現煎" },
];

export default function HikonePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">彥根城觀光推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🏯 古城景點</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 滋賀・彥根</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          彥根城觀光推薦｜滋賀必去<br />國寶城・吉祥物彥根貓🏯
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">日本國寶之一！可以遇見超人氣吉祥物彥根貓</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>彥根城</strong>位於滋賀縣彥根市，是<strong>日本現存12天守之一</strong>，也是被指定為<strong>國寶</strong>的5座城之一🏯 從京都搭JR約50分、大阪搭JR約80分就能抵達，是關西旅遊不能錯過的歷史名勝。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            彥根城最大的魅力——除了壯麗的城堡建築之外，當然就是超人氣吉祥物<strong>「彥根貓（ひこにゃん）」</strong>🐱 每天會在城內固定時間出沒，可以近距離合照！周邊城下町還有許多布丁店、彥根貓造型饅頭等美食，是親子・情侶旅遊的絕佳行程✨
          </p>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">滋賀彥根觀光推薦</h2>

        {/* Spot 1: 彥根城 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {castlePhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="彥根城 - 滋賀觀光推薦" fill sizes="33vw" className="object-cover" priority={i === 0} />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">彥根城＆吉祥物彥根貓</h3>
                <span className="text-xs text-stone-400">Hikone Castle & Hikonyan</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              1622年完工的<strong>日本國寶城</strong>之一🏯 由井伊家代代守護，是日本現存12座原始天守的其中之一。從天守閣可俯瞰<strong>琵琶湖</strong>美景，園內還有玄宮園、樂樂園等優美庭園。春天還是<strong>櫻花名所100選</strong>之一🌸
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                來彥根城絕對不能錯過<strong>「彥根貓（ひこにゃん）」</strong>🐱 戴著井伊家戰盔的可愛白貓吉祥物，每天會在<strong>城內天守前廣場、博物館前</strong>等固定地點出沒，可以近距離拍照合影！動作超萌、表情療癒，是日本最具人氣的吉祥物之一💕 天守閣本身也保留了江戶時代的木造結構，登上後可俯瞰整個琵琶湖。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🏯 日本國寶", "🐱 彥根貓登場", "🌸 櫻花名所100選", "🌊 琵琶湖景觀", "👶 親子推薦"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 彦根貓スケジュール */}
            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-2">🐱 彥根貓出場時間（參考）</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・10:30〜 天守前廣場</li>
                <li>・13:00〜 彥根城博物館前</li>
                <li>・15:00〜 四番町廣場</li>
                <li>※每日3場、約30分鐘。具體時間請查官網</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 滋賀縣彥根市金龜町1-1</p>
              <p className="text-xs text-stone-600">🚃 JR琵琶湖線「彥根」駅 徒歩約15分</p>
              <p className="text-xs text-stone-600">⏰ 8:30〜17:00（入場至16:30）</p>
              <p className="text-xs text-stone-600">💴 大人 ¥800／中小學生 ¥200（含玄宮園）</p>
              <p className="text-xs text-stone-600">🅿️ 收費停車場有</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">想看彥根貓建議查官網確認當日出沒時間表，雨天可能停止演出</p>
            </div>

            <a href="https://hikonecastle.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 2: 城下町散步 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {sweetsPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="彥根城下町散步 - 滋賀觀光推薦" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">城下町散步＆人氣甜點</h3>
                <span className="text-xs text-stone-400">Hikone Castle Town & Sweets</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              彥根城周邊的<strong>「夢京橋城堡道」</strong>和<strong>「四番町廣場」</strong>，是充滿江戶時代風情的城下町🏮 街道兩旁聚集了各種特色小店：<strong>布丁專賣店</strong>、<strong>彥根貓造型饅頭</strong>、近江牛串燒、甜點咖啡廳等。逛城＋散步＋吃美食，半天行程剛剛好！
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                城下町本身就像時光倒流到江戶時代，氛圍超棒📸 必吃的有：<strong>彦根プリン（彥根布丁）</strong>濃郁香醇、<strong>彥根貓饅頭・人形燒</strong>可愛到捨不得吃、<strong>近江牛肉包</strong>奢華美味🥩 邊走邊吃，是來彥根的最大樂趣之一！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍮 彥根布丁", "🐱 彥根貓饅頭", "🥩 近江牛串", "🏮 江戶街道", "📸 散步拍照"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 夢京橋城堡道・四番町廣場（彥根城周邊）</p>
              <p className="text-xs text-stone-600">🚃 JR「彥根」駅 徒歩約10分</p>
              <p className="text-xs text-stone-600">⏰ 各店不同（多數10:00〜17:00）</p>
              <p className="text-xs text-stone-600">💴 布丁 ¥400〜／饅頭 ¥150〜／串燒 ¥500〜</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">彥根城→城下町散步的動線最順！逛完城堡後順道吃美食回車站</p>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">彥根城旅行小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從京都搭JR琵琶湖線約<strong>50分</strong>，從大阪約<strong>80分</strong></li>
            <li>✅ 想看彥根貓的話<strong>10:30 / 13:00 / 15:00</strong>三場時間別錯過</li>
            <li>✅ <strong>春天櫻花季（4月上旬）</strong>是最美的造訪期🌸</li>
            <li>✅ 城內石階多，<strong>穿好走的鞋</strong>👟</li>
            <li>✅ 推薦行程：上午逛城→午餐近江牛→下午散步城下町＆甜點</li>
            <li>✅ 可順遊周邊景點：琵琶湖、長濱、近江八幡</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            日本國寶城＋超萌彥根貓＋江戶城下町＋美味甜點——彥根真的是CP值超高的觀光地✨<br />
            來關西旅遊，絕對要花一天時間來感受這份歷史與可愛的魅力！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「彥根貓本人比想像中更可愛！動作超萌，看完心都融化了🐱」</p>
            </div>
          </div>
        </div>

        {/* Klook 亀の井ホテル彦根バナー */}
        <section className="mb-8">
          <a
            href={KLOOK_KAMENOI_HIKONE}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl p-5 shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <span className="absolute top-3 right-3 text-2xl opacity-50 select-none">🏨</span>
            <div className="relative flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full tracking-wide shadow-sm">
                🎫 Travel Tips
              </span>
              <span className="text-[10px] text-stone-500 bg-white/60 backdrop-blur px-2 py-0.5 rounded-full">彥根住宿・空房查詢</span>
            </div>
            <div className="relative flex items-center gap-3 mb-4">
              <div className="relative w-20 h-20 shrink-0">
                <div className="absolute inset-0 bg-white/70 backdrop-blur rounded-2xl border-2 border-white shadow-sm"></div>
                <Image src="/poyapiyo-flag.png" alt="ぽやぴよ" fill sizes="80px" className="object-contain p-1 relative -rotate-[4deg]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-black text-stone-800 leading-tight mb-1">彥根住哪裡？</h3>
                <p className="text-xs text-stone-700 leading-relaxed">推薦以琵琶湖景色聞名的<strong>「亀の井ホテル 彦根」</strong>🏨 出發前先看看價格與空房，方便安排滋賀彥根一泊二日的行程。</p>
              </div>
            </div>
            <div className="relative block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 rounded-full py-3 shadow-md">
              🏨 查看 亀の井ホテル 彦根 →
            </div>
            <p className="relative text-[10px] text-stone-500 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
          </a>
        </section>

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
