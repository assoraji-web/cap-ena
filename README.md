# Cap ENA

Application de préparation aux concours directs de l'ENA de Côte d'Ivoire (installable sur Android, fonctionne hors connexion).

- `index.html`, `app.js`, `sw.js`, `manifest.webmanifest`, icônes : l'application.
- `content/` : contenus publiés chaque jour (packs mensuels `AAAA-MM.json`, `index.json`, `base.json`).
- `tools/` : contrôleur (`validate.py`), index (`build_index.py`) et consignes de production (`GENERATION.md`).

Chaque question nouvelle porte une source vérifiée, ou une règle de langue, ou un calcul recalculé par le contrôleur. Une erreur ? Bouton « Signaler une erreur » dans l'appli.
