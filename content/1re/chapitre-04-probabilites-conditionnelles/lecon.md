---
title: "Leçon complète"
---

<h2 class="subsection-title">4.1 Vocabulaire des probabilités</h2>

<h3 class="subsubsection-title">4.1.1 Univers, événements, probabilité</h3>

On note $\Omega$ l'<strong>ensemble des événements élémentaires</strong> (ou <strong>univers</strong>) d'une expérience aléatoire.<br>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On lance un dé non pipé et on note le chiffre apparu. Alors $\Omega=\{1;2;3;4;5;6\}$.<br>
En général, on note $e_1$ , $e_2$ ... $e_n$ les événements élémentaires.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Lorsqu'on associe à chaque événement élémentaire un nombre $P(e_i)$, appelé probabilité de $e_i$, tel que pour tout $i$, <br>$0\leq P(e_i)\leq 1$ et $P(e_1)+P(e_2)+\ldots+P(e_n)=1$, on dit qu'on définit une probabilité sur $\Omega$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Lancer du dé non pipé : $P(1)=\dfrac{1}{6}$ ; $P(2)=\dfrac{1}{6}$ ; … $P(6)=\dfrac{1}{6}$.
</div>
</div>

Un événement $A$ est un sous ensemble de $\Omega$.<br>

La probabilité d'un événement est la somme des probabilités des événements élémentaires qui le constituent.


<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Lancer du dé non pipé.<br>
On s'intéresse au sous ensemble $A$ correspondant à " le chiffre apparu est pair ", alors $A = \{ 2 ; 4 ; 6 \}$.<br>
Alors $P(A)=P(2)+P(4)+P(6)=\dfrac{1}{6}+\dfrac{1}{6}+\dfrac{1}{6}=\dfrac{3}{6}=\dfrac{1}{2}$.
</div>
</div>

<h3 class="subsubsection-title">4.1.2 Équiprobabilité</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Lorsque tous les événements élémentaires ont la même probabilité, on dit qu'il s'agit d'une situation d'<strong>équiprobabilité</strong>.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Lorsqu'on est dans une situation d'équiprobabilité et que le nombre d'éléments de $\Omega$ est $n$, 
<ul>
<li>la probabilité de chaque événement est $\dfrac{1}{n}$</li>
<li>pour tout événement $A$, $P(A)=\dfrac{\text{Card}(A)}{\text{Card}(\Omega)}=\dfrac{\text{nombre de cas favorables}}{\text{nombre de cas possibles}}$</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">4.1.3 Événement contraire, réunion, intersection et partition</h3>

On considère $A$ et $B$ deux événements d'un même univers $\Omega$.

<div class="environment definition">
<div class="environment-title">Définition : $ $</div>
<div class="environment-content">

<ul>
<li>On note $\overline{A}$ l'<strong>événement contraire</strong> de $A$ qui est l'ensemble de tous les événements élémentaires qui ne sont pas dans $A$.</li>
<li>On note $A\cap B$ c'est à dire " $A$ et $B$" l'<strong>intersection</strong> de $A$ et de $B$, c'est à dire l'événement constitué des événements élémentaires qui sont à la fois dans $A$ et dans $B$.</li>
<li>On note $A\cup B$ c'est à dire " $A$ ou $B$" la <strong>réunion</strong> de $A$ et de $B$, c'est à dire l'événement constitué des événements élémentaires qui sont dans l'un au moins des événements $A$, $B$.</li>
<li>Les événements $A$ et $B$ sont incompatibles si $A\cap B=\emptyset$.</li>
</ul>
</div>
</div>
<p style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-04/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:top; width:calc(30% - 12px); max-height:200px; max-width:100%;"><img src="/mabemat/figures/1re/chapitre-04/fig2.svg" alt="figure 2" style="display:inline-block; vertical-align:top; width:calc(30% - 12px); max-height:200px; max-width:100%;"><img src="/mabemat/figures/1re/chapitre-04/fig3.svg" alt="figure 3" style="display:inline-block; vertical-align:top; width:calc(30% - 12px); max-height:200px; max-width:100%;"></p>

<div class="environment theoreme">
<div class="environment-title">Théorème : $ $</div>
<div class="environment-content">
<ul>
<li>$P(\overline{A})=1-P(A)$ ou encore $1=P(A)+P(\overline{A})$.</li>
<li>$P(A\cup B)+P(A\cap B)=P(A)+P(B)$ ou encore $P(A\cup B)=P(A)+P(B)-P(A\cap B)$</li>
<li>Si $A$ et $B$ sont incompatibles ie $A\cap B=\emptyset$, alors $P(A\cap B)=0$ et donc $P(A\cup B)=P(A)+P(B)$.</li>
</ul>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété : </div>

<div class="environment-content" style="display:flex; align-items:center; gap:12px;">

<div style="flex:1;">
$A_1$, $A_2$ et $A_3$ forment une <strong>partition</strong> de $E$ s'ils sont disjoints $2$ à $2$ et si $A_1\cup A_2 \cup A_3=E$. <br>
Dans ce cas, $P(E)=P(A_1)+P(A_2)+P(A_3)$.<br>
Cette propriété se généralise à un nombre quelconque d'événements formant la partition. <br>
</div>

<img src="/mabemat/figures/1re/chapitre-04/fig4.svg" alt="figure 4"  style="width:calc(30% - 12px); max-height:150px; height:auto;">
</div>

</div>


<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Dans une chocolaterie, on conditionne les chocolats par assortiments de $60$.
Dans une boite, $25$ sont au chocolat noir, $39$ sont fourrés au praliné et $16$ sont au chocolat noir et fourrés au praliné. On choisit au hasard un chocolat dans cette boite.<br>
Considérons les événements $A$ : " Le chocolat est au chocolat noir " et $B$ : " Le chocolat est fourré au praliné ". <br>Quelle est la probabilité pour que le chocolat ne soit ni au chocolat noir, ni fourré au praliné ?

<ul>
<li style="display:flex; align-items:center; gap:12px;">

<div style="flex:1;">
<u>Solution 1</u> : Utilisons le diagramme ci-contre appelé le diagramme de Venn.<br>
Le 1er nombre placé est $16$ qui correspond au cardinal de $A\cap B$.<br>
On en déduit ensuite $9=25-16$ et $23=39-16$.<br>
La somme $(9+16+23=48)$ constitue le cardinal de $A\cup B$.<br>
On en déduit que le nombre de chocolats qui ne sont ni au chocolat noir, ni fourré au praliné est $60 - 48 = 12$.<br>
Comme nous somme dans une situation d'équiprobabilité, la probabilité demandée est $\dfrac{12}{60}=\dfrac{1}{5}$.
</div>

<img src="/mabemat/figures/1re/chapitre-04/fig5.svg" alt="figure 5" style="width:49%; max-height:200px; height:auto;">

</li>

<li><u>Solution $2$</u> : On peut remarquer que l'événement " le chocolat choisi n'est ni au chocolat noir, ni fourré au praliné " est l'événement contraire de $A\cup B$.<br><br>
Or, $P(A\cup B)=P(A)+P(B)-P(A\cap B)=\dfrac{25}{60}+\dfrac{39}{60}-\dfrac{16}{60}=\dfrac{48}{60}=\dfrac{4}{5}$<br><br>
On en déduit $P(\overline{A\cup B})=1-P(A\cup B)=1-\dfrac{4}{5}=\dfrac{1}{5}$.</li>
</ul>
</div>
</div>

<h2 class="subsection-title">4.2 Probabilités conditionnelles</h2>

<h3 class="subsubsection-title">4.2.1 Conditionnement</h3>

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
$P(A\cap B)=P_A(B)\times P(A)$.
</div>

<img src="/mabemat/figures/1re/chapitre-04/fig6.svg" alt="figure 6" style="width:49%; max-height:150px; height:auto;">
</div>

<div class="remarque">
Lorsque $P(B)\neq 0$, on a aussi $P_B(A)=\dfrac{P(A\cap B)}{P(B)}$, ce que l'on peut aussi écrire $P(A\cap B)=P_B(A)\times P(B)$.<br>
Ainsi, si $P(A)\neq 0$ et $P(B)\neq 0$, on a $P_A(B)\times P(A)=P_B(A)\times P(B)$.
</div>

<h3 class="subsubsection-title">4.2.2 Exemple</h3>

Un sachet de $100$ bonbons contient $40$ bonbons acidulés, les autres bonbons sont à la guimauve.
$18$ des bonbons à la guimauve sont au parfum orange et $10$ bonbons sont acidulés et au parfum orange.
Les bonbons qui ne sont pas au parfum orange sont à la fraise.
On choisit un bonbon au hasard dans ce sachet. On note :

<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem;">

<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$A$ : l'événement « le bonbon est acidulé »</li>
<li>$F$ : l'événement « le bonbon est à la fraise »</li>
</ul>

<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$G$ : l'événement « le bonbon est à la guimauve »</li>
<li>$O$ : l'événement « le bonbon est à l'orange »</li>
</ul>

</div>


On souhaite calculer :
<ol>
<li>la probabilité que le bonbon choisit au hasard dans ce sachet soit un bonbon au parfum orange sachant qu'il est acidulé.</li>
<li>la probabilité que le bonbon choisit au hasard dans ce sachet soit un bonbon à la guimauve et au parfum orange.</li>
</ol>

Commençons par énumérer les probabilités directement de l'énoncé :<br>
$P(A)=\dfrac{40}{100}=0,4 \quad ; \quad P(G)=\dfrac{60}{100} \quad ; \quad P(A\cap O)=\dfrac{10}{100}=0,1 \quad ; \quad P_G(O)=\dfrac{18}{60}=0,3$<br>

<ol>
<li>On cherche $P_A(O)=\dfrac{P(A\cap O)}{P(A)}=\dfrac{0,1}{0,4}=0,25$.<br>
La probabilité que le bonbon choisit au hasard dans ce sachet soit un bonbon au parfum orange sachant qu'il est acidulé est de $0,25$.<br></li>
<li>On cherche $P(G\cap O)=P(G)\times P_G(O)=0,6\times 0,3=0,18$.<br>
La probabilité que le bonbon choisit au hasard dans ce sachet soit un bonbon à la guimauve et au parfum orange est de $0,18$.</li>
</ol> 

<h3 class="subsubsection-title">4.2.3 Représentation par un arbre pondéré</h3>

La situation précédente peut facilement se représenter par un arbre pondéré. On garde les mêmes notations.<br>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem;">

<!-- Colonne 1 -->
<div>
<div style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-04/fig7.svg" alt="figure 7" style="max-height:200px; max-width:100%; margin:0.5em 0;">
</div>
<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
$P(A\cap F)=P(A)\times P_A(F) \\
\phantom{P(A\cap F)}=0,4\times 0,75 \\
\phantom{P(A\cap F)}=0,3$.
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

Un arbre de probabilités respecte deux règles :<br><br>

<strong>Règle 1 : Règle des nœuds</strong>

<div class="environment propriete">
<div class="environment-title">Propriété : </div>
<div class="environment-content">
La somme des probabilités affectées aux branches issues d'un même nœud est égale à $1$.
</div>
</div>

<strong>Règle 2 :</strong>
<div class="environment propriete">
<div class="environment-title">Propriété : </div>
<div class="environment-content">
La probabilité d'un événement correspondant à un chemin est égale au produit des probabilités inscrites sur les branches du chemin.
</div>
</div>
</div></div>
<h3 class="subsubsection-title">4.2.4 Indépendance</h3>

Si $P_A(B)=P(B)$ et $P_B(A)=P(A)$ c'est-à-dire que la probabilité de l'un ne dépend pas de la réalisation de l'autre, on dira que les événements $A$ et $B$ sont <strong>indépendants</strong>.<br>
Une autre façon de traduire l'indépendance est de vérifier que $P(A\cap B)=P(A)\times P(B)$.

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Si $A$ et $B$ sont deux événements indépendants, alors $\overline{A}$ et $B$ sont indépendants.
</div>
</div>

<h2 class="subsection-title">4.3 Formules des probabilités totales</h2>

<h3 class="subsubsection-title">4.3.1 Exemple</h3>

Un test d'une maladie est effectué sur la totalité d'une population.
Une étude statistique établit que $70 \%$ de la population réagit négativement au test (événement $N$) , $20 \%$ réagit faiblement au test (événement $F$) et $10 \%$ réagit fortement au test (événement $R$) .
La probabilité pour une personne de cette population d'être atteinte de la maladie (événement $M$) est : 
<ul>
<li>$0,9$ lorsque le test est fortement positif ;</li>
<li>$0,6$ lorsque le test est faiblement positif ;</li>
<li>$0,05$ lorsque le test est négatif.</li>
</ul>
On veut calculer la probabilité de l'événement " la personne testée est malade ".<br>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; align-items:start;">

<!-- Colonne 1 : image -->
<div style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-04/fig8.svg" alt="figure 8" style="max-height:200px; max-width:100%; margin:0.5em 0;">
</div>

<!-- Colonne 2 : texte -->
<div>

Par hypothèse, on a donc  
$P(R)=0,10$ ; $P(F)=0,20$ ; $P(N)=0,7$ ; $P_R(M)=0,9$ ; $P_F(M)=0,6$ ; $P_N(M)=0,05$.  
Trois situations sont possibles pour obtenir l'événement $M$ :  « <span style="color:#E6B459;">N et M</span> » ;  « <span style="color:#9AC8EB;">F et M</span> » ;  « <span style="color:#D36740;">R et M</span> ».  
Donc :

<div class="math-display">
$$
\begin{align*}
P(M)&=\textcolor{#E6B459}{P(N\cap M)}
+ \textcolor{#9AC8EB}{P(F\cap M)}
+ \textcolor{#D36740}{P(R\cap M)} \\
&=\textcolor{#E6B459}{P(N)\times P_N(M)}
+ \textcolor{#9AC8EB}{P(F)\times P_F(M)}
+ \textcolor{#D36740}{P(R)\times P_R(M)}\\
&=\textcolor{#E6B459}{0,70\times 0,05}
+ \textcolor{#9AC8EB}{0,20 \times 0,6}
+ \textcolor{#D36740}{0,10 \times 0,9}\\
&=0,245
\end{align*}
$$
</div>

La probabilité pour qu'une personne de cette population soit atteinte de la maladie est donc égale à $0,245$.

</div>

</div>


<h3 class="subsubsection-title">4.3.2 Généralisation</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
$A_1$, $A_2$,…, $A_n$ forment une partition de $\Omega$. Alors, la probabilité d'un événement quelconque $B$ est donnée par $P(B)=P(A_1\cap B)+P(A_2\cap B)+\ldots+P(A_n\cap B)=P(A_1)\times P_{A_1}(B) + P(A_2)\times P_{A_2}(B)+\ldots+P(A_n)\times P_{A_n}(B)$.
</div>
</div>

<div class="remarque">
On obtient alors une 3ème règle de calcul des probabilités à l'aide d'un arbre pondéré
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La probabilité d'un événement correspondant à plusieurs chemins est égale à la somme des probabilités de chacun de ces chemins.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Pour fabriquer un objet, un artisan achète des pièces auprès de $3$ fournisseurs $A_1$, $A_2$ et $A_3$. <br>Un quart des pièces proviennent du fournisseur $A_1$, $40\%$ des pièces proviennent du fournisseur $A_2$ et le reste provient du fournisseur $A_3$.<br>
$5\%$ des pièces provenant du fournisseur $A_1$, un dixième de celles provenant du fournisseur $A_2$ et $0,1\%$ de celles du fournisseur $A_3$ ont un défaut.
On prend, au hasard, une des pièces.
<ol>
<li>Construire un arbre de probabilité traduisant la situation.</li>
<li>Calculer la probabilité de l'événement $B$ : " la pièce achetée par l'artisan présente un défaut ".</li>
<li>On prend une pièce au hasard et elle présente un défaut.<br> Quelle est la probabilité qu'elle provienne du fournisseur $A_2$ ?</li>
</ol>

<div style="display:inline-block; vertical-align:top; width:calc(32% - 12px);">
1) <br>
<img src="/mabemat/figures/1re/chapitre-04/fig9.svg" alt="figure 9" style="max-height:300px; max-width:100%;">
</div><div style="display:inline-block; vertical-align:top; width:calc(66% - 12px);">
2) On a : 
<div class="math-display">
$$
\begin{align*}
P(B)&=P(A_1\cap B) + P(A_2\cap B) + P(A_3\cap B) \\
&=P(A_1)\times P_{A_1}(B) +P(A_2)\times P_{A_2}(B) + P(A_3)\times P_{A_3}(B)\\
&=0,25\times 0,05 + 0,40 \times 0,1 + 0,35 \times 0,001\\
&=0,05285
\end{align*}
$$
</div>

La probabilité pour que la pièce achetée par l'artisan présente un défaut est donc égale à $0,05285$.<br>
3) On doit calculer $P_B(A_2)=\dfrac{P(A\cap A_2)}{P(B)}=\dfrac{0,4\times 0,1}{0,05285}\approx 0,76$.<br>
Lorsqu'une pièce a un défaut, la probabilité qu'elle vienne du fournisseur $A_2$ est d'environ $76\%$.
</div>

</div>
</div>

<h2 class="subsection-title">4.4 Répétition d'expériences identiques et indépendantes</h2>

Il y a <strong>répétition d'expériences identiques</strong> lorsque la même expérience aléatoire est répétée plusieurs fois de suite. Ces expériences aléatoires successives sont <strong>indépendantes</strong> lorsque l'issue de l'une quelconque de ces expériences ne dépend pas de l'issue des autres expériences.

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Une urne contient $5$ boules indiscernables : $2$ bleues, $2$ rouges et $1$ noire.<br>
L'expérience consiste à tirer au hasard successivement $2$ boules de l'urne <strong>avec remise</strong> et à noter les couleurs obtenues. On remet la boule après le 1er tirage dans l'urne, donc la composition de l'urne lors du second tirage est identique à celle du 1er tirage.<br>
Il s'agit donc la répétition de l'expérience " tirer au hasard une boule dans l'urne et noter sa couleur ". On répète cette expérience $2$ fois. De plus, le résultat du second tirage ne dépend pas de l'issue du 1er : les deux tirages sont indépendants.

<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; align-items:start;">

<!-- Colonne 1 : texte -->
<div>

<div class="remarque">
Il n'en serait pas de même lors d'un tirage sans remise.
</div>

On note $B$ l'événement « la boule est bleue »,  
$R$ l'événement « la boule est rouge »  
et $N$ l'événement « la boule est noire ». <br>

Ainsi, si l'on note $U$ l'événement « le tirage est unicolore » alors : <br>

$$
\begin{align*}
P(U)
&=P(B\cap B)+P(R\cap R)+P(N\cap N) \\\\
&=\frac{2}{5}\times\frac{2}{5}
 +\frac{2}{5}\times\frac{2}{5}
 +\frac{1}{5}\times\frac{1}{5} \\\\
&=\frac{9}{25}
\end{align*}
$$

</div>

<!-- Colonne 2 : image -->
<div style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-04/fig10.svg"
     alt="figure 10"
     style="max-height:400px; max-width:100%; margin:0.5em 0;">
</div>

</div>

</div>
</div>
