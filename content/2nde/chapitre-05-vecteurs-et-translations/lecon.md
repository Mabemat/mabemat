---
title: "Leçon complète"
---

<h2 class="subsection-title">5.1 Notion de vecteurs</h2>

<h3 class="subsubsection-title">5.1.1 Translation de vecteur $\overrightarrow{AB}$</h3>

<div style="display:flex; gap:12px; align-items:center;">
<div style="flex:7 1 0; min-width:0;">
Sur la figure ci-contre, on a construit l'image $(F_2)$ de la figure $(F_1)$ par la translation qui transforme $A$ en $B$. <br>
La flèche que l'on a tracée allant de $A$ jusqu'à $B$ indique la direction, le sens et la longueur du déplacement que l'on doit effectuer pour construire l'image d'un point.
</div>
<img src="/mabemat/figures/2nde/chapitre-05/drapeau.png" alt="drapeau" style="flex:3 1 0; min-width:0; max-height:200px; object-fit:contain;">
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $A$ et $B$ deux points distincts du plan. <br>
La translation qui transforme $A$ en $B$ est appelée <strong>translation de vecteur $\overrightarrow{AB}$</strong>.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété : $ $</div>
<div class="environment-content">
<div style="display:flex; gap:12px; align-items:center;">
<div style="flex:8 1 0; min-width:0;">
Lorsque $A$ et $B$ sont distincts, le vecteur $\overrightarrow{AB}$ est caractérisé par :
<ul>
<li>sa <strong>direction</strong> : celle de la droite $(AB)$ ;</li>
<li>son <strong>sens</strong> : de $A$ vers $B$ ;</li>
<li>sa <strong>longueur</strong> : la longueur $AB$.</li>
</ul>
Cette longueur est appelée <strong>norme</strong> du vecteur $\overrightarrow{AB}$. On la note $\left\Vert\overrightarrow{AB}\right\Vert$.
</div>
<img src="/mabemat/figures/2nde/chapitre-05/fig1.svg" alt="figure 1" style="flex:2 1 0; min-width:0; max-height:200px; object-fit:contain;">
</div>
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode - Construire l'image d'une figure par une translation</div>
<div class="environment-content">
Construire l'image $M'N'O'P'$ du trapèze $MNOP$ la translation de vecteur $\overrightarrow{AA'}$. <br>
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-05/fig2.svg" alt="figure 2" style="max-height:300px; max-width:100%;">
</div>
</div>
</div>

<h3 class="subsubsection-title">5.1.2 Égalité de deux vecteurs</h3>

<div style="display:flex; gap:12px; align-items:flex-start;">
<div style="flex:7 1 0; min-width:0;">
<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $A$, $B$, $C$ et $D$ quatre points.<br>
Les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{CD}$ sont égaux signifie que
$D$ est l'image de $C$ par la translation de vecteur $\overrightarrow{AB}$.<br>
On note $\overrightarrow{AB}=\overrightarrow{CD}$.
</div>
</div>
<div class="environment propriete" style="margin-top:12px;">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<ol>
<li>Les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{CD}$ sont égaux si, et seulement si, ils ont même direction, même sens et même norme.</li>
<li>$\overrightarrow{AB}=\overrightarrow{CD}$ si, et seulement si, les segments $[AD]$ et $[BC]$ ont le même milieu.</li>
<li>$\overrightarrow{AB}=\overrightarrow{CD}$ si, et seulement si, $ABDC$ est un parallélogramme.</li>
</ol>
</div>
</div>
</div>
<img src="/mabemat/figures/2nde/chapitre-05/fig3.svg" alt="figure 3" style="flex:3 1 0; min-width:0; max-height:200px; object-fit:contain; align-self:center;">
</div>
<div class="remarque">
Dans la propriété $\color{#8A9CC1}{3.}$, $ABDC$ peut être un parallélogramme aplati.<br>
D'après la propriété $\color{#8A9CC1}{2.}$, $\overrightarrow{AI}=\overrightarrow{IB}$ si, et seulement si, $[AB]$ et $[II]$ ont le même milieu. En convenant que le milieu de $[II]$ est le point $I$, on obtient la propriété suivante.
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<div style="display:flex; gap:12px; align-items:center;">
<div style="flex:7 1 0; min-width:0;">
Soit $A$ et $B$ deux points distincts.<br>
Le point $I$ est le milieu de $[AB]$ si, et seulement si, $\overrightarrow{AI}=\overrightarrow{IB}$.
</div>
<img src="/mabemat/figures/2nde/chapitre-05/fig4.svg" alt="figure 4" style="flex:3 1 0; min-width:0; max-height:100px; object-fit:contain;">
</div>
</div>
</div>

<h3 class="subsubsection-title">5.1.3 Vecteur $\overrightarrow{u}$</h3>

<img src="/mabemat/figures/2nde/chapitre-05/fig5.svg" alt="figure 5" style="display:block;margin-left:auto;margin-right:auto;max-height:250px;max-width:100%;">

Sur la figure ci-contre, la translation de vecteur $\overrightarrow{AB}$ transforme $C$ en $D$, $E$ en $F$ et $G$ en $H$. <br>On a donc $\overrightarrow{AB}=\overrightarrow{CD}=\overrightarrow{EF}=\overrightarrow{GH}$.<br>
$\overrightarrow{AB}$, $\overrightarrow{CD}$, $\overrightarrow{EF}$ et $\overrightarrow{GH}$ sont des <strong>représentants</strong> d'un même vecteur, que l'on peut convenir d'appeler par une seule lettre, par Exemple $\overrightarrow{u}$. <br>
Tous ces représentants ont la même direction, le même sens et la même norme.<br>
$\overrightarrow{AB}$ est le représentant d'<strong>origine</strong> $A$ du vecteur $\overrightarrow{u}$. Son <strong>extrémité</strong> est le point $B$.

<div class="remarque">
Un vecteur a une infinité de représentants.
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Le vecteur dont les représentants sont $\overrightarrow{AA}$, $\overrightarrow{BB}$, $\overrightarrow{CC}$,$\ldots$ est appelé le <strong>vecteur nul</strong>.<br>
On le note $\overrightarrow{0}$.
</div>
</div>

<h2 class="subsection-title">5.2 Somme de deux vecteurs</h2>

<div class="environment definition">
<div class="environment-title">Définition : </div>
<div class="environment-content">
<div style="display:flex; gap:12px; align-items:center;">
<div style="flex:7 1 0; min-width:0;">
La somme de deux vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ est le vecteur associé à la translation résultant de l'enchaînement des translations de vecteur $\overrightarrow{u}$ et de vecteur $\overrightarrow{v}$. <br>On note ce vecteur $\overrightarrow{u}+\overrightarrow{v}$
</div>
<img src="/mabemat/figures/2nde/chapitre-05/fig6.svg" alt="figure 6" style="flex:3 1 0; min-width:0; max-height:200px; object-fit:contain;">
</div>
</div>
</div>

<div class="environment theoreme">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
Pour tous les points $A$, $B$, $C$ et $D$ :
<ul>
<li><strong>Relation de Chasles : </strong> $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$</li>
<li>$\overrightarrow{AB}+\overrightarrow{AC}=\overrightarrow{AD}$ si, et seulement si, le quadrilatère $ABDC$ est un parallélogramme.</li>
</ul>
</div>
</div>

<div style="display:inline-block; vertical-align:top; width:calc(49% - 12px);">
1. Si $\overrightarrow{AB}$ est un représentant de $\overrightarrow{u}$ et $\overrightarrow{BC}$ est un représentant de $\overrightarrow{v}$ on a : <br>
<img src="/mabemat/figures/2nde/chapitre-05/fig7.svg" alt="figure 7" style="display:block;margin-left:auto;margin-right:auto;max-height:250px;max-width:100%;">
</div><div style="display:inline-block; vertical-align:top; width:calc(49% - 12px);">
2. Si $\overrightarrow{AB}$ est un représentant de $\overrightarrow{u}$ et $\overrightarrow{AC}$ est un représentant de $\overrightarrow{v}$ on a : <br>
<img src="/mabemat/figures/2nde/chapitre-05/fig8.svg" alt="figure 8" style="display:block;margin-left:auto;margin-right:auto;max-height:250px;max-width:100%;">
</div>

<div style="display:inline-block; vertical-align:middle; width:calc(73% - 12px);">
D'après la relation de Chasles, $\overrightarrow{AB}+\overrightarrow{BA}=\overrightarrow{AA}=\overrightarrow{0}$. <br>On a donc $\overrightarrow{AB}+\overrightarrow{BA}=\overrightarrow{0}$. <br>On dit que le vecteur $\overrightarrow{BA}$ est <strong>l'opposé</strong> du vecteur $\overrightarrow{AB}$ et on note : $\overrightarrow{BA}=-\overrightarrow{AB}$.
</div><img src="/mabemat/figures/2nde/chapitre-05/fig9.svg" alt="figure 9" style="display:inline-block; vertical-align:middle; width:calc(25% - 12px); max-height:150px; max-width:100%;">

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $\overrightarrow{u}$, $\overrightarrow{v}$ et $\overrightarrow{w}$ trois vecteurs.
<ul style="column-count:2; column-gap:2rem;">
<li>$\overrightarrow{u}+\overrightarrow{v}=\overrightarrow{v}+\overrightarrow{u}$</li>
<li>$(\overrightarrow{u}+\overrightarrow{v})+\overrightarrow{w}=\overrightarrow{u}+(\overrightarrow{v}+\overrightarrow{w})=\overrightarrow{u}+\overrightarrow{v}+\overrightarrow{w}$</li>
<li>$\overrightarrow{u}+\overrightarrow{0}=\overrightarrow{u}$</li>
<li>$\overrightarrow{u}-\overrightarrow{v}=\overrightarrow{u}+(-\overrightarrow{v})$</li>
</ul>
</div>
</div>

<h2 class="subsection-title">5.3 Produit d'un vecteur par un réel</h2>

<div class="environment definition">
<div class="environment-title">Définition</div>
<div class="environment-content">
<ul>
<li>Si $k$ est un nombre réel non nul et $\overrightarrow{u}\neq \overrightarrow{0}$.<br>$k\overrightarrow{u}$ est le vecteur défini par :
<ol>
<li>sa direction : $k\overrightarrow{u}$ et $\overrightarrow{u}$ ont la même direction ;</li>
<li>son sens : si $k>0$, $k\overrightarrow{u}$ a le même sens que $\overrightarrow{u}$ ; si $k<0$, $k\overrightarrow{u}$ et $\overrightarrow{u}$ sont de sens contraires ;</li>
<li>sa norme : $\left\Vert k\overrightarrow{u}\right\Vert=\lvert k\rvert\times\left\Vert\overrightarrow{u}\right\Vert$</li>
</ol>
</li>
<li>Si $k=0$, $0\overrightarrow{u}=\overrightarrow{0}$ et si $\overrightarrow{u}=\overrightarrow{0}$, $k\overrightarrow{0}=\overrightarrow{0}$.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<img src="/mabemat/figures/2nde/chapitre-05/fig10.svg" alt="figure 10" style="max-height:300px; max-width:100%;">
</div>
</div>

<div class="remarque">
Les droites portées par les vecteurs $\overrightarrow{u}$ et $k\overrightarrow{u}$ sont parallèles.
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $\overrightarrow{u}$, $\overrightarrow{v}$ deux vecteurs, et $k$, $k'$ deux réels.
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;column-gap:2rem;">
<ul>
<li>$k(\overrightarrow{u}+\overrightarrow{v})=k\overrightarrow{u}+k\overrightarrow{v}$</li>
</ul>
<ul>
<li>$(k+k')\overrightarrow{u}=k\overrightarrow{u}+k'\overrightarrow{u}$</li>
</ul>
<ul>
<li>$k(k'\overrightarrow{u})=(kk')\overrightarrow{u}$</li>
</ul>
</div>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit $\overrightarrow{u}$, $\overrightarrow{v}$ deux vecteurs.
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;column-gap:2rem;">
<ul>
<li>$2(\overrightarrow{u}+\overrightarrow{v})=2\overrightarrow{u}+2\overrightarrow{v}$</li>
</ul>
<ul>
<li>$2\overrightarrow{u}+3\overrightarrow{u}=(2+3)\overrightarrow{u}=5\overrightarrow{u}$</li>
</ul>
<ul>
<li>$4(5\overrightarrow{u})=(4\times 5)\overrightarrow{u}=20\overrightarrow{u}$</li>
</ul>
</div>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété : $ $</div>
<div class="environment-content">
<div style="display:flex; gap:12px; align-items:center;">
<div style="flex:7 1 0; min-width:0;">
$I$ est le milieu du segment $[AB]$ si, et seulement si, $\overrightarrow{AI}=\dfrac{1}{2}\overrightarrow{AB}$
</div>
<img src="/mabemat/figures/2nde/chapitre-05/fig11.svg" alt="figure 11" style="flex:3 1 0; min-width:0; max-height:100px; object-fit:contain;">
</div>
</div>
</div>
