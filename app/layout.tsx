import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SiteFooter from "./components/SiteFooter";
import TravelOnly from "./components/TravelOnly";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.japantrippicks.com"),
  title: {
    default: "Japan Trip Picks｜台灣・香港旅客的日本旅遊指南",
    // サイト名はGoogleがWebSite構造化データから補うため、タイトルには付けない
    template: "%s",
  },
  description:
    "台灣・香港旅客專屬的日本自由行指南：必吃必食美食、咖啡廳甜點甜品、景點推薦推介、機場交通與上網卡eSIM。實際走過寫成的不踩雷攻略。",
  keywords: [
    // 台灣用語
    "日本自由行",
    "日本旅遊",
    "東京必吃",
    "東京拉麵推薦",
    "東京咖啡廳推薦",
    "東京景點推薦",
    "大阪美食推薦",
    "日本伴手禮",
    "台灣飛日本",
    // 香港用語
    "日本自由行攻略",
    "東京必食",
    "東京美食推介",
    "東京甜品推介",
    "大阪必食",
    "日本手信",
    "香港飛日本",
    "日本上網卡",
  ],
  authors: [{ name: "Japan Trip Picks" }],
  creator: "Japan Trip Picks",
  alternates: {
    canonical: "https://www.japantrippicks.com",
    // 同一URLで台湾・香港の両方を対象にする宣言。片方だけの地域シグナルにしない。
    languages: {
      "zh-Hant": "https://www.japantrippicks.com",
      "zh-TW": "https://www.japantrippicks.com",
      "zh-HK": "https://www.japantrippicks.com",
      "zh-MO": "https://www.japantrippicks.com",
      "x-default": "https://www.japantrippicks.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    url: "https://www.japantrippicks.com",
    siteName: "Japan Trip Picks",
    title: "Japan Trip Picks｜台灣・香港旅客的日本旅遊指南",
    description:
      "台灣・香港旅客專屬！必吃必食・必買・必去的日本旅遊推薦推介。拉麵、咖啡廳、甜品、景點全收錄。",
    images: [
      {
        url: "/poyapiyo-flag.png",
        width: 1200,
        height: 630,
        alt: "Japan Trip Picks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japan Trip Picks｜台灣・香港旅客的日本旅遊指南",
    description: "台灣・香港旅客專屬！日本旅遊必看・不踩雷指南",
    images: ["/poyapiyo-flag.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Japan Trip Picks",
  url: "https://www.japantrippicks.com",
  description: "台灣・香港旅客專屬的日本自由行指南。必吃必食美食、咖啡廳甜品、景點推薦推介。",
  inLanguage: ["zh-TW", "zh-HK"],
  publisher: {
    "@type": "Organization",
    name: "Japan Trip Picks",
    url: "https://www.japantrippicks.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.japantrippicks.com/poyapiyo-flag.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
 <head>
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-20J3CPG3MH"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-20J3CPG3MH');
    `}
  </Script>

  {/* /business（事業者向け）には広告を出さない */}
  <TravelOnly>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5774362091987331"
      crossOrigin="anonymous"
    />
  </TravelOnly>

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
  />
</head>
      <body className="min-h-full flex flex-col">
        <div className="flex-1">{children}</div>
        {/* /business は独自フッターを持つので、本体のフッターは出さない */}
        <TravelOnly>
          <SiteFooter />
        </TravelOnly>
      </body>
    </html>
  );
}
