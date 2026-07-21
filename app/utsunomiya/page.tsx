import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";

const PAGE_URL = "https://www.japantrippicks.com/utsunomiya";
const OG_IMAGE = "/utsunomiya/wakayama-1.jpg";

export const metadata: Metadata = {
  title: "宇都宮觀光推薦3選｜栃木必去竹林・餃子街・二荒山神社【實際造訪】",
  description:
    "宇都宮觀光推薦3選！夢幻竹林絕景「若竹之杜 若山農場」、餃子街「宇都宮餃子通」、能量景點「宇都宮二荒山神社」。東京近郊一日遊好去處，附交通方式・推薦景點完整指南。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "宇都宮觀光推薦3選｜栃木必去竹林・餃子街・神社",
    description: "宇都宮一日遊！夢幻竹林・餃子街・能量景點神社。附交通・推薦完整指南。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "宇都宮觀光推薦・若山農場竹林" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "宇都宮觀光推薦3選｜栃木必去竹林・餃子街・神社",
    description: "宇都宮一日遊！夢幻竹林絕景＆餃子街＆能量神社🎋",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "宇都宮觀光推薦3選｜栃木必去竹林・餃子街・二荒山神社【實際造訪】",
  description: "宇都宮觀光推薦3選。若山農場竹林、宇都宮餃子通、二荒山神社完整介紹。",
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
    { "@type": "ListItem", position: 2, name: "宇都宮觀光推薦", item: PAGE_URL },
  ],
};

const wakayamaPhotos = ["/utsunomiya/wakayama-1.jpg", "/utsunomiya/wakayama-2.jpg", "/utsunomiya/wakayama-3.jpg"];
const gyozaPhotos = ["/utsunomiya/gyoza-1.jpg", "/utsunomiya/gyoza-2.jpg", "/utsunomiya/gyoza-3.jpg", "/utsunomiya/gyoza-4.jpg"];
const shrinePhotos = ["/utsunomiya/shrine-1.jpg", "/utsunomiya/shrine-2.jpg", "/utsunomiya/shrine-3.jpg"];

const relatedLinks = [
  { href: "/kamikochi", label: "🏔️ 上高地＆奧飛騨旅行推薦4選｜日本阿爾卑斯絕景", desc: "河童橋・新穂高纜車・奧飛騨溫泉" },
  { href: "/hakone", label: "🚃 箱根一日遊推薦｜從東京搭浪漫特快出發", desc: "美術館・足湯・神社・甜點" },
  { href: "/koyo", label: "🍁 東京紅葉推薦｜神宮外苑銀杏並木", desc: "金黃銀杏大道・東京秋天必去景點" },
];

export default function UtsunomiyaPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">宇都宮觀光推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🎋 觀光景點</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 栃木・宇都宮</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          宇都宮觀光推薦3選｜<br />栃木必去竹林・餃子・神社🎋
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">從東京搭新幹線50分！栃木宇都宮一日遊</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>宇都宮</strong>是栃木縣的縣廳所在地，從東京搭新幹線只要<strong>約50分</strong>就能抵達🚄 是日本知名的「<strong>餃子之都</strong>」，每年人均餃子消費量名列前茅。除了餃子之外，還有<strong>夢幻竹林</strong>和歷史悠久的<strong>能量景點</strong>。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這次推薦的3個必去景點：<strong>若山農場</strong>的夢幻竹林（為日劇、廣告取景地）、<strong>宇都宮餃子通</strong>的餃子巡禮，以及宇都宮地標<strong>二荒山神社</strong>✨ 一天行程剛剛好！
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">若竹之杜 若山農場 → 夢幻竹林絕景</p>
                <p className="text-xs text-stone-500 leading-relaxed">大河劇取景地・24萬㎡的廣大竹林與森林</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">宇都宮餃子通 → 餃子巡禮天堂</p>
                <p className="text-xs text-stone-500 leading-relaxed">日本餃子消費量No.1的城市、5間人氣店集中</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">宇都宮二荒山神社 → 能量景點</p>
                <p className="text-xs text-stone-500 leading-relaxed">1600年歷史的宇都宮地標、勝運御守人氣</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">宇都宮觀光推薦・3選</h2>

        {/* Spot 1: 若竹の杜 若山農場 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {wakayamaPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="若竹の杜 若山農場 - 宇都宮觀光推薦" fill sizes="33vw" className="object-cover" priority={i === 0} />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">若竹の杜 若山農場</h3>
                <span className="text-xs text-stone-400">Wakatake-no-Mori Wakayama Farm</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              佔地<strong>24萬㎡</strong>的廣大農場，擁有日本最大級的<strong>「孟宗竹」竹林</strong>🎋 被指定為農林水產大臣賞、總理大臣賞獲獎的優良筍產地。同時也是NHK大河劇<strong>「真田丸」「龍馬傳」</strong>等知名作品的取景地，宛如電影場景的夢幻竹林絕景。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                走進竹林的瞬間，陽光從竹葉縫隙灑下來，氛圍超夢幻📸 適合IG拍照、和服攝影📷 秋季限定的<strong>夜間點燈</strong>更是必看絕景！園內也有筍料理餐廳和產地直送商店，可以品嚐當地新鮮竹筍。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🎋 夢幻竹林", "🎬 大河劇取景", "📸 IG拍照聖地", "🌙 秋季點燈"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 栃木縣宇都宮市新里町丙254</p>
              <p className="text-xs text-stone-600">🚃 JR「宇都宮」駅搭計程車約25分（建議自駕）</p>
              <p className="text-xs text-stone-600">⏰ 9:00〜17:00（季節變動）</p>
              <p className="text-xs text-stone-600">💴 入園料 ¥1,000〜（依季節變動）</p>
              <p className="text-xs text-stone-600">🅿️ 免費停車場有</p>
            </div>

            <a href="https://www.wakayamafarm.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Spot 2: 餃子通り */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {gyozaPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="宇都宮餃子通 - 宇都宮觀光推薦" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">宇都宮餃子通</h3>
                <span className="text-xs text-stone-400">Utsunomiya Gyoza Street</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於宇都宮站附近的<strong>「餃子通り」</strong>🥟 集中了多間人氣餃子名店，包含<strong>「正嗨」「香蘭」「青源」「めんめん」</strong>等。宇都宮是日本人均餃子消費量名列前茅的城市，每一間店都有自己的特色——煎餃、水餃、揚げ餃子應有盡有。
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                走在這條街上可以體驗<strong>「餃子巡禮」</strong>🥟 各家店的餃子各有特色：有偏蔬菜的健康派、肉汁飽滿派、辣味派等。建議1家點1〜2份，多間店試吃比較！一份大約<strong>¥250〜¥400</strong>，CP值超高💰
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🥟 餃子之都", "💰 一份¥250〜", "🍻 配啤酒一流", "🚶 站前徒步圈"].map((t) => (
                <span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 栃木縣宇都宮市馬場通り3丁目〜大通り一帶</p>
              <p className="text-xs text-stone-600">🚃 JR「宇都宮」駅 徒歩約10分</p>
              <p className="text-xs text-stone-600">⏰ 各店不同（多數11:00〜21:00）</p>
              <p className="text-xs text-stone-600">💴 一份餃子 ¥250〜¥400</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">熱門店在午餐時段常常需要排隊，建議錯峰前往或2〜3人分食多家店</p>
            </div>

            <a href="https://www.utsunomiya-cvb.org/spot/detail_10020.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方觀光資訊
            </a>
          </div>
        </section>

        {/* Spot 3: 宇都宮二荒山神社 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-3 gap-0.5">
            {shrinePhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="宇都宮二荒山神社 - 宇都宮觀光推薦" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div>
                <h3 className="text-base font-black text-stone-800">宇都宮二荒山神社</h3>
                <span className="text-xs text-stone-400">Utsunomiya Futaarayama Jinja</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於宇都宮市中心的<strong>能量景點</strong>⛩️ 創建於約1,600年前的歷史悠久神社，是宇都宮的地標和精神象徵。位於市中心的高台上，需爬上石階參拜，從境內可以俯瞰宇都宮市區。當地人尊稱為「<strong>二荒様</strong>」。
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                被當地人視為<strong>「勝運・開運」的能量景點</strong>✨ 主祭神是「豐城入彥命」，自古以來吸引許多人前來祈求勝運、生意興隆、家內安全。境內氛圍莊嚴又寧靜，是在熱鬧的宇都宮市區中難得的<strong>心靈療癒之處</strong>🌿 御朱印和御守也很受歡迎。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["⛩️ 1,600年歷史", "✨ 能量景點", "🍀 勝運祈願", "📿 御朱印"].map((t) => (
                <span key={t} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 栃木縣宇都宮市馬場通り1-1-1</p>
              <p className="text-xs text-stone-600">🚃 JR「宇都宮」駅 徒歩約15分（從餃子通走過去很近）</p>
              <p className="text-xs text-stone-600">⏰ 全日開放（御守授與所 9:00〜17:00）</p>
              <p className="text-xs text-stone-600">💴 免費</p>
            </div>

            <a href="http://futaarayamajinja.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">宇都宮旅行小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從東京搭新幹線「やまびこ」到宇都宮約<strong>50分</strong>，當天來回方便🚄</li>
            <li>✅ 若山農場離站較遠，建議<strong>自駕或計程車</strong>前往</li>
            <li>✅ 餃子通＋二荒山神社可以走路逛，安排在同一行程</li>
            <li>✅ 推薦行程：上午若山農場 → 午餐餃子通 → 下午二荒山神社</li>
            <li>✅ 若想品嚐多間餃子店，建議<strong>2〜3人前往</strong>分食</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            夢幻竹林、餃子巡禮、能量神社——宇都宮是東京近郊一日遊的隱藏寶地✨<br />
            從新幹線只要50分，下次來日本旅遊絕對要排進行程！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「若山農場的竹林真的美到屏息，餃子通也讓人吃到欲罷不能🥟」</p>
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
