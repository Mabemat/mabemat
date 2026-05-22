---
title: "Exercices"
---

### Exercice 1 — Révisions

On considère le programme suivant :

```python
prix_unitaire = 1.5
quantite = 4
prix_total = prix_unitaire * quantite
```

**Q1.** Combien de variables sont utilisées ? Comment s'appellent-elles ?

**Q2.** Complétez ce tableau *sans exécuter le programme*.

| N° ligne | Instruction | `prix_unitaire` | `quantite` | `prix_total` |
|:---:|:---|:---:|:---:|:---:|
| 1 | `prix_unitaire = 1.5` | **1.5** | − | − |
| 2 | `quantite = 4` | 1.5 | *?* | − |
| 3 | `prix_total = prix_unitaire * quantite` | 1.5 | 4 | *?* |

---

### Exercice 2 — Analyse d'une fonction

On considère la fonction suivante :

```python
def prix_a_afficher(prix_unitaire, quantite):
    prix_total = prix_unitaire * quantite
    return prix_total
```

**Q1.** Indiquez le **nom** de la fonction et ses **arguments**.

**Q2.** Par quel caractère se termine la première ligne ? Pourquoi est-il indispensable ?

**Q3.** Que constatez-vous au début des deux lignes du bloc d'instructions ?

**Q4.** Combien de valeurs sont renvoyées par cette fonction ?

**Q5.** Appelez la fonction pour connaître le prix total d'un article valant **3 €** acheté en **2 exemplaires**.

**Q6.** Appelez la fonction pour un article à **1,15 €** acheté en **3 exemplaires**.

---

### Exercice 3 — Fonction `truc_muche`

On considère la fonction suivante :

```python
def truc_muche(a, b, c):
    s = a + b + c
    return s
```

**Q1.**

<ul style="list-style:none; padding-left:1.5em;">
<li><strong>a.</strong> Quel est le nom de la fonction ?</li>
<li><strong>b.</strong> Quels sont les arguments ?</li>
<li><strong>c.</strong> Combien de lignes comporte le bloc d'instructions ?</li>
<li><strong>d.</strong> Combien de valeurs sont renvoyées ?</li>
<li><strong>e.</strong> Quelle valeur renvoie <code>truc_muche(2, 5, 1)</code> ?</li>
</ul>

**Q2.** Recopiez et exécutez cette fonction.

**Q3.** Effectuez l'appel `truc_muche(2, 5, 1)`.

**Q4.** Écrivez l'instruction pour obtenir la valeur renvoyée avec les arguments **1**, **2** et **4**.

---

### Exercice 4 — Définition d'une image

Une image numérique est constituée de **pixels**. Le nombre total de pixels d'une image s'appelle sa **définition**.

Par exemple, une image de 800 × 600 pixels a une définition de 480 000 pixels.

**Q1.** Calculez la définition d'une image de **960 × 720** pixels.

**Q2.** Complétez la fonction suivante :

```python
def definition_image(L, ...):
    d = ... * ...
    return ...
```

**Q3.** Appelez cette fonction pour une image de **800 × 600** pixels.

**Q4.** Appelez cette fonction pour l'image de 960 × 720. Comparez avec la question 1.

---

### Exercice 5 — Tableau de prédiction

On considère les trois fonctions suivantes :

```python
def triple(n):
    return 3 * n

def score_bonus(buts, passes):
    return buts * 3 + passes

def convertir(km):
    return km * 0.621
```

**Q1.** Complétez ce tableau *sans exécuter le code*.

| Appel | Valeur prédite | Valeur réelle |
|:---|:---:|:---:|
| `triple(4)` | *?* | |
| `triple(triple(2))` | *?* | |
| `score_bonus(2, 3)` | *?* | |
| `score_bonus(0, 5)` | *?* | |
| `score_bonus(1, 0) + score_bonus(0, 2)` | *?* | |
| `convertir(10)` | *?* | |
| `convertir(0)` | *?* | |

**Q2.** Recopiez les fonctions, exécutez la cellule, puis vérifiez vos prédictions.

**Q3.** De quelle conversion s'agit-il pour la fonction `convertir` ?

**Q4.** Un joueur marque **3 buts** et réalise **5 passes décisives**. Calculez son score.

---

### Exercice 6 — `print` ou `return` ?

Un élève a écrit deux versions d'une fonction qui calcule la durée d'un trajet :

```python
# Version A
def duree_trajet_A(distance, vitesse):
    duree = distance / vitesse
    print(duree)

# Version B
def duree_trajet_B(distance, vitesse):
    duree = distance / vitesse
    return duree
```

**Q1.** D'après vous, `duree_trajet_A(300, 100)` et `duree_trajet_B(300, 100)` affichent-ils quelque chose ? Prédisez avant d'exécuter.

**Q2.** Exécutez chaque appel et comparez avec vos prédictions.

**Q3.** Que se passe-t-il si on tente de **stocker le résultat** ?

```python
resultat_A = duree_trajet_A(300, 100)
resultat_B = duree_trajet_B(300, 100)
print(resultat_A)
print(resultat_B)
```

**Q4.** Expliquez la différence entre `print()` et `return` dans une fonction.

---

### Exercice 7 — Débogage

**Fonction 1** — Cette fonction contient **2 erreurs** :

```python
def celsius_vers_fahrenheit(c)
    f = c * 9/5 + 32
    Return f
```

**Q1.** Identifiez les 2 erreurs.

**Q2.** Corrigez la fonction et vérifiez qu'elle renvoie **32** pour 0 °C et **212** pour 100 °C.

---

**Fonction 2** — Cette fonction contient **3 erreurs** :

```python
def imc(poids, taille):
resultat = poids / (taille**2)
return
```

**Q3.** Identifiez les 3 erreurs.

**Q4.** Corrigez la fonction et calculez l'IMC d'une personne de **70 kg** pour **1,75 m**.

---

### Exercice 8 — Écrire des fonctions

**Q1.** Écrivez une fonction `aire_triangle(base, hauteur)` qui renvoie l'aire d'un triangle.

*Formule : base × hauteur ÷ 2. Vérification : `aire_triangle(6, 4)` → `12.0`*

**Q2.** Écrivez une fonction `convertir_km_miles(km)` qui convertit des kilomètres en miles (1 km ≈ 0,621 mile).

*Vérification : `convertir_km_miles(10)` → `6.21`*

**Q3.** Écrivez une fonction `prix_reduit(prix, remise)` qui renvoie le prix après une remise en pourcentage.

*Vérification : `prix_reduit(80, 25)` → `60.0`*

**Q4.** Écrivez une fonction `pourboire(addition, pourcentage)` qui renvoie le montant du pourboire.

*Vérification : `pourboire(35, 15)` → `5.25`*

**Q5.** Écrivez une fonction `score_basket(un_pt, deux_pts, trois_pts)` qui renvoie le score total d'un joueur.

*Vérification : `score_basket(2, 5, 3)` → `21`*

---

### Exercice 9 — Fonctions imbriquées : carrelage

On veut calculer le coût d'un chantier de carrelage.

**Q1.** Écrivez une fonction `aire_piece(longueur, largeur)` qui renvoie l'aire d'une pièce rectangulaire (en m²).

*Exemple : `aire_piece(4, 3)` → `12`*

**Q2.** Écrivez une fonction `nb_carreaux(longueur, largeur, cote)` qui renvoie le nombre de carreaux nécessaires. Chaque carreau est un carré de côté `cote` mètres.

*Rappel : utilisez `aire_piece` dans cette fonction.*

**Q3.** Écrivez une fonction `cout_chantier(longueur, largeur, cote, prix_carreau)` qui renvoie le coût total en euros en appelant `nb_carreaux`.

**Q4.** Un client veut carreler une pièce de **5 m × 4 m** avec des carreaux de **0,25 m** de côté à **2 € pièce**. Quel est le coût total ? Montrez votre calcul.

---

### Exercice 10 — Cantine scolaire

Le service de restauration facture : **7,50 €** le repas adulte et **3,20 €** le repas élève.

**Q1.** Écrivez une fonction `prix_repas(nb_adultes, nb_eleves)` qui renvoie le prix total d'un repas.

*Exemple : `prix_repas(2, 15)` → `63.0`*

**Q2.** Écrivez une fonction `prix_semaine(nb_adultes, nb_eleves)` qui renvoie le coût pour **5 repas** en appelant `prix_repas`.

*Exemple : `prix_semaine(2, 15)` → `315.0`*

**Q3.** Écrivez une fonction `devis(nom_groupe, nb_adultes, nb_eleves)` qui renvoie une chaîne de caractères du type :
`"Devis pour 3e B : 315.0 euros pour la semaine"` en appelant `prix_semaine`.

**Q4.** Une classe de **28 élèves** part avec **3 accompagnateurs**. Affichez le devis pour le groupe `"3e A"`.

