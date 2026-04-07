import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
    template: "%s | Japan Trip Picks",
  },
  description:
    "台灣・香港旅客專屬！必吃・必買・必去的日本旅遊推薦。拉麵、咖啡廳、景點、箱根一日遊など不踩雷實用指南。",
  keywords: [
    "日本旅遊",
    "台灣旅客",
    "香港旅客",
    "日本拉麵推薦",
    "東京咖啡推薦",
    "箱根一日遊",
    "自由之丘咖啡",
    "東京野餐",
    "新宿御苑",
  ],
  authors: [{ name: "Japan Trip Picks" }],
  creator: "Japan Trip Picks",
  alternates: {
    canonical: "https://www.japantrippicks.com",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://www.japantrippicks.com",
    siteName: "Japan Trip Picks",
    title: "Japan Trip Picks｜台灣・香港旅客的日本旅遊指南",
    description:
      "台灣・香港旅客專屬！必吃・必買・必去的日本旅遊推薦。拉麵、咖啡廳、景點全收錄。",
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
  description: "台灣・香港旅客專屬的日本旅遊指南",
  inLanguage: "zh-TW",
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
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
 <head>
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-KEDBF59QEX"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KEDBF59QEX');
    `}
  </Script>

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
  />
</head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
