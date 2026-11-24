import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import { photoStyle } from "@/lib/photoDims";

import MapButton from "../components/MapButton";
const PAGE_URL = "https://www.japantrippicks.com/palace-lounge";
const OG_IMAGE = "/palace-lounge/palace-1.jpg";

export const metadata: Metadata = {
  title: "THE PALACE LOUNGE｜東京皇宮飯店聖代與下午茶✅實吃",
  description:
    "東京皇宮飯店1樓THE PALACE LOUNGE，大手町站直結。麝香葡萄聖代¥6,000、下午茶¥9,000，附季節菜單、訂位方式與服裝規定。",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "zh-Hant": PAGE_URL,
      "zh-TW": PAGE_URL,
      "zh-HK": PAGE_URL,
      "zh-MO": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    title: "THE PALACE LOUNGE｜東京皇宮飯店的季節聖代與下午茶",
    description: "大手町站直結的飯店大廳酒廊。麝香葡萄聖代、草莓聖代與下午茶「Stones」整理🍇",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1108, height: 1477, alt: "THE PALACE LOUNGE 麝香葡萄聖代" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "THE PALACE LOUNGE｜東京皇宮飯店聖代與下午茶",
    description: "麝香葡萄聖代¥6,000・下午茶¥9,000，大手町站直結🍇",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "THE PALACE LOUNGE｜東京皇宮飯店的季節聖代與下午茶【實際造訪】",
  description: "東京皇宮飯店1樓THE PALACE LOUNGE的季節聖代、下午茶、價格、訂位與服裝規定整理。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-11-19T00:00:00+09:00",
  dateModified: "2026-11-19T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "東京咖啡廳推薦", item: "https://www.japantrippicks.com/tokyo-cafe" },
    { "@type": "ListItem", position: 3, name: "THE PALACE LOUNGE", item: PAGE_URL },
  ],
};

const faqs = [
  {
    q: "THE PALACE LOUNGE 是什麼地方？",
    a: "THE PALACE LOUNGE（ザ パレス ラウンジ）是東京皇宮飯店（Palace Hotel Tokyo，香港多稱東京皇宮酒店）1樓的大廳酒廊，共76席，有暖爐和書架，窗外是一片綠意。白天可以吃聖代、下午茶，晚上20:00起有鋼琴現場演奏。",
  },
  {
    q: "聖代和下午茶的價錢多少？",
    a: "麝香葡萄聖代¥6,000（附咖啡或紅茶¥7,500，供應到2026年11月30日）、3種草莓聖代¥5,000（附飲料¥6,500，2026年12月1日〜2027年4月30日）、下午茶「Stones」¥9,000（附一杯香檳¥12,000）。價格含消費稅，另收15%服務費。",
  },
  {
    q: "要訂位嗎？怎麼訂？",
    a: "下午茶是事前預約制，可以用TableCheck線上訂位（有繁體中文介面）或打下午茶專線03-3211-5370。聖代只接受線上預約，而且每人都要點聖代套餐。只喝咖啡、只訂座位不能預約，一組最多4人。",
  },
  {
    q: "可以坐多久？",
    a: "一般喫茶和聖代是90分鐘制，下午茶是從預約時間起2個半小時。下午茶的入場時段是11:00・11:30・14:00・14:30・17:00・17:30。",
  },
  {
    q: "有服裝規定嗎？",
    a: "服裝規定是Smart Casual。男性無袖上衣（背心等）、海灘拖鞋、拖鞋型涼鞋、洞洞鞋等不行，太輕便的打扮可能會被婉拒入場。",
  },
  {
    q: "從哪一站去最方便？",
    a: "東京Metro・都營地下鐵「大手町站」C13b出口地下通道直結；JR東京站丸之內北口步行約8分鐘，也可以走地下通道。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const relatedLinks = [
  { href: "/ginza-cafe", label: "☕ 銀座咖啡廳推薦", desc: "百貨與精品之間的甜點時間" },
  { href: "/roppongi-cafe", label: "☕ 六本木咖啡廳推薦", desc: "美術館行程中途的一站" },
  { href: "/conrad-osaka", label: "🏨 大阪康萊德飯店", desc: "高樓層飯店的自助餐與景色" },
];

const parfaitPhotos = ["/palace-lounge/palace-1.jpg", "/palace-lounge/palace-2.jpg", "/palace-lounge/palace-3.jpg"];
const parfaitAlts = [
  "THE PALACE LOUNGE 麝香葡萄聖代",
  "THE PALACE LOUNGE 麝香葡萄聖代 白天鵝造型餅乾",
  "東京皇宮飯店 大廳的花藝",
];
const hotelPhotos = ["/palace-lounge/palace-4.jpg", "/palace-lounge/palace-5.jpg"];
const hotelAlts = ["東京皇宮飯店 PALACE HOTEL TOKYO 外牆標誌", "東京皇宮飯店 1樓大廳與窗外綠意"];

export default function PalaceLoungePage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">THE PALACE LOUNGE</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 飯店咖啡廳</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・大手町</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際品嚐</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          THE PALACE LOUNGE｜<br />東京皇宮飯店的季節聖代與下午茶🍇
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-11-19</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">大手町站直結的飯店大廳酒廊</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>THE PALACE LOUNGE</strong>是<strong>東京皇宮飯店（Palace Hotel Tokyo／香港多稱東京皇宮酒店）</strong>1樓的大廳酒廊🏨 位在皇居旁的丸之內1-1-1，地下鐵<strong>大手町站C13b出口直結</strong>，下雨天也不用撐傘。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這裡最有名的是<strong>每一季換一款的水果聖代</strong>和<strong>下午茶「Stones」</strong>。我們吃的是秋季限定的<strong>麝香葡萄聖代</strong>——一整碗大顆的晴王麝香葡萄，上面停著一隻白天鵝造型的餅乾🦢 想在東京找一個安靜、有質感的地方慶生或休息，這裡很適合✨
          </p>
        </section>

        <PrepBannerCompact />

        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">THE PALACE LOUNGE 季節聖代與下午茶</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {parfaitPhotos.map((src, i) => (
              <div key={src} className="relative bg-stone-100" style={photoStyle(src)}>
                <Image
                  src={src}
                  alt={parfaitAlts[i]}
                  fill
                  sizes="(max-width: 768px) 33vw, 300px"
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
                <h3 className="text-base font-black text-stone-800">THE PALACE LOUNGE</h3>
                <span className="text-xs text-stone-400">Palace Hotel Tokyo 1F・Lobby Lounge</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              大廳酒廊共<strong>76席</strong>，有暖爐和書架，大片窗外是滿滿的綠意。白天是聖代和下午茶，晚上<strong>20:00・21:00・22:00各有40分鐘的鋼琴現場演奏</strong>（週日〜週三獨奏、週四〜週六三重奏），不另收音樂費。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                聖代是<strong>每一季只出一款</strong>，秋天是麝香葡萄、冬天到春天是草莓，來的季節不同、吃到的就不同🍓 麝香葡萄聖代裡有<strong>像水面一樣的果凍</strong>和<strong>白天鵝造型的貓舌餅</strong>，端上桌就很好拍📸 我們那天的盤子上還寫了「Happy Birthday」的祝福字。從東京站走地下通道就到，排在行程的開頭或結尾都方便。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍇 季節限定聖代", "🫖 下午茶Stones", "🚇 大手町站直結", "🎹 晚上鋼琴演奏", "📱 TableCheck訂位", "👔 Smart Casual"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 聖代 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍨 季節聖代（含稅・另收15%服務費）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>麝香葡萄聖代</strong>：¥6,000／附咖啡或紅茶¥7,500 — <strong>2026年9月1日〜11月30日</strong>。大顆晴王麝香葡萄、水面般的果凍、白天鵝貓舌餅</li>
                <li><strong>3種草莓聖代</strong>：¥5,000／附飲料¥6,500 — 2026年12月1日〜2027年4月30日</li>
                <li><strong>3種草莓聖代 香檳套餐</strong>：¥10,000</li>
                <li><strong>栗子香緹（全年）</strong>：¥1,500／附飲料¥3,000</li>
                <li><strong>越後姬草莓變奏（每日限量20份）</strong>：¥1,800／附飲料¥3,300</li>
              </ul>
              <p className="text-xs text-stone-500 mt-2">聖代只接受線上預約，每人都要點聖代套餐，90分鐘制。</p>
            </div>

            {/* 下午茶 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🫖 下午茶「Stones」（含稅・另收15%服務費）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>價格</strong>：¥9,000／附一杯香檳¥12,000</li>
                <li><strong>器皿</strong>：用輪島塗漆器「Stones」盛裝（漆藝家赤木明登的作品）</li>
                <li><strong>秋季菜單（〜11月30日）</strong>：先來一碗抹茶，再上蘋果慕斯、洋梨黑醋栗蛋糕、葡萄蛋白霜等甜點，地瓜濃湯、晴王麝香葡萄配起司等鹹點，以及抹茶柳橙司康</li>
                <li><strong>冬季菜單</strong>：2026年12月1日〜2027年2月28日，價格相同，內容官網陸續公布</li>
                <li><strong>聖誕版</strong>：2026年12月19日〜25日，¥10,000／附香檳¥13,000</li>
                <li><strong>入場時段</strong>：11:00・11:30・14:00・14:30・17:00・17:30，可坐2個半小時</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都千代田區丸之內1-1-1 東京皇宮飯店1樓</p>
              <MapButton q="パレスホテル東京 ザ パレス ラウンジ" />
              <p className="text-xs text-stone-600 ib ib-train">大手町站C13b出口地下通道直結／JR東京站丸之內北口步行約8分鐘</p>
              <p className="text-xs text-stone-600 ib ib-clock">11:00〜23:30 L.O.（24:00打烊）</p>
              <p className="text-xs text-stone-600 ib ib-yen">聖代¥5,000〜6,000、下午茶¥9,000起（含稅，另收15%服務費）</p>
              <p className="text-xs text-stone-600">📅 訂位：TableCheck線上（有繁體中文）／下午茶專線03-3211-5370</p>
              <p className="text-xs text-stone-600">👔 服裝：Smart Casual（背心、海灘拖鞋等不行）</p>
              <p className="text-xs text-stone-600">⏱️ 時間：喫茶・聖代90分鐘／下午茶2個半小時</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                麝香葡萄聖代只到<strong>2026年11月30日</strong>，12月1日起換成草莓聖代。聖代和下午茶都要先訂位，<strong>只訂座位、只喝咖啡不能預約</strong>，一組最多4人
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <a href="https://www.palacehoteltokyo.com/restaurant/the-palace-lounge/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🔗 官方網站
              </a>
              <a href="https://www.tablecheck.com/ja/shops/palacehoteltokyo-the-palace-lounge/reserve" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                📅 TableCheck線上訂位
              </a>
            </div>
          </div>
        </section>

        {/* 飯店 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {hotelPhotos.map((src, i) => (
              <div key={src} className="relative bg-stone-100" style={photoStyle(src)}>
                <Image src={src} alt={hotelAlts[i]} fill sizes="(max-width: 768px) 50vw, 450px" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="p-5">
            <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">怎麼去：從東京站走地下通道</h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              東京皇宮飯店的地下1樓和地下鐵<strong>大手町站</strong>直接相連（C13b出口），千代田線・半藏門線・丸之內線・東西線・都營三田線都能到。從<strong>JR東京站丸之內北口</strong>走路約8分鐘，也可以走地下通道。進飯店後到1樓大廳，酒廊就在大廳旁邊。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-hatena">常見問題 FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-sm font-bold text-stone-700 mb-1">❓ {f.q}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">旅遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 聖代和下午茶都<strong>先用TableCheck訂位</strong>，介面可切換繁體中文</li>
            <li>✅ 價格含稅但<strong>另收15%服務費</strong>，預算記得多抓一點</li>
            <li>✅ 穿著<strong>Smart Casual</strong>，避免背心和拖鞋</li>
            <li>✅ 想吃季節聖代，先確認<strong>當季是哪一款</strong>（秋：麝香葡萄／冬〜春：草莓）</li>
            <li>✅ 晚上來可以聽<strong>鋼琴現場演奏</strong>，不另收音樂費</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            一季只出一款的水果聖代、漆器盛裝的下午茶，加上車站直結的方便——THE PALACE LOUNGE是東京飯店甜點的好選擇🍇<br />
            慶生或旅程最後一天想好好犒賞自己，就排進行程吧！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「白天鵝停在葡萄山上，捨不得吃第一口🦢」</p>
            </div>
          </div>
        </div>

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

        <RelatedArticles slug="palace-lounge" exclude={["/ginza-cafe", "/roppongi-cafe", "/conrad-osaka"]} />

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
