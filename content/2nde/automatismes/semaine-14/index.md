---
title: "Semaine 14 - Écart-type et fonctions affines"
layout: "automatismes-2nde"
auto_number: 14
weight: 14
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Soit $f$ la fonction affine définie sur $\mathbb{R}$ par $f(x)=-3x+5$.

Donner son coefficient directeur, son ordonnée à l'origine, puis son sens de variation en justifiant.
---CORR---
Une fonction affine s'écrit $f(x)=mx+p$, où $m$ est le coefficient directeur et $p$ l'ordonnée à l'origine. Ici :

$$m={\color{#4A5D7A}-3} \qquad\text{et}\qquad p={\color{#4A5D7A}5}$$

Le sens de variation ne dépend que du signe de $m$. Comme $m=-3<0$ :

$$f\ \text{est}\ {\color{#4A5D7A}\text{décroissante}}\ \text{sur}\ \mathbb{R}$$

L'ordonnée à l'origine $p=5$ est l'image de $0$ : la droite coupe l'axe des ordonnées au point de coordonnées $(0\,;\,5)$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Ci-dessous la droite $(d)$, représentation graphique d'une fonction affine $f$.

<img src="/mabemat/images/automatismes/2nde/s14-q02.svg" alt="Droite représentative d'une fonction affine" style="display:block;margin:1rem auto;width:100%;max-width:380px;">

Lire graphiquement son ordonnée à l'origine et son coefficient directeur, puis donner l'expression de $f(x)$.
---CORR---
**Ordonnée à l'origine** : c'est l'ordonnée du point où la droite coupe l'axe des ordonnées. Ici, ce point est $(0\,;\,-1)$, donc $p=-1$.

**Coefficient directeur** : on part d'un point de la droite, on avance de $1$ vers la droite, et on lit de combien on monte. En partant de $(0\,;\,-1)$ et en avançant de $1$, on arrive en $(1\,;\,1)$ : on est monté de $2$.

$$m=\dfrac{\text{déplacement vertical}}{\text{déplacement horizontal}}=\dfrac{2}{1}=2$$

D'où :

$$f(x)={\color{#4A5D7A}2x-1}$$

Vérification avec un autre point de la droite : $f(2)=2\times 2-1=3$, et la droite passe bien par $(2\,;\,3)$.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
On considère la série statistique : $6\ ;\ 8\ ;\ 11\ ;\ 12\ ;\ 13$.

**a.** Calculer la moyenne de cette série.

**b.** Une seconde série a la même moyenne, mais son écart-type vaut $5{,}2$ alors que celui de la première vaut $2{,}6$. Laquelle des deux séries est la plus dispersée autour de sa moyenne ?
---CORR---
**a.** La moyenne est la somme des valeurs divisée par leur nombre :

$$\overline{x}=\dfrac{6+8+11+12+13}{5}=\dfrac{50}{5}={\color{#4A5D7A}10}$$

**b.** L'écart-type mesure la dispersion : plus il est grand, plus les valeurs sont éloignées de la moyenne.

Comme $5{,}2>2{,}6$, c'est ${\color{#4A5D7A}\text{la seconde série}}$ qui est la plus dispersée.

Deux séries peuvent avoir la même moyenne et des dispersions très différentes : la moyenne seule ne décrit pas une série.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
On donne les intervalles $I=\left]-\infty\,;\,3\right]$ et $J=\left[-2\,;\,+\infty\right[$.

Déterminer $I\cap J$ puis $I\cup J$.
---CORR---
On traduit par des inégalités : $x\in I$ signifie $x\leqslant 3$, et $x\in J$ signifie $x\geqslant -2$.

**Intersection** : les réels qui vérifient les deux conditions à la fois, donc $-2\leqslant x\leqslant 3$.

$$I\cap J={\color{#4A5D7A}\left[-2\,;\,3\right]}$$

**Réunion** : tout réel est soit inférieur ou égal à $3$, soit supérieur ou égal à $-2$ (et souvent les deux). Aucun réel n'échappe aux deux conditions.

$$I\cup J={\color{#4A5D7A}\mathbb{R}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On considère la droite d'équation $y=\dfrac{x}{3}+5$.

Son coefficient directeur est :

**A.** $m=5$ &emsp; **B.** $m=\dfrac{1}{3}$ &emsp; **C.** $m=3$ &emsp; **D.** $m=\dfrac{x}{3}$
---CORR---
On reconnaît l'équation réduite d'une droite, de la forme $y=mx+p$ où $m$ est le coefficient directeur.

Il faut d'abord réécrire $\dfrac{x}{3}$ sous la forme d'un produit :

$$\dfrac{x}{3}=\dfrac{1}{3}\times x$$

L'équation devient $y=\dfrac{1}{3}x+5$, donc :

$$m={\color{#4A5D7A}\dfrac{1}{3}} \qquad\text{et}\qquad p=5$$

La réponse A donne l'ordonnée à l'origine, et la réponse C confond le coefficient avec le dénominateur.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Dans une série statistique de $9$ valeurs rangées dans l'ordre croissant, la médiane est la valeur de rang :

**A.** $4$ &emsp; **B.** $4{,}5$ &emsp; **C.** $5{,}5$ &emsp; **D.** $5$
---CORR---
Quand l'effectif $n$ est impair, la médiane est la valeur du milieu, celle de rang $\dfrac{n+1}{2}$.

$$\dfrac{9+1}{2}={\color{#4A5D7A}5}$$

Il y a bien $4$ valeurs avant et $4$ valeurs après. Les réponses B et C proposent des rangs non entiers, ce qui est impossible pour un effectif impair.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Soit $f$ la fonction affine définie sur $\mathbb{R}$ par $f(x)=4x-7$.

Donner son coefficient directeur, son ordonnée à l'origine, puis son sens de variation en justifiant.
---CORR---
Une fonction affine s'écrit $f(x)=mx+p$, où $m$ est le coefficient directeur et $p$ l'ordonnée à l'origine. Ici :

$$m={\color{#4A5D7A}4} \qquad\text{et}\qquad p={\color{#4A5D7A}-7}$$

Le sens de variation ne dépend que du signe de $m$. Comme $m=4>0$ :

$$f\ \text{est}\ {\color{#4A5D7A}\text{croissante}}\ \text{sur}\ \mathbb{R}$$

L'ordonnée à l'origine $p=-7$ est l'image de $0$ : la droite coupe l'axe des ordonnées au point de coordonnées $(0\,;\,-7)$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Ci-dessous la droite $(d)$, représentation graphique d'une fonction affine $f$.

<img src="/mabemat/images/automatismes/2nde/s14d-q02.svg" alt="Droite représentative d'une fonction affine" style="display:block;margin:1rem auto;width:100%;max-width:380px;">

Lire graphiquement son ordonnée à l'origine et son coefficient directeur, puis donner l'expression de $f(x)$.
---CORR---
**Ordonnée à l'origine** : c'est l'ordonnée du point où la droite coupe l'axe des ordonnées. Ici, ce point est $(0\,;\,2)$, donc $p=2$.

**Coefficient directeur** : on part d'un point de la droite, on avance de $1$ vers la droite, et on lit de combien on monte ou on descend. En partant de $(0\,;\,2)$ et en avançant de $1$, on arrive en $(1\,;\,1)$ : on est descendu de $1$.

$$m=\dfrac{\text{déplacement vertical}}{\text{déplacement horizontal}}=\dfrac{-1}{1}=-1$$

D'où :

$$f(x)={\color{#4A5D7A}-x+2}$$

Vérification avec un autre point de la droite : $f(2)=-2+2=0$, et la droite coupe bien l'axe des abscisses en $2$.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
On considère la série statistique : $5\ ;\ 9\ ;\ 10\ ;\ 14\ ;\ 22$.

**a.** Calculer la moyenne de cette série.

**b.** Une seconde série a la même moyenne, mais son écart-type vaut $1{,}8$ alors que celui de la première vaut $6{,}1$. Laquelle des deux séries a ses valeurs les plus regroupées autour de sa moyenne ?
---CORR---
**a.** La moyenne est la somme des valeurs divisée par leur nombre :

$$\overline{x}=\dfrac{5+9+10+14+22}{5}=\dfrac{60}{5}={\color{#4A5D7A}12}$$

**b.** L'écart-type mesure la dispersion : plus il est **petit**, plus les valeurs sont regroupées autour de la moyenne.

Comme $1{,}8<6{,}1$, c'est ${\color{#4A5D7A}\text{la seconde série}}$ qui a ses valeurs les plus regroupées.

Deux séries peuvent avoir la même moyenne et des dispersions très différentes : la moyenne seule ne décrit pas une série.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
On donne les intervalles $I=\left[-5\,;\,4\right[$ et $J=\left]1\,;\,+\infty\right[$.

Déterminer $I\cap J$ puis $I\cup J$.
---CORR---
On traduit par des inégalités : $x\in I$ signifie $-5\leqslant x<4$, et $x\in J$ signifie $x>1$.

**Intersection** : les réels qui vérifient les deux conditions à la fois, donc $1<x<4$. Les deux bornes sont exclues, l'une parce que l'inégalité de $J$ est stricte, l'autre parce que celle de $I$ l'est aussi.

$$I\cap J={\color{#4A5D7A}\left]1\,;\,4\right[}$$

**Réunion** : les deux intervalles se chevauchent, leur réunion est donc d'un seul tenant, de la plus petite borne à la plus grande.

$$I\cup J={\color{#4A5D7A}\left[-5\,;\,+\infty\right[}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On considère la droite d'équation $y=\dfrac{x}{5}-2$.

Son coefficient directeur est :

**A.** $m=\dfrac{1}{5}$ &emsp; **B.** $m=5$ &emsp; **C.** $m=-2$ &emsp; **D.** $m=\dfrac{x}{5}$
---CORR---
On reconnaît l'équation réduite d'une droite, de la forme $y=mx+p$ où $m$ est le coefficient directeur.

Il faut d'abord réécrire $\dfrac{x}{5}$ sous la forme d'un produit :

$$\dfrac{x}{5}=\dfrac{1}{5}\times x$$

L'équation devient $y=\dfrac{1}{5}x-2$, donc :

$$m={\color{#4A5D7A}\dfrac{1}{5}} \qquad\text{et}\qquad p=-2$$

La réponse C donne l'ordonnée à l'origine, et la réponse B confond le coefficient avec le dénominateur.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Dans une série statistique de $11$ valeurs rangées dans l'ordre croissant, la médiane est la valeur de rang :

**A.** $5$ &emsp; **B.** $5{,}5$ &emsp; **C.** $6$ &emsp; **D.** $6{,}5$
---CORR---
Quand l'effectif $n$ est impair, la médiane est la valeur du milieu, celle de rang $\dfrac{n+1}{2}$.

$$\dfrac{11+1}{2}={\color{#4A5D7A}6}$$

Il y a bien $5$ valeurs avant et $5$ valeurs après. Les réponses B et D proposent des rangs non entiers, ce qui est impossible pour un effectif impair.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
