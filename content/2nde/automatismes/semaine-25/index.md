---
title: "Semaine 25 - Loi de probabilité et équiprobabilité"
layout: "automatismes-2nde"
auto_number: 25
weight: 25
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Une urne contient $5$ boules rouges, $3$ vertes et $2$ bleues, indiscernables au toucher. On en tire une au hasard.

Donner la loi de probabilité de la couleur obtenue.
---CORR---
Les boules étant indiscernables, il y a équiprobabilité : chaque boule a la même chance d'être tirée. L'effectif total est :

$$5+3+2=10$$

La probabilité d'une couleur est le nombre de boules de cette couleur divisé par le nombre total :

| Couleur | Rouge | Verte | Bleue |
|---|---|---|---|
| Probabilité | $\dfrac{5}{10}={\color{#4A5D7A}0{,}5}$ | $\dfrac{3}{10}={\color{#4A5D7A}0{,}3}$ | $\dfrac{2}{10}={\color{#4A5D7A}0{,}2}$ |

Contrôle indispensable : la somme des probabilités vaut $0{,}5+0{,}3+0{,}2=1$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
On lance deux dés équilibrés à six faces et on s'intéresse à la somme des deux numéros obtenus.

Quelle est la probabilité que cette somme soit égale à $7$ ?
---CORR---
En distinguant les deux dés, il y a $6\times 6=36$ issues équiprobables.

On énumère celles qui donnent une somme de $7$ :

$$(1\,;\,6)\quad(2\,;\,5)\quad(3\,;\,4)\quad(4\,;\,3)\quad(5\,;\,2)\quad(6\,;\,1)$$

Il y en a $6$. D'où :

$$P={\dfrac{6}{36}}={\color{#4A5D7A}\dfrac{1}{6}}$$

Il faut bien distinguer les deux dés : $(2\,;\,5)$ et $(5\,;\,2)$ sont deux issues différentes.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Dans un groupe, $60\,\%$ des personnes sont des femmes, et $30\,\%$ des femmes portent des lunettes.

On choisit une personne au hasard. Quelle est la probabilité que ce soit une femme portant des lunettes ?
---CORR---
Les $30\,\%$ ne portent pas sur le groupe entier, mais seulement sur les femmes : c'est une proportion à l'intérieur d'une proportion. On multiplie donc les deux.

$$P=0{,}60\times 0{,}30={\color{#4A5D7A}0{,}18}$$

Soit $18\,\%$ du groupe. On aurait le même résultat en raisonnant sur un effectif : sur $100$ personnes, $60$ sont des femmes, dont $30\,\%$, soit $18$, portent des lunettes.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
On lance un dé équilibré à six faces. Soit $A$ « obtenir au moins $5$ » et $B$ « obtenir un multiple de $2$ ».

Déterminer $A\cap B$ et $A\cup B$.
---CORR---
On écrit les deux événements en extension :

$$A=\lbrace 5\,;\,6\rbrace \qquad\text{et}\qquad B=\lbrace 2\,;\,4\,;\,6\rbrace$$

$$A\cap B={\color{#4A5D7A}\lbrace 6\rbrace} \qquad A\cup B={\color{#4A5D7A}\lbrace 2\,;\,4\,;\,5\,;\,6\rbrace}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On sait que $P(A)=0{,}35$. La probabilité de l'événement contraire $\overline{A}$ est :

**A.** $0{,}65$ &emsp; **B.** $0{,}35$ &emsp; **C.** $1{,}35$ &emsp; **D.** $-0{,}35$
---CORR---
Un événement et son contraire se partagent la totalité des issues : leurs probabilités ont donc pour somme $1$.

$$P\left(\overline{A}\right)=1-P(A)=1-0{,}35={\color{#4A5D7A}0{,}65}$$

Les réponses C et D sont impossibles : une probabilité est toujours comprise entre $0$ et $1$.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
On tire une carte au hasard dans un jeu de $32$ cartes. La probabilité d'obtenir un roi est :

**A.** $\dfrac{1}{32}$ &emsp; **B.** $\dfrac{1}{4}$ &emsp; **C.** $\dfrac{4}{8}$ &emsp; **D.** $\dfrac{1}{8}$
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
Une urne contient $4$ boules rouges, $6$ vertes et $10$ bleues, indiscernables au toucher. On en tire une au hasard.

Donner la loi de probabilité de la couleur obtenue.
---CORR---
Les boules étant indiscernables, il y a équiprobabilité : chaque boule a la même chance d'être tirée. L'effectif total est :

$$4+6+10=20$$

La probabilité d'une couleur est le nombre de boules de cette couleur divisé par le nombre total :

| Couleur | Rouge | Verte | Bleue |
|---|---|---|---|
| Probabilité | $\dfrac{4}{20}={\color{#4A5D7A}0{,}2}$ | $\dfrac{6}{20}={\color{#4A5D7A}0{,}3}$ | $\dfrac{10}{20}={\color{#4A5D7A}0{,}5}$ |

Contrôle indispensable : la somme des probabilités vaut $0{,}2+0{,}3+0{,}5=1$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
On lance deux dés équilibrés à six faces et on s'intéresse à la somme des deux numéros obtenus.

Quelle est la probabilité que cette somme soit égale à $6$ ?
---CORR---
En distinguant les deux dés, il y a $6\times 6=36$ issues équiprobables.

On énumère celles qui donnent une somme de $6$ :

$$(1\,;\,5)\quad(2\,;\,4)\quad(3\,;\,3)\quad(4\,;\,2)\quad(5\,;\,1)$$

Il y en a $5$. D'où :

$$P={\color{#4A5D7A}\dfrac{5}{36}}$$

Attention : $(3\,;\,3)$ ne compte qu'une seule fois, contrairement aux couples formés de deux numéros différents.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Dans un groupe, $40\,\%$ des personnes sont des hommes, et $25\,\%$ des hommes portent des lunettes.

On choisit une personne au hasard. Quelle est la probabilité que ce soit un homme portant des lunettes ?
---CORR---
Les $25\,\%$ ne portent pas sur le groupe entier, mais seulement sur les hommes : c'est une proportion à l'intérieur d'une proportion. On multiplie donc les deux.

$$P=0{,}40\times 0{,}25={\color{#4A5D7A}0{,}1}$$

Soit $10\,\%$ du groupe. On aurait le même résultat en raisonnant sur un effectif : sur $100$ personnes, $40$ sont des hommes, dont $25\,\%$, soit $10$, portent des lunettes.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
On lance un dé équilibré à six faces. Soit $A$ « obtenir au plus $2$ » et $B$ « obtenir un multiple de $3$ ».

Déterminer $A\cap B$ et $A\cup B$.
---CORR---
On écrit les deux événements en extension :

$$A=\lbrace 1\,;\,2\rbrace \qquad\text{et}\qquad B=\lbrace 3\,;\,6\rbrace$$

Aucune issue n'appartient aux deux : les événements sont incompatibles.

$$A\cap B={\color{#4A5D7A}\varnothing} \qquad A\cup B={\color{#4A5D7A}\lbrace 1\,;\,2\,;\,3\,;\,6\rbrace}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On sait que $P(A)=0{,}28$. La probabilité de l'événement contraire $\overline{A}$ est :

**A.** $-0{,}28$ &emsp; **B.** $0{,}72$ &emsp; **C.** $1{,}28$ &emsp; **D.** $0{,}28$
---CORR---
Un événement et son contraire se partagent la totalité des issues : leurs probabilités ont donc pour somme $1$.

$$P\left(\overline{A}\right)=1-P(A)=1-0{,}28={\color{#4A5D7A}0{,}72}$$

Les réponses C et A sont impossibles : une probabilité est toujours comprise entre $0$ et $1$.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
On tire une carte au hasard dans un jeu de $52$ cartes. La probabilité d'obtenir un cœur est :

**A.** $\dfrac{1}{13}$ &emsp; **B.** $\dfrac{1}{52}$ &emsp; **C.** $\dfrac{1}{4}$ &emsp; **D.** $\dfrac{13}{4}$
---CORR---
Le tirage est au hasard, donc il y a équiprobabilité : chaque carte a une chance sur $52$.

Un jeu de $52$ cartes contient $4$ couleurs de $13$ cartes chacune, donc $13$ cœurs. D'où :

$$P=\dfrac{13}{52}=\dfrac{1\times \cancel{13}}{4\times \cancel{13}}={\color{#4A5D7A}\dfrac{1}{4}}$$

La réponse D est impossible : une probabilité ne dépasse jamais $1$.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
