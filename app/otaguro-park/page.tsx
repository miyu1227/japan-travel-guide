import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/otaguro-park";
const OG_IMAGE = "/otaguro-park/otaguro-1.jpg";

export const metadata: Metadata = {
  title: "大田黑公園｜荻窪可餵錦鯉的免費日本庭園✅實訪",
  description:
    "荻窪站走10分、免費入園的迴遊式日本庭園「大田黑公園」。園內有賣錦鯉飼料一份¥100，淺溪裡的鯉魚近到看得見鱗片。附開園時間・休園日・交通與紅葉時期。",
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
    title: "大田黑公園｜荻窪可餵錦鯉的免費日本庭園",
    description: "荻窪站走10分、免費入園的迴遊式日本庭園。飼料一份¥100，錦鯉就游在腳邊的淺溪裡，秋天還有百年銀杏與紅葉🍁",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "大田黑公園的紀念館與日本庭園" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "大田黑公園｜荻窪可餵錦鯉的免費日本庭園",
    description: "荻窪站走10分・免費入園。飼料一份¥100，錦鯉游在腳邊的淺溪🐟",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "大田黑公園（大田黒公園）｜荻窪可以餵錦鯉的免費日本庭園【實際造訪】",
  description:
    "東京杉並區荻窪的迴遊式日本庭園「大田黑公園」。免費入園，園內販售錦鯉飼料（一份¥100），秋天有樹齡百年的銀杏並木與紅葉。附開園時間・休園日・交通。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-09-17T00:00:00+09:00",
  dateModified: "2026-09-17T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "大田黑公園", item: PAGE_URL },
  ],
};

const photos = [
  { src: "/otaguro-park/otaguro-1.jpg", alt: "大田黑公園 紀念館（舊大田黑家住宅洋館）望出去的日本庭園" },
  { src: "/otaguro-park/otaguro-2.jpg", alt: "大田黑公園的池與石橋，四周是楓樹" },
  { src: "/otaguro-park/otaguro-3.jpg", alt: "大田黑公園淺溪裡的錦鯉" },
];

const relatedLinks = [
  { href: "/koyo", label: "🍁 東京紅葉2026｜神宮外苑銀杏並木時期與交通", desc: "金黃銀杏大道・東京秋天必去景點" },
  { href: "/showa-kinen-park", label: "🌳 昭和紀念公園｜東京近郊的超大公園", desc: "腹地大到可以走一整天" },
  { href: "/tokyo-spot", label: "🗼 東京景點推薦10選｜地標・公園・美術館", desc: "實際走過的東京景點依類型整理" },
];

const faqItems = [
  {
    q: "大田黑公園要門票嗎？",
    a: "不用，入園免費。是杉並區經營的區立庭園，隔壁的角川庭園與荻外莊公園（合稱「荻窪三庭園」）也都在走路可到的範圍。",
  },
  {
    q: "怎麼去？從車站要走多久？",
    a: "從JR中央線・總武線或東京Metro丸之內線的「荻窪」駅走路約10分鐘。荻窪在新宿搭JR中央線快速約11分鐘就到，當作半天的小行程剛剛好。園內沒有停車場。",
  },
  {
    q: "開幾點？公休日是哪天？",
    a: "9:00〜17:00（最後入園16:30），公休日是每週三與年末年始（12/29〜1/1）。星期三特地跑去會撲空，這點一定要先確認。",
  },
  {
    q: "錦鯉在哪一區？",
    a: "水從茶室・休息所後方流出來，穿過樹林注入南側的池子，錦鯉就在這條淺淺的小溪與池裡游。溪水很淺、距離很近，連鱗片和嘴巴開合都看得清楚，撒飼料的話會整群擠過來。運氣好還會遇到野鴨或白鷺。",
  },
  {
    q: "可以餵魚嗎？飼料多少錢？",
    a: "可以。園內有販售錦鯉的飼料，實訪時是一份¥100。身上先準備一點零錢比較保險。要注意的是只能餵園方賣的飼料，不要自己帶麵包或零食餵，會影響水質和魚的健康；其他細節以現場的告示牌為準。",
  },
  {
    q: "什麼季節去最漂亮？",
    a: "秋天。園內有樹齡超過100年的銀杏並木與楓樹，是東京有名的賞紅葉庭園之一，通常在11月下旬〜12月初最美。不過綠意時期的苔蘚與楓葉新綠也很好看，夏天樹蔭下涼快得多。",
  },
  {
    q: "裡面的西式建築是什麼？",
    a: "是紀念館「舊大田黑家住宅洋館」，1933年蓋的、音樂評論家大田黑元雄的工作室，2016年登錄為日本的國家登錄有形文化財。裡面展示他的藏書與照片，還有一台1900年製的史坦威鋼琴，一年會辦幾場音樂會。參觀建築內部時需要穿襪子。",
  },
];

export default function OtaguroParkPage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">大田黑公園</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🌳 景點（好去處）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・荻窪</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          大田黑公園（大田黒公園）<br />荻窪・可以餵錦鯉的免費日本庭園🐟
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-09-17</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">從新宿20分鐘，走進一座免費的日本庭園</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            講到東京的日本庭園，大家想到的多半是新宿御苑或六義園——但要<strong>不用門票、人又少</strong>的，其實在<strong>荻窪</strong>🌳 從新宿搭JR中央線快速約11分鐘到荻窪，再走10分鐘，就是<strong>大田黑公園（大田黒公園／Otaguro Park）</strong>。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這裡原本是日本草創期的音樂評論家<strong>大田黑元雄</strong>的宅邸，1981年由杉並區整建成<strong>迴遊式日本庭園</strong>對外開放。而且——<strong>園內有賣錦鯉的飼料，一份¥100</strong>🐟 在東京，能光明正大餵鯉魚的地方其實不多，這裡的水路又淺又近，撒下去馬上就是一片橘紅色擠過來。
          </p>
        </section>

        <PrepBannerCompact />

        {/* 3つの理由 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">推薦給旅客的3個理由</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">免費，而且觀光客很少</p>
                <p className="text-xs text-stone-500 leading-relaxed">入園不用錢。荻窪是住宅區，來的多半是附近的居民，拍照不用等人走開</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">¥100就能餵錦鯉</p>
                <p className="text-xs text-stone-500 leading-relaxed">園內有販售飼料，一份¥100。池子之外還有一條淺溪，鯉魚就在腳邊搶食，小朋友一定會玩瘋🐟</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-500 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">秋天是東京數一數二的紅葉庭園</p>
                <p className="text-xs text-stone-500 leading-relaxed">正門進去是樹齡超過100年的銀杏並木，加上滿園楓樹，11月下旬〜12月初最美🍁</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3 pt-3 border-t border-stone-100">
            💡 <strong>公休日是每週三</strong>。星期三跑去會白跑一趟，排行程時先看一眼。
          </p>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">東京可以餵錦鯉的公園・大田黑公園</h2>

        {/* Spot 1 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {photos.map((photo, i) => (
              <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
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
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">大田黑公園（大田黒公園）</h3>
                <span className="text-xs text-stone-400">Otaguro Park・東京都杉並區荻窪</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              佔地約<strong>8,972㎡</strong>的迴遊式日本庭園，1981年開園🌳 水從茶室・休息所後方流出，緩緩穿過樹林，注入園區南側的池子。<strong>錦鯉就養在這條水路上</strong>——池子裡固然看得到，但真正好玩的是那段<strong>淺到只到腳踝的小溪</strong>：買一份¥100的飼料撒下去，橘紅色與黑色的鯉魚立刻在石頭之間擠成一團，水花啪啪地跳。就算飼料撒完了，站著看十分鐘也不膩。除了鯉魚，<strong>有時還會看到野鴨與白鷺</strong>。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 一定要走進去的地方</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                園內那棟西式建築是<strong>紀念館「舊大田黑家住宅洋館」</strong>，1933年蓋的、原本是大田黑元雄的工作室，2016年登錄為日本的<strong>國家登錄有形文化財</strong>🎹 屋裡展示著他的藏書與照片，還有一台從倫敦運回來的<strong>1900年製史坦威鋼琴</strong>，一年會辦幾場音樂會。從室內拉開的門看出去，剛好框住一整片楓樹與石燈籠，是這座公園最美的一個角度📸
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🆓 免費入園", "🐟 餵錦鯉¥100", "🍁 百年銀杏並木", "🎹 1900年史坦威", "🚶 荻窪站走10分"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 看點 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🌿 園內看點</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>正門與銀杏並木</strong>：檜木桟瓦的正門進去，是一排樹齡超過100年的銀杏，秋天整條金黃</li>
                <li><strong>池與淺溪</strong>：錦鯉游在腳邊，偶爾有野鴨與白鷺。<strong>園內有賣飼料，一份¥100</strong>，可以直接餵</li>
                <li><strong>紀念館（舊大田黑家住宅洋館）</strong>：國家登錄有形文化財・1900年製史坦威鋼琴</li>
                <li><strong>茶室</strong>：8疊的茶室可以租借（上午¥2,400／下午¥3,200／延長¥600，需先透過杉並區的預約系統登記）</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都杉並區荻窪3-33-12（〒167-0051）</p>
              <p className="text-xs text-stone-600 ib ib-train">JR中央線・總武線／東京Metro丸之內線「荻窪」駅 徒步約10分（新宿搭JR中央線快速約11分到荻窪）</p>
              <p className="text-xs text-stone-600 ib ib-clock">9:00〜17:00（最後入園16:30）／公休：每週三・年末年始12/29〜1/1</p>
              <p className="text-xs text-stone-600 ib ib-yen">入園免費</p>
              <p className="text-xs text-stone-600">🐟 園內販售錦鯉飼料 一份¥100（實訪時）｜🚗 沒有停車場・飲料建議在荻窪站先買好</p>
              <p className="text-xs text-stone-600">📞 03-3398-5814（管理事務室）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">要進紀念館等建築物內部參觀時，<strong>需要穿襪子</strong>（官方公告的入園注意事項）。夏天穿涼鞋去的話，包包裡先塞一雙</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://ogikubo3gardens.jp/ootaguro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站（荻窪三庭園）
              </a>
              <a
                href="https://www.instagram.com/otaguro.park/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                📷 Instagram（@otaguro.park）
              </a>
            </div>
          </div>
        </section>

        {/* 餌やりガイド */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-hatena">餵錦鯉怎麼餵？（¥100）</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            在東京，<strong>可以正大光明餵鯉魚的地方其實不多</strong>——多數庭園為了水質與魚的健康都禁止餵食。大田黑公園是少數<strong>園方自己賣飼料</strong>的地方，實訪時一份<strong>¥100</strong>🐟
          </p>
          <ul className="space-y-2 text-sm text-stone-600 mb-3">
            <li>1️⃣ 在園內買一份飼料（<strong>¥100</strong>・身上帶點零錢比較保險）</li>
            <li>2️⃣ 走到<strong>茶室・休息所後方那條淺溪</strong>，或南側的池邊</li>
            <li>3️⃣ 一次撒一點點就好。水很淺，鯉魚會整群擠到腳邊，<strong>手機從正上方拍最好看</strong>📸</li>
          </ul>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 flex items-start gap-2">
            <span className="text-sm shrink-0">⚠️</span>
            <p className="text-xs text-stone-600">請<strong>只餵園方販售的飼料</strong>，不要自己帶麵包、零食餵魚。價格與販售方式可能變動，以現場告示為準</p>
          </div>
        </section>

        {/* 順路 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-jump">順路推薦：荻窪附近</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-green-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">角川庭園・荻外莊公園（走路可到）</p>
                <p className="text-xs text-stone-500 leading-relaxed">和大田黑公園合稱「荻窪三庭園」，由同一個單位經營，可以一次逛完。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">荻窪的拉麵店（車站周邊）</p>
                <p className="text-xs text-stone-500 leading-relaxed">荻窪本來就是東京的拉麵激戰區之一，逛完庭園在車站附近吃一碗剛好。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">吉祥寺・井之頭公園（JR約5分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">從荻窪往西5分鐘就是吉祥寺，想再多走一個地方的話最順。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">造訪小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>星期三公休</strong>，年末年始（12/29〜1/1）也休園，出發前先確認📅</li>
            <li>✅ 最後入園是<strong>16:30</strong>，比想像中早，別排在一天的最後一站</li>
            <li>✅ 餵魚的飼料是<strong>一份¥100</strong>，記得身上帶<strong>零錢</strong>；飲料建議在荻窪站先買好🥤</li>
            <li>✅ 進紀念館內部要<strong>穿襪子</strong>，夏天穿涼鞋記得多帶一雙</li>
            <li>✅ 想看紅葉的話抓<strong>11月下旬〜12月初</strong>；想避開人潮、看綠蔭與苔蘚就選夏天的平日</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            東京的知名庭園幾乎都要門票、也都是人，但大田黑公園免費、而且安靜得不可思議🌳<br />
            花¥100買一份飼料，蹲在淺溪邊看錦鯉擠成一團，那十分鐘大概是整趟東京行裡最放鬆的一段。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「¥100的飼料撒下去，整條溪都在動，比想像中還療癒🐟」</p>
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

        <RelatedArticles slug="otaguro-park" exclude={["/koyo", "/showa-kinen-park", "/tokyo-spot"]} />

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
