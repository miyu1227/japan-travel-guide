import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import { photoStyle } from "@/lib/photoDims";

import MapButton from "../components/MapButton";
const PAGE_URL = "https://www.japantrippicks.com/torikizoku";
const OG_IMAGE = "/torikizoku/torikizoku-1.jpg";

export const metadata: Metadata = {
  title: "鳥貴族菜單怎麼點？全品¥410燒鳥居酒屋✅實吃",
  description:
    "鳥貴族（Torikizoku）全品均一¥410含稅、烤雞肉串一份2串。中文菜單、貴族燒等必點、點餐順序、訂位與刷卡須知，日本居酒屋入門一次看懂。",
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
    title: "鳥貴族菜單怎麼點？全品¥410的日本燒鳥居酒屋",
    description: "全品均一¥410、烤雞肉串一份2串。貴族燒、山藥泥鐵板燒等必點與點餐方式整理🍢",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 900, alt: "鳥貴族 烤雞肉串與貴族燒" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "鳥貴族菜單怎麼點？全品¥410燒鳥居酒屋",
    description: "全品均一¥410、一份2串。貴族燒・中文菜單・點餐方式🍢",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "鳥貴族菜單怎麼點？全品¥410的日本燒鳥居酒屋【實際造訪】",
  description: "鳥貴族（Torikizoku）全品均一¥410：必點菜單、中文菜單、點餐方式、訂位與付款須知。",
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
    { "@type": "ListItem", position: 2, name: "東京美食推薦", item: "https://www.japantrippicks.com/tokyo-gourmet" },
    { "@type": "ListItem", position: 3, name: "鳥貴族菜單怎麼點", item: PAGE_URL },
  ],
};

const faqs = [
  {
    q: "鳥貴族是什麼？怎麼唸？",
    a: "鳥貴族（日文：とりきぞく，羅馬拼音 Torikizoku／Tori Kizoku，日本人常簡稱「トリキ／Toriki」）是1985年在大阪創業的燒鳥（烤雞肉串）居酒屋連鎖店，招牌是黃底紅字的看板，日本各地都有分店。",
  },
  {
    q: "鳥貴族的價錢多少？",
    a: "食物和飲料全部均一價，2026年10月1日起是每品¥410（含稅，未稅¥373），之前是¥390。烤雞肉串一份是2串，所以一份¥410就是2串的價錢。",
  },
  {
    q: "有中文菜單嗎？",
    a: "官網有中文、英文、韓文的菜單PDF（中文版是簡體字），上面有照片和編號。出發前先存到手機，到店裡指著照片點最快。",
  },
  {
    q: "鳥貴族怎麼點餐？",
    a: "點餐方式依店舖不同（桌上平板、手機掃碼或請店員點）。推薦順序：先點飲料＋一盤可以免費續的「滿量高麗菜」，再點貴族燒等烤串，最後看肚子加炸物或飯類。",
  },
  {
    q: "要訂位嗎？可以刷卡嗎？",
    a: "可以在官網或官方App線上訂位，也能打電話到店，訂位用餐是2小時制（新開幕特賣期間的店不接受訂位）。信用卡是否能用依店舖不同，官網的各店頁面可以查，準備一些現金比較保險。",
  },
  {
    q: "一個人大概花多少？",
    a: "每品都是¥410，好算：點5盤菜＋2杯飲料是7品×¥410＝¥2,870。想吃飽喝足抓¥3,000〜4,000左右。",
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
  { href: "/tokyo-yakiniku", label: "🥩 東京燒肉推薦", desc: "高級燒肉與內臟燒肉怎麼選" },
  { href: "/ramen", label: "🍜 東京拉麵推薦", desc: "濃厚系・清爽系排隊名店整理" },
  { href: "/shibuya-gohan", label: "🍽️ 澀谷一個人的一餐", desc: "不用訂位、車站附近就能解決" },
];

const photos = ["/torikizoku/torikizoku-1.jpg", "/torikizoku/torikizoku-2.jpg", "/torikizoku/torikizoku-3.jpg"];
const photoAlts = [
  "鳥貴族 貴族燒・雞肉丸起司燒・雞肝等烤雞肉串",
  "鳥貴族 山藥泥鐵板燒與烤串",
  "鳥貴族 黃底紅字的招牌看板",
];

export default function TorikizokuPage() {
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
          <span className="text-sm font-semibold text-stone-700 truncate">鳥貴族菜單怎麼點</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-red-100 text-red-700 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">🍢 燒鳥居酒屋</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 日本全國</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際品嚐</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          鳥貴族菜單怎麼點？<br />全品¥410的日本燒鳥居酒屋🍢
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-11-19</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">第一次去日本居酒屋，從鳥貴族開始最安心</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>鳥貴族（Torikizoku）</strong>是日本人說「去喝一杯吧」時最常想到的燒鳥居酒屋連鎖店🍢 黃底紅字的大招牌很好認，最大的特色是<strong>食物和飲料全部同一個價錢：每品¥410（含稅）</strong>，烤雞肉串一份就是2串。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            日本居酒屋對台灣・香港旅客來說，常常卡在「菜單看不懂」「不知道會花多少」。鳥貴族兩個問題都沒有：<strong>官網有中文菜單</strong>，價錢只要「盤數×¥410」就算得出來。這一頁整理<strong>必點菜單、點餐順序、訂位與付款</strong>，第一次去也不用緊張✨
          </p>
        </section>

        <PrepBannerCompact />

        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">鳥貴族（Torikizoku）必點菜單</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {photos.map((src, i) => (
              <div key={src} className="relative bg-stone-100" style={photoStyle(src)}>
                <Image
                  src={src}
                  alt={photoAlts[i]}
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
              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">鳥貴族</h3>
                <span className="text-xs text-stone-400">TORIKIZOKU・Yakitori Izakaya</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              鳥貴族<strong>1985年在大阪創業</strong>，現在日本各地都有分店。官方表示烤串使用<strong>日本國產雞肉</strong>，並在店內<strong>一串一串手工串起</strong>；連蔬菜在內，菜單上的食材<strong>100%日本國產</strong>。烤串可以從<strong>鹽味・秘傳醬汁・香辣</strong>3種口味選。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                <strong>全品均一¥410</strong>，不用一直看價錢，想吃什麼就加什麼💰 啤酒、Highball、果實酒、無酒精飲料也都是¥410。還有一盤<strong>「滿量高麗菜」可以免費續盤</strong>，配烤串剛好解膩。帶小孩的話，<strong>國中生以下的兒童飲料¥410就能無限暢飲</strong>。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["💴 全品¥410含稅", "🍢 烤串一份2串", "🇯🇵 食材100%國產", "🥬 高麗菜免費續", "📖 有中文菜單", "📱 可線上訂位"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 必點 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍢 照片裡的必點（每品¥410・含稅）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>貴族燒</strong>：鳥貴族的招牌，大塊雞腿肉或雞胸肉夾蔥的大串。雞腿、雞胸都能選鹽味・醬汁・香辣</li>
                <li><strong>雞肉丸起司燒</strong>：雞肉丸上鋪起司，官方說是女性最愛的一品</li>
                <li><strong>雞肝</strong>：醬汁口味。官方說因為在店內串，所以沒有腥味</li>
                <li><strong>山藥泥鐵板燒</strong>：國產山藥加上鳥貴族自家調味高湯，上桌時放一顆蛋黃和海苔</li>
                <li><strong>卡門貝爾起司可樂餅</strong>：圓圓的炸餅，附醬料</li>
              </ul>
              <p className="text-xs text-stone-500 mt-2">其他人氣：鳥貴族唐揚炸雞、南蠻雞、北海道產馬鈴薯薯條、雞湯釜飯。</p>
            </div>

            {/* 怎麼點餐 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">📝 怎麼點餐（建議順序）</p>
              <ol className="text-xs text-stone-600 space-y-1.5 list-decimal list-inside">
                <li>入座後先點<strong>飲料＋滿量高麗菜</strong>（高麗菜可以免費續）</li>
                <li>再點<strong>貴族燒</strong>，同一種串可以分別點鹽味和醬汁吃吃看</li>
                <li>加點<strong>雞肝・雞肉丸起司燒</strong>等烤串，烤串要等一下，一次點3〜4盤剛好</li>
                <li>最後看肚子加<strong>山藥泥鐵板燒、炸物或飯類</strong></li>
              </ol>
              <p className="text-xs text-stone-500 mt-2">點餐方式依店舖不同（桌上平板・手機掃碼・請店員點）。用中文菜單PDF指照片也能點。</p>
            </div>

            {/* 3種口味 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🧂 3種口味怎麼選</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>鹽味</strong>：吃得到雞肉本身的味道。官方自2023年5月起使用岩鹽</li>
                <li><strong>秘傳醬汁</strong>：創業以來的醬汁，用大量蔬菜和水果跟雞肉一起慢燉，帶出蔬果的甜味與醇厚感</li>
                <li><strong>香辣</strong>：混合洋蔥、胡椒等香料的辣味粉</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">日本全國各地（東京・大阪等大城市車站周邊很多）</p>
              <MapButton q="鳥貴族" nearby />
              <p className="text-xs text-stone-600 ib ib-train">最近的分店用官方「店舗檢索」查，多數在車站步行範圍內</p>
              <p className="text-xs text-stone-600 ib ib-clock">營業時間・公休日依店舖不同（官網各店頁面確認）</p>
              <p className="text-xs text-stone-600 ib ib-yen">全品均一¥410（含稅，2026年10月1日起）</p>
              <p className="text-xs text-stone-600">📅 訂位：官網・官方App・電話，訂位用餐2小時制</p>
              <p className="text-xs text-stone-600">💳 刷卡：依店舖不同，建議帶現金</p>
              <p className="text-xs text-stone-600">📖 中文菜單：官網有中文（簡體）・英文・韓文菜單PDF</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">
                烤雞肉串是<strong>一份2串</strong>。2個人去的話一人一串剛好，可以多點幾種分著吃；一個人去點3〜4種串＋1杯飲料是¥1,640〜2,050
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <a href="https://torikizoku.co.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                🔗 官方網站
              </a>
              <a href="https://torikizoku.co.jp/assets/uploads/2026/10/menu_cn.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                📖 中文菜單PDF
              </a>
              <a href="https://map.torikizoku.co.jp/store/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                📍 店舗檢索
              </a>
              <a href="https://www.instagram.com/torikizoku.official/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
                📷 官方Instagram
              </a>
            </div>
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
            <li>✅ 出發前把<strong>官網的中文菜單PDF</strong>存到手機，指照片點最快</li>
            <li>✅ 想晚餐時段去的話，用<strong>官網或App先訂位</strong>（2小時制）</li>
            <li>✅ 先點<strong>滿量高麗菜</strong>，可以免費續盤</li>
            <li>✅ 刷卡依店舖不同，<strong>身上帶點現金</strong>比較安心</li>
            <li>✅ 價錢＝<strong>盤數×¥410</strong>，結帳前自己就算得出來</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            看得懂菜單、價錢一目了然、到處都有分店——鳥貴族是日本居酒屋的最佳入門🍢<br />
            旅途中想輕鬆喝一杯、吃點烤雞肉串的晚上，找黃色招牌就對了！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「貴族燒先點鹽味和醬汁各一份，比一比再決定第二輪🍢」</p>
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

        <RelatedArticles slug="torikizoku" exclude={["/tokyo-yakiniku", "/ramen", "/shibuya-gohan"]} />

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
