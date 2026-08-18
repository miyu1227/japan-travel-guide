import Image from "next/image";
import Link from "next/link";
import AuthorCard from "./AuthorCard";
import PrepBannerCompact from "./PrepBannerCompact";
import { ARTICLE_BY_SLUG } from "@/lib/articles";
import { HUB_BY_SLUG, hubMembers, type Hub } from "@/lib/hubs";

const BASE = "https://www.japantrippicks.com";

export function hubMetadata(hub: Hub) {
  const url = `${BASE}/${hub.slug}`;
  const cover = hubMembers(hub).find((a) => a.image)?.image ?? "/poyapiyo-flag.png";
  return {
    title: hub.title,
    description: hub.description,
    alternates: {
      canonical: url,
      // 台湾・香港の両方を対象にする（同一URLで両地域を明示）
      languages: {
        "zh-Hant": url,
        "zh-TW": url,
        "zh-HK": url,
        "zh-MO": url,
        "x-default": url,
      },
    },
    openGraph: {
      title: hub.title,
      description: hub.description,
      url,
      type: "website" as const,
      locale: "zh_TW",
      alternateLocale: ["zh_HK"],
      siteName: "Japan Trip Picks",
      images: [{ url: cover, width: 1200, height: 630, alt: hub.h1 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: hub.title,
      description: hub.description,
      images: [cover],
    },
  };
}

export default function HubPage({ slug }: { slug: string }) {
  const hub = HUB_BY_SLUG[slug];
  const members = hubMembers(hub);
  const url = `${BASE}/${hub.slug}`;

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: hub.title,
    description: hub.description,
    url,
    inLanguage: ["zh-TW", "zh-HK"],
    isPartOf: { "@type": "WebSite", name: "Japan Trip Picks", url: BASE },
    publisher: { "@type": "Organization", name: "Japan Trip Picks", url: BASE },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: members.length,
      itemListElement: members.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.name,
        url: `${BASE}/${a.slug}`,
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首頁", item: BASE },
      { "@type": "ListItem", position: 2, name: hub.crumb, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-100 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-800 transition-colors text-sm flex items-center gap-1">
            ← 返回
          </Link>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700 truncate">{hub.crumb}</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          <span className="bg-yellow-100 text-yellow-700 border border-yellow-300 text-xs font-semibold px-3 py-1 rounded-full">
            {hub.badge}
          </span>
          <span className="bg-green-50 text-green-600 border border-green-200 text-xs font-semibold px-3 py-1 rounded-full">
            ✅ {members.length} 篇實際造訪
          </span>
        </div>

        <h1 className="text-2xl font-black text-stone-800 leading-tight mb-4">
          {hub.emoji} {hub.h1}
        </h1>

        <section className="bg-white rounded-2xl border border-yellow-100 shadow-sm p-5 mb-8">
          {hub.intro.map((p, i) => (
            <p
              key={i}
              className="text-sm text-stone-600 leading-relaxed mb-2 last:mb-0"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
        </section>

        <PrepBannerCompact />

        <section className="mb-8">
          <h2 className="text-base font-black text-stone-800 mb-3">🤔 該怎麼挑？</h2>
          <div className="space-y-2">
            {hub.guide.map((g) => (
              <div key={g.q} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
                <p className="text-sm font-bold text-stone-800 mb-1">Q. {g.q}</p>
                <p className="text-sm text-stone-600 leading-relaxed">{g.a}</p>
              </div>
            ))}
          </div>
        </section>

        {hub.sections.map((section) => (
          <section key={section.heading} className="mb-8">
            <h2 className="text-base font-black text-stone-800 mb-1">{section.heading}</h2>
            <p className="text-xs text-stone-500 mb-3">{section.note}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {section.slugs.map((s) => {
                const a = ARTICLE_BY_SLUG[s];
                if (!a) return null;
                return (
                  <Link
                    key={a.slug}
                    href={`/${a.slug}`}
                    className="block bg-white rounded-2xl border border-stone-100 shadow-sm hover:border-yellow-300 hover:shadow-md transition-all overflow-hidden"
                  >
                    {a.image && (
                      <div className="relative w-full aspect-[16/9] bg-stone-100">
                        <Image
                          src={a.image}
                          alt={a.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-sm font-bold text-stone-800 leading-snug">{a.name}</h3>
                        <span className="shrink-0 text-[11px] px-2 py-0.5 rounded-full border border-stone-200 text-stone-500">
                          {a.tag}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 leading-relaxed">{a.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        <AuthorCard />

        <section className="mt-8">
          <h2 className="text-base font-black text-stone-800 mb-3">📚 其他主題總覽</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {hub.relatedHubs.map((h) => {
              const other = HUB_BY_SLUG[h];
              if (!other) return null;
              return (
                <Link
                  key={other.slug}
                  href={`/${other.slug}`}
                  className="flex items-center justify-between bg-white border border-stone-100 rounded-2xl px-4 py-3 shadow-sm hover:border-yellow-300 transition-colors"
                >
                  <span className="text-sm font-bold text-stone-800">
                    {other.emoji} {other.h1}
                  </span>
                  <span className="text-stone-300 text-sm">›</span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
