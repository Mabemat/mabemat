---
title: "Correction — Séance 03 Conditionnelles"
---

### Exercice 1 — Qui a gagné ?

**Q1.** Nom : `gagnant` — Paramètres : 2 (`scoreA`, `scoreB`) — Valeur renvoyée : 1 (`"équipe A"`, `"équipe B"` ou `"Match nul"`).

**Q2.**
```python
def gagnant(scoreA, scoreB):
    if scoreA > scoreB:
        return "équipe A"
    elif scoreB > scoreA:
        return "équipe B"
    else:
        return "Match nul"
```

**Q3.** `gagnant(4, 1)` → `"équipe A"` ✓

**Q4.** `gagnant(2, 3)` → `"équipe B"` ✓

**Q5.** `gagnant(2, 2)` → `"Match nul"` ✓

---

### Exercice 2 — Vérifier sa compréhension

**Q1.** Exercice CodePuzzle interactif — vérifier automatiquement dans le notebook.

**Q2.** Exercice CodePuzzle interactif — vérifier automatiquement dans le notebook.

**Q3.** Exercice CodePuzzle interactif — vérifier automatiquement dans le notebook.

**Q4.** Exercice CodePuzzle interactif — vérifier automatiquement dans le notebook.

---

### Exercice 3 — Jeu d'indentation

**Q1.**

| Programme | Résultat |
|:---:|:---|
| A | `x est grand` puis `Fin` |
| B | `IndentationError` |
| C | `Fin` |
| D | `Troisième message` |

**Programme A** — Affiche :
```
x est grand
Fin
```
x vaut 12, donc `12 > 10` est vrai → le bloc du `if` s'exécute. `print("Fin")` n'est pas indenté donc il s'exécute toujours.

**Programme B** — Erreur `IndentationError` : le `print` après le `if` n'est pas indenté, Python ne sait pas à quel bloc il appartient.

**Programme C** — Affiche :
```
Fin
```
x vaut 3, donc `3 > 10` est faux → le bloc du `if` est ignoré. `print("Fin")` s'exécute quand même car il n'est pas dans le `if`.

**Programme D** — Affiche :
```
Troisième message
```
x vaut 3 : `3 > 5` est faux → les deux `print` indentés ("Premier message" et "Deuxième message") sont ignorés. Seul `print("Troisième message")`, non indenté, s'exécute toujours.

**Q2.** Vérifier par exécution.

---

### Exercice 4 — Inscription sur un réseau social

**Q1.** Exercice CodePuzzle interactif — identifier le code correct parmi les propositions. Pas de correction écrite.

**Q2.**
```python
def age_requis(age):
    if age >= 13:
        return True
    else:
        return False
```

**Q3.** Vérifications :

| Appel | Résultat |
|---|---|
| `age_requis(12)` | `False` |
| `age_requis(13)` | `True` |

---

### Exercice 5 — Application de fitness

**Q1.**
```python
def imc(masse, taille):
    indice = masse / (taille ** 2)
    return indice
```

**Q2.** Diagnostic simple (dans la norme ou non) — résultat du CodePuzzle :
```python
def diagnostic(masse, taille):
    valeur = imc(masse, taille)
    if valeur < 18.5:
        return "Insuffisance pondérale"
    elif valeur <= 25:
        return "Corpulence normale"
    else:
        return "Hors norme"
```

| Appel | IMC | Résultat |
|---|---|---|
| `diagnostic(70, 1.75)` | 22.9 | `"Corpulence normale"` |
| `diagnostic(50, 1.75)` | 16.3 | `"Insuffisance pondérale"` |

**Q3.** Vérifier par exécution pour les 3 personnages.

**Q4.** Diagnostic précis (4 catégories) :
```python
def diagnostic(masse, taille):
    valeur = imc(masse, taille)
    if valeur < 18.5:
        return "Insuffisance pondérale"
    elif valeur <= 25:
        return "Corpulence normale"
    elif valeur <= 30:
        return "Surpoids"
    else:
        return "Obésité"
```

**Q5.** Vérifier par exécution pour les 3 personnages avec la nouvelle fonction `diagnostic`.

---

### Exercice 6 — Prix au cinéma

```python
def place(age):
    if age < 18:
        return 7
    else:
        return 11
```

| Appel | Résultat |
|---|---|
| `place(10)` | `7` |
| `place(17)` | `7` |
| `place(18)` | `11` |
| `place(30)` | `11` |

---

### Exercice 7 — Location de voiture

**Q1.** 125 km ≤ 250 km : pas de surcoût. Tarif = 52,16 € × 1 jour = **52,16 €**.

**Q2.** 300 km > 250 km : surcoût sur 50 km. Tarif = 52,16 + (300 − 250) × 0,31 = 52,16 + 15,50 = **67,66 €**.

**Q3.**
```python
def tarif(j, d):
    if d <= 250:
        return 52.16 * j
    else:
        return 52.16 * j + (d - 250) * 0.31
```

| Appel | Calcul | Résultat |
|---|---|---|
| `tarif(1, 125)` | 52.16 × 1 | `52.16` |
| `tarif(1, 300)` | 52.16 × 1 + 50 × 0.31 | `67.66` |

---

### Exercice 8 — Mention au bac

```python
def mention_bac(moy):
    if moy < 8:
        return "Recalé"
    elif moy < 10:
        return "Rattrapage"
    elif moy < 12:
        return "Sans mention"
    elif moy < 14:
        return "Assez bien"
    elif moy < 16:
        return "Bien"
    elif moy < 18:
        return "Très bien"
    else:
        return "Félicitations du jury"
```

| Appel | Résultat |
|---|---|
| `mention_bac(6)` | `"Recalé"` |
| `mention_bac(9)` | `"Rattrapage"` |
| `mention_bac(11)` | `"Sans mention"` |
| `mention_bac(13)` | `"Assez bien"` |
| `mention_bac(15)` | `"Bien"` |
| `mention_bac(17)` | `"Très bien"` |
| `mention_bac(19)` | `"Félicitations du jury"` |

---

### Exercice 9 — Combiner des conditions

**Q1.** Exercice CodePuzzle interactif — mettre les lignes dans le bon ordre. Pas de correction écrite.

**Q2.**
```python
def semestre_valide(noteA, noteB, noteC):
    if noteA >= 10 and noteB >= 10 and noteC >= 10:
        return True
    else:
        return False
```

| Appel | Résultat | Raison |
|---|---|---|
| `semestre_valide(11, 12, 10)` | `True` | les trois notes ≥ 10 |
| `semestre_valide(11, 8, 10)` | `False` | noteB = 8 < 10 |
| `semestre_valide(9, 12, 11)` | `False` | noteA = 9 < 10 |

---

### Exercice 10 — Fonctions avec conditions

**Q1.**
```python
def est_pair(n):
    if n % 2 == 0:
        return True
    else:
        return False
```

| Appel | Résultat |
|---|---|
| `est_pair(4)` | `True` |
| `est_pair(7)` | `False` |

**Q2.**
```python
def bilan_score(score):
    if score >= 10:
        return "Félicitations !"
    else:
        return "Continue comme ça !"
```

| Appel | Résultat |
|---|---|
| `bilan_score(12)` | `"Félicitations !"` |
| `bilan_score(7)` | `"Continue comme ça !"` |

---

### Exercice 11 — La piscine municipale

**Q1.**
```python
def tarif_entree(age):
    if age < 12:
        return 3.0
    elif age <= 25:
        return 4.0
    elif age <= 64:
        return 6.0
    else:
        return 4.5
```

| Appel | Résultat |
|---|---|
| `tarif_entree(8)` | `3.0` |
| `tarif_entree(17)` | `4.0` |
| `tarif_entree(40)` | `6.0` |
| `tarif_entree(70)` | `4.5` |

**Q2.**

| Personne | Âge | Tarif |
|---|---|---|
| Adulte 1 | 35 ans | 6,00 € |
| Adulte 2 | 38 ans | 6,00 € |
| Enfant 1 | 7 ans | 3,00 € |
| Enfant 2 | 10 ans | 3,00 € |
| Grand-parent | 68 ans | 4,50 € |
| **Total** | | **22,50 €** |

```python
adulte1 = tarif_entree(35)   # 6.0
adulte2 = tarif_entree(38)   # 6.0
enfant1 = tarif_entree(7)    # 3.0
enfant2 = tarif_entree(10)   # 3.0
grandparent = tarif_entree(68)  # 4.5
total = adulte1 + adulte2 + enfant1 + enfant2 + grandparent
print(total)   # 22.5
```

**Q3 — Défi.**
```python
def ticket(nom, age):
    return "Ticket de " + nom + " (" + str(age) + " ans) : " + str(tarif_entree(age)) + " €"
```

Exemple : `ticket("Léa", 17)` → `"Ticket de Léa (17 ans) : 4.0 €"`

---

### Exercice 12 — Le bulletin scolaire

**Q1.**
```python
def moyenne(n1, n2, n3, n4):
    return (n1 + n2 + n3 + n4) / 4
```

**Q2.**
```python
def mention(moy):
    if moy >= 16:
        return "Très bien"
    elif moy >= 14:
        return "Bien"
    elif moy >= 12:
        return "Assez bien"
    elif moy >= 10:
        return "Passable"
    else:
        return "Insuffisant"
```

| Appel | Résultat |
|---|---|
| `mention(16.5)` | `"Très bien"` |
| `mention(11)` | `"Assez bien"` |
| `mention(8)` | `"Insuffisant"` |

**Q3.**
```python
def bulletin(prenom, n1, n2, n3, n4):
    moy = moyenne(n1, n2, n3, n4)
    ment = mention(moy)
    return "Bilan de " + prenom + " - Moyenne : " + str(moy) + "/20 - Mention : " + ment
```

Vérification : `bulletin("Alice", 14, 12, 16, 10)`
- `moyenne(14, 12, 16, 10)` = (14+12+16+10)/4 = 52/4 = **13.0**
- `mention(13.0)` → 13.0 ≥ 12 et < 14 → **"Assez bien"**
- Résultat : `"Bilan d'Alice - Moyenne : 13.0/20 - Mention : Assez bien"`

**Q4.** Tester `bulletin` pour trois élèves (résultats personnels, pas de correction type). Vérifier qu'on obtient au moins un "Très bien" (≥ 16), un "Passable" (10–12) et un "Bien" (14–16).
