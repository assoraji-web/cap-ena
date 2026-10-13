// ============ CATALOGUE DES CONCOURS ============
// Conditions et épreuves relevées sur les textes officiels de la session 2026 (arrêtés INFJ du 9 janvier 2026,
// communiqué ENA du 13 mars 2026, communiqué Fonction publique). statut : "ouvert" (accessible), "diplome" (Master exigé), "statut" (réservé aux fonctionnaires).
const CSRC = {
  ena: {t:"ENA, communiqué n°063 du 13 mars 2026 (concours d'entrée en 2027)", u:"https://gucaci.ciconcours.com/uploads/communiques/6/Communique_ENA_2026.pdf"},
  enaCms: {t:"Ablanian, fiche du concours direct ENA cycle moyen supérieur 2026", u:"https://ablanian.ci/concours_admin/view.php?slug=enacmsdirect"},
  enaCs: {t:"Ablanian, fiche du concours direct ENA cycle supérieur 2026", u:"https://ablanian.ci/concours_admin/view.php?slug=enacs"},
  infjList: {t:"INFJ, liste et arrêtés des concours directs 2026", u:"https://infj.ciconcours.com/details/1"},
  ces: {t:"Arrêté n°0014/MJDH/CAB du 9 janvier 2026 (Conseiller de la protection judiciaire de l'enfance et de la jeunesse)", u:"https://infj.ciconcours.com/uploads/communiques/1/CONSEILLER%20D%20EDUCATION%20SURVEILLEE%20-%20DIRECT.pdf"},
  ies: {t:"Arrêté n°0016/MJDH/CAB du 9 janvier 2026 (Inspecteur de la protection judiciaire de l'enfance et de la jeunesse)", u:"https://infj.ciconcours.com/uploads/communiques/1/INSPECTEUR%20D%20EDUCATION%20SURVEILLEE%20-%20DIRECT.pdf"},
  agp: {t:"Arrêté n°0029/MJDH/CAB du 9 janvier 2026 (Attachés des greffes et parquets)", u:"https://infj.ciconcours.com/uploads/communiques/1/ATTACHES%20DES%20GREFFES%20ET%20PARQUETS%20-%20GREFFES.pdf"},
  agpa: {t:"Arrêté n°0030/MJDH/CAB du 9 janvier 2026 (Administrateurs des greffes et parquets)", u:"https://infj.ciconcours.com/uploads/communiques/1/ADMINISTRATEURS%20DES%20GREFFES%20ET%20PARQUETS%20-%20GREFFES.pdf"},
  asp: {t:"Arrêté n°0015/MJDH/CAB du 9 janvier 2026 (Attachés des services pénitentiaires)", u:"https://infj.ciconcours.com/uploads/communiques/1/ATTACHES%20DES%20SERVICES%20PENITENTIAIRES%20-%20EPP.pdf"},
  sa: {t:"Fonction publique, communiqué du concours direct de Secrétaire administratif 2026", u:"https://gucaci.ciconcours.com/uploads/communiques/1/CD%20SECRETAIRE%20ADMINISTRATIF.PDF"},
  liste: {t:"Liste officielle des concours administratifs 2026", u:"https://gucaci.ciconcours.com/uploads/communiques/LISTE_CONCOURS_ADMINISTRATIFS_OUVERTS_2026.pdf"}
};
const CONCOURS = [
 { id:"ena-cms", nom:"ENA, cycle moyen supérieur (direct)", org:"ENA", statut:"ouvert", prio:1,
   conditions:"Nationalité ivoirienne ; 18 à 40 ans au 31 décembre 2025 (session 2026) ; diplôme de fin de premier cycle universitaire, BTS ou DUT.", age:{max:40, ref:"31/12"},
   epreuves:[["Présélection : culture générale et aptitude verbale, anglais, logique (QCM)","1 h chacune · coef. 2",["fr","cg","ang","log"]],["Sujet d'ordre général","4 h · coef. 4",["sog"]],["Problèmes économiques et sociaux","3 h · coef. 3",["pes"]],["Résumé de texte","3 h · coef. 3",["ct"]],["Droit constitutionnel","3 h · coef. 3",["dc"]],["Oral avec le jury","coef. 3",["oral"]]],
   tracks:["fr","ang","cg","log","pes","dc","ct","sog","oral","da"], src:["ena","enaCms"], session2026:"Inscriptions du 16 mars au 30 avril 2026" },
 { id:"infj-ces", nom:"INFJ, Conseiller de la protection judiciaire de l'enfance et de la jeunesse (direct)", court:"INFJ · Conseiller PJEJ", org:"INFJ", statut:"ouvert", prio:2,
   conditions:"Nationalité ivoirienne ; 18 à 45 ans au 31 décembre 2026 ; DEUG, licence, BTS, DUT ou équivalent.", age:{max:45, ref:"31/12"},
   epreuves:[["Sujet d'ordre général","4 h · coef. 4",["sog"]],["Droits de l'enfant","4 h · coef. 4",["denf"]],["Organisation judiciaire","3 h · coef. 3",["oj"]],["Statut et déontologie de la fonction publique","3 h · coef. 3",["sfp"]],["Oral : exposé de culture générale (10 min de préparation)","coef. 3",["oral","cg"]]],
   tracks:["sog","denf","oj","sfp","oral","cg","fr"], src:["ces"], session2026:"Inscriptions du 21 janvier au 27 mars 2026 ; écrits les 22 et 23 août 2026", note:"Une note inférieure ou égale à 5/20 à une épreuve écrite est éliminatoire, sauf délibération motivée du jury." },
 { id:"infj-agp", nom:"INFJ, Attaché des greffes et parquets (direct)", court:"INFJ · Attaché des greffes", org:"INFJ", statut:"ouvert", prio:3,
   conditions:"Nationalité ivoirienne ; 18 à 40 ans au 1er janvier 2026 ; DEUG 2 ou équivalent ; aptitude physique (visite médicale).", age:{max:40, ref:"01/01"},
   epreuves:[["Sujet d'ordre général","4 h · coef. 4",["sog"]],["Organisation politique, administrative et judiciaire","3 h · coef. 3",["opaj"]],["Droit administratif","3 h · coef. 3",["da"]],["Informatique et bureautique","2 h · coef. 2",["info"]],["Oral : exposé (15 min de préparation, 20 min)","coef. 3",["oral","cg"]]],
   tracks:["sog","opaj","da","info","oral","cg","fr"], src:["agp"], session2026:"Inscriptions du 19 janvier au 1er mars 2026 ; écrits les 1er et 2 août 2026", note:"Une note inférieure ou égale à 5/20 à une épreuve écrite est éliminatoire, sauf délibération motivée du jury." },
 { id:"infj-asp", nom:"INFJ, Attaché des services pénitentiaires (direct)", court:"INFJ · Attaché pénitentiaire", org:"INFJ", statut:"ouvert", prio:4,
   conditions:"Nationalité ivoirienne ; 18 à 40 ans au 31 décembre 2026 ; DEUG 2, licence ou équivalent ; visite médicale paramilitaire.", age:{max:40, ref:"31/12"},
   epreuves:[["Sujet d'ordre général","4 h · coef. 4",["sog"]],["Organisation du système pénitentiaire de Côte d'Ivoire","3 h · coef. 3",["pen"]],["Droit administratif","3 h · coef. 3",["da"]],["Organisation judiciaire de Côte d'Ivoire","3 h · coef. 3",["oj"]],["Oral : exposé de culture générale (10 min de préparation, 20 min)","coef. 3",["oral","cg"]]],
   tracks:["sog","pen","da","oj","oral","cg","fr"], src:["asp"], session2026:"Inscriptions du 19 janvier au 1er mars 2026 ; écrits les 8 et 9 août 2026", note:"Une note inférieure ou égale à 5/20 à une épreuve écrite est éliminatoire, sauf délibération motivée du jury." },
 { id:"fp-sa", nom:"Fonction publique, Secrétaire administratif (direct, B3)", court:"Secrétaire administratif", org:"Fonction publique", statut:"ouvert", prio:5,
   conditions:"Nationalité ivoirienne ; licence ; 18 à 42 ans au 31 décembre 2025 (session 2026) ; 100 postes en 2026.", age:{max:42, ref:"31/12"},
   epreuves:[["Logique","1 h",["log"]],["Organisation politique, administrative et judiciaire (OPAJ)","1 h",["opaj"]],["Sujet d'ordre général (dissertation)","1 h",["sog"]]],
   tracks:["log","opaj","sog","fr","cg"], src:["sa"], session2026:"Inscriptions du 16 mars au 30 avril 2026 ; prise de vue dans les directions régionales, dont Abengourou", note:"Le communiqué donne une durée d'une heure par épreuve ; je ne peux pas confirmer les coefficients, illisibles dans le tableau du communiqué." },
 { id:"ena-cs", nom:"ENA, cycle supérieur (direct)", org:"ENA", statut:"diplome", prio:6,
   conditions:"Nationalité ivoirienne ; 18 à 43 ans au 31 décembre 2025 ; diplôme de fin de second cycle de l'enseignement supérieur (Master).", age:{max:43, ref:"31/12"},
   epreuves:[["Présélection : culture générale, anglais, logique (QCM)","",["fr","cg","ang","log"]],["Note de synthèse","5 h · coef. 5",["ns"]],["Sujet d'ordre général","4 h · coef. 4",["sog"]],["Problèmes économiques et sociaux","3 h · coef. 3",["pes"]],["Droit administratif","3 h · coef. 3",["da"]],["Oral avec le jury","coef. 3",["oral"]]],
   tracks:["fr","ang","cg","log","ns","sog","pes","da","oral"], src:["ena","enaCs"], lock:"Il faut un Master (ou une maîtrise obtenue au plus tard en 2016)." },
 { id:"infj-ies", nom:"INFJ, Inspecteur de la protection judiciaire de l'enfance et de la jeunesse (direct)", court:"INFJ · Inspecteur PJEJ", org:"INFJ", statut:"diplome", prio:7,
   conditions:"Nationalité ivoirienne ; 18 à 45 ans au 31 décembre 2026 ; maîtrise, master ou équivalent.", age:{max:45, ref:"31/12"},
   epreuves:[["Sujet d'ordre général","4 h · coef. 4",["sog"]],["Droits de l'enfant","4 h · coef. 4",["denf"]],["Organisation judiciaire","3 h · coef. 3",["oj"]],["Statut et déontologie de la fonction publique","3 h · coef. 3",["sfp"]],["Oral : exposé de culture générale","coef. 3",["oral","cg"]]],
   tracks:["sog","denf","oj","sfp","oral","cg","fr"], src:["ies"], lock:"Il faut une maîtrise ou un Master." },
 { id:"infj-agpa", nom:"INFJ, Administrateur des greffes et parquets (direct)", court:"INFJ · Administrateur des greffes", org:"INFJ", statut:"diplome", prio:8,
   conditions:"Nationalité ivoirienne ; 18 à 40 ans au 1er janvier 2026 ; maîtrise, master ou équivalent.", age:{max:40, ref:"01/01"},
   epreuves:[["Sujet d'ordre général","4 h · coef. 4",["sog"]],["Droit administratif","3 h · coef. 3",["da"]],["Droit civil ou droit commercial général","3 h · coef. 3",["dciv"]],["Organisation judiciaire","2 h · coef. 2",["oj"]],["Informatique et bureautique","2 h · coef. 2",["info"]],["Oral : sujet de culture générale (20 min)","coef. 3",["oral","cg"]]],
   tracks:["sog","da","dciv","oj","info","oral","cg","fr"], src:["agpa"], lock:"Il faut une maîtrise ou un Master." }
];
// Concours professionnels de la liste 2026 : réservés aux fonctionnaires (ancienneté exigée). Épreuves non intégrées : je ne peux pas les confirmer.
const CONCOURS_PRO = [
 ["Administrateur des services financiers, options Trésor, Impôts, Finances générales","A4"],
 ["Inspecteur du Trésor","A3"], ["Attaché des finances","A3"], ["Contrôleur des impôts, Contrôleur du Trésor","B3"],
 ["Administrateur des services financiers, options Douanes et Commerce ; Inspecteur des douanes ; Inspecteur du commerce","A4 / A3"],
 ["Conseiller d'éducation permanente","A3"], ["Administrateur social ; Administrateur du travail et des lois sociales","A4"],
 ["Attaché social ; Attaché du travail et des affaires sociales","A3"], ["Administrateur civil","A4"], ["Attaché de direction ; Attaché administratif","A3"],
 ["ENA, concours professionnels (cycles supérieur, moyen supérieur, moyen)","selon le cycle"]
];
