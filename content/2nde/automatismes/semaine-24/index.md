---
title: "Semaine 24 - Parité et nombres premiers"
layout: "automatismes-2nde"
auto_number: 24
weight: 24
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Décomposer $180$ en produit de facteurs premiers.
---CORR---
On divise successivement par les nombres premiers, en commençant par le plus petit :

$$\begin{aligned}180 &= 2\times 90 \qquad 90 \\ &= 2\times 45 \qquad 45 \\ &= 3\times 15 \qquad 15 \\ &= 3\times 5\end{aligned}$$

En regroupant :

$$180={\color{#4A5D7A}2^2\times 3^2\times 5}$$

Vérification : $4\times 9\times 5=180$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Démontrer que le carré d'un nombre entier impair est impair.
---CORR---
On traduit l'hypothèse : soit $n$ un entier impair. Il existe alors un entier $k$ tel que

$$n=2k+1$$

On calcule le carré en développant l'identité remarquable :

$$n^2=(2k+1)^2=4k^2+4k+1$$

Pour reconnaître un nombre impair, il faut le mettre sous la forme $2\times\text{entier}+1$. On factorise donc les deux premiers termes par $2$ :

$$n^2={\color{#4A5D7A}2\left(2k^2+2k\right)+1}$$

Comme $2k^2+2k$ est un entier, $n^2$ est bien impair.

Tout est dans la mise en forme finale : sans elle, on n'a pas démontré la parité.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Le nombre $91$ est-il premier ? Justifier.
---CORR---
Un nombre premier n'a que deux diviseurs : $1$ et lui-même. On teste donc les nombres premiers successifs, en s'arrêtant dès que leur carré dépasse $91$ (car $10^2=100>91$, il suffit de tester jusqu'à $9$).

$91$ n'est pas pair, la somme de ses chiffres est $10$ donc il n'est pas divisible par $3$, il ne se termine ni par $0$ ni par $5$. On teste $7$ :

$$91=7\times 13$$

Le nombre $91$ admet donc d'autres diviseurs que $1$ et lui-même : il ${\color{#4A5D7A}\text{n'est pas premier}}$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Dans un repère orthonormé, on donne $A(-1\,;\,3)$ et $B(3\,;\,6)$.

Calculer la distance $AB$.
---CORR---
On applique la formule issue du théorème de Pythagore :

$$AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$$

$$\begin{aligned}AB &= \sqrt{(3-(-1))^2+(6-3)^2} \\ &= \sqrt{4^2+3^2} \\ &= \sqrt{16+9} \\ &= \sqrt{25} \\ &= {\color{#4A5D7A}5}\end{aligned}$$

Les différences sont élevées au carré : leur signe n'a aucune importance.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Parmi les $1\,500$ logements que compte une ville, $20\,\%$ sont des maisons, et $60\,\%$ de celles-ci sont des T2.

Le nombre de maisons T2 est :

**A.** $300$ &emsp; **B.** $180$ &emsp; **C.** $120$ &emsp; **D.** $900$
---CORR---
On procède en deux étapes. Nombre de maisons :

$$0{,}20\times 1\,500=300$$

Attention : les $60\,\%$ portent sur les **maisons**, pas sur l'ensemble des logements. On applique donc ce pourcentage à $300$ :

$$0{,}60\times 300={\color{#4A5D7A}180}$$

On peut aussi enchaîner les deux coefficients : $1\,500\times 0{,}20\times 0{,}60=180$.

La réponse A s'arrête à la première étape.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Lors d'une élection, $\dfrac{1}{4}$ des électeurs ont voté pour A, $30\,\%$ pour B, $\dfrac{1}{5}$ pour C, et le reste pour D.

La proportion d'électeurs ayant voté pour D est :

**A.** $15\,\%$ &emsp; **B.** $20\,\%$ &emsp; **C.** $30\,\%$ &emsp; **D.** $25\,\%$
---CORR---
On convertit tout en écriture décimale pour pouvoir additionner :

$$\begin{aligned}\dfrac{1}{4} &= 0{,}25 \qquad 30\,\% \\ &= 0{,}30 \qquad \dfrac{1}{5} \\ &= 0{,}20\end{aligned}$$

La somme des quatre proportions vaut $1$, puisque chaque électeur a voté pour exactement un candidat :

$$0{,}25+0{,}30+0{,}20=0{,}75$$

D'où :

$$1-0{,}75=0{,}25={\color{#4A5D7A}25\,\%}$$

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Décomposer $252$ en produit de facteurs premiers.
---CORR---
On divise successivement par les nombres premiers, en commençant par le plus petit :

$$\begin{aligned}252 &= 2\times 126 \qquad 126 \\ &= 2\times 63 \qquad 63 \\ &= 3\times 21 \qquad 21 \\ &= 3\times 7\end{aligned}$$

En regroupant :

$$252={\color{#4A5D7A}2^2\times 3^2\times 7}$$

Vérification : $4\times 9\times 7=252$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Démontrer que le carré d'un nombre entier pair est pair.
---CORR---
On traduit l'hypothèse : soit $n$ un entier pair. Il existe alors un entier $k$ tel que

$$n=2k$$

On calcule le carré :

$$n^2=(2k)^2=4k^2$$

Pour reconnaître un nombre pair, il faut le mettre sous la forme $2\times\text{entier}$. On factorise donc par $2$ :

$$n^2={\color{#4A5D7A}2\left(2k^2\right)}$$

Comme $2k^2$ est un entier, $n^2$ est bien pair.

Tout est dans la mise en forme finale : sans elle, on n'a pas démontré la parité.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Le nombre $87$ est-il premier ? Justifier.
---CORR---
Un nombre premier n'a que deux diviseurs : $1$ et lui-même. On teste donc les nombres premiers successifs, en s'arrêtant dès que leur carré dépasse $87$ (car $10^2=100>87$, il suffit de tester jusqu'à $9$).

$87$ n'est pas pair. On calcule la somme de ses chiffres :

$$8+7=15$$

$15$ est divisible par $3$, donc $87$ aussi :

$$87=3\times 29$$

Le nombre $87$ admet donc d'autres diviseurs que $1$ et lui-même : il ${\color{#4A5D7A}\text{n'est pas premier}}$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Dans un repère orthonormé, on donne $A(2\,;\,-1)$ et $B(-4\,;\,7)$.

Calculer la distance $AB$.
---CORR---
On applique la formule issue du théorème de Pythagore :

$$AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$$

$$\begin{aligned}AB &= \sqrt{(-4-2)^2+(7-(-1))^2} \\ &= \sqrt{(-6)^2+8^2} \\ &= \sqrt{36+64} \\ &= \sqrt{100} \\ &= {\color{#4A5D7A}10}\end{aligned}$$

Les différences sont élevées au carré : leur signe n'a aucune importance.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Parmi les $2\,500$ logements que compte une ville, $40\,\%$ sont des maisons, et $25\,\%$ de celles-ci sont des T2.

Le nombre de maisons T2 est :

**A.** $250$ &emsp; **B.** $1\,000$ &emsp; **C.** $625$ &emsp; **D.** $100$
---CORR---
On procède en deux étapes. Nombre de maisons :

$$0{,}40\times 2\,500=1\,000$$

Attention : les $25\,\%$ portent sur les **maisons**, pas sur l'ensemble des logements. On applique donc ce pourcentage à $1\,000$ :

$$0{,}25\times 1\,000={\color{#4A5D7A}250}$$

On peut aussi enchaîner les deux coefficients : $2\,500\times 0{,}40\times 0{,}25=250$.

La réponse B s'arrête à la première étape.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Lors d'une élection, $\dfrac{1}{5}$ des électeurs ont voté pour A, $35\,\%$ pour B, $\dfrac{1}{4}$ pour C, et le reste pour D.

La proportion d'électeurs ayant voté pour D est :

**A.** $25\,\%$ &emsp; **B.** $15\,\%$ &emsp; **C.** $20\,\%$ &emsp; **D.** $30\,\%$
---CORR---
On convertit tout en écriture décimale pour pouvoir additionner :

$$\begin{aligned}\dfrac{1}{5} &= 0{,}20 \qquad 35\,\% \\ &= 0{,}35 \qquad \dfrac{1}{4} \\ &= 0{,}25\end{aligned}$$

La somme des quatre proportions vaut $1$, puisque chaque électeur a voté pour exactement un candidat :

$$0{,}20+0{,}35+0{,}25=0{,}80$$

D'où :

$$1-0{,}80=0{,}20={\color{#4A5D7A}20\,\%}$$

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
