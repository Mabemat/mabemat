---
title: "Leçon complète"
---

<h2 class="subsection-title">12.1 Expérience aléatoire</h2>

<h3 class="subsubsection-title">12.1.1 Vocabulaire</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Une <strong>expérience</strong> est dite <strong>aléatoire</strong> si on ne peut pas en prévoir le résultat à l'avance.<br>
Chaque résultat possible d'une expérience aléatoire est appelée une <strong>issue</strong>.<br>
L'ensemble des issues d'une expérience aléatoire est appelé l'<strong>univers</strong>, on le note $\Omega$.<br>
Un <strong>évènement $E$</strong> est un ensemble d'issues, c'est donc une partie (sous ensemble) de $\Omega$. <br>
<strong>L'évènement contraire</strong> de $E$, noté $\overline{E}$, est l'évènement formé par toutes les issues qui ne réalisent
pas $E$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère l'expérience aléatoire suivante : on lance un dé équilibré à $6$ faces et on observe le résultat.<br>
$\Omega=\{1;2;3;4;5;6\}$ est l'ensemble des issues.<br>
On regarde l'évènement $E$ : « obtenir un chiffre pair ». On a alors $E=\{2;4;6\}$.<br>
Ainsi, $\overline{E}$ : « obtenir un chiffre impair » et $\overline{E}=\{1;3;5\}$.<br>
On regarde l'évènement $A$ : « obtenir un chiffre supérieur à $3$ ». On a alors $A=\{3;4;5;6\}$.<br>
Ainsi, $\overline{A}$ : « obtenir un chiffre strictement inférieur à $3$ » et $\overline{A}=\{1;2\}$.
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Un évènement qui se réalise toujours est $\Omega$ lui-même, on l'appelle <strong>évènement certain</strong>. <br>
Un évènement qui ne peut se réaliser est appelé <strong>évènement impossible</strong>, on le note $\emptyset$ . <br>
Un évènement qui ne contient qu'une seule issue est appelé <strong>évènement élémentaire</strong>.<br>
Deux évènements sont dits <strong>incompatibles</strong> s'ils ne peuvent pas être réalisés en même temps.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Dans le tirage d'une carte au hasard dans un jeu classique de 32 cartes :
<ul>
<li>L'évènement : « le roi de cœur est tiré » est un évènement élémentaire.</li>
<li>L'évènement : « un trois est tiré » est un évènement impossible.</li>
<li>L'évènement : « une carte du jeu est tirée » est un évènement certain.</li>
<li>L'évènement contraire de : « le 10 de cœur est tiré » est : « le 10 de cœur n'est pas tiré ».</li>
<li>Un évènement non élémentaire est par exemple : « un as est tiré ».</li>
<li>Deux évènements incompatibles sont par exemple : « un roi est tiré » et « un 10 est tiré ».</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">12.1.2 Loi de probabilité-modèle</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Définir une loi de probabilité pour une expérience aléatoire dont l'univers est $\Omega=\{\omega_1,\cdots,\omega_n\}$, c'est associer à chaque issue $\omega_i$ un nombre $p_i\in [0\,;\,1]$ tel que $p_1+\cdots+ p_n=1$.<br>
Le nombre $p_i$ est appelé probabilité de l'issue $\omega_i$.<br>
La probabilité d'un évènement $E$, notée $P(E)$, est la somme des probabilités des issues qui le réalisent.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout évènement $E$ d'une expérience aléatoire dont l'univers est $\Omega$, on a :
$$0\leq P(E)\leq 1 \quad\quad\quad\quad\quad P(\Omega)=1 \quad\quad\quad\quad\quad P(\emptyset)=0$$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(55% - 12px);">
En reprenant l'exemple du dé, la loi de probabilité est :
$$P(E)=\dfrac{1}{6}+\dfrac{1}{6}+\dfrac{1}{6}=\dfrac{1}{2}\quad \quad P(\overline{E})=\dfrac{1}{6}+\dfrac{1}{6}+\dfrac{1}{6}=\dfrac{1}{2}$$
$$P(A)=\dfrac{1}{6}+\dfrac{1}{6}+\dfrac{1}{6}+\dfrac{1}{6}=\dfrac{2}{3}\quad \quad P(\overline{A})=\dfrac{1}{6}+\dfrac{1}{6}=\dfrac{1}{3}$$
</div><div style="display:inline-block; vertical-align:middle; width:calc(43% - 12px);">
<table>
<tr>
<th>Issues</th>
<th>$1$</th>
<th>$2$</th>
<th>$3$</th>
<th>$4$</th>
<th>$5$</th>
<th>$6$</th>
</tr>
<tr>
<td>Probabilité</td>
<td>$\dfrac{1}{6}$</td>
<td>$\dfrac{1}{6}$</td>
<td>$\dfrac{1}{6}$</td>
<td>$\dfrac{1}{6}$</td>
<td>$\dfrac{1}{6}$</td>
<td>$\dfrac{1}{6}$</td>
</tr>
</table>
</div>
</div>
</div>

<div class="remarque">
Quand on répète un grand nombre de fois une expérience aléatoire, la fréquence d'apparition de chaque issue se stabilise autour d'une valeur. On prend alors cette valeur comme probabilité de l'issue. (Loi des grands nombres).
</div>

<h2 class="subsection-title">12.2 Calculs de probabilités</h2>

<h3 class="subsubsection-title">12.2.1 Situation d'équiprobabilité</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
On dit qu'on est dans une situation d'équiprobabilité lorsque toutes les issues ont la même probabilité.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Dans une situation d'équiprobabilité, pour tout évènement $E$ de l'univers, on a :
$$P(E)=\dfrac{\text{Nombres d'issues de }E}{\text{Nombres total d'issues}}$$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère l'expérience aléatoire suivante :
On tire une carte dans un jeu de $32$ cartes.<br>
Soit $E$ l'évènement : « On tire un as ».
Quelle est la probabilité que l'évènement $E$ se réalise ? <br>

C'est une situation d'équiprobabilité (autant de chance de tirer chacune des $32$ cartes).<br>
Il a $32$ issues possibles car il existe $32$ façon différentes de tirer une carte. <br>L'évènement $E$ a $4$ issues possibles : As de cœur, as de carreau, as de trèfle et as de pique.<br>
La probabilité que l'évènement $E$ se réalise est donc égale à : $P(E) = \dfrac{4}{32}=\dfrac{1}{8}$.
</div>
</div>

<h3 class="subsubsection-title">12.2.2 Opérations sur les évènements</h3>

On considère $A$ et $B$ deux évènements d'un même univers $\Omega$.

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
<ul>
<li>L'évènement « $A$ et $B$ », noté $A\cap B$, est constitué des issues qui appartiennent à ces deux évènements.</li>
<li>L'évènement « $A$ ou $B$ », noté $A\cup B$, est constitué des issues qui appartiennent à au moins un de ces deux évènements.</li>
<li>Les évènements $A$ et $B$ sont incompatibles si $A\cap B=\emptyset$.</li>
</ul>
</div>
</div>

<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-12/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:middle; width:calc(30% - 12px); max-height:200px; max-width:100%;"><img src="/mabemat/figures/2nde/chapitre-12/fig2.svg" alt="figure 2" style="display:inline-block; vertical-align:middle; width:calc(30% - 12px); max-height:200px; max-width:100%;">
<img src="/mabemat/figures/2nde/chapitre-12/fig3.svg" alt="figure 3" style="display:inline-block; vertical-align:middle; width:calc(30% - 12px); max-height:200px; max-width:100%;">
</div>

<div class="environment theoreme">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem;">

<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$P(A\cup B)+P(A\cap B)=P(A)+P(B)$.</li>
</ul>

<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$P(\overline{A})=1-P(A)$.</li>
</ul>

</div>

</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère l'expérience aléatoire suivante :
On lance un dé à six faces et on regarde le nombre de points inscrits sur la face du dessus.<br>
On considère les évènements suivants :<br>
$A$ : « On obtient un nombre impair »
et $B$ : « On obtient un multiple de $3$ ».<br>
Calculer la probabilité des évènements $A\cup B$ et $\overline{B}$.<br>

$P(A)=\dfrac{1}{2}$ et $P(B)=\dfrac{2}{6}=\dfrac{1}{3}$.<br>
$A\cap B$ est l'évènement élémentaire « On obtient un $3$ », donc $P(A\cap B)=\dfrac{1}{6}$.<br>
Ainsi, $P(A\cup B)=P(A)+P(B)-P(A\cap B)=\dfrac{1}{2}+\dfrac{1}{3}-\dfrac{1}{6}=\dfrac{4}{6}=\dfrac{2}{3}$<br>
Et $P(\overline{B})=1-P(B)=1-\dfrac{1}{3}=\dfrac{2}{3}$. <br>
La probabilité de ne pas obtenir un multiple de $3$ est donc de $\dfrac{2}{3}$, tout comme la probabilité d'« obtenir un nombre impair ou un multiple de $3$ ».
</div>
</div>

<h2 class="subsection-title">12.3 Représentations d'une expérience aléatoire</h2>

<h3 class="subsubsection-title">12.3.1 Le diagramme de Venn</h3>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Dans un lycée, sur les $150$ élèves de secondes, $48$ élèves se sont inscrits dans les clubs photos ou théâtre. On en compte $32$ dans le club théâtre et $24$ dans le club photo. On sort au hasard la fiche d'un élève inscrit. <br>
Soit les évènements $T$ : « être adhérent au club théâtre », $F$ : « être adhérent au club photo » et $N$ : « n'être adhérent à aucun club ».

Déterminer $P(T)$ ; $P(F)$ ; $P(T\cup F)$ et en déduire $P(N)$.
<div style="display:inline-block;vertical-align:top;width:calc(70% - 12px);">
$32+24=56$ et $56-48={\color{pink}{8}}$ sont dans les deux clubs.
$$P(T)=\dfrac{32}{150}
\qquad \qquad P(F)=\dfrac{24}{150} \qquad \qquad P(T\cap F)= \dfrac{8}{150}$$
Donc $P(T\cup F)=P(T)+P(F)- P(T\cap F)=\dfrac{32+24-8}{150} = \dfrac{48}{150}$ (on retrouve les $48$ inscrits en club).<br>
Finalement, $P(N)=1-P(T\cup F)=\dfrac{102}{150}$.
</div><img src="/mabemat/figures/2nde/chapitre-12/fig4.svg" alt="figure 4" style="display:inline-block;vertical-align:top;width:calc(28% - 12px);max-height:300px;max-width:100%;">

</div>
</div>

<h3 class="subsubsection-title">12.3.2 Le tableau à double entrée</h3>

Une maison de retraite abrite $80$ pensionnaires. $55$ pensionnaires suivent un traitement contre les maladies cardio-vasculaires, $34$ pensionnaires suivent un traitement pour réduire leur taux de cholestérol et $18$ pensionnaires suivent les deux traitements. Pour représenter cette expérience, on peut représenter un tableau à double-entrée.
<ol>
<li>Déterminer la valeur exacte de la probabilité de l'évènement $A$ : « la personne prend un traitement pour le cholestérol ».</li>
<li>Déterminer la valeur exacte de la probabilité de l'évènement $B$ : « la personne prend un traitement pour le cholestérol, mais pas pour les maladies cardio-vasculaire ».</li>
</ol>
<table>
<tr>
<th></th>
<th>Cardio-vasculaire</th>
<th>Non cardio-vasculaire</th>
<th>Total</th>
</tr>
<tr>
<td>Cholestérol</td>
<td>18</td>
<td>16</td>
<td>34</td>
</tr>
<tr>
<td>Non cholestérol</td>
<td>37</td>
<td>9</td>
<td>46</td>
</tr>
<tr>
<td>Total</td>
<td>55</td>
<td>25</td>
<td>80</td>
</tr>
</table>
On prend un pensionnaire au hasard, nous sommes dans une situation d'équiprobabilité.
<ol style="column-count:2; column-gap:2rem;">
<li>$P(A)=\dfrac{\text{Nombres d'issues de }A}{\text{Nombres total d'issues}}=\dfrac{34}{80}\approx 0,425 $</li>
<li>$P(B)=\dfrac{\text{Nombres d'issues de }B}{\text{Nombres total d'issues}}=\dfrac{16}{80}=0,2$</li>
</ol>

<h3 class="subsubsection-title">12.3.3 L'arbre des possibles</h3>

On joue à pile ou face en lançant une pièce 3 fois de suite. On s'intéresse aux faces obtenues dans l'ordre d'apparition. À chaque lancer correspondent deux possibilités : pile (notée $P$) ou face
(notée $F$). Par exemple, lorsque l'on a obtenu pile aux deux premiers lancers, puis face au dernier, on note $PPF$.
<ol>
<li>À l'aide d'un arbre des possibles, déterminer toutes les issues possibles de cette expérience.</li>
<li>Combien d'issues réalisent l'évènement $A$ : « on a obtenu exactement deux fois pile ». En déduire $P(A)$.</li>
</ol>

<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-12/fig5.svg" alt="figure 5" style="max-height:200px; max-width:100%;">
</div>

<ol>
<li>Il y a $8$ issues possibles, donc $\Omega=\{PPP ;PPF;PFP; PFF; FPP; FPF; FFP; FFF\}$.</li>
<li>$A=\{PPF;PFP;FPP\}$ donc $3$ issues réalisent l'évènement $A$.<br>
Ainsi, $$P(A)=\dfrac{\text{Nombres d'issues de }A}{\text{Nombres total d'issues}}=\dfrac{3}{8}=0,375$$</li>
</ol>
