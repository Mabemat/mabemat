---
title: "Semaine 18 - Coordonnées, colinéarité et alignement"
layout: "automatismes-2nde"
auto_number: 18
weight: 18
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Dans un repère, on donne $A(-2\,;\,3)$ et $B(4\,;\,-1)$.

Déterminer les coordonnées du vecteur $\overrightarrow{AB}$.
---CORR---
Les coordonnées d'un vecteur s'obtiennent en soustrayant les coordonnées de l'origine à celles de l'extrémité, dans cet ordre :

$$\overrightarrow{AB}\ \left(x_B-x_A\ ;\ y_B-y_A\right)$$

On remplace :

$$x_B-x_A=4-(-2)=6 \qquad\qquad y_B-y_A=-1-3=-4$$

$$\overrightarrow{AB}\ {\color{#4A5D7A}\left(6\ ;\ -4\right)}$$

Attention au sens de la soustraction : c'est « arrivée moins départ ». Le vecteur $\overrightarrow{BA}$ aurait pour coordonnées $(-6\,;\,4)$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
On donne $\overrightarrow{u}\,(3\,;\,-2)$ et $\overrightarrow{v}\,(-9\,;\,6)$.

Ces deux vecteurs sont-ils colinéaires ? Justifier par un calcul de déterminant.
---CORR---
Le déterminant de deux vecteurs $\overrightarrow{u}\,(x\,;\,y)$ et $\overrightarrow{v}\,(x'\,;\,y')$ vaut :

$$\det\left(\overrightarrow{u}\,;\,\overrightarrow{v}\right)=xy'-yx'$$

On remplace :

$$3\times 6-(-2)\times(-9)=18-18={\color{#4A5D7A}0}$$

Le déterminant est nul, donc les deux vecteurs sont ${\color{#4A5D7A}\text{colinéaires}}$.

On le voit aussi directement : $\overrightarrow{v}=-3\,\overrightarrow{u}$.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
On donne $A(1\,;\,2)$, $B(4\,;\,8)$ et $C(6\,;\,12)$.

Les points $A$, $B$ et $C$ sont-ils alignés ?
---CORR---
Trois points sont alignés si les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{AC}$ sont colinéaires. On calcule d'abord leurs coordonnées :

$$\overrightarrow{AB}\,(4-1\,;\,8-2)=(3\,;\,6) \qquad \overrightarrow{AC}\,(6-1\,;\,12-2)=(5\,;\,10)$$

On calcule le déterminant :

$$3\times 10-6\times 5=30-30={\color{#4A5D7A}0}$$

Le déterminant est nul, donc les vecteurs sont colinéaires : les points $A$, $B$ et $C$ sont ${\color{#4A5D7A}\text{alignés}}$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Écrire sous la forme $a\sqrt{b}$, avec $b$ le plus petit entier possible :

$$\sqrt{32}-\sqrt{8}$$
---CORR---
On extrait le plus grand carré parfait de chaque racine :

$$\sqrt{32}=\sqrt{16\times 2}=4\sqrt{2} \qquad\qquad \sqrt{8}=\sqrt{4\times 2}=2\sqrt{2}$$

Les deux termes ont la même partie irrationnelle :

$$4\sqrt{2}-2\sqrt{2}={\color{#4A5D7A}2\sqrt{2}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Une droite passe par les points $A(-1\,;\,5)$ et $B(3\,;\,3)$.

Son coefficient directeur est :

**A.** $\dfrac{1}{2}$ &emsp; **B.** $-\dfrac{1}{2}$ &emsp; **C.** $-2$ &emsp; **D.** $2$
---CORR---
Le coefficient directeur se calcule par :

$$m=\dfrac{y_B-y_A}{x_B-x_A}$$

On remplace :

$$m=\dfrac{3-5}{3-(-1)}=\dfrac{-2}{4}={\color{#4A5D7A}-\dfrac{1}{2}}$$

La droite descend, donc le coefficient doit être négatif : cela élimine déjà les réponses A et D. La réponse C inverse la fraction.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Un prix a doublé. Cela signifie que ce prix a augmenté de :

**A.** $200\,\%$ &emsp; **B.** $2\,\%$ &emsp; **C.** $50\,\%$ &emsp; **D.** $100\,\%$
---CORR---
Doubler, c'est multiplier par $2$ : le coefficient multiplicateur vaut $2$.

Or ce coefficient s'écrit $1+\dfrac{t}{100}$ :

$$2=1+\dfrac{t}{100} \qquad\text{donc}\qquad \dfrac{t}{100}=1 \qquad\text{donc}\qquad t={\color{#4A5D7A}100}$$

La réponse A confond le coefficient $2$, exprimé en pourcentage, avec le taux d'évolution : augmenter de $200\,\%$ reviendrait à tripler le prix.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Dans un repère, on donne $A(5\,;\,-2)$ et $B(-1\,;\,4)$.

Déterminer les coordonnées du vecteur $\overrightarrow{AB}$.
---CORR---
Les coordonnées d'un vecteur s'obtiennent en soustrayant les coordonnées de l'origine à celles de l'extrémité, dans cet ordre :

$$\overrightarrow{AB}\ \left(x_B-x_A\ ;\ y_B-y_A\right)$$

On remplace :

$$x_B-x_A=-1-5=-6 \qquad\qquad y_B-y_A=4-(-2)=6$$

$$\overrightarrow{AB}\ {\color{#4A5D7A}\left(-6\ ;\ 6\right)}$$

Attention au sens de la soustraction : c'est « arrivée moins départ ». Le vecteur $\overrightarrow{BA}$ aurait pour coordonnées $(6\,;\,-6)$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
On donne $\overrightarrow{u}\,(4\,;\,-3)$ et $\overrightarrow{v}\,(-8\,;\,6)$.

Ces deux vecteurs sont-ils colinéaires ? Justifier par un calcul de déterminant.
---CORR---
Le déterminant de deux vecteurs $\overrightarrow{u}\,(x\,;\,y)$ et $\overrightarrow{v}\,(x'\,;\,y')$ vaut :

$$\det\left(\overrightarrow{u}\,;\,\overrightarrow{v}\right)=xy'-yx'$$

On remplace :

$$4\times 6-(-3)\times(-8)=24-24={\color{#4A5D7A}0}$$

Le déterminant est nul, donc les deux vecteurs sont ${\color{#4A5D7A}\text{colinéaires}}$.

On le voit aussi directement : $\overrightarrow{v}=-2\,\overrightarrow{u}$.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
On donne $A(2\,;\,1)$, $B(5\,;\,7)$ et $C(8\,;\,13)$.

Les points $A$, $B$ et $C$ sont-ils alignés ?
---CORR---
Trois points sont alignés si les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{AC}$ sont colinéaires. On calcule d'abord leurs coordonnées :

$$\overrightarrow{AB}\,(5-2\,;\,7-1)=(3\,;\,6) \qquad \overrightarrow{AC}\,(8-2\,;\,13-1)=(6\,;\,12)$$

On calcule le déterminant :

$$3\times 12-6\times 6=36-36={\color{#4A5D7A}0}$$

Le déterminant est nul, donc les vecteurs sont colinéaires : les points $A$, $B$ et $C$ sont ${\color{#4A5D7A}\text{alignés}}$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Écrire sous la forme $a\sqrt{b}$, avec $b$ le plus petit entier possible :

$$\sqrt{45}-\sqrt{20}$$
---CORR---
On extrait le plus grand carré parfait de chaque racine :

$$\sqrt{45}=\sqrt{9\times 5}=3\sqrt{5} \qquad\qquad \sqrt{20}=\sqrt{4\times 5}=2\sqrt{5}$$

Les deux termes ont la même partie irrationnelle :

$$3\sqrt{5}-2\sqrt{5}={\color{#4A5D7A}\sqrt{5}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Une droite passe par les points $A(2\,;\,7)$ et $B(6\,;\,1)$.

Son coefficient directeur est :

**A.** $\dfrac{3}{2}$ &emsp; **B.** $-\dfrac{2}{3}$ &emsp; **C.** $-\dfrac{3}{2}$ &emsp; **D.** $-6$
---CORR---
Le coefficient directeur se calcule par :

$$m=\dfrac{y_B-y_A}{x_B-x_A}$$

On remplace :

$$m=\dfrac{1-7}{6-2}=\dfrac{-6}{4}={\color{#4A5D7A}-\dfrac{3}{2}}$$

La droite descend, donc le coefficient doit être négatif : cela élimine déjà la réponse A. La réponse B inverse la fraction, et la réponse D oublie de diviser par l'écart des abscisses.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Un prix a triplé. Cela signifie que ce prix a augmenté de :

**A.** $200\,\%$ &emsp; **B.** $100\,\%$ &emsp; **C.** $3\,\%$ &emsp; **D.** $300\,\%$
---CORR---
Tripler, c'est multiplier par $3$ : le coefficient multiplicateur vaut $3$.

Or ce coefficient s'écrit $1+\dfrac{t}{100}$ :

$$3=1+\dfrac{t}{100} \qquad\text{donc}\qquad \dfrac{t}{100}=2 \qquad\text{donc}\qquad t={\color{#4A5D7A}200}$$

La réponse D confond le coefficient $3$, exprimé en pourcentage, avec le taux d'évolution : le prix augmente de deux fois sa valeur, pas de trois fois.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
