import { CONTACT } from "@/lib/business/site";
import { CtaAnchor, CtaGroup, CtaLink, Section, SectionHeading } from "./ui";

/** 全ページ共通の最終CTA */
export default function FinalCta({
  title = "台湾・香港向けの情報発信を始めませんか？",
  lead = "掲載内容・料金・進め方をご案内します。ご相談だけでも構いません。お問い合わせいただいた時点で契約にはなりません。",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <Section tone="navy">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow="CONTACT" title={title} description={lead} inverted align="center" />
        <CtaGroup align="center">
          <CtaLink href="/business/contact">お問い合わせフォームへ</CtaLink>
          <CtaAnchor href={`mailto:${CONTACT.email}`} variant="ghost">
            <span aria-hidden="true">✉</span>
            メールで問い合わせる
          </CtaAnchor>
        </CtaGroup>
        <p className="mt-5 text-xs leading-relaxed text-white/70">
          お電話でも承ります：
          <a href={CONTACT.telHref} className="font-bold text-white underline underline-offset-4">
            {CONTACT.tel}
          </a>
        </p>
      </div>
    </Section>
  );
}
