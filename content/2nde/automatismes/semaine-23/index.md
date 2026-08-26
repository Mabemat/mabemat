---
title: "Semaine 23 - Valeur absolue, multiples et diviseurs"
layout: "automatismes-2nde"
auto_number: 23
weight: 23
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Résoudre dans $\mathbb{R}$ l'inéquation, et donner l'ensemble des solutions sous forme d'intervalle :

$$\left|x+4\right|\leqslant 3$$
---CORR---
$\left|x+4\right|$ se lit comme la distance entre $x$ et $-4$, puisque $x+4=x-(-4)$.

On cherche donc les réels situés à une distance d'au plus $3$ du nombre $-4$ : ce sont ceux qui se trouvent entre $-4-3$ et $-4+3$.

On peut aussi encadrer directement :

$$-3\leqslant x+4\leqslant 3$$

On retranche $4$ aux trois membres :

$$-7\leqslant x\leqslant -1$$

$$S={\color{#4A5D7A}\left[-7\,;\,-1\right]}$$

L'inégalité étant large, les deux bornes sont incluses.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Donner la liste de tous les diviseurs positifs de $36$.
---CORR---
On cherche les couples de nombres dont le produit vaut $36$, en partant de $1$ :

$$\begin{aligned}& 1\times 36 \qquad 2\times 18 \qquad 3\times 12 \\ & 4\times 9 \qquad 6\times 6\end{aligned}$$

On s'arrête à $6$, car $6\times 6=36$ : au-delà, on retrouverait les mêmes couples dans l'autre sens.

$${\color{#4A5D7A}1\ ;\ 2\ ;\ 3\ ;\ 4\ ;\ 6\ ;\ 9\ ;\ 12\ ;\ 18\ ;\ 36}$$

Il y en a $9$. Un nombre a un nombre impair de diviseurs exactement quand c'est un carré parfait, ce qui est bien le cas ici.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Démontrer que la somme de deux multiples de $7$ est un multiple de $7$.
---CORR---
On traduit l'hypothèse en écriture algébrique. Soient $a$ et $b$ deux multiples de $7$ : il existe deux entiers $k$ et $k'$ tels que

$$a=7k \qquad\text{et}\qquad b=7k'$$

On calcule la somme et on factorise par $7$ :

$$a+b=7k+7k'={\color{#4A5D7A}7(k+k')}$$

Comme $k+k'$ est un entier, $a+b$ s'écrit bien sous la forme $7\times\text{entier}$ : c'est un multiple de $7$.

La factorisation est le cœur de la démonstration : c'est elle qui fait apparaître le $7$ en facteur.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Écrire sans racine carrée au dénominateur :

$$A=\dfrac{12}{\sqrt{6}}$$
---CORR---
On multiplie le numérateur et le dénominateur par $\sqrt{6}$, ce qui ne change pas la valeur du quotient :

$$A=\dfrac{12\times\sqrt{6}}{\sqrt{6}\times\sqrt{6}}=\dfrac{12\sqrt{6}}{6}$$

Car $\sqrt{6}\times\sqrt{6}=6$. On simplifie ensuite par $6$ :

$$A={\color{#4A5D7A}2\sqrt{6}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Une personne doit rembourser un crédit de $1\,800$ € en trois mois. En janvier, elle rembourse $\dfrac{1}{3}$ du crédit et en février $\dfrac{1}{4}$ du crédit.

La somme, en euros, qu'il lui reste à rembourser en mars est :

**A.** $450$ &emsp; **B.** $1\,050$ &emsp; **C.** $750$ &emsp; **D.** $600$
---CORR---
Attention : les deux fractions portent sur le crédit **initial**, pas sur ce qui reste. On calcule donc chaque remboursement à partir de $1\,800$ €.

$$\begin{aligned}\text{janvier}:\ \dfrac{1}{3}\times 1\,800 &= 600 \\ \text{février}:\ \dfrac{1}{4}\times 1\,800 \\ &= 450\end{aligned}$$

Il reste alors :

$$1\,800-600-450={\color{#4A5D7A}750}$$

On peut aussi raisonner en proportions : $\dfrac{1}{3}+\dfrac{1}{4}=\dfrac{7}{12}$ du crédit est remboursé, il en reste $\dfrac{5}{12}$, soit $\dfrac{5}{12}\times 1\,800=750$ €.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Les valeurs de $y$ sont proportionnelles à celles de $x$. Déterminer la valeur manquante.

| $x$ | 4 | 10 |
|---|---|---|
| $y$ | 6 | ? |

**A.** $9$ &emsp; **B.** $12$ &emsp; **C.** $16$ &emsp; **D.** $15$
---CORR---
Dans un tableau de proportionnalité, on passe de la ligne $x$ à la ligne $y$ en multipliant par un coefficient constant. On le calcule avec la colonne complète :

$$k=\dfrac{6}{4}=1{,}5$$

On applique ce coefficient à la seconde colonne :

$$10\times 1{,}5={\color{#4A5D7A}15}$$

La réponse B est l'erreur classique : ajouter $6$ à $10$ comme on ajoute $2$ à $4$. La proportionnalité se lit avec une multiplication, pas avec un écart constant.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Résoudre dans $\mathbb{R}$ l'inéquation, et donner l'ensemble des solutions sous forme d'intervalle :

$$\left|x-5\right|\leqslant 2$$
---CORR---
$\left|x-5\right|$ se lit comme la distance entre $x$ et $5$.

On cherche donc les réels situés à une distance d'au plus $2$ du nombre $5$ : ce sont ceux qui se trouvent entre $5-2$ et $5+2$.

On peut aussi encadrer directement :

$$-2\leqslant x-5\leqslant 2$$

On ajoute $5$ aux trois membres :

$$3\leqslant x\leqslant 7$$

$$S={\color{#4A5D7A}\left[3\,;\,7\right]}$$

L'inégalité étant large, les deux bornes sont incluses.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Donner la liste de tous les diviseurs positifs de $48$.
---CORR---
On cherche les couples de nombres dont le produit vaut $48$, en partant de $1$ :

$$\begin{aligned}& 1\times 48 \qquad 2\times 24 \qquad 3\times 16 \\ & 4\times 12 \qquad 6\times 8\end{aligned}$$

On s'arrête à $6$, car le facteur suivant, $8$, est déjà apparu dans le dernier couple.

$${\color{#4A5D7A}1\ ;\ 2\ ;\ 3\ ;\ 4\ ;\ 6\ ;\ 8\ ;\ 12\ ;\ 16\ ;\ 24\ ;\ 48}$$

Il y en a $10$. Le nombre de diviseurs est pair, ce qui est le cas de tous les nombres qui ne sont pas des carrés parfaits.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Démontrer que la somme de deux multiples de $9$ est un multiple de $9$.
---CORR---
On traduit l'hypothèse en écriture algébrique. Soient $a$ et $b$ deux multiples de $9$ : il existe deux entiers $k$ et $k'$ tels que

$$a=9k \qquad\text{et}\qquad b=9k'$$

On calcule la somme et on factorise par $9$ :

$$a+b=9k+9k'={\color{#4A5D7A}9(k+k')}$$

Comme $k+k'$ est un entier, $a+b$ s'écrit bien sous la forme $9\times\text{entier}$ : c'est un multiple de $9$.

La factorisation est le cœur de la démonstration : c'est elle qui fait apparaître le $9$ en facteur.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Écrire sans racine carrée au dénominateur :

$$A=\dfrac{15}{\sqrt{5}}$$
---CORR---
On multiplie le numérateur et le dénominateur par $\sqrt{5}$, ce qui ne change pas la valeur du quotient :

$$A=\dfrac{15\times\sqrt{5}}{\sqrt{5}\times\sqrt{5}}=\dfrac{15\sqrt{5}}{5}$$

Car $\sqrt{5}\times\sqrt{5}=5$. On simplifie ensuite par $5$ :

$$A={\color{#4A5D7A}3\sqrt{5}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Une personne doit rembourser un crédit de $2\,400$ € en trois mois. En janvier, elle rembourse $\dfrac{1}{4}$ du crédit et en février $\dfrac{1}{3}$ du crédit.

La somme, en euros, qu'il lui reste à rembourser en mars est :

**A.** $1\,000$ &emsp; **B.** $1\,400$ &emsp; **C.** $600$ &emsp; **D.** $800$
---CORR---
Attention : les deux fractions portent sur le crédit **initial**, pas sur ce qui reste. On calcule donc chaque remboursement à partir de $2\,400$ €.

$$\begin{aligned}\text{janvier}:\ \dfrac{1}{4}\times 2\,400 &= 600 \\ \text{février}:\ \dfrac{1}{3}\times 2\,400 \\ &= 800\end{aligned}$$

Il reste alors :

$$2\,400-600-800={\color{#4A5D7A}1\,000}$$

On peut aussi raisonner en proportions : $\dfrac{1}{4}+\dfrac{1}{3}=\dfrac{7}{12}$ du crédit est remboursé, il en reste $\dfrac{5}{12}$, soit $\dfrac{5}{12}\times 2\,400=1\,000$ €.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Les valeurs de $y$ sont proportionnelles à celles de $x$. Déterminer la valeur manquante.

| $x$ | 6 | 15 |
|---|---|---|
| $y$ | 8 | ? |

**A.** $17$ &emsp; **B.** $20$ &emsp; **C.** $18$ &emsp; **D.** $24$
---CORR---
Dans un tableau de proportionnalité, on passe de la ligne $x$ à la ligne $y$ en multipliant par un coefficient constant. On le calcule avec la colonne complète :

$$k=\dfrac{8}{6}=\dfrac{4}{3}$$

On applique ce coefficient à la seconde colonne :

$$15\times\dfrac{4}{3}=\dfrac{60}{3}={\color{#4A5D7A}20}$$

La réponse A est l'erreur classique : ajouter $9$ à $8$ comme on ajoute $9$ à $6$. La proportionnalité se lit avec une multiplication, pas avec un écart constant.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
