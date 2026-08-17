import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";

const PAGE_URL = "https://www.japantrippicks.com/skytree";
const OG_IMAGE = "/skytree/cover.png";

const KLOOK_SKYTREE =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1320694&k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Factivity%2F41352-tokyo-skytree";

export const metadata: Metadata = {
  title: "東京晴空塔攻略｜門票預約、交通方式、夜景與拍照景點整理",
  description:
    "東京晴空塔（Tokyo Skytree）完整指南！天望デッキ與天望回廊的差別、押上站與淺草出發的交通、門票要不要先預約、白天／傍晚／夜景哪個時段最好，加上玻璃地板拍照點與東京ソラマチ周邊。第一次東京自由行也能輕鬆規劃。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "東京晴空塔攻略｜門票預約、交通方式、夜景與拍照景點整理",
    description: "東京晴空塔展望台完整指南。票券・交通・夜景・玻璃地板・周邊景點整理。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "東京晴空塔・夜景" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京晴空塔攻略｜門票預約、交通方式、夜景與拍照景點整理",
    description: "東京晴空塔展望台・夜景・拍照景點＆周邊完整指南🌃",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京晴空塔攻略｜門票預約、交通方式、夜景與拍照景點整理",
  description: "東京晴空塔（Tokyo Skytree）完整指南。票券・交通・夜景・玻璃地板・周邊景點整理。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-08-12T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "東京晴空塔攻略", item: PAGE_URL },
  ],
};

const relatedLinks = [
  { href: "/tokyo-tower", label: "🗼 東京鐵塔推薦｜東京必去地標・夜景景點", desc: "333公尺東京象徵・主展望台＆頂層展望台夜景" },
  { href: "/tokyo-subway-ticket", label: "🚇 東京地鐵24/48/72小時乘車券", desc: "東京自由行交通指南・地下鐵周遊券完整解說" },
  { href: "/japan-esim", label: "📱 日本自由行 eSIM 使用指南", desc: "抵達日本就能上網的事前準備" },
];

export default function SkytreePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">東京晴空塔攻略</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-blue-100 text-blue-700 border border-blue-300 text-xs font-semibold px-3 py-1 rounded-full">🌃 景點</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・押上</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京晴空塔攻略｜門票預約、<br />交通方式、夜景與拍照景點整理🌃
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-12</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>東京晴空塔（Tokyo Skytree）</strong>是東京最具代表性的展望地標之一🌃<br />
            從展望台往下看，整個東京街景一覽無遺，<strong>夜晚的燈光特別迷人</strong>。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇寫給<strong>第一次到東京、想把晴空塔排進行程</strong>的台灣・香港旅人。<strong>你會知道</strong>：兩個展望樓層差在哪、從淺草與押上怎麼去、門票要不要先預約、白天／傍晚／夜景該選哪個時段，還有玻璃地板拍照點與 ソラマチ 周邊怎麼串。全部附上實際造訪的感想。
          </p>
        </section>

        {/* 序盤バナー */}
        <section className="mb-8">
          <a
            href={KLOOK_SKYTREE}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl p-5 shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            {/* 装飾 */}
            <span className="absolute top-3 right-3 text-2xl opacity-50 select-none">🌸</span>
            <span className="absolute bottom-4 left-4 text-base opacity-40 select-none">✨</span>

            <div className="relative flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full tracking-wide shadow-sm">
                🎫 Travel Tips
              </span>
              <span className="text-[10px] text-stone-500 bg-white/60 backdrop-blur px-2 py-0.5 rounded-full">熱門景點門票</span>
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
                  想先確認東京晴空塔門票資訊？
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  東京晴空塔是東京自由行很受歡迎的展望景點。若想確認展望台票券、購買方式與最新資訊，可以出發前先查看票券頁面。
                </p>
              </div>
            </div>

            <div className="relative block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 rounded-full py-3 shadow-md">
              🎫 查看東京晴空塔門票 →
            </div>
            <p className="relative text-[10px] text-stone-500 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
          </a>
        </section>

        {/* 是什麼 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">東京晴空塔是什麼？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            東京晴空塔（東京スカイツリー）位於東京墨田區，是<strong>高度 634 公尺</strong>的電波塔，2012 年正式啟用，自此成為東京新的代表性地標。設有<strong>「天望デッキ（350m）」</strong>與<strong>「天望回廊（450m）」</strong>兩個展望樓層。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            塔下方還有商業設施「<strong>東京ソラマチ</strong>」，可以購物、用餐、看水族館，是搭配晴空塔一起逛半天〜一天都很適合的景點🌆
          </p>
        </section>

        {/* 訪問写真 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {["/skytree/view-1.jpg", "/skytree/view-2.jpg"].map((src, i) => (
              <div key={src} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="東京晴空塔展望台夜景"
                  fill
                  sizes="50vw"
                  className="object-cover"
                  {...(i === 0 ? { priority: true } : {})}
                />
              </div>
            ))}
          </div>
          <div className="p-5">
            <h2 className="text-base font-black text-stone-800 mb-3">實際去東京晴空塔的感想</h2>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              實際從展望台看到的<strong>東京夜景非常壯觀</strong>✨ 夜晚可以看到東京市區的燈光一路延伸到遠方，連<strong>東京鐵塔</strong>都能小小地看到，是只有這個高度才能體驗的視角。
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              如果喜歡夜景，<strong>傍晚到晚上這個時間帶很適合</strong>——剛上去時還能看到夕陽，等30分鐘後就能看到完全的夜景，一次體驗「白晝→夕陽→夜景」三種畫面🌅 玻璃地板附近可以感受到<strong>高度感</strong>，但怕高的人可以先做好心理準備喔。
            </p>
          </div>
        </section>

        {/* アクセス */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">交通方式：押上站、東京晴空塔站</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            東京晴空塔最近的車站有2個，從任一個都能直接連通至 ソラマチ 與晴空塔入口：
          </p>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>🚇 <strong>東武晴空塔線「とうきょうスカイツリー」駅</strong> 徒步約1分</li>
            <li>🚇 <strong>都營淺草線・東京メトロ半藏門線・京成押上線「押上（スカイツリー前）」駅</strong> 徒步約3分</li>
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            從<strong>淺草站</strong>搭東武晴空塔線只要1站，<strong>銀座／日本橋方面</strong>可搭都營淺草線直達押上駅。押上站是都營淺草線與東京メトロ半藏門線的車站，如果當天還要跑淺草、銀座、日本橋一帶，可以先看
            <Link href="/tokyo-subway-ticket" className="text-blue-600 underline underline-offset-2">東京地鐵乘車券怎麼選</Link>，再決定要不要買周遊券。
          </p>
        </section>

        {/* 時間帯比較 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">展望台看點：白天、傍晚、夜景</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            根據造訪時間，景色感覺完全不同。可以參考下表選擇喜歡的時間帶：
          </p>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-xs text-stone-600 border-collapse min-w-[480px]">
              <thead>
                <tr className="bg-amber-50">
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">時間帶</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">適合的人</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">看點</th>
                  <th className="border border-stone-200 px-2 py-2 text-left font-bold text-stone-700">注意點</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-sky-600">白天</td>
                  <td className="border border-stone-200 px-2 py-2">想看遠景的人</td>
                  <td className="border border-stone-200 px-2 py-2">天氣好可看到富士山方向</td>
                  <td className="border border-stone-200 px-2 py-2">能見度依當日天氣</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-amber-600">傍晚</td>
                  <td className="border border-stone-200 px-2 py-2">想一次體驗夕陽＆夜景</td>
                  <td className="border border-stone-200 px-2 py-2">夕陽→夜景變化</td>
                  <td className="border border-stone-200 px-2 py-2">人氣時段可能較多人</td>
                </tr>
                <tr>
                  <td className="border border-stone-200 px-2 py-2 font-semibold text-pink-600">夜晚</td>
                  <td className="border border-stone-200 px-2 py-2">喜歡夜景的旅人</td>
                  <td className="border border-stone-200 px-2 py-2">整片燈光延伸到遠方</td>
                  <td className="border border-stone-200 px-2 py-2">夜間入場時間有限</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3">
            ※ 天候條件會大幅影響可視範圍。出發前可以查看當日天氣。
          </p>
        </section>

        {/* ガラス床と撮影 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">玻璃地板與拍照點</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            <strong>天望デッキ（350m）</strong>的一角有<strong>「玻璃地板」</strong>區域，可以直接看到下方街道📸 站在上面拍照很有趣，但<strong>怕高的人會有點刺激</strong>。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            人氣拍照點：
          </p>
          <ul className="space-y-1.5 text-sm text-stone-600">
            <li>📸 <strong>玻璃地板</strong>—— 拍攝足下風景</li>
            <li>📸 <strong>展望台落地窗前</strong>—— 全景照</li>
            <li>📸 <strong>天望回廊（450m）</strong>—— 螺旋走道，環視360度</li>
            <li>📸 從<strong>東京ソラマチ屋頂</strong>仰望晴空塔本體</li>
            <li>📸 從<strong>隅田川對岸</strong>拍到整個塔身</li>
          </ul>
        </section>

        {/* 門票 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">門票怎麼買？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            東京晴空塔展望台的門票可以在<strong>現場購買</strong>，也可以<strong>事先網路預約</strong>。網路預約的好處是：
          </p>
          <ul className="space-y-1.5 text-sm text-stone-600 mb-3">
            <li>🎫 出發前先確認方案內容與價格</li>
            <li>🕐 部分方案可指定時段，到了直接進場</li>
            <li>📱 電子票券，當日掃描 QR Code 即可</li>
          </ul>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            假日與旺季<strong>現場可能要排隊</strong>，想避開等待時間的人可以考慮事前預約📲
          </p>

          {/* Klookバナー */}
          <a
            href={KLOOK_SKYTREE}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
          >
            <div className="relative aspect-[2/1] bg-stone-100">
              <Image
                src="/skytree/ticket.png"
                alt="東京晴空塔展望台門票（Klook）"
                fill
                sizes="(max-width: 640px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-bold text-pink-700 mb-1">🎫 東京晴空塔展望台門票（Klook）</p>
              <p className="text-sm font-bold text-stone-800 leading-tight mb-2">出發前先確認東京晴空塔票券資訊</p>
              <span className="inline-block text-xs font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 px-5 py-2 rounded-full shadow-sm">
                在 Klook 確認 Tokyo Skytree 門票 →
              </span>
            </div>
          </a>
          <p className="text-[10px] text-stone-400 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。價格與方案可能不定期更新，請以 Klook 商品頁面為準。</p>
        </section>

        {/* 周辺 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">周邊景點：東京ソラマチ、淺草、隅田川</h2>
          <div className="space-y-3">
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">🛍️ 東京ソラマチ</p>
              <p className="text-xs text-stone-600 leading-relaxed">直接連結晴空塔的大型商業設施。商店、餐廳、咖啡廳、墨田水族館＆天文館都在這裡，雨天也能逛。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">🏯 淺草・雷門</p>
              <p className="text-xs text-stone-600 leading-relaxed">從押上駅搭電車1站到淺草。可以從淺草寺、仲見世通散步到隅田川看晴空塔。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-amber-700 mb-1">🌊 隅田川河岸</p>
              <p className="text-xs text-stone-600 leading-relaxed">沿河岸散步，可以拍到整個晴空塔的最佳角度。傍晚時分特別漂亮📸</p>
            </div>
          </div>
        </section>

        {/* 行程に組み込む */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">適合安排在什麼行程？</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            推薦這樣搭配：
          </p>
          <div className="space-y-2 text-sm text-stone-600">
            <p>🌅 <strong>淺草寺早上散步</strong> → 午餐 → <strong>晴空塔傍晚〜夜景</strong></p>
            <p>🛍️ <strong>東京ソラマチ購物</strong> → 晚餐 → <strong>晴空塔夜景</strong></p>
            <p>🌊 <strong>隅田川散步＋遊覽船</strong> → <strong>晴空塔晚上上展望台</strong></p>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            如果是<strong>夏天</strong>，墨田川煙火大會時也可從晴空塔看到部分煙火景色🎆（需查當年安排）。
          </p>
        </section>

        {/* 注意 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">第一次去東京晴空塔的注意事項</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>能見度</strong>會依天氣變化，雨天或霧霾日可能看不遠</li>
            <li>✅ <strong>怕高的人</strong>可避開玻璃地板區域</li>
            <li>✅ 假日與旺季<strong>現場可能要排隊</strong>，事前預約可避開排隊時間</li>
            <li>✅ 展望台<strong>溫差</strong>會比地面低一些，怕冷可帶外套</li>
            <li>✅ <strong>展望台拍照</strong>時，玻璃可能會反光，建議貼近窗戶拍攝</li>
            <li>✅ <strong>營業時間、票價</strong>可能變更，出發前以官方／Klook 頁面確認</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">東京晴空塔 常見問題</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 門票一定要事先預約嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                不一定，現場也買得到。但<strong>假日、連假與傍晚的人氣時段</strong>常常需要排隊，行程排得比較緊的人建議先在網路上確認方案與時段。實際的票種與價格請以官方或票券頁面為準。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 天望デッキ和天望回廊，要買到哪一層？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>天望デッキ（350m）</strong>就是一般說的展望台，玻璃地板也在這一層，只買到這裡已經很有看頭。<strong>天望回廊（450m）</strong>是額外加購的螺旋走道，特色是能一路繞著塔身走、視野更開闊。時間或預算有限的話，先買天望デッキ就好。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 晴空塔和東京鐵塔只能挑一個，該選哪個？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                想<strong>看得最高最遠</strong>、順便逛 ソラマチ 和淺草的話選晴空塔；想拍<strong>紅白色的經典地標本身</strong>、走復古浪漫路線的話選<Link href="/tokyo-tower" className="text-blue-600 underline underline-offset-2">東京鐵塔</Link>。兩座的所在位置差滿遠的，同一天硬要跑兩個會有點趕。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 陰天或下雨還值得上去嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                能見度確實會下降，看不到遠方的富士山方向。不過<strong>夜晚的市區燈光在雨天依然看得到</strong>，而且塔下的東京ソラマチ完全不受天氣影響，雨天當成室內行程也不會浪費半天。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 剛下飛機的那天可以直接來嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                可以，尤其是走<strong>京成押上線</strong>的話，從成田方向可以不用換太多次車就到押上站。時間怎麼抓可以參考
                <Link href="/narita-airport-access" className="text-blue-600 underline underline-offset-2">成田機場到東京市區交通攻略</Link>。只是拖著行李上展望台不太方便，建議先寄放或送到飯店再過來。
              </p>
            </div>
          </div>
        </section>

        {/* まとめ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">小結</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            東京晴空塔是個能<strong>「一次看完整個東京」</strong>的展望景點🌃<br />
            搭配淺草、ソラマチ、隅田川一起逛，是東京自由行很值得排進去的半日行程。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            夜景特別迷人，喜歡都會夜景的旅人請務必安排傍晚〜夜晚時段造訪✨
          </p>
        </section>

        <AuthorCard />
        <PrepBanner />

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <div className="flex items-start gap-3">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「在 350m 高的展望台看夜景的瞬間，整個東京就在腳下，超感動的🌃」</p>
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
