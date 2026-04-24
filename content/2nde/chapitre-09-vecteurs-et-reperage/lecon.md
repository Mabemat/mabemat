---
title: "Leçon complète"
---

<h2 class="subsection-title">9.1 Repère du plan</h2>

<div style="display:inline-block; vertical-align:middle; width:calc(70% - 12px);">
Trois points distincts deux à deux $O$, $I$ et $J$ du plan forment un repère, que l'on peut noter $(O,I,J)$.<br>
L'origine $O$ et les unités $OI$ et $OJ$ permettent de graduer les axes $(OI)$ et $(OJ)$.<br>
Si on pose $\overrightarrow{i}=\overrightarrow{OI}$ et $\overrightarrow{j}=\overrightarrow{OJ}$, alors ce repère se note aussi $(O,\overrightarrow{i},\overrightarrow{j})$.
</div><img src="/mabemat/figures/2nde/chapitre-09/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:middle; width:calc(28% - 12px); max-height:300px; max-width:100%;">

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
<ul>
<li>On appelle <strong>repère du plan</strong> tout triplet $(O,\overrightarrow{i},\overrightarrow{j})$, où $O$ est un point et $\overrightarrow{i}$ et $\overrightarrow{j}$ sont deux vecteurs non colinéaires.</li>
<li>Un repère est dit <strong>orthogonal</strong> si $\overrightarrow{i}$ et $\overrightarrow{j}$ ont des directions perpendiculaires.</li>
<li>Un repère est dit <strong>orthonormé</strong> s'il est orthogonal et si $\overrightarrow{i}$ et $\overrightarrow{j}$ sont de norme $1$.</li>
</ul>
</div>
</div>

<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-09/fig2.svg" alt="figure 2" style="max-height:300px; max-width:100%;">
</div>

<h3 class="subsubsection-title">9.1.1 Coordonnées d'un vecteur</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(61% - 12px);">
Soit $M$ un point quelconque d'un repère $(O,\overrightarrow{i},\overrightarrow{j})$ et un vecteur $\overrightarrow{u}$ tel que $\overrightarrow{OM}=\overrightarrow{u}$.<br>
Les <strong>coordonnées du vecteur</strong> $\overrightarrow{u}$ sont les coordonnées du point $M$ à savoir $(x_M,y_M)$.<br>
On note $\overrightarrow{u}\begin{pmatrix} x_M \\ y_M \end{pmatrix}$.<br>
On a $\overrightarrow{OM}=x_M\overrightarrow{i}+y_M\overrightarrow{j}$.
</div><img src="/mabemat/figures/2nde/chapitre-09/fig3.svg" alt="figure 3" style="display:inline-block; vertical-align:middle; width:calc(37% - 12px); max-height:250px; max-width:100%;">
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode - Déterminer les coordonnées d'un vecteur par lecture graphique.</div>
<div class="environment-content">
Déterminer les coordonnées des vecteurs $\overrightarrow{AB}$, $\overrightarrow{CD}$, $\overrightarrow{EF}$ par lecture graphique :
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-09/fig4.svg" alt="figure 4" style="max-height:300px; max-width:100%;">
</div>
Pour aller de $A$ vers $B$, on effectue une translation de $4$ carreaux vers la droite $(+4)$ et une translation de $3$ carreaux vers le haut $(+3)$. <br>
On trace ainsi un « chemin » de vecteurs $\overrightarrow{i}$ et $\overrightarrow{j}$ mis bout à bout reliant l'origine et l'extrémité du vecteur $\overrightarrow{AB}$. <br>
Ainsi, $\overrightarrow{AB}=4\overrightarrow{i}+3\overrightarrow{j}$. Les coordonnées de $\overrightarrow{AB}$ sont donc $\begin{pmatrix} 4 \\ 3 \end{pmatrix}$. <br>
De même, $\overrightarrow{CD}\begin{pmatrix} -2 \\ 5 \end{pmatrix}$ et $\overrightarrow{EF}\begin{pmatrix} 4 \\ 3 \end{pmatrix}$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $A$ et $B$ deux points de coordonnées $(x_A,y_A)$ et $(x_B,y_B)$ dans un repère $(O,\overrightarrow{i},\overrightarrow{j})$.<br>
Le vecteur $\overrightarrow{AB}$ a pour coordonnées $\begin{pmatrix} x_B-x_A \\ y_B-y_A \end{pmatrix}$.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode - Déterminer les coordonnées d'un vecteur par calcul.</div>
<div class="environment-content">
Soit $A(1;1)$, $B(5;4)$, $C(-1;-2)$, $D(-3;3)$, $E(2;-5)$ et $F(6;-2)$.<br>
Déterminer les coordonnées des vecteurs $\overrightarrow{AB}$, $\overrightarrow{CD}$ et $\overrightarrow{EF}$.<br>
$\overrightarrow{AB}\begin{pmatrix} x_B-x_A \\ y_B-y_A \end{pmatrix}=\begin{pmatrix} 5-1 \\ 4-1 \end{pmatrix}=\begin{pmatrix} 4 \\ 3 \end{pmatrix}$,
$\overrightarrow{CD}\begin{pmatrix} -3-(-1) \\ 3-(-2) \end{pmatrix}=\begin{pmatrix} -2 \\ 5 \end{pmatrix}$, $\overrightarrow{EF}\begin{pmatrix} 6-2 \\ -2-(-5) \end{pmatrix}=\begin{pmatrix} 4 \\ 3 \end{pmatrix}$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $\overrightarrow{u}$ et $\overrightarrow{v}$ deux vecteurs de coordonnées $\begin{pmatrix} x \\ y \end{pmatrix}$ et  $\begin{pmatrix} x' \\ y' \end{pmatrix}$ dans un repère $(O,\overrightarrow{i},\overrightarrow{j})$ et un réel $k$.
<ul>
<li>$\overrightarrow{u}=\overrightarrow{v}$ équivaut à $x=x'$ et $y=y'$ autrement dit $\overrightarrow{u}$ et $\overrightarrow{v}$ ont les mêmes coordonnées.</li>
<li>Le vecteur $\overrightarrow{u}+\overrightarrow{v}$ a pour coordonnées $\begin{pmatrix} x+x' \\ y+y' \end{pmatrix}$.</li>
<li>Le vecteur $k\overrightarrow{u}$ a pour coordonnées $\begin{pmatrix} kx \\ ky \end{pmatrix}$.</li>
</ul>
</div>
</div>

<div class="remarque">
Si $\overrightarrow{u}$ a pour coordonnées $\begin{pmatrix} x \\ y \end{pmatrix}$ alors $-\overrightarrow{u}$ a pour coordonnées $\begin{pmatrix} -x \\ -y \end{pmatrix}$.
</div>

<strong>Retour sur la propriété coordonnées d'un vecteur.</strong>

<div class="environment methode">
<div class="environment-title">Méthode - Appliquer les formules sur les coordonnées des vecteurs.</div>
<div class="environment-content">
En reprenant l'exemple précédent, calculer les coordonnées des vecteurs $4\overrightarrow{AB}$, $3\overrightarrow{CD}$, et $4\overrightarrow{AB}-3\overrightarrow{CD}$. <br>
On a $\overrightarrow{AB}\begin{pmatrix} 4 \\ 3 \end{pmatrix}$ et
$\overrightarrow{CD}\begin{pmatrix} -2 \\ 5 \end{pmatrix}$.<br> Donc $4\overrightarrow{AB}\begin{pmatrix} 4\times 4 \\ 4\times 3 \end{pmatrix}=\begin{pmatrix} 16 \\ 12 \end{pmatrix}$ et $3\overrightarrow{CD}\begin{pmatrix} 3\times (-2) \\ 3\times 5 \end{pmatrix}=\begin{pmatrix} -6 \\ 15 \end{pmatrix}$. <br>
Enfin, $4\overrightarrow{AB}-3\overrightarrow{CD}\begin{pmatrix} 16-(-6) \\ 12-15 \end{pmatrix}=\begin{pmatrix} 22 \\ -3 \end{pmatrix}$.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode - Calculer les coordonnées d'un point défini par une égalité vectorielle.</div>
<div class="environment-content">
Dans un repère, soit les points $A(-1;2)$, $B(3;-4)$ et $C(-3,2)$.<br>
Déterminer les coordonnées du point $D$ tel que $ABCD$ soit un parallélogramme.
<br>
$ABCD$ est un parallélogramme si et seulement si $\overrightarrow{AB}=\overrightarrow{DC}$. <br>
On a $\overrightarrow{AB}\begin{pmatrix} -3-(-1) \\ -4-2 \end{pmatrix}=\begin{pmatrix} -2 \\ -6 \end{pmatrix}$ et $\overrightarrow{DC}\begin{pmatrix} -3-x_D \\ 2-y_D \end{pmatrix}$. <br>
Donc $-3-x_D=-2$ et $2-y_D=-6$.<br>
Soit $x_D=-1$ et $y_D=8$.
</div>
</div>

<h2 class="subsection-title">9.2 Colinéarité de deux vecteurs</h2>

<h3 class="subsubsection-title">9.2.1 Définitions et premières propriétés</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Dire que deux vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ sont colinéaires signifie qu'il existe un réel $k$ tel que $\overrightarrow{v}=k\overrightarrow{u}$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-09/fig5.svg" alt="figure 5" style="max-height:300px; max-width:100%;">
</div>
On a $\overrightarrow{v}=-3\overrightarrow{u}$. <br>
Donc $\overrightarrow{u}$ et $\overrightarrow{v}$ sont colinéaires.
</div>
</div>

<div class="remarque">
${\color{#E6B459}{\bullet}}$ Par convention, le vecteur $\overrightarrow{0}$ est colinéaire à tout vecteur du plan.<br>
${\color{#E6B459}{\bullet}}$ Deux vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ sont <strong>colinéaires</strong> lorsqu'ils ont la <strong>même direction</strong>.
</div>

<h3 class="subsubsection-title">9.2.2 Critère de colinéarité</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $\overrightarrow{u}$ et $\overrightarrow{v}$ deux vecteurs de coordonnées $\begin{pmatrix} x \\ y \end{pmatrix}$ et  $\begin{pmatrix} x' \\ y' \end{pmatrix}$ dans un repère $(O,\overrightarrow{i},\overrightarrow{j})$. <br>
Dire que $\overrightarrow{u}$ et $\overrightarrow{v}$ sont colinéaires revient à dire que les coordonnées des deux vecteurs sont proportionnelles soit : $xy'-yx'=0$.
</div>
</div>

Démonstration :
<div class="environment-content">
Nous allons procéder par double implication.
<ul>
<li>Si l'un des vecteurs est nul alors l'équivalence est évidente.</li>
<li>Supposons maintenant que les vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ soient non nuls.</li>
</ul>
Dire que les vecteurs $\overrightarrow{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\overrightarrow{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$ sont colinéaires équivaut à dire qu'il existe un nombre réel $k$ tel que $\overrightarrow{u}=k\overrightarrow{v}$.<br>
Les coordonnées des vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ sont donc proportionnelles et le tableau ci-dessous est un tableau de proportionnalité :
<table>
<tr>
<th>$x$</th>
<th>$x'$</th>
</tr>
<tr>
<td>$y$</td>
<td>$y'$</td>
</tr>
</table>
Donc : $xy'=yx'$ soit encore $xy'-yx'=0$.<br>
<table>
<tr>
<th>$x$</th>
<th>$x'$</th>
</tr>
<tr>
<td>$y$</td>
<td>$y'$</td>
</tr>
</table>
Réciproquement, si $xy' - yx' = 0$.
Le vecteur $\overrightarrow{v}$ étant non nul, l'une de ses coordonnées est non nulle. <br>Supposons que
$x'\neq 0$. Posons alors $k = \dfrac{x}{x'}$. L'égalité $xy' – yx' = 0$ s'écrit : $yx' = xy'$ <br>
Soit $y=\dfrac{xy'}{x'}=ky'$.
Comme on a déjà $x=kx'$, on en déduit que $\overrightarrow{u}=k\overrightarrow{v}$.
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $\overrightarrow{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\overrightarrow{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$ deux vecteurs dans un repère $(O,\overrightarrow{i},\overrightarrow{j})$.<br>
Le nombre $xy'-yx'$ est appelé déterminant des vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$.<br>
On note : $\det(\overrightarrow{u};\overrightarrow{v})=\begin{vmatrix} x & x' \\ y & y' \end{vmatrix}=xy'-yx'$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Dire que $\overrightarrow{u}$ et $\overrightarrow{v}$ sont colinéaires, revient à dire que $\det(\overrightarrow{u};\overrightarrow{v})=0$.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode - Vérifier si deux vecteurs sont colinéaires.</div>
<div class="environment-content">
Dans chaque cas, vérifier si les vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ sont colinéaires : $\overrightarrow{u}\begin{pmatrix} 4 \\ 9 \end{pmatrix}$ et $\overrightarrow{v}\begin{pmatrix} 11 \\ 23 \end{pmatrix}$ puis $\overrightarrow{u}\begin{pmatrix} 20 \\ 6 \end{pmatrix}$ et $\overrightarrow{v}\begin{pmatrix} 30 \\ 9 \end{pmatrix}$<br>
<ul>
<li>$\det(\overrightarrow{u};\overrightarrow{v})=\begin{vmatrix} 4 & 11 \\ 9 & 23 \end{vmatrix}=4\times 23 -9\times 11=92-99=-7\neq 0$. <br>
Les vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ ne sont pas colinéaires.</li>
<li>$\det(\overrightarrow{u};\overrightarrow{v})=\begin{vmatrix} 20 & 30 \\ 6 & 9 \end{vmatrix}=20\times 9 -6\times 30=180-180=0$.<br>
Les vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ sont colinéaires.<br>
Nous pouvons trouver le réel $k$ tel que $\overrightarrow{u}=k\overrightarrow{v}$. On a donc $20=30k$ et $6=9k$, <br>d'où, $k=\dfrac{20}{30}=\dfrac{2}{3}$ et $k=\dfrac{6}{9}=\dfrac{2}{3}$. Ainsi, $\overrightarrow{u}=\dfrac{2}{3}\overrightarrow{v}$.</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">9.2.3 Applications</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<ol>
<li>Dire que les droites $(AB)$ et $(CD)$ sont <strong>parallèles</strong> équivaut à dire que les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{CD}$ sont <strong>colinéaires</strong>.
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-09/fig6.svg" alt="figure 6" style="max-height:200px; max-width:100%;">
</div>
</li>
<li>Dire que $3$ points $A$, $B$ et $C$ sont <strong>alignés</strong> équivaut à dire que les vecteurs $\overrightarrow{AC}$ et $\overrightarrow{AB}$ (par exemple) sont <strong>colinéaires</strong>.
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-09/fig7.svg" alt="figure 7" style="max-height:300px; max-width:100%;">
</div>
</li>
</ol>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Dans le repère $(O,\overrightarrow{i},\overrightarrow{j})$, $A(-3;0)$, $B(-3;4)$, $C(5;0)$, $D(1;-2)$ et $E(9;-2)$.<br>
Montrer que $ABCD$ est un trapèze et que les points $B,C$ et $E$ sont alignés.
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-09/fig8.svg" alt="figure 8" style="max-height:200px; max-width:100%;">
</div>
<ul>
<li>$\overrightarrow{AD}\begin{pmatrix} x_D-x_A \\ y_D-y_A \end{pmatrix}=\begin{pmatrix} 1-(-3) \\ -2-0 \end{pmatrix}=\begin{pmatrix} 4 \\ -2 \end{pmatrix}$ et  $\overrightarrow{BC}\begin{pmatrix} 5-(-3) \\ 0-4 \end{pmatrix}=\begin{pmatrix} 8 \\ -4 \end{pmatrix}$. <br>Donc $\overrightarrow{BC}=2\overrightarrow{AD}$ donc $\overrightarrow{BC}$ et $\overrightarrow{AD}$ sont colinéaires donc $(BC) \parallel (AD)$ donc $ABCD$ est un trapèze.</li>
<li>$\overrightarrow{BC}\begin{pmatrix} 8 \\ -4 \end{pmatrix}$ et $\overrightarrow{BE}\begin{pmatrix} 9-(-3) \\ -2-4 \end{pmatrix}=\begin{pmatrix} 12 \\ -6 \end{pmatrix}$. <br>
$\det(\overrightarrow{BC};\overrightarrow{BE})=\begin{vmatrix} 8 & 12 \\ -4 & -6 \end{vmatrix}=8\times (-6)-(-4)\times 12=-48+48=0$.<br> Donc $\overrightarrow{BC}$ et $\overrightarrow{BE}$ sont colinéaires. Les points $B,C$ et $E$ sont donc alignés.</li>
</ul>
</div>
</div>

<h2 class="subsection-title">9.3 Calculs dans un repère orthonormé</h2>

Pour toute cette partie, on se place dans un repère <strong>orthonormé</strong> $(O,\overrightarrow{i},\overrightarrow{j})$ du plan.

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit un vecteur $\overrightarrow{u}\begin{pmatrix} x \\ y \end{pmatrix}$. La norme du vecteur $\overrightarrow{u}$ est $\Vert \overrightarrow{u} \Vert=\sqrt{x^2+y^2}$.
</div>
</div>

Démonstration :
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(64% - 12px);">
Dans le repère orthonormé $(O,\overrightarrow{i},\overrightarrow{j})$, on a $\overrightarrow{u}=x\overrightarrow{i}+y\overrightarrow{j}$. <br>Le théorème de Pythagore assure, dans le triangle de la figure que <br>$\Vert \overrightarrow{u} \Vert ^2=x^2\Vert \overrightarrow{i} \Vert^2+y^2\Vert \overrightarrow{j} \Vert^2$. <br>
Le repère étant orthonormé, $\Vert \overrightarrow{i} \Vert^2=1=\Vert \overrightarrow{j} \Vert^2$, d'où $\Vert \overrightarrow{u} \Vert ^2=x^2+y^2$.<br> Ainsi, $x^2+y^2\geq 0$, $\Vert \overrightarrow{u} \Vert=\sqrt{x^2+y^2}$.
</div><img src="/mabemat/figures/2nde/chapitre-09/fig9.svg" alt="figure 9" style="display:inline-block; vertical-align:middle; width:calc(34% - 12px); max-height:200px; max-width:100%;">
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soient $A$ et $B$ deux points du plan.<br>
La distance $AB$ est égale à la norme du vecteur $\Vert \overrightarrow{AB}\Vert$. Ainsi, $$AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(66% - 12px);">
Soient $A(3;-2)$ et $B(2;4)$. On a :
<div class="math-display">
$$
\begin{aligned}
AB &= \sqrt{(x_B-x_A)^2+(y_B-y_A)^2} \\
&= \sqrt{(2-3)^2+(4-(-2))^2} \\
&= \sqrt{(-1)^2+6^2} \\
&= \sqrt{37} \\
&\approx 6{,}08
\end{aligned}
$$
</div>
</div><img src="/mabemat/figures/2nde/chapitre-09/fig10.svg" alt="figure 10" style="display:inline-block; vertical-align:middle; width:calc(32% - 12px); max-height:300px; max-width:100%;">
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soient $A(x_A;y_A)$ et $B(x_B;y_B)$ deux points du plan. <br>
Les coordonnées du milieu $I$ du segment $[AB]$ sont $I=\left(\dfrac{x_A+x_B}{2};\dfrac{y_A+y_B}{2}\right)$.
</div>
</div>

Démonstration :
<div class="environment-content">
$I$ est le milieu de $[AB]$ donc $\overrightarrow{AI}=\overrightarrow{IB}$. On a donc, $\overrightarrow{AI}=\begin{pmatrix} x_I-x_A \\ y_I-y_A \end{pmatrix}$ et $\overrightarrow{IB}=\begin{pmatrix} x_B-x_I \\ y_B-y_I \end{pmatrix}$. <br>Ces vecteurs sont égaux, donc $x_I-x_A=x_B-x_I$ et $y_I-y_A=y_B-y_I$.<br>
D'où $2x_I=x_A+x_B$ et $2y_I=y_A+y_B$. <br>
<br>
Finalement, on a bien $x_I=\dfrac{x_A+x_B}{2}$ et $y_I=\dfrac{y_A+y_B}{2}$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(67% - 12px);">
Soient $A(3;-2)$ et $B(2;4)$ et $I$ le milieu de $[AB]$.<br>
On a $x_I=\dfrac{x_A+x_B}{2}=\dfrac{3+2}{2}=\dfrac{5}{2}$ et $y_I=\dfrac{y_A+y_B}{2} =\dfrac{-2+4}{2}=1$.<br>
Le point $I$ a donc pour coordonnées $\left(\dfrac{5}{2};1\right)$.
</div><img src="/mabemat/figures/2nde/chapitre-09/fig11.svg" alt="figure 11" style="display:inline-block; vertical-align:middle; width:calc(31% - 12px); max-height:300px; max-width:100%;">
</div>
</div>
