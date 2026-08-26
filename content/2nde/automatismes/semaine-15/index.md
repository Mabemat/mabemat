---
title: "Semaine 15 - Signe d'une fonction affine et inéquations produit"
layout: "automatismes-2nde"
auto_number: 15
weight: 15
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Dresser le tableau de signes de la fonction $f$ définie sur $\mathbb{R}$ par $f(x)=-2x+6$.
---CORR---
On cherche d'abord la valeur qui annule $f$ :

$$-2x+6=0 \quad\Longrightarrow\quad -2x=-6 \quad\Longrightarrow\quad x=3$$

Le coefficient directeur vaut $-2$, il est négatif : la fonction est décroissante. Elle est donc positive **avant** sa racine et négative **après**.

| $x$ | $-\infty$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|
| signe de $f(x)$ | | $+$ | $0$ | $-$ | |

$${\color{#4A5D7A}f(x)>0\ \text{sur}\ \left]-\infty\,;\,3\right[ \qquad f(x)<0\ \text{sur}\ \left]3\,;\,+\infty\right[}$$

Retenir : le signe d'une fonction affine est celui de $m$ **après** la racine, et l'opposé avant.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Résoudre dans $\mathbb{R}$ l'inéquation :

$$(x-2)(3x+9)\geqslant 0$$
---CORR---
On cherche les racines de chaque facteur :

$$x-2=0 \Longrightarrow x=2 \qquad\qquad 3x+9=0 \Longrightarrow x=-3$$

Les deux facteurs ont un coefficient directeur positif : chacun est négatif avant sa racine et positif après. On dresse le tableau de signes du produit :

| $x$ | $-\infty$ | | $-3$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $x-2$ | | $-$ | | $-$ | $0$ | $+$ | |
| $3x+9$ | | $-$ | $0$ | $+$ | | $+$ | |
| produit | | $+$ | $0$ | $-$ | $0$ | $+$ | |

L'inégalité est large, donc les racines sont incluses :

$$S={\color{#4A5D7A}\left]-\infty\,;\,-3\right]\cup\left[2\,;\,+\infty\right[}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Déterminer la fonction affine $f$ telle que $f(2)=1$ et $f(5)=10$.
---CORR---
Une fonction affine s'écrit $f(x)=mx+p$. On calcule d'abord le coefficient directeur :

$$m=\dfrac{f(5)-f(2)}{5-2}=\dfrac{10-1}{3}=\dfrac{9}{3}=3$$

On a donc $f(x)=3x+p$. Pour trouver $p$, on utilise l'une des deux informations, par exemple $f(2)=1$ :

$$3\times 2+p=1 \quad\Longrightarrow\quad 6+p=1 \quad\Longrightarrow\quad p=-5$$

$$f(x)={\color{#4A5D7A}3x-5}$$

Vérification avec l'autre donnée : $f(5)=3\times 5-5=10$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Une droite passe par les points $A(1\,;\,2)$ et $B(4\,;\,11)$.

Déterminer son coefficient directeur.
---CORR---
Le coefficient directeur d'une droite passant par deux points se calcule par :

$$m=\dfrac{y_B-y_A}{x_B-x_A}$$

On remplace :

$$m=\dfrac{11-2}{4-1}=\dfrac{9}{3}={\color{#4A5D7A}3}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
L'ensemble des solutions dans $\mathbb{R}$ de l'inéquation $-2(x+5)(x-1)>0$ est :

**A.** $\left[-5\,;\,1\right]$ &emsp; **B.** $\left]-\infty\,;\,-5\right[\cup\left]1\,;\,+\infty\right[$ &emsp; **C.** $\left]-5\,;\,1\right[$ &emsp; **D.** $\varnothing$
---CORR---
Le facteur constant $-2$ est strictement négatif. On peut diviser les deux membres par $-2$, à condition de changer le sens de l'inégalité :

$$(x+5)(x-1)<0$$

Les racines sont $-5$ et $1$. Un produit de deux facteurs affines croissants est négatif **entre** ses racines.

$$S={\color{#4A5D7A}\left]-5\,;\,1\right[}$$

La réponse B est celle qu'on obtiendrait en oubliant de changer le sens de l'inégalité à cause du $-2$, et la réponse A oublie que l'inégalité est stricte.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
On lance deux fois de suite une pièce équilibrée.

La probabilité d'obtenir deux fois pile est :

**A.** $\dfrac{1}{2}$ &emsp; **B.** $\dfrac{1}{4}$ &emsp; **C.** $\dfrac{1}{3}$ &emsp; **D.** $\dfrac{3}{4}$
---CORR---
On énumère les issues possibles, en distinguant les deux lancers :

$$(P\,;\,P) \qquad (P\,;\,F) \qquad (F\,;\,P) \qquad (F\,;\,F)$$

Ces $4$ issues sont équiprobables, et une seule convient.

$$P={\color{#4A5D7A}\dfrac{1}{4}}$$

La réponse C vient de l'erreur classique consistant à ne compter que trois cas, « deux piles, deux faces, un de chaque », en oubliant que « un de chaque » se produit de deux façons.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Dresser le tableau de signes de la fonction $f$ définie sur $\mathbb{R}$ par $f(x)=-3x+12$.
---CORR---
On cherche d'abord la valeur qui annule $f$ :

$$-3x+12=0 \quad\Longrightarrow\quad -3x=-12 \quad\Longrightarrow\quad x=4$$

Le coefficient directeur vaut $-3$, il est négatif : la fonction est décroissante. Elle est donc positive **avant** sa racine et négative **après**.

| $x$ | $-\infty$ | | $4$ | | $+\infty$ |
|---|---|---|---|---|---|
| signe de $f(x)$ | | $+$ | $0$ | $-$ | |

$${\color{#4A5D7A}f(x)>0\ \text{sur}\ \left]-\infty\,;\,4\right[ \qquad f(x)<0\ \text{sur}\ \left]4\,;\,+\infty\right[}$$

Retenir : le signe d'une fonction affine est celui de $m$ **après** la racine, et l'opposé avant.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Résoudre dans $\mathbb{R}$ l'inéquation :

$$(x-1)(2x+8)\geqslant 0$$
---CORR---
On cherche les racines de chaque facteur :

$$x-1=0 \Longrightarrow x=1 \qquad\qquad 2x+8=0 \Longrightarrow x=-4$$

Les deux facteurs ont un coefficient directeur positif : chacun est négatif avant sa racine et positif après. On dresse le tableau de signes du produit :

| $x$ | $-\infty$ | | $-4$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $x-1$ | | $-$ | | $-$ | $0$ | $+$ | |
| $2x+8$ | | $-$ | $0$ | $+$ | | $+$ | |
| produit | | $+$ | $0$ | $-$ | $0$ | $+$ | |

L'inégalité est large, donc les racines sont incluses :

$$S={\color{#4A5D7A}\left]-\infty\,;\,-4\right]\cup\left[1\,;\,+\infty\right[}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Déterminer la fonction affine $f$ telle que $f(1)=-1$ et $f(5)=7$.
---CORR---
Une fonction affine s'écrit $f(x)=mx+p$. On calcule d'abord le coefficient directeur :

$$m=\dfrac{f(5)-f(1)}{5-1}=\dfrac{7-(-1)}{4}=\dfrac{8}{4}=2$$

On a donc $f(x)=2x+p$. Pour trouver $p$, on utilise l'une des deux informations, par exemple $f(1)=-1$ :

$$2\times 1+p=-1 \quad\Longrightarrow\quad 2+p=-1 \quad\Longrightarrow\quad p=-3$$

$$f(x)={\color{#4A5D7A}2x-3}$$

Vérification avec l'autre donnée : $f(5)=2\times 5-3=7$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Une droite passe par les points $A(2\,;\,5)$ et $B(6\,;\,17)$.

Déterminer son coefficient directeur.
---CORR---
Le coefficient directeur d'une droite passant par deux points se calcule par :

$$m=\dfrac{y_B-y_A}{x_B-x_A}$$

On remplace :

$$m=\dfrac{17-5}{6-2}=\dfrac{12}{4}={\color{#4A5D7A}3}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
L'ensemble des solutions dans $\mathbb{R}$ de l'inéquation $-3(x+2)(x-4)>0$ est :

**A.** $\left]-\infty\,;\,-2\right[\cup\left]4\,;\,+\infty\right[$ &emsp; **B.** $\varnothing$ &emsp; **C.** $\left[-2\,;\,4\right]$ &emsp; **D.** $\left]-2\,;\,4\right[$
---CORR---
Le facteur constant $-3$ est strictement négatif. On peut diviser les deux membres par $-3$, à condition de changer le sens de l'inégalité :

$$(x+2)(x-4)<0$$

Les racines sont $-2$ et $4$. Un produit de deux facteurs affines croissants est négatif **entre** ses racines.

$$S={\color{#4A5D7A}\left]-2\,;\,4\right[}$$

La réponse A est celle qu'on obtiendrait en oubliant de changer le sens de l'inégalité à cause du $-3$, et la réponse C oublie que l'inégalité est stricte.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
On lance deux fois de suite une pièce équilibrée.

La probabilité d'obtenir au moins une fois pile est :

**A.** $\dfrac{3}{4}$ &emsp; **B.** $\dfrac{1}{4}$ &emsp; **C.** $\dfrac{1}{2}$ &emsp; **D.** $\dfrac{2}{3}$
---CORR---
On énumère les issues possibles, en distinguant les deux lancers :

$$(P\,;\,P) \qquad (P\,;\,F) \qquad (F\,;\,P) \qquad (F\,;\,F)$$

Ces $4$ issues sont équiprobables. « Au moins une fois pile » en exclut une seule, $(F\,;\,F)$ : il reste $3$ cas favorables.

$$P={\color{#4A5D7A}\dfrac{3}{4}}$$

On peut aussi passer par l'événement contraire : $1-\dfrac{1}{4}=\dfrac{3}{4}$.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
