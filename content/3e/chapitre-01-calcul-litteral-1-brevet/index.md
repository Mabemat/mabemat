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
<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none">$A = 55$</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none">$B= (2x +3)^2$</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none">$C= (2x - 3)(2x +3)$</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none">$D = (2x — 3)^2$</td>
</tr>
</table>

<br><br>
{{< /brevet-exo >}}

{{< brevet-exo num="2" source="DNB Juin 2025 Amérique du Nord" >}}
---INTRO---
On considère les deux programmes de calcul suivants :

<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:1px solid #8B3C52"><strong>Programme A</strong></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:none"><strong>Programme B</strong></td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:1px solid #8B3C52"><ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>Choisir un nombre</li><li>Multiplier par 3</li><li>Ajouter 15</li><li>Diviser par 3</li><li>Soustraire le nombre de départ</li></ul></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:none">-2cm</td>
</tr>
</table>
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
