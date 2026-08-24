import type { Metadata } from "next";
import { businessMetadata, breadcrumbJsonLd } from "@/lib/business/site";
import { FAQ_ITEMS, faqJsonLd } from "@/lib/business/faq";
import FaqList from "../components/FaqList";
import FinalCta from "../components/FinalCta";
import PageHero from "../components/PageHero";
import { CtaGroup, CtaLink, JsonLd, Section } from "../components/ui";

export const metadata: Metadata = businessMetadata({
  path: "faq",
  title: "よくあるご質問｜Japan Trip Picks for Business",
  description:
    "掲載までの期間、写真のご用意、原稿の修正、掲載期間、個人店舗の可否など、Japan Trip Picks for Business へのお問い合わせでよくいただくご質問にお答えします。",
});

const crumbs = [{ name: "TOP", href: "/business" }, { name: "FAQ" }];

const breadcrumb = breadcrumbJsonLd([
  { name: "TOP", path: "" },
  { name: "FAQ", path: "faq" },
]);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={faqJsonLd()} />

      <PageHero
        eyebrow="FAQ"
        title="よくあるご質問"
        lead="お問い合わせの前に、よくいただくご質問をご確認ください。ここにない内容も、お気軽にお問い合わせください。"
        crumbs={crumbs}
      />

      <Section tone="white">
        <FaqList items={FAQ_ITEMS} />

        <div className="mt-10 rounded-2xl border border-biz-line bg-biz-blue-soft p-5 sm:p-6">
          <h2 className="text-base font-bold text-biz-ink">解決しない場合は</h2>
          <p className="mt-2 text-sm leading-relaxed text-biz-muted">
            ご不明な点は個別にお答えします。お問い合わせいただいた時点では契約になりませんので、
            ご相談だけでもお気軽にどうぞ。
          </p>
          <div className="mt-5">
            <CtaGroup>
              <CtaLink href="/business/contact">問い合わせる</CtaLink>
              <CtaLink href="/business/pricing" variant="secondary">
                料金プランを見る
              </CtaLink>
            </CtaGroup>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
