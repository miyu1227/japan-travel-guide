/**
 * PR掲載記事に出す広告表示。
 *
 * 景品表示法の指定告示（いわゆるステマ規制／2023年10月施行）で、
 * 事業者から対価を受けて制作した記事には、広告であることを
 * 一般消費者が判別できる形で表示する必要がある。
 * 規制の名宛人は広告主（掲載する店舗・施設）なので、
 * 表示が無いと掲載主にもリスクが及ぶ。
 *
 * 消費者庁の運用基準では
 *   ・文字が小さすぎる
 *   ・他の情報に埋もれている
 *   ・末尾にだけ置かれている
 * ものは「判別が困難」として不十分とされている。
 * そのため、記事の冒頭（タイトル付近）に置くこと。
 *
 * 読者は台湾・香港なので、繁体字を主にして日本語を併記する。
 */
export default function PrLabel({ className = "" }: { className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-stone-100 px-3 py-1 text-xs font-bold text-stone-600 ${className}`}
    >
      <span aria-hidden="true">📢</span>
      <span lang="zh-Hant">廣告・贊助內容</span>
      <span className="font-normal text-stone-500" lang="ja">
        （PR）
      </span>
    </p>
  );
}
