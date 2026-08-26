---
title: "Exercices - Séance 05 Boucles non bornées"
---

### Échauffement - Tableau de suivi

On considère le programme suivant, qui affiche les puissances de 2 inférieures à 100 :

```python
p = 1
while p < 100:
    print(p)
    p = p * 2
```

Compléter le tableau de suivi d'exécution *sans exécuter le programme* :

| Tour | Valeur de `p` avant le test | Condition `p < 100` | `p` est affiché ? | Nouvelle valeur de `p` |
|:---:|:---:|:---:|:---:|:---:|
| Départ | 1 | ✅ Vraie | Oui | 2 |
| Tour 1 | ... | ... | ... | ... |
| Tour 2 | ... | ... | ... | ... |
| Tour 3 | ... | ... | ... | ... |
| Tour 4 | ... | ... | ... | ... |
| Tour 5 | ... | ... | ... | ... |
| Tour 6 | ... | ... | ... | ... |
| Tour 7 | ... | ❌ Fausse | Non - arrêt | - |

---

### Exercice 1 - Lecture d'un programme

On considère le programme Python suivant :

```python
n = 1
while n < 50:
    n = n + n
print(n)
```

**Q1.** Identifiez la condition de la boucle `while` et le bloc d'instructions répété.

**Q2.** Indiquez les valeurs successives prises par `n` à chaque tour de boucle.

**Q3.** Recopiez ce programme et exécutez-le pour vérifier vos réponses.

**Q4.** Voici une variante :

```python
n = 1
while n < 50:
    n = n + n
    print(n)    # print est maintenant DANS la boucle
```

*Étape A.* Avant de l'exécuter : quelle différence avec le programme initial ? Que va afficher ce programme, selon vous ?

*Étape B.* Recopiez ce programme et exécutez-le pour confirmer votre prédiction.

**For ou while ?** Aurait-on pu utiliser une boucle `for` pour ce programme ? Justifiez en une phrase.

---

### Exercice 2 - Compte à rebours

On souhaite afficher un compte à rebours de **10 jusqu'à 0** (inclus), puis afficher le message `"Décollage !"`.

**Q1.** Compléter l'algorithme suivant :

```
n ← ...
Tant que n ... :
    Afficher n
    n ← ...
Fin Tant que
Afficher "Décollage !"
```

**Q2.** Programmer cet algorithme en Python avec une boucle `while`.

**For ou while ?** Ici, on connaissait à l'avance le nombre de répétitions (10 → 0). Aurait-on pu utiliser `for i in range(...)` ? Essayez de l'écrire.

---

### Exercice 3 - Déboguer une boucle

Voici trois programmes qui contiennent chacun **une erreur** liée à la boucle `while`. Pour chacun : identifier le problème, expliquer ce qui se passerait à l'exécution, et proposer une correction.

**Programme A**
```python
n = 10
while n > 0:
    print(n)
```

**Programme B**
```python
capital = 1000
while capital >= 1000:
    capital = capital * 1.05
print(capital)
```
*(Objectif supposé : faire grossir le capital jusqu'à dépasser 2 000 €.)*

**Programme C**
```python
compteur = 0
while compteur < 5:
    print("Bonjour")
compteur = compteur + 1
```

---

### Exercice 4 - Batterie de téléphone

La batterie du téléphone de Chloé est chargée à **95 %**. Chaque heure d'utilisation, elle perd **8 points de pourcentage**. Le téléphone affiche une alerte « batterie faible » quand la charge passe **sous 20 %**.

**Q1.** Sans écrire de code, estimer combien d'heures Chloé peut utiliser son téléphone avant l'alerte.

**Q2.** Écrire un programme Python avec une boucle `while` qui affiche le niveau de batterie heure par heure et s'arrête dès qu'il passe sous 20 %. Afficher le nombre d'heures à la fin.

**Q3.** Encapsuler ce programme dans une fonction `heures_batterie(charge_initiale, consommation_horaire, seuil_alerte)` qui **renvoie** le nombre d'heures avant l'alerte.

```python
def heures_batterie(charge_initiale, consommation_horaire, seuil_alerte):
    charge = ...
    heures = ...
    while charge >= seuil_alerte:
        charge = ...
        heures = ...
    return ...
```

**Q4.** Si Chloé économise et ne perd que **5 % par heure**, combien d'heures peut-elle attendre avant de charger (seuil à 20 %) ?

**For ou while ?** Pourquoi a-t-on utilisé `while` ici et pas `for` ?

---

### Exercice 5 - Capital et intérêts

Les parents de Léa ont placé **2 000 €** sur un livret d'épargne avec un taux d'intérêt annuel de **2,5 %**.

**Q1.** Calculer mentalement le capital après 1 an, puis après 2 ans.

**Q2.** Écrire un programme Python utilisant une boucle `while` pour déterminer au bout de combien d'années le capital dépassera **3 000 €**. Afficher le nombre d'années et le capital atteint.

**Q3.** Encapsuler dans une fonction `annee(capital_initial, taux, objectif)` qui renvoie le nombre d'années nécessaires. La tester avec les valeurs de l'énoncé.

```python
def annee(capital_initial, taux, objectif):
    capital = ...
    annees = ...
    while ...:
        capital = ...
        annees = ...
    return ...
```

**Q4.** Appeler cette fonction avec les bonnes valeurs pour déterminer au bout de combien d'années le capital dépassera **5 000 €**.

---

### Exercice 6 - Influence sur les réseaux

Lucas crée un compte sur un réseau social avec **150 abonnés**. Grâce à ses vidéos, son nombre d'abonnés **augmente de 12 % chaque semaine**.

**Q1.** Calculer à la main le nombre d'abonnés après 1 semaine puis après 2 semaines.

**Q2.** Écrire un programme Python avec une boucle `while` qui affiche semaine par semaine le nombre d'abonnés de Lucas, jusqu'à ce qu'il atteigne **1 000 abonnés**. Afficher aussi le nombre de semaines nécessaires.

**Q3.** Encapsuler dans une fonction `semaines_pour_atteindre(abonnes_depart, taux_hebdo, objectif)` qui renvoie le nombre de semaines nécessaires.

```python
def semaines_pour_atteindre(abonnes_depart, taux_hebdo, objectif):
    abonnes = ...
    semaines = ...
    while abonnes < objectif:
        abonnes = ...
        semaines = ...
    return ...
```

**Q4.** Avec un taux fixé à 12 %, à partir de combien d'abonnés au départ Lucas atteindrait-il **1 000 abonnés en moins de 10 semaines** ? Utiliser la fonction avec différentes valeurs de départ.

**Q5.** Un autre créateur part de **500 abonnés** mais ne progresse que de **5 % par semaine**. Qui de Lucas (150 abonnés, +12 %/semaine) ou de ce créateur atteint 1 000 abonnés en premier ? Vérifier avec la fonction.

---

### Exercice 7 - Population d'une ville

Une ville compte **80 000 habitants** en 2024. Sa population **diminue de 1,5 % par an**.

**Q1.** Écrire un programme Python utilisant une boucle `while` pour déterminer en quelle année la population sera **inférieure à 70 000 habitants**.

**Q2.** Généraliser en écrivant une fonction `annee_seuil(pop_initiale, taux_variation, seuil, annee_debut)` qui renvoie l'année à partir de laquelle la population passe en dessous du seuil.

*Remarque : `taux_variation` sera négatif pour une baisse (par exemple `-0.015` pour −1,5 %).*

```python
def annee_seuil(pop_initiale, taux_variation, seuil, annee_debut):
    pop = ...
    annee = ...
    while pop >= seuil:
        pop = pop * ...
        annee = ...
    return annee
```

**Q3.** Faire le bon appel pour déterminer en quelle année la population sera **inférieure à 50 000 habitants**.

---

### Exercice 8 - Suite de Syracuse

La **suite de Syracuse** est définie ainsi : on part d'un entier `n` strictement positif, puis :

- si `n` est **pair** : `n = n // 2`
- si `n` est **impair** : `n = 3 * n + 1`

On répète jusqu'à obtenir `n = 1`. La conjecture de Syracuse (non démontrée à ce jour !) dit qu'on finit toujours par atteindre 1.

**Q1.** Appliquer cette suite à la main en partant de `n = 6`. Donner toutes les valeurs et le nombre d'étapes.

**Q2.** Compléter la fonction `syracuse(n)` qui affiche toutes les valeurs de la suite jusqu'à 1 et renvoie le nombre d'étapes. Tester avec `n = 6`.

```python
def syracuse(n):
    etapes = 0
    while n != 1:
        if n % 2 == 0:   # n est pair
            n = ...
        else:            # n est impair
            n = ...
        print(n)
        etapes = ...
    return etapes
```

**Q3.** Tester avec `n = 27`. Combien d'étapes faut-il ?
