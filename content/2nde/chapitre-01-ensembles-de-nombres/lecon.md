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

<ul>
<li>0,125 est un nombre rationnel : son écriture décimale comporte un nombre fini de décimales.</li>
<li>$\dfrac{127}{11} = 11,545454...$ est un nombre rationnel : l'écriture décimale comporte une période.</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">1.1.2 Inclusions</h3>

<div class="environment propriete">
<div class="environment-title">Propriété : $ $</div>
<div class="environment-content">
<ul>
<li>$\mathbb{N}$ est inclus dans $\mathbb{Z}$ : $\mathbb{N} \subset \mathbb{Z}$</li>
<li>$\mathbb{Z}$ est inclus dans $\mathbb{D}$ : $\mathbb{Z} \subset \mathbb{D}$</li>
<li>$\mathbb{D}$ est inclus dans $\mathbb{Q}$ : $\mathbb{D} \subset \mathbb{Q}$</li>
<li>$\mathbb{Q}$ est inclus dans $\mathbb{R}$ : $\mathbb{Q} \subset \mathbb{R}$</li>
</ul>
Ou encore :
$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{D} \subset \mathbb{Q} \subset \mathbb{R}$$

<img src="/mabemat/figures/2nde/chapitre-01/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:top; width:calc(100%); max-height:200px; max-width:100%;">

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
<th>Réprésentation sur une droite graduée</th>
<th>Intervalles bornées</th>
</tr>
<tr>
<td>$a {\color{#4A5D7A}{\leq}} x   {\color{violet}{\leq}} b $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig2.svg" alt="figure 2" style="max-height:200px; max-width:100%;"></td>
<td>${\color{#4A5D7A}{\big[}} a \mathpunct{} ; b {\color{violet}{\big]}} $</td>
</tr>
<tr>
<td>$a {\color{YellowGreen}{<}} x   {\color{#EA8556}{<}} b $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig3.svg" alt="figure 3" style="max-height:200px; max-width:100%;"></td>
<td>${\color{YellowGreen}{\big]}} a \mathpunct{} ; b {\color{#EA8556}{\big[}} $</td>
</tr>
<tr>
<td>$a {\color{#4A5D7A}{\leq}} x   {\color{#EA8556}{<}} b $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig4.svg" alt="figure 4" style="max-height:200px; max-width:100%;"></td>
<td>${\color{#4A5D7A}{\big[}} a \mathpunct{} ; b {\color{#EA8556}{\big[}} $</td>
</tr>
<tr>
<td>$a {\color{YellowGreen}{<}} x   {\color{violet}{\leq}} b $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig5.svg" alt="figure 5" style="max-height:200px; max-width:100%;"></td>
<td>${\color{YellowGreen}{\big]}} a \mathpunct{} ; b {\color{violet}{\big]}} $</td>
</tr>
</table>
</div><div style="display:inline-block; vertical-align:top; width:calc(49% - 10px); margin:0 5px 5px 0;">
<table>
<tr>
<th>
Ensembles des réels $x$ tels que</th>
<th>Réprésentation sur une droite graduée</th>
<th>Intervalles non bornées</th>
</tr>
<tr>
<td>$a {\color{#4A5D7A}{\leq}} x   $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig6.svg" alt="figure 6" style="max-height:200px; max-width:100%;"></td>
<td>${\color{#4A5D7A}{\big[}} a \mathpunct{} ; +\infty {\color{black}{\big[}} $</td>
</tr>
<tr>
<td>$a {\color{YellowGreen}{<}} x   $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig7.svg" alt="figure 7" style="max-height:200px; max-width:100%;"></td>
<td>${\color{YellowGreen}{\big]}} a \mathpunct{} ; +\infty {\color{black}{\big[}}$</td>
</tr>
<tr>
<td>$ x   {\color{violet}{\leq}} b $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig8.svg" alt="figure 8" style="max-height:200px; max-width:100%;"></td>
<td>${\color{black}{\big]}} -\infty \mathpunct{} ; b {\color{violet}{\big]}} $</td>
</tr>
<tr>
<td>$ x   {\color{#EA8556}{<}} b $</td>
<td><img src="/mabemat/figures/2nde/chapitre-01/fig9.svg" alt="figure 9" style="max-height:200px; max-width:100%;"></td>
<td>${\color{black}{\big]}} -\infty \mathpunct{} ; b {\color{#EA8556}{\big[}} $</td>
</tr>
</table>
</div>

</div>
</div>

<div class="remarque">
<ul>
<li>Avec l'infini ($\infty$), le crochet est toujours "ouvert".</li>
<li>$1 \in \left[ -2 ; 3\right ]$</li>
<li>$4 \notin \left[ -2 ; 3\right ]$</li>
<li>$1 \notin \left[ -2 ; 1\right [$</li>
</ul>
</div>

<div class="remarque">
Voici quelques notations très utiles. <br>
$$]-\infty \mathpunct{} ; +\infty [ =\R \qquad [ 0 \mathpunct{} ; +\infty [ = \R^+ \qquad ]-\infty \mathpunct{} ; 0 ] =\R^-$$
$$] 0 \mathpunct{} ; +\infty [ = \R^{\ast+} \qquad ]-\infty \mathpunct{} ; 0 [ =\R^{\ast-}$$

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

<ul style="column-count:2; column-gap:2rem;">
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
<ul style="column-count:2; column-gap:2rem;">
<li>$[-3\mathpunct{} ;4]\cup[4\mathpunct{} ;6]=[-3\mathpunct{} ;6]$</li>
<li>$]-\infty\mathpunct{} ;5]\cup[4\mathpunct{} ;10]=]-\infty\mathpunct{} ;10]$</li>
<li>$]-\infty\mathpunct{} ;1[\cup]1\mathpunct{} ;+\infty[=\R\setminus\{1\}$</li>
<li>$]-\infty\mathpunct{} ;0[\cup]0\mathpunct{} ;+\infty[=\R^\ast$</li>
</ul>

</div>
</div>

<br>
<img src="/mabemat/figures/2nde/chapitre-01/fig10.svg" alt="figure 10" style="display:inline-block; vertical-align:top; width:calc(32%); max-height:200px; max-width:100%;"><img src="/mabemat/figures/2nde/chapitre-01/fig11.svg" alt="figure 11" style="display:inline-block; vertical-align:top; width:calc(32%); max-height:200px; max-width:100%;">

<img src="/mabemat/figures/2nde/chapitre-01/fig12.svg" alt="figure 12" style="display:inline-block; vertical-align:top; width:calc(32%); max-height:200px; max-width:100%;">

<h2 class="subsection-title">1.3 Puissances, notation scientifique et arrondis</h2>

<h3 class="subsubsection-title">1.3.1 Puissances</h3>

<div class="environment definition">
<div class="environment-title">Définition : $ $</div>
<div class="environment-content">
<ul>
<li>Soit $a$ un nombre réel et $n\in \Z$, $n\geq 2$. <br>
Le produit $\underbrace{a\times ...\times a}_{n \text{ facteurs}}$ est une puissance de $a$. On la nomme $a$ puissance $n$ ou $a$ exposant $n$ et il se note : $$\underbrace{a\times ...\times a}_{n \text{ facteurs}}= a^n$$ <br>
<u>Cas particuliers</u> : $\quad\quad{\color{#8A9CC1}{\bullet}}\quad a^0=1$ avec $(a\neq 0)$ $\quad\quad\quad\quad$ ${\color{#8A9CC1}{\bullet}} \quad a^1=a$
</li>
<li>Soit $a$ un nombre réel non nul $(a\neq 0)$ et $n$ un nombre entier.<br>
$a^{-n}$ désigne l'inverse de $a^n$ et donc :
$$a^{-n}=\dfrac{1}{a^n}$$
<u>Cas particulier</u> : $\quad a^{-1}=\dfrac{1}{a^1}=\dfrac{1}{a}$. C'est donc l'inverse de $a$.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">

<ul style="column-count:2; column-gap:2rem;">
<li>$3^4=3\times 3 \times 3 \times 3=81$</li>
<li>$(-2)^3=(-2) \times (-2)\times (-2)=-8$</li>
<li>$(-12)^2=(-12)\times(-12)=144$</li>
<li>$10^5=10 \times 10 \times 10 \times 10 \times 10=100000$</li> <br>
<li>$2^{-4}=\dfrac{1}{2^4}=\dfrac{1}{16}$</li>
<li>$(-5)^{-2}=\dfrac{1}{(-5)^2}=\dfrac{1}{25}$</li>
<li>$10^{-3}=\dfrac{1}{10^3}=\dfrac{1}{1000}=0,001$</li>
</ul>

</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $a,b$ des réels différents de zéro $(a,b \in \R^\ast)$ et $m,n$ des entiers relatifs$(m,n \in \Z)$ alors : 

<ul style="column-count:2; column-gap:2rem;">
<li>$a^m\times a^n=a^{m+n}$</li>
<li>$\dfrac{a^m}{a^n}=a^{m-n}$</li> <br>
<li>$(a\times b)^n=a^n\times b^n$</li>
<li>$(a^m)^n=a^{m\times n}$</li>
</ul>

</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">

<ul style="column-count:2; column-gap:2rem;">
<li>$3^2\times 3^3=3^{2+3}=3^5$</li>
<li>$\dfrac{10^3}{10^2}={10}^{3-2}=10$</li> <br>
<li>$(2\times x)^{3}=2^3\times x^3=8\times x^3$</li>
<li>$(10^3)^2=10^{3\times 2}=10^6=1000000$</li>
<li>$5^6\times 9^6=(5\times 9)^6=45^6$</li>
</ul>

</div>
</div>

<div class="remarque">

<ul style="column-count:2; column-gap:2rem;">
<li>$(3x)^2=(3x)\times (3x)=3^2\times x^2=9x^2$</li>
<li>$3x^2=3\times x\times x$</li>
<li>$(-x)^2=(-x)\times (-x)=(-1)^2\times x^2=x^2$</li>
<li>$-x^2=-(x\times x)$</li>
</ul>

</div>

<h3 class="subsubsection-title">1.3.2 Notation scientifique</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La notation scientifique d'un nombre décimal différent de zéro est l'unique écriture de la forme : 
$$\pm a\times 10^n \text{ avec } \left\{
\begin{array}{ll}
1\leq a <  10  & \\
n\in \Z  & 
\end{array}
\right.
$$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">

<ul style="column-count:2; column-gap:2rem;">
<li>$823 951=8,239 51\times 10^{5}$</li>
<li>$-10 500=-1,05\times 10^{4}$</li>
<li>$0, 123 456=1,234 56\times 10^{-1}$</li>
<li>$-0,000 123=-1,23\times 10^{-4}$</li>
</ul>

</div>
</div>

<h2 class="subsection-title">1.4 Équations et inéquations</h2>

<h3 class="subsubsection-title">1.4.1 Équations de degré 1</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Une <strong>équation d'inconnue $x$</strong> est une <strong>égalité</strong> qui peut être vraie pour certaines valeurs de $x$ et fausse pour d'autres.<br>
<strong>Résoudre dans $\mathbb{R}$ une équation</strong> d'inconnue $x$, c'est trouver toutes les valeurs possibles de $x$ telles que l'égalité soit vérifiée. 
On détermine ainsi <strong>l'ensemble des solutions</strong> (noté $S$).
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
Résoudre dans $\mathbb{R}$ les équations suivantes : <br>

<div class="math-display" style="display:inline-block; vertical-align:top; width:calc(32% - 10px); margin:0 5px 5px 0;">
$$
\begin{align*}
3 + x &= -7 \\
3 + x -3 &= -7-3 \\
x  &= -10 
\end{align*}
$$
</div><div class="math-display" style="display:inline-block; vertical-align:top; width:calc(32% - 10px); margin:0 5px 5px 0;">
$$
\begin{align*}
-4x&=7 \\
\dfrac{-4x}{-4}&=\dfrac{7}{-4} \\
x&=-\dfrac{7}{4}
\end{align*}
$$
</div><div class="math-display" style="display:inline-block; vertical-align:top; width:calc(32% - 10px); margin:0 5px 5px 0;">
$$
\begin{align*}
3x+7&=5(x - 4) \\
3x+7&=5x - 20 \\
3x+7-3x&=5x - 20 -3x\\
7&=2x - 20 \\
27&=2x\\
\dfrac{27}{2}&=x
\end{align*}
$$
</div>

</div>
</div>

<h3 class="subsubsection-title">1.4.2 Inégalités</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soient $a,b,$ et $c$ des réels,
<ul>
<li>Si $a\leq b$ $\textcolor{#4A5D7A}{(\text{respectivement } a\geq b)}$ alors $a\color{#EA8556}{+c}\leq b\color{#EA8556}{+c}$ $\textcolor{#4A5D7A}{(\text{respectivement } a\color{#EA8556}{+c}\geq b\color{#EA8556}{+c})}$.</li>
<li>Si $a\leq b$ $\textcolor{#4A5D7A}{(\text{respectivement } a\geq b)}$ alors $a\color{#EA8556}{-c}\leq b\color{#EA8556}{-c}$ $\textcolor{#4A5D7A}{(\text{respectivement } a\color{#EA8556}{-c}\geq b\color{#EA8556}{-c})}$.</li>
</ul>
Autrement dit, si on ajoute ou soustrait un même nombre aux deux membres d'une inégalité, on ne change pas l'ordre de cette inégalité.
</div>
</div>


<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soient $a,b,$ et $c$ des réels,
<table>
<tr>
<th></th>
<th>$c{\color{#EA8556}{>0}}$</th>
<th>$c{\color{#EA8556}{<0}}$</th>
</tr>

<tr>
<td>$a\leq b$</td>
<td>$a{\color{#4A5D7A}{\times c}}\leq b{\color{#4A5D7A}{\times c}}$<br>$\dfrac{a}{\color{#4A5D7A}{c}}\leq\dfrac{b}{\color{#4A5D7A}{c}}$</td>
<td>$a{\color{#4A5D7A}{\times c}}{\color{#EA8556}{\geq}}b{\color{#4A5D7A}{\times c}}$<br>$\dfrac{a}{\color{#4A5D7A}{c}}{\color{#EA8556}{\geq}}\dfrac{b}{\color{#4A5D7A}{c}}$</td>
</tr>

<tr>
<td>$a\geq b$</td>
<td>$a{\color{#4A5D7A}{\times c}}\geq b{\color{#4A5D7A}{\times c}}$<br>$\dfrac{a}{\color{#4A5D7A}{c}}\geq\dfrac{b}{\color{#4A5D7A}{c}}$</td>
<td>$a{\color{#4A5D7A}{\times c}}{\color{#EA8556}{\leq}}b{\color{#4A5D7A}{\times c}}$<br>$\dfrac{a}{\color{#4A5D7A}{c}}{\color{#EA8556}{\leq}}\dfrac{b}{\color{#4A5D7A}{c}}$</td>
</tr>
</table>

Autrement dit,
<ul>
<li>Si on multiplie ou divise les deux membres d'une inégalité par un même nombre positif on ne change pas l'ordre de cette inégalité.</li>
<li>Si on multiplie ou divise les deux membres d'une inégalité par un même nombre négatif <strong>on change l'ordre</strong> de l'inégalité.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>$7\geq4$ alors $7\times 3\geq 4\times 3$. On a : $21>12$.</li>
<li>$7\geq 4$ alors $7\times{\color{#EA8556}{(-3)}}\;{\color{#EA8556}{\leq}}\;4\times{\color{#EA8556}{(-3)}}$. On a : $-21\leq -12$.</li>
</ul>
</div>
</div>


<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soient $a,b,c$ et $d$ quatre réels. 
<ul>
<li>Si $a\leq b$ et $c\leq d$ alors $a+c\leq b+d$.</li>
<li>Si $a\geq b$ et $c\geq d$ alors $a+c\geq b+d$.</li>
</ul>
</div>
</div>

<div class="remarque">
Toutes ces propriétés restent vraies avec des inégalités strictes ($>,<$).
</div>

<h3 class="subsubsection-title">1.4.3 Inéquations</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Une <strong>inéquation d'inconnue $x$</strong> est une <strong>inégalité</strong> qui peut être vraie pour certaines valeurs de $x$
et fausse pour d'autres.
<strong>Résoudre dans $\mathbb{R}$ une inéquation</strong> d'inconnue $x$, c'est trouver toutes les valeurs possibles de
$x$ telles que l'inégalité soit vérifiée.
On détermine ainsi <strong>l'ensemble des solutions</strong> (noté $S$).
</div>
</div>


<div class="environment exemple">
<div class="environment-title">Exemple :</div>
<div class="environment-content">
<table style="width:100%; table-layout:fixed; border-collapse:collapse; border:none;">
<tr style="border:none;">
<td style="width:50%; border:none; border-right:1px solid #EA8556;">Résoudre dans $\R$ : $4x+5\leq 21$</td>
<td style="width:50%; border:none;">Résoudre dans $\R$ : $-5x+7< 28$</td>
</tr>

<tr style="border:none;">
<td style="border:none; border-right:1px solid #EA8556;">
$4x+5{\color{#EA8556}{-5}}\leq 21{\color{#EA8556}{-5}}$<br>
$4x\leq 16$
</td>
<td style="border:none;">
$-5x+7{\color{#EA8556}{-7}}<28{\color{#EA8556}{-7}}$<br>
$-5x<21$
</td>
</tr>

<tr style="border:none;">
<td style="border:none; border-right:1px solid #EA8556;">$4>0$, l'ordre de l'inégalité est conservé</td>
<td style="border:none;">$-5<0$, l'ordre de l'inégalité est changé</td>
</tr>

<tr style="border:none;">
<td style="border:none; border-right:1px solid #EA8556;">$\dfrac{4x}{\color{#EA8556}{4}}\leq\dfrac{16}{\color{#EA8556}{4}}$</td>
<td style="border:none;">$\dfrac{-5x}{\color{#EA8556}{-5}}{\color{#EA8556}{>}}\dfrac{21}{\color{#EA8556}{-5}}$</td>
</tr>

<tr style="border:none;">
<td style="border:none; border-right:1px solid #EA8556;">$x\leq 4$.</td>
<td style="border:none;">$x>-\dfrac{21}{5}$.</td>
</tr>

<tr style="border:none;">
<td style="border:none; border-right:1px solid #EA8556;">L'ensemble des solutions est donc : $S=]-\infty;4]$.</td>
<td style="border:none;">L'ensemble des solutions est donc : $S=\left]-\dfrac{21}{5};+\infty\right[$.</td>
</tr>
</table>

</div>
</div>
