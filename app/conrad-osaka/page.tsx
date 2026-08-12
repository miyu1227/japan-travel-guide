import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";

const PAGE_URL = "https://www.japantrippicks.com/conrad-osaka";
const OG_IMAGE = "/conrad-osaka/atmos-1.jpg";

export const metadata: Metadata = {
  title: "大阪飯店自助餐推薦｜康萊德大阪 Atmos 40樓景觀buffet",
  description:
    "想在大阪吃一頓有氣氛的飯店料理？康萊德大阪40樓「Atmos Italian Dining」是地上200公尺的景觀餐廳，挑高10.5公尺的落地窗、水晶藝術裝置與義式自助餐一次滿足。附交通方式（肥後橋站直結）、用餐時段、預約與穿著建議，實際造訪心得分享。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "大阪飯店自助餐推薦｜康萊德大阪 Atmos 40樓景觀buffet",
    description: "康萊德大阪40樓的景觀義式自助餐。地上200公尺全景、水晶藝術裝置，附交通・時段・預約建議。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "康萊德大阪 Atmos Italian Dining 挑高用餐空間" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "大阪飯店自助餐推薦｜康萊德大阪 Atmos 40樓景觀buffet",
    description: "地上200公尺的義式自助餐，挑高落地窗與水晶藝術裝置✨",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "大阪飯店自助餐推薦｜康萊德大阪 Atmos 40樓景觀buffet【實際造訪】",
  description: "康萊德大阪40樓「Atmos Italian Dining」的義式自助餐實際造訪心得。空間、餐點、交通與預約重點整理。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-08-12T00:00:00+09:00",
  dateModified: "2026-08-12T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "康萊德大阪 Atmos", item: PAGE_URL },
  ],
};

const photos = [
  { src: "/conrad-osaka/atmos-1.jpg", alt: "康萊德大阪 Atmos Italian Dining 挑高用餐空間與螺旋吊燈" },
  { src: "/conrad-osaka/atmos-2.jpg", alt: "Atmos Italian Dining 的幾何磁磚牆與開放式廚房" },
  { src: "/conrad-osaka/atmos-3.jpg", alt: "康萊德大阪自助餐的義式前菜、烤牛肉與燉飯" },
  { src: "/conrad-osaka/atmos-4.jpg", alt: "40樓落地窗前的水晶藝術裝置" },
];

const relatedLinks = [
  { href: "/osaka-gourmet", label: "🍻 大阪美食推薦｜梅田在地人氣鐵板燒與居酒屋", desc: "想吃在地一點的店，可以接這篇" },
  { href: "/kansai-ramen", label: "🍜 關西拉麵推薦｜大阪必吃濃厚魚介沾麵", desc: "肥後橋站附近，走過去就到" },
  { href: "/steak-zen", label: "🥩 神戶牛推薦｜ステーキハウスZEN 三宮店", desc: "從大阪當天來回，關西的另一頓大餐" },
];

export default function ConradOsakaPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">康萊德大阪 Atmos</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-700 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍽️ 飯店美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 大阪・中之島</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          大阪飯店自助餐推薦｜康萊德大阪<br />Atmos 40樓景觀buffet🥂
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-12</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">在大阪，想吃一頓「有氣氛」的飯店料理</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            大阪的美食很強，但幾乎都是熱鬧路邊的那一種。行程裡如果想安排<strong>一頓安靜、可以慢慢吃、拍起來也好看</strong>的餐，飯店的自助餐是最好用的選項🥂
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            這次去的是<strong>康萊德大阪（Conrad Osaka）40樓</strong>的義式餐廳<strong>「Atmos Italian Dining」</strong>。位在中之島、<strong>地上200公尺</strong>的高度，挑高10.5公尺的落地窗整面採光，本身就是很值得看的空間。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇寫給<strong>想在大阪安排一頓紀念日、或想找室內備案</strong>的台灣・香港旅人。<strong>你會知道</strong>：空間長什麼樣、自助餐大概吃得到什麼、早餐／午餐／甜點／晚餐時段怎麼選、從肥後橋站怎麼走，還有要不要訂位與穿著上的注意。
          </p>
        </section>

        {/* 餐廳卡片 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">康萊德大阪 Atmos Italian Dining</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {photos.map((p, i) => (
              <div key={p.src} className="relative aspect-square bg-stone-100">
                <Image
                  src={p.src}
                  alt={p.alt}
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
                <h3 className="text-base font-black text-stone-800">Atmos Italian Dining</h3>
                <span className="text-xs text-stone-400">アトモス・イタリアンダイニング／康萊德大阪 40F</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              康萊德大阪最上層的義式餐廳。主打<strong>「日常的義大利菜」</strong>，自助餐檯上大約會有<strong>45道以上</strong>的義式料理輪番登場——前菜、義大利麵、燉飯、窯烤披薩、現切烤肉到甜點都有。空間走的是<strong>現代設計感</strong>，不是傳統飯店那種金碧輝煌的路線。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                最有記憶點的其實是<strong>空間</strong>。一整面挑高到10.5公尺的窗、垂掛下來的水晶裝置在陽光下會折射出彩虹色，坐在裡面就已經值回票價✨ 自助餐的好處是<strong>不用看菜單、不用日文點餐</strong>，想吃什麼自己拿，帶長輩或小孩來也很輕鬆。義式料理對台灣・香港旅人來說接受度也高，不會有「踩到地雷」的風險。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🏙️ 地上200公尺", "🪟 挑高落地窗", "🍝 義式自助餐", "📸 拍照好看", "🈚 不用日文點餐"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍽️ 實際吃到的（依季節與時段變動）</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・前菜盤：煙燻鮭魚、生火腿、章魚沙拉、鮮蝦、義式冷肉</li>
                <li>・現切烤牛肉，淋上巴薩米克醬汁</li>
                <li>・番茄燉飯、青醬義大利麵、千層麵</li>
                <li>・蔬菜湯與炸蔬菜、麵包與披薩</li>
                <li>・甜點與當季水果</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 大阪市北區中之島3-2-4 康萊德大阪 40F</p>
              <p className="text-xs text-stone-600">🚇 大阪Metro四橋線「肥後橋」駅 4號出口直結／京阪中之島線「渡邊橋」駅 13號出口直結</p>
              <p className="text-xs text-stone-600">🚶 大阪Metro御堂筋線・京阪本線「淀屋橋」駅 7號出口 徒歩約6分</p>
              <p className="text-xs text-stone-600">⏰ 早餐 6:30〜／午餐 11:30〜／甜點自助餐 14:30〜／晚餐 17:30〜（各時段有最後入店時間）</p>
              <p className="text-xs text-stone-600">💴 價格依平日／假日與季節企劃不同，訂位時請以官網公告為準</p>
              <p className="text-xs text-stone-600">📞 建議事前訂位（官網或電話）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">想拍到水晶裝置折射的光，白天的時段最漂亮；想看夜景就選晚餐時段，是完全不同的兩種畫面</p>
            </div>

            <a
              href="https://conrad-osaka.hiltonjapan.co.jp/restaurants/atmos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站（訂位・最新時段）
            </a>
          </div>
        </section>

        {/* 空間 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">最大的亮點：挑高10.5公尺的窗與水晶裝置</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            一走進去先抬頭。天花板垂下來的是一圈一圈的<strong>金色螺旋吊燈</strong>，柱子上則掛著大大小小的玻璃圓盤，光線穿過的時候會慢慢晃動✨
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            最讓人停下腳步的是<strong>落地窗前那一整片水晶簾</strong>——數不清的透明結晶從天花板一路垂到地面，白天有陽光的時候會折射出淡淡的彩虹色，拍起來很不真實。這也是這間餐廳最多人拍的角度📸
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            座位是<strong>淺薄荷綠的椅子＋木質圓桌</strong>，配色明亮不壓迫。窗外看出去是淀川與遠方的山稜線，<strong>地上200公尺</strong>的高度讓整個大阪市區都在腳下。
          </p>
        </section>

        {/* 時段の選び方 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">早餐、午餐、甜點、晚餐——該挑哪個時段？</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">早餐（6:30〜）</p>
                <p className="text-xs text-stone-500 leading-relaxed">住宿房客為主的時段。早晨的光線最柔和，人也最少，如果剛好住這裡就別睡過頭。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">午餐（11:30〜）</p>
                <p className="text-xs text-stone-500 leading-relaxed">最推薦給觀光客的時段。白天的窗景與水晶裝置最漂亮，價格也比晚餐親民，吃完還有整個下午可以逛。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">甜點自助餐（14:30〜・限定日）</p>
                <p className="text-xs text-stone-500 leading-relaxed">會依季節推出不同主題的甜點企劃，不是每天都有。想衝這個時段的話，出發前一定要先查官網當期內容與舉辦日。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">晚餐（17:30〜）</p>
                <p className="text-xs text-stone-500 leading-relaxed">想看夜景就選這個。日落前後入座的話，可以一次看到夕陽與亮燈後的市區。適合紀念日。</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3">
            ※ 各時段都設有最後入店時間，也多半採用時間制（約90〜100分鐘）。實際的營業時間與內容可能調整，請以官網為準。
          </p>
        </section>

        {/* 交通 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">怎麼去康萊德大阪？</h2>
          <div className="space-y-2 text-sm text-stone-600">
            <p>🚇 <strong>大阪Metro四橋線「肥後橋」駅</strong>：4號出口<strong>直結</strong>，下雨天也不用撐傘</p>
            <p>🚇 <strong>京阪中之島線「渡邊橋」駅</strong>：13號出口<strong>直結</strong></p>
            <p>🚶 <strong>大阪Metro御堂筋線・京阪本線「淀屋橋」駅</strong>：7號出口 徒歩約6分</p>
            <p>🚕 <strong>JR大阪站</strong>：搭車約5分鐘</p>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed mt-3">
            餐廳在飯店的40樓，入口在<strong>Festival Tower West</strong>這一側。從關西機場過來的話，搭南海線到難波、再轉四橋線到肥後橋是最單純的走法，全程大約1小時。
          </p>
          <p className="text-xs text-stone-500 leading-relaxed mt-3">
            當天如果還要跑大阪其他地方，可以先看看
            <Link href="/kansai-ramen" className="text-blue-600 underline underline-offset-2">關西拉麵推薦</Link>——肥後橋站附近就有一間，散步過去就到。
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">康萊德大阪自助餐 常見問題</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 一定要事先訂位嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                建議先訂。這裡是<strong>時間制的自助餐</strong>，座位數有限，週末與假日的午餐時段常常會滿。官網可以線上訂位，選好日期與時段比較安心。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 有服裝規定嗎？穿得太隨便會不會不好意思？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                這裡是自助餐廳，不需要正式服裝，但畢竟是五星飯店的最上層，<strong>穿得整齊一點會比較自在</strong>。實際上不少人是觀光途中順道過來的，不用太緊張，只是別穿夾腳拖或運動短褲那種太休閒的裝扮。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 不會日文也能點餐嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                自助餐最大的好處就是<strong>幾乎不用開口</strong>，想吃什麼自己去拿就好。這裡是國際連鎖飯店，服務人員也習慣應對外國旅客，飲料點單用英文都通。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 可以帶小孩去嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                自助餐本來就比較適合帶小孩——不用等上菜、想吃什麼自己選。多數飯店自助餐會有兒童價的設定，帶小小孩同行時，建議<strong>訂位時先告知人數與年齡</strong>，座位安排會比較順。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 一定看得到景色嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                窗邊座位不保證，人多的時候會被安排到內側。不過這間店的<strong>挑高空間與水晶裝置本身就很有看頭</strong>，就算不是窗邊也不會失望。真的很在意的話，可以在訂位時備註希望靠窗，但還是要看當天狀況。
              </p>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">用餐小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>白天想拍照、晚上想看夜景</strong>，先決定要哪一種再選時段</li>
            <li>✅ 時間制大約90〜100分鐘，<strong>先繞一圈看有什麼再拿</strong>比較不會吃不完</li>
            <li>✅ 現切烤肉與現做的品項通常在同一區，趁熱去拿最好吃</li>
            <li>✅ 肥後橋站<strong>4號出口直結</strong>，下雨天完全不用淋雨，很適合當室內備案</li>
            <li>✅ 甜點自助餐是<strong>限定日期＋季節主題</strong>，出發前務必到官網確認當期內容</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            大阪的行程總是塞滿了熱鬧的街邊美食，但中間放一頓這樣安靜、慢慢吃的飯，整趟旅行的節奏會舒服很多🥂<br />
            而且比起「吃到什麼」，這裡更讓人記得的是坐在那片光裡的感覺。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「水晶簾在陽光下閃出彩虹色的那一瞬間，整個人都看呆了✨」</p>
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
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between bg-white border border-stone-100 rounded-2xl px-4 py-3 shadow-sm hover:border-yellow-300 transition-colors"
              >
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
