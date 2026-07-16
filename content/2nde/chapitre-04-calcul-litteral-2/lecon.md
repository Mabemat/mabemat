---
title: "Leçon complète"
---

<h2 class="subsection-title">4.1 Équations</h2>

<h3 class="subsubsection-title">4.1.1 Équations de degré 1</h3>

<div class="environment definition">
<div class="environment-title">Définition</div>
<div class="environment-content">
Une <strong>équation d'inconnue $x$</strong> est une <strong>égalité</strong> qui peut être vraie pour certaines valeurs de $x$ et fausse pour d'autres.<br>
<strong>Résoudre dans $\mathbb{R}$ une équation</strong> d'inconnue $x$, c'est trouver toutes les valeurs possibles de $x$ telles que l'égalité soit vérifiée. On détermine ainsi <strong>l'ensemble des solutions</strong> (noté $S$).
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
Résoudre dans $\mathbb{R}$ les équations suivantes :
<div style="display:grid; grid-template-columns:repeat(3,1fr); gap:0.5rem 2rem; margin:0.8rem 0; align-items:start;">
<div>
$$\begin{align*} 3+x &=-7\\ 3+x-3 &=-7-3\\ x &=-10 \end{align*}$$
Donc $S=\{-10\}$.
</div>
<div>
$$\begin{align*} -4x &=7\\ \dfrac{-4x}{-4} &=\dfrac{7}{-4}\\ x &=-\dfrac{7}{4} \end{align*}$$
Donc $S=\left\{-\dfrac{7}{4}\right\}$.
</div>
<div>
$$\begin{align*} 3x+7 &=5(x-4)\\ 3x+7 &=5x-20\\ 3x+7-3x &=5x-20-3x\\ 7 &=2x-20\\ 27 &=2x\\ \dfrac{27}{2} &=x \end{align*}$$
Donc $S=\left\{\dfrac{27}{2}\right\}$.
</div>
</div>
</div>
</div>

<h3 class="subsubsection-title">4.1.2 Équation-produit</h3>

<div class="environment definition">
<div class="environment-title">Définition</div>
<div class="environment-content">
Toute équation du type $P(x) \times Q(x) = 0$, où $P(x)$ et $Q(x)$ sont des expressions algébriques, est appelée <strong>équation-produit</strong>.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété</div>
<div class="environment-content">
<ul>
<li>Dire qu'un produit de facteurs est nul, équivaut à dire que l'un au moins des facteurs est nul.</li>
<li>Le cas particulier de l'équation-produit $(ax+b)(cx+d)=0$ équivaut à $ax+b=0$ ou $cx+d=0$.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
Résoudre dans $\mathbb{R}$ les équations suivantes :
<ol>
<li>$(5+2x)(2-3x)=0$ donc soit :
<div>$$\begin{align*} 5+2x=0 \quad &\text{ou} \quad 2-3x=0\\ 2x=-5 \quad &\text{ou} \quad -3x=-2\\ x=\dfrac{-5}{2} \quad &\text{ou} \quad x=\dfrac{2}{3} \end{align*}$$</div>
<u>Vérification</u> : $5+2\times\dfrac{-5}{2}=5-5=0$ et $2-3\times\dfrac{2}{3}=2-2=0$. Donc $S=\left\{\dfrac{-5}{2};\dfrac{2}{3}\right\}$</li>

<li>$5x^2-4x=0$<br>
On commence par factoriser l'expression pour se ramener à une équation-produit :
<div style="display:flex; gap:2rem; align-items:flex-start; margin:0.3rem 0;">
<div style="flex:1;">$$\begin{align*} 5x^2-4x &=0\\ x(5x-4) &=0 \end{align*}$$</div>
<div style="flex:1;">$$\begin{align*} \text{Soit } x=0 \quad &\text{ou} \quad 5x-4=0\\ &\phantom{\text{ou}} 5x=4\\ &\phantom{\text{ou}} x=\dfrac{4}{5} \end{align*}$$</div>
</div>
<u>Vérification</u> : $5\times 0^2-4\times 0=0$ et $5\times\left(\dfrac{4}{5}\right)^2-4\times\dfrac{4}{5}=\dfrac{80}{25}-\dfrac{80}{25}=0$. Donc $S=\left\{0;\dfrac{4}{5}\right\}$</li>

<li>$(3x+1)(1-6x)-(3x+7)(3x+1)=0$<br>
On commence par factoriser l'expression pour se ramener à une équation-produit :
<div style="display:flex; gap:2rem; align-items:flex-start; margin:0.3rem 0;">
<div style="flex:3;">$$\begin{align*} &(3x+1)(1-6x)-(3x+7)(3x+1)=0\\ &(3x+1)\left[(1-6x)-(3x+7)\right]=0\\ &(3x+1)(1-6x-3x-7)=0\\ &(3x+1)(-9x-6)=0 \end{align*}$$</div>
<div style="flex:2;">$$\begin{align*} \text{Soit } 3x+1=0 \quad &\text{ou} \quad -9x-6=0\\ 3x=-1 \quad &\text{ou} \quad -9x=6\\ x=\dfrac{-1}{3} \quad &\text{ou} \quad x=\dfrac{6}{-9}=\dfrac{-2}{3} \end{align*}$$</div>
</div>
<u>Vérification</u> : $\left(3\times\dfrac{-1}{3}+1\right)\left(1-6\times\dfrac{-1}{3}\right)-\left(3\times\dfrac{-1}{3}+7\right)\left(3\times\dfrac{-1}{3}+1\right)=0$ et $\left(3\times\dfrac{-2}{3}+1\right)\left(1-6\times\dfrac{-2}{3}\right)-\left(3\times\dfrac{-2}{3}+7\right)\left(3\times\dfrac{-2}{3}+1\right)=0$. Donc $S=\left\{\dfrac{-1}{3};\dfrac{-2}{3}\right\}$</li>
</ol>
</div>
</div>

<h3 class="subsubsection-title">4.1.3 Équation-quotient</h3>

<div class="environment definition">
<div class="environment-title">Définition</div>
<div class="environment-content">
Toute équation du type $\dfrac{P(x)}{Q(x)}=0$, où $P(x)$ et $Q(x)$ sont des expressions algébriques (avec $Q(x)\neq 0$), est appelée <strong>équation-quotient</strong>.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété</div>
<div class="environment-content">
Pour tout $x$ qui n'annule pas l'expression $Q(x)$, l'équation-quotient $\dfrac{P(x)}{Q(x)}=0$ équivaut à $P(x)=0$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Résoudre dans $\mathbb{R}$ les équations suivantes :
<ol>
<li>$\dfrac{x+2}{x+3}=0$.<br>
<u>Valeur interdite</u> : le dénominateur $x+3$ s'annule quand $x+3=0$, soit $x=-3$.<br>
Pour $x\neq -3$, l'équation équivaut à :
<div>$$\begin{align*} x+2 &=0\\ x &=-2 \end{align*}$$</div>
On vérifie que $-2\neq -3$, donc $-2$ est bien dans le domaine de définition. Donc $S=\{-2\}$.</li>

<li>$\dfrac{3x+5}{x-1}=0$.<br>
<u>Valeur interdite</u> : le dénominateur $x-1$ s'annule quand $x-1=0$, soit $x=1$.<br>
Pour $x\neq 1$, l'équation équivaut à :
<div>$$\begin{align*} 3x+5 &=0\\ 3x &=-5\\ x &=-\dfrac{5}{3} \end{align*}$$</div>
On vérifie que $-\dfrac{5}{3}\neq 1$, donc $-\dfrac{5}{3}$ est bien dans le domaine de définition. Donc $S=\left\{-\dfrac{5}{3}\right\}$.</li>

<li>$\dfrac{(2x+1)(x-3)}{x-4}=0$.<br>
<u>Valeur interdite</u> : le dénominateur $x-4$ s'annule quand $x-4=0$, soit $x=4$.<br>
Pour $x\neq 4$, l'équation équivaut à $(2x+1)(x-3)=0$, soit :
<div>$$\begin{align*} 2x+1=0 \quad &\text{ou} \quad x-3=0\\ x=-\dfrac{1}{2} \quad &\text{ou} \quad x=3 \end{align*}$$</div>
On vérifie que $-\dfrac{1}{2}\neq 4$ et $3\neq 4$, donc les deux solutions sont dans le domaine de définition. Donc $S=\left\{-\dfrac{1}{2};3\right\}$.</li>
</ol>
</div>
</div>

<h2 class="subsection-title">4.2 Inégalités</h2>

<div class="environment propriete">
<div class="environment-title">Propriété</div>
<div class="environment-content">
Si on ajoute ou soustrait un même nombre aux deux membres d'une inégalité, on ne change pas l'ordre de cette inégalité.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
$4\leq 7$ alors $4+5\leq 7+5$ c'est-à-dire $9\leq 12$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété</div>
<div class="environment-content">
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
<li>$7\geq 4$ alors $7\times 3\geq 4\times 3$. On a : $21\geq 12$.</li>
<li>$7\geq 4$ alors $7\times (-3)\leq 4\times (-3)$. On a : $-21\leq -12$.</li>
</ul>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété</div>
<div class="environment-content">
Soient $a,b,c$ et $d$ quatre réels.
<ul>
<li>Si $a\leq b$ et $c\leq d$ alors $a+c\leq b+d$.</li>
<li>Si $a\geq b$ et $c\geq d$ alors $a+c\geq b+d$.</li>
</ul>
</div>
</div>

<div class="remarque">
Toutes ces propriétés restent vraies avec des inégalités strictes $(>,<)$.
</div>

<div class="environment methode">
<div class="environment-title">Méthode - Obtenir un encadrement.</div>
<div class="environment-content">
$x$ et $y$ désignent deux réels tels que $-3\leq x\leq 3$ et $1\leq y\leq 2$. Démontrer que $-19\leq 5x-2y\leq 13$.
<ul>
<li>$-3\leq x\leq 3$ et $5>0$, donc $5\times(-3)\leq 5x\leq 5\times 3$, soit $-15\leq 5x\leq 15$ &nbsp;&nbsp;(1).</li>
<li>$1\leq y\leq 2$ et $-2<0$, donc $(-2)\times 1\geq -2y\geq (-2)\times 2$, soit $-4\leq -2y\leq -2$ &nbsp;&nbsp;(2).</li>
</ul>
On additionne membre à membre les inégalités de même sens (1) et (2) :
$$-15+(-4)\leq 5x+(-2y)\leq 15+(-2), \text{ soit } -19\leq 5x-2y\leq 13.$$
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode - Comparer deux nombres à l'aide de leur différence.</div>
<div class="environment-content">
Démontrer que pour tout réel $x$, $x(6-x)\leq 9$.<br><br>
On calcule la différence :
$$9-x(6-x)=9-6x+x^2=x^2-6x+9=(x-3)^2.$$
Or pour tout réel $x$, $(x-3)^2\geq 0$, donc $9-x(6-x)\geq 0$, soit $x(6-x)\leq 9$.
</div>
</div>

<h2 class="subsection-title">4.3 Inéquations</h2>

<div class="environment definition">
<div class="environment-title">Définition</div>
<div class="environment-content">
Une <strong>inéquation d'inconnue $x$</strong> est une <strong>inégalité</strong> qui peut être vraie pour certaines valeurs de $x$ et fausse pour d'autres. <strong>Résoudre dans $\mathbb{R}$ une inéquation</strong> d'inconnue $x$, c'est trouver toutes les valeurs possibles de $x$ telles que l'inégalité soit vérifiée. On détermine ainsi <strong>l'ensemble des solutions</strong> (noté $S$).
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:grid; grid-template-columns:1fr 1fr; gap:0; border:1.5px solid #EA8556;">
<div style="padding:0.8rem; border-right:1.5px solid #EA8556;">
Résoudre dans $\mathbb{R}$ : $4x+5\leq 21$<br>
$4x+5{\color{#EA8556}{-5}}\leq 21{\color{#EA8556}{-5}}$<br>
$4x\leq 16$<br>
$4>0$, l'ordre de l'inégalité est conservé<br>
$\dfrac{4x}{{\color{#EA8556}{4}}}\leq\dfrac{16}{{\color{#EA8556}{4}}}$<br>
$x\leq 4.$<br><br>
L'ensemble des solutions est donc : $S=\left]-\infty;4\right]$.
</div>
<div style="padding:0.8rem;">
Résoudre dans $\mathbb{R}$ : $-5x+7<28$<br>
$-5x+7{\color{#EA8556}{-7}}<28{\color{#EA8556}{-7}}$<br>
$-5x<21$<br>
$-5<0$, l'ordre de l'inégalité est changé<br>
$\dfrac{-5x}{{\color{#EA8556}{-5}}}>\dfrac{21}{{\color{#EA8556}{-5}}}$<br>
$x>-\dfrac{21}{5}.$<br><br>
L'ensemble des solutions est donc : $S=\left]-\dfrac{21}{5};+\infty\right[$.
</div>
</div>
</div>
</div>
