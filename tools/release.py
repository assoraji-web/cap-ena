#!/usr/bin/env python3
"""Publication d'une nouvelle version de l'appli (app.js est désormais le fichier source).
Incrémente le cache du service worker, la version affichée dans le Profil et le paramètre ?v= de index.html,
pour que téléphones et ordinateurs chargent bien la nouvelle version. Usage : python3 tools/release.py"""
import re, datetime, pathlib
R = pathlib.Path(__file__).resolve().parent.parent
sw = (R/"sw.js").read_text(encoding="utf-8")
n = int(re.search(r"capena-v(\d+)", sw).group(1)) + 1
(R/"sw.js").write_text(re.sub(r"capena-v\d+", f"capena-v{n}", sw), encoding="utf-8")
d = datetime.date.today().strftime("%d/%m/%Y")
app = (R/"app.js").read_text(encoding="utf-8")
app, k = re.subn(r'const APP_VERSION = "[^"]*";', f'const APP_VERSION = "v{n} du {d}";', app)
assert k == 1, "APP_VERSION introuvable dans app.js"
(R/"app.js").write_text(app, encoding="utf-8")
ix = (R/"index.html").read_text(encoding="utf-8")
ix, k = re.subn(r'app\.js\?v=[\w.-]+', f"app.js?v={n}", ix)
assert k == 1, "balise app.js introuvable dans index.html"
(R/"index.html").write_text(ix, encoding="utf-8")
print(f"Version v{n} du {d} prête : sw.js, app.js et index.html mis à jour.")
