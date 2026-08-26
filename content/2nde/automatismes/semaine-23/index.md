---
title: "Semaine 23 - Parité et nombres premiers"
layout: "automatismes-2nde"
auto_number: 23
weight: 23
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Décomposer $180$ en produit de facteurs premiers.
---CORR---
On divise successivement par les nombres premiers, en commençant par le plus petit :

$$180=2\times 90 \qquad 90=2\times 45 \qquad 45=3\times 15 \qquad 15=3\times 5$$

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
Résoudre dans $\mathbb{R}$ l'inéquation, et donner l'ensemble des solutions sous forme d'intervalle :

$$\left|x-1\right|\leqslant 4$$
---CORR---
$\left|x-1\right|$ est la distance entre $x$ et $1$. On encadre :

$$-4\leqslant x-1\leqslant 4$$

On ajoute $1$ aux trois membres :

$$-3\leqslant x\leqslant 5$$

$$S={\color{#4A5D7A}\left[-3\,;\,5\right]}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Une personne doit rembourser un crédit de $1\,800$ € en trois mois. En janvier, elle rembourse $\dfrac{1}{3}$ du crédit et en février $\dfrac{1}{4}$ du crédit.

La somme, en euros, qu'il lui reste à rembourser en mars est :

**A.** $450$ &emsp; **B.** $1\,050$ &emsp; **C.** $750$ &emsp; **D.** $600$
---CORR---
Attention : les deux fractions portent sur le crédit **initial**, pas sur ce qui reste. On calcule donc chaque remboursement à partir de $1\,800$ €.

$$\text{janvier}:\ \dfrac{1}{3}\times 1\,800=600 \qquad \text{février}:\ \dfrac{1}{4}\times 1\,800=450$$

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
Décomposer $252$ en produit de facteurs premiers.
---CORR---
On divise successivement par les nombres premiers, en commençant par le plus petit :

$$252=2\times 126 \qquad 126=2\times 63 \qquad 63=3\times 21 \qquad 21=3\times 7$$

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
Résoudre dans $\mathbb{R}$ l'inéquation, et donner l'ensemble des solutions sous forme d'intervalle :

$$\left|x+2\right|\leqslant 5$$
---CORR---
$\left|x+2\right|$ est la distance entre $x$ et $-2$. On encadre :

$$-5\leqslant x+2\leqslant 5$$

On retranche $2$ aux trois membres :

$$-7\leqslant x\leqslant 3$$

$$S={\color{#4A5D7A}\left[-7\,;\,3\right]}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Une personne doit rembourser un crédit de $2\,400$ € en trois mois. En janvier, elle rembourse $\dfrac{1}{4}$ du crédit et en février $\dfrac{1}{3}$ du crédit.

La somme, en euros, qu'il lui reste à rembourser en mars est :

**A.** $1\,000$ &emsp; **B.** $1\,400$ &emsp; **C.** $600$ &emsp; **D.** $800$
---CORR---
Attention : les deux fractions portent sur le crédit **initial**, pas sur ce qui reste. On calcule donc chaque remboursement à partir de $2\,400$ €.

$$\text{janvier}:\ \dfrac{1}{4}\times 2\,400=600 \qquad \text{février}:\ \dfrac{1}{3}\times 2\,400=800$$

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
