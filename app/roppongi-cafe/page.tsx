import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/roppongi-cafe";
const OG_IMAGE = "/roppongi-cafe/verve-1.jpg";

export const metadata: Metadata = {
  title: "VERVE COFFEE 六本木｜7點開門的玻璃屋咖啡廳✅實訪",
  description:
    "六本木站3號出口徒步約6分的VERVE COFFEE ROASTERS。加州聖塔克魯茲的精品咖啡，兩層樓玻璃屋＋露台座，7:00〜21:00、可刷卡。附手沖豆單與交通。",
  alternates: {
    canonical: PAGE_URL,
    // 台湾・香港の両方を対象にする（同一URLで両地域を明示）
    languages: {
      "zh-Hant": PAGE_URL,
      "zh-TW": PAGE_URL,
      "zh-HK": PAGE_URL,
      "zh-MO": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    title: "VERVE COFFEE ROASTERS 六本木｜兩層樓玻璃屋的加州精品咖啡",
    description: "六本木站徒步約6分。整棟落地玻璃、露台座、現點現沖的手沖咖啡，早上7點就開門。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "VERVE COFFEE ROASTERS 六本木的冰拿鐵與磅蛋糕" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VERVE COFFEE 六本木｜7點開門的玻璃屋咖啡廳",
    description: "加州聖塔克魯茲的精品咖啡・兩層樓玻璃屋＋露台座☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "VERVE COFFEE ROASTERS 六本木｜兩層樓玻璃屋・手沖咖啡與磅蛋糕【實際造訪】",
  description: "VERVE COFFEE ROASTERS 六本木店完整介紹。兩層樓的玻璃屋、露台座、手沖豆單、營業時間、付款方式與交通。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-10-02T00:00:00+09:00",
  dateModified: "2026-10-02T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "六本木咖啡廳推薦", item: PAGE_URL },
  ],
};

const vervePhotos = [
  { src: "/roppongi-cafe/verve-1.jpg", alt: "VERVE COFFEE ROASTERS 六本木 - 冰拿鐵與磅蛋糕，窗外是草皮與木棧板" },
  { src: "/roppongi-cafe/verve-2.jpg", alt: "VERVE COFFEE ROASTERS 六本木的外觀 - 兩層樓的落地玻璃建築與露台座" },
  { src: "/roppongi-cafe/verve-3.jpg", alt: "VERVE COFFEE ROASTERS 六本木的手沖吧台 - 一排玻璃壺與各產地的豆卡" },
];

// 造訪當天手沖吧台上擺出來的豆子（豆卡上的標示）。會隨季節更換。
const beans = [
  { name: "Colombia Yacuanquer", zh: "哥倫比亞", notes: "紅蘋果・李子・牛奶巧克力" },
  { name: "Costa Rica El Maracuya", zh: "哥斯大黎加", notes: "紅酒・黑醋栗・香草" },
  { name: "Ethiopia Anasora", zh: "衣索比亞", notes: "柑橘果醬・水蜜桃・粉紅酒" },
  { name: "Elida Catuai Natural Anaerobic", zh: "巴拿馬", notes: "草莓・李子・巧克力" },
];

const relatedLinks = [
  { href: "/museum", label: "🎨 東京美術館推薦｜國立新美術館＆根津美術館2選", desc: "國立新美術館就在六本木，可以排在同一天" },
  { href: "/tokyo-tower", label: "🗼 東京鐵塔攻略｜門票、營業時間、夜景與附近景點", desc: "從六本木往飯倉方向走就看得到" },
  { href: "/ginza-cafe", label: "☕ Bacha Coffee 銀座｜日本首間旗艦店", desc: "三層樓的摩洛哥咖啡宮殿・彩色可頌" },
];

const faqItems = [
  {
    q: "VERVE COFFEE ROASTERS 是什麼？",
    a: "來自美國加州聖塔克魯茲（Santa Cruz）的精品咖啡烘焙品牌，日文寫作「ヴァーヴ コーヒー ロースターズ」。品牌的口號是「COFFEE IS A FRUIT」——咖啡是果實的種子，所以強調豆子本身的果香與酸甜。六本木店2020年4月1日開幕，是日本第3間店。",
  },
  {
    q: "VERVE COFFEE 六本木怎麼去？",
    a: "東京Metro日比谷線・都營大江戶線「六本木」駅3號出口徒步約6分，從六本木交叉點往飯倉・東京鐵塔方向直走，在外苑東通旁邊。南北線「六本木一丁目」駅1號出口過來約7分。地址是東京都港區六本木5-16-7。",
  },
  {
    q: "幾點開？早餐時段可以去嗎？",
    a: "每天7:00〜21:00，早上7點就開門。六本木多數的店要10〜11點才開，想在逛美術館或展望台之前先喝一杯，這裡很好用。",
  },
  {
    q: "可以刷卡嗎？",
    a: "可以，我們當天是刷卡結帳。餐廳資訊網站上刊載可用VISA、Master、JCB、AMEX、Diners，交通系IC卡（Suica等）與PayPay也能用。",
  },
  {
    q: "有幾層樓？有戶外座位嗎？",
    a: "兩層樓。1樓是點餐櫃檯、手沖吧台和咖啡豆・周邊商品的貨架，2樓是座位區；建築外側還有露台座。整棟是落地玻璃，坐在窗邊可以看到外面的草皮。",
  },
  {
    q: "有Wi-Fi和插座嗎？可以帶寵物嗎？",
    a: "餐廳資訊網站上刊載有免費Wi-Fi與插座。官方在開幕時公布露台座可以帶寵物、冬天有暖爐；室內能不能帶，請現場向店員確認。",
  },
];

export default function RoppongiCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">六本木咖啡廳推薦</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳（咖啡店）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・六本木</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          VERVE COFFEE ROASTERS 六本木<br />兩層樓玻璃屋・早上7點開門的加州咖啡☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-10-02</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">六本木也有可以慢慢坐的咖啡廳</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            六本木給人的印象是夜生活、高樓和美術館，白天想找個地方<strong>安靜坐一下</strong>反而不太容易☕ 六本木Hills裡的店人多，路邊的連鎖店又沒什麼旅行感。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦（推介）的<strong>「VERVE COFFEE ROASTERS ROPPONGI」</strong>，是來自美國加州<strong>聖塔克魯茲（Santa Cruz）</strong>的精品咖啡品牌。從六本木站走過來約6分鐘，是一棟<strong>兩層樓、整面落地玻璃</strong>的獨棟建築，外面還有露台座。<strong>每天早上7點開到晚上9點</strong>，我們當天也是<strong>刷卡結帳</strong>，對旅客來說很好用。
          </p>
        </section>

        <PrepBannerCompact />

        {/* 樓層 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">VERVE COFFEE 六本木的座位怎麼選</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">1F</span>
              <div>
                <p className="text-sm font-bold text-stone-700">點餐櫃檯・手沖吧台・咖啡豆貨架</p>
                <p className="text-xs text-stone-500 leading-relaxed">先在這裡點餐結帳。吧台上排著一整排手沖濾杯，旁邊的架子賣咖啡豆和周邊商品</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">2F</span>
              <div>
                <p className="text-sm font-bold text-stone-700">座位區</p>
                <p className="text-xs text-stone-500 leading-relaxed">從店內的樓梯上去。玻璃圍起來的明亮空間，放了不少綠色植物</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">外</span>
              <div>
                <p className="text-sm font-bold text-stone-700">露台座</p>
                <p className="text-xs text-stone-500 leading-relaxed">建築外側的戶外座位。官方在開幕時公布可以帶寵物，冬天有暖爐</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3 pt-3 border-t border-stone-100">
            💡 靠窗有面向外面的吧台座，窗外就是草皮和木棧板，一個人來坐這裡最舒服。
          </p>
        </section>

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">六本木咖啡廳推薦（咖啡店推介）・持續更新中</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {vervePhotos.map((photo, i) => (
              <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                <Image src={photo.src} alt={photo.alt} fill sizes="33vw" className="object-cover" {...(i === 0 ? { priority: true } : {})} />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">VERVE COFFEE ROASTERS ROPPONGI</h3>
                <span className="text-xs text-stone-400">ヴァーヴ コーヒー ロースターズ 六本木</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              遠遠就看得到的<strong>玻璃屋</strong>——兩層樓高的落地玻璃、弧形的屋簷，柱子上直寫著 <strong>VERVE</strong>🌿 2020年4月1日開幕，是這個品牌在日本的第3間店。天氣好的日子露台座幾乎坐滿，客人裡外國人很多，氣氛比較像在加州而不是東京。
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              VERVE 的口號是<strong>「COFFEE IS A FRUIT」</strong>：咖啡是果實的種子，所以要喝得出果香與酸甜。1樓的吧台上排著一整排<strong>波浪濾杯和玻璃壺</strong>，每一壺前面立著豆卡，寫著產地、風味和處理法——手沖是<strong>點了之後才一杯一杯沖</strong>的，站在吧台前看豆卡選豆子，本身就是這間店的樂趣。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 實際點的（實訪）</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                點了<strong>冰拿鐵</strong>和<strong>磅蛋糕</strong>。餐點放在木托盤上端過來，冰拿鐵的杯墊旁附了一張小豆卡，上面寫著 <strong>SEABRIGHT</strong>——讓你知道這一杯用的是哪一支豆子🥛 磅蛋糕切得很厚，裝在灰綠色的陶盤上。我們坐在靠窗的吧台座，眼前就是草皮和木棧板，<strong>在六本木正中央卻很安靜</strong>。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🏠 兩層樓玻璃屋", "🌅 早上7點開門", "☕ 現點現沖的手沖", "🌿 露台座", "💳 可刷卡"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 豆單 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">☕ 造訪當天的手沖豆單（豆卡上的風味）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                {beans.map((b) => (
                  <li key={b.name}>
                    <strong>{b.name}</strong>
                    <span className="text-stone-400">（{b.zh}）</span>
                    <span className="ml-1">{b.notes}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
                ※ 豆子會隨季節更換。不知道怎麼選的話，喜歡果香選衣索比亞、喜歡巧克力感選哥倫比亞，照豆卡上的風味挑就好。
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都港區六本木5-16-7</p>
              <p className="text-xs text-stone-600 ib ib-train">日比谷線・大江戶線「六本木」駅3號出口 徒步約6分／南北線「六本木一丁目」駅1號出口 徒步約7分</p>
              <p className="text-xs text-stone-600 ib ib-clock">7:00〜21:00（每天營業）</p>
              <p className="text-xs text-stone-600 ib ib-yen">一人約 ¥1,000〜¥2,000</p>
              <p className="text-xs text-stone-600">📅 不接受訂位・先點餐再入座</p>
              <p className="text-xs text-stone-600">💳 可刷卡（實際使用）・交通系IC卡・PayPay</p>
              <p className="text-xs text-stone-600">📶 免費Wi-Fi・有插座／全席禁菸／露台座可帶寵物</p>
              <p className="text-xs text-stone-600">⏱️ 建議預留約30分〜1小時</p>
              <p className="text-xs text-stone-600">📞 03-6427-5403</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">露台座和窗邊很搶手，我們去的時候露台幾乎坐滿。想坐這兩區建議<strong>上午</strong>去；1樓滿了記得上<strong>2樓</strong>看看</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://vervecoffee.jp/pages/roppongi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站（六本木店）
              </a>
              <a
                href="https://www.instagram.com/vervecoffeeroastersjapan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                📷 官方 Instagram
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=VERVE+COFFEE+ROASTERS+ROPPONGI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🗺️ Google 地圖
              </a>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">六本木咖啡散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>早上7點開門</strong>，可以當作六本木行程的第一站，喝完再去美術館或展望台</li>
            <li>✅ 從六本木交叉點往<strong>飯倉・東京鐵塔方向</strong>直走就會看到玻璃屋，不用鑽小巷</li>
            <li>✅ 先在1樓點餐結帳，再自己找位子——人多的時候先看一眼2樓有沒有空位</li>
            <li>✅ 喝到喜歡的豆子，1樓的貨架可以直接買咖啡豆當伴手禮（手信）🎁</li>
            <li>✅ 順著同一條路繼續往前走就是<strong>東京鐵塔</strong>的方向，可以把兩個點排在一起🗼</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            玻璃、木頭、綠色植物，加上一杯有果香的咖啡✨<br />
            在六本木走累的時候，這裡是可以好好喘口氣的地方。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「窗外是草皮、手邊是冰拿鐵，差點忘記自己在六本木🌿」</p>
            </div>
          </div>
        </div>

        <FaqSection items={faqItems} />

        <AuthorCard />
        <PrepBanner />

        {/* 延伸閱讀 */}
        <section>
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">📚 延伸閱讀</h2>
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

        <RelatedArticles slug="roppongi-cafe" exclude={["/museum", "/tokyo-tower", "/ginza-cafe"]} />

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
