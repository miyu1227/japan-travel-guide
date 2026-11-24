/**
 * お店・スポットを Google マップで開くボタン。
 *
 * サイトからその人の「保存済み」に直接入れることは Google 側が許していないので、
 * マップでその場所を開いて、☆（儲存）を1回押してもらう形にしている。
 *
 * 記事の住所は繁体字で書いてある（縣・區・澀谷 など）ので、
 * マップ検索に渡す前に日本の表記へ戻す。表示する住所はそのまま。
 */

const TO_JA: Record<string, string> = {
  縣: "県",
  區: "区",
  澀: "渋",
  黑: "黒",
  橫: "横",
  廳: "庁",
  驛: "駅",
  溫: "温",
  龜: "亀",
  鄉: "郷",
  稻: "稲",
  瀨: "瀬",
  與: "与",
  帶: "帯",
  綠: "緑",
  樓: "階",
  內: "内",
  劍: "剣",
  廣: "広",
  國: "国",
  營: "営",
};

function toJaQuery(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/[縣區澀黑橫廳驛溫龜鄉稻瀨與帶綠樓內劍廣國營]/g, (c) => TO_JA[c] ?? c)
    .replace(/[（(][^）)]*(周邊|一帶|詳見|多店舗)[^）)]*[）)]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function googleMapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(toJaQuery(query))}`;
}

type Props = {
  /** 店名・スポット名（記事の見出しのまま渡してよい） */
  name?: string;
  /** 住所（記事の表記のまま渡してよい） */
  address?: string;
  /** 自動の検索語が合わないときだけ、日本語の検索語をそのまま指定する */
  q?: string;
  /** チェーン店など、1か所に決まらないとき */
  nearby?: boolean;
};

export default function MapButton({ name = "", address = "", q, nearby = false }: Props) {
  const query = q ?? `${name} ${address}`;
  return (
    <a
      href={googleMapsUrl(query)}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 hover:bg-emerald-100"
    >
      <span aria-hidden="true">📍</span>
      <span>{nearby ? "用Google地圖找附近的店" : "用Google地圖打開・收藏"}</span>
    </a>
  );
}
