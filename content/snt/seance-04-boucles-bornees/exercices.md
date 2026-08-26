---
title: "Exercices - Séance 04 Boucles bornées"
---

### Exercice 1 - Population d'un village

Un village compte aujourd'hui **2 300 habitants**. Sa population augmente de **150 habitants par an**.

**Q1.** Exécuter l'algorithme suivant avec n = 3 en donnant la valeur de P à chaque étape de la boucle :

```
P ← 2300
Pour k variant de 0 à n-1 :
    P ← P + 150
Fin Pour
```

**Q2.** Compléter la fonction Python `population(n)` qui renvoie le nombre d'habitants dans n années.

```python
def population(...):
    P = ...
    for k in ... :
        P = ...
    return ...
```

**Q3.** Appeler la fonction pour vérifier la réponse de la question 1.

---

### Exercice 2 - Somme des entiers

On considère l'algorithme suivant :

```
s ← 0
Pour k variant de 1 à n :
    s ← s + k
Fin Pour
```

**Q1.** Exécuter cet algorithme avec n = 5 en donnant la valeur de s à chaque étape.

**Q2.** Programmer cet algorithme dans une fonction Python `som(n)` qui renvoie s.

---

### Exercice 3 - Analyse de programme

On considère le programme suivant :

```python
a = 2
for i in range(4):
    a = a + 1
a = 2 * a
```

**Q1.** Quel est le bloc d'instructions répété dans la boucle `for` ? Combien de fois est-il répété ?

**Q2.** Quelle est la valeur finale de la variable `a` ?

**Q3.** Recopiez ce programme en ajoutant `print(a)` à la fin. Exécutez-le et vérifiez votre réponse.

---

### Exercice 4 - Code puzzle (interactif)

Cet exercice est interactif : ouvrir le notebook et exécuter les cellules de l'exercice 4 pour répondre aux questions.

**Q1.** Question interactive 1 - réaliser dans le notebook.

**Q2.** Question interactive 2 - réaliser dans le notebook.

---

### Exercice 5 - Prédire l'exécution

Voici quatre programmes avec des boucles `for`.

**Q1.** **Sans les exécuter**, prédisez ce que chacun affiche (ou l'erreur produite). Complétez le tableau.

| Programme | Résultat prédit | Résultat réel |
|:---:|:---|:---|
| A | *à compléter* | |
| B | *à compléter* | |
| C | *à compléter* | |
| D | *à compléter* | |

```python
# Programme A
for i in range(3):
    print(i)
print("Fin")
```

```python
# Programme B  (contient une erreur)
for i in range(3):
print(i)
print("Fin")
```

```python
# Programme C
for i in range(3):
    print(i)
    print("---")
print("Fin")
```

```python
# Programme D
for i in range(4):
    print("dans la boucle")
print("hors de la boucle")
```

**Q2.** Exécutez chaque programme dans le notebook et complétez la colonne « Résultat réel ».

---

### Exercice 6 - Réseau social

Un réseau social avait **25 000 utilisateurs en 2021**. Son nombre d'utilisateurs **double chaque année**.

**Q1.** Compléter la fonction `users()` qui renvoie le nombre d'utilisateurs en 2025.

```python
def users():
    u = 25000
    for i in range(...):
        u = ...
    return ...
```

**Q2.** Appeler cette fonction pour connaître le nombre d'utilisateurs en 2025. Vérifier le calcul.

**Q3.** Quelle modification faut-il faire pour connaître le nombre d'utilisateurs en **2030** ?

**Q4. (plus difficile)** Modifier la fonction `users` pour qu'elle prenne un paramètre `annee` et renvoie le nombre d'utilisateurs cette année-là. Par exemple, `users(2030)` doit renvoyer la valeur estimée pour 2030.

---

### Exercice 7 - Le blob

Un blob est un organisme unicellulaire qui **double son nombre de cellules chaque jour** s'il se nourrit correctement.

Compléter la fonction `blob(n, j)` qui renvoie le nombre de cellules du blob au bout de `j` jours, en partant de `n` cellules.

```python
def blob(n, j):
    P = ...
    for i in ...:
        P = ...
    return P
```

---

### Exercice 8 - Épargne de Gaspard

Les parents de Gaspard ont déposé **1 500 €** sur son livret d'épargne à un taux d'intérêt de **2 %** par an (c'est-à-dire que la somme est multipliée par 1.02 chaque année).

**Q1.** Écrire un programme Python pour savoir combien Gaspard aura au bout de **10 ans**.

**Q2.** Modifier le programme pour que l'utilisateur puisse choisir le nombre d'années et la somme initiale.

**Q3.** Modifier le programme pour que l'utilisateur puisse également choisir le taux d'intérêt (en pourcentage).

---

### Exercice 9 - Tortue Python

Le module `turtle` permet de dessiner avec Python. La fonction `carre()` ci-dessous trace un carré en répétant 4 fois les mêmes instructions.

**Q1.** Exécuter le programme ci-dessous dans le notebook et observer le tracé.

```python
from turtle import *

def carre():
    forward(100)
    left(90)
    forward(100)
    left(90)
    forward(100)
    left(90)
    forward(100)
    left(90)

carre()   # appel de la fonction pour tracer le carré

done()    # pour lancer l'animation
```

**Q2.** Réécrire la fonction `carre()` en utilisant une boucle `for`.

**Q3.** Créer une fonction `triangle()` qui trace un triangle équilatéral avec une boucle `for`. (Pour un triangle équilatéral, on tourne de 120° à chaque coin.)

**Q4.** Modifier `carre` et `triangle` pour qu'elles aient un paramètre `cote` (longueur d'un côté). Par exemple, `carre(50)` trace un carré de côté 50.

---

### Exercice 10 - Notes de classe

On dispose des notes d'une classe de 10 élèves :

```python
notes = [14, 7, 18, 5, 12, 9, 16, 3, 11, 8]
```

**Q1.** Exécuter le programme ci-dessous et observer comment la boucle `for` et le `if` coopèrent.

```python
for note in notes:
    if note >= 10:
        print(note, "→ reçu ✓")
    else:
        print(note, "→ recalé ✗")
```

**Q2.** Expliquer pourquoi `print(note, "→ recalé ✗")` s'exécute pour la note 7 mais pas pour la note 14. Quel rôle joue l'indentation dans ce programme ?

**Q3.** Compléter le programme ci-dessous pour qu'il compte et affiche le **nombre d'élèves reçus**.

```python
notes = [14, 7, 18, 5, 12, 9, 16, 3, 11, 8]
compteur = ...

for note in notes:
    if ...:
        compteur = ...

print("Nombre d'élèves reçus :", compteur)
```

**Q4.** Sans l'exécuter, combien d'élèves sont reçus ? Vérifiez ensuite en exécutant.

**Q5 - Bonus.** Modifiez le programme pour qu'il affiche également le nombre d'élèves **recalés**, en utilisant un deuxième compteur dans la même boucle.
