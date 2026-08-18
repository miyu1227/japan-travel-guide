import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";

const PAGE_URL = "https://www.japantrippicks.com/mister-donut";
const OG_IMAGE = "/mister-donut/motchurin-1.jpg";

export const metadata: Metadata = {
  title: "Mister Donut期間限定｜もっちゅりん甜甜圈✅實購",
  description:
    "Mister Donut（ミスタードーナツ）期間限定話題新商品「もっちゅりん」。結合波堤＆布丁的Q彈口感，每天排隊售完。附口味種類・價格・購買方式。",
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
    title: "Mister Donut期間限定推薦｜超人氣もっちゅりん甜甜圈",
    description: "日本ミスドの新商品「もっちゅりん」！結合波堤＆布丁的Q彈甜甜圈。每天排隊售完。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Mister Donut もっちゅりん" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mister Donut期間限定推薦｜超人氣もっちゅりん甜甜圈",
    description: "ミスドの話題新商品！波堤＋布丁的Q彈甜甜圈🍩",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Mister Donut期間限定推薦｜超人氣もっちゅりん甜甜圈【實際購買】",
  description: "日本Mister Donut期間限定新商品「もっちゅりん」完整介紹。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
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
    { "@type": "ListItem", position: 2, name: "Mister Donut推薦", item: PAGE_URL },
  ],
};

const relatedLinks = [
  { href: "/tokyo-cookies", label: "🍪 東京伴手禮推薦｜高級手工餅乾", desc: "奧地利認證大師的手工餅乾禮盒" },
  { href: "/isehara-gelato", label: "🍦 伊勢原ジェラート｜石田牧場めぐり", desc: "牧場直送鮮牛奶的隱藏名店" },
  { href: "/daikanyama-cafe", label: "☕ 代官山咖啡廳推薦2選｜PRINCI＆DOLCE TACUBO", desc: "義式烘焙＆星級甜點" },
];

export default function MisterDonutPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">Mister Donut推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-orange-100 text-orange-700 border border-orange-300 text-xs font-semibold px-3 py-1 rounded-full">🍩 期間限定</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 日本全國</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際購買</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          Mister Donut期間限定｜<br />超人氣もっちゅりん甜甜圈🍩
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-07-21</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">每天排隊售完！日本最話題的限定甜甜圈</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            日本最大連鎖甜甜圈店<strong>Mister Donut（ミスタードーナツ）</strong>，2026年推出的<strong>期間限定新商品</strong>「もっちゅりん」🍩 結合招牌波堤的Q彈與布丁的滑順，是日本社群媒體話題第一名的甜點（甜品）！
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            因為太受歡迎，全國門市每天都<strong>排隊到售完</strong>，許多客人開店前就在等。從台灣・香港來日本旅遊，絕對不能錯過這個只有日本才吃得到的限定美味✨
          </p>
        </section>

        <PrepBannerCompact />

        {/* Shop */}
        <h2 className="text-lg font-black text-stone-800 mb-4">日本期間限定甜點推薦（推介）</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 gap-0.5">
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image src="/mister-donut/motchurin-1.jpg" alt="Mister Donut もっちゅりん - 期間限定推薦" fill sizes="100vw" className="object-cover" priority />
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-black shrink-0">★</div>
              <div>
                <h3 className="text-base font-black text-stone-800">Mister Donut「もっちゅりん」</h3>
                <span className="text-xs text-stone-400">Mochurin Limited Donut Series</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              Mister Donut最新話題商品「<strong>もっちゅりん</strong>」🍮 將招牌的<strong>「ポン・デ・リング（波堤甜甜圈）」</strong>與<strong>布丁</strong>結合，創造出前所未見的Q彈軟綿口感。波堤的8顆圓珠中央放入布丁醬，外脆內Q再加上滑順布丁，是日本甜點史上的革命性新商品。
            </p>

            <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-orange-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                這款限定甜甜圈只有<strong>日本Mister Donut</strong>才買得到🇯🇵 來日本旅遊一定要嘗試！口感超Q彈、不太甜膩，是適合配咖啡或紅茶的下午茶甜點。<strong>單價約¥200〜¥260</strong>就能享受高品質甜點，CP值超高💰 多種口味可選，每次去都能試新的。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🍩 期間限定", "🍮 波堤×布丁", "💰 ¥200〜¥260", "🔥 每天排隊售完", "🇯🇵 日本獨家"].map((t) => (
                <span key={t} className="text-xs bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 推薦菜單 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍩 推薦口味</p>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>・<strong>もっちゅりん 卡士達</strong> — 經典款，布丁醬最招牌</li>
                <li>・<strong>もっちゅりん 焦糖</strong> — 大人風味，焦糖香氣濃郁</li>
                <li>・<strong>もっちゅりん 抹茶</strong> — 日本限定，宇治抹茶醇厚</li>
                <li>・<strong>もっちゅりん 巧克力</strong> — 甜點控必試</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600">📍 日本全國Mister Donut各店舗</p>
              <p className="text-xs text-stone-600">🚃 各車站・商業設施內多數有店舖</p>
              <p className="text-xs text-stone-600">⏰ 各店不同（多數7:00〜21:00）</p>
              <p className="text-xs text-stone-600">💴 ¥200〜¥260／個</p>
              <p className="text-xs text-stone-600">📅 期間限定（售完即止）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">人氣超高，<strong>每天傍晚多數店舖就會售完</strong>！建議上午或中午前去最確實。可在Mister Donut官網查詢最近店舗</p>
            </div>

            <a
              href="https://www.misterdonut.jp/m_menu/new/260603_motchurin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 官方網站
            </a>
          </div>
        </section>

        {/* Mister Donut 品牌背景 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">關於 Mister Donut（ミスド）</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            Mister Donut（ミスタードーナツ／ミスド）是<strong>日本最大的甜甜圈連鎖店</strong>🍩 起源於1955年的美國，1970年由日本Duskin引進，目前在日本已有超過<strong>950家分店</strong>。招牌商品「<strong>Pon de Ring（ポン・デ・リング）</strong>」是2003年推出的Q彈波堤造型甜甜圈，是ミスド的代表商品。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            ミスド的季節限定商品變化豐富，經常與<strong>森半・GODIVA・祇園辻利・銀座木村家</strong>等品牌聯名，是日本人非常熟悉的甜點日常。這次介紹的「もっちゅりん」是Pon de Ring加上布丁醬的話題新品🍮
          </p>
        </section>

        {/* もっちゅりん 詳細 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">もっちゅりん（Mocchurin）詳細</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-orange-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">口感特色</p>
                <p className="text-xs text-stone-500 leading-relaxed">外層是Pon de Ring特有的<strong>Q彈連珠麻糬狀</strong>，內裡注入濃郁的<strong>卡士達布丁醬</strong>，一口下去有麻糬＋布丁的雙重口感。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">口味種類</p>
                <p className="text-xs text-stone-500 leading-relaxed">卡士達布丁、抹茶布丁、焦糖布丁等季節限定口味交替推出。看官網最新資訊確認當前販售款式。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">價格參考</p>
                <p className="text-xs text-stone-500 leading-relaxed">單顆<strong>¥237左右（含稅）</strong>，內用有時稍貴。可搭配ミスド套餐折扣。</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">常見問題 FAQ</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ もっちゅりん是常態商品嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                目前是<strong>期間限定＋話題商品</strong>，售完為止。想吃務必盡早去，都心店常常上午就售完。ミスド經常會再度推出人氣款式，關注官網＆Twitter最新情報。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 哪間店比較容易買到？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>郊外店＆非車站型分店</strong>比都心大車站店更好買。東京都心的話推薦上野・池袋郊外店，關西則推薦大阪郊外店。避開澀谷・新宿等激戰區。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 可以外帶多久？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                甜甜圈類<strong>當天內</strong>食用最美味，冷藏保存約1〜2天但布丁餡口感會變化。飯店（酒店）冰箱冰過再吃反而別有一番風味，但建議當天吃完。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 需要事先預約嗎？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                部分分店可電話預約，但外國旅客要用日文較困難。實際上「早鳥策略」＝<strong>開店時間就到店</strong>最實際。或者一次買8顆以上有BOX包裝折扣。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">❓ 附近哪裡可以買到？</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                ミスド的分店查詢：<a href="https://misterdonut.jp/shop/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">官方分店檢索</a>。日本各都道府縣都有分店，特別是東京・大阪・京都・名古屋等大都市集中。
              </p>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">購買小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>上午〜中午</strong>前去最容易買到，下午常常售完</li>
            <li>✅ <strong>都市中心人氣店</strong>競爭激烈，車站周邊或郊外店比較好買</li>
            <li>✅ 期間限定商品，<strong>售完即止</strong>，看到就買！</li>
            <li>✅ 可<strong>多買幾顆當點心</strong>，常溫保存約半天，當天吃完最美味</li>
            <li>✅ 搭配店內的咖啡或紅茶，悠閒度過一個午後☕</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            波堤的Q彈口感＋滑順布丁，這種前所未見的組合真的太創新了✨<br />
            來日本旅遊請務必在售完前嘗試這款話題甜甜圈！
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「咬下去Q彈又有布丁醬，這口感真的會上癮！多買幾顆都吃得完🍩」</p>
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

        <RelatedArticles slug="mister-donut" exclude={["/daikanyama-cafe", "/isehara-gelato", "/tokyo-cookies"]} />

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
