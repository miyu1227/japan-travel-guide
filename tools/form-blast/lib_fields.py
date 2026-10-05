"""フォームの入力欄を見て、何を入れる欄かを判定する。"""
import re
from pathlib import Path

import lib_sheet

_TEMPLATE = "body_%s.txt" % lib_sheet.CAMPAIGN if lib_sheet.CAMPAIGN else "body.txt"
BODY = (Path(__file__).resolve().parent / "templates" / _TEMPLATE).read_text(encoding="utf-8").strip()
SUBJECTS = {"jichitai": "【掲載のご案内】{{エリア名}}を台湾・香港の旅行者へ、繁体字の記事でご紹介いたします"}


def strip_urls(body):
    """「入力内容にURLを含める事はできません」と弾くフォーム用に、リンクを文字に置き換える。"""
    body = re.sub(r"https://www\.japantrippicks\.com/media/\S+\.pdf", "サイト内の「媒体資料」よりご覧いただけます", body)
    return (body
            .replace("https://www.japantrippicks.com/", "サイト名「Japan Trip Picks」で検索いただけます")
            .replace("Mail：poyapiyotonemuneko@gmail.com", "Mail：poyapiyotonemuneko[at]gmail.com"))


BODY_NO_URL = strip_urls(BODY)


def set_row(target):
    """行ごとの差し込み（{{列名}}）を本文と件名に反映する。差し込み漏れは送る前に止める。"""
    global BODY_NO_URL

    def fill(text):
        out = re.sub(r"\{\{(.+?)\}\}", lambda m: (target.get(m.group(1)) or "").strip(), text)
        if "{{" in text and not all((target.get(k) or "").strip() for k in re.findall(r"\{\{(.+?)\}\}", text)):
            raise ValueError("差し込みの値が空です: 行%s %s" % (target.get("_row"), target.get("店名")))
        return out

    P["body"] = fill(BODY)
    BODY_NO_URL = strip_urls(P["body"])
    if lib_sheet.CAMPAIGN in SUBJECTS:
        P["subject"] = fill(SUBJECTS[lib_sheet.CAMPAIGN])


P = {
    "company": "Japan Trip Picks",
    "name": "堀内 涼平",
    "sei": "堀内", "mei": "涼平",
    "kana": "ほりうち りょうへい",
    "kana_sei": "ほりうち", "kana_mei": "りょうへい",
    "katakana": "ホリウチ リョウヘイ",
    "katakana_sei": "ホリウチ", "katakana_mei": "リョウヘイ",
    "email": "poyapiyotonemuneko@gmail.com",
    "tel": "050-6864-2628",
    "tel1": "050", "tel2": "6864", "tel3": "2628",
    "zip": "106-0032", "zip1": "106", "zip2": "0032",
    "pref": "東京都",
    "city": "港区六本木3丁目16番12号",
    "building": "六本木KSビル5F",
    "address": "東京都港区六本木3丁目16番12号 六本木KSビル5F",
    "tel_plain": "05068642628",          # ハイフン不可・半角数字のみの欄用
    "zip_plain": "1060032",
    "subject": "台湾・香港からのお客様の集客について（掲載のご提案）",
    "url": "https://www.japantrippicks.com/",
    "body": BODY,
}

# (種別, 正規表現, 周辺テキストでも判定してよいか)
# 上から順に当てる。位置で決まる欄（姓/名・郵便番号の前後など）は、
# 欄そのものの属性でしか判定しない。周辺テキストの数字を拾って誤爆するため。
RULES = [
    ("body",        r"内容|本文|詳細|ご要望|ご質問|問い合わせ内容|通信欄|備考|メッセージ|message|inquiry|content|comment|body|naiyo", True),
    ("subject",     r"件名|題名|タイトル|subject|title", True),
    ("email_conf",  r"確認用|確認|再入力|もう一度|confirm|conf$|_conf|verify|再度", False),
    ("email",       r"メール|メイル|e-?mail|mail", True),
    ("zip1",        r"(郵便|zip|post)\w*[-_]?(1|前|上)\b|zip1|post1|yubin1|zip\[0\]", False),
    ("zip2",        r"(郵便|zip|post)\w*[-_]?(2|後|下)\b|zip2|post2|yubin2|zip\[1\]", False),
    ("zip",         r"郵便番号|〒|zip|postal|post(al)?[-_ ]?code|yubin", False),
    ("pref",        r"都道府県|prefecture|pref|todofuken", False),
    ("tel1",        r"(電話|tel|phone)\w*[-_]?(1|市外)\b|tel1|phone1", False),
    ("tel2",        r"(電話|tel|phone)\w*[-_]?(2|市内)\b|tel2|phone2", False),
    ("tel3",        r"(電話|tel|phone)\w*[-_]?3\b|tel3|phone3", False),
    ("tel",         r"電話|tel|phone|携帯", True),
    ("fax",         r"fax|ファ[ック]*クス", True),
    ("building",    r"建物|ビル名|マンション|building|apartment|番地以降", False),
    ("city",        r"市区町村|市町村|町名|番地|city|address2|addr2", False),
    ("address",     r"住所|所在地|address|addr", True),
    ("kana_sei",    r"(せい|姓|myoji|苗字|名字|last|family|sur)\w*(かな|フリガナ|ふりがな|kana|furigana|hurigana|hira)|(かな|フリガナ|ふりがな|kana|furigana|hurigana)\w*(せい|姓|last|family|sur)", False),
    ("kana_mei",    r"(めい|名|first|given)\w*(かな|フリガナ|ふりがな|kana|furigana|hurigana|hira)|(かな|フリガナ|ふりがな|kana|furigana|hurigana)\w*(めい|名|first|given)", False),
    ("katakana",    r"フリガナ|カナ|katakana|kana_?k", True),
    ("kana",        r"ふりがな|ひらがな|hurigana|furigana|huriga|hira|kana", True),
    ("company",     r"会社|法人|企業|団体|store|shop|company|corp|organization|屋号|所属", True),
    ("sei",         r"^(姓|せい|myoji|苗字|名字)$|last_?name|family_?name|sur_?name|lastname", False),
    ("mei",         r"^(名|めい)$|first_?name|given_?name|firstname", False),
    ("name",        r"お名前|氏名|名前|担当者|ご担当|name|onamae", True),
    ("url",         r"url|ホームページ|サイト|web", True),
]
COMPILED = [(k, re.compile(p, re.I), near_ok) for k, p, near_ok in RULES]

CONSENT_RE = re.compile(r"同意|承諾|プライバシー|個人情報|privacy|policy|agree|acceptance|承知", re.I)
PREF_CTX_RE = re.compile(r"都道府県|prefecture|pref|todofuken", re.I)
CONTACT_WAY_RE = re.compile(r"(連絡|返信|回答|希望).{0,6}(方法|手段)|ご連絡先|希望する連絡", re.I)

# 選択肢で選びたい語（上ほど優先）と、絶対に選ばない語。
CHOICE_PREF = ["その他", "そのほか", "掲載", "取材", "メディア", "広告", "提携", "業務提携",
               "法人", "ビジネス", "協業", "お問い合わせ", "問い合わせ", "ご意見", "一般"]
CHOICE_AVOID = ["予約", "空室", "宿泊", "キャンセル", "変更", "見積", "注文", "購入",
                "採用", "求人", "苦情", "クレーム", "電話", "来店", "訪問", "FAX"]

INDEX_RE = re.compile(r"^(?P<base>.+?)[\[\-_](?P<idx>0|1|2|first|second|third|前|中|後)[\]]?$", re.I)
IDX_NUM = {"0": 0, "1": 1, "2": 2, "first": 0, "second": 1, "third": 2, "前": 0, "中": 1, "後": 2}

# 分割欄（姓/名、郵便番号の前後など）に、順番どおり値を割り当てる表
SPLIT = {
    "name":     ["sei", "mei"],
    "sei":      ["sei", "mei"],
    "mei":      ["sei", "mei"],
    "kana":     ["kana_sei", "kana_mei"],
    "katakana": ["katakana_sei", "katakana_mei"],
    "zip":      ["zip1", "zip2"],
    "tel":      ["tel1", "tel2", "tel3"],
    "email":    ["email", "email_conf"],
    "address":  ["pref", "city", "building"],
}


def attr_text(f):
    """欄そのものが持っている文字（周辺テキストは含めない）。"""
    return " ".join(str(f.get(k) or "") for k in ("name", "id", "placeholder", "aria", "label"))


def describe(f):
    """周辺テキストも含めた、判定材料ぜんぶ。"""
    return attr_text(f) + " " + str(f.get("near") or "")


def classify(f):
    """入力欄1つの種別を返す。判定できなければ None。

    まず欄そのものの属性だけで判定し、決まらなければ周辺テキストも見る。
    先に属性で決めるのは、周辺テキストの「例）1234567」のような文字で
    郵便番号や電話の分割欄と誤判定するのを防ぐため。
    """
    t = (f.get("type") or "").lower()
    if t in ("hidden", "submit", "button", "image", "reset", "file", "password"):
        return None
    attr = attr_text(f)
    if t == "email":
        return "email_conf" if COMPILED[2][1].search(attr) else "email"
    if f.get("tag") == "textarea":
        return "body"
    for key, pat, _ in COMPILED:
        if pat.search(attr):
            return key
    if t == "tel":
        return "tel"
    near = str(f.get("near") or "")
    for key, pat, near_ok in COMPILED:
        if near_ok and pat.search(near):
            return key
    return None


KANA_NEAR_RE = re.compile(r"ふりがな|フリガナ|ひらがな|カタカナ|furigana|hurigana", re.I)


TO_KATAKANA = {"name": "katakana", "sei": "katakana_sei", "mei": "katakana_mei",
               "kana": "katakana", "kana_sei": "katakana_sei", "kana_mei": "katakana_mei"}
TO_KANA = {"name": "kana", "sei": "kana_sei", "mei": "kana_mei"}
KATAKANA_REQ_RE = re.compile(r"カタカナ|全角カナ|フリガナ")


def refine_with_near(f, kind):
    """周辺の文字を見て、ふりがな欄・カタカナ指定を拾い直す。

    「お名前」と「ふりがな」が同じ name 属性で並ぶフォームがある。属性だけ見ると
    両方とも名前欄になる。またフリガナ欄は全角カタカナ必須のことが多く、
    ひらがなを入れると「カタカナで入力してください」で弾かれる。
    """
    if kind not in ("name", "sei", "mei", "kana", "kana_sei", "kana_mei"):
        return kind
    context = " ".join(str(f.get(k) or "") for k in ("near", "label", "placeholder"))
    if kind in ("kana", "kana_sei", "kana_mei"):
        return TO_KATAKANA[kind] if KATAKANA_REQ_RE.search(context) else kind
    if not KANA_NEAR_RE.search(context):
        return kind
    if KATAKANA_REQ_RE.search(context):
        return TO_KATAKANA[kind]
    return TO_KANA[kind]


HALFWIDTH_REQ_RE = re.compile(r"ハイフン(なし|無し|不要|不可)|半角数字のみ|数字のみ|ハイフンを除")


def plain_if_required(f, kind, value):
    """ハイフン不可の電話・郵便番号欄では、区切りを外した値にする。"""
    context = " ".join(str(f.get(k) or "") for k in ("near", "label", "placeholder"))
    if not HALFWIDTH_REQ_RE.search(context):
        return value
    if kind == "tel":
        return P["tel_plain"]
    if kind == "zip":
        return P["zip_plain"]
    return value


def split_parts(fields_with_kind):
    """name[0]/name[1] のような分割欄に、姓と名を順番どおり割り当てる。

    同じ基底名で添字ちがいの欄が並んでいるときだけ効かせる。
    """
    groups = {}
    for item in fields_with_kind:
        m = INDEX_RE.match(item["name"] or item["id"] or "")
        if not m:
            continue
        groups.setdefault((m.group("base").lower(), item["kind"]), []).append(
            (IDX_NUM[m.group("idx").lower()], item))
    for (base, kind), members in groups.items():
        parts = SPLIT.get(kind)
        if not parts or len(members) < 2:
            continue
        for idx, item in sorted(members, key=lambda x: x[0]):
            if idx < len(parts):
                item["kind"] = parts[idx]
    return fields_with_kind


def spread_same_kind(fields_with_kind):
    """同じ種別と判定された欄が並んでいたら、分割欄とみなして順に割り当てる。

    電話が3つに割れているのに欄名がどれも tel1 相当で、全部に市外局番だけが
    入ってしまう事故があった（四条繁栄会）。
    """
    for base, parts in (("tel1", ["tel1", "tel2", "tel3"]), ("zip1", ["zip1", "zip2"])):
        same = [i for i in fields_with_kind if i["kind"] == base]
        if len(same) < 2:
            continue
        for idx, item in enumerate(same):
            if idx < len(parts):
                item["kind"] = parts[idx]
    return fields_with_kind


def dedupe_email(fields_with_kind):
    """メール欄が2つあって片方が確認用と読めないときは、2つ目を確認用にする。"""
    mails = [i for i in fields_with_kind if i["kind"] == "email"]
    if len(mails) == 2:
        mails[1]["kind"] = "email_conf"
    return fields_with_kind


def value_for(kind):
    if kind is None or kind == "fax":   # FAXは持っていないので触らない
        return None
    if kind == "email_conf":
        return P["email"]
    return P.get(kind)


def pick_choice(options, context=""):
    """select / radio の選択肢から、営業の問い合わせに合うものを選ぶ。"""
    usable = [o for o in options if (o.get("label") or "").strip() and (o.get("value") or "") != ""]
    if not usable:
        return None
    if PREF_CTX_RE.search(context):
        for o in usable:
            if "東京" in o["label"]:
                return o
    if CONTACT_WAY_RE.search(context):
        for o in usable:
            if re.search(r"メール|mail", o["label"], re.I):
                return o
    for want in CHOICE_PREF:
        for o in usable:
            if want in o["label"] and not any(bad in o["label"] for bad in CHOICE_AVOID):
                return o
    for o in usable:
        if not any(bad in o["label"] for bad in CHOICE_AVOID):
            return o
    return None

# 予約フォームの見分け。営業の文面を予約フォームに流すと、相手には
# 「架空の予約」として届く。日付や人数の欄があるものは自動送信から外す。
RESERVATION_STRONG_RE = re.compile(
    r"人数|大人|子供|お子様|チェックイン|チェックアウト|泊数|何泊|予約日|来店日|ご利用日|"
    r"着日|部屋数|ご希望日|希望日時|arrival|departure|check_?in|check_?out|nights|guests?|adults?|children",
    re.I)


def reservation_signals(fields):
    """予約フォームらしい欄の名前を返す。空なら問い合わせフォームとみなす。"""
    hits = set()
    for f in fields:
        blob = (f.get("name") or "") + " " + (f.get("id") or "") + " " + (f.get("near") or "")
        hits.update(RESERVATION_STRONG_RE.findall(blob))
    return sorted(hits)

# 触らない選択肢。メルマガ購読に勝手に「はい」を入れない、性別や年齢は選ばない。
SKIP_CHOICE_RE = re.compile(
    r"メルマガ|メールマガジン|配信|newsletter|購読|subscription|DM|ダイレクトメール|"
    r"性別|gender|年齢|age|生年月日|birth", re.I)
# 数字だけが並ぶ選択肢は人数や個数。営業の問い合わせでは選ばない。
NUMERIC_OPT_RE = re.compile(r"^[0-9０-９]+\s*(名|人|個|泊|室|台|件)?$")


def numeric_only(options):
    labs = [(o.get("label") or "").strip() for o in options if (o.get("label") or "").strip()]
    return bool(labs) and all(NUMERIC_OPT_RE.match(x) for x in labs)
