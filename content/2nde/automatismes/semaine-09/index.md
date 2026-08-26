---
title: "Semaine 9 - Vecteurs, somme et relation de Chasles"
layout: "automatismes-2nde"
auto_number: 9
weight: 9
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
$ABCD$ est un parallélogramme de centre $O$.

Compléter par le point qui convient :

**a.** $\overrightarrow{AB}=\overrightarrow{D\ ?}$ &emsp; **b.** $\overrightarrow{BO}=\overrightarrow{O\ ?}$
---CORR---
**a.** Dans le parallélogramme $ABCD$, les côtés $[AB]$ et $[DC]$ sont parallèles, de même longueur et de même sens.

$$\overrightarrow{AB}=\overrightarrow{D{\color{#4A5D7A}C}}$$

**b.** Le centre $O$ d'un parallélogramme est le milieu de ses diagonales, donc $O$ est le milieu de $[BD]$. Les vecteurs $\overrightarrow{BO}$ et $\overrightarrow{OD}$ ont donc même direction, même sens et même longueur.

$$\overrightarrow{BO}=\overrightarrow{O{\color{#4A5D7A}D}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Simplifier :

$$\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}$$
---CORR---
On applique la relation de Chasles : quand l'extrémité du premier vecteur est l'origine du second, les deux se recollent.

$$\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$$

On recommence avec le vecteur suivant :

$$\overrightarrow{AC}+\overrightarrow{CD}={\color{#4A5D7A}\overrightarrow{AD}}$$

Il ne reste que le point de départ et le point d'arrivée : les points intermédiaires $B$ et $C$ ont disparu.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
$ABCD$ est un parallélogramme.

Démontrer que $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.
---CORR---
La relation de Chasles ne s'applique pas directement : les deux vecteurs partent du même point $A$, ils ne se recollent pas.

On remplace donc $\overrightarrow{AD}$ par un vecteur qui lui est égal et dont l'origine est $B$. Comme $ABCD$ est un parallélogramme, $[AD]$ et $[BC]$ sont parallèles, de même longueur et de même sens :

$$\overrightarrow{AD}=\overrightarrow{BC}$$

On peut alors appliquer Chasles :

$$\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AB}+\overrightarrow{BC}={\color{#4A5D7A}\overrightarrow{AC}}$$

La somme de deux vecteurs partant du même sommet d'un parallélogramme est la diagonale issue de ce sommet.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Résoudre dans $\mathbb{R}$ l'inéquation, et donner l'ensemble des solutions sous forme d'intervalle :

$$-2x+5>11$$
---CORR---
On retranche $5$ à chaque membre :

$$-2x>6$$

On divise chaque membre par $-2$, ce qui change le sens de l'inégalité :

$$x<\dfrac{6}{-2} \qquad\text{soit}\qquad x<-3$$

$$S={\color{#4A5D7A}\left]-\infty\,;\,-3\right[}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Le prix d'un article connaît deux baisses successives de $20\,\%$.

Le taux d'évolution global associé est :

**A.** $-64\,\%$ &emsp; **B.** $-40\,\%$ &emsp; **C.** $-4\,\%$ &emsp; **D.** $-36\,\%$
---CORR---
Chaque baisse de $20\,\%$ correspond au coefficient multiplicateur $1-0{,}20=0{,}80$.

Deux baisses successives reviennent à multiplier deux fois de suite :

$$0{,}80\times 0{,}80=0{,}64$$

On revient au taux : $0{,}64=1-0{,}36$, donc l'évolution globale est une baisse de ${\color{#4A5D7A}36\,\%}$.

La réponse B additionne les taux, ce qui est faux. La réponse A confond le coefficient $0{,}64$ avec le taux.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Dans une classe de $25$ élèves, $10$ sont demi-pensionnaires. On interroge un élève au hasard.

La probabilité qu'il soit demi-pensionnaire est :

**A.** $10$ &emsp; **B.** $0{,}6$ &emsp; **C.** $0{,}4$ &emsp; **D.** $\dfrac{10}{15}$
---CORR---
Chaque élève a la même chance d'être interrogé : il y a équiprobabilité. La probabilité est donc le nombre de cas favorables divisé par l'effectif total.

$$P=\dfrac{10}{25}=\dfrac{2}{5}={\color{#4A5D7A}0{,}4}$$

La réponse B est la probabilité de l'événement contraire, et la réponse D divise par le nombre d'externes au lieu de l'effectif total.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
$EFGH$ est un parallélogramme de centre $O$.

Compléter par le point qui convient :

**a.** $\overrightarrow{EF}=\overrightarrow{H\ ?}$ &emsp; **b.** $\overrightarrow{FO}=\overrightarrow{O\ ?}$
---CORR---
**a.** Dans le parallélogramme $EFGH$, les côtés $[EF]$ et $[HG]$ sont parallèles, de même longueur et de même sens.

$$\overrightarrow{EF}=\overrightarrow{H{\color{#4A5D7A}G}}$$

**b.** Le centre $O$ d'un parallélogramme est le milieu de ses diagonales, donc $O$ est le milieu de $[FH]$. Les vecteurs $\overrightarrow{FO}$ et $\overrightarrow{OH}$ ont donc même direction, même sens et même longueur.

$$\overrightarrow{FO}=\overrightarrow{O{\color{#4A5D7A}H}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Simplifier :

$$\overrightarrow{MN}+\overrightarrow{NP}+\overrightarrow{PQ}$$
---CORR---
On applique la relation de Chasles : quand l'extrémité du premier vecteur est l'origine du second, les deux se recollent.

$$\overrightarrow{MN}+\overrightarrow{NP}=\overrightarrow{MP}$$

On recommence avec le vecteur suivant :

$$\overrightarrow{MP}+\overrightarrow{PQ}={\color{#4A5D7A}\overrightarrow{MQ}}$$

Il ne reste que le point de départ et le point d'arrivée : les points intermédiaires $N$ et $P$ ont disparu.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
$EFGH$ est un parallélogramme.

Démontrer que $\overrightarrow{EF}+\overrightarrow{EH}=\overrightarrow{EG}$.
---CORR---
La relation de Chasles ne s'applique pas directement : les deux vecteurs partent du même point $E$, ils ne se recollent pas.

On remplace donc $\overrightarrow{EH}$ par un vecteur qui lui est égal et dont l'origine est $F$. Comme $EFGH$ est un parallélogramme, $[EH]$ et $[FG]$ sont parallèles, de même longueur et de même sens :

$$\overrightarrow{EH}=\overrightarrow{FG}$$

On peut alors appliquer Chasles :

$$\overrightarrow{EF}+\overrightarrow{EH}=\overrightarrow{EF}+\overrightarrow{FG}={\color{#4A5D7A}\overrightarrow{EG}}$$

La somme de deux vecteurs partant du même sommet d'un parallélogramme est la diagonale issue de ce sommet.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Résoudre dans $\mathbb{R}$ l'inéquation, et donner l'ensemble des solutions sous forme d'intervalle :

$$-3x+4>19$$
---CORR---
On retranche $4$ à chaque membre :

$$-3x>15$$

On divise chaque membre par $-3$, ce qui change le sens de l'inégalité :

$$x<\dfrac{15}{-3} \qquad\text{soit}\qquad x<-5$$

$$S={\color{#4A5D7A}\left]-\infty\,;\,-5\right[}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Le prix d'un article connaît deux hausses successives de $10\,\%$.

Le taux d'évolution global associé est :

**A.** $+20\,\%$ &emsp; **B.** $+21\,\%$ &emsp; **C.** $+2\,\%$ &emsp; **D.** $+11\,\%$
---CORR---
Chaque hausse de $10\,\%$ correspond au coefficient multiplicateur $1+0{,}10=1{,}10$.

Deux hausses successives reviennent à multiplier deux fois de suite :

$$1{,}10\times 1{,}10=1{,}21$$

On revient au taux : $1{,}21=1+0{,}21$, donc l'évolution globale est une hausse de ${\color{#4A5D7A}21\,\%}$.

La réponse A additionne les taux, ce qui est faux : la seconde hausse porte sur un prix déjà augmenté.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Dans une classe de $30$ élèves, $18$ sont externes. On interroge un élève au hasard.

La probabilité qu'il soit externe est :

**A.** $0{,}6$ &emsp; **B.** $18$ &emsp; **C.** $0{,}4$ &emsp; **D.** $\dfrac{18}{12}$
---CORR---
Chaque élève a la même chance d'être interrogé : il y a équiprobabilité. La probabilité est donc le nombre de cas favorables divisé par l'effectif total.

$$P=\dfrac{18}{30}=\dfrac{3}{5}={\color{#4A5D7A}0{,}6}$$

La réponse C est la probabilité de l'événement contraire, et la réponse D divise par le nombre de non-externes au lieu de l'effectif total.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
