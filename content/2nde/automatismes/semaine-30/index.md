---
title: "Semaine 30 - Révisions : algèbre, droites et probabilités"
layout: "automatismes-2nde"
auto_number: 30
weight: 30
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Factoriser :

$$A=49x^2-25$$
---CORR---
On reconnaît une différence de deux carrés :

$$49x^2=(7x)^2 \qquad\text{et}\qquad 25=5^2$$

On applique l'identité $a^2-b^2=(a-b)(a+b)$ avec $a=7x$ et $b=5$ :

$$A={\color{#4A5D7A}(7x-5)(7x+5)}$$

Vérification en développant : $(7x)^2-5^2=49x^2-25$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Résoudre dans $\mathbb{R}$ l'inéquation :

$$\dfrac{2x-6}{x+1}\geqslant 0$$
---CORR---
On repère la valeur interdite, qui annule le dénominateur :

$$x+1=0 \quad\Longrightarrow\quad x=-1$$

On cherche ensuite la racine du numérateur :

$$2x-6=0 \quad\Longrightarrow\quad x=3$$

Les deux expressions sont affines de coefficient positif : chacune est négative avant sa racine et positive après. On dresse le tableau de signes du quotient :

| $x$ | $-\infty$ | | $-1$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $2x-6$ | | $-$ | | $-$ | $0$ | $+$ | |
| $x+1$ | | $-$ | $0$ | $+$ | | $+$ | |
| quotient | | $+$ | ‖ | $-$ | $0$ | $+$ | |

En $-1$, le quotient n'existe pas : la borne est nécessairement **exclue**, même si l'inégalité est large.

$$S={\color{#4A5D7A}\left]-\infty\,;\,-1\right[\cup\left[3\,;\,+\infty\right[}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Déterminer l'équation réduite de la droite passant par $A(-2\,;\,5)$ et $B(4\,;\,-7)$.
---CORR---
On calcule d'abord le coefficient directeur :

$$m=\dfrac{y_B-y_A}{x_B-x_A}=\dfrac{-7-5}{4-(-2)}=\dfrac{-12}{6}=-2$$

L'équation est donc de la forme $y=-2x+p$. On détermine $p$ en utilisant les coordonnées de $A$ :

$$5=-2\times(-2)+p \qquad\text{soit}\qquad 5=4+p \qquad\text{donc}\qquad p=1$$

$$y={\color{#4A5D7A}-2x+1}$$

Vérification avec $B$ : $-2\times 4+1=-7$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Une urne contient $8$ boules dont $3$ sont rouges. On en tire une au hasard.

Quelle est la probabilité de ne pas obtenir une boule rouge ?
---CORR---
« Ne pas obtenir une rouge » est l'événement contraire de « obtenir une rouge ».

$$P(\text{rouge})=\dfrac{3}{8} \qquad\text{donc}\qquad P(\text{pas rouge})=1-\dfrac{3}{8}={\color{#4A5D7A}\dfrac{5}{8}}$$

On retrouve le même résultat en comptant directement les $8-3=5$ boules non rouges.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Dans une série de $20$ valeurs rangées dans l'ordre croissant, le premier quartile $Q_1$ est la valeur de rang :

**A.** $4$ &emsp; **B.** $10$ &emsp; **C.** $5{,}5$ &emsp; **D.** $5$
---CORR---
Pour le premier quartile, on calcule le quart de l'effectif :

$$\dfrac{20}{4}=5$$

Ce nombre est entier, donc $Q_1$ est la valeur de rang ${\color{#4A5D7A}5}$.

Si le quart n'avait pas été entier, on aurait pris le rang immédiatement supérieur. La réponse B correspondrait à la médiane.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Après une hausse de $25\,\%$, quelle baisse faut-il appliquer pour retrouver le prix initial ?

**A.** $25\,\%$ &emsp; **B.** $20\,\%$ &emsp; **C.** $75\,\%$ &emsp; **D.** $12{,}5\,\%$
---CORR---
La hausse correspond au coefficient $1{,}25$. Pour revenir au prix de départ, le coefficient de la baisse doit annuler cet effet, c'est-à-dire que le produit des deux doit valoir $1$ :

$$1{,}25\times k=1 \qquad\text{donc}\qquad k=\dfrac{1}{1{,}25}=0{,}8$$

Un coefficient de $0{,}8$ correspond à une baisse de ${\color{#4A5D7A}20\,\%}$.

La réponse A est le piège : une baisse de $25\,\%$ donnerait $1{,}25\times 0{,}75=0{,}937\,5$, soit un prix final inférieur au prix initial. Le taux réciproque d'une hausse n'est jamais la baisse du même pourcentage.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Factoriser :

$$A=64x^2-9$$
---CORR---
On reconnaît une différence de deux carrés :

$$64x^2=(8x)^2 \qquad\text{et}\qquad 9=3^2$$

On applique l'identité $a^2-b^2=(a-b)(a+b)$ avec $a=8x$ et $b=3$ :

$$A={\color{#4A5D7A}(8x-3)(8x+3)}$$

Vérification en développant : $(8x)^2-3^2=64x^2-9$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Résoudre dans $\mathbb{R}$ l'inéquation :

$$\dfrac{3x-12}{x+2}\geqslant 0$$
---CORR---
On repère la valeur interdite, qui annule le dénominateur :

$$x+2=0 \quad\Longrightarrow\quad x=-2$$

On cherche ensuite la racine du numérateur :

$$3x-12=0 \quad\Longrightarrow\quad x=4$$

Les deux expressions sont affines de coefficient positif : chacune est négative avant sa racine et positive après. On dresse le tableau de signes du quotient :

| $x$ | $-\infty$ | | $-2$ | | $4$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $3x-12$ | | $-$ | | $-$ | $0$ | $+$ | |
| $x+2$ | | $-$ | $0$ | $+$ | | $+$ | |
| quotient | | $+$ | ‖ | $-$ | $0$ | $+$ | |

En $-2$, le quotient n'existe pas : la borne est nécessairement **exclue**, même si l'inégalité est large.

$$S={\color{#4A5D7A}\left]-\infty\,;\,-2\right[\cup\left[4\,;\,+\infty\right[}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Déterminer l'équation réduite de la droite passant par $A(-1\,;\,6)$ et $B(3\,;\,-2)$.
---CORR---
On calcule d'abord le coefficient directeur :

$$m=\dfrac{y_B-y_A}{x_B-x_A}=\dfrac{-2-6}{3-(-1)}=\dfrac{-8}{4}=-2$$

L'équation est donc de la forme $y=-2x+p$. On détermine $p$ en utilisant les coordonnées de $A$ :

$$6=-2\times(-1)+p \qquad\text{soit}\qquad 6=2+p \qquad\text{donc}\qquad p=4$$

$$y={\color{#4A5D7A}-2x+4}$$

Vérification avec $B$ : $-2\times 3+4=-2$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Une urne contient $10$ boules dont $4$ sont vertes. On en tire une au hasard.

Quelle est la probabilité de ne pas obtenir une boule verte ?
---CORR---
« Ne pas obtenir une verte » est l'événement contraire de « obtenir une verte ».

$$P(\text{verte})=\dfrac{4}{10} \qquad\text{donc}\qquad P(\text{pas verte})=1-\dfrac{4}{10}=\dfrac{6}{10}={\color{#4A5D7A}\dfrac{3}{5}}$$

On retrouve le même résultat en comptant directement les $10-4=6$ boules non vertes.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Dans une série de $20$ valeurs rangées dans l'ordre croissant, le troisième quartile $Q_3$ est la valeur de rang :

**A.** $15$ &emsp; **B.** $16$ &emsp; **C.** $14$ &emsp; **D.** $10$
---CORR---
Pour le troisième quartile, on calcule les trois quarts de l'effectif :

$$\dfrac{3\times 20}{4}=15$$

Ce nombre est entier, donc $Q_3$ est la valeur de rang ${\color{#4A5D7A}15}$.

Si les trois quarts n'avaient pas été entiers, on aurait pris le rang immédiatement supérieur. La réponse D correspondrait à la médiane.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Après une baisse de $20\,\%$, quelle hausse faut-il appliquer pour retrouver le prix initial ?

**A.** $80\,\%$ &emsp; **B.** $20\,\%$ &emsp; **C.** $25\,\%$ &emsp; **D.** $120\,\%$
---CORR---
La baisse correspond au coefficient $0{,}8$. Pour revenir au prix de départ, le coefficient de la hausse doit annuler cet effet, c'est-à-dire que le produit des deux doit valoir $1$ :

$$0{,}8\times k=1 \qquad\text{donc}\qquad k=\dfrac{1}{0{,}8}=1{,}25$$

Un coefficient de $1{,}25$ correspond à une hausse de ${\color{#4A5D7A}25\,\%}$.

La réponse B est le piège : une hausse de $20\,\%$ donnerait $0{,}8\times 1{,}2=0{,}96$, soit un prix final encore inférieur au prix initial. Le taux réciproque d'une baisse n'est jamais la hausse du même pourcentage.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
