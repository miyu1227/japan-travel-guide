import Link from "next/link";

const attractions = [
  {
    name: "Kyoto",
    description: "Ancient temples, geisha districts, and bamboo groves. The cultural heart of Japan.",
    tag: "Culture & History",
    gradient: "from-rose-900 to-rose-600",
    icon: "⛩️",
  },
  {
    name: "Tokyo",
    description: "A dazzling metropolis blending neon-lit modernity with serene shrines and gardens.",
    tag: "City & Modernity",
    gradient: "from-indigo-900 to-indigo-600",
    icon: "🗼",
  },
  {
    name: "Hokkaido",
    description: "Vast wilderness, world-class ski resorts, and some of Japan's finest seafood.",
    tag: "Nature & Adventure",
    gradient: "from-sky-900 to-sky-600",
    icon: "🏔️",
  },
  {
    name: "Osaka",
    description: "Japan's kitchen — vibrant street food, lively nightlife, and Dotonbori canal.",
    tag: "Food & Fun",
    gradient: "from-amber-800 to-orange-600",
    icon: "🏯",
  },
  {
    name: "Hiroshima",
    description: "A city reborn — powerful peace memorials alongside beautiful Miyajima Island.",
    tag: "History & Peace",
    gradient: "from-teal-900 to-teal-600",
    icon: "🕊️",
  },
  {
    name: "Okinawa",
    description: "Tropical paradise with crystal-clear waters, coral reefs, and unique Ryukyuan culture.",
    tag: "Beach & Culture",
    gradient: "from-cyan-800 to-cyan-500",
    icon: "🌺",
  },
];

const foods = [
  { name: "Ramen", desc: "Rich broth noodles in countless regional styles", emoji: "🍜" },
  { name: "Sushi", desc: "Fresh fish over seasoned rice — a Japanese art form", emoji: "🍣" },
  { name: "Wagyu BBQ", desc: "World-renowned marbled beef grilled to perfection", emoji: "🥩" },
  { name: "Tempura", desc: "Light, crispy battered seafood and vegetables", emoji: "🍤" },
  { name: "Yakitori", desc: "Charcoal-grilled chicken skewers with tare sauce", emoji: "🍢" },
  { name: "Matcha Sweets", desc: "Mochi, parfaits, and cakes in every shade of green", emoji: "🍵" },
];

const transports = [
  {
    title: "Shinkansen (Bullet Train)",
    desc: "Connect major cities at up to 320 km/h. The JR Pass gives unlimited rides across the network.",
    icon: "🚄",
    tip: "Book reserved seats in advance during peak seasons.",
  },
  {
    title: "Tokyo Metro & Subway",
    desc: "An extensive underground network covers every corner of the capital. IC cards (Suica/Pasmo) work everywhere.",
    icon: "🚇",
    tip: "Get a Suica card at any JR East station — reloadable and accepted in convenience stores too.",
  },
  {
    title: "IC Cards (Suica / Pasmo)",
    desc: "Rechargeable smart cards accepted on trains, buses, taxis, and even vending machines nationwide.",
    icon: "💳",
    tip: "Available at airport vending machines — grab one on arrival.",
  },
  {
    title: "Domestic Flights",
    desc: "ANA and JAL offer affordable fares for reaching Okinawa, Hokkaido, and other distant destinations.",
    icon: "✈️",
    tip: "Book at least 3 weeks ahead for the best discount fares.",
  },
];

const accommodations = [
  {
    type: "Ryokan",
    desc: "Traditional Japanese inns with tatami rooms, futon beds, and multi-course kaiseki dinners. An unmissable cultural experience.",
    price: "¥¥¥",
    icon: "🏮",
    highlight: "Must-Try",
  },
  {
    type: "Business Hotel",
    desc: "Clean, efficient, and well-located. Perfect for solo travelers or those who want convenience without the premium price.",
    price: "¥¥",
    icon: "🏨",
    highlight: "Best Value",
  },
  {
    type: "Capsule Hotel",
    desc: "A uniquely Japanese experience — private sleeping pods in a social atmosphere. Great for budget travelers.",
    price: "¥",
    icon: "⬜",
    highlight: "Budget Pick",
  },
  {
    type: "Luxury Hotel",
    desc: "International brands and Japanese boutique properties offer impeccable service and spectacular city views.",
    price: "¥¥¥¥",
    icon: "✨",
    highlight: "Premium",
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
            <span className="text-white font-semibold text-lg tracking-wide">Japan Travel Guide</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-300">
            <a href="#attractions" className="hover:text-white transition-colors">Attractions</a>
            <a href="#gourmet" className="hover:text-white transition-colors">Gourmet</a>
            <a href="#transport" className="hover:text-white transition-colors">Transport</a>
            <a href="#stay" className="hover:text-white transition-colors">Stay</a>
          </div>
          <a
            href="#attractions"
            className="hidden md:inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            Plan Your Trip →
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-rose-950/40 to-stone-950" />
          {/* Abstract cherry blossom circles */}
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-rose-900/20 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-rose-800/15 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-rose-950/30 blur-3xl" />
        </div>

        {/* Japanese kanji decoration */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 opacity-10 select-none">
          {["日", "本", "旅", "行", "案", "内"].map((char) => (
            <span key={char} className="text-white text-5xl font-bold leading-tight">
              {char}
            </span>
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-rose-600/20 border border-rose-500/30 text-rose-300 text-sm px-4 py-1.5 rounded-full mb-8">
            <span>🌸</span>
            <span>Your ultimate guide to Japan</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-6 tracking-tight">
            Discover
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-200">
              Japan
            </span>
          </h1>
          <p className="text-stone-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10">
            From ancient shrines to neon cityscapes, cherry blossoms to steaming ramen — explore the Land of the Rising Sun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#attractions"
              className="bg-rose-600 hover:bg-rose-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-rose-600/30 text-lg"
            >
              Explore Destinations
            </a>
            <a
              href="#gourmet"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/5 text-lg"
            >
              Discover Food
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 text-xs">
          <span>Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-stone-400 to-transparent" />
        </div>
      </section>

      {/* Stats banner */}
      <div className="bg-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "47", label: "Prefectures" },
            { num: "19", label: "UNESCO World Heritage Sites" },
            { num: "3,000+", label: "Onsen Hot Springs" },
            { num: "100,000+", label: "Shrines & Temples" },
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
            <span className="text-rose-600 font-semibold text-sm uppercase tracking-widest">Where to Go</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-3 mb-4">
              Top Destinations
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              From Hokkaido's snowy peaks to Okinawa's tropical shores, Japan offers a lifetime of discovery.
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
                  <span>Learn more</span>
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
            <span className="text-rose-400 font-semibold text-sm uppercase tracking-widest">What to Eat</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              Japanese Cuisine
            </h2>
            <p className="text-stone-400 text-lg max-w-xl mx-auto">
              Japan boasts more Michelin-starred restaurants than any other country. Every meal is an occasion.
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
              🍱 Pro Tip: Convenience stores (7-Eleven, Lawson, FamilyMart) serve surprisingly delicious hot meals — don't overlook them!
            </p>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section id="transport" className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-600 font-semibold text-sm uppercase tracking-widest">Getting Around</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-3 mb-4">
              Transportation
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              Japan's public transport is legendary for its punctuality, cleanliness, and coverage.
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
            <span className="text-rose-600 font-semibold text-sm uppercase tracking-widest">Where to Stay</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-3 mb-4">
              Accommodation
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              From ultra-luxury hotels to authentic ryokan inns, Japan caters to every traveler and budget.
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
            Ready to Explore Japan?
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Start planning your dream trip — whether it's cherry blossom season in spring or the fiery autumn foliage of Nikko.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#attractions"
              className="bg-rose-600 hover:bg-rose-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-rose-600/30 text-lg"
            >
              Start Exploring
            </a>
            <a
              href="#gourmet"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/5 text-lg"
            >
              Browse Food Guide
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
              <span className="text-white font-semibold text-lg">Japan Travel Guide</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#attractions" className="hover:text-white transition-colors">Attractions</a>
              <a href="#gourmet" className="hover:text-white transition-colors">Gourmet</a>
              <a href="#transport" className="hover:text-white transition-colors">Transport</a>
              <a href="#stay" className="hover:text-white transition-colors">Stay</a>
            </div>
            <div className="text-sm">
              © 2026 Japan Travel Guide
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
