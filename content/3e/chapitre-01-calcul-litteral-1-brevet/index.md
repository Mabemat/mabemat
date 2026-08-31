---
title: "Exercices type brevet - Calcul littéral (1)"
layout: "brevet"
level: "3e"
chapter: "chapitre-01-calcul-litteral-1"
has_brevetcorr: true
---
{{< brevet-exo num="1" source="DNB Juin 2022 Amérique du Nord" >}}
---INTRO---
On considère le programme de calcul suivant, appliqué à des nombres entiers :

<img src="/mabemat/figures/3e/chapitre-01/1-1.svg" alt="Programme de calcul" style="display:block; margin:1rem auto; max-height:240px; max-width:100%;">
---Q---
---PART---Partie A
---Q---
Vérifier que si le nombre de départ est 15, alors le nombre obtenu à l'arrivée est 240.
---CORR---
Si le nombre de départ est 15, le programme de calcul donne :<br><br>
$15^2 = 225$ puis $225 + 15 = 240$.<br><br>
Le nombre obtenu à l'arrivée est bien 240.
---Q---
Voici un tableau de valeurs réalisé à l'aide d'un tableur. Il donne les résultats obtenus par le programme de calcul en fonction de quelques valeurs du nombre choisi au départ.
<table style="border-collapse:collapse;margin:1rem auto;font-size:0.9em;">
<tr>
<td style="border:1px solid #8B3C52;padding:3px 10px;"></td>
<td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;"><strong>A</strong></td>
<td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;"><strong>B</strong></td>
</tr>
<tr><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">1</td><td style="border:1px solid #8B3C52;padding:3px 10px;">Nombre choisi au départ</td><td style="border:1px solid #8B3C52;padding:3px 10px;">Nombre obtenu à l'arrivée</td></tr>
<tr><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">2</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">0</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">0</td></tr>
<tr><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">3</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">1</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">2</td></tr>
<tr><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">4</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">2</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">6</td></tr>
<tr><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">5</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">3</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">12</td></tr>
<tr><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">6</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">4</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">20</td></tr>
<tr><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">7</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">5</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">30</td></tr>
<tr><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">8</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">6</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">42</td></tr>
<tr><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">9</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">7</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">56</td></tr>
<tr><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">10</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">8</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">72</td></tr>
<tr><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">11</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">9</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">90</td></tr>
<tr><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">12</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">10</td><td style="border:1px solid #8B3C52;padding:3px 10px;text-align:center;">110</td></tr>
</table>
Quelle formule a pu être saisie dans la cellule B2 avant d'être étirée vers le bas ?<br><br>
<em>Aucune justification n'est attendue.</em>
---CORR---
Dans la cellule B2, on veut afficher le nombre obtenu à l'arrivée quand le nombre choisi au départ est celui qui se lit dans la cellule A2.<br><br>
On doit saisir la formule <code>=A2^2+A2</code>, ou encore <code>=A2*A2+A2</code>.
---Q---
On note $x$ le nombre de départ.<br><br>
Écrire, en fonction de $x$, une expression du résultat obtenu avec ce programme de calcul.
---CORR---
Si le nombre de départ est $x$, le programme de calcul donne $x^2$, puis $x^2 + x$.<br><br>
L'expression, en fonction de $x$, du nombre obtenu à l'arrivée est $x^2 + x$.
---Q---
---PART---Partie B
---Q---
On considère l'affirmation suivante :<br><br>
« Pour obtenir le résultat du programme de calcul, il suffit de multiplier le nombre de départ par le nombre entier qui suit. »<br><br>
Vérifier que cette affirmation est vraie lorsque le nombre entier choisi au départ est 9.
---CORR---
Quand le nombre entier choisi au départ est 9, le nombre obtenu est 90 (voir la cellule B11 du tableau).<br><br>
Si on multiplie 9 par le nombre entier qui suit, c'est-à-dire 10, on obtient bien aussi $9 \times 10 = 90$.<br><br>
L'affirmation est donc vraie pour un nombre choisi égal à 9.
---Q---
Démontrer que cette affirmation est vraie quel que soit le nombre entier choisi au départ.
---CORR---
Si $x$ est le nombre entier choisi au départ, on a établi à la question précédente que le nombre obtenu à l'arrivée est $x^2 + x$.<br><br>
En factorisant par $x$ dans cette expression, il vient :
$$x^2 + x = x(x + 1)$$
Le nombre obtenu est donc bien, dans tous les cas, le produit du nombre choisi au départ ($x$) par le nombre entier suivant ($x+1$) : l'affirmation est vraie quel que soit le nombre entier choisi au départ.
---Q---
Démontrer que le nombre obtenu à l'arrivée par le programme de calcul est un nombre pair quel que soit le nombre entier choisi au départ.
---CORR---
Rappelons que le produit d'un nombre entier pair par un nombre entier quelconque est toujours pair.<br><br>
Il y a deux cas de figure possibles :
<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>si le nombre de départ $x$ est pair, alors le nombre d'arrivée est pair, car c'est le produit d'un nombre pair ($x$) par un nombre entier ($x+1$) ;</li><li>si le nombre de départ $x$ est impair, alors l'entier suivant ($x+1$) est pair et le nombre d'arrivée est encore pair.</li></ul>
Dans tous les cas, le nombre obtenu à l'arrivée est un nombre pair.
{{< /brevet-exo >}}

{{< brevet-exo num="2" source="DNB Juin 2022 Métropole" >}}
---INTRO---
Dans cet exercice, $x$ est un nombre strictement supérieur à 3.<br><br>
On s'intéresse aux deux figures géométriques dessinées ci-dessous :
<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>un rectangle dont les côtés ont pour longueurs $x-3$ et $x+7$ ;</li><li>un carré de côté $x$.</li></ul>
<img src="/mabemat/figures/3e/chapitre-01/2-1.svg" alt="Rectangle et carré" style="display:block; margin:1rem auto; max-height:160px; max-width:100%;">
---Q---
Quatre propositions sont écrites ci-dessous.<br><br>
Recopier sur la copie celle qui correspond à l'aire du carré. On ne demande pas de justifier.
<table style="border-collapse:collapse;margin:1rem auto;font-size:1em;">
<tr>
<td style="border:1px solid #8B3C52;padding:8px 28px;text-align:center;">$4x$</td>
<td style="border:1px solid #8B3C52;padding:8px 28px;text-align:center;">$4+x$</td>
<td style="border:1px solid #8B3C52;padding:8px 28px;text-align:center;">$x^2$</td>
<td style="border:1px solid #8B3C52;padding:8px 28px;text-align:center;">$2x$</td>
</tr>
</table>
---CORR---
L'aire d'un carré de côté $x$ est égale à $x^2$.
---Q---
Montrer que l'aire du rectangle est égale à $x^2+4x-21$.
---CORR---
Les dimensions du rectangle sont $x-3$ et $x+7$, donc son aire vaut $(x-3)(x+7)$. Développons cette expression :
$$\begin{aligned}
(x-3)(x+7) &= x^2+7x-3x-21 \\
(x-3)(x+7) &= x^2+4x-21
\end{aligned}$$
L'aire du rectangle est donc bien égale à $x^2+4x-21$.
---Q---
On a écrit le script ci-dessous dans Scratch. On veut que ce programme renvoie l'aire du rectangle lorsque l'utilisateur a rentré une valeur de $x$ (strictement supérieure à 3).<br><br>
Écrire sur la copie les contenus des trois cases vides des lignes 5, 6 et 7, en précisant les numéros de lignes qui correspondent à vos réponses.
<img src="/mabemat/figures/3e/chapitre-01/2-2.svg" alt="Script Scratch à compléter" style="display:block; margin:1rem auto; max-height:240px; max-width:100%;">
---CORR---
L'aire du rectangle vaut $x^2+4x-21$. Après la ligne 4, la variable R contient $x \times x$, c'est-à-dire $x^2$ : il reste à ajouter $4 \times x$, puis $-21$, avant d'afficher R.
<img src="/mabemat/figures/3e/chapitre-01/2-3.svg" alt="Script Scratch complété" style="display:block; margin:1rem auto; max-height:240px; max-width:100%;">
---Q---
On a pressé la touche espace puis saisi le nombre 8. Que renvoie le programme ?
---CORR---
Lorsque $x=8$, l'aire du rectangle vaut $(8-3)(8+7) = 5 \times 15 = 75$. Le programme renvoie donc 75.<br><br>
On peut aussi suivre le script ligne par ligne :
<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>à la ligne 3, $x$ devient égal à 8 ;</li><li>à la ligne 4, R devient égal à $8 \times 8 = 64$ ;</li><li>à la ligne 5, on ajoute $4 \times 8 = 32$ à R, qui devient égal à 96 ;</li><li>à la ligne 6, on ajoute $-21$ à R, qui devient égal à $96-21 = 75$ ;</li><li>ce résultat est affiché à la ligne 7.</li></ul>
---Q---
Quel nombre $x$ doit-on choisir pour que l'aire du rectangle soit égale à l'aire du carré ?<br><br>
<em>Toute trace de recherche, même non aboutie, sera prise en compte.</em>
---CORR---
Pour que l'aire du rectangle soit égale à celle du carré, il faut que :
$$\begin{aligned}
x^2+4x-21 &= x^2 \\
4x-21 &= 0 \\
4x &= 21 \\
x &= 5{,}25
\end{aligned}$$
On a soustrait $x^2$ aux deux membres, puis ajouté 21 aux deux membres, puis divisé les deux membres par 4.<br><br>
Pour que l'aire du rectangle soit égale à celle du carré, il faut donc choisir le nombre $5{,}25$.
{{< /brevet-exo >}}

{{< brevet-exo num="3" source="DNB Juin 2022 Polynésie" >}}
---INTRO---
On considère le programme de calcul suivant :

<img src="/mabemat/figures/3e/chapitre-01/3-1.svg" alt="Programme de calcul" style="display:block; margin:1rem auto; max-height:320px; max-width:100%;">
---Q---
---SUB-Q---
Si on choisit le nombre 7, vérifier qu'on obtient 49 à la fin du programme.
---SUB-CORR---
$(7 + 5) \times (7 - 5) + 25 = 12 \times 2 + 25 = 24 + 25 = 49$.<br><br>
Avec 7 au départ, on obtient bien 49 à la fin du programme.
---SUB-Q---
Si on choisit le nombre $-4$, quel résultat obtient-on à la fin du programme ?
---SUB-CORR---
$(-4 + 5) \times (-4 - 5) + 25 = 1 \times (-9) + 25 = -9 + 25 = 16$.<br><br>
Avec $-4$ au départ, on obtient 16 à la fin du programme.
---Q---
On note $x$ le nombre choisi au départ.
---SUB-Q---
Exprimer en fonction de $x$ le résultat obtenu.
---SUB-CORR---
Le résultat obtenu est $(x + 5)(x - 5) + 25$.
---SUB-Q---
Développer et réduire $(x + 5)(x - 5)$.
---SUB-CORR---
$$\begin{aligned}
(x + 5)(x - 5) &= x^2 - 5x + 5x - 25 \\
(x + 5)(x - 5) &= x^2 - 25
\end{aligned}$$
---SUB-Q---
Sarah dit : « Avec ce programme de calcul, quel que soit le nombre choisi au départ, le résultat obtenu est toujours le carré du nombre de départ. »<br><br>
Qu'en pensez-vous ?
---SUB-CORR---
D'après le calcul précédent : $(x + 5)(x - 5) + 25 = x^2 - 25 + 25 = x^2$.<br><br>
Le résultat obtenu est bien toujours le carré du nombre choisi au départ : Sarah a raison.
{{< /brevet-exo >}}
