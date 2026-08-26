---
title: "Semaine 26 - Loi de probabilité et équiprobabilité"
layout: "automatismes-2nde"
auto_number: 26
weight: 26
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

$$\begin{aligned}& (1\,;\,6)\quad(2\,;\,5)\quad(3\,;\,4) \\ & (4\,;\,3)\quad(5\,;\,2)\quad(6\,;\,1)\end{aligned}$$

Il y en a $6$. D'où :

$$P={\dfrac{6}{36}}={\color{#4A5D7A}\dfrac{1}{6}}$$

Il faut bien distinguer les deux dés : $(2\,;\,5)$ et $(5\,;\,2)$ sont deux issues différentes.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
On tire au hasard une carte dans un jeu de $32$ cartes. Soit $A$ l'événement « obtenir un cœur ».

Calculer $P(A)$, puis la probabilité de l'événement contraire de $A$.
---CORR---
Le tirage est au hasard dans un jeu bien mélangé : on est en situation d'équiprobabilité, et

$$P(A)=\dfrac{\text{nombre d'issues favorables}}{\text{nombre d'issues possibles}}$$

Le jeu de $32$ cartes contient $8$ cœurs :

$$P(A)=\dfrac{8}{32}={\color{#4A5D7A}\dfrac{1}{4}}$$

L'événement contraire, noté $\overline{A}$, est « ne pas obtenir un cœur ». Sa probabilité se déduit sans nouveau dénombrement :

$$P\left(\overline{A}\right)=1-P(A)=1-\dfrac{1}{4}={\color{#4A5D7A}\dfrac{3}{4}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Démontrer que le produit de deux nombres entiers pairs est un multiple de $4$.
---CORR---
On traduit l'hypothèse en écriture algébrique. Soient $a$ et $b$ deux entiers pairs : il existe deux entiers $k$ et $k'$ tels que

$$a=2k \qquad\text{et}\qquad b=2k'$$

On calcule le produit :

$$a\times b=2k\times 2k'={\color{#4A5D7A}4kk'}$$

Comme $kk'$ est un entier, $ab$ s'écrit bien sous la forme $4\times\text{entier}$ : c'est un multiple de $4$.

Il faut deux lettres différentes, $k$ et $k'$ : écrire $a=2k$ et $b=2k$ reviendrait à supposer $a=b$.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On considère la droite d'équation $y=-3$.

Son coefficient directeur est :

<div class="qcm-choix">
<span><strong>A.</strong> $m=0$</span>
<span><strong>B.</strong> il n'existe pas</span>
<span><strong>C.</strong> $m=1$</span>
<span><strong>D.</strong> $m=-3$</span>
</div>
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

<div class="qcm-choix">
<span><strong>A.</strong> $0{,}4$</span>
<span><strong>B.</strong> $1{,}4$</span>
<span><strong>C.</strong> $0{,}5$</span>
<span><strong>D.</strong> $0{,}6$</span>
</div>
---CORR---
« Être une fille » est l'événement contraire de « être un garçon », puisque chaque élève est l'un ou l'autre. Les deux probabilités ont donc pour somme $1$ :

$$P=1-0{,}4={\color{#4A5D7A}0{,}6}$$

La réponse C suppose qu'il y a autant de filles que de garçons, ce que l'énoncé ne dit pas.

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

$$\begin{aligned}& (1\,;\,5)\quad(2\,;\,4)\quad(3\,;\,3) \\ & (4\,;\,2)\quad(5\,;\,1)\end{aligned}$$

Il y en a $5$. D'où :

$$P={\color{#4A5D7A}\dfrac{5}{36}}$$

Attention : $(3\,;\,3)$ ne compte qu'une seule fois, contrairement aux couples formés de deux numéros différents.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
On lance un dé équilibré à six faces. Soit $B$ l'événement « obtenir un nombre supérieur ou égal à $3$ ».

Calculer $P(B)$, puis la probabilité de l'événement contraire de $B$.
---CORR---
Le dé est équilibré : on est en situation d'équiprobabilité, et

$$P(B)=\dfrac{\text{nombre d'issues favorables}}{\text{nombre d'issues possibles}}$$

Les issues favorables sont $3$, $4$, $5$ et $6$, soit $4$ issues sur $6$ :

$$P(B)=\dfrac{4}{6}={\color{#4A5D7A}\dfrac{2}{3}}$$

L'événement contraire, noté $\overline{B}$, est « obtenir un nombre strictement inférieur à $3$ ». Sa probabilité se déduit sans nouveau dénombrement :

$$P\left(\overline{B}\right)=1-P(B)=1-\dfrac{2}{3}={\color{#4A5D7A}\dfrac{1}{3}}$$

Le contraire de « supérieur ou égal à $3$ » est « strictement inférieur à $3$ », et non « inférieur ou égal à $3$ ».
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Démontrer que la somme de deux nombres entiers impairs est paire.
---CORR---
On traduit l'hypothèse en écriture algébrique. Soient $a$ et $b$ deux entiers impairs : il existe deux entiers $k$ et $k'$ tels que

$$a=2k+1 \qquad\text{et}\qquad b=2k'+1$$

On calcule la somme et on factorise par $2$ :

$$\begin{aligned}a+b &= 2k+1+2k'+1 \\ &= 2k+2k'+2 \\ &= {\color{#4A5D7A}2\left(k+k'+1\right)}\end{aligned}$$

Comme $k+k'+1$ est un entier, $a+b$ s'écrit bien sous la forme $2\times\text{entier}$ : c'est un nombre pair.

Il faut deux lettres différentes, $k$ et $k'$ : écrire $a=2k+1$ et $b=2k+1$ reviendrait à supposer $a=b$.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On considère la droite d'équation $y=7$.

Son coefficient directeur est :

<div class="qcm-choix">
<span><strong>A.</strong> $m=7$</span>
<span><strong>B.</strong> $m=1$</span>
<span><strong>C.</strong> $m=0$</span>
<span><strong>D.</strong> il n'existe pas</span>
</div>
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

<div class="qcm-choix">
<span><strong>A.</strong> $0{,}55$</span>
<span><strong>B.</strong> $0{,}45$</span>
<span><strong>C.</strong> $0{,}5$</span>
<span><strong>D.</strong> $1{,}55$</span>
</div>
---CORR---
« Être un garçon » est l'événement contraire de « être une fille », puisque chaque élève est l'un ou l'autre. Les deux probabilités ont donc pour somme $1$ :

$$P=1-0{,}55={\color{#4A5D7A}0{,}45}$$

La réponse C suppose qu'il y a autant de filles que de garçons, ce que l'énoncé ne dit pas.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
