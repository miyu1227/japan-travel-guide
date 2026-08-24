import type { Metadata } from "next";
import { businessMetadata, breadcrumbJsonLd } from "@/lib/business/site";
import { SERVICES, SERVICE_STATUS_LABEL } from "@/lib/business/services";
import { PRICING_NOTES } from "@/lib/business/pricing";
import FinalCta from "../components/FinalCta";
import PageHero from "../components/PageHero";
import {
  Badge,
  CheckedList,
  CtaGroup,
  CtaLink,
  JsonLd,
  NoteList,
  Section,
  SectionHeading,
} from "../components/ui";

export const metadata: Metadata = businessMetadata({
  path: "services",
  title: "サービス一覧｜台湾・香港向けPR掲載と繁体字コンテンツ制作",
  description:
    "Japan Trip Picks for Business のサービス一覧。スポット掲載5,000円、特集記事掲載10,000円、SNS紹介＋3,000円、繁体字コンテンツ制作は要相談。台湾・香港向けの情報発信をお手伝いします。",
});

const STATUS_TONE = {
  available: "blue",
  consult: "muted",
  preparing: "muted",
} as const;

const crumbs = [
  { name: "TOP", href: "/business" },
  { name: "サービス" },
];

const jsonLd = breadcrumbJsonLd([
  { name: "TOP", path: "" },
  { name: "サービス", path: "services" },
]);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        eyebrow="SERVICES"
        title="サービス一覧"
        lead="Japan Trip Picks への掲載を中心に、台湾・香港向けの情報発信をお手伝いするサービスです。まずは1件からお試しいただけます。"
        crumbs={crumbs}
      >
        {/* ページ内の目次。スマホでも横スクロールしないよう折り返す */}
        <nav aria-label="サービスの目次">
          <ul className="flex flex-wrap gap-2">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <a
                  href={`#${service.id}`}
                  className="inline-block rounded-full border border-white bg-white px-3 py-2 text-xs font-bold text-biz-ink transition-colors hover:text-biz-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-biz-blue"
                >
                  <span aria-hidden="true" className="mr-1">
                    {service.emoji}
                  </span>
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <Section tone="white">
        <div className="space-y-12 sm:space-y-16">
          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              id={service.id}
              // sticky ヘッダーに隠れないよう、アンカー着地位置をずらす
              className="scroll-mt-20 border-b border-biz-line pb-12 last:border-b-0 last:pb-0 sm:scroll-mt-24 sm:pb-16"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span aria-hidden="true" className="text-2xl leading-none">
                  {service.emoji}
                </span>
                <span className="text-xs font-bold tracking-[0.16em] text-biz-blue">
                  {String.fromCharCode(65 + i)}
                </span>
                <Badge tone={STATUS_TONE[service.status]}>
                  {SERVICE_STATUS_LABEL[service.status]}
                </Badge>
              </div>

              <h2 className="mt-3 text-xl leading-snug font-bold text-biz-ink sm:text-2xl">
                {service.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-biz-muted sm:text-base">
                {service.summary}
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_20rem] lg:items-start">
                <div className="min-w-0">
                  {service.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="mb-3 text-sm leading-relaxed text-biz-muted last:mb-0 sm:text-[0.95rem]"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {service.examples && (
                    <div className="mt-5 rounded-2xl bg-biz-sand p-4 sm:p-5">
                      <h3 className="mb-2 text-sm font-bold text-biz-ink">こんな使い方をされています</h3>
                      <ul className="space-y-1.5">
                        {service.examples.map((example) => (
                          <li key={example} className="flex gap-2 text-sm leading-relaxed text-biz-muted">
                            <span aria-hidden="true" className="text-biz-blue">
                              ・
                            </span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 内容と料金のまとめ */}
                <div className="rounded-2xl border border-biz-line bg-white p-5 shadow-[0_1px_2px_rgba(18,49,79,0.04)]">
                  <h3 className="text-sm font-bold text-biz-ink">内容</h3>
                  <div className="mt-3">
                    <CheckedList items={service.includes} />
                  </div>
                  <div className="mt-5 border-t border-biz-line pt-4">
                    <p className="text-xs font-bold text-biz-blue">料金</p>
                    <p className="mt-1 text-2xl leading-none font-bold text-biz-ink">{service.price}</p>
                    {service.priceNote && (
                      <p className="mt-2 text-xs text-biz-muted">{service.priceNote}</p>
                    )}
                  </div>
                  <div className="mt-5">
                    <CtaLink href="/business/contact" className="w-full sm:w-full">
                      このサービスを相談する
                    </CtaLink>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="NOTES"
          title="ご利用にあたって"
          description="お申し込み前にご確認ください。"
        />
        <NoteList items={PRICING_NOTES} />
        <div className="mt-6">
          <CtaGroup>
            <CtaLink href="/business/pricing" variant="secondary">
              料金プランを比べる
            </CtaLink>
            <CtaLink href="/business/works" variant="secondary">
              制作している記事の例を見る
            </CtaLink>
          </CtaGroup>
        </div>
      </Section>

      <FinalCta
        title="どのサービスが合うか、一緒に考えます"
        lead="「まず何から始めればいいか分からない」という段階でも構いません。内容をうかがったうえでご提案します。"
      />
    </>
  );
}
