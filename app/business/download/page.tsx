import type { Metadata } from "next";
import { businessMetadata, breadcrumbJsonLd, CONTACT } from "@/lib/business/site";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import { Card, CtaAnchor, CtaGroup, CtaLink, JsonLd, Section, SectionHeading } from "../components/ui";

export const metadata: Metadata = businessMetadata({
  path: "download",
  title: "媒体資料の請求｜Japan Trip Picks for Business",
  description:
    "台湾・香港向け訪日旅行メディア Japan Trip Picks の媒体資料をお送りします。掲載内容・料金・お申し込みの流れをまとめた資料です。ご請求・ご相談は無料です。",
});

const crumbs = [{ name: "TOP", href: "/business" }, { name: "資料請求" }];

const jsonLd = breadcrumbJsonLd([
  { name: "TOP", path: "" },
  { name: "資料請求", path: "download" },
]);

/** 媒体資料に載せている内容。何が届くのかを先に見せる。 */
const CONTENTS = [
  { emoji: "📊", title: "台湾・香港市場のデータ", body: "訪日客数・消費額・リピーター比率を公的統計の出典つきでまとめています。" },
  { emoji: "📈", title: "媒体の実績", body: "公開中の記事数、繁体字検索での平均掲載順位、月間の検索表示回数を記載しています。" },
  { emoji: "📝", title: "掲載ページの内容", body: "実際にどのような記事になるか、含まれるものを一覧にしています。" },
  { emoji: "💴", title: "掲載プランと料金", body: "プランの料金とオプション料金を記載しています。サイト上では公開していません。" },
  { emoji: "🗓", title: "お申し込みからの流れ", body: "ご連絡から公開までの手順と、制作にかかる期間の目安です。" },
  { emoji: "📋", title: "掲載基準・免責事項", body: "お受けできない内容と、保証の範囲を明記しています。" },
];

export default function DownloadPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        eyebrow="MEDIA KIT"
        title="媒体資料をお送りします"
        lead="掲載内容・料金・お申し込みの流れをまとめた資料です。ご請求は無料で、この時点では契約になりません。営業のご連絡を繰り返しお送りすることもありません。"
        crumbs={crumbs}
      />

      {/* --------------------------------------------------- 資料の中身 */}
      <Section tone="white">
        <SectionHeading
          eyebrow="CONTENTS"
          title="資料に載せていること"
          description="料金と媒体の実績は、サイト上では公開しておらず、この資料でご確認いただけます。"
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTENTS.map((item) => (
            <li key={item.title} className="h-full">
              <Card className="h-full">
                <span aria-hidden="true" className="text-2xl leading-none">
                  {item.emoji}
                </span>
                <h3 className="mt-3 text-base font-bold text-biz-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-biz-muted">{item.body}</p>
              </Card>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl border border-biz-line bg-biz-sand p-5 sm:p-6">
          <h3 className="text-sm font-bold text-biz-ink">広告代理店さまへ</h3>
          <p className="mt-2 text-xs leading-relaxed text-biz-muted">
            代理店さま向けには、お取り扱いの条件を記載した別の資料をご用意しています。
            下のフォームで「広告代理店向けの資料」をお選びください。
          </p>
        </div>
      </Section>

      {/* ------------------------------------------------------ フォーム */}
      <Section tone="soft" id="form">
        <SectionHeading
          eyebrow="REQUEST"
          title="資料請求フォーム"
          description="そのまま送信できます。受付の控えを自動でお送りし、担当者より資料をお送りします。"
        />
        <div className="rounded-2xl border border-white bg-white p-5 sm:p-7">
          <ContactForm variant="document" />
        </div>

        <div className="mt-6 rounded-2xl border border-white bg-white p-5 sm:p-6">
          <h3 className="text-sm font-bold text-biz-ink">メール・お電話でのご請求も承ります</h3>
          <p className="mt-2 text-xs leading-relaxed text-biz-muted">
            店舗・企業名とご担当者名を添えてご連絡ください。折り返し資料をお送りします。
          </p>
          <div className="mt-4">
            <CtaGroup>
              <CtaAnchor href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("【資料請求】Japan Trip Picks for Business")}`} variant="secondary">
                <span aria-hidden="true">✉</span>
                メールで請求する
              </CtaAnchor>
              <CtaAnchor href={CONTACT.telHref} variant="secondary">
                <span aria-hidden="true">☎</span>
                {CONTACT.tel}
              </CtaAnchor>
            </CtaGroup>
          </div>
        </div>
      </Section>

      {/* ----------------------------------------------------- 関連導線 */}
      <Section tone="white">
        <div className="rounded-2xl border border-biz-line bg-biz-blue-soft p-5 sm:p-6">
          <h2 className="text-base font-bold text-biz-ink">資料を待たずに知りたい方へ</h2>
          <p className="mt-2 text-sm leading-relaxed text-biz-muted">
            掲載プランに含まれるものと、台湾・香港市場のデータは、サイト上でもご確認いただけます。
          </p>
          <div className="mt-5">
            <CtaGroup>
              <CtaLink href="/business/pricing" variant="secondary">
                掲載プランの内容を見る
              </CtaLink>
              <CtaLink href="/business/taiwan-hongkong" variant="secondary">
                台湾・香港市場のデータを見る
              </CtaLink>
              <CtaLink href="/business/works" variant="secondary">
                制作している記事の例を見る
              </CtaLink>
            </CtaGroup>
          </div>
        </div>
      </Section>
    </>
  );
}
