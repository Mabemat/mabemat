---
title: "Leçon complète"
---

<h2 class="subsection-title">17.1 Notion de vecteur</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Un vecteur est un objet mathématique caractérisé par trois informations :
<ul>
<li>une <strong>direction</strong> (une droite) ;</li>
<li>un <strong>sens</strong> ;</li>
<li>une <strong>longueur</strong>, appelée <strong>norme</strong>.</li>
</ul>
On note les vecteurs avec une flèche : $\overrightarrow{u}$, $\overrightarrow{v}$, $\ldots$
</div>
</div>

<div class="remarque">
Ne pas confondre direction et sens !<br>
Deux vecteurs peuvent avoir la même direction mais des sens opposés.
</div>

<div style="display:grid; grid-template-columns:60% 38%; gap:1rem; align-items:center;">

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Le vecteur $\overrightarrow{HU}$ a pour direction la droite $(HU)$, son sens est « de $H$ vers $U$ » et sa norme est la longueur $HU$.
</div>
</div>

<div>
<img src="/mabemat/figures/3e/chapitre-16/1.svg" alt="Vecteur HU" style="display:block; margin:0 auto; max-height:100px; max-width:100%;">
</div>

</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Deux vecteurs sont <strong>égaux</strong> s'ils ont même direction, même sens et même norme.
</div>
</div>

<div style="display:grid; grid-template-columns:70% 28%; gap:1rem; align-items:center;">

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère les vecteurs suivants :<br>
On a $\overrightarrow{p}=\overrightarrow{s}$.
<ul>
<li>$\overrightarrow{q}\neq\overrightarrow{r}$ car ces deux vecteurs n'ont pas le même sens.</li>
<li>$\overrightarrow{p}\neq\overrightarrow{q}$ car ces deux vecteurs n'ont pas la même norme.</li>
<li>$\overrightarrow{p}\neq\overrightarrow{k}$ car ces deux vecteurs n'ont pas la même direction.</li>
</ul>
</div>
</div>

<div>
<img src="/mabemat/figures/3e/chapitre-16/2.svg" alt="Vecteurs p, q, r, k, s" style="display:block; margin:0 auto; max-height:160px; max-width:100%;">
</div>

</div>

<div style="display:grid; grid-template-columns:65% 33%; gap:1rem; align-items:center;">

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soient $A$, $B$, $C$ et $D$ quatre points du plan.<br><br>
$\overrightarrow{AB}=\overrightarrow{CD}$ si et seulement si $ABDC$ est un parallélogramme.
</div>
</div>

<div>
<img src="/mabemat/figures/3e/chapitre-16/3.svg" alt="Parallélogramme ABDC" style="display:block; margin:0 auto; max-height:130px; max-width:100%;">
</div>

</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Le vecteur de longueur nulle est appelé <strong>vecteur nul</strong>, noté $\overrightarrow{0}$.<br>
Pour tout point $A$ du plan, $\overrightarrow{AA}=\overrightarrow{0}$.
</div>
</div>

<div style="display:grid; grid-template-columns:55% 43%; gap:1rem; align-items:center;">

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soient $A$, $B$ et $I$ trois points du plan.<br><br>
$I$ est le milieu de $[AB]$ si et seulement si $\overrightarrow{AI}=\overrightarrow{IB}$.
</div>
</div>

<div>
<img src="/mabemat/figures/3e/chapitre-16/4.svg" alt="Milieu de AB" style="display:block; margin:0 auto; max-height:80px; max-width:100%;">
</div>

</div>

<h2 class="subsection-title">17.2 Translation</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soient $A$, $B$ et $C$ trois points du plan. L'image du point $C$ par la <strong>translation de vecteur</strong> $\overrightarrow{AB}$ est l'unique point $D$ tel que $\overrightarrow{AB}=\overrightarrow{CD}$, c'est-à-dire que $ABDC$ est un parallélogramme.
</div>
</div>

<div class="remarque">
Deux vecteurs égaux définissent la même translation.<br>
De plus, l'enchaînement de deux translations est une translation.
</div>

<div style="display:grid; grid-template-columns:58% 40%; gap:1rem; align-items:center;">

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Ici, $\overrightarrow{EF}=\overrightarrow{GH}$.<br>
Donc $H$ est l'image de $G$ par la translation de vecteur $\overrightarrow{EF}$.<br>
C'est-à-dire que $EFHG$ est un parallélogramme.
</div>
</div>

<div>
<img src="/mabemat/figures/3e/chapitre-16/5.svg" alt="Translation EF = GH" style="display:block; margin:0 auto; max-height:120px; max-width:100%;">
</div>

</div>

<div class="environment methode">
<div class="environment-title">Méthode : Construire l'image d'une figure par une translation</div>
<div class="environment-content">
Construire l'image $A'B'C'D'$ du trapèze $ABCD$ par la translation de vecteur $\overrightarrow{PP'}$.
<div style="text-align:center; margin-top:0.8rem;">
<img src="/mabemat/figures/3e/chapitre-16/6.svg" alt="Construction par translation" style="max-height:200px; max-width:100%;">
</div>
</div>
</div>

<h2 class="subsection-title">17.3 Opérations sur les vecteurs</h2>

<h3 class="subsubsection-title">17.3.1 Opposé d'un vecteur</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Deux vecteurs sont <strong>opposés</strong> s'ils ont même norme, même direction et des sens contraires.<br>
L'opposé du vecteur $\overrightarrow{AB}$ est le vecteur $\overrightarrow{BA}$, noté $-\overrightarrow{AB}$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Si $M$ et $N$ sont deux points du plan, les vecteurs $\overrightarrow{MN}$ et $\overrightarrow{NM}$ sont opposés.<br>
On note $\overrightarrow{NM}=-\overrightarrow{MN}$.
</div>
</div>

<div style="display:grid; grid-template-columns:65% 33%; gap:1rem; align-items:center;">

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Sur la figure suivante, les vecteurs $\overrightarrow{p}$ et $\overrightarrow{q}$ sont opposés.
</div>
</div>

<div>
<img src="/mabemat/figures/3e/chapitre-16/7.svg" alt="Vecteurs opposés p et q" style="display:block; margin:0 auto; max-height:100px; max-width:100%;">
</div>

</div>

<h3 class="subsubsection-title">17.3.2 Somme de deux vecteurs</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La <strong>somme</strong> de deux vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ est le vecteur de la translation résultant de l'enchaînement des translations de vecteur $\overrightarrow{u}$ puis de vecteur $\overrightarrow{v}$. On note ce vecteur $\overrightarrow{u}+\overrightarrow{v}$.
</div>
</div>

<div class="remarque">
Pour construire $\overrightarrow{u}+\overrightarrow{v}$, on place $\overrightarrow{v}$ au bout de $\overrightarrow{u}$ et on relie le début de $\overrightarrow{u}$ à la fin de $\overrightarrow{v}$.
</div>

<div style="display:grid; grid-template-columns:60% 38%; gap:1rem; align-items:start;">

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Les vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ sont tracés sur le quadrillage ci-dessous.<br>
Construire le vecteur $\overrightarrow{w}=\overrightarrow{u}+\overrightarrow{v}$.
</div>
</div>

<div>
<img src="/mabemat/figures/3e/chapitre-16/8.svg" alt="Somme de vecteurs u+v" style="display:block; margin:0 auto; max-height:180px; max-width:100%;">
</div>

</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soient $\overrightarrow{u}$, $\overrightarrow{v}$ et $\overrightarrow{w}$ trois vecteurs. On a :
<div style="display:grid; grid-template-columns:1fr 1fr; gap:0.2rem; margin-top:0.4rem;">
<div>$\overrightarrow{u}+\overrightarrow{0}=\overrightarrow{0}+\overrightarrow{u}=\overrightarrow{u}$</div>
<div>$\overrightarrow{u}+\overrightarrow{v}=\overrightarrow{v}+\overrightarrow{u}$</div>
<div>$(\overrightarrow{u}+\overrightarrow{v})+\overrightarrow{w}=\overrightarrow{u}+(\overrightarrow{v}+\overrightarrow{w})$</div>
<div>$\overrightarrow{u}-\overrightarrow{v}=\overrightarrow{u}+(-\overrightarrow{v})$</div>
</div>
<br>On peut additionner les vecteurs dans l'ordre que l'on veut.
</div>
</div>

<div class="environment theoreme">
<div class="environment-title">Théorème : Relation de Chasles</div>
<div class="environment-content">
Pour tous points $A$, $B$ et $C$ du plan :
$$\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Simplifier au maximum l'expression suivante : $\overrightarrow{AC}+\overrightarrow{CE}-\overrightarrow{DE}$.<br><br>
D'après la relation de Chasles, $\overrightarrow{AC}+\overrightarrow{CE}=\overrightarrow{AE}$, d'où $\overrightarrow{AC}+\overrightarrow{CE}-\overrightarrow{DE}=\overrightarrow{AE}-\overrightarrow{DE}=\overrightarrow{AE}+\overrightarrow{ED}$.<br>
Or $\overrightarrow{AE}+\overrightarrow{ED}=\overrightarrow{AD}$.<br>
Ainsi, $\overrightarrow{AC}+\overrightarrow{CE}-\overrightarrow{DE}=\overrightarrow{AD}$.
</div>
</div>

<div style="display:grid; grid-template-columns:60% 38%; gap:1rem; align-items:start;">

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Dans le parallélogramme $ABCD$ ci-dessous, simplifier les expressions vectorielles suivantes.
<ol>
<li>$\overrightarrow{DA}+\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{DB}+\overrightarrow{BC}=\overrightarrow{\mathbf{DC}}$</li>
<li>$\overrightarrow{AB}+\overrightarrow{BC}-\overrightarrow{DC}=\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}=\overrightarrow{\mathbf{AD}}$</li>
<li>Comme $ABCD$ est un parallélogramme :<br>
$\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$</li>
</ol>
</div>
</div>

<div>
<img src="/mabemat/figures/3e/chapitre-16/9.svg" alt="Chasles dans un parallélogramme" style="display:block; margin:0 auto; max-height:180px; max-width:100%;">
</div>

</div>

<div style="display:grid; grid-template-columns:52% 46%; gap:1rem; align-items:start;">

<div>
<img src="/mabemat/figures/3e/chapitre-16/10.svg" alt="AB + CD avec point E" style="display:block; margin:0 auto; max-height:220px; max-width:100%;">
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{CD}$ sont tracés sur le quadrillage. Construire le vecteur $\overrightarrow{AB}+\overrightarrow{CD}$ et l'identifier.<br><br>
Les deux vecteurs ne partagent pas de point commun : on ne peut pas appliquer la relation de Chasles directement.<br><br>
On place $E$ tel que $\overrightarrow{BE}=\overrightarrow{CD}$ (translation de $\overrightarrow{CD}$ en $B$).<br><br>
Alors :
$$\overrightarrow{AB}+\overrightarrow{CD}=\overrightarrow{AB}+\overrightarrow{BE}=\overrightarrow{AE}$$
</div>
</div>

</div>

<div class="environment theoreme">
<div class="environment-title">Théorème : Règle du parallélogramme</div>
<div class="environment-content">
$ABCD$ est un parallélogramme si et seulement si $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.
</div>
</div>

<div class="environment preuve">
<div class="environment-title">Preuve :</div>
<div class="environment-content">
<strong>1)</strong> Supposons que $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.<br>
D'après la relation de Chasles, $\overrightarrow{AC}=\overrightarrow{AD}+\overrightarrow{DC}$.<br>
On a donc $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AD}+\overrightarrow{DC}$, ce qui conduit à $\overrightarrow{AB}=\overrightarrow{DC}$, donc $ABCD$ est un parallélogramme.
<br><br>
<strong>2)</strong> Supposons que $ABCD$ est un parallélogramme.<br>
On a alors $\overrightarrow{AB}=\overrightarrow{DC}$, d'où $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{DC}+\overrightarrow{AD}=\overrightarrow{AD}+\overrightarrow{DC}=\overrightarrow{AC}$ par la relation de Chasles.
</div>
</div>

<div class="remarque">
On peut utiliser la notation $2\overrightarrow{AB}$ pour désigner $\overrightarrow{AB}+\overrightarrow{AB}$, et de manière générale $n\overrightarrow{AB}$ pour désigner $n$ fois le vecteur $\overrightarrow{AB}$ (avec $n$ entier).<br>
Par exemple : $2\overrightarrow{AB}+2\overrightarrow{BC}=2\left(\overrightarrow{AB}+\overrightarrow{BC}\right)=2\overrightarrow{AC}$.
</div>
