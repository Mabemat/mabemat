---
title: "Semaine 25 - Probabilités : univers et événements"
layout: "automatismes-2nde"
auto_number: 25
weight: 25
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
On lance un dé équilibré à six faces et on note le numéro obtenu.

Décrire l'univers $\Omega$, puis l'événement $A$ « obtenir un nombre pair » et son événement contraire $\overline{A}$.
---CORR---
L'univers est l'ensemble de toutes les issues possibles :

$$\Omega={\color{#4A5D7A}\lbrace 1\,;\,2\,;\,3\,;\,4\,;\,5\,;\,6\rbrace}$$

Un événement est un sous-ensemble de l'univers. Les nombres pairs de $\Omega$ sont :

$$A={\color{#4A5D7A}\lbrace 2\,;\,4\,;\,6\rbrace}$$

L'événement contraire rassemble toutes les issues de $\Omega$ qui ne sont pas dans $A$ :

$$\overline{A}={\color{#4A5D7A}\lbrace 1\,;\,3\,;\,5\rbrace}$$

On vérifie que $A$ et $\overline{A}$ n'ont aucune issue en commun et qu'ensemble ils reconstituent $\Omega$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Avec le même dé, on considère $A$ « obtenir un multiple de $3$ » et $B$ « obtenir un nombre supérieur ou égal à $4$ ».

Déterminer $A\cap B$ et $A\cup B$.
---CORR---
On écrit d'abord chaque événement en extension :

$$A=\lbrace 3\,;\,6\rbrace \qquad\text{et}\qquad B=\lbrace 4\,;\,5\,;\,6\rbrace$$

L'intersection rassemble les issues appartenant aux **deux** événements à la fois :

$$A\cap B={\color{#4A5D7A}\lbrace 6\rbrace}$$

La réunion rassemble les issues appartenant à **au moins un** des deux, sans compter deux fois celles qui sont communes :

$$A\cup B={\color{#4A5D7A}\lbrace 3\,;\,4\,;\,5\,;\,6\rbrace}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Dans une classe de $30$ élèves, $18$ étudient l'anglais, $14$ l'espagnol, et $6$ étudient les deux langues.

Combien d'élèves étudient au moins une des deux langues ?
---CORR---
Si on additionne simplement $18$ et $14$, les élèves qui étudient les deux langues sont comptés deux fois. Il faut donc les retrancher une fois :

$$18+14-6={\color{#4A5D7A}26}\ \text{élèves.}$$

C'est la formule de la réunion :

$$\text{card}(A\cup B)=\text{card}(A)+\text{card}(B)-\text{card}(A\cap B)$$

Il y a donc $30-26=4$ élèves qui n'étudient aucune des deux langues.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Résoudre dans $\mathbb{R}$ l'équation :

$$(2x-7)(x+3)=0$$
---CORR---
Un produit est nul si et seulement si l'un au moins de ses facteurs est nul :

$$2x-7=0 \qquad\text{ou}\qquad x+3=0$$

On résout chaque équation séparément :

$$\begin{aligned}2x &= 7 \quad\text{donc}\quad x=\dfrac{7}{2} \\ \text{ou}\quad x &= -3\end{aligned}$$

$$S={\color{#4A5D7A}\left\lbrace -3\,;\,\dfrac{7}{2}\right\rbrace}$$

Il ne faut surtout pas développer : la forme factorisée est déjà celle qui donne les solutions.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On sait que $P(A)=0{,}35$. La probabilité de l'événement contraire $\overline{A}$ est :

<div class="qcm-choix">
<span><b>A.</b> $0{,}65$</span>
<span><b>B.</b> $0{,}35$</span>
<span><b>C.</b> $1{,}35$</span>
<span><b>D.</b> $-0{,}35$</span>
</div>
---CORR---
Un événement et son contraire se partagent la totalité des issues : leurs probabilités ont donc pour somme $1$.

$$P\left(\overline{A}\right)=1-P(A)=1-0{,}35={\color{#4A5D7A}0{,}65}$$

Les réponses C et D sont impossibles : une probabilité est toujours comprise entre $0$ et $1$.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
On tire une carte au hasard dans un jeu de $32$ cartes. La probabilité d'obtenir un roi est :

<div class="qcm-choix">
<span><b>A.</b> $\dfrac{1}{32}$</span>
<span><b>B.</b> $\dfrac{1}{4}$</span>
<span><b>C.</b> $\dfrac{4}{8}$</span>
<span><b>D.</b> $\dfrac{1}{8}$</span>
</div>
---CORR---
Le tirage est au hasard, donc il y a équiprobabilité : chaque carte a une chance sur $32$.

Un jeu de $32$ cartes contient $4$ rois, un par couleur. D'où :

$$P=\dfrac{4}{32}=\dfrac{1\times \cancel{4}}{8\times \cancel{4}}={\color{#4A5D7A}\dfrac{1}{8}}$$

La réponse A correspondrait à une seule carte précise, et la réponse B à un jeu de $16$ cartes.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
On lance un dé équilibré à six faces et on note le numéro obtenu.

Décrire l'univers $\Omega$, puis l'événement $A$ « obtenir un nombre impair » et son événement contraire $\overline{A}$.
---CORR---
L'univers est l'ensemble de toutes les issues possibles :

$$\Omega={\color{#4A5D7A}\lbrace 1\,;\,2\,;\,3\,;\,4\,;\,5\,;\,6\rbrace}$$

Un événement est un sous-ensemble de l'univers. Les nombres impairs de $\Omega$ sont :

$$A={\color{#4A5D7A}\lbrace 1\,;\,3\,;\,5\rbrace}$$

L'événement contraire rassemble toutes les issues de $\Omega$ qui ne sont pas dans $A$ :

$$\overline{A}={\color{#4A5D7A}\lbrace 2\,;\,4\,;\,6\rbrace}$$

On vérifie que $A$ et $\overline{A}$ n'ont aucune issue en commun et qu'ensemble ils reconstituent $\Omega$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Avec le même dé, on considère $A$ « obtenir un multiple de $2$ » et $B$ « obtenir un nombre inférieur ou égal à $3$ ».

Déterminer $A\cap B$ et $A\cup B$.
---CORR---
On écrit d'abord chaque événement en extension :

$$\begin{aligned}A &= \lbrace 2\,;\,4\,;\,6\rbrace \\ \text{et}\quad B &= \lbrace 1\,;\,2\,;\,3\rbrace\end{aligned}$$

L'intersection rassemble les issues appartenant aux **deux** événements à la fois :

$$A\cap B={\color{#4A5D7A}\lbrace 2\rbrace}$$

La réunion rassemble les issues appartenant à **au moins un** des deux, sans compter deux fois celles qui sont communes :

$$A\cup B={\color{#4A5D7A}\lbrace 1\,;\,2\,;\,3\,;\,4\,;\,6\rbrace}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Dans une classe de $32$ élèves, $20$ étudient l'anglais, $15$ l'allemand, et $7$ étudient les deux langues.

Combien d'élèves étudient au moins une des deux langues ?
---CORR---
Si on additionne simplement $20$ et $15$, les élèves qui étudient les deux langues sont comptés deux fois. Il faut donc les retrancher une fois :

$$20+15-7={\color{#4A5D7A}28}\ \text{élèves.}$$

C'est la formule de la réunion :

$$\text{card}(A\cup B)=\text{card}(A)+\text{card}(B)-\text{card}(A\cap B)$$

Il y a donc $32-28=4$ élèves qui n'étudient aucune des deux langues.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Résoudre dans $\mathbb{R}$ l'équation :

$$(3x+4)(x-5)=0$$
---CORR---
Un produit est nul si et seulement si l'un au moins de ses facteurs est nul :

$$3x+4=0 \qquad\text{ou}\qquad x-5=0$$

On résout chaque équation séparément :

$$\begin{aligned}3x &= -4 \quad\text{donc}\quad x=-\dfrac{4}{3} \\ \text{ou}\quad x &= 5\end{aligned}$$

$$S={\color{#4A5D7A}\left\lbrace -\dfrac{4}{3}\,;\,5\right\rbrace}$$

Il ne faut surtout pas développer : la forme factorisée est déjà celle qui donne les solutions.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On sait que $P(A)=0{,}28$. La probabilité de l'événement contraire $\overline{A}$ est :

<div class="qcm-choix">
<span><b>A.</b> $-0{,}28$</span>
<span><b>B.</b> $0{,}72$</span>
<span><b>C.</b> $1{,}28$</span>
<span><b>D.</b> $0{,}28$</span>
</div>
---CORR---
Un événement et son contraire se partagent la totalité des issues : leurs probabilités ont donc pour somme $1$.

$$P\left(\overline{A}\right)=1-P(A)=1-0{,}28={\color{#4A5D7A}0{,}72}$$

Les réponses C et A sont impossibles : une probabilité est toujours comprise entre $0$ et $1$.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
On tire une carte au hasard dans un jeu de $52$ cartes. La probabilité d'obtenir un cœur est :

<div class="qcm-choix">
<span><b>A.</b> $\dfrac{1}{13}$</span>
<span><b>B.</b> $\dfrac{1}{52}$</span>
<span><b>C.</b> $\dfrac{1}{4}$</span>
<span><b>D.</b> $\dfrac{13}{4}$</span>
</div>
---CORR---
Le tirage est au hasard, donc il y a équiprobabilité : chaque carte a une chance sur $52$.

Un jeu de $52$ cartes contient $4$ couleurs de $13$ cartes chacune, donc $13$ cœurs. D'où :

$$P=\dfrac{13}{52}=\dfrac{1\times \cancel{13}}{4\times \cancel{13}}={\color{#4A5D7A}\dfrac{1}{4}}$$

La réponse D est impossible : une probabilité ne dépasse jamais $1$.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
