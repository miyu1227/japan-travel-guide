// 繁体字の電子書籍（楽天Kobo）の紹介枠の設定。
// url が空のあいだは本番では表示しない（開発サーバーでは見た目確認用に出す）。
// Kobo で発売したら url に商品ページのURLを入れるだけで、下の記事すべてに枠が出る。
export const TOKYO_BOOK = {
  url: "",
  title: "東京自由行・在地人散步地圖",
  subtitle: "實際去過的80個地方與一日路線",
  price: "NT$199",
  cover: "/book/tokyo-cover.jpg",
  // 本に載っている東京の記事（＋東京旅行の準備記事）
  slugs: [
    "taiwan-japan-guide", "hongkong-japan-guide", "haneda-airport-access", "narita-airport-access",
    "tokyo-subway-ticket", "japan-esim",
    "gotcha-shibuya", "shibuya-cafe", "shibuya-gohan", "shibuya-yakiniku", "yoyogi-park-cafe", "meiji-jingu",
    "daikanyama-cafe", "nakameguro-cafe", "gakugeidaigaku-cafe", "cafe", "futakotamagawa",
    "shimokitazawa-cafe", "shimokitazawa-gohan", "bolt-uehara", "ikejiri-cafe",
    "ginza-cafe", "ginza-apollo", "roppongi-cafe", "museum", "tokyo-tower",
    "ueno-zoo", "skytree", "kiyosumi-cafe",
    "tocho-projection-mapping", "shin-okubo", "tokyo-yakiniku",
    "otaguro-park", "showa-kinen-park", "tokyo-disney-around",
    "ajisai", "koyo", "spot", "artbar-tokyo",
    "ramen", "tokyo-cookies", "takeout-cake", "mister-donut",
    "hakone", "enoshima-kamakura", "noge",
  ],
};
