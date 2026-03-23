import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: "convenience", icon: "🏪", label: "Convenience Store", labelZh: "便利商店", color: "bg-yellow-100 text-yellow-700 border-yellow-300", activeColor: "bg-yellow-400 text-white border-yellow-400" },
  { id: "ramen", icon: "🍜", label: "Ramen", labelZh: "拉麵", color: "bg-red-100 text-red-600 border-red-300", activeColor: "bg-red-400 text-white border-red-400" },
  { id: "snacks", icon: "🍘", label: "Snacks", labelZh: "零食伴手禮", color: "bg-orange-100 text-orange-600 border-orange-300", activeColor: "bg-orange-400 text-white border-orange-400" },
  { id: "cafe", icon: "☕", label: "Cafés", labelZh: "咖啡廳", color: "bg-pink-100 text-pink-600 border-pink-300", activeColor: "bg-pink-400 text-white border-pink-400" },
  { id: "spot", icon: "📍", label: "Spots", labelZh: "景點", color: "bg-blue-100 text-blue-600 border-blue-300", activeColor: "bg-blue-400 text-white border-blue-400" },
];

const picks: Record<string, { name: string; desc: string; tag: string; emoji: string; href?: string; image?: string }[]> = {
  convenience: [],
  ramen: [
    {
      name: "日本拉麵推薦｜3間必吃拉麵（東京＋大阪）",
      desc: "つじ田・和利道・町田商店，實際吃過的真實評價🍜",
      tag: "東京・大阪",
      emoji: "🍜",
      href: "/ramen",
      image: "/ramen/tsujita-2.jpg",
    },
  ],
  snacks: [],
  cafe: [],
  spot: [
    {
      name: "東京野餐推薦｜新宿御苑＆代代木公園悠閒散步🌿",
      desc: "草地・拍照・放鬆，東京最受歡迎的兩大公園比較",
      tag: "東京",
      emoji: "📍",
      href: "/spot",
      image: "/spot/shinjuku-1.jpg",
    },
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
            {picks[cat.id].length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed border-stone-200 p-8 text-center text-stone-400">
                <div className="text-3xl mb-2">🐣</div>
                <p className="text-sm">近期更新中...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {picks[cat.id].map((item) => {
                  const CardWrapper = item.href
                    ? ({ children }: { children: React.ReactNode }) => (
                        <Link href={item.href!} className="block bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                          {children}
                        </Link>
                      )
                    : ({ children }: { children: React.ReactNode }) => (
                        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4 flex items-start gap-3">
                          {children}
                        </div>
                      );
                  return (
                    <CardWrapper key={item.name}>
                      {item.image ? (
                        <>
                          <div className="relative w-full aspect-[16/9] bg-stone-100">
                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                          </div>
                          <div className="p-4">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h3 className="font-bold text-stone-800 text-sm leading-tight">{item.name}</h3>
                              <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border ${cat.color}`}>
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                          </div>
                        </>
                      ) : (
                        <>
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
                        </>
                      )}
                    </CardWrapper>
                  );
                })}
              </div>
            )}
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
