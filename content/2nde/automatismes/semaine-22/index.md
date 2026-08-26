---
title: "Semaine 22 - Valeur absolue, multiples et diviseurs"
layout: "automatismes-2nde"
auto_number: 22
weight: 22
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

$$1\times 36 \qquad 2\times 18 \qquad 3\times 12 \qquad 4\times 9 \qquad 6\times 6$$

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
Calculer :

$$\left|2-9\right|+\left|-5\right|$$
---CORR---
On traite chaque valeur absolue séparément, en calculant d'abord l'intérieur :

$$\left|2-9\right|=\left|-7\right|=7 \qquad\text{et}\qquad \left|-5\right|=5$$

On additionne :

$$7+5={\color{#4A5D7A}12}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Le prix d'un article passe de $80$ € à $60$ €.

Le taux d'évolution de ce prix est :

**A.** $-20\,\%$ &emsp; **B.** $+25\,\%$ &emsp; **C.** $-33\,\%$ &emsp; **D.** $-25\,\%$
---CORR---
Le taux d'évolution se calcule toujours par rapport à la valeur de **départ** :

$$t=\dfrac{60-80}{80}=\dfrac{-20}{80}=-0{,}25$$

Il s'agit donc d'une baisse de ${\color{#4A5D7A}25\,\%}$.

La réponse A confond le taux avec la baisse en euros, et la réponse C divise par $60$, c'est-à-dire par la valeur d'arrivée au lieu de la valeur de départ.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
La solution de l'équation $\dfrac{x}{8}=112$ est :

**A.** $x=14$ &emsp; **B.** $x=-896$ &emsp; **C.** $x=896$ &emsp; **D.** $x=\dfrac{8}{112}$
---CORR---
$x$ est divisé par $8$ : pour l'isoler, on multiplie chaque membre par $8$.

$$x=112\times 8={\color{#4A5D7A}896}$$

La réponse A divise au lieu de multiplier. Un réflexe de contrôle : $x$ vaut le huitième de quelque chose valant $112$, il doit donc être bien plus grand que $112$.

<span class="rep">Réponse : C</span>
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

$$1\times 48 \qquad 2\times 24 \qquad 3\times 16 \qquad 4\times 12 \qquad 6\times 8$$

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
Calculer :

$$\left|3-10\right|+\left|-6\right|$$
---CORR---
On traite chaque valeur absolue séparément, en calculant d'abord l'intérieur :

$$\left|3-10\right|=\left|-7\right|=7 \qquad\text{et}\qquad \left|-6\right|=6$$

On additionne :

$$7+6={\color{#4A5D7A}13}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Le prix d'un article passe de $150$ € à $120$ €.

Le taux d'évolution de ce prix est :

**A.** $-30\,\%$ &emsp; **B.** $-20\,\%$ &emsp; **C.** $-25\,\%$ &emsp; **D.** $+20\,\%$
---CORR---
Le taux d'évolution se calcule toujours par rapport à la valeur de **départ** :

$$t=\dfrac{120-150}{150}=\dfrac{-30}{150}=-0{,}2$$

Il s'agit donc d'une baisse de ${\color{#4A5D7A}20\,\%}$.

La réponse A confond le taux avec la baisse en euros, et la réponse C divise par $120$, c'est-à-dire par la valeur d'arrivée au lieu de la valeur de départ.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
La solution de l'équation $\dfrac{x}{6}=132$ est :

**A.** $x=792$ &emsp; **B.** $x=22$ &emsp; **C.** $x=-792$ &emsp; **D.** $x=\dfrac{6}{132}$
---CORR---
$x$ est divisé par $6$ : pour l'isoler, on multiplie chaque membre par $6$.

$$x=132\times 6={\color{#4A5D7A}792}$$

La réponse B divise au lieu de multiplier. Un réflexe de contrôle : $x$ vaut le sixième de quelque chose valant $132$, il doit donc être bien plus grand que $132$.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
