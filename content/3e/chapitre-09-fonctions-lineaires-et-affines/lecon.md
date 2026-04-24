---
title: "Leçon complète"
---

<h2 class="subsection-title">9.1 Proportionnalité et fonction linéaire</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
$a$ est un nombre donné.

Une fonction linéaire $f$ de coefficient $a$ est une fonction qui, à tout nombre $x$, associe le nombre $ax$ (c'est le produit de $a$ par $x$).

On la note : $f : x \mapsto ax$, on écrit aussi $f(x) = ax$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
La fonction $f : x \mapsto 3x$ est la fonction linéaire de coefficient $3$.
<ul>
<li>L'image de $5$ est $f(5) = 3 \times 5 = 15$</li>
<li>L'image de $-3$ est $f(-3) = -3 \times 3 = -9$</li>
<li>L'image de $0$ est $f(0) = 3 \times 0 = 0$</li>
</ul>
</div>
</div>

<div class="remarque">
On peut regrouper ces résultats dans un tableau :

<table>
<tr>
<th>
$x$</th>
<th>$5$</th>
<th>$-3$</th>
<th>$0$</th>
</tr>
<tr>
<td>$f(x)$</td>
<td>$15$</td>
<td>$-9$</td>
<td>$0$</td>
</tr>
</table>

Ce tableau est un tableau de proportionnalité. Le coefficient de proportionnalité est $3$.<br>
On a donc $f(x) = 3x$
</div>

<div class="environment propriete">
<div class="environment-title">Propriétés : $ $</div>
<div class="environment-content">
<ul>
<li>L'image du nombre $0$, par une fonction linéaire est $0$.</li>
<li>L'image du nombre $1$, par une fonction linéaire est $a$.</li>
<li>Tout nombre admet un unique antécédent par une fonction linéaire de coefficient $a \neq 0$.</li>
<li>La fonction qui modélise une situation de proportionnalité est une fonction linéaire dont le coefficient est le coefficient de proportionnalité.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
<ul>
<li>$h : x \mapsto -5x$ est la fonction linéaire de coefficient $-5$

$h(4) = -5 \times 4 = -20$ donc l'image de $4$ par $h$ est $-20$

L'antécédent de $-15$ par $h$ est $-15 \div (-5) = 3$</li>
<li>$g : x \mapsto 4x + 5$ n'est pas une fonction linéaire</li>
<li>$i : x \mapsto 2x^2$ n'est pas une fonction linéaire</li>
<li>$j : x \mapsto \dfrac{1}{3}x$ est la fonction linéaire de coefficient $\dfrac{1}{3}$</li>
<li>Le périmètre d'un carré de côté $x$ est égal à $4x$.

Cette situation est modélisée par la fonction linéaire $f : x \mapsto 4x$</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Ce tableau peut-il être celui d'une fonction linéaire ? Si oui, quel est son coefficient ? <br>

<div style="display:inline-block; vertical-align:top; width:calc(29% - 12px);">
<table>
<tr>
<th>
$x$</th>
<th>$0$</th>
<th>$2$</th>
<th>$10$</th>
</tr>
<tr>
<td>$g(x)$</td>
<td>$0$</td>
<td>$5$</td>
<td>$25$</td>
</tr>
</table>
</div><div style="display:inline-block; vertical-align:top; width:calc(69% - 12px);">
On calcule les quotients :
$\dfrac{5}{2} = 2,5$ et $\dfrac{25}{10} = 2,5$

Les quotients sont égaux, donc c'est un tableau de proportionnalité.
Il s'agit donc d'une fonction linéaire de coefficient $2,5$.
</div>

</div>
</div>

<h2 class="subsection-title">9.2 Représentation graphique</h2>

<div class="environment propriete">
<div class="environment-title">Propriétés :</div>
<div class="environment-content">
Dans un repère, la représentation graphique d'une fonction linéaire de coefficient $a$ est l'ensemble des points de coordonnées $(x ; f(x))$ c'est-à-dire $(x ; ax)$. C'est une droite qui passe par l'origine.<br>
Le nombre $a$ s'appelle le coefficient directeur de la droite.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Dans un repère, représenter graphiquement les fonctions :
$f : x \mapsto 2x$ et $g : x \mapsto -\dfrac{x}{2}$. <br>
<div style="display:inline-block; vertical-align:top; width:calc(49% - 12px);">
$f$ et $g$ sont des fonctions linéaires donc leurs représentations graphiques sont des droites qui passent par l'origine $O$.

Pour tracer ces droites, il suffit de calculer pour chaque fonction les coordonnées d'un autre point.

On peut calculer $f(1) = 2$ et $g(2) = \dfrac{-2}{2} = -1$.
(on choisit une abscisse et on calcule son image par la fonction linéaire)

<ul>
<li>La représentation graphique de $f$ est la droite qui passe par l'origine et par $(1 ; 2)$</li>
<li>La représentation graphique de $g$ est la droite qui passe par l'origine et par $(2 ; -1)$</li>
</ul>
</div><img src="/mabemat/figures/3e/chapitre-09/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:top; width:calc(49% - 12px); max-height:400px; max-width:100%;">

</div>
</div>

<h2 class="subsection-title">9.3 Déterminer l'expression d'une fonction linéaire</h2>

<div class="environment methode">
<div class="environment-title">Méthode - En connaissant un nombre et son image</div>
<div class="environment-content">
Déterminons la fonction linéaire $f$ sachant que $f(2) = -7$.<br>
$f$ est de la forme $f(x) = ax$ et on sait que $f(2) = -7$. Donc $a \times 2 = -7$ donc $a = -3,5$.<br>
Donc $f(x) = -3,5x$.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode - En connaissant un point de sa représentation graphique</div>
<div class="environment-content">
Déterminons la fonction linéaire $g$ dont la représentation graphique passe par le point $M(-3;5)$.<br>
$g$ est de la forme $g(x) = ax$ et $M$ appartient à la droite donc $g(-3) = 5$ donc $a \times -3 = 5$ donc $a = \dfrac{-5}{3}$.<br>
Donc $g(x) = \dfrac{-5}{3}x$.
</div>
</div>
