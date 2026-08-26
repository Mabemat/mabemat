---
title: "Semaine 15 - Signe et inéquations produit ou quotient"
layout: "automatismes-2nde"
auto_number: 15
weight: 15
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Dresser le tableau de signes de la fonction $f$ définie sur $\mathbb{R}$ par $f(x)=-2x+6$.
---CORR---
On cherche d'abord la valeur qui annule $f$ :

$$\begin{aligned}-2x+6 &= 0 \quad\Longrightarrow\quad -2x \\ &= -6 \quad\Longrightarrow\quad x \\ &= 3\end{aligned}$$

Le coefficient directeur vaut $-2$, il est négatif : la fonction est décroissante. Elle est donc positive **avant** sa racine et négative **après**.

| $x$ | $-\infty$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|
| signe de $f(x)$ | | $+$ | $0$ | $-$ | |

$$\begin{aligned}{\color{#4A5D7A}f(x)>0} &\ {\color{#4A5D7A}\text{sur}\ \left]-\infty\,;\,3\right[} \\ {\color{#4A5D7A}f(x)<0} &\ {\color{#4A5D7A}\text{sur}\ \left]3\,;\,+\infty\right[}\end{aligned}$$

Retenir : le signe d'une fonction affine est celui de $m$ **après** la racine, et l'opposé avant.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Résoudre dans $\mathbb{R}$ l'inéquation :

$$(x-2)(3x+9)\geqslant 0$$
---CORR---
On cherche les racines de chaque facteur :

$$\begin{aligned}x-2 &= 0 \Longrightarrow x=2 \\ 3x+9 &= 0 \Longrightarrow x=-3\end{aligned}$$

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
Résoudre dans $\mathbb{R}$ l'inéquation :

$$\dfrac{x-4}{2x+6}\leqslant 0$$
---CORR---
On cherche d'abord la valeur interdite, celle qui annule le dénominateur :

$$2x+6=0 \quad\text{donc}\quad x=-3$$

On étudie ensuite le signe de chaque facteur. $x-4$ s'annule en $4$ et, son coefficient étant positif, il est négatif avant et positif après. De même $2x+6$ s'annule en $-3$, négatif avant, positif après.

$$\begin{array}{ccccccc}
x & -\infty & & -3 & & 4 & +\infty \\ \hline
x-4 & & - & \vert & - & 0 & + \\
2x+6 & & - & 0 & + & \vert & + \\ \hline
\text{quotient} & & + & \Vert & - & 0 & +
\end{array}$$

Le quotient est négatif ou nul entre $-3$ et $4$. La borne $4$ est incluse (elle annule le quotient), la borne $-3$ est exclue (valeur interdite).

$$S={\color{#4A5D7A}\left]-3\,;\,4\right]}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x)=x^2-5x$.

**a.** Calculer $f(-2)$.

**b.** Déterminer les antécédents de $0$ par $f$.
---CORR---
**a.** On remplace $x$ par $-2$, sans oublier les parenthèses :

$$f(-2)=(-2)^2-5\times(-2)=4+10={\color{#4A5D7A}14}$$

**b.** Chercher les antécédents de $0$, c'est résoudre $f(x)=0$ :

$$x^2-5x=0$$

On factorise par $x$ pour se ramener à une équation produit :

$$x(x-5)=0$$

Un produit est nul si et seulement si l'un de ses facteurs est nul :

$$\begin{aligned}x &= 0 \\ \text{ou}\quad x-5 &= 0 \quad\text{donc}\quad x=5\end{aligned}$$

$${\color{#4A5D7A}0\ \text{et}\ 5}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
L'ensemble des solutions dans $\mathbb{R}$ de l'inéquation $-2(x+5)(x-1)>0$ est :

<div class="qcm-choix">
<span><strong>A.</strong> $\left[-5\,;\,1\right]$</span>
<span><strong>B.</strong> $\left]-\infty\,;\,-5\right[\cup\left]1\,;\,+\infty\right[$</span>
<span><strong>C.</strong> $\left]-5\,;\,1\right[$</span>
<span><strong>D.</strong> $\varnothing$</span>
</div>
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

<div class="qcm-choix">
<span><strong>A.</strong> $\dfrac{1}{2}$</span>
<span><strong>B.</strong> $\dfrac{1}{4}$</span>
<span><strong>C.</strong> $\dfrac{1}{3}$</span>
<span><strong>D.</strong> $\dfrac{3}{4}$</span>
</div>
---CORR---
On énumère les issues possibles, en distinguant les deux lancers :

$$\begin{aligned}& (P\,;\,P) \qquad (P\,;\,F) \\ & (F\,;\,P) \qquad (F\,;\,F)\end{aligned}$$

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

$$\begin{aligned}-3x+12 &= 0 \quad\Longrightarrow\quad -3x \\ &= -12 \quad\Longrightarrow\quad x \\ &= 4\end{aligned}$$

Le coefficient directeur vaut $-3$, il est négatif : la fonction est décroissante. Elle est donc positive **avant** sa racine et négative **après**.

| $x$ | $-\infty$ | | $4$ | | $+\infty$ |
|---|---|---|---|---|---|
| signe de $f(x)$ | | $+$ | $0$ | $-$ | |

$$\begin{aligned}{\color{#4A5D7A}f(x)>0} &\ {\color{#4A5D7A}\text{sur}\ \left]-\infty\,;\,4\right[} \\ {\color{#4A5D7A}f(x)<0} &\ {\color{#4A5D7A}\text{sur}\ \left]4\,;\,+\infty\right[}\end{aligned}$$

Retenir : le signe d'une fonction affine est celui de $m$ **après** la racine, et l'opposé avant.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Résoudre dans $\mathbb{R}$ l'inéquation :

$$(x-1)(2x+8)\geqslant 0$$
---CORR---
On cherche les racines de chaque facteur :

$$\begin{aligned}x-1 &= 0 \Longrightarrow x=1 \\ 2x+8 &= 0 \Longrightarrow x=-4\end{aligned}$$

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
Résoudre dans $\mathbb{R}$ l'inéquation :

$$\dfrac{x+2}{3x-9}\geqslant 0$$
---CORR---
On cherche d'abord la valeur interdite, celle qui annule le dénominateur :

$$3x-9=0 \quad\text{donc}\quad x=3$$

On étudie ensuite le signe de chaque facteur. $x+2$ s'annule en $-2$ et, son coefficient étant positif, il est négatif avant et positif après. De même $3x-9$ s'annule en $3$, négatif avant, positif après.

$$\begin{array}{ccccccc}
x & -\infty & & -2 & & 3 & +\infty \\ \hline
x+2 & & - & 0 & + & \vert & + \\
3x-9 & & - & \vert & - & 0 & + \\ \hline
\text{quotient} & & + & 0 & - & \Vert & +
\end{array}$$

Le quotient est positif ou nul avant $-2$ et après $3$. La borne $-2$ est incluse (elle annule le quotient), la borne $3$ est exclue (valeur interdite).

$$S={\color{#4A5D7A}\left]-\infty\,;\,-2\right]\cup\left]3\,;\,+\infty\right[}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x)=x^2+3x$.

**a.** Calculer $f(-4)$.

**b.** Déterminer les antécédents de $0$ par $f$.
---CORR---
**a.** On remplace $x$ par $-4$, sans oublier les parenthèses :

$$f(-4)=(-4)^2+3\times(-4)=16-12={\color{#4A5D7A}4}$$

**b.** Chercher les antécédents de $0$, c'est résoudre $f(x)=0$ :

$$x^2+3x=0$$

On factorise par $x$ pour se ramener à une équation produit :

$$x(x+3)=0$$

Un produit est nul si et seulement si l'un de ses facteurs est nul :

$$\begin{aligned}x &= 0 \\ \text{ou}\quad x+3 &= 0 \quad\text{donc}\quad x=-3\end{aligned}$$

$${\color{#4A5D7A}-3\ \text{et}\ 0}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
L'ensemble des solutions dans $\mathbb{R}$ de l'inéquation $-3(x+2)(x-4)>0$ est :

<div class="qcm-choix">
<span><strong>A.</strong> $\left]-\infty\,;\,-2\right[\cup\left]4\,;\,+\infty\right[$</span>
<span><strong>B.</strong> $\varnothing$</span>
<span><strong>C.</strong> $\left[-2\,;\,4\right]$</span>
<span><strong>D.</strong> $\left]-2\,;\,4\right[$</span>
</div>
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

<div class="qcm-choix">
<span><strong>A.</strong> $\dfrac{3}{4}$</span>
<span><strong>B.</strong> $\dfrac{1}{4}$</span>
<span><strong>C.</strong> $\dfrac{1}{2}$</span>
<span><strong>D.</strong> $\dfrac{2}{3}$</span>
</div>
---CORR---
On énumère les issues possibles, en distinguant les deux lancers :

$$\begin{aligned}& (P\,;\,P) \qquad (P\,;\,F) \\ & (F\,;\,P) \qquad (F\,;\,F)\end{aligned}$$

Ces $4$ issues sont équiprobables. « Au moins une fois pile » en exclut une seule, $(F\,;\,F)$ : il reste $3$ cas favorables.

$$P={\color{#4A5D7A}\dfrac{3}{4}}$$

On peut aussi passer par l'événement contraire : $1-\dfrac{1}{4}=\dfrac{3}{4}$.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
