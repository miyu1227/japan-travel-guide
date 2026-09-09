"""記事1本ずつ「台湾・香港の人が実際に打つ語」と記事の見出しを突き合わせて、埋め漏れを出す。

Google のサジェスト（zh-TW / gl=tw と gl=hk）を種キーワードで引いて、
その語が記事の title / description / h1 / h2 / h3 に入ってるかを判定する。
使い方: python tools/kw/keyword_gap.py shodoshima 小豆島 [香川]
"""
import json, re, sys, urllib.parse, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
# 台湾・香港の人が地名のうしろに足しやすい語。サジェストに出んくても候補として見る。
SUFFIX = ["景點", "美食", "交通", "一日遊", "行程", "必買", "名產", "住宿", "推薦", "攻略", "門票", "地圖"]
NOISE = re.compile(r"日文|天氣|ptt|打工|工作|台北|台中|台南|高雄|中文|翻譯|股票|地震")


def suggest(q, gl="tw"):
    url = ("https://suggestqueries.google.com/complete/search?client=firefox"
           f"&hl=zh-TW&gl={gl}&q={urllib.parse.quote(q)}")
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.loads(r.read().decode("utf-8", "replace"))[1]


def headings(slug):
    p = ROOT / "app" / slug / "page.tsx"
    t = p.read_text(encoding="utf-8")
    got = []
    for m in re.finditer(r"<h([1-3])[^>]*>([\s\S]{0,200}?)</h\1>", t):
        got.append(re.sub(r"<[^>]+>", "", m.group(2)).strip())
    for key in ("title", "description"):
        m = re.search(key + r':\s*"([^"]+)"', t)
        if m:
            got.append(m.group(1))
    return got, t


def main():
    slug, seeds = sys.argv[1], sys.argv[2:]
    heads, body = headings(slug)
    blob = " ".join(heads)
    cands = []
    for seed in seeds:
        for gl in ("tw", "hk"):
            cands += suggest(seed, gl)
        cands += [f"{seed}{s}" for s in SUFFIX]
    seen, out = set(), []
    for c in cands:
        c = c.strip()
        if c in seen or NOISE.search(c):
            continue
        seen.add(c)
        key = c.replace(" ", "")
        out.append((c, key in blob.replace(" ", ""), key in body.replace(" ", "")))
    print(f"# {slug}  見出し{len(heads)}本")
    print("\n[見出しに入ってる]")
    for c, h, _ in out:
        if h:
            print("  ○", c)
    print("\n[本文にはあるが見出しに無い → h2/h3に昇格すれば取れる]")
    for c, h, b in out:
        if not h and b:
            print("  △", c)
    print("\n[記事にまったく無い → 節を足すか、そもそも対象外か判断する]")
    for c, h, b in out:
        if not h and not b:
            print("  ×", c)


if __name__ == "__main__":
    main()
