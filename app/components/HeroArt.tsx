import Image from "next/image";
import type { ReactNode } from "react";

/**
 * トップのヒーローのイラスト（案A・スタンプ帳）。
 *
 * ぽやぴよは描き起こさず、公式のポーズ画像（/poyapiyo-stand.png）をそのまま貼る。
 * 周りの日本モチーフだけ、ぽやぴよの線に合わせて（太い黒・ベタ塗り・角丸）SVGで描いてある。
 * 位置は 700×620 の枠を基準にした比率なので、枠が縮んでも配置が崩れない。
 */

const INK = "#1B1B1B";
/** 鳥居・提灯・ラーメン鉢に使う朱色。本文の red-500 とは別に持つ */
const ACCENT = "#E4593F";

const MOTIFS: Record<string, ReactNode> = {
  torii: (
    <g stroke={INK} strokeWidth="6" strokeLinejoin="round" fill={ACCENT}>
      <path d="M25 30 H31 L36 90 H20 Z" />
      <path d="M75 30 H69 L64 90 H80 Z" />
      <rect x="24" y="46" width="52" height="9" rx="2" />
      <path d="M7 18 H93 L86 31 H14 Z" />
    </g>
  ),
  fuji: (
    <>
      <path d="M6 84 L36 32 Q50 12 64 32 L94 84 Z" fill="#A9CBE8" stroke={INK} strokeWidth="7" strokeLinejoin="round" />
      <path
        d="M35 34 L44 43 L52 34 L60 44 L65 39 L57 26 Q50 16 43 26 Z"
        fill="#FFFFFF"
        stroke={INK}
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </>
  ),
  ramen: (
    <>
      <circle cx="34" cy="40" r="11" fill="#FFFFFF" stroke={INK} strokeWidth="5" />
      <circle cx="34" cy="40" r="4" fill="#EFA33C" />
      <rect x="50" y="26" width="18" height="18" rx="3" fill="#2E3138" stroke={INK} strokeWidth="5" />
      <path d="M10 46 H90 Q88 84 50 86 Q12 84 10 46 Z" fill={ACCENT} stroke={INK} strokeWidth="7" strokeLinejoin="round" />
      <path d="M22 64 q7 -8 14 0 t14 0 t14 0" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
    </>
  ),
  sakura: (
    <g transform="translate(50 50)">
      <g stroke={INK} strokeWidth="6" fill="#F7C3D2">
        <ellipse cx="0" cy="-25" rx="13" ry="19" />
        <ellipse cx="0" cy="-25" rx="13" ry="19" transform="rotate(72)" />
        <ellipse cx="0" cy="-25" rx="13" ry="19" transform="rotate(144)" />
        <ellipse cx="0" cy="-25" rx="13" ry="19" transform="rotate(216)" />
        <ellipse cx="0" cy="-25" rx="13" ry="19" transform="rotate(288)" />
      </g>
      <circle r="8" fill="#FBECA1" stroke={INK} strokeWidth="5" />
    </g>
  ),
  onigiri: (
    <>
      <path
        d="M50 14 Q58 14 62 22 L86 66 Q92 80 76 80 H24 Q8 80 14 66 L38 22 Q42 14 50 14 Z"
        fill="#FFFFFF"
        stroke={INK}
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path
        d="M32 54 H68 V72 Q68 80 60 80 H40 Q32 80 32 72 Z"
        fill="#2E3138"
        stroke={INK}
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </>
  ),
  lantern: (
    <>
      <rect x="34" y="10" width="32" height="9" rx="3" fill={INK} />
      <path
        d="M50 19 C76 19 84 36 84 50 C84 64 76 81 50 81 C24 81 16 64 16 50 C16 36 24 19 50 19 Z"
        fill={ACCENT}
        stroke={INK}
        strokeWidth="7"
      />
      <g stroke={INK} strokeWidth="4" opacity="0.35">
        <path d="M21 38 H79" />
        <path d="M17 50 H83" />
        <path d="M21 62 H79" />
      </g>
      <rect x="34" y="79" width="32" height="9" rx="3" fill={INK} />
    </>
  ),
  coffee: (
    <>
      <path d="M70 40 Q88 40 88 52 Q88 64 70 64" fill="none" stroke={INK} strokeWidth="7" strokeLinecap="round" />
      <path d="M14 34 H72 V60 Q72 80 43 80 Q14 80 14 60 Z" fill="#FFFFFF" stroke={INK} strokeWidth="7" strokeLinejoin="round" />
      <path d="M21 41 H65 V48 Q65 56 43 56 Q21 56 21 48 Z" fill="#B5784A" />
    </>
  ),
};

/** 700×620 の枠に対する位置（%）。デザインの座標をそのまま比率にしてある。 */
const STICKERS = [
  { id: "torii", left: "5.71%", top: "10.00%", rotate: -8 },
  { id: "fuji", left: "36.00%", top: "0.97%", rotate: 5 },
  { id: "ramen", left: "67.14%", top: "8.71%", rotate: 9 },
  { id: "sakura", left: "80.29%", top: "42.26%", rotate: -6 },
  { id: "coffee", left: "66.86%", top: "75.81%", rotate: 7 },
  { id: "onigiri", left: "29.43%", top: "80.97%", rotate: -5 },
  { id: "lantern", left: "1.14%", top: "48.39%", rotate: 6 },
];

export function Motif({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {MOTIFS[id]}
    </svg>
  );
}

/** 背景に薄く散らす桜。スマホでは切れて汚くなるので出さない。 */
const PETALS = [
  { x: 60, y: 40, s: 34 },
  { x: 1358, y: 58, s: 30 },
  { x: 250, y: 698, s: 28 },
  { x: 1176, y: 710, s: 32 },
  { x: 702, y: 24, s: 26 },
  { x: 38, y: 418, s: 26 },
  { x: 1398, y: 428, s: 28 },
  { x: 598, y: 716, s: 30 },
  { x: 938, y: 704, s: 26 },
  { x: 118, y: 656, s: 24 },
];

export function HeroPetals() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {PETALS.map((p) => (
        <g key={`${p.x}-${p.y}`} transform={`translate(${p.x} ${p.y}) scale(${p.s / 100})`} opacity="0.34">
          {MOTIFS.sakura}
        </g>
      ))}
    </svg>
  );
}

export default function HeroArt() {
  return (
    <div className="relative mx-auto aspect-[700/620] w-full max-w-[700px]">
      {/* ぽやぴよの後ろの光 */}
      <div className="absolute left-[16.86%] top-[12.26%] w-[66.57%] rounded-full bg-[#FCEFB8]" style={{ aspectRatio: "1" }} />

      <div className="absolute left-[25.71%] top-[24.19%] w-[48.57%]">
        <Image
          src="/poyapiyo-stand.png"
          alt="ぽやぴよ"
          width={560}
          height={579}
          sizes="(max-width: 1024px) 45vw, 340px"
          className="h-auto w-full"
          priority
        />
      </div>

      {STICKERS.map((s) => (
        <div
          key={s.id}
          className="absolute grid w-[13.71%] place-items-center rounded-[18%] border-[3px] border-[#1B1B1B] bg-white shadow-[0_5px_0_rgba(27,27,27,0.12)] sm:border-4"
          style={{ left: s.left, top: s.top, aspectRatio: "1", transform: `rotate(${s.rotate}deg)` }}
        >
          <Motif id={s.id} className="w-[58%]" />
        </div>
      ))}
    </div>
  );
}
