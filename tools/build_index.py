#!/usr/bin/env python3
"""Recalcule content/index.json (liste des packs et leur version). À lancer après chaque ajout."""
import json, hashlib, pathlib, datetime
C = pathlib.Path(__file__).resolve().parent.parent / "content"
idx_path = C / "index.json"
old = json.loads(idx_path.read_text(encoding="utf-8")) if idx_path.exists() else {}
packs = []
for f in sorted(C.glob("[0-9][0-9][0-9][0-9]-[0-9][0-9].json")):
    packs.append({"file": f.name, "v": hashlib.sha1(f.read_bytes()).hexdigest()[:10]})
idx = {"updated": datetime.date.today().isoformat(), "packs": packs, "retired": old.get("retired", [])}
idx_path.write_text(json.dumps(idx, ensure_ascii=False, indent=1), encoding="utf-8")
print("index.json :", len(packs), "pack(s)")
