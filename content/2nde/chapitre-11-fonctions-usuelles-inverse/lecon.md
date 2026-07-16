---
title: "Leçon complète"
---

<h2 class="subsection-title">14.1 La fonction inverse</h2>

<h3 class="subsubsection-title">14.1.1 Définition</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La fonction <strong>inverse</strong> est la fonction $f$ définie sur $\mathbb{R}^\ast=]-\infty ; 0 [ \cup ]0 ; +\infty[$ par :
$$f(x)=\frac{1}{x}$$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>$f(2)=\dfrac{1}{2}=0,5$</li>
<li>$f(-4)=\dfrac{1}{-4}=-0,25$</li>
</ul>
</div>
</div>

<div class="remarque">
Pour que la fonction inverse soit définie, il faut que le dénominateur soit différent de $0$, c'est-à-dire que $x\neq 0$. On dit que $0$ est une valeur interdite.
</div>

<h3 class="subsubsection-title">14.1.2 Représentation graphique</h3>

<table>
<tr>
<th>$x$</th>
<th>$-5$</th>
<th>$-4$</th>
<th>$-3$</th>
<th>$-2$</th>
<th>$-1$</th>
<th>$0$</th>
<th>$1$</th>
<th>$2$</th>
<th>$3$</th>
<th>$4$</th>
<th>$5$</th>
</tr>
<tr>
<td>$f(x)=\dfrac{1}{x}$</td>
<td>$-\dfrac{1}{5}=-0,2$</td>
<td>$-\dfrac{1}{4}=-0,25$</td>
<td>$-\dfrac{1}{3}$</td>
<td>$-\dfrac{1}{2}=-0,5$</td>
<td>$-\dfrac{1}{1} =-1$</td>
<td style="background-color:#ddd; text-align:center;"></td>
<td>$\dfrac{1}{1}=1$</td>
<td>$\dfrac{1}{2}=0,5$</td>
<td>$\dfrac{1}{3}$</td>
<td>$\dfrac{1}{4}=0,25$</td>
<td>$\dfrac{1}{5}=0,2$</td>
</tr>
</table>
<br>
<img src="/mabemat/figures/2nde/chapitre-14/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:middle; width:calc(41% - 12px); max-height:300px; max-width:100%;"><div style="display:inline-block; vertical-align:middle; width:calc(57% - 12px);">
<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La représentation graphique de la fonction inverse s'appelle une <strong>hyperbole</strong>.
</div>
</div>
<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<ul>
<li>La courbe représentative de la fonction inverse admet <br>l'origine $O(0;0)$ comme centre de symétrie.<br></li>
<li>Pour tout $x\in \mathbb{R}^\ast$, $\dfrac{1}{(-x)}=-\dfrac{1}{x}$ donc $f(-x)=-f(x)$, on dit que la fonction inverse est impaire.</li>
</ul>
</div>
</div>
</div>

<h3 class="subsubsection-title">14.1.3 Variations de la fonction inverse</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La fonction inverse est décroissante sur $]-\infty ; 0 [ $ et sur $]0 ; +\infty [$.
</div>
</div>

On peut dresser le tableau de variations.

<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-14/t1.png" alt="figure 2" style="max-height:100px; max-width:100%;">
</div>

<div class="remarque">
On ne peut pas dire que la fonction inverse est décroissante sur $\mathbb{R}^\ast$. <br>En effet, l'affirmation : « Lorsque les valeurs de $x$ augmentent sur $\mathbb{R}^\ast$, leurs inverses diminuent » est fausse. <br>Par exemple, $1$ est plus grand que $-2$, et $1$ (l'inverse de $1$) est plus grand que $-\dfrac{1}{2}$ (l'inverse de $-2$).
</div>

Démonstration . <br>
La fonction inverse étant impaire, il nous suffit de montrer qu'elle est décroissante sur l'intervalle $]0;+\infty[$. <br>
En effet, on obtiendra automatiquement la décroissance sur l'intervalle $]-\infty;0[$ par symétrie de l'hyperbole par rapport à l'origine du repère.<br>
Montrons donc que $f$ est décroissante sur $]0;+\infty[$.<br>
Soient $a$ et $b$ deux réels distincts de l'intervalle $]0;+\infty[$ tels que $a<b$.<br>
On veut montrer que $f(a)>f(b)$, c'est à dire $\dfrac{1}{a}>\dfrac{1}{b}$.<br>
Montrons que $\dfrac{1}{a}-\dfrac{1}{b}>0$.
$$\dfrac{1}{a}-\dfrac{1}{b}=\dfrac{b}{ab}-\dfrac{a}{ab}=\dfrac{b-a}{ab}$$
$a$ et $b$ sont strictement positifs donc $ab>0$. Par ailleurs, $a<b$, donc $b-a>0$. Par quotient, on a $\dfrac{b-a}{ab}>0$. <br>Ainsi, $\dfrac{1}{a}>\dfrac{1}{b}$. $a$ et $b$ étant quelconques, on a donc montré que la fonction inverse est décroissante sur $]0;+\infty[$.


<h2 class="subsection-title">14.2 Équations et inéquations</h2>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<ul>
<li>Si on multiplie un nombre réel $x$ par son inverse, on obtient $1$ : $x\times \dfrac{1}{x}=1$.</li>
<li>Pour tout nombre réel $x$ non nul, l'inverse de $\dfrac{1}{x}$ est $\dfrac{1}{\frac{1}{x}}=x$.</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">14.2.1 Résolution d'équations</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Pour tout réel non nul $a$, l'équation $\dfrac{1}{x}=a$ admet pour unique solution $x=\dfrac{1}{a}$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
L'équation $\dfrac{1}{x}=7$ a pour unique solution $x=\dfrac{1}{7}$.
</div>
</div>

<h3 class="subsubsection-title">14.2.2 Résolution d'inéquations</h3>
<div style="display:flex; gap:12px; align-items:flex-start;">
<div class="environment propriete" style="flex:1 1 0; min-width:0;">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $a$, l'inéquation $\dfrac{1}{x}\leq a$ admet pour ensemble de solutions :
<ul>
<li>$S=\left[\dfrac{1}{a}\,;\,0\right[$ si $a<0$ ;</li>
<li>$S=\left]-\infty\,;\,0\right[$ si $a=0$ ;</li>
<li>$S=\left]-\infty\,;\,0\right[\cup \left[\dfrac{1}{a}\,;\,+\infty\right[$ si $a>0$.</li>
</ul>
</div>
</div>
<div class="environment propriete" style="flex:1 1 0; min-width:0;">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $a$, l'inéquation $\dfrac{1}{x}\geq a$ admet pour ensemble de solutions :
<ul>
<li>$S=\left]-\infty\,;\,\dfrac{1}{a}\right]\cup \left]0\,;\,+\infty\right[$ si $a<0$ ;</li>
<li>$S=\left]0\,;\,+\infty\right[$ si $a=0$ ;</li>
<li>$S=\left]0\,;\,\dfrac{1}{a}\right]$ si $a>0$.</li>
</ul>
</div>
</div>
</div>

<div style="display:flex; gap:12px; align-items:center;">
<div style="flex:1 1 0; min-width:0;">
Pour tout réel $a$, l'inéquation $\dfrac{1}{x}\leq a$ a pour solution <br> $$S=\left]-\infty\,;\,0\right[\cup \left[\dfrac{1}{a}\,;\,+\infty\right[$$
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-14/fig3.svg" alt="figure 3" style="max-height:300px; max-width:100%;">
</div>
</div>
<div style="flex:1 1 0; min-width:0;">
Pour tout réel $a$, l'inéquation $\dfrac{1}{x}\geq a$ a pour solution $$S=\left]0\,;\,\dfrac{1}{a}\right]$$
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-14/fig4.svg" alt="figure 4" style="max-height:300px; max-width:100%;">
</div>
</div>
</div>
