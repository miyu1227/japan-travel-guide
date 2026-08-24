import { DOWNLOAD_PATH } from "@/lib/business/site";
import { CtaGroup, CtaLink, Section, SectionHeading } from "./ui";

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
          <CtaLink href={DOWNLOAD_PATH}>媒体資料を請求する</CtaLink>
          <CtaLink href="/business/contact" variant="ghost">
            そのまま問い合わせる
          </CtaLink>
        </CtaGroup>
      </div>
    </Section>
  );
}
