---
title: "Correction"
---

### Exercice 1 - Tableau de trace

**Q1.** 

| N° ligne | Instruction | `a` | `b` | `c` | `d` |
|:---:|:---|:---:|:---:|:---:|:---:|
| 1 | `a = 7` | **7** | − | − | − |
| 2 | `b = 14` | 7 | **14** | − | − |
| 3 | `c = a + b` | 7 | 14 | **21** | − |
| 4 | `d = c / 3` | 7 | 14 | 21 | **7.0** |

`c` vaut 21 (7 + 14) et `d` vaut 7.0 (21 ÷ 3). Le résultat de `/` est toujours un `float` en Python.

**Q2.** Recopier le programme (sans copier-coller) et exécuter.

**Q3.** En ajoutant `print(d)`, le programme affiche **7.0**. L'instruction `print(d)` sert à afficher la valeur de la variable `d` dans la console.

---

### Exercice 2 - Réaffectations

**Q1.**

| N° ligne | Instruction | `x` | `y` |
|:---:|:---|:---:|:---:|
| 1 | `x = 12` | **12** | − |
| 2 | `y = 5` | 12 | **5** |
| 3 | `x = x - 3` | **9** | 5 |
| 4 | `y = 3 * y` | 9 | **15** |
| 5 | `x = x + y` | **24** | 15 |

Ligne 3 : `x = 12 − 3 = 9` - l'ancienne valeur de `x` est utilisée à droite, puis remplacée à gauche.
Ligne 5 : `x = 9 + 15 = 24`.

**Q2.** Recopier le programme, ajouter `print(x)` et exécuter. La valeur finale affichée est **24**.

**Q3.** En ajoutant `print(x, y)`, le programme affiche `24 15`.

---

### Exercice 3 - Entraînement interactif

Exercice à réaliser en ligne dans le notebook Capytale. Pas de correction écrite - les exercices codepuzzle vérifient automatiquement vos réponses.

---

### Exercice 4 - Types de variables

| Information | Type | Justification |
|:---|:---:|:---|
| le prénom d'un(e) élève | `str` | texte entre guillemets |
| le nombre d'élèves | `int` | entier, sans virgule |
| la distance en km (avec décimales) | `float` | nombre décimal |
| un SMS | `str` | texte |
| le code PIN (ex : 1234) | `str` | on n'effectue pas de calcul dessus ; peut commencer par 0 |
| la température (ex : 18,5 °C) | `float` | nombre décimal |
| le nombre de paniers | `int` | entier |
| le fait d'être majeur ou non | `bool` | vrai ou faux |
| le fait qu'une lampe soit allumée | `bool` | vrai ou faux |

---

### Exercice 5 - Booléens en pratique

**Q1.** Toutes ces variables sont de type `bool` (booléen) : elles ne peuvent valoir que `True` ou `False`.

**Q2.** Vérifier par exécution. Pour afficher le type de `son_coupe` et `abonnement_actif`, ajouter :
```python
print(type(son_coupe))
print(type(abonnement_actif))
```
Les deux affichent `<class 'bool'>`.

**Q3.**

| Variable | Situation | Valeur |
|:---|:---|:---:|
| `est_connecte` | l'utilisateur vient de se déconnecter | `False` |
| `son_coupe` | l'utilisateur vient de couper le son | `True` |
| `est_en_pause` | la lecture est en cours | `False` |
| `abonnement_actif` | l'abonnement a expiré | `False` |

---

### Exercice 6 - Noms de variables

**Q1.**

| Nom | Valide ? | Raison | Correction |
|:---|:---:|:---|:---|
| `mon score` | ✗ | espace interdit | `mon_score` |
| `mon_score` | ✓ | - | - |
| `vitesse` | ✓ | - | - |
| `3points` | ✗ | commence par un chiffre | `nb_points` |
| `distance_m` | ✓ | - | - |
| `note/20` | ✗ | `/` interdit (opérateur) | `note_sur_20` |
| `dix_huit` | ✓ | - | - |

**Q2.**

- nombre de spectateurs : `nb_spectateurs`
- durée d'un trajet : `duree_trajet`
- périmètre d'un rectangle : `perimetre`
- score d'un jeu vidéo : `score`

---

### Exercice 7 - Débogage

**Q1.** Les 4 erreurs :

- Ligne 1 : `nb articles` → espace interdit dans un nom de variable
- Ligne 2 : `prix unitaire` → espace interdit dans un nom de variable
- Ligne 3 : `prix-total` → le tiret `-` est l'opérateur de soustraction, pas un caractère de nom valide
- Ligne 4 : `Prix_total` → mauvaise casse (`P` majuscule) ; la variable avait été définie avec `prix` minuscule

**Q2.** Programme corrigé :

```python
nb_articles = 3
prix_unitaire = 8.50
prix_total = nb_articles * prix_unitaire
print(prix_total)
```

Résultat : `25.5` (car 3 × 8,50 = 25,50).

---

### Exercice 8 - Calculer une moyenne

**Q1.**
```python
note1 = 11
note2 = 14.5
note3 = 9
note4 = 16
moyenne = (note1 + note2 + note3 + note4) / 4
print(moyenne)
```

| Ligne | `note1` | `note2` | `note3` | `note4` | `moyenne` |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | 11 | − | − | − | − |
| 2 | 11 | 14.5 | − | − | − |
| 3 | 11 | 14.5 | 9 | − | − |
| 4 | 11 | 14.5 | 9 | 16 | − |
| 5 | 11 | 14.5 | 9 | 16 | **(11 + 14.5 + 9 + 16) ÷ 4 = 12.625** |

**Q2.** La moyenne est **12.625**.

> ⚠️ La moyenne est calculée par `(note1 + note2 + note3 + note4) / 4`. **Les parenthèses sont indispensables** : sans elles, `note1 + note2 + note3 + note4 / 4` ne diviserait que `note4` par 4, et le résultat serait faux (38.5 au lieu de 12.625).

---

### Exercice 9 - Programme d'achat

```python
prix_maillot = 29
prix_echarpe = 12.50
prix_casquette = 15

qte_maillots = 2
qte_echarpes = 1
qte_casquettes = 3

total = qte_maillots * prix_maillot + qte_echarpes * prix_echarpe + qte_casquettes * prix_casquette
print(total)
```

| Ligne | Calcul | Valeur |
|:---|:---|:---:|
| maillots | 2 × 29 | 58 |
| écharpe | 1 × 12,50 | 12.5 |
| casquettes | 3 × 15 | 45 |
| **total** | 58 + 12,5 + 45 | **115.5** |

Le coût total est **115,50 €**.

---

### Exercice 10 - Programme de calcul

```python
B = 4
B = B * 2    # B = 8
B = B + 7    # B = 15
B = B ** 2   # B = 225
print(B)
```

| N° ligne | Instruction | `B` |
|:---:|:---|:---:|
| 1 | `B = 4` | **4** |
| 2 | `B = B * 2` | **8** |
| 3 | `B = B + 7` | **15** |
| 4 | `B = B ** 2` | **225** |

Le programme affiche `225`.

---

### Exercice 11 - Racine carrée

**Q1.** Le programme affiche `5.0`, `1.4142135623730951` et `12.0`. La fonction `sqrt(a)` calcule la racine carrée de `a`.

**Q2.**

```python
from math import *
a = 3
b = 4
c = sqrt(a**2 + b**2)
print(c)
```

Le programme affiche `5.0`.

**Q3.** $c = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$. Le triplet (3, 4, 5) est un triplet pythagoricien classique.

**Q4 - Bonus.**

```python
from math import *
x1, y1 = 1, 2
x2, y2 = 4, 6
d = sqrt((x2 - x1)**2 + (y2 - y1)**2)
print(d)
```

$d = \sqrt{(4-1)^2 + (6-2)^2} = \sqrt{9 + 16} = \sqrt{25} = 5.0$

---

### Exercice 12 - Comprendre et compléter un programme

**Q1 - Tableau de trace.**

```python
x = 2
y = 6
z = x + y + x * y   # = 2 + 6 + 2×6 = 2 + 6 + 12 = 20
z = z ** 2           # = 400
y = z / 2            # = 200.0
```

| N° ligne | Instruction | `x` | `y` | `z` |
|:---:|:---|:---:|:---:|:---:|
| 1 | `x = 2` | **2** | − | − |
| 2 | `y = 6` | 2 | **6** | − |
| 3 | `z = x + y + x * y` | 2 | 6 | **20** |
| 4 | `z = z ** 2` | 2 | 6 | **400** |
| 5 | `y = z / 2` | 2 | **200.0** | 400 |

Ligne 3 : priorité des opérations - la multiplication `x * y` est calculée en premier : `2 + 6 + 12 = 20`.

**Q2.** Vérifier en exécutant le programme (ajouter des `print`).

**Q3. - `z_est_pair`**

```python
z_est_pair = (z % 2 == 0)
```

**Q4.** `400 % 2 = 0`, donc `z_est_pair` vaut `True`. C'est prévisible : tout carré d'un nombre pair est pair.

---

### Exercice 13 - Programme interactif

**Q1.** Le programme s'arrête et affiche le message `Quel est ton prénom ?`. Il attend une saisie clavier de l'utilisateur, puis affiche un message de bienvenue personnalisé.

**Q2.**

```python
n1 = int(input("Premier nombre : "))
n2 = int(input("Deuxième nombre : "))
somme = n1 + n2
print(somme)
```

Sans `int()`, `input()` renvoie une `str` et l'opérateur `+` ferait une **concaténation** au lieu d'une addition (ex : `"3" + "5"` → `"35"` et non `8`).

**Q3 - Défi.**

```python
note1 = float(input("Note 1 : "))
note2 = float(input("Note 2 : "))
note3 = float(input("Note 3 : "))
note4 = float(input("Note 4 : "))
moyenne = (note1 + note2 + note3 + note4) / 4
print(moyenne)
```

---

### Exercice 14 - Prédire et vérifier

**Q1.**

| Variable | Valeur |
|:---:|:---|
| `r1` | `"Bonsoir !"` |
| `r2` | `"BonBon soir"` |
| `r3` | `"soir ! soir !"` |

**Q2.** Vérifier par exécution.

**Q3.** Pour afficher exactement `Bonsoir Bonsoir !` :

```python
print(a + b + " " + a + b + c)
```

---

### Exercice 15 - Ma carte d'identité

**Q1.** Compléter le programme avec ses propres informations et l'exécuter (résultat personnel, pas de correction type).

**Q2.** La méthode `.upper()` convertit tous les caractères d'une chaîne en **majuscules**.

Exemple : si `nom = "Dupont"`, alors `nom.upper()` renvoie `"DUPONT"`.

Ainsi `print(nom.upper() + " " + prenom)` affiche le nom en majuscules suivi du prénom (ex : `DUPONT Alice`).

**Q3 - Défi.**

L'idée : on écrit le prénom **une fois**, puis on répète `n - 1` fois le motif `"-" + prenom`. Ainsi il n'y a jamais de tiret en trop à la fin.

```python
prenom = input("Ton prénom : ")
n = int(input("Nombre de répétitions : "))
resultat = prenom + ("-" + prenom) * (n - 1)
print(resultat)
```

Exemple : si `prenom = "Léa"` et `n = 3`, alors `("-" + "Léa") * 2` vaut `"-Léa-Léa"`, et le programme affiche `Léa-Léa-Léa`.

> ⚠️ **Erreur fréquente** : écrire `resultat = (prenom + "-") * n`. On obtient alors `Léa-Léa-Léa-`, avec un tiret **en trop** à la fin.

> ⚠️ **Autre erreur fréquente** : oublier `int()` autour du deuxième `input()`. Sans lui, `n` est une **chaîne** et `(...) * n` provoque une `TypeError`.

---

### Exercice 16 - Chaînes de caractères et indices

```python
A = 'lu'
B = A + A       # B = 'lulu'
C = B + 'ne'    # C = 'lulune'
D = A + 'miere' # D = 'lumiere'
```

**Q1.**

| Variable | Valeur |
|:---:|:---:|
| `B` | `'lulu'` |
| `C` | `'lulune'` |

**Q2.** `D = 'lumiere'` (7 caractères)

| | `l` | `u` | `m` | `i` | `e` | `r` | `e` |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Indice positif | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| Indice négatif | −7 | −6 | −5 | −4 | −3 | −2 | −1 |

- `len(D)` → **7**
- `D[0]` → **`'l'`**
- `D[2]` → **`'m'`**

**Q3.**

- `D[-1]` → **`'e'`** (dernier caractère)
- `D[-3]` → **`'e'`** (indice 4, le `e` de `lumiere`)

