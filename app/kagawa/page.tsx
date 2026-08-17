import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";

const KLOOK_AQUARIUM =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1339931&k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Factivity%2F74358-shikoku-aquarium";
const KLOOK_SHIKISHIMA =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1339934&k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Fhotels%2Fdetail%2F422726-onyado-shikishimakan%2F";
const KLOOK_KAGAWA_PASS =
  "https://affiliate.klook.com/redirect?aid=124502&aff_adid=1339933&k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Factivity%2F156814-have-fun-in-kagawa-pass-1-week-free-pass";

const PAGE_URL = "https://www.japantrippicks.com/kagawa";
const OG_IMAGE = "/kagawa/yamagoe-1.jpg";

export const metadata: Metadata = {
  title: "香川觀光推薦5選｜烏龍麵縣必去美食・水族館・金刀比羅宮【實際造訪】",
  description:
    "香川縣旅遊完全指南！讚岐烏龍麵名店「山越うどん」「山下うどん」、四國水族館、金刀比羅宮、人氣溫泉旅館御宿敷島館。四國香川一日遊・兩日遊推薦行程，附交通・門票・必吃。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "香川觀光推薦5選｜烏龍麵縣必去美食・水族館・金刀比羅宮",
    description: "香川旅遊指南！讚岐烏龍麵名店＆四國水族館＆金刀比羅宮＆人氣溫泉旅館。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "香川觀光推薦・讚岐烏龍麵" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "香川觀光推薦5選｜烏龍麵縣必去美食・水族館・金刀比羅宮",
    description: "香川旅遊指南！讚岐烏龍麵＆四國水族館＆金刀比羅宮🍜",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "香川觀光推薦5選｜烏龍麵縣必去美食・水族館・金刀比羅宮【實際造訪】",
  description: "香川縣旅遊完全指南。讚岐烏龍麵名店、四國水族館、金刀比羅宮、人氣溫泉旅館。",
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
    { "@type": "ListItem", position: 2, name: "香川觀光推薦", item: PAGE_URL },
  ],
};

const yamagoePhotos = ["/kagawa/yamagoe-1.jpg"];
const aquariumPhotos = ["/kagawa/aquarium-1.jpg", "/kagawa/aquarium-2.jpg", "/kagawa/aquarium-3.jpg"];
const yamashitaPhotos = ["/kagawa/yamashita-1.jpg", "/kagawa/yamashita-2.jpg", "/kagawa/yamashita-3.jpg"];
const shikishimaPhotos = ["/kagawa/shikishima-1.jpg", "/kagawa/shikishima-2.jpg"];
const konpiraPhotos = ["/kagawa/konpira-1.jpg", "/kagawa/konpira-2.jpg", "/kagawa/konpira-3.jpg", "/kagawa/konpira-4.jpg"];

const relatedLinks = [
  { href: "/hikone", label: "🏯 彥根城觀光推薦｜滋賀必去國寶城・吉祥物彥根貓", desc: "日本國寶＋彥根貓＋江戶城下町" },
  { href: "/utsunomiya", label: "🎋 宇都宮觀光推薦3選｜栃木必去竹林・餃子・神社", desc: "若山農場・餃子通・二荒山神社" },
  { href: "/kamikochi", label: "🏔️ 上高地＆奧飛騨旅行推薦4選", desc: "河童橋・新穂高纜車・奧飛騨溫泉" },
];

export default function KagawaPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">香川觀光推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🍜 觀光美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 香川・四國</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          香川觀光推薦5選｜烏龍麵縣<br />美食・水族館・金刀比羅宮🍜
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">香川——「烏龍麵縣」的美食＆觀光天堂</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>香川縣</strong>是日本四國地區的縣，自稱<strong>「烏龍麵縣」</strong>🍜 日本人均烏龍麵消費量No.1，全縣有約600家烏龍麵店，是名副其實的<strong>讚岐烏龍麵</strong>之鄉。從關西可搭新幹線＋瀨戶大橋線約3小時抵達。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦的5個必去景點：人氣烏龍麵名店<strong>「山越うどん」「山下うどん」</strong>、超人氣<strong>「四國水族館」</strong>、四國最大能量景點<strong>「金刀比羅宮」</strong>，以及高松名宿<strong>「御宿敷島館」</strong>✨ 一日〜兩日遊行程剛剛好！
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3"><span className="text-green-500 font-black text-sm shrink-0">▸</span><div><p className="text-sm font-bold text-stone-700">山越うどん → 釜玉烏龍麵發祥店</p><p className="text-xs text-stone-500 leading-relaxed">綾川町、生蛋拌烏龍麵的元祖名店</p></div></div>
            <div className="flex gap-3"><span className="text-green-500 font-black text-sm shrink-0">▸</span><div><p className="text-sm font-bold text-stone-700">四國水族館 → 瀨戶內海主題水族館</p><p className="text-xs text-stone-500 leading-relaxed">宇多津、2020年開幕、海豚秀超棒</p></div></div>
            <div className="flex gap-3"><span className="text-green-500 font-black text-sm shrink-0">▸</span><div><p className="text-sm font-bold text-stone-700">山下うどん → 排隊釜揚烏龍麵</p><p className="text-xs text-stone-500 leading-relaxed">善通寺、彈牙麵條＋極上沾汁</p></div></div>
            <div className="flex gap-3"><span className="text-green-500 font-black text-sm shrink-0">▸</span><div><p className="text-sm font-bold text-stone-700">御宿敷島館 → 高松温泉旅館</p><p className="text-xs text-stone-500 leading-relaxed">琴平、Dormy系列、夜鳴拉麵服務</p></div></div>
            <div className="flex gap-3"><span className="text-green-500 font-black text-sm shrink-0">▸</span><div><p className="text-sm font-bold text-stone-700">金刀比羅宮 → 四國最大能量景點</p><p className="text-xs text-stone-500 leading-relaxed">琴平、1368階石階、絕景視野</p></div></div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">香川觀光推薦・5選</h2>

        {/* Spot 1: 山越うどん */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image src={yamagoePhotos[0]} alt="山越うどん - 香川觀光推薦" fill sizes="100vw" className="object-cover" priority />
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div><h3 className="text-base font-black text-stone-800">山越うどん</h3><span className="text-xs text-stone-400">Yamagoe Udon</span></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於綾川町的<strong>讚岐烏龍麵名店</strong>，是<strong>「釜玉烏龍麵（生蛋拌烏龍麵）」的發祥店</strong>🥚 把剛煮好的熱烏龍麵直接打入生蛋與醬油拌勻，簡單卻美味到讓人吃過難忘。是香川烏龍麵巡禮絕對不能錯過的傳奇名店。
            </p>
            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                一份釜玉只要<strong>¥350左右</strong>，CP值爆表💰 熱烏龍麵搭配生蛋的綿密口感是台灣・香港少見的體驗。位於山間的店面有獨特氛圍，吃完還可以在店外的庭園散步。常常排隊但翻桌快，建議早上去最不擠。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">{["🥚 釜玉發祥店", "🍜 讚岐烏龍麵", "💰 ¥350〜", "🌿 庭園氛圍"].map((t) => (<span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>))}</div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 香川縣綾歌郡綾川町羽床下623</p>
              <p className="text-xs text-stone-600">🚃 JR「滝宮」駅 開車約10分（建議自駕）</p>
              <p className="text-xs text-stone-600">⏰ 9:00〜13:30（週日公休）</p>
              <p className="text-xs text-stone-600">💴 釜玉 ¥350／釜揚 ¥250</p>
            </div>
            <a href="https://yamagoeudon.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 官方網站</a>
          </div>
        </section>

        {/* Spot 2: 四國水族館 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {aquariumPhotos.map((src, i) => (<div key={i} className="relative aspect-square bg-stone-100"><Image src={src} alt="四國水族館 - 香川觀光推薦" fill sizes="33vw" className="object-cover" /></div>))}
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div><h3 className="text-base font-black text-stone-800">四國水族館</h3><span className="text-xs text-stone-400">Shikoku Aquarium</span></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              2020年開幕的<strong>四國最大級水族館</strong>🐬 位於宇多津「四國健康村」內，主題是<strong>「四國水景」</strong>，重現四國各地的水中世界。從瀨戶內海的海洋生物到四萬十川的淡水魚，可以一次認識四國的豐富水域。
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-blue-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                <strong>海豚秀絕景</strong>以瀨戶大橋＆瀨戶內海為背景，是日本最美的海豚表演舞台之一✨ 黃昏時段的「Sunset Time」夕陽染紅大廳特別夢幻🌅 適合<strong>親子旅遊・情侶約會・攝影愛好者</strong>。從高松站搭電車約15分，交通方便。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">{["🐬 海豚秀絕景", "🌅 Sunset Time", "👶 親子推薦", "🌊 四國水景"].map((t) => (<span key={t} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">{t}</span>))}</div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 香川縣綾歌郡宇多津町浜一番丁4番地</p>
              <p className="text-xs text-stone-600">🚃 JR予讚線「宇多津」駅 徒歩約12分</p>
              <p className="text-xs text-stone-600">⏰ 9:00〜18:00（季節變動）</p>
              <p className="text-xs text-stone-600">💴 大人 ¥2,400／中・高校生 ¥1,700／小學生 ¥1,000</p>
            </div>
            <a href="https://shikoku-aquarium.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 官方網站</a>

            {/* Klook 四國水族館バナー */}
            <a
              href={KLOOK_AQUARIUM}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-5 block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl p-5 shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <span className="absolute top-3 right-3 text-2xl opacity-50 select-none">🐬</span>
              <div className="relative flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full tracking-wide shadow-sm">
                  🎫 Travel Tips
                </span>
                <span className="text-[10px] text-stone-500 bg-white/60 backdrop-blur px-2 py-0.5 rounded-full">水族館門票線上購買</span>
              </div>
              <div className="relative flex items-center gap-3 mb-4">
                <div className="relative w-20 h-20 shrink-0">
                  <div className="absolute inset-0 bg-white/70 backdrop-blur rounded-2xl border-2 border-white shadow-sm"></div>
                  <Image src="/poyapiyo-flag.png" alt="ぽやぴよ" fill sizes="80px" className="object-contain p-1 relative -rotate-[4deg]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-black text-stone-800 leading-tight mb-1">想先買好四國水族館門票？</h3>
                  <p className="text-xs text-stone-700 leading-relaxed">現場售票日常會排隊，事先線上購買可以直接入場，時間安排更順暢🐬</p>
                </div>
              </div>
              <div className="relative block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 rounded-full py-3 shadow-md">
                🎫 查看四國水族館門票 →
              </div>
              <p className="relative text-[10px] text-stone-500 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
            </a>
          </div>
        </section>

        {/* Spot 3: 山下うどん */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {yamashitaPhotos.map((src, i) => (<div key={i} className="relative aspect-square bg-stone-100"><Image src={src} alt="山下うどん - 香川觀光推薦" fill sizes="33vw" className="object-cover" /></div>))}
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div><h3 className="text-base font-black text-stone-800">山下うどん</h3><span className="text-xs text-stone-400">Yamashita Udon</span></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              善通寺市的人氣<strong>讚岐烏龍麵店</strong>🍜 以<strong>「ぶっかけ烏龍麵」</strong>（涼烏龍麵淋醬）和<strong>「釜揚烏龍麵」</strong>聞名。麵條Q彈有嚼勁，搭配店家自製的濃郁醬汁，每一口都是讚岐烏龍麵的精髓。
            </p>
            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                招牌的<strong>「ぶっかけ烏龍麵」</strong>¥300起就能吃到，超划算💰 涼麵的彈牙口感和冰涼醬汁讓夏天吃也很爽快。<strong>自助式選天婦羅</strong>，可以挑炸天婦羅、半熟蛋等配料加在烏龍麵上。當地人氣也很高，午餐時段常排隊。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">{["🍜 ぶっかけ名店", "💰 ¥300〜", "🍤 自助式天婦羅", "🏃 翻桌率高"].map((t) => (<span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>))}</div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 香川縣善通寺市與北町284-1</p>
              <p className="text-xs text-stone-600">🚃 JR「善通寺」駅 開車約10分（建議自駕）</p>
              <p className="text-xs text-stone-600">⏰ 9:30〜15:00（週四公休）</p>
              <p className="text-xs text-stone-600">💴 ぶっかけ ¥300〜／釜揚 ¥250〜</p>
            </div>
            <a href="https://www.instagram.com/yamashitaudon/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 Instagram</a>
          </div>
        </section>

        {/* Spot 4: 御宿 敷島館 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {shikishimaPhotos.map((src, i) => (<div key={i} className="relative aspect-[4/3] bg-stone-100"><Image src={src} alt="御宿敷島館 - 香川觀光推薦" fill sizes="50vw" className="object-cover" /></div>))}
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">4</div>
              <div><h3 className="text-base font-black text-stone-800">御宿 敷島館</h3><span className="text-xs text-stone-400">Onyado Shikishimakan</span></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於琴平町的<strong>傳統溫泉旅館</strong>♨️ 由人氣連鎖「Dormy Hotels」經營，融合日式傳統與現代設施。距離金刀比羅宮徒歩圈，是香川觀光的最佳住宿選擇。提供<strong>男女別大浴場・露天風呂・桑拿</strong>。
            </p>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Dormy系列著名的<strong>「夜鳴拉麵服務」</strong>—— 晚上免費提供一碗醬油拉麵🍜 早餐也有當地特色料理，包括<strong>讚岐烏龍麵吃到飽</strong>！房間整潔舒適，工作人員親切，是台灣・香港旅客也很安心入住的飯店。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">{["♨️ 大浴場＆露天風呂", "🍜 夜鳴拉麵免費", "🍳 烏龍麵早餐", "⛩️ 金刀比羅宮徒歩"].map((t) => (<span key={t} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t}</span>))}</div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 香川縣仲多度郡琴平町713-1</p>
              <p className="text-xs text-stone-600">🚃 JR土讚線「琴平」駅 徒歩約10分</p>
              <p className="text-xs text-stone-600">💴 一泊朝食付 ¥10,000〜／一泊二食 ¥15,000〜</p>
              <p className="text-xs text-stone-600">🛏️ 全室和洋折衷風格</p>
            </div>
            <a href="https://dormy-hotels.com/resort/hotels/shikishimakan/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 官方網站</a>

            {/* Klook 御宿敷島館バナー */}
            <a
              href={KLOOK_SHIKISHIMA}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-5 block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl p-5 shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <span className="absolute top-3 right-3 text-2xl opacity-50 select-none">♨️</span>
              <div className="relative flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full tracking-wide shadow-sm">
                  🎫 Travel Tips
                </span>
                <span className="text-[10px] text-stone-500 bg-white/60 backdrop-blur px-2 py-0.5 rounded-full">琴平溫泉旅館・空房查詢</span>
              </div>
              <div className="relative flex items-center gap-3 mb-4">
                <div className="relative w-20 h-20 shrink-0">
                  <div className="absolute inset-0 bg-white/70 backdrop-blur rounded-2xl border-2 border-white shadow-sm"></div>
                  <Image src="/poyapiyo-flag.png" alt="ぽやぴよ" fill sizes="80px" className="object-contain p-1 relative -rotate-[4deg]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-black text-stone-800 leading-tight mb-1">御宿 敷島館・空房查詢</h3>
                  <p className="text-xs text-stone-700 leading-relaxed">金刀比羅宮徒歩圈的溫泉旅館。出發前先看看價格與空房，方便安排香川兩日遊行程♨️</p>
                </div>
              </div>
              <div className="relative block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 rounded-full py-3 shadow-md">
                🏨 查看 御宿 敷島館 →
              </div>
              <p className="relative text-[10px] text-stone-500 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
            </a>
          </div>
        </section>

        {/* Spot 5: 金刀比羅宮 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {konpiraPhotos.map((src, i) => (<div key={i} className="relative aspect-square bg-stone-100"><Image src={src} alt="金刀比羅宮 - 香川觀光推薦" fill sizes="50vw" className="object-cover" /></div>))}
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">5</div>
              <div><h3 className="text-base font-black text-stone-800">金刀比羅宮</h3><span className="text-xs text-stone-400">Konpira-san / Kotohira-gu Shrine</span></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              通稱<strong>「こんぴらさん」</strong>，是<strong>四國最大的能量景點</strong>⛩️ 主祭神「大物主神」是海上交通的守護神，自古以來吸引全國信眾參拜。從參道入口到本宮要爬<strong>785階石階</strong>，再到奧社共有<strong>1368階</strong>，是體力挑戰也是視覺享受。
            </p>
            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                登上本宮的瞬間，眼前是<strong>讚岐平原與瀨戶內海的絕景</strong>🌊 一路上的<strong>參道商店街</strong>有各種烏龍麵、和菓子、紀念品店，邊爬邊吃邊逛超有趣。<strong>幸運黃色御守</strong>（幸福之黃御守）也是人氣紀念品✨ 路途中還有<strong>書院・寶物館</strong>等文化設施可參觀。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">{["⛩️ 四國最大能量景點", "💪 785階挑戰", "🌊 瀨戶內海絕景", "🍡 參道商店街", "💛 幸福之黃御守"].map((t) => (<span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>))}</div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 香川縣仲多度郡琴平町892-1</p>
              <p className="text-xs text-stone-600">🚃 JR土讚線「琴平」駅 徒歩約20分（到參道入口）</p>
              <p className="text-xs text-stone-600">⏰ 6:00〜18:00（御守授與所）</p>
              <p className="text-xs text-stone-600">💴 免費參拜／書院・寶物館 ¥800</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">石階陡又多，請穿好走的鞋👟 累的話可以坐人力車到中段（¥7,000〜）</p>
            </div>
            <a href="https://www.konpira.or.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 官方網站</a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">香川旅行小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從<strong>關西（新大阪）</strong>搭新幹線＋瀨戶大橋線到高松約<strong>3小時</strong></li>
            <li>✅ 烏龍麵店多在郊外，<strong>自駕</strong>最方便（也可參加烏龍麵巡禮巴士團）</li>
            <li>✅ 推薦行程：第1天 烏龍麵巡禮＋四國水族館 → 第2天 金刀比羅宮＋琴平住宿</li>
            <li>✅ 烏龍麵店多<strong>早上〜下午</strong>營業，傍晚就關了，要早起！</li>
            <li>✅ 金刀比羅宮石階多，<strong>輕裝＆好穿鞋</strong>是基本</li>
            <li>✅ 香川也是「直島藝術之島」的入口，可順遊瀨戶內海島嶼</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            讚岐烏龍麵、四國水族館、金刀比羅宮、傳統溫泉旅館——香川真的有太多魅力✨<br />
            來日本旅遊不只東京大阪，香川的療癒之旅也絕對讓你驚艷！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「釜玉烏龍麵真的好吃到流淚，金刀比羅宮的絕景也讓人感動🍜」</p>
            </div>
          </div>
        </div>

        {/* Klook 香川周遊パスバナー */}
        <section className="mb-8">
          <a
            href={KLOOK_KAGAWA_PASS}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block relative bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border-2 border-pink-200/80 rounded-3xl p-5 shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <span className="absolute top-3 right-3 text-2xl opacity-50 select-none">🎫</span>
            <span className="absolute bottom-4 left-4 text-base opacity-40 select-none">✨</span>

            <div className="relative flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white/80 backdrop-blur px-3 py-1 rounded-full tracking-wide shadow-sm">
                🎫 Travel Tips
              </span>
              <span className="text-[10px] text-stone-500 bg-white/60 backdrop-blur px-2 py-0.5 rounded-full">香川1週間周遊券</span>
            </div>

            <div className="relative flex items-center gap-3 mb-4">
              <div className="relative w-20 h-20 shrink-0">
                <div className="absolute inset-0 bg-white/70 backdrop-blur rounded-2xl border-2 border-white shadow-sm"></div>
                <Image
                  src="/poyapiyo-flag.png"
                  alt="ぽやぴよ"
                  fill
                  sizes="80px"
                  className="object-contain p-1 relative -rotate-[4deg]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-black text-stone-800 leading-tight mb-1">
                  想省交通費玩遍香川？
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  <strong>「Have Fun in Kagawa Pass」</strong>是能玩遍香川的1週間周遊券，交通＋景點一次搞定。行程排2〜3天以上很划算🎫
                </p>
              </div>
            </div>

            <div className="relative w-full aspect-[1200/628] rounded-2xl overflow-hidden mb-3 border border-white/60 shadow-sm">
              <Image
                src="/kagawa/klook-pass.png"
                alt="香川周遊券 Klook"
                fill
                sizes="(max-width: 672px) 100vw, 672px"
                className="object-cover"
              />
            </div>

            <div className="relative block w-full text-center text-sm font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 rounded-full py-3 shadow-md">
              🎫 查看 Have Fun in Kagawa Pass →
            </div>
            <p className="relative text-[10px] text-stone-500 mt-2 text-center">※ 內含聯盟行銷連結，讀者不會因此支付額外費用。</p>
          </a>
        </section>

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
