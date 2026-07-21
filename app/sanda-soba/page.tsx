import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";

const PAGE_URL = "https://www.japantrippicks.com/sanda-soba";
const OG_IMAGE = "/sanda-soba/soba1-1.jpg";

export const metadata: Metadata = {
  title: "兵庫三田蕎麥麵推薦｜蕎麦いち・關西手打蕎麥名店【實際造訪】",
  description:
    "兵庫三田必吃手打蕎麥麵「蕎麦いち」！神戶近郊的隱藏名店，使用嚴選國產蕎麥粉現打的職人風味。十割蕎麥・季節料理應有盡有，附交通方式・推薦菜單・價格。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "兵庫三田蕎麥麵推薦｜蕎麦いち・關西手打蕎麥名店",
    description: "兵庫三田必吃手打蕎麥！神戶近郊隱藏名店。十割蕎麥・季節料理。附交通・菜單。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "兵庫三田蕎麥麵推薦・蕎麦いち" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "兵庫三田蕎麥麵推薦｜蕎麦いち・關西手打蕎麥名店",
    description: "兵庫三田必吃！手打蕎麥職人名店🍃",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "兵庫三田蕎麥麵推薦｜蕎麦いち・關西手打蕎麥名店【實際造訪】",
  description: "兵庫三田必吃手打蕎麥麵「蕎麦いち」完整介紹。",
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
    { "@type": "ListItem", position: 2, name: "三田蕎麥麵推薦", item: PAGE_URL },
  ],
};

const photos = ["/sanda-soba/soba1-1.jpg", "/sanda-soba/soba1-2.jpg"];

const relatedLinks = [
  { href: "/steak-zen", label: "🥩 神戶牛推薦｜ステーキハウスZEN 三宮店", desc: "A5鐵板燒名店・主廚現煎" },
  { href: "/kobe-cafe", label: "☕ 神戶咖啡推薦｜フロインドリーブ＆異人館咖啡", desc: "教堂改建咖啡廳・北野洋館咖啡" },
  { href: "/rokko-arima", label: "🏔️ 六甲山健行推薦｜神戶登山＆有馬溫泉一日遊", desc: "登山＋纜車＋有馬溫泉＋ジェラート" },
];

export default function SandaSobaPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">三田蕎麥麵推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍃 美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 兵庫・三田</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          兵庫三田蕎麥麵推薦｜<br />蕎麦いち・關西手打名店🍃
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">神戶近郊的隱藏蕎麥名店——三田「蕎麦いち」</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>兵庫縣三田市</strong>位於神戶市北部、被自然環繞的小城市🌿 從大阪・神戶搭電車約40分鐘，是關西人氣的<strong>郊外蕎麥麵聖地</strong>。豐富的水源＆涼爽氣候，孕育出獨特的「<strong>三田蕎麥文化</strong>」。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦的<strong>「蕎麦いち」</strong>是三田當地最具代表性的手打蕎麥麵名店🍜 使用<strong>嚴選國產蕎麥粉</strong>，從製粉到打麵都堅持職人手工，是來關西旅遊絕對能讓你刮目相看的隱藏寶藏✨
          </p>
        </section>

        {/* Shop */}
        <h2 className="text-lg font-black text-stone-800 mb-4">兵庫三田美食推薦</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {photos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] bg-stone-100">
                <Image
                  src={src}
                  alt="蕎麦いち - 兵庫三田蕎麥麵推薦"
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
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">蕎麦いち</h3>
                <span className="text-xs text-stone-400">Soba Ichi / Handmade Soba</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              三田市的<strong>手打蕎麥麵專門店</strong>🍃 使用<strong>嚴選國產蕎麥粉</strong>，從石臼製粉到手打麵的所有過程都在店內完成。提供經典的<strong>十割蕎麥（100%蕎麥粉）</strong>和二八蕎麥，搭配自家熬製的高湯，是真正的職人之味。店內氛圍純樸又寧靜，能慢慢品嚐每一口的香氣。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                台灣・香港少見的<strong>正宗日式手打蕎麥</strong>，香氣與口感是觀光地連鎖店比不上的職人水準🍜 招牌的<strong>「十割せいろ」</strong>能完整品嚐蕎麥的純粹滋味，<strong>「鴨南蠻」</strong>則是冬季限定的暖胃絕品。也有<strong>季節限定的蕎麥料理</strong>（春天的山菜、秋天的菇類等）。從新神戶站搭電車40分鐘就能體驗，CP值超高✨
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍃 手打蕎麥", "🌾 國產蕎麥粉", "🎋 十割せいろ", "🦆 鴨南蠻", "🍶 純樸名店"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 推薦菜單 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍽️ 推薦菜單</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・<strong>十割せいろ</strong> — 招牌！100%蕎麥粉的純粹滋味</li>
                <li>・<strong>二八せいろ</strong> — 蕎麥粉8、小麥粉2，較順口</li>
                <li>・<strong>鴨南蠻</strong> — 冬季限定，鴨肉＆熱湯的絕妙搭配</li>
                <li>・<strong>天ぷらせいろ</strong> — 蕎麥＋現炸天婦羅，超滿足</li>
                <li>・<strong>季節料理</strong> — 春山菜、秋菇類等</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 兵庫縣三田市（詳見官網）</p>
              <p className="text-xs text-stone-600">🚃 JR寶塚線「三田」駅 開車或巴士前往</p>
              <p className="text-xs text-stone-600">⏰ 11:00〜14:30 / 17:00〜20:00（依日變動・建議查官網）</p>
              <p className="text-xs text-stone-600">💴 蕎麥 ¥900〜¥1,500／套餐 ¥1,800〜</p>
              <p className="text-xs text-stone-600">🅿️ 免費停車場有</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">手打蕎麥每天限量，<strong>下午15:00前</strong>就可能售完。建議午餐時段前往最確實</p>
            </div>

            <a
              href="https://soba1.jp/"
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
          <h2 className="text-base font-black text-stone-800 mb-3">三田蕎麥麵旅行小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從<strong>大阪</strong>搭JR寶塚線到三田約<strong>40分</strong>、神戶約<strong>50分</strong>，當天來回方便</li>
            <li>✅ 手打蕎麥<strong>每日限量</strong>，建議11:30〜13:30的早午餐時段前往</li>
            <li>✅ 也可順遊<strong>有馬溫泉</strong>（三田＋有馬一日遊行程）</li>
            <li>✅ 三田牛・三田米也是當地名物，可以一併品嚐</li>
            <li>✅ 自駕最方便，停車場有免費</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            來關西旅遊不只大阪神戶，往北邊的三田走一趟，會發現真正的職人蕎麥之味✨<br />
            手打的香氣＆Q彈口感，是台灣・香港少見的高品質日式體驗！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「十割蕎麥的香氣超純粹，配自家熬的高湯真的絕配🍃」</p>
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
