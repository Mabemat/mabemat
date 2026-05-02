---
title: "Leçon complète"
---

<h2 class="subsection-title">7.1 Le produit scalaire de deux vecteurs</h2>

<h3 class="subsubsection-title">7.1.1 Pré-requis</h3>

<div class="environment definition">
<div class="environment-title">Définition : Norme d'un vecteur.</div>
<div class="environment-content">
Une unité de longueur étant choisie, la norme d'un vecteur $\overrightarrow{u} = \overrightarrow{AB}$ est la longueur $AB$.<br>
On note $\vert \vert \overrightarrow{u} \vert \vert=\vert \vert \overrightarrow{AB} \vert \vert=AB$.<br>
Si $\vert \vert \overrightarrow{u} \vert \vert=1$, le vecteur est unitaire.
</div>
</div>

<strong>Conséquences </strong>: <br>
<ul>
<li>$\vert \vert \overrightarrow{AB} \vert \vert=0$ équivaut à $A=B$.</li>
<li>Pour tout nombre réel $k$ et tout vecteur $\overrightarrow{u}$, $\vert \vert k\overrightarrow{u} \vert \vert=\vert k \vert \times\vert \vert \overrightarrow{u} \vert \vert$.</li>
<li>Dans un repère orthonormé, si $\overrightarrow{u}$ a pour coordonnées $(x;y)$, alors $\vert \vert \overrightarrow{u} \vert \vert=\sqrt{x^2+y^2}$.</li>
</ul>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
$ $<br>
<div style="display:flex; gap:12px; align-items:flex-start;">
<div style="flex:7 1 0; min-width:0;">
Soient $\overrightarrow{u}$ et $\overrightarrow{v}$ deux vecteurs non nuls.<br>
Le <strong>projeté orthogonal</strong> de $\overrightarrow{u}$ sur $\overrightarrow{v}$ est le vecteur obtenu en projetant les extrémités de $\overrightarrow{u}$ sur une droite de vecteur directeur $\overrightarrow{v}$.<br>
Dans ce cours, on le notera souvent $\overrightarrow{u_p}$.
</div>
<img src="/mabemat/figures/1re/chapitre-07/fig1.svg" alt="figure 1" style="flex:3 1 0; min-width:0; max-height:200px; object-fit:contain; align-self:flex-start;">
</div>
</div>
</div>

<h3 class="subsubsection-title">7.1.2 À l'aide du projeté orthogonal</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soient $\overrightarrow{u}$ et $\overrightarrow{v}$ deux vecteurs.<br>
Le <strong>produit scalaire</strong> de $\overrightarrow{u}$ et $\overrightarrow{v}$ (noté $\langle \overrightarrow{u};\overrightarrow{v}\rangle$ ou plus souvent $\overrightarrow{u}.\overrightarrow{v}$) est un réel obtenu par :
<ul>
<li>$\vert \vert \overrightarrow{u_p} \vert \vert \times \vert \vert \overrightarrow{v} \vert \vert$ si $\overrightarrow{u_p}$ et $\overrightarrow{v}$ sont de même sens.</li>
<li>$-\vert \vert \overrightarrow{u_p} \vert \vert \times \vert \vert \overrightarrow{v} \vert \vert$ si $\overrightarrow{u_p}$ et $\overrightarrow{v}$ sont de sens opposé.</li>
<li>$0$ si $\overrightarrow{u}$ ou $\overrightarrow{v}$ est le vecteur nul, ou si $\overrightarrow{u_p}$ est le vecteur nul.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Par commodité, dans ces quatre exemples, on place $\overrightarrow{v}$ horizontalement, et l'unité est le carreau.

<div style="text-align:center;">
    <img src="/mabemat/figures/1re/chapitre-07/fig2.svg" alt="figure 2" style="max-height:300px; max-width:100%;">
</div>


</div>
</div>

<div class="remarque">
Dans le cas de vecteurs <strong>colinéaires</strong>, <ul>
<li>si les vecteurs sont de sens opposé, on a $\overrightarrow{u}.\overrightarrow{v}=-\vert \vert \overrightarrow{u} \vert \vert \times \vert \vert \overrightarrow{v} \vert \vert$ car $\cos\left(\overrightarrow{u};\overrightarrow{v}\right)=-1$ ;</li>
<li>sinon, $\overrightarrow{u}.\overrightarrow{v}=\vert \vert \overrightarrow{u} \vert \vert \times \vert \vert \overrightarrow{v} \vert \vert$ car $\cos\left(\overrightarrow{u};\overrightarrow{v}\right)=1$ ;</li>
</ul>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout vecteur $\overrightarrow{u}$, on a $\overrightarrow{u}.\overrightarrow{u}=\vert \vert \overrightarrow{u} \vert \vert^2$ que l'on note aussi $\overrightarrow{u}^2$.<br>
De même $\overrightarrow{AB}^2=\overrightarrow{AB}.\overrightarrow{AB}=AB^2$.
</div>
</div>

<h2 class="subsection-title">7.2 Autres expressions équivalentes du produit scalaire</h2>

<div class="environment theoreme">
<div class="environment-title">Théorème : $ $</div>
<div class="environment-content">
<div style="display:flex; gap:12px; align-items:flex-start;">
<div style="flex:6 1 0; min-width:0;">
Soient $\overrightarrow{u}$ et $\overrightarrow{v}$, on a :
<ul>
<li>(Cosinus) $\overrightarrow{u}.\overrightarrow{v}=\vert \vert \overrightarrow{u} \vert \vert\times \vert \vert \overrightarrow{v} \vert \vert \times \cos\left(\overrightarrow{u};\overrightarrow{v}\right)$.</li>
<li>(Normes) $\overrightarrow{u}.\overrightarrow{v}=\dfrac{1}{2}\left(\vert \vert \overrightarrow{u}+\overrightarrow{v} \vert \vert^2-\vert \vert \overrightarrow{u} \vert \vert^2-\vert \vert \overrightarrow{v} \vert \vert^2\right)$ ou <br>
$\overrightarrow{u}.\overrightarrow{v}=\dfrac{1}{2}\left( \vert \vert \overrightarrow{u} \vert \vert^2+\vert \vert \overrightarrow{v} \vert \vert^2 - \vert \vert \overrightarrow{u}-\overrightarrow{v} \vert \vert^2\right)$.</li>
<li>(Analytique) Dans un repère <strong>orthonormé</strong>, on a : <br>$\overrightarrow{u}.\overrightarrow{v}=x_{\overrightarrow{u}}x_{\overrightarrow{v}}+y_{\overrightarrow{u}}y_{\overrightarrow{v}}$.</li>
</ul>
</div>
<img src="/mabemat/figures/1re/chapitre-07/fig3.svg" alt="figure 3" style="flex:4 1 0; min-width:0; max-height:200px; object-fit:contain; align-self:flex-start;">
</div>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Calculons $\overrightarrow{AC}.\overrightarrow{CB}$ dans les trois cas suivants : 

<ol>
<li>Soit $ABC$ tel que $BC=3$, $AC=1$ et $\widehat{BCA}=\dfrac{\pi}{4}$.

<div class="math-display">
$$
\begin{align*}
\overrightarrow{AC}.\overrightarrow{CB}&=-\overrightarrow{CA}.\overrightarrow{CB}\\
&=-CA\times CB \times \cos(\widehat{C})\\
&=-1\times 3 \times \cos\left(\dfrac{\pi}{4}\right) =-3\dfrac{\sqrt{2}}{2}
\end{align*}
$$
</div></li>
<li>Soit $ABC$ tel que $AB=3$, $AC=4$ et $BC=6$.

<div class="math-display">
$$
\begin{align*}
\overrightarrow{AC}.\overrightarrow{CB}&=\dfrac{1}{2}\left(\vert \vert \overrightarrow{AC}+\overrightarrow{CB} \vert \vert^2-\vert \vert \overrightarrow{AC} \vert \vert^2-\vert \vert \overrightarrow{CB} \vert \vert^2\right)\\
&=\dfrac{1}{2}\left(\vert \vert \overrightarrow{AB}\vert \vert^2-\vert \vert \overrightarrow{AC} \vert \vert^2-\vert \vert \overrightarrow{CB} \vert \vert^2\right)\\
&=\dfrac{1}{2}\left(3^2-4^2-6^2\right) =-\dfrac{43}{2}
\end{align*}
$$
</div></li>
<li>Dans un repère orthonormé, soit $A(3;-1)$, $B(-3;5)$ et $C(2;2)$.
<br> Alors $\overrightarrow{AC}\begin{pmatrix}
2-3 \\
2-(-1)
\end{pmatrix}=\begin{pmatrix}
-1\\
3
\end{pmatrix} $ et  $\overrightarrow{CB}\begin{pmatrix}
-3-2 \\
5-2
\end{pmatrix}=\begin{pmatrix}
-5 \\
3
\end{pmatrix} $.<br>
On a donc :<br>$\overrightarrow{AC}.\overrightarrow{CB}=-1\times (-5) + 3 \times 3 =5+9=14$.</li>
</ol>
</div>
</div>

<h2 class="subsection-title">7.3 Propriétés</h2>

<h3 class="subsubsection-title">7.3.1 Propriétés algébriques</h3>

<div class="environment propriete">
<div class="environment-title">Propriété : $ $</div>
<div class="environment-content">

<ul>
<li><strong>Commutativité</strong> : $\overrightarrow{u}.\overrightarrow{v}=\overrightarrow{v}.\overrightarrow{u}$.</li>
<li><strong>Produit par un nombre</strong> : pour tout réel $k$, on a $(k\overrightarrow{u}).\overrightarrow{v}=k(\overrightarrow{u}.\overrightarrow{v})=k\overrightarrow{u}.\overrightarrow{v}$.</li>
<li><strong>Distributivité</strong> : $\left(\overrightarrow{u}+\overrightarrow{v}\right).\overrightarrow{w}=\overrightarrow{u}.\overrightarrow{w}+\overrightarrow{v}.\overrightarrow{w}$.</li>
</ul>
</div>
</div>

Démonstration. <br>
Très rapide à l'aide de l'expression analytique.


Le produit scalaire se comporte exactement comme un produit de réels.

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère deux vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ tels que $\vert \vert \overrightarrow{u} \vert \vert=2$, $\vert \vert \overrightarrow{v} \vert \vert=3$ et $\overrightarrow{u}.\overrightarrow{v}=4,5$. <br>
Calculons $\left(\overrightarrow{u}+3\overrightarrow{v}\right).\left(-2\overrightarrow{u}+2\overrightarrow{v}\right)$.
<br>
$\left(\overrightarrow{u}+3\overrightarrow{v}\right).\left(-2\overrightarrow{u}+2\overrightarrow{v}\right)=-2\overrightarrow{u}.\overrightarrow{u}+2\overrightarrow{u}.\overrightarrow{v}-6\overrightarrow{v}.\overrightarrow{u}+6\overrightarrow{v}.\overrightarrow{v}=-2\vert \vert \overrightarrow{u} \vert \vert^2-4\overrightarrow{u}.\overrightarrow{v}+6\vert \vert \overrightarrow{v} \vert \vert^2=-2\times2^2-4\times 4,5 +6\times 3^2 =28$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Corollaire - Identités remarquables.</div>
<div class="environment-content">

<ul>
<li>$\vert \vert \overrightarrow{u}+\overrightarrow{v} \vert \vert^2=\vert \vert \overrightarrow{u} \vert \vert^2+\vert \vert \overrightarrow{v} \vert \vert^2 +2\overrightarrow{u}.\overrightarrow{v}$</li>
<li>$\vert \vert \overrightarrow{u}-\overrightarrow{v} \vert \vert^2=\vert \vert \overrightarrow{u} \vert \vert^2+\vert \vert \overrightarrow{v} \vert \vert^2 -2\overrightarrow{u}.\overrightarrow{v}$</li>
<li>$\left(\overrightarrow{u}+\overrightarrow{v}\right).\left(\overrightarrow{u}-\overrightarrow{v}\right)=\vert \vert \overrightarrow{u} \vert \vert^2-\vert \vert \overrightarrow{v} \vert \vert^2$</li>
</ul>
</div>
</div>

Démonstration. <br>
$\vert \vert \overrightarrow{u}+\overrightarrow{v} \vert \vert^2=\left(\overrightarrow{u}+\overrightarrow{v}\right).\left(\overrightarrow{u}+\overrightarrow{v}\right)=\overrightarrow{u}.\overrightarrow{u}+\overrightarrow{u}.\overrightarrow{v}+\overrightarrow{v}.\overrightarrow{u}+\overrightarrow{v}.\overrightarrow{v}=\vert \vert \overrightarrow{u} \vert \vert^2+\vert \vert \overrightarrow{v} \vert \vert^2 +2\overrightarrow{u}.\overrightarrow{v}$<br>
$\vert \vert \overrightarrow{u}-\overrightarrow{v} \vert \vert^2=\left(\overrightarrow{u}-\overrightarrow{v}\right).\left(\overrightarrow{u}-\overrightarrow{v}\right)=\overrightarrow{u}.\overrightarrow{u}-\overrightarrow{u}.\overrightarrow{v}-\overrightarrow{v}.\overrightarrow{u}+\overrightarrow{v}.\overrightarrow{v}=\vert \vert \overrightarrow{u} \vert \vert^2-\vert \vert \overrightarrow{v} \vert \vert^2 +2\overrightarrow{u}.\overrightarrow{v}$<br>
$\left(\overrightarrow{u}+\overrightarrow{v}\right).\left(\overrightarrow{u}-\overrightarrow{v}\right)=\overrightarrow{u}.\overrightarrow{u}-\overrightarrow{u}.\overrightarrow{v}+\overrightarrow{v}.\overrightarrow{u}-\overrightarrow{v}.\overrightarrow{v}=\vert \vert \overrightarrow{u} \vert \vert^2-\vert \vert \overrightarrow{v} \vert \vert^2$
 

<h3 class="subsubsection-title">7.3.2 Orthogonalité</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tous vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ non nuls, on a $\overrightarrow{u}\perp \overrightarrow{v} \Leftrightarrow \overrightarrow{u}.\overrightarrow{v}=0 \Leftrightarrow x_{\overrightarrow{u}}x_{\overrightarrow{v}}+y_{\overrightarrow{u}}y_{\overrightarrow{v}}=0$.
</div>
</div>

Démonstration. <br>
Soient $\overrightarrow{u}$ et $\overrightarrow{v}$ deux vecteurs.<br>
Pour faciliter la démonstration, on leur donne la même origine $A$, et on pose $B$ et $C$ tels que $\overrightarrow{u}=\overrightarrow{AB}$ et $\overrightarrow{v}=\overrightarrow{AC}$.<br>
Il vient alors $BC^2=\vert \vert \overrightarrow{BA}+\overrightarrow{BC} \vert \vert^2=\vert \vert -\overrightarrow{u}+\overrightarrow{v} \vert \vert^2=\vert \vert \overrightarrow{u} \vert \vert^2 +\vert \vert \overrightarrow{v} \vert \vert^2 -2\overrightarrow{u}.\overrightarrow{v}=AB^2+AC^2-2\overrightarrow{u}.\overrightarrow{v}$ $(1)$<br>
Si $\overrightarrow{u}.\overrightarrow{v}=0$, alors $(1)$ devient $BC^2=AB^2+AC^2$ et par la réciproque du théorème de Pythagore, $ABC$ est rectangle en $A$, donc $\overrightarrow{u}\perp \overrightarrow{v}$.<br>
Si $\overrightarrow{u}\perp \overrightarrow{v}$ alors par le théorème de Pythagore $BC^2=AB^2+AC^2$ donc d'après $(1)$, $-2\overrightarrow{u}.\overrightarrow{v}=0$ et donc $\overrightarrow{u}.\overrightarrow{v}=0$.
 

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère deux vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ tels que $\vert \vert \overrightarrow{u} \vert \vert=2$, $\vert \vert \overrightarrow{v} \vert \vert=3$ et $\overrightarrow{u}.\overrightarrow{v}=4$.<br>
Déterminer $k$ tels que les vecteurs $2\overrightarrow{u}+\overrightarrow{v}$ et $-\overrightarrow{u}+k\overrightarrow{v}$ soient orthogonaux. <br>
On cherche $k$ tel que

<div class="math-display">
$$
\begin{align*}
\left(2\overrightarrow{u}+\overrightarrow{v}\right).\left(-\overrightarrow{u}+k\overrightarrow{v}\right)&=0\\
-2\overrightarrow{u}.\overrightarrow{u}+8k\overrightarrow{u}.\overrightarrow{v}-\overrightarrow{u}.\overrightarrow{v}+k\overrightarrow{v}.\overrightarrow{v}&=0\\
-2\times 2^2+8k-4+k\times 3^2&=0\\
17k&=12\\
k&=\dfrac{12}{17}
\end{align*}
$$
</div>
</div>
</div>
