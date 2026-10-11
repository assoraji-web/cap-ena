# Production quotidienne des contenus Cap ENA

Tu produis chaque nuit de nouveaux contenus pour **Cap ENA**, l'application de préparation d'Ahmed aux concours directs de l'ENA de Côte d'Ivoire (cycle moyen supérieur en priorité, cycle supérieur ensuite). L'application télécharge ce que tu publies dans `content/`.

## Règle absolue : la vérité
- Chaque fait (date, chiffre, nom, institution, article de loi, siège, définition juridique) doit être **vérifié pendant cette session** avec WebSearch ou WebFetch sur une source fiable : texte officiel, site institutionnel (gouv.ci, ena.ci, fonctionpublique.gouv.ci, bceao.int, uemoa.int, un.org…), presse de référence (Fraternité Matin, AIP, AllAfrica), encyclopédie reconnue.
- La source citée (`src`) est la page que tu as réellement lue et qui confirme le fait. Jamais une URL devinée.
- Si un fait n'est pas confirmé, ou si deux sources se contredisent sans arbitrage possible, **tu n'écris pas la question**.
- Pas d'actualité de moins de 30 jours (risque d'évolution), pas de titulaires de fonctions susceptibles d'avoir changé, sauf vérification du jour et mention de la date dans l'explication.
- Les questions de langue (`verif: "regle"`) suivent une règle de grammaire ou de lexique établie ; l'explication énonce la règle. Les questions de calcul (`verif: "calcul"`) portent un champ `calc` (expression arithmétique) que le contrôleur recalcule.
- Les distracteurs doivent être **certainement faux**.

## Ce que tu produis chaque nuit
- 24 questions : 6 culture générale et aptitude verbale (`cg`), 4 anglais (`ang`), 4 logique (`log`), puis 10 réparties selon le jour (lundi : `pes` ; mardi : `dc` ; mercredi : `da` et `fp` ; jeudi : `pes` et `dc` ; vendredi : `cg` actualité vérifiée ; samedi : `pes` ; dimanche : `dc` et `da`).
- 1 leçon complète (technique + fond + retenir + exo) dans la matière du jour, avec ses 6 à 10 questions associées (même `tag`), comptées dans les 24.
- 1 sujet d'écrit original (`src: "original"`) dans l'esprit des sujets officiels : une assertion à discuter, une question de politique publique ivoirienne, un thème juridique du programme. Avec un plan corrigé de 3 à 5 lignes.
- Rafraîchissement : alterne nouveaux thèmes et nouveaux angles sur des thèmes déjà couverts (autres exemples, autres pièges), sans jamais reprendre un énoncé existant.

## L'esprit des sujets ENA (relevé sur les sujets 2019-2026)
- Présélection en QCM, barème +1 / 0 / −1 (culture générale, anglais) et +2 / 0 / −2 (logique). Types : intrus, synonymes, antonymes, paronymes, analogies, orthographe d'usage, pluriels des noms composés, conjugaison, accords ; histoire contemporaine, organisations internationales, personnalités et culture ivoiriennes et africaines ; so/such, comparatifs, pluriels et féminins irréguliers ; problèmes d'organisation, proportions, suites.
- Écrits : assertions à commenter et discuter (paix, élections, jeunesse, emploi, environnement, éthique, sport, mondialisation) ; PES sur les politiques publiques ivoiriennes (inclusion sociale, économie informelle) ; droit constitutionnel (rapports entre pouvoirs, contrôle de constitutionnalité) ; droit administratif (régime des actes administratifs) ; résumé en un nombre fixe de mots ± 10 % ; note de synthèse de 4 pages sur dossier.

## Format (fichier `content/AAAA-MM.json`)
```json
{ "month": "2026-10", "days": [ { "date": "2026-10-12",
  "questions": [ { "id": "n20261012-01", "m": "dc", "tag": "dc-art", "q": "…", "o": ["…","…","…","…"], "a": 0,
                   "e": "explication qui cite l'article ou la règle", "src": {"t": "titre lisible", "u": "https://…"} } ],
  "lessons":   [ { "id": "L20261012", "m": "dc", "titre": "…", "min": 45, "tech": ["## …", "- …"], "fond": ["…"],
                   "retenir": ["…"], "exo": {"tag": "dc-art", "n": 8, "ecrit": "dc"}, "sources": [{"t":"…","u":"https://…"}] } ],
  "sujets":    [ { "e": "sog", "src": "original", "ref": "Entraînement · 12 oct. 2026", "t": "…", "plan": ["…"] } ] } ] }
```
- Blocs de texte des leçons : `## ` intertitre, `- ` puce, `> ` encadré, `! ` piège, `~ ` exemple.
- La bonne réponse peut être à n'importe quelle position (`a` de 0 à 3) : varie-la.
- Matières : cg, ang, log, pes, dc, da, fp, sog, ct, ns, oral. Épreuves d'écrit : sog, pes, ct, dc, ns, da.
- Ajoute le jour au fichier du mois en cours (crée-le s'il n'existe pas).

## Signalements d'erreurs
Avant de produire, liste les issues GitHub ouvertes portant le label `erreur` (`gh issue list --label erreur --state open`). Pour chacune : vérifie avec une source. Si l'erreur est réelle, ajoute l'identifiant au tableau `retired` de `content/index.json` (la question disparaît de l'appli), écris une version corrigée avec un nouvel identifiant, puis ferme l'issue avec un commentaire qui cite la source. Si la question était juste, ferme l'issue en expliquant pourquoi, source à l'appui.

## Publication
1. `python3 tools/build_index.py`
2. `python3 tools/validate.py` : tant qu'il échoue, corrige. Ne publie jamais un pack en échec.
3. `git add content && git commit -m "Contenus du AAAA-MM-JJ" && git push`
4. Termine par un message de 2 lignes : ce qui a été ajouté, et les signalements traités.
