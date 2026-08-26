---
title: "Leçon complète"
---

<h2 class="subsection-title">10.1 Introduction à l'exponentielle</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
On admet qu'il existe une fonction dérivable sur $\R$ telle que $f'=f$ et $f(0) = 1$. 
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété : $ $</div>
<div class="environment-content">

<ul>
<li>La fonction $f$ ne s'annule jamais sur $\R$.</li>
<li>$f$ est unique. On appelle fonction exponentielle cette fonction. On la note $\exp$.</li>
</ul>
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
On appelle <strong>fonction exponentielle</strong> l'unique fonction dérivable sur $\R$ telle que $f' =f$ et $f(0) = 1$. <br>
On note cette fonction $\mathbf{\exp}$.
</div>
</div>

<div style="display:flex; gap:20px; align-items:flex-start;">

<div style="flex:1;">

<div class="environment propriete">
<div class="environment-title">Propriété : $ $</div>
<div class="environment-content">
<ul>
<li>$\exp(0)=1$</li>
<li>$\exp(-x)=\dfrac{1}{\exp(x)}$</li>
</ul>
</div>
</div>

<div class="remarque">
${\color{#B85C5C}{\bullet}} \quad$ Avec la calculatrice, il est possible d'observer l'allure de la courbe représentative de la fonction exponentielle.<br>
${\color{#B85C5C}{\bullet}} \quad$ Sa croissance est très rapide, ainsi $\exp(21)$ dépasse le milliard.
</div>

</div>

<div style="flex:1; text-align:center;">
<img src="/mabemat/figures/1re/chapitre-10/fig1.svg" alt="figure 1" style="max-height:300px; max-width:100%;">
</div>

</div>

On dresse le tableau de variations de la fonction exponentielle.
<div style="flex:1; text-align:center;">
<img src="/mabemat/figures/1re/chapitre-10/1.png" alt="figure 2" style="max-height:150px; max-width:100%;">
</div>

<h2 class="subsection-title">10.2 Propriété de la fonction exponentielle</h2>

<h3 class="subsubsection-title">10.2.1 Relation fonctionnelle</h3>

<div class="environment theoreme">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
Pour tout réel $x$ et $y$, on a $\exp(x+y)=\exp(x)\exp(y)$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La fonction exponentielle est strictement positive sur $\R$.
</div>
</div>

<h3 class="subsubsection-title">10.2.2 Propriétés algébriques de la fonction exponentielle</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $x$ et $y$, on a :
<ul>
<li>$\exp(x-y)=\dfrac{\exp(x)}{\exp(y)}$.</li>
<li>$\exp(nx)=\left(\exp(x)\right)^n$, avec $n\in \Z$.</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">10.2.3 Le nombre $e$</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
L'image de $1$ par la fonction exponentielle est notée $e$. On a ainsi $\exp(1)= e$ avec ($e \approx 2, 718281828$).
</div>
</div>

On note pour tout réel $x$, $\exp(x)=e^x$, on lit \og exponentielle $x$ \fg{}.<br>
Avec cette nouvelle notation, on peut ainsi résumer l'ensemble des propriétés de la fonction exponentielle :

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $x$ et $y$, on a :
<ul>
<li>$e^0=1$ et $e^1=e$.</li>
<li>$e^x>0$ et $(e^x)'=e^x$.</li>
<li>$e^{x+y}=e^xe^y$, $e^{x-y}=\dfrac{e^x}{e^y}$, $e^{-x}=\dfrac{1}{e^x}$, $(e^x)^n=e^{nx}$ avec $n\in \Z$.</li>
</ul>
</div>
</div>

<div class="remarque">
On retrouve les propriétés des puissances.
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
Simplifier les expressions suivantes.
<ul>
<li>$A=\dfrac{e^7\times e^{-4}}{e^{-5}}=\dfrac{e^{7-4}}{e^{-5}}=\dfrac{e^3}{e^{-5}}=e^{3-(-5)}=e^8$</li>
<li>$B=(e^5)^{-6}\times e^{-3}=e^{5\times (-6)}\times e^{-3}=e^{-30}\times e^{-3}=e^{-30-3}=e^{-33}$</li>
<li>$C=\dfrac{1}{(e^{-3})^2}+\dfrac{(e^4)^{-1}}{e^2\times e^{-6}}=\dfrac{1}{e^{-3\times 2}}+\dfrac{e^{4\times(-1)}}{e^{2-6}}=\dfrac{1}{e^{-6}}+\dfrac{e^{-4}}{e^{-4}}=e^6+1$</li>
</ul>
</div>
</div>

<h2 class="subsection-title">10.3 Étude de la fonction exponentielle</h2>

<h3 class="subsubsection-title">10.3.1 Sens de variation</h3>

<div class="environment propriete">
<div class="environment-title">Propriété : $ $</div>
<div class="environment-content">

<ul>
<li>La fonction exponentielle est dérivable sur $\R$ et $(e^x)'=e^x$.</li>
<li>La fonction exponentielle est strictement croissante sur $\R$.</li>
</ul>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Corollaire :</div>
<div class="environment-content">
Pour tout réel $a$ et $b$, on a : 

<ul style="column-count:2; column-gap:2rem;">
<li>$e^{a}=e^b \Leftrightarrow a=b$</li>
<li>$e^{a}$ &lt; $ e^b \Leftrightarrow a$ &lt; $b$ car $\exp$ est croissante sur $\R$.</li>
</ul>

</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
Résoudre dans $\R$ l'équation et l'inéquation suivantes.
<ul>
<li>$e^{x^2-3}-e^{-2x}=0$.
<br> $e^{x^2-3}-e^{-2x}=0\Leftrightarrow e^{x^2-3}=e^{-2x} \Leftrightarrow x^2-3=-2x \Leftrightarrow x^2+2x-3=0 \Leftrightarrow x=-3 \text{ ou } x=1$. <br> L'ensemble des solutions est $S=\{-3;1\}$.</li>
<li>$e^{-4x-1}\geq 1\Leftrightarrow e^{-4x-1}\geq e^0 \Leftrightarrow -4x-1 \geq 0  \Leftrightarrow x \leq \dfrac{-1}{4} \text { car } -4$ &lt; $0$. <br>L'ensemble des solutions est $S=]-\infty;\dfrac{-1}{4}]$.</li>
</ul>
</div>
</div>

<h2 class="subsection-title">10.4 Fonctions de la forme $e^{ax+b}$</h2>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $a$ et $b$ deux nombres réels. La fonction $f(x)= e^{ax+b}$ est dérivable sur $\R$.<br>
Sa dérivée est la fonction $(e^{ax+b})'=ae^{ax+b}$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Calculer la dérivée des fonctions suivantes.
<ul>
<li>Si $f(x)=e^{4x+3}$ alors $f'(x)=4e^{4x+3}$.</li>
<li>Si $g(x)=e^{-3x}$ alors $g'(x)=-3e^{-3x}$.
</li>
</ul>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $k$ un réel strictement positif.
<ul>
<li>$t\mapsto e^{kt}$ est strictement croissante sur $\R$ : c'est une croissance exponentielle.</li>
<li>$t\mapsto e^{-kt}$ est strictement décroissante sur $\R$ et tend vers $0$ : c'est une décroissance exponentielle.</li>
</ul>
Dans les deux cas la fonction reste strictement positive, et vaut $1$ en $t=0$.
</div>
</div>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; text-align:center;">

<div>
<img src="/mabemat/figures/1re/chapitre-10/exp-croissance.svg" alt="croissance exponentielle" style="max-height:240px; max-width:100%; margin:0.5em 0;"><br>
<small>Croissance exponentielle ($k>0$)</small>
</div>

<div>
<img src="/mabemat/figures/1re/chapitre-10/exp-decroissance.svg" alt="décroissance exponentielle" style="max-height:240px; max-width:100%; margin:0.5em 0;"><br>
<small>Décroissance exponentielle ($k>0$)</small>
</div>

</div>

<h2 class="subsection-title">10.5 Lien avec les suites géométriques</h2>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $k$ un réel et $f$ la fonction définie sur $\R$ par $f(t)=A\,e^{kt}$, où $A$ est un réel.<br>
Alors la suite $(u_n)$ définie par $u_n=f(n)$ est une <strong>suite géométrique</strong> de premier terme $A$ et de raison $q=e^{k}$.
</div>
</div>

<div class="remarque">
La fonction exponentielle est donc le <strong>prolongement continu</strong> d'une suite géométrique :
<ul>
<li>la suite géométrique modélise une évolution à taux constant en <strong>temps discret</strong> (année par année, jour par jour) ;</li>
<li>la fonction $t\mapsto A\,e^{kt}$ modélise la même évolution en <strong>temps continu</strong> (à tout instant).</li>
</ul>
Les points de la suite sont exactement les points de la courbe d'abscisses entières.<br>
Comme $e^k>0$, on retrouve aussi les variations : si $k>0$ alors $q=e^k>1$ et la suite croît ; si $k<0$ alors $0<q<1$ et la suite décroît vers $0$.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On modélise une population par $f(t)=500\,e^{0,2t}$, où $t$ est le temps en années. <br>
Déterminer le taux d'évolution annuel de cette population.<br>
La suite $u_n=f(n)$ est géométrique de raison $q=e^{0,2}\approx 1,221$.<br>
Autrement dit, la population augmente d'environ $22,1\%$ par an, et $u_0=500$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Une substance radioactive est modélisée par $m(t)=50\,e^{-0,13t}$, où $t$ est le temps en jours et $m$ la masse en grammes. <br>
Déterminer le taux d'évolution journalier de la masse.<br>
La suite $m_n=m(n)$ est géométrique de raison $q=e^{-0,13}\approx 0,878$.<br>
La masse diminue donc d'environ $12,2\%$ par jour : c'est une décroissance exponentielle, la masse tend vers $0$ sans jamais l'atteindre.
</div>
</div>
