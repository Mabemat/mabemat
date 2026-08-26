---
title: "Semaine 26 - Arbres pondérés et équation cartésienne"
layout: "automatismes-2nde"
auto_number: 26
weight: 26
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Dans une usine, $70\,\%$ des pièces proviennent de la machine A. Parmi les pièces venant de A, $5\,\%$ sont défectueuses.

On prélève une pièce au hasard. Quelle est la probabilité qu'elle vienne de A et qu'elle soit défectueuse ?
---CORR---
On suit le chemin de l'arbre pondéré qui mène à « venant de A » puis à « défectueuse ». La probabilité d'un chemin est le **produit** des probabilités portées par ses branches.

$$P=0{,}70\times 0{,}05={\color{#4A5D7A}0{,}035}$$

Soit $3{,}5\,\%$ des pièces. Les $5\,\%$ ne portent que sur les pièces de A, ce qui est exactement ce qu'indique la position de cette branche dans l'arbre : elle part du nœud « A ».
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Un arbre pondéré a deux niveaux. Au premier, l'événement $A$ a pour probabilité $0{,}4$. Au second, sachant que $A$ est réalisé, l'événement $B$ a pour probabilité $0{,}25$.

Calculer $P\left(\overline{A}\right)$ puis $P(A\cap B)$.
---CORR---
La somme des probabilités des branches issues d'un même nœud vaut toujours $1$. Au premier niveau, il n'y a que deux branches, $A$ et $\overline{A}$ :

$$P\left(\overline{A}\right)=1-0{,}4={\color{#4A5D7A}0{,}6}$$

Pour $P(A\cap B)$, on multiplie les probabilités le long du chemin qui passe par $A$ puis par $B$ :

$$P(A\cap B)=0{,}4\times 0{,}25={\color{#4A5D7A}0{,}1}$$

Deux règles à ne pas confondre : on **additionne** le long d'un même nœud, on **multiplie** le long d'un chemin.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
La droite $(d)$ a pour équation cartésienne $3x-2y+6=0$.

Le point $A(2\,;\,6)$ appartient-il à $(d)$ ?
---CORR---
Un point appartient à une droite si ses coordonnées vérifient l'équation. On remplace $x$ par $2$ et $y$ par $6$ dans le membre de gauche :

$$3\times 2-2\times 6+6=6-12+6=0$$

On obtient bien $0$, donc l'égalité $3x-2y+6=0$ est vérifiée :

$${\color{#4A5D7A}A\ \text{appartient à}\ (d)}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Une urne contient $3$ boules rouges et $7$ boules vertes, indiscernables au toucher. On en tire une au hasard.

Quelle est la probabilité d'obtenir une boule rouge ?
---CORR---
Il y a $3+7=10$ boules équiprobables, dont $3$ rouges :

$$P=\dfrac{3}{10}={\color{#4A5D7A}0{,}3}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On considère la droite d'équation $y=-3$.

Son coefficient directeur est :

**A.** $m=0$ &emsp; **B.** il n'existe pas &emsp; **C.** $m=1$ &emsp; **D.** $m=-3$
---CORR---
On reconnaît une équation réduite de la forme $y=mx+p$. Ici, il n'y a pas de terme en $x$, ce qui revient à écrire :

$$y=0\times x+(-3)$$

Donc $m={\color{#4A5D7A}0}$ et $p=-3$.

C'est cohérent avec l'allure de la droite : tous ses points ont la même ordonnée $-3$, elle est horizontale, elle ne monte ni ne descend.

La réponse D donne l'ordonnée à l'origine, pas le coefficient directeur.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Dans une classe, $40\,\%$ des élèves sont des garçons. On choisit un élève au hasard.

La probabilité que ce soit une fille est :

**A.** $0{,}4$ &emsp; **B.** $1{,}4$ &emsp; **C.** $0{,}5$ &emsp; **D.** $0{,}6$
---CORR---
« Être une fille » est l'événement contraire de « être un garçon », puisque chaque élève est l'un ou l'autre. Les deux probabilités ont donc pour somme $1$ :

$$P=1-0{,}4={\color{#4A5D7A}0{,}6}$$

La réponse C suppose qu'il y a autant de filles que de garçons, ce que l'énoncé ne dit pas.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Dans une usine, $60\,\%$ des pièces proviennent de la machine A. Parmi les pièces venant de A, $8\,\%$ sont défectueuses.

On prélève une pièce au hasard. Quelle est la probabilité qu'elle vienne de A et qu'elle soit défectueuse ?
---CORR---
On suit le chemin de l'arbre pondéré qui mène à « venant de A » puis à « défectueuse ». La probabilité d'un chemin est le **produit** des probabilités portées par ses branches.

$$P=0{,}60\times 0{,}08={\color{#4A5D7A}0{,}048}$$

Soit $4{,}8\,\%$ des pièces. Les $8\,\%$ ne portent que sur les pièces de A, ce qui est exactement ce qu'indique la position de cette branche dans l'arbre : elle part du nœud « A ».
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Un arbre pondéré a deux niveaux. Au premier, l'événement $A$ a pour probabilité $0{,}3$. Au second, sachant que $A$ est réalisé, l'événement $B$ a pour probabilité $0{,}4$.

Calculer $P\left(\overline{A}\right)$ puis $P(A\cap B)$.
---CORR---
La somme des probabilités des branches issues d'un même nœud vaut toujours $1$. Au premier niveau, il n'y a que deux branches, $A$ et $\overline{A}$ :

$$P\left(\overline{A}\right)=1-0{,}3={\color{#4A5D7A}0{,}7}$$

Pour $P(A\cap B)$, on multiplie les probabilités le long du chemin qui passe par $A$ puis par $B$ :

$$P(A\cap B)=0{,}3\times 0{,}4={\color{#4A5D7A}0{,}12}$$

Deux règles à ne pas confondre : on **additionne** le long d'un même nœud, on **multiplie** le long d'un chemin.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
La droite $(d)$ a pour équation cartésienne $4x-3y-12=0$.

Le point $B(1\,;\,2)$ appartient-il à $(d)$ ?
---CORR---
Un point appartient à une droite si ses coordonnées vérifient l'équation. On remplace $x$ par $1$ et $y$ par $2$ dans le membre de gauche :

$$4\times 1-3\times 2-12=4-6-12=-14$$

On n'obtient pas $0$, donc l'égalité $4x-3y-12=0$ n'est pas vérifiée :

$${\color{#4A5D7A}B\ \text{n'appartient pas à}\ (d)}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Une urne contient $4$ boules rouges et $6$ boules vertes, indiscernables au toucher. On en tire une au hasard.

Quelle est la probabilité d'obtenir une boule rouge ?
---CORR---
Il y a $4+6=10$ boules équiprobables, dont $4$ rouges :

$$P=\dfrac{4}{10}={\color{#4A5D7A}0{,}4}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On considère la droite d'équation $y=7$.

Son coefficient directeur est :

**A.** $m=7$ &emsp; **B.** $m=1$ &emsp; **C.** $m=0$ &emsp; **D.** il n'existe pas
---CORR---
On reconnaît une équation réduite de la forme $y=mx+p$. Ici, il n'y a pas de terme en $x$, ce qui revient à écrire :

$$y=0\times x+7$$

Donc $m={\color{#4A5D7A}0}$ et $p=7$.

C'est cohérent avec l'allure de la droite : tous ses points ont la même ordonnée $7$, elle est horizontale, elle ne monte ni ne descend.

La réponse A donne l'ordonnée à l'origine, pas le coefficient directeur.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Dans une classe, $55\,\%$ des élèves sont des filles. On choisit un élève au hasard.

La probabilité que ce soit un garçon est :

**A.** $0{,}55$ &emsp; **B.** $0{,}45$ &emsp; **C.** $0{,}5$ &emsp; **D.** $1{,}55$
---CORR---
« Être un garçon » est l'événement contraire de « être une fille », puisque chaque élève est l'un ou l'autre. Les deux probabilités ont donc pour somme $1$ :

$$P=1-0{,}55={\color{#4A5D7A}0{,}45}$$

La réponse C suppose qu'il y a autant de filles que de garçons, ce que l'énoncé ne dit pas.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
