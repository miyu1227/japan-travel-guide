import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

import MapListCard from "../components/MapListCard";
const PAGE_URL = "https://www.japantrippicks.com/meiji-jingu";
const OG_IMAGE = "/meiji-jingu/meiji-1.jpg";

export const metadata: Metadata = {
  title: "明治神宮・桜神宮・乃木神社等｜東京神社6選 御朱印✅實訪",
  description:
    "原宿的明治神宮（台灣檜木大鳥居）、桜神宮的月替御朱印、乃木神社、松陰神社，加上澀谷站徒步5分的金王八幡宮與結緣的澀谷氷川神社，都免費參拜。",
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
    title: "明治神宮・桜神宮・乃木神社・松陰神社・金王八幡宮・澀谷氷川神社｜東京神社6選 御朱印",
    description: "原宿的森林神社明治神宮、世田谷桜新町的桜神宮、赤坂的乃木神社、供奉吉田松陰的松陰神社，加上「澀谷」地名由來的金王八幡宮與澀谷最古的結緣神社澀谷氷川神社。免費參拜，御朱印與交通一次整理。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "明治神宮參道上的木造鳥居與森林" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "明治神宮・桜神宮・乃木神社等｜東京神社6選",
    description: "原宿的森林神社＋桜新町的月替御朱印＋乃木坂的紅鳥居＋松陰神社＋澀谷的金王八幡宮・澀谷氷川神社⛩️",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "明治神宮・桜神宮・乃木神社・松陰神社・金王八幡宮・澀谷氷川神社｜東京神社6選 御朱印・台灣檜木大鳥居【實際造訪】",
  description: "關東神社特集。明治神宮（免費參拜、每月開閉門時間、御朱印、酒樽牆、台灣檜木大鳥居）、世田谷桜新町的桜神宮（月替御朱印、櫻花形おみくじ結び所、火渡り神事）、赤坂的乃木神社（乃木坂站旁、赤坂王子稲荷的紅鳥居、馬的御朱印、旧乃木邸）、世田谷若林的松陰神社（吉田松陰的墓所、松下村塾模築、合格祈願御守），以及澀谷的金王八幡宮（「澀谷」地名由來、春日局奉納的社殿、金王桜）與澀谷氷川神社（澀谷最古、結緣、愛心繪馬、金王相撲的相撲場跡）。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-10-16T00:00:00+09:00",
  dateModified: "2026-11-24T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "東京神社6選｜明治神宮・桜神宮・乃木神社・松陰神社・金王八幡宮・澀谷氷川神社", item: PAGE_URL },
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

const shoinPhotos = [
  { src: "/meiji-jingu/shoin-1.jpg", alt: "松陰神社的拜殿，綠色銅瓦屋頂與金色裝飾的木門，右邊是一棵大樹，前面立著松陰神社的小看板" },
  { src: "/meiji-jingu/shoin-2.jpg", alt: "松陰神社的大繪馬，畫著白馬與梅花，寫著令和八年、松陰神社、開運招福與「午」字" },
  { src: "/meiji-jingu/shoin-3.jpg", alt: "松陰神社的手水舎，木造屋頂下的石造水盤刻著「洗心」，上面掛著注連繩" },
  { src: "/meiji-jingu/shoin-4.jpg", alt: "松陰神社境內的深色木造社殿，屋頂往上翹，旁邊是轉紅的樹葉與藍天" },
  { src: "/meiji-jingu/shoin-5.jpg", alt: "松陰神社的御朱印，墨書松陰神社，蓋著紅色神社印，日期是令和八年十一月十六日" },
];

const konnoPhotos = [
  { src: "/meiji-jingu/konno-1.jpg", alt: "金王八幡宮的社殿，朱紅色的柱子與金色雕刻，綠色銅瓦屋頂，後面是澀谷的高樓" },
  { src: "/meiji-jingu/konno-2.jpg", alt: "金王八幡宮的石鳥居，後面是轉黃的銀杏與大樹" },
  { src: "/meiji-jingu/konno-3.jpg", alt: "金王八幡宮境內的深色木造建築旁，一棵整片金黃的大銀杏，地上鋪滿落葉" },
  { src: "/meiji-jingu/konno-4.jpg", alt: "金王八幡宮的石鳥居與石燈籠，後面是銀杏和木造社殿" },
  { src: "/meiji-jingu/konno-5.jpg", alt: "金王八幡宮的御朱印，墨書奉拜 金王八幡宮、令和八年十一月，旁邊是寫著御鎮座九百三十四年的金王八幡宮參拜の栞" },
];

const hikawaPhotos = [
  { src: "/meiji-jingu/hikawa-1.jpg", alt: "澀谷氷川神社入口的石鳥居，後面是樹林中往裡延伸的石板參道" },
  { src: "/meiji-jingu/hikawa-2.jpg", alt: "澀谷氷川神社的拜殿，弧形的唐破風屋頂，前面掛著黃色與紫色的旗幟，後面是藍天" },
  { src: "/meiji-jingu/hikawa-3.jpg", alt: "澀谷氷川神社的繪馬架，上面掛滿粉紅色的愛心形繪馬" },
  { src: "/meiji-jingu/hikawa-4.jpg", alt: "澀谷氷川神社的手水舎，綠色銅瓦屋頂，周圍是大樹與轉紅的樹葉" },
  { src: "/meiji-jingu/hikawa-5.jpg", alt: "澀谷氷川神社11月的御朱印，寫著奉拜 澀谷氷川神社、霜月，畫著楓葉、銀杏與貓頭鷹，旁邊是粉紅色的參拜說明紙" },
  { src: "/meiji-jingu/hikawa-6.jpg", alt: "地上用金黃色銀杏落葉堆成的愛心" },
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
  { href: "/futakotamagawa", label: "🍽️ 二子玉川美食5選｜芝麻街主題店・中華・甜點", desc: "桜新町搭田園都市線往郊外2站就到二子玉川（松陰神社也在同一條線上）" },
  { href: "/enoshima-kamakura", label: "🌊 江之島・鎌倉一日遊｜江島神社・吻仔魚丼", desc: "東京神社再加一站：海邊的江島神社" },
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
    q: "松陰神社是什麼？供奉誰？",
    a: "東京世田谷區若林的「松陰神社（しょういんじんじゃ／Shoin Jinja）」，供奉幕末思想家、明治維新的精神導師吉田松陰。松陰在安政之大獄中30歲去世，4年後門生高杉晉作、伊藤博文等人把他改葬到這裡；明治15年（1882）11月21日，門生們在墓旁建社祭祀。境內有松陰與烈士們的墓所、仿造山口縣萩市的「松下村塾」建築，也有合格祈願御守，很多考生來參拜。",
  },
  {
    q: "松陰神社怎麼去？幾點開？",
    a: "東急世田谷線「松陰神社前」站下車，沿松陰神社通商店街往北走約3分。從澀谷搭田園都市線到三軒茶屋（2站），轉世田谷線3站就到。開門時間7:00〜17:00，御守授與所9:00〜17:00（社務所休息日除外）。地址：東京都世田谷區若林4-35-1。",
  },
  {
    q: "金王八幡宮是什麼？怎麼唸？",
    a: "澀谷站附近的「金王八幡宮（こんのうはちまんぐう／Konnoh Hachimangu）」，供奉應神天皇，寬治6年（1092）鎮座。在這裡建館的武士一族獲賜「澀谷」的姓，所以被說是「澀谷」地名的由來。現在的社殿是春日局與青山忠俊在江戶初期奉納的權現造，是澀谷區指定有形文化財；境內的「金王桜」是澀谷區指定天然記念物。",
  },
  {
    q: "金王八幡宮怎麼去？",
    a: "官方網站寫的是澀谷站C1出口徒步5分（澀谷警察署後面），地址：東京都澀谷區澀谷3-5-12。社務所電話受理9:00〜17:00（03-3407-1811）。",
  },
  {
    q: "澀谷氷川神社是什麼？有什麼保佑？",
    a: "東京澀谷區東的「澀谷氷川神社（しぶやひかわじんじゃ／Shibuya Hikawa Jinja）」，境內約4,000坪，被稱為澀谷最古的神社。供奉素盞鳴尊、稲田姫命等神明，以結緣（縁結び）聞名，繪馬是粉紅色的愛心形。境內還有江戶郊外三大相撲之一「金王相撲」的相撲場跡。",
  },
  {
    q: "澀谷氷川神社每月15日有什麼？",
    a: "取「いいご縁（好緣分）」的諧音，每月15日15:00舉行縁結び祈願祭（結緣祈願祭），不用預約也不用費用。這天還有限定的御朱印與御守，例如平常是銀色的縁結び御守，15日限定有粉紅色。",
  },
  {
    q: "澀谷氷川神社怎麼去？",
    a: "JR恵比寿站西口或澀谷站新南口徒步約15分；也可以從澀谷站搭都營巴士往「日赤医療センター」方向，在「國學院大學前」下車徒步1分。地址：東京都澀谷區東2-5-6，電話03-3407-7534。",
  },
  {
    q: "明治神宮和桜神宮可以排在同一天嗎？",
    a: "可以。原宿站到澀谷站搭JR山手線1站，澀谷轉東急田園都市線到桜新町約10分。上午先去明治神宮（早上人少），下午再到桜神宮，回程往郊外再坐2站就是二子玉川，可以接著吃晚餐。松陰神社則是在田園都市線三軒茶屋站轉世田谷線，可以跟桜神宮排在一起。乃木神社是從明治神宮前站搭千代田線2站就到乃木坂站，也很好串。金王八幡宮和澀谷氷川神社都在澀谷站東側，兩間走路約15分，可以一起排。",
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
          <span className="text-sm font-semibold text-stone-700 truncate">東京神社6選｜明治神宮・桜神宮・乃木神社・松陰神社・金王八幡宮・澀谷氷川神社</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">⛩️ 神社（景點・好去處）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・原宿／世田谷／赤坂／澀谷</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          東京神社6選｜明治神宮・桜神宮・乃木神社・松陰神社・金王八幡宮・澀谷氷川神社<br />台灣檜木大鳥居・月替御朱印・紅鳥居・吉田松陰・結緣⛩️
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-11-24</p>

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
          <p className="text-sm text-stone-600 leading-relaxed mt-2">
            第4間是世田谷若林的<strong>松陰神社（しょういんじんじゃ）</strong>📚 供奉幕末的思想家<strong>吉田松陰</strong>，境內就是他的<strong>墓所</strong>，還有仿造萩市的<strong>松下村塾</strong>。從<strong>松陰神社前站走3分鐘</strong>，搭可愛的路面電車「世田谷線」去，考生最愛的<strong>合格祈願御守</strong>也在這裡。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-2">
            第5、6間在<strong>澀谷站東側</strong>：被說是「澀谷」地名由來的<strong>金王八幡宮（こんのうはちまんぐう）</strong>🍂，和澀谷最古的結緣神社<strong>澀谷氷川神社（しぶやひかわじんじゃ）</strong>💗 兩間走路約15分，離開人潮一下子就安靜下來，11月還有<strong>整片金黃的銀杏</strong>。
          </p>
        </section>

        <PrepBannerCompact />

        {/* 比較 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">6間神社怎麼選？</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-stone-600">
              <thead>
                <tr className="text-left text-stone-500 border-b border-stone-100">
                  <th className="py-2 pr-3"></th>
                  <th className="py-2 pr-3">明治神宮</th>
                  <th className="py-2 pr-3">桜神宮</th>
                  <th className="py-2 pr-3">乃木神社</th>
                  <th className="py-2">松陰神社</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-50"><td className="py-2 pr-3 font-bold whitespace-nowrap">車站</td><td className="py-2 pr-3">JR原宿站旁，入口到本殿約10分</td><td className="py-2 pr-3">東急桜新町站北口徒步2分</td><td className="py-2 pr-3">千代田線乃木坂站1號出口15m</td><td className="py-2">世田谷線松陰神社前站徒步3分</td></tr>
                <tr className="border-b border-stone-50"><td className="py-2 pr-3 font-bold whitespace-nowrap">氣氛</td><td className="py-2 pr-3">70萬㎡的森林、大鳥居</td><td className="py-2 pr-3">住宅街裡的小神社，安靜好拍</td><td className="py-2 pr-3">赤坂的都心神社，傍晚打燈</td><td className="py-2">商店街盡頭的大樹與社殿，很安靜</td></tr>
                <tr className="border-b border-stone-50"><td className="py-2 pr-3 font-bold whitespace-nowrap">御朱印</td><td className="py-2 pr-3">寫「皇紀」紀年</td><td className="py-2 pr-3">每月換圖案（月替御朱印）</td><td className="py-2 pr-3">11月拿到的有馬、銀杏、楓葉</td><td className="py-2">大大的墨書「松陰神社」</td></tr>
                <tr className="border-b border-stone-50"><td className="py-2 pr-3 font-bold whitespace-nowrap">看點</td><td className="py-2 pr-3">台灣檜木大鳥居・酒樽牆</td><td className="py-2 pr-3">櫻花形おみくじ結び所・火渡り神事</td><td className="py-2 pr-3">赤坂王子稲荷的紅鳥居・旧乃木邸</td><td className="py-2">吉田松陰墓所・松下村塾模築・合格御守</td></tr>
                <tr><td className="py-2 pr-3 font-bold whitespace-nowrap">停留</td><td className="py-2 pr-3">約1小時</td><td className="py-2 pr-3">約20〜30分</td><td className="py-2 pr-3">約30分</td><td className="py-2">約30〜40分</td></tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-xs text-stone-600">
              <thead>
                <tr className="text-left text-stone-500 border-b border-stone-100">
                  <th className="py-2 pr-3"></th>
                  <th className="py-2 pr-3">金王八幡宮</th>
                  <th className="py-2">澀谷氷川神社</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-50"><td className="py-2 pr-3 font-bold whitespace-nowrap">車站</td><td className="py-2 pr-3">澀谷站C1出口徒步5分</td><td className="py-2">恵比寿站西口・澀谷站新南口徒步約15分</td></tr>
                <tr className="border-b border-stone-50"><td className="py-2 pr-3 font-bold whitespace-nowrap">氣氛</td><td className="py-2 pr-3">澀谷鬧區後面的朱紅色社殿與大銀杏</td><td className="py-2">約4,000坪的樹林，參道很長很安靜</td></tr>
                <tr className="border-b border-stone-50"><td className="py-2 pr-3 font-bold whitespace-nowrap">御朱印</td><td className="py-2 pr-3">墨書「金王八幡宮」＋參拜の栞</td><td className="py-2">每月換圖案，11月是楓葉＋銀杏＋貓頭鷹</td></tr>
                <tr className="border-b border-stone-50"><td className="py-2 pr-3 font-bold whitespace-nowrap">看點</td><td className="py-2 pr-3">「澀谷」地名由來・春日局奉納的社殿・金王桜</td><td className="py-2">愛心繪馬・每月15日縁結び祈願祭・相撲場跡</td></tr>
                <tr><td className="py-2 pr-3 font-bold whitespace-nowrap">停留</td><td className="py-2 pr-3">約20〜30分</td><td className="py-2">約30分</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">東京神社推薦（好去處推介）・6選</h2>

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

        {/* 松陰神社 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="flex flex-col gap-[2px]">
            {[shoinPhotos.slice(0, 3), shoinPhotos.slice(3)].map((row, r) => (
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
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">4</div>
              <div>
                <h3 className="text-base font-black text-stone-800">松陰神社</h3>
                <span className="text-xs text-stone-400">しょういんじんじゃ／Shoin Jinja・世田谷若林</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              供奉<strong>吉田松陰（吉田寅次郎）</strong>——幕末長州的思想家，在故鄉萩開設私塾「<strong>松下村塾</strong>」，教出了<strong>高杉晉作、伊藤博文</strong>等推動明治維新的人物📚 安政6年（1859）他在安政之大獄中30歲去世，4年後門生們把他<strong>改葬到世田谷若林</strong>，明治15年（1882）11月21日，門生們在墓旁建社祭祀，就是現在的松陰神社。
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              現在的社殿是昭和2〜3年（1927〜28）造的。境內有<strong>吉田松陰與烈士們的墓所</strong>、伊藤博文與山縣有朋等人奉獻的<strong>32座石燈籠</strong>，還有仿造萩市松陰神社的<strong>松下村塾（模築）</strong>。因為是「教育之神」，<strong>合格祈願御守</strong>很受考生歡迎。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 這次實際看到的（實訪・11月）</p>
              <ul className="text-sm text-stone-600 leading-relaxed space-y-1.5">
                <li>⛩️ <strong>拜殿</strong>：綠色銅瓦的大屋頂，木門上有金色裝飾，旁邊的大樹把影子投在屋頂上</li>
                <li>🐴 <strong>午年大繪馬</strong>：入口附近的大繪馬畫著<strong>白馬和梅花</strong>，寫著「開運招福」，晴天拍起來很鮮豔</li>
                <li>💧 <strong>手水舎</strong>：石造水盤上刻著「<strong>洗心</strong>」兩個字，參拜前先在這裡洗手</li>
                <li>🍁 <strong>深色木造社殿</strong>：往上翹的屋頂配上轉紅的樹葉，11月中來剛好是秋天的顏色</li>
                <li>📿 <strong>御朱印</strong>：中間是大大的墨書「松陰神社」，蓋著紅色神社印，我們拿到的日期是令和八年十一月十六日</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🆓 免費參拜", "🚃 站前徒步3分", "📚 吉田松陰", "🏠 松下村塾模築", "🎓 合格祈願"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都世田谷區若林4-35-1</p>
              <p className="text-xs text-stone-600 ib ib-train">東急世田谷線「松陰神社前」站 沿松陰神社通商店街往北 徒步約3分（澀谷搭田園都市線到三軒茶屋，轉世田谷線3站）</p>
              <p className="text-xs text-stone-600 ib ib-clock">開門 7:00〜17:00／御守授與所 9:00〜17:00（社務所休息日除外）</p>
              <p className="text-xs text-stone-600 ib ib-yen">參拜免費（合格祈願御守・勉學祈願御守1,000日圓，松陰神社御守500日圓起）</p>
              <p className="text-xs text-stone-600">🏠 松下村塾（模築）：只有週六日・國定假日9:00〜16:00打開雨戶，可以看到裡面（風雨時不開）</p>
              <p className="text-xs text-stone-600">⏱️ 建議預留約30〜40分（參拜＋墓所＋松下村塾＋御朱印）</p>
              <p className="text-xs text-stone-600">🚗 有付費停車場20台（7:00〜17:00）</p>
              <p className="text-xs text-stone-600">☎️ 03-3421-4834</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">想看<strong>松下村塾</strong>裡面的話，記得排在<strong>週末或假日</strong>。世田谷線是只有2節車廂的路面電車，車站到神社的<strong>松陰神社通商店街</strong>有咖啡廳和麵包店，可以邊走邊逛。秋天例大祭期間（2026年是10/27〜11/3）會有限定御朱印，詳細請看官方網站公告。</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://www.shoinjinja.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站
              </a>
              <a
                href="https://www.instagram.com/shoinjinja_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                📷 Instagram
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=松陰神社+世田谷区若林4-35-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🗺️ Google 地圖
              </a>
            </div>
          </div>
        </section>


        {/* 金王八幡宮 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="flex flex-col gap-[2px]">
            {[konnoPhotos.slice(0, 3), konnoPhotos.slice(3)].map((row, r) => (
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
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">5</div>
              <div>
                <h3 className="text-base font-black text-stone-800">金王八幡宮</h3>
                <span className="text-xs text-stone-400">こんのうはちまんぐう／Konnoh Hachimangu・澀谷</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              從<strong>澀谷站C1出口走5分鐘</strong>，在澀谷警察署後面⛩️ 寬治6年（1092）鎮座，供奉<strong>應神天皇（八幡大神）</strong>。當年在這裡建館的武士一族，從天皇那裡獲賜「<strong>澀谷</strong>」這個姓，所以金王八幡宮被說是<strong>「澀谷」地名的由來</strong>。今年剛好是<strong>鎮座934年</strong>。
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              「金王」這個名字來自平安時代末期的武將<strong>澀谷金王丸</strong>。現在的<strong>社殿</strong>是德川家光確定成為三代將軍後，由乳母<strong>春日局</strong>與守役青山忠俊奉納的<strong>權現造</strong>，保留江戶初期的樣式，和朱紅色的神門（赤門）都是<strong>澀谷區指定有形文化財</strong>。境內的「<strong>金王桜</strong>」是一枝上同時開單瓣與八重花的長州緋桜，是<strong>澀谷區指定天然記念物</strong>🌸
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 這次實際看到的（實訪・11月）</p>
              <ul className="text-sm text-stone-600 leading-relaxed space-y-1.5">
                <li>🏯 <strong>朱紅色的社殿</strong>：紅柱子配金色雕刻和綠色銅瓦屋頂，後面就是澀谷的高樓，新舊同框很有澀谷的感覺</li>
                <li>🍂 <strong>金黃的大銀杏</strong>：境內的大銀杏整棵轉黃，落葉鋪滿碎石地，11月下旬來剛好</li>
                <li>⛩️ <strong>石鳥居與石燈籠</strong>：從鳥居往裡看，銀杏的黃色和深色木造建築疊在一起</li>
                <li>📿 <strong>御朱印</strong>：墨書「金王八幡宮」配紅色神社印，還附一張寫著「<strong>御鎮座九百三十四年</strong>」的<strong>參拜の栞</strong>（參拜小冊）</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🆓 免費參拜", "🚃 澀谷站徒步5分", "📜 澀谷地名由來", "🏯 區指定文化財社殿", "🌸 金王桜"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都澀谷區澀谷3-5-12</p>
              <p className="text-xs text-stone-600 ib ib-train">各線「澀谷」站C1出口 徒步5分（澀谷警察署後面）</p>
              <p className="text-xs text-stone-600 ib ib-clock">社務所電話受理 9:00〜17:00</p>
              <p className="text-xs text-stone-600 ib ib-yen">參拜免費（御朱印・御守另付初穗料）</p>
              <p className="text-xs text-stone-600">⏱️ 建議預留約20〜30分（參拜＋拍照＋御朱印）</p>
              <p className="text-xs text-stone-600">📅 例祭 9月14日（週日下午有神輿連合渡御）／金王丸祭・金王桜まつり 3月最後一個週六</p>
              <p className="text-xs text-stone-600">☎️ 03-3407-1811</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">澀谷站人很多，C1出口出來往澀谷警察署方向走就對了。想看<strong>金王桜</strong>的話排在<strong>春天</strong>（3月最後一個週六有金王桜まつり）。從這裡往南走約15分就是下一間<strong>澀谷氷川神社</strong>，兩間可以一起排。</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://www.konno-hachimangu.jp/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站
              </a>
              <a
                href="https://www.instagram.com/konnouhachimangu.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                📷 Instagram
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=金王八幡宮+渋谷区渋谷3-5-12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🗺️ Google 地圖
              </a>
            </div>
          </div>
        </section>

        {/* 渋谷氷川神社 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="flex flex-col gap-[2px]">
            {[hikawaPhotos.slice(0, 3), hikawaPhotos.slice(3)].map((row, r) => (
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
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">6</div>
              <div>
                <h3 className="text-base font-black text-stone-800">澀谷氷川神社</h3>
                <span className="text-xs text-stone-400">しぶやひかわじんじゃ／Shibuya Hikawa Jinja・澀谷東</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              境內約<strong>4,000坪</strong>，被稱為<strong>澀谷最古的神社</strong>🌳 據慶長10年的緣起記載，日本武尊東征時在這裡勸請素盞鳴尊，是這間神社的開始。供奉<strong>素盞鳴尊・稲田姫命</strong>等神明——這對夫妻神被視為開啟結緣之道的神，所以這裡以<strong>結緣（縁結び）</strong>聞名💗
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              現在的社殿是昭和13年（1938）建的，躲過了戰火。境內還留著「<strong>江戶郊外三大相撲</strong>」之一<strong>金王相撲</strong>的相撲場跡，《江戶名所圖會》裡也有畫到。取「いいご縁（好緣分）」的諧音，<strong>每月15日15:00</strong>舉行<strong>縁結び祈願祭（結緣祈願祭）</strong>，不用預約、免費參加，這天還有限定的御朱印與御守。
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-green-700 mb-1">✨ 這次實際看到的（實訪・11月）</p>
              <ul className="text-sm text-stone-600 leading-relaxed space-y-1.5">
                <li>⛩️ <strong>樹林裡的參道</strong>：石鳥居後面是一條被大樹包圍的石板參道，走進去就聽不到馬路的聲音</li>
                <li>💗 <strong>愛心繪馬</strong>：繪馬架上掛滿<strong>粉紅色的愛心形繪馬</strong>，是境內最好拍的地方</li>
                <li>🏯 <strong>拜殿</strong>：弧形的唐破風屋頂，晴天配上藍天很漂亮</li>
                <li>🍂 <strong>銀杏落葉的愛心</strong>：地上有人用金黃色的銀杏葉堆成愛心，很有結緣神社的感覺</li>
                <li>📿 <strong>月替御朱印</strong>：11月（霜月）是<strong>楓葉＋銀杏＋貓頭鷹</strong>的秋天圖案，還附一張粉紅色、畫著蝴蝶結的參拜說明紙</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🆓 免費參拜", "💗 結緣・愛心繪馬", "📿 月替御朱印", "📅 每月15日祈願祭", "🌳 澀谷最古"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都澀谷區東2-5-6</p>
              <p className="text-xs text-stone-600 ib ib-train">JR「恵比寿」站西口・「澀谷」站新南口 徒步約15分／澀谷站搭都營巴士（往日赤医療センター）「國學院大學前」下車 徒步1分</p>
              <p className="text-xs text-stone-600 ib ib-yen">參拜免費（縁結び御守500日圓：平常銀色，15日限定粉紅色）</p>
              <p className="text-xs text-stone-600">💗 縁結び祈願祭：每月15日15:00（免預約・免費）</p>
              <p className="text-xs text-stone-600">⏱️ 建議預留約30分（參拜＋繪馬＋御朱印）</p>
              <p className="text-xs text-stone-600">📅 例祭 9月16日</p>
              <p className="text-xs text-stone-600">☎️ 03-3407-7534</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">想拿<strong>限定御朱印</strong>或粉紅色縁結び御守，排在<strong>每月15日</strong>。每個月的御朱印圖案會在官方Instagram公告，出發前先看一下。神社就在<strong>國學院大學</strong>旁邊，從恵比寿或澀谷走過來都是住宅區，路上很安靜。</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="http://www.tokyo-jinjacho.or.jp/shibuya/3272"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 東京都神社廳介紹頁
              </a>
              <a
                href="https://www.instagram.com/shibuyahikawa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                📷 Instagram
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=渋谷氷川神社+渋谷区東2-5-6"
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
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">東京神社參拜小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>早上去最安靜</strong>，開門時間很早（10月是5:40），竹下通的店開門前先來參拜剛好</li>
            <li>✅ 入口到本殿要走<strong>約10分鐘</strong>的碎石參道，穿好走的鞋👟</li>
            <li>✅ 經過大鳥居時抬頭看看——那是<strong>台灣檜木</strong>做的🇹🇼</li>
            <li>✅ 想收集御朱印的話，<strong>9:00以後</strong>才開始受理</li>
            <li>✅ 參拜完往旁邊走就是<strong>代代木公園</strong>，往南是表參道和澀谷，可以排成同一天的行程</li>
            <li>✅ 下午從澀谷搭<strong>田園都市線約10分</strong>到桜新町，加碼桜神宮的<strong>月替御朱印</strong>🌸</li>
            <li>✅ 從明治神宮前站搭<strong>千代田線2站</strong>就是乃木坂，傍晚到乃木神社看<strong>紅鳥居打燈</strong>🐴（17點關門）</li>
            <li>✅ 想去松陰神社的話，在三軒茶屋轉<strong>世田谷線</strong>（路面電車）；<strong>週末去</strong>才看得到松下村塾裡面📚</li>
            <li>✅ 在澀谷逛街的空檔，<strong>金王八幡宮→澀谷氷川神社</strong>走路約15分；想要粉紅色縁結び御守就排在<strong>每月15日</strong>💗</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            一百年前種下的10萬棵樹、台灣來的檜木鳥居、寫著皇紀的御朱印✨<br />
            再加上住宅街裡綁成櫻花的おみくじ，和每個月都想回來拿的御朱印🌸<br />
            還有乃木坂站旁、馬年裡到處都是馬的乃木神社🐴<br />
            和搭路面電車去、吉田松陰長眠的松陰神社📚<br />
            最後是澀谷鬧區後面，金王八幡宮的大銀杏和澀谷氷川神社的愛心繪馬💗<br />
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

        <MapListCard list="tokyo" />
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
