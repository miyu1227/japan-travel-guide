// 実績・掲載事例ページのカード定義。
// サムネイル・記事URLは本体サイトの単一情報源（lib/articles.ts）から引くので、
// ここには「どの記事を、事業者向けにどう説明するか」だけを書く。
//
// 追加するとき: SHOWCASE_ITEMS に1件足すだけ。画像・リンクは自動で解決される。
// PR掲載として制作した記事が増えたら sponsored: true を付ける。
// sponsored が1件でもあると、ページ側の見出しを「掲載事例」に切り替えられる。
import { ARTICLE_BY_SLUG, type Article } from "@/lib/articles";

/**
 * TOPのヒーローで「掲載イメージ」として見せる記事のslug。
 * 写真とタイトルは lib/articles.ts から引くので、ここを差し替えるだけで入れ替わる。
 */
export const HERO_ARTICLE_SLUG = "kansai-ramen";

export type ShowcaseCategory = "gourmet" | "cafe" | "spot" | "prep";

export const SHOWCASE_CATEGORIES: {
  id: ShowcaseCategory;
  label: string;
  emoji: string;
  description: string;
}[] = [
  {
    id: "gourmet",
    label: "グルメ記事",
    emoji: "🍜",
    description: "飲食店を、値段・行き方・注文の仕方まで含めて紹介する形の記事です。",
  },
  {
    id: "cafe",
    label: "カフェ記事",
    emoji: "☕",
    description: "写真の見え方が結果を左右するジャンル。内観・メニューを複数枚で見せます。",
  },
  {
    id: "spot",
    label: "観光記事",
    emoji: "🗼",
    description: "観光施設・季節の見どころを、アクセスと所要時間つきで紹介します。",
  },
  {
    id: "prep",
    label: "旅行準備記事",
    emoji: "✈️",
    description: "航空券・空港からの交通・通信など、渡航前に読まれる記事です。",
  },
];

export type ShowcaseItem = {
  /** 本体サイトの記事slug（lib/articles.ts に存在するもの） */
  slug: string;
  category: ShowcaseCategory;
  /** 事業者向けの日本語タイトル（本体の記事タイトルは繁体字のため） */
  jaTitle: string;
  /** この記事で何をしているかの説明（事業者向け） */
  note: string;
  /** PR掲載として制作した記事なら true */
  sponsored?: boolean;
};

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    slug: "ramen",
    category: "gourmet",
    jaTitle: "東京のラーメン店6軒を紹介する記事",
    note: "1記事に複数店をまとめる形。店ごとに写真・値段・最寄り駅を並べています。",
  },
  {
    slug: "tokyo-yakiniku",
    category: "gourmet",
    jaTitle: "品川の焼肉店を1軒で紹介する記事",
    note: "1店舗を単独で扱う形。ランチ価格や駅からの距離を先に書いています。",
  },
  {
    slug: "noge",
    category: "gourmet",
    jaTitle: "横浜・野毛のはしご酒を紹介する記事",
    note: "エリア単位でまとめた記事。予算の目安を明記して不安を減らす構成です。",
  },
  {
    slug: "kiyosumi-cafe",
    category: "cafe",
    jaTitle: "清澄白河のカフェ2軒を紹介する記事",
    note: "営業開始時間まで書く形。旅行者の行動時間に合わせた情報を入れています。",
  },
  {
    slug: "daikanyama-cafe",
    category: "cafe",
    jaTitle: "代官山のカフェ3軒を紹介する記事",
    note: "同じエリアの複数店を並べ、目的別に選べるようにした構成です。",
  },
  {
    slug: "bolt-uehara",
    category: "cafe",
    jaTitle: "代々木上原のカフェを1軒で紹介する記事",
    note: "ペット同伴可などの条件を前に出した、単独店舗の紹介例です。",
  },
  {
    slug: "skytree",
    category: "spot",
    jaTitle: "東京スカイツリーの攻略記事",
    note: "チケット予約・アクセス・撮影スポットをまとめた施設単独の記事です。",
  },
  {
    slug: "hakone",
    category: "spot",
    jaTitle: "箱根日帰りモデルコースの記事",
    note: "東京発の日帰り行程として組んだ記事。移動手段から書いています。",
  },
  {
    slug: "ajisai",
    category: "spot",
    jaTitle: "東京のあじさいスポットを紹介する記事",
    note: "季節の見どころを扱う形。時期が限られる情報の書き方の例です。",
  },
  {
    slug: "taiwan-japan-guide",
    category: "prep",
    jaTitle: "台湾から日本へ行く人向けの準備記事",
    note: "出発地別の記事。航空券・両替・免税制度など渡航前の情報をまとめています。",
  },
  {
    slug: "narita-airport-access",
    category: "prep",
    jaTitle: "成田空港から都心への交通手段を比べる記事",
    note: "手段ごとの所要時間と料金を比較する形。到着直後に読まれる記事です。",
  },
  {
    slug: "japan-esim",
    category: "prep",
    jaTitle: "日本旅行のeSIM準備を解説する記事",
    note: "通信手段の比較記事。旅行前の検討段階で読まれることを想定しています。",
  },
];

export type ResolvedShowcaseItem = ShowcaseItem & {
  article: Article;
  href: string;
  /** 本体サイト上の記事タイトル（繁体字） */
  originalTitle: string;
  image?: string;
};

/**
 * 本体サイトの記事データと突き合わせて、カード表示に必要な情報を揃える。
 * 存在しない slug は黙って落とさず、ビルド時に気づけるよう除外して返す。
 */
export function resolveShowcase(
  items: ShowcaseItem[] = SHOWCASE_ITEMS
): ResolvedShowcaseItem[] {
  return items.flatMap((item) => {
    const article = ARTICLE_BY_SLUG[item.slug];
    if (!article) return [];
    return [
      {
        ...item,
        // 記事データ側に印があれば、そちらを正とする
        sponsored: item.sponsored || article.sponsored,
        article,
        href: `/${article.slug}`,
        originalTitle: article.name,
        image: article.image,
      },
    ];
  });
}

/** PR掲載として制作した記事があるか。見出しの出し分けに使う。
 *  記事データ側の sponsored も見るので、記事に印を付ければ自動で反映される。 */
export const HAS_SPONSORED = SHOWCASE_ITEMS.some(
  (i) => i.sponsored || ARTICLE_BY_SLUG[i.slug]?.sponsored
);
