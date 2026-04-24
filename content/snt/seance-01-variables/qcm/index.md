---
title: "QCM — Variables et affectation"
layout: "qcm"
---

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
message = "Bonjour"
print(message)
```
- `message`
- `Bonjour`
- `"Bonjour"`
- Rien
---CORR---


| Ligne | `message` | Affichage |
|:---:|---|---|
| 1 | `"Bonjour"` | — |
| 2 | `"Bonjour"` | **`Bonjour`** |

`print()` affiche la **valeur** de la variable, sans les guillemets. <br>
Écrire `print(message)` n'affiche pas le mot `message`, mais ce que contient la variable.

**Réponse : `Bonjour`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Quel est le type de la variable `n` après `n = 42` ?
- `int`
- `float`
- `str`
- `bool`
---CORR---

| Valeur | Type | Explication |
|---|---|---|
| `42` | `int` | Nombre entier, sans virgule |
| `42.0` | `float` | Nombre décimal (point décimal présent) |
| `"42"` | `str` | Texte (entre guillemets) |

Un nombre entier sans guillemets et sans point décimal est toujours de type `int`.

**Réponse : `int`**
{{< /qcm >}}

{{< qcm correct="3" >}}
---Q---
Quel est le type de la variable `t` après `t = "17:30"` ?
- `int`
- `float`
- `bool`
- `str`
---CORR---

| Type | Description | Exemples |
|---|---|---|
| `int` | Nombre entier | `42`, `-5` |
| `float` | Nombre décimal | `3.14`, `17.5` |
| `bool` | Vrai ou faux | `True`, `False` |
| `str` | Texte (entre guillemets) | `"bonjour"`, `"17:30"` |

Tout ce qui est entre guillemets `" "` est un `str`, même si ça ressemble à un nombre ou une heure.

 **Réponse : `str`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Quelle est la valeur de `z` après ce code ?
```python
x = 6
y = 4
z = x * y
```
- `6`
- `4`
- `24`
- `10`
---CORR---


 

| Ligne | `x` | `y` | `z` |
|:---:|---:|---:|---:|
| 1 | 6 | — | — |
| 2 | 6 | 4 | — |
| 3 | 6 | 4 | 6×4 = **24** |

`z = x * y` signifie : `z` prend la valeur de `x` multiplié par `y`, soit 6 × 4 = **24**.

**Réponse : `24`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Quelle est la valeur finale de `score` ?
```python
score = 100
score = score - 30
score = score + 10
```
- `100`
- `80`
- `70`
- `130`
---CORR---

 

| Ligne | `score` | Opération |
|:---:|---:|---|
| 1 | 100 | On affecte 100 à `score` |
| 2 | **70** | `score = 100 − 30` |
| 3 | **80** | `score = 70 + 10` |

**Réponse : `80`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Qu'affiche ce programme ?
```python
a = 5
b = 2
c = a ** b
print(c)
```
- `25`
- `10`
- `7`
- `52`
---CORR---

 

| Ligne | `a` | `b` | `c` |
|:---:|---:|---:|---:|
| 1 | 5 | — | — |
| 2 | 5 | 2 | — |
| 3 | 5 | 2 | 5² = **25** |

L'opérateur `**` signifie **puissance**. Donc `a ** b` = 5² = 5 × 5 = **25**.

**Réponse : `25`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Quelle est la valeur de `resultat` ?
```python
a = 10
b = 3
resultat = a // b
```
- `3.33`
- `3`
- `1`
- `30`
---CORR---

 

| Ligne | `a` | `b` | `resultat` |
|:---:|---:|---:|---:|
| 1 | 10 | — | — |
| 2 | 10 | 3 | — |
| 3 | 10 | 3 | 10//3 = **3** |

L'opérateur `//` est la **division entière** (sans la partie décimale). 10 ÷ 3 = 3,33… donc `10 // 3 = 3`.

**Réponse : `3`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Qu'affiche ce programme ?
```python
nom = "Marie"
ville = "Lyon"
print(nom + " habite à " + ville)
```
- `nomville`
- `Marie ville Lyon`
- `Marie habite à Lyon`
- Erreur
---CORR---

 

| Ligne | `nom` | `ville` | Affichage |
|:---:|---|---|---|
| 1 | `"Marie"` | — | — |
| 2 | `"Marie"` | `"Lyon"` | — |
| 3 | `"Marie"` | `"Lyon"` | `"Marie"` + `" habite à "` + `"Lyon"` = **`"Marie habite à Lyon"`** |

La **concaténation** avec `+` assemble les chaînes bout à bout.

**Réponse : `Marie habite à Lyon`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
prenom = "Ali"
print(3 * prenom)
```
- `3Ali`
- `AliAliAli`
- `Ali3`
- Erreur
---CORR---


 

| Ligne | `prenom` | Affichage |
|:---:|---|---|
| 1 | `"Ali"` | — |
| 2 | `"Ali"` | `3 * "Ali"` = **`"AliAliAli"`** |

En Python, `3 * "Ali"` répète la chaîne 3 fois : `"Ali"` + `"Ali"` + `"Ali"` = **`"AliAliAli"`**.

**Réponse : `AliAliAli`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Lequel de ces noms de variable est **valide** en Python ?
- `nb_points`
- `1er_score`
- `mon score`
- `score:total`
---CORR---


| Nom | ✓/✗ | Raison |
|---|:---:|---|
| `nb_points` | ✓ | Lettres et tiret bas uniquement |
| `1er_score` | ✗ | Commence par un chiffre |
| `mon score` | ✗ | Contient un espace |
| `score:total` | ✗ | Le caractère `:` est interdit |

**Réponse : `nb_points`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Lequel de ces noms de variable est **valide** en Python ?
- `_age`
- `age!`
- `2age`
- `age maths`
---CORR---


| Nom | ✓/✗ | Raison |
|---|:---:|---|
| `_age` | ✓ | Le tiret bas `_` est autorisé en début de nom |
| `age!` | ✗ | `!` est un caractère spécial interdit |
| `2age` | ✗ | Commence par un chiffre |
| `age maths` | ✗ | Contient un espace |

Un nom de variable peut commencer par une **lettre** (a–z, A–Z) **ou un tiret bas** (`_`).

**Réponse : `_age`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que vaut `n` à la fin de ce code ?
```python
n = 1
n = n + 1
n = n + 1
n = n + 1
```
- `1`
- `3`
- `4`
- `111`
---CORR---
 

| Ligne | `n` | Opération |
|:---:|---:|---|
| 1 | **1** | On affecte 1 à `n` |
| 2 | **2** | `n = 1 + 1` |
| 3 | **3** | `n = 2 + 1` |
| 4 | **4** | `n = 3 + 1` |

Chaque ligne `n = n + 1` **incrémente** `n` de 1. On part de 1 et on ajoute 1 trois fois → **4**.

**Réponse : `4`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Qu'affiche ce programme ?
```python
a = 3
b = 4
print(a, b)
```
- `34`
- `a b`
- `3 4`
- `3+4`
---CORR---

| Ligne | `a` | `b` | Affichage |
|:---:|---:|---:|---|
| 1 | 3 | — | — |
| 2 | 3 | 4 | — |
| 3 | 3 | 4 | **`3 4`** |

Quand `print()` reçoit **plusieurs valeurs séparées par des virgules**, il les affiche séparées par un **espace**. C'est différent de `print(a + b)` qui afficherait `7`, ou de `print(str(a) + str(b))` qui afficherait `34`.

**Réponse : `3 4`**

{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Quel est le **type** de la variable `x` après ce code ?
```python
x = 7 / 2
```
- `int`
- `float`
- `str`
- `bool`
---CORR---


| Opération | Résultat | Type |
|---|---|---|
| `7 / 2` | `3.5` | `float` |
| `7 // 2` | `3` | `int` |

En Python, `/` est toujours une **division décimale** : le résultat est **toujours un `float`**, même quand le résultat est entier (`4 / 2` donne `2.0`, pas `2`).

**Réponse : `float`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Quelle est la valeur de `r` ?
```python
a = 17
r = a % 5
```
- `2`
- `3`
- `5`
- `0`
---CORR---


| Ligne | `a` | `r` | Calcul |
|:---:|---:|---:|---|
| 1 | 17 | — | — |
| 2 | 17 | **2** | 17 = 3 × 5 + **2** |

L'opérateur `%` s'appelle le **modulo** : il donne le **reste** de la division entière.
17 ÷ 5 = 3 avec un reste de **2** (car 3 × 5 = 15, et 17 − 15 = 2).

**Réponse : `2`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Quel est le type de la variable `x` après `x = 6.0` ?
- `int`
- `float`
- `str`
- `nombre`
---CORR---

| Valeur | Type | Pourquoi |
|---|---|---|
| `6` | `int` | Pas de virgule → entier |
| `6.0` | `float` | Le `.0` suffit à en faire un décimal |
| `6.5` | `float` | Décimal classique |

Même si `6.0` est mathématiquement un entier, Python le considère comme un `float` à cause du point décimal. `type(6.0)` retourne `<class 'float'>`.

**Réponse : `float`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Que vaut `b` à la fin de ce code ?
```python
a = 5
b = a
a = 10
```
- `5`
- `10`
- `15`
- Erreur
---CORR---
 

| Ligne | `a` | `b` | Ce qui se passe |
|:---:|---:|---:|---|
| 1 | **5** | — | `a` vaut 5 |
| 2 | 5 | **5** | `b` reçoit une **copie** de la valeur de `a` |
| 3 | **10** | 5 | `a` change, mais `b` **ne change pas** |

Quand on écrit `b = a`, Python copie la **valeur** de `a` dans `b`. Les deux variables sont ensuite **indépendantes** : modifier `a` n'affecte pas `b`.

**Réponse : `5`**

{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
x = "3"
y = "4"
z = x + y
print(z)
```
- `7`
- `34`
- `3 + 4`
- Erreur
---CORR---

| Ligne | `x` | `y` | `z` |
|:---:|---|---|---|
| 1 | `"3"` | — | — |
| 2 | `"3"` | `"4"` | — |
| 3 | `"3"` | `"4"` | `"3"` + `"4"` = **`"34"`** |

`"3"` et `"4"` sont des `str` (entre guillemets), pas des `int`. Le `+` fait donc une **concaténation** (mise bout à bout), pas une addition. Pour additionner, il faudrait écrire `x = 3` et `y = 4` (sans guillemets).

**Réponse : `34`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que vaut `b` à la fin de ce code ?
```python
a = 10
b = 3
a = b
b = a
```
- `10`
- `3`
- `0`
- Erreur
---CORR--- 

| Ligne | `a` | `b` | Ce qui se passe |
|:---:|---:|---:|---|
| 1 | **10** | — | `a` vaut 10 |
| 2 | 10 | **3** | `b` vaut 3 |
| 3 | **3** | 3 | `a` prend la valeur de `b` → `a = 3` |
| 4 | 3 | **3** | `b` prend la valeur de `a`… qui vaut déjà 3 ! |

On pourrait croire que c'est un échange entre `a` et `b`, mais non : à la ligne 3, `a` est déjà écrasé à 3. Donc ligne 4, `b = a = 3`. <br>
Pour échanger correctement deux variables, il faut une variable temporaire.

**Réponse : `3`**
{{< /qcm >}}

{{< qcm correct="3" >}}
---Q---
Qu'affiche ce programme ?
```python
age = 17
print("J'ai " + age + " ans")
```
- `J'ai 17 ans`
- `J'ai age ans`
- `J'ai  ans`
- Erreur
---CORR---

Ce programme provoque une **TypeError** : on ne peut pas concaténer directement un `str` et un `int` avec `+`.

| Variable | Type | Valeur |
|---|---|---|
| `"J'ai "` | `str` | texte |
| `age` | `int` | `17` |
| `" ans"` | `str` | texte |

Pour que ça fonctionne, il faut convertir `age` en texte :
```python
print("J'ai " + str(age) + " ans")
```
ou utiliser une f-string :
```python
print(f"J'ai {age} ans")
```

**Réponse : Erreur**
{{< /qcm >}}
