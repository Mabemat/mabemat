---
title: "Semaine 14 - Fonctions affines et sens de variation"
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
$g$ est une fonction affine telle que $g(-1)=4$ et $g(3)=-8$.

Déterminer son coefficient directeur.
---CORR---
Pour une fonction affine, le coefficient directeur se calcule à partir de deux images :

$$m=\dfrac{g(x_2)-g(x_1)}{x_2-x_1}$$

On remplace par les valeurs de l'énoncé :

$$m=\dfrac{-8-4}{3-(-1)}=\dfrac{-12}{4}={\color{#4A5D7A}-3}$$

Attention au dénominateur : $3-(-1)=3+1=4$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
On considère la série statistique suivante, rangée dans l'ordre croissant :

$$6\ ;\ 8\ ;\ 8\ ;\ 11\ ;\ 13\ ;\ 13\ ;\ 13\ ;\ 17$$

Déterminer la médiane et l'étendue de cette série.
---CORR---
La série compte $8$ valeurs. Comme $8$ est pair, il n'y a pas de valeur centrale unique : la médiane est la moyenne des deux valeurs du milieu, celles de rang $4$ et $5$.

$$\text{Médiane}=\dfrac{11+13}{2}=\dfrac{24}{2}={\color{#4A5D7A}12}$$

L'étendue est l'écart entre la plus grande et la plus petite valeur :

$$17-6={\color{#4A5D7A}11}$$

On remarque que la médiane $12$ n'est pas une valeur de la série : c'est normal quand l'effectif est pair.
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
$g$ est une fonction affine telle que $g(-2)=7$ et $g(4)=-5$.

Déterminer son coefficient directeur.
---CORR---
Pour une fonction affine, le coefficient directeur se calcule à partir de deux images :

$$m=\dfrac{g(x_2)-g(x_1)}{x_2-x_1}$$

On remplace par les valeurs de l'énoncé :

$$m=\dfrac{-5-7}{4-(-2)}=\dfrac{-12}{6}={\color{#4A5D7A}-2}$$

Attention au dénominateur : $4-(-2)=4+2=6$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
On considère la série statistique suivante, rangée dans l'ordre croissant :

$$5\ ;\ 7\ ;\ 9\ ;\ 9\ ;\ 12\ ;\ 14\ ;\ 16\ ;\ 20$$

Déterminer la médiane et l'étendue de cette série.
---CORR---
La série compte $8$ valeurs. Comme $8$ est pair, il n'y a pas de valeur centrale unique : la médiane est la moyenne des deux valeurs du milieu, celles de rang $4$ et $5$.

$$\text{Médiane}=\dfrac{9+12}{2}=\dfrac{21}{2}={\color{#4A5D7A}10{,}5}$$

L'étendue est l'écart entre la plus grande et la plus petite valeur :

$$20-5={\color{#4A5D7A}15}$$

On remarque que la médiane $10{,}5$ n'est pas une valeur de la série : c'est normal quand l'effectif est pair.
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
