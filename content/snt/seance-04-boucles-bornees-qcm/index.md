---
title: "QCM - Boucles bornées"
layout: "qcm"
---

{{< qcm correct="1" >}}
---Q---
Quel mot-clé permet de **répéter** un nombre fixé de fois un bloc d'instructions ?
- `repeat`
- `for`
- `loop`
- `while`
---CORR---

| Mot-clé | Rôle en Python |
|---|---|
| `for` | Répète un bloc un **nombre donné** de fois (boucle bornée) |
| `while` | Répète tant qu'une condition est vraie (boucle non bornée) |
| `repeat`, `loop` | N'existent pas en Python |

**Réponse : `for`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Par quel caractère doit se terminer la **première ligne** d'une boucle `for` ?
```python
for i in range(5)?
    print(i)
```
- `;`
- `.`
- `:`
- `,`
---CORR---

Comme pour `def` et `if`, la ligne `for` se termine obligatoirement par **deux-points** : ils annoncent le bloc d'instructions à répéter.

```python
for i in range(5):       # ← deux-points obligatoires
    print(i)
```

Sans les `:`, Python signale une `SyntaxError`.

**Réponse : `:`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Quelle est la suite des valeurs prises par `i` dans cette boucle ?
```python
for i in range(5):
    print(i)
```
- `1, 2, 3, 4, 5`
- `0, 1, 2, 3, 4, 5`
- `0, 1, 2, 3, 4`
- `5, 4, 3, 2, 1, 0`
---CORR---

| Appel | Suite générée |
|---|---|
| `range(5)` | **0, 1, 2, 3, 4** |
| `range(3)` | 0, 1, 2 |
| `range(1)` | 0 |

`range(n)` commence à **0** et s'arrête **avant** `n` : la valeur `n` n'est **jamais** atteinte.

**Réponse : `0, 1, 2, 3, 4`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Combien de fois la boucle `for i in range(7):` répète-t-elle son bloc ?
- `6`
- `7`
- `8`
- `1`
---CORR---

| `range(n)` | Valeurs | Nombre de tours |
|:---:|---|:---:|
| `range(7)` | 0, 1, 2, 3, 4, 5, 6 | **7** |
| `range(10)` | 0…9 | 10 |

`range(n)` produit exactement **n** valeurs, donc la boucle fait **n** tours.

**Réponse : `7`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Qu'affiche ce programme ?
```python
for i in range(3):
    print(i)
```
- `0` puis `1` puis `2`
- `1` puis `2` puis `3`
- `3`
- `0` puis `1` puis `2` puis `3`
---CORR---

| Tour | `i` | Affichage |
|:---:|:---:|:---:|
| 1 | 0 | `0` |
| 2 | 1 | `1` |
| 3 | 2 | `2` |

`range(3)` parcourt **0, 1, 2** - la valeur 3 elle-même n'est pas atteinte.

**Réponse : `0` puis `1` puis `2`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
for i in range(4):
    print("dans")
print("hors")
```
- `dans` (1 fois) puis `hors`
- `dans` (4 fois) puis `hors`
- `hors` puis `dans` (4 fois)
- Erreur
---CORR---

| Tour | `i` | Affichage |
|:---:|:---:|:---:|
| 1 | 0 | `dans` |
| 2 | 1 | `dans` |
| 3 | 2 | `dans` |
| 4 | 3 | `dans` |
| (après boucle) | - | `hors` |

`print("dans")` est **indenté** → il fait partie de la boucle (4 répétitions). `print("hors")` est **hors** de la boucle → il s'exécute **une seule fois** à la fin.

**Réponse : `dans` (4 fois) puis `hors`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Quelle est l'erreur dans ce programme ?
```python
for i in range(3):
print(i)
```
- Il manque les `:` à la fin du `for`
- `print(i)` n'est **pas indenté**
- `range(3)` n'existe pas en Python
- Il n'y a pas d'erreur
---CORR---

Le corps d'une boucle `for` doit être **indenté** (4 espaces). Sans indentation, Python ne sait pas quelles instructions doivent être répétées → `IndentationError`.

```python
for i in range(3):
    print(i)        # ← 4 espaces
```

**Réponse : `print(i)` n'est pas indenté**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Quelle est la suite des valeurs prises par `i` dans `for i in range(2, 6):` ?
- `2, 3, 4, 5, 6`
- `2, 3, 4, 5`
- `2, 4`
- `0, 1, 2, 3, 4, 5`
---CORR---

| Appel | Suite générée |
|---|---|
| `range(2, 6)` | **2, 3, 4, 5** |
| `range(0, 6)` | 0, 1, 2, 3, 4, 5 |
| `range(6)` | 0, 1, 2, 3, 4, 5 |

Avec deux arguments, `range(début, fin)` commence à `début` et s'arrête **avant** `fin` : la valeur `fin` n'est jamais atteinte.

**Réponse : `2, 3, 4, 5`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Qu'affiche ce programme ?
```python
s = 0
for k in range(4):
    s = s + 1
print(s)
```
- `1`
- `3`
- `4`
- `5`
---CORR---

| Tour | `k` | `s` |
|:---:|:---:|:---:|
| Initialisation | - | 0 |
| 1 | 0 | 0 + 1 = **1** |
| 2 | 1 | 1 + 1 = **2** |
| 3 | 2 | 2 + 1 = **3** |
| 4 | 3 | 3 + 1 = **4** |

On ajoute 1 à `s` à chaque tour, et il y a **4 tours** → `s` finit à **4**.

**Réponse : `4`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
s = 0
for k in range(1, 5):
    s = s + k
print(s)
```
- `5`
- `10`
- `15`
- `4`
---CORR---

| Tour | `k` | `s` |
|:---:|:---:|:---:|
| Initialisation | - | 0 |
| 1 | 1 | 0 + 1 = **1** |
| 2 | 2 | 1 + 2 = **3** |
| 3 | 3 | 3 + 3 = **6** |
| 4 | 4 | 6 + 4 = **10** |

`range(1, 5)` parcourt 1, 2, 3, 4. On calcule donc 1 + 2 + 3 + 4 = **10**.

**Réponse : `10`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que renvoie cette fonction ?
```python
def f():
    u = 1
    for i in range(3):
        u = u * 2
    return u
```
- `2`
- `4`
- `8`
- `6`
---CORR---

| Tour | `i` | `u` |
|:---:|:---:|:---:|
| Initialisation | - | 1 |
| 1 | 0 | 1 × 2 = **2** |
| 2 | 1 | 2 × 2 = **4** |
| 3 | 2 | 4 × 2 = **8** |

À chaque tour, `u` est **doublé**. Après 3 tours : 1 × 2³ = **8**.

**Réponse : `8`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Qu'affiche ce programme ?
```python
a = 10
for i in range(5):
    a = a + 2
print(a)
```
- `10`
- `12`
- `20`
- `25`
---CORR---

| Tour | `i` | `a` |
|:---:|:---:|:---:|
| Initialisation | - | 10 |
| 1 | 0 | 12 |
| 2 | 1 | 14 |
| 3 | 2 | 16 |
| 4 | 3 | 18 |
| 5 | 4 | 20 |

On ajoute 2 à `a` **5 fois** : 10 + 5 × 2 = **20**.

**Réponse : `20`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Qu'affiche ce programme ?
```python
for i in range(2):
    print(i)
    print("ok")
```
- `0` puis `ok` puis `1` puis `ok`
- `0` puis `1` puis `ok` puis `ok`
- `ok` puis `ok`
- `0` puis `ok`
---CORR---

| Tour | `i` | Affichage |
|:---:|:---:|:---:|
| 1 | 0 | `0` puis `ok` |
| 2 | 1 | `1` puis `ok` |

Les **deux** `print` sont indentés → ils appartiennent tous les deux à la boucle. À chaque tour, Python exécute le bloc **dans l'ordre**, ligne par ligne.

**Réponse : `0` puis `ok` puis `1` puis `ok`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que renvoie `population(3)` ?
```python
def population(n):
    P = 2300
    for k in range(n):
        P = P + 150
    return P
```
- `2450`
- `2600`
- `2750`
- `2900`
---CORR---

| Tour | `k` | `P` |
|:---:|:---:|:---:|
| Initialisation | - | 2300 |
| 1 | 0 | 2300 + 150 = **2450** |
| 2 | 1 | 2450 + 150 = **2600** |
| 3 | 2 | 2600 + 150 = **2750** |

La boucle ajoute 150 trois fois : 2300 + 3 × 150 = **2750**.

**Réponse : `2750`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
compteur = 0
for n in [14, 7, 18, 5, 12]:
    if n >= 10:
        compteur = compteur + 1
print(compteur)
```
- `2`
- `3`
- `5`
- `0`
---CORR---

| `n` | `n >= 10` | `compteur` |
|:---:|:---:|:---:|
| 14 | ✓ | 0 → **1** |
| 7 | ✗ | 1 |
| 18 | ✓ | 1 → **2** |
| 5 | ✗ | 2 |
| 12 | ✓ | 2 → **3** |

Compteur incrémenté uniquement quand la note est ≥ 10 : 14, 18 et 12 → **3 notes**.

**Réponse : `3`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Quelle est la suite des valeurs prises par `i` dans `for i in range(0, 10, 2):` ?
- `0, 1, 2, 3, …, 9`
- `0, 2, 4, 6, 8`
- `0, 2, 4, 6, 8, 10`
- `2, 4, 6, 8, 10`
---CORR---

| Appel | Suite générée |
|---|---|
| `range(0, 10, 2)` | **0, 2, 4, 6, 8** |
| `range(0, 10, 3)` | 0, 3, 6, 9 |
| `range(1, 10, 2)` | 1, 3, 5, 7, 9 |

Avec trois arguments, `range(début, fin, pas)` ajoute `pas` à chaque tour, en s'arrêtant **avant** d'atteindre `fin`. Ici 10 n'est jamais inclus.

**Réponse : `0, 2, 4, 6, 8`**
{{< /qcm >}}

{{< qcm correct="3" >}}
---Q---
Qu'affiche ce programme ?
```python
a = 2
for i in range(4):
    a = a + 1
a = 2 * a
print(a)
```
- `3`
- `6`
- `8`
- `12`
---CORR---

| Étape | `i` | `a` |
|:---:|:---:|:---:|
| Initialisation | - | 2 |
| Tour 1 | 0 | 3 |
| Tour 2 | 1 | 4 |
| Tour 3 | 2 | 5 |
| Tour 4 | 3 | **6** |
| Après boucle | - | 2 × 6 = **12** |

La ligne `a = 2 * a` est **hors** de la boucle (non indentée) : elle ne s'exécute qu'**une seule fois**, après les 4 tours.

**Réponse : `12`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que renvoie cette fonction ?
```python
def f():
    s = 0
    for k in range(5):
        s = s + k
    return s
```
- `5`
- `10`
- `15`
- `25`
---CORR---

| Tour | `k` | `s` |
|:---:|:---:|:---:|
| Initialisation | - | 0 |
| 1 | **0** | 0 + 0 = 0 |
| 2 | 1 | 0 + 1 = 1 |
| 3 | 2 | 1 + 2 = 3 |
| 4 | 3 | 3 + 3 = 6 |
| 5 | 4 | 6 + 4 = **10** |

Piège classique : `range(5)` commence à **0**, donc on additionne 0 + 1 + 2 + 3 + 4 = **10** (pas 1 + 2 + 3 + 4 + 5 = 15).

**Réponse : `10`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que renvoie cette fonction ?
```python
def users():
    u = 25000
    for i in range(4):
        u = u * 2
    return u
```
- `100000`
- `200000`
- `400000`
- `800000`
---CORR---

| Tour | `i` | `u` |
|:---:|:---:|:---:|
| Initialisation | - | 25 000 |
| 1 | 0 | 50 000 |
| 2 | 1 | 100 000 |
| 3 | 2 | 200 000 |
| 4 | 3 | **400 000** |

`u` est doublé 4 fois : 25 000 × 2⁴ = 25 000 × 16 = **400 000**.

**Réponse : `400000`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Que renvoie `somme_jusqu_a(4)` ?
```python
def somme_jusqu_a(n):
    s = 0
    for k in range(1, n + 1):
        s = s + k
        return s
```
- `1`
- `4`
- `10`
- `0`
---CORR---

| Tour | `k` | `s` | Action |
|:---:|:---:|:---:|---|
| 1 | 1 | 0 + 1 = 1 | `return s` → **fin de la fonction** |

Piège d'**indentation** très classique : la ligne `return s` est indentée **dans la boucle** (8 espaces), donc elle s'exécute dès le **premier tour** et interrompt immédiatement la fonction. La boucle ne fait qu'un seul tour.

Pour calculer correctement la somme 1 + 2 + 3 + 4 = 10, il faut placer `return s` **après** la boucle :

```python
def somme_jusqu_a(n):
    s = 0
    for k in range(1, n + 1):
        s = s + k
    return s                # ← 4 espaces, hors de la boucle
```

**Réponse : `1`**
{{< /qcm >}}
