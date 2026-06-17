import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";

const PAGE_URL = "https://www.japantrippicks.com/rokko-arima";
const OG_IMAGE = "/rokko-arima/rokko-1.jpg";

export const metadata: Metadata = {
  title: "六甲山健行推薦｜神戶登山＆有馬溫泉一日遊【實際造訪】",
  description:
    "神戶六甲山健行完全指南！從御影出發登頂六甲山，下山搭纜車到有馬溫泉泡湯，最後品嚐「arima gelateria Stagione」人氣義式冰淇淋。關西自然＆溫泉一日遊推薦行程，附登山路線・交通・推薦店家。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "六甲山健行推薦｜神戶登山＆有馬溫泉一日遊",
    description: "六甲山登山＋有馬溫泉＋人氣ジェラート！關西自然＆溫泉一日遊指南。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "六甲山健行推薦・神戶登山" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "六甲山健行推薦｜神戶登山＆有馬溫泉一日遊",
    description: "六甲山登山＋有馬溫泉＋人氣ジェラート🏔️♨️🍦",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "六甲山健行推薦｜神戶登山＆有馬溫泉一日遊【實際造訪】",
  description: "神戶六甲山健行完全指南。登山＋有馬溫泉＋人氣ジェラート。",
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
    { "@type": "ListItem", position: 2, name: "六甲山健行推薦", item: PAGE_URL },
  ],
};

const rokkoPhotos = ["/rokko-arima/rokko-1.jpg", "/rokko-arima/rokko-2.jpg"];
const ropewayPhotos = ["/rokko-arima/ropeway-1.jpg"];
const gelatoPhotos = ["/rokko-arima/gelato-1.jpg"];

const relatedLinks = [
  { href: "/kobe-cafe", label: "☕ 神戶咖啡推薦｜フロインドリーブ＆異人館咖啡", desc: "教堂改建咖啡廳・北野洋館咖啡" },
  { href: "/steak-zen", label: "🥩 神戶牛推薦｜ステーキハウスZEN 三宮店", desc: "A5鐵板燒名店・主廚現煎" },
  { href: "/shukugawa", label: "☕ 夙川咖啡廳推薦2選｜關西必去咖啡廳", desc: "法式可麗餅＆精品咖啡" },
];

export default function RokkoArimaPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">六甲山健行推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🥾 健行登山</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 神戶・有馬</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          六甲山健行推薦｜神戶登山<br />＆有馬溫泉一日遊🏔️♨️
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">關西最棒的一日遊：登山＋溫泉＋甜點</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>六甲山</strong>位於兵庫縣神戶市，是<strong>關西人氣No.1的健行勝地</strong>🏔️ 最高峰標高931公尺，從神戶市區搭電車就能輕鬆抵達登山口。除了健行絕景外，下山後可以搭<strong>纜車到有馬溫泉</strong>，享受<strong>日本三大古湯</strong>之一的溫泉文化♨️
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦的<strong>「登山＋溫泉＋甜點」完美一日遊</strong>——御影出發登六甲山頂、纜車下到有馬溫泉、最後品嚐人氣<strong>「arima gelateria Stagione」</strong>義式冰淇淋🍦 是關西旅遊中能同時感受自然、文化、美食的最棒行程✨
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">一日遊行程概覧</h2>
          <div className="space-y-3">
            <div className="flex gap-3"><span className="text-green-500 font-black text-sm shrink-0">①</span><div><p className="text-sm font-bold text-stone-700">早上：御影出發登六甲山</p><p className="text-xs text-stone-500 leading-relaxed">健行約3〜4小時、登頂後可看神戶港景觀</p></div></div>
            <div className="flex gap-3"><span className="text-green-500 font-black text-sm shrink-0">②</span><div><p className="text-sm font-bold text-stone-700">下午：六甲有馬纜車到有馬溫泉</p><p className="text-xs text-stone-500 leading-relaxed">12分鐘空中之旅、俯瞰六甲山絕景</p></div></div>
            <div className="flex gap-3"><span className="text-green-500 font-black text-sm shrink-0">③</span><div><p className="text-sm font-bold text-stone-700">傍晚：有馬溫泉街散步＆甜點</p><p className="text-xs text-stone-500 leading-relaxed">arima gelateria Stagione 義式冰淇淋＋溫泉街散步</p></div></div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">行程推薦・3段體驗</h2>

        {/* Spot 1: 六甲山 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {rokkoPhotos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] bg-stone-100">
                <Image src={src} alt="六甲山健行 - 神戶觀光推薦" fill sizes="50vw" className="object-cover" priority={i === 0} />
              </div>
            ))}
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div><h3 className="text-base font-black text-stone-800">六甲山健行（御影路線）</h3><span className="text-xs text-stone-400">Mount Rokko Hiking</span></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              從<strong>御影駅</strong>出發的人氣登山路線，沿著住吉川上游進入山道，經過<strong>「住吉道」</strong>到<strong>「六甲山最高峰」</strong>（931m）⛰️ 全程約<strong>3〜4小時</strong>，路徑整備完善，是初學者也能挑戰的中級路線。登頂後可俯瞰神戶港、瀨戶內海、大阪灣的壯麗景色。
            </p>
            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                從<strong>神戶市區搭電車30分鐘</strong>就能到登山口，是城市旅遊中能體驗高山的稀有景點🏙️🏔️ 沿途有清流＆瀑布＆楓樹，春天新綠、秋天紅葉都超美🍁 登頂後不用走下山，直接搭纜車到有馬溫泉超輕鬆！比較陡的路段不多，<strong>運動鞋＆水＆便當</strong>就能挑戰。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">{["🏔️ 標高931m", "🚶 全程3〜4小時", "🌊 神戶港絕景", "🍁 四季美景", "💪 初級〜中級"].map((t) => (<span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>))}</div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 兵庫縣神戶市（登山口：阪急「御影」駅 徒歩約20分）</p>
              <p className="text-xs text-stone-600">🚃 阪急神戶線「御影」駅 / JR「住吉」駅</p>
              <p className="text-xs text-stone-600">⏰ 全日（建議上午8〜9點出發）</p>
              <p className="text-xs text-stone-600">💴 免費</p>
              <p className="text-xs text-stone-600">🥾 推薦：運動鞋・水（1L以上）・便當・防曬</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">出發前查氣象，雨天石階滑！冬天積雪期請避免。建議攜帶熊鈴與健行手套</p>
            </div>
            <a href="https://kobe-rokko.jp/climbing-main/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 官方登山資訊</a>
          </div>
        </section>

        {/* Spot 2: ロープウェイ */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image src={ropewayPhotos[0]} alt="六甲有馬纜車 - 神戶觀光推薦" fill sizes="100vw" className="object-cover" />
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div><h3 className="text-base font-black text-stone-800">六甲有馬纜車</h3><span className="text-xs text-stone-400">Rokko Arima Ropeway</span></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              連接六甲山頂與有馬溫泉的<strong>12分鐘空中之旅</strong>🚠 從纜車上可以俯瞰六甲山的壯麗景色，秋天還能看到一整片紅葉樹海。是不想走下山的健行者最棒的選擇！
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-blue-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                登山累了之後，<strong>輕鬆12分鐘到溫泉鄉</strong>真的太幸福了♨️ 春天的綠意、秋天的紅葉、冬天的雪景都各有風情。也很推薦從<strong>有馬→六甲</strong>反方向搭，先泡湯再上山看日落也是經典玩法。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">{["🚠 12分鐘空中之旅", "🍁 秋季紅葉絕景", "♨️ 直達有馬溫泉", "📸 山景必拍"].map((t) => (<span key={t} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">{t}</span>))}</div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 六甲山頂駅 ⇄ 有馬溫泉駅</p>
              <p className="text-xs text-stone-600">⏰ 9:30〜17:10（每20分一班・季節變動）</p>
              <p className="text-xs text-stone-600">💴 單程 大人 ¥1,030／往返 ¥1,820</p>
              <p className="text-xs text-stone-600">🕒 所要時間：約12分</p>
            </div>
          </div>
        </section>

        {/* Spot 3: arima gelateria Stagione */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image src={gelatoPhotos[0]} alt="arima gelateria Stagione - 有馬溫泉推薦" fill sizes="100vw" className="object-cover" />
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div><h3 className="text-base font-black text-stone-800">arima gelateria Stagione</h3><span className="text-xs text-stone-400">Arima Gelateria Stagione</span></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              有馬溫泉街上的人氣<strong>義式冰淇淋專門店</strong>🍦 使用<strong>當地嚴選素材＆季節水果</strong>製作，常備約12種口味，每天會有季節限定的新口味。位於溫泉街中心，泡湯後散步順道吃一份是有馬溫泉的經典玩法。
            </p>
            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                泡完溫泉的<strong>冰涼ジェラート</strong>，幸福感爆表✨ 招牌口味是<strong>「丹波黑大豆」「炭酸せんべい風味」</strong>等有馬限定的特色冰淇淋。一份雙球¥500左右，CP值很高💰 店內也有座位可以悠閒享用，是溫泉街最棒的甜點停留點。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">{["🍦 12種口味", "🌰 丹波黑大豆", "💧 炭酸せんべい", "♨️ 泡湯後完美"].map((t) => (<span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>))}</div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 兵庫縣神戶市北區有馬町1163</p>
              <p className="text-xs text-stone-600">🚃 神戶電鐵「有馬溫泉」駅 徒歩約7分</p>
              <p className="text-xs text-stone-600">⏰ 10:00〜18:00（不定休）</p>
              <p className="text-xs text-stone-600">💴 單球 ¥400／雙球 ¥500</p>
            </div>
            <a href="https://arima-stagione.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 官方網站</a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">六甲山＆有馬溫泉小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從<strong>神戶三宮</strong>到御影只要10分，登山口交通超便利🚃</li>
            <li>✅ <strong>春（3〜5月）</strong>新綠＆<strong>秋（10〜11月）</strong>紅葉是最佳季節</li>
            <li>✅ 健行裝備：<strong>運動鞋＋1L水＋便當＋防曬＋輕便外套</strong></li>
            <li>✅ 有馬溫泉的<strong>外湯「金の湯」「銀の湯」</strong>當天泡湯只要¥650</li>
            <li>✅ 也可以反向行程：先有馬溫泉泡湯→搭纜車到六甲→看夕陽下山</li>
            <li>✅ 想輕鬆遊覽，可以選擇不健行直接搭<strong>六甲ケーブル＋ロープウェイ</strong>路線</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            一天之內可以體驗登山＋溫泉＋甜點——這就是六甲山＆有馬溫泉一日遊的魅力✨<br />
            從神戶市區出發回來，是來關西旅遊絕對要安排的特別行程！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「登完山泡溫泉再吃冰淇淋，三段幸福感的一日遊♨️🍦」</p>
            </div>
          </div>
        </div>

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
