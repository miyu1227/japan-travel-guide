import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel無料プランの画像変換（月5,000回）を使い切ると新しい画像が402で出なくなるため、
  // 変換をやめて public の元画像をそのまま配信する（2026-11-06）。
  images: { unoptimized: true },
  async headers() {
    return [
      {
        // 媒体資料PDF。代理店にURLで渡すだけの非公開資料なので検索には出さない。
        source: "/media/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
  async redirects() {
    return [
      // 公開後すぐ取り下げた行程記事。外部に貼られた場合に備えて総覧ページへ逃がす。
      { source: "/tokyo-5day-itinerary", destination: "/tokyo-spot", permanent: true },
      { source: "/kansai-5day-itinerary", destination: "/kansai", permanent: true },
    ];
  },
};

export default nextConfig;
