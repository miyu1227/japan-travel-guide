import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.japantrippicks.com/kochi";
const OG_IMAGE = "/kochi/nikobuchi-1.jpg";

export const metadata: Metadata = {
  title: "高知觀光推薦3選｜四國必去仁淀藍秘境・鰹魚タタキ・ひろめ市場【實際造訪】",
  description:
    "高知縣旅遊完全指南！日本三大清流「仁淀川」的夢幻藍色秘境「にこ淵」、鰹魚タタキ體驗道場、人氣美食市場「ひろめ市場」。四國高知一日遊推薦行程，附交通・門票・必吃。台灣・香港旅客必看！",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "高知觀光推薦3選｜四國必去仁淀藍秘境・鰹魚タタキ・ひろめ市場",
    description: "高知旅遊指南！仁淀藍秘境にこ淵＆鰹魚タタキ體驗＆ひろめ市場美食。附交通・推薦。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "高知觀光推薦・にこ淵仁淀藍" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "高知觀光推薦3選｜四國必去仁淀藍・鰹魚タタキ・ひろめ市場",
    description: "高知旅遊指南！仁淀藍秘境＆鰹魚體驗＆人氣市場🐟",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "高知觀光推薦3選｜四國必去仁淀藍秘境・鰹魚タタキ・ひろめ市場【實際造訪】",
  description: "高知縣旅遊完全指南。仁淀川にこ淵、タタキ道場、ひろめ市場。",
  url: PAGE_URL,
  inLanguage: "zh-TW",
  author: { "@type": "Organization", name: "Japan Trip Picks" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "高知觀光推薦", item: PAGE_URL },
  ],
};

const nikobuchiPhotos = ["/kochi/nikobuchi-1.jpg", "/kochi/nikobuchi-2.jpg"];
const tatakiPhotos = ["/kochi/tataki-1.jpg", "/kochi/tataki-2.jpg", "/kochi/tataki-3.jpg"];
const hiromePhotos = ["/kochi/hirome-1.jpg", "/kochi/hirome-2.jpg", "/kochi/hirome-3.jpg", "/kochi/hirome-4.jpg"];

const relatedLinks = [
  { href: "/kagawa", label: "🍜 香川觀光推薦5選｜烏龍麵縣美食・水族館・金刀比羅宮", desc: "讚岐烏龍麵＆四國水族館＆金刀比羅宮" },
  { href: "/hikone", label: "🏯 彥根城觀光推薦｜滋賀必去國寶城・吉祥物彥根貓", desc: "日本國寶＋彥根貓＋江戶城下町" },
  { href: "/kamikochi", label: "🏔️ 上高地＆奧飛騨旅行推薦4選", desc: "河童橋・新穂高纜車・奧飛騨溫泉" },
];

export default function KochiPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">高知觀光推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🌊 觀光美食</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 高知・四國</span>
          <span className="bg-pink-50 text-pink-600 border border-pink-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          高知觀光推薦3選｜四國必去仁淀藍<br />秘境・鰹魚タタキ・ひろめ市場🌊
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026年</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">高知——日本最後的清流＆鰹魚之鄉</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>高知縣</strong>位於四國南部，擁有<strong>日本三大清流之一</strong>的<strong>仁淀川</strong>🌊 透明度極高的河水形成夢幻的「<strong>仁淀藍</strong>」絕景，是攝影愛好者必朝聖的隱藏景點。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            除了自然絕景，高知也是<strong>「鰹魚之鄉」</strong>，<strong>鰹魚タタキ（炙烤鰹魚生魚片）</strong>是當地必吃名物🐟 這次推薦的3個必去景點：仁淀川的秘境<strong>「にこ淵」</strong>、可以親手體驗的<strong>「タタキ道場」</strong>，以及高知美食天堂<strong>「ひろめ市場」</strong>✨
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3"><span className="text-green-500 font-black text-sm shrink-0">▸</span><div><p className="text-sm font-bold text-stone-700">にこ淵 → 仁淀藍夢幻秘境</p><p className="text-xs text-stone-500 leading-relaxed">透明度日本第一、夢幻藍色水池、攝影聖地</p></div></div>
            <div className="flex gap-3"><span className="text-green-500 font-black text-sm shrink-0">▸</span><div><p className="text-sm font-bold text-stone-700">タタキ道場 → 鰹魚炙烤體驗</p><p className="text-xs text-stone-500 leading-relaxed">親手炙烤鰹魚タタキ、稻草大火超震撼</p></div></div>
            <div className="flex gap-3"><span className="text-green-500 font-black text-sm shrink-0">▸</span><div><p className="text-sm font-bold text-stone-700">ひろめ市場 → 高知美食天堂</p><p className="text-xs text-stone-500 leading-relaxed">市中心、60間店、鰹魚＆酒＆當地料理</p></div></div>
          </div>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4">高知觀光推薦・3選</h2>

        {/* Spot 1: にこ淵 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-2 gap-0.5">
            {nikobuchiPhotos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] bg-stone-100">
                <Image src={src} alt="にこ淵 - 高知觀光推薦" fill sizes="50vw" className="object-cover" priority={i === 0} />
              </div>
            ))}
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div><h3 className="text-base font-black text-stone-800">にこ淵</h3><span className="text-xs text-stone-400">Niko-buchi / Niyodo Blue Sacred Spot</span></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              位於高知縣伊野町的<strong>夢幻祕境</strong>💎 是<strong>日本三大清流</strong>「仁淀川」支流上的小水池，因水質極度透明而呈現獨特的<strong>「仁淀藍（Niyodo Blue）」</strong>。當地古傳這是水神所居之地，被視為神聖之處。
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-blue-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                陽光從樹葉縫隙照進水面的瞬間，水池呈現超現實的<strong>翡翠藍色</strong>📸 是日本攝影界知名的祕境之一，常被選為日曆封面、廣告取景地。從停車場走階梯下去約5分鐘即達，雖然路程不長但石階陡峭，需小心慢行。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">{["💎 仁淀藍秘境", "📸 攝影聖地", "🌳 自然絕景", "🏞️ 日本三大清流"].map((t) => (<span key={t} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">{t}</span>))}</div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 高知縣吾川郡伊野町清水上分</p>
              <p className="text-xs text-stone-600">🚃 高知市中心開車約60分（建議自駕）</p>
              <p className="text-xs text-stone-600">⏰ 全日（建議白天造訪，光線最美）</p>
              <p className="text-xs text-stone-600">💴 免費</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">階梯陡峭，請穿好走的鞋👟 雨天或雨後石階濕滑，注意安全</p>
            </div>
            <a href="https://www.inofan.jp/spot/recommended/n497/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 觀光資訊</a>
          </div>
        </section>

        {/* Spot 2: タタキ道場 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          <div className="grid grid-cols-3 gap-0.5">
            {tatakiPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="タタキ道場 - 高知觀光推薦" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div><h3 className="text-base font-black text-stone-800">タタキ道場</h3><span className="text-xs text-stone-400">Tataki Dojo / Bonito Searing Experience</span></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              在高知<strong>親手體驗鰹魚タタキ炙烤</strong>的人氣設施🔥 由黑潮工房經營，提供「<strong>稻草大火炙烤鰹魚</strong>」的體驗。使用傳統的稻草作為燃料，瞬間升起的大火將鰹魚表面炙烤出香氣四溢的焦香層，這就是正宗的<strong>「藁焼きタタキ」</strong>。
            </p>
            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-red-500 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                稻草燒起來的<strong>大火超震撼</strong>，是只有高知才能體驗的特殊料理文化🔥 自己親手炙烤的鰹魚，外香內生鮮甜，搭配當地的<strong>柚子鹽</strong>更是絕配。體驗約30分鐘、約<strong>¥2,500</strong>，包含一份炙烤鰹魚タタキ＆白飯。適合<strong>親子・情侶・朋友</strong>，是難忘的高知回憶✨
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">{["🔥 稻草大火炙烤", "🐟 鰹魚タタキ體驗", "👨‍🍳 親手料理", "📸 震撼畫面"].map((t) => (<span key={t} className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full">{t}</span>))}</div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 高知縣高知市中心（多店舗）／中土佐町黑潮工房（本店）</p>
              <p className="text-xs text-stone-600">🚃 各店不同（市中心店徒歩可達）</p>
              <p className="text-xs text-stone-600">⏰ 11:00〜21:00（依店舖）</p>
              <p className="text-xs text-stone-600">💴 體驗 ¥2,500〜（含一份鰹魚タタキ＆白飯）</p>
              <p className="text-xs text-stone-600">📞 建議事先預約</p>
            </div>
            <a href="https://www.tataki.co.jp/tenpo.htm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 官方店舗資訊</a>
          </div>
        </section>

        {/* Spot 3: ひろめ市場 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {hiromePhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="ひろめ市場 - 高知觀光推薦" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div><h3 className="text-base font-black text-stone-800">ひろめ市場</h3><span className="text-xs text-stone-400">Hirome Market</span></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              高知市中心的<strong>美食天堂</strong>🍻 位於高知城旁，是匯集<strong>60間店舖</strong>的室內市場，包含鰹魚タタキ專門店、餃子、海鮮丼、烏龍麵、甜點、酒吧等。中央有共用座位區，可以邊吃邊喝邊聊天，氣氛熱鬧又輕鬆。
            </p>
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                想一次吃到高知所有名物——這裡就對了！招牌的<strong>「明神丸」鰹魚タタキ</strong>必吃🐟 還有名物餃子「<strong>安兵衛</strong>」、四萬十川的海苔、當地日本酒等。中午〜傍晚都很熱鬧，<strong>當地人＆觀光客</strong>混在一起的氛圍超有趣。預算<strong>¥2,000〜¥3,000</strong>就能吃飽喝足。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">{["🐟 鰹魚タタキ", "🍶 高知地酒", "🥟 名物餃子", "🍻 熱鬧氛圍", "💰 ¥2,000〜"].map((t) => (<span key={t} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t}</span>))}</div>
            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 高知縣高知市帶屋町2-3-1</p>
              <p className="text-xs text-stone-600">🚃 土佐電鐵「大橋通」駅 徒歩約2分／JR「高知」駅 徒歩約20分</p>
              <p className="text-xs text-stone-600">⏰ 10:00〜23:00（週日 9:00〜・依店舖變動）</p>
              <p className="text-xs text-stone-600">💴 預算 ¥2,000〜¥3,000</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">傍晚〜晚上人最多，建議稍微早一點去佔位子</p>
            </div>
            <a href="https://hirome.co.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2">🔗 官方網站</a>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">高知旅行小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 從<strong>關西（新大阪）</strong>搭新幹線＋特急到高知約<strong>4小時</strong>，飛機更快（伊丹〜高知約45分）</li>
            <li>✅ 仁淀川秘境離市區較遠，<strong>自駕必要</strong>🚗</li>
            <li>✅ 推薦行程：上午にこ淵→中午タタキ道場體驗→晚上ひろめ市場</li>
            <li>✅ <strong>鰹魚タタキ的當令期</strong>是春（4〜5月）和秋（9〜10月）</li>
            <li>✅ 高知也是<strong>坂本龍馬</strong>的故鄉，順遊桂濱也很推薦</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            仁淀藍的夢幻祕境、稻草大火的鰹魚體驗、熱鬧的美食市場——高知的魅力真的超乎想像✨<br />
            來四國旅遊，高知絕對能讓你感受到日本鄉土最真實的一面！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「にこ淵的藍真的好美，自己烤的鰹魚タタキ也好吃到難忘🐟」</p>
            </div>
          </div>
        </div>

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
