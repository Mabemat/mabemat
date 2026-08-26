---
title: "Exercices"
---

### Exercice 1 - Tableau de trace

On considère le programme Python suivant :

```python
a = 7
b = 14
c = a + b
d = c / 3  # le symbole / est celui de la division
```

**Q1.** Complétez ce tableau ligne par ligne, *sans exécuter le programme*. Le symbole **−** signifie que la variable n'existe pas encore à cette étape.

| N° ligne | Instruction | `a` | `b` | `c` | `d` |
|:---:|:---|:---:|:---:|:---:|:---:|
| 1 | `a = 7` | **7** | − | − | − |
| 2 | `b = 14` | 7 | *?* | − | − |
| 3 | `c = a + b` | 7 | 14 | *?* | − |
| 4 | `d = c / 3` | 7 | 14 | *?* | *?* |

**Q2.** Recopiez ce programme dans la cellule ci-dessous (*sans copier-coller !*).

**Q3.** Ajoutez la ligne suivante à la fin, puis exécutez à nouveau. 
```python
print(d)
```

Quel est le rôle de cette instruction ?


---

### Exercice 2 - Réaffectations

On considère le programme Python suivant :

```python
x = 12
y = 5
x = x - 3
y = 3 * y
x = x + y
```

Une ligne comme `x = x - 3` signifie : « la variable `x` prend la valeur `x − 3` ». La *nouvelle* valeur de `x` est l'*ancienne* valeur de `x` moins 3.

**Q1.** Complétez ce tableau *sans exécuter le programme*.

| N° ligne | Instruction | `x` | `y` |
|:---:|:---|:---:|:---:|
| 1 | `x = 12` | **12** | − |
| 2 | `y = 5` | 12 | *?* |
| 3 | `x = x - 3` | *?* | *?* |
| 4 | `y = 3 * y` | *?* | *?* |
| 5 | `x = x + y` | *?* | *?* |

**Q2.** Recopiez ce programme (*sans copier-coller*) et ajoutez l'instruction pour afficher la valeur finale de `x`. Vérifiez votre tableau.

**Q3.** Modifiez la dernière ligne pour afficher les valeurs finales de `x` **et** `y` avec `print(x, y)`.

---

### Exercice 3 - Entraînement interactif

Exercice à réaliser directement dans le notebook Capytale (exercices codepuzzle.io intégrés).

---

### Exercice 4 - Types de variables

Indiquez le type Python le plus approprié (`int`, `float`, `str` ou `bool`) pour stocker chacune des informations suivantes :

- le prénom d'un(e) élève
- le nombre d'élèves dans la classe
- la distance parcourue lors d'une sortie (en km, avec décimales)
- un SMS envoyé à un ami
- le code PIN d'un téléphone (ex : 1234)
- la température extérieure (ex : 18,5 °C)
- le nombre de paniers marqués lors d'un match
- le fait qu'un élève soit majeur ou non
- le fait qu'une lampe soit allumée

---

### Exercice 5 - Booléens en pratique

On modélise l'état d'une application de streaming avec les variables suivantes :

```python
est_connecte = True
son_coupe = False
est_en_pause = True
abonnement_actif = True
```

**Q1.** Sans exécuter, quel est le type de chacune de ces variables ?

**Q2.** Exécutez la cellule ci-dessus pour vérifier. Ajoutez ensuite les instructions pour afficher le type de `son_coupe` et de `abonnement_actif`.

**Q3.** Quelle valeur (`True` ou `False`) donneriez-vous à chaque variable dans les situations suivantes ?

- `est_connecte` si l'utilisateur vient de se déconnecter
- `son_coupe` si l'utilisateur vient de couper le son
- `est_en_pause` si la lecture est en cours
- `abonnement_actif` si l'abonnement a expiré

---

### Exercice 6 - Noms de variables

**Q1.** Lesquels des noms suivants sont **incorrects** en Python ? Expliquez pourquoi et proposez une correction.

`mon score`, `mon_score`, `vitesse`, `3points`, `distance_m`, `note/20`, `dix_huit`

**Q2.** Proposez un nom de variable valide pour stocker chacune des informations suivantes :

- le nombre de spectateurs dans un stade
- la durée d'un trajet en minutes
- le périmètre d'un rectangle
- le score obtenu à un jeu vidéo

---

### Exercice 7 - Débogage

Un élève a écrit le programme ci-dessous pour calculer le coût total d'une commande, mais il contient **4 erreurs** sur les noms de variables.

```python
nb articles = 3
prix unitaire = 8.50
prix-total = nb articles * prix unitaire
print(Prix_total)
```

**Q1.** Lisez le programme et identifiez les 4 erreurs *avant* d'exécuter quoi que ce soit.

**Q2.** Corrigez le programme dans la cellule ci-dessous et exécutez-le pour vérifier.

---

### Exercice 8 - Calculer une moyenne

Un élève a obtenu les notes suivantes : **11**, **14,5**, **9** et **16**.

**Q1.** Écrivez un programme Python contenant :

- 4 variables **bien nommées** pour les 4 notes
- une variable `moyenne` contenant la moyenne
- une instruction `print` pour afficher la moyenne

**Q2.** Quelle est la moyenne de cet élève ?

---

### Exercice 9 - Programme d'achat

La boutique d'un club de football vend des articles aux prix suivants :

- un maillot : 29 €
- une écharpe : 12,50 €
- une casquette : 15 €

Un supporter veut acheter **2 maillots**, **1 écharpe** et **3 casquettes**.

Écrivez un programme Python qui utilise des variables pour les quantités et les prix, calcule le coût total et l'affiche.

---

### Exercice 10 - Programme de calcul

On veut écrire un programme de calcul avec une variable `B` :

1. `B` prend la valeur **4**
2. Multiplier `B` par **2**
3. Ajouter **7** au résultat
4. Élever le résultat au **carré**
5. Afficher le résultat

Écrivez le programme Python correspondant, puis exécutez-le pour vérifier.

---

### Exercice 11 - Racine carrée

Pour calculer $\sqrt{a}$ en Python, on utilise `sqrt(a)` du module `math` en ajoutant `from math import *` en début de programme.

**Q1.** Exécutez le programme ci-dessous et observez les résultats.

**Q2.** D'après le **théorème de Pythagore**, l'hypoténuse $c$ d'un triangle rectangle de côtés $a$ et $b$ vérifie $c = \sqrt{a^2 + b^2}$. Écrivez un programme Python qui calcule et affiche l'hypoténuse d'un triangle rectangle de côtés `a = 3` et `b = 4`.

*Rappel : en Python, `a**2` donne $a^2$, et `sqrt()` calcule la racine carrée.*

**Q3.** Vérifiez votre résultat à la main. Quelle est la valeur exacte de l'hypoténuse ?

*Astuce : 3, 4, 5 est un triplet pythagoricien connu.*

**Q4 - Bonus.** La distance entre deux points $A(x_1, y_1)$ et $B(x_2, y_2)$ est $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$. Calculez la distance entre $A(1, 2)$ et $B(4, 6)$.

---

### Exercice 12 - Comprendre et compléter un programme

On considère le programme Python suivant :

```python
x = 2
y = 6
z = x + y + x * y
z = z ** 2
y = z / 2
```

**Q1.** Complétez ce tableau *sans exécuter le programme*.

| N° ligne | Instruction | `x` | `y` | `z` |
|:---:|:---|:---:|:---:|:---:|
| 1 | `x = 2` | **2** | − | − |
| 2 | `y = 6` | 2 | *?* | − |
| 3 | `z = x + y + x * y` | 2 | 6 | *?* |
| 4 | `z = z ** 2` | 2 | 6 | *?* |
| 5 | `y = z / 2` | 2 | *?* | *?* |

**Q2.** Recopiez ce programme (*sans copier-coller*) et ajoutez les instructions pour afficher les valeurs finales de `x`, `y` et `z`. Vérifiez votre tableau.

**Q3.** Ajoutez **une ligne** qui crée une variable booléenne `z_est_pair` valant `True` si `z` est pair, `False` sinon.

*Rappel : un entier est pair si son reste dans la division par 2 est 0 (`z % 2 == 0`).*

**Q4.** Quelle est la valeur de `z_est_pair` ? Était-ce prévisible d'après votre tableau ?

---

### Exercice 13 - Programme interactif

**Q1.** Exécutez le programme ci-dessous. Que se passe-t-il ?

**Q2.** Complétez le programme pour qu'il demande deux **nombres entiers**, calcule leur **somme** et l'affiche.

*Rappel : `input()` renvoie toujours une chaîne (`str`). Utilisez `int()` pour convertir en entier.*

**Q3 - Défi.** Adaptez le programme de la moyenne (exercice 8) pour que les 4 notes soient **demandées à l'utilisateur** avec `input()`.

---

### Exercice 14 - Prédire et vérifier

On considère le programme Python suivant :

```python
a = "Bon"
b = "soir"
c = " !"

r1 = a + b + c
r2 = 2 * a + " " + b
r3 = b + c + " " + b + c
```

**Q1.** Prédisez **sans exécuter** la valeur de `r1`, `r2` et `r3`. Complétez le tableau ci-dessous.

| Variable | Valeur prédite | Valeur réelle |
|:---:|:---|:---:|
| `r1` | *?* | |
| `r2` | *?* | |
| `r3` | *?* | |

**Q2.** Recopiez le programme et ajoutez les instructions `print` pour afficher `r1`, `r2` et `r3`. Complétez la colonne "Valeur réelle" du tableau.

**Q3.** En utilisant uniquement les variables `a`, `b` et `c`, écrivez l'instruction qui affiche exactement : `Bonsoir Bonsoir !`

---

### Exercice 15 - Ma carte d'identité

**Q1.** Complétez et exécutez le programme suivant avec vos vraies informations :

```python
prenom = "..."       # votre prénom
nom = "..."          # votre nom de famille
classe = "..."       # votre classe

print("Je m'appelle " + prenom + " " + nom + " et je suis en " + classe + ".")
```

**Q2.** Que se passe-t-il si on remplace la dernière ligne par `print(nom.upper() + " " + prenom)` ? Expliquez ce que fait `.upper()`.

**Q3 - Défi.** Écrivez un programme qui demande à l'utilisateur son prénom et un nombre entier `n`, puis affiche ce prénom répété `n` fois, séparé par des tirets.

*Exemple : si prénom = `"Léa"` et n = 3, le programme affiche `Léa-Léa-Léa`.*

---

### Exercice 16 - Chaînes de caractères et indices

On saisit dans la console les instructions suivantes :

```python
A = 'lu'
B = A + A
C = B + 'ne'
D = A + 'miere'
```

**Q1.** Quelle est la valeur de `B` ? De `C` ?

**Q2.** Quelle est la valeur de `len(D)` ? De `D[0]` ? De `D[2]` ?

**Q3.** Que vaut `D[-1]` ? Et `D[-3]` ?

