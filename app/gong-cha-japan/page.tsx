import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/gong-cha-japan";
const OG_IMAGE = "/gong-cha-japan/gongcha-1.jpg";

export const metadata: Metadata = {
  title: "日本貢茶菜單價格2026｜點法・去冰加價・限定口味✅實訪",
  description:
    "日本貢茶（Gong cha）烏龍奶茶S杯¥450起，甜度4段、去冰要加¥80、配料最多3種各¥90。附11/14店內菜單價格表與日本限定梨＆蘋果。",
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
    title: "日本貢茶菜單價格2026｜點法・去冰加價・限定口味",
    description: "台灣高雄出身的貢茶，在日本已經超過200間。日本的價格、甜度冰塊怎麼選、日本限定口味一次整理。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "日本貢茶的黑糖珍珠奶茶與水果茶，旁邊是蛋塔與甜甜圈的立牌" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "日本貢茶菜單價格2026｜點法・去冰加價・限定口味",
    description: "在日本點貢茶，去冰竟然要加錢🧋",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "日本貢茶菜單價格2026｜點法・去冰加價・限定口味【實際造訪】",
  description: "日本貢茶（Gong cha Japan）的菜單與價格、甜度與冰塊的選法、配料加價、日本限定的梨＆蘋果系列、22歲以下優惠與手機點餐，附2026年11月14日的店內菜單。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-11-17T00:00:00+09:00",
  dateModified: "2026-11-17T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "日本貢茶菜單價格2026", item: PAGE_URL },
  ],
};

const photos = [
  { src: "/gong-cha-japan/gongcha-1.jpg", alt: "日本貢茶的黑糖珍珠奶茶與橘色水果茶放在木桌上，旁邊立著蛋塔¥250、甜甜圈¥280的立牌" },
  { src: "/gong-cha-japan/gongcha-2.jpg", alt: "綠色杯蓋的黑糖珍珠奶茶與黃色杯蓋的水果茶，杯子上印著貢茶的紅色標誌" },
  { src: "/gong-cha-japan/gongcha-3.jpg", alt: "日本貢茶店內的紅色牆面，上面是發光的貢茶 Gong cha 招牌，前面放著代言人的人形立牌" },
  { src: "/gong-cha-japan/gongcha-4.jpg", alt: "日本貢茶的店內菜單，有奶茶、黑糖、水果茶的價格表、點餐方式、22歲以下優惠和期間限定的梨與蘋果飲料" },
];

// 2026-11-14 に店内メニューで確認した価格（税込・ICED）
const menuRows = [
  { group: "奶茶", name: "烏龍奶茶", s: 450, m: 500, l: 590 },
  { group: "奶茶", name: "紅茶奶茶", s: 450, m: 500, l: 590 },
  { group: "奶茶", name: "阿里山烏龍奶茶", s: 500, m: 550, l: 640 },
  { group: "奶茶", name: "伯爵奶茶", s: 500, m: 550, l: 640 },
  { group: "奶茶", name: "抹茶奶茶", s: 570, m: 620, l: 710 },
  { group: "奶茶", name: "焙茶奶茶", s: 570, m: 620, l: 710 },
  { group: "黑糖", name: "黑糖烏龍奶茶", s: 540, m: 590, l: 680 },
  { group: "黑糖", name: "黑糖紅茶奶茶", s: 540, m: 590, l: 680 },
  { group: "黑糖", name: "黑糖鮮奶", s: 470, m: 520, l: 610 },
  { group: "水果茶", name: "百香果阿里山茶", s: 490, m: 540, l: 630 },
  { group: "水果茶", name: "水蜜桃阿里山茶", s: 490, m: 540, l: 630 },
  { group: "水果茶", name: "芒果阿里山茶", s: 520, m: 570, l: 660 },
  { group: "其他", name: "芋頭牛奶・巧克力牛奶", s: 500, m: 550, l: 640 },
];

const relatedLinks = [
  { href: "/mister-donut", label: "🍩 Mister Donut期間限定｜日本才有的季節甜甜圈", desc: "秋季地瓜甜甜圈¥183起，跟貢茶一樣是日本到處都有的連鎖店" },
  { href: "/tokyo-cookies", label: "🍪 東京伴手禮推薦｜高級手工餅乾", desc: "需要預約的超人氣餅乾禮盒" },
  { href: "/takeout-cake", label: "🍰 東京外帶蛋糕推薦｜PARIYA杯型蛋糕", desc: "澀谷車站直結，帶回飯店當宵夜" },
];

const faqItems = [
  {
    q: "日本的貢茶跟台灣的貢茶一樣嗎？",
    a: "是同一個品牌。官方網站的品牌年表寫著2006年在台灣高雄開了第1間店，2015年在原宿開了日本第1間店，2025年在日本已經超過200間。招牌都是紅色的「貢茶」，但日本的菜單、價格、甜度和冰塊的選法跟台灣不一樣，也有日本限定口味。日本人唸作「Gong-cha（ゴンチャ）」。",
  },
  {
    q: "日本貢茶一杯多少錢？",
    a: "我們2026年11月14日在店內看到的菜單：烏龍奶茶・紅茶奶茶冰的S杯¥450、M杯¥500、L杯¥590；黑糖烏龍奶茶M杯¥590；百香果阿里山茶M杯¥540。內用外帶同價、含稅。加珍珠等配料每種+¥90。價格會調整，以店內菜單為準。",
  },
  {
    q: "日本貢茶可以去冰嗎？",
    a: "可以，但冰塊選「Zero（去冰）」要加¥80（11月14日的店內菜單）。冰塊量有Zero・Less（少冰）・Regular（正常）・Max（多冰）4種，選Less不用加錢。",
  },
  {
    q: "甜度要怎麼選？跟台灣的「幾分糖」一樣嗎？",
    a: "不一樣。日本是調整糖漿的量，分成Zero（無糖）・Less（少糖）・Regular（正常）・Max（多糖）4段。平常喝半糖或微糖的話，先試試Less。部分飲料（例如水果醋、冰沙類）不能調甜度和冰塊。",
  },
  {
    q: "有中文菜單嗎？",
    a: "我們看到的店內菜單是日文加英文，飲料名稱和點餐步驟（Size、Syrup Level、Ice Cube Amount、Toppings）都有英文，用手指菜單點就可以。官方網站的點餐說明也是日英並列，沒有看到中文。",
  },
  {
    q: "日本貢茶可以刷卡嗎？",
    a: "官方的常見問題說，店內主要可以用現金、信用卡和各種電子錢包，但每間店不一樣。用LINE手機點餐的話，可以用VISA・Mastercard・JCB・Diners，以及PayPay、LINE Pay、Alipay等。",
  },
  {
    q: "日本貢茶有什麼日本限定口味？",
    a: "2026年秋天的是「梨＆蘋果」系列：奶茶與水果茶M杯¥690、冰沙M杯¥720，11月5日開始。這是日本貢茶店員飲料比賽「CREW CHAMPIONSHIP 2026」從1,700件以上提案中選出的第1名。另外還有10月22日開始的秋焙焙茶奶茶。我們去的那間店，蜜蘋果茉莉已經賣完。",
  },
  {
    q: "觀光客也能用22歲以下的優惠嗎？",
    a: "日本貢茶的「ENJOY U22割」對象是6〜22歲的所有人，不限學生，烏龍奶茶・紅茶奶茶冰的M杯¥380、黑糖的M杯¥430，1人限1杯。在櫃台點餐要出示能確認年齡的證件，詳細條件請看官方網站。",
  },
];

export default function GongChaJapanPage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">日本貢茶菜單價格2026</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-orange-100 text-orange-700 border border-orange-300 text-xs font-semibold px-3 py-1 rounded-full">🧋 手搖飲（連鎖店）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 日本全國</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          日本貢茶菜單價格2026｜怎麼點？<br />去冰要加錢・甜度4段・日本限定口味🧋
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-11-17（菜單價格為11月14日店內所見）</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">台灣來的貢茶，在日本長這樣</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>貢茶（Gong cha）</strong>是2006年從<strong>台灣高雄</strong>開始的手搖飲品牌。2015年在<strong>原宿</strong>開了日本第1間店，到2025年日本已經超過<strong>200間</strong>，車站、百貨公司、購物中心裡都很常看到紅色的「貢茶」招牌🧋
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            同一個品牌，但在日本點起來有不少差別：<strong>甜度只有4段</strong>、<strong>去冰要加¥80</strong>、配料<strong>最多3種</strong>，還有<strong>日本限定口味</strong>。我們在<strong>11月14日</strong>實際去點了一次，把店內菜單的價格、點餐方式和日本限定口味整理成這篇。
          </p>
        </section>

        <PrepBannerCompact />

        {/* 台湾との違い */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">日本貢茶跟台灣哪裡不一樣？5個重點</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>💴 <strong>價格</strong>：烏龍奶茶冰的S杯<strong>¥450</strong>、M杯¥500，內用外帶同價（含稅）</li>
            <li>🍯 <strong>甜度</strong>：不是「幾分糖」，而是Zero・Less・Regular・Max<strong>4段</strong></li>
            <li>🧊 <strong>冰塊</strong>：一樣4段，但<strong>去冰（Zero）要加¥80</strong>，少冰（Less）不用加錢</li>
            <li>⚪ <strong>配料</strong>：珍珠、椰果、奶蓋、蘆薈<strong>每種+¥90</strong>，最多加3種</li>
            <li>🌰 <strong>杏仁奶</strong>：部分奶茶可以把牛奶換成杏仁奶，<strong>+¥60</strong></li>
          </ul>
        </section>

        {/* 店舗カード */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">日本貢茶怎麼點？菜單與價格</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="flex flex-col gap-[2px]">
            {[photos.slice(0, 2), photos.slice(2)].map((row, r) => (
              <div key={r} className="photo-strip">
                {row.map((photo, i) => (
                  <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                    <Image src={photo.src} alt={photo.alt} fill sizes="50vw" className="object-cover" {...(r === 0 && i === 0 ? { priority: true } : {})} />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">貢茶 日本</h3>
                <span className="text-xs text-stone-400">Gong cha Japan・日本全國200間以上</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              店內的菜單是<strong>日文加英文</strong>，飲料名稱和點餐步驟都有英文，看不懂日文也能用手指著點。櫃台旁邊也在賣<strong>蛋塔¥250</strong>和<strong>砂糖甜甜圈¥280</strong>，可以跟飲料一起點。
            </p>

            {/* 注文方法 */}
            <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-orange-700 mb-2">📝 點餐步驟（店內菜單的「How to Order」）</p>
              <ol className="text-sm text-stone-600 leading-relaxed space-y-1.5">
                <li><strong>1. 選飲料</strong>：奶茶、黑糖、水果茶、冰沙等（部分奶茶可換杏仁奶 +¥60）</li>
                <li><strong>2. 選大小</strong>：冰的有S・M・L，熱的只有S・M</li>
                <li><strong>3. 選甜度</strong>：Zero（無糖）・Less（少糖）・Regular（正常）・Max（多糖）</li>
                <li><strong>4. 選冰塊</strong>（冰飲）：Zero（去冰 +¥80）・Less（少冰）・Regular（正常）・Max（多冰）</li>
                <li><strong>5. 加配料</strong>：珍珠・椰果・奶蓋・蘆薈 各+¥90，最多3種（熱飲不能加）</li>
                <li><strong>6. 要提袋</strong>的話+¥10</li>
              </ol>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-stone-500 mb-2">🗣️ 不會日文也能點：直接唸英文就通</p>
              <p className="text-sm text-stone-600 leading-relaxed">例：「<strong>Black Milk Tea, M size, Less sugar, Less ice, Pearl please.</strong>」（紅茶奶茶M杯、少糖少冰、加珍珠）</p>
            </div>

            {/* 価格表 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">💴 主要飲料價格（冰飲・含稅・11月14日店內菜單）</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-stone-600">
                  <thead>
                    <tr className="text-left text-stone-500 border-b border-amber-200">
                      <th className="py-1.5 pr-2">飲料</th>
                      <th className="py-1.5 pr-2 text-right">S</th>
                      <th className="py-1.5 pr-2 text-right">M</th>
                      <th className="py-1.5 text-right">L</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuRows.map((row) => (
                      <tr key={row.name} className="border-b border-amber-100 last:border-0">
                        <td className="py-1.5 pr-2"><span className="text-stone-400 mr-1">{row.group}</span><strong>{row.name}</strong></td>
                        <td className="py-1.5 pr-2 text-right">¥{row.s}</td>
                        <td className="py-1.5 pr-2 text-right font-bold">¥{row.m}</td>
                        <td className="py-1.5 text-right">¥{row.l}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
                ※ 熱飲的S・M跟冰飲同價。珍珠等配料另外加。價格會調整，以店內菜單為準。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🧋 烏龍奶茶¥450起", "🍯 甜度4段", "🧊 去冰+¥80", "⚪ 配料各+¥90", "🔤 菜單有英文"].map((t) => (
                <span key={t} className="text-xs bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">日本全國200間以上（2025年時點），東京的車站周邊與購物中心很常見</p>
              <p className="text-xs text-stone-600 ib ib-clock">營業時間依各店而定，出發前用官方網站的「店舗検索」查</p>
              <p className="text-xs text-stone-600 ib ib-yen">奶茶冰的S杯¥450起（內用外帶同價・含稅）</p>
              <p className="text-xs text-stone-600">💳 現金・信用卡・電子錢包（依店而定）</p>
              <p className="text-xs text-stone-600">📱 用LINE手機點餐（需加入會員My Gong cha），可用Alipay・PayPay・信用卡付款</p>
              <p className="text-xs text-stone-600">🔤 菜單：日文＋英文（沒有看到中文）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">平常喝<strong>半糖・微糖</strong>的話，先從<strong>Less（少糖）</strong>試試。不想要太多冰塊就選<strong>Less（少冰）</strong>，不用加錢；選Zero（去冰）要多付¥80。</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href="https://www.gongcha.co.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🔗 官方網站
              </a>
              <a href="https://www.gongcha.co.jp/howto/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                📝 點餐方式（官方）
              </a>
              <a href="https://www.gongcha.co.jp/storeinfo/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                📍 找門市（官方）
              </a>
            </div>
          </div>
        </section>

        {/* 日本限定 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">2026秋天的日本限定口味🍐🍎</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>🍐 <strong>梨＆蘋果系列（華やぐ 梨＆りんご）</strong>：奶茶M杯¥690、水果茶M杯¥690、冰沙M杯¥720，<strong>11月5日開始</strong>。是日本貢茶店員飲料比賽「CREW CHAMPIONSHIP 2026」從1,700件以上提案中選出的<strong>第1名</strong></li>
            <li>🍂 <strong>秋焙焙茶黑糖奶茶・秋焙焙茶奶茶</strong>：10月22日開始</li>
            <li>🍯 <strong>蜜蘋果茉莉</strong>：9月10日開始，我們去的那間店11月14日已經<strong>賣完（SOLD OUT）</strong></li>
          </ul>
          <p className="text-[11px] text-stone-500 leading-relaxed mt-2">※ 限定口味賣完就結束，結束時間依各店的庫存而定。</p>
        </section>

        {/* U22・アプリ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">旅客也能用的省錢方法</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>🎓 <strong>22歲以下優惠（ENJOY U22割）</strong>：6〜22歲的所有人，不限學生。烏龍奶茶・紅茶奶茶冰的M杯<strong>¥380</strong>、黑糖系列M杯<strong>¥430</strong>，1人限1杯，櫃台點餐要出示能確認年齡的證件</li>
            <li>📱 <strong>LINE手機點餐</strong>：在官方LINE加入會員後可以先點先付，到店直接拿，不用排隊。一次最多5杯</li>
          </ul>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">在日本喝貢茶的小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 菜單有英文，<strong>用英文唸飲料名稱</strong>就能點</li>
            <li>✅ 甜度選<strong>Less（少糖）</strong>最接近台灣的半糖・微糖習慣</li>
            <li>✅ 想要冰少一點，選<strong>Less（少冰）</strong>就好，<strong>去冰要加¥80</strong></li>
            <li>✅ 熱飲<strong>不能加配料</strong>，想加珍珠就點冰的</li>
            <li>✅ <strong>日本限定口味</strong>常常賣完，看到想喝就先點</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            從台灣高雄出發的貢茶，在日本已經是到處都有的手搖飲🧋<br />
            同樣的紅色招牌，點法和口味卻有點不一樣。<br />
            在日本逛累了，來一杯熟悉的奶茶，順便試試日本限定的梨＆蘋果吧🍐
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「去冰要加錢這件事，第一次看到真的嚇一跳🧊」</p>
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

        <RelatedArticles slug="gong-cha-japan" exclude={["/mister-donut", "/tokyo-cookies", "/takeout-cake"]} />

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
