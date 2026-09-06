"""Search Console から japantrippicks 全ページの順位を取り出して CSV/表にする。

認証は kentei-lab プロジェクトの daily-report サービスアカウント（tools/gsc/sa_key.json、git管理外）。
Search Console 側で japantrippicks.com のフル権限ユーザーとして登録済み。
使い方: python tools/gsc/gsc_rankings.py [--days 28] [--country twn,hkg]
"""
import argparse, csv, datetime as dt, json, os, sys
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build

HERE = Path(__file__).resolve().parent
SA_KEY = HERE / "sa_key.json"  # kentei-lab の daily-report サービスアカウント鍵（git管理外）
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
SITE_CANDIDATES = ["sc-domain:japantrippicks.com", "https://www.japantrippicks.com/"]


def creds():
    return service_account.Credentials.from_service_account_file(str(SA_KEY), scopes=SCOPES)


def pick_site(svc):
    sites = [s["siteUrl"] for s in svc.sites().list().execute().get("siteEntry", [])]
    for cand in SITE_CANDIDATES:
        if cand in sites:
            return cand
    sys.exit(f"Search Console に japantrippicks のプロパティが見つからない: {sites}")


def query(svc, site, start, end, dims, filters=None, row_limit=25000):
    rows, start_row = [], 0
    while True:
        body = {"startDate": start, "endDate": end, "dimensions": dims,
                "rowLimit": row_limit, "startRow": start_row}
        if filters:
            body["dimensionFilterGroups"] = [{"filters": filters}]
        r = svc.searchanalytics().query(siteUrl=site, body=body).execute()
        got = r.get("rows", [])
        rows += got
        if len(got) < row_limit:
            return rows
        start_row += row_limit


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=int, default=28)
    ap.add_argument("--country", default="", help="ISO3 を , 区切り。例 twn,hkg。空なら全世界")
    ap.add_argument("--out", default=str(HERE / "out"))
    a = ap.parse_args()

    svc = build("searchconsole", "v1", credentials=creds())
    site = pick_site(svc)
    end = dt.date.today() - dt.timedelta(days=3)  # GSC は直近2〜3日が未確定
    cur_s, cur_e = end - dt.timedelta(days=a.days - 1), end
    prev_s, prev_e = cur_s - dt.timedelta(days=a.days), cur_s - dt.timedelta(days=1)
    f = lambda s, e: (s.isoformat(), e.isoformat())

    countries = [c.strip() for c in a.country.split(",") if c.strip()]
    filt = None
    if countries:
        filt = [{"dimension": "country", "operator": "equals", "expression": c} for c in countries]

    def by_page(s, e):
        out = {}
        if countries:
            for c in countries:
                for r in query(svc, site, s, e, ["page"], [{"dimension": "country", "operator": "equals", "expression": c}]):
                    p = r["keys"][0]
                    d = out.setdefault(p, {"clicks": 0, "impr": 0, "pos_w": 0.0})
                    d["clicks"] += r["clicks"]; d["impr"] += r["impressions"]; d["pos_w"] += r["position"] * r["impressions"]
        else:
            for r in query(svc, site, s, e, ["page"]):
                out[r["keys"][0]] = {"clicks": r["clicks"], "impr": r["impressions"], "pos_w": r["position"] * r["impressions"]}
        for d in out.values():
            d["pos"] = d["pos_w"] / d["impr"] if d["impr"] else None
        return out

    cur, prev = by_page(*f(cur_s, cur_e)), by_page(*f(prev_s, prev_e))

    # ページごとの上位クエリ（順位付き）
    top_q = {}
    for c in (countries or [None]):
        fl = [{"dimension": "country", "operator": "equals", "expression": c}] if c else None
        for r in query(svc, site, *f(cur_s, cur_e), ["page", "query"], fl):
            p, q = r["keys"]
            top_q.setdefault(p, []).append((q, r["impressions"], r["clicks"], r["position"]))
    for p in top_q:
        top_q[p].sort(key=lambda x: -x[1])

    outdir = Path(a.out); outdir.mkdir(parents=True, exist_ok=True)
    tag = ("_".join(countries) or "all") + f"_{a.days}d"
    pages_csv = outdir / f"pages_{tag}.csv"
    with pages_csv.open("w", newline="", encoding="utf-8-sig") as fh:
        w = csv.writer(fh)
        w.writerow(["page", "pos_now", "pos_prev", "pos_diff", "clicks_now", "clicks_prev", "impr_now", "impr_prev", "top_query", "top_query_pos"])
        for p, d in sorted(cur.items(), key=lambda kv: -kv[1]["impr"]):
            pv = prev.get(p, {})
            tq = top_q.get(p, [(None, 0, 0, None)])[0]
            w.writerow([p.replace("https://www.japantrippicks.com", ""),
                        round(d["pos"], 1) if d["pos"] else "",
                        round(pv["pos"], 1) if pv.get("pos") else "",
                        round(d["pos"] - pv["pos"], 1) if d["pos"] and pv.get("pos") else "",
                        d["clicks"], pv.get("clicks", 0), d["impr"], pv.get("impr", 0), tq[0], round(tq[3], 1) if tq[3] else ""])
    q_csv = outdir / f"queries_{tag}.csv"
    with q_csv.open("w", newline="", encoding="utf-8-sig") as fh:
        w = csv.writer(fh)
        w.writerow(["page", "query", "impressions", "clicks", "position"])
        for p, qs in top_q.items():
            for q in qs[:15]:
                w.writerow([p.replace("https://www.japantrippicks.com", ""), *q])

    tot_i = sum(d["impr"] for d in cur.values()); tot_c = sum(d["clicks"] for d in cur.values())
    avg = sum(d["pos_w"] for d in cur.values()) / tot_i if tot_i else 0
    ptot_i = sum(d["impr"] for d in prev.values()); pavg = sum(d["pos_w"] for d in prev.values()) / ptot_i if ptot_i else 0
    print(f"site={site} period={cur_s}..{cur_e} vs {prev_s}..{prev_e} country={countries or 'all'}")
    print(f"avg_pos {avg:.1f} (prev {pavg:.1f})  clicks {tot_c}  impr {tot_i}  pages {len(cur)}")
    print(f"wrote {pages_csv}\nwrote {q_csv}")


if __name__ == "__main__":
    main()
