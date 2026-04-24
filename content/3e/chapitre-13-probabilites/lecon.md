---
title: "Leçon complète"
---

<h2 class="subsection-title">13.1 Vocabulaire</h2>

<div class="environment definition">
<div class="environment-title">Définitions</div>
<ul>
<li>Une expérience est <strong>aléatoire</strong> lorsqu'on ne peut pas en prévoir le résultat.</li>
<li>Une <strong>issue</strong> est un résultat possible d'une expérience aléatoire.</li>
<li>Un <strong>événement</strong> d'une expérience aléatoire est un ensemble d'issues.</li>
</ul>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple </div>
<div class="environment-content">
Sur un jeu de 13 cartes indiscernables au toucher, on écrit sur chaque carte une lettre du mot "mathématiques" : M A T H E M A T I Q U E S. <br>
On retourne toutes les cartes et demande à une personne d'en piocher une au hasard.
<ul>
<li>Cette expérience est aléatoire car on ne sait pas la lettre qui sera piochée (puisque les cartes sont retournées).</li>
<li>Les issues de l'expérience sont : M, A, T, H, E, I, Q, U, S</li>
<li>Un événement possible est : " Tirer une voyelle ". Il y a plusieurs issues qui réalisent cet événement : " A ; E ; I ; U ".</li>
</ul>
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Un événement est constitué par plusieurs issues d'une même expérience aléatoire.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Lors du lancer d'un dé équilibré à six faces, on étudie l'événement « obtenir un nombre pair ».

Cet événement est réalisé par les issues : $2$ ; $4$ et $6$.
</div>
</div>

<div class="remarque">
Un événement élémentaire est un événement réalisé par une seule issue.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Toujours lors du lancer du dé décrit ci-dessus, citons un événement élémentaire : « obtenir 3 » <br>
et un événement qui n'est pas élémentaire : « obtenir un nombre impair ».
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
L'événement contraire d'un événement $A$, noté $\overline{A}$, est celui qui se réalise lorsque l'événement $A$ n'a pas lieu.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Lors du lancer du dé précédemment décrit, on considère l'événement $A$ : « Obtenir un multiple de 3 »

Il est réalisé par les issues $3$ et $6$.

L'événement contraire à $A$, noté $\overline{A}$ est « Ne pas obtenir un multiple de 3 ».

Il est réalisé par les issues $1$, $2$, $4$ et $5$.
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Deux événements sont compatibles quand ils peuvent se réaliser en même temps lors d'une même expérience.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On choisit au hasard un élève de 3e dans le collège.<br>
Soit A : "L'élève porte des baskets" et B : "L'élève a les cheveux bruns". Les évènements A et B sont-ils compatibles ?

Oui, ils sont compatibles car :
<ul>
<li>Il peut exister un élève qui porte des baskets ET qui a les cheveux bruns.</li>
<li>Ces deux caractéristiques peuvent se réaliser simultanément chez la même personne.</li>
</ul>
</div>
</div>

<h2 class="subsection-title">13.2 Notion de probabilité</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Lorsque l'on effectue un très grand nombre de fois une expérience aléatoire (de façon indépendante et dans les mêmes conditions), la fréquence de réalisation d'un événement se rapproche d'un nombre que l'on appelle probabilité de cet événement.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit $A$ l'événement « j'obtiens pile au lancer d'une pièce de monnaie ».

La probabilité pour que $A$ se réalise est $\dfrac{1}{2}$.

On note : $p(A) = \dfrac{1}{2}$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La probabilité d'un événement est un nombre compris entre $0$ et $1$ qui exprime « la chance qu'a un événement de se produire ».
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Dire que la probabilité d'un événement est de $0,8$ signifie que cet événement a $8$ chances sur $10$ ou $80 \%$ de chance de se produire.
</div>
</div>

<div class="remarque">

<ul>
<li>Un événement est impossible lorsqu'il ne peut pas se produire. La probabilité d'un événement impossible est égale à $0$.</li>
<li>Un événement est certain lorsqu'il se réalise toujours. La probabilité d'un événement certain est égale à $1$.</li>
</ul>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La somme des probabilités de tous les événements élémentaires est égale à 1.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $A$ un événement, on note $\overline{A}$ son événement contraire. Nous avons : $$p(\overline{A}) = 1 - p(A)$$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On tourne une roue bien équilibrée. Notons l'événement $A$ : « Le chiffre $1$ sort ». 

Déterminons la probabilité de $A$ et de $\overline{A}$.

Si la roue a $6$ secteurs égaux numérotés de $1$ à $6$, alors :
$p(A) = \dfrac{1}{6}$ et $p(\overline{A}) = 1 - \dfrac{1}{6} = \dfrac{5}{6}$.
</div>
</div>

<h2 class="subsection-title">13.3 Équiprobabilité</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Si tous les événements élémentaires ont la même probabilité d'être réalisés, on dit qu'il y a équiprobabilité.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Dans une situation d'équiprobabilité, la probabilité d'un événement est égale au quotient du nombre d'issues favorables par le nombre d'issues possibles.
$$\textrm{Probabilité d'un événement A} = \dfrac{\textrm{Nombre d'issues favorables à }A}{\textrm{Nombre total d'issues}}$$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On lance un dé équilibré à $6$ faces. Quelle est la probabilité de l'événement $A$ : « obtenir un multiple de $3$ ou de $5$ » ?

$A$ est réalisé par les issues $3$, $5$ et $6$ et la situation étant équiprobable, chaque face a $1$ chance sur $6$ de sortir.

Donc $p(A) = \dfrac{3}{6} = \dfrac{1}{2}$.
</div>
</div>

<h2 class="subsection-title">13.4 Représentation des événements</h2>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem;">

<div>

<strong>Arbres des possibles</strong><br><br>

On lance une pièce de monnaie deux fois de suite, on peut schématiser cette expérience par un arbre :<br><br>

<img src="/mabemat/figures/3e/chapitre-13/fig1.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:200px; max-width:100%;">
<br><br>

Ici, toutes les issues sont :<br>
$\lbrace (P;P); (P;F);(F;P);(F;F)\rbrace$<br>
La probabilité d'obtenir deux fois le même résultat est donc de $\dfrac{2}{4}=\dfrac{1}{2}$ car deux issues sur quatre réalisent cet évènement.

</div>

<div>

<strong>Tableaux à doubles entrées</strong><br><br>

On jette deux dés à quatre faces (tétraèdre régulier) et on regarde le résultat obtenu :<br><br>

<table>
<tr>
<th></th>
<th><strong>1</strong></th>
<th><strong>2</strong></th>
<th><strong>3</strong></th>
<th><strong>4</strong></th>
</tr>
<tr>
<td><strong>1</strong></td>
<td>$\left\lbrace 1; 1 \right\rbrace$</td>
<td>$\left\lbrace 2 ; 1 \right\rbrace$</td>
<td>$\left\lbrace 3 ; 1 \right\rbrace$</td>
<td>$\left\lbrace 4 ; 1 \right\rbrace$</td>
</tr>
<tr>
<td><strong>2</strong></td>
<td>$\left\lbrace 1; 2 \right\rbrace$</td>
<td>$\left\lbrace 2 ; 2 \right\rbrace$</td>
<td>$\left\lbrace 2 ; 3 \right\rbrace$</td>
<td>$\left\lbrace 2 ; 4 \right\rbrace$</td>
</tr>
<tr>
<td><strong>3</strong></td>
<td>$\left\lbrace 3 ; 1 \right\rbrace$</td>
<td>$\left\lbrace 3 ; 2 \right\rbrace$</td>
<td>$\left\lbrace 3 ; 3 \right\rbrace$</td>
<td>$\left\lbrace 3 ; 4 \right\rbrace$</td>
</tr>
<tr>
<td><strong>4</strong></td>
<td>$\left\lbrace 4 ; 1 \right\rbrace$</td>
<td>$\left\lbrace 4 ; 2 \right\rbrace$</td>
<td>$\left\lbrace 4 ; 3 \right\rbrace$</td>
<td>$\left\lbrace 4 ; 4 \right\rbrace$</td>
</tr>
</table>

<br>

La probabilité d'obtenir deux fois le même résultat est donc de $\dfrac{4}{16}=\dfrac{1}{4}$ car quatre issues sur seize réalisent cet évènement.

</div>

</div>
