#!/usr/bin/env python3
"""Nombre de questions par niveau pourvu (leçons intégrées à app.js et leçons des packs).
Sert à choisir les niveaux à compléter jusqu'à 20 questions. Usage : python3 tools/compte_questions.py [--moins 20]"""
import json, re, glob, collections, sys, pathlib
R = pathlib.Path(__file__).resolve().parent.parent
seuil = int(sys.argv[sys.argv.index("--moins")+1]) if "--moins" in sys.argv else 20
src = (R/"app.js").read_text(encoding="utf-8")
base = collections.Counter(m.group(1) for m in re.finditer(r'^\["\w+","([\w-]+)",', src, re.M))
pk = collections.Counter(); niv = {}
for f in sorted(glob.glob(str(R/"content"/"20*.json"))):
    for d in json.load(open(f, encoding="utf-8"))["days"]:
        for q in d.get("questions", []): pk[q.get("tag")] += 1
        for l in d.get("lessons", []):
            if l.get("niv"): niv[l["niv"]] = (l.get("exo") or {}).get("tag")
prog = json.load(open(R/"content"/"programme.json", encoding="utf-8"))
print("matière niveau tag questions")
for t in prog:
    for L in t["levels"][:-1]:
        tag = L.get("tag_integre") if L.get("lecon_integree") else niv.get(L["id"])
        if not tag: continue
        n = base[tag] + pk[tag]
        if n < seuil: print(t["k"], L["id"], tag, n)
