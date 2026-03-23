import Image from "next/image";
import Link from "next/link";

const shinjukuPhotos = [
  "/spot/shinjuku-1.jpg",
  "/spot/shinjuku-2.jpg",
  "/spot/shinjuku-3.jpg",
];

const yoyogiPhotos = [
  "/spot/yoyogi-1.jpg",
  "/spot/yoyogi-2.jpg",
];

const picnicFood = [
  { emoji: "🍙", name: "飯糰", desc: "便利商店種類超豐富" },
  { emoji: "🥪", name: "三明治", desc: "輕食首選，好拿好吃" },
  { emoji: "🍗", name: "炸雞", desc: "便利商店熱食必買" },
  { emoji: "🍮", name: "甜點", desc: "布丁・大福・聖代" },
];

const tips = [
  { emoji: "🧺", text: "記得帶野餐墊" },
  { emoji: "☀️", text: "天氣好的時候最適合" },
  { emoji: "🍃", text: "春秋最舒服（3〜5月・9〜11月）" },
];

export default function SpotPicnicPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 transition-colors text-sm flex items-center gap-1">
            ← 返回
          </Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">景點推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Badge */}
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-600 border border-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
            📍 景點
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-4">
          東京野餐推薦｜新宿御苑＆代代木公園<br />
          <span className="text-lg font-bold text-stone-500">悠閒散步🌿</span>
        </h1>

        {/* Intro */}
        <div className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            來東京旅遊，不只是逛街吃美食<br />
            其實「野餐」也是很受歡迎的行程🌿
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">這次分享兩個東京人氣公園👇</p>
          <div className="flex flex-col gap-1.5">
            <span className="flex items-center gap-2 text-sm font-semibold text-stone-700">
              <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs flex items-center justify-center">✔</span>
              新宿御苑
            </span>
            <span className="flex items-center gap-2 text-sm font-semibold text-stone-700">
              <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs flex items-center justify-center">✔</span>
              代代木公園
            </span>
          </div>
          <p className="text-xs text-stone-400 mt-3">氣氛完全不同，可以依照旅行風格選擇✨</p>
        </div>

        {/* Spot 1: 新宿御苑 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-6">
          {/* Photo grid */}
          <div className="grid grid-cols-3 gap-0.5">
            {shinjukuPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-stone-100">
                <Image src={src} alt="新宿御苑" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-400 text-white flex items-center justify-center text-sm font-black shrink-0">1</div>
              <div>
                <h2 className="text-lg font-black text-stone-800">新宿御苑</h2>
                <span className="text-xs text-stone-400">Shinjuku Gyoen National Garden</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              東京最漂亮、最乾淨的公園之一。<br />
              草地非常大，很適合鋪野餐墊放鬆🧺<br />
              整體環境安靜又舒服，有點像歐洲公園✨
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {["📸 很適合拍照", "💑 情侶・女生旅行推薦", "🌸 春天櫻花季更美"].map((t) => (
                <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* 小提醒 */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 mb-4 flex items-start gap-2">
              <span className="text-base shrink-0">💡</span>
              <p className="text-xs text-stone-600">需要購買門票，但環境真的很值得</p>
            </div>

            <a
              href="https://www.env.go.jp/garden/shinjukugyoen/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 查看官方網站
            </a>
          </div>
        </section>

        {/* Spot 2: 代々木公園 */}
        <section className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0.5">
            {yoyogiPhotos.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] bg-stone-100">
                <Image src={src} alt="代々木公園" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-400 text-white flex items-center justify-center text-sm font-black shrink-0">2</div>
              <div>
                <h2 className="text-lg font-black text-stone-800">代代木公園</h2>
                <span className="text-xs text-stone-400">Yoyogi Park</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              更自由、更日常感的公園。<br />
              不用門票，可以隨意進出🎉<br />
              很多日本人會帶食物來野餐🍱<br />
              氣氛比較輕鬆，有時還會看到街頭表演
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {["💬 適合輕鬆聊天", "🥡 適合帶外帶食物", "🏙️ 生活感十足"].map((t) => (
                <span key={t} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <a
              href="https://www.tokyo-park.or.jp/park/yoyogi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
            >
              🔗 查看官方網站
            </a>
          </div>
        </section>

        {/* Picnic food */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-stone-800 mb-4">🍱 野餐食物推薦</h2>
          <p className="text-xs text-stone-500 mb-3">👉 可以在便利商店或超市準備</p>
          <div className="grid grid-cols-2 gap-3">
            {picnicFood.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4 flex items-center gap-3">
                <span className="text-2xl shrink-0">{item.emoji}</span>
                <div>
                  <p className="font-bold text-stone-800 text-sm">{item.name}</p>
                  <p className="text-xs text-stone-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-500 mt-3 text-center">或像我一樣準備簡單便當也很有氛圍✨</p>
        </section>

        {/* Tips */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-stone-800 mb-3">📝 小建議</h2>
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4 space-y-3">
            {tips.map((tip) => (
              <div key={tip.text} className="flex items-center gap-3 text-sm text-stone-600">
                <span className="text-xl shrink-0">{tip.emoji}</span>
                <span>{tip.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* eSIM CTA */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border border-blue-200 p-6 mb-8">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl">📱</span>
            <div>
              <h3 className="font-black text-stone-800 text-base mb-1">旅行小提醒</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                來東京野餐時，常常需要用 Google Map 找地點<br />
                建議來日本前先準備好網路！
              </p>
            </div>
          </div>
          {/* eSIM link placeholder */}
          <div className="bg-white rounded-2xl border border-blue-200 px-4 py-3 text-center">
            <p className="text-xs text-stone-400">👉 eSIM 連結即將放上</p>
          </div>
        </section>

        {/* ぽやぴよ comment */}
        <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
          <div className="text-3xl shrink-0">🐥</div>
          <div>
            <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
            <p className="text-sm text-stone-600">「這裡真的很適合約會或拍照！帶著便當來這裡野餐，是我最喜歡的東京行程🌿」</p>
          </div>
        </div>

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
