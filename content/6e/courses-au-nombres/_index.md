---
title: "Courses au nombres"
description: "Calcul mental chronométré · 6ème"
layout: "courses"
courses:
  - num: 1
    date: "2026-09-03"
    has_correction: true
  - num: 2
    date: "2026-09-14"
    has_correction: false
  - num: 3
    date: "2026-09-21"
    has_correction: false
  - num: 4
    date: "2026-09-28"
    has_correction: false
  - num: 5
    date: "2026-10-05"
    has_correction: false
  - num: 6
    date: "2026-11-02"     # +4 sem (oct 19 = Toussaint)
    has_correction: false
  - num: 7
    date: "2026-11-16"
    has_correction: false
  - num: 8
    date: "2026-11-30"
    has_correction: false
  - num: 9
    date: "2026-12-14"
    has_correction: false
  - num: 10
    date: "2027-01-04"     # +3 sem (déc 28 = Noël)
    has_correction: false
  - num: 11
    date: "2027-01-18"
    has_correction: false
  - num: 12
    date: "2027-02-01"
    has_correction: false
  - num: 13
    date: "2027-02-22"     # +3 sem (fév 15 = Hiver)
    has_correction: false
  - num: 14
    date: "2027-03-08"
    has_correction: false
  - num: 15
    date: "2027-03-22"
    has_correction: false
  - num: 16
    date: "2027-04-19"     # +4 sem (avr 5 = Printemps)
    has_correction: false
  - num: 17
    date: "2027-05-03"
    has_correction: false
  - num: 18
    date: "2027-05-24"     # +3 sem (mai 17 = Pentecôte)
    has_correction: false
  - num: 19
    date: "2027-06-07"
    has_correction: false
  - num: 20
    date: "2027-06-21"
    has_correction: false
  - num: 21
    date: "2027-06-28"
    has_correction: false

---

<!--
  Pour ajouter une nouvelle course :
  - copie un bloc dans la liste `courses:` ci-dessus
  - dépose le PDF dans `static/pdf/courses-au-nombres/` avec le nom :
       course-01.pdf            (énoncé)
       course-01-correction.pdf (correction, si has_correction: true)
  - les noms sont basés sur `num` (zéro-padding sur 2 chiffres)

  Champs disponibles par course :
    num            (obligatoire)  numéro de la course
    title          (optionnel)    titre — sinon "Course n°X"
    date           (optionnel)    semaine du, format YYYY-MM-DD
    has_correction (obligatoire)  true / false
    enonce_pdf     (optionnel)    nom de fichier custom pour l'énoncé
    correction_pdf (optionnel)    nom de fichier custom pour la correction
-->
