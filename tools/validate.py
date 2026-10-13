#!/usr/bin/env python3
"""Contrôleur des contenus Cap ENA.
Refuse tout pack qui ne respecte pas les règles de qualité. Usage : python3 tools/validate.py
Sortie non nulle en cas d'erreur : rien ne doit être publié tant que le contrôleur échoue."""
import json, re, sys, unicodedata, pathlib, hashlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
C = ROOT / "content"
MATIERES = {"fr","cg","ang","log","pes","dc","da","fp","sog","ct","ns","oral","oj","denf","sfp","opaj","pen","dciv","info"}
EPREUVES = {"sog","pes","ct","dc","ns","da","oj","denf","sfp","opaj","pen","dciv"}
# Catégories où une source web n'est pas exigée, mais une vérification explicite l'est.
SANS_URL = {"regle", "calcul", "methode"}

def norm(s):
    s = unicodedata.normalize("NFKD", s.lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", " ", s).strip()

errors, warns = [], []
def err(where, msg): errors.append(f"{where} : {msg}")

base = json.loads((C / "base.json").read_text(encoding="utf-8"))
seen_q = {norm(t) for t in base.get("questions", [])}
seen_l = set(base.get("lessons", []))
seen_s = {norm(t) for t in base.get("sujets", [])}
ids = set()
prog = json.loads((C / "programme.json").read_text(encoding="utf-8"))
NIVS = {lv["id"]: lv for t in prog for lv in t["levels"]}
niv_used = {lv["id"] for lv in NIVS.values() if lv.get("lecon_integree")}

index = json.loads((C / "index.json").read_text(encoding="utf-8"))
for pk in index.get("packs", []):
    f = C / pk["file"]
    if not f.exists():
        err(pk["file"], "fichier absent"); continue
    raw = f.read_bytes()
    if pk.get("v") != hashlib.sha1(raw).hexdigest()[:10]:
        err(pk["file"], "version (v) non à jour : lancez tools/build_index.py")
    data = json.loads(raw.decode("utf-8"))
    for day in data.get("days", []):
        d = day.get("date", "?")
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", d): err(pk["file"], f"date invalide {d}")
        for i, q in enumerate(day.get("questions", [])):
            w = f"{pk['file']} {d} question {i+1}"
            for k in ("id","m","tag","q","o","a","e"):
                if k not in q: err(w, f"champ manquant {k}")
            if any(k not in q for k in ("id","m","q","o","a")): continue
            if q["id"] in ids: err(w, f"identifiant en double {q['id']}")
            ids.add(q["id"])
            if q["m"] not in MATIERES: err(w, f"matière inconnue {q['m']}")
            if not (isinstance(q["o"], list) and len(q["o"]) == 4): err(w, "il faut exactement 4 propositions")
            elif len({norm(o) for o in q["o"]}) != 4: err(w, "propositions en double")
            if not (isinstance(q["a"], int) and 0 <= q["a"] < 4): err(w, "index de réponse invalide")
            if len(q.get("e","")) < 15: err(w, "explication trop courte")
            n = norm(q["q"])
            if n in seen_q: err(w, "question déjà existante (doublon)")
            seen_q.add(n)
            verif = q.get("verif")
            src = q.get("src")
            if verif not in SANS_URL:
                if not (isinstance(src, dict) and str(src.get("u","")).startswith("https://") and src.get("t")):
                    err(w, "fait sans source vérifiable : src {t, u https} obligatoire (ou verif = regle / calcul / methode)")
            if verif == "calcul":
                expr = q.get("calc")
                if not expr or not re.fullmatch(r"[0-9+\-*/(). ]+", expr):
                    err(w, "calcul : champ calc absent ou non arithmétique")
                else:
                    val = eval(expr, {"__builtins__": {}}, {})
                    nums = re.findall(r"-?\d[\d  ]*(?:,\d+)?", q["o"][q["a"]])
                    got = [float(x.replace(" ","").replace(" ","").replace(",", ".")) for x in nums]
                    if not any(abs(g - val) < 1e-6 * max(1, abs(val)) for g in got):
                        err(w, f"calcul : la bonne réponse ne vaut pas {val}")
        for i, l in enumerate(day.get("lessons", [])):
            w = f"{pk['file']} {d} leçon {i+1}"
            for k in ("id","m","titre","min","tech","fond","retenir","exo"):
                if k not in l: err(w, f"champ manquant {k}")
            if l.get("id") in seen_l or l.get("id") in ids: err(w, "identifiant de leçon en double")
            seen_l.add(l.get("id")); ids.add(l.get("id"))
            if l.get("m") not in MATIERES: err(w, "matière inconnue")
            if not l.get("sources") and l.get("verif") not in SANS_URL:
                err(w, "leçon de fond sans sources (sources [{t,u}] obligatoires, ou verif = regle / calcul / methode)")
            nv = l.get("niv")
            if nv is not None:
                if nv not in NIVS: err(w, f"niveau inconnu {nv} (voir content/programme.json)")
                elif nv in niv_used: err(w, f"le niveau {nv} a déjà sa leçon")
                niv_used.add(nv)
                tg = (l.get("exo") or {}).get("tag")
                nq = sum(1 for dd in data.get("days", []) for qq in dd.get("questions", []) if qq.get("tag") == tg)
                if nq < 6: err(w, f"niveau {nv} : il faut au moins 6 questions avec le tag {tg} (trouvées : {nq})")
            for s in l.get("sources", []):
                if not str(s.get("u","")).startswith("https://"): err(w, "source sans URL https")
            tag = (l.get("exo") or {}).get("tag")
            if tag and not any(q.get("tag") == tag for dd in data.get("days", []) for q in dd.get("questions", [])):
                warns.append(f"{w} : aucune question avec le tag {tag} dans ce pack (vérifiez qu'elles existent ailleurs)")
        for i, s in enumerate(day.get("sujets", [])):
            w = f"{pk['file']} {d} sujet {i+1}"
            if s.get("e") not in EPREUVES: err(w, "épreuve inconnue")
            if s.get("src") not in ("original", "officiel"): err(w, "src doit valoir original ou officiel")
            if s.get("src") == "officiel" and not str((s.get("source") or {}).get("u","")).startswith("https://"):
                err(w, "sujet officiel sans source")
            n = norm(s.get("t",""))
            if n in seen_s: err(w, "sujet déjà existant")
            seen_s.add(n)
for r in index.get("retired", []):
    if not isinstance(r, str): err("index.json", "retired doit contenir des identifiants")

# veille du concours
vp = C / "veille.json"
if vp.exists():
    try:
        V = json.loads(vp.read_text(encoding="utf-8"))
        for k in ("updated","verifie_le","statut","resume","calendrier","actus"):
            if k not in V: err("veille.json", f"champ manquant {k}")
        if V.get("statut") not in ("annonce","non_annonce"): err("veille.json", "statut doit valoir annonce ou non_annonce")
        for i, c in enumerate(V.get("calendrier", [])):
            w = f"veille.json calendrier {i+1}"
            if not c.get("etape"): err(w, "étape manquante")
            if c.get("statut") not in ("officiel","estime","passe"): err(w, "statut doit valoir officiel, estime ou passe")
            for k in ("debut","fin"):
                if c.get(k) and not re.fullmatch(r"\d{4}-\d{2}-\d{2}", c[k]): err(w, f"{k} doit être au format AAAA-MM-JJ")
            if c.get("statut") == "officiel" and not (c.get("debut") or c.get("fin")): err(w, "une étape officielle doit avoir une date")
            if not str((c.get("source") or {}).get("u","")).startswith("https://"): err(w, "source https obligatoire")
        for j, sec in enumerate(V.get("autres", [])):
            for k in ("id","titre","statut","calendrier"):
                if k not in sec: err(f"veille.json autres {j+1}", f"champ manquant {k}")
            if sec.get("statut") not in ("annonce","non_annonce"): err(f"veille.json autres {j+1}", "statut invalide")
            for i, c in enumerate(sec.get("calendrier", [])):
                w = f"veille.json autres {j+1} calendrier {i+1}"
                if c.get("statut") not in ("officiel","estime","passe"): err(w, "statut invalide")
                if c.get("statut") == "officiel" and not (c.get("debut") or c.get("fin")): err(w, "une étape officielle doit avoir une date")
                if not str((c.get("source") or {}).get("u","")).startswith("https://"): err(w, "source https obligatoire")
        for i, a_ in enumerate(V.get("actus", [])):
            w = f"veille.json actu {i+1}"
            if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", str(a_.get("date",""))): err(w, "date invalide")
            if not a_.get("titre"): err(w, "titre manquant")
            if not str((a_.get("source") or {}).get("u","")).startswith("https://"): err(w, "source https obligatoire")
    except json.JSONDecodeError as e:
        err("veille.json", f"JSON invalide : {e}")

for x in warns: print("Avertissement :", x)
if errors:
    print(f"ÉCHEC : {len(errors)} erreur(s)")
    for e in errors: print(" -", e)
    sys.exit(1)
print(f"OK : {len(ids)} éléments contrôlés, aucune erreur.")
