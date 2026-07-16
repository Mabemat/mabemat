---
title: "Leçon complète"
---

<h2 class="subsection-title">1.1 Différents types de nombres</h2>

<h3 class="subsubsection-title">1.1.1 Notations</h3>

<div class="environment definition">
<div class="environment-title">Définition </div>
<div class="environment-content">

<table>
<tr>
<th>

<strong>Ensembles de nombres</strong></th>
<th><strong>Notation</strong></th>
<th><strong>Définition</strong></th>
<th><strong>Exemples</strong></th>
</tr>
<tr>
<td>Nombres <strong>entiers naturels</strong></td>
<td>$\mathbb{N}$</td>
<td>Nombres entiers positifs ou nuls</td>
<td>0 ; 1 ; 2 ; 3 ; 4 ; 5</td>
</tr>
<tr>
<td>Nombres <strong>entiers relatifs</strong></td>
<td>$\mathbb{Z}$</td>
<td>Nombres entiers positifs ou négatifs ou nuls</td>
<td>-8 ; -3 ; 0 ; 1 ; 6</td>
</tr>
<tr>
<td>Nombres <strong>décimaux</strong></td>
<td>$\mathbb{D}$</td>
<td>Nombres de la forme $\dfrac{a}{10^n}$, $a \in \Z$ et $n \in \N$</td>
<td>$-2,1=-\dfrac{21}{10} \text{ }$ ; $\dfrac{2}{5}=\dfrac{4}{10}$ ; $5=\dfrac{5}{1}$</td>
</tr>
<tr>
<td>Nombres <strong>rationnels</strong></td>
<td>$\mathbb{Q}$</td>
<td>Nombres de la forme $\dfrac{a}{b}$, $a \in \Z$ et $b \in \N$, $b \neq 0$</td>
<td>$\dfrac{1}{3}$ ; $5=\dfrac{5}{1}$ ; $-2,1=-\dfrac{21}{10}$</td>
</tr>
<tr>
<td>Nombres <strong>réels</strong></td>
<td>$\mathbb{R}$</td>
<td>Tous les nombres connus en 2nde</td>
<td>$5$ ; $-8$ ; $-2,1=-\dfrac{21}{10}$ ; $\dfrac{1}{3}$ ; $\sqrt{2}$ ; $ \pi $</td>
</tr>
</table> 
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Un nombre rationnel est caractérisé soit par une écriture décimale ayant un nombre fini de décimales, soit par une écriture décimale comportant une suite de chiffres qui se répète (période).
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Justifier en quoi ces deux nombres sont des nombres rationnels.
<ul>
<li>0,125 est un nombre rationnel : son écriture décimale comporte un nombre fini de décimales.</li>
<li>$\dfrac{127}{11} = 11,545454...$ est un nombre rationnel : l'écriture décimale comporte une période (54).</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">1.1.2 Inclusions</h3>

<div class="environment propriete">
<div class="environment-title">Propriété : $ $</div>
<div class="environment-content">
<div style="display:flex; align-items:flex-start; gap:3%;">
<div style="flex:0 0 30%;">
<ul>
<li>$\mathbb{N}$ est inclus dans $\mathbb{Z}$ : $\mathbb{N} \subset \mathbb{Z}$</li>
<li>$\mathbb{Z}$ est inclus dans $\mathbb{D}$ : $\mathbb{Z} \subset \mathbb{D}$</li>
<li>$\mathbb{D}$ est inclus dans $\mathbb{Q}$ : $\mathbb{D} \subset \mathbb{Q}$</li>
<li>$\mathbb{Q}$ est inclus dans $\mathbb{R}$ : $\mathbb{Q} \subset \mathbb{R}$</li>
</ul>
Ou encore :
$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{D} \subset \mathbb{Q} \subset \mathbb{R}$$
</div>
<div style="flex:0 0 67%;">
<img src="/mabemat/figures/2nde/chapitre-01/fig1.svg?v=2" alt="figure 1" style="width:100%; max-height:220px; object-fit:contain;">
</div>
</div>
</div>
</div>

<h2 class="subsection-title">1.2 Intervalles</h2>

<h3 class="subsubsection-title">1.2.1 Intervalles de $\mathbb{R}$</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $a$ et $b$ deux nombres réels tels que $a &lt; b$. <br>

<div style="display:inline-block; vertical-align:top; width:calc(49% - 10px); margin:0 5px 5px 0;">
<table>
<tr>
<th>
Ensembles des réels $x$ tels que</th>
<th>Représentation sur une droite graduée</th>
<th>Intervalles bornés</th>
</tr>
<tr>
<td>$a {\color{#4A5D7A}{\leq}} x   {\color{violet}{\leq}} b $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig2.svg?v=2" alt="figure 2" style="max-height:200px; max-width:100%;"></td>
<td>${\color{#4A5D7A}{\big[}} a \mathpunct{} ; b {\color{violet}{\big]}} $</td>
</tr>
<tr>
<td>$a {\color{YellowGreen}{<}} x   {\color{#EA8556}{<}} b $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig3.svg?v=2" alt="figure 3" style="max-height:200px; max-width:100%;"></td>
<td>${\color{YellowGreen}{\big]}} a \mathpunct{} ; b {\color{#EA8556}{\big[}} $</td>
</tr>
<tr>
<td>$a {\color{#4A5D7A}{\leq}} x   {\color{#EA8556}{<}} b $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig4.svg?v=2" alt="figure 4" style="max-height:200px; max-width:100%;"></td>
<td>${\color{#4A5D7A}{\big[}} a \mathpunct{} ; b {\color{#EA8556}{\big[}} $</td>
</tr>
<tr>
<td>$a {\color{YellowGreen}{<}} x   {\color{violet}{\leq}} b $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig5.svg?v=2" alt="figure 5" style="max-height:200px; max-width:100%;"></td>
<td>${\color{YellowGreen}{\big]}} a \mathpunct{} ; b {\color{violet}{\big]}} $</td>
</tr>
</table>
</div><div style="display:inline-block; vertical-align:top; width:calc(49% - 10px); margin:0 5px 5px 0;">
<table>
<tr>
<th>
Ensembles des réels $x$ tels que</th>
<th>Représentation sur une droite graduée</th>
<th>Intervalles non bornés</th>
</tr>
<tr>
<td>$a {\color{#4A5D7A}{\leq}} x   $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig6.svg?v=2" alt="figure 6" style="max-height:200px; max-width:100%;"></td>
<td>${\color{#4A5D7A}{\big[}} a \mathpunct{} ; +\infty {\color{black}{\big[}} $</td>
</tr>
<tr>
<td>$a {\color{YellowGreen}{<}} x   $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig7.svg?v=2" alt="figure 7" style="max-height:200px; max-width:100%;"></td>
<td>${\color{YellowGreen}{\big]}} a \mathpunct{} ; +\infty {\color{black}{\big[}}$</td>
</tr>
<tr>
<td>$ x   {\color{violet}{\leq}} b $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig8.svg?v=2" alt="figure 8" style="max-height:200px; max-width:100%;"></td>
<td>${\color{black}{\big]}} -\infty \mathpunct{} ; b {\color{violet}{\big]}} $</td>
</tr>
<tr>
<td>$ x   {\color{#EA8556}{<}} b $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig9.svg?v=2" alt="figure 9" style="max-height:200px; max-width:100%;"></td>
<td>${\color{black}{\big]}} -\infty \mathpunct{} ; b {\color{#EA8556}{\big[}} $</td>
</tr>
</table>
</div>

</div>
</div>

<div class="remarque">
<ul>
<li>Avec l'infini ($\infty$), le crochet est toujours "ouvert".</li>
</ul>
<ul class="multicols-3">
<li>$1 \in \left[ -2 ; 3\right ]$</li>
<li>$4 \notin \left[ -2 ; 3\right ]$</li>
<li>$1 \notin \left[ -2 ; 1\right [$</li>
</ul>
</div>

<div class="remarque">
Voici quelques notations très utiles.
<ul class="multicols-5">
<li>$]-\infty \mathpunct{} ; +\infty [ =\R$</li>
<li>$[ 0 \mathpunct{} ; +\infty [ = \R^+$</li>
<li>$]-\infty \mathpunct{} ; 0 ] =\R^-$</li>
<li>$] 0 \mathpunct{} ; +\infty [ = \R^{\ast+}$</li>
<li>$]-\infty \mathpunct{} ; 0 [ =\R^{\ast-}$</li>
</ul>
</div>

<h3 class="subsubsection-title">1.2.2 Réunion et intersection d'intervalles</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
<strong>L'intersection</strong> de deux intervalles est l'ensemble des réels qui appartiennent à l'un <strong>et</strong> l'autre des intervalles. <br>
On la note $\cap$ .
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">

<ul class="multicols-2">
<li>$]-\infty\mathpunct{} ;5]\cap[2\mathpunct{} ;6]=[2\mathpunct{} ;5]$</li>
<li>$]-\infty\mathpunct{} ;5]\cap]2\mathpunct{} ;6]=]2\mathpunct{} ;5]$</li>
<li>$[-3\mathpunct{} ;4]\cap[4\mathpunct{} ;6]=\{4\}$</li>
<li>$[12\mathpunct{} ;56]\cap[-3\mathpunct{} ;0]=\emptyset$ (ensemble vide)</li>
</ul>

</div>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
<strong>La réunion</strong> de deux intervalles est l'ensemble des réels qui appartiennent à l'un <strong>ou</strong> l'autre des intervalles. <br>
On la note $\cup$ .
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
<ul class="multicols-2">
<li>$[-3\mathpunct{} ;4]\cup[4\mathpunct{} ;6]=[-3\mathpunct{} ;6]$</li>
<li>$]-\infty\mathpunct{} ;5]\cup[4\mathpunct{} ;10]=]-\infty\mathpunct{} ;10]$</li>
<li>$]-\infty\mathpunct{} ;1[\cup]1\mathpunct{} ;+\infty[=\R\setminus\{1\}$</li>
<li>$]-\infty\mathpunct{} ;0[\cup]0\mathpunct{} ;+\infty[=\R^\ast$</li>
</ul>

</div>
</div>

<br>
<div style="display:flex; gap:2%; align-items:flex-start;">
  <img src="/mabemat/figures/2nde/chapitre-01/fig10.svg?v=2" alt="figure 10"
       style="flex:1 1 0; min-width:0; max-height:100px; object-fit:contain;">
  <img src="/mabemat/figures/2nde/chapitre-01/fig11.svg?v=2" alt="figure 11"
       style="flex:1 1 0; min-width:0; max-height:100px; object-fit:contain;">
  <img src="/mabemat/figures/2nde/chapitre-01/fig12.svg?v=2" alt="figure 12"
       style="flex:1 1 0; min-width:0; max-height:100px; object-fit:contain;">
</div>

