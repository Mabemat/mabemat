---
title: "Exercices type brevet - Calcul littéral (1)"
layout: "brevet"
level: "3e"
chapter: "chapitre-01-calcul-litteral-1"
---
{{< brevet-exo num="1" source="DNB Janvier 2026 Sujet 0 Version A" >}}
---INTRO---
<br>

On donne un programme de calcul :

pspicture(-3,0)(3,4.2)

(0,4)<div class="brevet-fbox">choisir un nombre</div>[linewidth=1.5pt]->(0,3.7)(0,3.2)
(0,3)<div class="brevet-fbox">le multiplier par 2</div>[linewidth=1.5pt]->(0,2.7)(0,2.2)
(0,2)<div class="brevet-fbox">élever le résultat au carré</div>[linewidth=1.5pt]->(0,1.7)(0,1.2)
(0,1)<div class="brevet-fbox">retrancher 9</div>[linewidth=1.5pt]->(0,0.7)(0,0.2)
(0,0)<div class="brevet-fbox">afficher le résultat</div>
pspicture
---Q---
Lorsque le nombre choisi est 4, vérifier le programme affiche 55, en précisant chacune des
étapes de calcul.
---Q---
On appelle $x$ le nombre choisi au départ.
---SUB-Q---
Écrire, en fonction de $x$, le résultat obtenu par le programme.
---SUB-Q---
Parmi les quatre expressions suivantes, laquelle correspond au résultat obtenu par le
programme ?

tabularx*4X
$A = 55$ &$B= (2x +3)^2$ &$C= (2x - 3)(2x +3)$ &$D = (2x — 3)^2$<br>
tabularx
{{< /brevet-exo >}}

{{< brevet-exo num="2" source="DNB Juin 2025 Amérique du Nord" >}}
---INTRO---
On considère les deux programmes de calcul suivants :

tabularxm6.cm|X
<strong>Programme A</strong>&<strong>Programme B</strong><br>
<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>Choisir un nombre</li><li>Multiplier par 3</li><li>Ajouter 15</li><li>Diviser par 3</li><li>Soustraire le nombre de départ</li></ul>&unit=0.825cm,arrowsize=2pt 3
-2cm
pspicture(-4,0)(4,6)
(0,5)Choisir un nombre(-1.9,5.4)(1.9,4.6)
->(-1.9,5)(-2.6,5)(-2.6,4.1)
(-2.6,3.7)Soustraire 1(-3.8,4.1)(-1.4,3.3)->(1.9,5)(2.6,5)(2.6,4.1)
(2.6,3.7)Soustraire 6(1.4,4.1)(3.8,3.3)
->(-1.4,3.7)(-0.6,3.7)(-0.6,2.3)->(1.4,3.7)(0.6,3.7)(0.6,2.3)
(0,1.9)Multiplier les deux résultats obtenus(-3.3,2.3)(3.3,1.5)
->(0,1.5)(0,0.8)
(0,0.5)Ajouter 5(-1,0.8)(1,0.2)

pspicture
tabularx
---Q---
Montrer que, lorsque le nombre choisi est 4, le résultat obtenu avec le programme A est 5.
---CORR---
On obtient successivement :

$4 \overset{\times 3}{\longmapsto} \quad12 \quad \overset{+ 15}{\longmapsto} \quad27 \quad \overset{\div 3}{\longmapsto} \quad 9 \quad \overset{- 4}{\longmapsto} \quad 5$
---Q---
Montrer que, lorsque le nombre choisi est $- 2$, le résultat obtenu avec le programme A est 5.
---CORR---
$-2 \overset{\times 3}{\longmapsto} \quad - 6 \quad \overset{+ 15}{\longmapsto} \quad 9 \quad \overset{\div 3}{\longmapsto} \quad 3 \quad \overset{- (- 2)}{\longmapsto} \quad 5$
---Q---
Justifier que l'affirmation suivante est vraie :

« Le programme A donne toujours le même résultat.  »
---CORR---
« Le programme A donne toujours le même résultat.  »

En effet $a \overset{\times 3}{\longmapsto} \quad 3a \quad \overset{+ 15}{\longmapsto} \quad 3a + 15 = 3(a + 5) \quad \overset{\div 3}{\longmapsto} \quad a + 5\quad \overset{- a}{\longmapsto} \quad 5$.

Quel que soit le nombre de départ $a$, le nombre trouvé à la fin est 5.
---Q---
Lorsque le nombre choisi est 10, quel résultat obtient-on avec le programme B ?
---CORR---
On calcule d'une part $10 - 1 = 9$, de l'autre $10 - 6 = 4$ ; le produit de ces deux nombres est égal à $9 \times 4 = 36$ et enfin $36 + 5 = 41$.
---Q---
Il existe exactement deux nombres pour lesquels les programmes A et B fournissent à chaque fois des résultats identiques.

Quels sont ces deux nombres?
---CORR---
En partant de $x$ le programme A donne le résultat 5 et avec le programme B, on obtient le nombre $(x - 1)(x - 6) + 5$.
Les résultats sont identiques si :

$5 = (x - 1)(x - 6) + 5$ autrement dit si $(x - 1)(x - 6) = 0$ cettez équation produit a pour solution 1 et 6

1 et 6 sont bien les deux seuls nombres qui donnent comme résultat 5 par les deux programmes.
{{< /brevet-exo >}}
