import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/nogizaka-cafe";
const OG_IMAGE = "/nogizaka-cafe/west-1.jpg";

export const metadata: Metadata = {
  title: "銀座WEST青山花園｜乃木坂站3分的厚鬆餅咖啡廳✅實吃",
  description:
    "乃木坂站5號出口步行3分，銀座WEST青山花園店。直徑18cm厚鬆餅附飲料¥2,310、咖啡紅茶可續杯，庭園綠意與露臺座位，不接受訂位。",
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
    title: "銀座WEST青山花園｜乃木坂站3分的厚鬆餅咖啡廳",
    description: "1947年創業的銀座WEST，只有青山花園店吃得到的厚鬆餅🥞 庭園綠意、咖啡紅茶可續杯",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1600, height: 1067, alt: "銀座WEST青山花園店 厚鬆餅與紅茶" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "銀座WEST青山花園｜乃木坂站3分的厚鬆餅咖啡廳",
    description: "厚鬆餅附飲料¥2,310・咖啡紅茶可續杯・乃木坂站5號出口3分🥞",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "銀座WEST青山花園店｜乃木坂站3分的厚鬆餅咖啡廳【實際造訪】",
  description: "銀座WEST青山花園店的厚鬆餅、續杯規則、價格、營業時間與交通整理。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-11-20T00:00:00+09:00",
  dateModified: "2026-11-20T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "東京咖啡廳推薦", item: "https://www.japantrippicks.com/tokyo-cafe" },
    { "@type": "ListItem", position: 3, name: "銀座WEST青山花園店", item: PAGE_URL },
  ],
};

const faqs = [
  {
    q: "銀座WEST青山花園店是什麼地方？",
    a: "銀座WEST（Ginza West／銀座ウエスト）是1947年在銀座創業的老字號洋菓子店，以「葉子派」聞名。青山花園店（Aoyama Garden）是它在南青山的店，2008年秋天改建重新開幕，有室內50席、露臺16席，大片窗戶看出去是庭園的綠意，一樓是販售伴手禮的賣店。",
  },
  {
    q: "銀座WEST的鬆餅（熱香餅）在哪裡吃得到？",
    a: "官網寫明鬆餅（熱香餅／hotcake）是青山花園店和橫濱的Bay Cafe Yokohama店限定的菜單，銀座本店吃不到。直徑約18cm、厚約2〜3cm，點餐後才用平底鍋慢慢煎，附奶油和楓糖漿。",
  },
  {
    q: "鬆餅的價錢多少？",
    a: "鬆餅（1片）附飲料¥2,310。可以加點冰淇淋¥550、巧克力奶油¥220、鮮奶油¥165。紅茶單點¥1,320（大吉嶺・伯爵・祁門三選一）。價格以2026年9月的取材資料為準，官網公告2026年9月1日起部分商品調價，請以店內菜單為準。",
  },
  {
    q: "咖啡和紅茶可以續杯嗎？",
    a: "可以。咖啡或紅茶等飲料，限第一次點的同一種類可以續杯。",
  },
  {
    q: "可以訂位嗎？要排多久？",
    a: "不行，銀座WEST的喫茶全店都不接受訂位。開店時就可能客滿，客滿後在店門口的機器登記，快輪到時會用簡訊通知。比較不擠的時段是傍晚。鬆餅是現煎，客滿時上桌可能要20分鐘以上。",
  },
  {
    q: "從哪一站去最方便？",
    a: "東京Metro千代田線「乃木坂站」5號出口出來右轉，步行約3分鐘，在外苑東通沿路上，被樹木圍繞的咖啡色和白色建築就是。",
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
  { href: "/roppongi-cafe", label: "☕ 六本木咖啡廳推薦", desc: "國立新美術館・六本木之丘中途的一站" },
  { href: "/museum", label: "🎨 東京美術館推薦", desc: "國立新美術館就在乃木坂站旁" },
  { href: "/meiji-jingu", label: "⛩️ 東京神社巡禮", desc: "乃木坂站旁的乃木神社也在這篇" },
];

const westPhotos = ["/nogizaka-cafe/west-1.jpg", "/nogizaka-cafe/west-2.jpg", "/nogizaka-cafe/west-3.jpg"];
const westAlts = [
  "銀座WEST青山花園店 厚鬆餅與紅茶",
  "銀座WEST青山花園店 鬆餅 奶油",
  "銀座WEST青山花園店 鬆餅 淋上楓糖漿的切面",
];

export default function NogizakaCafePage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">銀座WEST青山花園店</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・乃木坂</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際品嚐</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          銀座WEST青山花園店｜<br />乃木坂站3分，只有這裡吃得到的厚鬆餅🥞
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-11-20</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">乃木坂咖啡廳推薦（推介）：庭園旁的老字號洋菓子店</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>銀座WEST（Ginza West）</strong>是<strong>1947年</strong>在銀座創業的老字號洋菓子店，台灣・香港朋友買伴手禮（手信）常挑的<strong>葉子派</strong>就是它家的招牌🍃 而它在南青山的<strong>青山花園店（Aoyama Garden）</strong>，從地下鐵<strong>乃木坂站5號出口走路約3分鐘</strong>就到。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這家店最有名的是<strong>厚鬆餅（香港叫熱香餅／hotcake）</strong>——官網寫明只有青山花園店和橫濱店吃得到，銀座本店沒有。直徑約18cm、厚2〜3cm，點了才現煎，搭配可以續杯的紅茶，坐在窗邊看著庭園的綠意慢慢吃，是逛完國立新美術館或六本木之後很適合的休息點✨
          </p>
        </section>

        <PrepBannerCompact />

        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">銀座WEST青山花園店的鬆餅與喫茶</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {westPhotos.map((src, i) => (
              <div key={src} className="relative bg-stone-100" style={photoStyle(src)}>
                <Image
                  src={src}
                  alt={westAlts[i]}
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
                <h3 className="text-base font-black text-stone-800">銀座WEST 青山花園店</h3>
                <span className="text-xs text-stone-400">Ginza West Aoyama Garden</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              1967年開業的舊青山店在<strong>2008年秋天改建重新開幕</strong>，面積變成以前的約5倍，有製菓工房、庭園露臺、室內座位和賣店。店內是白色和咖啡色的沉穩色調，桌子之間留得很寬，裡面有書架，安靜地放著古典音樂🎻
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                鬆餅是<strong>銀座WEST的限定菜單</strong>，來東京想吃點「這裡才有」的東西，這一盤很剛好🥞 表面煎得均勻漂亮，放上一塊奶油、淋上楓糖漿，切開裡面是鬆軟的蛋糕感。<strong>咖啡和紅茶可以續杯</strong>（限同一種類），想坐久一點、整理行程也不會有壓力。喝完還能在一樓賣店<strong>直接買葉子派當伴手禮</strong>，一趟就搞定。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🥞 限定厚鬆餅", "☕ 咖啡紅茶可續杯", "🌳 庭園綠意", "🐶 露臺可帶狗", "🚭 全面禁菸", "🍃 葉子派伴手禮"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 喫茶菜單 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🥞 喫茶菜單（2026年9月取材時的價格）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>鬆餅（1片）附飲料</strong>：¥2,310 — 附奶油和楓糖漿，直徑約18cm</li>
                <li><strong>鬆餅加點</strong>：冰淇淋¥550／巧克力奶油¥220／鮮奶油¥165</li>
                <li><strong>紅茶</strong>：¥1,320（大吉嶺・伯爵・祁門三選一）</li>
                <li><strong>蛋糕套餐（附飲料）</strong>：¥1,760（馬賽克蛋糕單點¥594）</li>
                <li><strong>熱舒芙蕾</strong>：¥1,430（11:00〜18:00供應）</li>
                <li><strong>半半泡芙</strong>：¥605（喫茶限定）／<strong>熔岩巧克力</strong>：¥1,430</li>
                <li><strong>番茄莫札瑞拉起司歐姆蛋</strong>：¥2,090</li>
              </ul>
              <p className="text-xs text-stone-500 mt-2">蛋糕是店員把當天的樣品放在托盤上端到座位讓你挑。官網公告2026年9月1日起部分商品調價，實際價格以店內菜單為準。</p>
            </div>

            {/* 賣店 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍃 一樓賣店的伴手禮（手信）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>葉子派8片入</strong>：¥1,620 — 單片包裝，賞味期限約1個月</li>
                <li><strong>綜合餅乾8袋入</strong>：¥2,160 — 葉子派、維多利亞、奶油餅乾等7種</li>
                <li><strong>禮盒14袋入</strong>：¥1,944 — 葉子派6片＋起司棒8條</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都港區南青山1-22-10</p>
              <p className="text-xs text-stone-600 ib ib-train">東京Metro千代田線「乃木坂站」5號出口右轉，步行約3分鐘（外苑東通沿路）</p>
              <p className="text-xs text-stone-600 ib ib-clock">11:00〜19:00（賣店・喫茶相同）／無休</p>
              <p className="text-xs text-stone-600 ib ib-yen">鬆餅附飲料¥2,310、蛋糕套餐¥1,760</p>
              <p className="text-xs text-stone-600">📅 訂位：不接受訂位（客滿時在店門口機器登記，簡訊通知）</p>
              <p className="text-xs text-stone-600">🪑 座位：室內50席・露臺16席，全面禁菸</p>
              <p className="text-xs text-stone-600">🅿️ 專用停車場8台・店內無障礙設計</p>
              <p className="text-xs text-stone-600">📞 03-3403-1818</p>
              <p className="text-xs text-stone-600">
                🗺️ <a href="https://www.google.com/maps/search/?api=1&query=%E9%8A%80%E5%BA%A7%E3%82%A6%E3%82%A8%E3%82%B9%E3%83%88+%E9%9D%92%E5%B1%B1%E3%82%AC%E3%83%BC%E3%83%87%E3%83%B3" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2">在Google地圖打開</a>
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                開店時就可能客滿，<strong>傍晚比較好進</strong>。鬆餅是點了才煎，客滿時要等<strong>20分鐘以上</strong>，時間不夠的話先點好再慢慢等。2025年8月起打烊時間提早到<strong>19:00</strong>，別太晚去
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <a href="https://www.ginza-west.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🔗 銀座WEST官方網站
              </a>
            </div>
          </div>
        </section>

        {/* 庭園 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            <div className="relative bg-stone-100" style={photoStyle("/nogizaka-cafe/west-4.jpg")}>
              <Image src="/nogizaka-cafe/west-4.jpg" alt="銀座WEST青山花園店 窗外的庭園綠意" fill sizes="(max-width: 768px) 100vw, 450px" className="object-cover" />
            </div>
          </div>
          <div className="p-5">
            <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">窗外一整片綠：庭園露臺與暖爐</h2>
            <p className="text-sm text-stone-600 leading-relaxed mb-2">
              店被樹木圍繞，從大片窗戶看出去是楓樹和綠籬，完全感覺不到旁邊就是大馬路🌳 露臺座位會依天氣把簾子打開，冷的季節有<strong>顆粒燃料暖爐</strong>；露臺<strong>可以帶狗</strong>（墊子等需要自備）。
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              <strong>怎麼去：</strong>千代田線<strong>乃木坂站5號出口</strong>出來往右走約3分鐘。乃木坂站也直通<strong>國立新美術館</strong>，附近還有<strong>乃木神社</strong>，排成「美術館→銀座WEST喝茶→乃木神社」半天剛好。
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
            <li>✅ 鬆餅是<strong>青山花園店・橫濱店限定</strong>，銀座本店吃不到</li>
            <li>✅ <strong>不能訂位</strong>，想少排隊就<strong>傍晚</strong>去</li>
            <li>✅ 咖啡・紅茶可以<strong>續杯（限同一種類）</strong>，第一杯想清楚再點</li>
            <li>✅ 營業到<strong>19:00</strong>，晚上行程前要早點來</li>
            <li>✅ 回程在一樓賣店買<strong>葉子派</strong>，單片包裝、賞味約1個月，帶回台灣・香港剛好</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            現煎的厚鬆餅、可以續杯的紅茶、窗外一整片綠——銀座WEST青山花園店是乃木坂・六本木一帶想好好坐下來的好地方🥞<br />
            逛完美術館腳痠了，就來這裡吃一片限定鬆餅吧！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「圓圓的鬆餅配上方方的奶油，紅茶續了兩杯☕」</p>
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

        <RelatedArticles slug="nogizaka-cafe" exclude={["/roppongi-cafe", "/museum", "/meiji-jingu"]} />

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
