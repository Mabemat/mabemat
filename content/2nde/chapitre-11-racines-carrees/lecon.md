---
title: "Leçon complète"
---

<h2 class="subsection-title">11.1 Calculs sur les racines carrées</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La racine carrée d'un nombre réel positif $a$ est l'unique réel positif dont le carré vaut $a$. <br> On la note $\sqrt{a}$ , et on a donc $\sqrt{a}\geq 0$ .
</div>
</div>

<div class="remarque">
<ul>
<li>Par définition, on a $\left(\sqrt{a}\right)^2=a$.</li>
<li>$\sqrt{-5}$ n'existe pas ! En effet, il n'existe aucun nombre dont le carré vaut $-5$.</li>
</ul>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:1rem;">
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{0}=0$</li>
</ul>
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{1}=1$</li>
</ul>
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{4}=2$</li>
</ul>
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{9}=3$</li>
</ul>
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{16}=4$</li>
</ul>
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{25}=5$</li>
</ul>
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{36}=6$</li>
</ul>
</div>
<div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:1rem; margin-top:1rem;">
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{49}=7$</li>
</ul>
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{64}=8$</li>
</ul>
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{81}=9$</li>
</ul>
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{100}=10$</li>
</ul>
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{121}=11$</li>
</ul>
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{144}=12$</li>
</ul>
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{169}=13$</li>
</ul>
</div>
</div>
</div>

<div class="remarque">
$\sqrt{2}\approx 1,4142$ et $\sqrt{3}\approx 1,732$ sont des nombres irrationnels.
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tous réels positifs $a$ et $b$, on a $\sqrt{ab}=\sqrt{a}\sqrt{b}$.
</div>
</div>

Démonstration. <br>
D'une part, $\left(\sqrt{a}\times \sqrt{b}\right)^2=\left(\sqrt{a}\right)^2\times \left(\sqrt{b}\right)^2=a\times b$ par définition de la racine carrée ($a$ et $b$ positifs).<br>
D'autre part, $\left(\sqrt{a\times b}\right)^2=a\times b$ par définition de la racine carrée ($a$ et $b$ positifs, donc $a\times b$ aussi).<br>
Donc, $\left(\sqrt{a}\times \sqrt{b}\right)^2=\left(\sqrt{a\times b}\right)^2$. <br>
Or, $\sqrt{a}\times \sqrt{b}$ et $\sqrt{a\times b}$ sont positifs et de carrés égaux, ils sont donc égaux.<br> Ainsi, $\sqrt{ab}=\sqrt{a}\sqrt{b}$.

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Réduire au maximum les nombres suivants :
<ul>
<li>$\sqrt{98}=\sqrt{49\times 2}=\sqrt{49}\times \sqrt{2}=7\sqrt{2}$.</li>
<li>$2\sqrt{2}\times 4\sqrt{18}=8\sqrt{2\times 18}=8\sqrt{36}=8\times 6=48$.</li>
<li>$\left(4\sqrt{5}\right)^2=4^2\times\left(\sqrt{5}\right)^2=16\times 5=80$.</li>
<li>$3\sqrt{125}=3\times \sqrt{25\times 5}=3\times 5\sqrt{5}=15\sqrt{5}$.</li>
</ul>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tous réels positifs $a$ et $b$ avec $b\neq 0$, on a $\sqrt{\dfrac{a}{b}}=\dfrac{\sqrt{a}}{\sqrt{b}}$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem;">
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\dfrac{\sqrt{32}\times\sqrt{10}}{\sqrt{80}}=\sqrt{\dfrac{32\times 10}{80}}=\sqrt{4}=2$.</li>
</ul>
<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\sqrt{\dfrac{50}{242}}=\sqrt{\dfrac{25}{121}}=\dfrac{\sqrt{25}}{\sqrt{121}}=\dfrac{5}{11}$.</li>
</ul>
</div>
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode : Simplifier une écriture contenant des racines carrées.</div>
<div class="environment-content">
<ol>
<li>Écrire le plus simplement possible :
<ul>
<li>$A=4\sqrt{3}-2\sqrt{3}+6\sqrt{3}$</li>
<li>$B=(3-2\sqrt{5})-(4-6\sqrt{5})$</li>
</ul></li>
<li>Écrire les expressions suivantes sous la forme $a\sqrt{b}$, où $a$ et $b$ sont des entiers et $b$ le plus petit possible :
<ul>
<li>$C=\sqrt{12}+7\sqrt{3}-\sqrt{27}$</li>
<li>$D=\sqrt{125}-2\sqrt{20}+6\sqrt{80}$</li>
</ul></li>
<li>Écrire les expressions suivantes sous la forme $\dfrac{a\sqrt{b}}{c}$, où $a$, $b$ et $c$ sont des entiers et $b$ le plus petit possible :
<ul>
<li>$E=\dfrac{-5}{\sqrt{2}}$</li>
<li>$F=\dfrac{1}{3+\sqrt{5}}$</li>
</ul></li>
</ol>
<ol>
<li>$A=4\sqrt{3}-2\sqrt{3}+6\sqrt{3}=(4-2+6)\sqrt{3}=8\sqrt{3}$.<br>
$B=(3-2\sqrt{5})-(4-6\sqrt{5})=3-2\sqrt{5}-4+6\sqrt{5}=-1+4\sqrt{5}$.</li>
<li>$C=\sqrt{12}+7\sqrt{3}-\sqrt{27}=\sqrt{4\times 3}+7\sqrt{3}-\sqrt{9\times 3}=2\sqrt{ 3}+7\sqrt{3}-3\sqrt{ 3}=6\sqrt{3}$.<br>
$D=\sqrt{125}-2\sqrt{20}+6\sqrt{80}=\sqrt{25\times 5}-2\sqrt{4\times 5}+6\sqrt{16\times 5}=5\sqrt{5}-4\sqrt{5}+24\sqrt{5}=25\sqrt{5}$.</li>
<li>$E=\dfrac{-5}{\sqrt{2}}=\dfrac{-5\times \sqrt{2}}{\sqrt{2}\times \sqrt{2}}=\dfrac{-5\times \sqrt{2}}{2}$. <br>
$F=\dfrac{1}{3+\sqrt{5}}=\dfrac{1\times (3-\sqrt{5})}{(3+\sqrt{5})\times (3-\sqrt{5})}=\dfrac{3-\sqrt{5}}{9+3\sqrt{5}-3\sqrt{5}+\sqrt{5}\times \sqrt{5}}=\dfrac{3-\sqrt{5}}{9+5}=\dfrac{3-\sqrt{5}}{14}$.</li>
</ol>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tous réels $a$ et $b$ strictement positifs, on a $\sqrt{a+b} < \sqrt{a} +\sqrt{b}$.
</div>
</div>

Démonstration.<br>
Comme $a$ et $b$ sont strictement positifs, $\sqrt{a+b}$ et $ \sqrt{a} +\sqrt{b}$ sont positifs. <br>
Donc montrer que $\sqrt{a+b} < \sqrt{a} +\sqrt{b}$, revient à montrer que $\left(\sqrt{a+b}\right)^2 < \left(\sqrt{a} +\sqrt{b}\right)^2$. <br>
C'est à dire, montrer que $\left(\sqrt{a+b}\right)^2 -\left(\sqrt{a} +\sqrt{b}\right)^2 <0$.

<div class="math-display">
$$
\begin{aligned}
\left(\sqrt{a+b}\right)^2 -\left(\sqrt{a} +\sqrt{b}\right)^2 &= a+b -(a+2\sqrt{a}\sqrt{b}+b) \\
&=a+b -a-2\sqrt{a}\sqrt{b}-b \\
&=-2\sqrt{a}\sqrt{b}
\end{aligned}
$$
</div>

Or, $\sqrt{a}>0$ et $\sqrt{b}>0$ car $a$ et $b$ sont strictement positifs. Donc, $-2\sqrt{a}\sqrt{b}<0$.<br>
Finalement, $\left(\sqrt{a+b}\right)^2 -\left(\sqrt{a} +\sqrt{b}\right)^2 <0$ et donc $\sqrt{a+b} < \sqrt{a} +\sqrt{b}$.

<h2 class="subsection-title">11.2 La fonction racine carrée</h2>

<h3 class="subsubsection-title">11.2.1 Définition, représentation graphique et propriété</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La fonction racine carrée est la fonction définie sur $[0;+\infty[$ par $f:x\mapsto \sqrt{x}$.
</div>
</div>

<table>
<tr>
<th>$x$</th>
<th>$0$</th>
<th>$0,25$</th>
<th>$1$</th>
<th>$2,25$</th>
<th>$4$</th>
<th>$6,25$</th>
<th>$9$</th>
</tr>
<tr>
<td>$f(x)=\sqrt{x}$</td>
<td>$0$</td>
<td>$0,5$</td>
<td>$1$</td>
<td>$1,5$</td>
<td>$2$</td>
<td>$2,5$</td>
<td>$3$</td>
</tr>
</table>

<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-11/fig1.svg" alt="figure 1" style="max-height:300px; max-width:100%;">
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La fonction racine carrée est croissante sur $[0;+\infty[$.
</div>
</div>

On peut donc dresser le tableau de variation de la fonction racine carrée.

<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-11/t1.png" alt="figure 2" style="max-height:150px; max-width:100%;">
</div>

Démonstration.<br>
Soient $a$ et $b$ deux réels positifs distincts tels que $a< b$.<br>
On veut montrer que $f(a)<f(b)$, c'est-à-dire que $\sqrt{a}<\sqrt{b}$. Cela revient à montrer que $\sqrt{a}-\sqrt{b}<0$. <br>

<div class="math-display">
$$
\begin{aligned}
\sqrt{a}-\sqrt{b} &= \dfrac{(\sqrt{a}-\sqrt{b})(\sqrt{a}+\sqrt{b})}{\sqrt{a}+\sqrt{b}} \\
&= \dfrac{a-b}{\sqrt{a}+\sqrt{b}}
\end{aligned}
$$
</div>

Or, comme $a$ et $b$ sont positifs et différents, $\sqrt{a}+\sqrt{b}>0$ et $a-b<0$ car $a<b$. <br>
Ainsi, $\sqrt{a}<\sqrt{b}$.<br>
$a$ et $b$ étant deux réels quelconques de $[0;+\infty[$, la fonction racine carrée est croissante sur $[0;+\infty[$.

<h3 class="subsubsection-title">11.2.2 Équations et inéquations</h3>

<div style="display:inline-block;vertical-align:middle;width:calc(72% - 12px);">
<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $a$, l'équation $\sqrt{x}=a$ admet pour ensemble de solutions :
<ul>
<li>$S=\{a^2\}$ si $a\geq 0$</li>
<li>$S=\emptyset$ si $a<0$.</li>
</ul>
</div>
</div>
<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
L'équation $\sqrt{x}=3$ a pour ensemble de solutions $S=\{9\}$.
</div>
</div>
</div><img src="/mabemat/figures/2nde/chapitre-11/fig3.svg" alt="figure 3" style="display:inline-block;vertical-align:middle;width:calc(26% - 12px);max-height:200px;max-width:100%;">

<br>

<div style="display:inline-block;vertical-align:middle;width:calc(72% - 12px);">
<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $a$, l'inéquation $\sqrt{x}\leq a$ admet pour ensemble de solutions :
<ul>
<li>$S=[0;a^2]$ si $a\geq 0$</li>
<li>$S=\emptyset$ si $a<0$.</li>
</ul>
Pour tout réel $a$, l'inéquation $\sqrt{x}\geq a$ admet pour ensemble de solutions :
<ul>
<li>$S=[a^2;+\infty[$ si $a\geq 0$</li>
<li>$S=[0;+\infty[$ si $a<0$.</li>
</ul>
</div>
</div>
</div><img src="/mabemat/figures/2nde/chapitre-11/fig4.svg" alt="figure 4" style="display:inline-block;vertical-align:middle;width:calc(26% - 12px);max-height:200px;max-width:100%;">

<br>

<div style="display:inline-block;vertical-align:middle;width:calc(72% - 12px);">
<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>L'inéquation $\sqrt{x}\leq 4$ a pour ensemble de solutions $S=[0;16]$.</li>
<li>L'inéquation $\sqrt{x}>5$ a pour ensemble de solutions $S=]25;+\infty[$.</li>
<li>L'inéquation $-4\sqrt{x}-5<7$ qui s'écrit aussi $\sqrt{x}>-3$ a pour ensemble de solutions $S=[0;+\infty[$.</li>
</ul>
</div>
</div>
</div><img src="/mabemat/figures/2nde/chapitre-11/fig5.svg" alt="figure 5" style="display:inline-block;vertical-align:middle;width:calc(26% - 12px);max-height:200px;max-width:100%;">

<h2 class="subsection-title">11.3 Valeur absolue et distance entre deux réels</h2>

<h3 class="subsubsection-title">11.3.1 Valeur absolue d'un nombre réel</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $x$ un nombre réel.<br>
On appelle valeur absolue de $x$, notée $\vert x \vert$, le nombre égal à $\left\{
\begin{array}{ll}
x & \text{ si } x\geq 0 \\
-x & \text{ si } x\leq 0
\end{array}
\right.$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:flex; justify-content:space-around; flex-wrap:wrap; gap:1rem;">
<span>$\vert 24 \vert =24$</span>
<span>$\vert -19{,}2 \vert =19{,}2$</span>
<span>$\vert x-5 \vert =\left\{
\begin{array}{ll}
x-5 & \text{ si } x\geq 5 \\
5-x & \text{ si } x\leq 5
\end{array}
\right.$</span>
</div>
</div>
</div>

<div class="remarque">
Pour un réel $x$, on a : $\vert -x \vert =\vert x \vert$.
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $x$, $\sqrt{x^2}=\vert x\vert $
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
$\sqrt{(5{,}1)^2}=5{,}1$
<br>
$\sqrt{ (-2)^2} =2$<br>
$$\sqrt{(12-2x)^2}=\vert 12-2x \vert =\begin{cases}
12-2x & \text{ si } x\leq 6 \\\\
2x-12 & \text{ si } x\geq 6
\end{cases}$$
</div>
</div>

<h3 class="subsubsection-title">11.3.2 Distance entre deux réels</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $a$ et $b$ deux nombres réels.<br>
On appelle distance entre $a$ et $b$ le nombre $\vert a-b \vert$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
La distance entre $-3$ et $7$ est $\vert -3 -7\vert =\vert -10\vert =10$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soient $a$ et $r$ deux réels avec $r \geq 0$.<br>
L'intervalle $[a-r\,;\,a+r]$ est l'ensemble des réels $x$ tels que $\vert x-a \vert \leq r$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit un réel $x$ tel que $\vert x-8 \vert \leq 3$. Cela signifie que $x\in [8-3;8+3]=[5;11]$.<br>
Sur une droite graduée, cela veut dire que la distance du point d'abscisse $x$ au point d'abscisse $8$ est inférieure ou égale à $3$.
</div>
</div>

<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-11/fig6.svg" alt="figure 6" style="max-height:200px; max-width:100%;">
</div>
