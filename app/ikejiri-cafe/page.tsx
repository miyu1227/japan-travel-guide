import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/ikejiri-cafe";
const OG_IMAGE = "/ikejiri-cafe/unlivre-1.jpg";

export const metadata: Metadata = {
  title: "池尻大橋咖啡廳｜UN LIVRE 法式甜點✅實訪",
  description:
    "澀谷搭車一站就到的「UN LIVRE（アンリブレ）」法式甜點咖啡廳。草莓蛋糕・季節限定刨冰・戶外露台座位。附交通、營業時間、必點甜點與價位。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "池尻大橋咖啡廳推薦｜UN LIVRE 法式甜點店・澀谷一站的隱藏名店",
    description: "澀谷一站直達！池尻大橋人氣甜點咖啡廳，草莓蛋糕・季節刨冰・寵物友善露台。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "池尻大橋咖啡廳推薦・UN LIVRE 草莓刨冰" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "池尻大橋咖啡廳推薦｜UN LIVRE 法式甜點店",
    description: "澀谷一站直達！池尻大橋必去甜點咖啡廳，草莓蛋糕＆季節限定刨冰🍓",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "池尻大橋咖啡廳推薦｜UN LIVRE 法式甜點店・澀谷一站的隱藏名店【實際造訪】",
  description:
    "池尻大橋必去咖啡廳「UN LIVRE（アンリブレ）」完整介紹。法式甜點・季節限定刨冰・露台座位，附交通與營業時間。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-31T00:00:00+09:00",
  dateModified: "2026-07-31T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "池尻大橋咖啡廳推薦", item: PAGE_URL },
  ],
};

const photos = [
  { src: "/ikejiri-cafe/unlivre-1.jpg", alt: "UN LIVRE 池尻大橋 - 季節限定草莓刨冰" },
  { src: "/ikejiri-cafe/unlivre-2.jpg", alt: "UN LIVRE 池尻大橋 - 店內甜點櫃與烘焙點心" },
  { src: "/ikejiri-cafe/unlivre-3.jpg", alt: "UN LIVRE 池尻大橋 - 冰咖啡歐蕾" },
];

const relatedLinks = [
  { href: "/nakameguro-cafe", label: "☕ 中目黑咖啡廳推薦｜星巴克臻選東京烘焙工坊", desc: "隈研吾建築・目黑川賞櫻聖地" },
  { href: "/shibuya-cafe", label: "🎵 澀谷咖啡廳推薦｜RECOCO 黑膠唱片試聽咖啡", desc: "約300張唱片聽到飽的音樂體驗" },
  { href: "/daikanyama-cafe", label: "☕ 代官山咖啡廳推薦2選｜義式烘焙＆高級甜點", desc: "PRINCI＆DOLCE TACUBO" },
];

export default function IkejiriCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">池尻大橋咖啡廳推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・池尻大橋</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          池尻大橋咖啡廳推薦｜UN LIVRE<br />澀谷一站直達的法式甜點名店🍓
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-31</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">池尻大橋——澀谷隔壁的大人系散步街區</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>池尻大橋</strong>位在東急田園都市線上，從<strong>澀谷搭車只要一站、約2分鐘</strong>就能抵達🚃 一走出車站，觀光客的喧鬧瞬間消失，取而代之的是住宅區的安靜街道、選品店與一間間個性咖啡廳，是東京人自己在假日散步的區域。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次介紹的<strong>「UN LIVRE（アンリブレ）」</strong>是這一帶最有人氣的法式甜點咖啡廳之一。店名在法文中是「<strong>一本書</strong>」的意思，理念來自「從一本書得到靈感的甜點店」，蛋糕櫃裡永遠排著當季水果做的甜點🍰 逛完澀谷後順道繞過來，就能用最短的移動距離換到完全不同的東京風景✨
          </p>
        </section>

        <PrepBannerCompact />

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4">池尻大橋咖啡廳推薦（持續更新中）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {photos.map((p, i) => (
              <div key={p.src} className="relative aspect-square bg-stone-100">
                <Image
                  src={p.src}
                  alt={p.alt}
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
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">UN LIVRE 池尻大橋店</h3>
                <span className="text-xs text-stone-400">アンリブレ／法式甜點・咖啡廳</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              2022年3月開幕的<strong>法式甜點專門店＋內用咖啡廳</strong>🍰 灰白色的手抹牆面搭配拱型壁龕、木質長桌與吊燈，整體氛圍安靜又有質感。中央大桌上擺滿<strong>費南雪、餅乾、烘焙點心禮盒</strong>，玻璃櫃裡則是當季水果的蛋糕，買伴手禮和坐下來吃甜點都可以一次解決。夏天還會推出<strong>季節限定刨冰</strong>，綿密的冰上淋著自家熬煮的草莓醬，是夏季造訪最推薦的一品🍓
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                從<strong>澀谷搭車只要一站</strong>，卻幾乎沒有觀光客，是逛街逛累時最好的休息點☕ 甜點單價落在 <strong>¥600 前後</strong>、飲料 ¥550 起，以東京甜點店來說相當親民。店內有<strong>戶外露台座位</strong>，天氣好的時候特別舒服，而且<strong>露台可以帶寵物</strong>🐶 想帶伴手禮回台灣的話，這裡的<strong>「おやつ缶」點心鐵罐</strong>（¥2,916 起）包裝精緻又耐放，是很受歡迎的選擇🎁
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍓 當季水果甜點", "🍧 夏季限定刨冰", "🌿 戶外露台座位", "🐶 露台寵物友善", "🎁 點心鐵罐伴手禮", "🚃 澀谷一站直達"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 必點 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍰 必點推薦</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>草莓鮮奶油蛋糕</strong>：招牌經典，鮮奶油輕盈不膩</li>
                <li><strong>檸檬香生乳酪蛋糕</strong>：帶檸檬皮香氣，夏天特別清爽</li>
                <li><strong>季節限定刨冰</strong>：綿密細冰＋自家水果醬（夏季推出・時期依年度而異）</li>
                <li><strong>咖啡歐蕾（冰）</strong>：¥550 左右，配甜點剛剛好</li>
                <li><strong>おやつ缶 S／L</strong>：烘焙點心綜合鐵罐 ¥2,916／¥4,860，伴手禮首選</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都目黑區東山3-5-2 1F</p>
              <p className="text-xs text-stone-600">🚃 東急田園都市線「池尻大橋」駅 東口 徒歩約3分（澀谷駅搭車1站）</p>
              <p className="text-xs text-stone-600">⏰ 11:00〜19:00（週一公休）</p>
              <p className="text-xs text-stone-600">💴 每人約 ¥1,000〜¥2,000</p>
              <p className="text-xs text-stone-600">🪑 34席（室內20席／露台14席）</p>
              <p className="text-xs text-stone-600">📞 03-6712-2155</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">內用不接受預約，假日午後容易客滿。想坐露台的話建議開店後不久前往，蛋糕種類也最齊全</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.unlivre.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站
              </a>
              <a
                href="https://www.instagram.com/unlivre_cakes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                📷 官方 Instagram
              </a>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">池尻大橋咖啡散步小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從<strong>澀谷駅</strong>搭東急田園都市線只要1站約2分鐘，安排在澀谷行程的前後最順</li>
            <li>✅ <strong>週一公休</strong>，行程排在週一的話請避開，出發前建議再確認官方 Instagram</li>
            <li>✅ 季節限定品項（刨冰、當季水果蛋糕）每年推出時期不同，想吃刨冰請鎖定<strong>夏季</strong>🍧</li>
            <li>✅ 蛋糕櫃的人氣品項下午常常售完，<strong>中午前後</strong>到訪選擇最多</li>
            <li>✅ 走路約15分鐘可到<strong>中目黑</strong>、約20分鐘到<strong>三軒茶屋</strong>，可以串成半日咖啡散步路線</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            離澀谷只有一站，卻能一秒切換成安靜的東京日常✨<br />
            想在行程中放進一段不趕時間的甜點時光，池尻大橋的 UN LIVRE 是很剛好的選擇。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「逛完澀谷再搭一站，就能吃到當地人才知道的甜點🍓」</p>
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

        <RelatedArticles slug="ikejiri-cafe" exclude={["/daikanyama-cafe", "/nakameguro-cafe", "/shibuya-cafe"]} />

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
