"""記事ごとに「本文に中身があるのに見出しで名乗ってない」語を、文脈つきで出す。"""
import re, glob, os, json, sys

KW = ["一日遊","行程","必買","名產","伴手禮","逛街","必逛","購物","打卡","親子",
      "下雨","室內","近郊","夜晚","夜景","車站","交通","船班","必食","推介","好去處"]

def parse(p):
    t = open(p, encoding="utf-8").read()
    heads = [re.sub(r"<[^>]+>", "", m.group(2)).strip()
             for m in re.finditer(r"<h([1-3])[^>]*>([\s\S]{0,200}?)</h\1>", t)]
    meta = " ".join(re.findall(r'(?:title|description|headline):\s*\n?\s*"([^"]+)"', t))
    # FAQ の質問文は FaqSection が h3 で描画するので、見出しとして数える
    heads += re.findall(r'\{\s*q:\s*"([^"]+)"', t)
    # JSXのテキスト部分をざっくり取る（タグと属性を落とす）
    body = re.sub(r"<[^>]+>", " ", t)
    return heads, meta, body, t

rows = []
for p in sorted(glob.glob("app/*/page.tsx")):
    slug = p.split(os.sep)[1]
    if slug in {"business","about","contact","privacy","promotion","api","components"}: continue
    heads, meta, body, raw = parse(p)
    hblob = " ".join(heads) + " " + meta
    for k in KW:
        nb = body.count(k)
        if nb and k not in hblob:
            ctx = []
            for m in re.finditer(re.escape(k), body):
                s = re.sub(r"\s+", " ", body[max(0, m.start()-40):m.start()+40]).strip()
                ctx.append(s)
                if len(ctx) >= 2: break
            rows.append({"slug": slug, "kw": k, "n": nb, "ctx": ctx, "h2": [h for h in heads][:12]})

if "--json" in sys.argv:
    print(json.dumps(rows, ensure_ascii=False, indent=1))
else:
    from collections import Counter
    c = Counter(r["kw"] for r in rows)
    print("語ごとの該当記事数（本文にあるが見出しに無い）")
    for k, n in c.most_common():
        print(f"  {k:<6} {n:>2}本  例: {', '.join(r['slug'] for r in rows if r['kw']==k)[:110]}")
    print(f"\n合計 {len(rows)} 箇所 / 記事 {len(set(r['slug'] for r in rows))}本")
