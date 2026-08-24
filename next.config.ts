import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
