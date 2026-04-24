---
title: "Leçon complète"
---

<h2 class="subsection-title">1.1 Polynômes du second degré, trinômes</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Un <strong>trinôme</strong> est un polynôme de degré $2$, c'est-à-dire une fonction de la forme : <br>
$P(x)=ax^2+bx+c$ où $a\in \R^*$ et $b$ et $c$ sont des réels quelconques.<br>
On dit que c'est la <strong>forme développée</strong> de $P$.
</div>
</div>

<h3 class="subsubsection-title">1.1.1 Forme canonique</h3>

<div class="remarque">
Dans cette partie nous allons essayer de transformer l'écriture d'un trinôme du second degré jusqu'à ce que l'on obtienne une forme plus intéressante pour la suite (factorisation, résolutions d'équations, représentations graphiques...)
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Considérons la fonction $f$ définie par $f(x)=2x^2+12x-6$, c'est sa forme développée. <br>
Vérifions que $f(x)$ peut s'écrire $2(x+3)^2-24$. C'est sa forme canonique. <br>
$$2(x+3)^2-24=2(x^2+6x+9)-24=2x^2+12x+18-24=2x^2+12x-6$$
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode :</div>
<div class="environment-content">
Comment obtenir la forme canonique de $P(x)=3x^2+24x+1$ ? <br>
On factorise les deux premiers termes par $3$ : $P(x)=3(x^2+8x)+1$.<br>
Il suffit ensuite de remarquer que $x^2+8x$ est le début du développement de $(x+4)^2=x^2+8x+\textbf{16}$.<br>
Donc $x^2+8x=(x+4)^2-16$ et $P(x)=3\left((x+4)^2-16\right)+1=3(x+4)^2-48+1=3(x+4)^2-47$.
</div>
</div>

Démonstration - Cas général</em><br>

Soit $f(x)=ax^2+bx+c$ un trinôme du second degré avec $a\neq 0$. <br>On peut donc écrire : $f(x)=a\left(x^2+\dfrac{b}{a}x\right)+c$<br>
On reconnaît, dans la parenthèse, le début d'un développement d'identité remarquable, en effet :
$$\left( x+ \dfrac{b}{2a}\right)^2=x^2+\dfrac{b}{a}x + \dfrac{b^2}{4a^2} \text{ d'où } x^2+\dfrac{b}{a}x=\left( x+ \dfrac{b}{2a}\right)^2-\dfrac{b^2}{4a^2}$$
On en déduit que : $f(x)=a\left[\left(x+ \dfrac{b}{2a}\right)^2-\dfrac{b^2}{4a^2}\right] +c=a\left(x+ \dfrac{b}{2a}\right)^2-\dfrac{b^2}{4a}+c=a\left(x+ \dfrac{b}{2a}\right)^2+\dfrac{-b^2+4ac}{4a}$



<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Tout trinôme $P$ peut se mettre sous la forme $P(x)=a(x-\alpha)^2+\beta$ <br>
où $\alpha=-\dfrac{b}{2a}$ et $\beta=f(\alpha)=\dfrac{-b^2+4ac}{4a}$. C'est la <strong>forme canonique</strong> de $P$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Donner la forme canonique de $P(x)=3x^2+24x+1$. <br>
On calcule $\alpha=-\dfrac{b}{2a}=-\dfrac{24}{2\times 3}=-4$ et $\beta=P(\alpha)=P(-4)=3(-4)^2+24(-4)+1=-47$.<br>
On remplace : $P(x)=3\left(x-(-4)\right)^2-47=3(x+4)^2-47$
</div>
</div>

<h3 class="subsubsection-title">1.1.2 Courbe représentative d'un trinôme et variations</h3>

<div class="environment propriete">
<div class="environment-title">Propriété : $ $</div>
<div class="environment-content">

<ul>
<li>La courbe représentative du trinôme défini par $f(x)=ax^2+bx+c=a(x-\alpha)^2+\beta$ est une <strong>parabole</strong> :
</li>
$\qquad$- <strong>orientée vers le haut</strong> (c'est-à-dire aux branches tournées vers le haut) si $a$ est strictement <strong>positif</strong>. <br>
$\qquad$- <strong>orientée vers le bas</strong> (c'est à dire aux branches tournées vers le bas) si $a$ est strictement négatif.


<li> $f$ admet <strong>au plus deux racines distinctes</strong>, et il a toujours un <strong>extremum</strong> (maximum ou minimum) : c'est le <strong>sommet</strong> de la parabole dont les coordonnées sont $(\alpha ; \beta)$ où $\alpha=-\dfrac{b}{2a}$ et $\beta=P(\alpha)$.</li>
</ul>
</div>
</div>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; text-align:center;">

<!-- Colonne 1 -->
<div>
<img src="/mabemat/figures/1re/chapitre-01/fig1.svg" alt="figure 1" style="max-height:200px; max-width:100%; margin:0.5em 0;"> <br>
<img src="/mabemat/figures/1re/chapitre-01/fig2.svg" alt="figure 2" style="max-height:200px; max-width:100%; margin:0.5em 0;">
<br>
<strong>$f$ admet un minimum</strong>
</div>

<!-- Colonne 2 -->
<div>
<img src="/mabemat/figures/1re/chapitre-01/fig3.svg" alt="figure 3" style="max-height:200px; max-width:100%; margin:0.5em 0;"> <br>
<img src="/mabemat/figures/1re/chapitre-01/fig4.svg" alt="figure 4" style="max-height:200px; max-width:100%; margin:0.5em 0;">
<br>
<strong>$f$ admet un maximum</strong>
</div>

</div>


<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
La courbe représentative du trinôme $Q$ définie sur $\R$ par $Q(x)=-2x^2+4x+3$ est une parabole $C$ orientée vers le bas car $a=-2$ qui est négatif.<br>
$\alpha=-\dfrac{b}{2a}=\dfrac{-4}{2\times (-2)}=\dfrac{-4}{-4}=1$ et $Q(\alpha)=Q(1)=-2\times 1^2+4\times 1 +3=5$.<br>
Donc le sommet a pour coordonnées $S( 1 ; 5 )$.
</div>
</div>

<div class="remarque">
La parabole possède un <strong>axe de symétrie</strong>. <br> 
Il s'agit de la droite d'équation $x=-\dfrac{b}{2a}$.
</div>

<h2 class="subsection-title">1.2 Racines, factorisation et signe du trinôme</h2>

Dans toute cette partie, on considère le trinôme $P(x)=ax^2+bx+c$.

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
On dit que le réel $r$ est une <strong>racine</strong> du polynôme $P$ si $P(r)=0$.
</div>
</div>

Chercher les racines du trinôme $P$ revient à résoudre l'équation $P(x) = 0$.

<h3 class="subsubsection-title">1.2.1 Discriminant</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
On appelle <strong>discriminant</strong> de $P$ le nombre : $\Delta=b^2-4ac$.
</div>
</div>

<h3 class="subsubsection-title">1.2.2 Racines de $P$</h3>

D'après ce qu'on a vu précédemment : $ax^2+bx+c=0$ ssi $a\left[\left(x+ \dfrac{b}{2a}\right)^2-\dfrac{\Delta}{4a^2}\right]=0$.<br>
Il y a trois cas possibles : 
<ul>
<li>Si $\Delta>0$ : <br>
Alors $\Delta=\left(\sqrt{\Delta}\right)^2$ donc l'équation $ax^2+bx+c=0$ est équivalente à $a\left[\left(x+ \dfrac{b}{2a}\right)^2-\left(\dfrac{\sqrt{\Delta}}{2a}\right)^2\right]=0$ c'est à dire $a\left(x+ \dfrac{b}{2a}-\dfrac{\sqrt{\Delta}}{2a}\right)\left(x+ \dfrac{b}{2a}+\dfrac{\sqrt{\Delta}}{2a}\right)=0$.<br>
Un produit de facteurs est nul ssi l'un au moins des facteurs est nul. <br>
Ici, comme $a\neq 0$ : $x=\dfrac{-b-\sqrt{\Delta}}{2a}$ ou $x=\dfrac{-b+\sqrt{\Delta}}{2a}$.<br>
Il y a donc <strong>deux solutions</strong>.</li>
<li>Si $\Delta=0$ : <br>
Alors l'équation $ax^2+bx+c=0$ est équivalente à $a\left(x+ \dfrac{b}{2a}\right)^2=0$ c'est à dire $x=\dfrac{-b}{2a}$.<br>
Il y a donc <strong>une seule solution</strong>.</li>
<li>Si $\Delta<0$ : <br>
Alors le nombre $\dfrac{-\Delta}{4a^2}$ est strictement positif.<br>
$\left[\left(x+ \dfrac{b}{2a}\right)^2-\dfrac{\Delta}{4a^2}\right]$ est aussi strictement positif (somme et produit de nombres strictement positifs).
<br>
Il n'y a donc <strong>pas de solution</strong>.</li>
</ul>

<div class="environment theoreme">
<div class="environment-title">Théorème : </div>
<div class="environment-content">
<ul>
<li>Si $\Delta>0$, alors $P$ admet <strong>deux racines distinctes</strong> $x_1=\dfrac{-b-\sqrt{\Delta}}{2a}$ et $x_2=\dfrac{-b+\sqrt{\Delta}}{2a}$.<br>
De plus, on peut factoriser $P$ par : $P(x)=a(x-x_1)(x-x_2)$</li>
<li>Si $\Delta=0$, alors $P$ admet <strong>une unique racine</strong> $x_0=\dfrac{-b}{2a}$.<br>
De plus, on peut factoriser $P$ par : $P(x)=a(x-x_0)(x-x_0)=a(x-x_0)^2$.</li>
<li>Si $\Delta<0$, alors $P$ n'admet <strong>pas de racine réelle</strong>. <br>
De plus, on ne peut pas factoriser $P$.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Résoudre dans $\R$ les équations suivantes : 
<ol style="column-count:3; column-gap:2rem;">
<li>$2x^2 -x-6=0$</li>
<li>$2x^2 -3x+\dfrac{9}{8} =0$</li>
<li>$x^2 +3x+10=0$</li>
</ol>

<ol>
<li>Calculons le discriminant $\Delta=b^2-4ac=(-1)^2-4\times 2\times (-6)=1+48=49=7^2 >0$, l'équation $2x^2 -x-6=0$ a donc deux solutions : $$x_1=\dfrac{-b-\sqrt{\Delta}}{2a}=\dfrac{1-\sqrt{49}}{2\times 2}=\dfrac{1-7}{4}=\dfrac{-6}{4}=\dfrac{-3}{2} \text{ et } x_2=\dfrac{-b+\sqrt{\Delta}}{2a}=\dfrac{1+\sqrt{49}}{2\times 2}=\dfrac{1+7}{4}=\dfrac{8}{4}=2$$
Donc $S=\left\{\dfrac{-3}{2};2\right\}$. On peut écrire $2x^2 -x-6=2\left(x+\dfrac{3}{2}\right)(x-2)$.</li>
<li>Calculons le discriminant $\Delta=b^2-4ac=(-3)^2-4\times 2\times \dfrac{9}{8}=9-9=0$, l'équation $2x^2 -3x+\dfrac{9}{8} =0$ a donc une unique solution $x_0=-\dfrac{b}{2a}=-\dfrac{-3}{2\times 2}=\dfrac{3}{4}$. <br>
Donc $S=\left\{\dfrac{3}{4}\right\}$. On peut écrire $2x^2 -3x+\dfrac{9}{8}=2\left(x-\dfrac{3}{4}\right)^2$.</li>
<li>Calculons le discriminant $\Delta=b^2-4ac=3^2-4\times 1\times 10=9-40=-31<0$. <br>Donc l'équation $x^2 +3x+10=0$ n'a pas de solution réelle.</li>
</ol>
</div>
</div>

<h3 class="subsubsection-title">1.2.3 Signe de $P$</h3>

Soit $ax^2+bx+c$ un trinôme du second degré, avec $a\neq 0$; on a $ax^2+bx+c=a\left[\left(x+ \dfrac{b}{2a}\right)^2-\dfrac{\Delta}{4a^2}\right]$.
<ol>
<li>Si $\Delta<0$, alors $\left(x+ \dfrac{b}{2a}\right)^2-\dfrac{\Delta}{4a^2}>0$, donc $ax^2+bx+c$ est du signe de $a$.</li>
<li>Si $\Delta=0$, alors $\left(x+ \dfrac{b}{2a}\right)^2\geq 0$, donc $ax^2+bx+c$ s'annule pour $x=\dfrac{-b}{2a}$ et est du signe de $a$ pour les autres valeurs.</li>
<li>Si $\Delta>0$, alors $ax^2+bx+c=a(x-x_1)(x-x_2)$, où $x_1$ et $x_2$ sont les racines du trinôme (on suppose que $x_1 &lt x_2$), faisons un tableau de signes : 

<p style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-01/1.png" alt="figure 5" style="max-height:200px; max-width:100%;">
</p>
</li>
</ol>

<div class="environment theoreme">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
$P(x)=ax^2+bx+c$ est du signe de $a$ sauf « éventuellement » entre ses racines.
</div>
</div>

<div class="remarque">
Le signe d'un trinôme se retrouve facilement si l'on connaît le sens de variation de la fonction trinôme du second degré (l'orientation de la parabole).
</div>

<h3 class="subsubsection-title">1.2.4 Exemples</h3>

<ol>
<li>Déterminer le signe de $Q(x)=2x^2+3x-1$.<br>
$\Delta=3^2-4\times 2\times (-1)=17>0$ donc $Q$ admet deux racines $x_1=\dfrac{-3-\sqrt{17}}{4}$ et $x_2=\dfrac{-3+\sqrt{17}}{4}$.<br>
Son signe est donc : 
<p style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-01/2.png" alt="figure 6" style="max-height:100px; max-width:100%;">
</p>

</li>
<li>Déterminer le signe de $R(x)=-2x^2-7$ <br>
$\Delta=0^2-4\times(-2)\times(-7)=-56<0$ <br>
donc $R$ n'admet aucune racine et est toujours du signe de $a=-2<0$. 
</li>
<li>Résoudre dans $\R$ l'inéquation $3x^2+7x+2>0$.<br>
Le discriminant du trinôme est égal à : $\Delta=b^2-4ac=(7)^2-4\times 3\times 2=49-24=25=5^2>0$, <br>
ainsi, l'équation $3x^2+7x+2=0$ admet deux racines réelles :<br> $x_1=\dfrac{-b-\sqrt{\Delta}}{2a}=\dfrac{-7-5}{2\times 3}=-2$ et $x_2=\dfrac{-b+\sqrt{\Delta}}{2a}=\dfrac{-7+5}{2\times 3}=\dfrac{-1}{3}$.<br>
Le signe du trinôme se résume dans le tableau suivant : <br>

<p style="text-align:center;">
  <img src="/mabemat/figures/1re/chapitre-01/3.png" alt="figure 7" style="max-height:100px; max-width:100%;">
</p>


L'ensemble des solutions est donc $S=]-\infty;-2[\cup ]-\dfrac{1}{3};+\infty[$.</li>
</ol>

<h3 class="subsubsection-title">1.2.5 Résumé</h3>

<p style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-01/4.png" alt="figure 7" style="max-height:600px; max-width:100%;">
</p>
<h2 class="subsection-title">1.3 Applications</h2>

<h3 class="subsubsection-title">1.3.1 Détermination d'un domaine de définition</h3>
<div>
Déterminer le domaine de définition des fonctions suivantes : 
$f(x)=\dfrac{x^2-7}{2x^2-5x-3}$ et $g(x)=\sqrt{4x^2+x-5}$.<br>

Pour la fonction $f$, le dénominateur ne doit pas être nul, cherchons donc les racines. <br>
$\Delta=(-5)^2-4\times 2\times (-3)=49=7^2$ donc 
$x_1=\dfrac{5-7}{4}=\dfrac{-1}{2}$ et 
$x_2=\dfrac{5+7}{4}=3$. <br>

Ainsi, $D_f=\mathbb{R}\setminus \Biggl\lbrace \dfrac{-1}{2} ; 3 \Biggr\rbrace$.<br>

Pour la fonction $g$, l'intérieur de la racine doit être positif. 
Comme $a=4>0$, la fonction est négative entre les deux racines.<br>

$\Delta=1^2-4\times 4\times (-5)=81$ donc 
$x_1=\dfrac{-1-9}{8}=\dfrac{-5}{4}$ et 
$x_2=\dfrac{-1+9}{8}=1$. <br>

Donc $D_g=\left]-\infty;\dfrac{-5}{4}\right]\cup [1;+\infty[$.
</div>

<h3 class="subsubsection-title">1.3.2 Position relatives de deux paraboles</h3>

<strong> Rappel </strong> : Déterminer la position relative de $C_f$ et $C_g$, c'est dire <ul>
<li>pour quelles valeurs de $x$ $C_f$ est au dessus de $C_g$</li>
<li>et pour quelles valeurs de $x$ $C_f$ est en dessous de $C_g$.</li>
</ul>
Pour cela, on déterminera le <strong>signe</strong> de l'expression $f(x)-g(x)$.

<h3 class="subsubsection-title">1.3.3 Équations bi-carrées</h3>

Résoudre dans $\R$ par changement de variables $x^2=X$ l'équation $2x^4+11x^2-6=0$.<br>

On pose $X=x^2$ alors on a $2X^2+11X-6=0$. <br>
$\Delta=11^2-4\times 2 \times (-6)=169=13^2>0$ donc $X_1=\dfrac{-11-13}{4}=-6$ et $X_2=\dfrac{-11+13}{4}=\dfrac{1}{2}$<br> Ainsi, $x_1^2=X_1=-6<0$ impossible et $x_2^2=X_2=\dfrac{1}{2}$ d'où $x_2'=-\sqrt{\dfrac{1}{2}}$ et $x_2''=\sqrt{\dfrac{1}{2}}$. <br>Finalement, $S=\Biggl\lbrace -\sqrt{\dfrac12} ; \sqrt{\dfrac12} \Biggr\rbrace$.



<h3 class="subsubsection-title">1.3.4 Équations se ramenant à du second degré</h3>

<div class="environment theoreme">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
Si $P(x)=ax^2+bx+c$ admet des racines $x_1$ et $x_2$, alors $x_1+x_2=\dfrac{-b}{a}$ et $x_1 \times x_2=\dfrac{c}{a}$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Résoudre le système d'équations $E:\left\{
\begin{array}{ll}
x+y &=5 \\\\
x \times y & =-6
\end{array}
\right.$
<br>
On considère le polynôme $P(x)=x^2-5x-6$ alors $x$ et $y$ sont les racines de $P$ d'après le théorème avec $a=1$, $-b=5$, $c=-6$. <br>
$\Delta=(-5)^2-4\times 1\times (-6)=49=7^2>0$ et $x_1=\dfrac{5-7}{2}=-1=x$ et $x_2=\dfrac{5+7}{2}=6=y$.<br>
Vérification : $\left\{
\begin{array}{lll}
x+y &=-1+6&=5 \\\\
x \times y &= (-1)\times 6&=-6 
\end{array}
\right.$. <br>
Donc $S=(x,y)=(-1,6)$.
</div>
</div>
