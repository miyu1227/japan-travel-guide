import Image from "next/image";
import Link from "next/link";

const shops = [
  {
    id: "tsujita",
    name: "つじ田 肥後橋店",
    nameZh: "つじ田 肥後橋店",
    url: "https://tsukemen-tsujita.com/shop/?id=0010030",
    tag: "大阪",
    recommend: "つけ麺",
    location: "大阪 肥後橋",
    images: ["/ramen/tsujita-2.jpg", "/ramen/tsujita-1.jpg"],
    desc: [
      "濃厚魚介系つけ麺で有名なお店。",
      "湯頭非常濃郁，帶有魚介香氣，麵條偏粗，口感很有嚼勁。",
      "吃到一半可以加上檸檬或黑七味，味道會有不同變化，很有特色✨",
    ],
    highlight: "濃厚魚介系つけ麺",
  },
  {
    id: "warido",
    name: "和利道",
    nameZh: "和利道",
    url: "https://www.hotpepper.jp/strJ000815400/",
    tag: "東京",
    recommend: "つけ麺",
    location: "東京 目黑附近",
    images: ["/ramen/warido.jpg"],
    desc: [
      "東京人氣很高的排隊拉麵店。",
      "以濃厚魚介系湯頭聞名，味道偏重但非常香濃。",
      "很多人專程來吃，常常需要排隊，但很值得🔥",
    ],
    highlight: "濃厚魚介系湯頭",
  },
  {
    id: "machida",
    name: "町田商店",
    nameZh: "町田商店",
    url: "https://www.machidashoten.com/menu",
    tag: "全國",
    recommend: "豚骨醬油拉麵",
    location: "日本各地都有",
    images: ["/ramen/machida.jpg"],
    desc: [
      "日本超有名的連鎖拉麵，屬於「家系拉麵」。",
      "特色是濃厚豚骨醬油湯頭＋海苔＋白飯超搭！",
      "可以選擇麵硬度、湯頭濃度、油量，很適合第一次體驗日本拉麵的人👍",
    ],
    highlight: "家系拉麵",
  },
];

export default function RamenArticle() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 transition-colors text-sm flex items-center gap-1">
            ← 返回
          </Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">拉麵推薦</span>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-6">

        {/* Category badge */}
        <div className="mb-4">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-semibold px-3 py-1 rounded-full">
            🍜 拉麵
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-4">
          日本拉麵推薦｜3間必吃拉麵<br />
          <span className="text-lg font-bold text-stone-500">（東京＋大阪）</span>
        </h1>

        {/* Intro */}
        <div className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          <p className="text-sm text-stone-600 leading-relaxed">
            來日本旅遊，很多人一定會想吃拉麵🍜<br />
            這次整理了3間我實際吃過的拉麵店，<br />
            包含東京、大阪，還有日本很有名的連鎖拉麵！
          </p>
        </div>

        {/* Shops */}
        <div className="space-y-10">
          {shops.map((shop, index) => (
            <section key={shop.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
              {/* Photos */}
              <div className={`grid ${shop.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-0.5`}>
                {shop.images.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] bg-stone-100">
                    <Image
                      src={src}
                      alt={shop.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Number + Name */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-black shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-stone-800">{shop.name}</h2>
                    <span className="text-xs text-stone-400">{shop.highlight}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1 mb-4">
                  {shop.desc.map((line, i) => (
                    <p key={i} className="text-sm text-stone-600 leading-relaxed">{line}</p>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="flex items-center gap-1 text-xs text-stone-500 bg-stone-50 border border-stone-200 px-3 py-1 rounded-full">
                    📍 {shop.location}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                    💡 推薦：{shop.recommend}
                  </span>
                </div>

                {/* Link */}
                <a
                  href={shop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 underline underline-offset-2"
                >
                  🔗 查看店家資訊
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-10 bg-white rounded-3xl border border-yellow-200 shadow-sm p-6">
          <p className="text-sm text-stone-600 leading-relaxed mb-4">
            這3間各有特色，有大阪的濃郁魚介つけ麺、東京的排隊名店，以及全國都找得到的家系拉麵✨<br />
            如果來日本，很推薦安排一餐專程去吃拉麵！
          </p>

          {/* ぽやぴよ comment */}
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="text-3xl shrink-0">🐥</div>
            <div>
              <p className="text-sm font-semibold text-stone-700 mb-0.5">ぽやぴよ的話</p>
              <p className="text-sm text-stone-600">「這裡真的很適合約會或拍照！」</p>
            </div>
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
