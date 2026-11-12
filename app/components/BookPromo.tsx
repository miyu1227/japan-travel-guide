import Image from "next/image";
import { TOKYO_BOOK } from "@/lib/book";

/**
 * 東京の記事の下に出す、電子書籍（楽天Kobo）の紹介枠。
 * lib/book.ts の url が空なら本番では出さない。開発サーバーでは見た目確認用に出す。
 */
export default function BookPromo({ slug }: { slug: string }) {
  const book = TOKYO_BOOK;
  if (!book.slugs.includes(slug)) return null;
  const isDev = process.env.NODE_ENV === "development";
  if (!book.url && !isDev) return null;

  return (
    <a
      href={book.url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-8 bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50 border-2 border-violet-200 rounded-3xl p-4 shadow-md hover:shadow-lg hover:border-violet-300 transition-all"
    >
      {!book.url && (
        <p className="text-[10px] font-bold text-red-500 mb-2">※開発中のプレビュー（Kobo の URL を入れるまで本番には出ません）</p>
      )}
      <div className="flex gap-4 items-center">
        <div className="relative w-20 sm:w-24 aspect-[2/3] shrink-0 rounded-lg overflow-hidden shadow-md border border-white -rotate-2">
          <Image src={book.cover} alt={book.title} fill sizes="96px" className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-violet-700 bg-white/80 px-2 py-0.5 rounded-full mb-1.5 shadow-sm">
            📕 電子書 ・ 樂天Kobo
          </span>
          <p className="text-sm sm:text-base font-black text-stone-800 leading-snug">
            《{book.title}》
          </p>
          <p className="text-[11px] sm:text-xs text-stone-600 leading-snug mt-1">
            {book.subtitle}。把東京的店整理成一區一章，還有路線圖、一日行程和指著說就通的日文，離線也能看。
          </p>
          <span className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-white bg-gradient-to-r from-violet-500 to-pink-500 px-3 py-1.5 rounded-full shadow-sm">
            {book.price}・看看這本書 <span>→</span>
          </span>
        </div>
      </div>
    </a>
  );
}
