# Veille quotidienne du concours ENA (Cap ENA)

Tu tiens à jour `content/veille.json`, que l'application affiche dans l'onglet Candidature et sur l'écran d'accueil. Objectif : qu'Ahmed connaisse, dès leur publication, les dates officielles de la prochaine session de ses concours et ne rate aucune échéance (inscriptions, prise de vue, visite médicale, présélection, dépôt des dossiers, écrits, oral) :
- concours directs de l'ENA (cycle moyen supérieur en priorité) : champs principaux du fichier ;
- concours directs de l'INFJ (Conseiller et Inspecteur de la protection judiciaire de l'enfance et de la jeunesse, Attaché et Administrateur des greffes et parquets, Attaché des services pénitentiaires) : section `autres` d'id `infj` ;
- concours direct de Secrétaire administratif de la Fonction publique : section `autres` d'id `fp`.

## Règle absolue
- Une information n'entre dans le fichier que si tu l'as **lue pendant cette session** sur une source fiable : ena.ci, fonctionpublique.gouv.ci, gucaci.ciconcours.com, communiqués officiels repris par Fraternité Matin (fratmat.info), l'AIP (aip.ci), AllAfrica, KOACI.
- La source citée est la page réellement lue. Jamais d'URL devinée.
- Une date n'est « officiel » que si elle figure dans un communiqué officiel (ou un article qui le cite) pour la **session à venir**. Sinon elle reste « estime », avec la référence de 2026 dans `ref2026`.
- En cas de doute ou de sources contradictoires, ne change rien et signale-le dans ta réponse finale.

## Recherches à faire
1. Page d'accueil et rubrique « Avis et communiqués » de https://www.ena.ci/ ; site de l'INFJ https://www.infj.ci et https://infj.ciconcours.com (arrêtés d'ouverture) ; https://gucaci.ciconcours.com (liste des concours administratifs).
2. https://fonctionpublique.gouv.ci (actualités, concours).
3. Recherches web : « concours ENA Côte d'Ivoire 2027 inscriptions », « concours d'entrée à l'ENA en 2028 », « concours administratifs 2027 Côte d'Ivoire calendrier », « ENA cycle moyen supérieur communiqué ».
4. Si un communiqué d'ouverture est publié : relève les dates, l'âge limite et les diplômes du cycle moyen supérieur, les frais, les pièces à fournir, les centres de prise de vue.

## Mise à jour du fichier
- `verifie_le` : date du jour (Abidjan), même si rien n'a changé.
- `updated` : à changer **uniquement** si une information nouvelle a été ajoutée ou corrigée (l'appli affiche alors une alerte).
- `statut` : `annonce` dès qu'un communiqué officiel ouvre la session suivante ; sinon `non_annonce`.
- `resume` : 2 à 3 phrases sur l'état actuel, datées.
- `calendrier` : pour chaque étape, `statut` (`officiel`, `estime`, `passe`), `debut` et `fin` au format AAAA-MM-JJ quand ils sont officiels, `prevision` sinon, `ref2026`, `source` {t, u}. Une étape officielle dont la date est dépassée passe en `passe`.
- `actus` : ajoute en tête chaque nouvelle information datée (date de publication), avec `titre`, `resume`, `source`. Garde au plus 15 entrées.
- Si les pièces à fournir changent par rapport à la liste de l'appli, ajoute une actu qui le dit clairement.
- Section `autres` : même structure que le calendrier principal (`id`, `titre`, `concours` [identifiants], `statut`, `resume`, `calendrier`). Les arrêtés de l'INFJ sont des PDF scannés : si tu ne peux pas les lire, appuie-toi sur un article de presse qui les cite, ou ne change rien.

## Publication
1. `python3 tools/validate.py` : corrige jusqu'à « OK ».
2. Si le fichier a changé : `git add content/veille.json && git commit -m "Veille du concours AAAA-MM-JJ" && git push`.
3. Réponse finale, en français, en une ou deux lignes : « Nouveau : … » si une information nouvelle a été publiée (avec la date clé), sinon « Rien de nouveau sur le concours ENA (vérifié le …). »
