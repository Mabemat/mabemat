---
title: "QCM — Bilan : Fonctions et Boucles"
layout: "qcm"
---

{{< qcm correct="1" >}}
---Q---
Quel mot-clé permet de **définir** une fonction en Python ?
- `function`
- `def`
- `define`
- `func`
---CORR---

| Mot-clé | Rôle |
|---|---|
| `def` | **Définit** une fonction (`def f(x):`) |
| `if` | Teste une condition |
| `for` / `while` | Répète un bloc |
| `return` | Renvoie une valeur depuis une fonction |

**Réponse : `def`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
À quoi sert l'instruction `return` dans une fonction ?
- À afficher une valeur à l'écran
- À **renvoyer une valeur** au programme qui a appelé la fonction
- À arrêter complètement le programme
- À créer une variable
---CORR---

| Instruction | Rôle |
|---|---|
| `print(x)` | **Affiche** `x` à l'écran |
| `return x` | **Renvoie** `x` à celui qui appelle la fonction |

Sans `return`, une fonction renvoie automatiquement `None`. `print` à l'intérieur d'une fonction affiche mais ne transmet rien.

**Réponse : Renvoyer une valeur au programme appelant**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Dans quel cas faut-il utiliser une boucle `for` plutôt qu'une boucle `while` ?
- Quand on connaît à l'avance le **nombre de répétitions**
- Quand on ne connaît pas le nombre de répétitions
- Quand on a une condition à tester
- Toujours, `while` n'existe pas
---CORR---

| Situation | `for` ou `while` ? |
|---|:---:|
| « Afficher les 10 premiers entiers » | `for` |
| « Tant que la batterie est ≥ 20 % » | `while` |
| « Parcourir une liste de 5 notes » | `for` |
| « Jusqu'à ce que le capital dépasse 5 000 € » | `while` |

`for` est une boucle **bornée** (nombre de tours connu) ; `while` est une boucle **non bornée** (on s'arrête sur une condition).

**Réponse : Quand on connaît le nombre de répétitions**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Quelle est la suite des valeurs prises par `i` dans `for i in range(6):` ?
- `1, 2, 3, 4, 5, 6`
- `0, 1, 2, 3, 4, 5, 6`
- `0, 1, 2, 3, 4, 5`
- `6, 5, 4, 3, 2, 1, 0`
---CORR---

| Appel | Suite générée |
|---|---|
| `range(6)` | **0, 1, 2, 3, 4, 5** |
| `range(3, 6)` | 3, 4, 5 |
| `range(0, 10, 2)` | 0, 2, 4, 6, 8 |

`range(n)` commence à **0** et s'arrête **avant** `n` (n est exclu).

**Réponse : `0, 1, 2, 3, 4, 5`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que renvoie `aire_triangle(6, 4)` ?
```python
def aire_triangle(base, hauteur):
    return base * hauteur / 2
```
- `24`
- `12.0`
- `10`
- `5.0`
---CORR---

| Argument | `base` | `hauteur` | Calcul |
|:---:|:---:|:---:|---|
| Appel `aire_triangle(6, 4)` | 6 | 4 | 6 × 4 ÷ 2 = 24 ÷ 2 = **12.0** |

L'opérateur `/` renvoie toujours un nombre **décimal** (`float`), même si le résultat est entier.

**Réponse : `12.0`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que renvoie `vitesse_moyenne(45, 1.5)` ?
```python
def vitesse_moyenne(distance, duree):
    return distance / duree
```
- `46.5`
- `67.5`
- `30.0`
- `15.0`
---CORR---

| Argument | `distance` | `duree` | Calcul |
|:---:|:---:|:---:|---|
| Appel `vitesse_moyenne(45, 1.5)` | 45 | 1.5 | 45 ÷ 1.5 = **30.0** km/h |

**Réponse : `30.0`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Quelle est la suite des valeurs prises par `i` dans `for i in range(1, 11):` ?
- `1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11`
- `1, 2, 3, 4, 5, 6, 7, 8, 9, 10`
- `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10`
- `1, 11`
---CORR---

| Appel | Première valeur | Dernière valeur incluse |
|---|:---:|:---:|
| `range(1, 11)` | 1 | **10** (11 est exclu) |
| `range(0, 11)` | 0 | 10 |
| `range(1, 10)` | 1 | 9 |

Pour parcourir les entiers de 1 à 10 **inclus**, il faut écrire `range(1, 11)`.

**Réponse : `1, 2, 3, 4, 5, 6, 7, 8, 9, 10`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Qu'affiche ce programme ?
```python
note = 11
if note >= 14:
    print("Bien")
elif note >= 10:
    print("Passable")
else:
    print("Insuffisant")
```
- `Passable`
- `Bien`
- `Insuffisant`
- Les trois lignes
---CORR---

| `note` | `>= 14` | `>= 10` | Branche |
|:---:|:---:|:---:|:---:|
| 11 | Fausse | **Vraie** | `elif` → `Passable` |

Dans `if / elif / else`, on exécute le bloc de la **première** condition vraie, puis on sort.

**Réponse : `Passable`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Qu'affiche ce programme ?
```python
total = 0
for i in range(1, 5):
    total = total + i
print(total)
```
- `5`
- `4`
- `10`
- `15`
---CORR---

| Tour | `i` | `total` |
|:---:|:---:|:---:|
| Initialisation | — | 0 |
| 1 | 1 | 1 |
| 2 | 2 | 3 |
| 3 | 3 | 6 |
| 4 | 4 | **10** |

`range(1, 5)` parcourt 1, 2, 3, 4 (5 est exclu). Somme : 1 + 2 + 3 + 4 = **10**.

**Réponse : `10`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Que renvoie cette fonction mystère ?
```python
def mystere(a, b):
    total = 0
    for i in range(b):
        total = total + a
    return total
```
Que renvoie `mystere(7, 4)` ?
- `28`
- `11`
- `7`
- `4`
---CORR---

| Tour | `i` | `total` |
|:---:|:---:|:---:|
| Initialisation | — | 0 |
| 1 | 0 | 7 |
| 2 | 1 | 14 |
| 3 | 2 | 21 |
| 4 | 3 | **28** |

On ajoute `a = 7` à `total` exactement `b = 4` fois → 7 × 4 = **28**. Cette fonction calcule en réalité le **produit** `a × b` par additions successives.

**Réponse : `28`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que renvoie ce programme ?
```python
p = 1
for i in range(1, 6):
    p = p * i
print(p)
```
- `15`
- `25`
- `120`
- `720`
---CORR---

| Tour | `i` | `p` |
|:---:|:---:|:---:|
| Initialisation | — | 1 |
| 1 | 1 | 1 × 1 = 1 |
| 2 | 2 | 1 × 2 = 2 |
| 3 | 3 | 2 × 3 = 6 |
| 4 | 4 | 6 × 4 = 24 |
| 5 | 5 | 24 × 5 = **120** |

Le programme calcule **5 !** (factorielle de 5) = 1 × 2 × 3 × 4 × 5 = **120**.

**Réponse : `120`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que renvoie `taille_arbre(10)` ?
```python
def taille_arbre(n):
    taille = 2.0
    for i in range(n):
        taille = taille + 0.3
    return taille
```
- `3.0`
- `5.0`
- `2.3`
- `12.0`
---CORR---

| Étape | `i` | `taille` |
|:---:|:---:|:---:|
| Initialisation | — | 2.0 |
| Après 10 tours | — | 2.0 + 10 × 0.3 = **5.0** |

À chaque tour, on ajoute 0,3 m. Après `n = 10` tours : `2.0 + 10 × 0.3 = 5.0` m.

**Réponse : `5.0`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
n = 100
while n > 1:
    n = n // 2
print(n)
```
- `0`
- `1`
- `50`
- Boucle infinie
---CORR---

| Tour | `n` avant test | `n > 1` | `n` après (`n // 2`) |
|:---:|:---:|:---:|:---:|
| 1 | 100 | ✓ | 50 |
| 2 | 50 | ✓ | 25 |
| 3 | 25 | ✓ | 12 |
| 4 | 12 | ✓ | 6 |
| 5 | 6 | ✓ | 3 |
| 6 | 3 | ✓ | **1** |
| Stop | 1 | ✗ | — |

`//` est la **division entière** (sans virgule). La boucle s'arrête quand `n` atteint 1. `print(n)` est hors boucle → affiche **1**.

**Réponse : `1`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Pour résoudre « **Trouver le plus petit entier `n` tel que `n² > 500`** », quelle boucle est la plus adaptée ?
- Une boucle `for`
- Une boucle `while`
- Aucune des deux
- Les deux fonctionnent aussi bien
---CORR---

| Critère | Conclusion |
|---|---|
| On connaît à l'avance le nombre d'essais ? | **Non** |
| On a une **condition d'arrêt** (`n*n > 500`) ? | **Oui** |
| Boucle adaptée | `while` |

```python
n = 1
while n * n <= 500:
    n = n + 1
print(n)   # 23  (22² = 484, 23² = 529)
```

`while` permet d'**incrémenter jusqu'à atteindre la condition** sans connaître à l'avance le nombre d'essais.

**Réponse : Une boucle `while`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que renvoie `nb_multiples(5, 30)` ?
```python
def nb_multiples(n, limite):
    compteur = 0
    for k in range(1, limite + 1):
        if k % n == 0:
            compteur = compteur + 1
    return compteur
```
- `4`
- `5`
- `6`
- `7`
---CORR---

| Multiples de 5 ≤ 30 | 5, 10, 15, 20, 25, 30 | **6** valeurs |

`k % n == 0` teste si `k` est divisible par `n`. On compte combien d'entiers de 1 à 30 satisfont cette condition → **6**.

**Réponse : `6`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Qu'affiche ce programme ?
```python
compteur = 0
for n in [12, 7, 18, 9, 15, 3]:
    if n >= 10:
        compteur = compteur + 1
print(compteur)
```
- `2`
- `4`
- `3`
- `6`
---CORR---

| `n` | `n >= 10` | `compteur` |
|:---:|:---:|:---:|
| 12 | ✓ | 0 → **1** |
| 7 | ✗ | 1 |
| 18 | ✓ | 1 → **2** |
| 9 | ✗ | 2 |
| 15 | ✓ | 2 → **3** |
| 3 | ✗ | 3 |

Trois valeurs (12, 18, 15) sont ≥ 10 → compteur final = **3**.

**Réponse : `3`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que renvoie cette fonction ?
```python
def epargne(n):
    solde = 0
    for i in range(n):
        solde = solde + 100
        solde = solde * 1.005
    return round(solde, 2)
```
Que renvoie `epargne(2)` ?
- `200.50`
- `201.50`
- `205.00`
- `100.50`
---CORR---

| Tour | `i` | `solde` après dépôt (+100) | `solde` après intérêts (×1.005) |
|:---:|:---:|:---:|:---:|
| 1 | 0 | 100 | 100 × 1.005 = 100.50 |
| 2 | 1 | 200.50 | 200.50 × 1.005 = **201.50** (arrondi) |

À chaque tour : on dépose 100 € puis on applique 0,5 % d'intérêts. Après 2 mois : 201,50 €.

**Réponse : `201.50`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que renvoie cette fonction ?
```python
def somme(n):
    s = 0
    for k in range(n):
        s = s + k
    return s
```
Que renvoie `somme(5)` ?
- `15`
- `10`
- `5`
- `25`
---CORR---

| Tour | `k` | `s` |
|:---:|:---:|:---:|
| Initialisation | — | 0 |
| 1 | **0** | 0 |
| 2 | 1 | 1 |
| 3 | 2 | 3 |
| 4 | 3 | 6 |
| 5 | 4 | **10** |

Piège classique : `range(n)` commence à **0** et s'arrête à `n − 1`, donc on additionne 0 + 1 + 2 + 3 + 4 = **10** (pas 1 + 2 + 3 + 4 + 5 = 15).

**Réponse : `10`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Que renvoie cette fonction ?
```python
def trouve(seuil):
    n = 0
    s = 0
    while s < seuil:
        n = n + 1
        s = s + n
        return n
```
Que renvoie `trouve(100)` ?
- `1`
- `13`
- `14`
- Boucle infinie
---CORR---

| Tour | `n` | `s` | Action |
|:---:|:---:|:---:|---|
| 1 | 0 → **1** | 0 → **1** | `return n` → **fin** de la fonction (renvoie 1) |

Piège d'**indentation** très classique : `return n` est dans le bloc de la boucle (8 espaces), donc il s'exécute dès le **premier tour**. La fonction renvoie 1 sans jamais explorer le seuil.

Pour parcourir la boucle jusqu'à `s ≥ seuil`, il faut placer `return n` **après** la boucle :

```python
def trouve(seuil):
    n = 0
    s = 0
    while s < seuil:
        n = n + 1
        s = s + n
    return n              # ← 4 espaces, hors de la boucle
```

**Réponse : `1`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que renvoie cette fonction ?
```python
def est_premier(n):
    if n < 2:
        return False
    for k in range(2, n):
        if n % k == 0:
            return False
    return True
```
Que renvoie `est_premier(9)` ?
- `True`
- `False`
- `3`
- Erreur
---CORR---

| Tour | `k` | `n % k` | Action |
|:---:|:---:|:---:|---|
| 1 | 2 | 9 % 2 = 1 | passe à la suite |
| 2 | 3 | 9 % 3 = **0** | `return False` → fin |

9 est divisible par 3 (9 = 3 × 3), donc 9 **n'est pas premier** : la fonction renvoie `False` dès qu'elle trouve un diviseur. Premiers < 10 : 2, 3, 5, 7 (pas 9).

**Réponse : `False`**
{{< /qcm >}}
