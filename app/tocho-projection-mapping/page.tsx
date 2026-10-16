import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/tocho-projection-mapping";
const OG_IMAGE = "/tocho-projection-mapping/tocho-1.jpg";

export const metadata: Metadata = {
  title: "東京都廳光雕秀｜免費・時間表・觀賞位置✅實訪",
  description:
    "都廳前站直結、新宿站西口徒步約10分。東京都廳光雕投影（TOKYO Night & Light）免費、不用預約，每晚約30分鐘一場。金氏世界紀錄最大建築投影，附每月時間表。",
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
    title: "東京都廳光雕秀｜免費・時間表・最佳觀賞位置",
    description: "新宿的東京都廳整面牆變成大螢幕。免費、不用預約，金氏世界紀錄認證的建築投影。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "東京都廳第一本廳舍的光雕投影，藍色大浪與紅色富士山" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京都廳光雕秀｜免費・時間表・觀賞位置",
    description: "新宿・都廳整面牆的光雕投影，免費不用預約🌃",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京都廳光雕秀攻略｜TOKYO Night & Light 免費・時間表・觀賞位置【實際造訪】",
  description: "東京都廳光雕投影（TOKYO Night & Light）完整介紹。免費、每月時間表、觀賞位置、同步音樂、交通。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-10-16T00:00:00+09:00",
  dateModified: "2026-10-16T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "東京都廳光雕秀", item: PAGE_URL },
  ],
};

const tochoPhotos = [
  { src: "/tocho-projection-mapping/tocho-1.jpg", alt: "東京都廳光雕投影 - 整棟大樓被藍色大浪、紅色富士山和金色雲朵覆蓋" },
  { src: "/tocho-projection-mapping/tocho-2.jpg", alt: "東京都廳光雕投影 - 金色的圓環在浪花與富士山之間飛過" },
  { src: "/tocho-projection-mapping/tocho-3.jpg", alt: "東京都廳光雕投影 - 浮世繪風格的大浪與紅色富士山，雙塔頂端打上藍光" },
  { src: "/tocho-projection-mapping/tocho-4.jpg", alt: "東京都廳光雕投影 - 粉紅、黃色、藍色的彩色圖案布滿整面牆" },
];

// 公式サイトの年間スケジュール（上映開始時刻の範囲・約30分間隔）
const schedule = [
  ["1・11・12月", "17:30〜21:30"],
  ["2・10月", "18:00〜21:30"],
  ["3・9月", "18:30〜21:30"],
  ["4月", "19:00〜21:30"],
  ["5〜8月", "19:30〜21:30"],
];

const relatedLinks = [
  { href: "/meiji-jingu", label: "⛩️ 明治神宮攻略｜台灣檜木大鳥居・御朱印", desc: "白天在原宿參拜，晚上到新宿看光雕" },
  { href: "/tokyo-tower", label: "🗼 東京鐵塔攻略｜門票、營業時間、夜景", desc: "另一個東京夜景的定番" },
  { href: "/skytree", label: "🌃 東京晴空塔攻略", desc: "從高處看東京夜景" },
];

const faqItems = [
  {
    q: "東京都廳光雕秀是什麼？",
    a: "東京都把東京都廳第一本廳舍的東側整面牆當成螢幕，每天晚上播放的光雕投影（Projection Mapping，香港也叫3D投影），活動名稱是「TOKYO Night & Light」。以「最大的建築物光雕投影（常設）」獲得金氏世界紀錄認證，投影面積13,904.956㎡。",
  },
  {
    q: "要門票嗎？要預約嗎？",
    a: "免費，不用預約，直接到都廳的「都民廣場」站著看就可以。",
  },
  {
    q: "幾點開始？一晚有幾場？",
    a: "每月時間不同，大約每30分鐘一場。官網的年間時間表：1・11・12月17:30〜21:30、2・10月18:00〜21:30、3・9月18:30〜21:30、4月19:00〜21:30、5〜8月19:30〜21:30。2026年10月16日官網顯示的當日場次是18:00〜21:30共8場。時間表會在月中調整，出發前請看官網的TIMETABLE。",
  },
  {
    q: "在哪裡看最好？",
    a: "都廳第一本廳舍前的「都民廣場」（東京都新宿區西新宿2-8-1）。投影在大樓東側的牆面，站在廣場上抬頭看就是正面。大樓很高，站得太近只看得到下半部，往廣場後方退一點，比較容易把雙塔整個拍進畫面。",
  },
  {
    q: "怎麼去？",
    a: "都營大江戶線「都廳前」站直結；JR新宿站西口、東京Metro丸之內線「西新宿」站各徒步約10分。平日也可以從新宿站西口的地下巴士站搭都營巴士（都廳循環）到「都廳第一本廳舍」。",
  },
  {
    q: "下雨也會播嗎？有聲音嗎？",
    a: "官網寫的是「除了天候惡劣等情況，每天播放」。現場有音樂；官網上映中也能用手機同步播放和現場一樣的音樂（部分作品沒有音樂）。如果開始前就開著網頁，到了時間要重新整理一次。",
  },
];

export default function TochoProjectionMappingPage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">東京都廳光雕秀</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🌃 夜景（景點・好去處）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・新宿</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京都廳光雕秀攻略<br />TOKYO Night &amp; Light・免費看整棟大樓的光雕投影🌃
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-10-16</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">新宿的晚上，整棟都廳變成大螢幕</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            新宿站西口走10分鐘，就是雙塔造型的<strong>東京都廳</strong>。每天晚上，第一本廳舍的整面牆會變成螢幕，播放<strong>光雕投影（Projection Mapping／3D投影）</strong>✨
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這個「<strong>TOKYO Night &amp; Light</strong>」<strong>免費、不用預約</strong>，還拿到了<strong>金氏世界紀錄</strong>「最大的建築物光雕投影（常設）」，投影面積將近1萬4千平方公尺。晚餐前後順路就能看，是新宿夜晚最划算的行程之一。
          </p>
        </section>

        <PrepBannerCompact />

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">東京夜景推薦（好去處推介）・都廳光雕秀</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {tochoPhotos.map((photo, i) => (
              <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                <Image src={photo.src} alt={photo.alt} fill sizes="25vw" className="object-cover" {...(i === 0 ? { priority: true } : {})} />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">TOKYO Night &amp; Light（東京都廳光雕投影）</h3>
                <span className="text-xs text-stone-400">東京都庁プロジェクションマッピング</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              投影的是<strong>東京都廳第一本廳舍的東側牆面</strong>，觀眾站在大樓前的<strong>「都民廣場」</strong>抬頭看。播放的作品會輪替，官網列出的有浮世繪風、和風、哥吉拉（GODZILLA）、寶可夢卡牌、初音未來、《孤獨搖滾！》、《藍色監獄》等，每晚播哪一支要看當天的時間表。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 實際看到的（實訪）</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                我們看到的那一場，一開始是<strong>浮世繪風的藍色大浪</strong>和<strong>紅色的富士山</strong>鋪滿整棟大樓，金色的雲和圓環在窗戶之間飛過🌊 另一段則是整面牆變成<strong>粉紅、黃色、藍色的彩色圖案</strong>。雙塔頂端一直打著藍光，從正下方往上看非常有壓迫感——<strong>窗戶的格子也變成畫面的一部分</strong>，跟在電視上看完全不一樣。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🆓 免費・不用預約", "🏆 金氏世界紀錄", "🌃 每晚約30分一場", "🚇 都廳前站直結", "🎵 手機同步音樂"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都廳 都民廣場（東京都新宿區西新宿2-8-1）</p>
              <p className="text-xs text-stone-600 ib ib-train">大江戶線「都廳前」站直結／JR新宿站西口・丸之內線「西新宿」站 徒步約10分</p>
              <p className="text-xs text-stone-600 ib ib-clock">每晚約30分鐘一場（時間每月不同，見下表）</p>
              <p className="text-xs text-stone-600 ib ib-yen">免費・不用預約</p>
              <p className="text-xs text-stone-600">☔ 除天候惡劣等情況，每天播放</p>
              <p className="text-xs text-stone-600">♿ 有利用廳舍內電梯的無障礙路線，可以請警衛帶路</p>
              <p className="text-xs text-stone-600">⏱️ 建議預留約30分鐘（看1〜2場）</p>
            </div>

            {/* 時間表 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🕐 每月播放時間（官網年間時間表・約30分鐘一場）</p>
              <div className="space-y-1 text-xs text-stone-600">
                {schedule.map(([m, t]) => (
                  <p key={m}><strong>{m}</strong>　{t}</p>
                ))}
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
                ※ 2026年10月16日官網顯示的當日場次是18:00〜21:30共8場。時間表會在月中調整，當天的場次請看官網的 TIMETABLE。
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">播放時打開<strong>官網</strong>，手機就能同步播出和現場一樣的音樂🎵（部分作品沒有音樂）。開始前就開著網頁的話，時間到了要<strong>重新整理</strong>一次。拍照建議往廣場後方退一點，才拍得進整棟雙塔。</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://tokyoprojectionmappingproject.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站（時間表）
              </a>
              <a
                href="https://tokyoprojectionmappingproject.jp/contents/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🎬 播放作品一覽
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=東京都庁+都民広場"
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
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">看都廳光雕秀小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>冬天最早17:30就開始</strong>，夏天要等到19:30，出發前先看當月時間表</li>
            <li>✅ 搭大江戶線到「<strong>都廳前</strong>」站最近，出站就到；從新宿站西口走過來約10分鐘</li>
            <li>✅ 記得開官網聽<strong>同步音樂</strong>，有聲音和沒聲音的感覺差很多🎵</li>
            <li>✅ 站太前面會一直仰頭，往<strong>都民廣場後方</strong>退一點比較好看也好拍📸</li>
            <li>✅ 新宿吃完晚餐再走過來剛好，一場約30分鐘的間隔，錯過了等下一場就好</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            免費、不用排隊，整棟大樓在眼前動起來✨<br />
            新宿的夜晚，多留30分鐘給都廳吧。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「大浪從窗戶衝上來的時候，脖子都仰痠了還捨不得低頭🌊」</p>
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

        <RelatedArticles slug="tocho-projection-mapping" exclude={["/meiji-jingu", "/tokyo-tower", "/skytree"]} />

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
