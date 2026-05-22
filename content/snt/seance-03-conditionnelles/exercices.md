---
title: "Exercices — Séance 03 Conditionnelles"
---

### Exercice 1 — Qui a gagné ?

On souhaite écrire une fonction `gagnant(scoreA, scoreB)` qui prend deux scores entiers et renvoie :
- `"équipe A"` si scoreA > scoreB
- `"équipe B"` si scoreB > scoreA
- `"Match nul"` si les scores sont égaux

**Q1.** Écrire la fonction `gagnant`.

**Q2.** Que renvoie `gagnant(4, 1)` ? `gagnant(2, 3)` ? `gagnant(2, 2)` ?

---

### Exercice 2 — Code puzzle

Voici quatre extraits de code. Pour chacun, indiquer ce qui s'affiche à l'écran (ou l'erreur produite).

```python
# Programme A
x = 12
if x > 10:
    print("x est grand")
print("Fin")
```

```python
# Programme B
x = 5
if x > 3:
print("x est supérieur à 3")
print("Fin")
```

```python
# Programme C
x = 3
if x > 10:
    print("x est grand")
print("Fin")
```

```python
# Programme D
x = 3
if x > 5:
    print("Premier message")
elif x > 2:
    print("Deuxième message")
    print("Troisième message")
else:
    print("Quatrième message")
```

---

### Exercice 3 — Indentation et branchements

Réécrire correctement le programme B de l'exercice 2, puis expliquer pourquoi Python est strict sur l'indentation.

---

### Exercice 4 — Âge requis

Écrire une fonction `age_requis(age)` qui renvoie `True` si la personne a 18 ans ou plus, et `False` sinon.

Tester avec `age_requis(17)` et `age_requis(18)`.

---

### Exercice 5 — IMC

L'Indice de Masse Corporelle (IMC) se calcule ainsi : `imc = masse / taille²`

**Q1.** Écrire une fonction `imc(masse, taille)` qui renvoie l'IMC arrondi à une décimale.

**Q2.** Écrire une fonction `diagnostic(masse, taille)` qui renvoie :
- `"Insuffisance pondérale"` si IMC < 18.5
- `"Corpulence normale"` si IMC < 25
- `"Surpoids"` si IMC < 30
- `"Obésité"` sinon

Tester avec `diagnostic(70, 1.75)` et `diagnostic(50, 1.75)`.

---

### Exercice 6 — Tarif cinéma

Une salle de cinéma applique les tarifs suivants :
- Moins de 14 ans : 5.50 €
- De 14 à 25 ans : 7.80 €
- Plus de 25 ans : 10.20 €

Écrire une fonction `place(age)` qui renvoie le tarif correspondant.

Tester avec `place(10)`, `place(18)`, `place(30)`.

---

### Exercice 7 — Location de voiture

Une agence loue des voitures au tarif suivant :
- 40 € par jour
- 0.15 € par km si la distance parcourue est ≤ 250 km
- 0.31 € par km si la distance parcourue est > 250 km

**Q1.** Écrire une fonction `tarif(j, d)` où `j` est le nombre de jours et `d` la distance en km.

**Q2.** Calculer `tarif(1, 125)` et `tarif(1, 300)`.

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

### Exercice 9 — Semestre validé ?

Un semestre universitaire est validé si :
- la moyenne générale est ≥ 10, **et**
- aucune note n'est inférieure à 5.

Écrire une fonction `semestre_valide(moyenne, note_min)` qui renvoie `True` ou `False`.

Tester avec : `semestre_valide(11, 6)`, `semestre_valide(11, 4)`, `semestre_valide(9, 7)`.

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
- `"Insuffisant"` si moy < 10
- `"Assez bien"` si moy < 12
- `"Bien"` si moy < 14
- `"Très bien"` sinon

**Q3.** Écrire une fonction `bulletin(prenom, n1, n2, n3, n4)` qui renvoie une chaîne du type :
`"Bilan d'Alice - Moyenne : 13.0/20 - Mention : Assez bien"`

Tester avec `bulletin("Alice", 14, 12, 16, 10)`.
