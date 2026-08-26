---
title: "Leçon complète"
---

<h2 class="subsection-title">11.1 Droite et produit scalaire</h2>

<div style="display:flex; align-items:center; gap:20px;">

<div style="display:inline-block; vertical-align:top; width:calc(64% - 12px);">
On munit le plan d'un repère <u>orthonormé</u>.

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
On considère une droite $(AB)$.<br>
On appelle vecteur normal à $(AB)$ tout vecteur orthogonal à $\overrightarrow{AB}$.
</div>
</div>
</div><img src="/mabemat/figures/1re/chapitre-11/fig3.svg" alt="vecteurs normaux à une droite" style="display:inline-block; vertical-align:top; width:calc(30% - 12px); max-height:200px; max-width:100%;">
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $(d)$ une droite passant par un point $A$ et de vecteur normal $\overrightarrow{n}$, et soit $M$ un point du plan.<br>
$M$ appartient à $(d)$ si et seulement si $\overrightarrow{AM}.\overrightarrow{n}=0$.
</div>
</div>

On en déduit le théorème suivant, qui relie les coordonnées d'un vecteur normal aux coefficients d'une équation cartésienne de la droite.

<div style="display:flex; align-items:center; gap:20px;">
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
</div><img src="/mabemat/figures/1re/chapitre-11/fig4.svg" alt="droite et vecteur normal" style="display:inline-block; vertical-align:top; width:calc(24% - 12px); max-height:200px; max-width:100%;">
</div>

<u>Rappel</u> : Une droite de vecteur directeur $\begin{pmatrix}
-b \\
a
\end{pmatrix}$ a une équation cartésienne de la forme $a x + b y + c =0$ où $c \in \R$ est déterminé avec un point de la droite.

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
La droite $(d)$ passe par le point $A$ de coordonnées $(4\,;\,3)$ et a le vecteur $\overrightarrow{n} \begin{pmatrix}5\\-5\end{pmatrix}$ comme vecteur normal.<br>
Déterminer une équation cartésienne de $(d)$. <br>
On sait, d'après le cours, que si une droite $(d)$ admet un vecteur normal de coordonnées $\overrightarrow {n} \begin{pmatrix}a\\b\end{pmatrix}$, alors une équation cartésienne de la droite $(d)$ est de la forme $ax+by+c=0$. <br>
Avec les données de l'énoncé, $\overrightarrow{n} \begin{pmatrix}5\\-5\end{pmatrix}$, on en déduit que $a = 5$ et $b=-5$. <br>
L'équation cartésienne est donc de la forme : $ 5 x -5 y + c=0$. <br>
Comme $A(4\,;\,3) \in(d)$, on a : $5 \times 4 -5 \times 3+ c=0$, soit $ c= -5$.<br>
Une équation cartésienne de la droite $(d)$ est donc : $\boldsymbol{5x-5y-5=0}$.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode :</div>
<div class="environment-content">
Pour déterminer un vecteur normal à une droite $(d)$ dont on connaît une équation :
<ol>
<li>On écrit d'abord cette équation sous la forme $ax+by+c=0$, c'est-à-dire avec tous les termes dans le même membre ;</li>
<li>Le vecteur $\overrightarrow{n}\begin{pmatrix} a \\ b\end{pmatrix}$ est alors normal à $(d)$, et le vecteur $\overrightarrow{u}\begin{pmatrix} -b \\ a\end{pmatrix}$ en est un vecteur directeur.</li>
</ol>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>$(d_1)$ a pour équation $4x-3y+7=0$ : elle est déjà sous la forme $ax+by+c=0$, avec $a=4$ et $b=-3$.<br>
Un vecteur normal à $(d_1)$ est donc $\overrightarrow{n_1}\begin{pmatrix} 4 \\ -3\end{pmatrix}$, et un vecteur directeur est $\overrightarrow{u_1}\begin{pmatrix} 3 \\ 4\end{pmatrix}$.</li>
<li>$(d_2)$ a pour équation $y=5x-2$ : cette équation est sous forme <em>réduite</em>, il faut d'abord la transformer.<br>
$y=5x-2 \Leftrightarrow 5x-y-2=0$, donc $a=5$ et $b=-1$ : un vecteur normal à $(d_2)$ est $\overrightarrow{n_2}\begin{pmatrix} 5 \\ -1\end{pmatrix}$.<br>
<strong>Attention :</strong> il ne faut surtout pas lire les coefficients directement sur $y=5x-2$, ce qui donnerait le vecteur $\begin{pmatrix} 5 \\ -2\end{pmatrix}$, qui n'est pas normal à $(d_2)$.</li>
<li>$(d_3)$ a pour équation $x=3$, c'est-à-dire $1\times x+0\times y-3=0$ : un vecteur normal est $\overrightarrow{n_3}\begin{pmatrix} 1 \\ 0\end{pmatrix}$, ce qui est cohérent puisque $(d_3)$ est une droite verticale.</li>
</ul>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Deux droites sont perpendiculaires si et seulement si leurs vecteurs normaux sont orthogonaux, c'est-à-dire si et seulement si le produit scalaire de ces deux vecteurs est nul.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Les droites $(d_1)$ d'équation $4x-3y+7=0$ et $(d_4)$ d'équation $3x+4y-1=0$ ont pour vecteurs normaux respectifs $\overrightarrow{n_1}\begin{pmatrix} 4 \\ -3\end{pmatrix}$ et $\overrightarrow{n_4}\begin{pmatrix} 3 \\ 4\end{pmatrix}$.<br>
Or $\overrightarrow{n_1}.\overrightarrow{n_4}=4\times 3+(-3)\times 4=12-12=0$ : ces deux vecteurs sont orthogonaux, donc les droites $\boldsymbol{(d_1)}$ et $\boldsymbol{(d_4)}$ <strong>sont perpendiculaires</strong>.
</div>
</div>

<h3 class="subsubsection-title">11.1.1 Projeté orthogonal d'un point sur une droite</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $(d)$ une droite et $M$ un point du plan.<br>
Le <strong>projeté orthogonal</strong> de $M$ sur $(d)$ est le point $H$ de $(d)$ tel que $(MH)$ soit perpendiculaire à $(d)$.<br>
C'est aussi le point de $(d)$ le plus proche de $M$ : la distance $MH$ est la <strong>distance du point $M$ à la droite $(d)$</strong>.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode :</div>
<div class="environment-content">
Pour déterminer les coordonnées du projeté orthogonal $H$ d'un point $M$ sur une droite $(d)$ d'équation $ax+by+c=0$ :
<ol>
<li>Le vecteur $\overrightarrow{n}\begin{pmatrix} a \\ b\end{pmatrix}$ est normal à $(d)$, donc c'est un <strong>vecteur directeur</strong> de la droite $(MH)$ ;</li>
<li>On détermine une équation cartésienne de $(MH)$ : c'est la droite passant par $M$ et de vecteur normal $\begin{pmatrix} -b \\ a\end{pmatrix}$, donc son équation est de la forme $-bx+ay+c'=0$, et $c'$ se calcule en utilisant les coordonnées de $M$ ;</li>
<li>On résout le système formé par les équations de $(d)$ et de $(MH)$ : la solution donne les coordonnées de $H$.</li>
</ol>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit $(d)$ la droite d'équation $2x-y+1=0$ et $M(3\,;\,4)$. Déterminer les coordonnées du projeté orthogonal $H$ de $M$ sur $(d)$.<br>
<u>Étape 1</u> : le vecteur $\overrightarrow{n}\begin{pmatrix} 2 \\ -1\end{pmatrix}$ est normal à $(d)$.<br>
<u>Étape 2</u> : $H$ appartient à la droite passant par $M$ et de vecteur directeur $\overrightarrow{n}$. Cette droite a pour vecteur normal $\begin{pmatrix} 1 \\ 2\end{pmatrix}$, donc une équation de la forme $x+2y+c'=0$.<br>
Comme $M(3\,;\,4)$ lui appartient : $3+2\times 4+c'=0$, donc $c'=-11$.<br>
La droite $(MH)$ a pour équation $x+2y-11=0$.<br>
<u>Étape 3</u> : on résout le système
$\left\{\begin{array}{l} 2x-y+1=0 \\ x+2y-11=0\end{array}\right.$<br>
La première équation donne $y=2x+1$. En remplaçant dans la seconde : $x+2(2x+1)-11=0$, soit $5x-9=0$, donc $x=\dfrac{9}{5}$.<br>
Alors $y=2\times \dfrac{9}{5}+1=\dfrac{23}{5}$.<br>
Le projeté orthogonal est $H\left(\dfrac{9}{5}\,;\,\dfrac{23}{5}\right)$.<br>
On peut en déduire la distance de $M$ à $(d)$ : $MH=\sqrt{\left(3-\dfrac{9}{5}\right)^2+\left(4-\dfrac{23}{5}\right)^2}=\sqrt{\dfrac{36}{25}+\dfrac{9}{25}}=\sqrt{\dfrac{45}{25}}=\dfrac{3\sqrt{5}}{5}$.
</div>
</div>

<h2 class="subsection-title">11.2 Cercle et produit scalaire</h2>

<h3 class="subsubsection-title">11.2.1 Cercle défini par son centre et son rayon</h3>

<div style="display:flex; align-items:center; gap:20px;">
<div class="environment theoreme" style="display:inline-block; vertical-align:top; width:calc(73% - 12px);">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
Dans un repère orthonormé, le cercle de centre $A ( x_A ; y_A )$ et de rayon $r \geq 0$ est l'ensemble des points $M(x;y)$ vérifiant l'équation :
$$( x - x_A )^2 + ( y - y_A )^2 = r^2$$
</div>
</div><img src="/mabemat/figures/1re/chapitre-11/fig5.svg" alt="cercle de centre A et de rayon r" style="display:inline-block; vertical-align:top; width:calc(25% - 12px); max-height:200px; max-width:100%;">
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>Dans un repère orthonormé, on a $A ( 0 ; 4 )$ et $B ( 4 ; 0 )$. Déterminer l'équation du cercle $(C)$ de diamètre $[AB]$.<br> 
Le centre est le point de coordonnées $( 2 ; 2 )$. Le rayon vaut $2\sqrt{2}$. <br>
Donc $(C)$ a pour équation : <br> 
$(x-2)^2+(y-2)^2=\left(2\sqrt{2}\right)^2$, soit : $(x^2-4x+4)+(y^2-4y+4)=8$.<br>
Donc : $x^2+y^2-4x-4y=0$</li>
<li>Dans un repère orthonormé du plan, on considère l'ensemble $E$ d'équation : $x^2+y^2-2x-10y+17=0$. <br>
Démontrer que l'ensemble $E$ est un cercle dont on déterminera les caractéristiques (centre, rayon).

<div class="math-display">
$$
\begin{aligned}
x^2+y^2-2x-10y+17=0 \Leftrightarrow& (x^2-2x)+(y^2-10y)+17=0 \\
\Leftrightarrow&(x-1)^2-1+(y-5)^2-25+17=0\\
 \Leftrightarrow&(x-1)^2+(y-5)^2=9=3^2 
\end{aligned}
$$
</div>

L'ensemble $E$ est le cercle de centre le point de coordonnées $(1 ; 5)$ et de rayon $3$.</li>
<li>Montrer que $x^2+y^2-x-3y+3=0$ n'est pas l'équation d'un cercle.

<div class="math-display">
$$
\begin{aligned}
x^2+y^2-x-3y+3=0 \Leftrightarrow& \left(x-\dfrac{1}{2}\right)^2-\dfrac{1}{4}+\left(y-\dfrac{3}{2}\right)^2-\dfrac{9}{4}+3=0 \\
\Leftrightarrow&\left(x-\dfrac{1}{2}\right)^2+\left(y-\dfrac{3}{2}\right)^2=-\dfrac{1}{2} 
\end{aligned}
$$
</div>

Ce qui est impossible ; l'ensemble des points vérifiant cette relation est donc l'ensemble vide.</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">11.2.2 Cercle défini par son diamètre</h3>

<div style="display:flex; align-items:center; gap:20px;">
<div class="environment theoreme" style="display:inline-block; vertical-align:top; width:calc(73% - 12px);">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
Le cercle $(C)$ de diamètre $[AB]$ est l'ensemble des points $M$ tels que $[AM]$ et $[MB]$ soient perpendiculaires, c'est-à-dire tels que $\overrightarrow{MA}.\overrightarrow{MB}=0$.
</div>
</div><img src="/mabemat/figures/1re/chapitre-11/fig6.svg" alt="cercle défini par son diamètre" style="display:inline-block; vertical-align:top; width:calc(25% - 12px); max-height:200px; max-width:100%;">
</div>

Démonstration. <br>
Soit $O$ le milieu du segment $[AB]$. <br>
On a $\overrightarrow{MA}.\overrightarrow{MB}=0 \Leftrightarrow (\overrightarrow{MO}+\overrightarrow{OA}). (\overrightarrow{MO}+\overrightarrow{OB})=0$.<br>
Comme $O$ est le milieu de $[AB]$, on a : $\overrightarrow{OB}=-\overrightarrow{OA}$. <br>
Soit : 
<div class="math-display">
$$
\begin{aligned}
(\overrightarrow{MO}+\overrightarrow{OA}). (\overrightarrow{MO}-\overrightarrow{OA})=0 \Leftrightarrow& \overrightarrow{MO}^2-\overrightarrow{OA}^2=0 \\
\Leftrightarrow& MO^2-OA^2=0 \\
\Leftrightarrow& MO^2=OA^2 \\
\Leftrightarrow& MO=OA \text{ (car ce sont des distances).}\end{aligned}
$$
</div>

$M$ appartient donc au cercle de centre $O$ et de rayon $OA$, c'est-à-dire le cercle de diamètre $[AB]$.

<h2 class="subsection-title">11.3 Exercice de synthèse</h2>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère la figure suivante, représentée dans un repère orthonormé $\big(O;~\vec{\imath},~\vec{\jmath}\big)$.

<div style="display:flex; align-items:center; gap:20px;">
<img src="/mabemat/figures/1re/chapitre-11/synthese.svg" alt="figure de l'exercice de synthèse" style="width:38%; max-height:320px; object-fit:contain;">
<div style="flex:1;">
On dispose des données suivantes :
<ul>
<li>Le quadrilatère $OABC$ est un carré de côté $4$ ;</li>
<li>On a $A(4~;~0)$, $B(4~;~4)$, $C(0~;~4)$, $I(4~;~3)$ ;</li>
<li>Le point $H$ est le projeté orthogonal du point $C$ sur la droite $(OI)$ ;</li>
<li>On note $\varepsilon$ le cercle de centre $D(2~;~2)$ et de rayon $0,5$.</li>
</ul>
</div>
</div>

<ol>
<li>
<ol type="a">
<li>Déterminer les coordonnées des vecteurs $\overrightarrow{OI}$ et $\overrightarrow{OC}$.<br>
On a $I\begin{pmatrix} 4\\3 \end{pmatrix}$ donc $\overrightarrow{OI} \begin{pmatrix} 4\\3 \end{pmatrix}$, et $C\begin{pmatrix} 0\\4 \end{pmatrix}$ donc $\overrightarrow{OC} \begin{pmatrix} 0\\4 \end{pmatrix}$.</li>
<li>En déduire le produit scalaire $\overrightarrow{OI}\cdot \overrightarrow{OC}$.<br>
On en déduit que $\overrightarrow{OI}\cdot \overrightarrow{OC}=4\times 0 + 3\times 4 = 12$.</li>
</ol>
</li>
<li>
<ol type="a">
<li>Exprimer le produit scalaire $\overrightarrow{OI} \cdot \overrightarrow{OC}$ en fonction des longueurs $OH$ et $OI$.<br>
Le point $H$ est le projeté orthogonal du point $C$ sur la droite $(OI)$, donc $\overrightarrow{OC}\cdot \overrightarrow{OI} = \overrightarrow{OH}\cdot \overrightarrow{OI}$.<br>
Les vecteurs $\overrightarrow{OH}$ et $\overrightarrow{OI}$ sont colinéaires et de même sens donc $\overrightarrow{OH}\cdot \overrightarrow{OI}= OH\times OI$.<br>
De plus, $\overrightarrow{OI}\cdot \overrightarrow{OC} = \overrightarrow{OC}\cdot \overrightarrow{OI}$.
On peut donc conclure que $\overrightarrow{OI}\cdot \overrightarrow{OC} = OH\times OI$.</li>
<li>Calculer la longueur $OI$.<br>
$\overrightarrow{OI} \begin{pmatrix} 4\\3 \end{pmatrix}$ donc $OI = \sqrt{4^2+3^2} = \sqrt{25} = 5$.</li>
<li>En déduire que $OH = 2,4$.<br>
On a $\overrightarrow{OI}\cdot \overrightarrow{OC} = OH\times OI$, $\overrightarrow{OI}\cdot \overrightarrow{OC} = 12$ et $OI=5$.<br>
On en déduit que $OH\times 5=12$ donc que $OH = \dfrac{12}{5}=2,4$.</li>
</ol>
</li>
<li>
<ol type="a">
<li>Déterminer une équation cartésienne de la droite $(CH)$.<br>
Le point $H$ est le projeté orthogonal du point $C$ sur la droite $(OI)$, donc les vecteurs $\overrightarrow{OI}$ et $\overrightarrow{CH}$ sont orthogonaux, donc le vecteur $\overrightarrow{OI}$ est un vecteur normal à la droite $(CH)$.<br>
Or $\overrightarrow{OI}$ a pour coordonnées $\begin{pmatrix} 4\\3 \end{pmatrix}$ donc la droite $(CH)$ a une équation cartésienne de la forme $4x+3y+c=0$, où $c$ est un réel à déterminer.<br>
Le point $C$ de coordonnées $\begin{pmatrix} 0\\4 \end{pmatrix}$ appartient à la droite $(CH)$, donc :
$4\times 0 + 3 \times 4 + c=0$ donc $c=-12$.<br>
La droite $(CH)$ a pour équation $4x+3y-12=0$.</li>
<li>Justifier qu'une équation du cercle $\varepsilon$ est $x^2 + y^2 - 4x - 4y + 7,75 = 0$.<br>
Le cercle $\varepsilon$ de centre $D(2\,;\,2)$ et de rayon $0,5$ a pour équation :
$(x-2)^2+(y-2)^2=0,5^2$ soit $x^2-4x+4+y^2-4y+4-0,25=0$,
c'est-à-dire $x^2+y^2-4x-4y +7,75=0$.</li>
<li>Le point $M(1,5~;~2)$ appartient-il à l'intersection du cercle $\varepsilon$ et de la droite $(CH)$ ? Justifier.

<div class="math-display">
$$
\begin{aligned}
x_{M}^2+y_{M}^2-4x_{M}-4y_{M} +7,75
& = 1,5^2 + 2^2 -4\times 1,5 - 4\times 2 + 7,75\\
& = 2,25 + 4 - 6 - 8 + 7,75\\
& = 0
\end{aligned}
$$
</div>

Donc $M \in \varepsilon$.

<div class="math-display">
$$
\begin{aligned}
4x_{M}+3y_{M}-12
& = 4\times 1,5 + 3\times 2 - 12\\
& = 6+6-12\\
& = 0
\end{aligned}
$$
</div>

Donc $M \in (CH)$.<br>
On peut donc dire que le point $M(1,5~;~2)$ appartient à l'intersection du cercle $\varepsilon$ et de la droite $(CH)$.</li>
</ol>
</li>
</ol>
</div>
</div>
