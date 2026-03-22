import Link from "next/link";

const attractions = [
  {
    name: "京都",
    description: "千年古都，充滿神社寺廟、藝妓文化與竹林小徑，感受最純粹的日本風情。",
    tag: "文化 & 歷史",
    gradient: "from-rose-900 to-rose-600",
    icon: "⛩️",
  },
  {
    name: "東京",
    description: "繁華都市與靜謐神社並存，潮流時尚、動漫聖地、米其林美食應有盡有。",
    tag: "都市 & 流行",
    gradient: "from-indigo-900 to-indigo-600",
    icon: "🗼",
  },
  {
    name: "北海道",
    description: "壯闊自然景色、世界級滑雪場，以及令人難忘的海鮮與乳製品。",
    tag: "自然 & 冒險",
    gradient: "from-sky-900 to-sky-600",
    icon: "🏔️",
  },
  {
    name: "大阪",
    description: "日本的廚房——道頓堀美食、熱鬧夜生活，章魚燒與串炸讓人欲罷不能。",
    tag: "美食 & 娛樂",
    gradient: "from-amber-800 to-orange-600",
    icon: "🏯",
  },
  {
    name: "沖繩",
    description: "南國熱帶天堂，擁有清澈海水、珊瑚礁與獨特的琉球文化。",
    tag: "海灘 & 文化",
    gradient: "from-cyan-800 to-cyan-500",
    icon: "🌺",
  },
  {
    name: "富士山",
    description: "日本的象徵，無論登頂還是遠眺，都是一生必訪的絕景。",
    tag: "自然 & 地標",
    gradient: "from-teal-900 to-teal-600",
    icon: "🗻",
  },
];

const foods = [
  { name: "拉麵", desc: "濃郁湯頭配彈牙麵條，各地風味各有特色", emoji: "🍜" },
  { name: "壽司", desc: "新鮮食材握成的日本飲食藝術", emoji: "🍣" },
  { name: "和牛燒肉", desc: "油花豐富、入口即化的頂級日本牛肉", emoji: "🥩" },
  { name: "天婦羅", desc: "輕盈酥脆的炸海鮮與蔬菜", emoji: "🍤" },
  { name: "抹茶甜點", desc: "麻糬、芭菲、蛋糕，滿滿的宇治抹茶香", emoji: "🍵" },
  { name: "迴轉壽司", desc: "平價又好吃，台灣香港人必訪的日本美食體驗", emoji: "🔄" },
];

const transports = [
  {
    title: "新幹線（子彈列車）",
    desc: "最高時速320公里，快速連結各大城市。購買JR Pass可無限次搭乘，超划算。",
    icon: "🚄",
    tip: "旺季（黃金週、盂蘭盆節）請提早預訂指定席。",
  },
  {
    title: "地鐵 & 電車",
    desc: "東京、大阪地鐵網絡密集，準時、乾淨、方便，幾乎可達所有景點。",
    icon: "🚇",
    tip: "建議購買Suica或ICOCA交通卡，超商、自動販售機也能使用。",
  },
  {
    title: "交通IC卡（Suica / ICOCA）",
    desc: "可儲值的智慧卡，電車、公車、計程車甚至便利商店都能使用，旅遊必備。",
    icon: "💳",
    tip: "抵達機場後即可在售票機購買，建議一入境就辦。",
  },
  {
    title: "國內航班",
    desc: "往返沖繩、北海道等遠距離目的地，ANA與JAL提供優惠票價。",
    icon: "✈️",
    tip: "提早3週以上訂票可享早鳥優惠。",
  },
];

const accommodations = [
  {
    type: "溫泉旅館（旅館）",
    desc: "榻榻米房間、浴衣、懷石料理與天然溫泉，體驗最道地的日式住宿文化。",
    price: "¥¥¥",
    icon: "🏮",
    highlight: "必體驗",
  },
  {
    type: "商務飯店",
    desc: "地點便利、乾淨整潔、CP值高，適合自由行旅客的最佳選擇。",
    price: "¥¥",
    icon: "🏨",
    highlight: "高CP值",
  },
  {
    type: "膠囊旅館",
    desc: "獨具日本特色的住宿體驗，私人睡眠艙加上公共空間，適合預算有限的旅客。",
    price: "¥",
    icon: "⬜",
    highlight: "超值推薦",
  },
  {
    type: "豪華飯店",
    desc: "國際五星品牌與日本精品飯店，提供無微不至的服務與絕美城市景觀。",
    price: "¥¥¥¥",
    icon: "✨",
    highlight: "頂級享受",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-900/80 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌸</span>
            <span className="text-white font-semibold text-lg tracking-wide">日本旅遊指南</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-300">
            <a href="#attractions" className="hover:text-white transition-colors">景點</a>
            <a href="#gourmet" className="hover:text-white transition-colors">美食</a>
            <a href="#transport" className="hover:text-white transition-colors">交通</a>
            <a href="#stay" className="hover:text-white transition-colors">住宿</a>
          </div>
          <a
            href="#attractions"
            className="hidden md:inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            開始規劃 →
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-rose-950/40 to-stone-950" />
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-rose-900/20 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-rose-800/15 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-rose-950/30 blur-3xl" />
        </div>

        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 opacity-10 select-none">
          {["日", "本", "旅", "遊", "指", "南"].map((char) => (
            <span key={char} className="text-white text-5xl font-bold leading-tight">
              {char}
            </span>
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-rose-600/20 border border-rose-500/30 text-rose-300 text-sm px-4 py-1.5 rounded-full mb-8">
            <span>🌸</span>
            <span>台灣・香港旅客專屬日本旅遊指南</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-6 tracking-tight">
            探索
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-200">
              日本
            </span>
          </h1>
          <p className="text-stone-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10">
            從千年古都到霓虹都市，從絢爛櫻花到鮮美拉麵——探索這片令人著迷的土地。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#attractions"
              className="bg-rose-600 hover:bg-rose-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-rose-600/30 text-lg"
            >
              探索景點
            </a>
            <a
              href="#gourmet"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/5 text-lg"
            >
              探索美食
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 text-xs">
          <span>向下捲動探索</span>
          <div className="w-px h-12 bg-gradient-to-b from-stone-400 to-transparent" />
        </div>
      </section>

      {/* Stats banner */}
      <div className="bg-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "47", label: "個都道府縣" },
            { num: "19", label: "處世界文化遺產" },
            { num: "3,000+", label: "處溫泉" },
            { num: "免簽", label: "台灣・香港旅客均可免簽入境" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold">{stat.num}</div>
              <div className="text-rose-200 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Attractions Section */}
      <section id="attractions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-600 font-semibold text-sm uppercase tracking-widest">去哪裡</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-3 mb-4">
              熱門景點
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              從北海道的雪景到沖繩的藍海，日本每個角落都有令人驚豔的風景。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((place) => (
              <div
                key={place.name}
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${place.gradient} p-8 text-white group cursor-pointer hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="text-5xl mb-4">{place.icon}</div>
                <span className="text-xs font-semibold uppercase tracking-widest opacity-70 bg-white/10 px-3 py-1 rounded-full">
                  {place.tag}
                </span>
                <h3 className="text-3xl font-bold mt-3 mb-2">{place.name}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{place.description}</p>
                <div className="mt-6 flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>了解更多</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gourmet Section */}
      <section id="gourmet" className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-400 font-semibold text-sm uppercase tracking-widest">吃什麼</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              日本美食
            </h2>
            <p className="text-stone-400 text-lg max-w-xl mx-auto">
              日本擁有全球最多米其林星級餐廳，無論平價還是高端，每一餐都是享受。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {foods.map((food) => (
              <div
                key={food.name}
                className="bg-stone-800 hover:bg-stone-700 rounded-2xl p-6 flex items-start gap-5 transition-colors group cursor-pointer"
              >
                <div className="text-5xl shrink-0">{food.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-rose-400 transition-colors">
                    {food.name}
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{food.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-rose-600/10 border border-rose-500/20 p-8 text-center">
            <p className="text-rose-300 text-lg font-medium">
              🍱 小撇步：日本便利商店（7-11、全家、Lawson）的飯糰、便當水準超高，別錯過！
            </p>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section id="transport" className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-600 font-semibold text-sm uppercase tracking-widest">怎麼移動</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-3 mb-4">
              交通方式
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              日本大眾交通以準時、整潔、便利著稱，自由行完全不成問題。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transports.map((t) => (
              <div
                key={t.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl shrink-0">{t.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">{t.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-4">{t.desc}</p>
                    <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs px-3 py-2 rounded-lg">
                      <span>💡</span>
                      <span>{t.tip}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="stay" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-600 font-semibold text-sm uppercase tracking-widest">住哪裡</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-3 mb-4">
              住宿選擇
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              從頂級飯店到道地旅館，日本各種預算的旅客都能找到適合的住宿。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accommodations.map((acc) => (
              <div
                key={acc.type}
                className="relative rounded-2xl border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-lg p-6 transition-all duration-300 group cursor-pointer"
              >
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full">
                    {acc.highlight}
                  </span>
                </div>
                <div className="text-4xl mb-4">{acc.icon}</div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">{acc.type}</h3>
                <div className="text-rose-600 font-bold text-sm mb-3">{acc.price}</div>
                <p className="text-stone-500 text-sm leading-relaxed">{acc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-stone-950 via-rose-950/50 to-stone-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 select-none pointer-events-none flex items-center justify-center">
          <span className="text-[20rem] font-bold leading-none">日</span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-5xl mb-6">🌸</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            準備好出發了嗎？
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            無論是春天的賞櫻、夏天的祭典、秋天的紅葉，還是冬天的溫泉雪景，日本四季都值得造訪。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#attractions"
              className="bg-rose-600 hover:bg-rose-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-rose-600/30 text-lg"
            >
              開始探索
            </a>
            <a
              href="#gourmet"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/5 text-lg"
            >
              美食指南
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌸</span>
              <span className="text-white font-semibold text-lg">日本旅遊指南</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#attractions" className="hover:text-white transition-colors">景點</a>
              <a href="#gourmet" className="hover:text-white transition-colors">美食</a>
              <a href="#transport" className="hover:text-white transition-colors">交通</a>
              <a href="#stay" className="hover:text-white transition-colors">住宿</a>
            </div>
            <div className="text-sm">
              © 2026 日本旅遊指南
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
