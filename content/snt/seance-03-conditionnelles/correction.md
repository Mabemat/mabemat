---
title: "Correction — Séance 03 Conditionnelles"
---

### Exercice 1 — Qui a gagné ?

**Q1.**
```python
def gagnant(scoreA, scoreB):
    if scoreA > scoreB:
        return "équipe A"
    elif scoreB > scoreA:
        return "équipe B"
    else:
        return "Match nul"
```

**Q2.**

| Appel | Résultat |
|---|---|
| `gagnant(4, 1)` | `"équipe A"` |
| `gagnant(2, 3)` | `"équipe B"` |
| `gagnant(2, 2)` | `"Match nul"` |

---

### Exercice 2 — Code puzzle

**Programme A** — Affiche :
```
x est grand
Fin
```
x vaut 12, donc 12 > 10 est vrai → le bloc du `if` s'exécute. `print("Fin")` n'est pas indenté donc il s'exécute toujours.

**Programme B** — Erreur `IndentationError` : le `print` après le `if` n'est pas indenté, Python ne sait pas quel bloc il appartient.

**Programme C** — Affiche :
```
Fin
```
x vaut 3, donc 3 > 10 est faux → le bloc du `if` est ignoré. `print("Fin")` s'exécute quand même car il n'est pas dans le `if`.

**Programme D** — Affiche :
```
Troisième message
```
x vaut 3 : `3 > 5` est faux (on passe), `3 > 2` est vrai → on entre dans le `elif` et on affiche les deux lignes de ce bloc. Donc les deux lignes affichées sont "Deuxième message" et "Troisième message".

---

### Exercice 3 — Indentation et branchements

```python
x = 5
if x > 3:
    print("x est supérieur à 3")
print("Fin")
```

Python utilise l'indentation (espaces ou tabulations) pour délimiter les blocs de code. Contrairement à d'autres langages qui utilisent des accolades `{}`, Python exige que tout ce qui est dans un `if`, un `elif`, un `else` ou une fonction soit décalé d'exactement un niveau vers la droite.

---

### Exercice 4 — Âge requis

```python
def age_requis(age):
    if age >= 18:
        return True
    else:
        return False
```

| Appel | Résultat |
|---|---|
| `age_requis(17)` | `False` |
| `age_requis(18)` | `True` |

---

### Exercice 5 — IMC

**Q1.**
```python
def imc(masse, taille):
    return round(masse / taille**2, 1)
```

**Q2.**
```python
def diagnostic(masse, taille):
    valeur = imc(masse, taille)
    if valeur < 18.5:
        return "Insuffisance pondérale"
    elif valeur < 25:
        return "Corpulence normale"
    elif valeur < 30:
        return "Surpoids"
    else:
        return "Obésité"
```

| Appel | IMC | Résultat |
|---|---|---|
| `diagnostic(70, 1.75)` | 22.9 | `"Corpulence normale"` |
| `diagnostic(50, 1.75)` | 16.3 | `"Insuffisance pondérale"` |

---

### Exercice 6 — Tarif cinéma

```python
def place(age):
    if age < 14:
        return 5.50
    elif age <= 25:
        return 7.80
    else:
        return 10.20
```

| Appel | Résultat |
|---|---|
| `place(10)` | `5.5` |
| `place(18)` | `7.8` |
| `place(30)` | `10.2` |

---

### Exercice 7 — Location de voiture

**Q1.**
```python
def tarif(j, d):
    if d <= 250:
        return 40 * j + 0.15 * d
    else:
        return 40 * j + 0.31 * d
```

**Q2.**

| Appel | Calcul | Résultat |
|---|---|---|
| `tarif(1, 125)` | 40×1 + 0.15×125 | `58.75` |
| `tarif(1, 300)` | 40×1 + 0.31×300 | `133.0` |

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

### Exercice 9 — Semestre validé ?

```python
def semestre_valide(moyenne, note_min):
    if moyenne >= 10 and note_min >= 5:
        return True
    else:
        return False
```

| Appel | Résultat | Raison |
|---|---|---|
| `semestre_valide(11, 6)` | `True` | 11≥10 et 6≥5 |
| `semestre_valide(11, 4)` | `False` | 4 < 5 |
| `semestre_valide(9, 7)` | `False` | 9 < 10 |

---

### Exercice 10 — Pair ou impair / Bilan de score

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
    if score >= 90:
        return "Excellent"
    elif score >= 70:
        return "Bien"
    elif score >= 50:
        return "Moyen"
    else:
        return "Insuffisant"
```

---

### Exercice 11 — Piscine municipale

**Q1.**
```python
def tarif_entree(age):
    if age < 6:
        return 0
    elif age <= 17:
        return 2.50
    else:
        return 4.00
```

**Q2.**
```python
def tarif_famille(age1, age2, age3, age4):
    return tarif_entree(age1) + tarif_entree(age2) + tarif_entree(age3) + tarif_entree(age4)
```

**Q3.**

| Personne | Âge | Tarif |
|---|---|---|
| Adulte 1 | 35 ans | 4.00 € |
| Adulte 2 | 38 ans | 4.00 € |
| Enfant 1 | 10 ans | 2.50 € |
| Enfant 2 | 4 ans | 0.00 € |
| **Total** | | **10.50 €** |

`tarif_famille(35, 38, 10, 4)` → `10.5`

---

### Exercice 12 — Bulletin scolaire

**Q1.**
```python
def moyenne(n1, n2, n3, n4):
    return (n1 + n2 + n3 + n4) / 4
```

**Q2.**
```python
def mention(moy):
    if moy < 10:
        return "Insuffisant"
    elif moy < 12:
        return "Assez bien"
    elif moy < 14:
        return "Bien"
    else:
        return "Très bien"
```

**Q3.**
```python
def bulletin(prenom, n1, n2, n3, n4):
    moy = moyenne(n1, n2, n3, n4)
    ment = mention(moy)
    return "Bilan de " + prenom + " - Moyenne : " + str(moy) + "/20 - Mention : " + ment
```

Vérification : `bulletin("Alice", 14, 12, 16, 10)`
- `moyenne(14, 12, 16, 10)` = (14+12+16+10)/4 = 52/4 = **13.0**
- `mention(13.0)` → 13.0 ≥ 12 et < 14 → **"Bien"**
- Résultat : `"Bilan d'Alice - Moyenne : 13.0/20 - Mention : Bien"`
