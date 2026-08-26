---
title: "Semaine 24 - Probabilités : univers et événements"
layout: "automatismes-2nde"
auto_number: 24
weight: 24
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
Décomposer $150$ en produit de facteurs premiers.
---CORR---
On divise successivement par les nombres premiers :

$$150=2\times 75 \qquad 75=3\times 25 \qquad 25=5\times 5$$

D'où :

$$150={\color{#4A5D7A}2\times 3\times 5^2}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Parmi les $1\,500$ logements que compte une ville, $20\,\%$ sont des maisons, et $60\,\%$ de celles-ci sont des T2.

Le nombre de maisons T2 est :

**A.** $300$ &emsp; **B.** $180$ &emsp; **C.** $120$ &emsp; **D.** $900$
---CORR---
On procède en deux étapes. Nombre de maisons :

$$0{,}20\times 1\,500=300$$

Attention : les $60\,\%$ portent sur les **maisons**, pas sur l'ensemble des logements. On applique donc ce pourcentage à $300$ :

$$0{,}60\times 300={\color{#4A5D7A}180}$$

On peut aussi enchaîner les deux coefficients : $1\,500\times 0{,}20\times 0{,}60=180$.

La réponse A s'arrête à la première étape.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Lors d'une élection, $\dfrac{1}{4}$ des électeurs ont voté pour A, $30\,\%$ pour B, $\dfrac{1}{5}$ pour C, et le reste pour D.

La proportion d'électeurs ayant voté pour D est :

**A.** $15\,\%$ &emsp; **B.** $20\,\%$ &emsp; **C.** $30\,\%$ &emsp; **D.** $25\,\%$
---CORR---
On convertit tout en écriture décimale pour pouvoir additionner :

$$\dfrac{1}{4}=0{,}25 \qquad 30\,\%=0{,}30 \qquad \dfrac{1}{5}=0{,}20$$

La somme des quatre proportions vaut $1$, puisque chaque électeur a voté pour exactement un candidat :

$$0{,}25+0{,}30+0{,}20=0{,}75$$

D'où :

$$1-0{,}75=0{,}25={\color{#4A5D7A}25\,\%}$$

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

$$A=\lbrace 2\,;\,4\,;\,6\rbrace \qquad\text{et}\qquad B=\lbrace 1\,;\,2\,;\,3\rbrace$$

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
Décomposer $198$ en produit de facteurs premiers.
---CORR---
On divise successivement par les nombres premiers :

$$198=2\times 99 \qquad 99=3\times 33 \qquad 33=3\times 11$$

D'où :

$$198={\color{#4A5D7A}2\times 3^2\times 11}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Parmi les $2\,500$ logements que compte une ville, $40\,\%$ sont des maisons, et $25\,\%$ de celles-ci sont des T2.

Le nombre de maisons T2 est :

**A.** $250$ &emsp; **B.** $1\,000$ &emsp; **C.** $625$ &emsp; **D.** $100$
---CORR---
On procède en deux étapes. Nombre de maisons :

$$0{,}40\times 2\,500=1\,000$$

Attention : les $25\,\%$ portent sur les **maisons**, pas sur l'ensemble des logements. On applique donc ce pourcentage à $1\,000$ :

$$0{,}25\times 1\,000={\color{#4A5D7A}250}$$

On peut aussi enchaîner les deux coefficients : $2\,500\times 0{,}40\times 0{,}25=250$.

La réponse B s'arrête à la première étape.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Lors d'une élection, $\dfrac{1}{5}$ des électeurs ont voté pour A, $35\,\%$ pour B, $\dfrac{1}{4}$ pour C, et le reste pour D.

La proportion d'électeurs ayant voté pour D est :

**A.** $25\,\%$ &emsp; **B.** $15\,\%$ &emsp; **C.** $20\,\%$ &emsp; **D.** $30\,\%$
---CORR---
On convertit tout en écriture décimale pour pouvoir additionner :

$$\dfrac{1}{5}=0{,}20 \qquad 35\,\%=0{,}35 \qquad \dfrac{1}{4}=0{,}25$$

La somme des quatre proportions vaut $1$, puisque chaque électeur a voté pour exactement un candidat :

$$0{,}20+0{,}35+0{,}25=0{,}80$$

D'où :

$$1-0{,}80=0{,}20={\color{#4A5D7A}20\,\%}$$

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
