---
title: "Leçon complète"
---

<h2 class="subsection-title">4.1 Probabilités conditionnelles</h2>

<h3 class="subsubsection-title">4.1.1 Rappels</h3>

On note $\Omega$ l'<strong>univers</strong> d'une expérience aléatoire, c'est-à-dire l'ensemble de ses issues, aussi appelées <strong>événements élémentaires</strong> et notées $e_1$, $e_2$, ..., $e_n$.<br>
Définir une <strong>probabilité</strong> sur $\Omega$, c'est associer à chaque issue $e_i$ un nombre $P(e_i)$ tel que $0\leq P(e_i)\leq 1$ et <br>$P(e_1)+P(e_2)+\ldots+P(e_n)=1$.<br>
Un <strong>événement</strong> $A$ est un sous-ensemble de $\Omega$.

<p style="text-align:center;"><strong>La probabilité d'un événement est la somme des probabilités des événements élémentaires qui le constituent.</strong></p>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Lorsque toutes les issues ont la même probabilité, on parle de situation d'<strong>équiprobabilité</strong>. <br>
Si $\Omega$ compte $n$ issues, chaque issue a alors pour probabilité $\dfrac{1}{n}$ et, pour tout événement $A$,
$$P(A)=\dfrac{\text{Card}(A)}{\text{Card}(\Omega)}=\dfrac{\text{nombre de cas favorables}}{\text{nombre de cas possibles}}.$$
</div>
</div>

On considère maintenant $A$ et $B$ deux événements d'un même univers $\Omega$.

<div class="environment definition">
<div class="environment-title">Définition : $ $</div>
<div class="environment-content">
<ul>
<li>L'<strong>événement contraire</strong> de $A$, noté $\overline{A}$, est l'ensemble des issues qui ne sont pas dans $A$.</li>
<li>L'<strong>intersection</strong> de $A$ et de $B$, notée $A\cap B$, c'est-à-dire « $A$ et $B$ », est l'événement constitué des issues qui sont à la fois dans $A$ et dans $B$.</li>
<li>La <strong>réunion</strong> de $A$ et de $B$, notée $A\cup B$, c'est-à-dire « $A$ ou $B$ », est l'événement constitué des issues qui sont dans l'un au moins des deux événements.</li>
<li>$A$ et $B$ sont <strong>incompatibles</strong> lorsque $A\cap B=\emptyset$.</li>
</ul>
</div>
</div>

<div style="display:flex; gap:12px; justify-content:center; align-items:flex-start;">
<img src="/mabemat/figures/1re/chapitre-04/fig1.svg" alt="A inter B" style="flex:1 1 0; min-width:0; max-height:200px; object-fit:contain;">
<img src="/mabemat/figures/1re/chapitre-04/fig2.svg" alt="A union B" style="flex:1 1 0; min-width:0; max-height:200px; object-fit:contain;">
<img src="/mabemat/figures/1re/chapitre-04/fig3.svg" alt="complémentaire de A" style="flex:1 1 0; min-width:0; max-height:200px; object-fit:contain;">
</div>

<div class="environment theoreme">
<div class="environment-title">Théorème : $ $</div>
<div class="environment-content">
<ul>
<li>$P(\overline{A})=1-P(A)$, ou encore $P(A)+P(\overline{A})=1$.</li>
<li>$P(A\cup B)+P(A\cap B)=P(A)+P(B)$, ou encore $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.</li>
<li>Si $A$ et $B$ sont incompatibles, alors $P(A\cap B)=0$ et donc $P(A\cup B)=P(A)+P(B)$.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On lance un dé équilibré à six faces et on note le résultat : $\Omega=\{1;2;3;4;5;6\}$ et on est en situation d'équiprobabilité.<br>
Considérons $A$ : « le résultat est pair » et $B$ : « le résultat est supérieur ou égal à $4$ ».<br>
Calculer $P(A)$, $P(B)$, $P(A\cap B)$ puis $P(A\cup B)$.<br>
On a $A=\{2;4;6\}$ et $B=\{4;5;6\}$, donc $P(A)=\dfrac{3}{6}=\dfrac{1}{2}$ et $P(B)=\dfrac{3}{6}=\dfrac{1}{2}$.<br>
De plus $A\cap B=\{4;6\}$, donc $P(A\cap B)=\dfrac{2}{6}=\dfrac{1}{3}$ et
$$P(A\cup B)=P(A)+P(B)-P(A\cap B)=\dfrac{1}{2}+\dfrac{1}{2}-\dfrac{1}{3}=\dfrac{2}{3}.$$
On retrouve bien $A\cup B=\{2;4;5;6\}$, qui compte $4$ issues sur $6$.
</div>
</div>

<h3 class="subsubsection-title">4.1.2 Conditionnement</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Si $P(A)\neq 0$, on appelle <strong>probabilité conditionnelle</strong> de $B$ sachant $A$ le nombre noté $P_A(B)$ défini par $$P_A(B)=\dfrac{P(A\cap B)}{P(A)}$$
</div>
</div>

<div style="display:flex; align-items:center; gap:12px;">

<div style="flex:1;">
L'ensemble de référence n'est plus l'univers, mais devient l'événement $A$. <br>
On étudie $B$ « parmi » $A$ ou « sachant » $A$, c'est-à-dire $A\cap B$ dans $A$.<br>
L'égalité $P_A(B)=\dfrac{P(A\cap B)}{P(A)}$ peut aussi s'écrire 
$P(A\cap B)=P(A)\times P_A(B)$.
</div>

<img src="/mabemat/figures/1re/chapitre-04/fig6.svg" alt="conditionnement" style="width:49%; max-height:150px; height:auto;">
</div>

<div class="remarque">
Lorsque $P(B)\neq 0$, on a aussi $P_B(A)=\dfrac{P(A\cap B)}{P(B)}$, ce que l'on peut aussi écrire $P(A\cap B)=P(B)\times P_B(A)$.<br>
Ainsi, si $P(A)\neq 0$ et $P(B)\neq 0$, on a $P(A)\times P_A(B)=P(B)\times P_B(A)$.
</div>

<div class="remarque">
Il ne faut pas confondre $P(A\cap B)$, $P_A(B)$ et $P_B(A)$ : les trois nombres portent sur la même intersection, mais pas sur le même ensemble de référence.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Une école de musique compte $200$ adhérents. $80$ d'entre eux pratiquent un instrument à cordes, tous les autres pratiquent un instrument à vent. Parmi les adhérents qui pratiquent un instrument à vent, $42$ sont mineurs. <br>
Enfin, $32$ adhérents pratiquent un instrument à cordes et sont mineurs.<br>
On choisit au hasard un adhérent de cette école. On note :
<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem;">

<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$C$ : l'événement « l'adhérent pratique un instrument à cordes »</li>
<li>$V$ : l'événement « l'adhérent pratique un instrument à vent »</li>
</ul>

<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$M$ : l'événement « l'adhérent est mineur »</li>
<li>$\overline{M}$ : l'événement « l'adhérent est majeur »</li>
</ul>

</div>

Commençons par traduire l'énoncé. Le choix se fait au hasard : on est en situation d'équiprobabilité, donc chaque probabilité s'obtient comme un quotient d'effectifs.
$$P(C)=\dfrac{80}{200}=0,4 \quad ; \quad P(V)=\dfrac{120}{200}=0,6 \quad ; \quad P(C\cap M)=\dfrac{32}{200}=0,16 \quad ; \quad P_V(M)=\dfrac{42}{120}=0,35$$
Attention : les $42$ adhérents mineurs sont comptés <strong>parmi</strong> les $120$ qui pratiquent un instrument à vent, c'est donc bien une probabilité conditionnelle.

<ol>
<li>Calculer la probabilité que l'adhérent choisi soit mineur, sachant qu'il pratique un instrument à cordes.<br>
On cherche $P_C(M)=\dfrac{P(C\cap M)}{P(C)}=\dfrac{0,16}{0,4}=0,4$.<br>
La probabilité que l'adhérent soit mineur sachant qu'il pratique un instrument à cordes est de $0,4$.</li>
<li>Calculer la probabilité que l'adhérent choisi pratique un instrument à vent et soit mineur.<br>
On cherche $P(V\cap M)=P(V)\times P_V(M)=0,6\times 0,35=0,21$.<br>
La probabilité que l'adhérent pratique un instrument à vent et soit mineur est de $0,21$.</li>
</ol>
</div>
</div>

<h3 class="subsubsection-title">4.1.3 Représentation par un arbre pondéré</h3>

La situation précédente se représente facilement par un <strong>arbre pondéré</strong>. On garde les mêmes notations.

<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem;">

<!-- Colonne 1 -->
<div>
<div style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-04/arbre-musique.svg" alt="arbre pondéré école de musique" style="max-height:260px; max-width:100%; margin:0.5em 0;">
</div>
<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
À l'aide de l'arbre ci-dessus, calculer la probabilité que l'adhérent pratique un instrument à cordes et soit majeur.<br>
On multiplie les probabilités portées par le chemin $C$ puis $\overline{M}$ :<br>
$P(C\cap \overline{M})=P(C)\times P_C(\overline{M}) \\
\phantom{P(C\cap \overline{M})}=0,4\times 0,6 \\
\phantom{P(C\cap \overline{M})}=0,24$.
</div>
</div>

<div class="remarque" style="margin-top:1em;">
Un arbre pondéré correctement construit constitue une preuve.
</div>

</div>

<!-- Colonne 2 -->
<div>

Le premier niveau de l'arbre représente les événements « directs », on y inscrit leurs probabilités.<br>
<strong>Le deuxième niveau de l'arbre représente les probabilités conditionnelles.</strong>
Un arbre de probabilités respecte $2$ règles :<br><br>

<strong>Règle 1 : règle des nœuds</strong>

<div class="environment propriete">
<div class="environment-title">Propriété : </div>
<div class="environment-content">
La somme des probabilités affectées aux branches issues d'un même nœud est égale à $1$.
</div>
</div>

<strong>Règle 2 : règle des chemins</strong>
<div class="environment propriete">
<div class="environment-title">Propriété : </div>
<div class="environment-content">
La probabilité d'un événement correspondant à un chemin est égale au produit des probabilités inscrites sur les branches de ce chemin.
</div>
</div>
</div></div>

<div class="remarque">
Les mêmes données peuvent aussi se présenter dans un <strong>tableau croisé d'effectifs</strong>, à partir duquel toutes les probabilités se lisent comme des quotients d'effectifs :

<table>
<tr>
<th></th>
<th>$M$ (mineur)</th>
<th>$\overline{M}$ (majeur)</th>
<th>Total</th>
</tr>
<tr>
<td>$C$ (cordes)</td>
<td>$32$</td>
<td>$48$</td>
<td>$80$</td>
</tr>
<tr>
<td>$V$ (vent)</td>
<td>$42$</td>
<td>$78$</td>
<td>$120$</td>
</tr>
<tr>
<td>Total</td>
<td>$74$</td>
<td>$126$</td>
<td>$200$</td>
</tr>
</table>

On y lit directement $P_C(M)=\dfrac{32}{80}=0,4$ et $P(V\cap M)=\dfrac{42}{200}=0,21$.
</div>

<h2 class="subsection-title">4.2 Partition de l'univers et probabilités totales</h2>

<h3 class="subsubsection-title">4.2.1 Partition de l'univers</h3>

<div class="environment definition">
<div class="environment-title">Définition : $ $</div>
<div class="environment-content">
<div style="display:flex; align-items:center; gap:12px;">
<div style="flex:1;">
Les événements $A_1$, $A_2$, ..., $A_n$, tous de probabilité non nulle, forment une <strong>partition</strong> de l'univers $\Omega$ (on dit aussi qu'ils forment un <strong>système complet d'événements</strong>) lorsque :
<ul>
<li>ils sont deux à deux incompatibles ;</li>
<li>leur réunion est $\Omega$ tout entier.</li>
</ul>
Dans ce cas, $P(A_1)+P(A_2)+\ldots+P(A_n)=1$.
</div>
<img src="/mabemat/figures/1re/chapitre-04/fig4.svg" alt="partition de l'univers" style="width:calc(30% - 12px); max-height:150px; height:auto;">
</div>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Pour tout événement $A$ de probabilité non nulle et différent de $\Omega$, les deux événements $A$ et $\overline{A}$ forment une partition de $\Omega$ : c'est la partition la plus simple, et c'est celle qui apparaît au premier niveau d'un arbre à deux branches.
</div>
</div>

<h3 class="subsubsection-title">4.2.2 Formule des probabilités totales</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Si $A_1$, $A_2$, ..., $A_n$ forment une partition de $\Omega$, alors la probabilité d'un événement quelconque $B$ est donnée par
$$P(B)=P(A_1\cap B)+P(A_2\cap B)+\ldots+P(A_n\cap B)=P(A_1)\times P_{A_1}(B) + P(A_2)\times P_{A_2}(B)+\ldots+P(A_n)\times P_{A_n}(B).$$
C'est la <strong>formule des probabilités totales</strong>.
</div>
</div>

<div class="remarque">
On obtient ainsi une troisième règle de calcul des probabilités à l'aide d'un arbre pondéré.
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<strong>Règle 3 :</strong> la probabilité d'un événement correspondant à plusieurs chemins est égale à la somme des probabilités de chacun de ces chemins.
</div>
</div>

<div class="remarque">
Le cas le plus fréquent est celui d'une partition à deux éléments : pour tout événement $A$ tel que $P(A)\neq 0$ et $P(\overline{A})\neq 0$,
$$P(B)=P(A\cap B)+P(\overline{A}\cap B)=P(A)\times P_A(B)+P(\overline{A})\times P_{\overline{A}}(B).$$
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Une coopérative reçoit des pots de miel de trois apiculteurs $A_1$, $A_2$ et $A_3$. <br>
$30\%$ des pots proviennent de $A_1$, la moitié provient de $A_2$ et le reste provient de $A_3$.<br>
Par ailleurs, $2\%$ des pots venant de $A_1$, $1\%$ de ceux venant de $A_2$ et $5\%$ de ceux venant de $A_3$ sont mal étiquetés.<br>
On prélève au hasard un pot dans le stock de la coopérative.<br>
On note $D$ l'événement : « le pot prélevé est mal étiqueté ».
<ol>
<li>Construire un arbre pondéré traduisant la situation.</li>
<li>Calculer la probabilité de l'événement $D$.</li>
<li>Le pot prélevé est mal étiqueté. Quelle est la probabilité qu'il provienne de l'apiculteur $A_3$ ?</li>
</ol>

<div style="display:inline-block; vertical-align:top; width:calc(32% - 12px);">
1) <br>
<img src="/mabemat/figures/1re/chapitre-04/arbre-miel.svg" alt="arbre pondéré apiculteurs" style="max-height:300px; max-width:100%;">
</div><div style="display:inline-block; vertical-align:top; width:calc(66% - 12px);">
2) Les événements $A_1$, $A_2$ et $A_3$ forment une partition de l'univers. D'après la formule des probabilités totales :
<div class="math-display">
$$
\begin{align*}
P(D)&=P(A_1\cap D) + P(A_2\cap D) + P(A_3\cap D) \\
&=P(A_1)\times P_{A_1}(D) +P(A_2)\times P_{A_2}(D) + P(A_3)\times P_{A_3}(D)\\
&=0,30\times 0,02 + 0,50 \times 0,01 + 0,20 \times 0,05\\
&=0,006+0,005+0,010=0,021
\end{align*}
$$
</div>
La probabilité qu'un pot prélevé au hasard soit mal étiqueté est de $0,021$.<br>
3) On cherche cette fois $P_D(A_3)$, et non $P_{A_3}(D)$ :
$$P_D(A_3)=\dfrac{P(A_3\cap D)}{P(D)}=\dfrac{0,20\times 0,05}{0,021}=\dfrac{0,010}{0,021}\approx 0,48.$$
Lorsqu'un pot est mal étiqueté, la probabilité qu'il vienne de $A_3$ est d'environ $48\%$.
</div>

<div class="remarque" style="margin-top:1em;">
L'apiculteur $A_3$ ne fournit que $20\%$ des pots, mais il est responsable de presque la moitié des pots mal étiquetés : $P_D(A_3)$ et $P_{A_3}(D)$ ne se ressemblent pas du tout. Confondre ces deux nombres est l'erreur la plus fréquente du chapitre.
</div>
</div>
</div>

<h2 class="subsection-title">4.3 Indépendance</h2>

<h3 class="subsubsection-title">4.3.1 Indépendance de deux événements</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $A$ et $B$ deux événements de probabilité non nulle. On dit que $A$ et $B$ sont <strong>indépendants</strong> lorsque
$$P_B(A)=P(A),$$
c'est-à-dire lorsque savoir que $B$ est réalisé ne change pas la probabilité de $A$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $A$ et $B$ deux événements de probabilité non nulle. <br>
Les trois propositions suivantes sont équivalentes :
<ul>
<li>$P_B(A)=P(A)$ $\qquad$ ($A$ est indépendant de $B$) ;</li>
<li>$P_A(B)=P(B)$ $\qquad$ ($B$ est indépendant de $A$) ;</li>
<li>$P(A\cap B)=P(A)\times P(B)$.</li>
</ul>
</div>
</div>

<div class="remarque">
<ul>
<li>En pratique, c'est presque toujours l'égalité $P(A\cap B)=P(A)\times P(B)$ que l'on utilise pour justifier l'indépendance.</li>
<li>Il ne faut surtout pas confondre <strong>indépendants</strong> et <strong>incompatibles</strong>. Deux événements incompatibles de probabilité non nulle ne sont jamais indépendants : $P(A\cap B)=0$ alors que $P(A)\times P(B)\neq 0$.</li>
</ul>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Dans un lycée de $400$ élèves, on relève la pratique d'un sport en club (événement $S$) et le statut d'interne (événement $I$).
On choisit un élève au hasard. Les événements $S$ et $I$ sont-ils indépendants ?

<table>
<tr>
<th></th>
<th>$I$</th>
<th>$\overline{I}$</th>
<th>Total</th>
</tr>
<tr>
<td>$S$</td>
<td>$60$</td>
<td>$180$</td>
<td>$240$</td>
</tr>
<tr>
<td>$\overline{S}$</td>
<td>$40$</td>
<td>$120$</td>
<td>$160$</td>
</tr>
<tr>
<td>Total</td>
<td>$100$</td>
<td>$300$</td>
<td>$400$</td>
</tr>
</table>

On est en situation d'équiprobabilité, donc
$$P(S)=\dfrac{240}{400}=0,6 \quad ; \quad P(I)=\dfrac{100}{400}=0,25 \quad ; \quad P(S\cap I)=\dfrac{60}{400}=0,15.$$
Or $P(S)\times P(I)=0,6\times 0,25=0,15=P(S\cap I)$ : les événements $S$ et $I$ sont donc indépendants.<br>
On peut le vérifier autrement : $P_I(S)=\dfrac{60}{100}=0,6=P(S)$. <br>
Être interne ne change pas la probabilité de pratiquer un sport en club.
</div>
</div>

<h3 class="subsubsection-title">4.3.2 Indépendance et événement contraire</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Si $A$ et $B$ sont deux événements indépendants, alors $\overline{A}$ et $B$ sont aussi indépendants.
</div>
</div>

<div class="remarque">
En appliquant deux fois cette propriété, on obtient aussi que $\overline{A}$ et $\overline{B}$ sont indépendants.
</div>

<h2 class="subsection-title">4.4 Répétition d'épreuves de Bernoulli</h2>

<h3 class="subsubsection-title">4.4.1 Épreuve de Bernoulli</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Une <strong>épreuve de Bernoulli</strong> de paramètre $p$ est une expérience aléatoire n'ayant que deux issues : l'une, appelée <strong>succès</strong> et notée $S$, de probabilité $p$ ; l'autre, appelée <strong>échec</strong> et notée $\overline{S}$, de probabilité $1-p$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On tire une carte au hasard dans un jeu de $32$ cartes et on appelle succès l'événement « la carte tirée est un cœur ».<br>
Justifier qu'il s'agit d'une épreuve de Bernoulli et préciser son paramètre.<br>
Le jeu contient $8$ cœurs, donc $p=\dfrac{8}{32}=\dfrac{1}{4}$ et la probabilité d'un échec est $1-\dfrac{1}{4}=\dfrac{3}{4}$.<br>
Cette expérience n'a que deux issues : c'est une épreuve de Bernoulli de paramètre $\dfrac{1}{4}$.
</div>
</div>

<div class="remarque">
Le choix de ce qu'on appelle « succès » est libre : il dépend uniquement de la question posée, et n'a rien à voir avec un résultat favorable ou souhaitable. On peut très bien appeler succès l'événement « la pièce est défectueuse ».
</div>

<h3 class="subsubsection-title">4.4.2 Répétition de $n$ épreuves identiques et indépendantes</h3>

Dans tout ce paragraphe, on répète $n$ fois de suite la même épreuve de Bernoulli de paramètre $p$, avec $n\leq 4$, et les répétitions sont indépendantes : le résultat d'une épreuve ne modifie pas les probabilités des suivantes.

<div class="environment propriete">
<div class="environment-title">Propriétés :</div>
<div class="environment-content">
Dans l'arbre pondéré représentant la répétition de $n$ épreuves de Bernoulli identiques et indépendantes :
<ol>
<li>la probabilité inscrite sur une branche ne dépend que du résultat auquel elle mène, $S$ ou $\overline{S}$ : elle vaut $p$ ou $1-p$, à tous les niveaux ;</li>
<li>les issues de l'expérience sont les listes ordonnées des résultats des épreuves successives ; il y en a $2^n$ ;</li>
<li>la probabilité d'une issue est le produit des probabilités inscrites sur les branches du chemin qui y mène.</li>
</ol>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Une joueuse de basket réussit un lancer franc avec une probabilité de $0,8$, et ses lancers sont indépendants les uns des autres. Elle tire trois lancers francs de suite.<br>
Représenter la situation par un arbre, puis calculer la probabilité qu'elle réussisse ses trois lancers, qu'elle les rate tous les trois, puis qu'elle en réussisse exactement deux.<br>
On note $S$ l'issue « le lancer est réussi ». Chaque lancer est une épreuve de Bernoulli de paramètre $0,8$, et l'expérience est la répétition de $3$ épreuves identiques et indépendantes.

<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; align-items:center;">

<div style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-04/arbre-basket.svg" alt="arbre de Bernoulli 3 lancers" style="max-height:300px; max-width:100%;">
</div>

<div>
L'arbre comporte $2^3=8$ issues, qui sont les listes ordonnées $SSS$, $SS\overline{S}$, $S\overline{S}S$, ..., $\overline{S}\,\overline{S}\,\overline{S}$.
<ul>
<li>L'issue $SSS$ correspond à un seul chemin, donc
$$P(SSS)=0,8\times 0,8\times 0,8=0,8^3=0,512.$$</li>
<li>L'issue $\overline{S}\,\overline{S}\,\overline{S}$ correspond aussi à un seul chemin, donc
$$P(\overline{S}\,\overline{S}\,\overline{S})=0,2^3=0,008.$$</li>
<li>L'événement $E$ : « la joueuse réussit exactement deux lancers » est formé des trois issues $SS\overline{S}$, $S\overline{S}S$ et $\overline{S}SS$, dont les chemins portent les mêmes probabilités. Donc
$$P(E)=3\times 0,8\times 0,8\times 0,2=0,384.$$</li>
</ul>
</div>

</div>
</div>
</div>

<h3 class="subsubsection-title">4.4.3 Un exemple avec quatre répétitions</h3>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Une graine d'une certaine variété germe avec une probabilité de $0,9$. Un jardinier sème quatre graines, et on admet que les germinations sont indépendantes les unes des autres.<br>
Calculer la probabilité que les quatre graines germent, que trois exactement germent, puis qu'au moins une ne germe pas.<br>
On note $G$ l'issue « la graine germe ». Chaque semis est une épreuve de Bernoulli de paramètre $0,9$ et l'expérience est la répétition de $4$ épreuves identiques et indépendantes. L'arbre ci-dessous comporte $2^4=16$ issues.

<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; align-items:center;">

<div style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-04/arbre-graines.svg" alt="arbre de Bernoulli 4 graines" style="max-height:420px; max-width:100%;">
</div>

<div>
<strong>1. Les quatre graines germent.</strong><br>
Un seul chemin convient, celui qui porte quatre fois la probabilité $0,9$ :
$$P(GGGG)=0,9^4=0,6561.$$

<strong>2. Exactement trois graines germent.</strong><br>
Il faut choisir laquelle des quatre graines ne germe pas : $4$ chemins conviennent, chacun de probabilité $0,9\times 0,9\times 0,9\times 0,1=0,0729$. Donc
$$P=4\times 0,0729=0,2916.$$

<strong>3. Au moins une graine ne germe pas.</strong><br>
L'événement contraire est « les quatre graines germent », dont on connaît déjà la probabilité. Donc
$$P=1-0,6561=0,3439.$$
Passer par l'événement contraire évite ici d'additionner les probabilités de $15$ chemins.
</div>

</div>
</div>
</div>
