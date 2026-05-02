---
title: "Leçon complète"
---

<h2 class="subsection-title">7.1 La fonction carrée</h2>

<h3 class="subsubsection-title">7.1.1 Définition</h3>

<div class="environment definition" style="display:inline-block;vertical-align:middle;width:calc(64% - 12px);margin-right:12px;">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La fonction carrée est la fonction définie sur $\R$ par $f:x\mapsto x^2$.
</div>
</div><div class="environment exemple" style="display:inline-block;vertical-align:middle;width:calc(34% - 12px);">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>$f(3)=3^2=9$</li>
<li>$f(-8)=(-8)^2=64$</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">7.1.2 Représentation graphique</h3>

<table>
<tr>
<th>$x$</th>
<th>$-4$</th>
<th>$-3$</th>
<th>$-2$</th>
<th>$-1$</th>
<th>$0$</th>
<th>$1$</th>
<th>$2$</th>
<th>$3$</th>
<th>$4$</th>
</tr>
<tr>
<td>$f(x)=x^2$</td>
<td>$16$</td>
<td>$9$</td>
<td>$4$</td>
<td>$1$</td>
<td>$0$</td>
<td>$1$</td>
<td>$4$</td>
<td>$9$</td>
<td>$16$</td>
</tr>
</table>
<div style="display:flex;align-items:center;gap:12px;">
<img src="/mabemat/figures/2nde/chapitre-07/fig1.svg" alt="figure 1" style="width:41%;max-height:400px;max-width:100%;">
<div style="width:57%;">
<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La représentation graphique de la fonction carrée s'appelle un <b>parabole</b>. Le point $O(0;0)$, origine du repère, est appelé le sommet de la parabole.
</div>
</div>
<div class="environment propriete" style="margin-top:12px;">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
${\color{#A5B5D6}{\bullet}}$ La courbe représentative de la fonction carrée admet l'axe des ordonnées pour axe de symétrie.<br>
${\color{#A5B5D6}{\bullet}}$ Pour tout $x\in \R$, $(-x)^2=x^2$ donc $f(-x)=f(x)$, on dit que la fonction carrée est paire.
</div>
</div>
</div>
</div>

<h3 class="subsubsection-title">7.1.3 Variations de la fonction carrée</h3>

<div style="display:flex;align-items:center;gap:12px;">
<div style="width:46%;">
<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La fonction carrée est décroissante sur $]-\infty;0]$ et croissante sur $[0;+\infty[$.
</div>
</div>
<div style="margin-top:12px;">On peut dresser le tableau de variations.</div>
<img src="/mabemat/figures/2nde/chapitre-07/t1.png" alt="figure 2" style="display:block;margin-left:auto;margin-right:auto;max-height:150px;max-width:100%;margin-top:12px;">
</div>
<div style="width:52%;">
Démonstration <br>
Montrons que $f$ est croissante sur $[0;+\infty[$.<br>
Pour cela, prenons $a$ et $b$ deux réels de l'intervalle $[0;+\infty[$ tels que $a\leq b$. <br>Montrons alors que $f(a)\leq f(b)$, c'est-à-dire $a^2\leq b^2$.<br>
On étudie donc le signe de $a^2-b^2$. <br>
On a $a^2-b^2=(a+b)(a-b)$. <br>
Comme $a\leq b$, $(a-b)\leq 0$ ; <br>et comme $a$ et $b$ sont positifs, $(a+b)$ est positif.<br>
On en déduit que le produit $(a+b)(a-b)\leq 0$.<br> Donc $a^2-b^2\leq 0$, d'où $f(a)-f(b)\leq 0$ et donc <br>$f(a)\leq f(b)$, ce qu'on souhaitait. <br>
Ainsi, $f$ est croissante sur $[0;+\infty[$.<br>
On conclut par symétrie de la courbe de $f$ par rapport à l'axe des ordonnées, que $f$ est décroissante sur $]-\infty;0]$.
</div>
</div>

<h2 class="subsection-title">7.2 La fonction cube</h2>

<h3 class="subsubsection-title">7.2.1 Définition</h3>

<div class="environment definition" style="display:inline-block;vertical-align:middle;width:calc(64% - 12px);margin-right:12px;">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La fonction cube est la fonction définie sur $\R$ par $f:x\mapsto x^3$.
</div>
</div><div class="environment exemple" style="display:inline-block;vertical-align:middle;width:calc(34% - 12px);">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>$f(3)=3^3=27$</li>
<li>$f(-1)=(-1)^3=-1$</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">7.2.2 Représentation graphique</h3>

<table>
<tr>
<th>$x$</th>
<th>$-4$</th>
<th>$-3$</th>
<th>$-2$</th>
<th>$-1$</th>
<th>$0$</th>
<th>$1$</th>
<th>$2$</th>
<th>$3$</th>
<th>$4$</th>
</tr>
<tr>
<td>$f(x)=x^3$</td>
<td>$-64$</td>
<td>$-27$</td>
<td>$-8$</td>
<td>$-1$</td>
<td>$0$</td>
<td>$1$</td>
<td>$8$</td>
<td>$27$</td>
<td>$64$</td>
</tr>
</table>
<br>
<img src="/mabemat/figures/2nde/chapitre-07/fig3.svg" alt="figure 3" style="display:inline-block;vertical-align:middle;width:calc(41% - 12px);max-height:400px;max-width:100%;"><div style="display:inline-block;vertical-align:middle;width:calc(57% - 12px);">
<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<ul>
<li>La courbe représentative de la fonction cube admet l'origine $O(0;0)$ comme centre de symétrie.</li>
<li>Pour tout $x\in \R$, $(-x)^3=-x^3$ donc $f(-x)=-f(x)$, on dit que la fonction cube est impaire.</li>
</ul>
</div>
</div>
</div>

<h3 class="subsubsection-title">7.2.3 Variations de la fonction cube</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La fonction cube est croissante sur $\R$.
</div>
</div>

On peut dresser le tableau de variations.

<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-07/t2.png" alt="figure 4" style="max-height:150px; max-width:100%;">
</div>

<h2 class="subsection-title">7.3 Équations et inéquations</h2>

<h3 class="subsubsection-title">7.3.1 Résolution d'équations</h3>

<div style="display:flex; gap:12px; align-items:center;">
<div style="flex:7 1 0; min-width:0;">
<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $a$, l'équation $x^2=a$ admet :
<ul>
<li>deux solutions $\sqrt{a}$ et $-\sqrt{a}$ si $\color{#8A9CC1}{a>0}$ ;</li>
<li>une unique solution égale à $0$ si $\color{#D36740}{a=0}$ ;</li>
<li>aucune solution si $\color{#A8C68A}{a<0}$ ;</li>
</ul>
</div>
</div>
</div>
<img src="/mabemat/figures/2nde/chapitre-07/fig5.svg" alt="figure 5" style="flex:3 1 0; min-width:0; max-height:200px; object-fit:contain;">
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $a$, l'équation $x^3=a$ admet une unique solution, appelée racine cubique de $a$, et notée $\sqrt[3]{a}$.
</div>
</div>

<h3 class="subsubsection-title">7.3.2 Résolutions d'inéquations</h3>

<div style="display:flex; gap:12px; align-items:center;">
<div style="flex:7 1 0; min-width:0;">
<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $a$, l'inéquation $\color{#D36740}{x^2\leq a}$ admet pour ensemble de solutions :
<ul>
<li>$S=[-\sqrt{a};\sqrt{a}]$ si $\color{#8A9CC1}{a>0}$ ;</li>
<li>$S=\{0\}$ si $\color{#D36740}{a=0}$ ;</li>
<li>$S=\emptyset$ si $\color{#A8C68A}{a<0}$ ;</li>
</ul>
Pour tout réel $a$, l'inéquation $\color{pink}{x^2\geq a}$ admet pour ensemble de solutions :
<ul>
<li>$S=]-\infty;-\sqrt{a}]\cup[\sqrt{a};+\infty[$ si $\color{#D36740}{a>0}$ ;</li>
<li>$S=\R$ si $\color{#A8C68A}{a\leq 0}$ ;</li>
</ul>
</div>
</div>
</div>
<img src="/mabemat/figures/2nde/chapitre-07/fig6.svg" alt="figure 6" style="flex:3 1 0; min-width:0; max-height:200px; object-fit:contain;">
</div>
<div style="display:inline-block;vertical-align:middle;width:calc(73% - 12px);">
<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $a$,
<ul>
<li>l'inéquation $x^3\leq a$ admet pour ensemble de solution $S=]-\infty;\sqrt[3]{a}]$</li>
<li>l'inéquation $x^3\geq a$ admet pour ensemble de solution $S=[\sqrt[3]{a};\infty[$.</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">7.3.3 Position relative des courbes $y=x$, $y=x^2$ et $y=x^3$</h3>

<div style="display:flex; gap:12px; align-items:center;">
<div style="flex:7 1 0; min-width:0;">
<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<ul>
<li>Pour tout $x\in [0;1]$, on a $x^3\leq x^2\leq x$.</li>
<li>Pour tout $x\in [1;+\infty[$, on a $x\leq x^2\leq x^3$.</li>
</ul>
</div>
</div>
</div>
<img src="/mabemat/figures/2nde/chapitre-07/fig7.svg" alt="figure 7" style="flex:3 1 0; min-width:0; max-height:200px; object-fit:contain;">
</div>
Démonstration.
<br>
<div style="display:inline-block;vertical-align:top;width:calc(55% - 12px);">
<u>Premier cas : $0\leq x \leq 1$.</u><br>
Pour étudier les positions relatives des courbes d'équations $y=x$ et $y=x^2$, il suffit d'étudier le signe de $x^2-x$.<br>
Or, $x^2-x=x(x-1)\leq 0$ car $x\geq 0$ et $x-1\leq 0$.
<br>Donc, la courbe d'équation $y=x^2$ se trouve en dessous de la courbe d'équation $y=x$.<br>
Pour étudier les positions relatives des courbes d'équations $y=x^2$ et $y=x^3$, il suffit d'étudier le signe de $x^3-x^2$.<br>
Et, $x^3-x^2=x^2(x-1)\leq 0$ car $x^2\geq 0$ et $x-1\leq 0$. <br>
Donc la courbe d'équation $y=x^3$ se trouve en dessous de la courbe d'équation $y=x^2$.
</div><div style="display:inline-block;vertical-align:top;width:calc(43% - 12px);">
<u>Deuxième cas : $1\leq x <+\infty$.</u><br>
Dans ce cas, $x^2-x=x(x-1)\geq 0$ car $x\geq 1$.
<br>Donc, la courbe d'équation $y=x^2$ se trouve au dessus de la courbe d'équation $y=x$.<br>
Et, $x^3-x^2=x^2(x-1)\geq 0$ car $x \geq 1$. <br>
Donc la courbe d'équation $y=x^3$ se trouve au dessus de la courbe d'équation $y=x^2$.
</div>
