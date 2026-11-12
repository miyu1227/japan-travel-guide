import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/kyu-furukawa-garden";
const OG_IMAGE = "/kyu-furukawa-garden/furukawa-1.jpg";

export const metadata: Metadata = {
  title: "舊古河庭園｜洋館與玫瑰的東京庭園 門票¥150✅實訪",
  description:
    "舊古河庭園（旧古河庭園）：上中里站・西ケ原站徒步7分，門票¥150、可刷卡・電子支付。英國建築師設計的洋館＋約100種玫瑰＋日本庭園，秋玫瑰與紅葉11/7〜12/6。",
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
    title: "舊古河庭園｜洋館與玫瑰的東京庭園，門票只要¥150",
    description: "像歐洲一樣的石造洋館、玫瑰花園和日本池泉庭園，一次逛完🌹",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "舊古河庭園的玫瑰花園，紅色玫瑰後面是高大的杉樹" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "舊古河庭園｜洋館與玫瑰的東京庭園",
    description: "門票¥150，石造洋館＋玫瑰花園＋日本庭園🌹",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "舊古河庭園｜洋館與玫瑰的東京庭園・門票¥150【實際造訪】",
  description: "舊古河庭園（Kyu-Furukawa Gardens）：洋館、玫瑰花園與日本庭園。門票、付款方式、玫瑰花期、交通。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-11-12T00:00:00+09:00",
  dateModified: "2026-11-12T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "東京景點｜舊古河庭園", item: PAGE_URL },
  ],
};

const P = "/kyu-furukawa-garden";

const photos = [
  { src: `${P}/furukawa-1.jpg`, alt: "舊古河庭園的玫瑰花園，紅色玫瑰後面是高大的杉樹和藍天" },
  { src: `${P}/furukawa-2.jpg`, alt: "手上拿著兩張舊古河庭園的門票（一般¥150・刷卡），後面是洋館的屋頂和入口" },
  { src: `${P}/furukawa-3.jpg`, alt: "舊古河庭園的石造洋館，前面是草坪和玫瑰花圃" },
  { src: `${P}/furukawa-4.jpg`, alt: "洋館的石牆和白色百葉窗前，開著一朵白色玫瑰" },
  { src: `${P}/furukawa-5.jpg`, alt: "舊古河庭園的日本庭園，心字池的水面倒映著松樹和石燈籠" },
];

const faqItems = [
  {
    q: "舊古河庭園是什麼？日文怎麼念？",
    a: "日文寫「旧古河庭園」，念「きゅうふるかわていえん（Kyu-Furukawa Teien／Kyufurukawa Garden）」。原本是明治時代的外交官陸奧宗光的宅邸，後來成為古河家的庭園。石造洋館是設計鹿鳴館、尼可萊堂的英國建築師喬賽亞・康德（Josiah Conder）在1917年完成的，下方是玫瑰花園，再往下是日本庭園。2006年被指定為國家名勝。",
  },
  {
    q: "門票多少？可以刷卡嗎？",
    a: "一般¥150、65歲以上¥70，小學生以下免費。我們買票時就是用信用卡付的，門票上印著「クレジット」。官網寫可以用交通IC卡、iD、樂天Edy、VISA・Master・銀聯，還有PayPay、支付寶（Alipay）、微信支付（WeChat Pay）等。",
  },
  {
    q: "玫瑰什麼時候開？",
    a: "西洋庭園有約100種、200株玫瑰，一年開兩次：春玫瑰5月中旬〜6月下旬、秋玫瑰10月中旬〜11月下旬（北區觀光網站）。我們10月11日去的時候還是花苞比較多，只零星開了幾朵；官網在11月9日的花況是「89種開花」。2026年秋天的活動「紅葉とバラ、和と洋の秋」在11月7日〜12月6日。",
  },
  {
    q: "舊古河庭園值得去嗎？",
    a: "想在東京看到「像歐洲一樣的洋館＋玫瑰」和「日本池泉庭園」的話，非常值得。門票只要¥150。不過花季以外玫瑰花圃只有葉子，最推薦5〜6月和10月下旬〜11月去。",
  },
  {
    q: "洋館可以進去參觀嗎？",
    a: "洋館由大谷美術館管理，開館日、時間、入館費都跟庭園分開，要看大谷美術館的公告。庭園的門票只包含庭園。",
  },
  {
    q: "有中文地圖嗎？要逛多久？",
    a: "官網有繁體中文・簡體中文的園內地圖PDF，可以先下載。免費的庭園導覽（日文）約60分鐘，自己慢慢逛洋館周邊和日本庭園，大約抓1小時（目安）。",
  },
];

const relatedLinks = [
  { href: "/koyo", label: "🍁 東京紅葉推薦", desc: "秋天來舊古河庭園，也可以順便排其他賞楓景點" },
  { href: "/meiji-jingu", label: "⛩️ 關東神社特集｜明治神宮・桜神宮・乃木神社", desc: "另一種東京的「和」風景" },
  { href: "/showa-kinen-park", label: "🌼 昭和紀念公園", desc: "想看更大片的花海就去這裡" },
];

export default function KyuFurukawaGardenPage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">東京景點｜舊古河庭園</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🌹 庭園・玫瑰</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・北區（駒込附近）</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          舊古河庭園<br />洋館與玫瑰的東京庭園，門票只要¥150🌹
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-11-12</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">在東京看到「歐洲洋館＋日本庭園」</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            從山手線駒込站往北走一點，就是<strong>舊古河庭園（旧古河庭園）</strong>。站在草坪上抬頭，是一棟<strong>深色石頭砌成的洋館</strong>，前面是玫瑰花圃——很多人第一眼都以為自己在英國🏰
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這裡的特別之處是<strong>「洋」和「和」上下疊在一起</strong>：坡上是洋館，中間是對稱的西洋玫瑰花園，再往下走就是有池塘、石燈籠的<strong>日本庭園</strong>。門票只要<strong>¥150</strong>，還能刷卡。這篇介紹（推介）我們10月實際去逛的樣子、玫瑰花期和交通。
          </p>
        </section>

        <PrepBannerCompact />

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">東京庭園景點推薦（好去處推介）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6 card-split">
          {/* 横長2枚＋縦長3枚を2段に分けて大きく見せる */}
          <div className="flex flex-col gap-[2px]">
            {[photos.slice(0, 2), photos.slice(2)].map((row, r) => (
              <div key={r} className="photo-strip">
                {row.map((photo, i) => (
                  <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={r === 0 ? "50vw" : "33vw"}
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
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">舊古河庭園</h3>
                <span className="text-xs text-stone-400">旧古河庭園／きゅうふるかわていえん／Kyu-Furukawa Gardens</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              洋館是英國建築師<strong>喬賽亞・康德（Josiah Conder）</strong>設計、<strong>1917年</strong>完成的。他也設計了鹿鳴館、神田的尼可萊堂和上野的舊岩崎邸洋館。石牆配上白色百葉窗，跟一般印象中的日本完全不一樣📸
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              洋館前的西洋庭園種了<strong>約100種、200株玫瑰</strong>；再往下走，是京都庭師<strong>小川治兵衛</strong>打造的日本庭園，中間是「心」字形的池塘<strong>心字池</strong>，還有石燈籠和瀑布。2006年被指定為<strong>國家名勝</strong>。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-600 mb-1">✨ 實際去逛的（2026年10月11日）</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                天氣很好，洋館在藍天下特別好拍🌞 10月中旬的玫瑰還在<strong>花苞期</strong>，只零星開了幾朵<strong>紅玫瑰和洋館牆邊的白玫瑰</strong>，想看滿開要再晚一點。往下走到日本庭園，池面倒映著松樹和石燈籠，一下子就安靜下來。門票是在入口<strong>用信用卡買的</strong>，票上印著紅葉和玫瑰的照片，很適合當紀念🎫
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🏰 康德設計的洋館", "🌹 約100種玫瑰", "🏯 日本庭園・心字池", "🎫 門票¥150", "💳 可刷卡・電子支付", "🚃 上中里・西ケ原站7分"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 花の見ごろ */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🌸 什麼時候去最好看</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>🌹 春玫瑰</strong>：5月中旬〜6月下旬</li>
                <li><strong>🌹 秋玫瑰</strong>：10月中旬〜11月下旬（2026年11月9日官網花況：89種開花）</li>
                <li><strong>🍁 紅葉</strong>：秋天的楓樹・櫨樹（ハゼノキ）</li>
                <li><strong>🌺 其他</strong>：梅花2月上旬〜3月中旬、杜鵑4月中旬〜5月上旬</li>
              </ul>
              <p className="text-xs font-bold text-amber-700 mt-3 mb-1">🎉 2026秋季活動「紅葉とバラ、和と洋の秋」</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                11月7日〜12月6日。期間中每天10:00〜16:00有臨時賣店（玫瑰周邊商品等），還有免費庭園導覽（日文・約60分鐘，平日14:00、週末假日11:00・14:00）。
              </p>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
                ※ 花期每年不同，出發前看官網的「開花状況」最準。
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都北區西ケ原1-27-39</p>
              <p className="text-xs text-stone-600 ib ib-train">JR上中里站 徒步7分・東京Metro南北線 西ケ原站 徒步7分・JR山手線 駒込站 徒步12分</p>
              <p className="text-xs text-stone-600 ib ib-clock">9:00〜17:00（最後入園16:30）・休園日12/29〜1/1</p>
              <p className="text-xs text-stone-600 ib ib-yen">一般¥150・65歲以上¥70・小學生以下免費</p>
              <p className="text-xs text-stone-600">💳 可刷卡（VISA・Master・銀聯）・交通IC卡・PayPay・支付寶・微信支付</p>
              <p className="text-xs text-stone-600">📅 不用預約</p>
              <p className="text-xs text-stone-600">🌐 官網有繁體中文的園內地圖PDF</p>
              <p className="text-xs text-stone-600">⏱️ 停留時間目安：約1小時</p>
              <p className="text-xs text-stone-600">🚫 不能帶寵物・不能鋪野餐墊・不能帶酒・園內階梯和坡道多</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                駒込站旁邊還有另一座名園<strong>六義園</strong>。兩邊都想去的話，可以買共通票<strong>「園結びチケット」¥400</strong>（沒有期限）。另外12/14・1/18・2/15有<strong>下午休園</strong>的公告，這幾天要上午去。
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href="https://www.tokyo-park.or.jp/park/kyu-furukawa/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 舊古河庭園 官方網站（東京都公園協會）</a>
              <a href="https://kanko.city.kita.lg.jp/spot/471-2/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">📍 北區觀光網站</a>
              <a href="https://www.google.com/maps/search/?api=1&query=%E6%97%A7%E5%8F%A4%E6%B2%B3%E5%BA%AD%E5%9C%92" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🗺️ Google 地圖</a>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8 mt-2">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">逛舊古河庭園小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 玫瑰的最佳時期是<strong>5〜6月和10月下旬〜11月</strong>，出發前看官網的開花狀況</li>
            <li>✅ 晴天上午光線最好，<strong>從草坪拍洋館＋玫瑰</strong>是招牌構圖📸</li>
            <li>✅ 園內<strong>階梯和坡道多</strong>，穿好走的鞋；推嬰兒車的話先看官網的無障礙地圖</li>
            <li>✅ 不能鋪野餐墊，想野餐的話改去<a href="/spot" className="text-blue-600 underline">代代木公園或新宿御苑</a></li>
            <li>✅ 可以跟<strong>六義園</strong>排在同一天，兩邊都在駒込站附近</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            一張¥150的門票，就能從英國洋館一路走到日本池塘✨<br />
            東京人氣景點之外的安靜好去處。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「下次要挑玫瑰滿開的時候再來一次🌹」</p>
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

        <RelatedArticles slug="kyu-furukawa-garden" exclude={["/koyo", "/meiji-jingu", "/showa-kinen-park"]} />

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
