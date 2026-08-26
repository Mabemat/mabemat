---
title: "Exercices - Séance 03 Conditionnelles"
---

### Exercice 1 - Qui a gagné ?

On considère la fonction suivante :

```python
def gagnant(scoreA, scoreB):
    if scoreA > scoreB:
        v = "équipe A"
    elif scoreA < scoreB:
        v = "équipe B"
    else:
        v = "Match nul"
    return v
```

**Q1.** Inspectez ce code et repérez :

- son nom
- son nombre de paramètres et leurs noms
- le nombre de valeurs renvoyées

**Q2.** Écrivez cette fonction dans la cellule ci-dessous (*sans copier-coller !*) et exécutez-la.

**Q3.** Faites l'appel `gagnant(4, 1)` et vérifiez que la valeur renvoyée est cohérente.

**Q4.** L'équipe A a marqué 2 buts et l'équipe B en a marqué 3. Quel appel faut-il faire ? Faites-le.

**Q5.** Proposez un appel qui renvoie `"Match nul"` et testez-le.

---

### Exercice 2 - Vérifier sa compréhension

Exercice CodePuzzle interactif à réaliser dans le notebook. Les questions vérifient automatiquement votre compréhension des instructions conditionnelles.

**Q1.** Question interactive 1 - réaliser dans le notebook.

**Q2.** Question interactive 2 - réaliser dans le notebook.

**Q3.** Question interactive 3 - réaliser dans le notebook.

**Q4.** Question interactive 4 - réaliser dans le notebook.

---

### Exercice 3 - Jeu d'indentation

Voici quatre programmes. Avant de les exécuter, prédisez ce que chacun affiche (ou si une erreur se produit).

**Q1.** Complétez la colonne « Résultat prédit » *sans exécuter les programmes*.

| Programme | Résultat prédit | Résultat réel |
|:---:|:---|:---|
| A | *à compléter* | |
| B | *à compléter* | |
| C | *à compléter* | |
| D | *à compléter* | |

**Q2.** Exécutez chaque programme dans le notebook et complétez la colonne « Résultat réel ».

---

### Exercice 4 - Inscription sur un réseau social

Pour s'inscrire sur certains réseaux sociaux, il faut avoir au moins **13 ans**.

**Q1.** Exercice CodePuzzle interactif dans le notebook : identifier le code correct de la fonction `age_requis` parmi les propositions.

**Q2.** Copiez le code correct de la fonction `age_requis(age)` dans la cellule et exécutez-la.

**Q3.** Testez la fonction avec un appel renvoyant `True` et un appel renvoyant `False`.

---

### Exercice 5 - Application de fitness

*(D'après une activité de Franck Chevrier, [python-lycee.com](https://www.python-lycee.com/parcours-apprentissage-pl3).)*

Les applications de fitness calculent l'Indice de Masse Corporelle (IMC) de l'utilisateur, donné par la formule $\text{IMC} = \dfrac{\text{masse}}{\text{taille}^2}$, où la masse est en kg et la taille en mètres.

La fonction `imc` est déjà écrite dans le notebook :

```python
def imc(masse, taille):
    indice = masse / (taille ** 2)
    return indice
```

**Q1.** Testez la fonction `imc` pour les 3 personnages du notebook (Alice, Barnabé et Corentin) : il faut faire les bons appels.

**Q2.** On considère que l'IMC est **dans la norme** s'il est compris entre 18.5 et 25. Écrire une fonction `diagnostic(masse, taille)` qui renvoie un message indiquant si l'individu a un IMC dans la norme ou non. *(Dans le notebook, l'exercice CodePuzzle vous fait remettre les lignes dans le bon ordre.)*

**Q3.** Recopiez la fonction `diagnostic` dans la cellule et testez-la pour les 3 personnages.

**Q4.** Adaptez la fonction `diagnostic` pour obtenir une analyse plus précise, selon la grille suivante :

| IMC | Diagnostic |
|:---|:---|
| IMC < 18.5 | `"Insuffisance pondérale"` |
| 18.5 ≤ IMC ≤ 25 | `"Corpulence normale"` |
| 25 < IMC ≤ 30 | `"Surpoids"` |
| IMC > 30 | `"Obésité"` |

**Q5.** Testez la nouvelle fonction `diagnostic` pour les 3 personnages précédents.

---

### Exercice 6 - Prix au cinéma

Dans un cinéma, la place adulte coûte **11 €** et la place enfant (moins de 18 ans) coûte **7 €**.

Écrire une fonction `place(age)` qui renvoie le tarif correspondant.

Tester avec `place(10)`, `place(17)`, `place(18)`, `place(30)`.

---

### Exercice 7 - Location de voiture

Un service de location propose une voiture à **52,16 € la journée**. La personne peut parcourir **250 km sans surcoût**. Au-delà, elle paie **0,31 € par km supplémentaire**.

**Q1.** Combien paie une personne ayant parcouru 125 km en 1 jour ?

**Q2.** Combien paie une personne ayant parcouru 300 km en 1 jour ?

**Q3.** Écrire une fonction `tarif(j, d)` où `j` est le nombre de jours et `d` la distance parcourue en km, qui renvoie le tarif total à payer.

---

### Exercice 8 - Mention au bac

Écrire une fonction `mention_bac(moy)` qui prend en paramètre la moyenne `moy` d'un élève au baccalauréat et renvoie la mention correspondante :

| Moyenne | Mention |
|:---:|:---|
| $[0 ; 8[$ | `"Recalé"` |
| $[8 ; 10[$ | `"Rattrapage"` |
| $[10 ; 12[$ | `"Sans mention"` |
| $[12 ; 14[$ | `"Assez bien"` |
| $[14 ; 16[$ | `"Bien"` |
| $[16 ; 18[$ | `"Très bien"` |
| $[18 ; 20]$ | `"Félicitations"` |

Exemples : `mention_bac(13.4)` renvoie `'Assez bien'` et `mention_bac(8)` renvoie `'Rattrapage'`.

Testez la fonction dans tous les cas de figure.

---

### Exercice 9 - Combiner des conditions

Un semestre est validé si les **trois notes** sont toutes ≥ 10.

**Q1.** Exercice CodePuzzle interactif dans le notebook : remettre les lignes de la fonction `semestre_valide` dans le bon ordre.

**Q2.** Copiez la fonction `semestre_valide(noteA, noteB, noteC)` dans la cellule et testez-la :
- `semestre_valide(11, 12, 10)` → `True`
- `semestre_valide(11, 8, 10)` → `False`
- `semestre_valide(9, 12, 11)` → `False`

---

### Exercice 10 - Fonctions avec conditions

**Q1.** Écrire une fonction `est_pair(n)` qui renvoie `True` si `n` est pair, `False` sinon.

*Rappel : `n % 2` donne le reste de la division euclidienne de `n` par 2. Un entier est pair si `n % 2 == 0`.*

*Vérifications :* `est_pair(4)` → `True`, `est_pair(7)` → `False`, `est_pair(0)` → `True`.

**Q2.** Écrire une fonction `bilan_score(score)` qui renvoie :
- `"Félicitations !"` si le score est supérieur ou égal à 10
- `"Continue comme ça !"` sinon

*Vérifications :* `bilan_score(12)` → `"Félicitations !"`, `bilan_score(7)` → `"Continue comme ça !"`

---

### Exercice 11 - Synthèse : la piscine municipale

La piscine municipale applique les tarifs d'entrée suivants :

| Catégorie | Condition | Tarif |
|:---|:---|:---:|
| Enfant | moins de 12 ans | 3,00 € |
| Jeune | 12 à 25 ans | 4,00 € |
| Adulte | 26 à 64 ans | 6,00 € |
| Senior | 65 ans et plus | 4,50 € |

L'objectif est de construire **plusieurs fonctions qui travaillent ensemble**.

**Q1.** Écrire une fonction `tarif_entree(age)` qui renvoie le prix d'entrée en fonction de l'âge, en utilisant `if`/`elif`/`else`.

*Vérifications :* `tarif_entree(8)` → `3.0`, `tarif_entree(17)` → `4.0`, `tarif_entree(40)` → `6.0`, `tarif_entree(70)` → `4.5`.

**Q2.** Une famille arrive à la piscine : deux adultes (35 et 38 ans), deux enfants (7 et 10 ans) et un grand-parent (68 ans).

Appelez `tarif_entree` pour chaque personne, puis calculez et affichez le montant total à payer.

**Q3 - Défi.** Écrire une fonction `ticket(nom, age)` qui renvoie une chaîne de caractères représentant un ticket d'entrée, **en appelant** `tarif_entree`.

*Exemple :* `ticket("Léa", 17)` → `"Ticket de Léa (17 ans) : 4.0 €"`

Appelez-la pour chaque membre de la famille.

---

### Exercice 12 - Bulletin scolaire

**Q1.** Écrire une fonction `moyenne(n1, n2, n3, n4)` qui renvoie la moyenne de quatre notes.

**Q2.** Écrire une fonction `mention(moy)` qui renvoie :
- `"Très bien"` si moy ≥ 16
- `"Bien"` si moy ≥ 14
- `"Assez bien"` si moy ≥ 12
- `"Passable"` si moy ≥ 10
- `"Insuffisant"` sinon

**Q3.** Écrire une fonction `bulletin(prenom, n1, n2, n3, n4)` qui :

1. calcule la moyenne **en appelant `moyenne()`**
2. détermine la mention **en appelant `mention()`**
3. renvoie une chaîne de caractères du type `"Bilan de Alice - Moyenne : 13.0/20 - Mention : Assez bien"`

Tester avec `bulletin("Alice", 14, 12, 16, 10)`.

**Q4.** Testez `bulletin` pour trois élèves : l'un doit obtenir "Très bien", l'autre "Passable", le troisième "Bien".
