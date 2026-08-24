import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  businessMetadata,
  breadcrumbJsonLd,
  DOWNLOAD_PATH,
  PARENT_SITE_NAME,
} from "@/lib/business/site";
import {
  HAS_SPONSORED,
  SHOWCASE_CATEGORIES,
  resolveShowcase,
  type ResolvedShowcaseItem,
} from "@/lib/business/showcase";
import FinalCta from "../components/FinalCta";
import PageHero from "../components/PageHero";
import { Badge, CtaGroup, CtaLink, JsonLd, Section, SectionHeading } from "../components/ui";

export const metadata: Metadata = businessMetadata({
  path: "works",
  title: "制作している記事の例｜Japan Trip Picks for Business",
  description:
    "Japan Trip Picks で実際に公開しているグルメ・カフェ・観光・旅行準備の記事例をご紹介します。掲載後にどのような見え方になるかの参考にご覧ください。",
});

const crumbs = [{ name: "TOP", href: "/business" }, { name: "実績" }];

const jsonLd = breadcrumbJsonLd([
  { name: "TOP", path: "" },
  { name: "実績", path: "works" },
]);

// PR掲載の記事が増えたら「掲載事例」に切り替わる。
// 実績件数を数字で誇張しないよう、件数の表示はしない。
const PAGE_TITLE = HAS_SPONSORED ? "掲載事例" : "実際に制作している記事の例";

const items = resolveShowcase();

function WorkCard({ item }: { item: ResolvedShowcaseItem }) {
  const category = SHOWCASE_CATEGORIES.find((c) => c.id === item.category);

  return (
    <li className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-biz-line bg-white shadow-[0_1px_2px_rgba(18,49,79,0.04)]">
        {/* 比率を固定して読み込み時のガタつきを防ぐ */}
        <div className="relative aspect-[16/10] w-full bg-biz-line">
          {item.image ? (
            <Image
              src={item.image}
              alt={`${item.jaTitle}に使用している写真`}
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 320px"
              className="object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex size-full items-center justify-center text-3xl"
            >
              {item.article.emoji}
            </span>
          )}
        </div>

        <div className="flex grow flex-col p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-2">
            {category && (
              <Badge tone="blue">
                <span aria-hidden="true" className="mr-1">
                  {category.emoji}
                </span>
                {category.label}
              </Badge>
            )}
            <Badge tone="muted">{item.article.tag}</Badge>
            {item.sponsored && <Badge tone="cta">PR掲載</Badge>}
          </div>

          <h3 className="mt-3 text-[0.95rem] leading-snug font-bold text-biz-ink">{item.jaTitle}</h3>

          {/* 実際のタイトルは繁体字。事業者に「こう出る」ことを見せる */}
          <p
            lang="zh-Hant"
            className="mt-2 text-xs leading-relaxed text-biz-muted"
          >
            {item.originalTitle}
          </p>

          <p className="mt-3 grow text-xs leading-relaxed text-biz-muted">{item.note}</p>

          <Link
            href={item.href}
            className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-bold text-biz-blue underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue"
          >
            記事を見る
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    </li>
  );
}

export default function WorksPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        eyebrow="WORKS"
        title={PAGE_TITLE}
        lead={`${PARENT_SITE_NAME} で公開している記事の一部です。掲載していただいた場合に、どのような形で紹介されるかの参考としてご覧ください。`}
        crumbs={crumbs}
      >
        <div className="rounded-2xl border border-white bg-white p-4 sm:p-5">
          <p className="text-xs leading-relaxed text-biz-muted">
            ここに並んでいるのは、当サイトが自主的に制作・公開している記事です。
            PR掲載としてお受けした案件は、今後この一覧に掲載事例として追加していきます。
            掲載件数や閲覧数を実績として掲げることはいたしません。
          </p>
        </div>
      </PageHero>

      {SHOWCASE_CATEGORIES.map((category, i) => {
        const categoryItems = items.filter((item) => item.category === category.id);
        if (categoryItems.length === 0) return null;

        return (
          <Section key={category.id} tone={i % 2 === 0 ? "white" : "soft"} id={category.id}>
            <SectionHeading
              eyebrow={category.label.toUpperCase()}
              title={
                <span className="flex items-center gap-2">
                  <span aria-hidden="true">{category.emoji}</span>
                  {category.label}
                </span>
              }
              description={category.description}
            />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryItems.map((item) => (
                <WorkCard key={item.slug} item={item} />
              ))}
            </ul>
          </Section>
        );
      })}

      <Section tone="sand">
        <div className="rounded-2xl border border-biz-line bg-white p-5 sm:p-6">
          <h2 className="text-base font-bold text-biz-ink">掲載をご検討中の方へ</h2>
          <p className="mt-2 text-sm leading-relaxed text-biz-muted">
            掲載すると、上のような記事と同じ作りで、貴店専用のページを1本お作りします。
            写真5〜10枚と基本情報をご用意いただければ、日本語と繁体字の本文はこちらで制作します。
            料金は媒体資料に記載しています。
          </p>
          <div className="mt-5">
            <CtaGroup>
              <CtaLink href={DOWNLOAD_PATH}>媒体資料を請求する</CtaLink>
              <CtaLink href="/business/pricing" variant="secondary">
                掲載プランの内容を見る
              </CtaLink>
            </CtaGroup>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
