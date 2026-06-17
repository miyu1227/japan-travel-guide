import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/tokyo-subway-ticket";
const OG_IMAGE = "/poyapiyo-flag.png";

const KLOOK_URL =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1307238&k_site=https%3A%2F%2Fwww.klook.com%2Fja%2Factivity%2F1552-subway-ticket-tokyo%2F%3Fspm%3DSearchResult.SearchResult_LIST%26clickId%3Dacb5dc654e";

export const metadata: Metadata = {
  title: "東京地鐵24/48/72小時乘車券｜Tokyo Subway Ticket購買與使用方式",
  description:
    "第一次東京自由行不知道交通怎麼安排？Tokyo Subway Ticket是專為外國旅客設計的地下鐵周遊券，可不限次數搭乘東京メトロ＆都營地下鐵。本文整理24/48/72小時票券差別、使用範圍與行程建議，幫助你輕鬆規劃東京之旅。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "東京地鐵24/48/72小時乘車券｜Tokyo Subway Ticket購買與使用方式",
    description: "Tokyo Subway Ticket 24/48/72小時票券完整解說。東京メトロ＆都營地下鐵不限次搭乘。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Tokyo Subway Ticket介紹" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京地鐵24/48/72小時乘車券｜Tokyo Subway Ticket購買與使用方式",
    description: "東京自由行必看！地下鐵周遊券完整解說🚇",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京地鐵24/48/72小時乘車券｜Tokyo Subway Ticket購買與使用方式",
  description: "Tokyo Subway Ticket完整指南。24/48/72小時票券差別、使用範圍與行程建議。",
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
    { "@type": "ListItem", position: 2, name: "東京地鐵乘車券", item: PAGE_URL },
  ],
};

const relatedLinks = [
  { href: "/tokyo-tower", label: "🗼 東京鐵塔推薦｜東京必去地標・夜景景點", desc: "333公尺東京象徵・主展望台＆頂層展望台夜景" },
  { href: "/koyo", label: "🍁 東京紅葉推薦｜神宮外苑銀杏並木", desc: "金黃銀杏大道・東京秋天必去景點" },
  { href: "/showa-kinen-park", label: "🌿 昭和紀念公園推薦｜東京立川散步必去", desc: "東京最大級的國營公園！四季絕景" },
];

export default function TokyoSubwayTicketPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">東京地鐵乘車券指南</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-blue-100 text-blue-700 border border-blue-300 text-xs font-semibold px-3 py-1 rounded-full">🚇 交通指南</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">🎫 票券</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京地鐵24/48/72小時乘車券｜<br />Tokyo Subway Ticket購買與使用方式🚇
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            第一次來東京旅遊，最讓人緊張的就是<strong>「地鐵到底要怎麼搭」</strong>🚇<br />
            東京的地鐵路線多到讓人眼花，又分成<strong>「東京メトロ」</strong>和<strong>「都營地下鐵」</strong>兩家公司，初次造訪的旅客常常會擔心車費怎麼算。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            如果你打算用<strong>地鐵</strong>串聯<strong>新宿、銀座、淺草、上野、表參道、澀谷、六本木、築地、東京站</strong>等東京主要景點，那麼<strong>「Tokyo Subway Ticket」</strong>就是一張很值得了解的票券。
          </p>
        </section>

        {/* チケット案内バナー（序盤） */}
        <section className="mb-8">
          <div className="relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl p-5 shadow-md overflow-hidden">
            {/* 装飾 */}
            <span className="absolute top-3 right-3 text-2xl opacity-50 select-none">🌸</span>
            <span className="absolute bottom-4 left-4 text-base opacity-40 select-none">✨</span>

            <div className="relative flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full tracking-wide shadow-sm">
                🎫 Travel Tips
              </span>
              <span className="text-[10px] text-stone-500 bg-white/60 backdrop-blur px-2 py-0.5 rounded-full">交通票券</span>
            </div>

            <div className="relative flex items-center gap-3 mb-4">
              <div className="relative w-20 h-20 shrink-0">
                <div className="absolute inset-0 bg-white/70 backdrop-blur rounded-2xl border-2 border-white shadow-sm"></div>
                <Image
                  src="/poyapiyo-flag.png"
                  alt="ぽやぴよ"
                  fill
                  sizes="80px"
                  className="object-contain p-1 relative -rotate-[4deg]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-black text-stone-800 leading-tight mb-1">
                  想直接看 Tokyo Subway Ticket 票券資訊？
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  本篇整理了使用方式與行程建議。若想先了解價格、購買方式與當前票券方案，可以從下方連結至 Klook 頁面查看最新資訊。
                </p>
              </div>
            </div>

            <a
              href={KLOOK_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="relative block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 hover:from-pink-500 hover:via-rose-500 hover:to-orange-500 rounded-full py-3 shadow-md hover:shadow-lg transition-all"
            >
              🎫 在 Klook 查看 Tokyo Subway Ticket →
            </a>
            <p className="relative text-[10px] text-stone-500 mt-2 text-center">※ 內含聯盟行銷連結。讀者不會因此支付額外費用。</p>
          </div>
        </section>

        {/* 什麼是 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">什麼是 Tokyo Subway Ticket？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            Tokyo Subway Ticket 是<strong>專為訪日外國旅客設計</strong>的東京地鐵周遊券。在規定時間內（24／48／72小時）可以<strong>不限次數</strong>搭乘東京的兩大地下鐵系統：
          </p>
          <ul className="text-sm text-stone-600 space-y-2 mb-3">
            <li>🚇 <strong>東京メトロ（Tokyo Metro）</strong> — 銀座線、丸之內線、日比谷線、千代田線、半藏門線、有樂町線、副都心線、東西線、南北線</li>
            <li>🚇 <strong>都營地下鐵（Toei Subway）</strong> — 淺草線、三田線、新宿線、大江戶線</li>
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed">
            橫跨這兩家公司的<strong>9＋4＝13條地鐵路線</strong>，能連接許多東京都心的主要觀光景點，對短期旅遊的人來說非常方便。
          </p>
        </section>

        {/* 不能使用 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">哪些路線「不能使用」？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            這部分是初次旅遊最容易誤會的地方，請特別注意：
          </p>
          <ul className="space-y-2 text-sm text-stone-600 mb-3">
            <li>❌ <strong>JR線</strong>（包含山手線、中央線、京葉線等）</li>
            <li>❌ <strong>私鐵</strong>（東急、京王、小田急、京成、東武、西武等）</li>
            <li>❌ <strong>新幹線</strong></li>
            <li>❌ <strong>部分機場聯絡鐵道</strong>（如成田Skyliner、利木津巴士等）</li>
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed">
            簡單來說，票面寫的是<strong>「Subway（地下鐵）」</strong>，所以JR山手線就算長得很像地鐵，也<strong>不能用這張票搭</strong>。安排行程時要先看清楚景點的最近站是「地下鐵」還是「JR」。
          </p>
        </section>

        {/* 24/48/72 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">24 / 48 / 72 小時票要怎麼選？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            選擇的關鍵不是「天數」，而是<strong>「小時數」</strong>。從你<strong>第一次刷進閘口的那一刻</strong>開始計算。
          </p>

          <div className="space-y-2 mb-4">
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
              <p className="text-sm font-bold text-stone-700 mb-1">🕒 24 小時券</p>
              <p className="text-xs text-stone-600">只想用一天集中跑景點、其他天主要走路或搭JR的旅客</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
              <p className="text-sm font-bold text-stone-700 mb-1">🕑 48 小時券</p>
              <p className="text-xs text-stone-600">2天連續行程、東京自由行最常見的選擇</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
              <p className="text-sm font-bold text-stone-700 mb-1">🕒 72 小時券</p>
              <p className="text-xs text-stone-600">3天都會搭地鐵移動、住地下鐵沿線飯店的旅客</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
            <p className="text-xs font-bold text-amber-700 mb-2">💡 簡單的判斷標準</p>
            <p className="text-xs text-stone-600 leading-relaxed">
              東京地鐵的單程票價會依距離不同而變動。如果一天會搭乘多次地下鐵，使用周遊券通常會比較方便，也不用每次都單獨購票，行程也會更順暢。
            </p>
          </div>

          <a
            href={KLOOK_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block bg-white border-2 border-yellow-300 hover:border-yellow-400 hover:bg-yellow-50 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-all text-center"
          >
            <p className="text-sm font-bold text-stone-700 mb-1">🎫 查看 Tokyo Subway Ticket 票券</p>
            <p className="text-xs text-stone-500">在 Klook 確認最新價格與購買方式</p>
          </a>
        </section>

        {/* おすすめ */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">推薦這樣使用 Tokyo Subway Ticket</h2>

          <div className="mb-4">
            <p className="text-sm font-bold text-stone-700 mb-2">🌸 經典 1 日行程範例</p>
            <ul className="text-xs text-stone-600 space-y-1 leading-relaxed">
              <li>・早上：<strong>淺草（淺草線）</strong> → 雷門・淺草寺</li>
              <li>・中午：<strong>上野（銀座線）</strong> → 阿美橫丁＆上野公園</li>
              <li>・下午：<strong>銀座（銀座線）</strong> → 購物＆下午茶</li>
              <li>・傍晚：<strong>築地市場（日比谷線）</strong> → 海鮮晚餐</li>
              <li>・晚上：<strong>六本木（日比谷線）</strong> → 東京鐵塔夜景</li>
            </ul>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed">光是這一天就會搭4〜5次地鐵，使用 Subway Ticket 移動會輕鬆很多。</p>
          </div>

          <div>
            <p className="text-sm font-bold text-stone-700 mb-2">👜 購物＆時尚 2 日行程</p>
            <ul className="text-xs text-stone-600 space-y-1 leading-relaxed">
              <li>・<strong>Day 1</strong>：澀谷 → 表參道 → 原宿（副都心線、銀座線、千代田線）</li>
              <li>・<strong>Day 2</strong>：新宿 → 銀座 → 東京站丸之內（丸之內線）</li>
            </ul>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed">東京メトロ＆都營地下鐵幾乎都能覆蓋，48小時券很適合。</p>
          </div>
        </section>

        {/* 出發前的小提醒 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">出發前的小提醒</h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">✔️ 飯店位置很重要</p>
              <p className="text-xs text-stone-600 leading-relaxed mb-2">
                訂飯店前先確認<strong>最近的車站是「地下鐵」</strong>還是「JR／私鐵」。如果飯店最近的是JR的話，可能會有出發＆回程多一段需要另外付費的情況。
              </p>
              <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3">
                <p className="text-xs font-bold text-stone-500 mb-1">特別推薦的地下鐵沿線住宿區域</p>
                <ul className="text-xs text-stone-600 space-y-0.5">
                  <li>・銀座、新橋（銀座線・淺草線）</li>
                  <li>・淺草、上野（銀座線・淺草線）</li>
                  <li>・六本木、赤坂（日比谷線・南北線）</li>
                  <li>・新宿御苑前、四谷（丸之內線）</li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">✔️ 護照需要隨身攜帶</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                購買實體票時，現場可能會出示<strong>護照</strong>確認非日本國籍。如果在 Klook 預訂，多半是現場兌換或電子票券，請依各方案說明操作。
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">✔️ 票券開始計時的方式</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                電子票券或實體票券<strong>第一次過閘口才開始計算時間</strong>，買了不一定要當天用，可以配合你正式開始觀光的那一天。
              </p>
            </div>
          </div>
        </section>

        {/* おすすめ対象 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">哪些人特別推薦？</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>🐥 第一次來東京、想專心觀光不想算車費的人</li>
            <li>👫 情侶、好友、家庭旅遊（一張票一個人，2人就買2張）</li>
            <li>🛍️ 主要景點都在地下鐵沿線（澀谷、新宿、淺草、銀座等）</li>
            <li>📸 想連跑多個拍照打卡點的旅客</li>
            <li>🏨 飯店在地下鐵沿線、不需要每天搭JR的旅客</li>
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed mt-4">
            相反地，如果你的行程大量使用<strong>JR山手線</strong>（如池袋・原宿・澀谷・品川・東京一圈），或者主要安排<strong>近郊景點（橫濱・鎌倉・箱根・日光）</strong>，可能需要另外搭配 JR、私鐵或其他交通票券。
          </p>
        </section>

        {/* 出發前再次確認 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">出發前再次確認</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            票券的<strong>價格、對象路線、購買方式</strong>都可能不定期更新。出發前建議再次到 Klook 頁面確認最新資訊，避免使用上的誤會：
          </p>
          <a
            href={KLOOK_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block bg-white border-2 border-yellow-300 hover:border-yellow-400 hover:bg-yellow-50 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-all text-center"
          >
            <p className="text-sm font-bold text-stone-700 mb-1">🔗 出發前先確認票券資訊</p>
            <p className="text-xs text-stone-500">在 Klook 預訂 Tokyo Subway Ticket</p>
          </a>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            Tokyo Subway Ticket 是<strong>「想用地鐵把東京玩得順手」</strong>的旅客的好夥伴。<br />
            雖然它不能取代JR或新幹線，但對<strong>都心觀光族</strong>來說，是一張能讓行程更輕鬆的票券。<br />
            東京旅遊的回憶，就從順順的地鐵移動開始✨
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「不用每次買單程票，行程變得輕鬆又順暢🚇」</p>
            </div>
          </div>
        </div>

        {/* アフィリエイト表記 */}
        <section className="bg-stone-50 border border-stone-200 rounded-2xl p-4 mb-10">
          <p className="text-xs text-stone-500 leading-relaxed">
            📎 本網站部分連結包含聯盟行銷連結。若您透過連結預訂或購買，我們可能會獲得佣金，讀者不會因此支付額外費用。感謝您的支持，我們會繼續分享有用的日本旅遊資訊。
          </p>
        </section>

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
