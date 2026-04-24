---
title: "Leçon complète"
---

<h2 class="subsection-title">12.1 Relations dans le triangle</h2>

<h3 class="subsubsection-title">12.1.1 Théorème de la médiane</h3>

<div class="environment theoreme" style="display:inline-block; vertical-align:top; width:calc(66% - 12px);">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
Soit deux points $A$ et $B$ et $I$ milieu de $[AB]$.<br>
Alors pour tout point $M$ du plan, on a $MA^2+MB^2=2MI^2+\dfrac{AB^2}{2}$.
</div>
</div><img src="/mabemat/figures/1re/chapitre-12/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:top; width:calc(32% - 12px); max-height:200px; max-width:100%;">

Démonstration. <br>

<div class="math-display">
$$
\begin{align*}MA^2+MB^2&=(\overrightarrow{MA})^2+(\overrightarrow{MB})^2=(\overrightarrow{MI}+\overrightarrow{IA})^2+(\overrightarrow{MI}+\overrightarrow{IB})^2=(MI^2+2\overrightarrow{MI}
.\overrightarrow{IA}+IA^2)+(MI^2+2\overrightarrow{MI}
.\overrightarrow{IB}+IB^2)\\
&=2MI^2+2\overrightarrow{MI}
.(\overrightarrow{IA}+\overrightarrow{IB})+IA^2+IB^2=2MI^2+2\overrightarrow{MI}
.\overrightarrow{0}+\left(\dfrac{1}{2}AB\right)^2+\left(\dfrac{1}{2}AB\right)^2=2MI^2+\dfrac{AB^2}{2}
\end{align*}
$$
</div>
  

<div class="environment theoreme">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
Soit deux points $A$ et $B$ et $I$ milieu de $[AB]$.<br>
Alors pour tout point $M$ du plan, on a $\overrightarrow{MA}.\overrightarrow{MB}=MI^2-\dfrac{AB^2}{4}$.
</div>
</div>

Démonstration. <br><br>
$\overrightarrow{MA}.\overrightarrow{MB}=(\overrightarrow{MI}+\overrightarrow{IA})+(\overrightarrow{MI}+\overrightarrow{IB})=MI^2+\overrightarrow{MI}
.\overrightarrow{IB}+\overrightarrow{IA}
.\overrightarrow{MI}+\overrightarrow{IA}
.\overrightarrow{IB}
=2MI^2+\overrightarrow{MI}
.(\overrightarrow{IB}+\overrightarrow{IA})+\left(-\dfrac{1}{2}\overrightarrow{AB}\right).\left(\dfrac{1}{2}\overrightarrow{AB}\right)=2MI^2-\dfrac{AB^2}{4}$

  

<h3 class="subsubsection-title">12.1.2 Formules d'Al Kashi</h3>

Ces formules permettent de calculer la longueur du côté d'un triangle lorsqu'on connaît l'angle opposé et les deux autres longueurs des côtés, ou de calculer les angles d'un triangle dont on connaît les longueurs des trois côtés.

<div class="environment theoreme" style="display:inline-block; vertical-align:top; width:calc(55% - 12px);">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
On pose $AB = c$, $BC = a$ et $CA = b$. Alors :
<ul>
<li>$a^2=b^2+c^2-2bc\cos(\widehat{A})$</li>
<li>$b^2=a^2+c^2-2ac\cos(\widehat{B})$</li>
<li>$c^2=a^2+b^2-2ab\cos(\widehat{C})$</li>
</ul>
</div>
</div><img src="/mabemat/figures/1re/chapitre-12/fig2.svg" alt="figure 2" style="display:inline-block; vertical-align:top; width:calc(43% - 12px); max-height:200px; max-width:100%;">

  Démonstration. <br>
D'après la relation de Chasles, $\overrightarrow{BC}=\overrightarrow{BA}+\overrightarrow{AC}=\overrightarrow{AC}-\overrightarrow{AB}$ <br>
donc $ \overrightarrow{BC}^2=  \left(\overrightarrow{AC}-\overrightarrow{AB}\right)^2=\overrightarrow{AC}^2+\overrightarrow{AB}^2-2\overrightarrow{AC}.\overrightarrow{AB}$ or, $\overrightarrow{AC}.\overrightarrow{AB}=AC\times AB\times \cos(\widehat{A})$. D'où, $a^2=b^2+c^2-2bc\cos(\widehat{A})$.
  

<h3 class="subsubsection-title">12.1.3 Formules des sinus</h3>

<div class="environment theoreme">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
En gardant les mêmes notations et en notant $S$ l'aire du triangle $ABC$ :<br>
$S=\dfrac{1}{2}bc\sin(\widehat{A})=\dfrac{1}{2}ac\sin(\widehat{B})=\dfrac{1}{2}ab\sin(\widehat{C})$ et $\dfrac{\sin(\widehat{A})}{a}=\dfrac{\sin(\widehat{B})}{b}=\dfrac{\sin(\widehat{C})}{c}=\dfrac{2S}{abc}$.
</div>
</div>

  Démonstration. <br>
Formule de l'aire $A_{ABC}=\dfrac{a.h}{2}$, or $h=b\sin(\widehat{C})$.<br> Donc, $A_{ABC}=\dfrac{a.b.\sin(\widehat{C})}{2}$.<br>
<u>Formule des sinus</u> : Il suffit de multiplier la formule précédente par $\dfrac{2}{abc}$.
  

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>$AB=3, AC=4$ et $\widehat{A}=\dfrac{\pi}{6}$. Calculer $BC$ puis l'aire de $ABC$.
<br>On a $BC^2=AC^2+AB^2-2AC.AB\cos(\widehat{A})=4^2+3^2-2\times4\times 3\cos\left(\dfrac{\pi}{6}\right)=25-24\times \dfrac{\sqrt{3}}{2}=-12\sqrt{3}+25$ d'où $BC\approx 2,1$ et $\mathcal{A}_{ABC}=\dfrac{1}{2}AB\times AC\times \sin(\widehat{A})=6\sin\left(\dfrac{\pi}{6}\right)=6\times \dfrac{1}{2}=3$.</li>
<li>$AB=5, AC=9$ et $BC=8$. Calculer les angles de $ABC$ (en degrés arrondi à l'unité) et déterminer la valeur exacte de l'aire de $ABC$.<br>
<br> On a $\cos(\widehat{A})=\dfrac{AB^2+AC^2-BC^2}{2AB.AC}=\dfrac{25+81-64}{90}=\dfrac{7}{15}$ d'où $\widehat{A}\approx 62^\circ$.<br>
De même, $\widehat{B}\approx 84^\circ$ et $\widehat{C}\approx 34^\circ$. <br>
Alors $\mathcal{A}_{ABC}=\dfrac{1}{2}AB\times AC\times \sin(\widehat{A})=22,5\times \sin\left(\cos^{-1}\left(\dfrac{7}{15}\right)\right)\approx 19,9$.</li>
</ul>
</div>
</div>

<h2 class="subsection-title">12.2 Droite et produit scalaire</h2>

<div style="display:inline-block; vertical-align:top; width:calc(64% - 12px);">
On munit le plan d'un repère <u>orthonormé</u>.

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
On considère une droite $(AB)$.<br>
On appelle vecteur normal à $(AB)$ tout vecteur orthogonal à $\overrightarrow{AB}$.
</div>
</div>
</div><img src="/mabemat/figures/1re/chapitre-12/fig3.svg" alt="figure 3" style="display:inline-block; vertical-align:top; width:calc(34% - 12px); max-height:200px; max-width:100%;">

<div class="environment propriete">
<div class="environment-title">Corollaire :</div>
<div class="environment-content">
Deux droites sont perpendiculaires si et seulement si leurs vecteurs normaux sont orthogonaux (ont un produit scalaire nul).<br>
Dire qu'un point $M$ appartient à la droite $(d)$ passant par $A$ et de vecteur normal $\overrightarrow{n}$ équivaut à dire que $\overrightarrow{AM}.\overrightarrow{n}=0$. On obtient donc :
</div>
</div>

<div class="environment theoreme" style="display:inline-block; vertical-align:top; width:calc(74% - 12px);">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
Le plan est muni d'un repère orthonormé.
Soient $a$ et $b$ deux réels tels qu'au moins l'un des deux soit non nul.<br>
<ul>
<li>Une droite $(d)$ de vecteur normal $\overrightarrow{n}\begin{pmatrix}
a \\
b
\end{pmatrix}$ a une équation de la forme $ax+by+c=0$, où $c$ est un réel.<br></li>
<li>Réciproquement, si une droite $(d)$ admet pour équation $ax+by+c=0$, alors le vecteur $\overrightarrow{n}\begin{pmatrix}
a \\
b
\end{pmatrix}$ est un vecteur normal à cette droite.</li>
</ul>
</div>
</div><img src="/mabemat/figures/1re/chapitre-12/fig4.svg" alt="figure 4" style="display:inline-block; vertical-align:top; width:calc(24% - 12px); max-height:200px; max-width:100%;">

Démonstration. <br>
<u>Première partie du théorème</u> : 
Soit $A(x_A;y_A)$ un point de la droite $(d)$ de vecteur normal $\overrightarrow{n}\begin{pmatrix}
a \\\\
b
\end{pmatrix}$.<br>
Un point $M(x;y)$ appartient à $(d)$ si et seulement si $\overrightarrow{AM}.\overrightarrow{n}=0$.<br>
Or, $\overrightarrow{AM}\begin{pmatrix}
x-x_A \\\\
y-y_A
\end{pmatrix}$ donc $\overrightarrow{AM}.\overrightarrow{n}=(x-x_A)a+(y-y_A)b=ax+by-ax_A-by_A$.<br>
Ainsi, $M$ appartient à $(d)$ si et seulement si : $ax+by+c=0$ avec $c=-ax_A-by_A$.
  

<h2 class="subsection-title">12.3 Cercle et produit scalaire</h2>

<h3 class="subsubsection-title">12.3.1 Cercle défini par son centre et son rayon</h3>

<div class="environment theoreme" style="display:inline-block; vertical-align:top; width:calc(73% - 12px);">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
Dans un repère orthonormé, le cercle de centre $A ( x_A ; y_A )$ et de rayon $r \geq 0$ est l'ensemble des points $M(x;y)$ vérifiant l'équation :
$$( x - x_A )^2 + ( y - y_A )^2 = r^2$$
</div>
</div><img src="/mabemat/figures/1re/chapitre-12/fig5.svg" alt="figure 5" style="display:inline-block; vertical-align:top; width:calc(25% - 12px); max-height:200px; max-width:100%;">

  Démonstration. <br>
Par définition, $M ( x ; y )$ appartient à $(C)$ si et seulement si $AM = r$.<br>
Comme les distances sont des nombres positifs : $M\in (C) \Leftrightarrow AM^2=r^2$. Or, $AM^2=( x - x_A )^2 + ( y - y_A )^2$.
  

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>Dans un repère orthonormé, on a $A ( 0 ; 4 )$ et $B ( 4 ; 0 )$. <br>Déterminer l'équation du cercle $(C)$ de diamètre $[AB]$.
<br> Le centre est le point de coordonnées $( 2 ; 2 )$. Le rayon vaut $2\sqrt{2}$.
Donc $(C)$ a pour équation : <br> $(x-2)^2+(y-2)^2=\left(2\sqrt{2}\right)^2$, soit : $(x^2-4x+4)+(y^2-4y+4)=8$ ,donc : $x^2+y^2-4x-4y=0$</li>
<li>Dans un repère orthonormé du plan, on considère l'ensemble $E$ d'équation : $x^2+y^2-2x-10y+17=0$. Démontrer que l'ensemble $E$ est un cercle dont on déterminera les caractéristiques (centre, rayon).

<div class="math-display">
$$
\begin{align*}
&x^2+y^2-2x-10y+17=0 \Leftrightarrow (x^2-2x)+(y^2-10y)+17=0 \\
\Leftrightarrow&(x-1)^2-1+(y-5)^2-25+17=0 \Leftrightarrow(x-1)^2+(y-5)^2=9=3^2 
\end{align*}
$$
</div>

L'ensemble $E$ est le cercle de centre le point de coordonnées $(1 ; 5)$ et de rayon $3$.</li>
<li>Montrer que $x^2+y^2-x-3y+3=0$ n'est pas l'équation d'un cercle.

$$x^2+y^2-x-3y+3=0 \\
\Leftrightarrow\left(x^2-\dfrac{1}{2}\right)^2-\dfrac{1}{4}+\left(y^2-\dfrac{3}{2}\right)^2-\dfrac{9}{4}+3=0 
\Leftrightarrow\left(x^2-\dfrac{1}{2}\right)^2+\left(y^2-\dfrac{3}{2}\right)^2=-\dfrac{1}{2} $$
Ce qui est impossible ; l'ensemble des points vérifiant cette relation est donc l'ensemble vide.</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">12.3.2 Cercle défini par son diamètre</h3>

<div class="environment theoreme" style="display:inline-block; vertical-align:top; width:calc(73% - 12px);">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
Le cercle $(C)$ de diamètre $[AB]$ est l'ensemble des points $M$ tels que $[AM]$ et $[MB]$ soient perpendiculaires, ie tels que $\overrightarrow{MA}.\overrightarrow{MB}=0$.
</div>
</div><img src="/mabemat/figures/1re/chapitre-12/fig6.svg" alt="figure 6" style="display:inline-block; vertical-align:top; width:calc(25% - 12px); max-height:200px; max-width:100%;">

  Démonstration. <br>
Soit $O$ le milieu du segment $[AB]$. On a $\overrightarrow{MA}.\overrightarrow{MB}=0 \Leftrightarrow (\overrightarrow{MO}+\overrightarrow{OA}). (\overrightarrow{MO}+\overrightarrow{OB})=0$.<br>
Comme $O$ est le milieu de $[AB]$, on a $\overrightarrow{OB}=-\overrightarrow{OA}$. <br>
Soit : $(\overrightarrow{MO}+\overrightarrow{OA}). (\overrightarrow{MO}-\overrightarrow{OA})=0 \Leftrightarrow \overrightarrow{MO}^2-\overrightarrow{OA}^2=0 \Leftrightarrow MO^2-OA^2=0 \Leftrightarrow MO^2=OA^2 \Leftrightarrow MO=OA$ (car ce sont des distances).<br>
$M$ appartient donc au cercle de centre $O$ et de rayon $OA$, c'est-à-dire le cercle de diamètre $[AB]$.
  
