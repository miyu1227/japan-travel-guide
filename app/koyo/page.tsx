import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";

const PAGE_URL = "https://www.japantrippicks.com/koyo";
const OG_IMAGE = "/koyo/gaien-1.jpg";

export const metadata: Metadata = {
  title: "東京紅葉推薦｜外苑前銀杏並木・金黃大道【實際造訪】",
  description:
    "東京紅葉季必去景點「神宮外苑銀杏並木」。約300公尺長的金黃銀杏大道，從青山通一路延伸，是東京最具代表性的秋景之一。附交通方式・最佳觀賞期・拍照秘訣。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "東京紅葉推薦｜外苑前銀杏並木・金黃大道",
    description: "東京紅葉必去景點「神宮外苑銀杏並木」。約300公尺的金黃銀杏隧道。附交通・觀賞期・拍照攻略。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "東京紅葉推薦・神宮外苑銀杏並木" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "東京紅葉推薦｜外苑前銀杏並木",
    description: "東京紅葉必去！金黃銀杏隧道約300公尺的人氣景點。",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "東京紅葉推薦｜外苑前銀杏並木・金黃大道【實際造訪】",
  description: "東京紅葉季必去景點「神宮外苑銀杏並木」。金黃銀杏大道・交通・觀賞期完整指南。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-07-21T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "紅葉推薦", item: PAGE_URL },
  ],
};

const gaienPhotos = ["/koyo/gaien-1.jpg", "/koyo/gaien-2.jpg", "/koyo/gaien-3.jpg"];

const relatedLinks = [
  { href: "/spot", label: "🌿 東京野餐推薦｜新宿御苑＆代代木公園", desc: "悠閒散步的人氣公園完全指南" },
  { href: "/ramen", label: "🍜 東京拉麵推薦6選｜必吃排隊名店・柚子鹽・家系", desc: "三軒茶屋無招牌名店・台場豚骨・六本木柚子鹽" },
  { href: "/cafe", label: "☕ 自由之丘咖啡推薦｜東京必去咖啡散步地區", desc: "貝果・義式冰淇淋・起司披薩3間人氣店" },
];

export default function KoyoPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">紅葉推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-orange-100 text-orange-700 border border-orange-300 text-xs font-semibold px-3 py-1 rounded-full">🍁 紅葉</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京紅葉推薦｜神宮外苑<br />銀杏並木の金黃大道🍁
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">秋天來東京，絕不能錯過的風景</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            每到11月下旬，東京就會換上最美的秋裝🍁 這次要推薦的是東京紅葉季最具代表性的景點——<strong>神宮外苑銀杏並木</strong>。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            從青山通往聖德紀念繪畫館延伸，約300公尺長的銀杏隧道鋪滿金黃落葉，整條路像是被染成金色一樣✨ 是很多電影、廣告都會取景的場所。
          </p>
        </section>

        <PrepBannerCompact />

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">東京紅葉景點・1選（持續更新中）</h2>

        {/* Spot: 神宮外苑銀杏並木 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {gaienPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image
                  src={src}
                  alt="神宮外苑銀杏並木 - 東京紅葉推薦"
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
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">神宮外苑銀杏並木</h3>
                <span className="text-xs text-stone-400">Jingu Gaien Ginkgo Avenue</span>
              </div>
            </div>

            {/* 介紹 */}
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              約146棵銀杏樹沿著青山通整齊排列，形成一條金黃色的隧道🌟 這裡是東京最具代表性的紅葉景點，也是日本最早將銀杏當作行道樹種植的地方之一。
            </p>

            {/* 推薦理由 */}
            <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-orange-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                交通超方便，從地下鉄「外苑前」駅走出來馬上就能看到🚇 拍照隨手一張都像明信片，是東京秋天絕對要排進行程的景點。建議穿深色或米白色衣服，金黃銀杏會更突出📸
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["📸 IG拍照聖地", "🚇 交通便利", "🍁 東京紅葉代表", "🆓 免費入場"].map((t) => (
                <span key={t} className="text-xs bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 基本資訊 */}
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 東京都港區北青山2丁目</p>
              <p className="text-xs text-stone-600">🚇 東京メトロ銀座線「外苑前」駅 徒歩約5分</p>
              <p className="text-xs text-stone-600">⏰ 全日開放（自由散策）</p>
              <p className="text-xs text-stone-600">💴 免費</p>
              <p className="text-xs text-stone-600">🍁 最佳觀賞期：11月中旬〜12月上旬</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">每年11月下旬會舉辦「神宮外苑いちょう祭り」，會有許多美食攤位可以一邊賞楓一邊享用</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.app.goo.gl/RJb1VLZjPF2RozdA7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🗺️ Google Maps
              </a>
              <a
                href="https://visit-minato-city.tokyo/ja-jp/places/989"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 港區觀光情報
              </a>
            </div>
          </div>
        </section>

        {/* 銀杏並木的歷史・背景 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">神宮外苑銀杏並木的歷史</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            神宮外苑銀杏並木誕生於<strong>1923年（大正12年）</strong>，是為了配合1926年完成的「聖德紀念繪畫館」而規劃的參道🌳 這146棵銀杏樹的樹苗，其實是從<strong>新宿御苑</strong>培育的種子開始，由日本近代造園之父<strong>折下吉延</strong>親自設計，依照「越靠近繪畫館越矮」的視覺原理排列——這也是為什麼從青山通入口看過去，銀杏隧道會呈現完美的透視感📐
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            並木道全長約<strong>300公尺</strong>，樹高最高約28公尺、最低約17公尺，是日本最具代表性的都市景觀之一。2018年被東京都指定為<strong>「東京都的景觀重要樹林」</strong>，並被港區列為文化財保護對象。
          </p>
        </section>

        {/* 順路推薦：附近景點 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">順路推薦：附近景點</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-orange-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">明治神宮外苑（徒歩0分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">聖德紀念繪畫館・日本最大規模的西洋畫壁畫收藏。銀杏並木的終點就是繪畫館本身。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">表參道（徒歩約10分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">東京最時尚的街道之一，秋天連結賞銀杏＋購物＆美食超順路。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">青山靈園（徒歩約8分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">春天是東京隱藏版賞櫻名所，秋天也有紅葉。與外苑銀杏形成鮮明對比。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">明治神宮（電車約5分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">從青山一丁目搭銀座線到原宿轉JR或步行到明治神宮，都心中的森林參拜路線也很有秋意。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 東京其他賞紅葉地點 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">東京其他人氣賞紅葉地點</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            如果時間允許，除了神宮外苑銀杏並木，東京其實還有很多值得一去的紅葉名所：
          </p>
          <div className="space-y-2 text-sm text-stone-600">
            <p>🍁 <strong>六義園</strong>（駒込・11月下旬〜12月上旬）— 江戶時代大名庭園的紅葉夜間點燈超夢幻</p>
            <p>🍁 <strong>昭和記念公園</strong>（立川・11月上旬〜下旬）— 東京最大級的紅葉隧道，本站也有詳細介紹</p>
            <p>🍁 <strong>高尾山</strong>（八王子・11月中旬〜下旬）— 東京近郊登山＋賞楓一次體驗</p>
            <p>🍁 <strong>新宿御苑</strong>（新宿・11月中旬〜12月上旬）— 免費入場的都心紅葉聖地</p>
            <p>🍁 <strong>小石川後樂園</strong>（水道橋・11月下旬〜12月上旬）— 江戶回遊式庭園代表</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">常見問題 FAQ</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 最佳造訪時間是幾點？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                拍照優先的話推薦<strong>早上7:00〜9:00</strong>或<strong>平日下午</strong>，人潮相對少。銀杏並木的順光是從南邊（青山通側），下午3點左右光線最柔和適合拍照。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 紅葉的最佳觀賞期會變動嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                會。神宮外苑銀杏並木通常<strong>11月中旬開始轉黃、11月下旬〜12月上旬達到高峰</strong>，但每年因氣候而有1〜2週的差異。出發前建議在「日本紅葉情報」「ウェザーニュース紅葉見頃」等網站確認。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 銀杏會臭嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                銀杏果實掉落時會有特殊氣味，但神宮外苑並木的樹全部都是<strong>雄樹</strong>，不會結果，所以基本上沒有這個問題✨ 可以安心賞景拍照。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 附近有停車場嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                銀杏祭期間人潮爆多、車位很難找。強烈推薦搭乘<strong>東京メトロ</strong>：銀座線「外苑前」駅、大江戶線「国立競技場」駅、副都心線「北参道」駅任何一個都能徒歩到達。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 下雨天還值得去嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                下雨時銀杏葉會被打落，反而形成一整片<strong>金黃色地毯</strong>，別有一番風味🍂 而且人潮較少、拍照更容易。撐傘＆穿好防水鞋即可。
              </p>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">賞銀杏小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 最佳觀賞期是11月中旬〜12月上旬，建議出發前查詢「紅葉情報」確認狀況</li>
            <li>✅ 清晨或平日人少，拍照會更順利📸</li>
            <li>✅ 從青山通入口往內看，是最經典的拍攝角度</li>
            <li>✅ 附近的明治神宮外苑・表參道也很推薦順路散步</li>
            <li>✅ 秋天早晚溫差大，記得帶件薄外套🧥</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <div className="flex items-start gap-3">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-1">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「親眼看到金黃銀杏大道的瞬間真的會忘記呼吸🍁 秋天來東京一定要安排！」</p>
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
