import type { Metadata } from "next";
import { businessMetadata } from "@/lib/business/site";
import PageHero from "../components/PageHero";
import { Card, CtaAnchor, CtaGroup, Section } from "../components/ui";

/**
 * インスタDMで返信をくれたお店に送る「店舗向け資料」の案内ページ。
 * PDFへ直接リンクするとインスタのリンクプレビューが文字化けするため、
 * このページのURLを送り、OGには資料の表紙を出す。
 * どこからもリンクせず、検索にも出さない（index: false・sitemap対象外）。
 */
const PDF_PATH = "/media/jtp-media-kit-shop-2026-11-hi3mm0.pdf";

export const metadata: Metadata = businessMetadata({
  path: "kit",
  title: "店舗掲載のご案内｜Japan Trip Picks",
  ogTitle: "店舗掲載のご案内｜Japan Trip Picks",
  description:
    "台湾・香港の旅行者に届く繁体字の日本旅行メディア Japan Trip Picks の店舗向け資料です。料金・掲載までの流れ・掲載基準をまとめています。",
  image: "/media/jtp-media-kit-shop-2026-11-cover.png",
  index: false,
});

const crumbs = [{ name: "TOP", href: "/business" }, { name: "店舗掲載のご案内" }];

const POINTS = [
  { emoji: "💴", title: "掲載料 10,000円（税込）", body: "お支払いは初回のみ。月額費用や更新料はかかりません。" },
  { emoji: "📝", title: "繁体字の専用ページ", body: "お店からいただく情報とお写真をもとに、1店舗ごとの記事を作成します。" },
  { emoji: "💬", title: "ご案内はDMで完結", body: "お電話やお打ち合わせは行っておらず、ご質問はDM（またはメール）で承ります。" },
];

export default function ShopKitPage() {
  return (
    <>
      <PageHero
        eyebrow="MEDIA KIT"
        title="店舗掲載のご案内"
        lead="料金・掲載までの流れ・掲載基準を資料（PDF・10ページ）にまとめました。下のボタンからご覧いただけます。"
        crumbs={crumbs}
      >
        <CtaGroup>
          <CtaAnchor href={PDF_PATH} external>
            資料を開く（PDF）
          </CtaAnchor>
        </CtaGroup>
      </PageHero>

      <Section tone="white">
        <ul className="grid gap-4 sm:grid-cols-3">
          {POINTS.map((item) => (
            <li key={item.title} className="h-full">
              <Card className="h-full">
                <span aria-hidden="true" className="text-2xl leading-none">
                  {item.emoji}
                </span>
                <h2 className="mt-3 text-base font-bold text-biz-ink">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-biz-muted">{item.body}</p>
              </Card>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm leading-relaxed text-biz-muted">
          掲載記事にはPR（広告）と表示します。集客効果・検索順位・売上は保証できません。ご不明な点は、DMにてお気軽にお問い合わせください。
        </p>
      </Section>
    </>
  );
}
