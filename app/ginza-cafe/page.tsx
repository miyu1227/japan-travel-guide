import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/ginza-cafe";
const OG_IMAGE = "/ginza-cafe/bacha-1.jpg";

export const metadata: Metadata = {
  title: "Bacha Coffee 銀座｜日本首間旗艦店要排隊嗎✅實訪",
  description:
    "銀座站A1出口徒步約1分的Bacha Coffee（夿萐咖啡）日本首間旗艦店。可頌2個¥1,250、咖啡整壺¥1,800起，不接受訂位。附營業時間・排隊重點。",
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
    title: "Bacha Coffee 銀座｜三層樓的摩洛哥咖啡宮殿・日本首間旗艦店",
    description: "銀座站徒步約1分。金色咖啡壺、香緹鮮奶油、彩色可頌，1樓還有整面牆的咖啡罐可以買。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Bacha Coffee 銀座的咖啡、彩色可頌、提拉米蘇與磅蛋糕" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bacha Coffee 銀座｜日本首間旗艦店",
    description: "銀座站徒步約1分・三層樓的摩洛哥咖啡宮殿☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Bacha Coffee 銀座｜日本首間旗艦店・可頌、提拉米蘇與整壺咖啡【實際造訪】",
  description: "Bacha Coffee（夿萐咖啡）銀座旗艦店完整介紹。樓層配置、點了什麼、價錢、排隊與訂位規則、營業時間與交通。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-10-02T00:00:00+09:00",
  dateModified: "2026-10-02T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "銀座咖啡廳推薦", item: PAGE_URL },
  ],
};

const bachaPhotos = [
  { src: "/ginza-cafe/bacha-1.jpg", alt: "Bacha Coffee 銀座 - 兩杯咖啡、四個可頌、提拉米蘇與磅蛋糕擺滿一桌" },
  { src: "/ginza-cafe/bacha-2.jpg", alt: "Bacha Coffee 銀座的店面外觀 - 粉橘色外牆與金色招牌 1910 MARRAKECH" },
  { src: "/ginza-cafe/bacha-3.jpg", alt: "Bacha Coffee 銀座 - 印有 1910 Marrakech 的橘色鑲邊咖啡杯" },
  { src: "/ginza-cafe/bacha-4.jpg", alt: "Bacha Coffee 銀座的可頌 - 紅色覆盆子與綠色開心果" },
  { src: "/ginza-cafe/bacha-5.jpg", alt: "Bacha Coffee 銀座的提拉米蘇 - 裝在橘色玻璃密封罐裡" },
  { src: "/ginza-cafe/bacha-6.jpg", alt: "Bacha Coffee 銀座的磅蛋糕切片與抹醬" },
  { src: "/ginza-cafe/bacha-7.jpg", alt: "Bacha Coffee 銀座 Coffee Room 的座位 - 橘色絨布椅與黑白棋盤地板" },
  { src: "/ginza-cafe/bacha-8.jpg", alt: "Bacha Coffee 銀座1樓的咖啡精品店 - 整面牆的咖啡罐，也有低咖啡因" },
  { src: "/ginza-cafe/bacha-9.jpg", alt: "Bacha Coffee 銀座1樓的咖啡罐禮盒 - ¥6,900 與 ¥9,250 的價格牌" },
];

// 開幕時（2025年12月）各媒體報導的價格。含稅，內用另加10%服務費。
const menu = [
  { zh: "甜可頌 2個", jp: "スイートクロワッサン（2個）", price: "¥1,250", note: "覆盆子肉桂／開心果／1910咖啡＆巧克力等" },
  { zh: "Sidamo Mountain 咖啡（整壺）", jp: "シダモマウンテン コーヒー", price: "¥1,800", note: "衣索比亞單品・價格依豆子不同" },
  { zh: "法式千層酥", jp: "ミルフィーユ", price: "¥1,700", note: "" },
  { zh: "烤布蕾", jp: "クレームブリュレ", price: "¥2,200", note: "" },
  { zh: "摩洛哥肉丸 Kefta", jp: "ケフタ", price: "¥4,950", note: "正餐" },
  { zh: "下午咖啡套餐", jp: "アフタヌーンコーヒーセット", price: "¥6,500〜", note: "" },
  { zh: "外帶咖啡", jp: "テイクアウトコーヒー", price: "¥1,200〜", note: "1樓・附香緹鮮奶油" },
];

const relatedLinks = [
  { href: "/ginza-apollo", label: "🍽️ THE APOLLO 銀座｜希臘料理人氣餐廳", desc: "同樣在銀座・地中海風味分享盤與烤起司" },
  { href: "/tokyo-cafe", label: "☕ 東京咖啡廳推薦｜依區域整理的散步路線", desc: "澀谷・代官山・中目黑・清澄白河" },
  { href: "/daikanyama-cafe", label: "☕ 代官山咖啡廳推薦3選｜義式烘焙・高級甜點・法式可頌", desc: "PRINCI・DOLCE TACUBO・Doré" },
];

const faqItems = [
  {
    q: "Bacha Coffee 是什麼？中文叫什麼？",
    a: "源自摩洛哥馬拉喀什的咖啡品牌，名字來自1910年建成的宮殿「Dar el Bacha」。台灣的中文名是「夿萐咖啡」，日文寫作「バシャコーヒー」。只賣100%阿拉比卡豆，來自35個國家、超過200種。",
  },
  {
    q: "Bacha Coffee 銀座可以訂位嗎？要排多久？",
    a: "不接受訂位，Coffee Room（2・3樓內用）一律現場排隊、先到先入座。2025年12月開幕初期曾有等上數小時的情況，等候時間依日子落差很大。座位只有約40席，想內用建議平日去、避開週末下午。",
  },
  {
    q: "Bacha Coffee 銀座的價錢多少？",
    a: "內用的甜可頌是2個¥1,250，咖啡以整壺供應、Sidamo Mountain 是¥1,800（依豆子不同），正餐類約¥3,850〜¥4,950。內用另加10%服務費，而且每人至少要點一樣。1樓的外帶咖啡¥1,200起。",
  },
  {
    q: "台灣・香港也有 Bacha Coffee，銀座值得去嗎？",
    a: "豆子和禮盒在台北、香港也買得到，差別在空間：銀座是日本第一間店、也是整棟三層樓的旗艦店，1樓賣咖啡豆與外帶，2・3樓是約40席、可以坐下來點餐的 Coffee Room。想體驗「整壺咖啡配香緹鮮奶油」加上可頌與甜點的內用，就值得排進行程；只想買豆子的話，在自己的城市買就可以。",
  },
  {
    q: "從銀座站怎麼走？",
    a: "東京Metro「銀座」駅（銀座線・丸之內線・日比谷線）A1出口出來徒步約1分，地址是東京都中央區銀座5-6-6。店面是粉橘色外牆配金色「BACHA COFFEE 1910 MARRAKECH」招牌，很好認。",
  },
  {
    q: "可以刷卡嗎？不內用也可以只買咖啡豆嗎？",
    a: "可以刷卡，電子錢包與QR code支付也能用。1樓的咖啡精品店不用內用就能逛，咖啡罐我們去的時候標價是¥6,900與¥9,250，另有掛耳包禮盒，也有低咖啡因（Decaffeinated）的豆子。",
  },
];

export default function GinzaCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">銀座咖啡廳推薦</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳（咖啡店）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・銀座</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          Bacha Coffee 銀座｜日本首間旗艦店<br />彩色可頌・提拉米蘇與整壺咖啡☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-10-02</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">銀座正中央的「摩洛哥咖啡宮殿」</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>Bacha Coffee（バシャコーヒー）</strong>是源自摩洛哥馬拉喀什的咖啡品牌，台灣的中文名是<strong>夿萐咖啡</strong>☕ 名字來自1910年建成的宮殿「Dar el Bacha」，招牌上的 <strong>1910 MARRAKECH</strong> 就是這個由來。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            <strong>銀座店是日本第一間店</strong>，2025年12月11日開幕，整棟三層樓都是 Bacha Coffee。台北、香港也有分店，但這間是2・3樓整層都是 <strong>Coffee Room</strong> 的旗艦店，可以坐下來一壺一壺慢慢喝——從銀座站A1出口走過來約1分鐘，這次推薦（推介）的就是它的內用體驗，以及1樓可以直接買回家當伴手禮（手信）的咖啡罐。
          </p>
        </section>

        <PrepBannerCompact />

        {/* 樓層 */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">Bacha Coffee 銀座的樓層怎麼用</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">1F</span>
              <div>
                <p className="text-sm font-bold text-stone-700">咖啡精品店＋外帶櫃檯</p>
                <p className="text-xs text-stone-500 leading-relaxed">整面牆的咖啡罐、禮盒與掛耳包。不內用也能直接進來買，外帶咖啡¥1,200起</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">2F</span>
              <div>
                <p className="text-sm font-bold text-stone-700">Coffee Room「1910」</p>
                <p className="text-xs text-stone-500 leading-relaxed">坐下來點餐的內用空間。橘色與藍色的絨布椅、黑白棋盤地板</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">3F</span>
              <div>
                <p className="text-sm font-bold text-stone-700">Coffee Room「Marrakech」</p>
                <p className="text-xs text-stone-500 leading-relaxed">同樣是內用空間，2・3樓合計約40席</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3 pt-3 border-t border-stone-100">
            💡 只想買豆子或外帶的人不用排內用的隊，直接進1樓就可以。
          </p>
        </section>

        {/* Spot */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">銀座咖啡廳推薦（咖啡店推介）・持續更新中</h2>

        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {bachaPhotos.slice(0, 3).map((photo, i) => (
              <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                <Image src={photo.src} alt={photo.alt} fill sizes="33vw" className="object-cover" {...(i === 0 ? { priority: true } : {})} />
              </div>
            ))}
          </div>
          <div className="photo-strip">
            {bachaPhotos.slice(3, 6).map((photo) => (
              <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                <Image src={photo.src} alt={photo.alt} fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="photo-strip">
            {bachaPhotos.slice(6, 9).map((photo) => (
              <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                <Image src={photo.src} alt={photo.alt} fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">Bacha Coffee 銀座</h3>
                <span className="text-xs text-stone-400">バシャコーヒー 銀座（夿萐咖啡）</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              粉橘色的外牆、白色拱窗、金色的 <strong>BACHA COFFEE 1910 MARRAKECH</strong> 招牌——在銀座的街上一眼就認得出來🧡 進門的1樓是咖啡精品店，木頭櫃子從地板排到天花板，每一格都放著一個橘色咖啡罐，上面寫著豆子的名字。
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              內用在2・3樓的 <strong>Coffee Room</strong>。花草紋的壁紙、黃銅壁燈、絨布椅和黑白棋盤地板，桌上的杯盤全部是橘色鑲邊、印著品牌標誌的整套瓷器。這裡的咖啡不是一杯一杯出，而是<strong>整壺端上桌</strong>，旁邊附一碗<strong>香緹鮮奶油（Chantilly cream）</strong>、糖和研磨罐裝的香草，自己加、自己調。豆子只用<strong>100%阿拉比卡</strong>，來自35個國家、超過200種。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 實際點的（實訪）</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                兩個人點了<strong>兩壺咖啡</strong>、<strong>可頌兩盤（一盤2個）</strong>、<strong>提拉米蘇</strong>和<strong>磅蛋糕</strong>，小圓桌整個擺滿。可頌最吸睛：<strong>紅色的是覆盆子</strong>、<strong>綠色的是開心果</strong>，表面一條一條的彩色酥皮，上面撒著同口味的碎粒；另一盤是咖啡色條紋的<strong>1910咖啡＆巧克力</strong>🥐 提拉米蘇裝在<strong>橘色玻璃密封罐</strong>裡，可可粉上放了幾塊巧克力；磅蛋糕切成兩片，旁邊附一小碟抹醬。咖啡加一匙香緹鮮奶油再喝，是這間店最有記憶點的喝法。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🥐 彩色可頌 2個¥1,250", "☕ 整壺咖啡＋香緹鮮奶油", "🍫 罐裝提拉米蘇", "🏛️ 三層樓旗艦店", "🎁 1樓咖啡罐禮盒"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 價錢 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">💴 Bacha Coffee 銀座的價錢（菜單一部分）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                {menu.map((m) => (
                  <li key={m.jp}>
                    <strong>{m.zh}</strong>
                    <span className="text-stone-400">（{m.jp}）</span>
                    <span className="ml-1 font-bold text-stone-700">{m.price}</span>
                    {m.note && <span className="ml-1 text-stone-400">{m.note}</span>}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
                ※ 2025年12月開幕時公布的價格（含稅）。<strong>內用另加10%服務費</strong>，每人至少要點一樣。提拉米蘇與磅蛋糕等品項的價格請以店頭菜單為準。
              </p>
            </div>

            {/* 伴手禮 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🎁 1樓可以買的伴手禮（手信）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>方形咖啡罐</strong>（Signature Nomad 系列・250g）：我們去的時候架上標的是 <strong>¥6,900</strong></li>
                <li><strong>Autograph 禮盒</strong>（附密封扣的高罐）：標價 <strong>¥6,900</strong> 與 <strong>¥9,250</strong> 兩種</li>
                <li><strong>低咖啡因（Decaffeinated）</strong>：有一整面牆的專區</li>
                <li>另有掛耳包禮盒，可選整顆豆或研磨好的咖啡粉</li>
              </ul>
              <p className="text-[11px] text-stone-500 leading-relaxed mt-2 pt-2 border-t border-amber-200">
                ※ 價格是造訪當時的標價，可能調整。
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都中央區銀座5-6-6</p>
              <p className="text-xs text-stone-600 ib ib-train">東京Metro「銀座」駅 A1出口 徒步約1分</p>
              <p className="text-xs text-stone-600 ib ib-clock">10:00〜20:00（Coffee Room 最後點餐 18:30）／全年無休（年末年初除外）</p>
              <p className="text-xs text-stone-600 ib ib-yen">內用一人約 ¥3,000〜¥4,000（另加10%服務費）</p>
              <p className="text-xs text-stone-600">📅 不接受訂位・現場排隊／每人至少點一樣</p>
              <p className="text-xs text-stone-600">💳 可刷卡・電子錢包・QR code支付</p>
              <p className="text-xs text-stone-600">⏱️ 內用建議預留約1小時（不含排隊）／全席禁菸</p>
              <p className="text-xs text-stone-600">📞 03-6263-9720</p>
              <p className="text-[11px] text-stone-500 leading-relaxed pt-1">
                ※ 營業時間有更動過：開幕時公布的是11:00〜21:00，目前餐廳資訊網站刊載的是10:00〜20:00。出發前請再確認一次。
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">Coffee Room <strong>不能訂位</strong>、座位只有約40席。想內用就排平日；只是想買咖啡豆或外帶一杯，直接進<strong>1樓</strong>就好</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://bachacoffee.com/jp/en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 Bacha Coffee 官方網站
              </a>
              <a
                href="https://tabelog.com/tokyo/A1301/A130101/13316406/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🍴 食べログ（營業時間・最新資訊）
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bacha+Coffee+%E9%8A%80%E5%BA%A7"
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
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">Bacha Coffee 銀座・去之前先知道</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>不能訂位</strong>，內用一律現場排隊——把它排在當天行程的第一站最保險</li>
            <li>✅ 咖啡是<strong>整壺</strong>上桌、不只一杯的量，可以配著甜點慢慢喝</li>
            <li>✅ 可頌是<strong>一盤2個</strong>¥1,250，想多吃幾種口味就兩個人分著點🥐</li>
            <li>✅ 內用<strong>另加10%服務費</strong>，結帳金額會比菜單價高一點</li>
            <li>✅ 咖啡罐很有份量，買伴手禮（手信）的話留到離開前再去1樓結帳，逛銀座比較輕鬆🎁</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            一走進去就不像在銀座，像是被帶到馬拉喀什的老宮殿裡✨<br />
            咖啡、可頌、整套橘色鑲邊的杯盤——連桌面都好看的一間店。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「紅色和綠色的可頌一端上來，就先拍了十張才開動🥐」</p>
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

        <RelatedArticles slug="ginza-cafe" exclude={["/ginza-apollo", "/tokyo-cafe", "/daikanyama-cafe"]} />

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
