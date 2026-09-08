# -*- coding: utf-8 -*-
"""public/ の写真の実寸を lib/photoDims.json に書き出す。

記事の写真を「切らずに」並べるために使う。写真を足したら再実行すること。
    python scripts/gen-photo-dims.py
"""
import io, json, os, sys
from PIL import Image

sys.stdout.reconfigure(encoding="utf-8")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP = {"piyo", "icons", "generated-icons", "media"}

dims = {}
for root, dirs, files in os.walk(os.path.join(ROOT, "public")):
    dirs[:] = [d for d in dirs if d not in SKIP]
    for fn in files:
        if not fn.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
            continue
        p = os.path.join(root, fn)
        key = "/" + os.path.relpath(p, os.path.join(ROOT, "public")).replace("\\", "/")
        try:
            with Image.open(p) as im:
                dims[key] = [im.size[0], im.size[1]]
        except Exception as e:
            print("skip", key, e)

out = os.path.join(ROOT, "lib", "photoDims.json")
io.open(out, "w", encoding="utf-8").write(
    json.dumps(dims, ensure_ascii=False, separators=(",", ":"), sort_keys=True)
)
print("wrote", len(dims), "entries ->", out)
