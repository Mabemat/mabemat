---
title: "Exercices type brevet - Solides de l'espace"
layout: "brevet"
level: "3e"
chapter: "chapitre-11-solides-de-lespace"
has_brevetcorr: true
---


{{< brevet-exo num="1" source="DNB Novembre 2014 Amérique du sud" >}}
---INTRO---
<img src="/mabemat/figures/3e/chapitre-11/1-1.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:400px; max-width:100%;">

On considère le parallélépipède rectangle ABCDEFGH. <br>

M est un point de [FG] et N un point de [EF]. <br>

On donne : FE = 15&nbsp;cm ; FG = 10&nbsp;cm ; FB = 5&nbsp;cm ; FN = 4&nbsp;cm ; FM = 3&nbsp;cm. 

---Q---
Démontrer que l'aire du triangle FNM est égal à 6&nbsp;cm$^2$.
---CORR---
On est dans un parallélépipède rectangle, donc [FN] et [FM] sont perpendiculaires. <br>
L'aire du triangle rectangle FMN est donc égale à : 

$$\dfrac{\text{FN} \times \text{FM}}{2}  = \dfrac{4 \times 3}{2} = 6\text{ cm}^2$$
---Q---
Calculer le volume de la pyramide de sommet B et de base le triangle FNM. <br>

On rappelle que le volume d'une pyramide: $V = \dfrac{(B \times h)}{3}$ où $B$ est l'aire de la base et $h$ la hauteur de la pyramide.
---CORR---
Le volume  du prisme de base FMN et de hauteur [BF] est égale à 

$$\dfrac{1}{3} \times \mathcal{A}(\text{FMN}) \times \text{BF} = \dfrac{6 \times 5}{3} = 10\text{ cm}^3$$
---Q---
On considère le solide ABCDENMGH obtenu en enlevant la pyramide précédente au parallélépipède rectangle.
---SUB-Q---
Calculer son volume.
---SUB-CORR---
Le volume du parallélépipède ABCDEFGH est égal à $15 \times 10 \times 5 = 750\text{ cm}^3$.<br>

Donc le volume du solide ABCDENMGH est égal à $750 - 10 = 740\text{ cm}^3$.
---SUB-Q---
On appelle caractéristique d'Euler d'un solide le nombre $x$ tel que : 

$$x =  \text{nombre de faces} - \text{nombre d'arêtes}  + \text{nombre de sommets}$$ 

Recopier et compléter le tableau suivant:
<br>
<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Parallélépipède ABCDEFGH</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Solide ABCDENMGH</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Nombre de faces</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Nombre d'arêtes</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Nombre de sommets</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Caractéristique $x$</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
</table>
<br>
---SUB-CORR---
<br>
<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Parallélépipède ABCDEFGH</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Solide ABCDENMGH</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Nombre de faces</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">6</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">7</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Nombre d'arêtes</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">12</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">14</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Nombre de sommets</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">8</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">9</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Caractéristique $x$</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">2</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">2</td>
</tr>
</table>
<br>
{{< /brevet-exo >}}











{{< brevet-exo num="2" source="DNB Décembre 2024 Amérique du sud" >}}
---INTRO---

On dispose d'un terrain en pente sur lequel on souhaite construire une maison. Il faut pour cela enlever de la terre afin d'obtenir un terrain horizontal.<br>
On dispose des informations suivantes :

<div style="display:flex; align-items:flex-start; gap:20px;">

  <!-- TEXTE À GAUCHE -->
  <div style="flex:1;">
  <br><br>
    La maison sera construite sur le terrain horizontal représenté par le segment [BC]. <br>
    Le triangle ABC est rectangle en C et : <br>
    AC = 2,6 m <br>
    AB = 17 m
  </div>

  <!-- IMAGE À DROITE -->
  <div style="flex:1; text-align:right;">
    <img src="/mabemat/figures/3e/chapitre-11/2-1.png"
         alt="figure 1"
         style="max-height:400px; max-width:100%;">
  </div>

</div>

---Q---
Justifier que la longueur CB est égale à 16,8 m.
---CORR---
Le théorème de Pythagore appliqué au triangle ABC rectangle en C s'écrit <br>
$\text{AB}^2 = \text{AC}^2 + \text{CB}^2$, d'où <br>

$\text{CB}^2 = \text{AB}^2 - \text{AC}^2 = 17^2 - 2,6^2 = (17 - 2,6) \times (17 + 2,6) = 14,4 \times 19,6 = 282,24$.<br>

Il en résulte que CB $ = \sqrt{282,24} = 16,8$&nbsp;(m).
---Q---
Le coût des travaux pour enlever la terre dépend de la mesure de l'angle $\widehat{\text{ABC}}$.<br>
Si la mesure de l'angle $\widehat{\text{ABC}}$ est supérieure à $8,5$ °, cela entraînera un surcoût des travaux (c'est-à-dire que les travaux pour enlever la terre coûteront plus cher).<br>

Est-ce le cas pour ce terrain?
---CORR---
En utilisant par exemple la tangente, on a :
$$\tan\, \widehat{\text{ABC}} = \dfrac{\text{AC}}{\text{BC}} = \dfrac{2,6}{16,8}\approx 0{,}1548$$

La calculatrice donne $\widehat{\text{ABC}} \approx 8,797~$° donc une mesure supérieure à $8,5$ ° : il y aura surcoût.
---Q---
On admet que le volume de terre enlevée correspond au volume du prisme droit CBAFED de hauteur [CF] et de bases triangulaires ACB et DFE, comme représenté ci-dessous.<br>
 On rappelle que les longueurs CF et AD sont égales.

Déterminer le volume de terre à enlever en m$^3$.<br>

<img src="/mabemat/figures/3e/chapitre-11/2-2.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:400px; max-width:100%;">


On rappelle la formule:<br>

Volume d'un prisme droit = aire d'une base du prisme $\times$ hauteur du prisme.

---CORR---
Le volume de terre à enlever est donc égal à :<br>

$V = \mathcal{A}(\text{ABC}) \times \text{AD} = \dfrac{\text{AC} \times \text{CB}}{2} 
\times \text{AD} = \dfrac{2,6 \times 16,8}{2} 
\times 30 = 2,6 \times 16,8 \times 15 = 655,2$&nbsp;m$^3$

{{< /brevet-exo >}}

{{< brevet-exo num="3" source="DNBPRO Septembre 2024 Métropole" >}}
---INTRO---
Gabin installe une cuve de récupération d'eau pour arroser son potager. Cette cuve est
représentée sur la figure 1 ci-dessous par le pavé droit ABCDIJGH. <br>
La figure 2 représente une vue de côté de l'installation.<br>
La cuve est protégée par le toit rectangulaire incliné FKLE.
<img src="/mabemat/figures/3e/chapitre-11/3-1.png" alt="figure 1" style="display:block; margin:0 auto; max-height:400px; max-width:100%;">

---Q---
Indiquer sur la copie la nature géométrique du solide EDFKLI en choisissant parmi les noms suivants :<br>

$\bullet~$ cube <br>
$\bullet~$ triangle <br>
$\bullet~$ prisme droit  <br>
$\bullet~$ cylindre&nbsp;
---CORR---
Le solide EDFKLI est un prisme droit.
---Q---
On considère le triangle EDF rectangle en D représenté sur la figure 2.<br>

En utilisant le théorème de Pythagore, vérifier que la longueur DF arrondie au dixième est $3,9$&nbsp;m.
---CORR---
On considère le triangle EDF rectangle en D représenté sur la figure 2.<br>

D'après le théorème de Pythagore dans  le triangle EDF rectangle en D, on a : $\text{EF}^2 = \text{ED}^2 + \text{DF}^2$ <br>

D'après la figure: $\text{EF}=4,6$ et $\text{ED}=2,5$.<br>

Donc $4,6^2 = 2,5^2 + \text{DF}^2$ donc $\text{DF}^2 =4,6^2-2,5^2=14,91$.<br>

$\text{DF}^2 = \sqrt{14,91}\approx 3,9$<br>

Donc la longueur DF arrondie au dixième est $3,9$&nbsp;m.
---Q---
Calculer, en mètre, la longueur AD.
---CORR---
Les points D, A et F sont alignés dans cet ordre donc $\text{DA} + \text{AF}  = \text{DF}$.<br>

Donc: $\text{AD} =\text{DF} -\text{AF} =3,9 - 1,5=2,4$; la longueur AD mesure $2,4$&nbsp;m.
---Q---
Les droites (AB) et (DC) sont parallèles.<br>

Montrer, en utilisant le théorème de Thalès, que la longueur AB arrondie à l'unité est égale à 1&nbsp;m.
---CORR---
Les droites (AB) et (DC) sont parallèles.<br>

On utilise le théorème de Thalès dans les triangles FAB et FDE:<br>

$\dfrac{\text{AB}}{\text{DE}} = \dfrac{\text{FA}}{\text{FD}}$<br>
Donc
$\dfrac{\text{AB}}{\text{2,5}} = \dfrac{1,6}{3,9}$<br>
Donc
$ \text{AB} = \dfrac{1,6\times 2,5}{3,9} \approx 1,03$<br>

On déduit que la longueur AB arrondie à l'unité est égale à 1&nbsp;m.
---Q---
Calculer, en mètre cube $\left(\text{m}^3\right)$, le volume du solide ABCDIJGH.


---CORR---
Le  solide ABCDIJGH a pour dimensions $\text{AB}=1$, $\text{AC}= 2,4$ et  $\text{DI}= \text{EL} =4,0$. <br>
 
Son volume est donc, en m$^3$, de: $1\times 2,4\times 4,0=9,6$.
---Q---
En déduire le volume, en litre, du récupérateur d'eau.


---CORR---
1 m$^3 = 1\,000$&nbsp;L, donc le récupérateur d'eau contient 9&thinsp;600 litres.
{{< /brevet-exo >}}
