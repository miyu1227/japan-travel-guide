import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";

const PAGE_URL = "https://www.japantrippicks.com/takeout-cake";
const OG_IMAGE = "/takeout-cake/cover.jpg";

export const metadata: Metadata = {
  title: "東京外帶蛋糕｜PARIYA澀谷・杯型鮮奶油蛋糕✅實購",
  description:
    "青山發跡的人氣熟食店「PARIYA」招牌杯型鮮奶油蛋糕，草莓經典款¥1,058起、還有季節限定水蜜桃口味。澀谷SCRAMBLE SQUARE B2直達車站，附價格・營業時間。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "東京外帶蛋糕推薦｜PARIYA 澀谷SCRAMBLE SQUARE店",
    description: "IG爆紅的杯型鮮奶油蛋糕！澀谷車站直結B2，帶回飯店當宵夜的最強選擇🍰",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "東京外帶蛋糕推薦・PARIYA的草莓與水蜜桃鮮奶油蛋糕" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京外帶蛋糕推薦｜PARIYA 澀谷SCRAMBLE SQUARE店",
    description: "IG爆紅的杯型鮮奶油蛋糕！澀谷車站直結B2🍰",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京外帶蛋糕推薦｜PARIYA 澀谷SCRAMBLE SQUARE店・IG爆紅杯型鮮奶油蛋糕【實際購買】",
  description:
    "東京外帶蛋糕推薦：青山發跡的熟食名店PARIYA的招牌杯型鮮奶油蛋糕。澀谷SCRAMBLE SQUARE B2、價格、營業時間與購買重點。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-08-18T00:00:00+09:00",
  dateModified: "2026-08-18T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "東京外帶蛋糕推薦", item: PAGE_URL },
  ],
};

const relatedLinks = [
  { href: "/tokyo-cookies", label: "🍪 東京伴手禮推薦｜高級手工餅乾・必買甜點", desc: "奧地利認證大師的餅乾禮盒・需預約" },
  { href: "/shibuya-cafe", label: "☕ 澀谷咖啡廳推薦｜東京必去人氣咖啡散步", desc: "逛完澀谷順路坐下來休息" },
  { href: "/daikanyama-cafe", label: "☕ 代官山咖啡廳推薦3選｜義式烘焙・高級甜點・法式可頌", desc: "PRINCI・DOLCE TACUBO・Doré" },
];

const faqItems = [
  { q: "幾點去買比較有貨？", a: "人氣口味傍晚就可能賣完。想吃季節限定的話，建議中午〜下午去。營業時間10:00〜21:00。" },
  { q: "可以帶回台灣・香港嗎？", a: "不行。鮮奶油蛋糕無法上飛機，賞味期限多半是當日。想帶回國請改買餅乾・費南雪等常溫燒菓子。" },
  { q: "要保冷劑該怎麼說？", a: "結帳時說「保冷剤（ほれいざい）ください」就可以。店員常會問「お持ち歩き何分ですか？」＝要拿多久才會吃。" },
  { q: "怎麼去？", a: "澀谷SCRAMBLE SQUARE B2F，與澀谷駅站內地下直接連通，下雨天也不會淋到。" },
];

export default function TakeoutCakePage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">東京外帶蛋糕推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-orange-100 text-orange-700 border border-orange-300 text-xs font-semibold px-3 py-1 rounded-full">🍰 甜點・伴手禮</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・澀谷</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際購買</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京外帶蛋糕推薦｜PARIYA<br />IG爆紅的杯型鮮奶油蛋糕🍰
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-08-18</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">在日本，「外帶蛋糕回飯店」是最被低估的旅行享受</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            東京的甜點店幾乎都是<strong>排隊、限時、要等位</strong>，但其實有一個更輕鬆的玩法——<strong>買一個蛋糕帶回飯店</strong>🏨 洗完澡、脫掉走了一整天的鞋子，配一杯便利商店的拿鐵，那一口的幸福感比在店裡排一小時還強。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            日本的蛋糕店也非常懂這件事：<strong>保冷劑幾乎都會附</strong>、盒子做得很挺、鮮奶油也扛得住一小段路程，所以「外帶」在日本是完全成立的選項🍰
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇寫給<strong>行程排太滿、但又想吃到東京好蛋糕</strong>的台灣・香港旅人。第一間要介紹的，是連日本人都會特地繞去買的<strong>「PARIYA」</strong>——澀谷車站地下直達，買完就能上電車那種。<strong>你會知道</strong>：招牌是哪一款、價格帶、幾點去比較不會被賣完，還有帶回飯店要注意什麼。
          </p>
        </section>

        <PrepBannerCompact />

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">東京外帶蛋糕推薦・PARIYA</h2>

        {/* Spot 1: PARIYA */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image
                src="/takeout-cake/pariya-1.jpg"
                alt="PARIYA 澀谷SCRAMBLE SQUARE店 - 草莓與水蜜桃杯型鮮奶油蛋糕"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">PARIYA 澀谷SCRAMBLE SQUARE店</h3>
                <span className="text-xs text-stone-400">パリヤ・帕莉亞</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              <strong>PARIYA</strong> 是1996年從<strong>青山</strong>起家的人氣熟食店（デリカテッセン）🥗 本業是可以自由搭配的健康熟食便當，但真正讓它在日本紅到不行的，其實是<strong>甜點櫃裡那一排杯型鮮奶油蛋糕</strong>——因為外型太上相，在Instagram上爆紅，後來還在日本橋高島屋開了蛋糕專門店「PARIYA SHORTCAKES」🍰
            </p>

            <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-orange-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                招牌是<strong>「草莓經典鮮奶油蛋糕（ストロベリークラシック）」約¥1,058</strong>，另外還有用福岡「あまおう」草莓做的高級版本、以及<strong>會隨季節換的限定口味</strong>——我們夏天去的時候買到了<strong>水蜜桃</strong>，整片新鮮桃子鋪在打得極細的鮮奶油上🍑 蛋糕做成小小的圓柱狀，鮮奶油的甜度非常克制、海綿蛋糕濕潤不乾，是<strong>「吃完不會膩」</strong>的那種日式鮮奶油蛋糕。<strong>結帳時會給木湯匙和紙巾</strong>，所以就算在飯店房間也能直接開吃，不用另外找餐具🥄 最強的是位置：<strong>澀谷SCRAMBLE SQUARE B2、和車站直接相通</strong>，逛完澀谷、要回飯店前順手買一個就好。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍰 IG爆紅杯型蛋糕", "🍓 招牌草莓經典款", "🍑 季節限定口味", "🚉 澀谷車站直結B2", "🥄 附木湯匙・紙巾", "🥗 熟食便當也好買"].map((t) => (
                <span key={t} className="text-xs bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都澀谷區澀谷2-24-12 澀谷SCRAMBLE SQUARE B2F</p>
              <p className="text-xs text-stone-600">🚃 JR・東急・東京METRO「澀谷」駅 直結（站內地下連通）</p>
              <p className="text-xs text-stone-600">⏰ 10:00〜21:00（熟食區 11:00〜21:00）</p>
              <p className="text-xs text-stone-600">💴 鮮奶油蛋糕 ¥1,058〜¥1,200前後／熟食便當 ¥1,632〜（價格以店頭為準）</p>
              <p className="text-xs text-stone-600">📞 03-6450-5405</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                人氣口味<strong>傍晚就可能賣完</strong>，想吃季節限定建議<strong>中午〜下午</strong>去；結帳時可以說「<strong>保冷剤（ほれいざい）ください</strong>」要保冷劑
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                鮮奶油蛋糕<strong>當天吃完最好吃</strong>，不要放到隔天；飯店房間的冰箱通常偏弱，買回去先冰、早點吃掉🧊
              </p>
            </div>

            <a
              href="https://pariya.jp/shop/shibuya_scramble.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">在日本買外帶蛋糕的小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 結帳時店員常會問「<strong>お持ち歩き何分ですか？</strong>（要拿多久）」，回答大概幾分鐘，他們會依時間放<strong>保冷劑</strong>🧊</li>
            <li>✅ 想直接說的話：「<strong>保冷剤をください</strong>」＝請給我保冷劑，「<strong>30分くらいです</strong>」＝大約30分鐘</li>
            <li>✅ 鮮奶油類蛋糕<strong>怕晃</strong>，放在包包最上層、平放著拿；不要塞進後背包😂</li>
            <li>✅ 百貨公司地下（デパ地下）與車站直結的商場，是外帶甜點CP值最高的地方🚉</li>
            <li>✅ 賞味期限多半是<strong>當日</strong>，買回飯店當天吃完最安全</li>
            <li>✅ 日本蛋糕普遍<strong>甜度偏低</strong>，覺得台灣・香港的蛋糕太甜的人會非常喜歡</li>
            <li>✅ 想帶回國的話請改買餅乾・費南雪等常溫燒菓子，鮮奶油蛋糕無法上飛機🍪</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            排隊名店固然厲害，但旅行後半段其實最想要的，是「回房間就能吃到的好東西」🍰<br />
            澀谷逛完順手帶一個PARIYA回飯店——這一小步，會讓那天的行程整個變得完美。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「洗完澡在飯店吃蛋糕，是旅行最幸福的10分鐘🛁🍰」</p>
            </div>
          </div>
        </div>

        <FaqSection items={faqItems} />

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

        <RelatedArticles slug="takeout-cake" exclude={["/daikanyama-cafe", "/shibuya-cafe", "/tokyo-cookies"]} />

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
