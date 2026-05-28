---
title: "Correction — Séance 05 Boucles non bornées"
---

### Exercice 1 — Lecture d'un programme

**Q1.** Condition : `n < 50`. Bloc répété : `n = n + n`.

**Q2.** Valeurs successives :

| Tour | n (avant) | n (après) |
|---|---|---|
| Départ | 1 | — |
| Tour 1 | 1 | 2 |
| Tour 2 | 2 | 4 |
| Tour 3 | 4 | 8 |
| Tour 4 | 8 | 16 |
| Tour 5 | 16 | 32 |
| Tour 6 | 32 | 64 |
| Arrêt | 64 ≥ 50 → stop | — |

`print(n)` après la boucle affiche **64**.

**Q3.** Vérifier par exécution.

**Q4.** Dans la variante, `print(n)` est **à l'intérieur** de la boucle. Il s'exécute après chaque mise à jour de `n`. Le programme affiche :
```
2
4
8
16
32
64
```
(6 valeurs, toutes après doublement, contre 1 seule dans la version initiale.)

---

### Exercice 2 — Compte à rebours

**Q1.**
```
n ← 10
Tant que n >= 0 :
    Afficher n
    n ← n - 1
Fin Tant que
Afficher "Décollage !"
```

**Q2.**
```python
n = 10
while n >= 0:
    print(n)
    n = n - 1
print("Décollage !")
```

**Bonus avec for :**
```python
for n in range(10, -1, -1):
    print(n)
print("Décollage !")
```

---

### Exercice 3 — Déboguer des boucles while

**Programme A**

Problème : la variable `n` n'est jamais modifiée dans la boucle. `n > 0` reste toujours vraie → **boucle infinie**.

Correction : ajouter `n = n - 1` dans le bloc de la boucle.

```python
n = 10
while n > 0:
    print(n)
    n = n - 1
```

**Programme B**

Problème : la condition `capital >= 1000` est **toujours vraie** puisque `capital` ne fait qu'augmenter → **boucle infinie**.

Correction : la condition devrait s'arrêter quand le capital dépasse l'objectif, donc `while capital < 2000`.

```python
capital = 1000
while capital < 2000:
    capital = capital * 1.05
print(capital)
```

**Programme C**

Problème : `compteur = compteur + 1` est **hors de la boucle** (non indenté). La condition `compteur < 5` reste toujours vraie (compteur vaut toujours 0) → **boucle infinie** qui affiche "Bonjour" indéfiniment.

Correction : indenter `compteur = compteur + 1` pour le mettre dans le bloc de la boucle.

```python
compteur = 0
while compteur < 5:
    print("Bonjour")
    compteur = compteur + 1
```

---

### Exercice 4 — Batterie de téléphone

**Q1.** 95 − 8×n < 20 → n > 75/8 = 9.375 → environ **9 à 10 heures**.

**Q2.**
```python
charge = 95
heures = 0
while charge >= 20:
    charge = charge - 8
    heures = heures + 1
    print("Après", heures, "h : charge =", charge, "%")
print("Alerte batterie faible après", heures, "heures.")
```

Trace :

| Heures | Charge (%) |
|---|---|
| 0 | 95 |
| 1 | 87 |
| 2 | 79 |
| 3 | 71 |
| 4 | 63 |
| 5 | 55 |
| 6 | 47 |
| 7 | 39 |
| 8 | 31 |
| 9 | 23 |
| 10 | 15 → **alerte** |

Résultat : alerte après **10 heures** (charge = 15 %).

**Q3.**
```python
def heures_batterie(charge_initiale, consommation_horaire, seuil_alerte):
    charge = charge_initiale
    heures = 0
    while charge >= seuil_alerte:
        charge = charge - consommation_horaire
        heures = heures + 1
    return heures
```

**Q4.** `heures_batterie(95, 5, 20)` → **16 heures** (95 − 5×16 = 15 < 20).

---

### Exercice 5 — Capital et intérêts

**Q1.**
- Après 1 an : 2 000 × 1.025 = **2 050 €**
- Après 2 ans : 2 050 × 1.025 = **2 101.25 €**

**Q2.**
```python
capital = 2000
annees = 0
while capital < 3000:
    capital = capital * 1.025
    annees = annees + 1
print("Nombre d'années :", annees)
print("Capital atteint :", round(capital, 2), "€")
```

Résultat : **17 ans**, capital ≈ 3 040.15 €  
(2 000 × 1.025¹⁷ ≈ 3 040)

**Q3.**
```python
def annee(capital_initial, taux, objectif):
    capital = capital_initial
    annees = 0
    while capital < objectif:
        capital = capital * (1 + taux / 100)
        annees = annees + 1
    return annees
```

**Q4.** `annee(2000, 2.5, 5000)` → **38 ans**  
(2 000 × 1.025³⁸ ≈ 5 037)

---

### Exercice 6 — Influence sur les réseaux

**Q1.**
- Après 1 semaine : 150 × 1.12 = **168 abonnés**
- Après 2 semaines : 168 × 1.12 ≈ **188 abonnés**

**Q2.**
```python
abonnes = 150
semaines = 0
while abonnes < 1000:
    abonnes = abonnes * 1.12
    semaines = semaines + 1
    print("Semaine", semaines, ":", int(abonnes), "abonnés")
print("Objectif atteint en", semaines, "semaines.")
```

**Q3.**
```python
def semaines_pour_atteindre(abonnes_depart, taux_hebdo, objectif):
    abonnes = abonnes_depart
    semaines = 0
    while abonnes < objectif:
        abonnes = abonnes * (1 + taux_hebdo / 100)
        semaines = semaines + 1
    return semaines
```

`semaines_pour_atteindre(150, 12, 1000)` → **17 semaines**

**Q4.** Pour atteindre 1 000 en moins de 10 semaines avec +12 %/semaine, il faut :

abonnés × 1.12¹⁰ ≥ 1 000 → abonnés ≥ 1 000 / 1.12¹⁰ ≈ 1 000 / 3.106 ≈ **322 abonnés au départ**

On peut vérifier : `semaines_pour_atteindre(322, 12, 1000)` → 10 semaines.

**Q5.** Autre créateur (500 abonnés, +5 %/semaine) :  
`semaines_pour_atteindre(500, 5, 1000)` → **15 semaines**  
Lucas (150 abonnés, +12 %/semaine) → **17 semaines**

L'autre créateur atteint 1 000 abonnés en premier (15 semaines contre 17).

---

### Exercice 7 — Population d'une ville

**Q1.**
```python
pop = 80000
annee = 2024
while pop >= 70000:
    pop = pop * (1 - 0.015)
    annee = annee + 1
print(annee)
```

| Année | Population |
|---|---|
| 2024 | 80 000 |
| 2025 | 78 800 |
| 2026 | 77 618 |
| 2027 | 76 453.7 |
| 2028 | 75 306.9 |
| 2029 | 74 177.3 |
| 2030 | 73 064.7 |
| 2031 | 71 968.7 |
| 2032 | 70 889.2 |
| 2033 | **69 825.8** → première année < 70 000 |

La population passe sous 70 000 habitants en **2033**.

**Q2.**
```python
def annee_seuil(pop_initiale, taux_variation, seuil, annee_debut):
    pop = pop_initiale
    annee = annee_debut
    while pop >= seuil:
        pop = pop * (1 + taux_variation)
        annee = annee + 1
    return annee
```

**Q3.** `annee_seuil(80000, -0.015, 50000, 2024)` → **2056**  
(la population atteint ≈ 49 323 habitants cette année-là)

---

### Exercice 8 — Suite de Syracuse

**Q1.** Départ de n = 6 :

| Étape | n | pair/impair |
|---|---|---|
| — | 6 | pair → ÷2 |
| 1 | 3 | impair → ×3+1 |
| 2 | 10 | pair → ÷2 |
| 3 | 5 | impair → ×3+1 |
| 4 | 16 | pair → ÷2 |
| 5 | 8 | pair → ÷2 |
| 6 | 4 | pair → ÷2 |
| 7 | 2 | pair → ÷2 |
| 8 | 1 | **arrêt** |

Suite : 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 — **8 étapes**.

**Q2.**
```python
def syracuse(n):
    etapes = 0
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        print(n)
        etapes = etapes + 1
    return etapes
```

`syracuse(6)` → affiche 3, 10, 5, 16, 8, 4, 2, 1 et renvoie **8**.

**Q3.** `syracuse(27)` → **111 étapes** (la suite de 27 est célèbre pour sa longueur !).
