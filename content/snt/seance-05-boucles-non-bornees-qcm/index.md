---
title: "QCM — Boucles non bornées"
layout: "qcm"
---

{{< qcm correct="2" >}}
---Q---
Quel mot-clé permet de répéter un bloc **tant qu'une condition est vraie** ?
- `for`
- `repeat`
- `while`
- `until`
---CORR---

| Mot-clé | Rôle en Python |
|---|---|
| `for` | Répète un nombre **connu** de fois (boucle bornée) |
| `while` | Répète **tant que** la condition est vraie (boucle non bornée) |
| `repeat`, `until` | N'existent pas en Python |

**Réponse : `while`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Par quel caractère doit se terminer la **première ligne** d'une boucle `while` ?
```python
while n < 10?
    n = n + 1
```
- `;`
- `.`
- `:`
- `,`
---CORR---

Comme pour `def`, `if` et `for`, la ligne `while` se termine obligatoirement par **deux-points** : ils annoncent le bloc à répéter.

```python
while n < 10:       # ← deux-points obligatoires
    n = n + 1
```

Sans les `:`, Python signale une `SyntaxError`.

**Réponse : `:`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Quelle est la **différence essentielle** entre une boucle `for` et une boucle `while` ?
- Il n'y en a aucune
- `for` répète un nombre **connu** de fois ; `while` répète tant qu'une **condition** est vraie
- `while` est plus rapide que `for`
- `for` est pour les listes, `while` pour les fonctions
---CORR---

| Type | Quand l'utiliser ? | Exemple |
|---|---|---|
| `for` | On connaît à l'avance le **nombre** de répétitions | « Répète 10 fois » |
| `while` | On ignore le nombre de tours, on a un **critère d'arrêt** | « Tant que la batterie est ≥ 20 % » |

**Réponse : `for` est bornée, `while` répète tant qu'une condition est vraie**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Dans quel cas vaut-il **mieux** utiliser une boucle `while` qu'une boucle `for` ?
- Pour afficher les nombres de 1 à 10
- Pour parcourir une liste de 5 éléments
- Pour s'arrêter quand un capital dépasse 3 000 € (on ne sait pas combien d'années)
- Pour répéter exactement 100 fois
---CORR---

| Situation | `for` ou `while` ? |
|---|:---:|
| Nombre de tours **connu** (1 à 10, 100 fois, liste donnée) | `for` |
| Nombre de tours **inconnu** (jusqu'à un seuil, dépassement, arrêt conditionnel) | `while` |

Dès qu'on ne sait pas combien de répétitions seront nécessaires, on utilise `while`.

**Réponse : Pour s'arrêter quand un capital dépasse 3 000 €**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Qu'affiche ce programme ?
```python
n = 0
while n < 3:
    print(n)
    n = n + 1
```
- `1` puis `2` puis `3`
- `0` puis `1` puis `2` puis `3`
- `0` puis `1` puis `2`
- Rien
---CORR---

| Tour | `n` avant test | `n < 3` | Affichage | `n` après |
|:---:|:---:|:---:|:---:|:---:|
| 1 | 0 | ✓ | `0` | 1 |
| 2 | 1 | ✓ | `1` | 2 |
| 3 | 2 | ✓ | `2` | 3 |
| Stop | 3 | ✗ | — | — |

La boucle s'arrête **avant** d'afficher 3 : la condition `3 < 3` est fausse.

**Réponse : `0` puis `1` puis `2`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Qu'affiche ce programme ?
```python
n = 10
while n < 5:
    print(n)
    n = n + 1
print("fin")
```
- `10` puis `fin`
- `5` puis `fin`
- `fin`
- Boucle infinie
---CORR---

| Étape | `n` | `n < 5` | Action |
|:---:|:---:|:---:|---|
| Test initial | 10 | ✗ Fausse (10 n'est pas < 5) | Le bloc n'est **jamais** exécuté |
| Après boucle | 10 | — | `print("fin")` |

Si la condition est fausse **dès le départ**, la boucle est complètement sautée — elle peut tourner **zéro fois**.

**Réponse : `fin`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Quel problème pose ce programme ?
```python
n = 10
while n > 0:
    print(n)
```
- Erreur de syntaxe
- **Boucle infinie** : `n` n'est jamais modifié, la condition reste toujours vraie
- Il ne s'exécute pas
- Il affiche `10` une seule fois
---CORR---

| Tour | `n` | `n > 0` | Action |
|:---:|:---:|:---:|---|
| 1 | 10 | ✓ | `print(10)` |
| 2 | 10 | ✓ | `print(10)` |
| ∞ | 10 | toujours ✓ | … |

`n` n'est **jamais modifié** dans la boucle → la condition reste vraie indéfiniment. Pour corriger, il faut ajouter `n = n - 1` dans le bloc.

```python
while n > 0:
    print(n)
    n = n - 1
```

**Réponse : Boucle infinie (n n'est jamais modifié)**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Combien de fois s'exécute ce programme ?
```python
n = 1
while n < 16:
    n = n * 2
```
- `3` tours
- `4` tours
- `5` tours
- `16` tours
---CORR---

| Tour | `n` avant test | `n < 16` | `n` après |
|:---:|:---:|:---:|:---:|
| 1 | 1 | ✓ | 2 |
| 2 | 2 | ✓ | 4 |
| 3 | 4 | ✓ | 8 |
| 4 | 8 | ✓ | **16** |
| Stop | 16 | ✗ (16 n'est pas < 16) | — |

La boucle fait **4 tours** : `n` passe de 1 à 16 par doublements successifs (1, 2, 4, 8, 16), puis le test devient faux.

**Réponse : 4 tours**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Que vaut `n` à la fin de ce programme ?
```python
n = 1
while n < 50:
    n = n + n
```
- `25`
- `32`
- `64`
- `50`
---CORR---

| Tour | `n` avant | `n < 50` | `n` après (`n + n` = doubler) |
|:---:|:---:|:---:|:---:|
| 1 | 1 | ✓ | 2 |
| 2 | 2 | ✓ | 4 |
| 3 | 4 | ✓ | 8 |
| 4 | 8 | ✓ | 16 |
| 5 | 16 | ✓ | 32 |
| 6 | 32 | ✓ | **64** |
| Stop | 64 | ✗ (64 ≥ 50) | — |

`n + n` double la valeur de `n`. On dépasse 50 quand `n` vaut 64.

**Réponse : `64`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Qu'affiche ce programme (compte à rebours) ?
```python
n = 3
while n >= 0:
    print(n)
    n = n - 1
print("Décollage !")
```
- `3` puis `2` puis `1` puis `Décollage !`
- `3` puis `2` puis `1` puis `0` puis `-1` puis `Décollage !`
- `3` puis `2` puis `1` puis `0` puis `Décollage !`
- `0` puis `Décollage !`
---CORR---

| Tour | `n` avant test | `n >= 0` | Affichage |
|:---:|:---:|:---:|:---:|
| 1 | 3 | ✓ | `3` |
| 2 | 2 | ✓ | `2` |
| 3 | 1 | ✓ | `1` |
| 4 | 0 | ✓ | `0` |
| Stop | -1 | ✗ | — |
| (après boucle) | — | — | `Décollage !` |

Avec `n >= 0`, la valeur 0 est **incluse** dans la boucle (≥ et non >).

**Réponse : `3 2 1 0 Décollage !`**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Combien d'heures faut-il pour que la batterie passe **strictement sous 20 %** ?
```python
charge = 95
heures = 0
while charge >= 20:
    charge = charge - 8
    heures = heures + 1
```
- `8`
- `9`
- `10`
- `11`
---CORR---

| Heures | `charge` avant test | `charge >= 20` | `charge` après |
|:---:|:---:|:---:|:---:|
| 0 | 95 | ✓ | 87 |
| 1 | 87 | ✓ | 79 |
| … | … | … | … |
| 8 | 31 | ✓ | 23 |
| 9 | 23 | ✓ | **15** |
| Stop | 15 | ✗ (15 < 20) | — |

On boucle tant que la charge **reste ≥ 20 %**. La charge passe en dessous au tour où elle vaut 23 → 15, soit **10 heures**.

**Réponse : `10`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que renvoie cette fonction ?
```python
def annees(capital, objectif):
    n = 0
    while capital < objectif:
        capital = capital * 1.025
        n = n + 1
    return n
```
Que renvoie `annees(2000, 3000)` ?
- `16`
- `17`
- `25`
- Boucle infinie
---CORR---

| Année | `capital` (avant test) | `capital < 3000` | `capital` (après) |
|:---:|:---:|:---:|:---:|
| 0 | 2 000 | ✓ | 2 050 |
| 1 | 2 050 | ✓ | 2 101.25 |
| … | … | … | … |
| 16 | 2 967.30 | ✓ | **3 041.49** |
| Stop | 3 041.49 | ✗ | — |

Le capital dépasse 3 000 € au bout de **17 ans** (2 000 × 1.025¹⁷ ≈ 3 041).

**Réponse : `17`**
{{< /qcm >}}

{{< qcm correct="3" >}}
---Q---
Quel **problème** pose ce programme ?
```python
compteur = 0
while compteur < 5:
    print("Bonjour")
compteur = compteur + 1
```
- Il affiche `Bonjour` 5 fois
- Il manque les `:` après `while`
- Il y a une `SyntaxError`
- **Boucle infinie** : `compteur = compteur + 1` est hors de la boucle
---CORR---

| Ligne | Indentation | Dans la boucle ? |
|---|:---:|:---:|
| `print("Bonjour")` | 4 espaces | ✓ Oui |
| `compteur = compteur + 1` | 0 espace | ✗ **Non** |

Comme `compteur` n'est jamais modifié dans la boucle, la condition reste vraie indéfiniment → la boucle affiche `Bonjour` à l'infini. Il faut **indenter** la ligne d'incrément :

```python
while compteur < 5:
    print("Bonjour")
    compteur = compteur + 1     # ← 4 espaces : dans la boucle
```

**Réponse : Boucle infinie (incrément hors de la boucle)**
{{< /qcm >}}

{{< qcm correct="2" >}}
---Q---
Combien de fois `print("ok")` s'exécute-t-il ?
```python
n = 5
while n > 5:
    print("ok")
    n = n + 1
```
- `1`
- Boucle infinie
- `0`
- `5`
---CORR---

| Étape | `n` | `n > 5` | Action |
|:---:|:---:|:---:|---|
| Test initial | 5 | ✗ Fausse (5 n'est pas > 5) | Le bloc n'est **jamais** exécuté |

Avec une **inégalité stricte**, 5 n'est pas > 5 : la condition est fausse dès le départ, la boucle ne tourne **pas du tout**.

**Réponse : `0`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Qu'affiche ce programme (suite de Syracuse à partir de 6) ?
```python
n = 6
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    print(n)
```
- `6 3 10 5 16 8 4 2 1`
- `3 10 5 16 8 4 2 1`
- `6 3 10 5 16 8 4 2`
- `3 10 5 16 8 4 2`
---CORR---

| `n` (avant test) | Pair/Impair | Opération | Nouvelle valeur | Affichage |
|:---:|:---:|---|:---:|:---:|
| 6 | pair | 6 // 2 | 3 | `3` |
| 3 | impair | 3×3 + 1 | 10 | `10` |
| 10 | pair | 10 // 2 | 5 | `5` |
| 5 | impair | 3×5 + 1 | 16 | `16` |
| 16 | pair | 16 // 2 | 8 | `8` |
| 8 | pair | 8 // 2 | 4 | `4` |
| 4 | pair | 4 // 2 | 2 | `2` |
| 2 | pair | 2 // 2 | 1 | `1` |
| 1 | — | (stop) | — | — |

Le `print(n)` est **après** la modification : la première valeur affichée est `3` (pas `6`). Et `1` est bien affiché avant la sortie.

**Réponse : `3 10 5 16 8 4 2 1`**
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
| Stop | 1 | ✗ (1 n'est pas > 1) | — |

`//` est la **division entière** (pas de virgule). Le `print(n)` est **hors** boucle, il n'affiche `n` qu'une seule fois à la sortie : **1**.

**Réponse : `1`**
{{< /qcm >}}

{{< qcm correct="3" >}}
---Q---
Quel est le problème de ce programme ?
```python
capital = 1000
while capital >= 1000:
    capital = capital * 1.05
print(capital)
```
*(Objectif : faire grossir le capital jusqu'à dépasser 2 000 €.)*
- Le `1.05` est faux
- Il manque les `:`
- Il faut écrire `capital = capital + 1.05`
- **Boucle infinie** : la condition `>= 1000` reste toujours vraie quand le capital grossit
---CORR---

| Tour | `capital` | `capital >= 1000` | `capital` après |
|:---:|:---:|:---:|:---:|
| 1 | 1 000 | ✓ | 1 050 |
| 2 | 1 050 | ✓ | 1 102.5 |
| ∞ | ↑ | toujours ✓ | … |

Le capital ne fait qu'**augmenter** : la condition `capital >= 1000` ne deviendra **jamais** fausse → boucle infinie. Il faut inverser la logique : on boucle **tant qu'on n'a pas atteint l'objectif**.

```python
while capital < 2000:       # ← condition inversée
    capital = capital * 1.05
```

**Réponse : Boucle infinie (la condition reste toujours vraie)**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Combien de fois la boucle s'exécute-t-elle ?
```python
n = 1
while n < 100:
    n = n * 3
```
- `4` fois
- `5` fois
- `6` fois
- Boucle infinie
---CORR---

| Tour | `n` avant test | `n < 100` | `n` après (`n × 3`) |
|:---:|:---:|:---:|:---:|
| 1 | 1 | ✓ | 3 |
| 2 | 3 | ✓ | 9 |
| 3 | 9 | ✓ | 27 |
| 4 | 27 | ✓ | 81 |
| 5 | 81 | ✓ | **243** |
| Stop | 243 | ✗ | — |

`n` triple à chaque tour : 1 → 3 → 9 → 27 → 81 → 243. La boucle s'exécute **5 fois** (le dernier tour faisant passer `n` au-dessus de 100).

**Réponse : `5` fois**
{{< /qcm >}}

{{< qcm correct="0" >}}
---Q---
Que renvoie cette fonction ?
```python
def f():
    n = 1
    while n < 10:
        n = n + 2
        return n
```
- `3`
- `9`
- `11`
- Boucle infinie
---CORR---

| Tour | `n` avant test | Action |
|:---:|:---:|---|
| 1 | 1 | `n = 1 + 2` = 3, puis `return 3` → **fin** de la fonction |

Piège classique d'**indentation** : la ligne `return n` est dans le bloc de la boucle (8 espaces), donc elle s'exécute dès le **premier tour** et interrompt la fonction. La boucle ne fait qu'un seul tour.

Pour boucler correctement jusqu'à `n ≥ 10`, il faut placer `return n` **après** la boucle :

```python
def f():
    n = 1
    while n < 10:
        n = n + 2
    return n            # ← 4 espaces, hors de la boucle
```

**Réponse : `3`**
{{< /qcm >}}

{{< qcm correct="1" >}}
---Q---
Que renvoie cette fonction ?
```python
def cible(c):
    n = 0
    while c < 10000:
        c = c * 2
        n = n + 1
    return n
```
Que renvoie `cible(1000)` ?
- `3`
- `4`
- `5`
- Boucle infinie
---CORR---

| Tour | `c` avant test | `c < 10 000` | `c` après (`×2`) | `n` |
|:---:|:---:|:---:|:---:|:---:|
| 1 | 1 000 | ✓ | 2 000 | 1 |
| 2 | 2 000 | ✓ | 4 000 | 2 |
| 3 | 4 000 | ✓ | 8 000 | 3 |
| 4 | 8 000 | ✓ | **16 000** | 4 |
| Stop | 16 000 | ✗ | — | — |

Il faut **4 doublements** pour passer de 1 000 à 16 000 (premier multiple de 2 ≥ 10 000).
1 000 × 2⁴ = 16 000 ≥ 10 000 ✓, mais 1 000 × 2³ = 8 000 < 10 000.

**Réponse : `4`**
{{< /qcm >}}
