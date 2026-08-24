import type { Metadata } from "next";
import { businessMetadata, breadcrumbJsonLd, DOWNLOAD_PATH } from "@/lib/business/site";
import {
  CONSULT_ITEMS,
  INCLUDED,
  NOT_INCLUDED,
  OPTIONS,
  PLANS,
  PRICING_NOTES,
} from "@/lib/business/pricing";
import FinalCta from "../components/FinalCta";
import PageHero from "../components/PageHero";
import PlanCards from "../components/PlanCards";
import { Card, CtaGroup, CtaLink, JsonLd, NoteList, Section, SectionHeading } from "../components/ui";

export const metadata: Metadata = businessMetadata({
  path: "pricing",
  title: "掲載プラン｜貴店専用ページの制作・永久掲載",
  description:
    "Japan Trip Picks for Business の掲載プラン。1店舗ごとに独立した専用ページを日本語＋繁体字で制作し、サイト運営期間中は追加費用なく掲載を続けます。料金は媒体資料でご確認いただけます。",
});

const crumbs = [{ name: "TOP", href: "/business" }, { name: "掲載プラン" }];

const jsonLd = breadcrumbJsonLd([
  { name: "TOP", path: "" },
  { name: "掲載プラン", path: "pricing" },
]);

/** 掲載基準 */
const CRITERIA = [
  "法令、条例、業界規制等に違反する内容",
  "掲載内容に虚偽があるか、誤認・錯誤を招くおそれのある場合",
  "公序良俗に反する内容、または誹謗中傷・人権侵害にあたる内容",
  "第三者の氏名・写真・商標・著作物等を無断で使用している場合",
  "その他、当サイトの品位を損なうと判断した場合",
];

/** 免責事項 */
const DISCLAIMERS = [
  "掲載内容、および掲載により生じたお客様と第三者との間のトラブルについて、当サイトは責任を負いかねます。",
  "掲載による集客効果・検索順位・売上等を保証するものではありません。",
  "天災、通信障害、システム上の不具合など当サイトの責によらない事由により掲載に支障が生じた場合、賠償および補填措置の対象といたしません。",
  "掲載は当サイトの運営期間中に限ります。やむを得ずサイトを終了する場合、掲載料の返金には応じかねます。",
  "掲載枠の第三者への譲渡・転売はできません。運営者が変わられた場合も、掲載内容の引き継ぎはお受けしておりません。",
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        eyebrow="PLAN"
        title="掲載プラン"
        lead="ご提供しているのは、1店舗ごとに専用ページを作る買い切りのプランです。月額費用・更新料はいただきません。料金は媒体資料に記載しています。"
        crumbs={crumbs}
      >
        <CtaGroup>
          <CtaLink href={DOWNLOAD_PATH}>料金が載った媒体資料を請求する</CtaLink>
        </CtaGroup>
      </PageHero>

      {/* -------------------------------------------------------- プラン */}
      <Section tone="white">
        <PlanCards />

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {OPTIONS.map((option) => (
            <Card key={option.id} className="bg-biz-sand">
              <p className="text-xs font-bold text-biz-blue">オプション</p>
              <h3 className="mt-1 text-base font-bold text-biz-ink">{option.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-biz-muted">{option.note}</p>
            </Card>
          ))}
          {CONSULT_ITEMS.map((item) => (
            <Card key={item.id} className="bg-biz-sand">
              <p className="text-xs font-bold text-biz-blue">個別見積り</p>
              <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-biz-ink">{item.name}</h3>
                <p className="text-base font-bold text-biz-ink">{item.priceLabel}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-biz-muted">{item.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------- 含まれる／含まれない */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="SCOPE"
          title="含まれるもの・含まれないもの"
          description="あとで認識のずれが出ないよう、できないことも先に書いています。"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white bg-white p-5 sm:p-6">
            <h3 className="text-sm font-bold text-biz-ink">含まれるもの</h3>
            <ul className="mt-3 space-y-2">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-biz-muted">
                  <span aria-hidden="true" className="shrink-0 font-bold text-biz-blue">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white bg-white p-5 sm:p-6">
            <h3 className="text-sm font-bold text-biz-ink">含まれないもの</h3>
            <ul className="mt-3 space-y-2">
              {NOT_INCLUDED.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-biz-muted">
                  <span aria-hidden="true" className="shrink-0 font-bold text-biz-muted">
                    ×
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white bg-white p-5 sm:p-6">
          <h3 className="text-base font-bold text-biz-ink">料金について</h3>
          <p className="mt-2 text-sm leading-relaxed text-biz-muted">
            掲載プランの料金は、媒体資料に記載しています。資料請求は無料で、
            ご請求いただいた時点では契約になりません。
            お見積りが必要な場合も、内容をうかがったうえで無料でお出しします。
          </p>
          <div className="mt-5">
            <CtaGroup>
              <CtaLink href={DOWNLOAD_PATH}>媒体資料を請求する</CtaLink>
              <CtaLink href="/business/contact" variant="secondary">
                直接問い合わせる
              </CtaLink>
            </CtaGroup>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------- 注意事項など */}
      <Section tone="sand" id="notes">
        <SectionHeading
          eyebrow="NOTES"
          title="ご確認事項・掲載基準・免責事項"
          description="お申し込みの前に、以下をご確認ください。"
        />

        <div className="space-y-5">
          <NoteList title="ご確認事項" items={PRICING_NOTES} />

          <div className="rounded-2xl border border-biz-line bg-white p-5 sm:p-6">
            <h3 className="text-sm font-bold text-biz-ink">掲載基準について</h3>
            <p className="mt-2 text-xs leading-relaxed text-biz-muted">
              掲載の可否は当サイトにて判断いたします。以下に該当すると判断した場合は、
              お申し込みをお受けできませんので、あらかじめご了承ください。
            </p>
            <ol className="mt-3 space-y-1.5">
              {CRITERIA.map((item, i) => (
                <li key={item} className="flex gap-2 text-xs leading-relaxed text-biz-muted">
                  <span aria-hidden="true" className="shrink-0 font-bold text-biz-blue">
                    {i + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-[0.7rem] leading-relaxed text-biz-muted">
              ※掲載可否の判断理由については、原則として公開しておりません。
            </p>
          </div>

          <div className="rounded-2xl border border-biz-line bg-white p-5 sm:p-6">
            <h3 className="text-sm font-bold text-biz-ink">免責事項</h3>
            <ul className="mt-3 space-y-2">
              {DISCLAIMERS.map((item) => (
                <li
                  key={item.slice(0, 20)}
                  className="flex gap-2 text-xs leading-relaxed text-biz-muted"
                >
                  <span aria-hidden="true" className="shrink-0 text-biz-blue">
                    ・
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <FinalCta
        title="まずは媒体資料をご覧ください"
        lead={`掲載内容と料金をまとめています。ご請求・ご相談は無料で、この時点では契約になりません。プランは現在「${PLANS[0].name}」の1種類です。`}
      />
    </>
  );
}
