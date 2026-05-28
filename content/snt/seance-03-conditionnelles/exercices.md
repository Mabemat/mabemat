---
title: "Exercices — Séance 03 Conditionnelles"
---

### Exercice 1 — Qui a gagné ?

On considère la fonction suivante :

```python
def gagnant(scoreA, scoreB):
    if scoreA > scoreB:
        v = "équipe A"
    elif scoreA < scoreB:
        v = "équipe B"
    else:
        v = "Match nul"
    return v
```

**Q1.** Inspectez ce code : quel est son nom ? Quels sont ses paramètres ? Combien de branches `if`/`elif`/`else` contient-il ?

**Q2.** Écrivez cette fonction dans la cellule ci-dessous (*sans copier-coller !*) et exécutez-la.

**Q3.** Faites l'appel `gagnant(4, 1)` et vérifiez que la valeur renvoyée est cohérente.

**Q4.** L'équipe A a marqué 2 buts et l'équipe B en a marqué 3. Quel appel faut-il faire ? Faites-le.

**Q5.** Proposez un appel qui renvoie `"Match nul"` et testez-le.

---

### Exercice 2 — Vérifier sa compréhension

Exercice CodePuzzle interactif à réaliser dans le notebook. Les questions vérifient automatiquement votre compréhension des instructions conditionnelles.

**Q1.** Question interactive 1 — réaliser dans le notebook.

**Q2.** Question interactive 2 — réaliser dans le notebook.

**Q3.** Question interactive 3 — réaliser dans le notebook.

**Q4.** Question interactive 4 — réaliser dans le notebook.

---

### Exercice 3 — Jeu d'indentation

Voici quatre programmes. Avant de les exécuter, prédisez ce que chacun affiche (ou si une erreur se produit).

**Q1.** Complétez la colonne « Résultat prédit » *sans exécuter les programmes*.

| Programme | Résultat prédit | Résultat réel |
|:---:|:---|:---|
| A | *à compléter* | |
| B | *à compléter* | |
| C | *à compléter* | |
| D | *à compléter* | |

**Q2.** Exécutez chaque programme dans le notebook et complétez la colonne « Résultat réel ».

---

### Exercice 4 — Inscription sur un réseau social

Pour s'inscrire sur certains réseaux sociaux, il faut avoir au moins **13 ans**.

**Q1.** Exercice CodePuzzle interactif dans le notebook : identifier le code correct de la fonction `age_requis` parmi les propositions.

**Q2.** Copiez le code correct de la fonction `age_requis(age)` dans la cellule et exécutez-la.

**Q3.** Testez la fonction avec un appel renvoyant `True` et un appel renvoyant `False`.

---

### Exercice 5 — IMC

L'Indice de Masse Corporelle (IMC) se calcule ainsi : `imc = masse / taille²`

**Q1.** Écrire une fonction `imc(masse, taille)` qui renvoie l'IMC arrondi à une décimale.

**Q2.** Écrire une fonction `diagnostic(masse, taille)` qui renvoie :
- `"Insuffisance pondérale"` si IMC < 18.5
- `"Corpulence normale"` si IMC < 25
- `"Surpoids"` si IMC < 30
- `"Obésité"` sinon

**Q3.** Copiez la fonction `diagnostic` dans la cellule et testez-la pour les 3 personnages du notebook.

**Q4.** Adaptez la fonction `diagnostic` pour obtenir une analyse plus précise en 4 catégories :
- IMC < 18.5 : `"Insuffisance pondérale"`
- 18.5 ≤ IMC ≤ 25 : `"Corpulence normale"`
- 25 < IMC ≤ 30 : `"Surpoids"`
- IMC > 30 : `"Obésité"`

**Q5.** Testez la nouvelle fonction pour les 3 personnages précédents.

---

### Exercice 6 — Prix au cinéma

Dans un cinéma, la place adulte coûte **11 €** et la place enfant (moins de 18 ans) coûte **7 €**.

Écrire une fonction `place(age)` qui renvoie le tarif correspondant.

Tester avec `place(10)`, `place(17)`, `place(18)`, `place(30)`.

---

### Exercice 7 — Location de voiture

Un service de location propose une voiture à **52,16 € la journée**. La personne peut parcourir **250 km sans surcoût**. Au-delà, elle paie **0,31 € par km supplémentaire**.

**Q1.** Combien paie une personne ayant parcouru 125 km en 1 jour ?

**Q2.** Combien paie une personne ayant parcouru 300 km en 1 jour ?

**Q3.** Écrire une fonction `tarif(j, d)` où `j` est le nombre de jours et `d` la distance parcourue en km, qui renvoie le tarif total à payer.

---

### Exercice 8 — Mention au bac

Écrire une fonction `mention_bac(moy)` qui renvoie la mention correspondant à une moyenne sur 20 :
- < 8 : `"Recalé"`
- < 10 : `"Rattrapage"`
- < 12 : `"Sans mention"`
- < 14 : `"Assez bien"`
- < 16 : `"Bien"`
- < 18 : `"Très bien"`
- ≥ 18 : `"Félicitations du jury"`

Tester avec plusieurs valeurs.

---

### Exercice 9 — Combiner des conditions

Un semestre est validé si les **trois notes** sont toutes ≥ 10.

**Q1.** Exercice CodePuzzle interactif dans le notebook : remettre les lignes de la fonction `semestre_valide` dans le bon ordre.

**Q2.** Copiez la fonction `semestre_valide(noteA, noteB, noteC)` dans la cellule et testez-la :
- `semestre_valide(11, 12, 10)` → `True`
- `semestre_valide(11, 8, 10)` → `False`
- `semestre_valide(9, 12, 11)` → `False`

---

### Exercice 10 — Pair ou impair / Bilan de score

**Q1.** Écrire une fonction `est_pair(n)` qui renvoie `True` si n est pair, `False` sinon. (Rappel : `n % 2` donne le reste de la division de n par 2.)

**Q2.** Écrire une fonction `bilan_score(score)` qui renvoie :
- `"Excellent"` si score ≥ 90
- `"Bien"` si score ≥ 70
- `"Moyen"` si score ≥ 50
- `"Insuffisant"` sinon

---

### Exercice 11 — Piscine municipale

La piscine applique les tarifs suivants :
- Moins de 6 ans : gratuit (0 €)
- De 6 à 17 ans : 2.50 €
- 18 ans et plus : 4.00 €

**Q1.** Écrire une fonction `tarif_entree(age)` qui renvoie le tarif.

**Q2.** Écrire une fonction `tarif_famille(age1, age2, age3, age4)` qui renvoie le total pour une famille de 4 personnes.

**Q3.** Tester `tarif_famille(35, 38, 10, 4)`.

---

### Exercice 12 — Bulletin scolaire

**Q1.** Écrire une fonction `moyenne(n1, n2, n3, n4)` qui renvoie la moyenne de quatre notes.

**Q2.** Écrire une fonction `mention(moy)` qui renvoie :
- `"Très bien"` si moy ≥ 16
- `"Bien"` si moy ≥ 14
- `"Assez bien"` si moy ≥ 12
- `"Passable"` si moy ≥ 10
- `"Insuffisant"` sinon

**Q3.** Écrire une fonction `bulletin(prenom, n1, n2, n3, n4)` qui renvoie une chaîne du type :
`"Bilan d'Alice - Moyenne : 13.0/20 - Mention : Assez bien"`

Tester avec `bulletin("Alice", 14, 12, 16, 10)`.

**Q4.** Testez `bulletin` pour trois élèves : l'un doit obtenir "Très bien", l'autre "Passable", le troisième "Bien".
