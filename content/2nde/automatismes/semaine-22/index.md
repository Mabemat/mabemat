---
title: "Semaine 22"
auto_number: 22
weight: 22
layout: automatismes-2nde
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Soit $f$ la fonction définie sur $\mathbb{R}$ par : $f(x) = -3x^2 + 2x - 9$.

On note $\mathscr{C}_f$ la courbe représentative de $f$ dans un repère.

Le point $A(5\,;\,-75)$ appartient-il à $\mathscr{C}_f$ ? Justifier.
---CORR---
On calcule $f(5)$ :

$$f(5) = -3 \times 5^2 + 2 \times 5 - 9 = -75 + 10 - 9 = -74 \neq -75$$

L'image de $5$ par $f$ n'est pas $-75$, donc **le point $A$ n'appartient pas à $\mathscr{C}_f$**.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
On donne ci-dessous le tableau de variations d'une fonction $f$ *(voir le livret)* :

| $x$ | $-3$ | | $-1$ | | $3$ | | $8$ |
|---|---|---|---|---|---|---|---|
| $f(x)$ | $4$ | $\nearrow$ | $10$ | $\searrow$ | $-15$ | $\nearrow$ | $-14$ |

Comparer si possible : $f(-2)$ et $f(7)$.
---CORR---
$-2 \in [-3\,;\,-1]$ donc $4 < f(-2) < 10$.

$7 \in [3\,;\,8]$ donc $-15 < f(7) < -14$.

$f(-2)$ est compris entre $4$ et $10$, $f(7)$ est compris entre $-15$ et $-14$, donc :

$$\boxed{f(-2) > f(7)}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Dans un repère orthonormé $(O\,;\,I,J)$, on donne les points $T(10\,;\,1)$ et $U(-4\,;\,-3)$.

Calculer la distance $TU$.
---CORR---
On applique la formule de la distance :

$$TU = \sqrt{(x_U - x_T)^2 + (y_U - y_T)^2} = \sqrt{(-4-10)^2 + (-3-1)^2}$$

$$TU = \sqrt{196 + 16} = \sqrt{212} = \boxed{2\sqrt{53}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Dans un repère $(O\,;\,\vec{i},\vec{j})$, on considère les points $J(2\,;\,-10)$, $K(10\,;\,3)$ et $L(-2\,;\,0)$.

Déterminer les coordonnées du point $M$ tel que $JKLM$ soit un parallélogramme.
---CORR---
$JKLM$ est un parallélogramme si et seulement si $\overrightarrow{JK} = \overrightarrow{ML}$.

$\overrightarrow{JK} = \binom{10-2}{3-(-10)} = \binom{8}{13}$

En notant $M(x\,;\,y)$ : $\overrightarrow{ML} = \binom{-2-x}{0-y}$

$$\begin{cases}-2-x = 8 \\ -y = 13\end{cases} \implies \begin{cases}x = -10 \\ y = -13\end{cases}$$

$$\boxed{M(-10\,;\,-13)}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Le prix d'un article subit une baisse de $60\,\%$ puis une hausse de $63\,\%$.

Déterminer le taux d'évolution global du prix de cet article.
---CORR---
Baisser de $60\,\%$ : $CM_1 = 1 - 0{,}60 = 0{,}4$

Augmenter de $63\,\%$ : $CM_2 = 1 + 0{,}63 = 1{,}63$

Coefficient multiplicateur global : $CM = 0{,}4 \times 1{,}63 = 0{,}652$

Taux global : $T = 0{,}652 - 1 = -0{,}348$

$$\boxed{\text{Baisse globale de } 34{,}8\,\%}$$
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Soit $f$ la fonction définie sur $\mathbb{R}$ par : $f(x) = -8x^2 + 7x - 2$.

On note $\mathscr{C}_f$ la courbe représentative de $f$ dans un repère.

Le point $A(-1\,;\,-18)$ appartient-il à $\mathscr{C}_f$ ? Justifier.
---CORR---
On calcule $f(-1)$ :

$$f(-1) = -8 \times (-1)^2 + 7 \times (-1) - 2 = -8 - 7 - 2 = -17 \neq -18$$

L'image de $-1$ par $f$ n'est pas $-18$, donc **le point $A$ n'appartient pas à $\mathscr{C}_f$**.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
On donne ci-dessous le tableau de variations d'une fonction $f$ *(voir le livret)* :

| $x$ | $-2$ | | $2$ | | $6$ | | $9$ |
|---|---|---|---|---|---|---|---|
| $f(x)$ | $-2$ | $\searrow$ | $-15$ | $\nearrow$ | $-1$ | $\searrow$ | $-14$ |

Comparer si possible : $f(-1)$ et $f(7)$.
---CORR---
$-1 \in [-2\,;\,2]$ donc $-15 < f(-1) < -2$.

$7 \in [6\,;\,9]$ donc $-14 < f(7) < -1$.

Les deux encadrements ne permettent pas de déterminer lequel est le plus grand.

$$\boxed{\text{On ne peut pas comparer } f(-1) \text{ et } f(7).}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Dans un repère orthonormé $(O\,;\,I,J)$, on donne les points $S(-8\,;\,-10)$ et $T(-3\,;\,4)$.

Calculer la distance $ST$.
---CORR---
$$ST = \sqrt{(-3-(-8))^2 + (4-(-10))^2} = \sqrt{5^2 + 14^2} = \sqrt{25 + 196}$$

$$\boxed{ST = \sqrt{221}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Dans un repère $(O\,;\,\vec{i},\vec{j})$, on considère les points $S(6\,;\,-8)$, $T(-3\,;\,3)$ et $U(-5\,;\,-10)$.

Déterminer les coordonnées du point $V$ tel que $STUV$ soit un parallélogramme.
---CORR---
$STUV$ est un parallélogramme si et seulement si $\overrightarrow{ST} = \overrightarrow{VU}$.

$\overrightarrow{ST} = \binom{-3-6}{3-(-8)} = \binom{-9}{11}$

En notant $V(x\,;\,y)$ : $\overrightarrow{VU} = \binom{-5-x}{-10-y}$

$$\begin{cases}-5-x = -9 \\ -10-y = 11\end{cases} \implies \begin{cases}x = 4 \\ y = -21\end{cases}$$

$$\boxed{V(4\,;\,-21)}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Le prix d'un article subit une hausse de $57\,\%$ puis une baisse de $1\,\%$.

Déterminer le taux d'évolution global du prix de cet article.
---CORR---
Augmenter de $57\,\%$ : $CM_1 = 1{,}57$

Baisser de $1\,\%$ : $CM_2 = 0{,}99$

$CM = 1{,}57 \times 0{,}99 = 1{,}554\,3$

Taux global : $T = 1{,}554\,3 - 1 = 0{,}554\,3$

$$\boxed{\text{Hausse globale de } 55{,}43\,\%}$$
{{< /auto2-exo >}}

{{< /auto2-seance >}}
