import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/kyoto-cafe";
const OG_IMAGE = "/kyoto-cafe/rokkaku-4.jpg";

export const metadata: Metadata = {
  title: "藍瓶咖啡 京都六角｜Blue Bottle百年町家咖啡廳✅實訪",
  description:
    "Blue Bottle Coffee京都六角カフェ：前身是腳踏車行的百年町家，2樓25席、早上8點開門。栗子磅蛋糕佐冰淇淋¥770，附甜點與咖啡豆價錢、點餐方式。",
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
    title: "藍瓶咖啡 京都六角｜Blue Bottle Coffee 百年町家咖啡廳",
    description: "前身是腳踏車行的百年町家。1樓點餐、2樓坐著慢慢喝。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Blue Bottle Coffee 京都六角的甜點櫃 - 列日鬆餅、肉派、磅蛋糕與餅乾" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "藍瓶咖啡 京都六角｜Blue Bottle 百年町家咖啡廳",
    description: "前身是腳踏車行的百年町家，2樓坐著慢慢喝☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "藍瓶咖啡 京都六角｜Blue Bottle Coffee 京都六角カフェ 百年町家咖啡廳【實際造訪】",
  description: "Blue Bottle Coffee 京都六角カフェ：前身是腳踏車行的百年町家。營業時間、座位、交通、甜點與咖啡豆價錢，以及1樓點餐・2樓內用的流程。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-11-10T00:00:00+09:00",
  dateModified: "2026-11-10T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "京都咖啡廳｜藍瓶咖啡 京都六角", item: PAGE_URL },
  ],
};

const P = "/kyoto-cafe";

const photos = [
  { src: `${P}/rokkaku-5.jpg`, alt: "Blue Bottle Coffee 京都六角的栗子磅蛋糕佐冰淇淋與冰咖啡，放在木托盤上" },
  { src: `${P}/rokkaku-4.jpg`, alt: "Blue Bottle Coffee 京都六角的甜點櫃 - 列日鬆餅（原味・抹茶）、肉派、檸檬奶油派、磅蛋糕與餅乾" },
  { src: `${P}/rokkaku-1.jpg`, alt: "Blue Bottle Coffee 京都六角的外觀 - 藍色瓶子招牌，牆上掛著腳踏車安全帽" },
  { src: `${P}/rokkaku-3.jpg`, alt: "Blue Bottle Coffee 京都六角的木製菜單板 - Espresso Drinks、Drip Coffee、Iced Coffee" },
  { src: `${P}/rokkaku-2.jpg`, alt: "Blue Bottle Coffee 京都六角的咖啡豆與馬克杯販售區" },
];

// 店頭の値札で確認した価格（2026年11月・税込表示）
const foodMenu = [
  { zh: "栗子磅蛋糕佐冰淇淋", jp: "栗のパウンドケーキ with アイスクリーム", price: "¥770" },
  { zh: "香蕉磅蛋糕", jp: "バナナパウンドケーキ", price: "¥715" },
  { zh: "肉派（豬肉＆蔓越莓）・季節限定", jp: "ミートパイ ポーク＆クランベリー", price: "¥600" },
  { zh: "檸檬奶油派", jp: "レモンクリームパイ", price: "¥550" },
  { zh: "巧克力豆餅乾", jp: "チョコレートチップ クッキー", price: "¥473" },
  { zh: "格蘭諾拉麥片佐優格＆季節果醬", jp: "ブルーボトル グラノーラ with ヨーグルト＆シーズナルジャム", price: "¥831" },
  { zh: "格蘭諾拉棒（蜂蜜海鹽／水果堅果）", jp: "グラノーラ スティック", price: "¥408" },
];

const beansMenu = [
  { zh: "Giant Steps・Bella Donovan・Three Africas・Hayes Valley Espresso", jp: "定番ブレンド", price: "各 ¥2,150" },
  { zh: "巴西 單品（João Hamilton Natural）", jp: "シングルオリジン", price: "¥2,950" },
  { zh: "哥倫比亞 單品（Pedro Nel Trujillo Washed）", jp: "シングルオリジン", price: "¥2,800" },
];

const faqItems = [
  {
    q: "藍瓶咖啡 京都六角在哪裡？怎麼去？",
    a: "京都市中京區東洞院六角上る三文字町226-1，在烏丸通往東一條的東洞院通上。從地下鐵「烏丸御池」站或阪急「烏丸」站走路10分鐘以內，錦市場、六角堂都在附近。",
  },
  {
    q: "藍瓶咖啡 京都六角幾點開？",
    a: "官網寫的是每天8:00〜19:00。早上8點就開門，可以當作京都一天行程的第一站。",
  },
  {
    q: "店內有幾個座位？要排隊嗎？",
    a: "官網寫25席。1樓是點餐和外帶的櫃檯，點完從櫃檯後面的樓梯上2樓找位子；2樓越往裡面越安靜。",
  },
  {
    q: "和其他藍瓶咖啡有什麼不一樣？",
    a: "最大的不同是建築：屋齡超過100年、以前是腳踏車行的京町家，1樓點餐、2樓內用。菜單板上也有柚子檸檬水（YUZU LEMONADE）和抹茶拿鐵，甜點櫃有抹茶口味的列日鬆餅。",
  },
  {
    q: "甜點和咖啡豆的價錢多少？",
    a: "店頭值札：栗子磅蛋糕佐冰淇淋¥770、肉派¥600、檸檬奶油派¥550、巧克力豆餅乾¥473。咖啡豆的定番綜合豆各¥2,150，單品豆¥2,800〜2,950。",
  },
  {
    q: "有英文或中文菜單嗎？有Wi-Fi嗎？",
    a: "官網的店舖頁有英文・中文・韓文菜單的連結，店內有Wi-Fi。",
  },
];

const relatedLinks = [
  { href: "/ine", label: "🏘️ 京都伊根町觀光推薦｜舟屋村絕景・咖啡＆住宿", desc: "京都的海邊，第二次來京都可以排進去" },
  { href: "/kiyosumi-cafe", label: "☕ 清澄白河咖啡廳｜東京的咖啡聖地", desc: "東京也有藍瓶咖啡的日本1號店所在的街區" },
  { href: "/hikone", label: "🏯 彥根城＆彥根貓｜京都出發交通", desc: "從京都搭JR約50分的滋賀小旅行" },
];

export default function KyotoCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">京都咖啡廳｜藍瓶咖啡 京都六角</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳（咖啡店）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 京都・烏丸御池</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          藍瓶咖啡 京都六角<br />Blue Bottle Coffee 百年町家咖啡廳☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-11-10</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">京都市中心、走路就到的藍瓶咖啡</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            台灣・香港朋友很熟的<strong>藍瓶咖啡（Blue Bottle Coffee／ブルーボトルコーヒー）</strong>，在京都市中心的六角通附近有一間<strong>「京都六角カフェ」</strong>☕ 店面是<strong>屋齡超過100年的町家（京町家）</strong>，以前是一間腳踏車行。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            離錦市場、六角堂、烏丸的百貨都很近，<strong>早上8點就開門</strong>，逛街前先來喝一杯剛剛好。這篇介紹（推介）實際去過的感覺、菜單價錢和點餐方式。
          </p>
        </section>

        <PrepBannerCompact />

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">京都咖啡廳推薦（咖啡店推介）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6 card-split">
          <div className="photo-strip">
            {photos.map((photo, i) => (
              <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
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
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">Blue Bottle Coffee 京都六角カフェ</h3>
                <span className="text-xs text-stone-400">ブルーボトルコーヒー 京都六角カフェ（藍瓶咖啡 京都六角店）</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              黑色木格子的町家外牆上，掛著<strong>白底藍瓶子</strong>的方形招牌。隔壁櫥窗裡掛滿<strong>腳踏車安全帽和配件</strong>——這棟房子以前是腳踏車行，改裝成咖啡廳時特地把腳踏車留在外牆上，紀念這段歷史🚲
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              走進去，<strong>1樓是點餐和外帶的櫃檯</strong>，抬頭是木條做的菜單板：Espresso Drinks、Drip Coffee、Iced Coffee 三區，還有<strong>柚子檸檬水（YUZU LEMONADE）</strong>和<strong>抹茶拿鐵</strong>。點完餐從櫃檯後方的樓梯上<strong>2樓</strong>，是保留老木樑、燈光偏暗的內用空間，越往裡面越安靜。
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              櫃檯前的甜點櫃擺著<strong>列日鬆餅（原味・抹茶）</strong>、季節限定的<strong>肉派</strong>、檸檬奶油派、磅蛋糕和餅乾；旁邊是一整排<strong>咖啡豆</strong>，每包都附上風味和烘焙深淺的刻度，看得懂英文就能挑。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 實際點的（實吃）</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                點了<strong>栗子磅蛋糕佐冰淇淋（¥770）</strong>和<strong>冰咖啡</strong>。厚切的磅蛋糕外圈烤得金黃、裡面看得到整顆的<strong>栗子</strong>，上面放一球白色的冰淇淋，盛在手作感的白色陶盤上🌰 冰咖啡裝在簡單的玻璃杯，連木托盤一起端上2樓，在木頭圓桌慢慢吃。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🌰 栗子磅蛋糕 ¥770", "🏠 百年町家", "🚲 前身是腳踏車行", "🌅 早上8點開門", "🪑 25席・2樓內用", "📶 有Wi-Fi"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍰 甜點・輕食的價錢（店頭值札）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                {foodMenu.map((m) => (
                  <li key={m.jp}>
                    <strong>{m.zh}</strong>
                    <span className="text-stone-400">（{m.jp}）</span>
                    <span className="ml-1 font-bold text-stone-700">{m.price}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-bold text-amber-700 mt-3 mb-2">🫘 咖啡豆（伴手禮・手信）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                {beansMenu.map((m) => (
                  <li key={m.zh}>
                    <strong>{m.zh}</strong>
                    <span className="text-stone-400">（{m.jp}）</span>
                    <span className="ml-1 font-bold text-stone-700">{m.price}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
                ※ 2026年11月造訪時店頭的價格（含稅）。甜點有季節更換，價格以店頭為準。
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">京都府京都市中京區東洞院六角上る三文字町226-1</p>
              <p className="text-xs text-stone-600 ib ib-train">地下鐵「烏丸御池」駅・阪急「烏丸」駅 徒步10分以內</p>
              <p className="text-xs text-stone-600 ib ib-clock">每天 8:00〜19:00（官網）</p>
              <p className="text-xs text-stone-600 ib ib-yen">一人約 ¥1,000〜¥1,500（飲料＋甜點）</p>
              <p className="text-xs text-stone-600">🪑 25席（1樓點餐・外帶／2樓內用）</p>
              <p className="text-xs text-stone-600">🌐 官網有英文・中文・韓文菜單／📶 有Wi-Fi</p>
              <p className="text-xs text-stone-600">⏱️ 建議預留約30分〜1小時</p>
              <p className="text-xs text-stone-600">📞 075-741-8189</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                先在1樓點餐、拿到飲料再上2樓。<strong>2樓最裡面的座位最安靜</strong>，想慢慢坐的話直接往裡面走
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href="https://store.bluebottlecoffee.jp/pages/kyoto-rokkaku" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 Blue Bottle Coffee 京都六角カフェ 官方網站</a>
              <a href="https://www.google.com/maps/search/?api=1&query=%E3%83%96%E3%83%AB%E3%83%BC%E3%83%9C%E3%83%88%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC+%E4%BA%AC%E9%83%BD%E5%85%AD%E8%A7%92%E3%82%AB%E3%83%95%E3%82%A7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🗺️ Google 地圖</a>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8 mt-2">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">京都咖啡廳小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>早上8點開門</strong>，適合當京都一天的第一站🌅</li>
            <li>✅ 錦市場、六角堂、烏丸・河原町的百貨都在走路範圍內，排在逛街路線中間</li>
            <li>✅ 1樓點餐→2樓內用，<strong>拿著托盤上樓梯</strong>，行李多的話先放好再點</li>
            <li>✅ 咖啡豆和馬克杯可以當伴手禮（手信），每包都有風味刻度好挑</li>
            <li>✅ 想喝和風口味，點<strong>柚子檸檬水</strong>或<strong>抹茶拿鐵</strong>🍋</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            同樣的藍瓶子，在京都就住進了百年的町家✨<br />
            1樓的熱鬧和2樓的安靜，像是兩間不同的店。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「在百年町家的2樓吃栗子磅蛋糕，秋天的京都就是要這樣過🌰」</p>
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

        <RelatedArticles slug="kyoto-cafe" exclude={["/ine", "/kiyosumi-cafe", "/hikone"]} />

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
