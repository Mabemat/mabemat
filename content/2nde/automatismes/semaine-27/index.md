---
title: "Semaine 27 - Probabilités conditionnelles et arbres pondérés"
layout: "automatismes-2nde"
auto_number: 27
weight: 27
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Dans un groupe, $60\,\%$ des personnes sont des femmes, et $30\,\%$ des femmes portent des lunettes.

On choisit une personne au hasard. Quelle est la probabilité que ce soit une femme portant des lunettes ?
---CORR---
Les $30\,\%$ ne portent pas sur le groupe entier, mais seulement sur les femmes : c'est une proportion à l'intérieur d'une proportion. On multiplie donc les deux.

$$P=0{,}60\times 0{,}30={\color{#4A5D7A}0{,}18}$$

Soit $18\,\%$ du groupe. On aurait le même résultat en raisonnant sur un effectif : sur $100$ personnes, $60$ sont des femmes, dont $30\,\%$, soit $18$, portent des lunettes.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Dans une usine, $70\,\%$ des pièces proviennent de la machine A. Parmi les pièces venant de A, $5\,\%$ sont défectueuses.

On prélève une pièce au hasard. Quelle est la probabilité qu'elle vienne de A et qu'elle soit défectueuse ?
---CORR---
On suit le chemin de l'arbre pondéré qui mène à « venant de A » puis à « défectueuse ». La probabilité d'un chemin est le **produit** des probabilités portées par ses branches.

$$P=0{,}70\times 0{,}05={\color{#4A5D7A}0{,}035}$$

Soit $3{,}5\,\%$ des pièces. Les $5\,\%$ ne portent que sur les pièces de A, ce qui est exactement ce qu'indique la position de cette branche dans l'arbre : elle part du nœud « A ».
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Un arbre pondéré a deux niveaux. Au premier, l'événement $A$ a pour probabilité $0{,}4$. Au second, sachant que $A$ est réalisé, l'événement $B$ a pour probabilité $0{,}25$.

Calculer $P\left(\overline{A}\right)$ puis $P(A\cap B)$.
---CORR---
La somme des probabilités des branches issues d'un même nœud vaut toujours $1$. Au premier niveau, il n'y a que deux branches, $A$ et $\overline{A}$ :

$$P\left(\overline{A}\right)=1-0{,}4={\color{#4A5D7A}0{,}6}$$

Pour $P(A\cap B)$, on multiplie les probabilités le long du chemin qui passe par $A$ puis par $B$ :

$$P(A\cap B)=0{,}4\times 0{,}25={\color{#4A5D7A}0{,}1}$$

Deux règles à ne pas confondre : on **additionne** le long d'un même nœud, on **multiplie** le long d'un chemin.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Une urne contient $3$ boules rouges et $7$ boules vertes, indiscernables au toucher. On en tire une au hasard.

Quelle est la probabilité d'obtenir une boule rouge ?
---CORR---
Il y a $3+7=10$ boules équiprobables, dont $3$ rouges :

$$P=\dfrac{3}{10}={\color{#4A5D7A}0{,}3}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Le point d'intersection des droites d'équations $y=2x+1$ et $y=-x+7$ a pour abscisse :

<div class="qcm-choix">
<span><strong>A.</strong> $1$</span>
<span><strong>B.</strong> $3$</span>
<span><strong>C.</strong> $2$</span>
<span><strong>D.</strong> $5$</span>
</div>
---CORR---
Au point d'intersection, les deux droites ont la même ordonnée pour la même abscisse. On égalise donc les deux expressions :

$$2x+1=-x+7$$

On ajoute $x$ à chaque membre, puis on retranche $1$ :

$$\begin{aligned}3x+1 &= 7 \\ \text{donc}\quad 3x &= 6 \\ \text{donc}\quad x &= {\color{#4A5D7A}2}\end{aligned}$$

La réponse D est l'ordonnée du point d'intersection ($y=2\times 2+1=5$), pas son abscisse.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Une augmentation de $10\,\%$ suivie d'une baisse de $10\,\%$ équivaut à :

<div class="qcm-choix">
<span><strong>A.</strong> aucune évolution</span>
<span><strong>B.</strong> une baisse de $1\,\%$</span>
<span><strong>C.</strong> une hausse de $1\,\%$</span>
<span><strong>D.</strong> une baisse de $20\,\%$</span>
</div>
---CORR---
On multiplie les coefficients multiplicateurs :

$$1{,}10\times 0{,}90=0{,}99$$

Comme $0{,}99=1-0{,}01$, il s'agit d'une baisse de ${\color{#4A5D7A}1\,\%}$.

La réponse A est le piège le plus courant : la baisse de $10\,\%$ s'applique à un prix déjà augmenté, donc à une base plus grande. Elle retire plus que ce que la hausse avait ajouté.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Dans un groupe, $40\,\%$ des personnes sont des hommes, et $25\,\%$ des hommes portent des lunettes.

On choisit une personne au hasard. Quelle est la probabilité que ce soit un homme portant des lunettes ?
---CORR---
Les $25\,\%$ ne portent pas sur le groupe entier, mais seulement sur les hommes : c'est une proportion à l'intérieur d'une proportion. On multiplie donc les deux.

$$P=0{,}40\times 0{,}25={\color{#4A5D7A}0{,}1}$$

Soit $10\,\%$ du groupe. On aurait le même résultat en raisonnant sur un effectif : sur $100$ personnes, $40$ sont des hommes, dont $25\,\%$, soit $10$, portent des lunettes.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Dans une usine, $60\,\%$ des pièces proviennent de la machine A. Parmi les pièces venant de A, $8\,\%$ sont défectueuses.

On prélève une pièce au hasard. Quelle est la probabilité qu'elle vienne de A et qu'elle soit défectueuse ?
---CORR---
On suit le chemin de l'arbre pondéré qui mène à « venant de A » puis à « défectueuse ». La probabilité d'un chemin est le **produit** des probabilités portées par ses branches.

$$P=0{,}60\times 0{,}08={\color{#4A5D7A}0{,}048}$$

Soit $4{,}8\,\%$ des pièces. Les $8\,\%$ ne portent que sur les pièces de A, ce qui est exactement ce qu'indique la position de cette branche dans l'arbre : elle part du nœud « A ».
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Un arbre pondéré a deux niveaux. Au premier, l'événement $A$ a pour probabilité $0{,}3$. Au second, sachant que $A$ est réalisé, l'événement $B$ a pour probabilité $0{,}4$.

Calculer $P\left(\overline{A}\right)$ puis $P(A\cap B)$.
---CORR---
La somme des probabilités des branches issues d'un même nœud vaut toujours $1$. Au premier niveau, il n'y a que deux branches, $A$ et $\overline{A}$ :

$$P\left(\overline{A}\right)=1-0{,}3={\color{#4A5D7A}0{,}7}$$

Pour $P(A\cap B)$, on multiplie les probabilités le long du chemin qui passe par $A$ puis par $B$ :

$$P(A\cap B)=0{,}3\times 0{,}4={\color{#4A5D7A}0{,}12}$$

Deux règles à ne pas confondre : on **additionne** le long d'un même nœud, on **multiplie** le long d'un chemin.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Une urne contient $4$ boules rouges et $6$ boules vertes, indiscernables au toucher. On en tire une au hasard.

Quelle est la probabilité d'obtenir une boule rouge ?
---CORR---
Il y a $4+6=10$ boules équiprobables, dont $4$ rouges :

$$P=\dfrac{4}{10}={\color{#4A5D7A}0{,}4}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Le point d'intersection des droites d'équations $y=3x-4$ et $y=-2x+11$ a pour abscisse :

<div class="qcm-choix">
<span><strong>A.</strong> $3$</span>
<span><strong>B.</strong> $2$</span>
<span><strong>C.</strong> $5$</span>
<span><strong>D.</strong> $4$</span>
</div>
---CORR---
Au point d'intersection, les deux droites ont la même ordonnée pour la même abscisse. On égalise donc les deux expressions :

$$3x-4=-2x+11$$

On ajoute $2x$ à chaque membre, puis $4$ :

$$\begin{aligned}5x-4 &= 11 \\ \text{donc}\quad 5x &= 15 \\ \text{donc}\quad x &= {\color{#4A5D7A}3}\end{aligned}$$

La réponse C est l'ordonnée du point d'intersection ($y=3\times 3-4=5$), pas son abscisse.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Une baisse de $20\,\%$ suivie d'une hausse de $20\,\%$ équivaut à :

<div class="qcm-choix">
<span><strong>A.</strong> une baisse de $40\,\%$</span>
<span><strong>B.</strong> aucune évolution</span>
<span><strong>C.</strong> une hausse de $4\,\%$</span>
<span><strong>D.</strong> une baisse de $4\,\%$</span>
</div>
---CORR---
On multiplie les coefficients multiplicateurs :

$$0{,}80\times 1{,}20=0{,}96$$

Comme $0{,}96=1-0{,}04$, il s'agit d'une baisse de ${\color{#4A5D7A}4\,\%}$.

La réponse B est le piège le plus courant : la hausse de $20\,\%$ s'applique à un prix déjà baissé, donc à une base plus petite. Elle rajoute moins que ce que la baisse avait retiré.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
