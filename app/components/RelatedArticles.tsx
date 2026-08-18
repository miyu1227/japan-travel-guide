import Link from "next/link";
import { getRelatedArticles } from "@/lib/articles";

/**
 * 同じ地域・同じカテゴリの記事を自動で並べる関連記事ブロック。
 * 記事を追加すると lib/articles.ts 経由で自動的に相互リンクが張られる。
 */
export default function RelatedArticles({
  slug,
  exclude = [],
}: {
  slug: string;
  exclude?: string[];
}) {
  const related = getRelatedArticles(slug, { limit: 8, exclude });
  if (related.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="text-base font-black text-stone-800 mb-3">🗾 更多同區・同類型的文章</h2>
      <div className="grid sm:grid-cols-2 gap-2">
        {related.map((a) => (
          <Link
            key={a.slug}
            href={`/${a.slug}`}
            className="flex items-start gap-2 bg-white border border-stone-100 rounded-2xl px-3 py-2.5 shadow-sm hover:border-yellow-300 transition-colors"
          >
            <span className="text-lg shrink-0 leading-none mt-0.5">{a.emoji}</span>
            <span className="min-w-0">
              <span className="block text-xs font-bold text-stone-800 leading-snug line-clamp-2">
                {a.name}
              </span>
              <span className="block text-[11px] text-stone-400 mt-0.5">📍 {a.tag}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
