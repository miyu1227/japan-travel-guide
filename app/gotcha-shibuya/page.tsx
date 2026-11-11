import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/gotcha-shibuya";
const OG_IMAGE = "/gotcha-shibuya/gotcha-1.jpg";

export const metadata: Metadata = {
  title: "Gotcha 澀谷｜澳洲來的珍奶用台灣茶葉 黑糖珍珠鮮奶✅實喝",
  description:
    "Gotcha澀谷店：澀谷站約200m、宇田川町。澳洲人氣珍珠奶茶品牌，茶葉來自阿里山・梨山・日月潭。黑糖珍珠鮮奶、甜度冰塊各4段可選，可刷卡・電子支付。",
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
    title: "Gotcha 澀谷｜澳洲來的珍珠奶茶，用的是台灣茶葉",
    description: "澀谷站走3分鐘。黑糖珍珠鮮奶、阿里山烏龍、甜度冰塊自己選🧋",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Gotcha 澀谷店門口，手上拿著印有戴帽子男孩插畫的茶飲" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gotcha 澀谷｜澳洲來的珍珠奶茶，用的是台灣茶葉",
    description: "澀谷站走3分鐘的珍奶店🧋",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Gotcha 澀谷｜澳洲來的珍珠奶茶用台灣茶葉・黑糖珍珠鮮奶【實際造訪】",
  description: "Gotcha（ゴッチャ）澀谷店：澳洲發的珍珠奶茶品牌，茶葉來自台灣。菜單、甜度與冰塊的點法、付款方式、交通。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-11-11T00:00:00+09:00",
  dateModified: "2026-11-11T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "澀谷珍珠奶茶｜Gotcha 澀谷", item: PAGE_URL },
  ],
};

const P = "/gotcha-shibuya";

const photos = [
  { src: `${P}/gotcha-1.jpg`, alt: "Gotcha 澀谷店門口，手上拿著印有戴帽子男孩插畫的茶飲，後面是「オーストラリア発 タピオカミルクティー」的招牌" },
  { src: `${P}/gotcha-2.jpg`, alt: "Gotcha 的黑糖珍珠鮮奶與一杯淡黃色的茶飲，杯子上都印著戴帽子男孩的插畫" },
  { src: `${P}/gotcha-3.jpg`, alt: "Gotcha 澀谷店的招牌，寫著 Premium Bubble Tea from Australia 與 オーストラリア発 タピオカミルクティー" },
  { src: `${P}/gotcha-4.jpg`, alt: "晚上的 Gotcha 澀谷店外觀，上方是黑糖珍珠奶茶的大型看板「自社農園の茶葉 茶畑からカップへ」" },
];

// 公式サイトのメニュー（価格は公式サイトに記載なし）
const menuGroups = [
  { title: "🍵 台灣嚴選茶（Taiwan Premium Tea）", items: "梨山高山茶・阿里山烏龍茶・蜜桃烏龍茶・桂花烏龍茶" },
  { title: "🧋 台灣嚴選奶茶（Taiwan Premium Milk Tea）", items: "阿里山奶茶・茉莉奶茶・梨山高山茶奶茶・日月潭紅茶奶茶・蜜桃烏龍奶茶・桂花烏龍奶茶" },
  { title: "🍑 水果茶（Fruit Tea）", items: "芒果冰沙・蜜桃冰沙・蜜桃茉莉茶・西瓜百香果茉莉茶・招牌水果茶・養樂多綠茶" },
  { title: "🥛 鮮奶系列（Milk Series）", items: "黑糖珍珠鮮奶・芋頭鮮奶・草莓鮮奶・哈密瓜鮮奶・荔枝奶茶等" },
  { title: "🍵 抹茶（Matcha）", items: "抹茶鹹奶蓋・抹茶冰沙・抹茶布蕾・黑糖抹茶・抹茶芒果・抹茶拿鐵（宇治抹茶粉）" },
];

const faqItems = [
  {
    q: "Gotcha是什麼？是台灣的品牌嗎？",
    a: "不是台灣品牌，是2017年在澳洲墨爾本誕生的珍珠奶茶（日文叫タピオカミルクティー／tapioca milk tea）品牌，日文念「ゴッチャ（Gotcha）」。官網寫在全世界有200間以上、12個以上國家展店。有趣的是茶葉來自台灣的茶園，菜單上就有阿里山烏龍、梨山高山茶、日月潭紅茶。",
  },
  {
    q: "Gotcha澀谷店在哪裡？從澀谷站要走多久？",
    a: "東京都澀谷區宇田川町23-11 大希宇田川町ビル1樓。食べログ寫的是距離澀谷站約203m，走路約3分鐘。官網上的日本店舖目前只有這一間。",
  },
  {
    q: "甜度和冰塊可以調整嗎？怎麼點？",
    a: "可以，跟台灣的手搖飲一樣。冰塊有75%・50%・25%・去冰（No Ice）4段；甜度有Standard（正常）・Less（少糖）・Little（微糖）・No Added（無糖）4段。不會講日文的話，直接指著菜單上的英文就好。",
  },
  {
    q: "Gotcha的價錢多少？",
    a: "官網沒有寫價錢。食べログ的口コミ預算是¥999以下，一杯大約抓¥1,000以內。實際價格以店頭菜單為準。",
  },
  {
    q: "可以刷卡嗎？可以用電子支付嗎？",
    a: "食べログ上寫可以刷卡、可以用電子錢包（電子マネー）和QR碼支付。",
  },
  {
    q: "有中文菜單嗎？有什麼推薦的？",
    a: "官網只有日文和英文，沒有寫到中文菜單；不過品項都有英文名，看得懂。官網推薦的是黑糖珍珠鮮奶（Black Sugar Pearl Fresh Milk）——珍珠用黑糖的獨家配方、每天在店裡煮；鮮奶也可以換成豆奶或燕麥奶。",
  },
];

const relatedLinks = [
  { href: "/shibuya-cafe", label: "☕ 澀谷咖啡廳推薦2選｜RECOCO＆歐舒丹咖啡廳", desc: "同樣在澀谷，想坐下來慢慢喝就去這兩間" },
  { href: "/shibuya-gohan", label: "🍲 Soup Stock Tokyo 澀谷｜站直結的湯專賣店", desc: "喝珍奶前先喝碗湯" },
  { href: "/shibuya-yakiniku", label: "🥩 澀谷燒肉｜ホルモン千葉 內臟燒肉名店", desc: "晚上在澀谷吃燒肉，飯後再來一杯" },
];

export default function GotchaShibuyaPage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">澀谷珍珠奶茶｜Gotcha 澀谷</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">🧋 珍珠奶茶（手搖飲）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・澀谷</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          Gotcha 澀谷<br />澳洲來的珍珠奶茶，用的是台灣茶葉🧋
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-11-11</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">在澀谷喝到「阿里山烏龍」的珍奶店</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            在日本，珍珠奶茶叫做<strong>「タピオカ（tapioca）」</strong>。澀谷宇田川町有一間招牌寫著<strong>「オーストラリア発 タピオカミルクティー（澳洲來的珍珠奶茶）」</strong>的店——<strong>Gotcha（ゴッチャ）</strong>🧋
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            2017年在澳洲墨爾本創立，官網寫全世界有<strong>200間以上、12個以上國家</strong>。但打開菜單會發現，茶葉來自<strong>台灣的茶園</strong>：<strong>阿里山烏龍、梨山高山茶、日月潭紅茶</strong>，水果糖漿也是從台灣進的。在東京喝到用台灣茶做的澳洲珍奶，這篇介紹（推介）實際去喝的感覺和點法。
          </p>
        </section>

        <PrepBannerCompact />

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">澀谷珍珠奶茶推薦（珍奶推介）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6 card-split">
          {/* 4枚を2枚＋2枚の2段に分けて大きく見せる */}
          <div className="flex flex-col gap-[2px]">
            {[photos.slice(0, 2), photos.slice(2)].map((row, r) => (
              <div key={r} className="photo-strip">
                {row.map((photo, i) => (
                  <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="50vw"
                      className="object-cover"
                      {...(r === 0 && i === 0 ? { priority: true } : {})}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">Gotcha 澀谷</h3>
                <span className="text-xs text-stone-400">ゴッチャ 渋谷／Gotcha Shibuya</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              晚上的宇田川町，很遠就能看到發光的<strong>「GOTCHA」招牌</strong>和上方的大型看板——一杯黑糖珍珠奶茶，旁邊寫著「<strong>自社農園の茶葉 茶畑からカップへ</strong>（自家茶園的茶葉，從茶園到杯子）」。白天看也很顯眼，直接拿來當集合地點也可以✨
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              杯子上印著<strong>戴草帽、背著茶簍的男孩插畫</strong>，拿在手上拍照很可愛📸 珍珠是用<strong>黑糖的獨家配方、每天在店裡煮</strong>（官網）。甜度和冰塊都可以選，點法跟台灣的手搖飲差不多。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 實際點的（實喝）</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                點了<strong>黑糖珍珠鮮奶</strong>和一杯<strong>不加奶的茶</strong>。黑糖珍珠鮮奶的杯壁上是一條一條的<strong>黑糖虎紋</strong>，底部沉著滿滿的黑糖珍珠🧋 另一杯是淡黃綠色、透明的茶，用的是比較小的杯子，兩杯並在一起拍剛好。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🧋 黑糖珍珠鮮奶", "🇦🇺 澳洲發", "🇹🇼 台灣茶葉", "🧊 甜度・冰塊4段", "💳 可刷卡・電子支付", "🚃 澀谷站約3分"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* メニュー */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">📋 菜單（官網）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                {menuGroups.map((g) => (
                  <li key={g.title}>
                    <strong>{g.title}</strong>
                    <br />
                    <span>{g.items}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-bold text-amber-700 mt-3 mb-1">🧊 甜度・冰塊怎麼點</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                冰塊：<strong>75%・50%・25%・去冰（No Ice）</strong><br />
                甜度：<strong>Standard（正常）・Less（少糖）・Little（微糖）・No Added（無糖）</strong><br />
                加料：珍珠（招牌・白珍珠・芒果寒天）、爆爆珠、蘆薈、仙草、布丁、起司奶蓋、Oreo奶蓋等
              </p>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
                ※ 官網沒有寫價錢，食べログ的口コミ預算是¥999以下。價格以店頭菜單為準。
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都澀谷區宇田川町23-11 大希宇田川町ビル1樓</p>
              <p className="text-xs text-stone-600 ib ib-train">澀谷站 約203m・徒步約3分（食べログ）</p>
              <p className="text-xs text-stone-600 ib ib-clock">營業時間請看官方Instagram（@gotcha_japan）或Google地圖</p>
              <p className="text-xs text-stone-600 ib ib-yen">一杯約¥1,000以內（食べログ口コミ預算）</p>
              <p className="text-xs text-stone-600">💳 可刷卡・電子錢包・QR碼支付（食べログ）</p>
              <p className="text-xs text-stone-600">📅 不用預約（不接受預約）</p>
              <p className="text-xs text-stone-600">🌐 官網是日文・英文，品項都有英文名</p>
              <p className="text-xs text-stone-600">⏱️ 外帶的話約10分鐘</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                台灣人想喝「家鄉味」的話，點<strong>阿里山烏龍茶</strong>或<strong>日月潭紅茶奶茶</strong>；第一次來就點官網推薦的<strong>黑糖珍珠鮮奶</strong>。鮮奶可以換成<strong>豆奶或燕麥奶</strong>。
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href="https://www.gotcha.co.jp/ja/?scene=1004" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 Gotcha Japan 官方網站</a>
              <a href="https://gotcha.co.jp/ja/pages/our-stores?scene=1004" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">📍 店舖資訊（官方）</a>
              <a href="https://www.instagram.com/gotcha_japan/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">📸 Instagram</a>
              <a href="https://www.google.com/maps/search/?api=1&query=Gotcha+%E6%B8%8B%E8%B0%B7%E5%8C%BA%E5%AE%87%E7%94%B0%E5%B7%9D%E7%94%BA23-11" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🗺️ Google 地圖</a>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8 mt-2">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">澀谷喝珍奶小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 日文的珍珠奶茶是<strong>「タピオカ」</strong>，找店的時候用這個字搜尋</li>
            <li>✅ 從澀谷站走<strong>約3分鐘</strong>，逛完中心街・宇田川町順路帶一杯</li>
            <li>✅ 甜度選<strong>Less（少糖）</strong>或<strong>Little（微糖）</strong>，跟台灣的半糖・微糖差不多的感覺</li>
            <li>✅ 可以<strong>刷卡・電子支付</strong>，不用特地準備零錢💳</li>
            <li>✅ 晚上招牌會亮起來，<strong>拿著杯子在店門口拍</strong>最好看📸</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            澳洲來的品牌、台灣的茶葉、東京澀谷的街角✨<br />
            一杯珍奶就繞了半個地球。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「在澀谷喝到阿里山烏龍，有一種回家的感覺🧋」</p>
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

        <RelatedArticles slug="gotcha-shibuya" exclude={["/shibuya-cafe", "/shibuya-gohan", "/shibuya-yakiniku"]} />

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
