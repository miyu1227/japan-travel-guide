import Image from "next/image";

const categories = [
  { id: "convenience", icon: "🏪", label: "Convenience Store", labelZh: "便利商店", color: "bg-yellow-100 text-yellow-700 border-yellow-300", activeColor: "bg-yellow-400 text-white border-yellow-400" },
  { id: "ramen", icon: "🍜", label: "Ramen", labelZh: "拉麵", color: "bg-red-100 text-red-600 border-red-300", activeColor: "bg-red-400 text-white border-red-400" },
  { id: "snacks", icon: "🍘", label: "Snacks", labelZh: "零食伴手禮", color: "bg-orange-100 text-orange-600 border-orange-300", activeColor: "bg-orange-400 text-white border-orange-400" },
  { id: "cafe", icon: "☕", label: "Cafés", labelZh: "咖啡廳", color: "bg-pink-100 text-pink-600 border-pink-300", activeColor: "bg-pink-400 text-white border-pink-400" },
  { id: "spot", icon: "📍", label: "Spots", labelZh: "景點", color: "bg-blue-100 text-blue-600 border-blue-300", activeColor: "bg-blue-400 text-white border-blue-400" },
];

const picks = {
  convenience: [
    { name: "7-11 北海道牛奶布丁", desc: "綿密濃郁，台灣買不到的限定口味", tag: "甜點", emoji: "🍮" },
    { name: "Lawson 草莓大福", desc: "季節限定！外皮Q彈、草莓超新鮮", tag: "季節限定", emoji: "🍓" },
    { name: "全家 鹽味雞", desc: "熱騰騰的鹽味雞，便利商店No.1熱食", tag: "熱食", emoji: "🍗" },
    { name: "冰美式咖啡 185日圓", desc: "比台灣便宜又好喝，每天必買", tag: "飲料", emoji: "☕" },
  ],
  ramen: [
    { name: "一蘭拉麵", desc: "博多豚骨代表，個人隔間享用，超沉浸", tag: "博多豚骨", emoji: "🍜" },
    { name: "ichiran 道頓堀店", desc: "大阪必訪，深夜也大排長龍", tag: "大阪", emoji: "🌙" },
    { name: "札幌味噌拉麵", desc: "北海道限定濃郁味噌湯頭，冬天暖胃首選", tag: "北海道", emoji: "❄️" },
    { name: "喜多方拉麵", desc: "福島名物，淡麗醬油湯頭配寬捲麵", tag: "福島", emoji: "🏔️" },
  ],
  snacks: [
    { name: "白色戀人", desc: "北海道必買伴手禮，奶香濃郁夾心餅乾", tag: "北海道", emoji: "🍪" },
    { name: "東京香蕉", desc: "東京機場必掃貨，香蕉奶油口感超特別", tag: "東京", emoji: "🍌" },
    { name: "薯條三兄弟", desc: "薄鹽馬鈴薯條，一打開停不下來", tag: "北海道", emoji: "🥔" },
    { name: "抹茶生巧克力", desc: "ROYCE的抹茶生チョコ，入口即化", tag: "頂級", emoji: "🍫" },
  ],
  cafe: [
    { name: "% Arabica 京都", desc: "世界最美咖啡廳之一，嵐山背景超夢幻", tag: "京都", emoji: "☕" },
    { name: "Streamer Coffee", desc: "東京潮流咖啡廳，拿鐵藝術一流", tag: "東京", emoji: "🎨" },
    { name: "星野集團 HOSHINOYA Café", desc: "日式高質感空間，抹茶拿鐵必點", tag: "高質感", emoji: "✨" },
    { name: "Blue Bottle Coffee", desc: "日本本店質感更好，週末打卡必去", tag: "打卡", emoji: "📸" },
  ],
  spot: [
    { name: "伏見稻荷大社", desc: "千本鳥居穿越感十足，清晨人少最美", tag: "京都", emoji: "⛩️" },
    { name: "teamLab Borderless", desc: "沉浸式數位藝術，IG打卡聖地", tag: "東京", emoji: "🌊" },
    { name: "道頓堀", desc: "大阪必訪夜景＆美食街，格力高招牌拍照", tag: "大阪", emoji: "🌃" },
    { name: "箱根溫泉", desc: "東京近郊一日遊，泡湯＋富士山景色", tag: "神奈川", emoji: "♨️" },
  ],
};

export default function Home() {
  const defaultCategory = "convenience";

  return (
    <div className="min-h-screen bg-amber-50 font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐣</span>
            <span className="font-bold text-base text-stone-800">Japan Trip Picks</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-stone-500 bg-yellow-50 border border-yellow-200 px-3 py-1 rounded-full">
            <span>🇯🇵</span>
            <span>台灣・香港專屬</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-yellow-50 to-amber-50 pt-8 pb-6 px-4 text-center">
        <div className="max-w-sm mx-auto">
          {/* Character */}
          <div className="flex justify-center mb-4">
            <div className="relative w-72 h-72">
              <Image
                src="/poyapiyo-flag.png"
                alt="ぽやぴよ"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Site name */}
          <div className="mb-3">
            <h1 className="text-3xl font-black text-stone-800 tracking-tight leading-tight">
              Japan Trip Picks
              <span className="ml-2">🇯🇵</span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="bg-white rounded-2xl shadow-sm border border-yellow-200 px-5 py-4 mb-4">
            <p className="text-lg font-bold text-stone-800 mb-1">
              日本旅行、失敗しない。
            </p>
            <p className="text-sm text-stone-500 leading-relaxed">
              日本旅遊必看！不踩雷美食＆景點推薦
              <br />
              <span className="text-xs text-stone-400">必吃・必買・必去をまとめたガイド</span>
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex justify-center gap-2 flex-wrap text-xs">
            {["✅ 台灣人親測", "📸 IG打卡點", "💰 CP值爆表", "🗺️ 地圖連結"].map((badge) => (
              <span key={badge} className="bg-white border border-stone-200 text-stone-600 px-3 py-1 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-14 z-40 bg-white border-b border-yellow-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat, i) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={`flex-shrink-0 flex flex-col items-center gap-1 px-4 py-2 rounded-2xl border-2 transition-all ${i === 0 ? cat.activeColor : cat.color} font-semibold text-xs`}
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="whitespace-nowrap">{cat.labelZh}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="max-w-4xl mx-auto px-4 py-6 space-y-10">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id}>
            {/* Section header */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${cat.color} border-2`}>
                {cat.icon}
              </div>
              <div>
                <h2 className="text-xl font-black text-stone-800">{cat.label}</h2>
                <p className="text-sm text-stone-500">{cat.labelZh}</p>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {picks[cat.id as keyof typeof picks].map((item, i) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow p-4 flex items-start gap-3"
                >
                  <div className="text-3xl shrink-0">{item.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-stone-800 text-sm leading-tight">{item.name}</h3>
                      <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border ${cat.color}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <div className="bg-white rounded-3xl border border-yellow-200 shadow-sm p-6 text-center">
          <div className="text-4xl mb-3">🐣</div>
          <h3 className="font-black text-stone-800 text-lg mb-2">更多推薦持續更新中！</h3>
          <p className="text-sm text-stone-500 mb-4">ぽやぴよが日本中を旅して見つけた、本当におすすめしたいものだけ。</p>
          <div className="flex justify-center gap-3 text-sm">
            <span className="bg-yellow-100 text-yellow-700 border border-yellow-300 px-4 py-2 rounded-full font-semibold">
              🐦 追蹤最新資訊
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-yellow-100 mt-8 py-6 px-4 text-center text-xs text-stone-400">
        <div className="flex justify-center items-center gap-2 mb-2">
          <span className="text-base">🐣</span>
          <span className="font-semibold text-stone-600">Japan Trip Picks</span>
        </div>
        <p>台灣・香港旅客專屬日本旅遊指南</p>
        <p className="mt-1">© 2026 Japan Trip Picks</p>
      </footer>
    </div>
  );
}
