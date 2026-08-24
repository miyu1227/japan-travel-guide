// Japan Trip Picks for Business の単一情報源（サイト共通の定数とSEOヘルパー）。
// 連絡先・ナビ・OGP画像を変えたいときはこのファイルだけ直せばよい。
import type { Metadata } from "next";

export const ORIGIN = "https://www.japantrippicks.com";
export const BASE_PATH = "/business";

export const SITE_NAME = "Japan Trip Picks for Business";
export const PARENT_SITE_NAME = "Japan Trip Picks";
export const PARENT_SITE_URL = `${ORIGIN}/`;

/** OGP・構造化データで使う共通画像（本体サイトのロゴ画像を流用） */
export const OG_IMAGE = "/poyapiyo-flag.png";

export const CONTACT = {
  email: "poyapiyotonemuneko@gmail.com",
  tel: "050-6864-2628",
  telHref: "tel:+815068642628",
  operator: "Japan Trip Picks",
  postalCode: "106-0032",
  address: "東京都港区六本木3丁目16番12号 六本木KSビル5F",
} as const;

export type NavItem = { href: string; label: string };

/** ヘッダー・フッター共通のナビゲーション */
export const NAV: NavItem[] = [
  { href: "/business", label: "TOP" },
  { href: "/business/services", label: "サービス" },
  { href: "/business/pricing", label: "料金" },
  { href: "/business/works", label: "実績" },
  { href: "/business/faq", label: "FAQ" },
  { href: "/business/contact", label: "お問い合わせ" },
];

/** 相対パスから絶対URLを作る。canonical と OGP の url に使う。 */
export function bizUrl(path = ""): string {
  const clean = path.replace(/^\/+/, "");
  return clean ? `${ORIGIN}${BASE_PATH}/${clean}` : `${ORIGIN}${BASE_PATH}`;
}

type BizMetadataInput = {
  /** BASE_PATH からの相対パス。TOPは空文字 */
  path?: string;
  title: string;
  description: string;
  /** OGP用のタイトル。未指定なら title を使う */
  ogTitle?: string;
  image?: string;
  /** 検索結果に出したくないページで false にする */
  index?: boolean;
};

/**
 * ページ単位のSEO設定をここ1か所で組み立てる。
 * ページ側は businessMetadata({...}) を export するだけでよい。
 */
export function businessMetadata({
  path = "",
  title,
  description,
  ogTitle,
  image = OG_IMAGE,
  index = true,
}: BizMetadataInput): Metadata {
  const url = bizUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      // 日本国内の事業者向けなので日本語のみ。本体サイトの繁体字hreflangとは分ける。
      languages: { ja: url, "x-default": url },
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url,
      siteName: SITE_NAME,
      title: ogTitle ?? title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description,
      images: [image],
    },
  };
}

/** 全ページ共通で入れる Organization の構造化データ */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: PARENT_SITE_NAME,
  url: bizUrl(),
  logo: `${ORIGIN}${OG_IMAGE}`,
  description:
    "台湾・香港向けの訪日旅行メディア Japan Trip Picks を運営し、日本国内の店舗・ホテル・観光施設のPR掲載と繁体字コンテンツ制作を行っています。",
  areaServed: "JP",
  address: {
    "@type": "PostalAddress",
    postalCode: CONTACT.postalCode,
    addressCountry: "JP",
    addressRegion: "東京都",
    streetAddress: CONTACT.address,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: CONTACT.email,
    telephone: `+81-${CONTACT.tel.replace(/^0/, "").replace(/-/g, "-")}`,
    availableLanguage: ["ja"],
  },
  parentOrganization: {
    "@type": "Organization",
    name: PARENT_SITE_NAME,
    url: PARENT_SITE_URL,
  },
};

/** パンくずの構造化データを組み立てる */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: bizUrl(item.path),
    })),
  };
}
