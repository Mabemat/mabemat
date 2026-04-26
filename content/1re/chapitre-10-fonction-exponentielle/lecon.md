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

Démonstration. <br>
<ol>
<li>Soit la fonction $A$ définie sur $\R$ par $A(x)=f(x)f(-x)$.<br>
Pour tout réel $x$, on a : $A'(x)=f'(x)f(-x)-f'(-x)f(x)=f(x)f(-x)-f(-x)f(x)=0$.<br>
La fonction $A$ est donc constante. <br>
Comme $A(0)=f(0)f(-0)=1$, on a pour tout réel $x$, $f(x)f(-x)=1$, la fonction $f$ ne peut donc pas s'annuler.</li>
<li>Supposons qu'il existe une autre fonction $g$ qui vérifie les hypothèses du théorème (ie $g'=g$ et $g(0)=1$).<br>
Comme $f$ ne s'annule pas, on pose $h(x)=\dfrac{g(x)}{f(x)}$.<br>
Pour tout $x\in\R$, $h'(x)=\dfrac{g'(x)f(x)-g(x)f'(x)}{\left(f(x)\right)^2}=\dfrac{g(x)f(x)-g(x)f(x)}{\left(f(x)\right)^2}=0$.<br>
$h$ est donc une fonction constante.<br>
Or, $h(0)=\dfrac{g(0)}{f(0)}=\dfrac{1}{1}=1$, donc pour tout $x\in \R$, $h(x)=1$.<br>
Et donc pour tout $x\in \R$, $f(x)=g(x)$. L'unicité de $f$ est donc vérifiée.
</li>
</ol>
 

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

 Démonstration. <br>
Fixons $y$ constant et comme $\exp(x)\neq 0$, posons $g(x)=\dfrac{\exp(x+y)}{\exp(x)}$.<br>
Alors $g$ est dérivable sur $\R$ et $g'(x)=\dfrac{\exp'(x+y)\exp(x)-\exp'(x)\exp(x+y)}{(\exp(x))^2}=\dfrac{\exp(x+y)\exp(x)-\exp(x)\exp(x+y)}{(\exp(x))^2}=0$.<br>
Donc $g$ est constante égale à $c$. Or, $g(0)=\dfrac{\exp(y)}{\exp(0)}=\exp(y)=c$.<br>
D'où, $g(x)=\exp(y)=\dfrac{\exp(x+y)}{\exp(x)}$, ie $\exp(x+y)=\exp(x)\exp(y)$.
 

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La fonction exponentielle est strictement positive sur $\R$.
</div>
</div>

 Démonstration. <br>
Pour tout réel $x$ réel, $\exp(x)=\exp\left(\dfrac{x}{2}+\dfrac{x}{2}\right)=\exp\left(\dfrac{x}{2}\right)\times\exp\left(\dfrac{x}{2}\right)=\left[\exp\left(\dfrac{x}{2}\right)\right]^2$.<br>
La fonction exponentielle ne s'annule jamais sur $\R$, donc pour tout réel $x$, $\exp(x)>0$.
 

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

Démonstration. <br>
<ol>
<li>$\exp(x-y)=\exp(x+(-y))=\exp(x)\exp(-y)=\exp(x)\dfrac{1}{\exp(y)}=\dfrac{\exp(x)}{\exp(y)}$.</li>
<li>$\exp(nx)=\exp(\underbrace{x+x+\cdots+x}_{n \text{ fois}})=\underbrace{\exp(x)\times \exp(x)\times \cdots \times \exp(x)}_{n \text{ fois}}=\left(\exp(x)\right)^n$.</li>
</ol>
 

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
<div class="environment-title">Exemple</div>
<div class="environment-content">
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

Démonstration. <br>
<ol>
<li>C'est la définition même !</li>
<li>Comme $(e^x)'=e^x > 0$ pour tout $x$, la fonction exponentielle est strictement croissante sur $\R$.</li>
</ol>
 

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
<div class="environment-title">Exemple</div>
<div class="environment-content">
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
<ul>
<li>Si $f(x)=e^{4x+3}$ alors $f'(x)=4e^{4x+3}$.</li>
<li>Si $g(x)=e^{-3x}$ alors $g'(x)=-3e^{-3x}$.
</li>
</ul>
</div>
</div>
