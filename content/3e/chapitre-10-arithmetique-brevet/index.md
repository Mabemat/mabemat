---
title: "Exercices type brevet - Arithmétique"
layout: "brevet"
level: "3e"
chapter: "chapitre-10-arithmetique"
has_brevetcorr: true
---
{{< brevet-exo num="1" source="DNB Décembre 2023 Nouvelle Calédonie" >}}
---INTRO---
José, un agriculteur vivant dans la commune du Mont-Dore, veut préparer des paniers de légumes bio pour ses clients.<br>

Il a déjà récolté 39 salades, 78 carottes et 51 aubergines.<br>

Il veut que tous les paniers aient la même composition et utiliser tous les légumes.<br>

La décomposition de 39 en produit de facteurs premiers est : $3 \times 13$.


---Q---

---SUB-Q---
Décomposer en facteurs premiers les nombres 78 et 51.
---SUB-CORR---
<ul>
<li>De même que $39 = 3 \times 13$, on a $78 = 60 + 18 = 6 \times 10 + 6 \times 3 = 6 \times (10 + 3) = 6 \times 13 = 2 \times 3 \times 13$</li>
<li>$51 = 30 + 21 = 3 \times 10 + 3 \times7 = 3\times(10 + 7) = 3 \times 17$.</li>
</ul>
---SUB-Q---
En déduire le nombre de paniers maximum que José peut préparer.
---SUB-CORR---
On a donc $\left\{\begin{array}{l c l}
39&=&3 \times 13\\
78 &=& 3 \times 26\\
51&=&3 \times 17
\end{array}\right.$
<br>
On peut donc faire 3 paniers identiques.
---SUB-Q---
Combien de salades, de carottes et d'aubergines y aurait-il dans chaque panier?
---SUB-CORR---
Il suffit de relever les seconds facteurs de chaque produit pour trouver que chacun des 3  paniers sera composé de 13 salades, 26 carottes et 17 aubergines.
---Q---
Finalement, José décide de préparer 13 paniers.
---SUB-Q---
Combien d'aubergines ne seront pas utilisées? Justifier votre réponse.
---SUB-CORR---
On a :
$\left\{\begin{array}{l c l}
39&=&13 \times 3\\
78 &=& 13 \times 6\\
51&=&13 \times 3 + {12}
\end{array}\right.$
<br>
Chacun des 13 paniers aura 3 salades, 6 carottes et 3 aubergines. Resterons 12 aubergines.
---SUB-Q---
Combien doit-il cueillir au minimum d'aubergines supplémentaires pour pouvoir toutes les utiliser ?
---SUB-CORR---
Avec 1 aubergine de plus, on aura $52 = 13 \times 4$ : chacun des 13 paniers aura 4 aubergines.
---Q---
José souhaite que ses 13 paniers contiennent également des tomates.<br>

Il estime qu'il en a entre $110$ et $125$&nbsp;prêtes à être récoltées.<br>

Combien doit-il en cueillir au maximum pour éviter les pertes et pour que chaque panier ait toujours la même composition ?<br>

<strong>Toute trace de recherche, même non aboutie, sera prise en compte.</strong>

---CORR---
On écrit les multiples de 13 aux environs de 110 et 125 : <br>

$110 < { 117 = 13 \times 9}< 125  < { 130 = 13 \times 10}$ : le seul multiple de 13 entre 110 et 125 est $117 = 13 \times 9$.<br>
Si l'on récolte 117 tomates, on pourra en mettre exactement 9 dans chacun des 13 paniers.
{{< /brevet-exo >}}

{{< brevet-exo num="2" source="DNB Juin 2024 Centres étrangers" >}}
---INTRO---
Un entraîneur de sport prépare deux circuits d'entraînement contenant plusieurs exercices de cardio et de renforcement musculaire :

<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>un circuit commence à l'exercice 1 et se termine en revenant à l'exercice 1;</li><li>le circuit 1 contient cinq exercices. Chaque exercice dure 40 secondes et doit être suivi de 16 secondes de repos permettant de se rendre à l'exercice suivant;</li><li>le circuit 2 contient dix exercices. Chaque exercice dure 30 secondes et doit être suivi de 5 secondes de repos permettant de se rendre à l'exercice suivant.</li></ul>

<div style="display:flex; justify-content:center; width:auto; margin:0 auto;">

    <img src="/mabemat/figures/3e/chapitre-10/2-1.svg"
         alt="figure 1"
         style="max-height:200px; max-width:100%; margin:0 1rem;">

    <img src="/mabemat/figures/3e/chapitre-10/2-2.svg"
         alt="figure 2"
         style="max-height:200px; max-width:100%; margin:0 1rem;">

</div>

---Q---
Montrer que le circuit 1 s'effectue en 280 secondes et que le circuit 2 s'effectue en 350 secondes.
---CORR---
Le circuit 1, c'est quand on enchaîne cinq fois de suite 40 secondes d'exercice et 16 secondes de repos, soit 5 fois  $40 + 16 = 56$ secondes.<br>

On a donc bien besoin de  :&emsp; $5 \times 56 = 280$ secondes pour effectuer le circuit 1.<br>

Pour le circuit 2 : même principe, on enchaîne dix fois 30 secondes d'exercice et 5 secondes de repos :

$$10 \times (30 + 5 ) = 10\times 35 = 350$$

Il faut bien 350 secondes pour effectuer le circuit 2.
---Q---
Donner la décomposition en produit de facteurs premiers de $280$ et de $350$.
---CORR---
Donnons la décomposition en produit de facteurs premiers de $280$ et de $350$.

$$\begin{aligned} 280 &= 4 \times 7 \times 10\\
&= 2 \times 2 \times 7 \times 2 \times 5\\
&= 2^3 \times 5 \times 7 
\end{aligned}$$

$$\begin{aligned} 350 &= 5 \times 7 \times 10\\
&= 5 \times 7 \times 2 \times 5\\
&= 2 \times 5^2 \times 7 
\end{aligned}$$

La décomposition de 280 en produit de facteurs premiers est : $280= 2^3 \times 5 \times 7$. <br>

Celle de 350 est : $350= 2 \times 5^2 \times 7$
---Q---
Une séance d'entraînement est constituée de plusieurs tours du même circuit.<br>

Au coup de sifflet de l'entraîneur, Camille commence une séance d'entraînement sur le circuit 1 et Dominique sur le circuit 2.
---SUB-Q---
Expliquer pourquoi, lorsque 2&thinsp;800 secondes se sont écoulées à partir du coup de sifflet, Camille se trouve de nouveau au départ du circuit 1.<br>

		Préciser où se trouve Dominique sur le circuit 2 lorsque 2&thinsp;800 secondes se sont écoulées.
---SUB-CORR---
Lorsque 2&thinsp;800 secondes se sont écoulées à partir du coup de sifflet, Camille se trouve de nouveau au départ du circuit 1 car $2\,800 = 10 \times 280$, donc comme 10 est un nombre entier.<br>
Cela signifie que Camille a effectué 10 fois le circuit 1 complètement, et n'a pas encore commencé la 11<sup>e</sup> répétition : Camille est donc à nouveau au départ du circuit 1.<br>

On a :&emsp; $\dfrac{2\,800}{350 } = 8$.

<em>Rem. </em> Ou encore $2\,800 = 7 \times 4 \times 100 = 7 \times 4 \times 10 \times 10 =  7 \times 2^2 \times 2^2 \times 5^2 = 2^4 \times 5^2 \times 7 = 2^3 \times {(2 \times 5^2 \times 7)} = 8 \times 350$.<br>

Au bout de ces 2&thinsp;800, Dominique a donc parcouru exactement 8 parcours 2  : elle est donc au départ.
---SUB-Q---
Après le coup de sifflet, combien de temps faut-il à Camille et Dominique pour se retrouver en même temps pour la première fois au départ de leur circuit ? <br>
Exprimer cette durée en minute et seconde.
---SUB-CORR---
Après le coup de sifflet, la première fois où Camille et Dominique se retrouvent en même temps au départ de leur circuit est pour un nombre de secondes qui est le multiple commun à 280 et à 350 le plus petit possible.<br>

Les facteurs premiers de 280 et de 350 sont les mêmes : 2, 5 et 7.<br>

Pour qu'un nombre soit divisible par 280, il faut au moins trois facteurs 2, au moins un facteur 5 et au moins une fois le facteur 7 au moins une fois.<br>

Pour qu'un nombre soit divisible par 350, il faut au moins un facteur 2, au moins deux facteurs 5 et au moins une fois le facteur 7.<br>

En réunissant ces critères, il faut donc $2^3 \times 5^2 \times 7 = 1\,400$ secondes pour que Camille et Dominique se retrouvent pour la première en même temps au départ de leur circuit.<br>

Comme $1\,400 = 1\,200 + 200 = 20 \times 60 + 180 = 20 \times 60 + 3 \times 60 + 20 = 23 \times ,60 + 20$, on a 1&thinsp;400(s) = 23 (min 20&nbsp;(s).<br>

(C'est logique : après 2800 s les deux avaient fait un nombre pair de tours complets, donc en divisant le temps par 2, ils ont encore fait un nombre entier de tours complets chacun, et donc se retrouvent au début du circuit).
{{< /brevet-exo >}}

{{< brevet-exo num="3" source="DNB Décembre 2021 Nouvelle Calédonie" >}}
---INTRO---
<br>
---Q---

---SUB-Q---
Justifier que $330$ n'est pas un nombre premier.<br>
		
La décomposition en produit de facteurs premiers de $500$ est: $500 = 2^2 \times 5^3$.
---SUB-CORR---
330 est pair : il n'est donc pas premier (le seul premier pair est 2).
---SUB-Q---
Décomposer $330$ en produit de facteurs premiers.
---SUB-CORR---
$330 = 10 \times 33 = 2 \times 5 \times 3 \times 11 = 2 \times 3 \times 5 \times 11$.
---SUB-Q---
Justifier que $165$ divise $330$.
---SUB-CORR---
$330 = 2 \times 165$, donc 165 est un diviseur de 330.
---SUB-Q---
Justifier que 165 ne divise pas $500$.
---SUB-CORR---
$165 = 15 \times 11 = 3 \times 5 \times 11$, donc 11 divise 165, mais 11 n'est pas un diviseur de 500 (11 n'est pas dans la liste des diviseurs premiers de 500).
---Q---
La pâtisserie Délices a préparé $330$ biscuits aux noix et $500$ biscuits au chocolat.<br>

La pâtisserie souhaite répartir le plus de biscuits possible dans $165$ boites.<br>

La pâtisserie met le même nombre de biscuits aux noix dans chaque boîte.<br>

Combien de biscuits aux noix y a-t-il dans chaque boîte ?<br>

La pâtisserie met aussi le même nombre de biscuits au chocolat dans chaque boîte.
---CORR---
On a $330 = 165 \times 2$ : on peut donc mettre 2 biscuits aux noix dans chacune des 165 boîtes.
---Q---

---SUB-Q---
Combien de biscuits au chocolat y a-t-il dans chaque boîte ?
---SUB-CORR---
On a $500 = 165 \times 3 + 5$ : on peut donc mettre 3 biscuits au chocolat dans chaque boîte.
---SUB-Q---
Combien de biscuits au chocolat reste-t-il ?<br>

---SUB-CORR---
Il en restera 5.
---Q---
Une boîte de biscuits coûte 3&thinsp;650 francs.<br>

À partir de 10 boîtes achetées, la pâtisserie Délices offre une réduction de 5&thinsp;% sur le montant total.<br>
Combien va-t-on payer pour l'achat de 12 boîtes ?<br>

Faire apparaÎtre les calculs effectués.

---CORR---
Retrancher 5&thinsp;% c'est multiplier par $1 - \dfrac{5}{100} = 1 - 0,05 = 0,95$.<br>

À partir de 10 boîtes achetées chaque boîte est donc facturée $3\,650 \times 0,95$.<br>

Pour 12 boîtes achetées le prix effectivement payé sera :<br>

$12 \times 3\,650 \times 0,95 = 42\,610$&nbsp;francs.


{{< /brevet-exo >}}

{{< brevet-exo num="4" source="DNB Juin 2022 Métropole" >}}
---INTRO---
Une collectionneuse compte ses cartes Pokémon afin de les revendre.<br>

Elle possède $252$ cartes de type « <em>feu</em> » et $156$ cartes de type « <em>terre</em> ».
---Q---

---SUB-Q---
Parmi les trois propositions suivantes, laquelle correspond à la décomposition en produit de facteurs premiers du nombre $252$&nbsp;?

    
      
      <table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Proposition 1</td>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Proposition 2</td>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Proposition 3</td>
</tr>
<tr>
<td style="text-align:center;padding:4px 10px;border-top:none;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">$2^2\times9\times7$</td>
<td style="text-align:center;padding:4px 10px;border-top:none;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">$2\times2\times3\times21$</td>
<td style="text-align:center;padding:4px 10px;border-top:none;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">$2^2\times3^2\times7$</td>
</tr>
</table>
---SUB-CORR---
Voici la décomposition en produit de facteurs premiers de $252$&nbsp;:
    $$\begin{align*}
      252 &= 2\times 126\\
      252 &= 2\times 2\times 63\\
      252 &= 2\times 2\times 3 \times 21\\
      252 &= 2\times 2\times 3 \times 3\times 7\\
      252 &= 2^2\times3^2\times 7
    \end{align*}$$
    La proposition correcte est donc la 3.
    
    <br>
    <em>Remarque : dans la proposition 1, 9 n'est pas un nombre premier ; dans la proposition 2, 21 n'est pas un nombre premier et dans la proposition 3, les 3 facteurs sont premiers et le produit est bien égal à 252. </em>
---SUB-Q---
Donner la décomposition en produit de facteurs premiers du nombre $156$.
---SUB-CORR---
Voici la décomposition en produit de facteurs premiers de $156$&nbsp;:
    $$\begin{align*}
      156 &= 2 \times 78\\
      156 &= 2 \times 2 \times 39\\
      156 &= 2 \times 2 \times 3 \times 13\\
      156 &= 2^2 \times 3 \times 13
    \end{align*}$$
---Q---
Elle veut réaliser des paquets identiques, c'est-à-dire contenant chacun le même nombre de cartes « <em>terre</em> »  et le même nombre de cartes « <em>feu</em> »  en utlisant toutes les cartes.
---SUB-Q---
Peut-elle faire $36$ paquets&nbsp;?
---SUB-CORR---
On a $252=36 \times 7$ et $156=36\times4+12$. Donc $36$ n'est pas un diviseur commun à $252$ et $156$.<br>

    En conséquence, elle ne pourra pas faire $36$ paquets.
---SUB-Q---
Quel est le nombre maximum de paquets qu'elle peut réaliser&nbsp;?
---SUB-CORR---
Cherchons $N$ le plus grand commun diviseur de $252$ et $156$.<br>

    Dans les deux décompositions en produit de facteurs premiers de ces deux nombres, on choisit les facteurs qui sont communs aux deux produits. <br>
    Il vient $N=2^2\times3$ soit $N=12$.<br>

    La collectionneuse pourra faire au maximum $12$ paquets.
---SUB-Q---
Combien de cartes de chaque type contient alors chaque paquet&nbsp;?
---SUB-CORR---
Elle fait $12$ paquets. On a&nbsp;:
    $$\begin{align*}
      252 &= 12\times 21 & 156 &= 12\times13
    \end{align*}$$
    Il y aura donc $21$ cartes <em>feu</em> et $13$ cartes <em>terre</em>.
---Q---
Elle choisit une carte au hasard parmi toutes ses cartes. On suppose les cartes indiscernables au toucher.<br>

  Calculer la probabilité que ce soit une carte de type « <em>terre</em> ».

---CORR---
Soit $E$ l'événement « <em>La carte tirée est de type Terre</em>  ».

  Il y a équiprobabilité donc la probabilité $p(E)$ de l'événement $E$ correspond à la proportion de cartes <em>feu</em> parmi toutes les cartes. Donc&nbsp;:
  $$\begin{align*}
    p(E) &= \frac{156}{252+156}\\
    p(E) &= 156408\\
    p(E) &= \frac{13}{34}\\
    p(E) &= 0,4
  \end{align*}$$

{{< /brevet-exo >}}
