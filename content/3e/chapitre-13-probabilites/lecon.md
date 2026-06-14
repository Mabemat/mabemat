---
title: "Leçon complète"
---

<h2 class="subsection-title">13.1 Vocabulaire et notations ensemblistes</h2>

<div class="environment definition">
<div class="environment-title">Définitions :</div>
<div class="environment-content">
<ul>
<li>Une expérience est <strong>aléatoire</strong> lorsqu'on ne peut pas prévoir son résultat.</li>
<li>Une <strong>issue</strong> est un résultat possible de l'expérience aléatoire.</li>
<li>L'<strong>univers</strong>, noté $\Omega$, est l'ensemble de toutes les issues possibles.</li>
<li>Un <strong>événement</strong> est un sous-ensemble de $\Omega$ : c'est un ensemble d'issues.</li>
</ul>
</div>
</div>

<div class="remarque">
Un événement élémentaire est un événement ne contenant qu'une seule issue.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Un sac contient 6 jetons identiques au toucher : 3 rouges numérotés $R_1, R_2, R_3$ et 3 bleus numérotés $B_1, B_2, B_3$. On tire un jeton au hasard.
<ol>
<li>Donner l'univers $\Omega$ de cette expérience.<br>
L'univers est $\Omega = \{R_1, R_2, R_3, B_1, B_2, B_3\}$ : il contient 6 issues.</li>
<li>Citer un événement élémentaire.<br>
« Tirer un jeton rouge numéroté 1 » est un événement élémentaire.</li>
<li>Déterminer les événements suivants :
<ul>
<li>$R$ : « tirer un jeton rouge », $R = \{R_1, R_2, R_3\}$</li>
<li>$B$ : « tirer un jeton bleu », $B = \{B_1, B_2, B_3\}$</li>
<li>$P$ : « tirer un jeton de numéro pair », $P = \{R_2, B_2\}$</li>
<li>$G$ : « tirer un jeton de numéro supérieur ou égal à 2 », $G = \{R_2, R_3, B_2, B_3\}$</li>
</ul>
</li>
</ol>
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définitions :</div>
<div class="environment-content">
<ul>
<li>Le <strong>complémentaire</strong> de $A$, noté $\overline{A}$, est l'événement qui se réalise lorsque $A$ ne se réalise pas.</li>
<li>La <strong>réunion</strong> de $A$ et $B$, notée $A \cup B$, est l'événement qui se réalise lorsque $A$ ou $B$ (ou les deux) se réalise.</li>
<li>L'<strong>intersection</strong> de $A$ et $B$, notée $A \cap B$, est l'événement qui se réalise lorsque $A$ et $B$ se réalisent simultanément.</li>
<li>L'<strong>événement impossible</strong>, noté $\emptyset$, ne peut jamais se réaliser.<br>
Si $A \cap B = \emptyset$, on dit que $A$ et $B$ sont <strong>incompatibles</strong>.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Avec les événements $R$, $B$ et $P$ définis précédemment, décrire à l'aide d'une phrase puis déterminer $\overline{R}$, $R \cup P$, $R \cap P$ et $R \cap B$.
<ul>
<li>$\overline{R}$ est l'événement « ne pas tirer un jeton rouge », c'est-à-dire « tirer un jeton bleu ».<br>
Les issues qui ne réalisent pas $R$ sont $B_1, B_2, B_3$, donc $\overline{R} = \{B_1, B_2, B_3\} = B$.</li>
<li>$R \cup P$ est l'événement « tirer un jeton rouge ou de numéro pair ».<br>
Les issues qui réalisent $R$ ou $P$ (ou les deux) sont $R_1, R_2, R_3$ et $B_2$, donc $R \cup P = \{R_1, R_2, R_3, B_2\}$.</li>
<li>$R \cap P$ est l'événement « tirer un jeton rouge et de numéro pair ».<br>
Seul $R_2$ est à la fois rouge et de numéro pair, donc $R \cap P = \{R_2\}$.</li>
<li>$R \cap B$ est l'événement « tirer un jeton rouge et bleu simultanément ».<br>
Aucune issue ne réalise les deux à la fois, donc $R \cap B = \emptyset$.<br>
Ainsi $R$ et $B$ sont incompatibles.</li>
</ul>
</div>
</div>

<h2 class="subsection-title">13.2 Probabilité d'un événement</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Lorsqu'on répète un grand nombre de fois une expérience aléatoire (de façon indépendante et dans les mêmes conditions), la fréquence de réalisation d'un événement $A$ se stabilise autour d'un nombre appelé <strong>probabilité de $A$</strong>, noté $P(A)$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<ul>
<li>Pour tout événement $A$ : $0 \leqslant P(A) \leqslant 1$.</li>
<li>Événement impossible : $P(\emptyset) = 0$.</li>
<li>Événement certain : $P(\Omega) = 1$.</li>
<li>La somme des probabilités de tous les événements élémentaires est égale à $1$.</li>
</ul>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout événement $A$ : $P(\overline{A}) = 1 - P(A)$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
La probabilité qu'un élève choisi au hasard dans un collège soit en 3ème est $0{,}27$. Calculer la probabilité qu'il ne soit pas en 3ème.<br><br>
On note $T$ l'événement « l'élève est en 3ème ». On a $P(T) = 0{,}27$, donc :
$$P(\overline{T}) = 1 - P(T) = 1 - 0{,}27 = 0{,}73$$
Il y a donc $73\,\%$ de chances que l'élève choisi ne soit pas en 3ème.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tous événements $A$ et $B$ : $P(A \cup B) + P(A \cap B) = P(A) + P(B)$.<br>
On peut aussi écrire : $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Dans une classe, on note $F$ l'événement « l'élève est une fille » et $L$ l'événement « l'élève a les cheveux longs ». On sait que $P(F) = 0{,}5$, $P(L) = 0{,}4$ et $P(F \cap L) = 0{,}3$. Calculer $P(F \cup L)$.<br><br>
$P(F \cup L) = P(F) + P(L) - P(F \cap L) = 0{,}5 + 0{,}4 - 0{,}3 = 0{,}6$.<br>
La probabilité que l'élève choisi soit une fille ou ait les cheveux longs est $0{,}6$.
</div>
</div>

<div class="remarque">
Cas particulier : si $A$ et $B$ sont incompatibles ($A \cap B = \emptyset$), alors $P(A \cup B) = P(A) + P(B)$.
</div>

<h2 class="subsection-title">13.3 Équiprobabilité</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
On dit qu'il y a <strong>équiprobabilité</strong> lorsque tous les événements élémentaires d'une expérience aléatoire ont la même probabilité d'être réalisés.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Dans une situation d'équiprobabilité :
$$P(A) = \dfrac{\text{nombre d'issues favorables à } A}{\text{nombre total d'issues}}$$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ol>
<li>Calculer $P(R)$, $P(P)$, $P(R \cap P)$ et $P(R \cup P)$.<br>
Les 6 jetons sont identiques au toucher : chaque jeton a autant de chance d'être tiré que les autres. On est donc en situation d'équiprobabilité.
<ul>
<li>$R = \{R_1, R_2, R_3\}$ est réalisé par 3 issues sur 6, donc $P(R) = \dfrac{3}{6} = \dfrac{1}{2}$.</li>
<li>$P = \{R_2, B_2\}$ est réalisé par 2 issues sur 6, donc $P(P) = \dfrac{2}{6} = \dfrac{1}{3}$.</li>
<li>$R \cap P = \{R_2\}$ est réalisé par 1 issue sur 6, donc $P(R \cap P) = \dfrac{1}{6}$.</li>
<li>$R \cup P = \{R_1, R_2, R_3, B_2\}$ est réalisé par 4 issues sur 6, donc $P(R \cup P) = \dfrac{4}{6} = \dfrac{2}{3}$.</li>
</ul>
</li>
<li>Vérifier le résultat obtenu pour $P(R \cup P)$ à l'aide de la formule.<br>
$P(R \cup P) + P(R \cap P) = \dfrac{2}{3} + \dfrac{1}{6} = \dfrac{4}{6} + \dfrac{1}{6} = \dfrac{5}{6}$ et $P(R) + P(P) = \dfrac{1}{2} + \dfrac{1}{3} = \dfrac{3}{6} + \dfrac{2}{6} = \dfrac{5}{6}$</li>
<li>Calculer $P(\overline{R})$ et vérifier ce résultat.<br>
$\overline{R} = B = \{B_1, B_2, B_3\}$, et $P(\overline{R}) = 1 - P(R) = 1 - \dfrac{1}{2} = \dfrac{1}{2}$.<br>
On retrouve bien $P(B) = \dfrac{3}{6} = \dfrac{1}{2}$.</li>
</ol>
</div>
</div>

<h2 class="subsection-title">13.4 Lire des probabilités dans un tableau d'effectifs</h2>

<div class="environment methode">
<div class="environment-title">Méthode :</div>
<div class="environment-content">
On interroge 200 élèves d'un collège sur leurs activités extra-scolaires. Le tableau ci-dessous résume les résultats.

<table style="border-collapse:collapse; margin:1rem auto;">
<tr>
<th style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem;"></th>
<th style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem;">Musique</th>
<th style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem;">Pas de musique</th>
<th style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem;">Total</th>
</tr>
<tr>
<td style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem;"><strong>Sport</strong></td>
<td style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem; text-align:center;">30</td>
<td style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem; text-align:center;">90</td>
<td style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem; text-align:center;">120</td>
</tr>
<tr>
<td style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem;"><strong>Pas de sport</strong></td>
<td style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem; text-align:center;">30</td>
<td style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem; text-align:center;">50</td>
<td style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem; text-align:center;">80</td>
</tr>
<tr>
<td style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem;"><strong>Total</strong></td>
<td style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem; text-align:center;">60</td>
<td style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem; text-align:center;">140</td>
<td style="border:1.5px solid #9C7487; padding:0.4rem 0.8rem; text-align:center;">200</td>
</tr>
</table>

On note $S$ : « l'élève pratique un sport en club » et $M$ : « l'élève joue d'un instrument de musique ».<br>
On choisit un élève au hasard parmi les 200.

<ol>
<li>Justifier qu'on est en situation d'équiprobabilité.<br>
Chaque élève a autant de chance d'être choisi que les autres : on est en situation d'équiprobabilité. Chaque élève a la probabilité $\dfrac{1}{200}$ d'être choisi.</li>

<li>Calculer $P(S)$, $P(M)$ et $P(\overline{S})$.<br>
120 élèves pratiquent un sport en club, donc $P(S) = \dfrac{120}{200} = \dfrac{3}{5}$.<br>
60 élèves jouent d'un instrument, donc $P(M) = \dfrac{60}{200} = \dfrac{3}{10}$.<br>
$P(\overline{S}) = 1 - P(S) = 1 - \dfrac{3}{5} = \dfrac{2}{5}$.<br>
On vérifie : 80 élèves ne pratiquent pas de sport, et $\dfrac{80}{200} = \dfrac{2}{5}$.</li>

<li>Calculer $P(S \cap M)$ et en déduire $P(S \cup M)$.<br>
$S \cap M$ désigne les élèves qui pratiquent un sport en club et jouent d'un instrument.<br>
La cellule correspondante du tableau contient 30 élèves, donc $P(S \cap M) = \dfrac{30}{200} = \dfrac{3}{20}$.<br>
On en déduit que :
<div class="math-display">
$$\begin{align*}
P(S \cup M) &= P(S) + P(M) - P(S \cap M) \\
&= \dfrac{3}{5} + \dfrac{3}{10} - \dfrac{3}{20} \\
&= \dfrac{12}{20} + \dfrac{6}{20} - \dfrac{3}{20} \\
&= \dfrac{15}{20} \\
&= \dfrac{3}{4}
\end{align*}$$
</div>
</li>
</ol>
</div>
</div>

<h2 class="subsection-title">13.5 Représentation des événements</h2>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem;">

<div>

<strong>Arbres des possibles</strong><br><br>

On lance une pièce de monnaie deux fois de suite, on peut schématiser cette expérience par un arbre :<br><br>

<img src="/mabemat/figures/3e/chapitre-13/fig1.svg" alt="Arbre des possibles" style="display:block; margin:0 auto; max-height:200px; max-width:100%;">
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
