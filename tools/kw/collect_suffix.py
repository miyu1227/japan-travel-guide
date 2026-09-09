"""台湾・香港のGoogleサジェストを地名・意図ごとに引いて、「日本旅行のときに足される語」を頻度順に出す。"""
import json, re, sys, time, urllib.parse, urllib.request, collections
from concurrent.futures import ThreadPoolExecutor

SEEDS_PLACE = ["東京","大阪","京都","神戶","北海道","沖繩","名古屋","福岡","橫濱","箱根","奈良","札幌",
               "小豆島","香川","高知","彥根","宇都宮","山梨","和歌山","上高地","輕井澤",
               "下北澤","代官山","清澄白河","中目黑","自由之丘","新大久保","二子玉川","澀谷","銀座",
               "淺草","新宿","池袋","上野","吉祥寺","表參道","難波","心齋橋","梅田"]
SEEDS_INTENT = ["日本自由行","日本旅遊","日本機票","日本上網","日本換錢","日本退稅","日本行程","日本住宿",
                "日本必買","日本美食","日本交通","日本天氣","日本藥妝","日本伴手禮","日本咖啡廳",
                "東京住宿","東京交通","大阪住宿","JR PASS","日本 esim","成田機場","羽田機場","關西機場"]

def suggest(args):
    q, gl = args
    url = ("https://suggestqueries.google.com/complete/search?client=firefox"
           f"&hl=zh-TW&gl={gl}&q={urllib.parse.quote(q)}")
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            return q, json.loads(r.read().decode("utf-8", "replace"))[1]
    except Exception:
        return q, []

def main():
    jobs = [(s, gl) for s in SEEDS_PLACE + SEEDS_INTENT for gl in ("tw", "hk")]
    pool = []
    with ThreadPoolExecutor(max_workers=6) as ex:
        for q, res in ex.map(suggest, jobs):
            for r in res:
                pool.append((q, r.strip()))
    # 種を取り除いて「足された語」だけにする
    cnt = collections.Counter()
    examples = collections.defaultdict(set)
    for seed, phrase in pool:
        tail = phrase.replace(seed, "", 1).strip()
        tail = re.sub(r"^[ 　]+", "", tail)
        if not tail or len(tail) > 8:
            continue
        cnt[tail] += 1
        if len(examples[tail]) < 3:
            examples[tail].add(phrase)
    print(f"# 種{len(set(s for s,_ in jobs))}語 x 台湾/香港 = {len(jobs)}リクエスト、候補{len(pool)}件")
    print(f"{'足される語':<10} {'出現':>4}  例")
    for tail, n in cnt.most_common(70):
        print(f"{tail:<12} {n:>4}  {' / '.join(list(examples[tail])[:3])}")
    with open("tools/kw/out_suffix.txt", "w", encoding="utf-8") as f:
        for tail, n in cnt.most_common():
            f.write(f"{tail}\t{n}\t{' / '.join(list(examples[tail])[:3])}\n")
    # 生の候補も全部保存
    with open("tools/kw/out_raw.txt", "w", encoding="utf-8") as f:
        for seed, phrase in sorted(set(pool)):
            f.write(f"{seed}\t{phrase}\n")
    print(f"\n保存: tools/kw/out_suffix.txt / tools/kw/out_raw.txt（生候補 {len(set(pool))}件）")

main()
