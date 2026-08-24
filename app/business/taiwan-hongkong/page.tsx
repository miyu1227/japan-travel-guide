import type { Metadata } from "next";
import { businessMetadata, breadcrumbJsonLd, DOWNLOAD_PATH } from "@/lib/business/site";
import {
  INSIGHTS,
  MARKET_DISCLAIMER,
  MARKET_STATS,
  REPEAT_ROWS,
  REPEAT_SOURCE,
  SOURCES,
} from "@/lib/business/market";
import FinalCta from "../components/FinalCta";
import PageHero from "../components/PageHero";
import { Card, CtaGroup, CtaLink, JsonLd, Section, SectionHeading } from "../components/ui";

export const metadata: Metadata = businessMetadata({
  path: "taiwan-hongkong",
  title: "台湾・香港が訪日集客に向いている理由｜Japan Trip Picks for Business",
  description:
    "台湾・香港からの訪日客は2025年で合わせて928万人、消費額は約1.7兆円。2回以上の訪日経験者が9割前後を占めます。公的統計をもとに、この市場の特徴と繁体字での情報発信の意味を整理しました。",
});

const crumbs = [{ name: "TOP", href: "/business" }, { name: "台湾・香港市場" }];

const jsonLd = breadcrumbJsonLd([
  { name: "TOP", path: "" },
  { name: "台湾・香港市場", path: "taiwan-hongkong" },
]);

function SourceNote({ id }: { id: keyof typeof SOURCES }) {
  const source = SOURCES[id];
  return (
    <p className="mt-3 text-[0.7rem] leading-relaxed text-biz-muted">
      出典：
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:text-biz-blue"
      >
        {source.label}
      </a>
    </p>
  );
}

export default function TaiwanHongKongPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        eyebrow="MARKET"
        title={
          <>
            <span className="biz-phrase">台湾・香港が</span>
            <span className="biz-phrase">訪日集客に向いている理由</span>
          </>
        }
        lead="なぜこの2つの市場に絞って情報発信をしているのか。公的統計で確認できる事実と、そこから考えられることを分けて整理しました。"
        crumbs={crumbs}
      />

      {/* ------------------------------------------------------- 市場規模 */}
      <Section tone="white">
        <SectionHeading
          eyebrow="SCALE"
          title="人数でも消費額でも、大きな訪日市場です"
          description="台湾は訪日消費額で中国に次ぐ2位。人数だけでなく、実際に使われている金額の面でも大きな市場になっています。"
        />

        <ul className="grid gap-4 sm:grid-cols-3">
          {MARKET_STATS.map((stat) => (
            <li key={stat.label} className="h-full">
              <Card className="flex h-full flex-col">
                <p className="flex items-baseline gap-1">
                  <span className="text-4xl leading-none font-bold text-biz-ink">{stat.value}</span>
                  {stat.unit && (
                    <span className="text-base font-bold text-biz-ink">{stat.unit}</span>
                  )}
                </p>
                <p className="mt-3 text-sm font-bold text-biz-blue">{stat.label}</p>
                <p className="mt-2 grow text-xs leading-relaxed text-biz-muted">{stat.detail}</p>
                <SourceNote id={stat.source} />
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------------ リピーター */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="REPEATERS"
          title="訪日経験者の割合が、他の市場より大きく高い"
          description="台湾・香港は「初めての日本」ではなく「何度目かの日本」を計画している人が中心です。"
        />

        {/* スマホでは表を積んで、横スクロールを起こさない */}
        <ul className="space-y-3 sm:hidden">
          {REPEAT_ROWS.map((row) => (
            <li key={row.market} className="rounded-2xl border border-white bg-white p-4">
              <p className="text-sm font-bold text-biz-ink">{row.market}</p>
              <dl className="mt-3 grid grid-cols-3 gap-2">
                <div className="min-w-0">
                  <dt className="text-[0.65rem] leading-tight font-bold text-biz-muted">2回以上</dt>
                  <dd className="mt-1 text-base font-bold text-biz-ink">{row.again}</dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-[0.65rem] leading-tight font-bold text-biz-muted">10回以上</dt>
                  <dd className="mt-1 text-base font-bold text-biz-ink">{row.tenPlus}</dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-[0.65rem] leading-tight font-bold text-biz-muted">
                    前回が1年以内
                  </dt>
                  <dd className="mt-1 text-base font-bold text-biz-ink">{row.withinYear}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>

        <div className="hidden overflow-x-auto rounded-2xl border border-white bg-white sm:block">
          <table className="w-full min-w-[34rem] border-collapse text-left">
            <caption className="sr-only">
              台湾・香港と全国籍平均の、訪日回数および前回来訪時期の比較
            </caption>
            <thead>
              <tr className="border-b border-biz-line">
                <th scope="col" className="p-4 text-sm font-bold text-biz-muted">
                  市場
                </th>
                <th scope="col" className="p-4 text-sm font-bold text-biz-ink">
                  訪日2回以上
                </th>
                <th scope="col" className="p-4 text-sm font-bold text-biz-ink">
                  訪日10回以上
                </th>
                <th scope="col" className="p-4 text-sm font-bold text-biz-ink">
                  前回の訪日が1年以内
                </th>
              </tr>
            </thead>
            <tbody>
              {REPEAT_ROWS.map((row) => (
                <tr key={row.market} className="border-b border-biz-line last:border-b-0">
                  <th scope="row" className="p-4 text-sm font-bold text-biz-muted">
                    {row.market}
                  </th>
                  <td className="p-4 text-sm font-bold text-biz-ink">{row.again}</td>
                  <td className="p-4 text-sm font-bold text-biz-ink">{row.tenPlus}</td>
                  <td className="p-4 text-sm font-bold text-biz-ink">{row.withinYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SourceNote id={REPEAT_SOURCE} />
      </Section>

      {/* -------------------------------------------------------- 読み方 */}
      <Section tone="white">
        <SectionHeading
          eyebrow="INSIGHTS"
          title="この数字から言えること"
          description="事実と、そこからの解釈を分けて書いています。解釈の部分は当サイトの見解です。"
        />

        <ol className="space-y-4">
          {INSIGHTS.map((insight, i) => (
            <li key={insight.title}>
              <Card>
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="flex size-7 items-center justify-center rounded-full bg-biz-blue-soft text-xs font-bold text-biz-blue"
                  >
                    {i + 1}
                  </span>
                  <span aria-hidden="true" className="text-lg">
                    {insight.emoji}
                  </span>
                </div>
                <h3 className="mt-3 text-base leading-snug font-bold text-biz-ink sm:text-lg">
                  {insight.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-biz-muted">{insight.body}</p>
                <p className="mt-3 border-t border-biz-line pt-3 text-[0.7rem] leading-relaxed text-biz-muted">
                  根拠：{insight.basis}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      {/* ------------------------------------------- 当サイトができること */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="OUR ROLE"
          title="Japan Trip Picks がしていること"
          description="この市場に向けて、繁体字で情報を出し続けている媒体です。"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <h3 className="text-base font-bold text-biz-ink">はじめから繁体字で書きます</h3>
            <p className="mt-2 text-sm leading-relaxed text-biz-muted">
              日本語記事を機械翻訳したものではなく、台湾・香港の読者が実際に使う言い回しで書きます。
              台湾と香港で言い方が変わる語は、必要に応じて併記します。
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-biz-ink">
              媒体の記事は、実際に足を運んで書いています
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-biz-muted">
              日本在住の運営者が現地を訪れて書いた記事で媒体を作っています。
              掲載記事については、ご提供いただいた写真と情報をもとに、同じ書き方で制作します。
              当方での撮影・取材訪問は承っておりません。
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-biz-ink">1店舗ごとに独立したページにします</h3>
            <p className="mt-2 text-sm leading-relaxed text-biz-muted">
              まとめ記事の中に埋もれるのではなく、そのお店だけのページを作ります。
              検索から直接そのページに届きます。
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-biz-ink">記事は消さずに残します</h3>
            <p className="mt-2 text-sm leading-relaxed text-biz-muted">
              買い切りで、サイトの運営期間中は掲載が続きます。
              SNSの投稿と違って流れて消えないため、あとから検索した人にも届きます。
            </p>
          </Card>
        </div>

        {/* 誇大表現にならないよう、言えないことを明示する */}
        <div className="mt-6 rounded-2xl border border-biz-line bg-white p-5 sm:p-6">
          <h3 className="text-sm font-bold text-biz-ink">この数字について、正直にお伝えすること</h3>
          <p className="mt-2 text-xs leading-relaxed text-biz-muted">{MARKET_DISCLAIMER}</p>
          <p className="mt-2 text-xs leading-relaxed text-biz-muted">
            また、当サイトは大規模媒体ではありません。媒体の規模や実際の検索順位・表示回数については、
            数字をそのまま媒体資料に記載していますので、そちらでご確認ください。
          </p>
          <div className="mt-5">
            <CtaGroup>
              <CtaLink href={DOWNLOAD_PATH}>媒体資料を請求する</CtaLink>
            </CtaGroup>
          </div>
        </div>
      </Section>

      <FinalCta
        title="台湾・香港向けの情報発信を始めませんか？"
        lead="まずは媒体資料で、掲載の内容と料金をご確認ください。ご相談だけでも構いません。"
      />
    </>
  );
}
