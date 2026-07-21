---
title: "Leçon complète"
---

<h2 class="subsection-title">11.1 La fonction carrée</h2>

<h3 class="subsubsection-title">11.1.1 Définition</h3>

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

<h3 class="subsubsection-title">11.1.2 Représentation graphique</h3>

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
La représentation graphique de la fonction carrée s'appelle une <b>parabole</b>. Le point $O(0;0)$, origine du repère, est appelé le sommet de la parabole.
</div>
</div>
<div class="environment propriete" style="margin-top:12px;">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La courbe représentative de la fonction carrée admet l'axe des ordonnées pour axe de symétrie.
</div>
</div>
</div>
</div>

<h3 class="subsubsection-title">11.1.3 Variations de la fonction carrée</h3>

<div style="display:flex;align-items:center;gap:12px;">
<div style="width:46%;">
<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La fonction carrée est décroissante sur $]-\infty;0]$ et croissante sur $[0;+\infty[$.
</div>
</div>
<div style="margin-top:12px;">On peut dresser le tableau de variations.</div>
<img src="/mabemat/figures/2nde/chapitre-07/t1.png" alt="tableau de variation de la fonction carrée" style="display:block;margin-left:auto;margin-right:auto;max-height:150px;max-width:100%;margin-top:12px;">
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

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
En utilisant les variations de la fonction carrée, donner un encadrement de $x^2$ dans chaque cas suivant.
<ol>
<li>$x\in[2;4]$<br>
Comme $x\in[2;4]$ correspond à $2\leq x\leq 4$.<br>
Et que la fonction carrée est croissante sur $[0;+\infty[$, lorsque les valeurs de $x$ augmentent, les valeurs $f(x)$ augmentent aussi.<br>
On en déduit que $2^2\leq x^2\leq 4^2$, donc $4\leq x^2\leq 16$.</li>
<li>$x\in[-7;-3]$<br>
Comme $x\in[-7;-3]$ correspond à $-7\leq x\leq -3$.<br>
Et que la fonction carrée est décroissante sur $]-\infty;0]$, lorsque les valeurs de $x$ augmentent, les valeurs $f(x)$ diminuent.<br>
On en déduit que $(-3)^2\leq x^2\leq (-7)^2$, donc $9\leq x^2\leq 49$.</li>
</ol>
</div>
</div>

<h3 class="subsubsection-title">11.1.4 Équations et inéquations</h3>

<h4 class="subsubsection-title" style="font-size:1rem;">Résolution d'équations</h4>

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
<img src="/mabemat/figures/2nde/chapitre-07/fig5.svg" alt="figure équation x²=a" style="flex:3 1 0; min-width:0; max-height:200px; object-fit:contain;">
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
Résoudre dans $\R$ les équations suivantes.
<ol>
<li>$x^2=64$<br>
On applique directement la propriété du cours, comme $64>0$ :<br>
$x=-\sqrt{64}$ ou $x=\sqrt{64}$<br>
Donc $S=\{-8\,;\,8\}$</li>
<li>$-2x^2=14$<br>
On se ramène à une équation du type $x^2=k$.<br>
$-2x^2=14 \Leftrightarrow x^2=\dfrac{14}{-2} \Leftrightarrow x^2=-7$<br>
Donc $S=\emptyset$</li>
<li>$3x^2-75=0$<br>
On se ramène à une équation du type $x^2=k$.<br>
$3x^2-75=0 \Leftrightarrow 3x^2=75 \Leftrightarrow x^2=\dfrac{75}{3} \Leftrightarrow x^2=25$<br>
$x=-\sqrt{25}$ ou $x=\sqrt{25}$<br>
Donc $S=\{-5\,;\,5\}$</li>
</ol>
</div>
</div>

<h4 class="subsubsection-title" style="font-size:1rem;">Résolution d'inéquations</h4>

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
<li>$S=]-\infty;-\sqrt{a}]\cup[\sqrt{a};+\infty[$ si $\color{#8A9CC1}{a>0}$ ;</li>
<li>$S=\R$ si $\color{#A8C68A}{a\leq 0}$ ;</li>
</ul>
</div>
</div>
</div>
<img src="/mabemat/figures/2nde/chapitre-07/fig6.svg" alt="figure inéquation x²" style="flex:3 1 0; min-width:0; max-height:200px; object-fit:contain;">
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
Résoudre dans $\R$ les inéquations suivantes.
<ol>
<li>$x^2\leq -11$<br>
On applique directement la propriété du cours avec $a=-11<0$.<br>
Donc $S=\emptyset$</li>
<li>$5x^2\leq 45$<br>
On se ramène à une inéquation du type $x^2\leq a$.<br>
$5x^2\leq 45 \Leftrightarrow x^2\leq \dfrac{45}{5} \Leftrightarrow x^2\leq 9$.<br>
Donc $S=[-\sqrt{9};\sqrt{9}]=[-3;3]$</li>
<li>$x^2\geq 16$<br>
On applique directement la propriété du cours avec $a=16>0$.<br>
Donc $S=]-\infty;-\sqrt{16}]\cup [\sqrt{16};+\infty[=]-\infty;-4]\cup [4;+\infty[$</li>
<li>$x^2+9\geq 6$<br>
On se ramène à une inéquation du type $x^2\geq a$.<br>
$x^2+9\geq 6 \Leftrightarrow x^2\geq 6-9 \Leftrightarrow x^2\geq -3$<br>
Donc $S=\R$</li>
</ol>
</div>
</div>

<h2 class="subsection-title">11.2 La fonction inverse</h2>

<h3 class="subsubsection-title">11.2.1 Définition</h3>

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

<h3 class="subsubsection-title">11.2.2 Représentation graphique</h3>

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

<h3 class="subsubsection-title">11.2.3 Variations de la fonction inverse</h3>

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


<h3 class="subsubsection-title">11.2.4 Équations et inéquations</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<ul>
<li>Si on multiplie un nombre réel $x$ par son inverse, on obtient $1$ : $x\times \dfrac{1}{x}=1$.</li>
<li>Pour tout nombre réel $x$ non nul, l'inverse de $\dfrac{1}{x}$ est $\dfrac{1}{\frac{1}{x}}=x$.</li>
</ul>
</div>
</div>

<h4 class="subsubsection-title" style="font-size:1rem;">Résolution d'équations</h4>

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

<h4 class="subsubsection-title" style="font-size:1rem;">Résolution d'inéquations</h4>
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

<h2 class="subsection-title">11.3 Valeur absolue et distance entre deux réels</h2>

<h3 class="subsubsection-title">11.3.1 Définition</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $x$ un nombre réel. On appelle valeur absolue de $x$, notée $\vert x \vert$, le nombre égal à
$$\vert x\vert=\left\{\begin{array}{ll} x & \text{ si } x\geq 0 \\ -x & \text{ si } x\leq 0 \end{array}\right.$$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
$\vert 24 \vert =24$ &emsp;&emsp; $\vert -19,2 \vert =19,2$ &emsp;&emsp; $\vert x-5 \vert =\left\{\begin{array}{ll} x-5 & \text{ si } x\geq 5\\ 5-x & \text{ si } x\leq 5 \end{array}\right.$
</div>
</div>

<div class="remarque">
Pour un réel $x$, on a : $\vert -x \vert =\vert x \vert$.
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $x$, $\sqrt{x^2}=\vert x\vert$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>$\sqrt{(5,1)^2}=5,1$</li>
<li>$\sqrt{(-2)^2}=2$</li>
<li>$\sqrt{(12-2x)^2}=\vert 12-2x \vert =\left\{\begin{array}{ll} 12-2x & \text{ si } x\leq 6\\ 2x-12 & \text{ si } x\geq 6 \end{array}\right.$</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">11.3.2 Représentation graphique</h3>

<div style="display:flex;align-items:center;gap:12px;">
<img src="/mabemat/figures/2nde/chapitre-07/va1.svg" alt="courbe de la fonction valeur absolue" style="width:42%;max-height:300px;max-width:100%;">
<div style="width:56%;">
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
<td>$f(x)=\vert x\vert$</td>
<td>$4$</td>
<td>$3$</td>
<td>$2$</td>
<td>$1$</td>
<td>$0$</td>
<td>$1$</td>
<td>$2$</td>
<td>$3$</td>
<td>$4$</td>
</tr>
</table>
<div class="environment propriete" style="margin-top:12px;">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La courbe représentative de la fonction valeur absolue admet l'axe des ordonnées pour axe de symétrie.
</div>
</div>
</div>
</div>

<h3 class="subsubsection-title">11.3.3 Distance entre deux réels</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $a$ et $b$ deux nombres réels. On appelle distance entre $a$ et $b$ le nombre $\vert a-b \vert$.
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
Soient $a$ et $r$ deux réels avec $r \geq 0$. L'intervalle $[a-r;a+r]$ est l'ensemble des réels $x$ tels que $\vert x-a \vert \leq r$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Traduire, sous la forme d'une inégalité, l'intervalle suivant : $[2;10]$.<br>
Commençons par chercher $a$ le centre de l'intervalle : $a=\dfrac{2+10}{2}=6$.<br>
On en déduit que $r=10-6=4$, ainsi $x\in [2;10]$ correspond à $\vert x-6 \vert \leq 4$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Traduire, sous la forme d'un intervalle, l'inégalité suivante : $\vert x-8 \vert \leq 3$.<br>
Soit un réel $x$ tel que $\vert x-8 \vert \leq 3$. D'après la propriété $a=8$ et $r=3$.<br>
Cela signifie que $x\in [8-3;8+3]=[5;11]$.<br>
Sur une droite graduée, cela veut dire que la distance du point d'abscisse $x$ au point d'abscisse $8$ est inférieure ou égale à $3$.
<div style="text-align:center;margin-top:8px;">
<img src="/mabemat/figures/2nde/chapitre-07/va2.svg" alt="droite graduée distance" style="max-height:150px;max-width:100%;">
</div>
</div>
</div>

<h3 class="subsubsection-title">11.3.4 Équations et inéquations</h3>

<h4 class="subsubsection-title" style="font-size:1rem;">Résolution d'équations</h4>

<div style="display:flex; gap:12px; align-items:center;">
<div style="flex:7 1 0; min-width:0;">
<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $k$, l'équation $\vert x\vert=k$ admet :
<ul>
<li>deux solutions $k$ et $-k$ si $\color{#8A9CC1}{k>0}$ ;</li>
<li>une unique solution égale à $0$ si $\color{#D36740}{k=0}$ ;</li>
<li>aucune solution si $\color{#A8C68A}{k<0}$ ;</li>
</ul>
</div>
</div>
</div>
<img src="/mabemat/figures/2nde/chapitre-07/va3.svg" alt="figure équation |x|=k" style="flex:3 1 0; min-width:0; max-height:200px; object-fit:contain;">
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
Résoudre dans $\R$ les équations suivantes.
<ol>
<li>$\vert x\vert=9$<br>
On applique directement la propriété du cours, comme $9>0$ :<br>
$x=-9$ ou $x=9$<br>
Donc $S=\{-9\,;\,9\}$</li>
<li>$\vert x\vert=-4$<br>
On applique directement la propriété du cours. Comme $-4<0$, l'équation n'a pas de solution.<br>
Donc $S=\emptyset$</li>
<li>$\vert x-3\vert=5$<br>
Cela signifie que $x-3=5$ ou $x-3=-5$.<br>
$x-3=5 \Rightarrow x=8$ &emsp; ou &emsp; $x-3=-5 \Rightarrow x=-2$<br>
Donc $S=\{-2\,;\,8\}$</li>
</ol>
</div>
</div>

<h4 class="subsubsection-title" style="font-size:1rem;">Résolution d'inéquations</h4>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $k$, l'inéquation $\color{#D36740}{\vert x\vert\leq k}$ admet pour ensemble de solutions :
<ul>
<li>$S=[-k;k]$ si $\color{#8A9CC1}{k>0}$ ;</li>
<li>$S=\{0\}$ si $\color{#D36740}{k=0}$ ;</li>
<li>$S=\emptyset$ si $\color{#A8C68A}{k<0}$ ;</li>
</ul>
Pour tout réel $k$, l'inéquation $\color{pink}{\vert x\vert\geq k}$ admet pour ensemble de solutions :
<ul>
<li>$S=]-\infty;-k]\cup[k;+\infty[$ si $\color{#8A9CC1}{k>0}$ ;</li>
<li>$S=\R$ si $\color{#A8C68A}{k\leq 0}$ ;</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
Résoudre dans $\R$ les inéquations suivantes.
<ol>
<li>$\vert x\vert\leq 7$<br>
On applique directement la propriété du cours avec $k=7>0$.<br>
Donc $S=[-7;7]$</li>
<li>$\vert x\vert\geq 5$<br>
On applique directement la propriété du cours avec $k=5>0$.<br>
Donc $S=]-\infty;-5]\cup[5;+\infty[$</li>
<li>$\vert x\vert\geq -2$<br>
On applique directement la propriété du cours avec $k=-2\leq 0$.<br>
Donc $S=\R$</li>
</ol>
</div>
</div>
