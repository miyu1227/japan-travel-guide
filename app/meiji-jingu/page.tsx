import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/meiji-jingu";
const OG_IMAGE = "/meiji-jingu/meiji-1.jpg";

export const metadata: Metadata = {
  title: "明治神宮・桜神宮・乃木神社｜關東神社特集 御朱印✅實訪",
  description:
    "原宿站旁的明治神宮（台灣檜木大鳥居）、桜新町站徒步2分的桜神宮（月替御朱印）、乃木坂站1號出口15m的乃木神社（紅鳥居），都免費參拜。",
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
    title: "明治神宮・桜神宮・乃木神社｜關東神社特集 御朱印・台灣檜木大鳥居",
    description: "原宿的森林神社明治神宮、世田谷桜新町的「世田谷のお伊勢さま」桜神宮，加上赤坂乃木坂站旁的乃木神社。免費參拜，御朱印與交通一次整理。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "明治神宮參道上的木造鳥居與森林" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "明治神宮・桜神宮・乃木神社｜關東神社特集",
    description: "原宿的森林神社＋桜新町的月替御朱印＋乃木坂的紅鳥居⛩️",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "明治神宮・桜神宮・乃木神社｜關東神社特集 御朱印・台灣檜木大鳥居【實際造訪】",
  description: "關東神社特集。明治神宮（免費參拜、每月開閉門時間、御朱印、酒樽牆、台灣檜木大鳥居）、世田谷桜新町的桜神宮（月替御朱印、櫻花形おみくじ結び所、火渡り神事）與赤坂的乃木神社（乃木坂站旁、赤坂王子稲荷的紅鳥居、馬的御朱印、旧乃木邸）。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-10-16T00:00:00+09:00",
  dateModified: "2026-11-11T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "關東神社特集｜明治神宮・桜神宮・乃木神社", item: PAGE_URL },
  ],
};

const meijiPhotos = [
  { src: "/meiji-jingu/meiji-1.jpg", alt: "明治神宮參道上的木造鳥居，上面有三個金色菊花紋，後面是整片森林" },
  { src: "/meiji-jingu/meiji-2.jpg", alt: "明治神宮的木造樓門，兩側是迴廊，前面有大樹的枝葉" },
  { src: "/meiji-jingu/meiji-3.jpg", alt: "明治神宮參道旁堆成一整面牆的酒樽，上面寫著各地酒藏的酒名" },
  { src: "/meiji-jingu/meiji-4.jpg", alt: "明治神宮森林裡的小溪，石頭與倒木之間有清水流過" },
  { src: "/meiji-jingu/meiji-5.jpg", alt: "明治神宮的御朱印，寫著奉拜 明治神宮、皇紀二千六百八十六年、令和八年十月十二日" },
];

const sakuraPhotos = [
  { src: "/meiji-jingu/sakura-1.jpg", alt: "桜神宮的參道，兩側是石燈籠與松樹，盡頭是綠色屋頂的拜殿" },
  { src: "/meiji-jingu/sakura-2.jpg", alt: "桜神宮拜殿的唐破風屋頂與雕刻，前面是轉黃的樹葉與藍天" },
  { src: "/meiji-jingu/sakura-3.jpg", alt: "桜神宮的おみくじ結び所，深色木板上綁滿籤紙，排成一朵櫻花的形狀" },
  { src: "/meiji-jingu/sakura-4.jpg", alt: "桜神宮11月的御朱印，紅色楓葉與小鳥圖案，寫著桜神宮、古式神道、令和八年十一月十一日" },
  { src: "/meiji-jingu/sakura-5.jpg", alt: "桜神宮境內的大樹，枝上綁著粉紅色的緞帶，後面是紅色的社殿" },
  { src: "/meiji-jingu/sakura-6.jpg", alt: "桜神宮入口的看板，寫著世田谷のお伊勢さま 桜神宮" },
];

const nogiPhotos = [
  { src: "/meiji-jingu/nogi-5.jpg", alt: "乃木神社入口的看板，寫著乃木神社、令和八丙午歲與一個大大的「馬」字，旁邊是境內案內圖與酒樽" },
  { src: "/meiji-jingu/nogi-2.jpg", alt: "乃木神社夜晚打燈的大型圓形繪馬，寫著開運、令和八丙午歲，畫著白馬與葫蘆，下面排著酒樽" },
  { src: "/meiji-jingu/nogi-1.jpg", alt: "乃木神社的御朱印，寫著奉拜 乃木神社、令和八年十一月七日，周圍畫著奔跑的馬、銀杏與楓葉、酒瓶" },
  { src: "/meiji-jingu/nogi-3.jpg", alt: "乃木神社境內的赤坂王子稲荷神社，大樹旁是一排紅色鳥居、紅色旗幟與點亮的燈籠" },
  { src: "/meiji-jingu/nogi-4.jpg", alt: "赤坂王子稲荷神社的紅色鳥居隧道，石鳥居後面連著好幾座朱紅色的小鳥居" },
];

// 公式サイトの開閉門時間（毎月変わる）
const gateTimes = [
  ["1月", "6:40", "16:20"], ["2月", "6:20", "16:50"], ["3月", "5:40", "17:20"],
  ["4月", "5:10", "17:50"], ["5月", "5:00", "18:10"], ["6月", "5:00", "18:30"],
  ["7月", "5:00", "18:20"], ["8月", "5:00", "18:00"], ["9月", "5:20", "17:20"],
  ["10月", "5:40", "16:40"], ["11月", "6:10", "16:10"], ["12月", "6:40", "16:00"],
];

const relatedLinks = [
  { href: "/yoyogi-park-cafe", label: "☕ 代代木公園咖啡廳2選｜VERVE COFFEE＆nephew", desc: "明治神宮隔壁就是代代木公園，參拜完喝一杯" },
  { href: "/futakotamagawa", label: "🍽️ 二子玉川美食5選｜芝麻街主題店・中華・甜點", desc: "桜新町搭田園都市線往郊外2站就到二子玉川" },
  { href: "/enoshima-kamakura", label: "🌊 江之島・鎌倉一日遊｜江島神社・吻仔魚丼", desc: "關東神社再加一站：海邊的江島神社" },
];

const faqItems = [
  {
    q: "明治神宮是什麼？",
    a: "供奉明治天皇與昭憲皇太后的神社，日文寫作「明治神宮（めいじじんぐう／Meiji Jingu）」。1920年（大正9年）11月1日創建，位在原宿站旁，周圍約70萬平方公尺的森林，是由全國各地捐獻的約10萬棵樹種出來的人造林。",
  },
  {
    q: "明治神宮要門票嗎？",
    a: "參拜不用門票，免費進入。御朱印、御守等需要另外付初穗料（費用），金額請看授與所現場的標示。",
  },
  {
    q: "明治神宮幾點開？幾點關門？",
    a: "配合日出日落，每個月的開門時間都不一樣。例如10月是5:40〜16:40、11月是6:10〜16:10、12月是6:40〜16:00。傍晚就關門，請不要排在晚上。",
  },
  {
    q: "御朱印在哪裡拿？幾點開始？",
    a: "官方網站寫的是在神樂殿前的授與所「長殿」，受理時間9:00〜閉門。有時候受理地點會依日期調整，現場看指示牌就好。明治神宮的御朱印會寫上「皇紀」紀年，是它的特色。",
  },
  {
    q: "明治神宮怎麼去？從原宿站要走多久？",
    a: "JR山手線「原宿」站表參道口出來，右手邊就是神宮橋與入口（原宿口）。官方說明從各入口走到本殿都要約10分鐘。地址：東京都澀谷區代々木神園町1-1。",
  },
  {
    q: "明治神宮值得去嗎？要逛多久？",
    a: "值得。就在原宿站旁、免費，走進參道馬上安靜下來，跟一出站就是人潮的竹下通完全是兩個世界。只參拜的話來回約30〜40分鐘，加上拍照、拿御朱印抓1小時剛好。",
  },
  {
    q: "桜神宮是什麼？在哪裡？",
    a: "世田谷區桜新町的「古式神道 桜神宮（さくらじんぐう／Sakura Jingu）」，入口看板寫著「世田谷のお伊勢さま」。明治15年由曾任伊勢神宮禰宜的芳村正秉立教，大正8年遷到現在的世田谷。東急田園都市線「桜新町」站北口徒步2分，地址：東京都世田谷區新町3-21-3。",
  },
  {
    q: "桜神宮的御朱印有什麼特別？",
    a: "每個月都有不同圖案的月替御朱印（月替わり御朱印）。我們11月11日拿到的是紅楓葉加小鳥的秋天版本，右上蓋著「古式神道」。官方公告2026年11月的其中一種限定御朱印一天300張、一人最多2張，也有郵送頒布，詳細請看官方網站的公告。",
  },
  {
    q: "乃木神社是什麼？在哪裡？",
    a: "東京港區赤坂的「乃木神社（のぎじんじゃ／Nogi Jinja）」，供奉乃木希典將軍與靜子夫人，大正12年（1923）11月1日鎮座。夫妻在明治天皇大葬那天殉死，同一天門前的「幽霊坂」改名為「乃木坂」——乃木坂46的團名就是來自這個地名。東京Metro千代田線「乃木坂」站1號出口出來約15公尺，地址：東京都港區赤坂8-11-27。",
  },
  {
    q: "乃木神社幾點開？御朱印幾點可以拿？",
    a: "開門時間6:00〜17:00。御朱印在授與所受理，平日9:30〜17:00、週末與國定假日9:00〜17:00。勝守等御守1,000日圓起。我們11月7日拿到的御朱印畫著奔跑的馬、銀杏和楓葉，圖案可能隨季節改變，以現場為準。",
  },
  {
    q: "明治神宮和桜神宮可以排在同一天嗎？",
    a: "可以。原宿站到澀谷站搭JR山手線1站，澀谷轉東急田園都市線到桜新町約10分。上午先去明治神宮（早上人少），下午再到桜神宮，回程往郊外再坐2站就是二子玉川，可以接著吃晚餐。乃木神社則是從明治神宮前站搭千代田線2站就到乃木坂站，也很好串。",
  },
];

export default function MeijiJinguPage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">關東神社特集｜明治神宮・桜神宮・乃木神社</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">⛩️ 神社（景點・好去處）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・原宿／世田谷／赤坂</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          關東神社特集｜明治神宮・桜神宮・乃木神社<br />台灣檜木大鳥居・月替御朱印・紅鳥居⛩️
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-11-11</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">東京的神社，從原宿的森林到世田谷的住宅街</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            原宿＝竹下通、可麗餅、人潮……但車站的另一側，其實是東京最大片的<strong>森林神社</strong>🌳 一走進參道，路上的聲音一下子就消失了。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            <strong>明治神宮（めいじじんぐう／Meiji Jingu）</strong>供奉明治天皇與昭憲皇太后，<strong>免費參拜</strong>。對台灣旅客來說還有一個特別的地方：參道上的<strong>大鳥居，是用台灣的檜木做的</strong>。這次我們在10月造訪，拿了御朱印，也把開門時間、交通和逛法整理成這一篇。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-2">
            11月再加上一間：世田谷桜新町的<strong>桜神宮（さくらじんぐう）</strong>🌸 被稱為「世田谷のお伊勢さま」，車站走2分鐘就到，<strong>每月換圖案的御朱印</strong>和<strong>櫻花形狀的おみくじ結び所</strong>都很可愛。這篇變成<strong>關東神社特集</strong>，之後也會繼續加。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-2">
            第3間是赤坂的<strong>乃木神社（のぎじんじゃ）</strong>🐴 就在<strong>乃木坂站1號出口旁</strong>，境內的<strong>赤坂王子稲荷</strong>有一排紅色鳥居，傍晚打燈後特別好看。2026年是丙午（馬年），跟馬很有緣的乃木神社，連御朱印上都有馬在跑。
          </p>
        </section>

        <PrepBannerCompact />

        {/* 比較 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">3間神社怎麼選？</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-stone-600">
              <thead>
                <tr className="text-left text-stone-500 border-b border-stone-100">
                  <th className="py-2 pr-3"></th>
                  <th className="py-2 pr-3">明治神宮</th>
                  <th className="py-2 pr-3">桜神宮</th>
                  <th className="py-2">乃木神社</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-50"><td className="py-2 pr-3 font-bold whitespace-nowrap">車站</td><td className="py-2 pr-3">JR原宿站旁，入口到本殿約10分</td><td className="py-2 pr-3">東急桜新町站北口徒步2分</td><td className="py-2">千代田線乃木坂站1號出口15m</td></tr>
                <tr className="border-b border-stone-50"><td className="py-2 pr-3 font-bold whitespace-nowrap">氣氛</td><td className="py-2 pr-3">70萬㎡的森林、大鳥居</td><td className="py-2 pr-3">住宅街裡的小神社，安靜好拍</td><td className="py-2">赤坂的都心神社，傍晚打燈</td></tr>
                <tr className="border-b border-stone-50"><td className="py-2 pr-3 font-bold whitespace-nowrap">御朱印</td><td className="py-2 pr-3">寫「皇紀」紀年</td><td className="py-2 pr-3">每月換圖案（月替御朱印）</td><td className="py-2">11月拿到的有馬、銀杏、楓葉</td></tr>
                <tr className="border-b border-stone-50"><td className="py-2 pr-3 font-bold whitespace-nowrap">看點</td><td className="py-2 pr-3">台灣檜木大鳥居・酒樽牆</td><td className="py-2 pr-3">櫻花形おみくじ結び所・火渡り神事</td><td className="py-2">赤坂王子稲荷的紅鳥居・旧乃木邸</td></tr>
                <tr><td className="py-2 pr-3 font-bold whitespace-nowrap">停留</td><td className="py-2 pr-3">約1小時</td><td className="py-2 pr-3">約20〜30分</td><td className="py-2">約30分</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">關東神社推薦（好去處推介）・3選</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          {/* 1列に並べると小さくなるので、3枚＋残りの2段に分ける */}
          <div className="flex flex-col gap-[2px]">
            {[meijiPhotos.slice(0, 3), meijiPhotos.slice(3)].map((row, r) => (
              <div key={r} className="photo-strip">
                {row.map((photo, i) => (
                  <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                    <Image src={photo.src} alt={photo.alt} fill sizes={row.length === 2 ? "50vw" : "33vw"} className="object-cover" {...(r === 0 && i === 0 ? { priority: true } : {})} />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">明治神宮</h3>
                <span className="text-xs text-stone-400">めいじじんぐう／Meiji Jingu</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              1920年（大正9年）創建。神社周圍約<strong>70萬平方公尺</strong>的森林，是當年從全國各地捐獻約<strong>10萬棵樹</strong>種出來的<strong>人造林</strong>——100年後長成現在這片看不出是人種的森林🌿 參道很寬，兩側全是大樹，走在裡面夏天也涼。
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              參道上有好幾座<strong>木造鳥居</strong>，橫木上釘著金色的菊花紋。其中位在南北參道交會處的<strong>大鳥居</strong>高12公尺、寬17.1公尺，現在這座是1975年重建的第二代，木材是在台灣丹大山找到、<strong>樹齡約1500年的台灣檜木</strong>（第一代用的是阿里山的檜木）。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 這次實際看到的（實訪）</p>
              <ul className="text-sm text-stone-600 leading-relaxed space-y-1.5">
                <li>⛩️ <strong>鳥居與參道</strong>：抬頭是一整片綠，陽光從樹葉間灑下來</li>
                <li>🍶 <strong>酒樽牆</strong>：參道旁堆成一整面牆的酒樽，每一個都寫著各地酒藏的酒名，很多人在這裡拍照。境內也有法國勃艮第（Bourgogne）酒莊奉納的<strong>葡萄酒樽</strong>，紀念喜歡西洋料理與法國葡萄酒的明治天皇</li>
                <li>🏯 <strong>樓門</strong>：本殿前的大型木造門，深色的木頭、兩側連著迴廊</li>
                <li>🌊 <strong>森林裡的小溪</strong>：參道旁往下看，石頭和倒木之間有清水流過</li>
                <li>📿 <strong>御朱印</strong>：寫著「奉拜 明治神宮」，日期旁邊是「<strong>皇紀二千六百八十六年</strong>」，用的是皇紀紀年</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🆓 免費參拜", "🌳 70萬㎡森林", "🇹🇼 台灣檜木大鳥居", "📿 御朱印", "🍶 酒樽牆"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都澀谷區代々木神園町1-1</p>
              <p className="text-xs text-stone-600 ib ib-train">JR山手線「原宿」站表參道口出來，右手邊就是神宮橋・原宿口／小田急線「參宮橋」站也可以走到參宮橋口</p>
              <p className="text-xs text-stone-600 ib ib-clock">日出開門、日落關門（每月不同，見下表）</p>
              <p className="text-xs text-stone-600 ib ib-yen">參拜免費（御朱印・御守另付初穗料）</p>
              <p className="text-xs text-stone-600">🚶 各入口走到本殿約10分（官方說明）</p>
              <p className="text-xs text-stone-600">📿 御朱印：神樂殿前授與所「長殿」9:00〜閉門</p>
              <p className="text-xs text-stone-600">⏱️ 建議預留約1小時（參拜＋拍照＋御朱印）</p>
              <p className="text-xs text-stone-600">🚗 開車只能從代代木口進入，人多時可能無法入場，建議搭電車</p>
            </div>

            {/* 開門時間 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🕐 每月開門・關門時間（官方網站）</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-1 text-xs text-stone-600">
                {gateTimes.map(([m, open, close]) => (
                  <p key={m}><strong>{m}</strong> {open}〜{close}</p>
                ))}
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
                ※ 冬天16點就關門。下午才要去的話，記得先看一下當月的關門時間。
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">參拜方式：先在手水舎洗手漱口，到本殿前投香油錢，<strong>二拜・二拍手・一拜</strong>。官方也提醒不要進入樹林裡、不要帶走境內的土和花草。</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://www.meijijingu.or.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站
              </a>
              <a
                href="https://www.meijijingu.or.jp/sanpai/2.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🕐 開門時間・御朱印（官方）
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=明治神宮"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🗺️ Google 地圖
              </a>
            </div>
          </div>
        </section>

        {/* 桜神宮 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="flex flex-col gap-[2px]">
            {[sakuraPhotos.slice(0, 3), sakuraPhotos.slice(3)].map((row, r) => (
              <div key={r} className="photo-strip">
                {row.map((photo) => (
                  <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                    <Image src={photo.src} alt={photo.alt} fill sizes="33vw" className="object-cover" />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">桜神宮</h3>
                <span className="text-xs text-stone-400">さくらじんぐう／Sakura Jingu・古式神道 桜神宮</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              東急田園都市線<strong>桜新町站走2分鐘</strong>，住宅街裡突然出現松樹和石燈籠的參道⛩️ 入口看板寫著「<strong>世田谷のお伊勢さま</strong>」。明治15年由曾任<strong>伊勢神宮禰宜</strong>的芳村正秉立教，社殿最早建在東京神田，大正8年依神託「往西方遷移」搬到現在的世田谷；二戰時也沒有受到戰災，所以也有人來祈求「<strong>消災解厄</strong>」。
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              這裡傳承<strong>古式神道</strong>，官方說明是全國少數還在舉行<strong>火渡り（走火）</strong>、<strong>釜鳴り</strong>等神事的神社。每年4月的大祭（鎮火式）、9月的中祭（探湯式）都在週日舉行。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 這次實際看到的（實訪・11月）</p>
              <ul className="text-sm text-stone-600 leading-relaxed space-y-1.5">
                <li>⛩️ <strong>參道與拜殿</strong>：短短的參道兩側是松樹、石燈籠，盡頭是綠色銅瓦屋頂的拜殿，屋簷下的雕刻很細</li>
                <li>🌸 <strong>櫻花形おみくじ結び所</strong>：「おみくじを結んでください」的木板上，抽完的籤紙綁成<strong>一整朵櫻花</strong>，是這裡最好拍的地方</li>
                <li>🎀 <strong>粉紅色緞帶的樹</strong>：境內的樹枝上綁滿粉紅色緞帶，配上紅色社殿很有氣氛</li>
                <li>📿 <strong>月替御朱印</strong>：11月是<strong>紅楓葉＋小鳥</strong>的秋天圖案，右上蓋著「古式神道」</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🆓 免費參拜", "🚃 站前徒步2分", "📿 月替御朱印", "🌸 櫻花形おみくじ", "🔥 火渡り神事"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都世田谷區新町3-21-3</p>
              <p className="text-xs text-stone-600 ib ib-train">東急田園都市線「桜新町」站北口 徒步2分（澀谷站搭田園都市線約10分）</p>
              <p className="text-xs text-stone-600 ib ib-clock">電話受理 9:00〜16:00（03-3429-0869）</p>
              <p className="text-xs text-stone-600 ib ib-yen">參拜免費（御朱印另付初穗料；御守約800〜1,500日圓）</p>
              <p className="text-xs text-stone-600">📿 月替御朱印：有時有數量限制（例：2026年11月其中一種一天300張・一人2張），也有郵送頒布</p>
              <p className="text-xs text-stone-600">⏱️ 建議預留約20〜30分（參拜＋拍照＋御朱印）</p>
              <p className="text-xs text-stone-600">🔥 大祭（鎮火式・火渡り）4月／中祭（探湯式）9月，都在週日</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">每個月的御朱印圖案與頒布方式，官方網站和X（@Sakurajingu）會先公告，想拿特定圖案的話出發前先看一下。御守裡也有櫻花款的「肌守（桜）」「えんむすび（桜）」。</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://www.sakura.jingu.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=桜神宮+世田谷区新町3-21-3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🗺️ Google 地圖
              </a>
            </div>
          </div>
        </section>

        {/* 乃木神社 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="flex flex-col gap-[2px]">
            {[nogiPhotos.slice(0, 3), nogiPhotos.slice(3)].map((row, r) => (
              <div key={r} className="photo-strip">
                {row.map((photo) => (
                  <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                    <Image src={photo.src} alt={photo.alt} fill sizes={row.length === 2 ? "50vw" : "33vw"} className="object-cover" />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">3</div>
              <div>
                <h3 className="text-base font-black text-stone-800">乃木神社</h3>
                <span className="text-xs text-stone-400">のぎじんじゃ／Nogi Jinja・赤坂</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              東京Metro千代田線<strong>乃木坂站1號出口出來約15公尺</strong>就到⛩️ 供奉<strong>乃木希典將軍與靜子夫人</strong>。1912年明治天皇大葬那天，夫妻兩人殉死；同一天，門前原本叫「幽霊坂」的坂道改名為<strong>「乃木坂」</strong>——對，<strong>乃木坂46</strong>的團名就是來自這個地名。
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              大正12年（1923）11月1日鎮座，社殿在1945年的空襲中燒毀，1962年重建。神社旁保留著將軍住過的<strong>旧乃木邸</strong>，以及明治26年用英國紅磚蓋的<strong>厩（馬廄）</strong>——日俄戰爭後俄國將軍斯特塞爾（Stessel）贈送的愛馬「壽號」就住過這裡。2026年剛好是<strong>丙午（馬年）</strong>，入口看板寫著「<strong>馬とゆかりの乃木神社</strong>」。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 這次實際看到的（實訪・11月）</p>
              <ul className="text-sm text-stone-600 leading-relaxed space-y-1.5">
                <li>🐴 <strong>「馬」的大看板</strong>：入口處一個大大的「馬」字，寫著令和八 丙午歲，旁邊是境內案內圖和酒樽</li>
                <li>🌕 <strong>開運大繪馬</strong>：傍晚打燈的圓形大繪馬，畫著<strong>白馬載著葫蘆</strong>，寫著「開運」，前面排著一列酒樽</li>
                <li>⛩️ <strong>赤坂王子稲荷的紅鳥居</strong>：境內的稲荷神社有一排朱紅色鳥居和紅旗，燈籠亮起來時<strong>整條紅色隧道</strong>超有氣氛</li>
                <li>📿 <strong>御朱印</strong>：寫著「奉拜 乃木神社」，11月7日拿到的這張畫著<strong>奔跑的馬、銀杏和楓葉</strong>，還有小小的酒瓶</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🆓 免費參拜", "🚃 乃木坂站1號出口15m", "🐴 馬年看板", "⛩️ 紅鳥居隧道", "📿 御朱印"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都港區赤坂8-11-27</p>
              <p className="text-xs text-stone-600 ib ib-train">東京Metro千代田線「乃木坂」站1號出口 約15m（明治神宮前站搭千代田線2站）</p>
              <p className="text-xs text-stone-600 ib ib-clock">開門 6:00〜17:00／授與所 平日9:30〜17:00・週末假日9:00〜17:00</p>
              <p className="text-xs text-stone-600 ib ib-yen">參拜免費（勝守・御守1,000日圓，攘災開運守1,500日圓）</p>
              <p className="text-xs text-stone-600">🏛️ 寶物殿：免費入場 9:00〜17:00／乃木公園（旧乃木邸）9:00〜16:00</p>
              <p className="text-xs text-stone-600">⏱️ 建議預留約30分（參拜＋紅鳥居＋御朱印）</p>
              <p className="text-xs text-stone-600">📅 例祭 9月13日（夫妻的忌日，有夜間特別參拜）</p>
              <p className="text-xs text-stone-600">☎️ 03-3478-3001</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">想拿御朱印的話，<strong>17點授與所就關</strong>，冬天天黑得早，16點前到比較安心。<strong>勝守</strong>是「戰勝疾病與勝負」的御守，考試、比賽前很適合。乃木坂站旁邊就是六本木，參拜完可以順路去逛。</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://nogijinja.or.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站
              </a>
              <a
                href="https://www.instagram.com/nogijinja/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                📷 Instagram
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=乃木神社+港区赤坂8-11-27"
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
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">關東神社參拜小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>早上去最安靜</strong>，開門時間很早（10月是5:40），竹下通的店開門前先來參拜剛好</li>
            <li>✅ 入口到本殿要走<strong>約10分鐘</strong>的碎石參道，穿好走的鞋👟</li>
            <li>✅ 經過大鳥居時抬頭看看——那是<strong>台灣檜木</strong>做的🇹🇼</li>
            <li>✅ 想收集御朱印的話，<strong>9:00以後</strong>才開始受理</li>
            <li>✅ 參拜完往旁邊走就是<strong>代代木公園</strong>，往南是表參道和澀谷，可以排成同一天的行程</li>
            <li>✅ 下午從澀谷搭<strong>田園都市線約10分</strong>到桜新町，加碼桜神宮的<strong>月替御朱印</strong>🌸</li>
            <li>✅ 從明治神宮前站搭<strong>千代田線2站</strong>就是乃木坂，傍晚到乃木神社看<strong>紅鳥居打燈</strong>🐴（17點關門）</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            一百年前種下的10萬棵樹、台灣來的檜木鳥居、寫著皇紀的御朱印✨<br />
            再加上住宅街裡綁成櫻花的おみくじ，和每個月都想回來拿的御朱印🌸<br />
            還有乃木坂站旁、馬年裡到處都是馬的乃木神社🐴<br />
            東京的神社，大的小的各有味道。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「御朱印帳又多了一頁，下個月的圖案也好想要🌸」</p>
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

        <RelatedArticles slug="meiji-jingu" exclude={["/yoyogi-park-cafe", "/futakotamagawa", "/enoshima-kamakura"]} />

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
