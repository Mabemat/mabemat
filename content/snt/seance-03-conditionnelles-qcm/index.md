---
title: "QCM - Conditionnelles"
layout: "qcm"
---

{{< qcm correct="1" >}}
---Q---
Quel mot-clé permet d'**exécuter du code sous condition** en Python ?
- `condition`
- `if`
- `where`
- `case`
---CORR---

| Mot-clé | Rôle en Python |
|---|---|
| `if` | **Si** la condition est vraie, exécuter le bloc |
| `elif` | **Sinon si** une autre condition est vraie |
| `else` | **Sinon**, exécuter le bloc final |

`condition`, `where`, `case` n'existent pas dans la syntaxe Python.

**Réponse : `if`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Par quel caractère doit se terminer la ligne `if` ?
```python
if x > 5?
    print("grand")
```
- `;`
- `.`
- `:`
- `,`
---CORR---

Comme pour `def`, la ligne `if` se termine obligatoirement par **deux-points** : ils annoncent le bloc d'instructions qui suit.

```python
if x > 5:           # ← deux-points obligatoires
    print("grand")
```

Sans les `:`, Python signale une `SyntaxError`.

**Réponse : `:`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
À quoi sert `else` dans une structure conditionnelle ?
- À tester une nouvelle condition
- À exécuter un bloc **quand la condition du `if` est fausse**
- À afficher un message
- À arrêter le programme
---CORR---

| Mot-clé | Quand le bloc s'exécute-t-il ? |
|---|---|
| `if condition:` | Si **la condition est vraie** |
| `elif autre_cond:` | Si la précédente est fausse **et** que celle-ci est vraie |
| `else:` | **Aucune** des conditions précédentes n'est vraie |

`else` ne prend pas de condition après lui : c'est le « cas restant ».

**Réponse : Exécuter un bloc quand la condition du `if` est fausse**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Quel opérateur permet de tester si **deux valeurs sont égales** en Python ?
- `=`
- `==`
- `!=`
- `eq`
---CORR---

| Opérateur | Rôle |
|---|---|
| `=` | **Affectation** : `x = 5` met 5 dans `x` |
| `==` | **Test d'égalité** : `x == 5` renvoie `True` ou `False` |
| `!=` | Test de **différence** |
| `eq` | N'existe pas en Python |

Confondre `=` et `==` est l'erreur la plus fréquente en Python : `if x = 5` est une `SyntaxError`.

**Réponse : `==`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Qu'affiche ce programme ?
```python
x = 7
if x > 5:
    print("grand")
print("fin")
```
- `grand` puis `fin`
- `fin`
- `grand`
- Rien
---CORR---

| Ligne | `x` | Condition `x > 5` | Affichage |
|:---:|:---:|:---:|---|
| 1 | 7 | - | - |
| 2–3 | 7 | **Vraie** (7 > 5) | `grand` |
| 4 | 7 | - | `fin` (hors du `if`) |

`print("fin")` n'est **pas indenté** : il s'exécute toujours, indépendamment du `if`.

**Réponse : `grand` puis `fin`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
x = 3
if x > 5:
    print("grand")
print("fin")
```
- `grand` puis `fin`
- `fin`
- `grand`
- Rien
---CORR---

| Ligne | `x` | Condition `x > 5` | Affichage |
|:---:|:---:|:---:|---|
| 1 | 3 | - | - |
| 2–3 | 3 | **Fausse** (3 < 5) | (rien) |
| 4 | 3 | - | `fin` |

Le bloc du `if` est sauté. La ligne `print("fin")`, qui n'est pas indentée, s'exécute quand même.

**Réponse : `fin`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
age = 15
if age >= 18:
    print("majeur")
else:
    print("mineur")
```
- `majeur`
- `mineur`
- `majeur` puis `mineur`
- Rien
---CORR---

| `age` | Condition `age >= 18` | Branche choisie | Affichage |
|:---:|:---:|:---:|---|
| 15 | **Fausse** | `else` | `mineur` |

Une structure `if / else` choisit **exactement une** des deux branches : jamais les deux à la fois.

**Réponse : `mineur`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Quelle est l'erreur dans ce code ?
```python
if x = 5:
    print("ok")
```
- Le `if` ne peut pas tester une variable
- Il faut écrire `==` (pas `=`) pour **comparer**
- Il manque le mot-clé `then`
- Il manque les parenthèses
---CORR---

| Écriture | Signification |
|---|---|
| `x = 5` | **Affecter** la valeur 5 à `x` |
| `x == 5` | **Tester** si `x` vaut 5 |

Le `if` attend une **condition** (qui s'évalue en `True`/`False`), pas une affectation. Code corrigé :

```python
if x == 5:
    print("ok")
```

**Réponse : Il faut `==` au lieu de `=`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
note = 12
if note >= 16:
    print("Très bien")
elif note >= 12:
    print("Assez bien")
else:
    print("À retravailler")
```
- `Très bien`
- `Assez bien`
- `À retravailler`
- Les trois lignes
---CORR---

| `note` | `note >= 16` | `note >= 12` | Branche | Affichage |
|:---:|:---:|:---:|:---:|---|
| 12 | Fausse | **Vraie** | `elif` | `Assez bien` |

Python teste les branches **dans l'ordre** : dès que l'une est vraie, il exécute son bloc et **ignore** toutes les suivantes.

**Réponse : `Assez bien`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que renvoie `place(14)` ?
```python
def place(age):
    if age < 14:
        return 5.50
    elif age <= 25:
        return 7.80
    else:
        return 10.20
```
- `5.5`
- `7.8`
- `10.2`
- Erreur
---CORR---

| `age` | `age < 14` | `age <= 25` | Branche | Renvoi |
|:---:|:---:|:---:|:---:|:---:|
| 14 | Fausse (14 n'est pas < 14) | **Vraie** | `elif` | **`7.8`** |

Attention : `<` (strict) et `<=` (large) ne traitent pas les **bornes** de la même façon. 14 n'est pas strictement inférieur à 14, mais il est bien inférieur ou égal à 25.

**Réponse : `7.8`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Qu'affiche ce programme ?
```python
moy = 11
note_min = 6
if moy >= 10 and note_min >= 5:
    print("Validé")
else:
    print("Non validé")
```
- `Validé`
- `Non validé`
- Erreur
- Rien
---CORR---

| Condition | Vraie ? |
|---|:---:|
| `moy >= 10` (11 ≥ 10) | ✓ Vraie |
| `note_min >= 5` (6 ≥ 5) | ✓ Vraie |
| **`A and B`** | **Vraie** (les deux le sont) |

`and` n'est vrai **que si les deux** conditions le sont en même temps.

**Réponse : `Validé`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
moy = 11
note_min = 4
if moy >= 10 and note_min >= 5:
    print("Validé")
else:
    print("Non validé")
```
- `Validé`
- `Non validé`
- Erreur
- Rien
---CORR---

| Condition | Vraie ? |
|---|:---:|
| `moy >= 10` (11 ≥ 10) | ✓ Vraie |
| `note_min >= 5` (4 ≥ 5) | ✗ Fausse |
| **`A and B`** | **Fausse** (il en suffit d'une fausse) |

Avec `and`, **une seule** condition fausse rend l'expression entière fausse.

**Réponse : `Non validé`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Qu'affiche ce programme ?
```python
age = 5
if age < 6 or age > 80:
    print("Gratuit")
else:
    print("Tarif normal")
```
- `Gratuit`
- `Tarif normal`
- Les deux
- Erreur
---CORR---

| Condition | Vraie ? |
|---|:---:|
| `age < 6` (5 < 6) | ✓ Vraie |
| `age > 80` (5 > 80) | ✗ Fausse |
| **`A or B`** | **Vraie** (il en suffit d'une vraie) |

`or` est vrai **dès qu'au moins une** condition l'est.

**Réponse : `Gratuit`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
note = 16
if note >= 18:
    print("A")
elif note >= 14:
    print("B")
elif note >= 12:
    print("C")
else:
    print("D")
```
- `A`
- `B`
- `C`
- `B` puis `C`
---CORR---

| `note` | `>= 18` | `>= 14` | `>= 12` | Branche exécutée |
|:---:|:---:|:---:|:---:|:---:|
| 16 | Fausse | **Vraie** | (non testée) | `elif note >= 14` |

Dans une chaîne `if / elif / elif / else`, **dès qu'une condition est vraie**, son bloc s'exécute et toutes les suivantes sont ignorées.

**Réponse : `B`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
def signe(n):
    if n > 0:
        return "positif"
    if n < 0:
        return "négatif"
    return "nul"

print(signe(-5))
```
- `positif`
- `négatif`
- `nul`
- Erreur
---CORR---

| Ligne | `n` | Condition | Action |
|:---:|:---:|---|---|
| `if n > 0` | −5 | Fausse | passe à la suite |
| `if n < 0` | −5 | **Vraie** | `return "négatif"` → la fonction **s'arrête** |
| `return "nul"` | - | - | Jamais atteint |

`return` interrompt immédiatement la fonction : les `return` suivants ne sont pas exécutés.

**Réponse : `négatif`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
def est_pair(n):
    if n % 2 == 0:
        return True
    else:
        return False

print(est_pair(7))
```
- `True`
- `False`
- `1`
- Erreur
---CORR---

| Étape | Calcul | Valeur |
|:---:|---|:---:|
| `n % 2` | 7 ÷ 2 → reste **1** | 1 |
| `n % 2 == 0` | 1 == 0 | **`False`** |
| Branche choisie | `else` | renvoie `False` |

Rappel : `%` donne le **reste** de la division entière. Un nombre est pair si son reste par 2 vaut 0.

**Réponse : `False`**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Que renvoie `tarif(25)` ?
```python
def tarif(age):
    if age >= 0:
        return 5
    if age >= 18:
        return 10
    return 0
```
- `5`
- `10`
- `0`
- Erreur
---CORR---

| Ligne | Condition | Action |
|:---:|---|---|
| `if age >= 0` | 25 ≥ 0 → **Vraie** | `return 5` → fin de la fonction |
| `if age >= 18` | - | jamais atteint |
| `return 0` | - | jamais atteint |

Piège classique d'**ordre** : la condition `age >= 0` est satisfaite par tout âge positif, donc la branche `age >= 18` ne sera **jamais** exécutée. Il faudrait écrire les conditions de la plus restrictive à la plus large, ou utiliser `elif`.

**Réponse : `5`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme ?
```python
x = 3
if x > 10:
    print("A")
    print("B")
else:
    print("C")
print("D")
```
- `A` puis `B` puis `C` puis `D`
- `C` puis `D`
- `D`
- `A` puis `B` puis `D`
---CORR---

| Ligne | `x` | Condition `x > 10` | Affichage |
|:---:|:---:|:---:|---|
| 2–3 (bloc `if`) | 3 | Fausse | (sauté) |
| 5 (bloc `else`) | 3 | - | `C` |
| 6 (hors `if/else`) | 3 | - | `D` |

Le bloc `if` contient **deux** lignes (`A` et `B` toutes les deux indentées), mais elles sont sautées. Le bloc `else` contient une ligne. La dernière `print("D")` n'est pas indentée → toujours exécutée.

**Réponse : `C` puis `D`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que renvoie `mention(12)` ?
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
- `"Insuffisant"`
- `"Assez bien"`
- `"Bien"`
- `"Très bien"`
---CORR---

| `moy` | `< 10` | `< 12` | `< 14` | Branche |
|:---:|:---:|:---:|:---:|:---:|
| 12 | Fausse | Fausse (12 n'est pas < 12) | **Vraie** | `elif moy < 14` |

Piège des **bornes strictes** : 12 n'est pas strictement inférieur à 12, donc la branche `Assez bien` (qui s'arrête à `< 12`) ne s'applique **pas**. C'est la suivante qui prend le relais.

**Réponse : `"Bien"`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que renvoie ce programme ?
```python
def reponse(s):
    if s == "oui":
        return 1
    elif s == "OUI":
        return 2
    else:
        return 0

print(reponse("Oui"))
```
- `1`
- `2`
- `0`
- Erreur
---CORR---

| Test | Vraie ? |
|---|:---:|
| `"Oui" == "oui"` | ✗ Fausse (`O` majuscule ≠ `o` minuscule) |
| `"Oui" == "OUI"` | ✗ Fausse (`ui` minuscules ≠ `UI` majuscules) |
| Branche choisie | `else` → `return 0` |

Python est **sensible à la casse** : `"oui"`, `"OUI"` et `"Oui"` sont **trois chaînes différentes**. Pour ignorer la casse, on utilise souvent `s.lower() == "oui"`.

**Réponse : `0`**
{{< /qcm >}}
