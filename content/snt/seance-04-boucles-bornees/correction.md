---
title: "Correction — Séance 04 Boucles bornées"
---

### Exercice 1 — Population d'un village

**Q1.** Tableau de trace pour n = 3 :

| Étape | k | P |
|---|---|---|
| Initialisation | — | 2300 |
| Tour 1 | 0 | 2300 + 150 = **2450** |
| Tour 2 | 1 | 2450 + 150 = **2600** |
| Tour 3 | 2 | 2600 + 150 = **2750** |

Dans 3 ans, le village aura **2750 habitants**.

**Q2.**
```python
def population(n):
    P = 2300
    for k in range(n):
        P = P + 150
    return P
```

**Q3.** `population(3)` → `2750` ✓

---

### Exercice 2 — Somme des entiers

**Q1.** Tableau de trace pour n = 5 :

| Étape | k | s |
|---|---|---|
| Initialisation | — | 0 |
| Tour 1 | 1 | 0 + 1 = **1** |
| Tour 2 | 2 | 1 + 2 = **3** |
| Tour 3 | 3 | 3 + 3 = **6** |
| Tour 4 | 4 | 6 + 4 = **10** |
| Tour 5 | 5 | 10 + 5 = **15** |

**Q2.**
```python
def som(n):
    s = 0
    for k in range(1, n + 1):
        s = s + k
    return s
```

`som(5)` → `15`

---

### Exercice 3 — Analyse de programme

**Q1.** Le bloc répété est `a = a + 1`. Il est répété **4 fois** (range(4) génère 0, 1, 2, 3).

**Q2.** Tableau de trace :

| Étape | i | a |
|---|---|---|
| Avant boucle | — | 2 |
| Tour 1 | 0 | 2 + 1 = **3** |
| Tour 2 | 1 | 3 + 1 = **4** |
| Tour 3 | 2 | 4 + 1 = **5** |
| Tour 4 | 3 | 5 + 1 = **6** |
| Après boucle | — | 2 × 6 = **12** |

La valeur finale de `a` est **12**.

---

### Exercice 4 — Code puzzle (interactif)

Exercice à réaliser directement dans le notebook.

---

### Exercice 5 — Prédire l'exécution

**Programme A** — Affiche :
```
0
1
2
Fin
```
`range(3)` génère 0, 1, 2. `print("Fin")` est hors de la boucle (non indenté), il s'exécute une seule fois à la fin.

**Programme B** — Erreur `IndentationError` : `print(i)` n'est pas indenté dans le bloc du `for`.

**Programme C** — Affiche :
```
0
---
1
---
2
---
Fin
```
Les deux `print` sont dans la boucle (tous les deux indentés), ils s'exécutent à chaque tour.

**Programme D** — Affiche :
```
dans la boucle
dans la boucle
dans la boucle
dans la boucle
hors de la boucle
```
`range(4)` → 4 tours. `print("hors de la boucle")` n'est pas indenté, il s'exécute une seule fois après la boucle.

---

### Exercice 6 — Réseau social

**Q1.**
```python
def users():
    u = 25000
    for i in range(4):   # 4 années : 2021→2022→2023→2024→2025
        u = u * 2
    return u
```

**Q2.** `users()` → `400000`

Vérification : 25 000 × 2⁴ = 25 000 × 16 = **400 000** ✓

**Q3.** Pour 2030 (9 années depuis 2021), il faut `range(9)` au lieu de `range(4)`.

`users()` avec `range(9)` → 25 000 × 2⁹ = 25 000 × 512 = **12 800 000**

**Q4.**
```python
def users(annee):
    u = 25000
    for i in range(annee - 2021):
        u = u * 2
    return u
```

`users(2030)` → `12800000` ✓

---

### Exercice 7 — Le blob

```python
def blob(n, j):
    P = n
    for i in range(j):
        P = P * 2
    return P
```

Exemple : `blob(100, 3)` → 100 × 2³ = **800** cellules.

---

### Exercice 8 — Épargne de Gaspard

**Q1.**
```python
capital = 1500
for i in range(10):
    capital = capital * 1.02
print(capital)
```

Résultat : environ **1828.49 €** (1500 × 1.02¹⁰ ≈ 1828.49).

**Q2.**
```python
capital = float(input("Somme initiale (€) : "))
nb_annees = int(input("Nombre d'années : "))
for i in range(nb_annees):
    capital = capital * 1.02
print("Capital final :", round(capital, 2), "€")
```

**Q3.**
```python
capital = float(input("Somme initiale (€) : "))
nb_annees = int(input("Nombre d'années : "))
taux = float(input("Taux d'intérêt (%) : "))
for i in range(nb_annees):
    capital = capital * (1 + taux / 100)
print("Capital final :", round(capital, 2), "€")
```

---

### Exercice 9 — Tortue Python

**Q2.**
```python
def carre():
    for i in range(4):
        forward(100)
        left(90)
```

**Q3.**
```python
def triangle():
    for i in range(3):
        forward(100)
        left(120)
```

**Q4.**
```python
def carre(cote):
    for i in range(4):
        forward(cote)
        left(90)

def triangle(cote):
    for i in range(3):
        forward(cote)
        left(120)
```

---

### Exercice 10 — Notes de classe

**Q2.** Pour la note 7 : `7 >= 10` est **faux**, donc Python entre dans le `else` et exécute `print(note, "→ recalé ✗")`. Pour la note 14 : `14 >= 10` est **vrai**, Python entre dans le `if` et exécute `print(note, "→ reçu ✓")`.

L'indentation détermine quelle instruction appartient au `if` et laquelle appartient au `else`.

**Q3.**
```python
notes = [14, 7, 18, 5, 12, 9, 16, 3, 11, 8]
compteur = 0

for note in notes:
    if note >= 10:
        compteur = compteur + 1

print("Nombre d'élèves reçus :", compteur)
```

**Q4.** Notes ≥ 10 : 14 ✓, 18 ✓, 12 ✓, 16 ✓, 11 ✓ → **5 élèves reçus**.
