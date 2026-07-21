import Link from "next/link";

const linkGroups: { title: string; icon: string; links: { href: string; label: string }[] }[] = [
  {
    title: "美食・拉麵",
    icon: "🍜",
    links: [
      { href: "/ramen", label: "日本拉麵推薦" },
      { href: "/osaka-gourmet", label: "大阪美食" },
      { href: "/sanda-soba", label: "三田蕎麥麵" },
      { href: "/ginza-apollo", label: "銀座THE APOLLO" },
      { href: "/utsunomiya-gyoza", label: "宇都宮餃子" },
      { href: "/shin-okubo", label: "新大久保" },
      { href: "/steak-zen", label: "神戶牛ZEN" },
      { href: "/futakotamagawa", label: "二子玉川" },
    ],
  },
  {
    title: "咖啡廳",
    icon: "☕",
    links: [
      { href: "/cafe", label: "自由之丘咖啡" },
      { href: "/shibuya-cafe", label: "澀谷咖啡" },
      { href: "/bolt-uehara", label: "代代木上原BOLT" },
      { href: "/nakameguro-cafe", label: "中目黑星巴克" },
      { href: "/daikanyama-cafe", label: "代官山咖啡" },
      { href: "/shimokitazawa-cafe", label: "下北澤咖啡" },
      { href: "/kobe-cafe", label: "神戶咖啡" },
      { href: "/shukugawa", label: "夙川咖啡" },
      { href: "/isehara-gelato", label: "伊勢原ジェラート" },
    ],
  },
  {
    title: "東京景點",
    icon: "🗼",
    links: [
      { href: "/tokyo-tower", label: "東京鐵塔" },
      { href: "/skytree", label: "東京晴空塔" },
      { href: "/tokyo-disney-around", label: "東京迪士尼周邊" },
      { href: "/ajisai", label: "東京繡球花景點" },
      { href: "/ueno-zoo", label: "上野動物園" },
      { href: "/showa-kinen-park", label: "昭和記念公園" },
      { href: "/koyo", label: "東京紅葉" },
      { href: "/museum", label: "東京美術館" },
      { href: "/artbar-tokyo", label: "Artbar Tokyo" },
    ],
  },
  {
    title: "近郊・地方景點",
    icon: "🏔️",
    links: [
      { href: "/hakone", label: "箱根一日遊" },
      { href: "/hokkaido", label: "北海道自由行" },
      { href: "/kamikochi", label: "上高地" },
      { href: "/katsunuma", label: "山梨勝沼＆石和溫泉" },
      { href: "/kobe-herb-garden", label: "神戶布引香草園" },
      { href: "/rokko-arima", label: "六甲山＆有馬溫泉" },
      { href: "/ine", label: "京都伊根町" },
      { href: "/hikone", label: "彥根城" },
      { href: "/utsunomiya", label: "宇都宮觀光" },
      { href: "/kagawa", label: "香川觀光" },
      { href: "/kochi", label: "高知觀光" },
      { href: "/shirahama", label: "和歌山白浜" },
    ],
  },
  {
    title: "伴手禮・零食",
    icon: "🍩",
    links: [
      { href: "/mister-donut", label: "Mister Donut" },
      { href: "/tokyo-cookies", label: "東京手工餅乾" },
    ],
  },
  {
    title: "出發前準備",
    icon: "🎒",
    links: [
      { href: "/japan-esim", label: "日本eSIM指南" },
      { href: "/tokyo-subway-ticket", label: "東京地鐵24/48/72小時券" },
      { href: "/narita-airport-access", label: "成田機場交通" },
      { href: "/haneda-airport-access", label: "羽田機場交通" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-yellow-100 mt-12 pt-8 pb-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* サイト内リンク */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-black text-stone-700 mb-2 flex items-center gap-1">
                <span>{group.icon}</span>
                {group.title}
              </h3>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-stone-500 hover:text-stone-800 hover:underline transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 網站情報 */}
        <div className="border-t border-stone-100 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <span className="text-lg">🐥</span>
            <span className="font-black">Japan Trip Picks</span>
            <span className="text-xs text-stone-400">by ぽやぴよ</span>
          </div>
          <nav className="flex flex-wrap gap-3 text-xs">
            <Link href="/about" className="text-stone-500 hover:text-stone-800 hover:underline">關於我們</Link>
            <span className="text-stone-300">|</span>
            <Link href="/contact" className="text-stone-500 hover:text-stone-800 hover:underline">聯絡我們</Link>
            <span className="text-stone-300">|</span>
            <Link href="/privacy" className="text-stone-500 hover:text-stone-800 hover:underline">隱私權政策</Link>
            <span className="text-stone-300">|</span>
            <Link href="/promotion" className="text-stone-500 hover:text-stone-800 hover:underline">合作</Link>
          </nav>
        </div>

        <p className="text-center text-xs text-stone-400 mt-4">© 2026 Japan Trip Picks. All rights reserved.</p>
        <p className="text-center text-[10px] text-stone-400 mt-1">本網站部分連結為聯盟行銷連結，讀者不會因此支付額外費用。</p>
      </div>
    </footer>
  );
}
