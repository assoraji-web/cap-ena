# Production quotidienne des contenus Cap ENA

Tu produis chaque nuit de nouveaux contenus pour **Cap ENA**, l'application de préparation d'Ahmed aux concours directs de l'ENA de Côte d'Ivoire (cycle moyen supérieur en priorité, cycle supérieur ensuite). L'application télécharge ce que tu publies dans `content/`.

## Règle absolue : la vérité
- Chaque fait (date, chiffre, nom, institution, article de loi, siège, définition juridique) doit être **vérifié pendant cette session** avec WebSearch ou WebFetch sur une source fiable : texte officiel, site institutionnel (gouv.ci, ena.ci, fonctionpublique.gouv.ci, bceao.int, uemoa.int, un.org…), presse de référence (Fraternité Matin, AIP, AllAfrica), encyclopédie reconnue.
- La source citée (`src`) est la page que tu as réellement lue et qui confirme le fait. Jamais une URL devinée.
- Si un fait n'est pas confirmé, ou si deux sources se contredisent sans arbitrage possible, **tu n'écris pas la question**.
- Pas d'actualité de moins de 30 jours (risque d'évolution), pas de titulaires de fonctions susceptibles d'avoir changé, sauf vérification du jour et mention de la date dans l'explication.
- Les questions de langue (`verif: "regle"`) suivent une règle de grammaire ou de lexique établie ; l'explication énonce la règle. Les questions de calcul (`verif: "calcul"`) portent un champ `calc` (expression arithmétique) que le contrôleur recalcule.
- Les distracteurs doivent être **certainement faux**.

## Ce que tu produis chaque nuit : les niveaux du programme
L'appli est un parcours à niveaux. Le programme complet est dans `content/programme.json` (matières, niveaux ordonnés, objectifs). Un niveau n'est jouable que lorsque sa leçon existe : ton travail est de **remplir les niveaux dans l'ordre**, sans jamais sauter un niveau.

1. Dresse la liste des niveaux déjà pourvus : ceux qui ont `lecon_integree` dans programme.json, et ceux qui ont une leçon avec le champ `niv` dans les packs `content/AAAA-MM.json`.
2. Pour chaque matière, le prochain niveau à produire est le premier niveau non pourvu.
3. Produis **3 niveaux** cette nuit : choisis les matières qui ont le moins de niveaux pourvus d'avance (à égalité : français, anglais, culture générale, logique, PES, droit constitutionnel, SOG, résumé, droit administratif, oral, note de synthèse).
4. Pour chaque niveau : une leçon complète avec `"niv": "<identifiant du niveau>"` et ses **10 à 12 questions** portant le tag `"niv-<identifiant>"` (le contrôleur en exige au moins 6). La leçon suit fidèlement le titre et les objectifs du niveau.
5. En plus : 6 questions de culture générale vérifiées (actualité de plus de 30 jours, Afrique, Europe, Amériques, Asie, organisations internationales) avec le tag `cg-libre`, et, si une matière d'écrit a été produite, 1 sujet original (`src: "original"`) avec un plan corrigé de 3 à 5 lignes.
6. Niveau « Révision » (dernier niveau d'une matière) : questions couvrant toute la matière.
- Toujours des contenus originaux, aussi exigeants que les sujets de l'ENA ou plus : ne te contente jamais de recopier d'anciens sujets.
- La bonne réponse doit être répartie sur les positions 0 à 3.
- Matières (`m`) : fr (français), cg, ang, log, pes, dc, da, fp, sog, ct, ns, oral.
- Leçon de langue, de calcul ou de méthode : `"verif": "regle"`, `"calcul"` ou `"methode"` (pas d'URL exigée). Toute leçon qui contient des faits porte `sources` (pages réellement lues).

## L'esprit des sujets ENA (relevé sur les sujets 2019-2026)
- Présélection en QCM, barème +1 / 0 / −1 (culture générale, anglais) et +2 / 0 / −2 (logique). Types : intrus, synonymes, antonymes, paronymes, analogies, orthographe d'usage, pluriels des noms composés, conjugaison, accords ; histoire contemporaine, organisations internationales, personnalités et culture ivoiriennes et africaines ; so/such, comparatifs, pluriels et féminins irréguliers ; problèmes d'organisation, proportions, suites.
- Écrits : assertions à commenter et discuter (paix, élections, jeunesse, emploi, environnement, éthique, sport, mondialisation) ; PES sur les politiques publiques ivoiriennes (inclusion sociale, économie informelle) ; droit constitutionnel (rapports entre pouvoirs, contrôle de constitutionnalité) ; droit administratif (régime des actes administratifs) ; résumé en un nombre fixe de mots ± 10 % ; note de synthèse de 4 pages sur dossier.

## Format (fichier `content/AAAA-MM.json`)
```json
{ "month": "2026-10", "days": [ { "date": "2026-10-12",
  "questions": [ { "id": "n20261012-dc04-01", "m": "dc", "tag": "niv-dc04", "q": "…", "o": ["…","…","…","…"], "a": 0,
                   "e": "explication qui cite l'article ou la règle", "src": {"t": "titre lisible", "u": "https://…"} } ],
  "lessons":   [ { "id": "L20261012dc04", "niv": "dc04", "m": "dc", "titre": "…", "min": 45, "tech": ["## …", "- …"], "fond": ["…"],
                   "retenir": ["…"], "exo": {"tag": "niv-dc04", "n": 10}, "sources": [{"t":"…","u":"https://…"}] } ],
  "sujets":    [ { "e": "sog", "src": "original", "ref": "Entraînement · 12 oct. 2026", "t": "…", "plan": ["…"] } ] } ] }
```
- Blocs de texte des leçons : `## ` intertitre, `- ` puce, `> ` encadré, `! ` piège, `~ ` exemple.
- La bonne réponse peut être à n'importe quelle position (`a` de 0 à 3) : varie-la.
- Matières : fr, cg, ang, log, pes, dc, da, fp, sog, ct, ns, oral. Épreuves d'écrit : sog, pes, ct, dc, ns, da.
- Ajoute le jour au fichier du mois en cours (crée-le s'il n'existe pas).

## Signalements d'erreurs
Avant de produire, liste les issues GitHub ouvertes portant le label `erreur` (`gh issue list --label erreur --state open`). Pour chacune : vérifie avec une source. Si l'erreur est réelle, ajoute l'identifiant au tableau `retired` de `content/index.json` (la question disparaît de l'appli), écris une version corrigée avec un nouvel identifiant, puis ferme l'issue avec un commentaire qui cite la source. Si la question était juste, ferme l'issue en expliquant pourquoi, source à l'appui.

## Publication
1. `python3 tools/build_index.py`
2. `python3 tools/validate.py` : tant qu'il échoue, corrige. Ne publie jamais un pack en échec.
3. `git add content && git commit -m "Contenus du AAAA-MM-JJ" && git push`
4. Termine par un message de 2 lignes : les niveaux remplis (identifiant et titre), le nombre de questions, et les signalements traités.
