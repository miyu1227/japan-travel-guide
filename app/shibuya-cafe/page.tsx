import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import RelatedArticles from "../components/RelatedArticles";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/shibuya-cafe";
const OG_IMAGE = "/shibuya-cafe/recoco-1.jpg";

export const metadata: Metadata = {
  title: "RECOCO黑膠咖啡＆歐舒丹咖啡廳｜澀谷咖啡廳2選✅實訪",
  description:
    "澀谷駅走3分的歐舒丹咖啡廳（L'OCCITANE CAFÉ），輕食¥1,880、甜點盤¥1,780；加上約300張唱片聽到飽的黑膠咖啡RECOCO。附交通・營業時間・付款方式。",
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
    title: "RECOCO黑膠咖啡＆歐舒丹咖啡廳｜澀谷咖啡廳推薦2選",
    description: "澀谷站前3分的歐舒丹咖啡廳，加上可親手試聽黑膠唱片的RECOCO。附交通・菜單・營業時間。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "澀谷咖啡廳推薦・RECOCO レココ渋谷" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RECOCO黑膠咖啡＆歐舒丹咖啡廳｜澀谷咖啡廳推薦2選",
    description: "澀谷站前3分的歐舒丹咖啡廳 L'OCCITANE CAFÉ，加上約300張唱片聽到飽的黑膠咖啡RECOCO☕",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "澀谷咖啡廳推薦2選｜RECOCO 黑膠唱片咖啡＆歐舒丹咖啡廳 L'OCCITANE CAFÉ【實際造訪】",
  description: "澀谷必去特色咖啡廳2間：可親手試聽黑膠唱片的「RECOCO（レココ）渋谷」，與澀谷站前的歐舒丹咖啡廳「ロクシタンカフェ SHIBUYA TOKYO」。",
  url: PAGE_URL,
  inLanguage: ["zh-TW", "zh-HK"],
  author: { "@type": "Person", name: "ぽやぴよ", url: "https://www.japantrippicks.com/about" },
  publisher: { "@type": "Organization", name: "Japan Trip Picks", url: "https://www.japantrippicks.com" },
  datePublished: "2026-07-01T00:00:00+09:00",
  dateModified: "2026-09-17T00:00:00+09:00",
  image: `https://www.japantrippicks.com${OG_IMAGE}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.japantrippicks.com" },
    { "@type": "ListItem", position: 2, name: "澀谷咖啡廳推薦2選", item: PAGE_URL },
  ],
};

const recocoPhotos = [
  "/shibuya-cafe/recoco-1.jpg",
  "/shibuya-cafe/recoco-2.jpg",
  "/shibuya-cafe/recoco-3.jpg",
  "/shibuya-cafe/recoco-4.jpg",
];

const loccitanePhotos = [
  { src: "/shibuya-cafe/loccitane-1.jpg", alt: "歐舒丹咖啡廳 澀谷 L'OCCITANE CAFÉ SHIBUYA TOKYO 的永久花裝置與鏡面天花板" },
  { src: "/shibuya-cafe/loccitane-2.jpg", alt: "CAFÉ L'OCCITANE 的琥珀色藥罐牆面" },
  { src: "/shibuya-cafe/loccitane-3.jpg", alt: "歐舒丹咖啡廳的茶壺紅茶與茶歐蕾" },
];

const relatedLinks = [
  { href: "/nakameguro-cafe", label: "☕ 中目黑咖啡廳推薦｜星巴克臻選東京烘焙工坊", desc: "全世界6間之一・隈研吾設計建築" },
  { href: "/shimokitazawa-cafe", label: "☕ 下北澤美食・咖啡廳推薦4選｜甜點、派、純素烘焙", desc: "純素烘焙・起司蛋糕・自家焙煎" },
  { href: "/bolt-uehara", label: "☕ 代代木上原咖啡廳推薦｜BOLT・寵物友善人氣店", desc: "手沖咖啡＆自家烘焙甜點" },
];

export default function ShibuyaCafePage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 transition-colors text-sm flex items-center gap-1">
            ← 返回
          </Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">澀谷咖啡廳推薦2選</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-pink-100 text-pink-700 border border-pink-300 text-xs font-semibold px-3 py-1 rounded-full">☕ 咖啡廳（咖啡店）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 東京・澀谷</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          澀谷咖啡廳推薦2選｜RECOCO 黑膠唱片咖啡<br />＆歐舒丹咖啡廳 L&apos;OCCITANE CAFÉ☕
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-09-17</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">在澀谷，找到一間「用耳朵享受」的咖啡廳</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            澀谷的咖啡廳多到數不清，但這間<strong>「RECOCO（レココ）渋谷」</strong>非常特別——它是一間可以<strong>親手拿起黑膠唱片、放上唱盤試聽</strong>的音樂體驗型咖啡廳🎵 就算你從沒碰過黑膠唱片，也能在這裡輕鬆體驗那種類比音樂獨有的溫暖音色。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            店內收藏約<strong>300張唱片</strong>，從洋樂經典、R&B 到 J-POP、K-POP 都有，一邊喝著飲料一邊挑選喜歡的唱片，是澀谷購物逛街之餘最療癒的休息方式。全席有電源與 Wi-Fi，也很適合當作旅途中的作業咖啡☕
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mt-2">
            另外再加一間：走出澀谷駅就到的<strong>歐舒丹咖啡廳（L&apos;OCCITANE CAFÉ SHIBUYA TOKYO）</strong>。保養品牌歐舒丹開的咖啡廳，2・3樓共100席，是澀谷少數可以坐下來好好講話的地方🌿
          </p>
        </section>

        {/* Quick compare */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">快速比較</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">RECOCO → 親手放唱片的音樂體驗</p>
                <p className="text-xs text-stone-500 leading-relaxed">約300張唱片聽到飽、全席電源與Wi-Fi。只收電子支付，混雜時可能有90分鐘限制</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">歐舒丹咖啡廳 → 站前3分的南法輕食與甜點</p>
                <p className="text-xs text-stone-500 leading-relaxed">100席、開到23:00，輕食¥1,880・甜點¥980〜。可用支付寶・微信支付</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3 pt-3 border-t border-stone-100">
            💡 兩間走路約8分鐘，想安靜聽音樂選RECOCO；人多、想吃點鹹的或待到晚上就選歐舒丹。
          </p>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">澀谷咖啡廳推薦（推介）・2選</h2>

        {/* Spot 1: RECOCO */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {recocoPhotos.map((src, i) => (
              <div key={i} className="relative bg-stone-100" style={photoStyle(src)}>
                <Image
                  src={src}
                  alt="RECOCO レココ渋谷 - 澀谷黑膠唱片咖啡廳推薦"
                  fill
                  sizes="50vw"
                  className="object-cover"
                  {...(i === 0 ? { priority: true } : {})}
                />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h3 className="text-base font-black text-stone-800">RECOCO（レココ）渋谷</h3>
                <span className="text-xs text-stone-400">Record Cafe RECOCO Shibuya</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              以<strong>「就算第一次接觸黑膠也能盡情享受」</strong>為理念的唱片試聽咖啡廳。店內牆面整齊排列著滿滿的唱片，氛圍簡約明亮🎶 你可以自由挑選喜歡的專輯，親手放上唱盤，享受黑膠特有的溫潤音色，連唱片封套的藝術設計與歌詞卡都能細細欣賞。從 Teen 世代到昭和世代，各年齡層都能找到熟悉的一張。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                這是一種在別的地方很難體驗到的「日本感」——在音樂之都澀谷，用最類比的方式享受音樂🎵 採<strong>入場費＋飲料制</strong>，還有唱片聽到飽的方案，點一杯<strong>哈密瓜蘇打（メロンクリームソーダ）</strong>配上店家自製的年輪蛋糕，邊聽唱片邊放空，是逛累澀谷後最完美的充電站。全席禁菸、電源與 Wi-Fi 完備，一個人來也很自在。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🎵 黑膠唱片試聽", "🎧 約300張收藏", "🍈 哈密瓜蘇打", "🔌 全席電源・Wi-Fi", "📸 IG拍照熱點"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都渋谷區渋谷3-1-10 IRIE FIRST PLAZA 1F</p>
              <p className="text-xs text-stone-600 ib ib-train">澀谷駅 徒歩約6分（C1出口徒歩約4分）／表參道駅 徒歩約11分</p>
              <p className="text-xs text-stone-600 ib ib-clock">11:00〜21:00（L.O. 20:30・無定休，年末年始休）</p>
              <p className="text-xs text-stone-600 ib ib-yen">入場費＋1飲料制（唱片聽到飽方案 平日約¥1,320／假日約¥1,650）</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">全店<strong>只收電子支付（現金不可）</strong>，記得備好信用卡或行動支付；混雜時段可能有90分鐘的時間限制</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://recoco.cafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站
              </a>
              <a
                href="https://www.instagram.com/recoco.cafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                📷 Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Spot 2: L'OCCITANE CAFÉ */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8 card-split">
          <div className="photo-strip">
            {loccitanePhotos.map((photo) => (
              <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                <Image src={photo.src} alt={photo.alt} fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h3 className="text-base font-black text-stone-800">歐舒丹咖啡廳 澀谷（ロクシタンカフェ SHIBUYA TOKYO）</h3>
                <span className="text-xs text-stone-400">L&apos;OCCITANE CAFÉ SHIBUYA TOKYO</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              走出澀谷駅<strong>5號（井之頭口）出口</strong>抬頭就看得到的黃色招牌——這裡是法國保養品牌<strong>歐舒丹（L&apos;OCCITANE／ロクシタン）</strong>直營的咖啡廳，佔了大樓的2・3樓、共<strong>100個座位</strong>🌿 天花板是波浪狀的鏡面金屬，牆上整排琥珀色藥罐印著「CAFÉ L&apos;OCCITANE」，正中央垂下一大束南法的<strong>永久花（イモーテル・Immortelle）</strong>，燈一打整間店都是蜂蜜色，和樓下澀谷十字路口的喧鬧完全是兩個世界。
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-pink-600 mb-1">✨ 推薦給旅客的理由</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                出站3分鐘就能坐下來，而且<strong>開到晚上11點</strong>——逛完澀谷、行李還在身上的那種時候特別好用。餐點是正經的法式輕食，可頌鬆餅三明治・焗烤・法式家常菜<strong>一律¥1,880</strong>；甜點推薦<strong>歐舒丹綜合甜點盤（ロクシタン デザートプレート）¥1,780</strong>，一盤吃到巧克力蛋糕、烤布蕾、水果蛋糕，還有長得像他們家精華液的<strong>「RESET SERUM 果凍」</strong>（香草與紅茶做成的漸層果凍）📸 紅茶與熱咖啡是<strong>用茶壺出餐</strong>，一壺倒得出兩杯多，坐著慢慢喝很划算。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["🌿 歐舒丹直營咖啡廳", "🚃 澀谷站前3分", "🍮 綜合甜點盤¥1,780", "🫖 紅茶用茶壺出餐", "🌙 開到23:00"].map((t) => (
                <span key={t} className="text-xs bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 菜單 */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-3">
              <p className="text-xs font-bold text-amber-700 mb-2">🍽️ 菜單與價位（2026年版・含稅）</p>
              <ul className="text-xs text-stone-600 space-y-1.5">
                <li><strong>輕食</strong>：可頌鬆餅三明治・焗烤等熱食・歐舒丹沙拉 各 ¥1,880（加飲料 +¥380／加沙拉 +¥600）</li>
                <li><strong>套餐 MEAL SET</strong>：¥2,580（主餐＋甜點＋咖啡或紅茶）</li>
                <li><strong>甜點</strong>：烤布蕾・巧克力蛋糕・水果蛋糕 各 ¥980／綜合甜點盤 ¥1,780／聖代 ¥1,580〜¥1,980</li>
                <li><strong>飲品</strong>：有機咖啡・紅茶・花草茶 ¥930／冰紅茶 ¥830／特調飲品（薰衣草藍等）¥1,080</li>
                <li>💡 <strong>甜點＋飲料一起點，飲料折¥200</strong>（酒類除外）</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
              <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
              <p className="text-xs text-stone-600 ib ib-pin">東京都渋谷區道玄坂2-3-1 渋谷駅前大樓 2・3F</p>
              <p className="text-xs text-stone-600 ib ib-train">各線澀谷駅 5（井之頭口）出口出來即到／徒步約3分</p>
              <p className="text-xs text-stone-600 ib ib-clock">10:00〜23:00（L.O. 22:00・不定休）</p>
              <p className="text-xs text-stone-600 ib ib-yen">輕食・沙拉 ¥1,880／甜點 ¥980〜¥1,980／飲品 ¥830〜¥1,080（一人約¥1,500〜¥2,500）</p>
              <p className="text-xs text-stone-600">💳 可刷卡（VISA・Master・AMEX・Diners・JCB）、可用支付寶（Alipay）・微信支付（WeChat Pay）・PayPay；交通IC卡等電子錢包不可</p>
              <p className="text-xs text-stone-600">📱 有英文菜單（無中文菜單）・全席禁菸・有Wi-Fi・100席</p>
              <p className="text-xs text-stone-600">📞 03-5428-1563</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
              <span className="text-sm shrink-0">💡</span>
              <p className="text-xs text-stone-600">店內規則：<strong>每人至少點一份餐點</strong>、不能指定座位、入座後不能自行換位子。座位多但假日下午常客滿，時間緊的話避開14〜17點</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://jp.loccitane.com/stores?y_source=1_MTQ0MTg5MDYtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D#shibuya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🔗 官方網站（店舖資訊・菜單PDF）
              </a>
              <a
                href="https://www.hotpepper.jp/strJ003298159/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
              >
                🍽️ Hot Pepper（照片・付款方式）
              </a>
            </div>
          </div>
        </section>

        {/* 澀谷地區 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">關於澀谷（Shibuya）</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            澀谷是東京最具代表性的年輕文化＆潮流發信地🚶‍♀️ 車站前的<strong>「澀谷スクランブル交差点」（澀谷十字路口）</strong>是世界最繁忙的路口之一，一次紅綠燈可以有3000人同時穿越，是東京的觀光地標。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            近年澀谷經歷大規模再開發，<strong>「澀谷スクランブルスクエア」「澀谷Hikarie」「MIYASHITA PARK」</strong>等新設施陸續開幕，也帶起了<strong>音樂＆黑膠唱片文化</strong>——澀谷從80年代起就是日本唱片行聚集地，宇多田光、椎名林檎等音樂人都從澀谷發跡。
          </p>
        </section>

        {/* 順路推薦 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-jump">順路推薦：澀谷附近景點</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">澀谷スクランブル交差点（徒歩0分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">澀谷代表地標。從星巴克TSUTAYA店2樓或SHIBUYA SKY展望台俯瞰最壯觀。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">SHIBUYA SKY（徒歩約5分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">澀谷スクランブルスクエア屋上展望台，360度俯瞰東京。夕陽＆夜景絕景。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">明治神宮＆代代木公園（電車1站）</p>
                <p className="text-xs text-stone-500 leading-relaxed">澀谷喧鬧之後想沉靜，可以到隔壁的原宿逛明治神宮的森林。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-400 font-black text-sm shrink-0">▸</span>
              <div>
                <p className="text-sm font-bold text-stone-700">下北澤（電車約5分）</p>
                <p className="text-xs text-stone-500 leading-relaxed">從澀谷搭京王井の頭線一路直達下北澤，喜歡音樂＆二手唱片文化可以延伸。</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-hatena">常見問題 FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold text-stone-700 mb-1">❓ 歐舒丹咖啡廳（ロクシタンカフェ）在哪裡？要走多久？</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                在<strong>澀谷駅前大樓的2・3樓</strong>（渋谷區道玄坂2-3-1），從各線澀谷駅<strong>5號（井之頭口）出口</strong>出來即到、徒步約3分，就在澀谷十字路口旁邊。抬頭找黃色的「L&apos;OCCITANE」招牌最快。
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-700 mb-1">❓ 歐舒丹咖啡廳的價錢多少？</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                輕食（可頌鬆餅三明治・焗烤・沙拉）一律<strong>¥1,880</strong>，套餐¥2,580；甜點¥980〜¥1,980，飲品¥830〜¥1,080。<strong>一個人抓¥1,500〜¥2,500</strong>差不多。甜點和飲料一起點，飲料折¥200。
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-700 mb-1">❓ 可以刷卡或用支付寶、微信支付嗎？</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                歐舒丹咖啡廳可刷卡（VISA・Master・AMEX・Diners・JCB），也能用<strong>支付寶（Alipay）・微信支付（WeChat Pay）・PayPay</strong>，但交通IC卡那類電子錢包不能用。另一間RECOCO則是<strong>只收電子支付、不收現金</strong>，兩間都記得先確認手機付款能不能正常用。
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-700 mb-1">❓ 有中文菜單嗎？</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                歐舒丹咖啡廳<strong>有英文菜單，沒有中文菜單</strong>，不過菜名都附英文、櫃檯也看得懂手指點餐。官網有公開菜單PDF，出發前先看好要點什麼最省事。
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-700 mb-1">❓ 澀谷咖啡廳需要預約嗎？</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                兩間都是先到先得、不接受預約。RECOCO 這類體驗型咖啡廳建議<strong>平日下午</strong>比較空；歐舒丹咖啡廳有100席但假日14〜17點常客滿，而且店內規定<strong>每人至少點一份、不能指定座位、入座後不能換位子</strong>。
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-700 mb-1">❓ 澀谷駅怎麼走最不迷路？</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                澀谷駅結構複雜，出口眾多。目的地在<strong>スクランブル交差点方向</strong>就找<strong>「ハチ公口」</strong>出口最好認（忠犬八公像在門口）。手機開Google Maps＆看指標最保險。
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-700 mb-1">❓ 澀谷什麼時段人最多？</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                週五・週六<strong>晚上7〜11點</strong>是澀谷夜生活高峰，人潮爆炸。想拍到少人スクランブル交差点推薦<strong>清晨6〜8點</strong>或<strong>平日午前</strong>。
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-700 mb-1">❓ 交通最方便的路線？</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                澀谷駅是<strong>JR山手線・埼京線・湘南新宿線＋東京メトロ副都心線・銀座線・半藏門線＋京王井の頭線＋東急東橫線・田園都市線</strong>共9條路線的巨型轉乘站，來自哪都很方便。
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-700 mb-1">❓ 附近可以看夜景嗎？</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                走路約5分就到 <strong>SHIBUYA SKY</strong>（澀谷スクランブルスクエア的屋上展望台），360度俯瞰東京，夕陽與夜景都是絕景。想拍人少的スクランブル交差点則相反，<strong>清晨6〜8點或平日上午</strong>最好拍——週五・週六晚上7〜11點是澀谷夜生活的高峰，人潮會爆炸。
              </p>
            </div>
          </div>
        </section>

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">澀谷咖啡廳造訪小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ 歐舒丹咖啡廳就在<strong>澀谷駅5（井之頭口）出口</strong>旁，<strong>開到23:00</strong>，是行李還在身上、或逛到很晚時最好用的一間🌙</li>
            <li>✅ 想一次吃到多種甜點就點<strong>綜合甜點盤¥1,780</strong>；甜點＋飲料一起點，<strong>飲料折¥200</strong></li>
            <li>✅ 歐舒丹的<strong>紅茶與熱咖啡是用茶壺出餐</strong>，一壺倒得出兩杯多，坐著慢慢喝比較划算🫖</li>
            <li>✅ 從澀谷駅走過來約6分鐘，位於<strong>金王八幡宮</strong>附近的八幡通沿線，逛街途中很好安排🚶</li>
            <li>✅ 店內<strong>只收電子支付</strong>，出發前確認信用卡或行動支付能正常使用💳</li>
            <li>✅ 想慢慢挑唱片的話，建議<strong>避開午後尖峰</strong>，混雜時可能有90分鐘限制</li>
            <li>✅ 自備的唱片基於防盜考量無法帶入試聽，安心體驗店內收藏就好🎵</li>
            <li>✅ 全席電源＋Wi-Fi，逛累澀谷想坐下來整理照片・規劃行程也很適合</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            在什麼都講求快速的澀谷，RECOCO 讓人願意放慢腳步、用耳朵好好享受一張唱片的時間🎧<br />
            如果只是想找個地方坐下來喘口氣、或逛到晚上才有空檔，站前的歐舒丹咖啡廳開到23:00，是最保險的一手🌿
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「親手放下唱針的那一刻，整個澀谷好像都安靜了下來🎵」</p>
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

        <RelatedArticles slug="shibuya-cafe" exclude={["/bolt-uehara", "/nakameguro-cafe", "/shimokitazawa-cafe"]} />

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
