---
title: "Exercices - Séance 06 Bilan : Fonctions et Boucles"
---

## Fonctions

### Exercice 1 - Aire d'un triangle

**Q1.** Compléter la fonction `aire_triangle(base, hauteur)` qui renvoie l'aire d'un triangle.

```python
def aire_triangle(base, hauteur):
    ...
```

**Q2.** Tester la fonction pour obtenir l'aire d'un triangle de base 6 et de hauteur 4 (résultat attendu : `12.0`).

---

### Exercice 2 - Vitesse moyenne

**Q1.** Écrire une fonction `vitesse_moyenne(distance, duree)` qui renvoie la vitesse moyenne en km/h.

**Q2.** Un cycliste parcourt 45 km en 1.5 heure. Utiliser la fonction pour calculer sa vitesse moyenne (résultat attendu : `30.0` km/h).

---

### Exercice 3 - Fonction mystère

On vous donne la fonction suivante :

```python
def mystere(a, b):
    total = 0
    for i in range(b):
        total = total + a
    return total
```

**Q1.** Identifier les paramètres, le corps et ce que fait la boucle.

**Q2.** Que renvoie `mystere(7, 12)` ? Et `mystere(20, 5)` ? Déterminer les réponses mentalement.

**Q3.** Décrire en une phrase ce que fait cette fonction.

**Q4.** Recopier la fonction et vérifier les réponses à la question 2.

---

## Boucles `for`

### Exercice 4 - Comprendre `range()`

Indiquer dans chaque cas la liste d'entiers générée :

1. `range(6)`
2. `range(3, 8)`
3. `range(0, 20, 5)`
4. `range(10, 0, -2)`

Vérifier en utilisant `list(range(...))`.

---

### Exercice 5 - Table de multiplication

**Q1.** Compléter le programme suivant pour afficher les entiers de 1 à 10 :

```python
for i in range(...):
    print(...)
```

**Q2.** Écrire une fonction `table_multiplication(n)` qui affiche la table de multiplication par `n` (de n×1 à n×10).

---

### Exercice 6 - Lecture de programme

On considère le programme suivant :

```python
p = 1
for i in range(1, 6):
    p = p * i
print(p)
```

**Q1.** Compléter le tableau de trace sans exécuter le programme :

| Tour | `i` | Calcul | `p` |
|:---:|:---:|:---:|:---:|
| Tour 1 | 1 | 1 × 1 | 1 |
| Tour 2 | 2 | 1 × 2 | ... |
| Tour 3 | ... | ... | ... |
| Tour 4 | ... | ... | ... |
| Tour 5 | ... | ... | ... |

**Q2.** Vérifier en exécutant le programme.

**Q3.** Que calcule ce programme ? Décrire en une phrase.

---

### Exercice 7 - Croissance d'un arbre 🌳

Un arbre mesure **2.0 m** à la naissance. Il grandit de **0.3 m par an**.

**Q1.** Compléter la fonction `taille_arbre(n)` qui renvoie la taille de l'arbre (en mètres) après `n` années.

```python
def taille_arbre(n):
    ...
```

**Q2.** Tester pour n = 5 (résultat attendu : `3.5`) et n = 10 (résultat attendu : `5.0`).

*Astuce : si Python affiche `3.499999999999999` au lieu de `3.5`, ce n'est pas une erreur de votre part. Ajoutez `round(taille, 1)` avant de renvoyer le résultat, et lisez l'explication dans la correction.*

---

## Boucles `while`

### Exercice 8 - Lecture de programme

On considère le programme suivant :

```python
n = 100
while n > 1:
    n = n // 2
    print(n)
```

**Q1.** Quelle est la condition de la boucle ? Quel est le bloc d'instructions répété ?

**Q2.** Exécuter mentalement le programme : quelles valeurs successives `print(n)` affiche-t-il ?

**Q3.** Vérifier en exécutant.

---

### Exercice 9 - Batterie de téléphone 🔋

La batterie d'un téléphone est chargée à **100 %**. Chaque heure d'utilisation, elle perd **8 %** de sa charge actuelle (c'est-à-dire que la charge est multipliée par 0.92 à chaque heure). On s'arrête quand la charge passe sous **20 %**.

**Q1.** Compléter le programme suivant :

```python
batterie = 100
heures = 0

while ...:
    batterie = ...
    heures = ...

print("Nombre d'heures :", heures)
print("Batterie restante :", round(batterie, 1), "%")
```

**Q2.** Transformer ce programme en une fonction `autonomie(charge_initiale, perte)` qui renvoie le nombre d'heures avant de passer sous 20 %. Par exemple, `autonomie(100, 0.08)` doit donner le même résultat que la question 1.

---

### Exercice 10 - Seuil de followers 📱

Un influenceur commence avec **200 abonnés**. Son nombre d'abonnés augmente de **15 %** par semaine. Il souhaite savoir en combien de semaines il atteindra **2 000 abonnés**.

**Q1.** Écrire un programme Python avec une boucle `while` qui affiche semaine par semaine le nombre d'abonnés et s'arrête dès que l'objectif est atteint.

**Q2.** Écrire une fonction `semaines_pour_objectif(followers_initial, taux, objectif)` qui renvoie le nombre de semaines nécessaires.

---

## Fonctions, boucles et conditions combinées

### Exercice 11 - Compter les multiples

**Q1.** Écrire une fonction `nb_multiples(n, limite)` qui renvoie le nombre de multiples de `n` inférieurs ou égaux à `limite`.

```python
def nb_multiples(n, limite):
    ...
```

**Q2.** Tester la fonction :
- `nb_multiples(3, 15)` → 5
- `nb_multiples(5, 30)` → 6
- `nb_multiples(7, 50)` → 7

---

### Exercice 12 - Le bon choix : `for` ou `while` ?

Pour chaque question, indiquer si on utilise `for` ou `while`, puis écrire le programme.

**Q1.** Calculer la somme des entiers de 1 à 100.

**Q2.** Trouver le plus petit entier `n` tel que n² > 500.

**Q3.** Afficher tous les nombres pairs de 2 à 50.

---

### Exercice 13 - Épargne avec versements 💰

Léo ouvre un livret d'épargne. Il dépose **100 €** au début de chaque mois. À la fin de chaque mois, les intérêts s'appliquent à un taux de **0.5 % mensuel** sur le solde total.

**Q1.** Écrire une fonction `epargne_leo(n)` qui renvoie le solde du compte de Léo après `n` mois.

```python
def epargne_leo(n):
    ...
```

**Q2.** Combien Léo aura-t-il au bout de **12 mois** ? Au bout de **24 mois** ?

**Q3.** Écrire une fonction `mois_objectif(objectif)` qui renvoie le nombre de mois nécessaires pour que le compte de Léo dépasse l'`objectif` donné. Utiliser une boucle `while`.

---

### Exercice 14 - (Bonus) Nombre premier

Un entier ≥ 2 est **premier** s'il n'est divisible que par 1 et par lui-même (ex : 7 est premier, 12 ne l'est pas car 12 = 3 × 4).

**Q1.** Écrire une fonction `est_premier(n)` qui renvoie `True` si `n` est premier, `False` sinon.

> Indication : tester tous les diviseurs possibles de 2 à n-1 avec une boucle `for`. Si `n % k == 0` pour un certain `k`, alors `n` n'est pas premier.

```python
def est_premier(n):
    ...
```

**Q2.** Tester : `est_premier(7)` → `True`, `est_premier(12)` → `False`, `est_premier(29)` → `True`, `est_premier(1)` → `False`.

**Q3.** Écrire un programme qui affiche tous les nombres premiers inférieurs à 100.
