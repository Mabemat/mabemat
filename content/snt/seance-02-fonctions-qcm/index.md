---
title: "QCM - Fonctions"
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

En Python, une fonction commence toujours par `def`, suivi du nom puis des parenthèses.

**Réponse : `def`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Par quel caractère doit se terminer la **première ligne** d'une définition de fonction ?
```python
def aire(c)?
    return c * c
```
- `;`
- `.`
- `:`
- `,`
---CORR---


Sans les deux-points, Python signale une `SyntaxError`.

**Réponse : `:`**
{{< /qcm >}}



{{< qcm correct="1" >}}
---Q---
Quel est le **nom** de la fonction définie ci-dessous ?
```python
def aire(c):
    return c * c
```
- `c`
- `aire`
- `return`
- `def`
---CORR---

| Élément | Rôle |
|---|---|
| `def` | Mot-clé d'entête |
| `aire` | **Nom** de la fonction |
| `c` | Argument |
| `return` | Renvoie une valeur |

Le nom de la fonction est ce qui suit `def` et précède la parenthèse ouvrante.

**Réponse : `aire`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que renvoie l'appel `fonction(5)` ?
```python
def fonction(n):
    return 2 * n
```
- `5`
- `2`
- `10`
- `25`
---CORR---

| Étape | `n` | Calcul | Renvoi |
|:---:|:---:|---|:---:|
| Appel `fonction(5)` | 5 | - | - |
| `return 2 * n` | 5 | 2 × 5 | **10** |

**Réponse : `10`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Combien d'**arguments** prend la fonction suivante ?
```python
def somme(a, b, c):
    return a + b + c
```
- `1`
- `2`
- `3`
- `4`
---CORR---

| Argument | Position |
|:---:|:---:|
| `a` | 1er |
| `b` | 2e |
| `c` | 3e |

Les arguments sont les noms écrits entre les parenthèses, séparés par des virgules.

**Réponse : `3`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que renvoie `aire_rect(8, 3)` ?
```python
def aire_rect(L, l):
    return L * l
```
- `11`
- `24`
- `8`
- `83`
---CORR---

| Argument | `L` | `l` | Calcul |
|:---:|:---:|:---:|:---:|
| Appel `aire_rect(8, 3)` | 8 | 3 | 8 × 3 = **24** |

**Réponse : `24` **
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Pourquoi y a-t-il des **espaces au début** des lignes du bloc d'une fonction ?
```python
def carre(x):
    return x ** 2
```
- Pour faire joli, c'est juste de la mise en forme
- C'est l'indentation : elle indique à Python quelles lignes appartiennent à la fonction
- C'est facultatif, ça marche aussi sans
- C'est une erreur de l'éditeur de texte
---CORR---

L'indentation (4 espaces ou une tabulation) délimite le **bloc** d'instructions appartenant à la fonction. Sans elle, Python signale une `IndentationError`.

```python
def f(x):
    return x        # 4 espaces avant return → ✓ correct
```

Si `return x` était collé à la marge (sans indentation), Python ne saurait pas qu'il appartient à `f`.

**Réponse : Indentation obligatoire**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que renvoie `carre(7)` ?
```python
def carre(x):
    return x ** 2
```
- `14`
- `49`
- `7`
- `27`
---CORR---

| Étape | `x` | Calcul | Renvoi |
|:---:|:---:|---|:---:|
| Appel `carre(7)` | 7 | - | - |
| `return x ** 2` | 7 | 7² = 7 × 7 | **49** |

L'opérateur `**` signifie **puissance**, pas multiplication par 2.

**Réponse : `49`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que renvoie `score_bonus(2, 4)` ?
```python
def score_bonus(buts, passes):
    return buts * 3 + passes
```
- `12`
- `10`
- `6`
- `8`
---CORR---

| Argument | `buts` | `passes` | Calcul |
|:---:|:---:|:---:|---|
| Appel `score_bonus(2, 4)` | 2 | 4 | 2 × 3 + 4 = 6 + 4 = **10** |

Attention à la priorité : `*` avant `+`.

**Réponse : `10`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que renvoie `triple(triple(2))` ?
```python
def triple(n):
    return 3 * n
```
- `6`
- `12`
- `18`
- `9`
---CORR---

| Étape | Appel | `n` | Renvoi |
|:---:|---|:---:|:---:|
| Intérieur | `triple(2)` | 2 | 3 × 2 = **6** |
| Extérieur | `triple(6)` | 6 | 3 × 6 = **18** |

Python évalue d'abord l'appel **intérieur**, puis utilise son résultat comme argument du second appel.

**Réponse : `18`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que renvoie `aire_triangle(6, 4)` ?
```python
def aire_triangle(b, h):
    return b * h / 2
```
- `24`
- `10`
- `12.0`
- `5.0`
---CORR---

| Argument | `b` | `h` | Calcul |
|:---:|:---:|:---:|---|
| Appel `aire_triangle(6, 4)` | 6 | 4 | 6 × 4 ÷ 2 = 24 ÷ 2 = **12.0** |

L'opérateur `/` renvoie toujours un `float` (nombre décimal), même si le résultat est entier.

**Réponse : `12.0`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que renvoie `calcul(3)` ?
```python
def calcul(x):
    y = x + 1
    return y * 2
```
- `7`
- `8`
- `6`
- `9`
---CORR---

| Ligne | `x` | `y` | Renvoi |
|:---:|:---:|:---:|:---:|
| Appel `calcul(3)` | 3 | - | - |
| `y = x + 1` | 3 | **4** | - |
| `return y * 2` | 3 | 4 | 4 × 2 = **8** |

La variable interne `y` n'existe que pendant l'exécution de la fonction.

**Réponse : `8`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que renvoie `double(triple(2))` ?
```python
def double(n):
    return 2 * n

def triple(n):
    return 3 * n
```
- `6`
- `10`
- `12`
- `8`
---CORR---

| Étape | Appel | `n` | Renvoi |
|:---:|---|:---:|:---:|
| Intérieur | `triple(2)` | 2 | 3 × 2 = **6** |
| Extérieur | `double(6)` | 6 | 2 × 6 = **12** |

On évalue d'abord la fonction la plus interne, puis la plus externe.

**Réponse : `12`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Qu'affiche ce programme (deux lignes) ?
```python
def f(x):
    print(x * 2)

y = f(5)
print(y)
```
- `10` puis `None`
- `10` puis `10`
- `5` puis `10`
- `None` puis `10`
---CORR---

| Ligne | Action | Affichage | `y` |
|:---:|---|:---:|:---:|
| `y = f(5)` | `f` exécute `print(5 * 2)` | **`10`** | - |
| (fin de `f`) | Aucun `return` → renvoie `None` | - | `None` |
| `print(y)` | Affiche la valeur de `y` | **`None`** | `None` |

Une fonction sans `return` renvoie automatiquement `None`. `print` à l'intérieur affiche, mais ne renvoie rien.

**Réponse : `10` puis `None`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Qu'affiche ce programme ?
```python
def f(x):
    return x * 2
    print("Bonjour")

print(f(3))
```
- `Bonjour` puis `6`
- `6` puis `Bonjour`
- `6`
- `Bonjour`
---CORR---

| Ligne | Action | Effet |
|:---:|---|---|
| Appel `f(3)` | `return x * 2` | Renvoie **6** et **quitte** la fonction |
| Ligne suivante | `print("Bonjour")` | **Jamais exécutée** (après `return`) |
| `print(f(3))` | Affiche le retour de `f` | Affiche **`6`** |

Toute instruction écrite **après** `return` est ignorée : `return` met fin à la fonction.

**Réponse : `6`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Quelle est l'erreur dans ce code ?
```python
def double(n)
    return 2 * n
```
- Il manque les **deux-points** `:` à la fin de la première ligne
- Il manque l'indentation
- Le nom `double` est invalide
- Il n'y a aucune erreur
---CORR---

Les deux-points sont obligatoires en fin de ligne `def` pour annoncer le bloc d'instructions de la fonction.

```python
def double(n):       # ← le « : » est obligatoire
    return 2 * n
```

**Réponse : Il manque `:`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Quelle est la principale erreur dans ce code ?
```python
def imc(p, t):
resultat = p / (t**2)
return resultat
```
- Le nom `imc` est interdit
- Les lignes du bloc ne sont pas **indentées**
- L'opérateur `**` n'existe pas en Python
- Il manque des arguments à la fonction
---CORR---

Les lignes du bloc d'une fonction doivent être **indentées** (4 espaces) pour que Python les rattache à la fonction.

```python
def imc(p, t):
    resultat = p / (t**2)    # ← 4 espaces
    return resultat          # ← 4 espaces
```

Sans cette indentation, Python signale une `IndentationError`.

**Réponse : Lignes non indentées**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que contient la variable `message` à la fin de ce programme ?
```python
def saluer(nom):
    print("Bonjour " + nom)

message = saluer("Léa")
print(message)
```
- `"Bonjour Léa"`
- `"Léa"`
- `None`
- Le programme provoque une erreur
---CORR---

| Étape | Action | Affichage | `message` |
|:---:|---|:---:|:---:|
| Appel `saluer("Léa")` | `print("Bonjour Léa")` | `Bonjour Léa` | - |
| Fin de `saluer` | Pas de `return` → renvoie `None` | - | `None` |
| `print(message)` | Affiche la valeur de `message` | `None` | `None` |

Piège classique : `print` **affiche** mais ne **renvoie** rien. Sans `return`, la fonction renvoie `None`.

**Réponse : `None`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que renvoie `nb_carreaux(4, 5, 0.5)` ?
```python
def aire_piece(L, l):
    return L * l

def nb_carreaux(L, l, c):
    return aire_piece(L, l) / (c * c)
```
- `40`
- `80.0`
- `20`
- `10.0`
---CORR---

| Étape | Appel | Calcul | Renvoi |
|:---:|---|---|:---:|
| Intérieur | `aire_piece(4, 5)` | 4 × 5 | **20** |
| Extérieur | `nb_carreaux(4, 5, 0.5)` | 20 ÷ (0,5 × 0,5) = 20 ÷ 0,25 | **80.0** |

Une fonction peut **appeler une autre fonction** dans son corps : c'est la composition. L'opérateur `/` produit toujours un `float`.

**Réponse : `80.0`**
{{< /qcm >}}
