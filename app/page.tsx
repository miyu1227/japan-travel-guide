"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: "convenience", icon: "🏪", label: "Convenience Store", labelZh: "便利商店", color: "bg-yellow-100 text-yellow-700 border-yellow-300", activeColor: "bg-yellow-400 text-white border-yellow-400", hasAreaFilter: false },
  { id: "ramen", icon: "🍜", label: "Ramen", labelZh: "拉麵", color: "bg-red-100 text-red-600 border-red-300", activeColor: "bg-red-400 text-white border-red-400", hasAreaFilter: true },
  { id: "snacks", icon: "🍘", label: "Snacks", labelZh: "零食伴手禮", color: "bg-orange-100 text-orange-600 border-orange-300", activeColor: "bg-orange-400 text-white border-orange-400", hasAreaFilter: false },
  { id: "cafe", icon: "☕", label: "Cafés", labelZh: "咖啡廳", color: "bg-pink-100 text-pink-600 border-pink-300", activeColor: "bg-pink-400 text-white border-pink-400", hasAreaFilter: true },
  { id: "spot", icon: "📍", label: "Spots", labelZh: "景點", color: "bg-blue-100 text-blue-600 border-blue-300", activeColor: "bg-blue-400 text-white border-blue-400", hasAreaFilter: true },
];

const areas = ["すべて", "東京", "大阪", "神戸", "北海道", "四国", "その他"];

const picks: Record<string, { name: string; desc: string; tag: string; emoji: string; href?: string; image?: string; areas: string[] }[]> = {
  convenience: [],
  ramen: [
    {
      name: "日本拉麵推薦｜3間必吃拉麵（東京＋大阪）",
      desc: "つじ田・和利道・町田商店，實際吃過的真實評價🍜",
      tag: "東京・大阪",
      emoji: "🍜",
      href: "/ramen",
      image: "/ramen/tsujita-2.jpg",
      areas: ["東京", "大阪"],
    },
  ],
  snacks: [],
  cafe: [
    {
      name: "自由之丘咖啡店推薦｜東京必去咖啡散步地區☕",
      desc: "貝果・義式冰淇淋・起司披薩，3間人氣店實際走訪",
      tag: "東京",
      emoji: "☕",
      href: "/cafe",
      image: "/cafe/gelato-1.jpg",
      areas: ["東京"],
    },
  ],
  spot: [
    {
      name: "東京野餐推薦｜新宿御苑＆代代木公園悠閒散步🌿",
      desc: "草地・拍照・放鬆，東京最受歡迎的兩大公園比較",
      tag: "東京",
      emoji: "📍",
      href: "/spot",
      image: "/spot/shinjuku-1.jpg",
      areas: ["東京"],
    },
    {
      name: "新大久保美食推薦｜韓國料理・咖啡・甜點食べ歩き🇰🇷",
      desc: "ナッコプセ鍋・韓系咖啡廳・ドバイ餅，實際走訪3間必去",
      tag: "東京",
      emoji: "🍲",
      href: "/shin-okubo",
      image: "/shin-okubo/sawee-1.jpg",
      areas: ["東京"],
    },
    {
      name: "箱根一日遊推薦｜從東京搭浪漫特快出發🚃",
      desc: "美術館・足湯・神社・甜點，一天玩遍箱根精華",
      tag: "箱根",
      emoji: "♨️",
      href: "/hakone",
      image: "/hakone/shrine-1.jpg",
      areas: ["その他"],
    },
    {
      name: "北海道自由行必去景點10選｜札幌・小樽・富良野一次玩遍",
      desc: "音樂盒堂・青池・薰衣草花田・迴轉壽司・成吉思汗，北海道精華全收錄",
      tag: "北海道",
      emoji: "🗾",
      href: "/hokkaido",
      image: "/hokkaido/farm-1.jpg",
      areas: ["北海道"],
    },
  ],
};

function AreaFilter({ catId, color }: { catId: string; color: string }) {
  const [selected, setSelected] = useState("すべて");
  const items = picks[catId];
  const filtered = selected === "すべて"
    ? items
    : items.filter((item) => item.areas.includes(selected));

  return (
    <>
      {/* Area tabs */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-4">
        {areas.map((area) => (
          <button
            key={area}
            onClick={() => setSelected(area)}
            className={`flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
              selected === area
                ? "bg-stone-700 text-white border-stone-700"
                : "bg-white text-stone-500 border-stone-200 hover:border-stone-400"
            }`}
          >
            {area}
          </button>
        ))}
      </div>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-stone-200 p-8 text-center text-stone-400">
          <div className="text-3xl mb-2">🐣</div>
          <p className="text-sm">近期更新中...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map((item) => {
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
                      <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" priority />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-bold text-stone-800 text-sm leading-tight">{item.name}</h3>
                        <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border ${color}`}>
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
                        <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border ${color}`}>
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
    </>
  );
}

function StaticCards({ catId, color }: { catId: string; color: string }) {
  const items = picks[catId];
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-dashed border-stone-200 p-8 text-center text-stone-400">
        <div className="text-3xl mb-2">🐣</div>
        <p className="text-sm">近期更新中...</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((item) => {
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
                  <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" priority />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-stone-800 text-sm leading-tight">{item.name}</h3>
                    <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border ${color}`}>
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
                    <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border ${color}`}>
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
  );
}

export default function Home() {
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
          <div className="flex justify-center mb-4">
            <div className="relative w-72 h-72">
              <Image
                src="/poyapiyo-flag.png"
                alt="ぽやぴよ"
                fill
                sizes="288px"
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>
          <div className="mb-3">
            <h1 className="text-3xl font-black text-stone-800 tracking-tight leading-tight">
              Japan Trip Picks
              <span className="ml-2">🇯🇵</span>
            </h1>
          </div>
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
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${cat.color} border-2`}>
                {cat.icon}
              </div>
              <div>
                <h2 className="text-xl font-black text-stone-800">{cat.label}</h2>
                <p className="text-sm text-stone-500">{cat.labelZh}</p>
              </div>
            </div>

            {cat.hasAreaFilter
              ? <AreaFilter catId={cat.id} color={cat.color} />
              : <StaticCards catId={cat.id} color={cat.color} />
            }
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

      {/* 掲載プランセクション */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <Link href="/promotion" className="block group">
          <div className="bg-gradient-to-r from-stone-700 to-stone-900 rounded-3xl px-6 py-5 flex items-center justify-between hover:opacity-90 transition-opacity shadow-sm">
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Business</p>
              <h3 className="text-white font-black text-base">📢 掲載・プロモーションのご案内</h3>
              <p className="text-stone-300 text-xs mt-1">訪日外国人向けに、あなたのお店・スポットをPRしませんか？</p>
            </div>
            <span className="text-stone-300 text-xl ml-4 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-yellow-100 mt-2 py-8 px-4 text-center text-xs text-stone-400">
        <div className="flex justify-center items-center gap-2 mb-2">
          <span className="text-base">🐣</span>
          <span className="font-semibold text-stone-600">Japan Trip Picks</span>
        </div>
        <p>台灣・香港旅客專屬日本旅遊指南</p>

        {/* SNS Icons */}
        <div className="flex justify-center items-center gap-4 mt-4 mb-3">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/japantrippicks?igsh=aWlid2Z4M2tpengx&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white hover:opacity-80 transition-opacity shadow-sm"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61579453230592&sk=directory_links"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1877F2] text-white hover:opacity-80 transition-opacity shadow-sm"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </div>

        <p className="mt-1">© 2026 Japan Trip Picks</p>
      </footer>
    </div>
  );
}
