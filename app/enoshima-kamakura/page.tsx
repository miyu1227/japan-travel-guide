import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import PrepBanner from "../components/PrepBanner";
import AuthorCard from "../components/AuthorCard";
import PrepBannerCompact from "../components/PrepBannerCompact";
import RelatedArticles from "../components/RelatedArticles";
import FaqSection from "../components/FaqSection";
import { photoStyle } from "@/lib/photoDims";

const PAGE_URL = "https://www.japantrippicks.com/enoshima-kamakura";
const OG_IMAGE = "/enoshima-kamakura/enoshima-1.jpg";

export const metadata: Metadata = {
  title: "江之島・鎌倉一日遊｜江島神社到小町通7站✅實訪",
  description:
    "從片瀨江之島站步行約10分上島。江島神社、魚見亭吻仔魚丼¥1,400起、新江之島水族館¥2,800，再搭江之電到鎌倉小町通與鶴岡八幡宮。附票價與路線。",
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
    title: "江之島・鎌倉一日遊｜江島神社、吻仔魚丼、江之電、小町通、鶴岡八幡宮",
    description: "實際走過的7站路線：上午江之島、下午搭江之電到鎌倉。附票價、營業時間與走法。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    siteName: "Japan Trip Picks",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "從江之島上俯瞰遊艇港與湘南海岸" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "江之島・鎌倉一日遊｜實際走過的7站路線",
    description: "江島神社・吻仔魚丼・水族館・江之電・小町通・鶴岡八幡宮🌊",
    images: [OG_IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "江之島・鎌倉一日遊｜江島神社、魚見亭、新江之島水族館、江之電、小町通、鶴岡八幡宮【實際造訪】",
  description: "從片瀨江之島站走上江之島，再搭江之電到鎌倉的一日路線。7站的票價、營業時間、交通與實際吃到的東西。",
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
    { "@type": "ListItem", position: 2, name: "江之島・鎌倉一日遊", item: PAGE_URL },
  ],
};

type Photo = { src: string; alt: string };
type Spot = {
  name: string;
  sub: string;
  photos: Photo[];
  body: ReactNode;
  reasonTitle: string;
  reason: ReactNode;
  tags: string[];
  info: ReactNode;
  tip: ReactNode;
  links: { href: string; label: string }[];
};

const P = "/enoshima-kamakura";

const spots: Spot[] = [
  {
    name: "江之島（從片瀨江之島站走過去）",
    sub: "江の島・江の島弁天橋",
    photos: [
      { src: `${P}/enoshima-1.jpg`, alt: "從江之島上俯瞰遊艇港與湘南海岸" },
      { src: `${P}/enoshima-2.jpg`, alt: "通往江之島的江之島弁天橋，山頂看得到江之島Sea Candle展望燈塔" },
      { src: `${P}/enoshima-3.jpg`, alt: "江之島あさひ本店的整隻章魚仙貝（丸焼きたこせんべい）" },
    ],
    body: (
      <>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          <strong>江之島（江の島／江ノ島）</strong>是一座用橋連著本土的小島。我們從小田急線的<strong>「片瀨江之島」駅</strong>出來，走<strong>江之島弁天橋</strong>過海，大約<strong>10分鐘</strong>就到島的入口🌊 橋是行人專用，一路正對著島，山頂上那座白色的塔就是展望燈塔<strong>「江之島Sea Candle」</strong>。
        </p>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          上島之後是一條往上的參道<strong>「弁財天仲見世通」</strong>，兩邊都是小吃和伴手禮（手信）店。爬到高一點的地方回頭看，<strong>遊艇港、片瀨的沙灘和湘南的海岸線</strong>一整片攤開在眼前——這篇的封面照就是在島上拍的。
        </p>
      </>
    ),
    reasonTitle: "✨ 路上吃的：整隻章魚仙貝",
    reason: (
      <>
        半路上買了<strong>あさひ本店</strong>的<strong>「丸焼きたこせんべい」（章魚仙貝，日文也簡稱たこせん）</strong>🐙 把整隻章魚用鐵板高壓壓成一大片薄餅，比臉還大，上面看得到章魚的紋路。紙袋上印著粉紅色的章魚，拿在手上就是江之島的名物照。現烤的一片<strong>約¥500起</strong>。
      </>
    ),
    tags: ["🌉 步行過橋約10分", "🐙 章魚仙貝", "🗼 Sea Candle展望燈塔", "⏱️ 繞島一圈3〜4小時"],
    info: (
      <>
        <p className="text-xs text-stone-600 ib ib-train">小田急江之島線「片瀨江之島」駅 徒步約10分（到島的入口）</p>
        <p className="text-xs text-stone-600 ib ib-clock">島上自由進出／あさひ本店 9:00〜18:00（週四公休・天候不佳時休）</p>
        <p className="text-xs text-stone-600 ib ib-yen">上島免費／Escar（收費電扶梯）＋Sea Candle 套票 大人¥1,100</p>
        <p className="text-xs text-stone-600">⏱️ 定番景點繞一圈約3〜4小時，含午餐建議抓半天</p>
      </>
    ),
    tip: (
      <>島上幾乎都是<strong>階梯和上坡</strong>。不想爬的話可以搭收費電扶梯「江の島エスカー（Escar）」上去，下山再用走的</>
    ),
    links: [
      { href: "https://enokama.jp/feature/6406/", label: "🔗 江之島・鎌倉Navi（江之島散步路線）" },
      { href: "https://www.google.com/maps/search/?api=1&query=%E6%B1%9F%E3%81%AE%E5%B3%B6%E5%BC%81%E5%A4%A9%E6%A9%8B", label: "🗺️ Google 地圖" },
    ],
  },
  {
    name: "江島神社",
    sub: "えのしまじんじゃ",
    photos: [
      { src: `${P}/jinja-1.jpg`, alt: "江島神社的朱紅鳥居與瑞心門" },
      { src: `${P}/jinja-2.jpg`, alt: "江島神社的江之島籤（江の島みくじ），籤裡附7種吉祥物之一" },
    ],
    body: (
      <>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          穿過仲見世通，正面就是<strong>朱紅色的大鳥居</strong>，後面那座白色基座的樓門叫<strong>「瑞心門」</strong>⛩️ <strong>江島神社</strong>相傳創建於<strong>552年</strong>，由<strong>邊津宮（辺津宮）、中津宮、奧津宮</strong>三座神社組成，沿著島上的路一路往裡面走會依序經過。以<strong>結緣、財運、才藝精進</strong>的保佑聞名。
        </p>
      </>
    ),
    reasonTitle: "✨ 實際抽的：江之島籤",
    reason: (
      <>
        抽了水藍色的<strong>「江之島籤（江の島みくじ）」</strong>。籤裡會附一個小吉祥物，一共7種：<strong>社紋（勝運）、天女（開運招福）、龍（出人頭地）、白蛇（財運）、八方睨龜（除厄）、瑞心門（消災）、琵琶（才藝）</strong>🐍 抽到哪一個要打開才知道，說明牌上寫著「隨身帶著會有好事」，很適合當成小紀念品。
      </>
    ),
    tags: ["⛩️ 朱紅鳥居・瑞心門", "🐍 附吉祥物的江之島籤", "💕 結緣・財運", "🆓 境內免費"],
    info: (
      <>
        <p className="text-xs text-stone-600 ib ib-pin">神奈川縣藤澤市江之島2-3-8</p>
        <p className="text-xs text-stone-600 ib ib-train">小田急「片瀨江之島」駅 徒步約15〜20分（過橋後往上走）</p>
        <p className="text-xs text-stone-600 ib ib-clock">境內自由參拜／奉安殿 8:30〜17:00</p>
        <p className="text-xs text-stone-600 ib ib-yen">參拜免費／奉安殿（供奉弁財天）¥200</p>
      </>
    ),
    tip: (
      <>鳥居後面是<strong>一長段石階</strong>。行李多的話先寄在車站的置物櫃，空手上島會輕鬆很多</>
    ),
    links: [
      { href: "http://enoshimajinja.or.jp/", label: "🔗 江島神社 官方網站" },
      { href: "https://www.google.com/maps/search/?api=1&query=%E6%B1%9F%E5%B3%B6%E7%A5%9E%E7%A4%BE", label: "🗺️ Google 地圖" },
    ],
  },
  {
    name: "魚見亭",
    sub: "うおみてい・江之島最裡面的海景食堂",
    photos: [
      { src: `${P}/uomitei-1.jpg`, alt: "魚見亭的雙色吻仔魚丼 - 生吻仔魚與釜揚吻仔魚各半" },
      { src: `${P}/uomitei-2.jpg`, alt: "魚見亭的烤整隻魷魚（いかの丸焼き）" },
    ],
    body: (
      <>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          一路走到島的最裡面、往<strong>岩屋</strong>洞窟的階梯上方，就是創業<strong>約150年</strong>的老食堂<strong>「魚見亭」</strong>🐟 官方的說法是<strong>全席海景</strong>，其中露台座就在海的正上方，天氣好可以看到富士山、箱根和伊豆大島。
        </p>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          江之島的名物是<strong>吻仔魚（しらす，香港叫白飯魚）</strong>。菜單上有<strong>生吻仔魚丼 ¥1,400</strong>、<strong>釜揚（燙熟）吻仔魚丼 ¥1,300</strong>，以及兩種各半的<strong>「しらす丼ハーフ」¥1,500</strong>。另一個招牌是用蠑螺做的<strong>江之島丼 ¥1,250</strong>。
        </p>
      </>
    ),
    reasonTitle: "✨ 實際點的（實吃）",
    reason: (
      <>
        點了<strong>生＋釜揚的雙色吻仔魚丼</strong>和<strong>烤整隻魷魚（いかの丸焼き ¥1,650）</strong>。丼飯上一半是透明的生吻仔魚、一半是白色的釜揚吻仔魚，中間放薑泥、紫蘇和紅薑，淋一點醬油就可以吃；兩種口感完全不一樣，第一次吃選這個最不會後悔🍚 魷魚是整隻烤好再切圈，淋醬油醬汁，很下飯。
      </>
    ),
    tags: ["🐟 生吻仔魚丼 ¥1,400", "🍚 雙色各半 ¥1,500", "🦑 烤整隻魷魚 ¥1,650", "🌊 全席海景"],
    info: (
      <>
        <p className="text-xs text-stone-600 ib ib-pin">神奈川縣藤澤市江之島2-5-7</p>
        <p className="text-xs text-stone-600 ib ib-train">小田急「片瀨江之島」駅 徒步約23分／江之電「江之島」駅 徒步約28分</p>
        <p className="text-xs text-stone-600 ib ib-clock">10:00〜17:00（最後點餐）／不定休（颱風等天候不佳時休）</p>
        <p className="text-xs text-stone-600 ib ib-yen">一人約 ¥1,500〜¥2,500（加¥120可升級成附味噌湯的定食）</p>
        <p className="text-xs text-stone-600">📞 0466-22-4456</p>
      </>
    ),
    tip: (
      <><strong>1月〜3月中旬是吻仔魚的禁漁期</strong>，這段時間吃不到生吻仔魚；平常遇到沒有漁獲的日子也可能停賣，釜揚的則全年都有</>
    ),
    links: [
      { href: "https://enoshima-uomitei.com/", label: "🔗 魚見亭 官方網站" },
      { href: "https://www.google.com/maps/search/?api=1&query=%E6%B1%9F%E3%81%AE%E5%B3%B6+%E9%AD%9A%E8%A6%8B%E4%BA%AD", label: "🗺️ Google 地圖" },
    ],
  },
  {
    name: "新江之島水族館",
    sub: "新江ノ島水族館（えのすい）",
    photos: [
      { src: `${P}/enosui-1.jpg`, alt: "新江之島水族館的水母水槽 - 藍色燈光下的海月水母" },
      { src: `${P}/enosui-2.jpg`, alt: "新江之島水族館的水母水槽 - 拖著長長觸手的金色水母" },
    ],
    body: (
      <>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          下島回到本土，海邊就是<strong>新江之島水族館</strong>，日本人暱稱<strong>「えのすい（Enosui）」</strong>🪼 離片瀨江之島站只要走3分鐘。館內有重現眼前這片相模灣的大水槽、海豚表演的場地，還有以水母聞名的<strong>「水母夢幻廳（クラゲファンタジーホール）」</strong>。
        </p>
      </>
    ),
    reasonTitle: "✨ 最值得看的：水母",
    reason: (
      <>
        我們停最久的就是水母區。整個空間只打藍色的燈，一缸是成群的<strong>海月水母</strong>，圓圓的傘慢慢開合；另一缸是<strong>拖著長長白色觸手的金色水母</strong>，像一幅會動的畫✨ 走了半天的階梯之後，在冷氣房裡看水母是很好的休息。
      </>
    ),
    tags: ["🪼 水母夢幻廳", "🐬 海豚表演", "🚃 站前徒步3分", "☔ 雨天備案"],
    info: (
      <>
        <p className="text-xs text-stone-600 ib ib-pin">神奈川縣藤澤市片瀨海岸2-19-1</p>
        <p className="text-xs text-stone-600 ib ib-train">小田急「片瀨江之島」駅 徒步3分／江之電「江之島」駅 徒步10分</p>
        <p className="text-xs text-stone-600 ib ib-clock">9:00〜17:00（最後入場16:00）※12月〜2月多為10:00開館，1/18〜1/24休館</p>
        <p className="text-xs text-stone-600 ib ib-yen">大人 ¥2,800／高中生 ¥1,800／中小學生 ¥1,300／幼兒（3歲以上）¥900</p>
        <p className="text-xs text-stone-600">⏱️ 建議預留約1.5〜2小時</p>
      </>
    ),
    tip: (
      <>最後入場是<strong>閉館前1小時</strong>。想接著去鎌倉的話，水族館排在午餐後、<strong>14點前進場</strong>比較從容</>
    ),
    links: [
      { href: "https://www.enosui.com/", label: "🔗 新江之島水族館 官方網站" },
      { href: "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%B1%9F%E3%83%8E%E5%B3%B6%E6%B0%B4%E6%97%8F%E9%A4%A8", label: "🗺️ Google 地圖" },
    ],
  },
  {
    name: "江之電（江之島 → 鎌倉）",
    sub: "江ノ島電鉄・江ノ電",
    photos: [
      { src: `${P}/enoden-1.jpg`, alt: "江之電「江之島」駅的三角屋頂木造站舍" },
      { src: `${P}/enoden-2.jpg`, alt: "從江之電車窗看出去的海" },
    ],
    body: (
      <>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          從江之島到鎌倉，搭的是<strong>江之電（江ノ電／江之島電鐵）</strong>🚃 1902年開業的老路線，<strong>「江之島」駅</strong>是三角屋頂的木造站舍，綠色的站名牌、小小的月台，整個<strong>復古又可愛</strong>。上車後電車先從民宅之間擠過去，接著窗外<strong>突然整片都是海</strong>——就是這一段讓江之電變成很多人來湘南的理由。
        </p>
      </>
    ),
    reasonTitle: "✨ 推薦給旅客的理由",
    reason: (
      <>
        江之島 → 鎌倉<strong>約25分鐘、¥260</strong>，本身就是一段觀光。想坐海景，往鎌倉方向請選<strong>行進方向的右側</strong>。中途想下車拍照（例如「鎌倉高校前」）的話，買<strong>一日乘車券「のりおりくん」（大人¥800）</strong>會比較划算——單程¥260，上下車三次以上就回本。
      </>
    ),
    tags: ["🚃 復古木造車站", "🌊 車窗看海", "💴 江之島→鎌倉 ¥260", "🎫 一日券 ¥800"],
    info: (
      <>
        <p className="text-xs text-stone-600 ib ib-train">江之電「江之島」駅 → 「鎌倉」駅 約25分</p>
        <p className="text-xs text-stone-600 ib ib-yen">單程 大人¥260／一日乘車券「のりおりくん」大人¥800・兒童¥400</p>
        <p className="text-xs text-stone-600">🎫 一日券可在江之電各站售票機購買，也有手機版（EMot）</p>
        <p className="text-xs text-stone-600">💳 可用Suica・PASMO等交通系IC卡搭乘</p>
      </>
    ),
    tip: (
      <>注意<strong>「片瀨江之島」（小田急）</strong>和<strong>「江之島」（江之電）</strong>是兩個不同的車站，走路約10分鐘。往鎌倉要去的是江之電那一個</>
    ),
    links: [
      { href: "https://www.enoden.co.jp/", label: "🔗 江之電 官方網站" },
      { href: "https://enokama.jp/tickets/noriorikun/", label: "🎫 一日乘車券「のりおりくん」" },
    ],
  },
  {
    name: "鎌倉小町通",
    sub: "こまちどおり・鎌倉站東口的小吃街",
    photos: [
      { src: `${P}/komachi-1.jpg`, alt: "鎌倉小町通的大佛燒（大仏さま焼き）" },
      { src: `${P}/komachi-2.jpg`, alt: "鎌倉ともや的大佛燒招牌 - 6種口味與對應的運勢" },
      { src: `${P}/komachi-3.jpg`, alt: "鎌倉小町通的葉山牛可樂餅" },
      { src: `${P}/komachi-4.jpg`, alt: "鎌倉小町通的鬆餅夾冰淇淋" },
    ],
    body: (
      <>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          到了<strong>鎌倉（鐮倉）</strong>站，從東口出來左手邊的紅色鳥居，就是<strong>小町通（小町通り）</strong>的入口。全長<strong>約360公尺</strong>，兩側擠了<strong>約250間店</strong>，小吃、甜點、和風雜貨一路排到鶴岡八幡宮前面，是鎌倉最熱鬧的一條街🍡
        </p>
      </>
    ),
    reasonTitle: "✨ 實際吃的3樣（實吃）",
    reason: (
      <>
        <strong>① 大佛燒（大仏さま焼き）</strong>——「鎌倉ともや」的招牌，做成鎌倉大佛臉的蜂蜜雞蛋糕。內餡有6種，而且每種對應一個運勢：<strong>小倉紅豆（健康運）、卡士達（人氣運）、紫薯（金運）、紅豆奶油起司（美人運）、厚切培根起司（工作運）、藍莓奶油起司（戀愛運）</strong>，照想求的運勢選就好🙏<br />
        <strong>② 葉山牛可樂餅</strong>——圓滾滾一顆、淋上醬汁，紙袋上印著「葉山牛入り」。葉山牛是這一帶神奈川的品牌牛。<br />
        <strong>③ 鬆餅夾冰淇淋</strong>——對折的厚鬆餅裡塞了三球冰淇淋，逛到最後當甜點剛好🍦
      </>
    ),
    tags: ["🙏 大佛燒 6種口味", "🥩 葉山牛可樂餅", "🍦 鬆餅夾冰淇淋", "🛍️ 約250間店"],
    info: (
      <>
        <p className="text-xs text-stone-600 ib ib-train">JR・江之電「鎌倉」駅 東口 出站即到</p>
        <p className="text-xs text-stone-600 ib ib-clock">多數店家 10:00〜18:00 左右（鎌倉ともや 小町店 10:00〜18:00）</p>
        <p className="text-xs text-stone-600 ib ib-yen">小吃一樣約 ¥300〜¥700，各店價格以店頭為準</p>
        <p className="text-xs text-stone-600">⏱️ 邊逛邊吃約1小時</p>
      </>
    ),
    tip: (
      <>鎌倉<strong>請不要邊走邊吃</strong>。買了之後在店前或店家準備的座位吃完再走，垃圾自己帶走——這是當地明確呼籲的規矩</>
    ),
    links: [
      { href: "https://enokama.jp/feature/9450/", label: "🔗 江之島・鎌倉Navi（小町通美食與伴手禮）" },
      { href: "https://www.google.com/maps/search/?api=1&query=%E9%8E%8C%E5%80%89+%E5%B0%8F%E7%94%BA%E9%80%9A%E3%82%8A", label: "🗺️ Google 地圖" },
    ],
  },
  {
    name: "鶴岡八幡宮",
    sub: "つるがおかはちまんぐう",
    photos: [
      { src: `${P}/hachiman-1.jpg`, alt: "鶴岡八幡宮本宮的朱紅樓門與「八幡宮」匾額" },
      { src: `${P}/hachiman-2.jpg`, alt: "鶴岡八幡宮的參道，遠處是舞殿與本宮" },
    ],
    body: (
      <>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          小町通走到底往右，就是鎌倉的象徵<strong>鶴岡八幡宮</strong>⛩️ 起源是<strong>1063年</strong>源賴義迎請八幡神，<strong>1180年</strong>由開創鎌倉幕府的<strong>源賴朝</strong>遷到現在的位置，可以說整個鎌倉就是以這座神社為中心蓋起來的。
        </p>
        <p className="text-sm text-stone-600 leading-relaxed mb-3">
          寬闊的參道走到底，中間是<strong>舞殿</strong>，再爬上<strong>大石段</strong>就是朱紅色的<strong>本宮</strong>。抬頭看樓門上的匾額——<strong>「八幡宮」的「八」字是用兩隻鴿子畫成的</strong>，因為鴿子是八幡神的使者🕊️ 很多人拍了照卻沒發現。
        </p>
      </>
    ),
    reasonTitle: "✨ 推薦給旅客的理由",
    reason: (
      <>
        <strong>境內免費</strong>、從車站走10分鐘就到，而且<strong>開到晚上</strong>，下午在小町通吃完再過來也來得及。站在大石段上面回頭，可以一路看到參道和鎌倉的街道，是這一天最後很好的收尾。
      </>
    ),
    tags: ["⛩️ 鎌倉的象徵", "🕊️ 鴿子的「八」字", "🆓 境內免費", "🚶 鎌倉站徒步10分"],
    info: (
      <>
        <p className="text-xs text-stone-600 ib ib-pin">神奈川縣鎌倉市雪之下2-1-31</p>
        <p className="text-xs text-stone-600 ib ib-train">JR・江之電「鎌倉」駅 東口 徒步約10分</p>
        <p className="text-xs text-stone-600 ib ib-clock">6:00〜20:00（時間可能依季節調整，請以官方公告為準）</p>
        <p className="text-xs text-stone-600 ib ib-yen">境內參拜免費／寶物殿另外收費</p>
        <p className="text-xs text-stone-600">📞 0467-22-0315</p>
      </>
    ),
    tip: (
      <>回程從車站走<strong>若宮大路正中央的「段葛」</strong>（高起來的步道）回去，和去程的小町通是不同的風景</>
    ),
    links: [
      { href: "https://www.hachimangu.or.jp/", label: "🔗 鶴岡八幡宮 官方網站" },
      { href: "https://www.google.com/maps/search/?api=1&query=%E9%B6%B4%E5%B2%A1%E5%85%AB%E5%B9%A1%E5%AE%AE", label: "🗺️ Google 地圖" },
    ],
  },
];

const route = [
  { t: "上午", s: "片瀨江之島駅 → 過弁天橋上島", d: "徒步約10分，路上吃章魚仙貝" },
  { t: "", s: "江島神社", d: "鳥居・瑞心門・抽江之島籤" },
  { t: "中午", s: "魚見亭", d: "島的最裡面，吻仔魚丼配海景" },
  { t: "下午", s: "新江之島水族館", d: "下島後在海邊，水母廳" },
  { t: "", s: "江之電 江之島駅 → 鎌倉駅", d: "約25分・¥260，車窗看海" },
  { t: "傍晚", s: "鎌倉小町通 → 鶴岡八幡宮", d: "小吃3樣，走到底就是神社" },
];

const relatedLinks = [
  { href: "/chigasaki", label: "🌊 茅崎夏日推薦｜湘南海灘野餐＆清晨6點開門的海邊咖啡", desc: "同一片湘南海岸，看得到江之島的沙灘" },
  { href: "/hakone", label: "🚃 箱根一日遊推薦｜從東京搭浪漫特快出發", desc: "同樣搭小田急，美術館・足湯・神社" },
  { href: "/tokyo-day-trip", label: "🚃 東京近郊一日遊推薦｜箱根・橫濱・湘南", desc: "從東京出發1〜2小時的小旅行總整理" },
];

const faqItems = [
  {
    q: "江之島和鎌倉可以一天玩完嗎？",
    a: "可以，我們就是一天走完這7站。重點是順序：上午先上江之島（神社＋午餐約3〜4小時），下午看水族館，再搭江之電約25分到鎌倉逛小町通與鶴岡八幡宮。魚見亭17:00最後點餐、水族館16:00最後入場，所以江之島要排在前半天。",
  },
  {
    q: "從東京怎麼去江之島？",
    a: "從新宿搭小田急線到終點「片瀨江之島」駅，出站過橋走約10分鐘就到島的入口。回程從鎌倉搭JR橫須賀線回東京方向，不用折返。",
  },
  {
    q: "江之電從江之島到鎌倉要多久、多少錢？",
    a: "江之電「江之島」駅到「鎌倉」駅約25分鐘，單程大人¥260。一日乘車券「のりおりくん」是大人¥800、兒童¥400，中途會下車三次以上才划算。",
  },
  {
    q: "吻仔魚丼（しらす丼）什麼時候吃不到？",
    a: "每年1月〜3月中旬是吻仔魚的禁漁期，魚見亭這段時間不供應生吻仔魚。燙熟的釜揚吻仔魚丼（¥1,300）全年都有。想吃生的建議避開這段時間。",
  },
  {
    q: "新江之島水族館的門票多少？要逛多久？",
    a: "大人¥2,800、高中生¥1,800、中小學生¥1,300、3歲以上幼兒¥900。營業時間多為9:00〜17:00（最後入場16:00），冬季部分日期10:00開館。建議預留1.5〜2小時。",
  },
  {
    q: "鎌倉小町通可以邊走邊吃嗎？",
    a: "請不要。當地呼籲遊客不要邊走邊吃，買了之後在店前或店家提供的座位吃完再移動，垃圾自己帶走。小町通全長約360公尺、約250間店，人很多，站著吃完再走也比較安全。",
  },
  {
    q: "大佛燒（大仏さま焼き）是什麼？",
    a: "鎌倉小町通「鎌倉ともや」的名物，做成鎌倉大佛臉的蜂蜜雞蛋糕。有小倉紅豆、卡士達、紫薯、紅豆奶油起司、厚切培根起司、藍莓奶油起司6種，各自對應健康運、人氣運、金運、美人運、工作運、戀愛運。",
  },
];

export default function EnoshimaKamakuraPage() {
  return (
    <div className="min-h-screen bg-amber-50 wagara font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl xl:max-w-[920px] mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 text-sm">← 返回</Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">江之島・鎌倉一日遊</span>
        </div>
      </header>

      <article className="max-w-2xl xl:max-w-[920px] mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-green-100 text-green-700 border border-green-300 text-xs font-semibold px-3 py-1 rounded-full">🌊 景點（好去處）</span>
          <span className="bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">📍 神奈川・江之島・鎌倉</span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">✅ 實際造訪</span>
        </div>

        {/* H1 */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-2">
          江之島・鎌倉一日遊<br />江島神社、吻仔魚丼、江之電到小町通7站🌊
        </h1>
        <p className="text-xs text-stone-400 mb-6">最後更新：2026-10-02</p>

        {/* Intro */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-wave">上午江之島、下午鎌倉，中間搭江之電</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-2">
            <strong>江之島（江の島）</strong>和<strong>鎌倉（鐮倉）</strong>都在神奈川縣的湘南海岸，從東京出發約1小時🚃 兩個地方之間有一條沿著海開的復古電車<strong>「江之電」</strong>，所以最順的玩法就是<strong>一天串起來</strong>：上午爬江之島、中午吃吻仔魚丼、下午搭江之電去鎌倉。
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            這篇是我們<strong>實際照這個順序走過的7站</strong>：江之島的海景 → <strong>江島神社</strong> → 海景食堂<strong>魚見亭</strong> → <strong>新江之島水族館</strong> → <strong>江之電</strong> → <strong>鎌倉小町通</strong> → <strong>鶴岡八幡宮</strong>。每一站都附上票價、營業時間和走法，想去這一帶的好去處，可以直接照著排。
          </p>
        </section>

        <PrepBannerCompact />

        {/* Route */}
        <section className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">江之島・鎌倉一日遊的路線</h2>
          <div className="space-y-3">
            {route.map((r) => (
              <div key={r.s} className="flex gap-3">
                <span className="text-green-500 font-black text-xs shrink-0 w-8 pt-0.5">{r.t || "▸"}</span>
                <div>
                  <p className="text-sm font-bold text-stone-700">{r.s}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{r.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mt-3 pt-3 border-t border-stone-100">
            💡 去程搭<strong>小田急線到片瀨江之島</strong>、回程從<strong>鎌倉搭JR</strong>回東京，一路往前走不用折返。
          </p>
        </section>

        {/* H2 */}
        <h2 className="text-lg font-black text-stone-800 mb-4 piyo-h piyo-jump">江之島・鎌倉景點推薦（好去處推介）・7站</h2>

        {spots.map((spot, idx) => (
          <section key={spot.name} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6 card-split">
            <div className="photo-strip">
              {spot.photos.map((photo, i) => (
                <div key={photo.src} className="relative bg-stone-100" style={photoStyle(photo.src)}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="33vw"
                    className="object-cover"
                    {...(idx === 0 && i === 0 ? { priority: true } : {})}
                  />
                </div>
              ))}
            </div>

            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-black shrink-0">{idx + 1}</div>
                <div>
                  <h3 className="text-base font-black text-stone-800">{spot.name}</h3>
                  <span className="text-xs text-stone-400">{spot.sub}</span>
                </div>
              </div>

              {spot.body}

              <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-3">
                <p className="text-xs font-bold text-green-700 mb-1">{spot.reasonTitle}</p>
                <p className="text-sm text-stone-600 leading-relaxed">{spot.reason}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {spot.tags.map((t) => (
                  <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>

              <div className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 mb-3 space-y-1">
                <p className="text-xs font-bold text-stone-500 mb-1">📋 基本資訊</p>
                {spot.info}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-3 flex items-start gap-2">
                <span className="text-sm shrink-0">💡</span>
                <p className="text-xs text-stone-600">{spot.tip}</p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {spot.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* 旅遊小建議 */}
        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8 mt-2">
          <h2 className="text-base font-black text-stone-800 mb-3 piyo-h piyo-stand">江之島・鎌倉一日遊小建議</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>✅ <strong>江之島排上午</strong>：魚見亭17:00最後點餐、水族館16:00最後入場，鎌倉的神社則開到晚上</li>
            <li>✅ 江之島幾乎都是階梯，<strong>穿好走的鞋</strong>，大行李先寄在車站置物櫃</li>
            <li>✅ 「片瀨江之島」（小田急）和「江之島」（江之電）是<strong>不同車站</strong>，相距徒步約10分</li>
            <li>✅ 想吃<strong>生吻仔魚</strong>請避開1月〜3月中旬的禁漁期🐟</li>
            <li>✅ 鎌倉小町通<strong>不要邊走邊吃</strong>，在店前吃完再走</li>
          </ul>
        </section>

        {/* ぽやぴよ */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 mb-10">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            海、神社、吻仔魚、復古電車，再加上鎌倉的小吃街✨<br />
            一天裡換了好幾種風景，是從東京出發最有「小旅行」感覺的一條路線。
          </p>
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「江之電的窗外突然變成一整片海的那一秒，整車的人都安靜了🌊」</p>
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

        <RelatedArticles slug="enoshima-kamakura" exclude={["/chigasaki", "/hakone", "/tokyo-day-trip"]} />

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
