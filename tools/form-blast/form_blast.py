#!/usr/bin/env python
"""直営業リストのお問い合わせフォームを、記入 → 確認 → 送信 → 日付書き戻しまで回す。

  python tools/form-blast/form_blast.py fill        # 記入するだけ（1件も送らない）
  python tools/form-blast/form_blast.py preview     # 記入結果を1枚のHTMLで確認
  python tools/form-blast/form_blast.py send --yes  # 送信（--yes が無いと何もしない）

送信は send を叩いたときだけ。fill と preview は絶対に送らない。
"""
import argparse
import datetime
import json
import re
import sys
from pathlib import Path

try:                                   # 中国語簡体字などが混ざると cp932 のコンソールで落ちる
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

sys.path.insert(0, str(Path(__file__).resolve().parent))
import lib_fields
import lib_sheet

ROOT = Path(__file__).resolve().parent
# キャンペーンごとに結果とスクショを分ける（行番号がシート間で衝突するため）
WORK = ROOT / lib_sheet.CAMPAIGN if lib_sheet.CAMPAIGN else ROOT
SHOTS = WORK / "out" / "shots"
RESULT = WORK / "data" / "results.json"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")

EXTRACT_JS = (ROOT / "extract.js").read_text(encoding="utf-8")


def choose_form(info):
    """複数フォームがあるページで、問い合わせ本体らしいほうを選ぶ。"""
    best, score_best = None, -1
    for fm in info["forms"]:
        text = " ".join(lib_fields.describe(f) for f in fm["fields"])
        names = " ".join(f["name"] for f in fm["fields"])
        if re.search(r"検索|search", names, re.I) and fm["count"] <= 2:
            continue
        score = fm["count"]
        if any(f["tag"] == "textarea" for f in fm["fields"]):
            score += 20
        if re.search(r"メール|mail", text, re.I):
            score += 10
        if score > score_best:
            best, score_best = fm, score
    return best


def plan_fields(form, no_url=False):
    """どの欄に何を入れるかを決める。実際の入力はまだしない。

    no_url=True で、本文からリンクを外した版を使う（URLを弾くフォーム用）。
    """
    plan, skipped, radio_groups, typed = [], [], {}, []
    for f in form["fields"]:
        t = (f.get("type") or "").lower()
        text = lib_fields.describe(f)
        if t == "radio":
            radio_groups.setdefault(f["name"], []).append(f)
            continue
        if t == "checkbox":
            if lib_fields.CONSENT_RE.search(text):
                plan.append({**f, "kind": "consent", "action": "check", "text": "（同意にチェック）"})
            else:
                skipped.append({**f, "why": "任意のチェック欄"})
            continue
        if f["tag"] == "select":
            options = f.get("options", [])
            if lib_fields.SKIP_CHOICE_RE.search(text):
                skipped.append({**f, "why": "触らない選択肢（購読・性別など）"})
                continue
            if lib_fields.numeric_only(options[1:] if len(options) > 1 else options):
                skipped.append({**f, "why": "数量の選択肢", "quantity": True})
                continue
            opt = lib_fields.pick_choice(options[1:] if len(options) > 1 else options, context=text)
            if opt:
                plan.append({**f, "kind": "choice", "action": "select",
                             "text": opt["label"], "opt_value": opt["value"]})
            else:
                skipped.append({**f, "why": "選べる選択肢が判定できず"})
            continue
        typed.append({**f, "kind": lib_fields.refine_with_near(f, lib_fields.classify(f))})

    # 分割欄（姓/名、郵便番号の前後など）を順番どおりに割り当ててから値を決める
    typed = lib_fields.dedupe_email(lib_fields.spread_same_kind(lib_fields.split_parts(typed)))
    for item in typed:
        val = lib_fields.value_for(item["kind"])
        if val and item["kind"] == "body" and no_url:
            val = lib_fields.BODY_NO_URL
        if val:
            val = lib_fields.plain_if_required(item, item["kind"], val)
            plan.append({**item, "action": "fill", "text": val})
        else:
            skipped.append({**item, "why": "何の欄か判定できず" if not item["kind"]
                            else item["kind"] + "は入れない"})

    for name, group in radio_groups.items():
        opts = [{"value": g["value"], "label": (g.get("label") or g.get("near") or g["value"])} for g in group]
        context = " ".join(lib_fields.describe(g) for g in group)
        if lib_fields.SKIP_CHOICE_RE.search(context):
            skipped.append({**group[0], "why": "触らない選択肢（購読・性別など）"})
            continue
        if lib_fields.numeric_only([{"label": g["value"]} for g in group]):
            skipped.append({**group[0], "why": "数量の選択肢", "quantity": True})
            continue
        opt = lib_fields.pick_choice(opts, context=context)
        if opt:
            hit = next(g for g in group if (g.get("label") or g.get("near") or g["value"]) == opt["label"])
            plan.append({**hit, "kind": "choice", "action": "check", "text": opt["label"]})
        else:
            skipped.append({**group[0], "why": "ラジオの選択肢が判定できず"})
    return plan, skipped


def apply_plan(page, plan):
    for item in plan:
        sel = '[data-fb="' + str(item["fb"]) + '"]'
        try:
            loc = page.locator(sel).first
            if item["action"] == "fill":
                loc.fill(item["text"], timeout=6000)
            elif item["action"] == "select":
                loc.select_option(value=item["opt_value"], timeout=6000)
            elif item["action"] == "check":
                loc.check(timeout=6000, force=True)
        except Exception as e:
            # 見た目を作り替えたチェックボックス/ラジオは check が通らないことがある
            if item["action"] == "check":
                try:
                    page.eval_on_selector(sel, "el => { el.checked = true; "
                                               "el.dispatchEvent(new Event('change', {bubbles:true})); }")
                    continue
                except Exception:
                    pass
            item["error"] = type(e).__name__
    return plan


FOLLOW_RE = re.compile(r"同意.{0,6}(次|進|フォーム|入力)|上記に同意|お問い?合わせフォーム|"
                       r"フォームは?こちら|入力フォーム|メールでのお問い?合わせ|お問い?合わせはこちら", re.I)


def follow_to_form(page):
    """フォームが無いページで、フォームへ行くリンクを1回だけ辿る。"""
    try:
        href = page.evaluate(
            """() => {
              const re = /同意.{0,6}(次|進|フォーム|入力)|上記に同意|お問い?合わせフォーム|フォームは?こちら|入力フォーム|メールでのお問い?合わせ|お問い?合わせはこちら/;
              const els = Array.from(document.querySelectorAll('a[href],button,input[type=submit]'));
              for (const el of els) {
                const t = (el.innerText || el.value || '').replace(/\\s+/g, ' ').trim();
                if (t && re.test(t)) {
                  if (el.tagName === 'A' && el.href && !el.href.startsWith('javascript')) return el.href;
                  el.click();
                  return 'clicked';
                }
              }
              return '';
            }"""
        )
    except Exception:
        return False
    if not href:
        return False
    try:
        if href != "clicked":
            page.goto(href, timeout=45000, wait_until="domcontentloaded")
        page.wait_for_timeout(3000)
        return True
    except Exception:
        return False



CONTACT_LINK_JS = """
() => {
  const good = /お問い?合わせ|お問合せ|問い?合わせ|contact|inquiry|inquiries/i;
  const bad  = /予約|reserve|booking|reservation|求人|採用|recruit|faq|よくある/i;
  const out = [];
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.href || '';
    if (!href.startsWith('http') || href.startsWith('javascript')) return;
    const text = (a.innerText || a.getAttribute('aria-label') || a.title || '').replace(/\\s+/g,' ').trim();
    const hay = text + ' ' + href;
    if (!good.test(hay)) return;
    if (bad.test(text)) return;
    out.push({ href: href, text: text.slice(0, 40), byText: good.test(text) });
  });
  return out;
}
"""


def discover_form_url(page, official_url):
    """公式サイトを開いて、問い合わせページのURLを探す。

    リストに「公式サイトの問い合わせフォーム」としか書かれていない行のため。
    予約・採用のページは選ばない。
    """
    try:
        page.goto(official_url, timeout=45000, wait_until="domcontentloaded")
        page.wait_for_timeout(2500)
        links = page.evaluate(CONTACT_LINK_JS)
    except Exception:
        return ""
    if not links:
        return ""
    same = [l for l in links if l["href"].split("/")[2] == official_url.split("/")[2]]
    pool = same or links
    for l in pool:                       # 文字で「お問い合わせ」と書いてあるものを優先
        if l["byText"]:
            return l["href"]
    return pool[0]["href"]


def run_one(page, target, no_url=False):
    lib_fields.set_row(target)
    url = target["_form_url"]
    rec = {"row": target["_row"], "store": target["店名"], "genre": target.get("ジャンル", ""),
           "area": target.get("エリア", ""), "url": url, "status": "", "note": "",
           "filled": [], "skipped": [], "captcha": [], "buttons": [], "shot": "",
           "reservation": []}
    try:
        page.goto(url, timeout=45000, wait_until="domcontentloaded")
        page.wait_for_timeout(2500)
    except Exception as e:
        rec["status"] = "open_error"
        rec["note"] = type(e).__name__ + ": " + str(e).split("\n")[0][:110]
        return rec
    try:
        info = page.evaluate(EXTRACT_JS)
    except Exception as e:
        rec["status"] = "read_error"
        rec["note"] = str(e)[:110]
        return rec
    rec["captcha"] = sorted(set(info["captcha"]))
    form = choose_form(info) if info["forms"] else None
    if form is None or form["count"] == 0:
        # 「個人情報の取扱いに同意して次へ」やFAQページの先にフォームがあることがある。
        # 1回だけそれらしいリンクを辿ってみる。
        if follow_to_form(page):
            try:
                info = page.evaluate(EXTRACT_JS)
                rec["captcha"] = sorted(set(info["captcha"]))
                form = choose_form(info) if info["forms"] else None
                rec["note"] = "リンクを1回辿った: " + page.url
            except Exception:
                form = None
    if form is None or form["count"] == 0:
        rec["status"] = "no_form"
        rec["note"] = "問い合わせフォームを特定できず"
        try:
            page.screenshot(path=str(SHOTS / ("%04d.png" % target["_row"])), full_page=False)
            rec["shot"] = "%04d.png" % target["_row"]
        except Exception:
            pass
        return rec
    plan, skipped = plan_fields(form, no_url=no_url)
    rec["skipped"] = [{"name": s["name"] or s["id"], "near": (s.get("near") or "")[:70],
                       "required": bool(s.get("required")), "why": s["why"]} for s in skipped]
    plan = apply_plan(page, plan)
    rec["filled"] = [{"kind": p["kind"], "name": p["name"] or p["id"],
                      "near": (p.get("near") or "")[:70], "text": (p.get("text") or "")[:100],
                      "error": p.get("error", "")} for p in plan]
    rec["buttons"] = [b["text"] for b in form["buttons"] if b["text"]][:6]

    problems = []
    if any(s.get("quantity") for s in skipped):
        problems.append("人数・個数の選択肢あり（予約フォームの疑い）")
    resv = lib_fields.reservation_signals(form["fields"])
    if resv:
        rec["reservation"] = resv
        problems.append("予約フォームの疑い(" + "/".join(resv[:3]) + ")")
    if not any(p["kind"] == "body" and not p.get("error") for p in plan):
        problems.append("本文欄なし")
    if not any(p["kind"] in ("email", "email_conf") and not p.get("error") for p in plan):
        problems.append("メール欄なし")
    miss = [s for s in rec["skipped"] if s["required"]]
    if miss:
        problems.append("必須の未入力%d件" % len(miss))
    if any(p.get("error") for p in plan):
        problems.append("入力失敗あり")
    rec["note"] = " / ".join(problems)
    rec["status"] = "filled" if not problems else "needs_check"

    try:
        page.screenshot(path=str(SHOTS / ("%04d.png" % target["_row"])), full_page=True)
        rec["shot"] = "%04d.png" % target["_row"]
    except Exception:
        pass
    return rec


def new_page(ctx):
    """1件ごとにタブを作り直す。

    1つのタブを使い回すと、前のサイトの遅延リダイレクトが次のサイトの
    読み込みを潰す（Navigation is interrupted by another navigation）。
    """
    page = ctx.new_page()
    page.set_default_timeout(15000)
    return page


def cmd_fill(args):
    from playwright.sync_api import sync_playwright
    targets_all, excluded = lib_sheet.unsent_form_rows()
    targets = [t for t in targets_all if t["_form_url"]]
    previous = {}
    if args.retry and RESULT.exists():
        old = json.loads(RESULT.read_text(encoding="utf-8"))
        previous = {r["row"]: r for r in old["results"]}
        targets = [t for t in targets
                   if previous.get(t["_row"], {}).get("status") not in ("filled", "needs_check")]
        print("やり直す対象: %d 件" % len(targets))
    if args.discover:
        targets = [t for t in targets_all if t.get("_needs_discovery")]
        print("フォームURLを探す対象: %d 件" % len(targets))
        if RESULT.exists() and not previous:
            previous = {r["row"]: r for r in json.loads(RESULT.read_text(encoding="utf-8"))["results"]}
    if args.rows:
        want = {int(x) for x in args.rows.replace(" ", "").split(",") if x}
        if RESULT.exists() and not previous:
            previous = {r["row"]: r for r in json.loads(RESULT.read_text(encoding="utf-8"))["results"]}
        targets = [t for t in targets if t["_row"] in want]
        print("指定された行: %d 件" % len(targets))
    if args.limit:
        targets = targets[:args.limit]
    SHOTS.mkdir(parents=True, exist_ok=True)
    RESULT.parent.mkdir(parents=True, exist_ok=True)
    results = []
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=not args.headed)
        ctx = browser.new_context(user_agent=UA, viewport={"width": 1280, "height": 1400},
                                  locale="ja-JP", ignore_https_errors=True)
        for i, t in enumerate(targets, 1):
            page = new_page(ctx)
            try:
                if not t["_form_url"]:
                    t["_form_url"] = discover_form_url(page, t["公式URL"])
                    if not t["_form_url"]:
                        raise RuntimeError("問い合わせページのリンクが見つからない")
                rec = run_one(page, t)
                if t.get("_needs_discovery"):
                    rec["note"] = ("公式サイトから探した: " + t["_form_url"] + " / " + rec["note"]).strip(" /")
            except Exception as e:
                rec = {"row": t["_row"], "store": t["店名"], "url": t["_form_url"],
                       "status": "crash", "note": type(e).__name__ + ": " + str(e)[:100],
                       "filled": [], "skipped": [], "captcha": [], "buttons": [], "shot": ""}
            finally:
                try:
                    page.close()
                except Exception:
                    pass
            results.append(rec)
            print("[%d/%d] row%d %-12s %s" % (i, len(targets), rec["row"], rec["status"], rec["note"]), flush=True)
        browser.close()
    if previous:
        merged = dict(previous)
        for r in results:
            merged[r["row"]] = r
        results = [merged[k] for k in sorted(merged)]
    RESULT.write_text(json.dumps({"filled_at": datetime.datetime.now().isoformat(timespec="seconds"),
                                  "excluded": excluded, "results": results},
                                 ensure_ascii=False, indent=1), encoding="utf-8")
    counts = {}
    for r in results:
        counts[r["status"]] = counts.get(r["status"], 0) + 1
    print("\n" + json.dumps(counts, ensure_ascii=False))


SENT = WORK / "data" / "sent.json"
SENT_SHOTS = WORK / "out" / "sent"

# 送信後にこれが出ていれば「届いた」とみなす
DONE_RE = re.compile(r"送信(が)?(完了|されました|いたしました)|お問い?合わせ(を)?(ありがとう|受け付け|受付)|"
                     r"受け付けました|受付(が)?完了|ありがとうございました|thank you|送信しました|"
                     r"完了しました|送信が完了", re.I)
FAIL_RE = re.compile(r"入力(して|に)|必須|正しく|エラー|error|やり直|失敗|未入力|確認してください")
# 送信ボタンらしい文字（上ほど優先）
SUBMIT_WORDS = ["送信する", "送信", "この内容で", "内容を送信", "確認画面", "確認する", "確認", "送る", "submit", "send", "次へ"]
CONFIRM_WORDS = ["送信する", "送信", "この内容で送信", "上記の内容で送信", "送信を完了", "send"]


def click_submit(page, words):
    """フォーム内の送信ボタンらしいものを押す。押せたら True。"""
    try:
        return page.evaluate(
            """(words) => {
              // 送信ボタンを <a> や <div> で作っているフォームがある。
              // フォームの中に限って、それらも候補に入れる（外のリンクは押さない）。
              const sel = 'button,input[type=submit],input[type=button],input[type=image],'
                        + 'a,[role=button],[class*=btn],[class*=button],[class*=submit],[class*=send]';
              const collect = (scope, cands) => {
                scope.querySelectorAll(sel).forEach(b => {
                  const r = b.getBoundingClientRect();
                  if (r.width === 0 && r.height === 0) return;
                  const t = (b.innerText || b.value || b.getAttribute('alt') || '').replace(/\\s+/g,' ').trim();
                  cands.push({ el: b, t: t });
                });
              };
              const forms = Array.from(document.querySelectorAll('form'));
              const cands = [];
              forms.forEach(form => collect(form, cands));
              // 送信ボタンがフォームの外に置いてあるサイトがあるので、
              // フォーム内で見つからなければページ全体からも探す。
              // ただしページ全体では <a> は対象にしない（普通のリンクを押してしまう）。
              if (cands.length === 0) {
                document.querySelectorAll('button,input[type=submit],input[type=button],input[type=image]')
                  .forEach(b => {
                    const r = b.getBoundingClientRect();
                    if (r.width === 0 && r.height === 0) return;
                    const t = (b.innerText || b.value || b.getAttribute('alt') || '').replace(/\\s+/g,' ').trim();
                    cands.push({ el: b, t: t });
                  });
              }
              for (const w of words) {
                for (const c of cands) {
                  if (c.t && c.t.toLowerCase().includes(w.toLowerCase())) { c.el.click(); return c.t; }
                }
              }
              const only = cands.filter(c => c.el.type === 'submit');
              if (only.length === 1) { only[0].el.click(); return only[0].t || '(submit)'; }
              return '';
            }""", words)
    except Exception:
        return ""


BLOCKED_RE = re.compile(r"送信に失敗しました|メッセージの送信に失敗|スパム|spam|認証に失敗|"
                        r"しばらく(時間を)?おいて|後でまたお試し", re.I)


def page_state(page):
    """送信後のページを読んで、完了・失敗・サイト側に弾かれた、を見分ける。

    完了メッセージはページ下部に出ることがあるので本文全体から探す。
    逆に「必須」の文字はフォーム上部に常にあるので、完了の判定を先に行う。
    """
    try:
        text = page.evaluate("() => document.body.innerText.replace(/\\s+/g,' ')")
    except Exception:
        return "", False, False, False
    try:    # Contact Form 7 は結果を専用の要素に出す
        cf7 = page.evaluate(
            "() => { const el = document.querySelector('.wpcf7-response-output,.wpcf7-mail-sent-ok');"
            " return el ? (el.className + ' ' + (el.innerText || '')) : ''; }")
    except Exception:
        cf7 = ""
    if "sent-ok" in cf7:
        return text, True, False, False
    # 記入したフォームがまだ画面に残っているなら、送信は成立していない。
    # 「送信完了」という文字は、入力→確認→完了のステップ表示にも出るので、
    # 文字だけで判定すると入力画面のままでも完了と誤読する。
    try:
        still_form = page.evaluate(
            """() => {
              const mail = 'poyapiyotonemuneko@gmail.com';
              const els = Array.from(document.querySelectorAll('input,textarea'));
              return els.some(el => {
                const r = el.getBoundingClientRect();
                if (r.width === 0 && r.height === 0) return false;
                const v = el.value || '';
                return v.includes(mail) || v.includes('Japan Trip Picks');
              });
            }""")
    except Exception:
        still_form = False
    # まだ送信の途中（確認画面など）なら完了ではない。
    # 「送信」ボタンが見えていて、こちらが書いた文面がまだページに出ている状態がそれ。
    try:
        pending = page.evaluate(
            """() => {
              const btn = Array.from(document.querySelectorAll('button,input[type=submit],input[type=button]'))
                .some(b => {
                  const r = b.getBoundingClientRect();
                  if (r.width === 0 && r.height === 0) return false;
                  return /送信|確認|submit|send/i.test(b.innerText || b.value || '');
                });
              const mine = (document.body.innerText || '').includes('Japan Trip Picks');
              return btn && mine;
            }""")
    except Exception:
        pending = False
    blocked = bool(BLOCKED_RE.search(cf7)) or bool(BLOCKED_RE.search(text[:4000]))
    # 完了の文言はページ上部に出る。全文から拾うと、ナビや脚注の
    # 「ありがとうございました」やステップ表示の「送信完了」を拾ってしまう。
    done = bool(DONE_RE.search(text[:2500])) and not blocked and not still_form and not pending
    fail = bool(FAIL_RE.search(text[:1500])) or still_form or pending
    return text, done, fail, blocked


URL_REJECT_RE = re.compile(r"URLを含む|URLを含める|URLは(ご)?入力|リンクは(ご)?入力|日本語以外の文字")


def send_one(page, target, rec, no_url=False):
    lib_fields.set_row(target)
    """記入しなおしてから送信し、完了画面が出たかを見る。"""
    out = {"row": rec["row"], "store": rec["store"], "url": rec["url"],
           "status": "", "note": "", "clicked": [], "shot": ""}
    fresh = run_one(page, target, no_url=no_url)
    if fresh["status"] != "filled":
        out["status"] = "skip"
        out["note"] = "記入できなかった: " + fresh["note"]
        return out
    first = click_submit(page, SUBMIT_WORDS)
    if not first:
        out["status"] = "no_button"
        out["note"] = "送信ボタンが見つからない"
        return out
    out["clicked"].append(first)
    page.wait_for_timeout(4500)
    text, done, fail, blocked = page_state(page)
    # 「確認画面へ」だった場合は、確認画面でもう一度押す
    if not done and not blocked:
        second = click_submit(page, CONFIRM_WORDS)
        if second:
            out["clicked"].append(second)
            page.wait_for_timeout(5000)
            text, done, fail, blocked = page_state(page)
    SENT_SHOTS.mkdir(parents=True, exist_ok=True)
    shot = SENT_SHOTS / ("%04d.png" % rec["row"])
    try:
        page.screenshot(path=str(shot), full_page=True)
        out["shot"] = shot.name
    except Exception:
        pass
    # URLが理由で弾かれたなら、リンクを外した本文でもう一度だけ入れ直す。
    # このとき1通目は相手に届いていないので、二重送信にはならない。
    if not done and not no_url and URL_REJECT_RE.search(text[:4000]):
        retry = send_one(page, target, rec, no_url=True)
        retry["note"] = ("本文からURLを外して送り直した / " + retry["note"]).strip(" /")
        return retry
    if done:
        out["status"] = "sent_ok"
    elif blocked:
        out["status"] = "blocked"
        out["note"] = "サイト側に弾かれた（reCAPTCHAの判定など）"
    elif fail:
        out["status"] = "sent_fail"
        out["note"] = "エラー表示あり: " + text[:120]
    else:
        out["status"] = "sent_unknown"
        out["note"] = "完了表示を確認できず: " + text[:120]
    return out


def cmd_send(args):
    from playwright.sync_api import sync_playwright
    if not args.yes:
        data = json.loads(RESULT.read_text(encoding="utf-8"))
        n = sum(1 for r in data["results"] if r["status"] == "filled")
        print("--yes を付けると %d 件を送信します。いまは何も送っていません。" % n)
        return
    data = json.loads(RESULT.read_text(encoding="utf-8"))
    by_row = {r["row"]: r for r in data["results"]}
    targets, _ = lib_sheet.unsent_form_rows()
    # 自動で送るのは、記入が全部通っていて、人手の要る認証が無いものだけ
    hands_off = {"recaptcha-v2", "hcaptcha", "turnstile"}
    queue = []
    for t in targets:
        rec = by_row.get(t["_row"])
        if not rec or rec["status"] != "filled":
            continue
        if hands_off & set(rec["captcha"]):
            continue
        # 公式サイトから探し当てたURLは記入時の結果にしか無いので、ここで引き継ぐ
        if not t["_form_url"]:
            t["_form_url"] = rec.get("url", "")
        if not t["_form_url"]:
            continue
        queue.append((t, rec))
    force = set()
    if args.rows:
        force = {int(x) for x in args.rows.replace(" ", "").split(",") if x}
        queue = [(t, rec) for t, rec in queue if t["_row"] in force]
    if args.limit:
        queue = queue[:args.limit]
    print("送信対象: %d 件（間隔 %d 秒）" % (len(queue), args.interval))
    results = []
    if SENT.exists():
        results = json.loads(SENT.read_text(encoding="utf-8")).get("results", [])
    # 一度でもボタンを押した先は、届いたか分からなくても二度と押さない。
    # 押し直すと相手に同じ問い合わせが2通いく。
    done_rows = {r["row"] for r in results
                 if r.get("clicked") or r["status"] in ("sent_ok", "sent_unknown", "sent_fail", "blocked")}
    # --rows で明示した行は、届いていないと目で確認したものなので送り直す
    done_rows -= force
    done_rows |= {r["row"] for r in results if r["status"] == "sent_ok"}
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=not args.headed)
        ctx = browser.new_context(user_agent=UA, viewport={"width": 1280, "height": 1400},
                                  locale="ja-JP", ignore_https_errors=True)
        for i, (t, rec) in enumerate(queue, 1):
            if t["_row"] in done_rows:      # 途中で止めても送信済みは飛ばす
                continue
            page = new_page(ctx)
            try:
                out = send_one(page, t, rec)
            except Exception as e:
                out = {"row": t["_row"], "store": t["店名"], "url": t["_form_url"],
                       "status": "crash", "note": type(e).__name__ + ": " + str(e)[:100],
                       "clicked": [], "shot": ""}
            results = [r for r in results if r["row"] != out["row"]] + [out]
            SENT.write_text(json.dumps({"sent_at": datetime.datetime.now().isoformat(timespec="seconds"),
                                        "results": results}, ensure_ascii=False, indent=1), encoding="utf-8")
            print("[%d/%d] row%d %-14s %s" % (i, len(queue), out["row"], out["status"], out["note"][:60]),
                  flush=True)
            if i < len(queue):
                page.wait_for_timeout(args.interval * 1000)
            try:
                page.close()
            except Exception:
                pass
        browser.close()
    counts = {}
    for r in results:
        counts[r["status"]] = counts.get(r["status"], 0) + 1
    print("\n" + json.dumps(counts, ensure_ascii=False))
    print("完了が取れた分をスプシに書き戻すには: stamp")


def cmd_stamp(args):
    """完了画面まで確認できた行だけ、スプシA列に日付を入れる。"""
    data = json.loads(SENT.read_text(encoding="utf-8"))
    ok = [r for r in data["results"] if r["status"] == "sent_ok"]
    if not ok:
        print("完了確認できた行がありません。書き込みません。")
        return
    today = datetime.date.today()
    date_text = args.date or ("%d/%d" % (today.month, today.day))   # シートの表記に合わせる（例 9/7）
    print("スプシ「%s」A列に「%s」を書き込みます: %d 行" % (lib_sheet.SHEET_NAME, date_text, len(ok)))
    for r in ok:
        print("  行%d %s" % (r["row"], r["store"]))
    if not args.yes:
        print("\n--yes を付けると実際に書き込みます。いまは書き込んでいません。")
        return
    n = lib_sheet.stamp_dates([r["row"] for r in ok], date_text)
    print("書き込み完了: %d 行" % n)


STATUS_LABEL = {
    "filled": ("記入できた", "#116d3a", "#e7f6ec"),
    "needs_check": ("要確認", "#8a5300", "#fff4e0"),
    "no_form": ("フォーム見つからず", "#8a1f1f", "#fdeaea"),
    "open_error": ("ページが開けない", "#8a1f1f", "#fdeaea"),
    "read_error": ("読み取り失敗", "#8a1f1f", "#fdeaea"),
    "crash": ("エラー", "#8a1f1f", "#fdeaea"),
}
KIND_LABEL = {
    "body": "本文", "subject": "件名", "email": "メール", "email_conf": "メール確認",
    "name": "お名前", "sei": "姓", "mei": "名", "kana": "ふりがな", "kana_sei": "せい",
    "kana_mei": "めい", "katakana": "フリガナ", "katakana_sei": "セイ", "katakana_mei": "メイ",
    "company": "会社名", "tel": "電話", "tel1": "電話1", "tel2": "電話2", "tel3": "電話3",
    "zip": "郵便番号", "zip1": "郵便1", "zip2": "郵便2", "pref": "都道府県", "city": "市区町村",
    "building": "建物", "address": "住所", "url": "URL", "choice": "選択", "consent": "同意",
}


def esc(s):
    return (str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
            .replace('"', "&quot;"))


def cmd_preview(args):
    data = json.loads(RESULT.read_text(encoding="utf-8"))
    results = data["results"]
    order = {"needs_check": 0, "no_form": 1, "open_error": 1, "read_error": 1, "crash": 1, "filled": 2}
    results = sorted(results, key=lambda r: (order.get(r["status"], 3), r["row"]))
    counts = {}
    for r in results:
        counts[r["status"]] = counts.get(r["status"], 0) + 1

    cards = []
    for r in results:
        label, fg, bg = STATUS_LABEL.get(r["status"], (r["status"], "#333", "#eee"))
        rows = []
        for f in r["filled"]:
            kind = KIND_LABEL.get(f["kind"], f["kind"])
            text = f["text"]
            cls = " class='ng'" if f["error"] else ""
            note = " ← 入力できず(%s)" % f["error"] if f["error"] else ""
            rows.append("<tr%s><th>%s</th><td><code>%s</code></td><td>%s%s</td></tr>"
                        % (cls, esc(kind), esc(f["name"]), esc(text[:90]), esc(note)))
        need = [s for s in r.get("skipped", []) if s.get("required")]
        skip_html = ""
        if need:
            skip_html = ("<p class='warn'>必須なのに入れられなかった欄: "
                         + esc(" / ".join((s["name"] or s["near"])[:40] for s in need)) + "</p>")
        cap = ""
        if r["captcha"]:
            cap = "<span class='cap'>%s</span>" % esc(", ".join(r["captcha"]))
        shot = ("<a href='shots/%s' target='_blank'><img src='shots/%s' loading='lazy'></a>"
                % (r["shot"], r["shot"])) if r["shot"] else "<p class='warn'>画面が撮れていません</p>"
        cards.append(
            "<section id='r%d'><h2><span class='badge' style='color:%s;background:%s'>%s</span> "
            "行%d %s</h2>"
            "<p class='meta'><a href='%s' target='_blank'>%s</a> %s %s</p>%s"
            "<div class='cols'><div><table>%s</table>%s</div><div class='shot'>%s</div></div></section>"
            % (r["row"], fg, bg, esc(label), r["row"], esc(r["store"]), esc(r["url"]), esc(r["url"][:80]),
               cap, esc(r["note"]), "", "".join(rows), skip_html, shot))

    summary = " / ".join("%s %d件" % (STATUS_LABEL.get(k, (k,))[0], v) for k, v in counts.items())
    excluded = "".join("<li>行%d %s（%s）</li>" % (e["_row"], esc(e["店名"]), esc(e["_reason"]))
                       for e in data.get("excluded", []))
    html = """<!doctype html><meta charset="utf-8"><title>フォーム記入の確認</title>
<style>
body{font-family:"Yu Gothic UI","Hiragino Sans",sans-serif;margin:0;background:#f6f6f4;color:#222;line-height:1.6}
header{position:sticky;top:0;background:#fff;border-bottom:1px solid #ddd;padding:14px 20px;z-index:5}
h1{font-size:18px;margin:0 0 4px}
.sum{font-size:13px;color:#555}
section{background:#fff;margin:16px 20px;padding:16px 20px;border:1px solid #e2e2de;border-radius:8px}
h2{font-size:15px;margin:0 0 6px}
.badge{font-size:12px;padding:2px 8px;border-radius:99px;margin-right:8px}
.cap{background:#eef1ff;color:#33389c;font-size:11px;padding:2px 7px;border-radius:99px;margin-left:6px}
.meta{font-size:12px;color:#666;margin:0 0 10px;word-break:break-all}
.cols{display:grid;grid-template-columns:1fr 460px;gap:20px}
@media(max-width:1100px){.cols{grid-template-columns:1fr}}
table{border-collapse:collapse;width:100%;font-size:13px}
th{text-align:left;width:88px;color:#666;font-weight:600;vertical-align:top;padding:3px 8px 3px 0;white-space:nowrap}
td{padding:3px 6px;vertical-align:top;border-bottom:1px solid #f0f0ee}
code{font-size:11px;color:#888}
tr.ng td{background:#fdeaea}
.warn{color:#8a1f1f;font-size:12px;margin:8px 0 0}
.shot img{width:100%;border:1px solid #ddd;border-radius:4px}
.excl{margin:16px 20px;font-size:13px;color:#666}
</style>
<header><h1>フォーム記入の確認（まだ1件も送信していません）</h1>
<div class="sum">__SUM__</div></header>
__CARDS__
<div class="excl"><b>送らずに除外した先</b><ul>__EXCL__</ul></div>
"""
    html = (html.replace("__SUM__", esc(summary))
                .replace("__CARDS__", "".join(cards))
                .replace("__EXCL__", excluded or "<li>なし</li>"))
    out = WORK / "out" / "preview.html"
    out.write_text(html, encoding="utf-8")
    print("書き出し: " + str(out))
    print(summary)



def cmd_worklist(args):
    """手作業でやる行の一覧を1枚のHTMLにする。

    貼り付ける値をボタン1つでコピーできるようにして、
    フォームを開いてから送るまでの手数を減らす。
    """
    data = json.loads(RESULT.read_text(encoding="utf-8"))
    res = {r["row"]: r for r in data["results"]}
    sent = {}
    if SENT.exists():
        sent = {r["row"]: r for r in json.loads(SENT.read_text(encoding="utf-8"))["results"]}
    grey = {e["_row"] for e in data.get("excluded", [])}
    for r in data["results"]:
        if r.get("reservation") or r["status"] in ("no_form", "open_error", "read_error", "crash"):
            grey.add(r["row"])
    _, rows = lib_sheet.read_rows()

    REASON = {"blocked": ("reCAPTCHAで弾かれた", 0), "sent_fail": ("送信でエラーになった", 1),
              "sent_unknown": ("完了を確認できなかった", 3), "no_button": ("送信ボタンを押せなかった", 2),
              "skip": ("記入できなかった", 2), "crash": ("エラーで止まった", 2)}
    cards = []
    for row in rows:
        n = row["_row"]
        if row["日付"] or n in grey:
            continue
        rec, snd = res.get(n, {}), sent.get(n, {})
        reason, order = REASON.get(snd.get("status", ""), ("まだ送っていない", 1))
        url = (snd.get("url") or rec.get("url") or row.get("公式URL") or "").strip()
        fields = [f for f in rec.get("filled", []) if f["kind"] != "body" and f.get("text")]
        seen, items = set(), []
        for f in fields:
            key = (f["kind"], f["text"])
            if key in seen:
                continue
            seen.add(key)
            label = KIND_LABEL.get(f["kind"], f["kind"])
            items.append("<tr><th>%s</th><td><code id='v%d_%d'>%s</code>"
                         "<button onclick=\"cp('v%d_%d',this)\">コピー</button></td></tr>"
                         % (esc(label), n, len(items), esc(f["text"]), n, len(items)))
        cards.append((order, n,
            "<section><h2>行%d %s <span class='why'>%s</span></h2>"
            "<p><a href='%s' target='_blank'>%s</a></p>"
            "<table>%s</table>"
            "<div class='body'><button onclick=\"cp('b%d',this)\">本文をコピー</button>"
            "<pre id='b%d'>%s</pre></div></section>"
            % (n, esc(row["店名"]), esc(reason), esc(url), esc(url[:90]),
               "".join(items), n, n, esc(lib_fields.BODY))))
    cards.sort()
    html = """<!doctype html><meta charset="utf-8"><title>手作業でやる分</title>
<style>
body{font-family:"Yu Gothic UI","Hiragino Sans",sans-serif;background:#f6f6f4;margin:0;color:#222;line-height:1.7}
header{position:sticky;top:0;background:#fff;border-bottom:1px solid #ddd;padding:14px 20px}
h1{font-size:17px;margin:0}
section{background:#fff;margin:14px 20px;padding:14px 18px;border:1px solid #e2e2de;border-radius:8px}
h2{font-size:15px;margin:0 0 6px}
.why{font-size:11px;background:#fff4e0;color:#8a5300;padding:2px 8px;border-radius:99px;margin-left:8px}
table{border-collapse:collapse;font-size:13px;margin:6px 0}
th{text-align:left;color:#666;font-weight:600;padding:2px 12px 2px 0;white-space:nowrap;width:90px}
td{padding:2px 0}
code{background:#f2f2ef;padding:2px 7px;border-radius:4px;font-size:12px}
button{margin-left:8px;font-size:11px;padding:3px 10px;border:1px solid #ccc;background:#fff;border-radius:4px;cursor:pointer}
button:hover{background:#eee}
pre{white-space:pre-wrap;background:#fafaf8;border:1px solid #eee;padding:10px;font-size:12px;margin:6px 0 0;max-height:170px;overflow:auto}
a{color:#1a5fb4;word-break:break-all}
</style>
<header><h1>手作業でやる分 __N__ 件（上から順に、通りやすいものが並んでいます）</h1></header>
__CARDS__
<script>
function cp(id, btn){
  const t = document.getElementById(id).innerText;
  navigator.clipboard.writeText(t).then(() => {
    const old = btn.innerText; btn.innerText = 'コピーした';
    setTimeout(() => btn.innerText = old, 1200);
  });
}
</script>
"""
    html = html.replace("__N__", str(len(cards))).replace("__CARDS__", "".join(c for _, _, c in cards))
    out = WORK / "out" / "worklist.html"
    out.write_text(html, encoding="utf-8")
    print("書き出し: %s（%d件）" % (out, len(cards)))


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    f = sub.add_parser("fill")
    f.add_argument("--limit", type=int)
    f.add_argument("--headed", action="store_true")
    f.add_argument("--retry", action="store_true", help="前回うまくいかなかった行だけやり直す")
    f.add_argument("--rows", help="この行番号だけやり直す（カンマ区切り）")
    f.add_argument("--discover", action="store_true", help="フォームURLが無い行だけ、公式サイトから探して記入する")
    f.set_defaults(func=cmd_fill)
    p = sub.add_parser("preview")
    p.set_defaults(func=cmd_preview)
    s = sub.add_parser("send")
    s.add_argument("--yes", action="store_true", help="これが無いと1件も送らない")
    s.add_argument("--limit", type=int)
    s.add_argument("--rows", help="この行だけ送る（カンマ区切り）。届いていないと確認済みの行の再送に使う")
    s.add_argument("--interval", type=int, default=15, help="送信間隔（秒）")
    s.add_argument("--headed", action="store_true")
    s.set_defaults(func=cmd_send)
    st = sub.add_parser("stamp")
    st.add_argument("--yes", action="store_true", help="これが無いと書き込まない")
    st.add_argument("--date", help="書き込む日付（既定は今日 例 9/7）")
    st.set_defaults(func=cmd_stamp)
    w = sub.add_parser("worklist")
    w.set_defaults(func=cmd_worklist)
    a = ap.parse_args()
    a.func(a)
