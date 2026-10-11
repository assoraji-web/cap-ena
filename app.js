const LESSONS = [];
const QUESTIONS = [];
// ============ COURS ET QUESTIONS : PRÉSÉLECTION ============
// Format d'une leçon : blocs de texte. "## " = intertitre, "- " = puce, "> " = encadré, "! " = piège à éviter, "~ " = exemple.
LESSONS.push(

{ id:"p0", m:"cg", titre:"Stratégie de la présélection : le barème qui pénalise", min:20,
  tech:[
  "## Ce que dit le barème officiel",
  "Les sujets de présélection de l'ENA publiés pour les sessions 2023 et 2024 indiquent le barème sur la page de garde : en culture générale et aptitude verbale, une bonne réponse vaut 1 point, l'absence de réponse 0, une mauvaise réponse −1. En logique (test d'organisation et aptitudes numériques), on trouve +2, 0 et −2.",
  "> Conséquence directe : répondre au hasard fait perdre des points en moyenne. Avec 4 propositions, un pur hasard rapporte 1 fois sur 4 (+1) et coûte 3 fois sur 4 (−1) : l'espérance est de −0,5 point par question.",
  "## La règle des trois paquets",
  "- Paquet 1 : je suis sûr. Je réponds immédiatement.",
  "- Paquet 2 : j'hésite entre deux propositions. L'espérance devient nulle (+1 ou −1 à chances égales) : je réponds seulement si un indice me fait pencher.",
  "- Paquet 3 : je ne sais pas. Je laisse vide, sans regret.",
  "## Gérer l'heure",
  "- Premier passage rapide : toutes les questions du paquet 1.",
  "- Deuxième passage : les questions du paquet 2, avec la technique d'élimination.",
  "- Ne restez jamais plus de 2 minutes sur une question de logique : revenez-y à la fin.",
  "- Reportez vos réponses sur la feuille au fur et à mesure, pas à la dernière minute.",
  "## La technique d'élimination",
  "Barrez d'abord ce qui est certainement faux : une date impossible, un mot mal orthographié, un terme hors sujet. Chaque proposition éliminée rend le pari plus rentable : avec deux propositions éliminées sur quatre, vous revenez au cas « j'hésite entre deux »."
  ],
  fond:[
  "## Ce qu'on trouve dans les épreuves de présélection",
  "D'après les sujets 2023 à 2025 du cycle supérieur publiés sur les sites de préparation ivoiriens, le questionnaire mélange :",
  "- aptitude verbale : intrus, synonymes, antonymes, paronymes, analogies, orthographe d'usage, pluriels des noms composés, conjugaison, accords ;",
  "- culture générale : histoire contemporaine, organisations internationales, personnalités ivoiriennes, littérature et bande dessinée africaines, sport, économie mondiale ;",
  "- anglais : so/such, comparatifs, féminins et pluriels irréguliers, prépositions, temps verbaux ;",
  "- logique : problèmes d'organisation (qui habite où, qui fait quoi), proportions, prix, âges, suites.",
  "> L'application reproduit ces types de questions avec des énoncés originaux, et le mode « Barème officiel » applique le −1 / −2."
  ],
  retenir:["Mauvaise réponse = point perdu : ne répondez pas au hasard.","Deux passages : d'abord ce qui est sûr, puis l'élimination.","Jamais plus de 2 minutes bloqué sur une question."],
  exo:{tag:"strat", n:6} },

{ id:"p1", m:"cg", titre:"Aptitude verbale 1 : synonymes, antonymes, paronymes, intrus", min:45,
  tech:[
  "## Méthode pour les questions de vocabulaire",
  "- Lisez le mot seul et donnez-en mentalement une définition courte avant de regarder les propositions.",
  "- Synonyme : remplacez le mot par chaque proposition dans une phrase simple. Le sens doit rester le même.",
  "- Antonyme : cherchez le sens contraire exact, pas un mot simplement différent.",
  "- Paronyme : deux mots de forme proche mais de sens différent. La question porte souvent sur le bon mot à choisir dans un contexte.",
  "- Intrus : trouvez la catégorie commune à trois mots ; l'intrus est celui qui n'y entre pas. Méfiez-vous des catégories de forme (nombre de lettres) : la catégorie de sens prime presque toujours.",
  "- Analogie « A est à B ce que C est à ? » : formulez la relation entre A et B en une phrase (partie/tout, outil/métier, cause/effet), puis appliquez-la à C.",
  "! Les distracteurs sont souvent des paronymes du bon mot. Lisez lettre par lettre."
  ],
  fond:[
  "## Paronymes fréquents dans les concours",
  "- Acception (sens d'un mot) / acceptation (fait d'accepter).",
  "- Affliger (attrister) / infliger (imposer une peine).",
  "- Collusion (entente secrète) / collision (choc).",
  "- Conjecture (supposition) / conjoncture (situation du moment).",
  "- Éminent (remarquable) / imminent (sur le point d'arriver).",
  "- Effraction (forcer une entrée) / infraction (violation d'une règle).",
  "- Prodige (merveille) / prodigue (qui dépense sans compter).",
  "- Recouvrer (récupérer, recouvrer l'impôt) / recouvrir (couvrir à nouveau).",
  "- Inclinaison (état de ce qui penche) / inclination (penchant, goût).",
  "- Acolyte (compagnon, complice) / alcoolique : piège de forme sans lien de sens.",
  "## Mots soutenus à connaître",
  "- Léthargie : torpeur, inactivité. Contraire : vivacité, activité.",
  "- Érudition : savoir approfondi. Contraire : ignorance.",
  "- Pérenne : durable. Contraire : éphémère.",
  "- Prolixe : trop long. Contraire : concis.",
  "- Sagace : perspicace. Contraire : obtus.",
  "- Véhément : emporté, passionné. Contraire : calme, mesuré.",
  "- Ubiquité : fait d'être partout à la fois.",
  "- Probité : honnêteté scrupuleuse, vertu attendue du fonctionnaire.",
  "## Orthographe d'usage piégeuse",
  "- Un rai de lumière (rayon) ; des rais. « Rets » désigne un filet.",
  "- Hypoténuse (avec un t et un e final).",
  "- Développement, connexion, appeler, apercevoir, occurrence, accueil."
  ],
  retenir:["Définissez le mot avant de lire les propositions.","Pour une analogie, nommez la relation en une phrase.","Le distracteur est souvent un paronyme."],
  exo:{tag:"voc", n:12} },

{ id:"p2", m:"cg", titre:"Aptitude verbale 2 : accords, pluriels et conjugaison", min:45,
  tech:[
  "## Procédure en trois questions pour tout accord",
  "- Quel est le mot qui commande l'accord (sujet, COD placé avant, nom complété) ?",
  "- Où est-il placé par rapport au verbe ou au participe ?",
  "- Quel auxiliaire est employé (être ou avoir) ?",
  "> Participe passé avec être : il s'accorde avec le sujet. Avec avoir : il s'accorde avec le COD seulement si le COD est placé avant (« les lettres que j'ai écrites »).",
  "## Pluriel des noms composés",
  "- Seuls le nom et l'adjectif peuvent prendre la marque du pluriel ; le verbe, l'adverbe et la préposition restent invariables.",
  "- Verbe + nom : depuis les rectifications orthographiques de 1990, le nom prend la marque du pluriel quand le mot est au pluriel : des brise-glaces, des garde-côtes (quand garde est le verbe garder).",
  "- Nom + nom en apposition : les deux s'accordent (des choux-fleurs).",
  "! Certains sujets suivent l'usage traditionnel. Choisissez la forme cohérente avec la règle du nom qui varie et du verbe qui reste invariable.",
  "## Pluriels irréguliers",
  "- -al → -aux (des journaux), sauf bals, carnavals, chacals, festivals, récitals, régals.",
  "- -ou → -ous, sauf bijou, caillou, chou, genou, hibou, joujou, pou qui prennent -x.",
  "- -eu → -eux, sauf bleus, pneus, émeus, lieus (le poisson). Un lieu (endroit) → des lieux.",
  "- Les adjectifs de couleur issus d'un nom restent invariables (des yeux marron, des robes orange), sauf rose, mauve, fauve, écarlate, pourpre, violette qui s'accordent : des taches violettes."
  ],
  fond:[
  "## Conjugaisons qui tombent souvent",
  "- Recourir, courir, mourir : deux r au futur et au conditionnel (nous recourrons, ils mourraient), un seul r à l'imparfait (nous recourions).",
  "- Dissoudre : il dissout, participe dissous (masculin), dissoute (féminin).",
  "- Acquiescer : ils acquiescent (c devant e).",
  "- Résoudre : il résout, résolu.",
  "- Envoyer : j'enverrai (futur irrégulier).",
  "## Concordance et subjonctif",
  "- Après « je doute que », « bien que », « pour que », « avant que » : subjonctif (je doute qu'il ait raison).",
  "- Après « après que » : indicatif (après qu'il est parti).",
  "- Système hypothétique : si + imparfait → conditionnel présent (si les conditions étaient meilleures, la qualité augmenterait) ; si + plus-que-parfait → conditionnel passé.",
  "## Homophones",
  "- Quoique (bien que) / quoi que (quelle que soit la chose que).",
  "- Quelque (un peu de) / quel que (quel que soit le résultat).",
  "- Davantage (plus) / d'avantage (de bénéfice).",
  "- Près de (proche) / prêt à (préparé)."
  ],
  retenir:["Avoir + COD placé avant = accord.","Futur de recourir : nous recourrons (deux r).","Si + imparfait → conditionnel présent."],
  exo:{tag:"gram", n:12} },

{ id:"p3", m:"cg", titre:"Culture générale 1 : la Côte d'Ivoire, repères essentiels", min:45,
  tech:[
  "## Comment réviser la culture générale sans se noyer",
  "- Travaillez par fiches thématiques courtes : une date, un fait, une conséquence.",
  "- Associez chaque date à une image ou à une personne : la mémoire retient mieux les récits que les listes.",
  "- Révisez chaque fiche trois fois : le jour même, trois jours après, une semaine après. L'application vous ramène les erreurs pour cette raison.",
  "- Lisez un quotidien national chaque jour (Fraternité Matin, l'AIP) : les questions de présélection portent aussi sur l'actualité."
  ],
  fond:[
  "## Repères historiques",
  "- 7 août 1960 : indépendance, Félix Houphouët-Boigny premier président.",
  "- 1983 : Yamoussoukro devient capitale politique ; Abidjan reste la capitale économique.",
  "- 1990 : retour au multipartisme.",
  "- 7 décembre 1993 : décès de Félix Houphouët-Boigny.",
  "- 2016 : adoption par référendum (30 octobre) et promulgation (8 novembre) de la Constitution de la IIIᵉ République.",
  "- 2020 : révision de la Constitution (19 mars).",
  "## Symboles de l'État",
  "- Devise : Union – Discipline – Travail.",
  "- Hymne : L'Abidjanaise.",
  "- Drapeau : orange, blanc, vert (bandes verticales).",
  "## Économie",
  "- Premier producteur mondial de cacao, devant le Ghana.",
  "- Monnaie : franc CFA émis par la BCEAO, dans le cadre de l'UEMOA.",
  "- Le Plan national de développement 2026-2030 a été adopté en Conseil des ministres le 4 février 2026, pour un coût annoncé de 114 838,5 milliards de FCFA et un objectif de croissance moyenne de 7,2 % par an (source : APA News).",
  "## Organisation du territoire",
  "- 31 régions et 201 communes (collectivités territoriales décentralisées).",
  "- 14 districts autonomes depuis 2021 : Abidjan, Yamoussoukro et 12 districts créés en 2021.",
  "- Cadre : loi n° 2014-451 du 5 août 2014 portant orientation de l'organisation générale de l'administration territoriale.",
  "## Culture et sport",
  "- Littérature : Bernard Dadié (Climbié, 1956), Ahmadou Kourouma (Les Soleils des Indépendances, 1968 ; Allah n'est pas obligé, prix Renaudot 2000), Véronique Tadjo.",
  "- Bande dessinée : Aya de Yopougon, de Marguerite Abouet (scénario) et Clément Oubrerie (dessin).",
  "- Football : la Côte d'Ivoire a remporté la Coupe d'Afrique des nations en 1992, en 2015 et lors de la CAN 2023, qu'elle a organisée début 2024."
  ],
  retenir:["7 août 1960 · 1983 · 1990 · 2016 · 2020.","31 régions, 201 communes, 14 districts autonomes.","PND 2026-2030 : adopté le 4 février 2026, croissance visée 7,2 %."],
  exo:{tag:"ci", n:12} },

{ id:"p4", m:"cg", titre:"Culture générale 2 : le monde et les organisations internationales", min:45,
  tech:[
  "## Fiche type d'une organisation",
  "Pour chaque organisation, retenez cinq éléments : date de création, siège, membres, mission, dirigeant actuel. Le dirigeant change : vérifiez-le dans l'actualité avant le concours.",
  "! Les distracteurs mélangent les sièges (Addis-Abeba, Abuja, Dakar, Ouagadougou). Faites un tableau siège par organisation."
  ],
  fond:[
  "## Organisations universelles",
  "- ONU : Charte signée à San Francisco le 26 juin 1945 ; siège à New York ; 193 États membres.",
  "- Secrétaires généraux marquants : Trygve Lie (premier), Dag Hammarskjöld (mort en 1961 dans un accident d'avion en Rhodésie du Nord, actuelle Zambie), Kofi Annan (Ghanéen, prix Nobel de la paix 2001), Boutros Boutros-Ghali (Égyptien).",
  "- FMI et Banque mondiale : créés à Bretton Woods en 1944, sièges à Washington.",
  "- OMC : créée en 1995, siège à Genève.",
  "## Organisations africaines",
  "- OUA : 1963, Addis-Abeba. Remplacée par l'Union africaine, lancée en 2002 à Durban ; siège à Addis-Abeba.",
  "- CEDEAO : traité de Lagos, 28 mai 1975 ; siège à Abuja.",
  "- UEMOA : traité de Dakar, 10 janvier 1994 ; siège à Ouagadougou ; 8 États membres.",
  "- BCEAO : siège à Dakar. BOAD : siège à Lomé. BAD : siège à Abidjan.",
  "- ZLECAf : Zone de libre-échange continentale africaine ; secrétariat à Accra.",
  "## Repères du monde contemporain",
  "- 1989 : chute du mur de Berlin. 1991 : dissolution de l'URSS.",
  "- 1990-1991 : guerre du Golfe, déclenchée par l'invasion du Koweït par l'Irak (août 1990).",
  "- G7 : Allemagne, Canada, États-Unis, France, Italie, Japon, Royaume-Uni (la Russie a été exclue du G8 en 2014).",
  "- Jeux olympiques d'été : Rio de Janeiro 2016, Tokyo 2020 (disputés en 2021), Paris 2024.",
  "- Agenda 2030 : 17 Objectifs de développement durable. Accord de Paris sur le climat : COP21, 2015."
  ],
  retenir:["UA : Addis-Abeba · CEDEAO : Abuja · UEMOA : Ouagadougou · BCEAO : Dakar · BAD : Abidjan.","Hammarskjöld meurt en 1961.","G7 sans la Russie depuis 2014."],
  exo:{tag:"monde", n:12} },

{ id:"p5", m:"ang", titre:"Anglais 1 : les temps et les structures piégées", min:45,
  tech:[
  "## Méthode pour les QCM d'anglais",
  "- Lisez la phrase entière avant de regarder les propositions : le mot indicateur est souvent à la fin (since, ago, yet, already).",
  "- Repérez la catégorie testée : temps, préposition, comparatif, so/such, pluriel irrégulier.",
  "- Éliminez les formes qui n'existent pas (more better, mouses)."
  ],
  fond:[
  "## Present perfect ou prétérit",
  "- Present perfect (have + participe) : action qui dure jusqu'à maintenant ou dont le résultat compte maintenant. Indicateurs : since, for, already, yet, ever, never.",
  "- Prétérit : action terminée à un moment précis du passé. Indicateurs : ago, yesterday, in 2015, last year.",
  "~ She has lived in Abidjan since 2015. / She moved to Abidjan in 2015.",
  "## So ou such",
  "- So + adjectif ou adverbe : so tall, so quickly.",
  "- So much / so many + nom : so much hair (indénombrable), so many people (dénombrable).",
  "- Such + (a/an) + adjectif + nom : such a good idea, such good ideas.",
  "## Comparatifs",
  "- Adjectif court : -er (taller). Adjectif long : more (more handsome est accepté ; handsomer existe aussi).",
  "- Irréguliers : good → better → the best ; bad → worse → the worst ; far → further/farther.",
  "- « The more…, the better… » pour une progression parallèle.",
  "## Pluriels et féminins irréguliers",
  "- Man/men, woman/women, child/children, foot/feet, tooth/teeth, mouse/mice, louse/lice, goose/geese.",
  "- Horse → mare, fox → vixen, bull → cow, lion → lioness, duke → duchess.",
  "## Conditionnel",
  "- If + présent → will (réel) ; if + prétérit → would (irréel présent, « if I were ») ; if + past perfect → would have (irréel passé)."
  ],
  retenir:["since/for → present perfect ; ago → prétérit.","so much/so many + nom ; such a + adjectif + nom.","mouse → mice, louse → lice ; horse → mare, fox → vixen."],
  exo:{tag:"ang1", n:12} },

{ id:"p6", m:"ang", titre:"Anglais 2 : vocabulaire administratif et faux amis", min:40,
  tech:[
  "## Apprendre le vocabulaire par familles",
  "Notez les mots par domaine (budget, administration, emploi) avec un exemple de phrase. Relisez-les à voix haute : à l'oral comme à l'écrit, le mot en contexte se retient mieux.",
  "! Les faux amis sont un classique des concours : actually, eventually, library, sensible, achieve."
  ],
  fond:[
  "## Administration et finances",
  "- Civil servant : fonctionnaire. Civil service : fonction publique.",
  "- Budget deficit : déficit budgétaire. Public debt : dette publique. Tax revenue : recettes fiscales.",
  "- Stakeholder : partie prenante. Accountability : obligation de rendre compte. Policy : politique publique.",
  "- To implement : mettre en œuvre. To carry out : mener à bien. To assess : évaluer.",
  "- Unemployment rate : taux de chômage. Youth employment : emploi des jeunes. Skills : compétences.",
  "## Faux amis",
  "- Actually = en fait (actuellement = currently).",
  "- Eventually = finalement (éventuellement = possibly).",
  "- Library = bibliothèque (librairie = bookshop).",
  "- Sensible = raisonnable (sensible = sensitive).",
  "- To achieve = accomplir, atteindre (achever = to finish).",
  "- Agenda = ordre du jour (agenda = diary, planner).",
  "## Prépositions utiles",
  "- Interested in, depend on, responsible for, apply for (a job), apply to (an institution), look forward to + -ing.",
  "- To get money back : récupérer son argent."
  ],
  retenir:["actually = en fait ; eventually = finalement.","to implement a policy : mettre en œuvre une politique.","look forward to + -ing."],
  exo:{tag:"ang2", n:12} },

{ id:"p7", m:"log", titre:"Logique 1 : suites, proportions et pourcentages", min:45,
  tech:[
  "## Résoudre une suite en 30 secondes",
  "- Calculez les écarts entre termes consécutifs. S'ils sont constants : suite arithmétique.",
  "- Si les écarts eux-mêmes forment une suite (2, 3, 4…), continuez-la.",
  "- Sinon, testez les rapports (×2, ×3) : suite géométrique.",
  "- Pensez aux carrés (1, 4, 9, 16), aux produits n×(n+1), à Fibonacci (somme des deux précédents), aux suites alternées (un terme sur deux).",
  "- Pour les lettres, convertissez en rangs : A=1, B=2… Z=26.",
  "## Pourcentages sans erreur",
  "- Augmenter de t % : multiplier par (1 + t/100). Baisser de t % : multiplier par (1 − t/100).",
  "- Deux variations successives se multiplient : +10 % puis −10 % donne ×1,1×0,9 = ×0,99, soit −1 %.",
  "- Taux de variation = (valeur finale − valeur initiale) / valeur initiale.",
  "- Retrouver un prix HT : prix TTC / (1 + taux de TVA)."
  ],
  fond:[
  "## Proportionnalité",
  "- Règle de trois : si 3 kg coûtent 1 500 F, 1 kg coûte 500 F, 7 kg coûtent 3 500 F.",
  "- Proportionnalité inverse : plus d'ouvriers, moins de jours. 5 ouvriers × 8 jours = 40 jours-ouvrier ; 10 ouvriers mettent 4 jours.",
  "## Vitesse, distance, temps",
  "- d = v × t ; t = d / v. Convertissez les minutes : 0,5 h = 30 min, 0,25 h = 15 min.",
  "## Intérêts",
  "- Simple : I = C × t × n. 1 000 000 F à 5 % sur 3 ans = 150 000 F.",
  "- Composé : C × (1 + t)ⁿ. 1 000 000 F à 10 % sur 2 ans = 1 210 000 F.",
  "## Partages",
  "- Partager 90 000 F en parts proportionnelles à 2, 3 et 4 : total 9 parts ; une part vaut 10 000 F ; d'où 20 000, 30 000 et 40 000 F."
  ],
  retenir:["Écarts, puis écarts des écarts, puis rapports.","Les pourcentages successifs se multiplient.","Proportionnalité inverse : produit constant."],
  exo:{tag:"calc", n:12} },

{ id:"p8", m:"log", titre:"Logique 2 : test d'organisation (problèmes à contraintes)", min:50,
  tech:[
  "## Le test d'organisation, c'est quoi ?",
  "Un énoncé décrit des personnes, des places ou des tâches, avec des indices (« Daouda habite à côté de Bella », « Étienne n'est pas au bout »). Il faut déduire une seule configuration. Les sujets 2023 et 2025 du cycle supérieur en contiennent.",
  "## Méthode du tableau",
  "- Dessinez immédiatement un tableau : personnes en lignes, positions ou attributs en colonnes.",
  "- Traitez d'abord les indices absolus (« X est au n° 1 »), puis les négations (« Y n'est pas au n° 5 ») : cochez et barrez.",
  "- Traitez ensuite les indices relatifs (« à côté de », « à gauche de ») en testant les rares cas possibles.",
  "- Quand une case est certaine, barrez le reste de sa ligne et de sa colonne.",
  "- Vérifiez la solution trouvée contre tous les indices avant de cocher la réponse.",
  "> Gain de temps : souvent, la question ne demande qu'une case (« qui habite au n° 3 ? »). Arrêtez-vous dès que cette case est certaine.",
  "## Problèmes de rapports",
  "« Un collier coûte deux fois plus qu'un bracelet ; un bracelet coûte cinq fois plus qu'un médaillon ; l'ensemble coûte 16 000 F. » Exprimez tout en fonction du plus petit : médaillon = m, bracelet = 5m, collier = 10m ; 16m = 16 000, donc m = 1 000 F."
  ],
  fond:[
  "## Syllogismes et connecteurs",
  "- « Tous les A sont B » ne permet pas de dire « tous les B sont A ».",
  "- « Aucun A n'est B » est réciproque : aucun B n'est A.",
  "- « Certains A sont B » : on ne sait rien des autres A.",
  "- Contraposée : « S'il pleut, la route est mouillée » équivaut à « si la route n'est pas mouillée, il ne pleut pas ». Mais une route mouillée ne prouve pas qu'il pleut.",
  "## Calendrier et horloges",
  "- Jour de la semaine dans N jours : reste de la division de N par 7.",
  "- Angle des aiguilles : 30° par heure ; l'aiguille des heures avance aussi de 0,5° par minute."
  ],
  retenir:["Tableau d'abord, indices absolus ensuite, relatifs en dernier.","Tout exprimer en fonction de la plus petite inconnue.","Une condition suffisante n'est pas nécessaire : attention à la réciproque."],
  exo:{tag:"orga", n:10} }
);

// [matière, tag, énoncé, [propositions], index bonne réponse, explication]
QUESTIONS.push(
["cg","strat","Au barème officiel de culture générale (+1 / 0 / −1), quelle est l'espérance de gain d'une réponse donnée au hasard parmi 4 propositions ?",["−0,5 point","0 point","+0,25 point","−1 point"],0,"1/4 × (+1) + 3/4 × (−1) = −0,5. Répondre au hasard fait perdre des points en moyenne."],
["cg","strat","Vous hésitez entre deux propositions, sans aucun indice. Au barème +1 / −1, votre espérance de gain est :",["nulle","positive","toujours négative","de +0,5"],0,"1/2 × (+1) + 1/2 × (−1) = 0. Répondez seulement si un indice vous fait pencher."],
["cg","strat","En logique, le barème est +2 / 0 / −2. Combien coûte une mauvaise réponse ?",["2 points","1 point","Rien","4 points"],0,"Une erreur annule l'équivalent d'une bonne réponse."],
["cg","strat","Combien de temps maximum conseille-t-on de rester bloqué sur une question de logique ?",["Environ 2 minutes","10 minutes","Jusqu'à trouver","30 secondes, jamais plus"],0,"Au-delà, passez et revenez à la fin si le temps le permet."],
["cg","strat","Après avoir éliminé deux propositions sûres sur quatre, la situation devient :",["un choix entre deux, à espérance nulle au hasard","une réponse certaine","toujours défavorable","sans intérêt"],0,"Chaque élimination améliore le pari ; un indice de plus rend la réponse rentable."],
["cg","strat","Quelle est la meilleure façon de reporter ses réponses ?",["Au fur et à mesure, après chaque bloc de questions","Toutes à la dernière minute","Seulement celles dont on doute","Au crayon puis à l'encre après l'épreuve"],0,"Reporter à la dernière minute expose à des oublis et à des décalages de lignes."],
["cg","voc","Quel est le synonyme de « léthargie » ?",["Torpeur","Euphorie","Tendance","Colère"],0,"La léthargie est un état de torpeur, d'inactivité profonde."],
["cg","voc","Quel est l'antonyme d'« érudition » ?",["Ignorance","Insipidité","Sagesse","Culture"],0,"L'érudition est un savoir approfondi ; son contraire est l'ignorance."],
["cg","voc","Quel est l'intrus ? Pétale – Sépale – Étamine – Racine",["Racine","Pétale","Sépale","Étamine"],0,"Pétale, sépale et étamine sont des parties de la fleur ; la racine n'en fait pas partie."],
["cg","voc","L'hypoténuse est au triangle rectangle ce que le diamètre est au…",["cercle","cône","polygone","carré"],0,"Relation : segment caractéristique d'une figure. Le diamètre est propre au cercle."],
["cg","voc","Choisissez le mot juste : « La … économique actuelle impose la prudence. »",["conjoncture","conjecture","jointure","conjonction"],0,"Conjoncture : situation du moment. Conjecture : simple supposition."],
["cg","voc","Choisissez le mot juste : « Le Trésor doit … les impôts impayés. »",["recouvrer","recouvrir","découvrir","récupérerer"],0,"Recouvrer : récupérer une somme due. Recouvrir : couvrir à nouveau."],
["cg","voc","Quelle est la bonne orthographe ? « Un … de lumière traversait la pièce. »",["rai","rets","raie","rhé"],0,"Un rai est un rayon de lumière ; les rets sont des filets."],
["cg","voc","Synonyme de « probité » :",["honnêteté","prudence","rapidité","fierté"],0,"La probité est l'honnêteté scrupuleuse."],
["cg","voc","Antonyme de « véhément » :",["mesuré","fougueux","ardent","violent"],0,"Véhément : emporté, passionné ; son contraire est mesuré, calme."],
["cg","voc","Choisissez le mot juste : « Le danger était … : il fallait évacuer sans attendre. »",["imminent","éminent","immanent","émanant"],0,"Imminent : sur le point de se produire. Éminent : remarquable."],
["cg","voc","Livre est à bibliothèque ce que tableau est à…",["musée","peintre","cadre","couleur"],0,"Relation objet / lieu où on le conserve et l'expose."],
["cg","voc","Quel est l'intrus ? Préfet – Sous-préfet – Maire – Gouverneur de district",["Maire","Préfet","Sous-préfet","Gouverneur de district"],0,"Le maire est un élu local ; les trois autres sont nommés par l'État."],
["cg","voc","Un individu « prodigue » est quelqu'un qui :",["dépense sans compter","réalise des exploits","prédit l'avenir","est très économe"],0,"Prodigue : qui dépense sans mesure. Prodige : personne ou chose extraordinaire."],
["cg","voc","« Collusion » signifie :",["entente secrète au détriment d'un tiers","choc entre deux véhicules","fusion d'entreprises","conflit ouvert"],0,"Collusion : entente secrète. Collision : choc."],
["cg","gram","Complétez : « En cas de besoin, nous … à votre aide. »",["recourrons","recourons","recourerons","recourirons"],0,"Futur de recourir : deux r (nous recourrons)."],
["cg","gram","Complétez : « Le Président a … l'Assemblée nationale. »",["dissous","dissout","dissoud","dissouts"],0,"Participe passé de dissoudre : dissous (masculin), dissoute (féminin)."],
["cg","gram","Complétez : « Quand on les réprimande, les enfants … . »",["acquiescent","aquiescent","acquiessent","acquièsent"],0,"Acquiescer garde le c devant e : ils acquiescent."],
["cg","gram","Complétez : « Si de meilleures conditions étaient mises en place, la qualité … . »",["augmenterait","augmentera","aurait augmenté","augmente"],0,"Si + imparfait entraîne le conditionnel présent."],
["cg","gram","Complétez : « Je doute qu'il … raison cette fois-ci. »",["ait","a","aura","avait"],0,"Douter que entraîne le subjonctif."],
["cg","gram","Son drap était couvert de taches … .",["violettes","violet","violets","violette"],0,"Violet est un adjectif de couleur variable : il s'accorde avec taches (féminin pluriel)."],
["cg","gram","Quel est le pluriel correct ?",["des brise-glaces","des brises-glaces","des brises-glace","des brise-glacess"],0,"Verbe + nom : le verbe reste invariable, le nom prend la marque du pluriel (rectifications de 1990)."],
["cg","gram","Quel est le pluriel correct de « un bleu de travail » ?",["des bleus de travail","des bleux de travail","des bleues de travail","des bleu de travail"],0,"Bleu fait exception : des bleus."],
["cg","gram","Complétez : « Les décisions qu'il a … sont appliquées. »",["prises","pris","prise","prits"],0,"Avoir + COD placé avant (qu' = les décisions) : accord au féminin pluriel."],
["cg","gram","Complétez : « … vous fassiez, faites-le avec rigueur. »",["Quoi que","Quoique","Quelque","Quel que"],0,"Quoi que (en deux mots) : quelle que soit la chose que."],
["cg","gram","Complétez : « … soient les difficultés, nous avancerons. »",["Quelles que","Quelque","Quels que","Quelques"],0,"Quel que + être, accordé avec le sujet (les difficultés, féminin pluriel)."],
["cg","gram","Complétez : « Après qu'il … parti, la réunion a commencé. »",["est","soit","fût","sera"],0,"Après que est suivi de l'indicatif."],
["cg","gram","Quel pluriel est correct ?",["des journaux, des festivals, des genoux","des journals, des festivaux, des genous","des journaux, des festivaux, des genoux","des journals, des festivals, des genous"],0,"-al → -aux sauf festivals ; genou fait partie des sept noms en -ou qui prennent -x."],
["cg","gram","Complétez : « Ces robes … ont été cousues à Bouaké. »",["orange","oranges","orangées","orangés"],0,"Orange, adjectif issu d'un nom, reste invariable."],
["cg","ci","En quelle année Yamoussoukro devient-elle capitale politique ?",["1983","1960","1990","1971"],0,"Yamoussoukro est capitale politique depuis 1983."],
["cg","ci","La Côte d'Ivoire revient au multipartisme en :",["1990","1980","1993","2000"],0,"Le multipartisme est rétabli en 1990."],
["cg","ci","Félix Houphouët-Boigny est décédé le :",["7 décembre 1993","7 août 1993","1er janvier 1994","24 décembre 1999"],0,"Il meurt le 7 décembre 1993."],
["cg","ci","Combien de régions compte la Côte d'Ivoire ?",["31","14","33","19"],0,"31 régions, créées par décret en 2013 ; les 14 sont les districts autonomes."],
["cg","ci","Combien de districts autonomes compte la Côte d'Ivoire depuis 2021 ?",["14","2","12","31"],0,"Abidjan, Yamoussoukro et 12 districts créés en juin 2021."],
["cg","ci","Qui est l'auteur de « Allah n'est pas obligé » (prix Renaudot 2000) ?",["Ahmadou Kourouma","Bernard Dadié","Tanella Boni","Jean-Marie Adiaffi"],0,"Roman d'Ahmadou Kourouma, prix Renaudot 2000."],
["cg","ci","« Aya de Yopougon » est une bande dessinée scénarisée par :",["Marguerite Abouet","Véronique Tadjo","Fatou Keïta","Werewere Liking"],0,"Scénario de Marguerite Abouet, dessin de Clément Oubrerie."],
["cg","ci","La Côte d'Ivoire a remporté la CAN en :",["1992, 2015 et lors de l'édition 2023","1992 et 2006 seulement","2012 et 2015 seulement","1970, 1992 et 2015"],0,"Trois titres : 1992, 2015 et la CAN 2023 jouée début 2024 en Côte d'Ivoire."],
["cg","ci","Quel est l'objectif de croissance moyenne annoncé pour le PND 2026-2030 ?",["7,2 % par an","3 % par an","10 % par an","5 % par an"],0,"Objectif annoncé lors de l'adoption du PND le 4 février 2026."],
["cg","ci","Quelle loi fixe l'organisation générale de l'administration territoriale ivoirienne ?",["La loi n° 2014-451 du 5 août 2014","La loi n° 2023-892","La Constitution de 1960","Le décret de 2013 sur les régions"],0,"La loi 2014-451 distingue administration déconcentrée, décentralisée et districts autonomes."],
["cg","ci","Quelles sont les couleurs du drapeau ivoirien, dans l'ordre depuis la hampe ?",["Orange, blanc, vert","Vert, blanc, orange","Orange, vert, blanc","Blanc, orange, vert"],0,"Orange côté hampe, blanc au centre, vert."],
["cg","monde","Quel secrétaire général de l'ONU est mort en 1961 dans un accident d'avion ?",["Dag Hammarskjöld","Trygve Lie","U Thant","Boutros Boutros-Ghali"],0,"Dag Hammarskjöld meurt en septembre 1961 en Rhodésie du Nord (actuelle Zambie)."],
["cg","monde","Où siège l'UEMOA ?",["Ouagadougou","Dakar","Abidjan","Lomé"],0,"Commission de l'UEMOA à Ouagadougou ; BCEAO à Dakar ; BOAD à Lomé."],
["cg","monde","Où siège la Commission de la CEDEAO ?",["Abuja","Lagos","Accra","Dakar"],0,"Le traité a été signé à Lagos (1975), mais le siège est à Abuja."],
["cg","monde","Lequel de ces pays ne fait pas partie du G7 ?",["L'Espagne","L'Italie","Le Canada","Le Japon"],0,"G7 : Allemagne, Canada, États-Unis, France, Italie, Japon, Royaume-Uni."],
["cg","monde","La première guerre du Golfe (1990-1991) est provoquée par :",["l'invasion du Koweït par l'Irak","l'invasion de l'Irak par l'Iran","un conflit entre l'Arabie saoudite et l'Irak","la révolution iranienne"],0,"L'Irak envahit le Koweït en août 1990."],
["cg","monde","Où ont eu lieu les Jeux olympiques d'été de 2016 ?",["Rio de Janeiro","Londres","Tokyo","Paris"],0,"Rio 2016 ; Tokyo 2020 (en 2021) ; Paris 2024."],
["cg","monde","Quel Ghanéen a été secrétaire général de l'ONU de 1997 à 2006 ?",["Kofi Annan","Kwame Nkrumah","Jerry Rawlings","Ban Ki-moon"],0,"Kofi Annan, prix Nobel de la paix 2001."],
["cg","monde","Le FMI et la Banque mondiale sont issus de la conférence de :",["Bretton Woods (1944)","Yalta (1945)","Bandung (1955)","Versailles (1919)"],0,"Conférence de Bretton Woods, juillet 1944."],
["cg","monde","Combien d'États membres compte l'ONU ?",["193","195","180","54"],0,"L'ONU compte 193 États membres ; l'Union africaine en compte 55."],
["cg","monde","La chute du mur de Berlin a eu lieu en :",["1989","1991","1985","1961"],0,"Novembre 1989 ; le mur avait été construit en 1961."],
["cg","monde","Où se trouve le siège de l'Union africaine ?",["Addis-Abeba","Durban","Abuja","Midrand"],0,"Addis-Abeba. Durban est la ville du lancement en 2002 ; Midrand accueille le Parlement panafricain."],
["ang","ang1","There were ___ people that you could hardly move.",["so many","so much","such","such a"],0,"So many + nom dénombrable pluriel."],
["ang","ang1","He has ___ hair on his chest that he looks like a bear.",["so much","so many","such a","so"],0,"Hair (pilosité) est indénombrable : so much."],
["ang","ang1","It was ___ good idea that everybody agreed.",["such a","so","so much","such"],0,"Such a + adjectif + nom singulier dénombrable."],
["ang","ang1","Give the plural of « mouse » :",["mice","mouses","meese","mices"],0,"Pluriel irrégulier : mouse → mice ; louse → lice."],
["ang","ang1","Give the feminine of « horse » :",["mare","horsess","doe","ewe"],0,"La jument se dit mare ; doe est la biche, ewe la brebis."],
["ang","ang1","Give the feminine of « fox » :",["vixen","foxess","hen","sow"],0,"La renarde se dit vixen."],
["ang","ang1","She ___ in Abidjan since 2015.",["has lived","lives","lived","is living"],0,"Since + point de départ : present perfect."],
["ang","ang1","I met him two years ___ .",["ago","since","for","before now"],0,"Ago + prétérit : il y a deux ans."],
["ang","ang1","If I ___ you, I would apply.",["were","am","will be","had"],0,"Irréel du présent : if I were."],
["ang","ang1","Find the comparative of « bad » :",["worse","badder","more bad","worst"],0,"Bad → worse → the worst."],
["ang","ang1","The more you practise, ___ you get.",["the better","better","the best","more better"],0,"Structure the more…, the better…"],
["ang","ang1","Neither the director nor his assistants ___ present.",["were","was","is","has been"],0,"Accord avec le sujet le plus proche : assistants (pluriel)."],
["ang","ang1","Give the plural of « child » :",["children","childs","childrens","childen"],0,"Pluriel irrégulier : children."],
["ang","ang1","Don't forget to take your passport ___ you when you leave.",["with","along","in","back"],0,"To take something with you : emporter quelque chose avec soi."],
["ang","ang2","When can I get my money ___ ?",["back","in","so","along"],0,"To get money back : récupérer son argent."],
["ang","ang2","« Accountability » se traduit par :",["obligation de rendre compte","comptabilité","comptable","responsabilité pénale"],0,"Accountability : obligation de rendre des comptes."],
["ang","ang2","« To implement a policy » signifie :",["mettre en œuvre une politique","écrire une politique","critiquer une politique","abandonner une politique"],0,"To implement : mettre en œuvre."],
["ang","ang2","« Eventually » signifie :",["finalement","éventuellement","évidemment","immédiatement"],0,"Faux ami : éventuellement = possibly."],
["ang","ang2","« A library » est :",["une bibliothèque","une librairie","un laboratoire","une archive privée"],0,"Faux ami : librairie = bookshop."],
["ang","ang2","« Sensible » en anglais signifie :",["raisonnable","sensible","sensuel","sensationnel"],0,"Sensible (fr.) = sensitive ; sensible (angl.) = raisonnable."],
["ang","ang2","She applied ___ a job at the Ministry.",["for","to","at","on"],0,"Apply for a job ; apply to an institution."],
["ang","ang2","I look forward to ___ from you.",["hearing","hear","heard","be hearing"],0,"Look forward to + -ing."],
["ang","ang2","« Unemployment rate » se traduit par :",["taux de chômage","taux d'emploi","taux d'activité","taux d'intérêt"],0,"Unemployment = chômage."],
["ang","ang2","« To achieve a goal » signifie :",["atteindre un objectif","achever un but","abandonner un objectif","fixer un objectif"],0,"To achieve = atteindre, réaliser ; faux ami avec achever."],
["ang","ang2","« Stakeholders » désigne :",["les parties prenantes","les actionnaires seulement","les fournisseurs","les créanciers"],0,"Toutes les parties concernées par une décision ou un projet."],
["ang","ang2","« The meeting agenda » est :",["l'ordre du jour de la réunion","l'agenda personnel","le procès-verbal","la liste des participants"],0,"Agenda = ordre du jour ; un agenda personnel = a diary, a planner."],
["ang","ang2","He is responsible ___ the budget.",["for","of","on","about"],0,"Responsible for something."],
["log","calc","Quel nombre suit : 2, 6, 12, 20, 30, … ?",["42","40","36","44"],0,"n × (n+1) : 6 × 7 = 42."],
["log","calc","Quel nombre suit : 3, 9, 27, 81, … ?",["243","162","324","108"],0,"× 3 : 81 × 3 = 243."],
["log","calc","Quel nombre suit : 1, 4, 9, 16, 25, … ?",["36","30","35","49"],0,"Carrés : 6² = 36."],
["log","calc","Quel nombre suit : 1, 1, 2, 3, 5, 8, … ?",["13","11","12","15"],0,"Fibonacci : 5 + 8 = 13."],
["log","calc","Quelle lettre suit : A, C, F, J, … ?",["O","N","M","P"],0,"Écarts +2, +3, +4, +5 : J (10) + 5 = O (15)."],
["log","calc","Quel nombre suit : 2, 5, 4, 7, 6, 9, … ?",["8","11","10","7"],0,"Alternance +3, −1 : 9 − 1 = 8."],
["log","calc","Un prix de 20 000 F augmente de 10 % puis baisse de 10 %. Il vaut :",["19 800 F","20 000 F","20 200 F","18 000 F"],0,"20 000 × 1,1 × 0,9 = 19 800 F."],
["log","calc","Un article coûte 118 000 F TTC (TVA 18 %). Son prix HT est :",["100 000 F","96 760 F","98 000 F","100 360 F"],0,"118 000 / 1,18 = 100 000 F."],
["log","calc","Un indicateur passe de 80 à 100. Le taux de croissance est :",["25 %","20 %","80 %","125 %"],0,"(100 − 80) / 80 = 25 %."],
["log","calc","5 ouvriers font un travail en 8 jours. Combien de jours pour 10 ouvriers ?",["4","16","6","5"],0,"40 jours-ouvrier / 10 = 4."],
["log","calc","Un car roule à 90 km/h. Combien de temps pour 225 km ?",["2 h 30","2 h 15","2 h 45","3 h"],0,"225 / 90 = 2,5 h."],
["log","calc","1 000 000 F placés à 10 % d'intérêts composés pendant 2 ans valent :",["1 210 000 F","1 200 000 F","1 100 000 F","1 221 000 F"],0,"1 000 000 × 1,1² = 1 210 000 F."],
["log","calc","On partage 90 000 F proportionnellement à 2, 3 et 4. La plus grande part vaut :",["40 000 F","30 000 F","45 000 F","36 000 F"],0,"9 parts de 10 000 F ; 4 parts = 40 000 F."],
["log","calc","Les 3/4 d'une somme valent 600 000 F. La somme vaut :",["800 000 F","900 000 F","750 000 F","450 000 F"],0,"600 000 / 3 × 4 = 800 000 F."],
["log","calc","Combien font 15 % de 240 ?",["36","24","32","40"],0,"240 × 0,15 = 36."],
["log","calc","Un salaire passe de 250 000 F à 275 000 F. Hausse en pourcentage :",["10 %","25 %","2,5 %","9 %"],0,"25 000 / 250 000 = 10 %."],
["log","orga","Un collier coûte deux fois plus cher qu'un bracelet, qui coûte cinq fois plus cher qu'un médaillon. Les trois ensemble coûtent 16 000 F. Prix du médaillon ?",["1 000 F","2 000 F","1 600 F","5 000 F"],0,"m + 5m + 10m = 16m = 16 000 F, donc m = 1 000 F."],
["log","orga","Ali, Bella et Cissé habitent aux n° 1, 2 et 3. Bella n'est pas au n° 1. Cissé habite au n° 3. Où habite Ali ?",["N° 1","N° 2","N° 3","On ne peut pas savoir"],0,"Cissé au 3 ; Bella ni au 1 ni au 3, donc au 2 ; Ali au 1."],
["log","orga","Quatre agents A, B, C, D sont assis en ligne. A est à une extrémité. B est juste à droite de C. D n'est pas à côté de A. Quel ordre convient de gauche à droite ?",["A, C, B, D","A, D, C, B","C, B, A, D","D, B, C, A"],0,"A, C, B, D respecte tout. A, D, C, B met D à côté de A ; C, B, A, D ne met pas A au bout ; D, B, C, A place B à gauche de C."],
["log","orga","Tous les inspecteurs sont des fonctionnaires. Certains fonctionnaires sont des enseignants. Que peut-on affirmer ?",["Rien de certain sur le lien entre inspecteurs et enseignants","Certains inspecteurs sont enseignants","Aucun inspecteur n'est enseignant","Tous les enseignants sont inspecteurs"],0,"Les fonctionnaires enseignants ne sont pas forcément des inspecteurs."],
["log","orga","« Si le dossier est complet, il est instruit. » Le dossier n'est pas instruit. On en déduit :",["le dossier n'est pas complet","le dossier est complet","rien du tout","le dossier sera instruit plus tard"],0,"Contraposée : non instruit ⟹ non complet."],
["log","orga","« Si le dossier est complet, il est instruit. » Le dossier est instruit. On en déduit :",["rien de certain sur sa complétude","il est complet","il est incomplet","il est rejeté"],0,"Une condition suffisante n'est pas nécessaire : il peut être instruit pour une autre raison."],
["log","orga","Nous sommes lundi. Quel jour serons-nous dans 100 jours ?",["Mercredi","Mardi","Jeudi","Lundi"],0,"100 = 14 × 7 + 2 : lundi + 2 = mercredi."],
["log","orga","Quel angle forment les aiguilles d'une horloge à 3 h 30 ?",["75°","90°","105°","60°"],0,"Grande aiguille à 180° ; petite à 90° + 30 × 0,5° = 105° ; écart 75°."],
["log","orga","Trois réunions R1, R2, R3 se tiennent lundi, mardi et mercredi. R2 n'a pas lieu lundi. R3 a lieu le lendemain de R2. Quel jour a lieu R1 ?",["Lundi","Mardi","Mercredi","On ne peut pas savoir"],0,"R2 mardi et R3 mercredi (R2 ne peut être mercredi) ; R1 lundi."],
["log","orga","Un père a 40 ans, son fils 10. Dans combien d'années le père aura-t-il le double de l'âge de son fils ?",["20 ans","10 ans","15 ans","30 ans"],0,"40 + x = 2(10 + x) ⟹ x = 20."],
["log","orga","6 personnes se serrent toutes la main une fois. Combien de poignées de main ?",["15","30","12","36"],0,"6 × 5 / 2 = 15."],
["log","orga","Dans un service, 60 % des agents parlent anglais, 30 % espagnol, 20 % les deux. Quel pourcentage ne parle aucune des deux ?",["30 %","10 %","20 %","40 %"],0,"60 + 30 − 20 = 70 % parlent au moins une langue ; 100 − 70 = 30 %."]
);

// ============ COURS : ÉPREUVES ÉCRITES D'ADMISSIBILITÉ ============
LESSONS.push(

{ id:"s1", m:"sog", titre:"SOG 1 : analyser le sujet et trouver la problématique", min:60,
  tech:[
  "## Ce que le jury évalue",
  "Le sujet d'ordre général (4 h, coefficient 4) évalue la culture générale, la capacité d'analyse et l'expression écrite. Le correcteur cherche une réponse construite à une question précise, pas une récitation de connaissances.",
  "## Les quatre temps de l'analyse (25 à 30 minutes)",
  "- Recopiez le sujet en haut du brouillon et soulignez chaque mot important.",
  "- Définissez chaque terme, puis regardez ce que le sujet relie : « les élections » et « la paix », « l'action de l'homme » et « l'environnement ».",
  "- Identifiez la consigne : « commentez et discutez » demande d'expliquer l'idée puis d'en montrer les limites ; « appréciez » demande un jugement nuancé ; « analysez » demande d'expliquer les mécanismes.",
  "- Formulez la problématique : une question unique, qui contient une tension. ~ Les élections, censées départager pacifiquement les ambitions, peuvent-elles garantir la paix alors qu'elles sont parfois l'occasion de crises ?",
  "> Test de la bonne problématique : si votre réponse peut être « oui » ou « non » sans réflexion, la question est trop pauvre.",
  "## Le brouillon d'idées",
  "Notez en vrac, pendant 10 minutes, tous les arguments et exemples. Classez-les ensuite en deux colonnes : ce qui va dans le sens de l'assertion, ce qui la limite. Ce classement donne votre plan."
  ],
  fond:[
  "## Sujets officiels récents (relevés sur les sujets publiés)",
  "- Cycle supérieur, juin 2025 : « Les élections sont un levier pertinent de la paix ». Commentez et discutez cette assertion.",
  "- Cycle moyen supérieur, juillet 2025 : « L'action incontrôlée de l'homme contribue à la transformation de l'environnement. » Analysez cette assertion.",
  "- Cycle supérieur, septembre 2024 : une assertion sur le sport, qui permettrait de bâtir un monde inclusif et plus pacifique.",
  "- Cycle moyen supérieur, session 2019 : un jeune Africain en quête d'un premier emploi, après plusieurs concours, déclare n'avoir plus que l'émigration clandestine comme issue. Appréciez ces propos.",
  "- Cycle moyen, juillet 2026 : deux citations sur l'honnêteté (Shakespeare, Sembène Ousmane) à commenter puis discuter.",
  "- Cycle moyen supérieur, 2009 : « La mondialisation accentuera la pauvreté des pays du tiers monde. » Quelles réflexions vous inspire cette opinion ?",
  "> Constante : des thèmes de société (paix, élections, jeunesse, emploi, environnement, éthique, mondialisation, sport) formulés comme une assertion à discuter."
  ],
  retenir:["Définir, relier, lire la consigne, problématiser.","La problématique contient une tension.","Deux colonnes d'idées : pour et limites."],
  exo:{tag:"sog1", n:6, ecrit:"sog"} },

{ id:"s2", m:"sog", titre:"SOG 2 : construire le plan et rédiger", min:60,
  tech:[
  "## Choisir son plan",
  "- Plan dialectique (thèse / antithèse, avec ou sans synthèse) : pour les assertions à « commenter et discuter ». I. L'assertion est fondée. II. Elle doit être nuancée.",
  "- Plan analytique (causes / conséquences / solutions) : pour « analysez » un phénomène. À manier avec prudence : les préparateurs déconseillent de le plaquer sur tous les sujets.",
  "- Plan thématique : quand le sujet invite à examiner plusieurs dimensions (politique, économique, sociale).",
  "## La structure attendue d'une copie (charte des préparateurs ivoiriens)",
  "Les supports de préparation diffusés en Côte d'Ivoire proposent cette charte, que vous pouvez suivre :",
  "- Introduction : 10 à 15 phrases (accroche, définitions, problématique, annonce du plan).",
  "- Pour chaque partie : un chapeau de 1 à 2 phrases annonçant les sous-parties.",
  "- Chaque argument : 5 à 7 phrases (idée, explication, exemple, mini-conclusion).",
  "- Fin de partie : conclusion partielle et transition, 1 à 2 phrases.",
  "- Conclusion générale : bilan qui répond à la problématique, puis ouverture.",
  "- Sautez 2 lignes entre l'introduction et le développement, entre les parties et avant la conclusion ; 1 ligne entre les sous-parties.",
  "## Gestion des 4 heures",
  "- 0 h 00 – 0 h 30 : analyse et brouillon d'idées.",
  "- 0 h 30 – 1 h 00 : plan détaillé et introduction rédigée au brouillon.",
  "- 1 h 00 – 3 h 30 : rédaction au propre, sans repasser par le brouillon pour le développement.",
  "- 3 h 30 – 4 h 00 : conclusion et relecture (accords, ponctuation, majuscules).",
  "! Une copie sans conclusion est lourdement sanctionnée. Si le temps manque, réduisez le dernier argument, jamais la conclusion."
  ],
  fond:[
  "## L'introduction en cinq gestes",
  "- Accroche : un fait, une citation exacte ou une actualité liée au sujet.",
  "- Présentation et définition des termes du sujet.",
  "- Reformulation du sujet et mise en tension.",
  "- Problématique, sous forme de question.",
  "- Annonce du plan, sans « dans une première partie nous verrons » répété mécaniquement.",
  "## Le paragraphe argumentatif",
  "~ Idée : les élections apaisent la compétition pour le pouvoir. Explication : elles substituent le bulletin à la force et donnent au vainqueur une légitimité reconnue. Exemple : une alternance pacifique au Ghana ou au Sénégal. Mini-conclusion : quand les règles sont acceptées, le vote canalise les conflits.",
  "## Réserve d'exemples utiles",
  "- Paix et cohésion : les crises post-électorales en Afrique de l'Ouest ; le rôle des commissions électorales et des juridictions constitutionnelles ; les mécanismes de dialogue politique.",
  "- Jeunesse et emploi : le dividende démographique, l'entrepreneuriat des jeunes, les dispositifs publics d'insertion, l'émigration irrégulière.",
  "- Environnement : déforestation liée aux cultures de rente, orpaillage clandestin, érosion côtière, Accord de Paris (2015).",
  "- Sport : la CAN 2023 organisée par la Côte d'Ivoire, le sport comme outil de cohésion et d'insertion, mais aussi ses dérives (violences, corruption)."
  ],
  retenir:["Assertion à discuter → plan dialectique.","Argument = idée, explication, exemple, mini-conclusion.","La conclusion n'est jamais sacrifiée."],
  exo:{tag:"sog2", n:6, ecrit:"sog"} },

{ id:"e1", m:"pes", titre:"PES 1 : la méthode du devoir de problèmes économiques et sociaux", min:60,
  tech:[
  "## Nature de l'épreuve",
  "Composition de 3 heures, coefficient 3, aux cycles supérieur et moyen supérieur. Le sujet porte sur une question économique ou sociale, souvent ivoirienne ou africaine, à traiter de manière argumentée.",
  "## Démarche",
  "- Définissez précisément les notions économiques du sujet (pauvreté, inclusion sociale, économie informelle, croissance).",
  "- Posez le diagnostic : situation, causes, acteurs, chiffres sûrs seulement.",
  "- Évaluez les politiques publiques : objectifs, résultats, limites.",
  "- Proposez des recommandations réalistes, chiffrables, qui tiennent compte du budget de l'État.",
  "## Structure (charte des préparateurs)",
  "- Introduction de 10 à 15 phrases, deux parties (thèse ou partie 1, antithèse ou partie 2), chacune avec chapeau, deux arguments de 5 à 7 phrases, conclusion partielle et transition ; conclusion générale de 10 à 15 phrases.",
  "- Sautez 3 lignes entre l'introduction et la première partie, et avant la conclusion.",
  "! N'inventez jamais un chiffre. Un ordre de grandeur prudent (« plus d'un tiers de la population ») vaut mieux qu'un pourcentage faux."
  ],
  fond:[
  "## Sujets officiels récents",
  "- Cycle supérieur, juin 2025 : Les dispositifs actuels d'inclusion sociale en Côte d'Ivoire permettent-ils de lutter efficacement contre la pauvreté ?",
  "- Cycle moyen supérieur, juillet 2025 : L'économie informelle est-elle un levier ou un frein à la croissance et à l'inclusion ?",
  "- Cycle moyen supérieur, session 2019 : une question sur la mondialisation et le libre-échange : est-il profitable à tous ?",
  "## Vocabulaire indispensable",
  "- Pauvreté monétaire : revenu ou consommation sous un seuil. Pauvreté multidimensionnelle : privations en santé, éducation, conditions de vie.",
  "- Inclusion sociale : accès de tous aux droits, services et opportunités (emploi, protection sociale, santé, éducation, finance).",
  "- Filets sociaux : transferts monétaires ou en nature ciblés sur les ménages pauvres.",
  "- Protection sociale : assurance maladie, retraite, prestations familiales, assistance sociale.",
  "- Économie informelle : activités non enregistrées ou non déclarées, hors des cadres fiscaux et sociaux.",
  "## Les dispositifs ivoiriens à connaître (à illustrer avec prudence)",
  "- La Couverture maladie universelle (CMU), instituée par la loi n° 2014-131 du 24 mars 2014.",
  "- Les programmes de filets sociaux productifs (transferts monétaires aux ménages vulnérables), soutenus par la Banque mondiale.",
  "- Les programmes sociaux du Gouvernement (PSGouv) lancés à partir de 2019.",
  "- Les dispositifs d'insertion et d'emploi des jeunes : agence publique d'emploi, financements de projets, stages, travaux à haute intensité de main-d'œuvre.",
  "- Le Plan national de développement 2026-2030, qui vise une croissance moyenne de 7,2 % par an."
  ],
  retenir:["Définir, diagnostiquer, évaluer, recommander.","Deux parties équilibrées, introduction et conclusion de 10 à 15 phrases.","Pas de chiffre inventé."],
  exo:{tag:"pes", n:10, ecrit:"pes"} },

{ id:"e2", m:"pes", titre:"PES 2 : croissance, emploi, inflation et UEMOA", min:60,
  tech:[
  "## Mobiliser un mécanisme économique",
  "Un bon argument de PES enchaîne une cause et un effet de façon explicite : « la hausse des prix alimentaires réduit le pouvoir d'achat des ménages modestes, qui consacrent une large part de leur budget à l'alimentation ; la pauvreté augmente donc même si la croissance du PIB reste forte ».",
  "Chaque partie de votre copie devrait contenir au moins un mécanisme de ce type."
  ],
  fond:[
  "## Croissance et développement",
  "- Le PIB mesure la valeur ajoutée produite sur le territoire ; il ne dit rien de la répartition.",
  "- Croissance inclusive : croissance dont les fruits profitent largement à la population, notamment par l'emploi.",
  "- IDH (PNUD) : santé, éducation, niveau de vie.",
  "## Emploi",
  "- Chômage au sens du BIT : sans emploi, disponible, en recherche active.",
  "- Sous-emploi : temps partiel subi ou emploi peu productif ; très répandu dans l'informel.",
  "- Inadéquation formation-emploi : diplômés sans compétences recherchées, entreprises sans main-d'œuvre qualifiée.",
  "## Monnaie et prix dans l'UEMOA",
  "- Le franc CFA est émis par la BCEAO, qui conduit la politique monétaire commune (taux directeurs).",
  "- Critères de convergence du pacte de 2015 : solde budgétaire global (dons compris) d'au moins −3 % du PIB ; inflation annuelle moyenne au plus de 3 % ; encours de la dette publique au plus de 70 % du PIB.",
  "- L'inflation importée (énergie, céréales) pèse sur les ménages urbains ; l'État peut agir par la fiscalité, les subventions ciblées ou le contrôle des marges.",
  "## Théories à citer à bon escient",
  "- Ricardo : avantages comparatifs, base de l'argument en faveur du libre-échange.",
  "- List : protection des industries naissantes, argument pour une protection temporaire.",
  "- Keynes : soutien de la demande en période de sous-emploi ; multiplicateur 1 / (1 − propension à consommer).",
  "- Effet d'éviction : l'endettement public peut renchérir le crédit pour le privé."
  ],
  retenir:["Un mécanisme cause → effet par partie.","Critères UEMOA : −3 %, 3 %, 70 %.","Ricardo pour le libre-échange, List pour la protection."],
  exo:{tag:"pes2", n:10, ecrit:"pes"} },

{ id:"c1", m:"ct", titre:"Résumé de texte : la technique ENA", min:60,
  tech:[
  "## La consigne réelle",
  "Les sujets publiés du cycle moyen supérieur demandent un résumé en un nombre fixe de mots, avec une tolérance de 10 % : 200 mots en 2019, 250 mots en juillet 2025. Pour 250 mots, votre résumé doit donc compter entre 225 et 275 mots.",
  "! Hors de la fourchette, la copie est pénalisée, parfois sévèrement. Comptez vos mots et indiquez le total à la fin du résumé.",
  "## Comment compter les mots",
  "Usage courant des concours : un mot est un ensemble de lettres entre deux espaces ou apostrophes. « L'État » compte deux mots ; « c'est-à-dire » compte pour un mot dans l'usage le plus répandu ; un nombre en chiffres compte pour un mot.",
  "## Méthode en cinq étapes (3 heures)",
  "- Première lecture sans crayon : saisir le thème et la thèse de l'auteur.",
  "- Deuxième lecture : numérotez les paragraphes, soulignez l'idée principale de chacun, entourez les connecteurs logiques (mais, donc, en effet).",
  "- Dressez le plan du texte : thèse, arguments, exemples, concessions, conclusion.",
  "- Rédigez en respectant l'ordre du texte et la voix de l'auteur : écrivez comme si vous étiez l'auteur, sans « l'auteur dit que ».",
  "- Comptez, ajustez, recopiez proprement, notez le nombre de mots.",
  "## Ce qu'il faut garder et supprimer",
  "- Garder : la thèse, les arguments, les liens logiques.",
  "- Supprimer : les exemples, les répétitions, les citations, les digressions.",
  "- Reformuler : n'utilisez pas les phrases du texte ; seuls les mots-clés techniques peuvent être repris."
  ],
  fond:[
  "## Textes donnés récemment",
  "- Juillet 2025 : un texte sur la fin de la présence française en Afrique et l'histoire de la relation franco-africaine (résumé en 250 mots).",
  "- Session 2019 : un texte sur le capital humain, opposant l'investissement des gouvernements dans les infrastructures à l'investissement dans l'éducation et la santé (résumé en 200 mots).",
  "> Les textes portent sur des enjeux contemporains : développement, relations internationales, éducation. La lecture régulière d'articles d'analyse est le meilleur entraînement."
  ],
  retenir:["Nombre de mots imposé, ± 10 %.","Ordre du texte et voix de l'auteur.","Pas d'exemples, pas de citations, pas de copie de phrases."],
  exo:{tag:"ct", n:6, ecrit:"ct"} },

{ id:"n1", m:"ns", titre:"Note de synthèse : la méthode des 5 heures", min:75,
  tech:[
  "## La consigne réelle",
  "Au cycle supérieur, les sujets publiés demandent, à partir d'un dossier de 13 ou 14 pages, une note de synthèse de 4 pages au maximum, sans intercalaire (juin 2025 et septembre 2024). L'épreuve dure 5 heures, coefficient 5 : c'est la plus lourde de l'admissibilité.",
  "## Les règles d'or",
  "- Neutralité : aucune opinion, aucune connaissance extérieure au dossier.",
  "- Exhaustivité utile : toutes les idées importantes du dossier, aucune anecdote.",
  "- Référencement : chaque idée renvoie à ses documents (doc. 2, doc. 5).",
  "- Plan apparent en deux parties, chacune en deux sous-parties, avec titres.",
  "! Les préparateurs mettent en garde : ne plaquez pas un plan causes / conséquences / solutions. Laissez le dossier vous dicter le plan après plusieurs lectures.",
  "## Gestion du temps",
  "- 0 h 00 – 1 h 15 : lecture du dossier, repérage des idées document par document.",
  "- 1 h 15 – 2 h 00 : tableau de synthèse (idées en lignes, documents en colonnes) et plan.",
  "- 2 h 00 – 4 h 30 : rédaction directe au propre.",
  "- 4 h 30 – 5 h 00 : relecture et contrôle de la longueur.",
  "## Structure",
  "- Introduction de 10 à 15 phrases : contexte, définition du sujet, problématique, annonce du plan.",
  "- Deux parties avec chapeau, deux sous-parties, arguments de 5 à 7 phrases, transitions.",
  "- Conclusion courte qui résume, sans prise de position personnelle."
  ],
  fond:[
  "## Thèmes des dossiers récents",
  "- Juin 2025 : un dossier de 13 pages autour du financement de l'agriculture (articles de presse sur le financement agricole et le Salon de l'agriculture et des ressources animales d'Abidjan).",
  "- Septembre 2024 : un dossier de 14 pages, note de 4 pages maximum.",
  "> Les dossiers mêlent articles de presse, extraits de rapports et discours officiels. Entraînez-vous avec des articles économiques ivoiriens : agriculture, emploi, numérique, finances publiques."
  ],
  retenir:["4 pages maximum, sans intercalaire.","Neutralité totale, documents cités.","Le dossier dicte le plan."],
  exo:{tag:"ns", n:6, ecrit:"ns"} },

{ id:"d1", m:"dc", titre:"Droit constitutionnel 1 : l'État, la Constitution, les régimes", min:60,
  tech:[
  "## La dissertation juridique",
  "- Introduction : accroche, définitions juridiques, contexte (droit ivoirien et comparé), problématique, annonce du plan.",
  "- Plan en deux parties (I, II), chacune en deux sous-parties (A, B), avec titres apparents et chapeaux.",
  "- Charte des préparateurs : introduction de 10 à 15 phrases, chapeau de 1 à 2 phrases annonçant A et B, arguments de 5 à 7 phrases, conclusion partielle et transition.",
  "- Citez les articles de la Constitution quand vous en êtes sûr ; sinon, renvoyez au principe (« la Constitution prévoit que… »).",
  "! Pas de conclusion personnelle militante : le juriste démontre, il ne milite pas."
  ],
  fond:[
  "## L'État",
  "- Éléments constitutifs : une population, un territoire, une puissance publique souveraine.",
  "- État unitaire (Côte d'Ivoire) / État fédéral (Nigeria, États-Unis).",
  "## La Constitution",
  "- Norme suprême au sommet de la hiérarchie des normes (Kelsen).",
  "- Constitution rigide : révision par une procédure renforcée.",
  "- Pouvoir constituant originaire (nouvelle constitution) / dérivé (révision).",
  "## La séparation des pouvoirs et les régimes",
  "- Montesquieu, De l'esprit des lois (1748) : « le pouvoir arrête le pouvoir ».",
  "- Régime parlementaire : collaboration des pouvoirs, Gouvernement responsable devant le Parlement, droit de dissolution (Royaume-Uni).",
  "- Régime présidentiel : séparation stricte, pas de responsabilité gouvernementale ni de dissolution (États-Unis).",
  "- La Côte d'Ivoire est généralement classée parmi les régimes présidentiels à exécutif fort : le Président détermine et conduit la politique de la Nation.",
  "## Sujets officiels",
  "- Cycle moyen supérieur, juillet 2025 : Quels sont les rapports entre les pouvoirs législatif et exécutif ?",
  "- Cycle moyen supérieur, septembre 2019 : Le contrôle de constitutionnalité des lois avant leur promulgation."
  ],
  retenir:["Population, territoire, puissance publique.","Parlementaire : responsabilité et dissolution ; présidentiel : séparation stricte.","Plan I/A/B – II/A/B avec titres."],
  exo:{tag:"dc1", n:10, ecrit:"dc"} },

{ id:"d2", m:"dc", titre:"Droit constitutionnel 2 : les institutions de la Constitution de 2016", min:60,
  tech:[
  "## Construire une fiche institution",
  "Pour chaque institution : mode de désignation, durée du mandat, compétences, rapports avec les autres pouvoirs. C'est exactement ce que demande un sujet comme « les rapports entre les pouvoirs législatif et exécutif »."
  ],
  fond:[
  "## Repères",
  "- Constitution adoptée par référendum le 30 octobre 2016, promulguée le 8 novembre 2016 : IIIᵉ République.",
  "- Révision par la loi constitutionnelle du 19 mars 2020 : le vice-président n'est plus élu en même temps que le Président, il est désigné par celui-ci ; la Cour suprême disparaît au profit de la Cour de cassation, du Conseil d'État et de la Cour des comptes.",
  "## Le pouvoir exécutif",
  "- Président de la République : élu au suffrage universel direct pour 5 ans, rééligible une fois ; âge minimum de 35 ans.",
  "- Il détermine et conduit la politique de la Nation, nomme le Premier ministre et, sur proposition de celui-ci, les ministres.",
  "- Vice-président de la République : institution créée en 2016.",
  "- Le Gouvernement est responsable devant le Président de la République.",
  "## Le pouvoir législatif",
  "- Parlement bicaméral depuis 2016 : Assemblée nationale et Sénat.",
  "- Députés élus au suffrage universel direct pour 5 ans.",
  "- Sénat : deux tiers des sénateurs élus au suffrage universel indirect, un tiers désignés par le Président de la République.",
  "- Le Parlement vote la loi, consent l'impôt et contrôle l'action du Gouvernement (questions, commissions d'enquête).",
  "- Réuni en Congrès, il peut adopter une révision de la Constitution à la majorité des deux tiers de ses membres, hors des cas où un référendum est obligatoire.",
  "## Le pouvoir judiciaire et les juridictions",
  "- Conseil constitutionnel : contrôle de constitutionnalité des lois, contentieux de l'élection présidentielle et des élections législatives.",
  "- Cour de cassation (ordre judiciaire), Conseil d'État (ordre administratif), Cour des comptes (finances publiques).",
  "- Haute Cour de justice : juge le Président pour haute trahison et les membres du Gouvernement pour les crimes et délits commis dans l'exercice de leurs fonctions.",
  "## Autres institutions",
  "- Conseil économique, social, environnemental et culturel ; Médiateur de la République ; Chambre nationale des rois et chefs traditionnels."
  ],
  retenir:["5 ans renouvelable une fois, 35 ans minimum.","Sénat : 2/3 élus indirectement, 1/3 désignés.","2020 : vice-président désigné, fin de la Cour suprême."],
  exo:{tag:"dc2", n:12, ecrit:"dc"} },

{ id:"a1", m:"da", titre:"Droit administratif 1 : organisation administrative de la Côte d'Ivoire", min:60,
  tech:[
  "## Méthode : distinguer pour démontrer",
  "Les sujets de droit administratif se traitent en opposant des notions voisines : déconcentration et décentralisation, hiérarchie et tutelle, acte réglementaire et acte individuel. Construisez vos parties sur ces distinctions."
  ],
  fond:[
  "## Les principes",
  "- Centralisation : toutes les décisions prises au centre.",
  "- Déconcentration : des agents de l'État répartis sur le territoire décident au nom de l'État, sous pouvoir hiérarchique (préfet de région, préfet de département, sous-préfet).",
  "- Décentralisation : des collectivités dotées de la personnalité morale et de l'autonomie financière s'administrent par des organes élus, sous la tutelle de l'État.",
  "## Le cadre ivoirien",
  "- Loi n° 2014-451 du 5 août 2014 portant orientation de l'organisation générale de l'administration territoriale : administration déconcentrée (régions, départements, sous-préfectures, villages), administration décentralisée (régions, communes) et districts autonomes.",
  "- 31 régions et 201 communes sont les collectivités territoriales.",
  "- 14 districts autonomes depuis 2021, dirigés par des gouverneurs nommés par décret.",
  "- Il n'existe pas de lien hiérarchique entre la région et la commune.",
  "## Hiérarchie et tutelle",
  "- Pouvoir hiérarchique : le supérieur peut annuler, réformer, donner des ordres ; il s'exerce sans texte.",
  "- Tutelle : contrôle limité, prévu par les textes, sur les actes des collectivités (approbation, annulation pour illégalité)."
  ],
  retenir:["Déconcentration = hiérarchie ; décentralisation = tutelle.","Loi 2014-451 : trois niveaux.","31 régions, 201 communes, 14 districts."],
  exo:{tag:"da1", n:10, ecrit:"da"} },

{ id:"a2", m:"da", titre:"Droit administratif 2 : le régime juridique des actes administratifs", min:60,
  tech:[
  "## Pourquoi cette leçon est prioritaire",
  "Le sujet du cycle supérieur de juin 2025 était exactement : « Le régime juridique des actes administratifs ». Les grands thèmes du programme reviennent ; maîtrisez-les à fond.",
  "## Plan possible pour ce sujet",
  "- I. L'élaboration et l'entrée en vigueur des actes : A. Les conditions de légalité (compétence, forme, procédure, motifs, but). B. L'entrée en vigueur (publication, notification, non-rétroactivité).",
  "- II. La vie et la disparition des actes : A. Le privilège du préalable et l'exécution d'office. B. Le retrait et l'abrogation, sous le contrôle du juge."
  ],
  fond:[
  "## Définitions",
  "- Acte administratif unilatéral : décision prise par une autorité administrative qui modifie l'ordonnancement juridique sans le consentement des destinataires (décret, arrêté, décision).",
  "- Acte réglementaire : général et impersonnel. Acte individuel : vise une ou plusieurs personnes nommément désignées.",
  "## Conditions de légalité",
  "- Légalité externe : compétence de l'auteur, respect des formes et de la procédure.",
  "- Légalité interne : exactitude des motifs, respect de la règle de droit, absence de détournement de pouvoir (but étranger à l'intérêt général).",
  "## Entrée en vigueur",
  "- Acte réglementaire : publication. Acte individuel : notification à l'intéressé.",
  "- Principe de non-rétroactivité des actes administratifs.",
  "## Effets",
  "- Privilège du préalable : l'acte est présumé légal et exécutoire dès son entrée en vigueur.",
  "- Le recours n'est en principe pas suspensif.",
  "## Disparition",
  "- Retrait : disparition rétroactive, enfermée dans des conditions strictes (acte illégal, délai) pour les actes créateurs de droits.",
  "- Abrogation : disparition pour l'avenir.",
  "## Contrôle",
  "- Recours pour excès de pouvoir : annulation d'un acte illégal ; juge suprême de l'ordre administratif : le Conseil d'État.",
  "- Jurisprudences classiques : Blanco (1873, autonomie de la responsabilité administrative), Pelletier (1873, faute personnelle et faute de service)."
  ],
  retenir:["Légalité externe (compétence, forme, procédure) et interne (motifs, but).","Publication ou notification ; non-rétroactivité.","Retrait = rétroactif ; abrogation = pour l'avenir."],
  exo:{tag:"da2", n:10, ecrit:"da"} },

{ id:"a3", m:"da", titre:"Droit administratif 3 : service public, police et responsabilité", min:60,
  tech:[
  "## Sujets probables",
  "Continuité du service public, police administrative, responsabilité de l'administration, contrats administratifs, domaine public. Préparez un plan type pour chacun."
  ],
  fond:[
  "## Le service public",
  "- Activité d'intérêt général assurée ou contrôlée par une personne publique.",
  "- Lois de Rolland : continuité, mutabilité (adaptation), égalité. On y ajoute souvent la neutralité.",
  "- Modes de gestion : régie, établissement public, délégation (concession, affermage).",
  "## La police administrative",
  "- But préventif : maintien de l'ordre public (sécurité, tranquillité, salubrité).",
  "- Distincte de la police judiciaire, répressive (constater les infractions, rechercher les auteurs).",
  "- Les mesures de police doivent être nécessaires et proportionnées.",
  "## La responsabilité administrative",
  "- Responsabilité pour faute : faute de service (engage l'administration) et faute personnelle (détachable du service, engage l'agent).",
  "- Responsabilité sans faute : risque (activités dangereuses), rupture d'égalité devant les charges publiques.",
  "## Les biens publics",
  "- Domaine public : inaliénable et imprescriptible."
  ],
  retenir:["Continuité, mutabilité, égalité.","Police administrative = prévention et proportionnalité.","Faute de service / faute personnelle."],
  exo:{tag:"da3", n:10, ecrit:"da"} },

{ id:"f1", m:"fp", titre:"Finances publiques (bonus EGEF) : budget et dépense publique", min:45,
  tech:[
  "## Pourquoi ce bonus",
  "Les finances publiques ne sont pas une épreuve d'admissibilité, mais elles nourrissent les copies de PES et l'oral, et elles préparent la formation de l'École de gestion économique et financière (EGEF)."
  ],
  fond:[
  "## Principes budgétaires",
  "- Annualité, unité, universalité (non-compensation, non-affectation), spécialité, sincérité.",
  "## Lois de finances",
  "- Loi de finances initiale, lois de finances rectificatives, loi de règlement (constate l'exécution).",
  "## Budget-programme",
  "- Directives UEMOA de 2009 : budgets présentés par programmes, avec objectifs et indicateurs de performance, sous la responsabilité de responsables de programme.",
  "## Exécution de la dépense",
  "- Phase administrative (ordonnateur) : engagement, liquidation, ordonnancement.",
  "- Phase comptable (comptable public) : paiement, après contrôle de régularité.",
  "- Séparation des ordonnateurs et des comptables.",
  "## Contrôle",
  "- Contrôle administratif (contrôle financier), juridictionnel (Cour des comptes), parlementaire (vote de la loi de règlement)."
  ],
  retenir:["Engagement, liquidation, ordonnancement, paiement.","Ordonnateur ≠ comptable.","Loi de règlement = exécution constatée."],
  exo:{tag:"fp", n:8} },

{ id:"o1", m:"oral", titre:"Oral 1 : se présenter et convaincre le jury", min:45,
  tech:[
  "## Le déroulement",
  "Les sources de préparation décrivent un entretien devant un jury de hauts cadres : exposé sur un sujet tiré au sort (souvent une question d'actualité nationale et une internationale), puis questions. Le jury apprécie, selon l'ENA (communiqué d'août 2026) : la personnalité (maîtrise de soi, humilité, ouverture d'esprit, prestance), la rhétorique (qualité de l'expression, rigueur de l'argumentation), la réactivité et la culture générale.",
  "> Coefficient : 3 selon la présentation de la session 2026 ; des sources plus anciennes indiquent 5. Vérifiez dans le communiqué de votre session.",
  "## La présentation de soi (2 à 3 minutes)",
  "- Qui je suis : formation, parcours, responsabilités.",
  "- Ce que j'ai appris : deux réalisations concrètes, chiffrées si possible.",
  "- Pourquoi l'ENA : le service de l'État, le besoin de compétences publiques.",
  "- Mon projet : le corps visé et ce que j'y apporterai.",
  "## L'exposé sur sujet tiré",
  "- Introduction courte avec problématique, deux parties annoncées, conclusion avec ouverture.",
  "- Parlez lentement, regardez chaque membre du jury, n'apprenez pas par cœur.",
  "## Tenue et posture (exigences publiées pour la session 2026)",
  "- Hommes : costume sombre uni, chemise blanche, cravate sombre assortie, chaussures et chaussettes noires, barbe rasée.",
  "- Femmes : tailleur ou robe tailleur sombre uni, maquillage discret, chaussures noires.",
  "- Aucun signe religieux ou politique."
  ],
  fond:[
  "## Les questions qui reviennent",
  "- Pourquoi la fonction publique plutôt que le privé ?",
  "- Quelles sont les valeurs du fonctionnaire ? (légalité, neutralité, probité, loyauté, devoir de réserve)",
  "- Que feriez-vous face à un ordre manifestement illégal ?",
  "- Que pensez-vous de la décentralisation, de l'emploi des jeunes, du numérique dans l'administration ?",
  "## Votre profil est un atout, à présenter avec neutralité",
  "- Expérience d'analyse financière de projets : rigueur, sens de l'intérêt public, connaissance des politiques d'emploi.",
  "- Engagements associatifs et représentatifs : sens du terrain et du dialogue. Présentez-les sans connotation partisane : le devoir de réserve du fonctionnaire sera évoqué."
  ],
  retenir:["Personnalité, rhétorique, réactivité, culture générale.","Présentation : qui, quoi, pourquoi l'ENA, quel projet.","Neutralité et tenue sobre."],
  exo:{tag:"oral", n:5, oral:true} }
);

QUESTIONS.push(
["sog","sog1","La consigne « commentez et discutez » demande :",["d'expliquer l'idée puis d'en montrer les limites","de résumer l'assertion","de donner seulement son avis","d'énumérer des exemples"],0,"Commenter = expliquer et justifier ; discuter = nuancer, montrer les limites."],
["sog","sog1","Une bonne problématique :",["contient une tension et appelle une réponse nuancée","reprend le sujet mot pour mot","se répond par oui ou non sans réflexion","annonce le plan"],0,"La problématique fait apparaître le problème que pose le sujet."],
["sog","sog1","Combien de temps consacrer à l'analyse et au brouillon d'idées sur 4 heures ?",["Environ 30 minutes","5 minutes","2 heures","Aucun : on rédige directement"],0,"Une analyse de 25 à 30 minutes évite le hors-sujet."],
["sog","sog1","Le sujet « Les élections sont un levier pertinent de la paix » a été donné au cycle supérieur en :",["2025 (session de juin)","2009","2019","2022"],0,"Sujet d'ordre général de la deuxième étape d'admissibilité, juin 2025."],
["sog","sog1","Dans « Analysez cette assertion », le verbe analyser invite surtout à :",["expliquer les mécanismes et les causes","réfuter l'assertion","raconter l'histoire du thème","donner des chiffres"],0,"Analyser : décomposer et expliquer."],
["sog","sog1","Le sujet de 2009 « La mondialisation accentuera la pauvreté des pays du tiers monde » demandait :",["les réflexions qu'inspire cette opinion","un résumé","une note de synthèse","un commentaire de texte"],0,"Libellé : « Quelles réflexions vous inspire cette opinion ? »."],
["sog","sog2","Selon la charte des préparateurs, un argument doit compter :",["5 à 7 phrases","1 à 2 phrases","10 à 15 phrases","20 phrases"],0,"Idée, explication, exemple, mini-conclusion."],
["sog","sog2","L'introduction recommandée compte :",["10 à 15 phrases","3 phrases","une page entière obligatoirement","30 phrases"],0,"Accroche, définitions, problématique, annonce du plan."],
["sog","sog2","Le plan le plus adapté à une assertion à discuter est :",["dialectique","chronologique","descriptif","alphabétique"],0,"Thèse, antithèse, éventuellement synthèse."],
["sog","sog2","Si le temps manque en fin d'épreuve, il faut :",["raccourcir le dernier argument et garder la conclusion","supprimer la conclusion","rendre le brouillon","écrire en abrégé"],0,"Une copie sans conclusion est lourdement sanctionnée."],
["sog","sog2","Le chapeau d'une partie sert à :",["annoncer les sous-parties en 1 à 2 phrases","conclure la copie","citer un auteur","donner un exemple"],0,"Il guide le correcteur."],
["sog","sog2","Combien de lignes sauter entre l'introduction et le développement selon la charte ?",["2 lignes","Aucune","5 lignes","1 page"],0,"2 lignes entre grandes articulations, 1 ligne entre sous-parties."],
["pes","pes","Le sujet de PES du cycle supérieur de juin 2025 portait sur :",["les dispositifs d'inclusion sociale et la lutte contre la pauvreté","l'inflation","la dette publique","le cacao"],0,"« Les dispositifs actuels d'inclusion sociale en Côte d'Ivoire permettent-ils de lutter efficacement contre la pauvreté ? »"],
["pes","pes","Le sujet de PES du cycle moyen supérieur de juillet 2025 portait sur :",["l'économie informelle, levier ou frein","la monnaie unique","le budget-programme","l'énergie solaire"],0,"« L'économie informelle est-elle un levier ou un frein à la croissance et à l'inclusion ? »"],
["pes","pes","La CMU a été instituée en Côte d'Ivoire par :",["la loi du 24 mars 2014","la Constitution de 2016","un décret de 2020","le PND 2026-2030"],0,"Loi n° 2014-131 du 24 mars 2014 instituant la couverture maladie universelle."],
["pes","pes","La pauvreté multidimensionnelle mesure :",["des privations en santé, éducation et conditions de vie","le seul revenu monétaire","le PIB par habitant","l'inflation"],0,"Elle complète la pauvreté monétaire."],
["pes","pes","Les filets sociaux sont :",["des transferts ciblés vers les ménages pauvres","des impôts sur les ménages","des prêts aux entreprises","des subventions à l'exportation"],0,"Transferts monétaires ou en nature ciblés."],
["pes","pes","Le sous-emploi désigne notamment :",["le temps partiel subi ou l'emploi peu productif","l'absence totale d'emploi","l'emploi public","la retraite anticipée"],0,"Il est massif dans l'économie informelle."],
["pes","pes","Selon le BIT, une personne est au chômage si elle est :",["sans emploi, disponible et en recherche active","inscrite à une agence","sans diplôme","au foyer"],0,"Trois critères cumulatifs."],
["pes","pes","Quelle règle d'or s'applique aux chiffres dans une copie de PES ?",["N'utiliser que des chiffres sûrs ; sinon un ordre de grandeur prudent","Inventer des chiffres plausibles","Ne jamais citer de chiffre","Arrondir à la centaine"],0,"Un chiffre faux décrédibilise la copie."],
["pes","pes","Le PND 2026-2030 a été adopté en Conseil des ministres le :",["4 février 2026","7 août 2025","1er janvier 2026","8 novembre 2016"],0,"Coût annoncé : 114 838,5 milliards de FCFA."],
["pes","pes","L'économie informelle peut être un « amortisseur » parce qu'elle :",["procure des revenus à ceux que l'économie formelle n'emploie pas","paie beaucoup d'impôts","offre une protection sociale complète","exporte massivement"],0,"Mais elle prive l'État de recettes et les travailleurs de protection."],
["pes","pes2","Le pacte de convergence de l'UEMOA fixe le plafond de dette publique à :",["70 % du PIB","60 % du PIB","3 % du PIB","100 % du PIB"],0,"Avec −3 % de solde budgétaire et 3 % d'inflation."],
["pes","pes2","Avec une propension marginale à consommer de 0,8, le multiplicateur vaut :",["5","1,25","8","0,2"],0,"1 / (1 − 0,8) = 5."],
["pes","pes2","Qui a défendu la protection temporaire des industries naissantes ?",["Friedrich List","David Ricardo","Adam Smith","Jean-Baptiste Say"],0,"List (XIXᵉ siècle) : protectionnisme éducateur."],
["pes","pes2","La théorie des avantages comparatifs est due à :",["David Ricardo","Keynes","Marx","Malthus"],0,"Ricardo, 1817."],
["pes","pes2","L'inflation importée provient notamment :",["de la hausse des prix des produits importés (énergie, céréales)","de la baisse des impôts","de la hausse de l'épargne","de la baisse des salaires"],0,"Elle pèse particulièrement sur les ménages urbains."],
["pes","pes2","La BCEAO agit principalement sur l'économie par :",["ses taux directeurs","le budget de l'État","les droits de douane","les salaires des fonctionnaires"],0,"Instruments de politique monétaire."],
["pes","pes2","Une croissance inclusive est une croissance :",["qui profite largement à la population, notamment par l'emploi","sans inflation","portée par les seules exportations","financée par la dette"],0,"Elle réduit pauvreté et inégalités."],
["pes","pes2","L'effet d'éviction signifie que :",["l'emprunt public peut réduire l'investissement privé","l'État évince les fonctionnaires","les importations chassent les exportations","l'inflation chasse l'épargne"],0,"La hausse des taux d'intérêt renchérit le crédit privé."],
["pes","pes2","L'IDH du PNUD combine :",["santé, éducation et niveau de vie","PIB, dette et inflation","emploi, logement et transport","exportations et importations"],0,"Espérance de vie, scolarisation, revenu national par habitant."],
["pes","pes2","La loi de Say affirme que :",["l'offre crée sa propre demande","la demande crée l'offre","l'inflation est toujours monétaire","la population croît plus vite que les ressources"],0,"Keynes la critiquera."],
["ct","ct","Pour un résumé demandé en 250 mots avec ± 10 %, la fourchette autorisée est :",["225 à 275 mots","200 à 300 mots","240 à 260 mots","250 mots exactement"],0,"250 × 0,9 = 225 et 250 × 1,1 = 275."],
["ct","ct","Pour un résumé en 200 mots ± 10 %, combien de mots au maximum ?",["220","210","250","200"],0,"200 × 1,1 = 220."],
["ct","ct","Dans un résumé, on écrit :",["à la place de l'auteur, sans « l'auteur dit »","à la troisième personne en citant l'auteur","en donnant son avis","en recopiant les meilleures phrases"],0,"On respecte le système d'énonciation du texte."],
["ct","ct","Que supprime-t-on en priorité ?",["Les exemples et les répétitions","Les connecteurs logiques","La thèse","Les arguments"],0,"On garde thèse, arguments et liens logiques."],
["ct","ct","L'ordre des idées dans le résumé doit :",["suivre l'ordre du texte","être réorganisé librement","commencer par la conclusion","être alphabétique"],0,"Le résumé reproduit la progression du texte."],
["ct","ct","Que doit-on indiquer à la fin du résumé ?",["le nombre de mots","le titre du texte","la note espérée","sa signature"],0,"Le correcteur vérifie le décompte."],
["ns","ns","La note de synthèse du cycle supérieur en juin 2025 était limitée à :",["4 pages, sans intercalaire","2 pages","10 pages","une page par document"],0,"À partir d'un dossier de 13 pages."],
["ns","ns","Dans une note de synthèse, on peut :",["uniquement utiliser les informations du dossier","ajouter ses connaissances personnelles","donner son opinion en conclusion","citer des documents absents du dossier"],0,"Neutralité et fidélité au dossier."],
["ns","ns","Le tableau de synthèse croise :",["les idées et les documents","les dates et les auteurs","les pages et les mots","les parties et les conclusions"],0,"Idées en lignes, documents en colonnes."],
["ns","ns","Le plan de la note doit être :",["apparent, en deux parties et sous-parties titrées","implicite","en cinq parties","calqué sur l'ordre des documents"],0,"Le plan est thématique, pas document par document."],
["ns","ns","Combien de temps consacrer à la lecture du dossier sur 5 heures ?",["Environ 1 heure à 1 h 15","10 minutes","3 heures","Aucun : on lit en rédigeant"],0,"La lecture approfondie conditionne tout le reste."],
["ns","ns","Faut-il appliquer systématiquement le plan causes / conséquences / solutions ?",["Non, le dossier doit dicter le plan","Oui, toujours","Seulement pour l'économie","Oui, c'est imposé"],0,"Mise en garde des chartes de préparation."],
["dc","dc1","Les trois éléments constitutifs de l'État sont :",["population, territoire, puissance publique","Président, Parlement, juges","langue, religion, culture","impôt, armée, monnaie"],0,"Définition classique."],
["dc","dc1","La Côte d'Ivoire est un État :",["unitaire","fédéral","confédéral","régional"],0,"Un seul centre d'impulsion politique."],
["dc","dc1","Dans un régime parlementaire, le Gouvernement est :",["responsable devant le Parlement","irresponsable","élu par le peuple","nommé à vie"],0,"Responsabilité politique et droit de dissolution."],
["dc","dc1","L'exemple type du régime présidentiel est :",["les États-Unis","le Royaume-Uni","l'Allemagne","l'Italie"],0,"Séparation stricte des pouvoirs."],
["dc","dc1","Une constitution rigide :",["se révise selon une procédure renforcée","ne peut jamais être révisée","n'est pas écrite","est adoptée par décret"],0,"La rigidité tient à la procédure de révision."],
["dc","dc1","La pyramide des normes est associée à :",["Hans Kelsen","Max Weber","Montesquieu","Carl Schmitt"],0,"Théorie pure du droit."],
["dc","dc1","Le sujet de droit constitutionnel du cycle moyen supérieur de juillet 2025 était :",["Quels sont les rapports entre les pouvoirs législatif et exécutif ?","Le bicamérisme","La souveraineté nationale","Le référendum"],0,"Sujet de la deuxième étape d'admissibilité, session de juillet 2025."],
["dc","dc1","Le pouvoir constituant dérivé :",["révise la constitution en vigueur","crée une constitution nouvelle","exécute les lois","juge les ministres"],0,"Le pouvoir originaire crée une constitution nouvelle."],
["dc","dc1","Le référendum relève de la démocratie :",["semi-directe","représentative pure","directe pure","censitaire"],0,"Le peuple tranche directement certains textes."],
["dc","dc1","Le contrôle de constitutionnalité a priori intervient :",["avant la promulgation de la loi","après son application","lors d'un procès pénal","après la révision constitutionnelle"],0,"A posteriori : sur une loi en vigueur."],
["dc","dc2","La Constitution ivoirienne actuelle a été promulguée le :",["8 novembre 2016","30 octobre 2016","1er août 2000","19 mars 2020"],0,"Référendum le 30 octobre, promulgation le 8 novembre 2016."],
["dc","dc2","Le Président de la République est élu pour :",["5 ans, rééligible une fois","7 ans, rééligible une fois","5 ans, non rééligible","6 ans, rééligible"],0,"Suffrage universel direct."],
["dc","dc2","L'âge minimum pour être candidat à l'élection présidentielle est :",["35 ans","40 ans","30 ans","45 ans"],0,"La limite d'âge maximale a été supprimée en 2016."],
["dc","dc2","Les sénateurs sont :",["pour deux tiers élus indirectement, pour un tiers désignés par le Président","tous élus au suffrage direct","tous nommés","élus par les députés"],0,"Composition fixée en 2016."],
["dc","dc2","Depuis la révision du 19 mars 2020, le vice-président est :",["désigné par le Président de la République","élu en ticket avec le Président","élu par le Parlement","élu par le Sénat"],0,"Le ticket a été supprimé en 2020."],
["dc","dc2","La révision de 2020 a remplacé la Cour suprême par :",["la Cour de cassation, le Conseil d'État et la Cour des comptes","le Conseil constitutionnel seul","la Haute Cour de justice","une Cour administrative unique"],0,"Trois juridictions suprêmes distinctes."],
["dc","dc2","Réuni en Congrès, le Parlement adopte une révision constitutionnelle à la majorité :",["des deux tiers de ses membres","simple","des trois cinquièmes des votants","absolue des suffrages exprimés"],0,"Hors cas où un référendum est obligatoire."],
["dc","dc2","Le contentieux de l'élection présidentielle relève :",["du Conseil constitutionnel","de la Cour de cassation","du Conseil d'État","de la Commission électorale"],0,"Le Conseil constitutionnel proclame les résultats définitifs."],
["dc","dc2","Le Gouvernement est responsable devant :",["le Président de la République","l'Assemblée nationale seule","le Sénat","le Conseil constitutionnel"],0,"Trait du régime présidentiel ivoirien."],
["dc","dc2","Les députés sont élus pour :",["5 ans au suffrage universel direct","7 ans au suffrage indirect","4 ans au suffrage direct","6 ans au suffrage indirect"],0,"Mandat de cinq ans."],
["dc","dc2","La Haute Cour de justice juge notamment :",["le Président pour haute trahison","les litiges administratifs","les élections municipales","les comptes publics"],0,"Ainsi que les membres du Gouvernement pour les infractions commises dans leurs fonctions."],
["dc","dc2","Laquelle de ces institutions n'est pas une juridiction ?",["Le Médiateur de la République","La Cour des comptes","Le Conseil d'État","La Cour de cassation"],0,"Le Médiateur règle à l'amiable les différends entre administration et usagers."],
["da","da1","La déconcentration se caractérise par :",["des agents de l'État soumis au pouvoir hiérarchique","des collectivités élues","l'absence de tout contrôle","la privatisation"],0,"Préfets et sous-préfets."],
["da","da1","La décentralisation se caractérise par :",["la personnalité morale, des organes élus et la tutelle","le pouvoir hiérarchique du ministre","des agents nommés","l'absence de budget propre"],0,"Régions et communes."],
["da","da1","Combien de communes compte la Côte d'Ivoire ?",["201","197","31","14"],0,"201 communes depuis 2018."],
["da","da1","La loi d'orientation de l'administration territoriale est :",["la loi n° 2014-451 du 5 août 2014","la loi n° 2014-131","la Constitution de 2016","le décret de 2021"],0,"Elle distingue administration déconcentrée, décentralisée et districts autonomes."],
["da","da1","Les gouverneurs des districts autonomes sont :",["nommés par décret","élus au suffrage direct","élus par les maires","désignés par le Sénat"],0,"Ils ont rang de ministre."],
["da","da1","La tutelle se distingue du pouvoir hiérarchique car elle :",["est limitée et doit être prévue par un texte","permet de donner tout ordre","s'exerce sans texte","porte sur l'opportunité de toute décision"],0,"« Pas de tutelle sans texte. »"],
["da","da1","Entre la région et la commune, il existe :",["aucun lien hiérarchique","un lien hiérarchique","une tutelle de la région","une tutelle de la commune"],0,"Ce sont deux collectivités autonomes."],
["da","da1","Le sous-préfet appartient à :",["l'administration déconcentrée","l'administration décentralisée","l'administration judiciaire","le Parlement"],0,"Représentant de l'État."],
["da","da1","Le maire est :",["élu par le conseil municipal","nommé par décret","élu au suffrage indirect par le Sénat","désigné par le préfet"],0,"Il est élu par le conseil municipal."],
["da","da1","La région est dirigée par :",["un conseil régional élu","un préfet de région seul","un gouverneur de district","un maire"],0,"Le conseil régional, organe délibérant élu."],
["da","da2","Le sujet de droit administratif du cycle supérieur de juin 2025 était :",["Le régime juridique des actes administratifs","La décentralisation","Le service public","La police administrative"],0,"Sujet de la deuxième étape d'admissibilité."],
["da","da2","Un acte réglementaire entre en vigueur par :",["sa publication","sa notification individuelle","sa signature seule","le vote du Parlement"],0,"L'acte individuel, lui, est notifié."],
["da","da2","Le détournement de pouvoir est un vice de :",["légalité interne (but)","forme","compétence","procédure"],0,"L'acte poursuit un but étranger à l'intérêt général."],
["da","da2","Le privilège du préalable signifie que l'acte :",["est présumé légal et exécutoire","doit être validé par le juge","ne s'applique qu'après recours","est rétroactif"],0,"Le recours n'est en principe pas suspensif."],
["da","da2","Le retrait d'un acte le fait disparaître :",["rétroactivement","pour l'avenir seulement","après 10 ans","jamais"],0,"L'abrogation vaut pour l'avenir."],
["da","da2","L'incompétence de l'auteur d'un acte est un vice de :",["légalité externe","légalité interne","opportunité","fond"],0,"Légalité externe : compétence, forme, procédure."],
["da","da2","Un acte administratif peut-il en principe être rétroactif ?",["Non, principe de non-rétroactivité","Oui, toujours","Oui, s'il est réglementaire","Seulement le dimanche"],0,"Principe général du droit."],
["da","da2","L'arrêt Blanco (1873) a été rendu par :",["le Tribunal des conflits","le Conseil d'État","la Cour de cassation","le Conseil constitutionnel"],0,"Il fonde l'autonomie de la responsabilité administrative."],
["da","da2","Le recours pour excès de pouvoir tend à :",["l'annulation d'un acte illégal","l'indemnisation","la sanction pénale de l'agent","la révision de la loi"],0,"Recours objectif."],
["da","da2","Un arrêté est :",["un acte administratif unilatéral","un contrat","un jugement","une loi"],0,"Décision d'une autorité administrative."],
["da","da3","Les lois de Rolland sont :",["continuité, mutabilité, égalité","gratuité, neutralité, rentabilité","légalité, opportunité, efficacité","laïcité, gratuité, obligation"],0,"Principes du service public."],
["da","da3","La police administrative est :",["préventive","répressive","judiciaire","militaire"],0,"Elle prévient les troubles à l'ordre public."],
["da","da3","Une mesure de police doit être :",["nécessaire et proportionnée","la plus sévère possible","générale et absolue","prise par un juge"],0,"Contrôle de proportionnalité."],
["da","da3","La faute personnelle de l'agent engage :",["l'agent lui-même","toujours l'État","le juge","le maire"],0,"Arrêt Pelletier, 1873."],
["da","da3","Le domaine public est :",["inaliénable et imprescriptible","librement vendable","saisissable","acquis par prescription"],0,"Protection de l'affectation."],
["da","da3","La concession est un mode de :",["gestion déléguée d'un service public","police","contrôle juridictionnel","décentralisation"],0,"Le concessionnaire se rémunère sur les usagers."],
["da","da3","La responsabilité sans faute peut reposer sur :",["le risque ou la rupture d'égalité devant les charges publiques","la faute lourde","la faute personnelle","le détournement de pouvoir"],0,"Régimes jurisprudentiels."],
["da","da3","La police judiciaire a pour but :",["de constater les infractions et rechercher leurs auteurs","de prévenir les troubles","d'organiser les élections","de gérer le domaine public"],0,"Elle est répressive."],
["fp","fp","Les phases de la dépense publique sont :",["engagement, liquidation, ordonnancement, paiement","paiement, engagement, liquidation, ordonnancement","liquidation, paiement, engagement, ordonnancement","ordonnancement, engagement, paiement, liquidation"],0,"Trois phases administratives, une comptable."],
["fp","fp","Qui paie la dépense publique ?",["Le comptable public","L'ordonnateur","Le Parlement","Le ministre"],0,"Séparation ordonnateur / comptable."],
["fp","fp","La loi de règlement :",["constate l'exécution du budget","autorise les dépenses futures","révise la Constitution","fixe les salaires"],0,"Elle arrête les montants définitifs."],
["fp","fp","Le principe de non-affectation interdit :",["d'affecter une recette à une dépense précise, sauf exception","de voter le budget","de prélever l'impôt","de publier les comptes"],0,"Corollaire de l'universalité."],
["fp","fp","Le budget-programme est généralisé dans l'UEMOA par :",["les directives de 2009","le traité de 1994","la Constitution de 2016","le pacte de 2015"],0,"Gestion axée sur les résultats."],
["fp","fp","Le juge des comptes en Côte d'Ivoire est :",["la Cour des comptes","le Conseil d'État","le Conseil constitutionnel","la Cour de cassation"],0,"Elle contrôle les comptables publics."],
["fp","fp","Le taux de pression fiscale rapporte :",["les recettes fiscales au PIB","la dette au PIB","les dépenses aux recettes","l'impôt direct à l'impôt indirect"],0,"Indicateur de mobilisation des recettes."],
["fp","fp","Lequel est un impôt indirect ?",["La TVA","L'impôt sur les bénéfices","L'impôt sur les salaires","L'impôt foncier"],0,"Supporté par le consommateur final."]
);

// ============ SUJETS D'ÉCRIT ============
// src : "officiel" = relevé sur un sujet ENA publié (année, cycle) ; "original" = sujet d'entraînement rédigé pour l'appli.
const EPREUVES = {
  sog: { label:"Sujet d'ordre général", duree:240, coef:4, cycles:"CMS · CS",
    grille:["Le sujet est défini mot par mot dans l'introduction.","La problématique contient une tension et une seule question.","Le plan est annoncé et suivi (deux ou trois parties équilibrées).","Chaque argument contient idée, explication, exemple précis, mini-conclusion.","Les exemples sont ivoiriens ou africains, datés et exacts.","Des transitions relient les parties.","La conclusion répond à la problématique et ouvre.","Orthographe et accords relus."] },
  pes: { label:"Problèmes économiques et sociaux", duree:180, coef:3, cycles:"CMS · CS",
    grille:["Les notions économiques sont définies précisément.","Un diagnostic est posé (situation, causes, acteurs).","Au moins un mécanisme cause → effet par partie.","Les politiques publiques ivoiriennes sont citées et évaluées.","Aucun chiffre incertain ; ordres de grandeur prudents.","Des recommandations réalistes concluent la copie.","Introduction et conclusion de 10 à 15 phrases."] },
  ct:  { label:"Résumé (contraction) de texte", duree:180, coef:3, cycles:"CMS",
    grille:["Le nombre de mots est dans la fourchette ± 10 % et indiqué à la fin.","L'ordre des idées du texte est respecté.","Pas de « l'auteur dit » : on écrit à sa place.","La thèse et tous les arguments sont présents.","Les exemples et répétitions sont supprimés.","Aucune phrase du texte n'est recopiée.","Les connecteurs logiques sont conservés."] },
  dc:  { label:"Droit constitutionnel", duree:180, coef:3, cycles:"CMS",
    grille:["Les termes juridiques sont définis.","Les articles ou principes constitutionnels pertinents sont mobilisés.","Plan I/A/B – II/A/B avec titres apparents.","Chapeaux et transitions présents.","Droit comparé utilisé à bon escient.","Aucune prise de position militante."] },
  ns:  { label:"Note de synthèse", duree:300, coef:5, cycles:"CS",
    grille:["Aucune connaissance extérieure ni opinion personnelle.","Tous les documents sont exploités et cités (Doc. n).","Plan apparent en deux parties et sous-parties, thématique.","Introduction : contexte, problématique, annonce du plan.","Longueur respectée (4 pages maximum).","Style neutre et précis."] },
  da:  { label:"Droit administratif", duree:180, coef:3, cycles:"CS",
    grille:["Les notions sont définies et distinguées (ex. retrait / abrogation).","Jurisprudence et textes ivoiriens mobilisés avec exactitude.","Plan juridique I/A/B – II/A/B.","Exemples concrets d'administration ivoirienne.","Conclusion qui répond au sujet."] }
};

const SUJETS = [
// ---------- OFFICIELS (relevés sur les sujets publiés) ----------
{ e:"sog", src:"officiel", ref:"Cycle supérieur · juin 2025 (entrée 2026)", t:"« Les élections sont un levier pertinent de la paix ». Commentez et discutez cette assertion.",
  plan:["Problématique : le vote, censé départager pacifiquement les ambitions, suffit-il à garantir la paix, alors que des élections ont été l'occasion de crises ?","I. Les élections, instrument de pacification de la compétition politique : A. Elles substituent le bulletin à la force et confèrent une légitimité au pouvoir. B. Elles permettent l'alternance et l'expression des minorités, ce qui réduit la tentation de la violence.","II. Un levier qui ne fonctionne qu'à certaines conditions : A. Sans règles consensuelles (liste électorale, organe électoral, juge indépendant), le scrutin peut devenir source de contestation. B. La paix exige aussi la cohésion sociale, la justice et le développement : l'élection en est un levier parmi d'autres.","Conclusion : levier nécessaire mais non suffisant ; ouverture sur la culture démocratique et le dialogue politique."] },
{ e:"pes", src:"officiel", ref:"Cycle supérieur · juin 2025 (entrée 2026)", t:"Les dispositifs actuels d'inclusion sociale en Côte d'Ivoire permettent-ils de lutter efficacement contre la pauvreté ?",
  plan:["Définitions : inclusion sociale, pauvreté monétaire et multidimensionnelle, dispositifs (CMU, filets sociaux, programmes sociaux du Gouvernement, insertion des jeunes).","I. Des dispositifs qui contribuent réellement au recul de la pauvreté : A. Protection contre les chocs (CMU instituée en 2014, transferts monétaires aux ménages vulnérables). B. Accès à l'emploi et au revenu (financement de projets de jeunes, stages, travaux à haute intensité de main-d'œuvre).","II. Une efficacité encore limitée : A. Couverture et ciblage imparfaits, poids de l'informel, disparités régionales. B. Financement, coordination et évaluation insuffisants.","Recommandations : registre social unifié, extension de la CMU à l'informel, évaluation d'impact, articulation avec le PND 2026-2030."] },
{ e:"da", src:"officiel", ref:"Cycle supérieur · juin 2025 (entrée 2026)", t:"Le régime juridique des actes administratifs.",
  plan:["I. L'élaboration et l'entrée en vigueur : A. Les conditions de légalité externe et interne. B. Publication, notification, non-rétroactivité.","II. Les effets et la disparition : A. Privilège du préalable et caractère exécutoire. B. Retrait, abrogation et contrôle du juge (recours pour excès de pouvoir)."] },
{ e:"ns", src:"officiel", ref:"Cycle supérieur · juin 2025 (entrée 2026)", t:"À partir d'un dossier de 13 pages (thème relevé : le financement de l'agriculture), rédigez une note de synthèse de 4 pages maximum, sans intercalaire.",
  plan:["Entraînez-vous avec le dossier fictif de l'appli ou avec 8 à 10 articles de presse ivoirienne sur le financement agricole, puis appliquez la méthode : tableau idées/documents, plan thématique en deux parties."] },
{ e:"sog", src:"officiel", ref:"Cycle supérieur · septembre 2024 (entrée 2025)", t:"Une assertion selon laquelle le sport permet de bâtir un monde inclusif et plus pacifique. Commentez et discutez. (Énoncé relevé partiellement sur un document numérisé.)",
  plan:["I. Le sport, vecteur d'inclusion et de paix : A. Il rassemble au-delà des origines et des conditions (CAN 2023, équipes nationales). B. Il insère les jeunes et diffuse des valeurs (règle, respect, effort).","II. Des limites réelles : A. Violences, nationalismes, discriminations, corruption. B. Le sport ne remplace pas les politiques de cohésion et de développement."] },
{ e:"ns", src:"officiel", ref:"Cycle supérieur · septembre 2024 (entrée 2025)", t:"À partir d'un dossier de 14 pages, rédigez une note de synthèse de 4 pages maximum, sans intercalaire.", plan:[] },
{ e:"sog", src:"officiel", ref:"Cycle moyen supérieur · juillet 2025 (entrée 2026)", t:"« L'action incontrôlée de l'homme contribue à la transformation de l'environnement. » Analysez cette assertion.",
  plan:["I. Les mécanismes de la transformation : A. Déforestation liée aux cultures de rente et à l'urbanisation. B. Pollutions, orpaillage clandestin, érosion côtière.","II. Les conséquences et les réponses : A. Effets sur le climat, la santé, l'agriculture. B. Réglementation, reboisement, engagements internationaux (Accord de Paris), éducation."] },
{ e:"pes", src:"officiel", ref:"Cycle moyen supérieur · juillet 2025 (entrée 2026)", t:"L'économie informelle est-elle un levier ou un frein à la croissance et à l'inclusion ?",
  plan:["I. Un levier : A. Amortisseur social, source de revenus et d'emplois. B. Vivier d'entrepreneuriat et de savoir-faire.","II. Un frein : A. Faible productivité, manque de recettes fiscales, précarité et absence de protection sociale. B. Obstacle au financement et à la croissance des entreprises.","Ouverture : formalisation progressive et incitative (régimes simplifiés, protection sociale des indépendants)."] },
{ e:"dc", src:"officiel", ref:"Cycle moyen supérieur · juillet 2025 (entrée 2026)", t:"Quels sont les rapports entre les pouvoirs législatif et exécutif ?",
  plan:["I. Des pouvoirs séparés et qui se contrôlent : A. Le Parlement vote la loi, consent l'impôt, contrôle le Gouvernement. B. L'exécutif dispose de l'initiative, du pouvoir réglementaire et de la promulgation.","II. Une collaboration déséquilibrée au profit de l'exécutif : A. Prépondérance du Président dans la Constitution de 2016. B. Instruments de collaboration et limites du contrôle parlementaire."] },
{ e:"ct", src:"officiel", ref:"Cycle moyen supérieur · juillet 2025 (entrée 2026)", t:"Résumez en 250 mots (± 10 %) un texte sur la fin de la présence française en Afrique. Texte non reproduit dans l'appli : utilisez le texte d'entraînement ci-dessous avec la même consigne.", plan:[] },
{ e:"sog", src:"officiel", ref:"Cycle moyen supérieur · septembre 2019 (entrée 2020)", t:"Un jeune Africain en quête d'un premier emploi, après avoir tenté plusieurs concours, déclare qu'il ne lui reste plus qu'à tenter l'aventure de l'émigration clandestine. Appréciez ces propos. (Énoncé reformulé à partir du sujet numérisé.)",
  plan:["I. Un désarroi compréhensible : A. Chômage des diplômés, concours très sélectifs. B. Attrait de l'ailleurs et pression sociale.","II. Une issue dangereuse et non fatale : A. Risques mortels, exploitation, illusions. B. Alternatives : entrepreneuriat accompagné, formation qualifiante, dispositifs publics d'insertion, migration régulière."] },
{ e:"dc", src:"officiel", ref:"Cycle moyen supérieur · septembre 2019 (entrée 2020)", t:"Le contrôle de constitutionnalité des lois avant leur promulgation.",
  plan:["I. Un contrôle a priori protecteur de la Constitution : A. Saisine et office du Conseil constitutionnel. B. Effets : une disposition déclarée inconstitutionnelle ne peut être promulguée.","II. Un contrôle aux limites certaines : A. Saisine restreinte aux autorités politiques. B. Complément nécessaire du contrôle a posteriori (exception d'inconstitutionnalité)."] },
{ e:"ct", src:"officiel", ref:"Cycle moyen supérieur · septembre 2019 (entrée 2020)", t:"Résumez en 200 mots (± 10 %) un texte sur le capital humain (investir dans l'éducation et la santé plutôt que seulement dans les infrastructures). Texte non reproduit.", plan:[] },
{ e:"pes", src:"officiel", ref:"Cycle moyen supérieur · septembre 2019 (entrée 2020)", t:"Le libre-échange prôné par la mondialisation est-il profitable à tous ? (Début de l'énoncé partiellement lisible.)",
  plan:["I. Des gains réels : avantages comparatifs (Ricardo), accès aux marchés, transferts de technologie.","II. Des gains inégalement répartis : spécialisation primaire, chocs sur les industries naissantes (List), nécessité de politiques d'accompagnement et d'intégration régionale (ZLECAf)."] },
{ e:"sog", src:"officiel", ref:"Cycle moyen · juillet 2026 (entrée 2027)", t:"Deux citations sur la rareté de l'honnêteté, l'une attribuée à Shakespeare, l'autre à Sembène Ousmane. Commentez, puis discutez ces assertions.",
  plan:["I. Un constat pessimiste qui a des fondements : corruption, recherche du gain rapide, impunité.","II. Un constat à nuancer : l'honnêteté reste une valeur vivante et institutionnalisée (contrôles, éducation civique, exemplarité), et elle conditionne la confiance et le développement."] },
{ e:"sog", src:"officiel", ref:"Cycle moyen supérieur · 2009", t:"« La mondialisation accentuera la pauvreté des pays du tiers monde. » Quelles réflexions vous inspire cette opinion ?",
  plan:["I. Une crainte fondée : dépendance aux matières premières, concurrence, fuite des capitaux.","II. Une fatalité contestable : pays émergents, intégration régionale, transformation locale, rôle des politiques publiques."] },
// ---------- ORIGINAUX ----------
{ e:"sog", src:"original", ref:"Entraînement", t:"La jeunesse est-elle une chance ou un défi pour le développement de la Côte d'Ivoire ?", plan:[] },
{ e:"sog", src:"original", ref:"Entraînement", t:"« Le numérique rapproche l'administration du citoyen. » Commentez et discutez.", plan:[] },
{ e:"sog", src:"original", ref:"Entraînement", t:"La cohésion sociale peut-elle se décréter ?", plan:[] },
{ e:"sog", src:"original", ref:"Entraînement", t:"« Le diplôme ne garantit plus l'emploi. » Analysez cette assertion.", plan:[] },
{ e:"pes", src:"original", ref:"Entraînement", t:"L'entrepreneuriat des jeunes peut-il réduire durablement le chômage en Côte d'Ivoire ?", plan:[] },
{ e:"pes", src:"original", ref:"Entraînement", t:"La transformation locale des matières premières agricoles est-elle la clé de l'émergence ?", plan:[] },
{ e:"pes", src:"original", ref:"Entraînement", t:"Inflation et pouvoir d'achat dans l'UEMOA : quels leviers pour les États ?", plan:[] },
{ e:"dc", src:"original", ref:"Entraînement", t:"Le bicamérisme dans la Constitution ivoirienne de 2016.", plan:[] },
{ e:"dc", src:"original", ref:"Entraînement", t:"Le Président de la République dans la Constitution de 2016.", plan:[] },
{ e:"da", src:"original", ref:"Entraînement", t:"La décentralisation en Côte d'Ivoire.", plan:[] },
{ e:"da", src:"original", ref:"Entraînement", t:"Le principe de continuité du service public.", plan:[] },
{ e:"da", src:"original", ref:"Entraînement", t:"La responsabilité de l'administration du fait de ses agents.", plan:[] },
{ e:"ct", src:"original", ref:"Entraînement", t:"Résumez le texte « Le travail des jeunes, une affaire de tous » en 150 mots (± 10 %).", plan:[], texte:true },
{ e:"ns", src:"original", ref:"Entraînement", t:"Dossier « La dématérialisation des services publics » : note de synthèse de 2 pages maximum.", plan:[], dossier:true }
];

const TEXTE_CONTRACTION = `Chaque année, des dizaines de milliers de jeunes quittent l'école ou l'université avec l'espoir légitime de trouver leur place dans l'économie. Pour beaucoup d'entre eux, cette entrée dans la vie active ressemble pourtant à un long parcours d'obstacles. Le premier emploi se fait attendre, les stages se succèdent sans déboucher sur un contrat, et le recours aux petits métiers informels devient, faute de mieux, la règle plutôt que l'exception. Il serait commode d'en conclure que la jeunesse manque de volonté. Ce serait une erreur de diagnostic, et une erreur coûteuse.

Le problème tient d'abord à un décalage. Les formations proposées ne correspondent pas toujours aux besoins des entreprises, qui réclament des compétences techniques et pratiques que l'enseignement général prépare mal. Le jeune diplômé maîtrise des savoirs, mais il lui manque souvent l'expérience, le réseau et la connaissance du monde professionnel qui font la différence lors d'un recrutement. L'entreprise, de son côté, hésite à investir dans un débutant qu'il faudra former.

Ce décalage n'est pas une fatalité. Là où l'école et l'entreprise se parlent, les résultats suivent. L'apprentissage, l'alternance, les stages encadrés et les chantiers-écoles permettent au jeune d'acquérir un savoir-faire tout en se constituant une première expérience. Ces dispositifs exigent cependant une organisation rigoureuse : un tuteur disponible dans l'entreprise, un suivi par l'établissement de formation, et une reconnaissance des compétences acquises.

L'auto-emploi constitue une deuxième voie, souvent présentée comme une solution miracle. Créer son activité peut en effet transformer un jeune sans emploi en employeur. Mais l'expérience montre qu'un financement accordé sans accompagnement aboutit fréquemment à l'échec. Le porteur de projet a besoin d'une formation à la gestion, d'un appui pour accéder au marché et d'un suivi pendant les premières années, qui sont les plus fragiles. Le crédit n'est qu'un outil ; c'est la capacité à le rembourser par une activité rentable qui fait la réussite.

Reste la question des territoires. L'essentiel des opportunités se concentre dans les grandes villes, ce qui pousse les jeunes des régions à l'exode, avec son cortège de déracinement et de précarité urbaine. Développer les filières locales, transformer sur place les productions agricoles et rapprocher les services d'emploi des populations permettrait de fixer une partie de cette jeunesse là où elle est née.

Aucun acteur ne peut relever seul ce défi. L'État définit le cadre et finance une partie des dispositifs, les collectivités connaissent les réalités du terrain, les entreprises offrent l'expérience et les emplois, les organisations de jeunesse mobilisent et orientent. C'est leur coopération, bien plus que la multiplication des programmes, qui fera de l'insertion des jeunes non plus une promesse renouvelée à chaque génération, mais une réalité vécue.`;

const DOSSIER_SYNTHESE = {
  consigne:"Vous êtes attaché(e) au cabinet du ministre chargé de la Modernisation de l'administration. À l'aide des seuls documents ci-dessous, rédigez une note de synthèse de deux pages au maximum sur les conditions de réussite de la dématérialisation des services publics. Documents fictifs, rédigés pour l'entraînement.",
  docs:[
    { t:"Doc. 1 — Extrait d'un rapport d'audit administratif", c:"L'audit de dix procédures en ligne révèle des résultats contrastés. Les délais moyens de délivrance des actes ont baissé de moitié lorsque la procédure est entièrement dématérialisée. En revanche, lorsque l'usager doit encore se déplacer pour déposer un original, le gain est presque nul. L'audit souligne aussi que plusieurs plateformes ne communiquent pas entre elles, obligeant l'usager à fournir plusieurs fois les mêmes pièces." },
    { t:"Doc. 2 — Tribune d'un responsable associatif", c:"Dans nos villages, beaucoup de citoyens n'ont ni ordinateur ni connexion stable. Le smartphone se répand, mais le coût des données reste élevé et les interfaces sont conçues pour des personnes à l'aise avec l'écrit. Dématérialiser sans maintenir un guichet humain, c'est exclure les plus vulnérables. Nous proposons des points d'accès accompagnés dans les mairies et les centres sociaux." },
    { t:"Doc. 3 — Note d'une direction informatique", c:"La sécurité des données personnelles est la condition de la confiance. Chaque nouveau service doit faire l'objet d'une analyse de risques, d'un hébergement maîtrisé et de sauvegardes régulières. La direction recommande un identifiant numérique unique pour l'usager, permettant le principe « dites-le-nous une fois » : une pièce fournie à une administration n'a plus à être redemandée par une autre." },
    { t:"Doc. 4 — Compte rendu d'un atelier avec des agents", c:"Les agents se disent favorables à la modernisation mais regrettent d'avoir été peu associés aux projets. Ils demandent des formations pratiques et redoutent une surcharge de travail pendant la période de transition, où papier et numérique coexistent. Les participants insistent sur la nécessité d'indicateurs simples pour mesurer la satisfaction des usagers." }
  ]
};

const ORAL = [
  ["Présentez-vous en trois minutes et dites pourquoi vous voulez intégrer l'ENA.","Parcours, réalisations, motivation de service public, projet précis. Pas de récitation du CV."],
  ["Votre expérience d'analyste financier dans une agence publique vous prépare-t-elle à la haute fonction publique ?","Rigueur, évaluation de projets, sens de l'intérêt général ; ce que l'ENA vous apportera en plus."],
  ["Qu'est-ce qu'un bon fonctionnaire ?","Légalité, neutralité, probité, loyauté, sens du service, efficacité, devoir de réserve."],
  ["Que feriez-vous face à un ordre manifestement illégal de votre supérieur ?","Obéissance hiérarchique et ses limites ; signalement écrit ; loyauté sans complicité."],
  ["Les élections sont-elles un facteur de paix en Afrique ?","Conditions d'un scrutin apaisé : règles consensuelles, arbitres crédibles, culture démocratique. Restez neutre."],
  ["Comment l'administration peut-elle mieux répondre au chômage des jeunes ?","Diagnostic, dispositifs existants, coordination, évaluation."],
  ["La décentralisation a-t-elle tenu ses promesses en Côte d'Ivoire ?","Principes, moyens transférés, capacités locales. Nuance et faits."],
  ["Que vous inspire la lutte contre la corruption ?","Prévention, contrôle, numérique, exemplarité ; pas d'accusation générale."],
  ["Usager ou client : quelle différence ?","Égalité, continuité, intérêt général contre rentabilité."],
  ["Le numérique peut-il moderniser l'administration ?","Gains, risques (exclusion, sécurité), conditions de réussite."],
  ["Quels enjeux l'UEMOA et la CEDEAO représentent-elles pour la Côte d'Ivoire ?","Marché, monnaie, sécurité, libre circulation ; posture neutre."],
  ["Comment concilier engagement associatif et devoir de réserve ?","Liberté d'opinion, réserve dans l'expression, prévention des conflits d'intérêts."],
  ["Une réforme pour l'administration : laquelle ?","Une réforme précise, son diagnostic, sa mise en œuvre, ses indicateurs."],
  ["Le sport peut-il bâtir un monde plus inclusif ?","Atouts (cohésion, insertion) et limites (violences, corruption)."],
  ["Quelles sont vos qualités et vos défauts ?","Qualités prouvées par des exemples ; un défaut réel et la façon dont vous le corrigez."]
];

// ============ CAP ENA — APPLICATION ============
(function(){
"use strict";
const $ = (s)=>document.querySelector(s);
function h(tag, attrs, ...kids){
  const el = document.createElement(tag);
  if (attrs) for (const k in attrs){
    const v = attrs[k];
    if (v == null || v === false) continue;
    if (k === "class") el.className = v;
    else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const kid of kids.flat(Infinity)){
    if (kid == null || kid === false) continue;
    el.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
  }
  return el;
}
const shuffle = (a)=>{ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
const pad = (n)=>String(n).padStart(2,"0");
const ymd = (d)=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const fmtTime = (s)=>{ s=Math.max(0,Math.round(s)); const hh=Math.floor(s/3600), mm=Math.floor(s%3600/60), ss=s%60; return (hh? hh+":"+pad(mm) : mm)+":"+pad(ss); };
const words = (t)=>(t.trim().match(/[^\s'’]+/g)||[]).length;
const JOURS = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
const hash = (s)=>{ let x=5381; for (let i=0;i<s.length;i++) x=((x<<5)+x+s.charCodeAt(i))|0; return (x>>>0).toString(36); };
function toast(msg){ const t=$("#toast"); t.textContent=msg; t.hidden=false; clearTimeout(toast._t); toast._t=setTimeout(()=>{t.hidden=true},2800); }

const MAT = {
  cg:{label:"Culture générale et aptitude verbale", court:"Culture générale", phase:"Présélection"},
  ang:{label:"Anglais", court:"Anglais", phase:"Présélection"},
  log:{label:"Logique et aptitude numérique", court:"Logique", phase:"Présélection"},
  sog:{label:"Sujet d'ordre général", court:"SOG", phase:"Admissibilité"},
  pes:{label:"Problèmes économiques et sociaux", court:"PES", phase:"Admissibilité"},
  ct:{label:"Résumé de texte", court:"Résumé", phase:"Admissibilité CMS"},
  dc:{label:"Droit constitutionnel", court:"Droit const.", phase:"Admissibilité CMS"},
  ns:{label:"Note de synthèse", court:"Synthèse", phase:"Admissibilité CS"},
  da:{label:"Droit administratif", court:"Droit adm.", phase:"Admissibilité CS"},
  fp:{label:"Finances publiques", court:"Finances pub.", phase:"Bonus EGEF"},
  oral:{label:"Oral d'admission", court:"Oral", phase:"Admission"}
};
let BANK = QUESTIONS.map(r=>({id:"q"+hash(r[2]), m:r[0], tag:r[1], q:r[2], o:r[3], a:r[4], e:r[5], src:"Cap ENA"}));
let LMAP = Object.fromEntries(LESSONS.map(l=>[l.id,l]));
const TRACKS = { pre:["p0","p1","p2","p3","p4","p5","p6","p7","p8"], pes:["e1","e2"], dc:["d1","d2"], da:["a1","a2","a3","f1"], ct:["c1"], sog:["s1","s2"], ns:["n1"], oral:["o1"] };
const TRACK_OF = {cg:"pre",ang:"pre",log:"pre",pes:"pes",dc:"dc",da:"da",fp:"da",ct:"ct",sog:"sog",ns:"ns",oral:"oral"};

// ---------- Contenus en ligne (packs publiés chaque jour) ----------
const CONTENT = {loaded:false, updated:null, packs:0, added:{q:0,l:0,s:0}, today:{q:0,l:0,s:0}, offline:false};
function repoInfo(){
  const m = location.hostname.match(/^([^.]+)\.github\.io$/i);
  if (!m) return null;
  const repo = location.pathname.split("/").filter(Boolean)[0] || (m[1] + ".github.io");
  return {user:m[1], repo};
}
function mergePack(p, isToday){
  const known = new Set(BANK.map(q=>q.id));
  for (const q of (p.questions||[])){
    if (!q || known.has(q.id) || !Array.isArray(q.o) || !(q.a>=0 && q.a<q.o.length)) continue;
    BANK.push({id:q.id, m:q.m, tag:q.tag||("pack-"+q.m), q:q.q, o:q.o, a:q.a, e:q.e||"", src:"Nouveau", ref:q.src||null, date:p.date});
    known.add(q.id); CONTENT.added.q++; if (isToday) CONTENT.today.q++;
  }
  for (const l of (p.lessons||[])){
    if (!l || LMAP[l.id] || !Array.isArray(l.tech) || !Array.isArray(l.fond)) continue;
    l.date = p.date; l.fresh = true; LESSONS.push(l); LMAP[l.id] = l;
    const tr = TRACK_OF[l.m]; if (tr) (TRACKS[tr] = TRACKS[tr] || []).push(l.id);
    CONTENT.added.l++; if (isToday) CONTENT.today.l++;
  }
  for (const s of (p.sujets||[])){
    if (!s || !EPREUVES[s.e] || SUJETS.some(x=>x.t===s.t)) continue;
    SUJETS.push(Object.assign({plan:[]}, s, {fresh:true, date:p.date}));
    CONTENT.added.s++; if (isToday) CONTENT.today.s++;
  }
}
async function loadContent(){
  try {
    const idx = await fetch("content/index.json", {cache:"no-cache"}).then(r=>{ if(!r.ok) throw 0; return r.json(); });
    const retired = new Set(idx.retired || []);
    const today = ymd(new Date());
    for (const pk of (idx.packs||[])){
      try {
        const p = await fetch("content/" + pk.file + "?v=" + encodeURIComponent(pk.v||""), {cache:"no-cache"}).then(r=>r.json());
        for (const day of (p.days || [p])) mergePack(day, day.date === today);
        CONTENT.packs++;
      } catch(e){}
    }
    if (retired.size){ BANK = BANK.filter(q=>!retired.has(q.id)); for (const id of retired){ delete state.wrong[id]; } }
    CONTENT.loaded = true; CONTENT.updated = idx.updated || null;
  } catch(e){ CONTENT.offline = true; }
  if (["home","cours","train","ecrits"].includes(view)) render();
}
function reportUrl(it){
  const r = repoInfo(); if (!r) return null;
  const title = "Erreur signalée : " + it.q.slice(0,60);
  const body = "Question (id " + it.id + ") :\n" + it.q + "\n\nPropositions : " + it.o.join(" | ") + "\nRéponse donnée comme juste : " + it.o[it.a] + "\n\nCe qui me semble faux :\n";
  return "https://github.com/" + r.user + "/" + r.repo + "/issues/new?labels=erreur&title=" + encodeURIComponent(title) + "&body=" + encodeURIComponent(body);
}
const PLANNING = [
  { jours:[1,2,3,4,5], debut:"12:30", fin:"13:00", titre:"Sprint présélection", track:"pre", type:"cours", detail:"Une leçon de présélection puis son questionnaire au barème officiel." },
  { jours:[1], debut:"21:00", fin:"22:00", titre:"Problèmes économiques et sociaux", track:"pes", type:"cours", detail:"Cours de méthode et de fond, questionnaire, puis plan d'un sujet officiel." },
  { jours:[2], debut:"21:00", fin:"22:00", titre:"Droit constitutionnel", track:"dc", type:"cours", detail:"Cours, questionnaire, puis plan d'un sujet officiel." },
  { jours:[3], debut:"21:00", fin:"22:00", titre:"Droit administratif et finances publiques", track:"da", type:"cours", detail:"Cours, questionnaire, puis plan d'un sujet." },
  { jours:[4], debut:"21:00", fin:"22:00", titre:"Résumé de texte", track:"ct", type:"cours", detail:"Technique du résumé, puis résumé chronométré." },
  { jours:[5], debut:"21:00", fin:"22:00", titre:"Révision de la semaine", track:null, type:"erreurs", detail:"Toutes les questions ratées, au barème officiel." },
  { jours:[6], debut:"08:00", fin:"10:00", titre:"Sujet d'ordre général", track:"sog", type:"cours", detail:"Cours de méthode, puis introduction et plan détaillé d'un sujet officiel." },
  { jours:[6], debut:"16:00", fin:"17:30", titre:"Présélection blanche", track:null, type:"blanc", detail:"45 questions mélangées en 45 minutes, barème officiel." },
  { jours:[0], debut:"08:00", fin:"10:00", titre:"Écrit long", track:"ns", type:"cours", detail:"Note de synthèse (cycle supérieur) ou résumé et PES (cycle moyen supérieur)." },
  { jours:[0], debut:"17:00", fin:"18:00", titre:"Oral et bilan", track:"oral", type:"cours", detail:"Préparation de l'oral, deux questions de jury, puis bilan de la semaine." }
];
const NIVEAUX = [[0,"Candidat inscrit"],[300,"Présélectionné"],[900,"Admissible"],[2000,"Admis"],[4000,"Élève de l'ENA"],[7000,"Major de promotion"]];

// ---------- État ----------
const KEY = "capena.v2";
const defaults = ()=>({v:2, xp:0, streak:0, best:0, lastDay:"", days:{}, stats:{}, wrong:{}, seen:{}, lessons:{}, copies:[], oral:0, custom:[], bareme:true, cycle:"CMS", blancs:0, created:ymd(new Date())});
let state = defaults();
try { const raw = localStorage.getItem(KEY); if (raw) state = Object.assign(defaults(), JSON.parse(raw)); } catch(e){}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(state)); } catch(e){ toast("Impossible d'enregistrer : mémoire du navigateur pleine."); } }
function allQ(){ return BANK.concat(state.custom.map(q=>Object.assign({src:"Mes annales"},q))); }
function niveau(xp){ let cur=NIVEAUX[0], next=NIVEAUX[1]; for (let i=0;i<NIVEAUX.length;i++){ if (xp>=NIVEAUX[i][0]) { cur=NIVEAUX[i]; next=NIVEAUX[i+1]||null; } } return {cur, next}; }
function touchDay(){
  const today = ymd(new Date());
  if (state.lastDay !== today){
    const y = new Date(); y.setDate(y.getDate()-1);
    state.streak = (state.lastDay === ymd(y)) ? state.streak + 1 : 1;
    state.best = Math.max(state.best||0, state.streak);
    state.lastDay = today;
  }
  state.days[today] = (state.days[today]||0) + 1;
}
function addXP(n){ const b = niveau(state.xp).cur[1]; state.xp += n; const a = niveau(state.xp).cur[1]; if (a!==b) toast("Nouveau grade : " + a); }
function precision(){ let ok=0,n=0; for (const k in state.stats){ ok+=state.stats[k].ok; n+=state.stats[k].n; } return n ? Math.round(ok/n*100) : null; }

// ---------- Planning ----------
const toMin = (s)=>{ const [a,b]=s.split(":").map(Number); return a*60+b; };
function sessionInfo(){
  const now = new Date(), d = now.getDay(), m = now.getHours()*60 + now.getMinutes();
  for (const p of PLANNING) if (p.jours.includes(d) && m >= toMin(p.debut) && m < toMin(p.fin)) return {p, cur:true, day:d, off:0};
  for (let off=0; off<8; off++){
    const dd = (d+off)%7;
    const list = PLANNING.filter(p=>p.jours.includes(dd)).sort((a,b)=>toMin(a.debut)-toMin(b.debut));
    for (const p of list) if (off>0 || toMin(p.debut) > m) return {p, cur:false, day:dd, off};
  }
  return null;
}
function trackFor(p){
  if (p.track === "ns" && state.cycle !== "CS"){ const wk = Math.floor(Date.now()/604800000); return wk%2 ? "ct" : "pes"; }
  return p.track;
}
function nextLesson(track){
  const ids = TRACKS[track] || [];
  const todo = ids.find(id=>!state.lessons[id]);
  if (todo) return {id:todo, revision:false};
  const worst = ids.slice().sort((a,b)=>(state.lessons[a].best||0)-(state.lessons[b].best||0))[0];
  return worst ? {id:worst, revision:true} : null;
}
function runSlot(p){
  if (p.type === "erreurs") return startErreurs();
  if (p.type === "blanc") return startBlanc();
  const nl = nextLesson(trackFor(p));
  if (nl) openLesson(nl.id);
}

// ---------- Navigation ----------
const TABS = [["home","Aujourd'hui"],["cours","Cours"],["train","QCM"],["ecrits","Écrits"],["progres","Progrès"]];
let view = "home", quiz = null, lesson = null, ecrit = null, oralS = null, timers = [];
function clearTimers(){ timers.forEach(t=>clearInterval(t)); timers = []; }
function go(v){ view = v; clearTimers(); render(); window.scrollTo({top:0}); }
function renderNav(){
  const n = $("#nav"); n.replaceChildren();
  const parent = {quiz:"train", lesson:"cours", ecrit:"ecrits", oral:"ecrits", planning:"home", reglages:"progres"}[view] || view;
  for (const [k,l] of TABS) n.append(h("button",{type:"button","aria-current":parent===k?"page":null,onclick:()=>go(k)}, h("span",{class:"ic ic-"+k,"aria-hidden":"true"}), h("span",null,l)));
  $("#chipLevel").textContent = niveau(state.xp).cur[1] + " · " + state.xp + " XP";
  $("#chipStreak").textContent = state.streak + " j";
}
function render(){
  renderNav();
  const v = $("#view"); v.replaceChildren();
  const fn = {home:vHome, cours:vCours, lesson:vLesson, train:vTrain, quiz:vQuiz, ecrits:vEcrits, ecrit:vEcrit, oral:vOral, progres:vProgres, planning:vPlanning, reglages:vReglages}[view] || vHome;
  v.append(fn());
}
const card = (cls, ...kids)=>h("section",{class:"card "+(cls||"")}, ...kids);
const kpi = (l, v, sub)=>h("div",{class:"kpi"}, h("span",{class:"lbl"},l), h("b",null,v), sub ? h("span",{class:"sub"},sub) : null);
function blocks(arr){
  const out = []; let ul = null;
  for (const raw of arr){
    if (raw.startsWith("- ")) { if (!ul) { ul = h("ul",{class:"pts"}); out.push(ul); } ul.append(h("li",null,raw.slice(2))); continue; }
    ul = null;
    if (raw.startsWith("## ")) out.push(h("h3",{class:"sub-h"},raw.slice(3)));
    else if (raw.startsWith("> ")) out.push(h("p",{class:"box"},raw.slice(2)));
    else if (raw.startsWith("! ")) out.push(h("p",{class:"box warn"},h("b",null,"Piège : "),raw.slice(2)));
    else if (raw.startsWith("~ ")) out.push(h("p",{class:"ex"},raw.slice(2)));
    else out.push(h("p",{class:"para"},raw));
  }
  return out;
}

// ---------- Aujourd'hui ----------
function vHome(){
  const s = sessionInfo(), nv = niveau(state.xp), prec = precision();
  const target = new Date(2027,2,16), days = Math.max(0, Math.ceil((target - new Date())/86400000));
  const hr = new Date().getHours();
  let nl = null;
  if (s && s.p.type === "cours") nl = nextLesson(trackFor(s.p));
  const doneL = Object.keys(state.lessons).length;
  const nErr = Object.keys(state.wrong).length;
  return h("div",{class:"stack"},
    h("div",null, h("p",{class:"lbl"}, "Concours direct ENA · cycle " + (state.cycle==="CS"?"supérieur":"moyen supérieur")), h("h1",null, (hr<18?"Bonjour":"Bonsoir") + " Ahmed")),
    s ? card("feature now",
      h("div",{class:"clock"}, s.p.debut, h("small",null, s.cur ? "en cours" : (s.off===0 ? "aujourd'hui" : JOURS[s.day].toLowerCase()))),
      h("div",{class:"now-b"},
        h("p",{class:"lbl"}, s.cur ? "Séance en cours, jusqu'à " + s.p.fin : "Prochaine séance"),
        h("h2",null, s.p.titre),
        nl ? h("p",null, (nl.revision ? "Révision : " : "Leçon : ") + LMAP[nl.id].titre) : h("p",{class:"muted"}, s.p.detail),
        h("div",{class:"row"}, h("button",{class:"btn primary",type:"button",onclick:()=>runSlot(s.p)}, s.cur ? "Commencer la séance" : "Faire cette séance maintenant"))
      )) : null,
    h("div",{class:"kpis"},
      kpi("Avant les inscriptions", "J-" + days, "date probable mi-mars 2027"),
      kpi("Série", state.streak + " j", "record " + (state.best||0) + " j"),
      kpi("Leçons faites", doneL + "/" + LESSONS.length, null),
      kpi("Précision", prec==null ? "–" : prec + " %", nErr + " question(s) à revoir")
    ),
    card("stack",
      h("h2",null,"Accès rapide"),
      h("div",{class:"row"},
        h("button",{class:"btn",type:"button",onclick:()=>go("planning")},"Ma semaine"),
        h("button",{class:"btn",type:"button",onclick:startBlanc},"Présélection blanche"),
        h("button",{class:"btn",type:"button",disabled:nErr===0,onclick:startErreurs},"Revoir mes erreurs"),
        h("button",{class:"btn",type:"button",onclick:()=>go("reglages")},"Rappels et sauvegarde")
      )
    ),
    newsCard(),
    structureCard(),
    installCard()
  );
}
function newsCard(){
  if (CONTENT.offline && !CONTENT.loaded) return card("soft", h("p",{class:"small"},"Hors connexion : vous travaillez sur les contenus déjà téléchargés. Les nouveautés arriveront à la prochaine connexion."));
  if (!CONTENT.loaded) return null;
  const t = CONTENT.today, a = CONTENT.added;
  const fresh = LESSONS.filter(l=>l.fresh && !state.lessons[l.id]).slice(-3);
  return card("stack",
    h("div",{class:"row spread"}, h("h2",null,"Nouveautés"), h("span",{class:"muted small"}, CONTENT.updated ? "mis à jour le " + CONTENT.updated : "")),
    h("p",null, (t.q||t.l||t.s) ? ("Aujourd'hui : " + t.q + " question(s), " + t.l + " leçon(s), " + t.s + " sujet(s).") : "Pas encore de nouveauté aujourd'hui."),
    h("p",{class:"muted small"}, "Depuis le début : " + a.q + " questions, " + a.l + " leçons et " + a.s + " sujets ajoutés, chacun vérifié (source citée, règle ou calcul contrôlé)."),
    fresh.length ? h("div",{class:"list"}, fresh.map(l=>h("button",{class:"item",type:"button",onclick:()=>openLesson(l.id)}, h("span",{class:"grow"}, h("span",{class:"tag off"},"Nouveau"), " ", l.titre), h("span",{class:"meta"}, l.min + " min")))) : null,
    t.q ? h("div",null, h("button",{class:"btn primary",type:"button",onclick:()=>{ const items = BANK.filter(q=>q.date===ymd(new Date())); startQuiz({items: shuffle(items).slice(0,20), title:"Questions du jour"}); }},"Faire les questions du jour")) : null
  );
}
function structureCard(){
  const seg = h("div",{class:"seg",role:"group","aria-label":"Cycle visé"},
    ...[["CMS","Moyen supérieur"],["CS","Supérieur"]].map(([k,l])=>h("button",{type:"button","aria-pressed":state.cycle===k?"true":"false",onclick:()=>{state.cycle=k; save(); render();}},l)));
  const adm = state.cycle==="CS"
    ? [["Note de synthèse","5 h · coef. 5"],["Sujet d'ordre général","4 h · coef. 4"],["Problèmes économiques et sociaux","3 h · coef. 3"],["Droit administratif","3 h · coef. 3"]]
    : [["Sujet d'ordre général","4 h · coef. 4"],["Problèmes économiques et sociaux","3 h · coef. 3"],["Résumé de texte","3 h · coef. 3"],["Droit constitutionnel","3 h · coef. 3"]];
  const phase = (t, items)=>h("div",{class:"phase"}, h("span",{class:"lbl"},t), h("div",null, items.map(([a,b])=>h("div",{class:"ep"},h("span",null,a),h("span",null,b)))));
  return card("stack",
    h("div",{class:"row spread"}, h("h2",null,"Le concours"), seg),
    h("div",null,
      phase("Présélection", [["Culture générale et aptitude verbale (QCM)","coef. 2"],["Anglais (QCM)","coef. 2"],["Logique et aptitude numérique (QCM)","coef. 2"]]),
      phase("Admissibilité", adm),
      phase("Admission", [["Entretien avec le jury","coef. 3 (2026)"]])
    ),
    h("p",{class:"note"},"Barème des QCM relevé sur les sujets 2023-2024 : +1 / 0 / −1 en culture générale, +2 / 0 / −2 en logique. Durées et coefficients selon la présentation de la session 2026 ; à vérifier dans le communiqué officiel de 2027 sur ena.ci.")
  );
}
let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (e)=>{ e.preventDefault(); deferredPrompt = e; if (view==="home") render(); });
function installCard(){
  const standalone = window.matchMedia && window.matchMedia("(display-mode: standalone)").matches;
  if (standalone) return null;
  return card("stack soft",
    h("h2",null,"Installer l'appli"),
    deferredPrompt ? h("div",null,h("button",{class:"btn primary",type:"button",onclick:async()=>{ deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null; render(); }},"Installer Cap ENA sur ce téléphone"))
      : h("p",null,"Dans Chrome : menu ⋮ en haut à droite, puis « Ajouter à l'écran d'accueil » ou « Installer l'application ». L'appli fonctionne ensuite hors connexion.")
  );
}

// ---------- Planning ----------
function vPlanning(){
  const s = sessionInfo();
  return h("div",{class:"stack"},
    h("div",null,h("p",{class:"lbl"},"Créneaux hors heures de travail"),h("h1",null,"Ma semaine")),
    h("div",{class:"week"}, [1,2,3,4,5,6,0].map(d=>{
      const list = PLANNING.filter(p=>p.jours.includes(d)).sort((a,b)=>toMin(a.debut)-toMin(b.debut));
      return h("div",{class:"day"}, h("b",null,JOURS[d]), h("div",{class:"stack tight"}, list.map(p=>h("div",{class:"slot" + (s && s.p===p && s.day===d && s.cur ? " cur":"")},
        h("time",null,p.debut + " – " + p.fin), h("b",null,p.titre), h("p",{class:"muted small"},p.detail),
        h("button",{class:"link",type:"button",onclick:()=>runSlot(p)},"Lancer")))));
    })),
    h("p",{class:"muted small"},"Total : 14 heures par semaine. Les rappels se règlent dans « Rappels et sauvegarde ».")
  );
}

// ---------- Cours ----------
function vCours(){
  const groups = [["Présélection",["cg","ang","log"]],["Admissibilité",["sog","pes","ct","dc","ns","da","fp"]],["Admission",["oral"]]];
  return h("div",{class:"stack"},
    h("div",null,h("p",{class:"lbl"},"Leçons"),h("h1",null,"Les cours")),
    h("p",{class:"muted"},"Chaque leçon commence par la technique de l'épreuve, puis le cours de fond, l'essentiel à retenir et un exercice."),
    groups.map(([g, ms])=>card("stack",
      h("h2",null,g),
      h("div",{class:"list"}, LESSONS.filter(l=>ms.includes(l.m)).map(l=>{
        const st = state.lessons[l.id];
        return h("button",{class:"item",type:"button",onclick:()=>openLesson(l.id)},
          h("span",{class:"grow"}, h("span",{class:"tag"},MAT[l.m].court), l.fresh ? h("span",{class:"tag off"},"Nouveau") : null, " ", l.titre),
          h("span",{class:"meta"}, st ? (st.best!=null ? st.best + " %" : "fait") : l.min + " min"));
      }))
    ))
  );
}
function openLesson(id){ lesson = {id, step:0}; go("lesson"); }
function vLesson(){
  const l = LMAP[lesson.id]; if (!l) return vCours();
  const steps = [["Technique", l.tech], ["Cours", l.fond], ["À retenir", null], ["Exercice", null]];
  const st = lesson.step;
  const dots = h("ol",{class:"steps"}, steps.map((s,i)=>h("li",{class: i===st?"cur": i<st?"done":""}, s[0])));
  let body;
  if (st < 2) body = card("stack read", blocks(steps[st][1]),
    st===1 && Array.isArray(l.sources) && l.sources.length ? h("div",{class:"srcs"}, h("p",{class:"lbl"},"Sources"), h("ul",{class:"pts"}, l.sources.map(s=>h("li",null, h("a",{href:s.u,target:"_blank",rel:"noopener"}, s.t||s.u))))) : null);
  else if (st === 2) body = card("stack read", h("ul",{class:"pts big"}, l.retenir.map(r=>h("li",null,r))));
  else {
    const n = (l.exo && l.exo.n) || 8;
    const pool = allQ().filter(q=>q.tag===l.exo.tag);
    body = card("stack",
      h("p",null, pool.length ? (pool.length + " questions liées à cette leçon. Barème " + (state.bareme ? "officiel (les erreurs retirent des points)." : "simple.")) : "Pas de questionnaire pour cette leçon."),
      h("div",{class:"row"},
        pool.length ? h("button",{class:"btn primary",type:"button",onclick:()=>startQuiz({items:pick(pool,n), title:l.titre, lessonId:l.id})},"Lancer le questionnaire") : null,
        l.exo.ecrit ? h("button",{class:"btn",type:"button",onclick:()=>{ markLesson(l.id,null); openEcritFor(l.exo.ecrit); }},"Sujet d'application") : null,
        l.exo.oral ? h("button",{class:"btn",type:"button",onclick:()=>{ markLesson(l.id,null); go("oral"); }},"Simulation d'oral") : null
      ));
  }
  return h("div",{class:"stack"},
    h("div",null,h("p",{class:"lbl"}, MAT[l.m].label + " · " + l.min + " min"),h("h1",{class:"h-l"},l.titre)),
    dots, body,
    h("div",{class:"row spread"},
      st>0 ? h("button",{class:"btn ghost",type:"button",onclick:()=>{lesson.step--; render(); window.scrollTo({top:0});}},"Précédent") : h("button",{class:"btn ghost",type:"button",onclick:()=>go("cours")},"Tous les cours"),
      st<3 ? h("button",{class:"btn primary",type:"button",onclick:()=>{lesson.step++; render(); window.scrollTo({top:0});}},"Suivant") : null)
  );
}
function markLesson(id, pct){
  const cur = state.lessons[id] || {};
  state.lessons[id] = {done: ymd(new Date()), best: pct==null ? (cur.best==null?null:cur.best) : Math.max(cur.best||0, pct)};
  if (!cur.done) addXP(40);
  touchDay(); save();
}

// ---------- QCM ----------
function pick(pool, n){ return shuffle(pool).map(q=>({q, s:(state.wrong[q.id]||0)*3 + (state.seen[q.id]?0:2) + Math.random()})).sort((a,b)=>b.s-a.s).slice(0,n).map(x=>x.q); }
function prep(q){ const order = shuffle(q.o.map((_,i)=>i)); return Object.assign({}, q, {o: order.map(i=>q.o[i]), a: order.indexOf(q.a), pick:null}); }
const weight = (m)=> m==="log" ? 2 : 1;
function startQuiz(o){
  const items = o.items || pick(allQ().filter(q=>q.m===o.m), o.n||10);
  if (!items.length) { toast("Aucune question disponible."); return; }
  quiz = {title:o.title, items: items.map(prep), i:0, ok:0, pts:0, max:0, done:false, chrono:o.chrono||null, start:Date.now(), mode:o.mode||"serie", lessonId:o.lessonId||null, bareme:state.bareme};
  view = "quiz"; clearTimers(); render(); startQuizTimer(); window.scrollTo({top:0});
}
function startBlanc(){ const items = ["cg","ang","log"].flatMap(m=>pick(allQ().filter(q=>q.m===m),15)); startQuiz({items: shuffle(items), title:"Présélection blanche", chrono:45*60, mode:"blanc"}); }
function startErreurs(){ const items = allQ().filter(q=>state.wrong[q.id]>0); if (!items.length){ toast("Aucune erreur à revoir."); return; } startQuiz({items: shuffle(items).slice(0,20), title:"Révision des erreurs", mode:"erreurs"}); }
function startQuizTimer(){
  if (!quiz || !quiz.chrono) return;
  timers.push(setInterval(()=>{
    const left = quiz.chrono - (Date.now()-quiz.start)/1000; const t = document.getElementById("qtimer");
    if (t){ t.textContent = fmtTime(left); t.classList.toggle("low", left<120); }
    if (left <= 0){ clearTimers(); finishQuiz(true); }
  }, 1000));
}
function answer(idx){
  const it = quiz.items[quiz.i]; if (it.pick != null) return;
  it.pick = idx;
  const w = weight(it.m); quiz.max += w;
  const st = state.stats[it.m] || (state.stats[it.m] = {ok:0,n:0});
  state.seen[it.id] = 1;
  if (idx === -1){ /* passe : 0 point */ }
  else if (idx === it.a){ quiz.ok++; quiz.pts += w; st.ok++; st.n++; if (state.wrong[it.id]){ state.wrong[it.id]--; if (!state.wrong[it.id]) delete state.wrong[it.id]; } }
  else { st.n++; if (quiz.bareme) quiz.pts -= w; state.wrong[it.id] = Math.min(5,(state.wrong[it.id]||0)+1); }
  if (idx === it.a) addXP(10); else addXP(2);
  touchDay(); save(); render();
}
function next(){ if (quiz.i < quiz.items.length-1){ quiz.i++; render(); window.scrollTo({top:0}); } else finishQuiz(false); }
function finishQuiz(timeout){
  clearTimers(); quiz.done = true; quiz.timeout = timeout;
  for (const it of quiz.items) if (it.pick == null){ quiz.max += weight(it.m); }
  if (quiz.mode === "blanc") state.blancs = (state.blancs||0)+1;
  addXP(15);
  const pct = quiz.max ? Math.max(0, Math.round(quiz.pts/quiz.max*100)) : 0;
  if (quiz.lessonId) markLesson(quiz.lessonId, pct);
  save(); render(); window.scrollTo({top:0});
}
function vQuiz(){
  if (!quiz) return vTrain();
  const total = quiz.items.length;
  if (quiz.done){
    const note = quiz.max ? Math.max(0, Math.round(quiz.pts/quiz.max*200)/10) : 0;
    const cls = note>=14 ? "admis" : note>=10 ? "admissible" : "ajourne";
    const word = note>=14 ? "ADMIS" : note>=10 ? "ADMISSIBLE" : "AJOURNÉ";
    const missed = quiz.items.filter(x=>x.pick!==x.a);
    const passed = quiz.items.filter(x=>x.pick===-1 || x.pick==null).length;
    const l = quiz.lessonId ? LMAP[quiz.lessonId] : null;
    return h("div",{class:"stack"},
      card("result",
        h("p",{class:"lbl"},quiz.title + (quiz.timeout ? " · temps écoulé" : "")),
        h("p",{class:"note-big"}, String(note).replace(".",",") + " / 20"),
        h("p",{class:"muted"}, quiz.ok + " bonnes réponses, " + (total-quiz.ok-passed) + " erreurs, " + passed + " sans réponse" + (quiz.bareme ? " · barème officiel" : "")),
        h("div",{class:"stampwrap"}, h("span",{class:"stamp " + cls}, word))
      ),
      quiz.bareme && (total-quiz.ok-passed) > 0 ? h("p",{class:"box"},"Au barème officiel, vos " + (total-quiz.ok-passed) + " erreurs vous ont coûté autant que des bonnes réponses. Ne répondez que si vous êtes sûr, ou si vous hésitez entre deux propositions avec un indice.") : null,
      missed.length ? card("stack", h("h2",null,"À retenir"),
        missed.map(x=>h("div",{class:"miss"},
          h("p",{class:"q-s"}, x.q),
          h("p",null, "Réponse : ", h("b",null, x.o[x.a])),
          x.e ? h("p",{class:"muted small"}, x.e) : null,
          x.ref && x.ref.u ? h("p",{class:"src"}, "Source : ", h("a",{href:x.ref.u,target:"_blank",rel:"noopener"}, x.ref.t || x.ref.u)) : null))) : null,
      h("div",{class:"row"},
        l && l.exo.ecrit ? h("button",{class:"btn primary",type:"button",onclick:()=>openEcritFor(l.exo.ecrit)},"Passer au sujet d'application") : null,
        l && l.exo.oral ? h("button",{class:"btn primary",type:"button",onclick:()=>go("oral")},"Passer à la simulation d'oral") : null,
        h("button",{class:"btn",type:"button",onclick:()=>{ quiz.mode==="blanc" ? startBlanc() : quiz.mode==="erreurs" ? startErreurs() : l ? startQuiz({items:pick(allQ().filter(q=>q.tag===l.exo.tag),(l.exo.n||8)), title:l.titre, lessonId:l.id}) : startQuiz({m:quiz.items[0].m, n:10, title:quiz.title}); }},"Recommencer"),
        h("button",{class:"btn ghost",type:"button",onclick:()=>go(l?"cours":"train")},"Retour")
      )
    );
  }
  const it = quiz.items[quiz.i], answered = it.pick != null;
  return h("div",{class:"stack"},
    h("div",{class:"qhead"},
      h("div",null,h("p",{class:"lbl"},quiz.title),h("h2",null,"Question " + (quiz.i+1) + " / " + total)),
      quiz.chrono ? h("span",{class:"timer",id:"qtimer"}, fmtTime(quiz.chrono - (Date.now()-quiz.start)/1000)) : h("span",{class:"score"}, (quiz.pts>0?"+":"") + quiz.pts + " pt")
    ),
    h("div",{class:"dots","aria-hidden":"true"}, quiz.items.map((x,i)=>h("i",{class: i===quiz.i ? "cur" : x.pick==null ? "" : x.pick===-1 ? "skip" : x.pick===x.a ? "ok" : "ko"}))),
    card("stack",
      h("div",{class:"row"}, h("span",{class:"tag"}, MAT[it.m] ? MAT[it.m].court : it.m), it.src==="Mes annales" ? h("span",{class:"tag mine"},"Mes annales") : null, quiz.bareme ? h("span",{class:"muted small"}, "+" + weight(it.m) + " / 0 / −" + weight(it.m)) : null),
      h("p",{class:"question"}, it.q),
      h("div",{class:"opts"}, it.o.map((o,i)=>{
        let cls = "opt"; if (answered){ if (i===it.a) cls+=" ok"; else if (i===it.pick) cls+=" ko"; }
        return h("button",{class:cls,type:"button",disabled:answered,onclick:()=>answer(i)}, h("span",{class:"k"},"abcd"[i]+")"), h("span",null,o));
      })),
      !answered ? h("button",{class:"btn ghost",type:"button",onclick:()=>answer(-1)},"Je ne réponds pas (0 point)") : null,
      answered ? h("div",{class:"expl"}, h("b",null, it.pick===-1 ? "Sans réponse. " : it.pick===it.a ? "Exact. " : "Inexact. "), it.e || "",
        it.ref && it.ref.u ? h("p",{class:"src"}, "Source : ", h("a",{href:it.ref.u,target:"_blank",rel:"noopener"}, it.ref.t || it.ref.u)) : null,
        reportUrl(it) ? h("p",{class:"src"}, h("a",{href:reportUrl(it),target:"_blank",rel:"noopener"},"Signaler une erreur")) : null) : null,
      answered ? h("div",{class:"row"}, h("button",{class:"btn primary",type:"button",onclick:next}, quiz.i<total-1 ? "Question suivante" : "Voir mon résultat")) : null
    ),
    h("button",{class:"btn ghost",type:"button",onclick:()=>finishQuiz(false)},"Terminer maintenant")
  );
}
let annalesOpen = false;
function vTrain(){
  const ms = ["cg","ang","log","sog","pes","ct","dc","ns","da","fp"].filter(m=>allQ().some(q=>q.m===m));
  return h("div",{class:"stack"},
    h("div",null,h("p",{class:"lbl"},"Questionnaires"),h("h1",null,"QCM")),
    card("row spread",
      h("div",null,h("b",null,"Barème officiel"),h("p",{class:"muted small"},"Mauvaise réponse : −1 (−2 en logique). Sans réponse : 0.")),
      h("button",{class:"switch",type:"button",role:"switch","aria-checked":state.bareme?"true":"false",onclick:()=>{state.bareme=!state.bareme; save(); render();}}, h("span",null))),
    h("div",{class:"row"},
      h("button",{class:"btn accent",type:"button",onclick:startBlanc},"Présélection blanche · 45 questions · 45 min"),
      h("button",{class:"btn",type:"button",onclick:startErreurs},"Revoir mes erreurs (" + Object.keys(state.wrong).length + ")")),
    h("div",{class:"grid"}, ms.map(m=>{
      const st = state.stats[m] || {ok:0,n:0}, pool = allQ().filter(q=>q.m===m).length, pct = st.n ? Math.round(st.ok/st.n*100) : 0;
      return card("stack tight",
        h("p",{class:"lbl"},MAT[m].phase), h("h3",null,MAT[m].label),
        h("p",{class:"muted small"}, pool + " questions · " + (st.n ? pct + " % de réussite" : "pas encore commencé")),
        h("div",{class:"bar"}, h("i",{style:"width:"+pct+"%"})),
        h("button",{class:"btn primary",type:"button",onclick:()=>startQuiz({m, n:10, title:MAT[m].label})},"Série de 10"));
    })),
    annalesSection()
  );
}
function annalesSection(){
  const det = h("details",{class:"card",open:annalesOpen||null, ontoggle:(ev)=>{annalesOpen = ev.target.open;}});
  det.append(h("summary",null,"Mes annales : ajouter des questions (" + state.custom.length + ")"));
  const sel = h("select",{id:"anM"}, ["cg","ang","log","pes","dc","da","fp"].map(k=>h("option",{value:k},MAT[k].label)));
  const q = h("textarea",{id:"anQ",rows:"2",placeholder:"Énoncé de la question"});
  const opts = [0,1,2,3].map(i=>h("input",{type:"text",id:"anO"+i,placeholder:"Proposition " + "abcd"[i]}));
  const ans = h("select",{id:"anA"}, [0,1,2,3].map(i=>h("option",{value:String(i)},"Bonne réponse : " + "abcd"[i])));
  const ex = h("input",{type:"text",id:"anE",placeholder:"Explication ou source (facultatif)"});
  det.append(h("form",{class:"stack tight",onsubmit:(ev)=>{
    ev.preventDefault(); const o = opts.map(i=>i.value.trim());
    if (!q.value.trim() || o.some(x=>!x)) { toast("Remplissez l'énoncé et les quatre propositions."); return; }
    state.custom.push({id:"c"+Date.now().toString(36), m:sel.value, tag:"annales", q:q.value.trim(), o, a:Number(ans.value), e:ex.value.trim()});
    save(); annalesOpen = true; toast("Question ajoutée"); render();
  }},
    h("p",{class:"muted small"},"Ajoutez les questions des cours préparatoires officiels ou des annales : elles entrent dans les séries et la révision des erreurs."),
    sel, q, opts, ans, ex, h("button",{class:"btn primary",type:"submit"},"Ajouter")));
  if (state.custom.length) det.append(h("div",{class:"list"}, state.custom.slice().reverse().map(c=>h("div",{class:"item"},
    h("span",{class:"grow"}, c.q), h("button",{class:"link",type:"button",onclick:()=>{ state.custom = state.custom.filter(x=>x.id!==c.id); save(); annalesOpen=true; render(); }},"Retirer")))));
  return det;
}

// ---------- Écrits ----------
function sujetId(s){ return "s"+hash(s.t); }
function openEcritFor(e){
  const list = SUJETS.filter(s=>s.e===e);
  const done = new Set(state.copies.map(c=>c.sid));
  const s = list.find(x=>x.src==="officiel" && x.plan.length && !done.has(sujetId(x))) || list.find(x=>!done.has(sujetId(x))) || list[0];
  if (s) openEcrit(s);
}
function vEcrits(){
  const order = state.cycle==="CS" ? ["sog","ns","pes","da","ct","dc"] : ["sog","pes","ct","dc","ns","da"];
  const done = new Set(state.copies.map(c=>c.sid));
  return h("div",{class:"stack"},
    h("div",null,h("p",{class:"lbl"},"Admissibilité et admission"),h("h1",null,"Écrits et oral")),
    card("row spread", h("div",null,h("b",null,"Simulation d'oral"),h("p",{class:"muted small"},"Préparation 2 min, réponse 5 min, grille du jury.")), h("button",{class:"btn primary",type:"button",onclick:()=>go("oral")},"S'entraîner")),
    order.map(e=>{
      const E = EPREUVES[e];
      return card("stack tight",
        h("p",{class:"lbl"}, E.cycles + " · " + (E.duree/60) + " h · coef. " + E.coef), h("h2",null,E.label),
        h("div",{class:"list"}, SUJETS.filter(s=>s.e===e).map(s=>h("button",{class:"item",type:"button",onclick:()=>openEcrit(s)},
          h("span",{class:"grow"}, h("span",{class: s.src==="officiel"?"tag off":"tag"}, s.src==="officiel" ? "Officiel" : "Entraînement"), " ", h("span",{class:"q-s"}, s.t), h("span",{class:"muted small block"}, s.ref)),
          h("span",{class:"meta"}, done.has(sujetId(s)) ? "fait" : "")))));
    }),
    h("p",{class:"note"},"Sujets « Officiel » : relevés sur les sujets ENA publiés par les sites de préparation ivoiriens (Fomesoutra, Ablanian). Les énoncés partiellement lisibles sont signalés.")
  );
}
const draftKey = (s)=>"capena.draft."+sujetId(s);
function openEcrit(s){ let d=""; try{ d = localStorage.getItem(draftKey(s))||""; }catch(e){} ecrit = {s, text:d, start:null, dur:null, showPlan:false, checks:{}}; go("ecrit"); }
function vEcrit(){
  if (!ecrit) return vEcrits();
  const s = ecrit.s, E = EPREUVES[s.e];
  let target = null;
  const m = s.t.match(/en (\d+) mots/); if (m) target = Number(m[1]);
  const counter = h("span",{class:"muted"});
  const ta = h("textarea",{class:"copy",id:"copy-"+sujetId(s),"aria-label":"Votre copie",placeholder:"Rédigez ici (introduction, plan détaillé ou copie complète). Enregistrement automatique."});
  ta.value = ecrit.text;
  const upd = ()=>{ const w = words(ta.value); if (target){ counter.textContent = w + " mots · fourchette " + Math.round(target*0.9) + " à " + Math.round(target*1.1); counter.className = (w>=target*0.9 && w<=target*1.1) ? "good" : "muted"; } else counter.textContent = w + " mots"; };
  let dt=null; ta.addEventListener("input",()=>{ ecrit.text=ta.value; upd(); clearTimeout(dt); dt=setTimeout(()=>{ try{ localStorage.setItem(draftKey(s), ta.value);}catch(e){} },500); }); upd();
  const tEl = h("span",{class:"timer",id:"etimer"}, ecrit.dur ? "" : "");
  if (ecrit.dur){ const tick=()=>{ const left = ecrit.dur-(Date.now()-ecrit.start)/1000; const t=document.getElementById("etimer"); if(t){ t.textContent = left>0 ? fmtTime(left) : "Temps écoulé"; t.classList.toggle("low",left<600);} }; timers.push(setInterval(tick,1000)); setTimeout(tick,0); }
  const chrono = (sec)=>{ ecrit.start=Date.now(); ecrit.dur=sec; clearTimers(); render(); };
  const lessonFor = {sog:"s1",pes:"e1",ct:"c1",dc:"d1",ns:"n1",da:"a2"}[s.e];
  let support = null;
  if (s.texte) support = h("details",{class:"card",open:true}, h("summary",null,"Texte à résumer (" + words(TEXTE_CONTRACTION) + " mots, texte original d'entraînement)"), h("div",{class:"reading"}, TEXTE_CONTRACTION));
  if (s.dossier) support = h("div",{class:"stack tight"}, h("p",{class:"box"}, DOSSIER_SYNTHESE.consigne), DOSSIER_SYNTHESE.docs.map(d=>h("details",{class:"card"}, h("summary",null,d.t), h("p",{class:"para"}, d.c))));
  const grille = h("div",{class:"stack tight"}, E.grille.map((g,i)=>h("label",{class:"chk"}, h("input",{type:"checkbox",id:"g"+i,checked:ecrit.checks[i]||null,onchange:(ev)=>{ ecrit.checks[i]=ev.target.checked; }}), h("span",null,g))));
  return h("div",{class:"stack"},
    h("div",{class:"qhead"}, h("div",null,h("p",{class:"lbl"}, E.label + " · " + (E.duree/60) + " h · coef. " + E.coef), h("h2",null, s.src==="officiel" ? "Sujet officiel · " + s.ref : "Sujet d'entraînement")), tEl),
    h("p",{class:"sujet"}, s.t),
    lessonFor ? h("button",{class:"link",type:"button",onclick:()=>openLesson(lessonFor)},"Revoir le cours de méthode") : null,
    support,
    h("div",{class:"row"}, h("span",{class:"lbl"},"Chrono"),
      h("button",{class:"btn small",type:"button",onclick:()=>chrono(E.duree*60)},"Durée réelle " + (E.duree/60) + " h"),
      h("button",{class:"btn small",type:"button",onclick:()=>chrono(3600)},"1 h"),
      h("button",{class:"btn small",type:"button",onclick:()=>chrono(1800)},"30 min (plan seul)")),
    ta, counter,
    card("stack", h("h3",null,"Auto-évaluation"), h("p",{class:"muted small"},"Cochez honnêtement ce que votre copie réussit. La note indicative en découle."), grille,
      h("div",{class:"row"}, h("button",{class:"btn primary",type:"button",onclick:rendre},"Rendre ma copie"),
        s.plan && s.plan.length ? h("button",{class:"btn",type:"button",onclick:()=>{ecrit.showPlan=!ecrit.showPlan; render();}}, ecrit.showPlan ? "Masquer le corrigé" : "Voir le plan proposé") : null)),
    ecrit.showPlan ? card("stack read", h("h3",null,"Plan proposé (corrigé indicatif rédigé pour l'appli)"), blocks(s.plan.map(p=>"- "+p))) : null,
    h("button",{class:"btn ghost",type:"button",onclick:()=>go("ecrits")},"Retour aux sujets")
  );
}
function rendre(){
  const mots = words(ecrit.text);
  if (mots < 40){ toast("Rédigez au moins votre introduction et votre plan avant de rendre."); return; }
  const E = EPREUVES[ecrit.s.e]; const n = E.grille.filter((_,i)=>ecrit.checks[i]).length;
  const note = Math.round(n / E.grille.length * 200)/10;
  state.copies.push({sid:sujetId(ecrit.s), e:ecrit.s.e, t:ecrit.s.t.slice(0,90), date:ymd(new Date()), mots, note});
  state.copies = state.copies.slice(-40);
  addXP(50); touchDay(); save();
  toast("Copie rendue : note d'auto-évaluation " + String(note).replace(".",",") + " / 20");
  ecrit.showPlan = true; render();
}

// ---------- Oral ----------
function newOral(){ oralS = {i:Math.floor(Math.random()*ORAL.length), phase:"prep", start:Date.now(), notes:"", checks:{}}; }
const GRILLE_ORAL = ["Introduction claire avec une problématique","Deux idées structurées, annoncées","Exemples précis et exacts","Ton posé, débit lent, regard vers le jury","Neutralité sur les sujets politiques","Conclusion avec ouverture","Réponse dans le temps imparti"];
function vOral(){
  if (!oralS) newOral();
  const [q, piste] = ORAL[oralS.i];
  const dur = oralS.phase==="prep" ? 120 : 300;
  const tick = ()=>{ const left = dur-(Date.now()-oralS.start)/1000; const t=document.getElementById("otimer"); if(t){ t.textContent = left>0 ? fmtTime(left) : "Temps écoulé"; t.classList.toggle("low",left<30);} };
  timers.push(setInterval(tick,1000)); setTimeout(tick,0);
  const ta = h("textarea",{id:"oral-notes",rows:"6","aria-label":"Notes",placeholder: oralS.phase==="prep" ? "Vos idées : problématique, deux parties, exemples." : "Répondez à voix haute ; notez ici les points clés."});
  ta.value = oralS.notes; ta.addEventListener("input",()=>{ oralS.notes = ta.value; });
  return h("div",{class:"stack"},
    h("div",{class:"qhead"}, h("div",null,h("p",{class:"lbl"},"Oral d'admission"),h("h1",null,"Face au jury")), h("span",{class:"timer",id:"otimer"})),
    card("stack",
      h("p",{class:"lbl"}, oralS.phase==="prep" ? "Préparation · 2 minutes" : "Réponse à voix haute · 5 minutes"),
      h("p",{class:"question"}, q), ta,
      h("details",null,h("summary",null,"Piste du jury"),h("p",{class:"para"},piste)),
      oralS.phase==="prep" ? h("button",{class:"btn primary",type:"button",onclick:()=>{ oralS.phase="rep"; oralS.start=Date.now(); clearTimers(); render(); }},"Je réponds") : null,
      oralS.phase==="rep" ? h("div",{class:"stack tight"}, h("h3",null,"Grille du jury"), GRILLE_ORAL.map((g,i)=>h("label",{class:"chk"},h("input",{type:"checkbox",id:"og"+i,checked:oralS.checks[i]||null,onchange:(ev)=>{oralS.checks[i]=ev.target.checked;}}),h("span",null,g)))) : null,
      h("div",{class:"row"}, h("button",{class:"btn",type:"button",onclick:()=>{ if (oralS.phase==="rep"){ state.oral++; addXP(30); touchDay(); save(); toast("Oral enregistré : +30 XP"); } newOral(); clearTimers(); render(); }}, oralS.phase==="rep" ? "Valider et question suivante" : "Autre question"))
    ),
    h("p",{class:"muted small"},"Conseil : enregistrez-vous avec le dictaphone du téléphone et réécoutez-vous. " + state.oral + " oral(s) préparé(s).")
  );
}

// ---------- Progrès ----------
function vProgres(){
  const nv = niveau(state.xp);
  const pct = nv.next ? Math.round((state.xp-nv.cur[0])/(nv.next[0]-nv.cur[0])*100) : 100;
  const today = new Date(); const heat = [];
  for (let i=0;i<28;i++){ const d = new Date(today); d.setDate(today.getDate()-27+i); const n = state.days[ymd(d)]||0; heat.push(h("i",{class: n>=30?"l3":n>=12?"l2":n>0?"l1":"",title:ymd(d)})); }
  const ms = ["cg","ang","log","pes","dc","da","fp","sog","ct","ns"];
  const rows = ms.filter(m=>state.stats[m]).map(m=>{ const st=state.stats[m]; const p = st.n?Math.round(st.ok/st.n*100):0; return h("div",{class:"mrow"}, h("span",null,MAT[m].court), h("div",{class:"bar"+(p<50?" o":"")},h("i",{style:"width:"+p+"%"})), h("span",null,p+" %")); });
  return h("div",{class:"stack"},
    h("div",null,h("p",{class:"lbl"},"Tableau de bord"),h("h1",null,"Mes progrès")),
    card("stack", h("div",{class:"row spread"}, h("div",null,h("p",{class:"lbl"},"Grade"),h("h2",null,nv.cur[1])), h("b",{class:"big-n"}, state.xp + " XP")),
      h("div",{class:"bar o"},h("i",{style:"width:"+pct+"%"})),
      h("p",{class:"muted small"}, nv.next ? "Encore " + (nv.next[0]-state.xp) + " XP pour « " + nv.next[1] + " ». Leçon terminée +40, bonne réponse +10, copie +50, oral +30." : "Grade maximal atteint.")),
    h("div",{class:"grid"},
      card("stack", h("h2",null,"Réussite par matière"), rows.length ? rows : h("p",{class:"muted"},"Faites un premier questionnaire pour voir vos résultats.")),
      card("stack", h("h2",null,"Assiduité, 4 semaines"), h("div",{class:"heat"}, heat), h("p",{class:"muted small"}, "Série " + state.streak + " j · record " + (state.best||0) + " j · " + Object.keys(state.lessons).length + " leçon(s) · " + state.copies.length + " copie(s) · " + state.oral + " oral(s)"))),
    state.copies.length ? card("stack", h("h2",null,"Mes copies"), h("div",{class:"list"}, state.copies.slice().reverse().slice(0,10).map(c=>h("div",{class:"item"}, h("span",{class:"grow"}, h("b",null,EPREUVES[c.e].label), " · ", c.t), h("span",{class:"meta"}, c.date + " · " + String(c.note).replace(".",",") + "/20"))))) : null,
    h("button",{class:"btn",type:"button",onclick:()=>go("reglages")},"Rappels et sauvegarde")
  );
}

// ---------- Rappels et sauvegarde ----------
const DAYCODE = ["SU","MO","TU","WE","TH","FR","SA"];
function gcalLink(p){
  const now = new Date(); let d = new Date(now); for (let i=0;i<8;i++){ if (p.jours.includes(d.getDay())) break; d.setDate(d.getDate()+1); }
  const ds = d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate());
  const st = ds+"T"+p.debut.replace(":","")+"00", en = ds+"T"+p.fin.replace(":","")+"00";
  const rr = "RRULE:FREQ=WEEKLY;BYDAY=" + p.jours.map(j=>DAYCODE[j]).join(",");
  return "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent("Cap ENA · " + p.titre) + "&details=" + encodeURIComponent(p.detail + "\nOuvrez l'appli Cap ENA.") + "&dates=" + st + "/" + en + "&ctz=Africa/Abidjan&recur=" + encodeURIComponent(rr);
}
function icsText(){
  const now = new Date(); const stamp = now.toISOString().replace(/[-:]/g,"").replace(/\.\d+Z$/,"Z");
  const L = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Cap ENA//FR","CALSCALE:GREGORIAN"];
  PLANNING.forEach((p,i)=>{
    let d = new Date(now); for (let k=0;k<8;k++){ if (p.jours.includes(d.getDay())) break; d.setDate(d.getDate()+1); }
    const ds = d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate());
    L.push("BEGIN:VEVENT","UID:capena-"+i+"@capena","DTSTAMP:"+stamp,"DTSTART;TZID=Africa/Abidjan:"+ds+"T"+p.debut.replace(":","")+"00","DTEND;TZID=Africa/Abidjan:"+ds+"T"+p.fin.replace(":","")+"00","RRULE:FREQ=WEEKLY;BYDAY="+p.jours.map(j=>DAYCODE[j]).join(","),"SUMMARY:Cap ENA - "+p.titre,"DESCRIPTION:"+p.detail.replace(/,/g,"\\,"),"BEGIN:VALARM","ACTION:DISPLAY","DESCRIPTION:Séance Cap ENA dans 10 minutes","TRIGGER:-PT10M","END:VALARM","END:VEVENT");
  });
  L.push("END:VCALENDAR"); return L.join("\r\n");
}
function download(name, text, type){ const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([text],{type})); a.download = name; document.body.append(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();},1000); }
function vReglages(){
  const imp = h("textarea",{id:"imp",rows:"3",placeholder:"Collez ici le contenu d'un fichier de sauvegarde"});
  return h("div",{class:"stack"},
    h("div",null,h("p",{class:"lbl"},"Réglages"),h("h1",null,"Rappels et sauvegarde")),
    card("stack",
      h("h2",null,"Rappels sur le téléphone"),
      h("p",null,"Les rappels passent par l'agenda du téléphone : il vous prévient même appli fermée et sans connexion. Touchez chaque créneau pour l'ajouter à Google Agenda (répétition chaque semaine), puis vérifiez que la notification est active."),
      h("div",{class:"list"}, PLANNING.map(p=>h("a",{class:"item",href:gcalLink(p),target:"_blank",rel:"noopener"}, h("span",{class:"grow"}, h("b",null,p.titre), h("span",{class:"muted small block"}, p.jours.map(j=>JOURS[j].slice(0,3)).join(", ") + " · " + p.debut + "–" + p.fin)), h("span",{class:"meta"},"Ajouter")))),
      h("button",{class:"btn",type:"button",onclick:()=>download("cap-ena-rappels.ics", icsText(), "text/calendar")},"Ou télécharger tous les rappels (.ics)")
    ),
    card("stack",
      h("h2",null,"Sauvegarde de ma progression"),
      h("p",{class:"muted small"},"La progression est stockée dans le téléphone. Sauvegardez-la de temps en temps, surtout avant de changer de téléphone ou de vider les données du navigateur."),
      h("button",{class:"btn primary",type:"button",onclick:()=>download("cap-ena-sauvegarde-"+ymd(new Date())+".json", JSON.stringify(state), "application/json")},"Télécharger une sauvegarde"),
      imp,
      h("button",{class:"btn",type:"button",onclick:()=>{ try{ const o = JSON.parse(imp.value); if (typeof o!=="object"||o.v==null) throw 0; state = Object.assign(defaults(), o); save(); toast("Progression restaurée"); render(); } catch(e){ toast("Contenu invalide : collez le texte complet du fichier de sauvegarde."); } }},"Restaurer")
    ),
    h("p",{class:"muted small"},"Cap ENA · contenus rédigés pour l'entraînement ; sujets officiels relevés sur des sites de préparation ivoiriens. Vérifiez toujours les conditions dans les communiqués officiels (ena.ci).")
  );
}

if ("serviceWorker" in navigator) window.addEventListener("load", ()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
render();
loadContent();
})();
