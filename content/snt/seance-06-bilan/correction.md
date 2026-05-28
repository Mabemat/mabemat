---
title: "Correction — Séance 06 Bilan : Fonctions et Boucles"
---

### Exercice 1 — Aire d'un triangle

```python
def aire_triangle(base, hauteur):
    return base * hauteur / 2
```

**Q2.** `aire_triangle(6, 4)` → `12.0` ✓

---

### Exercice 2 — Vitesse moyenne

```python
def vitesse_moyenne(distance, duree):
    return distance / duree
```

**Q2.** `vitesse_moyenne(45, 1.5)` → `30.0` km/h ✓

---

### Exercice 3 — Fonction mystère

**Q1.** La fonction a deux paramètres : `a` et `b`. Le corps contient une boucle `for` qui tourne `b` fois. À chaque tour, elle ajoute `a` à `total` (initialisé à 0). La fonction renvoie `total`.

**Q2.**

| Appel | Déroulement | Résultat |
|---|---|---|
| `mystere(7, 12)` | 0 + 7×12 fois | `84` |
| `mystere(20, 5)` | 0 + 20×5 fois | `100` |

**Q3.** Cette fonction renvoie le produit de `a` par `b` (soit `a × b`), calculé par additions successives.

**Q4.** Vérifier par exécution.

---

### Exercice 4 — Comprendre `range()`

| Expression | Liste générée |
|---|---|
| `range(6)` | 0, 1, 2, 3, 4, 5 |
| `range(3, 8)` | 3, 4, 5, 6, 7 |
| `range(0, 20, 5)` | 0, 5, 10, 15 |
| `range(10, 0, -2)` | 10, 8, 6, 4, 2 |

---

### Exercice 5 — Table de multiplication

**Q1.**
```python
for i in range(1, 11):
    print(i)
```

**Q2.**
```python
def table_multiplication(n):
    for i in range(1, 11):
        print(n, "×", i, "=", n * i)
```

Exemple : `table_multiplication(7)` affiche :
```
7 × 1 = 7
7 × 2 = 14
...
7 × 10 = 70
```

---

### Exercice 6 — Lecture de programme

Programme :
```python
p = 1
for i in range(1, 6):
    p = p * i
print(p)
```

**Q1.** Tableau de trace :

| Tour | `i` | Calcul | `p` |
|:---:|:---:|:---:|:---:|
| Avant boucle | — | — | 1 |
| Tour 1 | 1 | 1 × 1 | 1 |
| Tour 2 | 2 | 1 × 2 | 2 |
| Tour 3 | 3 | 2 × 3 | 6 |
| Tour 4 | 4 | 6 × 4 | 24 |
| Tour 5 | 5 | 24 × 5 | 120 |

`print(p)` affiche **120**.

**Q2.** Vérifier par exécution.

**Q3.** Ce programme calcule le factoriel de 5 : 5! = 1 × 2 × 3 × 4 × 5 = **120**.

---

### Exercice 7 — Croissance d'un arbre 🌳

**Q1.**
```python
def taille_arbre(n):
    taille = 2.0
    for i in range(n):
        taille = taille + 0.3
    return taille
```

ou de façon directe :
```python
def taille_arbre(n):
    return 2.0 + n * 0.3
```

**Q2.**

| Appel | Calcul | Résultat |
|---|---|---|
| `taille_arbre(5)` | 2.0 + 5×0.3 | `3.5` ✓ |
| `taille_arbre(10)` | 2.0 + 10×0.3 | `5.0` ✓ |

---

### Exercice 8 — Lecture de programme

Programme :
```python
n = 100
while n > 1:
    n = n // 2
    print(n)
```

**Q1.** Condition : `n > 1`. Bloc répété : `n = n // 2` puis `print(n)`.

**Q2.** Valeurs affichées :

| `n` avant test | Condition | `n` après | Affiché |
|---|---|---|---|
| 100 | ✅ | 50 | 50 |
| 50 | ✅ | 25 | 25 |
| 25 | ✅ | 12 | 12 |
| 12 | ✅ | 6 | 6 |
| 6 | ✅ | 3 | 3 |
| 3 | ✅ | 1 | 1 |
| 1 | ❌ | — | arrêt |

Le programme affiche : `50  25  12  6  3  1`

**Q3.** Vérifier par exécution.

---

### Exercice 9 — Batterie de téléphone 🔋

**Q1.**
```python
batterie = 100
heures = 0

while batterie >= 20:
    batterie = batterie * 0.92
    heures = heures + 1

print("Nombre d'heures :", heures)
print("Batterie restante :", round(batterie, 1), "%")
```

Résultat : **20 heures**, batterie restante ≈ 18.5 %

(100 × 0.92²⁰ ≈ 18.5 — le 20ᵉ tour fait passer la charge sous 20 %)

**Q2.**
```python
def autonomie(charge_initiale, perte):
    batterie = charge_initiale
    heures = 0
    while batterie >= 20:
        batterie = batterie * (1 - perte)
        heures = heures + 1
    return heures
```

`autonomie(100, 0.08)` → `20` ✓

---

### Exercice 10 — Seuil de followers 📱

**Q1.**
```python
abonnes = 200
semaines = 0
while abonnes < 2000:
    abonnes = abonnes * 1.15
    semaines = semaines + 1
    print("Semaine", semaines, ":", int(abonnes), "abonnés")
print("Objectif atteint en", semaines, "semaines.")
```

**Q2.**
```python
def semaines_pour_objectif(followers_initial, taux, objectif):
    abonnes = followers_initial
    semaines = 0
    while abonnes < objectif:
        abonnes = abonnes * (1 + taux / 100)
        semaines = semaines + 1
    return semaines
```

`semaines_pour_objectif(200, 15, 2000)` → **16 semaines**  
(200 × 1.15¹⁶ ≈ 2070 > 2000)

---

### Exercice 11 — Compter les multiples

**Q1.**
```python
def nb_multiples(n, limite):
    compteur = 0
    for k in range(n, limite + 1, n):
        compteur = compteur + 1
    return compteur
```

ou avec un `if` :
```python
def nb_multiples(n, limite):
    compteur = 0
    for k in range(1, limite + 1):
        if k % n == 0:
            compteur = compteur + 1
    return compteur
```

**Q2.** Vérifications :

| Appel | Multiples | Résultat |
|---|---|---|
| `nb_multiples(3, 15)` | 3, 6, 9, 12, 15 | `5` ✓ |
| `nb_multiples(5, 30)` | 5, 10, 15, 20, 25, 30 | `6` ✓ |
| `nb_multiples(7, 50)` | 7, 14, 21, 28, 35, 42, 49 | `7` ✓ |

---

### Exercice 12 — Le bon choix : `for` ou `while` ?

**Q1.** Somme de 1 à 100 → **`for`** (nombre de répétitions connu)
```python
total = 0
for i in range(1, 101):
    total = total + i
print(total)   # 5050
```

**Q2.** Plus petit entier n tel que n² > 500 → **`while`** (on ne sait pas à l'avance combien d'essais)
```python
n = 1
while n * n <= 500:
    n = n + 1
print(n)   # 23  (car 22² = 484 ≤ 500 et 23² = 529 > 500)
```

**Q3.** Nombres pairs de 2 à 50 → **`for`** (nombre de répétitions connu)
```python
for i in range(2, 51, 2):
    print(i)
```

---

### Exercice 13 — Épargne avec versements 💰

**Q1.**
```python
def epargne_leo(n):
    solde = 0
    for i in range(n):
        solde = solde + 100       # dépôt en début de mois
        solde = solde * 1.005     # intérêts à la fin du mois
    return round(solde, 2)
```

**Q2.**

| Durée | Résultat |
|---|---|
| `epargne_leo(12)` | **1233.56 €** |
| `epargne_leo(24)` | **2546.57 €** |

**Q3.**
```python
def mois_objectif(objectif):
    solde = 0
    mois = 0
    while solde < objectif:
        solde = solde + 100
        solde = solde * 1.005
        mois = mois + 1
    return mois
```

`mois_objectif(2000)` → **19 mois** (solde ≈ 2029 € après 19 mois)

---

### Exercice 14 — (Bonus) Nombre premier

**Q1.**
```python
def est_premier(n):
    if n < 2:
        return False
    for k in range(2, n):
        if n % k == 0:
            return False
    return True
```

**Q2.**

| Appel | Résultat |
|---|---|
| `est_premier(7)` | `True` ✓ |
| `est_premier(12)` | `False` ✓ |
| `est_premier(29)` | `True` ✓ |
| `est_premier(1)` | `False` ✓ |

**Q3.**
```python
for n in range(2, 100):
    if est_premier(n):
        print(n)
```

Nombres premiers < 100 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 (25 nombres premiers).
