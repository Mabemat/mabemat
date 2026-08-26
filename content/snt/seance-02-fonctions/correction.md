---
title: "Correction"
---

### Exercice 1 - Révisions

**Q1.** 3 variables : `prix_unitaire`, `quantite`, `prix_total`.

| N° ligne | Instruction | `prix_unitaire` | `quantite` | `prix_total` |
|:---:|:---|:---:|:---:|:---:|
| 1 | `prix_unitaire = 1.5` | **1.5** | − | − |
| 2 | `quantite = 4` | 1.5 | **4** | − |
| 3 | `prix_total = prix_unitaire * quantite` | 1.5 | 4 | **6.0** |

**Q2.** `prix_total` vaut **6.0** (1.5 × 4).

---

### Exercice 2 - Analyse d'une fonction

**Q1** : Nom → `prix_a_afficher` · Arguments → `prix_unitaire` et `quantite`.

**Q2** : La première ligne se termine par `:` (deux-points). Ce caractère annonce le début du bloc d'instructions - Python le réclame obligatoirement.

**Q3** : Les deux lignes du bloc commencent par 4 espaces : c'est l'**indentation**. Elle est obligatoire pour que Python sache quelles instructions appartiennent à la fonction.

**Q4** : La fonction renvoie **1 valeur** : `prix_total`.

**Q5** : `prix_a_afficher(3, 2)`

| Paramètre | `prix_unitaire` | `quantite` | `prix_total` |
|:---:|:---:|:---:|:---:|
| Valeurs | 3 | 2 | 3 × 2 = **6** |

Ici `3` et `2` sont deux entiers (`int`) et la multiplication de deux entiers donne un entier : Python renvoie `6`, et non `6.0`. (On obtiendrait `6.0` avec `prix_a_afficher(3.0, 2)`.)

**Q6** : `prix_a_afficher(1.15, 3)`

| Paramètre | `prix_unitaire` | `quantite` | `prix_total` |
|:---:|:---:|:---:|:---:|
| Valeurs | 1.15 | 3 | 1,15 × 3 = **3,45 €** |

> ⚠️ **Attention à ce que Python affiche vraiment** : la valeur renvoyée est `3.4499999999999997` et non `3.45` ! Ce n'est pas une erreur de votre part : l'ordinateur stocke les nombres décimaux de façon approchée (comme 1/3 = 0,333... qu'on ne peut pas écrire exactement). Pour un prix, on affichera donc `round(prix_a_afficher(1.15, 3), 2)`, ce qui donne bien `3.45`.

---

### Exercice 3 - Fonction `truc_muche`

**Q1** : a. `truc_muche` · b. `a`, `b`, `c` · c. 2 lignes · d. 1 valeur · e. `truc_muche(2, 5, 1)` = 2 + 5 + 1 = **8**

**Q2.** Recopier la fonction dans la cellule et exécuter.

**Q3** :

| Paramètre | `a` | `b` | `c` | `s` |
|:---:|:---:|:---:|:---:|:---:|
| Valeurs | 2 | 5 | 1 | 2 + 5 + 1 = **8** |

**Q4** : `truc_muche(1, 2, 4)` → 1 + 2 + 4 = **7**

---

### Exercice 4 - Définition d'une image

**Q1** : 960 × 720 = **691 200 pixels**

**Q2** : Fonction complétée :

```python
def definition_image(L, H):
    d = L * H
    return d
```

**Q3** : `definition_image(800, 600)` → **480 000**

**Q4** : `definition_image(960, 720)` → **691 200** - cohérent avec la question 1.

---

### Exercice 5 - Tableau de prédiction

**Q1 - Tableau de prédiction.**

| Appel | Valeur |
|:---|:---:|
| `triple(4)` | **12** |
| `triple(triple(2))` | `triple(6)` = **18** |
| `score_bonus(2, 3)` | 2×3 + 3 = **9** |
| `score_bonus(0, 5)` | 0 + 5 = **5** |
| `score_bonus(1, 0) + score_bonus(0, 2)` | 3 + 2 = **5** |
| `convertir(10)` | **6.21** |
| `convertir(0)` | **0.0** |

**Q2.** Recopier les trois fonctions, exécuter, puis compléter la colonne « Valeur réelle » du tableau.

**Q3** : `convertir` convertit des **kilomètres en miles** (1 km ≈ 0,621 mile).

**Q4** : `score_bonus(3, 5)` = 3×3 + 5 = **14**

---

### Exercice 6 - `print` ou `return` ?

**Q1 - Prédictions** :
- `duree_trajet_A(300, 100)` : la fonction **affiche** `3.0` elle-même, à cause du `print(duree)` qu'elle contient.
- `duree_trajet_B(300, 100)` : la fonction n'affiche rien, elle **renvoie** la valeur `3.0` au programme qui l'a appelée.

**Q2.** Vérifier par exécution.

> ⚠️ **Piège du notebook** : dans une cellule Jupyter (Capytale), si la **dernière ligne** de la cellule est un appel de fonction, le notebook affiche automatiquement la valeur renvoyée. Vous verrez donc `3.0` **dans les deux cas**, et vous pourriez croire que `print` et `return` font la même chose.
>
> Ce n'est pas le cas ! Pour voir la différence, il faut mettre le résultat dans une variable, comme à la question 3 : c'est le seul test qui distingue vraiment les deux.
>
> Autre différence visible : dans un vrai programme Python (hors notebook), `duree_trajet_B(300, 100)` seul n'affiche **rien du tout**.

**Q3 - Stocker le résultat** :

```python
resultat_A = duree_trajet_A(300, 100)  # affiche 3.0, puis stocke None
resultat_B = duree_trajet_B(300, 100)  # n'affiche rien, stocke 3.0
print(resultat_A)  # affiche : None
print(resultat_B)  # affiche : 3.0
```

`resultat_A` vaut `None` car `duree_trajet_A` ne contient **pas** de `return` : une fonction sans `return` renvoie toujours `None` (« rien »).

**Q4** : `print()` affiche une valeur à l'écran mais **ne la transmet pas** au reste du programme. `return` **renvoie** la valeur pour qu'elle puisse être stockée ou réutilisée.

Pour retenir la différence :

| | `print(x)` | `return x` |
|---|---|---|
| Ce que ça fait | écrit `x` à l'écran, pour l'humain | donne `x` au programme qui a appelé la fonction |
| Peut-on stocker le résultat ? | non (on récupère `None`) | oui : `r = ma_fonction(...)` |
| Peut-on réutiliser dans un calcul ? | non | oui : `2 * ma_fonction(...)` |
| La fonction continue-t-elle après ? | oui | non, `return` **arrête** la fonction |

**Règle pour la suite du cours** : dans une fonction, on écrit `return`. On garde `print` pour le programme principal, quand on veut montrer un résultat à l'utilisateur.

---

### Exercice 7 - Débogage

**Q1.** Fonction 1 - `celsius_vers_fahrenheit` : 2 erreurs.

| Erreur | Ligne | Description |
|:---:|:---:|:---|
| 1 | 1 | Manque `:` à la fin de `def celsius_vers_fahrenheit(c)` |
| 2 | 3 | `Return` avec majuscule → doit être `return` (minuscule) |

**Q2.** Fonction corrigée :

```python
def celsius_vers_fahrenheit(c):
    f = c * 9/5 + 32
    return f
```

Vérifications : `celsius_vers_fahrenheit(0)` → **32.0** · `celsius_vers_fahrenheit(100)` → **212.0**

---

**Q3.** Fonction 2 - `imc` : 3 erreurs.

| Erreur | Ligne | Description |
|:---:|:---:|:---|
| 1 | 2 | `resultat = ...` non indenté (doit être dans le bloc de la fonction) |
| 2 | 3 | `return` non indenté (doit être dans le bloc de la fonction) |
| 3 | 3 | `return` sans valeur → doit être `return resultat` |

**Q4.** Fonction corrigée :

```python
def imc(poids, taille):
    resultat = poids / (taille**2)
    return resultat
```

Vérification : `imc(70, 1.75)` = 70 ÷ 1.75² = 70 ÷ 3.0625 ≈ **22.86**

---

### Exercice 8 - Écrire des fonctions

**Q1.**
```python
def aire_triangle(base, hauteur):
    return base * hauteur / 2
```
`aire_triangle(6, 4)` = 6 × 4 ÷ 2 = **12.0** ✓

**Q2.**
```python
def convertir_km_miles(km):
    return km * 0.621
```
`convertir_km_miles(10)` = **6.21** ✓

**Q3.**
```python
def prix_reduit(prix, remise):
    return prix * (1 - remise / 100)
```
`prix_reduit(80, 25)` = 80 × 0.75 = **60.0** ✓

**Q4.**
```python
def pourboire(addition, pourcentage):
    return addition * pourcentage / 100
```
`pourboire(35, 15)` = 35 × 15 ÷ 100 = **5.25** ✓

**Q5.**
```python
def score_basket(un_pt, deux_pts, trois_pts):
    return un_pt + deux_pts * 2 + trois_pts * 3
```
`score_basket(2, 5, 3)` = 2 + 10 + 9 = **21** ✓

---

### Exercice 9 - Fonctions imbriquées : carrelage

**Q1.**
```python
def aire_piece(longueur, largeur):
    return longueur * largeur
```

**Q2.**
```python
def nb_carreaux(longueur, largeur, cote):
    return aire_piece(longueur, largeur) / (cote * cote)
```

**Q3.**
```python
def cout_chantier(longueur, largeur, cote, prix_carreau):
    return nb_carreaux(longueur, largeur, cote) * prix_carreau
```

**Q4** : Pièce 5 m × 4 m, carreaux 0,25 m, 2 €/carreau

| Calcul | Valeur |
|:---|:---:|
| Aire pièce | 5 × 4 = 20 m² |
| Aire d'un carreau | 0,25 × 0,25 = 0,0625 m² |
| Nombre de carreaux | 20 ÷ 0,0625 = **320** |
| Coût total | 320 × 2 = **640 €** |

`cout_chantier(5, 4, 0.25, 2)` → **640.0**

---

### Exercice 10 - Cantine scolaire

**Q1.**
```python
def prix_repas(nb_adultes, nb_eleves):
    return 7.5 * nb_adultes + 3.2 * nb_eleves
```
`prix_repas(2, 15)` = 7,5×2 + 3,2×15 = 15 + 48 = **63.0** ✓

**Q2.**
```python
def prix_semaine(nb_adultes, nb_eleves):
    return 5 * prix_repas(nb_adultes, nb_eleves)
```
`prix_semaine(2, 15)` = 5 × 63 = **315.0** ✓

**Q3.**
```python
def devis(nom_groupe, nb_adultes, nb_eleves):
    total = prix_semaine(nb_adultes, nb_eleves)
    return "Devis pour " + nom_groupe + " : " + str(total) + " euros pour la semaine"
```

**Q4** : `prix_semaine(3, 28)` = 5 × (7,5×3 + 3,2×28) = 5 × (22,5 + 89,6) = 5 × 112,1 = **560.5 €**

`devis("3e A", 3, 28)` → `"Devis pour 3e A : 560.5 euros pour la semaine"`

