---
title: "Correction"
---

### Exercice 1 — Révisions

```python
prix_unitaire = 1.5
quantite = 4
prix_total = prix_unitaire * quantite
```

**Question 1 :** Ce programme utilise **3 variables** : `prix_unitaire`, `quantite` et `prix_total`.

**Question 2 :** À l'exécution, `prix_total` reçoit la valeur `1.5 × 4 = 6.0`.

| Ligne | `prix_unitaire` | `quantite` | `prix_total` |
|:---:|---:|---:|---:|
| 1 | 1.5 | — | — |
| 2 | 1.5 | 4 | — |
| 3 | 1.5 | 4 | 1.5×4=**6.0** |

**Réponse :** `prix_total = 6.0` ✓

---

### Exercice 2 — Analyse d'une fonction

```python
def prix_a_afficher(prix_unitaire, quantite):
    prix_total = prix_unitaire * quantite
    return prix_total
```

**Question 1 :**
- Nom de la fonction : `prix_a_afficher`
- Paramètres : `prix_unitaire` et `quantite`

**Question 2 :** La première ligne se termine par `:` (deux-points). Ce caractère est **indispensable** pour annoncer le début du bloc d'instructions.

**Question 3 :** Les deux lignes du bloc d'instructions commencent par des espaces — ce sont des **indentations** (4 espaces). Elles sont obligatoires pour que Python sache quelles instructions appartiennent à la fonction.

**Question 4 :** La fonction renvoie **1 variable** : `prix_total`.

**Question 5 :** Pour un article à 3 € acheté en 2 exemplaires :

```python
prix_a_afficher(3, 2)
```

| Paramètre | Valeur | Calcul |
|---|---:|---|
| `prix_unitaire` | 3 | — |
| `quantite` | 2 | — |
| `prix_total` | **6.0** | 3 × 2 |

**Résultat renvoyé :** `6.0` ✓

**Question 6 :** Pour un article à 1,15 € acheté en 3 exemplaires :

```python
prix_a_afficher(1.15, 3)
```

| Paramètre | Valeur | Calcul |
|---|---:|---|
| `prix_unitaire` | 1.15 | — |
| `quantite` | 3 | — |
| `prix_total` | **3.45** | 1.15 × 3 |

**Résultat renvoyé :** `3.45` ✓

---

### Exercice 3 — `truc_muche`

```python
def truc_muche(a, b, c):
    s = a + b + c
    return s
```

**Question 1 :**

| | Réponse |
|---|---|
| **a. Nom** | `truc_muche` |
| **b. Paramètres** | `a`, `b`, `c` |
| **c. Bloc d'instructions** | `s = a + b + c` et `return s` (2 lignes) |
| **d. Valeurs renvoyées** | 1 valeur : `s` |
| **e. `truc_muche(2, 5, 1)`** | `2 + 5 + 1 = 8` |

**Question 2 :** Code de la fonction (à écrire et exécuter) :

```python
def truc_muche(a, b, c):
    s = a + b + c
    return s
```

Après exécution, il ne se passe rien à l'écran — c'est normal : la fonction est simplement mémorisée.

**Question 3 :** Appel `truc_muche(2, 5, 1)` :

| Paramètre | `a` | `b` | `c` | `s` |
|:---:|---:|---:|---:|---:|
| Valeurs | 2 | 5 | 1 | 2+5+1=**8** |

**Résultat renvoyé :** `8` ✓

**Question 4 :** Pour des paramètres 1, 2, 4 :

```python
truc_muche(1, 2, 4)
```

| Paramètre | `a` | `b` | `c` | `s` |
|:---:|---:|---:|---:|---:|
| Valeurs | 1 | 2 | 4 | 1+2+4=**7** |

**Résultat renvoyé :** `7` ✓

---

### Exercice 4 — Définition d'une image

**Question 1 :** L'image d'illustration (960 pixels de large, 720 pixels de haut) :

$$\text{Définition} = 960 \times 720 = \mathbf{691\ 200 \text{ pixels}}$$

**Question 2 :** Fonction complétée :

```python
def definition_image(L, H):
    d = L * H
    return d
```

**Question 3 :** Pour une image 800 × 600 :

```python
definition_image(800, 600)
```

| Paramètre | `L` | `H` | `d` |
|:---:|---:|---:|---:|
| Valeurs | 800 | 600 | 800×600=**480 000** |

**Résultat renvoyé :** `480000` ✓

**Question 4 :** Pour l'image d'illustration (960 × 720) :

```python
definition_image(960, 720)
```

| Paramètre | `L` | `H` | `d` |
|:---:|---:|---:|---:|
| Valeurs | 960 | 720 | 960×720=**691 200** |

**Résultat renvoyé :** `691200` ✓ — cohérent avec la réponse à la question 1.

---

### Exercice 5 — Dessiner avec la tortue

**Question 1 :** Les fonctions `forward`, `right` et `left` possèdent chacune **1 paramètre** :
- `forward(x)` → `x` est le nombre de pixels à avancer
- `right(a)` et `left(a)` → `a` est l'angle de rotation en degrés

**Question 2 :** Carré de 50 pixels de côté (tourner 4 fois à 90°) :

```python
from turtle import *

forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)

done()
```

**Question 3 :** Carré de 100 pixels de côté (mêmes instructions, taille × 2) :

```python
from turtle import *

forward(100)
right(90)
forward(100)
right(90)
forward(100)
right(90)
forward(100)
right(90)

done()
```

**Question 4 :** Fonction `carre` avec paramètre `taille` :

```python
def carre(taille):
    forward(taille)
    right(90)
    forward(taille)
    right(90)
    forward(taille)
    right(90)
    forward(taille)
    right(90)
```

**⚠️ Point clé :** Toutes les lignes du bloc d'instructions sont indentées de 4 espaces. Pas de `done()` à l'intérieur de la fonction — il ne faut le mettre qu'après les appels.

**Question 5 :** Pour obtenir la figure avec plusieurs carrés imbriqués (par exemple de tailles 10, 20, 30, 40, 50, 60, 70, 80) :

```python
from turtle import *

carre(10)
carre(20)
carre(30)
carre(40)
carre(50)
carre(60)
carre(70)
carre(80)

done()
```

---

### Défi — Fonction `rectangle`

Un rectangle a deux dimensions : une longueur et une largeur. On avance alternativement de `longueur` et de `largeur` en tournant à 90° à chaque fois :

```python
def rectangle(longueur, largeur):
    forward(longueur)
    right(90)
    forward(largeur)
    right(90)
    forward(longueur)
    right(90)
    forward(largeur)
    right(90)
```

Pour dessiner un court de tennis (dimensions approximatives : 23,77 m × 10,97 m — on utilisera des pixels proportionnels, par exemple 238 × 110) :

```python
from turtle import *

rectangle(238, 110)

done()
```
