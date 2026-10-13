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

// ============ PROGRAMME À NIVEAUX ============
// Chaque matière se parcourt dans l'ordre. Un niveau = une leçon (technique, cours, à retenir) + une évaluation.
// [identifiant, titre, objectifs (pour la production des contenus), leçon intégrée éventuelle]
const PROGRAMME = [
 { k:"fr", label:"Français : orthographe, grammaire, conjugaison, vocabulaire", court:"Français", phase:"Présélection", qcm:true, levels:[
  ["fr01","Stratégie de la présélection : le barème qui pénalise","Barème +1/0/-1 et +2/0/-2, gestion du temps, quand s'abstenir","p0"],
  ["fr02","Synonymes, antonymes, paronymes, intrus","Les quatre familles d'exercices d'aptitude verbale de l'ENA","p1"],
  ["fr03","Accords, pluriels et conjugaison : le panorama","Vue d'ensemble des pièges grammaticaux des QCM","p2"],
  ["fr04","Nature et fonction des mots","Classes grammaticales, fonctions sujet, COD, COI, attribut, complément circonstanciel"],
  ["fr05","L'accord du verbe avec son sujet","Sujets inversés, collectifs, « l'un et l'autre », « ni... ni », « c'est / ce sont », pourcentages"],
  ["fr06","L'accord de l'adjectif ; les adjectifs de couleur","Accord en genre et nombre, adjectifs composés, couleurs simples et composées, « demi », « nu », « feu »"],
  ["fr07","Le participe passé avec être et avec avoir","Règle du COD placé avant, « en », participe suivi d'un infinitif, « fait » + infinitif"],
  ["fr08","Le participe passé des verbes pronominaux","Essentiellement pronominaux, réfléchis et réciproques, « se sont succédé », « se sont plu »"],
  ["fr09","Le pluriel des noms simples et composés","-al, -ail, -ou, -eu, noms étrangers, noms composés (nom+nom, verbe+nom, mot invariable)"],
  ["fr10","Numéraux, tout, même, quelque, demi","Vingt et cent, mille, « tout » adverbe, « quelque » et « quel que », « même »"],
  ["fr11","Les homophones grammaticaux","a/à, ou/où, ces/ses/c'est/s'est, quand/quant/qu'en, leur/leurs, sans/s'en, quelquefois/quelques fois"],
  ["fr12","Conjugaison 1 : présent et passé simple des verbes difficiles","Verbes en -indre, -soudre, -cevoir, acquérir, mouvoir ; passé simple des verbes du 3e groupe"],
  ["fr13","Conjugaison 2 : futur, conditionnel, concordance des temps","Futur et conditionnel (courir, mourir, envoyer), « si » + imparfait, concordance au passé"],
  ["fr14","Conjugaison 3 : le subjonctif","Formes du subjonctif présent et imparfait, après « bien que », « avant que » ; indicatif après « après que »"],
  ["fr15","Orthographe d'usage : les mots pièges","Doubles consonnes, accents, mots fréquemment mal orthographiés, mots en -tion/-ssion"],
  ["fr16","Vocabulaire administratif et juridique","Termes de l'administration, des actes, des finances publiques, du droit"],
  ["fr17","Paronymes et impropriétés","Conjecture/conjoncture, éminent/imminent, prolongation/prolongement, etc."],
  ["fr18","Expressions, locutions et proverbes","Sens et emploi des locutions courantes et des proverbes"],
  ["fr19","Analogies et séries de mots","Raisonnement par analogie verbale, intrus, séries sémantiques"],
  ["fr20","Ponctuation, majuscules et abréviations","Virgule, majuscules des institutions, abréviations officielles"],
  ["fr21","Syntaxe : la phrase complexe et le discours rapporté","Propositions subordonnées, discours direct et indirect, transformations"],
  ["fr22","Figures de style et registres de langue","Métaphore, litote, euphémisme, hyperbole, antithèse ; registres soutenu, courant, familier"],
  ["fr23","Pléonasmes, barbarismes, anglicismes","Fautes de langue courantes et leurs corrections"],
  ["fr24","Révision générale de français","Test de niveau sur tout le programme"]
 ]},
 { k:"ang", label:"Anglais", court:"Anglais", phase:"Présélection", qcm:true, levels:[
  ["an01","Les temps et les structures piégées","Temps de base et structures fréquentes des QCM","p5"],
  ["an02","Vocabulaire administratif et faux amis","Vocabulaire de l'administration et faux amis","p6"],
  ["an03","Present simple et present continuous","Emplois, verbes d'état, marqueurs de temps"],
  ["an04","Past simple, present perfect, for et since","Emplois comparés, ago, already, yet, just"],
  ["an05","Past perfect et expression du futur","Past perfect, will, going to, present continuous à valeur de futur"],
  ["an06","Les modaux","Must, have to, should, may, might, can, could, needn't"],
  ["an07","Les conditionnelles et wish","Conditionnels 0, 1, 2, 3 ; I wish, if only"],
  ["an08","La voix passive","Formation à tous les temps, by, passif des verbes à deux compléments"],
  ["an09","Le discours rapporté","Say/tell, concordance des temps, questions rapportées"],
  ["an10","Articles, dénombrables et indénombrables","A/an/the/zéro, much/many, few/little, some/any"],
  ["an11","Comparatifs, superlatifs, so/such, too/enough","Formation et pièges"],
  ["an12","Pluriels et féminins irréguliers, nationalités","Pluriels irréguliers, noms de nationalité"],
  ["an13","Pronoms et propositions relatives","Who, whom, whose, which, that ; pronoms réfléchis"],
  ["an14","Prépositions et verbes à particule essentiels","In/on/at, prépositions de lieu et de temps, phrasal verbs courants"],
  ["an15","Gérondif ou infinitif","Verbes suivis de -ing, de to, ou des deux avec changement de sens"],
  ["an16","Question tags, ordre des mots, inversion","Tags, place des adverbes, inversion après never/rarely"],
  ["an17","Les verbes irréguliers","Base verbale, prétérit, participe passé des verbes irréguliers courants"],
  ["an18","Formation des mots","Préfixes, suffixes, noms, adjectifs et adverbes dérivés"],
  ["an19","Vocabulaire : gouvernement, économie, organisations internationales","Lexique institutionnel et économique"],
  ["an20","Compréhension écrite","Stratégies de lecture et questions de compréhension"],
  ["an21","Révision générale d'anglais","Test de niveau sur tout le programme"]
 ]},
 { k:"cg", label:"Culture générale : Côte d'Ivoire, Afrique, Europe, Amériques, Asie, monde", court:"Culture générale", phase:"Présélection", qcm:true, levels:[
  ["cg01","La Côte d'Ivoire : repères essentiels","Repères institutionnels, géographiques et historiques","p3"],
  ["cg02","Le monde et les organisations internationales","Grandes organisations et repères mondiaux","p4"],
  ["cg03","Côte d'Ivoire : histoire précoloniale et coloniale","Royaumes, peuplement, colonisation, figures historiques"],
  ["cg04","Côte d'Ivoire : de l'indépendance à nos jours","Présidents, constitutions, grandes étapes politiques"],
  ["cg05","Côte d'Ivoire : géographie et organisation du territoire","Relief, fleuves, climat, districts, régions"],
  ["cg06","Côte d'Ivoire : économie","Cacao, café, anacarde, pétrole, ports, PND 2026-2030"],
  ["cg07","Côte d'Ivoire : culture, arts et personnalités","Littérature, musique, sport, patrimoine UNESCO"],
  ["cg08","Afrique de l'Ouest : CEDEAO, UEMOA, AES","Pays membres, sièges, dates, institutions"],
  ["cg09","Afrique : indépendances, panafricanisme, Union africaine","Pères des indépendances, OUA, UA, Agenda 2063"],
  ["cg10","Afrique : pays, capitales et grands dirigeants","Afrique du Nord, centrale, de l'Est, australe"],
  ["cg11","Afrique : géographie physique","Fleuves, lacs, montagnes, déserts, records"],
  ["cg12","Europe : Union européenne et institutions","Traités, institutions, élargissements, euro"],
  ["cg13","Europe : pays, capitales et histoire","Géographie, monarchies et républiques, grandes dates"],
  ["cg14","Amérique du Nord : États-Unis et Canada","Institutions américaines, grandes dates, géographie"],
  ["cg15","Amérique latine et Caraïbes","Pays, capitales, indépendances, organisations régionales"],
  ["cg16","Asie et Moyen-Orient","Chine, Inde, Japon, Asie du Sud-Est, Moyen-Orient"],
  ["cg17","Océanie, pôles et océans","Pays, géographie, traités sur l'Antarctique"],
  ["cg18","L'ONU et le système des Nations unies","Organes, agences, sièges, secrétaires généraux"],
  ["cg19","Institutions financières et économiques","FMI, Banque mondiale, BAD, BCEAO, BOAD, OMC"],
  ["cg20","Histoire contemporaine : 1914-1945","Guerres mondiales, entre-deux-guerres, traités"],
  ["cg21","Guerre froide, décolonisation, mondialisation","Blocs, décolonisation, fin de l'URSS"],
  ["cg22","Climat, environnement et développement durable","COP, accords, ODD, biodiversité"],
  ["cg23","Sciences, techniques et grandes découvertes","Inventeurs, découvertes, espace, santé"],
  ["cg24","Littérature africaine et mondiale","Auteurs, œuvres, prix littéraires"],
  ["cg25","Arts, musique et cinéma","Mouvements artistiques, FESPACO, grandes œuvres"],
  ["cg26","Sport","CAN, Coupe du monde, Jeux olympiques, grandes figures"],
  ["cg27","Prix et distinctions","Prix Nobel, prix africains"],
  ["cg28","Sigles et acronymes","Sigles nationaux et internationaux"],
  ["cg29","Actualité nationale et internationale","Faits vérifiés des derniers mois"],
  ["cg30","Révision générale de culture générale","Test de niveau sur tout le programme"]
 ]},
 { k:"log", label:"Logique et aptitude numérique", court:"Logique", phase:"Présélection", qcm:true, levels:[
  ["lo01","Suites, proportions et pourcentages","Bases du calcul de présélection","p7"],
  ["lo02","Le test d'organisation","Problèmes à contraintes","p8"],
  ["lo03","Fractions et calcul mental","Opérations sur fractions, priorités, astuces de calcul mental"],
  ["lo04","Pourcentages avancés","Hausses et baisses successives, taux réciproque, TVA, remises"],
  ["lo05","Proportionnalité, règle de trois, échelles","Grandeurs proportionnelles et inversement proportionnelles"],
  ["lo06","Vitesse, distance, temps et débits","Mouvements, croisements, robinets"],
  ["lo07","Intérêts simples et composés","Calculs financiers de base"],
  ["lo08","Moyennes et statistiques simples","Moyenne pondérée, médiane, étendue"],
  ["lo09","Âges, partages et mélanges","Problèmes classiques"],
  ["lo10","Suites numériques avancées","Suites croisées, carrés, différences de second ordre"],
  ["lo11","Suites de lettres et alphanumériques","Rangs alphabétiques, décalages"],
  ["lo12","Logique propositionnelle et syllogismes","Implication, négation, syllogismes"],
  ["lo13","Dénombrement et probabilités simples","Arrangements, combinaisons simples, probabilités"],
  ["lo14","Calendriers, horloges et dates","Jours de la semaine, angles des aiguilles, fuseaux"],
  ["lo15","Géométrie : périmètres, aires, volumes","Formules usuelles"],
  ["lo16","Lecture de tableaux et de graphiques","Interpréter des données chiffrées"],
  ["lo17","Problèmes à contraintes avancés","Tableaux logiques, rangements, emplois du temps"],
  ["lo18","Révision générale de logique","Test de niveau sur tout le programme"]
 ]},
 { k:"pes", label:"Problèmes économiques et sociaux", court:"PES", phase:"Admissibilité", ecrit:"pes", levels:[
  ["pe01","La méthode du devoir de PES","Méthode de la dissertation économique","e1"],
  ["pe02","Croissance, emploi, inflation et UEMOA","Notions économiques de base","e2"],
  ["pe03","Le pacte de convergence de l'UEMOA","Critères et enjeux","L20261012"],
  ["pe04","Comptabilité nationale : PIB et agrégats","PIB, valeur ajoutée, croissance réelle et nominale"],
  ["pe05","Politique budgétaire et dette publique","Déficit, dette, soutenabilité"],
  ["pe06","Monnaie, BCEAO et politique monétaire","Franc CFA, réformes, taux directeurs"],
  ["pe07","Commerce international et ZLECAf","Balance des paiements, intégration commerciale"],
  ["pe08","Emploi, chômage, jeunesse et informel","Concepts, politiques d'emploi, économie informelle"],
  ["pe09","Pauvreté, inégalités et inclusion sociale","Mesures, filets sociaux, politiques publiques"],
  ["pe10","Agriculture et sécurité alimentaire","Filières, transformation locale, autosuffisance"],
  ["pe11","Industrialisation, énergie et infrastructures","Transformation structurelle"],
  ["pe12","Éducation, formation et capital humain","Politiques éducatives, formation professionnelle"],
  ["pe13","Santé et protection sociale","CMU, financement de la santé"],
  ["pe14","Urbanisation, logement et transports","Villes, mobilité, logement social"],
  ["pe15","Environnement, climat et transition","Économie verte, adaptation"],
  ["pe16","Développement : PND 2026-2030 et ODD","Planification et financement du développement"],
  ["pe17","Numérique et innovation","Économie numérique, inclusion financière"],
  ["pe18","Révision : sujet blanc de PES","Épreuve complète en conditions"]
 ]},
 { k:"dc", label:"Droit constitutionnel", court:"Droit constitutionnel", phase:"Admissibilité CMS", ecrit:"dc", levels:[
  ["dc01","L'État, la Constitution, les régimes politiques","Notions fondamentales","d1"],
  ["dc02","Les institutions de la Constitution de 2016","Panorama institutionnel","d2"],
  ["dc03","La Constitution de 2016, article par article","Articles clés","L20261011"],
  ["dc04","Histoire constitutionnelle de la Côte d'Ivoire","1960, 2000, 2016, révision de 2020"],
  ["dc05","Le Président de la République et le Vice-Président","Élection, pouvoirs, intérim"],
  ["dc06","Le Gouvernement et les rapports entre pouvoirs","Responsabilité, moyens d'action réciproques"],
  ["dc07","Le Parlement et la procédure législative","Assemblée nationale, Sénat, navette, lois organiques"],
  ["dc08","Le Conseil constitutionnel et le contrôle de constitutionnalité","Saisine, contrôle a priori, exception"],
  ["dc09","Le pouvoir judiciaire","Organisation juridictionnelle, Conseil supérieur de la magistrature"],
  ["dc10","Droits, libertés et devoirs","Titre I de la Constitution"],
  ["dc11","Élections, partis politiques et CEI","Droit électoral"],
  ["dc12","Les autres institutions constitutionnelles","CESEC, Médiateur, Chambre des rois et chefs traditionnels"],
  ["dc13","Révision de la Constitution et traités","Procédure de révision, engagements internationaux"],
  ["dc14","Les grands régimes étrangers","France, États-Unis, Royaume-Uni"],
  ["dc15","Révision : sujet blanc de droit constitutionnel","Épreuve complète en conditions"]
 ]},
 { k:"da", label:"Droit administratif et finances publiques", court:"Droit administratif", phase:"Admissibilité CS", ecrit:"da", levels:[
  ["da01","L'organisation administrative de la Côte d'Ivoire","Panorama","a1"],
  ["da02","Le régime juridique des actes administratifs","Actes unilatéraux","a2"],
  ["da03","Service public, police et responsabilité","Notions clés","a3"],
  ["da04","Budget et dépense publique","Finances publiques de base","f1"],
  ["da05","Les sources du droit administratif et la légalité","Hiérarchie des normes, principe de légalité"],
  ["da06","Centralisation, déconcentration, décentralisation","Notions et applications ivoiriennes"],
  ["da07","Les collectivités territoriales","Régions, communes, districts autonomes"],
  ["da08","Contrats administratifs et marchés publics","Critères, procédures, code des marchés"],
  ["da09","La fonction publique","Statut général, droits et obligations"],
  ["da10","Domaine public et expropriation","Régime des biens publics"],
  ["da11","Le contentieux administratif","Recours pour excès de pouvoir, plein contentieux"],
  ["da12","Lois de finances et budget-programme","LOLF, directives UEMOA"],
  ["da13","Recettes, dépenses et comptabilité publique","Ordonnateur, comptable, phases de la dépense"],
  ["da14","Le contrôle des finances publiques","Cour des comptes, contrôle parlementaire"],
  ["da15","Révision : sujet blanc de droit administratif","Épreuve complète en conditions"]
 ]},
 { k:"ct", label:"Résumé de texte", court:"Résumé", phase:"Admissibilité CMS", ecrit:"ct", levels:[
  ["ct01","La technique ENA du résumé","Méthode complète","c1"],
  ["ct02","Lire et dégager la structure d'un texte","Thèse, arguments, connecteurs, plan du texte"],
  ["ct03","Reformuler sans paraphraser","Condenser, généraliser, supprimer les exemples"],
  ["ct04","Compter les mots et tenir la fourchette","Règles de décompte et ajustement"],
  ["ct05","Résumer un texte économique","Entraînement guidé"],
  ["ct06","Résumer un texte de société","Entraînement guidé"],
  ["ct07","Résumé chronométré","Épreuve en conditions"],
  ["ct08","Révision : résumé blanc","Épreuve complète en conditions"]
 ]},
 { k:"sog", label:"Sujet d'ordre général", court:"SOG", phase:"Admissibilité", ecrit:"sog", levels:[
  ["so01","Analyser le sujet et trouver la problématique","Méthode d'analyse","s1"],
  ["so02","Construire le plan et rédiger","Méthode du plan","s2"],
  ["so03","L'introduction en quatre temps","Accroche, définition, problématique, annonce"],
  ["so04","Argumenter : idée, explication, exemple","Paragraphe argumentatif"],
  ["so05","Transitions et conclusion","Lier les parties, conclure et ouvrir"],
  ["so06","Thèmes : paix, cohésion sociale, sécurité","Idées et exemples vérifiés"],
  ["so07","Thèmes : démocratie, élections, citoyenneté","Idées et exemples vérifiés"],
  ["so08","Thèmes : jeunesse, emploi, éducation","Idées et exemples vérifiés"],
  ["so09","Thèmes : environnement et développement durable","Idées et exemples vérifiés"],
  ["so10","Thèmes : éthique, gouvernance, lutte contre la corruption","Idées et exemples vérifiés"],
  ["so11","Thèmes : mondialisation, numérique, culture","Idées et exemples vérifiés"],
  ["so12","Révision : SOG blanc","Épreuve complète en conditions"]
 ]},
 { k:"ns", label:"Note de synthèse (cycle supérieur)", court:"Synthèse", phase:"Admissibilité CS", ecrit:"ns", levels:[
  ["ns01","La méthode des 5 heures","Méthode complète","n1"],
  ["ns02","Lire et classer un dossier","Tableau de dépouillement"],
  ["ns03","Bâtir le plan de la note","Plan thématique, titres"],
  ["ns04","Rédiger une note objective","Neutralité, citations des documents"],
  ["ns05","Note chronométrée","Épreuve en conditions"],
  ["ns06","Révision : note de synthèse blanche","Épreuve complète en conditions"]
 ]},
 { k:"oral", label:"Oral d'admission", court:"Oral", phase:"Admission", levels:[
  ["or01","Se présenter et convaincre le jury","Présentation","o1"],
  ["or02","Les questions de motivation","Pourquoi l'ENA, projet professionnel"],
  ["or03","Culture et actualité devant le jury","Réponses structurées sur l'actualité"],
  ["or04","L'administration ivoirienne en questions","Connaître l'État que l'on veut servir"],
  ["or05","Posture, voix et gestion du stress","Communication non verbale"],
  ["or06","Mises en situation administratives","Cas pratiques de l'oral"],
  ["or07","Simulation complète de l'oral","Oral blanc"]
 ]}
];

// ============ CAP ENA — APPLICATION ============
(function(){
"use strict";
const $ = (s)=>document.querySelector(s);
const APP_VERSION = "a635749e du 13/10/2026";
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
const parseYmd = (s)=>{ const [y,m,d]=s.split("-").map(Number); return new Date(y,m-1,d); };
const addDays = (s,n)=>{ const d=parseYmd(s); d.setDate(d.getDate()+n); return ymd(d); };
const frDate = (s)=>{ if(!s) return ""; const d=parseYmd(s); return d.getDate()+" "+["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."][d.getMonth()]+" "+d.getFullYear(); };
const fmtTime = (s)=>{ s=Math.max(0,Math.round(s)); const hh=Math.floor(s/3600), mm=Math.floor(s%3600/60), ss=s%60; return (hh? hh+":"+pad(mm) : mm)+":"+pad(ss); };
const words = (t)=>(t.trim().match(/[^\s'’]+/g)||[]).length;
const JOURS = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
const hash = (s)=>{ let x=5381; for (let i=0;i<s.length;i++) x=((x<<5)+x+s.charCodeAt(i))|0; return (x>>>0).toString(36); };
const toMin = (s)=>{ const [a,b]=s.split(":").map(Number); return a*60+b; };
const nowMin = ()=>{ const d=new Date(); return d.getHours()*60+d.getMinutes(); };
const today = ()=>ymd(new Date());
const fr1 = (x)=>String(x).replace(".",",");
function toast(msg){ const t=$("#toast"); t.textContent=msg; t.hidden=false; clearTimeout(toast._t); toast._t=setTimeout(()=>{t.hidden=true},3200); }

// ---------- Matières ----------
const TRACKS = Object.fromEntries(PROGRAMME.map(t=>[t.k,t]));
const LEVELS = []; const LVMAP = {};
PROGRAMME.forEach(t=>t.levels.forEach((L,i)=>{ const lv={id:L[0],t:L[1],obj:L[2],lesson:L[3]||null,track:t.k,idx:i,last:i===t.levels.length-1}; LEVELS.push(lv); LVMAP[lv.id]=lv; }));
const SLOT_KINDS = { blanc:{court:"Présélection blanche", label:"Présélection blanche (45 questions, 45 min)"}, revision:{court:"Rattrapages et révision", label:"Rattrapages, puis révision des erreurs"}, ecrit:{court:"Écrit en conditions", label:"Copie complète en conditions d'examen"} };
const kindLabel = (k)=> TRACKS[k] ? TRACKS[k].court : (SLOT_KINDS[k] ? SLOT_KINDS[k].court : k);
const EPREUVE_OF = {sog:"sog", pes:"pes", ct:"ct", dc:"dc", da:"da", ns:"ns"};
const METHOD_LEVEL = {sog:"so02", pes:"pe01", ct:"ct01", dc:"dc02", da:"da02", ns:"ns01"};
// matière d'une question : d'abord le niveau de sa leçon, sinon son code
function trackOfQ(q){
  if (TAG2LV[q.tag]) return LVMAP[TAG2LV[q.tag]].track;
  if (q.m === "fr" || /^(voc|gram|orth|conj|fr)/.test(q.tag||"")) return "fr";
  return {cg:"cg",ang:"ang",log:"log",pes:"pes",dc:"dc",da:"da",fp:"da",ct:"ct",sog:"sog",ns:"ns",oral:"oral"}[q.m] || "cg";
}
const weight = (q)=> (q.m==="log" || trackOfQ(q)==="log") ? 2 : 1;

let BANK = QUESTIONS.map(r=>({id:"q"+hash(r[2]), m:r[0], tag:r[1], q:r[2], o:r[3], a:r[4], e:r[5], src:"Cap ENA"}));
let LMAP = Object.fromEntries(LESSONS.map(l=>[l.id,l]));
const NIV2L = {}; const TAG2LV = {};
function indexLevels(){
  for (const lv of LEVELS){
    const l = lessonOf(lv);
    if (l && l.exo && l.exo.tag) TAG2LV[l.exo.tag] = lv.id;
  }
}
function lessonOf(lv){ return (lv.lesson && LMAP[lv.lesson]) || NIV2L[lv.id] || null; }

// ---------- Contenus publiés chaque nuit ----------
let VEILLE = null;   // veille du concours (content/veille.json), mise à jour chaque jour
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
    if (l.niv && LVMAP[l.niv] && !NIV2L[l.niv]) NIV2L[l.niv] = l;
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
    const td = today();
    for (const pk of (idx.packs||[])){
      try {
        const p = await fetch("content/" + pk.file + "?v=" + encodeURIComponent(pk.v||""), {cache:"no-cache"}).then(r=>r.json());
        for (const day of (p.days || [p])) mergePack(day, day.date === td);
        CONTENT.packs++;
      } catch(e){}
    }
    if (retired.size){ BANK = BANK.filter(q=>!retired.has(q.id)); for (const id of retired){ delete state.wrong[id]; } }
    CONTENT.loaded = true; CONTENT.updated = idx.updated || null;
  } catch(e){ CONTENT.offline = true; }
  try { const v = await fetch("content/veille.json", {cache:"no-cache"}).then(r=>{ if(!r.ok) throw 0; return r.json(); }); if (v && v.updated) { VEILLE = v; try { localStorage.setItem("capena.veille", JSON.stringify(v)); } catch(e){} } } catch(e){}
  if (!VEILLE) { try { VEILLE = JSON.parse(localStorage.getItem("capena.veille") || "null"); } catch(e){} }
  indexLevels();
  if (!state.exam && !inExamView()) render();
}
function reportUrl(it){
  const r = repoInfo(); if (!r) return null;
  const title = "Erreur signalée : " + it.q.slice(0,60);
  const body = "Question (id " + it.id + ") :\n" + it.q + "\n\nPropositions : " + it.o.join(" | ") + "\nRéponse donnée comme juste : " + it.o[it.a] + "\n\nCe qui me semble faux :\n";
  return "https://github.com/" + r.user + "/" + r.repo + "/issues/new?labels=erreur&title=" + encodeURIComponent(title) + "&body=" + encodeURIComponent(body);
}


// ---------- État ----------
const KEY = "capena.v3";
const DEFAULT_PLANNING = [
  {id:"lun-m", jour:1, debut:"12:30", fin:"13:00", k:"fr"},
  {id:"lun-s", jour:1, debut:"21:00", fin:"22:00", k:"pes"},
  {id:"mar-m", jour:2, debut:"12:30", fin:"13:00", k:"ang"},
  {id:"mar-s", jour:2, debut:"21:00", fin:"22:00", k:"dc"},
  {id:"mer-m", jour:3, debut:"12:30", fin:"13:00", k:"cg"},
  {id:"mer-s", jour:3, debut:"21:00", fin:"22:00", k:"da"},
  {id:"jeu-m", jour:4, debut:"12:30", fin:"13:00", k:"log"},
  {id:"jeu-s", jour:4, debut:"21:00", fin:"22:00", k:"ct"},
  {id:"ven-m", jour:5, debut:"12:30", fin:"13:00", k:"fr"},
  {id:"ven-s", jour:5, debut:"21:00", fin:"22:00", k:"revision"},
  {id:"sam-m", jour:6, debut:"08:00", fin:"10:00", k:"sog"},
  {id:"sam-a", jour:6, debut:"16:00", fin:"17:30", k:"blanc"},
  {id:"dim-m", jour:0, debut:"08:00", fin:"10:00", k:"ecrit"},
  {id:"dim-a", jour:0, debut:"17:00", fin:"18:00", k:"oral"}
];
const defaults = ()=>({v:3, xp:0, stats:{}, wrong:{}, seen:{}, lv:{}, valHist:[], copies:[], oral:0, custom:[], cycle:"CMS",
  planning: DEFAULT_PLANNING.map(s=>Object.assign({},s)), done:{}, missed:[], lastProc:null, sanctions:[], exam:null, blockUntil:0, pendingSanction:null, interrupt:null, jokers:[], urgences:[], veilleSeen:null,
  profile:{nom:"TANO", prenoms:"Ahmed", naissance:"", diplome:"", ville:"", statut:"", email:""}, dossier:{}, days:{}, created:today(), tuto3:null, blancs:0});
let state = defaults();
(function load(){
  try {
    const raw = localStorage.getItem(KEY);
    if (raw){ state = Object.assign(defaults(), JSON.parse(raw)); return; }
    const old = localStorage.getItem("capena.v2");
    if (old){
      const o = JSON.parse(old);
      state.xp = o.xp||0; state.stats = o.stats||{}; state.wrong = o.wrong||{}; state.seen = o.seen||{}; state.copies = o.copies||[]; state.oral = o.oral||0; state.custom = o.custom||[]; state.cycle = o.cycle||"CMS";
      // leçons déjà réussies (au moins 70 %) : niveau validé
      for (const lv of LEVELS){ const r = lv.lesson && o.lessons && o.lessons[lv.lesson]; if (r && r.best >= 70){ state.lv[lv.id] = {ok:r.done||today(), best:r.best, tries:1, read:true}; state.valHist.push(lv.id); } }
    }
  } catch(e){}
})();
if (!state.lastProc) state.lastProc = addDays(today(), -1);   // les séances ne comptent qu'à partir de l'installation de cette version
function save(){ try { localStorage.setItem(KEY, JSON.stringify(state)); } catch(e){ toast("Impossible d'enregistrer : mémoire du téléphone pleine."); } }
function allQ(){ return BANK.concat(state.custom.map(q=>Object.assign({src:"Mes annales"},q))); }

const NIVEAUX = [[0,"Candidat inscrit"],[300,"Présélectionné"],[900,"Admissible"],[2000,"Admis"],[4000,"Élève de l'ENA"],[7000,"Major de promotion"]];
function niveau(xp){ let cur=NIVEAUX[0], next=NIVEAUX[1]; for (let i=0;i<NIVEAUX.length;i++){ if (xp>=NIVEAUX[i][0]) { cur=NIVEAUX[i]; next=NIVEAUX[i+1]||null; } } return {cur, next}; }
function addXP(n){ const b = niveau(state.xp).cur[1]; state.xp = Math.max(0, state.xp + n); const a = niveau(state.xp).cur[1]; if (a!==b) toast((n>0?"Nouveau grade : ":"Rétrogradé : ") + a); }
function markDay(){ const d = today(); state.days[d] = (state.days[d]||0) + 1; }
function precision(){ let ok=0,n=0; for (const k in state.stats){ ok+=state.stats[k].ok; n+=state.stats[k].n; } return n ? Math.round(ok/n*100) : null; }


// ---------- Parcours : niveaux ----------
const PASS = 14;          // note minimale sur 20 pour valider un niveau ou un rattrapage QCM
const PASS_ECRIT = 10;    // note minimale de la copie (auto-évaluation)
const lvState = (id)=> state.lv[id] || {};
const isValid = (id)=> !!lvState(id).ok;
function poolOf(lv){ const l = lessonOf(lv); if (!l || !l.exo || !l.exo.tag) return []; return allQ().filter(q=>q.tag===l.exo.tag); }
function isAvailable(lv){ const l = lessonOf(lv); if (!l) return false; return lv.track==="oral" ? true : poolOf(lv).length >= 5; }
function currentLevel(k){ return TRACKS[k].levels.map(L=>LVMAP[L[0]]).find(lv=>!isValid(lv.id)) || null; }
function levelStatus(lv){
  if (isValid(lv.id)) return "ok";
  const cur = currentLevel(lv.track);
  if (cur && cur.id === lv.id) return isAvailable(lv) ? "cur" : "prep";
  return "lock";
}
function trackProgress(k){ const ids = TRACKS[k].levels.map(L=>L[0]); const n = ids.filter(isValid).length; return {n, total:ids.length, pct: Math.round(n/ids.length*100)}; }
// exercice écrit exigé pour valider un niveau d'une matière d'écrit (après le QCM)
function ecritNeeded(lv){
  const t = TRACKS[lv.track];
  if (!t.ecrit) return null;
  const l = lessonOf(lv);
  if (!lv.last && !(l && l.exo && l.exo.ecrit)) return null;
  const E = EPREUVES[t.ecrit]; if (!E) return null;
  const court = {sog:30, pes:30, dc:30, da:30, ct:60, ns:60}[t.ecrit] || 30;
  return {e:t.ecrit, dur: lv.last ? E.duree*60 : court*60, full: !!lv.last};
}
function validateLevel(id, note){
  const s = state.lv[id] || (state.lv[id] = {});
  if (!s.ok){ s.ok = today(); state.valHist.push(id); addXP(60); }
  s.best = Math.max(s.best||0, note);
  save();
  const lv = LVMAP[id]; const nx = currentLevel(lv.track);
  toast("Niveau validé : « " + lv.t + " »" + (nx ? ". Niveau suivant déverrouillé." : ". Matière terminée !"));
}
// questions des niveaux déjà validés (et du niveau en cours) d'une matière
function trackPool(k, withCurrent){
  const ids = new Set();
  for (const L of TRACKS[k].levels){ const lv = LVMAP[L[0]]; const st = levelStatus(lv); if (st==="ok" || (withCurrent && st==="cur")){ const l = lessonOf(lv); if (l && l.exo) ids.add(l.exo.tag); } }
  return allQ().filter(q=>ids.has(q.tag) || (trackOfQ(q)===k && !TAG2LV[q.tag] && q.src!=="Mes annales" && isValid(TRACKS[k].levels[0][0])));
}

// ---------- Emploi du temps et séances ----------
const slotsOn = (date)=>{ const wd = parseYmd(date).getDay(); return state.planning.filter(s=>s.jour===wd).sort((a,b)=>toMin(a.debut)-toMin(b.debut)); };
const slotMin = (s)=> Math.max(0, toMin(s.fin)-toMin(s.debut));
const doneOn = (date)=> state.done[date] || [];
function slotDone(date, s){ return doneOn(date).includes(s.id); }
function slotLabel(s){ return kindLabel(s.k); }
function slotDetail(s){
  if (TRACKS[s.k]){ const cur = currentLevel(s.k); if (!cur) return "Matière terminée : révision"; return (levelStatus(cur)==="prep" ? "Révision (niveau suivant en préparation)" : "Niveau " + (cur.idx+1) + " : " + cur.t); }
  return SLOT_KINDS[s.k] ? SLOT_KINDS[s.k].label : "";
}
// Une séance est créditée quand une activité de sa matière est terminée le jour même.
function creditSeance(kind){
  const d = today(); const list = slotsOn(d); const done = state.done[d] || (state.done[d] = []);
  const s = list.find(x=>x.k===kind && !done.includes(x.id));
  if (s){ done.push(s.id); save(); toast("Séance « " + slotLabel(s) + " » validée pour aujourd'hui."); return true; }
  return false;
}
// Passage en revue des jours écoulés : chaque séance non faite retire des points (2 XP par minute prévue).
function processMissed(){
  const y = addDays(today(), -1);
  let d = state.lastProc ? addDays(state.lastProc, 1) : y;
  if (parseYmd(d) < parseYmd(addDays(y, -60))) d = addDays(y, -60);
  let lost = 0, n = 0;
  while (parseYmd(d) <= parseYmd(y)){
    for (const s of slotsOn(d)){
      if (slotDone(d, s)) continue;
      const id = d + "_" + s.id;
      if (state.missed.some(m=>m.id===id)) continue;
      const pts = slotMin(s) * 2;
      const before = state.xp; addXP(-pts);
      state.missed.push({id, date:d, k:s.k, debut:s.debut, fin:s.fin, pts, lost: before - state.xp, st:"due", limit: addDays(d, 14)});
      lost += before - state.xp; n++;
    }
    d = addDays(d, 1);
  }
  state.lastProc = y;
  // rattrapages expirés
  for (const m of state.missed) if (m.st==="due" && parseYmd(m.limit) < parseYmd(today())) m.st = "perdu";
  save();
  return {n, lost};
}
const dueMissed = ()=> state.missed.filter(m=>m.st==="due").sort((a,b)=>a.date<b.date?-1:1);
function restoreMissed(id){
  const m = state.missed.find(x=>x.id===id); if (!m || m.st!=="due") return;
  m.st = "ok"; m.on = today(); addXP(m.pts); markDay(); save();
  toast("Rattrapage réussi : +" + m.pts + " XP récupérés.");
}

// ---------- Indice de préparation (indicateur interne, pas une probabilité) ----------
function indice(){
  const skip = state.cycle==="CS" ? ["ct","dc"] : ["ns"];
  const tracks = PROGRAMME.filter(t=>!skip.includes(t.k));
  const all = LEVELS.filter(lv=>tracks.some(t=>t.k===lv.track));
  const val = all.filter(lv=>isValid(lv.id));
  const couverture = all.length ? val.length/all.length : 0;
  // qualité : somme des meilleures notes rapportée au programme entier (20/20 partout = 20 points)
  const qualite = all.length ? val.reduce((a,lv)=>a+Math.min(20,lvState(lv.id).best||0)/20,0)/all.length : 0;
  // assiduité sur 28 jours (0 tant qu'aucune séance n'était prévue)
  let due = 0, ok = 0;
  for (let i=1;i<=28;i++){ const d = addDays(today(), -i); if (parseYmd(d) < parseYmd(state.created)) break; for (const s of slotsOn(d)){ due++; const m = state.missed.find(x=>x.id===d+"_"+s.id); if (slotDone(d,s) || (m && m.st==="ok")) ok++; } }
  const assiduite = due ? ok/due : 0;
  const dos = dossierProgress();
  const parts = {couverture: Math.round(couverture*40), maitrise: Math.round(qualite*20), assiduite: Math.round(assiduite*25), dossier: Math.round(dos.pct/100*15)};
  return {total: parts.couverture+parts.maitrise+parts.assiduite+parts.dossier, parts, due, ok};
}


// ---------- Navigation (déclarations utilisées par les épreuves) ----------
let view = "home", quiz = null, lesson = null, ecrit = null, oralS = null, timers = [], pre = null, trackView = null;
function clearTimers(){ timers.forEach(t=>clearInterval(t)); timers = []; }
// Historique de navigation : bouton « Retour » de l'appli et bouton retour d'Android
let NAV = [];
const TRANSIENT = new Set(["conditions","quiz","ecrit","oral","interruption","urgence","sanction","tuto"]);
function go(v, opts){
  const back = opts && opts.back;
  if (!back && v !== view && !TRANSIENT.has(view)){ NAV.push(view); if (NAV.length > 40) NAV.shift(); try { history.pushState({cap:1}, ""); } catch(e){} }
  view = v; clearTimers(); render(); window.scrollTo({top:0});
}
function goBack(){
  if (state.exam || state.interrupt || (state.blockUntil > Date.now())) return;
  const v = NAV.pop();
  if (v) go(v, {back:true}); else if (view !== "home") go("home", {back:true});
}
function canGoBack(){ return NAV.length > 0 && !state.exam && !state.interrupt && !(state.blockUntil > Date.now()) && !document.body.classList.contains("locked"); }
function backClick(){ if (!canGoBack()) return; try { history.back(); } catch(e){ goBack(); } }
const inExamView = ()=> ["quiz","ecrit","oral","conditions"].includes(view) && !!state.exam;

// ---------- Surveillance des épreuves ----------
// Pendant une évaluation, quitter l'appli (autre appli, écran d'accueil, verrouillage, appel, rechargement) annule l'épreuve.
// Au retour, le candidat déclare la cause : appel entrant ou urgence (3 interruptions justifiées par 30 jours, sans sanction),
// ou sortie volontaire : sanction (les deux derniers niveaux validés sont reverrouillés, −150 XP, appli bloquée 3 minutes).
// Le bouton « Urgence » de l'épreuve permet de sortir sans sanction pour appeler les secours.
let wakeLock = null;
async function wake(on){ try { if (on && "wakeLock" in navigator){ wakeLock = await navigator.wakeLock.request("screen"); } else if (!on && wakeLock){ await wakeLock.release(); wakeLock = null; } } catch(e){} }
function examBegin(info){
  state.exam = Object.assign({start:Date.now()}, info); save();
  wake(true); document.body.classList.add("inexam");
  try { history.pushState({exam:1}, ""); } catch(e){}
}
function examFinish(){ state.exam = null; save(); wake(false); document.body.classList.remove("inexam"); }
window.addEventListener("popstate", ()=>{
  if (state.exam){ try { history.pushState({exam:1}, ""); } catch(e){} toast("Épreuve en cours : impossible de quitter. Remettez votre copie ou abandonnez."); return; }
  if (document.body.classList.contains("locked")) return;
  goBack();
});
document.addEventListener("visibilitychange", ()=>{
  if (document.hidden){ if (state.exam) interruptExam(); }
  else {
    if (state.exam) wake(true);
    if ((state.pendingSanction || state.interrupt) && !document.body.classList.contains("locked")) showLock();
  }
});
window.addEventListener("pagehide", ()=>{ if (state.exam) interruptExam(); });
const JOKERS = 3;
function jokersLeft(){ const lim = Date.now() - 30*86400000; return Math.max(0, JOKERS - (state.jokers||[]).filter(t=>t>lim).length); }
function resetExamUI(){ quiz = null; ecrit = null; oralS = null; pre = null; clearTimers(); wake(false); document.body.classList.remove("inexam"); }
function interruptExam(){
  const ex = state.exam; if (!ex) return;
  state.exam = null; state.interrupt = Object.assign({}, ex, {at: Date.now()});
  save(); resetExamUI(); view = "interruption";
}
function justifyInterrupt(){
  state.jokers = (state.jokers||[]).concat([Date.now()]); state.interrupt = null; save();
  toast("Interruption justifiée : épreuve annulée sans sanction. À recommencer avec d'autres questions.");
  go("home");
}
function urgentExit(){
  const ex = state.exam; if (!ex) return;
  state.exam = null; state.urgences = (state.urgences||[]).concat([{at:Date.now(), what: ex.title||""}]);
  save(); resetExamUI(); go("urgence");
}
function urgenceButton(){
  return h("button",{class:"btn ghost small urg",type:"button",onclick:(ev)=>{ if (!ev.target.dataset.c){ ev.target.dataset.c = "1"; ev.target.textContent = "Confirmer : suspendre l'épreuve pour une urgence"; return; } urgentExit(); }},"Urgence (appel des secours)");
}
function sanction(reason, exArg){
  const ex = exArg || state.exam; if (!ex) return;
  state.exam = null; state.interrupt = null;
  const reverted = [];
  for (let i=0; i<2 && state.valHist.length; i++){
    const id = state.valHist.pop();
    if (state.lv[id]){ delete state.lv[id].ok; delete state.lv[id].qcm; state.lv[id].read = false; }
    reverted.push(id);
  }
  // un niveau dont le QCM était acquis (écrit en attente) perd aussi ce QCM
  if (ex.lv && state.lv[ex.lv]) { delete state.lv[ex.lv].qcm; state.lv[ex.lv].read = false; }
  const before = state.xp; addXP(-150);
  const s = {date:today(), at:Date.now(), reason, what: ex.title || "", reverted, xp: before - state.xp};
  state.sanctions.push(s); state.pendingSanction = s; state.blockUntil = Date.now() + 3*60*1000;
  save();
  resetExamUI();
  view = "sanction";
}

// ---------- Écran « conditions d'examen » avant chaque évaluation ----------
function conditions(opts){ pre = opts; go("conditions"); }
function vConditions(){
  if (!pre) return vHome();
  const ok = h("input",{type:"checkbox",id:"engage"});
  const btn = h("button",{class:"btn primary",type:"button",disabled:true,onclick:()=>{ const f = pre.start; pre = null; f(); }}, "Commencer l'épreuve");
  ok.addEventListener("change", ()=>{ btn.disabled = !ok.checked; });
  return h("div",{class:"stack"},
    h("div",null, h("p",{class:"lbl"},"Conditions d'examen"), h("h1",{class:"h-l"}, pre.title)),
    card("stack",
      h("p",null, pre.desc),
      h("ul",{class:"pts"},
        h("li",null,"Activez le mode « Ne pas déranger » et coupez la sonnerie des appels."),
        h("li",null, h("b",null,"Ne quittez pas l'appli"), " : changer d'appli, revenir à l'écran d'accueil, éteindre l'écran, recevoir un appel ou recharger la page annule l'épreuve."),
        h("li",null,"Sortie volontaire : les deux derniers niveaux validés sont reverrouillés, −150 XP, appli bloquée 3 minutes."),
        h("li",null,"Appel entrant : à votre retour, déclarez-le. L'épreuve est annulée sans sanction et sera recommencée avec d'autres questions (3 interruptions justifiées par période de 30 jours ; il vous en reste " + jokersLeft() + ")."),
        h("li",null,"Urgence : le bouton « Urgence » en bas de l'épreuve suspend l'épreuve sans sanction et affiche les numéros des secours."),
        h("li",null,"Aucune correction pendant l'épreuve : elle s'affiche quand vous remettez votre copie."),
        pre.extra ? h("li",null, pre.extra) : null),
      h("label",{class:"chk"}, ok, h("span",null,"Je m'engage à composer seul, sans document ni aide extérieure.")),
      h("div",{class:"row spread"}, h("button",{class:"btn ghost",type:"button",onclick:()=>{ pre = null; go("home"); }},"Plus tard"), btn))
  );
}

// ---------- QCM ----------
function pick(pool, n){ return shuffle(pool).map(q=>({q, s:(state.wrong[q.id]||0)*3 + (state.seen[q.id]?0:2) + Math.random()})).sort((a,b)=>b.s-a.s).slice(0,n).map(x=>x.q); }
function prep(q){ const order = shuffle(q.o.map((_,i)=>i)); return Object.assign({}, q, {o: order.map(i=>q.o[i]), a: order.indexOf(q.a), pick:null}); }
// mode "exam" : conditions strictes ; mode "train" : correction immédiate, sans enjeu
function startQCM(o){
  const items = o.items.map(prep);
  quiz = Object.assign({i:0, done:false, start:Date.now(), mode:"exam"}, o, {items});
  if (quiz.mode === "exam") examBegin({kind:"qcm", title:o.title, lv:o.lv||null});
  go("quiz");
  if (quiz.chrono) startQuizTimer();
}
function startQuizTimer(){
  timers.push(setInterval(()=>{
    if (!quiz || quiz.done) return;
    const left = quiz.chrono - (Date.now()-quiz.start)/1000; const t = document.getElementById("qtimer");
    if (t){ t.textContent = fmtTime(left); t.classList.toggle("low", left<60); }
    if (left <= 0){ clearTimers(); finishQCM(true); }
  }, 1000));
}
function finishQCM(timeout){
  if (!quiz || quiz.done) return;
  clearTimers(); quiz.done = true; quiz.timeout = timeout;
  let pts=0, max=0, ok=0, ko=0, sk=0;
  for (const it of quiz.items){
    const w = weight(it); max += w;
    const k = trackOfQ(it); const st = state.stats[k] || (state.stats[k] = {ok:0,n:0});
    state.seen[it.id] = 1;
    if (it.pick == null || it.pick === -1){ sk++; continue; }
    st.n++;
    if (it.pick === it.a){ pts += w; ok++; st.ok++; if (state.wrong[it.id]){ state.wrong[it.id]--; if (!state.wrong[it.id]) delete state.wrong[it.id]; } }
    else { pts -= w; ko++; state.wrong[it.id] = Math.min(5,(state.wrong[it.id]||0)+1); }
  }
  const note = max ? Math.max(0, Math.round(pts/max*200)/10) : 0;
  quiz.res = {pts, max, ok, ko, sk, note};
  if (quiz.mode === "exam"){
    examFinish(); addXP(ok*10); markDay();
    afterQCM(quiz);
  }
  save(); render(); window.scrollTo({top:0});
}
function afterQCM(q){
  const note = q.res.note;
  if (q.kind === "level"){
    const lv = LVMAP[q.lv]; const s = state.lv[lv.id] || (state.lv[lv.id] = {});
    s.tries = (s.tries||0) + 1; s.last = note;
    creditSeance(lv.track);
    if (note >= PASS){
      s.qcmNote = note;
      if (ecritNeeded(lv) || lv.track==="oral"){ s.qcm = true; q.verdict = "qcm"; }
      else { validateLevel(lv.id, note); q.verdict = "valid"; }
    } else { s.read = "retenir"; q.verdict = "fail"; }
  } else if (q.kind === "blanc"){
    state.blancs = (state.blancs||0) + 1; creditSeance("blanc"); addXP(40);
    if (q.ratt && note >= 10){ restoreMissed(q.ratt); q.verdict = "ratt-ok"; } else if (q.ratt) q.verdict = "ratt-ko";
  } else if (q.kind === "ratt"){
    creditSeance("revision");
    if (note >= 12){ restoreMissed(q.ratt); q.verdict = "ratt-ok"; } else q.verdict = "ratt-ko";
  } else if (q.kind === "revision"){
    creditSeance(q.track);
  } else if (q.kind === "erreurs"){
    creditSeance("revision");
  }
}

// ---------- Écrits en conditions ----------
function sujetId(s){ return "s"+hash(s.t); }
function pickSujet(e, full){
  const list = SUJETS.filter(s=>s.e===e && (state.cycle==="CS" || !s.dossier || e==="ns"));
  const done = new Set(state.copies.map(c=>c.sid));
  return list.find(x=>x.src==="officiel" && !done.has(sujetId(x))) || list.find(x=>!done.has(sujetId(x))) || shuffle(list)[0] || null;
}
function startEcrit(s, o){
  const E = EPREUVES[s.e];
  const dur = o.dur || E.duree*60;
  conditions({title: E.label + " · " + fmtTime(dur).replace(/:00$/,"") + (dur>=3600 ? " h" : " min"),
    desc: (dur < E.duree*60 ? "Exercice en temps réduit : " + Math.round(dur/60) + " minutes (introduction et plan détaillé). " : "Épreuve complète : " + (E.duree/60) + " heures, comme au concours. ") + "Le chrono démarre dès que vous commencez et ne s'arrête pas. À la fin du temps, la copie est ramassée automatiquement.",
    extra: "Le plan corrigé n'est visible qu'après la remise de la copie et votre auto-évaluation.",
    start: ()=>{
      ecrit = Object.assign({s, text:"", dur, start:Date.now(), phase:"write", checks:{}}, o);
      examBegin({kind:"ecrit", title:E.label, lv:o.lv||null});
      go("ecrit");
    }});
}
function endWriting(timeout){
  if (!ecrit || ecrit.phase !== "write") return;
  clearTimers(); ecrit.phase = "grade"; ecrit.timeout = timeout; ecrit.realDur = Math.round((Date.now()-ecrit.start)/1000);
  examFinish(); save(); render(); window.scrollTo({top:0});
}
function gradeEcrit(){
  const E = EPREUVES[ecrit.s.e]; const n = E.grille.filter((_,i)=>ecrit.checks[i]).length;
  const note = Math.round(n / E.grille.length * 200)/10;
  const mots = words(ecrit.text);
  state.copies.push({sid:sujetId(ecrit.s), e:ecrit.s.e, t:ecrit.s.t.slice(0,90), date:today(), mots, note, dur:ecrit.realDur});
  state.copies = state.copies.slice(-60);
  ecrit.note = note; ecrit.phase = "done"; addXP(50); markDay();
  const tr = {sog:"sog",pes:"pes",ct:"ct",dc:"dc",da:"da",ns:"ns"}[ecrit.s.e];
  if (ecrit.dur >= 3600) creditSeance("ecrit");
  creditSeance(tr);
  if (ecrit.lv){
    if (note >= PASS_ECRIT){ validateLevel(ecrit.lv, Math.min(20, Math.round(((state.lv[ecrit.lv].qcmNote||note)+note)/2*10)/10)); ecrit.verdict = "valid"; }
    else ecrit.verdict = "fail";
  }
  if (ecrit.ratt){ if (note >= PASS_ECRIT){ restoreMissed(ecrit.ratt); ecrit.verdict = "ratt-ok"; } else ecrit.verdict = "ratt-ko"; }
  save(); render(); window.scrollTo({top:0});
}

// ---------- Oral en conditions ----------
const GRILLE_ORAL = ["Introduction claire avec une problématique","Deux idées structurées, annoncées","Exemples précis et exacts","Ton posé, débit lent, regard vers le jury","Neutralité sur les sujets politiques","Conclusion avec ouverture","Réponse dans le temps imparti"];
function startOral(o){
  conditions({title:"Simulation d'oral · 2 questions", desc:"Pour chaque question : 2 minutes de préparation, puis 5 minutes de réponse à voix haute. Vous vous évaluez ensuite avec la grille du jury.", extra:"Parlez réellement à voix haute ; enregistrez-vous si possible avec un second appareil.",
    start: ()=>{ const qs = shuffle(ORAL.map((_,i)=>i)).slice(0,2); oralS = Object.assign({qs, j:0, phase:"prep", start:Date.now(), notes:"", checks:[{},{}]}, o||{}); examBegin({kind:"oral", title:"Oral", lv:(o&&o.lv)||null}); go("oral"); }});
}
function oralNext(){
  if (oralS.phase === "prep"){ oralS.phase = "rep"; oralS.start = Date.now(); }
  else if (oralS.j === 0){ oralS.j = 1; oralS.phase = "prep"; oralS.start = Date.now(); oralS.notes = ""; }
  else {
    examFinish();
    const sc = oralS.checks.map(c=>Object.values(c).filter(Boolean).length);
    const note = Math.round((sc[0]+sc[1])/2/GRILLE_ORAL.length*200)/10;
    oralS.phase = "done"; oralS.note = note; state.oral++; addXP(30); markDay();
    creditSeance("oral");
    if (oralS.lv){ if (note >= PASS_ECRIT){ validateLevel(oralS.lv, Math.min(20, Math.round(((state.lv[oralS.lv].qcmNote||note)+note)/2*10)/10)); oralS.verdict="valid"; } else oralS.verdict="fail"; }
    if (oralS.ratt){ if (note >= PASS_ECRIT){ restoreMissed(oralS.ratt); oralS.verdict="ratt-ok"; } else oralS.verdict="ratt-ko"; }
    save();
  }
  clearTimers(); render(); window.scrollTo({top:0});
}


// ---------- Rendu ----------
const TABS = [["home","Aujourd'hui"],["parcours","Parcours"],["train","Entraînement"],["candidature","Candidature"],["profil","Profil"]];
const PARENT = {quiz:"parcours", lesson:"parcours", track:"parcours", ecrit:"train", oral:"train", conditions:"home", rattrapages:"home", semaine:"home", choixecrit:"home", planning:"profil", tuto:"home", sanction:"home", interruption:"home", urgence:"home"};
function renderNav(){
  const n = $("#nav"); n.replaceChildren();
  const parent = PARENT[view] || view;
  for (const [k,l] of TABS) n.append(h("button",{type:"button","aria-current":parent===k?"page":null,onclick:()=>go(k)}, h("span",{class:"ic ic-"+k,"aria-hidden":"true"}), h("span",null,l)));
  $("#chipLevel").textContent = state.xp + " XP";
  $("#chipStreak").textContent = "Indice " + indice().total;
}
function render(){
  if (document.body.classList.contains("locked")) return;
  if (state.blockUntil > Date.now() && view !== "sanction") view = "sanction";
  else if (state.interrupt && view !== "interruption") view = "interruption";
  document.body.classList.toggle("blocked", (view==="sanction" && state.blockUntil > Date.now()) || view==="interruption");
  renderNav();
  const v = $("#view"); v.replaceChildren();
  const lo = $("#logoutBtn"); if (lo) lo.onclick = logout;
  if (canGoBack() && !(view==="quiz" && quiz && !quiz.done) && !(view==="ecrit" && ecrit && ecrit.phase==="write")) v.append(h("button",{class:"backbtn",type:"button",onclick:backClick}, "← Retour"));
  const fn = {home:vHome, parcours:vParcours, track:vTrack, lesson:vLesson, quiz:vQuiz, train:vTrain, ecrit:vEcrit, oral:vOral, conditions:vConditions,
    candidature:vCandidature, profil:vProfil, planning:vPlanning, rattrapages:vRattrapages, semaine:vSemaine, choixecrit:vChoixEcrit, tuto:vTuto, sanction:vSanction, interruption:vInterruption, urgence:vUrgence}[view] || vHome;
  v.append(fn());
}
const card = (cls, ...kids)=>h("section",{class:"card "+(cls||"")}, ...kids);
const kpi = (l, v, sub)=>h("div",{class:"kpi"}, h("span",{class:"lbl"},l), h("b",null,v), sub ? h("span",{class:"sub"},sub) : null);
function blocks(arr){
  const out = []; let ul = null;
  for (const raw of (arr||[])){
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
const bar = (pct, warn)=>h("div",{class:"bar"+(warn?" o":"")}, h("i",{style:"width:"+Math.max(0,Math.min(100,pct))+"%"}));
const trackOrder = ()=>{ const seen = []; for (const d of [1,2,3,4,5,6,0]) for (const s of state.planning.filter(x=>x.jour===d).sort((a,b)=>toMin(a.debut)-toMin(b.debut))) if (TRACKS[s.k] && !seen.includes(s.k)) seen.push(s.k); for (const t of PROGRAMME) if (!seen.includes(t.k)) seen.push(t.k); return seen; };

// ---------- Démarrer une séance ----------
function runSlot(s){
  if (TRACKS[s.k]) return openTrackSession(s.k);
  if (s.k === "blanc") return startBlanc();
  if (s.k === "revision") return go("rattrapages");
  if (s.k === "ecrit") return go("choixecrit");
}
function openTrackSession(k, ratt){
  const cur = currentLevel(k);
  if (cur && levelStatus(cur) === "cur" && !ratt) return openLevel(cur.id);
  return startRevision(k, ratt);
}
function startRevision(k, ratt){
  const t = TRACKS[k];
  const pool = trackPool(k, !!ratt);
  if (pool.length < 5){
    if (t.ecrit){ const s = pickSujet(t.ecrit); if (s) return startEcrit(s, {dur: ({ct:3600, ns:3600}[t.ecrit] || 1800), ratt}); }
    if (k === "oral") return startOral({ratt});
    toast("Pas encore assez de questions validées dans cette matière : faites d'abord le niveau en cours."); return openLevel(currentLevel(k).id);
  }
  const n = Math.min(15, pool.length);
  conditions({title: (ratt ? "Rattrapage · " : "Révision · ") + t.court, desc: n + " questions des niveaux déjà travaillés, " + n + " minutes, barème officiel." + (ratt ? " Note minimale pour récupérer les points : 12/20." : ""),
    start: ()=>startQCM({items: pick(pool, n), title:(ratt ? "Rattrapage · " : "Révision · ") + t.court, kind: ratt ? "ratt" : "revision", ratt, track:k, chrono: n*60})});
}
function startBlanc(ratt){
  const pool = ["fr","ang","cg","log"].flatMap(k=>trackPool(k, true));
  if (pool.length < 30){ toast("La présélection blanche s'ouvre quand 30 questions de présélection sont débloquées (" + pool.length + " aujourd'hui). Avancez dans le parcours."); return; }
  const by = (k)=>pick(pool.filter(q=>trackOfQ(q)===k), k==="fr"||k==="cg" ? 12 : 11);
  const items = shuffle([].concat(by("fr"), by("cg"), by("ang"), by("log"))).slice(0,45);
  conditions({title:"Présélection blanche", desc: items.length + " questions mêlant français, culture générale, anglais et logique, en " + items.length + " minutes, barème officiel (+1/0/−1, logique +2/0/−2).",
    start: ()=>startQCM({items, title:"Présélection blanche", kind:"blanc", ratt, chrono: items.length*60})});
}
function startErreurs(){
  const items = allQ().filter(q=>state.wrong[q.id]>0);
  if (items.length < 5){ toast("Moins de 5 erreurs à revoir : faites plutôt une révision de matière."); return; }
  const n = Math.min(20, items.length);
  conditions({title:"Révision des erreurs", desc: n + " questions que vous avez déjà ratées, en " + n + " minutes, barème officiel.",
    start: ()=>startQCM({items: pick(items, n), title:"Révision des erreurs", kind:"erreurs", chrono:n*60})});
}

// ---------- Aujourd'hui ----------
function vHome(){
  const td = today(), slots = slotsOn(td), m = nowMin();
  const ind = indice(), due = dueMissed(), nv = niveau(state.xp);
  const hr = new Date().getHours();
  const dp = dossierProgress();
  const p = state.profile;
  return h("div",{class:"stack"},
    h("div",{class:"hello"}, h("button",{class:"avbtn",type:"button","aria-label":"Mon profil",onclick:()=>go("profil")}, avatar(52)), h("div",null, h("p",{class:"lbl"}, JOURS[new Date().getDay()] + " " + frDate(td) + " · cycle " + (state.cycle==="CS"?"supérieur":"moyen supérieur")), h("h1",null, (hr<18?"Bonjour ":"Bonsoir ") + (p.prenoms || "") ))),
    card("feature stack",
      h("div",{class:"row spread"}, h("div",null, h("p",{class:"lbl"},"Indice de préparation"), h("b",{class:"big-n"}, ind.total + " / 100")), h("div",{class:"right"}, h("p",{class:"lbl"},"Grade"), h("b",null, nv.cur[1]))),
      bar(ind.total, ind.total<40),
      h("p",{class:"muted small"}, "Programme " + ind.parts.couverture + "/40 · qualité " + ind.parts.maitrise + "/20 · assiduité " + ind.parts.assiduite + "/25 · dossier " + ind.parts.dossier + "/15. Chaque séance manquée fait baisser l'assiduité et retire des points.")),
    veilleBanner(),
    due.length ? card("warnc stack",
      h("h2",null, due.length + " séance" + (due.length>1?"s":"") + " à rattraper"),
      h("p",null, due.reduce((a,x)=>a+x.pts,0) + " XP perdus, récupérables. Prochaine échéance : " + frDate(due[0].limit) + "."),
      h("button",{class:"btn accent",type:"button",onclick:()=>go("rattrapages")},"Voir mes rattrapages")) : null,
    card("stack",
      h("div",{class:"row spread"}, h("h2",null,"Emploi du temps du jour"), h("button",{class:"link",type:"button",onclick:()=>go("semaine")},"Ma semaine")),
      slots.length ? h("div",{class:"list"}, slots.map(s=>{
        const done = slotDone(td, s), cur = m>=toMin(s.debut) && m<toMin(s.fin), past = m>=toMin(s.fin);
        const st = done ? ["Fait","ok"] : cur ? ["En cours","cur"] : past ? ["À faire avant minuit","late"] : ["À venir",""];
        return h("div",{class:"slotrow"+(cur?" now":"")},
          h("div",{class:"tcol"}, h("time",null, s.debut), h("small",null, s.fin)),
          h("div",{class:"grow"}, h("b",null, slotLabel(s)), h("span",{class:"muted small block"}, slotDetail(s)), h("span",{class:"pill "+st[1]}, st[0])),
          done ? null : h("button",{class: "btn small " + (cur||past ? "primary" : ""),type:"button",onclick:()=>runSlot(s)}, cur ? "Commencer" : "Faire"));
      })) : h("p",{class:"muted"},"Aucune séance prévue aujourd'hui. Vous pouvez avancer dans le parcours ou faire vos rattrapages."),
      h("p",{class:"note"},"Une séance est validée quand l'évaluation (ou la copie) de sa matière est terminée le jour même. Une séance non faite à minuit retire 2 XP par minute prévue ; elle se rattrape dans les 14 jours.")),
    card("stack",
      h("div",{class:"row spread"}, h("h2",null,"Mon dossier de candidature"), h("b",null, dp.ok + "/" + dp.total)),
      bar(dp.pct, dp.pct<50),
      dp.next ? h("p",null, h("span",{class:"muted"},"Prochaine pièce : "), dp.next.t) : h("p",null,"Toutes les pièces sont prêtes."),
      h("button",{class:"btn",type:"button",onclick:()=>go("candidature")},"Ouvrir mon dossier")),
    newsCard(),
    installCard()
  );
}
function newsCard(){
  if (CONTENT.offline && !CONTENT.loaded) return card("soft", h("p",{class:"small"},"Hors connexion : vous travaillez avec les contenus déjà téléchargés. Les nouveautés arriveront à la prochaine connexion."));
  if (!CONTENT.loaded) return null;
  const t = CONTENT.today, a = CONTENT.added;
  return card("stack tight",
    h("div",{class:"row spread"}, h("h2",null,"Nouveautés"), h("span",{class:"muted small"}, CONTENT.updated ? "mis à jour le " + frDate(CONTENT.updated) : "")),
    h("p",{class:"small"}, (t.q||t.l||t.s) ? ("Cette nuit : " + t.l + " leçon(s), " + t.q + " question(s), " + t.s + " sujet(s), rangés dans le parcours.") : "Pas de nouveauté publiée cette nuit."),
    h("p",{class:"muted small"}, "Au total : " + a.l + " leçons, " + a.q + " questions et " + a.s + " sujets ajoutés, chacun vérifié (source citée, règle ou calcul contrôlé)."));
}
function vSemaine(){
  const days = [1,2,3,4,5,6,0];
  const start = (()=>{ const d = new Date(); const wd = d.getDay(); const diff = wd===0 ? -6 : 1-wd; d.setDate(d.getDate()+diff); return ymd(d); })();
  return h("div",{class:"stack"},
    h("div",null, h("p",{class:"lbl"},"Emploi du temps"), h("h1",null,"Ma semaine")),
    h("div",{class:"week"}, days.map((wd,i)=>{
      const date = addDays(start, i); const list = slotsOn(date);
      return h("div",{class:"day"}, h("b",null, JOURS[wd], h("small",{class:"muted block"}, frDate(date))),
        h("div",{class:"stack tight"}, list.length ? list.map(s=>{
          const m = state.missed.find(x=>x.id===date+"_"+s.id);
          const st = slotDone(date,s) ? "Fait" : m ? (m.st==="ok" ? "Rattrapé" : m.st==="perdu" ? "Perdu" : "Manqué") : (date < today() ? "—" : "");
          return h("div",{class:"slot"+(date===today()?" cur":"")}, h("time",null, s.debut + "–" + s.fin), h("span",null, slotLabel(s)), st ? h("span",{class:"muted small"}, st) : null);
        }) : h("span",{class:"muted small"},"Repos")));
    })),
    h("button",{class:"btn",type:"button",onclick:()=>go("planning")},"Modifier mes horaires")
  );
}

// ---------- Rattrapages ----------
function vRattrapages(){
  const due = dueMissed(), old = state.missed.filter(m=>m.st!=="due").slice(-10).reverse();
  return h("div",{class:"stack"},
    h("div",null, h("p",{class:"lbl"},"Séances manquées"), h("h1",null,"Rattrapages")),
    h("p",{class:"muted"},"Chaque rattrapage est une épreuve en conditions d'examen dans la matière de la séance manquée. Réussi (12/20 au QCM, 10/20 à l'écrit ou à l'oral), il rend les points perdus. Délai : 14 jours."),
    due.length ? h("div",{class:"list"}, due.map(m=>h("div",{class:"item"},
      h("span",{class:"grow"}, h("b",null, kindLabel(m.k)), h("span",{class:"muted small block"}, JOURS[parseYmd(m.date).getDay()] + " " + frDate(m.date) + " · " + m.debut + "–" + m.fin + " · −" + m.pts + " XP · avant le " + frDate(m.limit))),
      h("button",{class:"btn small primary",type:"button",onclick:()=>startRattrapage(m)},"Rattraper")))) : card("soft", h("p",null,"Aucune séance à rattraper. Continuez ainsi.")),
    card("stack", h("h2",null,"Révision des erreurs"), h("p",{class:"muted small"}, Object.keys(state.wrong).length + " question(s) ratée(s) à retravailler."), h("button",{class:"btn",type:"button",onclick:startErreurs},"Lancer la révision des erreurs")),
    old.length ? card("stack", h("h2",null,"Historique"), h("div",{class:"list"}, old.map(m=>h("div",{class:"item"}, h("span",{class:"grow"}, kindLabel(m.k) + " · " + frDate(m.date)), h("span",{class:"meta"}, m.st==="ok" ? "rattrapé (+" + m.pts + ")" : "perdu (−" + m.pts + ")"))))) : null
  );
}
function startRattrapage(m){
  if (TRACKS[m.k]) return startRevision(m.k, m.id);
  if (m.k === "blanc") return startBlanc(m.id);
  if (m.k === "oral") return startOral({ratt:m.id});
  if (m.k === "ecrit"){ const e = ["sog","pes","ct","dc"].find(x=>isValid(METHOD_LEVEL[x])) || "sog"; const s = pickSujet(e); if (s) return startEcrit(s, {dur:3600, ratt:m.id}); }
  if (m.k === "revision"){
    const items = allQ().filter(q=>state.wrong[q.id]>0);
    const pool = items.length >= 10 ? items : ["fr","ang","cg","log"].flatMap(k=>trackPool(k,true));
    const n = Math.min(15, pool.length);
    if (n < 5){ toast("Pas encore assez de questions pour ce rattrapage : avancez d'abord dans le parcours."); return; }
    return conditions({title:"Rattrapage · révision", desc:n + " questions, " + n + " minutes, barème officiel. Note minimale : 12/20.", start: ()=>startQCM({items:pick(pool,n), title:"Rattrapage · révision", kind:"ratt", ratt:m.id, chrono:n*60})});
  }
}

// ---------- Parcours ----------
function vParcours(){
  return h("div",{class:"stack"},
    h("div",null, h("p",{class:"lbl"},"Matières dans l'ordre de l'emploi du temps"), h("h1",null,"Mon parcours")),
    h("p",{class:"muted"},"Chaque matière se franchit niveau par niveau : leçon (technique, cours, à retenir), puis évaluation en conditions d'examen. Il faut 14/20 pour déverrouiller le niveau suivant ; dans les matières d'écrit, une copie notée au moins 10/20 est aussi exigée."),
    trackOrder().map(k=>{
      const t = TRACKS[k], p = trackProgress(k), cur = currentLevel(k);
      const st = cur ? levelStatus(cur) : "done";
      const skip = (state.cycle==="CMS" && k==="ns") || (state.cycle==="CS" && (k==="ct"||k==="dc"));
      return h("button",{class:"card trackcard"+(skip?" dim":""),type:"button",onclick:()=>{ trackView = k; go("track"); }},
        h("div",{class:"row spread"}, h("span",{class:"lbl"}, t.phase + (skip ? " · hors de votre cycle" : "")), h("b",null, p.n + "/" + p.total)),
        h("h2",null, t.label),
        bar(p.pct),
        h("p",{class:"small"}, cur ? (st==="prep" ? "Niveau " + (cur.idx+1) + " en préparation (publication de nuit)" : "Niveau " + (cur.idx+1) + " : " + cur.t) : "Matière terminée"));
    })
  );
}
function vTrack(){
  const t = TRACKS[trackView]; if (!t) return vParcours();
  const p = trackProgress(t.k);
  return h("div",{class:"stack"},
    h("div",null, h("p",{class:"lbl"}, t.phase + " · " + p.n + "/" + p.total + " niveaux"), h("h1",{class:"h-l"}, t.label)),
    bar(p.pct),
    h("ol",{class:"levels"}, t.levels.map(L=>{
      const lv = LVMAP[L[0]], st = levelStatus(lv), s = lvState(lv.id);
      const icon = {ok:"✓", cur:"▶", prep:"…", lock:"🔒"}[st];
      const cls = st==="lock" ? "lk" : st;
      const meta = st==="ok" ? fr1(s.best) + "/20" : st==="cur" ? (s.qcm ? "écrit à rendre" : s.tries ? s.tries + " essai(s)" : "à faire") : st==="prep" ? "en préparation" : "verrouillé";
      return h("li",null, h("button",{class:"lvl "+cls,type:"button",onclick:()=>{
          if (st==="lock") return toast("Verrouillé : validez d'abord le niveau précédent.");
          if (st==="prep") return toast("Cette leçon sera publiée par la production de nuit. En attendant, faites une révision de la matière.");
          openLevel(lv.id);
        }}, h("span",{class:"lvi","aria-hidden":"true"}, icon), h("span",{class:"grow"}, h("span",{class:"muted small block"},"Niveau " + (lv.idx+1)), lv.t), h("span",{class:"meta"}, meta)));
    })),
    trackPool(t.k,false).length >= 5 ? h("button",{class:"btn",type:"button",onclick:()=>startRevision(t.k)},"Révision de la matière (niveaux validés)") : null,
    h("button",{class:"btn ghost",type:"button",onclick:()=>go("parcours")},"Toutes les matières")
  );
}

// ---------- Leçon d'un niveau ----------
function openLevel(id){
  const lv = LVMAP[id]; const s = lvState(id); const review = isValid(id);
  const step = review ? 0 : (s.read==="retenir" ? 2 : s.read===true ? 3 : 0);
  lesson = {id, review, step, maxStep: step, stepStart: Date.now()};
  go("lesson");
}
function minRead(arr, f){ const w = words((arr||[]).join(" ")); return Math.max(f==="r"?15:20, Math.min(f==="r"?90:240, Math.round(w*(f==="r"?0.25:0.2)))); }
function vLesson(){
  const lv = LVMAP[lesson.id]; const l = lessonOf(lv);
  if (!l) return vTrack();
  const s = lvState(lv.id);
  const steps = [["Technique", l.tech, "t"], ["Cours", l.fond, "t"], ["À retenir", l.retenir, "r"], ["Évaluation", null]];
  const st = lesson.step;
  const dots = h("ol",{class:"steps"}, steps.map((x,i)=>h("li",{class: i===st?"cur": i<st?"done":""}, x[0])));
  let body;
  if (st < 2) body = card("stack read", blocks(steps[st][1]),
    st===1 && Array.isArray(l.sources) && l.sources.length ? h("div",{class:"srcs"}, h("p",{class:"lbl"},"Sources"), h("ul",{class:"pts"}, l.sources.map(x=>h("li",null, h("a",{href:x.u,target:"_blank",rel:"noopener"}, x.t||x.u))))) : null);
  else if (st === 2) body = card("stack read", h("ul",{class:"pts big"}, (l.retenir||[]).map(r=>h("li",null,r))));
  else body = evalCard(lv, l, s);
  // durée minimale de lecture (sauf en révision d'un niveau validé)
  let nextBtn = null;
  if (st < 3){
    const need = (lesson.review || st < (lesson.maxStep||0)) ? 0 : minRead(steps[st][1], steps[st][2]);
    const left = ()=> Math.ceil(need - (Date.now()-lesson.stepStart)/1000);
    nextBtn = h("button",{class:"btn primary",type:"button",id:"nextStep",onclick:()=>{
      if (left() > 0) return toast("Lisez encore " + left() + " s avant de continuer.");
      lesson.maxStep = Math.max(lesson.maxStep||0, st+1); lesson.step++; lesson.stepStart = Date.now();
      if (lesson.step === 3 && !lesson.review){ const x = state.lv[lv.id] || (state.lv[lv.id] = {}); x.read = true; save(); }
      render(); window.scrollTo({top:0});
    }}, "Suivant");
    if (left() > 0){
      const upd = ()=>{ const b = document.getElementById("nextStep"); if (!b) return; const r = left(); b.textContent = r > 0 ? "Suivant (" + r + " s)" : "Suivant"; b.classList.toggle("wait", r>0); };
      timers.push(setInterval(upd, 1000)); setTimeout(upd, 0);
    }
  }
  return h("div",{class:"stack"},
    h("div",null,h("p",{class:"lbl"}, TRACKS[lv.track].court + " · niveau " + (lv.idx+1) + (lesson.review ? " · révision" : "")),h("h1",{class:"h-l"},l.titre || lv.t)),
    dots, body,
    h("div",{class:"row spread"},
      st>0 && (lesson.review || st<3) ? h("button",{class:"btn ghost",type:"button",onclick:()=>{lesson.maxStep = Math.max(lesson.maxStep||0, st); lesson.step--; render(); window.scrollTo({top:0});}},"Précédent") : h("button",{class:"btn ghost",type:"button",onclick:()=>{ trackView = lv.track; go("track"); }},"Niveaux"),
      nextBtn)
  );
}
function evalCard(lv, l, s){
  if (lesson.review) return card("stack", h("p",null,"Niveau validé avec " + fr1(s.best||0) + "/20 le " + frDate(s.ok) + "."), h("p",{class:"muted small"},"Pour vous réentraîner sur cette matière, utilisez la révision de matière (Parcours) ou l'Entraînement."));
  const pool = poolOf(lv);
  const ec = ecritNeeded(lv);
  const oralLevel = lv.track === "oral";
  if (!s.qcm && pool.length >= 5){
    const n = Math.min(12, Math.max(8, (l.exo && l.exo.n) || 10), pool.length);
    const chrono = n * (lv.track==="log" ? 90 : 60);
    return card("stack",
      h("h2",null,"Évaluation du niveau"),
      h("p",null, n + " questions, " + Math.round(chrono/60) + " minutes, barème officiel (mauvaise réponse : −1" + (lv.track==="log" ? ", −2 en logique" : "") + "). Il faut ", h("b",null,"14/20"), " pour valider" + (ec ? ", puis une copie écrite." : oralLevel ? ", puis une simulation d'oral." : ".")),
      s.tries ? h("p",{class:"muted small"}, "Essais : " + s.tries + " · dernière note " + fr1(s.last||0) + "/20. Chaque essai tire des questions différentes.") : null,
      h("button",{class:"btn primary",type:"button",onclick:()=>conditions({title:"Évaluation · " + lv.t, desc: n + " questions en " + Math.round(chrono/60) + " minutes. Note minimale : 14/20.", start: ()=>startQCM({items:pick(pool,n), title:lv.t, kind:"level", lv:lv.id, chrono})})},"Passer l'évaluation"));
  }
  if (oralLevel) return card("stack", h("h2",null,"Simulation d'oral"), h("p",null,"Deux questions de jury en conditions réelles. Note minimale : 10/20."), h("button",{class:"btn primary",type:"button",onclick:()=>startOral({lv:lv.id})},"Passer l'oral"));
  if (ec){
    const sj = pickSujet(ec.e);
    return card("stack", h("h2",null, s.qcm ? "QCM réussi : place à l'écrit" : "Épreuve écrite du niveau"),
      h("p",null, ec.full ? "Copie complète en " + (ec.dur/3600) + " h, comme au concours." : "Introduction et plan détaillé en " + Math.round(ec.dur/60) + " minutes, sur un sujet du concours ou d'entraînement.", " Note minimale : ", h("b",null,"10/20"), " (auto-évaluation honnête avec la grille du jury)."),
      sj ? h("button",{class:"btn primary",type:"button",onclick:()=>startEcrit(sj, {dur:ec.dur, lv:lv.id})},"Composer") : h("p",{class:"muted"},"Aucun sujet disponible pour cette épreuve."));
  }
  // pas assez de questions et pas d'écrit : validation à la lecture complète
  return card("stack", h("p",null,"Ce niveau n'a pas encore d'évaluation publiée."), h("button",{class:"btn primary",type:"button",onclick:()=>{ validateLevel(lv.id, 14); creditSeance(lv.track); trackView = lv.track; go("track"); }},"Valider la lecture"));
}

// ---------- Vue QCM ----------
function vQuiz(){
  if (!quiz) return vParcours();
  if (quiz.done) return vQuizResult();
  const total = quiz.items.length, it = quiz.items[quiz.i];
  const exam = quiz.mode === "exam";
  const answered = it.pick != null;
  const head = h("div",{class:"qhead"},
    h("div",null,h("p",{class:"lbl"},quiz.title),h("h2",null,"Question " + (quiz.i+1) + " / " + total)),
    quiz.chrono ? h("span",{class:"timer",id:"qtimer"}, fmtTime(quiz.chrono - (Date.now()-quiz.start)/1000)) : null);
  const grid = h("div",{class:"qgrid"}, quiz.items.map((x,i)=>h("button",{type:"button",class:(i===quiz.i?"cur ":"") + (x.pick==null ? "" : x.pick===-1 ? "skip" : (exam ? "ans" : (x.pick===x.a ? "ok" : "ko"))),"aria-label":"Question "+(i+1),onclick:()=>{ if (!exam && quiz.items[quiz.i].pick==null) return; quiz.i=i; render(); }}, String(i+1))));
  const opts = h("div",{class:"opts"}, it.o.map((o,i)=>{
    let cls = "opt";
    if (exam){ if (it.pick===i) cls += " sel"; }
    else if (answered){ if (i===it.a) cls+=" ok"; else if (i===it.pick) cls+=" ko"; }
    return h("button",{class:cls,type:"button",disabled: !exam && answered,onclick:()=>{ if (exam){ it.pick = (it.pick===i ? null : i); render(); } else { it.pick = i; render(); } }}, h("span",{class:"k"},"abcd"[i]+")"), h("span",null,o));
  }));
  const confirmBtn = h("button",{class:"btn primary",type:"button",onclick:(ev)=>{ if (!quiz.confirm){ quiz.confirm = true; ev.target.textContent = "Confirmer la remise (" + quiz.items.filter(x=>x.pick==null).length + " sans réponse)"; return; } finishQCM(false); }}, "Remettre ma copie");
  return h("div",{class:"stack"},
    head, grid,
    card("stack",
      h("div",{class:"row"}, h("span",{class:"tag"}, kindLabel(trackOfQ(it))), h("span",{class:"muted small"}, "+" + weight(it) + " / 0 / −" + weight(it))),
      h("p",{class:"question"}, it.q),
      opts,
      exam ? h("button",{class:"btn ghost"+(it.pick===-1?" on":""),type:"button",onclick:()=>{ it.pick = it.pick===-1 ? null : -1; render(); }}, it.pick===-1 ? "Sans réponse (0 point) ✓" : "Je ne réponds pas (0 point)")
           : (!answered ? h("button",{class:"btn ghost",type:"button",onclick:()=>{ it.pick=-1; render(); }},"Je ne réponds pas (0 point)") : null),
      !exam && answered ? h("div",{class:"expl"}, h("b",null, it.pick===-1 ? "Sans réponse. " : it.pick===it.a ? "Exact. " : "Inexact. "), it.e || "",
        it.ref && it.ref.u ? h("p",{class:"src"}, "Source : ", h("a",{href:it.ref.u,target:"_blank",rel:"noopener"}, it.ref.t || it.ref.u)) : null) : null),
    h("div",{class:"row spread"},
      h("button",{class:"btn ghost",type:"button",disabled:quiz.i===0,onclick:()=>{ quiz.i--; render(); }},"Précédente"),
      quiz.i < total-1 ? h("button",{class:"btn",type:"button",disabled:!exam && !answered,onclick:()=>{ quiz.i++; render(); window.scrollTo({top:0}); }},"Suivante") : (exam ? confirmBtn : h("button",{class:"btn primary",type:"button",disabled:!answered,onclick:()=>finishQCM(false)},"Voir mon résultat"))),
    exam && quiz.i < total-1 ? confirmBtn : null,
    exam ? h("button",{class:"btn ghost small",type:"button",onclick:(ev)=>{ if (!quiz.ab){ quiz.ab = true; ev.target.textContent = "Confirmer l'abandon (copie blanche, note 0)"; return; } quiz.items.forEach(x=>x.pick=null); finishQCM(false); }},"Abandonner l'épreuve") : null,
    exam ? urgenceButton() : null
  );
}
function vQuizResult(){
  const r = quiz.res, note = r.note;
  const pass = quiz.kind==="ratt" ? 12 : quiz.kind==="blanc" ? 10 : PASS;
  const cls = note>=pass ? "admis" : note>=10 ? "admissible" : "ajourne";
  const word = quiz.kind==="level" ? (quiz.verdict==="qcm" ? "QCM RÉUSSI" : note>=PASS ? "VALIDÉ" : "NON VALIDÉ") : quiz.kind==="ratt" ? (note>=12 ? "RATTRAPÉ" : "ÉCHEC") : (note>=14 ? "ADMIS" : note>=10 ? "ADMISSIBLE" : "AJOURNÉ");
  const lv = quiz.lv ? LVMAP[quiz.lv] : null;
  const msg = {
    valid: "Niveau validé. Le niveau suivant est déverrouillé.",
    qcm: lv && lv.track==="oral" ? "QCM réussi. Pour valider le niveau, passez maintenant la simulation d'oral." : "QCM réussi. Pour valider le niveau, il reste la copie écrite.",
    fail: "Note insuffisante (14/20 exigés). Relisez « À retenir » puis repassez l'évaluation : les questions changeront.",
    "ratt-ok": "Rattrapage réussi : les points perdus vous sont rendus.",
    "ratt-ko": "Rattrapage échoué : vous pouvez réessayer avant la date limite."
  }[quiz.verdict];
  return h("div",{class:"stack"},
    card("result",
      h("p",{class:"lbl"}, quiz.title + (quiz.timeout ? " · temps écoulé" : "")),
      h("p",{class:"note-big"}, fr1(note) + " / 20"),
      h("p",{class:"muted"}, r.ok + " bonne(s) réponse(s), " + r.ko + " erreur(s), " + r.sk + " sans réponse · " + r.pts + " pt sur " + r.max),
      h("div",{class:"stampwrap"}, h("span",{class:"stamp " + cls}, word))),
    msg ? h("p",{class:"box"+(note>=pass?"":" warn")}, msg) : null,
    card("stack", h("h2",null,"Correction"),
      quiz.items.map((x,i)=>h("div",{class:"miss"},
        h("p",{class:"q-s"}, (i+1) + ". " + x.q),
        h("p",null, x.pick===x.a ? h("span",{class:"good"},"✓ ") : x.pick==null||x.pick===-1 ? h("span",{class:"muted"},"— ") : h("span",{class:"bad"},"✗ "), "Réponse : ", h("b",null, x.o[x.a]), x.pick!=null && x.pick>=0 && x.pick!==x.a ? h("span",{class:"muted"}, " (vous : " + x.o[x.pick] + ")") : null),
        x.e ? h("p",{class:"muted small"}, x.e) : null,
        x.ref && x.ref.u ? h("p",{class:"src"}, "Source : ", h("a",{href:x.ref.u,target:"_blank",rel:"noopener"}, x.ref.t || x.ref.u)) : null,
        reportUrl(x) ? h("p",{class:"src"}, h("a",{href:reportUrl(x),target:"_blank",rel:"noopener"},"Signaler une erreur")) : null))),
    h("div",{class:"row"},
      quiz.verdict==="qcm" && lv ? h("button",{class:"btn primary",type:"button",onclick:()=>openLevel(lv.id)}, lv.track==="oral" ? "Passer l'oral" : "Passer à l'écrit") : null,
      quiz.verdict==="fail" && lv ? h("button",{class:"btn primary",type:"button",onclick:()=>openLevel(lv.id)},"Relire « À retenir »") : null,
      quiz.verdict==="valid" && lv && currentLevel(lv.track) && levelStatus(currentLevel(lv.track))==="cur" ? h("button",{class:"btn primary",type:"button",onclick:()=>openLevel(currentLevel(lv.track).id)},"Niveau suivant") : null,
      h("button",{class:"btn",type:"button",onclick:()=>go("home")},"Aujourd'hui"))
  );
}

// ---------- Vue écrit ----------
function vEcrit(){
  if (!ecrit) return vTrain();
  const s = ecrit.s, E = EPREUVES[s.e];
  let target = null; const mt = s.t.match(/en (\d+) mots/); if (mt) target = Number(mt[1]);
  let support = null;
  if (s.texte) support = h("details",{class:"card",open:true}, h("summary",null,"Texte à résumer (" + words(TEXTE_CONTRACTION) + " mots, texte original d'entraînement)"), h("div",{class:"reading"}, TEXTE_CONTRACTION));
  if (s.dossier) support = h("div",{class:"stack tight"}, h("p",{class:"box"}, DOSSIER_SYNTHESE.consigne), DOSSIER_SYNTHESE.docs.map(d=>h("details",{class:"card"}, h("summary",null,d.t), h("p",{class:"para"}, d.c))));
  const headTitle = h("div",null,h("p",{class:"lbl"}, E.label + (ecrit.lv ? " · niveau " + (LVMAP[ecrit.lv].idx+1) : ecrit.ratt ? " · rattrapage" : "")), h("h2",null, s.src==="officiel" ? "Sujet officiel · " + s.ref : "Sujet d'entraînement"));
  if (ecrit.phase === "write"){
    const counter = h("span",{class:"muted"});
    const ta = h("textarea",{class:"copy",id:"copy","aria-label":"Votre copie",placeholder:"Rédigez ici. Le texte est conservé tant que l'épreuve dure.", spellcheck:"false", autocomplete:"off", autocorrect:"off"});
    ta.value = ecrit.text;
    const upd = ()=>{ const w = words(ta.value); if (target){ counter.textContent = w + " mots · fourchette " + Math.round(target*0.9) + " à " + Math.round(target*1.1); counter.className = (w>=target*0.9 && w<=target*1.1) ? "good" : "muted"; } else counter.textContent = w + " mots"; };
    ta.addEventListener("input",()=>{ ecrit.text = ta.value; upd(); }); upd();
    const tick = ()=>{ if (!ecrit || ecrit.phase!=="write") return; const left = ecrit.dur-(Date.now()-ecrit.start)/1000; const t=document.getElementById("etimer"); if(t){ t.textContent = fmtTime(left); t.classList.toggle("low",left<600);} if (left<=0){ endWriting(true); } };
    timers.push(setInterval(tick,1000)); setTimeout(tick,0);
    return h("div",{class:"stack"},
      h("div",{class:"qhead"}, headTitle, h("span",{class:"timer",id:"etimer"})),
      h("p",{class:"sujet"}, s.t), support, ta, counter,
      h("button",{class:"btn primary",type:"button",onclick:(ev)=>{ if (words(ecrit.text) < 40) return toast("Rédigez au moins votre introduction et votre plan avant de remettre."); if (!ecrit.cf){ ecrit.cf = true; ev.target.textContent = "Confirmer la remise de la copie"; return; } endWriting(false); }},"Remettre ma copie"),
      h("button",{class:"btn ghost small",type:"button",onclick:(ev)=>{ if (!ecrit.ab){ ecrit.ab = true; ev.target.textContent = "Confirmer l'abandon (copie non notée)"; return; } examFinish(); ecrit = null; go("home"); }},"Abandonner l'épreuve"),
      urgenceButton());
  }
  if (ecrit.phase === "grade"){
    const grille = h("div",{class:"stack tight"}, E.grille.map((g,i)=>h("label",{class:"chk"}, h("input",{type:"checkbox",id:"g"+i,checked:ecrit.checks[i]||null,onchange:(ev)=>{ ecrit.checks[i]=ev.target.checked; }}), h("span",null,g))));
    return h("div",{class:"stack"},
      h("div",{class:"qhead"}, headTitle, h("span",{class:"pill"}, ecrit.timeout ? "Temps écoulé" : "Copie remise")),
      h("p",{class:"sujet"}, s.t),
      card("stack read", h("h3",null,"Votre copie (" + words(ecrit.text) + " mots)"), h("div",{class:"reading"}, ecrit.text || "(vide)")),
      card("stack", h("h3",null,"Auto-évaluation"), h("p",{class:"muted small"},"Cochez honnêtement ce que votre copie réussit vraiment. Le plan corrigé s'affiche ensuite."), grille,
        h("button",{class:"btn primary",type:"button",onclick:gradeEcrit},"Valider ma note")));
  }
  const msg = {valid:"Copie suffisante : niveau validé.", fail:"Copie insuffisante (10/20 exigés) : recommencez l'exercice sur un autre sujet.", "ratt-ok":"Rattrapage réussi : points récupérés.", "ratt-ko":"Rattrapage échoué : réessayez avant la date limite."}[ecrit.verdict];
  return h("div",{class:"stack"},
    card("result", h("p",{class:"lbl"}, E.label), h("p",{class:"note-big"}, fr1(ecrit.note) + " / 20"), h("p",{class:"muted"}, words(ecrit.text) + " mots · " + fmtTime(ecrit.realDur))),
    msg ? h("p",{class:"box"+(ecrit.note>=10?"":" warn")}, msg) : null,
    s.plan && s.plan.length ? card("stack read", h("h3",null,"Plan proposé (corrigé indicatif)"), blocks(s.plan.map(p=>"- "+p))) : card("soft", h("p",null,"Pas de plan corrigé pour ce sujet.")),
    h("div",{class:"row"},
      ecrit.verdict==="fail" && ecrit.lv ? h("button",{class:"btn primary",type:"button",onclick:()=>openLevel(ecrit.lv)},"Recommencer l'écrit") : null,
      ecrit.verdict==="valid" && ecrit.lv && currentLevel(LVMAP[ecrit.lv].track) ? h("button",{class:"btn primary",type:"button",onclick:()=>openLevel(currentLevel(LVMAP[ecrit.lv].track).id)},"Niveau suivant") : null,
      h("button",{class:"btn",type:"button",onclick:()=>{ ecrit = null; go("home"); }},"Aujourd'hui"))
  );
}
function vChoixEcrit(){
  const order = state.cycle==="CS" ? ["ns","sog","pes","da"] : ["sog","pes","ct","dc"];
  return h("div",{class:"stack"},
    h("div",null, h("p",{class:"lbl"},"Séance d'écrit en conditions"), h("h1",null,"Choisir l'épreuve")),
    h("p",{class:"muted"},"Copie complète en temps réel, ou en 2 heures si votre créneau est plus court. Une épreuve s'ouvre quand son niveau de méthode est validé dans le parcours."),
    order.map(e=>{
      const E = EPREUVES[e], open = isValid(METHOD_LEVEL[e]), sj = pickSujet(e);
      return card("stack tight"+(open?"":" dim"), h("p",{class:"lbl"}, E.duree/60 + " h · coef. " + E.coef), h("h2",null,E.label),
        open && sj ? h("div",{class:"row"}, h("button",{class:"btn primary small",type:"button",onclick:()=>startEcrit(sj,{dur:E.duree*60})},"Durée réelle (" + E.duree/60 + " h)"), h("button",{class:"btn small",type:"button",onclick:()=>startEcrit(sj,{dur:7200})},"2 heures"))
          : h("p",{class:"muted small"}, "🔒 Validez d'abord « " + LVMAP[METHOD_LEVEL[e]].t + " »."));
    }));
}

// ---------- Vue oral ----------
function vOral(){
  if (!oralS) return vTrain();
  if (oralS.phase === "done"){
    const msg = {valid:"Oral suffisant : niveau validé.", fail:"Oral insuffisant (10/20 exigés) : recommencez.", "ratt-ok":"Rattrapage réussi : points récupérés.", "ratt-ko":"Rattrapage échoué."}[oralS.verdict];
    return h("div",{class:"stack"}, card("result", h("p",{class:"lbl"},"Simulation d'oral"), h("p",{class:"note-big"}, fr1(oralS.note) + " / 20")), msg ? h("p",{class:"box"}, msg) : null,
      card("stack", h("h3",null,"Pistes du jury"), oralS.qs.map(i=>h("div",{class:"miss"}, h("p",{class:"q-s"}, ORAL[i][0]), h("p",{class:"muted small"}, ORAL[i][1])))),
      h("button",{class:"btn",type:"button",onclick:()=>{ oralS = null; go("home"); }},"Aujourd'hui"));
  }
  const [q] = ORAL[oralS.qs[oralS.j]];
  const dur = oralS.phase==="prep" ? 120 : 300;
  const tick = ()=>{ const left = dur-(Date.now()-oralS.start)/1000; const t=document.getElementById("otimer"); if(t){ t.textContent = left>0 ? fmtTime(left) : "Temps écoulé"; t.classList.toggle("low",left<30);} };
  timers.push(setInterval(tick,1000)); setTimeout(tick,0);
  const ta = h("textarea",{id:"oral-notes",rows:"5","aria-label":"Notes",placeholder: oralS.phase==="prep" ? "Vos idées : problématique, deux parties, exemples." : "Répondez à voix haute ; notez ici les points clés."});
  ta.value = oralS.notes; ta.addEventListener("input",()=>{ oralS.notes = ta.value; });
  const ck = oralS.checks[oralS.j];
  return h("div",{class:"stack"},
    h("div",{class:"qhead"}, h("div",null,h("p",{class:"lbl"},"Oral · question " + (oralS.j+1) + " / 2"),h("h1",null,"Face au jury")), h("span",{class:"timer",id:"otimer"})),
    card("stack",
      h("p",{class:"lbl"}, oralS.phase==="prep" ? "Préparation · 2 minutes" : "Réponse à voix haute · 5 minutes"),
      h("p",{class:"question"}, q), ta,
      oralS.phase==="rep" ? h("div",{class:"stack tight"}, h("h3",null,"Grille du jury (cochez ce que vous avez réussi)"), GRILLE_ORAL.map((g,i)=>h("label",{class:"chk"},h("input",{type:"checkbox",checked:ck[i]||null,onchange:(ev)=>{ck[i]=ev.target.checked;}}),h("span",null,g)))) : null,
      h("button",{class:"btn primary",type:"button",onclick:oralNext}, oralS.phase==="prep" ? "Je réponds" : oralS.j===0 ? "Question suivante" : "Terminer l'oral")),
    urgenceButton()
  );
}

// ---------- Entraînement ----------
let annalesOpen = false;
function vTrain(){
  const pre = ["fr","ang","cg","log"].flatMap(k=>trackPool(k,true)).length;
  return h("div",{class:"stack"},
    h("div",null,h("p",{class:"lbl"},"En plus du parcours"),h("h1",null,"Entraînement")),
    card("stack", h("h2",null,"Présélection blanche"), h("p",{class:"muted small"},"45 questions en 45 minutes, barème officiel, conditions d'examen. Questions tirées des niveaux débloqués (" + pre + " disponibles)."),
      h("button",{class:"btn accent",type:"button",disabled:pre<30,onclick:()=>startBlanc()}, pre<30 ? "S'ouvre à 30 questions débloquées" : "Lancer la présélection blanche")),
    card("stack", h("h2",null,"Révision des erreurs"), h("p",{class:"muted small"}, Object.keys(state.wrong).length + " question(s) ratée(s)."), h("button",{class:"btn",type:"button",onclick:startErreurs},"Lancer")),
    card("stack", h("h2",null,"Séries libres (correction immédiate)"), h("p",{class:"muted small"},"Uniquement sur les niveaux déjà validés. Sans enjeu : elles ne valident ni niveau ni séance."),
      h("div",{class:"list"}, PROGRAMME.filter(t=>t.k!=="oral").map(t=>{ const pool = trackPool(t.k,false); return h("button",{class:"item",type:"button",disabled:pool.length<5,onclick:()=>startQCM({items:pick(pool,Math.min(10,pool.length)), title:"Série libre · " + t.court, kind:"train", mode:"train"})}, h("span",{class:"grow"}, t.court), h("span",{class:"meta"}, pool.length<5 ? "🔒" : pool.length + " q.")); }))),
    card("stack", h("h2",null,"Écrits en conditions"), h("p",{class:"muted small"},"Sujets officiels et sujets d'entraînement ; chaque épreuve s'ouvre avec son niveau de méthode."), h("button",{class:"btn",type:"button",onclick:()=>go("choixecrit")},"Choisir une épreuve")),
    card("stack", h("h2",null,"Simulation d'oral"), h("p",{class:"muted small"},"Deux questions de jury, préparation et réponse chronométrées."), h("button",{class:"btn",type:"button",disabled:!isValid("or01"),onclick:()=>startOral()}, isValid("or01") ? "Passer un oral" : "🔒 Après le niveau 1 de l'oral")),
    annalesSection()
  );
}
function annalesSection(){
  const det = h("details",{class:"card",open:annalesOpen||null, ontoggle:(ev)=>{annalesOpen = ev.target.open;}});
  det.append(h("summary",null,"Mes annales : ajouter des questions (" + state.custom.length + ")"));
  const sel = h("select",{id:"anM"}, [["fr","Français"],["cg","Culture générale"],["ang","Anglais"],["log","Logique"],["pes","PES"],["dc","Droit constitutionnel"],["da","Droit administratif"]].map(([k,l])=>h("option",{value:k},l)));
  const q = h("textarea",{id:"anQ",rows:"2",placeholder:"Énoncé de la question"});
  const opts = [0,1,2,3].map(i=>h("input",{type:"text",id:"anO"+i,placeholder:"Proposition " + "abcd"[i]}));
  const ans = h("select",{id:"anA"}, [0,1,2,3].map(i=>h("option",{value:String(i)},"Bonne réponse : " + "abcd"[i])));
  const ex = h("input",{type:"text",id:"anE",placeholder:"Explication ou source (facultatif)"});
  det.append(h("form",{class:"stack tight",onsubmit:(ev)=>{
    ev.preventDefault(); const o = opts.map(i=>i.value.trim());
    if (!q.value.trim() || o.some(x=>!x)) { toast("Remplissez l'énoncé et les quatre propositions."); return; }
    state.custom.push({id:"c"+Date.now().toString(36), m:sel.value, tag:"annales", q:q.value.trim(), o, a:Number(ans.value), e:ex.value.trim()});
    save(); annalesOpen = true; toast("Question ajoutée à la révision des erreurs et aux séries"); render();
  }},
    h("p",{class:"muted small"},"Ajoutez les questions des cours préparatoires officiels ou des annales. Elles entrent dans les séries libres."),
    sel, q, opts, ans, ex, h("button",{class:"btn primary",type:"submit"},"Ajouter")));
  if (state.custom.length) det.append(h("div",{class:"list"}, state.custom.slice().reverse().map(c=>h("div",{class:"item"},
    h("span",{class:"grow"}, c.q), h("button",{class:"link",type:"button",onclick:()=>{ state.custom = state.custom.filter(x=>x.id!==c.id); save(); annalesOpen=true; render(); }},"Retirer")))));
  return det;
}

// ---------- Sanction ----------
function vSanction(){
  const s = state.pendingSanction || state.sanctions[state.sanctions.length-1];
  const left = Math.ceil((state.blockUntil - Date.now())/1000);
  if (left > 0){ timers.push(setInterval(()=>{ const t = document.getElementById("blk"); const r = Math.ceil((state.blockUntil - Date.now())/1000); if (r<=0){ clearTimers(); render(); } else if (t) t.textContent = fmtTime(r); }, 1000)); }
  return h("div",{class:"stack sanction"},
    h("div",{class:"center"}, h("span",{class:"stamp ajourne"},"FRAUDE"), h("h1",null,"Épreuve annulée")),
    card("stack",
      h("p",null, s ? s.reason + (s.what ? " (« " + s.what + " »)" : "") + "." : "Sortie de l'appli pendant l'épreuve."),
      h("ul",{class:"pts"},
        h("li",null,"Épreuve annulée, aucune note enregistrée."),
        s && s.reverted.length ? h("li",null,"Niveaux reverrouillés : " + s.reverted.map(id=>"« " + LVMAP[id].t + " »").join(" et ") + ".") : h("li",null,"Aucun niveau validé à reverrouiller."),
        h("li",null,"Points retirés : −" + (s ? s.xp : 150) + " XP.")),
      left > 0 ? h("p",{class:"box warn"},"Appli bloquée encore ", h("b",{id:"blk"}, fmtTime(left)), ".")
        : h("button",{class:"btn primary",type:"button",onclick:()=>{ state.pendingSanction = null; save(); go("home"); }},"J'ai compris"))
  );
}

// ---------- Interruption et urgence ----------
function vInterruption(){
  const it = state.interrupt; if (!it) return vHome();
  const left = jokersLeft();
  const when = new Date(it.at); const hm = pad(when.getHours()) + " h " + pad(when.getMinutes());
  return h("div",{class:"stack"},
    h("div",null, h("p",{class:"lbl"},"Épreuve interrompue à " + hm), h("h1",{class:"h-l"},"Vous avez quitté l'appli")),
    card("stack",
      h("p",null, "L'épreuve « " + (it.title||"") + " » est annulée : vous la recommencerez avec d'autres questions. Que s'est-il passé ?"),
      left > 0 ? h("button",{class:"btn primary",type:"button",onclick:justifyInterrupt},"Appel entrant ou urgence") : h("p",{class:"box warn"},"Vous avez déjà utilisé vos 3 interruptions justifiées des 30 derniers jours : cette sortie est sanctionnée."),
      left > 0 ? h("p",{class:"muted small"},"Déclaration sur l'honneur. Interruptions justifiées restantes sur 30 jours : " + left + " / " + JOKERS + ". Aucune sanction, mais l'épreuve est à refaire.") : null,
      h("button",{class: left > 0 ? "btn" : "btn primary",type:"button",onclick:()=>{ sanction("Sortie de l'appli pendant l'épreuve", state.interrupt); render(); }}, left > 0 ? "J'ai quitté l'appli pour une autre raison" : "Voir la sanction")),
    h("p",{class:"note"},"Pour éviter les interruptions : mode « Ne pas déranger » pendant les épreuves. Vous pouvez y autoriser vos contacts favoris ou les appels répétés, pour rester joignable en cas d'urgence familiale.")
  );
}
const SECOURS = [["Police secours","170"],["Police secours","110"],["Police secours","111"],["Sapeurs-pompiers","180"],["Assistance médicale","185"]];
function vUrgence(){
  return h("div",{class:"stack"},
    h("div",null, h("p",{class:"lbl"},"Épreuve suspendue sans sanction"), h("h1",null,"Urgence")),
    card("stack",
      h("p",null,"Vous pouvez quitter l'appli librement. L'épreuve est annulée sans pénalité ; vous la recommencerez plus tard."),
      h("div",{class:"list"}, SECOURS.map(([l,n])=>h("a",{class:"item",href:"tel:"+n}, h("span",{class:"grow"}, h("b",null,l)), h("span",{class:"big-n"}, n)))),
      h("a",{class:"btn",href:"tel:"},"Ouvrir le téléphone"),
      h("p",{class:"src"},"Numéros d'urgence en Côte d'Ivoire : ", h("a",{href:"https://voyage.gc.ca/assistance/ambassades-consulats/cote-d-ivoire",target:"_blank",rel:"noopener"},"Gouvernement du Canada, voyage.gc.ca"))),
    h("button",{class:"btn ghost",type:"button",onclick:()=>go("home")},"Retour à l'accueil"));
}


// ---------- Profil ----------
function vProfil(){
  const p = state.profile, nv = niveau(state.xp), ind = indice();
  const pct = nv.next ? Math.round((state.xp-nv.cur[0])/(nv.next[0]-nv.cur[0])*100) : 100;
  const f = (k, label, type, ph)=>h("label",{class:"field"}, h("span",{class:"lbl"},label), h("input",{type:type||"text",value:p[k]||"",placeholder:ph||"",onchange:(ev)=>{ p[k]=ev.target.value.trim(); save(); render(); }}));
  const ms = PROGRAMME.map(t=>t.k).filter(k=>state.stats[k]);
  const rows = ms.map(k=>{ const st=state.stats[k]; const v = st.n?Math.round(st.ok/st.n*100):0; return h("div",{class:"mrow"}, h("span",null,kindLabel(k)), bar(v, v<50), h("span",null,v+" %")); });
  return h("div",{class:"stack"},
    h("div",null,h("p",{class:"lbl"},"Candidat"),h("h1",null, ((p.nom||"") + " " + (p.prenoms||"")).trim() || "Mon profil")),
    card("stack", photoCard()),
    card("stack",
      h("div",{class:"row spread"}, h("div",null,h("p",{class:"lbl"},"Grade"),h("h2",null,nv.cur[1])), h("b",{class:"big-n"}, state.xp + " XP")),
      bar(pct),
      h("p",{class:"muted small"}, nv.next ? "Encore " + (nv.next[0]-state.xp) + " XP pour « " + nv.next[1] + " ». Bonne réponse en épreuve +10, niveau validé +60, copie +50, oral +30, présélection blanche +40. Séance manquée : −2 par minute ; sortie pendant une épreuve : −150." : "Grade maximal atteint.")),
    card("stack",
      h("h2",null,"Indice de préparation : " + ind.total + " / 100"),
      h("div",{class:"mrow"}, h("span",null,"Programme validé"), bar(ind.parts.couverture/40*100), h("span",null, ind.parts.couverture + "/40")),
      h("div",{class:"mrow"}, h("span",null,"Qualité (notes)"), bar(ind.parts.maitrise/20*100), h("span",null, ind.parts.maitrise + "/20")),
      h("div",{class:"mrow"}, h("span",null,"Assiduité (28 j)"), bar(ind.parts.assiduite/25*100, ind.parts.assiduite<15), h("span",null, ind.parts.assiduite + "/25")),
      h("div",{class:"mrow"}, h("span",null,"Dossier"), bar(ind.parts.dossier/15*100, ind.parts.dossier<8), h("span",null, ind.parts.dossier + "/15")),
      h("p",{class:"note"},"Indicateur interne de l'appli, pas une probabilité de réussite. Assiduité : " + ind.ok + " séance(s) faite(s) ou rattrapée(s) sur " + ind.due + " prévue(s) depuis 28 jours.")),
    card("stack",
      h("h2",null,"Identité"),
      h("div",{class:"grid2"}, f("nom","Nom"), f("prenoms","Prénoms"), f("naissance","Date de naissance","date"), f("ville","Ville"), f("diplome","Diplôme le plus élevé","text","ex. Licence"), f("statut","Situation professionnelle","text","ex. contractuel, non fonctionnaire")),
      h("div",{class:"row spread"}, h("span",{class:"lbl"},"Cycle visé"),
        h("div",{class:"seg",role:"group","aria-label":"Cycle visé"}, ...[["CMS","Moyen supérieur"],["CS","Supérieur"]].map(([k,l])=>h("button",{type:"button","aria-pressed":state.cycle===k?"true":"false",onclick:()=>{state.cycle=k; save(); render();}},l)))),
      h("p",{class:"muted small"},"Ces informations restent dans votre téléphone.")),
    securityCard(),
    card("stack",
      h("h2",null,"Emploi du temps et rappels"),
      h("p",{class:"muted small"}, state.planning.length + " séances par semaine, " + Math.round(state.planning.reduce((a,s)=>a+slotMin(s),0)/60*10)/10 + " h au total."),
      h("div",{class:"row"}, h("button",{class:"btn primary",type:"button",onclick:()=>go("planning")},"Modifier mes horaires"), h("button",{class:"btn",type:"button",onclick:()=>go("semaine")},"Voir ma semaine"))),
    card("stack", h("h2",null,"Réussite par matière"), rows.length ? rows : h("p",{class:"muted"},"Pas encore de résultats.")),
    state.copies.length ? card("stack", h("h2",null,"Mes copies"), h("div",{class:"list"}, state.copies.slice().reverse().slice(0,10).map(c=>h("div",{class:"item"}, h("span",{class:"grow"}, h("b",null,EPREUVES[c.e].label), " · ", c.t), h("span",{class:"meta"}, frDate(c.date) + " · " + fr1(c.note) + "/20"))))) : null,
    state.sanctions.length ? card("stack", h("h2",null,"Sanctions"), h("div",{class:"list"}, state.sanctions.slice().reverse().map(s=>h("div",{class:"item"}, h("span",{class:"grow"}, s.reason, h("span",{class:"muted small block"}, frDate(s.date) + (s.reverted.length ? " · " + s.reverted.length + " niveau(x) reverrouillé(s)" : ""))), h("span",{class:"meta"},"−" + s.xp))))) : null,
    backupCard(),
    card("stack", h("h2",null,"Tutoriel"), h("button",{class:"btn",type:"button",onclick:()=>openTuto(0)},"Revoir le tutoriel")),
    h("p",{class:"note"},"Version de l'appli : " + APP_VERSION + ". ", h("button",{class:"link",type:"button",onclick:()=>{ if (state.exam) return; location.reload(); }},"Recharger"))
  );
}
function backupCard(){
  const imp = h("textarea",{id:"imp",rows:"3",placeholder:"Collez ici le contenu d'un fichier de sauvegarde"});
  return card("stack",
    h("h2",null,"Sauvegarde de ma progression"),
    h("p",{class:"muted small"},"La progression est stockée dans le téléphone. Sauvegardez-la régulièrement, surtout avant de changer de téléphone."),
    h("button",{class:"btn primary",type:"button",onclick:()=>download("cap-ena-sauvegarde-"+today()+".json", JSON.stringify(state), "application/json")},"Télécharger une sauvegarde"),
    imp,
    h("button",{class:"btn",type:"button",onclick:()=>{ try{ const o = JSON.parse(imp.value); if (typeof o!=="object"||o.v!==3) throw 0; o.exam = null; state = Object.assign(defaults(), o); save(); toast("Progression restaurée"); render(); } catch(e){ toast("Contenu invalide : collez le texte complet d'une sauvegarde de cette version."); } }},"Restaurer"));
}
function download(name, text, type){ const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([text],{type})); a.download = name; document.body.append(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();},1000); }

// ---------- Emploi du temps modifiable ----------
let planDraft = null;
const KIND_OPTIONS = ()=>[...PROGRAMME.map(t=>[t.k, t.court]), ["blanc","Présélection blanche"], ["revision","Rattrapages et révision"], ["ecrit","Écrit en conditions"]];
function vPlanning(){
  if (!planDraft) planDraft = state.planning.map(s=>Object.assign({},s));
  const rows = [1,2,3,4,5,6,0].flatMap(d=>planDraft.filter(s=>s.jour===d).sort((a,b)=>toMin(a.debut)-toMin(b.debut)));
  return h("div",{class:"stack"},
    h("div",null, h("p",{class:"lbl"},"Emploi du temps"), h("h1",null,"Mes horaires d'étude")),
    h("p",{class:"muted"},"Adaptez vos créneaux quand vos horaires de travail changent. Les modifications s'appliquent à partir d'aujourd'hui ; les séances passées restent comptées selon l'ancien emploi du temps."),
    h("div",{class:"stack tight"}, rows.map(s=>h("div",{class:"card planrow"},
      h("select",{"aria-label":"Jour",onchange:(ev)=>{ s.jour = Number(ev.target.value); render(); }}, [1,2,3,4,5,6,0].map(d=>h("option",{value:String(d),selected:s.jour===d||null}, JOURS[d]))),
      h("input",{type:"time",value:s.debut,"aria-label":"Début",onchange:(ev)=>{ s.debut = ev.target.value; }}),
      h("input",{type:"time",value:s.fin,"aria-label":"Fin",onchange:(ev)=>{ s.fin = ev.target.value; }}),
      h("select",{"aria-label":"Matière",onchange:(ev)=>{ s.k = ev.target.value; }}, KIND_OPTIONS().map(([k,l])=>h("option",{value:k,selected:s.k===k||null}, l))),
      h("button",{class:"link",type:"button","aria-label":"Supprimer ce créneau",onclick:()=>{ planDraft = planDraft.filter(x=>x!==s); render(); }},"Supprimer")))),
    h("button",{class:"btn",type:"button",onclick:()=>{ planDraft.push({id:"c"+Date.now().toString(36), jour:new Date().getDay(), debut:"19:00", fin:"20:00", k:"fr"}); render(); }},"Ajouter un créneau"),
    h("div",{class:"row"},
      h("button",{class:"btn primary",type:"button",onclick:savePlanning},"Enregistrer"),
      h("button",{class:"btn ghost",type:"button",onclick:()=>{ planDraft = null; go("profil"); }},"Annuler"),
      h("button",{class:"btn ghost",type:"button",onclick:()=>{ planDraft = DEFAULT_PLANNING.map(s=>Object.assign({},s)); render(); }},"Revenir aux horaires d'origine")),
    remindersCard()
  );
}
function savePlanning(){
  for (const s of planDraft){
    if (!/^\d\d:\d\d$/.test(s.debut) || !/^\d\d:\d\d$/.test(s.fin) || toMin(s.fin) <= toMin(s.debut)) return toast("Un créneau a une heure de fin avant son début (" + JOURS[s.jour] + ").");
  }
  for (const d of [0,1,2,3,4,5,6]){
    const l = planDraft.filter(s=>s.jour===d).sort((a,b)=>toMin(a.debut)-toMin(b.debut));
    for (let i=1;i<l.length;i++) if (toMin(l[i].debut) < toMin(l[i-1].fin)) return toast("Deux créneaux se chevauchent le " + JOURS[d].toLowerCase() + ".");
  }
  if (!planDraft.length) return toast("Gardez au moins un créneau par semaine.");
  processMissed();   // les jours passés sont comptés avec l'ancien emploi du temps
  // un créneau d'aujourd'hui déjà fait reste fait
  state.planning = planDraft.map(s=>Object.assign({},s)); planDraft = null; save();
  toast("Emploi du temps enregistré. Mettez à jour vos rappels.");
  go("planning");
}

// ---------- Rappels (notifications du téléphone avec sonnerie, via l'agenda) ----------
const DAYCODE = ["SU","MO","TU","WE","TH","FR","SA"];
function nextDate(jour){ const d = new Date(); for (let i=0;i<8;i++){ if (d.getDay()===jour) break; d.setDate(d.getDate()+1); } return d; }
function gcalLink(s){
  const d = nextDate(s.jour); const ds = d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate());
  const st = ds+"T"+s.debut.replace(":","")+"00", en = ds+"T"+s.fin.replace(":","")+"00";
  return "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent("Cap ENA · " + slotLabel(s)) + "&details=" + encodeURIComponent("Séance Cap ENA. Ouvrez l'appli : " + location.origin + location.pathname) + "&dates=" + st + "/" + en + "&ctz=Africa/Abidjan&recur=" + encodeURIComponent("RRULE:FREQ=WEEKLY;BYDAY=" + DAYCODE[s.jour]);
}
function icsText(){
  const stamp = new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d+Z$/,"Z");
  const L = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Cap ENA//FR","CALSCALE:GREGORIAN","X-WR-CALNAME:Cap ENA"];
  state.planning.forEach(s=>{
    const d = nextDate(s.jour); const ds = d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate());
    L.push("BEGIN:VEVENT","UID:capena-"+s.id+"-"+stamp+"@capena","DTSTAMP:"+stamp,"DTSTART;TZID=Africa/Abidjan:"+ds+"T"+s.debut.replace(":","")+"00","DTEND;TZID=Africa/Abidjan:"+ds+"T"+s.fin.replace(":","")+"00","RRULE:FREQ=WEEKLY;BYDAY="+DAYCODE[s.jour],"SUMMARY:Cap ENA - "+slotLabel(s),"DESCRIPTION:Séance Cap ENA","BEGIN:VALARM","ACTION:AUDIO","TRIGGER:-PT10M","END:VALARM","BEGIN:VALARM","ACTION:DISPLAY","DESCRIPTION:Séance Cap ENA dans 10 minutes","TRIGGER:-PT10M","END:VALARM","END:VEVENT");
  });
  L.push("END:VCALENDAR"); return L.join("\r\n");
}
function remindersCard(){
  return card("stack",
    h("h2",null,"Rappels avec sonnerie"),
    h("p",null,"Les rappels passent par l'agenda du téléphone : il sonne même appli fermée et sans connexion. Touchez chaque créneau pour l'ajouter à Google Agenda (répétition chaque semaine)."),
    h("ol",{class:"pts small"},
      h("li",null,"Dans Google Agenda, vérifiez la notification de l'événement (par exemple 10 minutes avant) et modifiez-la si besoin."),
      h("li",null,"Pour la sonnerie : dans les réglages de notification de l'appli Agenda du téléphone, activez le son des rappels d'événements et choisissez une sonnerie (le chemin exact varie selon la marque du téléphone)."),
      h("li",null,"Après un changement d'horaires, supprimez les anciens événements « Cap ENA » de l'agenda, puis ajoutez les nouveaux.")),
    h("div",{class:"list"}, state.planning.slice().sort((a,b)=>((a.jour+6)%7)-((b.jour+6)%7) || toMin(a.debut)-toMin(b.debut)).map(s=>h("a",{class:"item",href:gcalLink(s),target:"_blank",rel:"noopener"}, h("span",{class:"grow"}, h("b",null, slotLabel(s)), h("span",{class:"muted small block"}, JOURS[s.jour] + " · " + s.debut + "–" + s.fin)), h("span",{class:"meta"},"Ajouter")))),
    h("button",{class:"btn",type:"button",onclick:()=>download("cap-ena-rappels.ics", icsText(), "text/calendar")},"Ou télécharger tous les rappels (.ics)"));
}

// ---------- Photo de profil (stockée dans le téléphone uniquement) ----------
function initials(){ const p = state.profile; return ((p.prenoms||"").trim()[0] || "") + ((p.nom||"").trim()[0] || "") || "?"; }
function avatar(size){
  const p = state.profile, st = "width:"+size+"px;height:"+size+"px;font-size:"+Math.round(size*0.38)+"px";
  return p.photo ? h("img",{class:"avatar",src:p.photo,alt:"Photo de profil",style:st}) : h("span",{class:"avatar ini",style:st,"aria-hidden":"true"}, initials().toUpperCase());
}
function pickPhoto(file){
  if (!file) return;
  if (!/^image\//.test(file.type)) return toast("Choisissez une image.");
  const url = URL.createObjectURL(file), img = new Image();
  img.onload = ()=>{
    const S = 320, c = document.createElement("canvas"); c.width = c.height = S;
    const m = Math.min(img.naturalWidth, img.naturalHeight);
    c.getContext("2d").drawImage(img, (img.naturalWidth-m)/2, (img.naturalHeight-m)/2, m, m, 0, 0, S, S);
    state.profile.photo = c.toDataURL("image/jpeg", 0.82); URL.revokeObjectURL(url); save(); render(); toast("Photo enregistrée.");
  };
  img.onerror = ()=>{ URL.revokeObjectURL(url); toast("Image illisible : essayez une autre photo."); };
  img.src = url;
}
function photoCard(){
  const inp = h("input",{type:"file",accept:"image/*",class:"hiddenfile",id:"photoIn",onchange:(ev)=>pickPhoto(ev.target.files[0])});
  return h("div",{class:"photorow"},
    avatar(84),
    h("div",{class:"stack tight"},
      h("label",{class:"btn small primary",for:"photoIn"}, state.profile.photo ? "Changer la photo" : "Ajouter ma photo"), inp,
      state.profile.photo ? h("button",{class:"btn small ghost",type:"button",onclick:()=>{ delete state.profile.photo; save(); render(); }},"Retirer la photo") : null,
      h("span",{class:"muted small"},"Galerie ou appareil photo. La photo reste dans le téléphone.")));
}


// ---------- Dossier de candidature ----------
// Pièces et étapes relevées sur les communiqués de la session 2026 (concours directs d'entrée à l'ENA en 2027).
// Les dates de la session suivante ne sont pas publiées : elles sont estimées d'après le calendrier 2026 et à vérifier.
const DSRC = {
  insc: {t:"Fraternité Matin, 31 mars 2026 : conditions et pièces d'inscription aux concours directs d'entrée à l'ENA en 2027", u:"https://www.fratmat.info/article/2640983/societe/concours-direct-dentree-a-lena-en-2027cycle-superieur-lage-maximum-fixe-a-43-ans"},
  phys: {t:"Fraternité Matin, juillet 2026 : résultats de la présélection et dossier physique des admissibles", u:"https://www.fratmat.info/article/2643052/societe/concours-directs-dentree-a-lena-en-2027-les-resultats-de-la-phase-de-preselection-disponibles-ce-lundi-6-juillet"},
  ecrits: {t:"Fraternité Matin, juillet 2026 : convocations et règles de la phase d'admissibilité", u:"https://www.fratmat.info/article/2643263/societe/concours-directs-dentree-a-lena-en-2027-les-convocations-pour-la-phase-dadmissibilite-disponibles-a-partir-de-ce-mercredi-15-juillet"},
  cms: {t:"Ablanian (site de préparation) : fiche du concours direct du cycle moyen supérieur, session 2026", u:"https://ablanian.ci/concours_admin/view.php?slug=enacmsdirect"}
};
const DOSSIER = [
  {ph:"Dès maintenant (octobre à décembre 2026)", items:[
    {id:"cni", t:"Carte nationale d'identité en cours de validité (ou passeport)", d:"Exigée à l'inscription et le jour des écrits. Vérifiez qu'elle restera valide jusqu'à la fin des épreuves (été 2027).", s:"insc"},
    {id:"bac", t:"Copie du baccalauréat (ou du BT reconnu)", d:"Exigée à l'inscription.", s:"insc"},
    {id:"lic", t:"Copie de la licence (diplôme exigé pour le cycle moyen supérieur)", d:"En 2026, les diplômes étaient authentifiés auprès des ministères concernés ; un diplôme obtenu à l'étranger exigeait une équivalence du ministère de l'Enseignement supérieur.", s:"insc"},
    {id:"ccc", t:"Copies certifiées conformes du baccalauréat et de la licence", d:"Exigées dans le dossier physique des admissibles. Faites-les certifier à l'avance.", s:"phys"},
    {id:"cmu", t:"Justificatif d'enrôlement à la CMU", d:"Exigé à l'inscription et dans le dossier physique.", s:"insc"},
    {id:"nat", t:"Certificat de nationalité de moins de 5 ans", d:"Exigé dans le dossier physique. S'il a plus de 5 ans à l'été 2027, refaites-le.", s:"phys", check:"nat"},
    {id:"nais", t:"Extrait d'acte de naissance récent (ou jugement supplétif)", d:"Règle 2026 : moins d'un an au 1er janvier de l'année des épreuves. Si elle est reconduite, un extrait délivré après le 1er janvier 2026 conviendra pour 2027.", s:"phys", check:"nais"}
  ]},
  {ph:"Janvier à février 2027", items:[
    {id:"casier", t:"Extrait de casier judiciaire", d:"Règle 2026 : délivré après le 1er janvier de l'année. Ne le demandez donc qu'à partir de janvier 2027.", s:"phys", check:"casier"},
    {id:"cv", t:"CV selon le modèle de l'ENA, certifié sincère", d:"Le modèle se télécharge sur le site de l'ENA (ena.ci).", s:"phys"},
    {id:"decl", t:"Déclaration sur l'honneur de non-fonctionnaire", d:"Le candidat déclare ne pas être fonctionnaire ni stagiaire de la fonction publique (organisme d'État, établissement public, collectivité). Un fonctionnaire doit fournir une démission approuvée.", s:"phys"},
    {id:"dem", t:"Demande manuscrite sur papier libre", d:"En 2026 : adressée au Ministre d'État, Ministre de la Fonction publique et de la Modernisation de l'Administration, avec votre adresse exacte et le cycle demandé. Vérifiez l'intitulé exact dans le communiqué de 2027.", s:"phys"}
  ]},
  {ph:"Inscription en ligne (en 2026 : du 16 mars au 30 avril)", items:[
    {id:"comm", t:"Lire le communiqué officiel d'ouverture des concours", d:"Sur ena.ci et fonctionpublique.gouv.ci. Il fixe les dates, l'âge limite et les pièces de la session : il prime sur cette liste.", s:"insc"},
    {id:"insc", t:"S'inscrire sur la plateforme unifiée des concours", d:"En 2026 : sur fonctionpublique.gouv.ci ou ena.ci.", s:"insc"},
    {id:"frais", t:"Payer les frais et garder les reçus", d:"Tarifs 2026 : 27 500 F d'inscription, 10 000 F de cours de préparation, 4 000 F de kit numérique, soit 41 500 F.", s:"insc"},
    {id:"photo", t:"Prise de vue sur rendez-vous", d:"En 2026 : à l'ENA ou dans une direction régionale de la Fonction publique, dont Abengourou.", s:"insc"},
    {id:"prepa", t:"Suivre les cours de préparation obligatoires", d:"En 2026, ils devaient être suivis avant la présélection.", s:"insc"}
  ]},
  {ph:"Après la présélection (en 2026 : dépôt du cycle moyen supérieur le 8 juillet)", items:[
    {id:"fiche", t:"Fiche de candidature imprimée depuis l'espace candidat", d:"Pièce du dossier physique.", s:"phys"},
    {id:"recus", t:"Reçus des frais de concours et des cours de préparation", d:"Pièces du dossier physique.", s:"phys"},
    {id:"poch", t:"Pochette de 2 000 F à régler à l'agence comptable de l'ENA", d:"Pièce du dossier physique (tarif 2026).", s:"phys"},
    {id:"depot", t:"Dépôt du dossier complet à l'ENA, le jour fixé pour le cycle", d:"En 2026, le dépôt avait lieu deux jours après les résultats, un seul jour par cycle, de 8 h à 16 h 30 : tout doit être prêt avant.", s:"phys"}
  ]},
  {ph:"Écrits d'admissibilité (en 2026 : 23 et 24 juillet pour le cycle moyen supérieur)", items:[
    {id:"conv", t:"Convocation téléchargée sur ena.ci", d:"À présenter avec la pièce d'identité. Arrivée au plus tard à 7 h le matin.", s:"ecrits"},
    {id:"kit", t:"Deux stylos à bille bleus et la tenue exigée", d:"Sacs et objets connectés interdits dans le centre d'examen.", s:"ecrits"}
  ]}
];
const DITEMS = DOSSIER.flatMap(p=>p.items.map(it=>Object.assign({ph:p.ph}, it)));
function dState(id){ return state.dossier[id] || {st:0}; }
function dWarn(it){
  const s = dState(it.id); if (!s.date) return null;
  if (it.check==="casier" && s.date < "2027-01-01") return "Délivré avant le 1er janvier 2027 : si la règle 2026 est reconduite, il faudra le refaire.";
  if (it.check==="nais" && s.date < "2026-01-01") return "Délivré avant le 1er janvier 2026 : trop ancien si la règle 2026 est reconduite.";
  if (it.check==="nat" && s.date < "2022-08-01") return "Plus de 5 ans à l'été 2027 : à refaire.";
  return null;
}
function dossierProgress(){
  const ok = DITEMS.filter(it=>dState(it.id).st===2 && !dWarn(it)).length;
  const next = DITEMS.find(it=>dState(it.id).st!==2);
  return {ok, total:DITEMS.length, pct: Math.round(ok/DITEMS.length*100), next};
}
const DST = ["À faire","En cours","Prêt"];
function vCandidature(){
  const dp = dossierProgress();
  return h("div",{class:"stack"},
    h("div",null, h("p",{class:"lbl"},"Concours direct · cycle " + (state.cycle==="CS"?"supérieur":"moyen supérieur")), h("h1",null,"Ma candidature")),
    card("feature stack", h("div",{class:"row spread"}, h("h2",null,"Dossier prêt à " + dp.pct + " %"), h("b",null, dp.ok + "/" + dp.total)), bar(dp.pct, dp.pct<50),
      h("p",{class:"muted small"},"Se préparer ne sert à rien sans pouvoir s'inscrire : en 2026, les admissibles n'avaient que deux jours pour déposer leur dossier physique. Touchez une pièce pour changer son état et noter sa date de délivrance.")),
    veilleCard(),
    eligCard(),
    DOSSIER.map(p=>card("stack",
      h("h2",null, p.ph),
      h("div",{class:"list"}, p.items.map(it=>{
        const s = dState(it.id), w = dWarn(it);
        const date = h("input",{type:"date",value:s.date||"","aria-label":"Date de délivrance",onchange:(ev)=>{ const x = state.dossier[it.id] || (state.dossier[it.id] = {st:0}); x.date = ev.target.value; save(); render(); }});
        return h("div",{class:"ditem"},
          h("button",{class:"dst s"+s.st,type:"button","aria-label":"État : " + DST[s.st],onclick:()=>{ const x = state.dossier[it.id] || (state.dossier[it.id] = {st:0}); x.st = (x.st+1)%3; save(); render(); }}, DST[s.st]),
          h("div",{class:"grow"}, h("b",null,it.t), h("p",{class:"muted small"}, it.d), w ? h("p",{class:"small bad"}, w) : null,
            h("div",{class:"row"}, h("span",{class:"muted small"},"Délivré le"), date),
            h("p",{class:"src"}, "Source : ", h("a",{href:DSRC[it.s].u,target:"_blank",rel:"noopener"}, DSRC[it.s].t))));
      })))),
    h("p",{class:"note"},"Liste établie d'après les communiqués de la session 2026. Les dates, montants et pièces de la session suivante seront fixés par le communiqué officiel : vérifiez-le dès sa parution.")
  );
}
function ageAt(birth, y, m, d){ if (!birth) return null; const b = parseYmd(birth); let a = y - b.getFullYear(); if (m < b.getMonth()+1 || (m===b.getMonth()+1 && d < b.getDate())) a--; return a; }
function eligCard(){
  const p = state.profile;
  const a = ageAt(p.naissance, 2026, 12, 31);
  return card("stack",
    h("h2",null,"Conditions d'accès"),
    !p.naissance ? h("p",null,"Renseignez votre date de naissance dans votre profil pour vérifier la condition d'âge.", h("button",{class:"link",type:"button",onclick:()=>go("profil")}," Ouvrir le profil")) :
    h("ul",{class:"pts"},
      h("li",null,"Nationalité ivoirienne exigée."),
      h("li",null,"Votre âge au 31 décembre 2026 : ", h("b",null, a + " ans"), "."),
      h("li",null,"Cycle moyen supérieur : licence, BTS ou DUT, plus le baccalauréat. Limite d'âge de la session 2026 : 40 ans au 31 décembre 2025, selon Ablanian. Je ne peux pas confirmer ça sur un communiqué officiel : seul celui du cycle supérieur a été retrouvé."),
      h("li",null,"Cycle supérieur : diplôme de fin de second cycle de l'enseignement supérieur (master) ; 43 ans au plus au 31 décembre 2025 pour la session 2026 (communiqué officiel)."),
      h("li",null,"Les fonctionnaires qui passent un concours direct doivent fournir une démission approuvée.")),
    h("p",{class:"src"},"Sources : ", h("a",{href:DSRC.cms.u,target:"_blank",rel:"noopener"},"Ablanian"), " · ", h("a",{href:DSRC.insc.u,target:"_blank",rel:"noopener"},"Fraternité Matin"), " · ", h("a",{href:DSRC.phys.u,target:"_blank",rel:"noopener"},"Fraternité Matin (dossier physique)")));
}

// ---------- Veille du concours ----------
const STATUT = {officiel:["Officiel","ok"], estime:["Estimé","late"], passe:["Passé",""]};
function veilleDeadlines(){
  if (!VEILLE || !Array.isArray(VEILLE.calendrier)) return [];
  const td = today(), out = [];
  for (const c of VEILLE.calendrier){
    if (c.statut !== "officiel") continue;
    const d = c.fin || c.debut; if (!d || d < td) continue;
    const n = Math.round((parseYmd(d) - parseYmd(td))/86400000);
    if (n <= 30) out.push({c, n, d});
  }
  return out.sort((a,b)=>a.n-b.n);
}
function veilleBanner(){
  if (!VEILLE) return null;
  const dl = veilleDeadlines();
  const fresh = VEILLE.updated !== state.veilleSeen;
  if (!fresh && !dl.length) return null;
  return card("warnc stack tight",
    h("h2",null, fresh ? "Veille du concours : nouvelle information" : "Échéance du concours"),
    fresh ? h("p",{class:"small"}, VEILLE.resume || "") : null,
    dl.map(x=>h("p",null, h("b",null, x.c.etape), " : " + (x.c.fin ? "jusqu'au " : "le ") + frDate(x.d) + (x.n===0 ? " (aujourd'hui)" : " (dans " + x.n + " jour" + (x.n>1?"s":"") + ")"))),
    h("button",{class:"btn accent",type:"button",onclick:()=>go("candidature")},"Voir la veille et mon dossier"));
}
function veilleCard(){
  if (!VEILLE) return card("soft", h("p",{class:"small"},"Veille du concours : connectez-vous à Internet pour charger les dernières informations officielles."));
  state.veilleSeen = VEILLE.updated; save();
  const an = VEILLE.statut === "annonce";
  return card("feature stack",
    h("div",{class:"row spread"}, h("h2",null,"Veille du concours"), h("span",{class:"pill " + (an ? "ok" : "late")}, an ? "Session annoncée" : "Pas encore annoncée")),
    h("p",null, VEILLE.resume || ""),
    h("p",{class:"muted small"},"Sources officielles vérifiées le " + frDate(VEILLE.verifie_le || VEILLE.updated) + " (ena.ci, fonctionpublique.gouv.ci, presse officielle). Mise à jour automatique chaque jour."),
    Array.isArray(VEILLE.calendrier) && VEILLE.calendrier.length ? h("div",{class:"list"}, VEILLE.calendrier.map(c=>{
      const st = STATUT[c.statut] || STATUT.estime;
      const dates = c.debut ? (frDate(c.debut) + (c.fin && c.fin!==c.debut ? " au " + frDate(c.fin) : "")) : (c.prevision || "date non publiée");
      return h("div",{class:"vrow"},
        h("div",{class:"grow"}, h("b",null, c.etape), h("span",{class:"small block"}, dates), c.ref2026 ? h("span",{class:"muted small block"}, "En 2026 : " + c.ref2026) : null,
          c.source && c.source.u ? h("p",{class:"src"}, "Source : ", h("a",{href:c.source.u,target:"_blank",rel:"noopener"}, c.source.t || c.source.u)) : null),
        h("span",{class:"pill " + st[1]}, st[0]));
    })) : null,
    Array.isArray(VEILLE.actus) && VEILLE.actus.length ? h("details",null, h("summary",null,"Dernières informations (" + VEILLE.actus.length + ")"),
      h("div",{class:"stack tight"}, VEILLE.actus.map(a=>h("div",{class:"miss"}, h("p",{class:"small"}, h("b",null, frDate(a.date) + " · " + a.titre)), a.resume ? h("p",{class:"muted small"}, a.resume) : null,
        a.source && a.source.u ? h("p",{class:"src"}, "Source : ", h("a",{href:a.source.u,target:"_blank",rel:"noopener"}, a.source.t || a.source.u)) : null)))) : null);
}


// ---------- Sécurité : code d'accès et empreinte digitale ----------
// On ne stocke que l'empreinte SHA-256 du code normalisé (majuscules, sans accents, espaces simples).
const CODE_H = "522838e9be5927e3c59cef95ae651daebaa9f975ecd8b6276a47beee2941e62c";
const CODE_FB = "bhqwk6";
const UKEY = "capena.unlock", CKEY = "capena.cred";
const normCode = (x)=>x.normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase().replace(/[^A-Z0-9]+/g," ").trim();
async function digest(x){
  try { if (window.crypto && crypto.subtle){ const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(x)); return {sha:[...new Uint8Array(b)].map(v=>v.toString(16).padStart(2,"0")).join("")}; } } catch(e){}
  return {fb:hash(x)};
}
function rememberOn(){ try { return localStorage.getItem(UKEY) === CODE_H; } catch(e){ return false; } }
function setRemember(on){ try { if (on) localStorage.setItem(UKEY, CODE_H); else localStorage.removeItem(UKEY); } catch(e){} }
const b64 = (buf)=>btoa(String.fromCharCode(...new Uint8Array(buf)));
const unb64 = (s)=>Uint8Array.from(atob(s), c=>c.charCodeAt(0));
function credId(){ try { return localStorage.getItem(CKEY); } catch(e){ return null; } }
const bioSupported = ()=> !!(window.PublicKeyCredential && navigator.credentials && window.isSecureContext);
async function bioAvailable(){ try { return bioSupported() && await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable(); } catch(e){ return false; } }
async function bioEnroll(){
  try {
    const cred = await navigator.credentials.create({publicKey:{
      challenge: crypto.getRandomValues(new Uint8Array(32)),
      rp: {name:"Cap ENA"},
      user: {id: crypto.getRandomValues(new Uint8Array(16)), name:"cap-ena", displayName: ((state.profile.nom||"") + " " + (state.profile.prenoms||"")).trim() || "Candidat Cap ENA"},
      pubKeyCredParams: [{type:"public-key", alg:-7}, {type:"public-key", alg:-257}],
      authenticatorSelection: {authenticatorAttachment:"platform", userVerification:"required", residentKey:"discouraged"},
      timeout: 60000, attestation: "none"}});
    if (!cred) throw 0;
    localStorage.setItem(CKEY, b64(cred.rawId));
    toast("Empreinte activée : l'appli s'ouvrira avec votre doigt.");
    return true;
  } catch(e){ toast("Activation annulée ou impossible sur ce téléphone."); return false; }
}
async function bioVerify(){
  const id = credId(); if (!id) return false;
  try {
    const a = await navigator.credentials.get({publicKey:{challenge: crypto.getRandomValues(new Uint8Array(32)), allowCredentials:[{type:"public-key", id: unb64(id)}], userVerification:"required", timeout:60000}});
    return !!a;
  } catch(e){ return false; }
}
function securityCard(){
  const has = !!credId();
  const c = card("stack",
    h("h2",null,"Sécurité"),
    h("p",{class:"muted small"}, "Code d'accès : " + (rememberOn() ? "non demandé sur ce téléphone." : "demandé à chaque ouverture.")),
    h("label",{class:"chk"}, h("input",{type:"checkbox",checked:rememberOn()||null,onchange:(ev)=>{ setRemember(ev.target.checked); render(); }}), h("span",null,"Ne plus demander de déverrouillage sur ce téléphone")),
    h("div",{class:"row"},
      has ? h("button",{class:"btn",type:"button",onclick:()=>{ try{ localStorage.removeItem(CKEY); }catch(e){} toast("Empreinte désactivée."); render(); }},"Désactiver l'empreinte")
          : h("button",{class:"btn primary",type:"button",id:"bioBtn",onclick:async()=>{ if (await bioEnroll()) render(); }},"Activer l'empreinte digitale"),
      h("button",{class:"btn",type:"button",onclick:logout},"Se déconnecter")),
    h("p",{class:"muted small"}, "L'empreinte utilise le capteur et le verrouillage d'écran du téléphone (Android peut proposer votre code PIN si le doigt n'est pas reconnu). Le code TANO AHMED reste toujours valable."));
  bioAvailable().then(ok=>{ if (!ok && !has){ const b = c.querySelector("#bioBtn"); if (b){ b.disabled = true; b.textContent = "Empreinte indisponible ici"; } } });
  return c;
}
function showLock(){
  clearTimers(); document.body.classList.add("locked");
  const inp = h("input",{type:"password",id:"code",autocomplete:"off",autocapitalize:"characters",spellcheck:"false","aria-describedby":"codeMsg",placeholder:"Votre code"});
  const rem = h("input",{type:"checkbox",id:"rem"});
  const msg = h("p",{id:"codeMsg",class:"small muted","aria-live":"polite"}, credId() ? "Touchez « Empreinte digitale » ou saisissez votre code." : "Saisissez votre code d'accès pour ouvrir l'appli.");
  const show = h("button",{class:"btn ghost small",type:"button",onclick:()=>{ inp.type = inp.type==="password" ? "text" : "password"; show.textContent = inp.type==="password" ? "Afficher" : "Masquer"; inp.focus(); }},"Afficher");
  let form;
  const unlock = ()=>{ if (rem.checked) setRemember(true); document.body.classList.remove("locked"); startApp(); };
  const submit = async(ev)=>{
    ev.preventDefault();
    const d = await digest(normCode(inp.value));
    const ok = d.sha ? d.sha===CODE_H : d.fb===CODE_FB;
    if (!ok){ msg.textContent = "Code incorrect. Vérifiez l'orthographe, puis réessayez."; msg.className = "small err"; inp.value = ""; inp.focus(); form.classList.remove("shake"); void form.offsetWidth; form.classList.add("shake"); return; }
    unlock();
  };
  const bio = credId() ? h("button",{class:"btn primary big",type:"button",onclick:async()=>{ if (await bioVerify()) unlock(); else { msg.textContent = "Empreinte non reconnue : réessayez ou saisissez votre code."; msg.className = "small err"; } }}, "Empreinte digitale") : null;
  form = h("form",{class:"card stack lockcard",onsubmit:submit},
    bio,
    h("label",{class:"lbl",for:"code"}, bio ? "Ou code d'accès" : "Code d'accès"),
    h("div",{class:"codebox"}, inp, show),
    msg,
    h("label",{class:"chk"}, rem, h("span",null,"Ne plus demander de déverrouillage sur ce téléphone")),
    h("button",{class: bio ? "btn" : "btn primary",type:"submit"},"Ouvrir Cap ENA"));
  $("#view").replaceChildren(h("div",{class:"lock"},
    state.profile.photo ? avatar(96) : h("div",{class:"lockmark","aria-hidden":"true"},"ENA"),
    h("div",{class:"center"}, h("p",{class:"lbl"},"Accès réservé"), h("h1",null,"Cap ENA 2027"), h("p",{class:"muted"},"Préparation aux concours directs de l'ENA de Côte d'Ivoire")),
    state.pendingSanction ? h("p",{class:"box warn"},"Vous avez quitté l'appli pendant une épreuve : déverrouillez pour voir la sanction.") : state.interrupt ? h("p",{class:"box warn"},"Une épreuve a été interrompue : déverrouillez pour en déclarer la cause.") : null,
    form));
  window.scrollTo({top:0});
  if (!bio) setTimeout(()=>inp.focus(), 50);
}

// ---------- Installation ----------
let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (e)=>{ e.preventDefault(); deferredPrompt = e; if (view==="home" && !state.exam) render(); });
const isStandalone = ()=> (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
function installSteps(){
  return h("ol",{class:"pts"},
    h("li",null,"Ouvrez cette page dans ", h("b",null,"Chrome"), " sur votre téléphone Android."),
    h("li",null,"Touchez le menu ", h("b",null,"⋮"), " en haut à droite."),
    h("li",null,"Choisissez ", h("b",null,"« Installer l'application »"), " (ou « Ajouter à l'écran d'accueil »), puis confirmez."),
    h("li",null,"Ouvrez ensuite toujours Cap ENA depuis son icône."));
}
function installButton(){
  return deferredPrompt ? h("button",{class:"btn primary",type:"button",onclick:async()=>{ deferredPrompt.prompt(); const c = await deferredPrompt.userChoice; deferredPrompt=null; if (c && c.outcome==="accepted") toast("Installation lancée."); render(); }},"Installer Cap ENA sur ce téléphone") : null;
}
function installCard(){
  if (isStandalone()) return null;
  return card("stack soft", h("h2",null,"Installer l'appli sur le téléphone"), installButton(), installSteps());
}
window.addEventListener("appinstalled", ()=>{ deferredPrompt=null; toast("Cap ENA est installée sur ce téléphone."); });

// ---------- Déconnexion ----------
function logout(){
  if (state.exam) return toast("Épreuve en cours : remettez votre copie avant de vous déconnecter.");
  setRemember(false); NAV = []; clearTimers();
  showLock();
  toast("Vous êtes déconnecté. Code ou empreinte pour revenir.");
}


// ---------- Tutoriel ----------
let tutoI = 0;
function openTuto(i){ tutoI = i||0; go("tuto"); }
const TUTO = [
  { t:"Bienvenue dans Cap ENA", lbl:"Le principe",
    txt:["Cap ENA vous prépare au concours direct de l'ENA de Côte d'Ivoire comme un jeu à niveaux, avec les exigences du concours.",
         "- Un emploi du temps fixe vos séances ; chaque matière avance niveau par niveau.",
         "- Un niveau ne s'ouvre que si le précédent est réussi : pas de raccourci.",
         "- Les évaluations se passent en conditions d'examen. Quitter l'appli pendant une épreuve sans raison valable est sanctionné.",
         "- Une séance manquée coûte des points ; un rattrapage les rend.",
         "- En parallèle, l'appli suit la préparation de votre dossier de candidature.",
         "> Comptez 4 minutes pour ce tutoriel. Il reste accessible dans Profil > Tutoriel."] },
  { t:"Installer l'appli sur votre téléphone", lbl:"Installation", install:true,
    txt:["Installée, Cap ENA s'ouvre en plein écran depuis son icône et fonctionne hors connexion avec les contenus déjà téléchargés."] },
  { t:"Votre profil et l'empreinte digitale", lbl:"Profil et sécurité",
    txt:["Onglet Profil : renseignez votre identité, votre date de naissance et le cycle visé. Ces informations restent dans le téléphone.",
         "- Ajoutez votre photo (galerie ou appareil photo) : elle s'affiche sur l'accueil et sur l'écran de verrouillage.",
         "- « Activer l'empreinte digitale » : l'appli s'ouvrira ensuite avec votre doigt.",
         "- Le bouton rond en haut à droite vous déconnecte ; « ← Retour » (ou le bouton retour du téléphone) ramène à la page précédente.",
         "- Le code TANO AHMED reste toujours valable si le capteur ne répond pas.",
         "- L'empreinte n'est disponible que dans l'appli installée sur un téléphone équipé d'un verrouillage d'écran."] },
  { t:"L'écran « Aujourd'hui »", lbl:"L'emploi du temps du jour",
    txt:["Il affiche les séances du jour, dans l'ordre de l'emploi du temps, avec leur état : à venir, en cours, à faire avant minuit, fait.",
         "- Touchez « Commencer » : l'appli ouvre le bon niveau de la bonne matière.",
         "- Une séance est validée quand l'évaluation (ou la copie) de sa matière est terminée le jour même, même à une autre heure.",
         "- En haut : l'indice de préparation sur 100 (programme, maîtrise, assiduité, dossier) et votre grade.",
         "~ « Ma semaine » montre toute la semaine : séances faites, manquées, rattrapées."] },
  { t:"Le parcours à niveaux", lbl:"Progression", demo:"steps",
    txt:["Onglet Parcours : les matières dans l'ordre de l'emploi du temps. Chaque niveau se déroule en quatre étapes.",
         "- Technique, puis Cours, puis À retenir : un temps de lecture minimum est imposé avant de passer à l'étape suivante.",
         "- Évaluation : il faut 14/20 au QCM pour valider le niveau.",
         "- Dans les matières d'écrit (SOG, PES, résumé, droit), il faut aussi une copie notée au moins 10/20 avec la grille du jury.",
         "- En cas d'échec, relisez « À retenir » puis repassez : les questions changent.",
         "~ Symboles : ✓ validé, ▶ en cours, 🔒 verrouillé, … leçon en préparation (publiée par la production de nuit)."] },
  { t:"Les conditions d'examen", lbl:"Pas de passe-droit", demo:"qcm",
    txt:["Avant chaque évaluation, vous vous engagez à composer seul. Ensuite :",
         "- Le chrono tourne sans pause ; à la fin, la copie est ramassée.",
         "- Aucune correction pendant l'épreuve : elle s'affiche à la remise de la copie.",
         "- Barème officiel : +1 / 0 / −1, et +2 / 0 / −2 en logique. « Je ne réponds pas » vaut 0.",
         "! Quitter l'appli pendant une épreuve (autre appli, écran d'accueil, bouton marche, rechargement) annule l'épreuve. Au retour, vous en déclarez la cause.",
         "- Sortie volontaire : vos deux derniers niveaux validés sont reverrouillés, −150 XP, appli bloquée 3 minutes.",
         "- Appel entrant : déclarez-le ; pas de sanction, l'épreuve est simplement à refaire (3 interruptions justifiées par 30 jours).",
         "- Urgence : le bouton « Urgence » en bas de chaque épreuve suspend l'épreuve sans sanction et affiche les numéros des secours (police 170, 110, 111 ; pompiers 180 ; assistance médicale 185).",
         "> Avant chaque épreuve : mode « Ne pas déranger », batterie chargée, appels coupés. L'écran reste allumé pendant l'épreuve."] },
  { t:"Séances manquées et rattrapages", lbl:"Assiduité",
    txt:["À minuit, chaque séance non faite retire 2 XP par minute prévue : 60 XP pour un créneau de 30 minutes, 240 XP pour 2 heures.",
         "- Votre assiduité baisse, votre indice aussi, et votre grade peut redescendre.",
         "- Chaque séance manquée se rattrape dans les 14 jours : une épreuve en conditions dans la même matière.",
         "- Réussie (12/20 au QCM, 10/20 à l'écrit ou à l'oral), elle rend les points perdus.",
         "~ Le vendredi soir est réservé aux rattrapages et à la révision des erreurs."] },
  { t:"Votre dossier de candidature", lbl:"Candidature",
    txt:["Onglet Candidature : toutes les pièces et étapes relevées sur les communiqués de la session 2026, dans l'ordre où les préparer.",
         "- Touchez l'état d'une pièce pour la passer de « À faire » à « En cours » puis « Prêt ».",
         "- Notez la date de délivrance : l'appli signale une pièce trop ancienne (casier, extrait de naissance, certificat de nationalité).",
         "- Les conditions d'accès sont calculées à partir de votre date de naissance.",
         "! Le communiqué officiel de la session suivante prime sur cette liste : vérifiez-le dès sa parution."] },
  { t:"L'entraînement", lbl:"En plus du parcours",
    txt:["Onglet Entraînement :",
         "- Présélection blanche : 45 questions en 45 minutes, en conditions (le samedi après-midi dans l'emploi du temps).",
         "- Révision des erreurs : vos questions ratées, en conditions.",
         "- Séries libres : correction immédiate, seulement sur les niveaux validés, sans enjeu.",
         "- Écrits en conditions et simulation d'oral, qui s'ouvrent avec les niveaux de méthode.",
         "- Mes annales : ajoutez les questions des cours préparatoires officiels."] },
  { t:"Rappels et horaires", lbl:"Ne rien rater",
    txt:["Profil > « Modifier mes horaires » : changez jours, heures et matières quand vos horaires de travail évoluent.",
         "- Les rappels passent par l'agenda du téléphone, avec sonnerie, même appli fermée.",
         "- Touchez chaque créneau pour l'ajouter à Google Agenda, puis réglez le son des notifications de l'agenda.",
         "- Après un changement d'horaires, supprimez les anciens événements et ajoutez les nouveaux."] },
  { t:"Les contenus de chaque nuit", lbl:"Prêt à commencer", final:true,
    txt:["Chaque nuit, la production de contenus publie de nouvelles leçons et questions qui remplissent les niveaux du parcours, dans l'ordre du programme.",
         "- Chaque fait cite sa source ; les règles de langue et les calculs sont contrôlés avant publication.",
         "- Une erreur ? « Signaler une erreur » dans la correction : elle est vérifiée la nuit suivante.",
         "> Pour commencer : Aujourd'hui > la première séance du jour, ou Parcours > Français > niveau 1."] }
];
function tutoDemo(kind){
  if (kind==="steps") return h("ol",{class:"steps"}, ["Technique","Cours","À retenir","Évaluation"].map((s,i)=>h("li",{class:i===1?"cur":i<1?"done":""},s)));
  if (kind==="qcm") return h("div",{class:"opts demo"}, h("p",{class:"lbl"},"Exemple pendant l'épreuve : la réponse choisie est surlignée, sans correction"),
    h("div",{class:"opt"}, h("span",{class:"k"},"a)"), h("span",null,"des chou-fleurs")), h("div",{class:"opt sel"}, h("span",{class:"k"},"b)"), h("span",null,"des choux-fleurs")), h("div",{class:"opt"}, h("span",{class:"k"},"c)"), h("span",null,"des choux-fleur")));
  return null;
}
function vTuto(){
  const T = TUTO[tutoI], last = tutoI===TUTO.length-1;
  const done = ()=>{ state.tuto3 = today(); save(); go("home"); };
  const move = (d)=>{ tutoI += d; render(); window.scrollTo({top:0}); };
  return h("div",{class:"stack tuto"},
    h("div",{class:"row spread"}, h("p",{class:"lbl"},"Tutoriel " + (tutoI+1) + "/" + TUTO.length + " · " + T.lbl), h("button",{class:"btn ghost small",type:"button",onclick:done}, last ? "Fermer" : "Passer")),
    h("div",{class:"tdots","aria-label":"Étapes du tutoriel"}, TUTO.map((x,i)=>h("button",{type:"button",class:i===tutoI?"cur":i<tutoI?"done":"","aria-label":"Étape "+(i+1)+" : "+x.t,onclick:()=>{tutoI=i; render();}}))),
    h("h1",{class:"h-l"}, T.t),
    card("stack read", blocks(T.txt), T.demo ? tutoDemo(T.demo) : null,
      T.install ? (isStandalone() ? h("p",{class:"box"},"C'est fait : vous utilisez l'appli installée.") : h("div",{class:"stack"}, installButton(), installSteps())) : null),
    h("div",{class:"row spread"},
      tutoI>0 ? h("button",{class:"btn ghost",type:"button",onclick:()=>move(-1)},"Précédent") : h("span"),
      last ? h("button",{class:"btn primary",type:"button",onclick:done},"Commencer ma préparation") : h("button",{class:"btn primary",type:"button",onclick:()=>move(1)},"Suivant")));
}

// ---------- Démarrage ----------
let started = false;
function startApp(){
  const r = processMissed();
  if (state.pendingSanction || state.blockUntil > Date.now()) view = "sanction";
  else if (state.interrupt) view = "interruption";
  else if (!state.tuto3) { view = "tuto"; tutoI = 0; }
  else if (view === "tuto") view = "home";
  render();
  if (r.n && view !== "sanction" && view !== "interruption") toast(r.n + " séance(s) manquée(s) : −" + r.lost + " XP. Rattrapez-les dans les 14 jours.");
  if (!started){
    started = true; loadContent();
    // à minuit, l'appli ouverte compte aussi les séances manquées
    setInterval(()=>{ if (!state.exam && state.lastProc !== addDays(today(), -1)){ const x = processMissed(); if (x.n) { toast(x.n + " séance(s) manquée(s) : −" + x.lost + " XP."); if (!inExamView()) render(); } } }, 60000);
  }
}
indexLevels();
// une épreuve restée ouverte (appli fermée de force, page rechargée) est une sortie pendant l'épreuve
if (state.exam) interruptExam();
// Mises à jour : vérification à chaque ouverture ; la nouvelle version s'installe et l'appli se recharge (jamais pendant une épreuve)
if ("serviceWorker" in navigator){
  const hadController = !!navigator.serviceWorker.controller;
  let reloading = false;
  navigator.serviceWorker.addEventListener("controllerchange", ()=>{
    if (reloading || !hadController) return;
    if (state.exam || state.interrupt) return;
    reloading = true; location.reload();
  });
  window.addEventListener("load", ()=>navigator.serviceWorker.register("sw.js").then(reg=>{
    reg.update().catch(()=>{});
    document.addEventListener("visibilitychange", ()=>{ if (!document.hidden && !state.exam) reg.update().catch(()=>{}); });
  }).catch(()=>{}));
}
if (rememberOn() && !state.pendingSanction && !state.interrupt) startApp(); else showLock();
})();
