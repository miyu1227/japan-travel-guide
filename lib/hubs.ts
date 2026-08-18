import { ARTICLE_BY_SLUG, type Article } from "./articles";

export type HubSection = { heading: string; note: string; slugs: string[] };

export type Hub = {
  slug: string;
  /** SERP用タイトル（全角30字以内） */
  title: string;
  description: string;
  h1: string;
  /** パンくず用の短い名前 */
  crumb: string;
  emoji: string;
  badge: string;
  intro: string[];
  /** 選び方ガイド */
  guide: { q: string; a: string }[];
  sections: HubSection[];
  relatedHubs: string[];
};

export const HUBS: Hub[] = [
  {
    slug: "tokyo-cafe",
    title: "東京咖啡廳推薦8選｜實際造訪的人氣咖啡店",
    description:
      "澀谷、代官山、中目黑、下北澤、清澄白河⋯⋯東京8間實際造訪過的咖啡廳，依區域整理成散步路線。含交通方式、營業時間、必點品項與價位，第一次自由行也不會挑錯。",
    h1: "東京咖啡廳推薦8選",
    crumb: "東京咖啡廳推薦",
    emoji: "☕",
    badge: "☕ 咖啡廳總覽",
    intro: [
      "東京的咖啡廳多到會選擇障礙，但其實只要先決定「今天要走哪一區」，就會輕鬆很多☕ 因為東京的咖啡文化是<strong>依街區長出不同性格</strong>的——清澄白河是烘焙工廠聚集的咖啡聖地，代官山・中目黑走時尚甜點路線，下北澤則是二手衣店旁的個性小店。",
      "這一頁把我們實際走過的8間東京咖啡廳，<strong>依區域整理成散步路線</strong>。每一篇都附交通方式、營業時間、必點品項與價位，可以直接照著排半天行程。",
    ],
    guide: [
      {
        q: "只有半天，該選哪一區？",
        a: "想一次逛多間就選澀谷〜代官山〜中目黑，三站之內就能連走；想安靜坐久一點，選清澄白河或池尻大橋。",
      },
      {
        q: "想拍照打卡的話？",
        a: "中目黑的星巴克臻選烘焙工坊（隈研吾設計）和代官山的義式烘焙店最好拍，目黑川沿岸櫻花季更是滿版。",
      },
      {
        q: "帶寵物、或想坐戶外座位？",
        a: "代代木上原的BOLT是寵物友善店，池尻大橋的UN LIVRE有戶外露台座位。",
      },
    ],
    sections: [
      {
        heading: "澀谷・代官山・中目黑（東急沿線）",
        note: "彼此都在3站以內，最適合一天連走2〜3間。",
        slugs: ["shibuya-cafe", "daikanyama-cafe", "nakameguro-cafe", "ikejiri-cafe"],
      },
      {
        heading: "下北澤・代代木上原（小田急沿線）",
        note: "個性小店密集，散步＋二手衣店＋咖啡的組合。",
        slugs: ["shimokitazawa-cafe", "bolt-uehara"],
      },
      {
        heading: "清澄白河・自由之丘（咖啡聖地與甜點街）",
        note: "自家烘焙的濃度最高的兩區，適合安靜久坐。",
        slugs: ["kiyosumi-cafe", "cafe"],
      },
    ],
    relatedHubs: ["tokyo-gourmet", "tokyo-spot"],
  },
  {
    slug: "tokyo-gourmet",
    title: "東京美食推薦｜拉麵・燒肉・伴手禮總整理",
    description:
      "東京必吃美食總覽：排隊拉麵6選、高級燒肉與內臟燒肉、新大久保韓國街、銀座希臘料理、外帶蛋糕與伴手禮餅乾。每篇都是實際吃過，附交通、價位與訂位重點。",
    h1: "東京美食推薦總整理",
    crumb: "東京美食推薦",
    emoji: "🍜",
    badge: "🍜 美食總覽",
    intro: [
      "東京的美食情報太多，反而不知道從哪吃起🍜 這一頁把我們<strong>實際吃過</strong>的東京美食，依「想吃什麼」分類整理：排隊拉麵、燒肉、異國料理、還有帶回飯店或帶回台灣香港的伴手禮。",
      "每一篇都附<strong>地址・交通・價位・訂位規則</strong>。特別是燒肉與人氣拉麵店，先看清楚幾點去比較好進，可以省下一小時排隊。",
    ],
    guide: [
      {
        q: "預算抓多少？",
        a: "拉麵一碗約¥1,000〜1,500、內臟燒肉一人約¥3,000〜5,000、高級燒肉的午餐從¥2,640起就吃得到，晚餐則要再往上抓。",
      },
      {
        q: "要事先訂位嗎？",
        a: "燒肉與話題餐廳建議先訂；拉麵店多半不能訂位，改成避開12〜13點與19〜20點的尖峰比較實際。",
      },
      {
        q: "想買伴手禮回台灣・香港？",
        a: "手工餅乾禮盒需要預約才買得到，外帶蛋糕則適合當天在飯店吃完，別放進行李帶回去。",
      },
    ],
    sections: [
      {
        heading: "拉麵・燒肉（東京的主戰場）",
        note: "先決定要濃厚系還是清爽系，再決定去哪一區。",
        slugs: ["ramen", "tokyo-yakiniku", "shibuya-yakiniku"],
      },
      {
        heading: "街區美食・異國料理",
        note: "整條街走起來最有旅行感的區域。",
        slugs: ["shin-okubo", "futakotamagawa", "ginza-apollo"],
      },
      {
        heading: "甜點・伴手禮",
        note: "帶回飯店當宵夜，或帶回台灣・香港送人。",
        slugs: ["takeout-cake", "tokyo-cookies", "mister-donut"],
      },
    ],
    relatedHubs: ["tokyo-cafe", "tokyo-day-trip"],
  },
  {
    slug: "tokyo-spot",
    title: "東京景點推薦10選｜地標・公園・美術館",
    description:
      "東京必去景點總覽：晴空塔與東京鐵塔的差別、上野動物園、昭和紀念公園、美術館、季節限定的紫陽花與紅葉，以及不進園也能玩的迪士尼周邊。附門票、交通與最佳造訪時期。",
    h1: "東京景點推薦10選",
    crumb: "東京景點推薦",
    emoji: "🗼",
    badge: "🗼 景點總覽",
    intro: [
      "第一次來東京，行程通常是「地標＋公園＋一個體驗」的組合🗼 這一頁把東京的必去景點依<strong>類型</strong>整理，方便對照著排行程。",
      "季節景點（紫陽花、紅葉）有明確的花期，時間沒對上就白跑一趟，所以每一篇都寫了<strong>最佳造訪時期</strong>。門票與交通也一併整理好了。",
    ],
    guide: [
      {
        q: "晴空塔和東京鐵塔只能選一個？",
        a: "想看最遠的展望與新式設施選晴空塔；想拍「有東京鐵塔入鏡」的照片，反而是待在鐵塔周邊比較划算。",
      },
      {
        q: "帶小孩的話？",
        a: "上野動物園門票只要¥600，昭和紀念公園腹地廣可以跑一整天，兩個都是親子CP值最高的選擇。",
      },
      {
        q: "遇到雨天怎麼辦？",
        a: "美術館與室內的畫畫體驗不受天氣影響；舞浜周邊不進園的玩法也適合雨天備案。",
      },
    ],
    sections: [
      {
        heading: "地標・展望台",
        note: "第一次來東京的定番，先卡進行程裡。",
        slugs: ["skytree", "tokyo-tower", "tokyo-disney-around"],
      },
      {
        heading: "公園・動物園（親子・放鬆）",
        note: "走累的那一天安排這裡最剛好。",
        slugs: ["ueno-zoo", "showa-kinen-park", "spot"],
      },
      {
        heading: "季節限定・文化體驗",
        note: "花期與展期有時間限制，出發前先確認。",
        slugs: ["ajisai", "koyo", "museum", "artbar-tokyo"],
      },
    ],
    relatedHubs: ["tokyo-cafe", "tokyo-day-trip"],
  },
  {
    slug: "tokyo-day-trip",
    title: "東京近郊一日遊推薦｜箱根・橫濱・湘南",
    description:
      "從東京出發1〜2小時的近郊小旅行：箱根浪漫特快一日遊、橫濱野毛續攤、湘南海灘野餐、宇都宮餃子、山梨勝沼酒莊與溫泉。附交通方式、所需時間與當天來回的可行性判斷。",
    h1: "東京近郊一日遊推薦",
    crumb: "東京近郊一日遊",
    emoji: "🚃",
    badge: "🚃 近郊小旅行",
    intro: [
      "在東京待5天以上的話，中間安排一天往郊外跑，整趟旅行的印象會完全不一樣🚃 從新宿或東京站出發，<strong>1〜2小時內</strong>就能到溫泉、海邊、酒莊和餃子之都。",
      "這一頁整理實際走過的近郊路線，每篇都寫了<strong>交通方式、所需時間，以及當天來回到底夠不夠</strong>。想住一晚的行程也會標註。",
    ],
    guide: [
      {
        q: "只有一天，最好選哪裡？",
        a: "想要溫泉＋絕景選箱根（新宿搭浪漫特快約1.5小時）；想吃喝為主選橫濱野毛（東京站約35分）。",
      },
      {
        q: "夏天想去海邊？",
        a: "湘南的茅崎從東京出發約一小時，早上去海邊野餐、下午回市區剛剛好。",
      },
      {
        q: "想住一晚的話？",
        a: "山梨勝沼可以把酒莊品酒與石和溫泉排成一泊二日，採水果的季節體驗也在同一區。",
      },
    ],
    sections: [
      {
        heading: "神奈川方向（橫濱・湘南・箱根）",
        note: "最近、最好排，當天來回完全沒問題。",
        slugs: ["hakone", "noge", "chigasaki", "isehara-gelato"],
      },
      {
        heading: "栃木・山梨方向（餃子與葡萄酒）",
        note: "新幹線或中央線，適合想吃當地名物的人。",
        slugs: ["utsunomiya", "utsunomiya-gyoza", "katsunuma"],
      },
    ],
    relatedHubs: ["tokyo-gourmet", "tokyo-spot"],
  },
  {
    slug: "kansai",
    title: "關西自由行推薦｜大阪・神戶・京都近郊",
    description:
      "關西旅遊總覽：大阪梅田在地美食與飯店自助餐、神戶牛鐵板燒、神戶咖啡廳4選、六甲山與有馬溫泉、京都伊根舟屋、和歌山白浜與滋賀彥根城。附交通、價位與行程排法。",
    h1: "關西自由行推薦",
    crumb: "關西自由行",
    emoji: "🏯",
    badge: "🏯 關西總覽",
    intro: [
      "關西的優點是<strong>移動距離短</strong>🏯 大阪梅田到神戶三宮只要約30分鐘，所以「白天神戶、晚上大阪」這種排法完全可行。",
      "這一頁把關西的美食與景點依縣市整理。除了大阪神戶，也放了京都伊根的舟屋、和歌山白浜與滋賀彥根城——這些是<strong>第二次以後來關西</strong>時最值得加進行程的地方。",
    ],
    guide: [
      {
        q: "大阪和神戶要各住幾晚？",
        a: "兩地之間約30分鐘，住其中一邊當基地就夠，不用特地換飯店。",
      },
      {
        q: "想吃神戶牛，預算多少？",
        a: "鐵板燒名店的午餐比晚餐好入手，先看店家的午間套餐再決定要不要訂晚餐時段。",
      },
      {
        q: "第二次來關西，去哪裡？",
        a: "京都伊根的舟屋村、和歌山白浜的海岸與熊貓樂園，都是離開市區才看得到的風景。",
      },
    ],
    sections: [
      {
        heading: "大阪（美食為主）",
        note: "梅田・福島一帶的在地店，比道頓堀更好吃。",
        slugs: ["osaka-gourmet", "conrad-osaka", "kansai-ramen"],
      },
      {
        heading: "神戶・兵庫（牛排・咖啡・溫泉）",
        note: "從三宮出發半天就能玩一區。",
        slugs: ["steak-zen", "kobe-cafe", "kobe-herb-garden", "rokko-arima", "shukugawa", "nishinomiya-gardens", "sanda-soba"],
      },
      {
        heading: "京都・和歌山・滋賀（近郊絕景）",
        note: "從大阪或京都市區出發的一日〜兩日行程。",
        slugs: ["ine", "shirahama", "hikone"],
      },
    ],
    relatedHubs: ["tokyo-gourmet", "tokyo-day-trip"],
  },
];

export const HUB_BY_SLUG: Record<string, Hub> = Object.fromEntries(
  HUBS.map((h) => [h.slug, h])
);

/** 記事 → 所属ハブ（最初に見つかったもの） */
export const HUB_OF_ARTICLE: Record<string, Hub> = (() => {
  const map: Record<string, Hub> = {};
  for (const hub of HUBS) {
    for (const s of hub.sections) {
      for (const slug of s.slugs) {
        if (!map[slug]) map[slug] = hub;
      }
    }
  }
  return map;
})();

export function hubMembers(hub: Hub): Article[] {
  return hub.sections
    .flatMap((s) => s.slugs)
    .map((slug) => ARTICLE_BY_SLUG[slug])
    .filter(Boolean);
}
