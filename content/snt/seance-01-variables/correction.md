---
title: "Correction"
---

### Exercice 1 — Affectations simples et opérations

```python
a = 15
b = 10
c = a + b   # c = 25
d = c / 2   # d = 12.5
```

**Traçage des variables étape par étape :**

| Ligne | `a` | `b` | `c` | `d` |
|:---:|---:|---:|---:|---:|
| 1 | 15 | — | — | — |
| 2 | 15 | 10 | — | — |
| 3 | 15 | 10 | 15+10=**25** | — |
| 4 | 15 | 10 | 25 | 25÷2=**12.5** |

**Réponses :**
- Ligne 3 : `c = 25` ✓
- Ligne 4 : `d = 12.5` ✓

---

### Exercice 2 — Réaffectations (modifications de variables)

```python
a = 8
b = 3
a = a - 4   # a = 4
b = 2 * b   # b = 6
a = a + b   # a = 10
```

**⚠️ Point clé :** Quand on écrit `a = a - 4`, cela signifie :
> *"Prendre l'ancienne valeur de `a`, soustraire 4, et stocker le résultat dans `a`"*

**Traçage détaillé :**

| Ligne | `a` | `b` | Opération |
|:---:|---:|---:|---|
| 1 | 8 | — | On affecte 8 à `a` |
| 2 | 8 | 3 | On affecte 3 à `b` |
| 3 | **4** | 3 | `a = 8 - 4` → `a` devient 4 |
| 4 | 4 | **6** | `b = 2 × 3` → `b` devient 6 |
| 5 | **10** | 6 | `a = 4 + 6` → `a` devient 10 |

**Réponses :**
- Ligne 3 : `a = 4` ✓
- Ligne 4 : `b = 6` ✓
- Ligne 5 : `a = 10` ✓

---

### Exercice 4 — Types de variables

Une **variable** a toujours un **type** selon sa valeur :
- `str` = **texte** (entre guillemets)
- `int` = **nombre entier** (sans virgule)
- `float` = **nombre décimal** (avec virgule)

| Information | Type | Justification |
|---|---|---|
| Nom d'un contact | `str` | Texte : "Marie", "Ali", etc. |
| Numéro de téléphone | `str` | Même si c'est des chiffres, c'est du texte |
| SMS | `str` | C'est du texte |
| Heure du réveil | `str` ou `float` | `str` : "07:30" | `float` : 7.5 |
| Code Wi-Fi | `str` | Lettres et chiffres mélangés |
| % batterie | `int` | Nombre entier (0-100) |
| Notes de maths | `float` | Nombres décimaux (14.5, 18.75, etc.) |

---

### Exercice 5 — Noms de variables : règles Python

**Règles pour nommer une variable :**
1. ✓ Lettres, chiffres, tirets bas `_`
2. ✓ Doit **commencer par une lettre** (ou `_`)
3. ✗ Pas d'espace
4. ✗ Pas de caractères spéciaux

| Nom | ✓/✗ | Raison | Correction |
|---|:---:|---|---|
| `prix achat` | ✗ | Espace interdit | `prix_achat` |
| `prix_achat` | ✓ | Correct |  |
| `2ndeG` | ✗ | Commence par un chiffre | `classe_2ndeG` |
| `SecondeG` | ✓ | Correct |  |
| `Seconde:G` | ✗ | `:` interdit | `Seconde_G` |
| `dix-huit` | ✗ | `-` signifie soustraction | `dix_huit` |

**Propositions valides :** `nb_filles`, `prix_repas`, `aire`, `note_anglais` ✓

---

### Exercice 6 — Calculer une moyenne

```python
note1 = 14
note2 = 15
note3 = 18
note4 = 13.5
moyenne = (note1 + note2 + note3 + note4) / 4
print(moyenne)
```

**Traçage des variables étape par étape :**

| Ligne | `note1` | `note2` | `note3` | `note4` | `moyenne` |
|:---:|---:|---:|---:|---:|---:|
| 1 | 14 | — | — | — | — |
| 2 | 14 | 15 | — | — | — |
| 3 | 14 | 15 | 18 | — | — |
| 4 | 14 | 15 | 18 | 13.5 | — |
| 5 | 14 | 15 | 18 | 13.5 | (14+15+18+13.5)÷4 = **15.125** |

**Réponse :**
```
15.125
```

---

### Exercice 7 — Programme d'achat

Prix unitaires :
- Œufs : 3€50 → `3.50`
- Lait : 1€ → `1.00`
- Farine : 1€50 → `1.50`

```python
nb_oeufs  = 2
nb_lait   = 1
nb_farine = 0.5

total = nb_oeufs * 3.50 + nb_lait * 1.00 + nb_farine * 1.50
print(total)
```

**Traçage des variables étape par étape :**

| Ligne | `nb_oeufs` | `nb_lait` | `nb_farine` | `total` |
|:---:|---:|---:|---:|---:|
| 1 | 2 | — | — | — |
| 2 | 2 | 1 | — | — |
| 3 | 2 | 1 | 0.5 | — |
| 5 | 2 | 1 | 0.5 | 2×3.50 + 1×1.00 + 0.5×1.50 = **8.75** |

**Réponse :**
```
8.75
```

---

### Exercice 8 — Programme de calcul

Programme :
1. `A` prend la valeur 5
2. Multiplier `A` par 3
3. Soustraire 4 au résultat
4. Élever le résultat au carré
5. Afficher le résultat

```python
A = 5
A = A * 3      # 15
A = A - 4      # 11
A = A ** 2     # 121
print(A)
```

**Traçage des variables étape par étape :**

| Ligne | `A` |
|:---:|---:|
| 1 | **5** |
| 2 | 5×3 = **15** |
| 3 | 15−4 = **11** |
| 4 | 11² = **121** |

**Réponse :**
```
121
```

---

### Complément — Opérations sur les chaînes de caractères

Deux opérations possibles sur les `str` :

#### 1️⃣ **Concaténation** avec `+` (joindre)

```python
chaine1 = "Lou"
chaine2 = "ane"
chaine3 = chaine1 + chaine2
print(chaine3)
```

**Traçage des variables étape par étape :**

| Ligne | `chaine1` | `chaine2` | `chaine3` |
|:---:|---|---|---|
| 1 | `"Lou"` | — | — |
| 2 | `"Lou"` | `"ane"` | — |
| 3 | `"Lou"` | `"ane"` | `"Lou" + "ane"` = **`"Louane"`** |

#### 2️⃣ **Répétition** avec `*` (reproduire)

```python
chaine1 = "Lou"
chaine4 = 3 * chaine1
print(chaine4)
```

**Traçage des variables étape par étape :**

| Ligne | `chaine1` | `chaine4` |
|:---:|---|---|
| 1 | `"Lou"` | — |
| 2 | `"Lou"` | 3 × `"Lou"` = **`"LouLouLou"`** |

---

Crédits : exercices 6 et 7 inspirés du travail (licence CC BY-SA) de Thomas WOLFF, Lycée Fabert, Metz.

Les enseignants de SNT du lycée Emmanuel Mounier, ANGERS
