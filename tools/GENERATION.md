# Production quotidienne des contenus Cap ENA

Tu produis chaque nuit de nouveaux contenus pour **Cap ENA**, l'application de préparation aux concours administratifs de Côte d'Ivoire (ENA, INFJ, Fonction publique). Elle sert à tout candidat, du BEPC au doctorat, fonctionnaire ou non : les contenus doivent convenir à tous ces niveaux, chaque matière gardant l'exigence des concours qui la demandent. L'application télécharge ce que tu publies dans `content/`.

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
3. Produis **3 niveaux** cette nuit, en tournant entre trois groupes : **1 niveau ENA** (français, anglais, culture générale, logique, PES, droit constitutionnel, SOG, résumé, note de synthèse, droit administratif, monde contemporain, oral), **1 niveau INFJ** (organisation judiciaire, droits de l'enfant, OPAJ, système pénitentiaire, droit civil et commercial, droit pénal, informatique, éducation civique et morale) et **1 niveau Fonction publique** (statut général de la fonction publique, rédaction administrative et mise au net, management des organisations publiques, logique, culture générale). Ne produis pas de leçon pour le dernier niveau d'une matière (« Révision : … ») : l'application en fait automatiquement un bilan cumulatif à partir des fiches « À retenir » et des questions de tous les niveaux précédents. Les fiches « À retenir » servent aux rappels espacés : chaque point doit être une phrase autonome, exacte et mémorisable. Prévois au moins 8 questions par niveau, pour que les rappels (3 questions par niveau) ne répètent pas toujours les mêmes. Dans chaque groupe, choisis la matière qui a le moins de niveaux pourvus d'avance, en commençant par les matières qui n'ont que leur niveau de méthode. Les matières et épreuves des concours détaillés figurent dans `concours.js` (constante CONCOURS) ; le catalogue des 460 concours de la Fonction publique est dans `content/catalogue.json`.
4. Pour chaque niveau : une leçon complète avec `"niv": "<identifiant du niveau>"` et ses **10 à 12 questions** portant le tag `"niv-<identifiant>"` (le contrôleur en exige au moins 6). La leçon suit fidèlement le titre et les objectifs du niveau.
5. En plus : 6 questions de culture générale vérifiées (actualité de plus de 30 jours, Afrique, Europe, Amériques, Asie, organisations internationales) avec le tag `cg-libre`, et, si une matière d'écrit a été produite, 1 sujet original (`src: "original"`) avec un plan corrigé de 3 à 5 lignes.
6. Niveau « Révision » (dernier niveau d'une matière) : questions couvrant toute la matière.
- Toujours des contenus originaux, aussi exigeants que les sujets de l'ENA ou plus : ne te contente jamais de recopier d'anciens sujets.
- La bonne réponse doit être répartie sur les positions 0 à 3.
- Matières (`m`) : fr (français), cg, ang, log, pes, dc, da, fp, sog, ct, ns, oral, oj (organisation judiciaire), denf (droits de l'enfant), sfp (statut et déontologie de la fonction publique), opaj, pen (système pénitentiaire), dciv (droit civil et commercial), info (informatique et bureautique).
- Droit ivoirien : chaque article, loi ou décret cité doit être vérifié sur le texte officiel (Journal officiel, site du Gouvernement, de l'Assemblée nationale, de la Cour suprême ou de l'INFJ). Le statut général de la fonction publique en vigueur est la loi n°2023-892 du 23 novembre 2023 (citée par les communiqués 2026 des concours de la Fonction publique) ; ses modalités communes d'application sont fixées par le décret n°2025-120 du 26 février 2025. Vérifie chaque article sur le texte officiel avant de le citer.
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
- Matières : fr, cg, ang, log, pes, dc, da, fp, sog, ct, ns, oral, oj, denf, sfp, opaj, pen, dciv, info. Épreuves d'écrit : sog, pes, ct, dc, ns, da, oj, denf, sfp, opaj, pen, dciv.
- Ajoute le jour au fichier du mois en cours (crée-le s'il n'existe pas).

## Signalements d'erreurs
Avant de produire, liste les issues GitHub ouvertes portant le label `erreur` (`gh issue list --label erreur --state open`). Pour chacune : vérifie avec une source. Si l'erreur est réelle, ajoute l'identifiant au tableau `retired` de `content/index.json` (la question disparaît de l'appli), écris une version corrigée avec un nouvel identifiant, puis ferme l'issue avec un commentaire qui cite la source. Si la question était juste, ferme l'issue en expliquant pourquoi, source à l'appui.

## Publication
1. `python3 tools/build_index.py`
2. `python3 tools/validate.py` : tant qu'il échoue, corrige. Ne publie jamais un pack en échec.
3. `git add content && git commit -m "Contenus du AAAA-MM-JJ" && git push`
4. Termine par un message de 2 lignes : les niveaux remplis (identifiant et titre), le nombre de questions, et les signalements traités.
