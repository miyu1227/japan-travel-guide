import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/daikanyama-cafe";
const OG_IMAGE = "/daikanyama-cafe/princi-1.jpg";

export const metadata: Metadata = {
  title: "代官山咖啡廳推薦2選｜東京必去義式烘焙＆高級甜點【實際造訪】",
  description:
    "代官山咖啡廳推薦2選！米蘭義式烘焙名店「PRINCI 代官山T-SITE」與星級甜點師的頂級甜點店「DOLCE TACUBO」。東京代官山必去人氣店，附交通方式・菜單・價格。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "代官山咖啡廳推薦2選｜東京必去義式烘焙＆高級甜點",
    description: "米蘭義式烘焙PRINCI＆星級甜點DOLCE TACUBO。代官山必去2間人氣咖啡廳。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "代官山咖啡廳推薦・PRINCI代官山" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "代官山咖啡廳推薦2選｜東京必去義式烘焙＆高級甜點",
    description: "代官山必去2間人氣咖啡廳！米蘭義式烘焙＆星級甜點☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "代官山咖啡廳推薦2選｜東京必去義式烘焙＆高級甜點【實際造訪】",
  description: "代官山必去咖啡廳：米蘭PRINCI代官山T-SITE、頂級甜點DOLCE TACUBO代官山。",
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
    { "@type": "ListItem", position: 2, name: "代官山咖啡廳推薦", item: PAGE_URL },
  ],
};

const tacuboPhotos = ["/daikanyama-cafe/tacubo-1.jpg", "/daikanyama-cafe/tacubo-2.jpg", "/daikanyama-cafe/tacubo-3.jpg"];

const relatedLinks = [
  { href: "/nakameguro-cafe", label: "☕ 中目黑咖啡廳推薦｜星巴克臻選東京烘焙工坊", desc: "隈研吾建築・目黑川賞櫻聖地" },
  { href: "/shimokitazawa-cafe", label: "☕ 下北澤咖啡廳推薦3選｜東京必去人氣美食", desc: "純素烘焙・起司蛋糕・自家焙煎咖啡" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京必去咖啡散步地區", desc: "貝果・義式冰淇淋・起司披薩" },
];

export default function DaikanyamaCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">代官山咖啡廳推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・代官山</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          代官山咖啡廳推薦2選｜<br />東京必去義式烘焙＆高級甜點☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">代官山——東京最有格調的咖啡散步區</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>代官山</strong>是東京最受歡迎的高級時尚街區之一，從澀谷搭電車只要1站就能抵達🏙️ 街道安靜優雅，聚集了許多設計精品店、選物店和特色咖啡廳，被譽為「東京的巴黎」。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦的兩間店——來自米蘭的義式烘焙名店<strong>「PRINCI 代官山T-SITE」</strong>，以及日本星級甜點師打造的頂級甜點<strong>「DOLCE TACUBO」</strong>✨ 風格完全不同，都是代官山必訪的人氣店！
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">PRINCI 代官山T-SITE → 米蘭義式烘焙</p>
                <p className="text-xs text-stone-500 leading-relaxed">80種以上原創麵包、開放式廚房、有露台座位</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">DOLCE TACUBO → 星級甜點外帶專賣</p>
                <p className="text-xs text-stone-500 leading-relaxed">濃厚泡芙・焦香費南雪・生冰淇淋</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">代官山咖啡廳推薦・2選</h2>

        {/* Spot 1: PRINCI */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image src="/daikanyama-cafe/princi-1.jpg" alt="PRINCI 代官山T-SITE - 代官山咖啡廳推薦" fill sizes="100vw" className="object-cover" priority />
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">PRINCI 代官山T-SITE</h3>
                <span className="text-xs text-stone-400">Princi Daikanyama</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              來自<strong>米蘭的義式烘焙名店</strong>，由創辦人Rocco Princi親自監修，2019年7月在代官山T-SITE開幕，是日本首間PRINCI獨立店舖🥐 由星巴克集團經營，「把米蘭的一天帶到代官山」為概念，從早餐、午餐到晚上都有不同的義式風味。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                店內有<strong>80種以上原創麵包＆甜點</strong>，從早餐的可頌到晚上的Aperol Spritz調酒都有🍷 開放式廚房可以看到師傅現場烘焙，露台座位氛圍超好📸 招牌的<strong>「Bignolata al Cioccolato」</strong>（巧克力泡芙・¥480）是店舖限定，絕對要試！代官山T-SITE（蔦屋書店）本身也是必逛景點。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🥐 米蘭義式烘焙", "🍕 現烤披薩", "🍷 晚上變酒吧", "📚 T-SITE蔦屋書店內"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都澀谷區猿樂町17-5 代官山T-SITE內</p>
              <p className="text-xs text-stone-600">🚃 東急東橫線「代官山」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 7:00〜20:00</p>
              <p className="text-xs text-stone-600">💴 麵包 ¥300〜／套餐 ¥1,500〜</p>
              <p className="text-xs text-stone-600">📞 03-6455-2470</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">7點開店很早，可以當作代官山散步行程的第一站吃早餐！</p>
            </div>

            <a href="https://store.tsite.jp/daikanyama/floor/shop/princi/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方資訊
            </a>
          </div>
        </section>

        {/* Spot 2: DOLCE TACUBO */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {tacuboPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="DOLCE TACUBO 代官山 - 代官山咖啡廳推薦" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">DOLCE TACUBO 代官山</h3>
                <span className="text-xs text-stone-400">頂級外帶甜點專門店</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              由<strong>米其林星級義大利餐廳</strong>主廚打造的外帶專門甜點店🧁 概念是「用甜點重現星級料理的感動」，使用最高級的素材和嚴選配方，把星級餐廳的美味帶回家。店面小巧精緻，甜點櫃裡每一品都像藝術品。
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                每一款甜點的品質都超越一般甜點店✨ 招牌的<strong>濃厚卡士達泡芙</strong>、<strong>焦香費南雪</strong>、<strong>濃厚布丁</strong>都是不可錯過的人氣商品🍮 也有<strong>卡努蕾（canelé）</strong>、薩布雷餅乾、現做生冰淇淋。代官山散步中途買一份當下午茶，是最幸福的享受！
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🧁 星級主廚監修", "🍮 濃厚布丁", "🧈 焦香費南雪", "🍦 現做生冰淇淋"].map((t) => (
                <span key={t} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都澀谷區惠比壽西2-15-9 Cellaza代官山1F</p>
              <p className="text-xs text-stone-600">🚃 東急東橫線「代官山」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 11:00〜19:00（不定休）</p>
              <p className="text-xs text-stone-600">💴 費南雪 ¥350／泡芙 ¥550〜／布丁 ¥680〜</p>
              <p className="text-xs text-stone-600">📞 03-6416-3940</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">外帶專門店，買了之後可以在附近的西鄉山公園邊吃邊享受</p>
            </div>

            <a href="https://d-tacubo.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">代官山咖啡散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從澀谷搭東急東橫線只要1站，交通非常方便</li>
            <li>✅ 兩間店距離很近，可以安排同一天順遊</li>
            <li>✅ <strong>代官山T-SITE（蔦屋書店）</strong>本身也是必逛景點📚</li>
            <li>✅ 代官山街上有許多選物店，可以邊逛邊買</li>
            <li>✅ 也可以順遊中目黑（目黑川）或惠比壽，安排一整天散步行程</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            米蘭義式烘焙＆星級甜點——代官山是東京最有格調的咖啡散步區✨<br />
            從早餐到下午茶，在這兩間店之間走一趟，就是最完美的代官山行程！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「代官山的氛圍好像來到歐洲，慢慢散步＋咖啡時間最幸福☕」</p>
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
