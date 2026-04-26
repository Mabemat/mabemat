---
title: "Semaine 25 — Probabilités conditionnelles et algèbre"
layout: "automatismes-1re"
level: "1re"
auto_number: 25
weight: 25
---

<div class="qcm-container" data-no-score="true">

<div style="background:#eef0ec;border-left:5px solid #819171;padding:0.7rem 1.2rem;margin-bottom:1.5rem;border-radius:0 6px 6px 0;font-size:1.05rem;font-weight:700;color:#3d4636;">
Séance 25 — Probabilités conditionnelles et algèbre
</div>

{{< qcm correct="3" type="auto" >}}
---Q---
On donne l'arbre de probabilités ci-dessous :
<img src="p05_3.svg" alt="Graphe" style="display:block;margin:1rem auto;max-width:360px">
$P_C(A)=\ldots$

- $\dfrac{2}{5} $
- $\dfrac{1}{3}$
- $\dfrac{4}{5} $
- $\dfrac{2}{3} $

---CORR---
On sait que $ P_C(A)=\dfrac{P(A \cap C)}{P(C)}$

D'après la formule des probabilités totales :

$$\begin{aligned}
P(C)&=p(A\cap C)+p(\bar A \cap C)\\
&=P(A)\times P_A(C)+P(\bar A)\times P_{\bar A}(C)\\
&=\dfrac{1}{2}\times \dfrac{4}{5}+\dfrac{1}{2}\times \dfrac{2}{5}\\
&=\dfrac{2}{5}+\dfrac{1}{5}\\
&=\dfrac{3}{5}
\end{aligned}$$

 Et donc : 
$$\begin{aligned}
    P_C(A)&=\dfrac{P(A \cap C)}{P(C)}\\
    &=\dfrac{P(A)\times P_A(C)}{P(C)}\\
    &=\dfrac{\dfrac{2}{5}}{\dfrac{3}{5}}\\
    &=\dfrac{2}{3}
     \end{aligned}$$
La bonne réponse est la réponse <span class="rep">D</span>.
{{< /qcm >}}

{{< qcm correct="0" type="auto" >}}
---Q---
Une augmentation de $10$ %  d'un article entraîne une augmentation du prix de $24$ €.

 Le prix de cet article avant l’augmentation est :

- $240$ €
- $21{,}6$ €
- $26{,}4$ €
- $34$ €

---CORR---
$10\,$ % du prix représente $24$ €, donc $100$ % du prix représente $10$ fois plus que $24$ € (car $10\times 10=100$).

Le prix de l'article était donc : $10\times24=240$ €.

La bonne réponse est la réponse <span class="rep">A</span>.
{{< /qcm >}}

{{< qcm correct="3" type="auto" >}}
---Q---
Voici la représentation graphique d'une fonction $f$  définie sur $\mathbb{R}$ par $f(x)=ax^2+b$.
 <img src="f02_12.svg" alt="Graphe" style="display:block;margin:1rem auto;max-width:360px">
À partir de cette représentation graphique, on a :

- $a=-2$ et $b=-2$
- $a=3{,}5$ et $b=-2$
- $a=3$ et $b=2$
- $a=3$ et $b=-2$

---CORR---
La valeur de $b$ est donnée par l'image de $0$ par $f$ (ordonnée du point d'intersection entre la courbe et l'axe des ordonnées).

Ainsi, $b=-2$.

La valeur de $a$ s'obtient (par exemple) grâce à l'image de $1$ par la fonction $f$.

On lit $f(1)=1$. 

D'où, $a\times 1^2-2=1$, soit $a=3$.

Ainsi, $f(x)=3x^2-2$.


La bonne réponse est la réponse <span class="rep">D</span>.
{{< /qcm >}}

{{< qcm correct="3" type="auto" >}}
---Q---
Soit $x$ un réel.

À quelle expression est égale $-4(x+4)^2+2$ ?

- $-4x^2 -32x-66$
- $-4x^2 -16x-62$
- $-4x^2 +32x-62$
- $-4x^2 -32x-62$

---CORR---
On développe l'expression de l'énoncé.

$$\begin{aligned}
    -4(x+4)^2+2&=-4\left(x^2 +8x+16\right)+2\\
    &=-4x^2 -32x-64 +2\\
        &=-4x^2 -32x-62\\
          \end{aligned}$$
          
La bonne réponse est la réponse <span class="rep">D</span>.
{{< /qcm >}}

{{< qcm correct="1" type="auto" >}}
---Q---
On a représenté ci-contre une droite $D$.

Parmi les quatre équations ci-dessous, la seule susceptible d'être représentée par la droite $D$ est :

<img src="f07_6.svg" alt="Graphe" style="display:block;margin:1rem auto;max-width:360px">

- $y=x^2-(x+1)^2+4$
- $y=3x+3$
- $y=-3x+3$
- $6x+2y-6=0$

---CORR---
On observe sur le graphique que le coefficient directeur est positif ($D$ représente une fonction affine croissante) et que l'ordonnée à l'origine est strictement positive ($D$ coupe l'axe des ordonnées au-dessus de l'origine).

On écrit les équations qui ne sont pas forme réduite, sous forme réduite :

• $y=3x+3$ est  sous forme réduite.<br>
• $y=-3x+3$ est  sous forme réduite.<br>
• $6x+2y-6=0$ s'écrit $y=-3x+3$.<br>
• $y=x^2-(x+1)^2+4$ s'écrit $y=-2x+3$.<br>

La seule équation ayant un coefficient directeur positif et une ordonnée à l'origine positive est : $y=3x+3$.<br>
La bonne réponse est la réponse <span class="rep">B</span>.
{{< /qcm >}}

{{< qcm correct="0" type="auto" >}}
---Q---
Quelle est l'écriture décimale du nombre dont l'écriture scientifique est $2{,}14\times 10^{-3}$ ?

- $0{,}002\,14$
- $0{,}021\,4$
- $0{,}000\,214$
- $2\,140$

---CORR---
Multiplier par  $10^{-3}$ revient à multiplier par $0{,}001$,  donc l'écriture décimale de $2{,}14\times 10^{-3}$ est : $0{,}002\,14$.

La bonne réponse est la réponse <span class="rep">A</span>.
{{< /qcm >}}

</div>

<div class="qcm-container" data-mode="devoir" style="margin-top:2.5rem;">

<div style="background:#f4f5f1;border-left:4px solid #c5ccbc;padding:0.7rem 1.2rem;margin-bottom:1.5rem;border-radius:0 6px 6px 0;font-size:1.05rem;font-weight:700;color:#3d4636;">
Devoirs — Séance 25 — Probabilités conditionnelles et algèbre
</div>

{{< qcm correct="1" type="auto" >}}
---Q---
On donne l'arbre de probabilités ci-dessous :
<img src="p05_3_devoir.svg" alt="Graphe" style="display:block;margin:1rem auto;max-width:360px">
$P_C(A)=\ldots$

- $\dfrac{1}{2}$
- $\dfrac{5}{8} $
- $\dfrac{7}{20} $
- $\dfrac{1}{2} $

{{< /qcm >}}

{{< qcm correct="3" type="auto" >}}
---Q---
Parmi les $2\,000$ logements que compte une ville, $10\,$ %   sont des maisons et $80\,$ %  de celles-ci sont des T2.


  Le nombre de maisons de type T2 dans cette ville est :

- $1\,600$
- $16$
- $1\,910$
- $160$

{{< /qcm >}}

{{< qcm correct="1" type="auto" >}}
---Q---
Voici la représentation graphique d'une fonction $f$  définie sur $\mathbb{R}$ par $f(x)=ax^2+b$.
<img src="f02_12_devoir.svg" alt="Graphe" style="display:block;margin:1rem auto;max-width:360px">
À partir de cette représentation graphique, on a :

- $a=2$ et $b=2$
- $a=3{,}5$ et $b=2$
- $a=3{,}5$ et $b=-2$
- $a=-3{,}5$ et $b=2$

{{< /qcm >}}

{{< qcm correct="2" type="auto" >}}
---Q---
Soit $x$ un réel.

À quelle expression est égale $-4(x+2)^2-1$ ?

- $-4x^2 -8x-17$
- $-4x^2 -16x-15$
- $-4x^2 -16x-17$
- $-4x^2 +16x-17$

{{< /qcm >}}

{{< qcm correct="3" type="auto" >}}
---Q---
On a représenté ci-contre une droite $D$.

Parmi les quatre équations ci-dessous, la seule susceptible d'être représentée par la droite $D$ est :

    <img src="f07_6_devoir.svg" alt="Graphe" style="display:block;margin:1rem auto;max-width:360px">

- $y=3x-2$
- $6x-2y-4=0$
- $y=x^2-(x-2)^2+2$
- $y=-3x-2$

{{< /qcm >}}

{{< qcm correct="0" type="auto" >}}
---Q---
Quelle est l'écriture décimale du nombre dont l'écriture scientifique est $9{,}41\times 10^{-4}$ ?

- $0{,}000\,941$
- $0{,}000\,094\,1$
- $94\,100$
- $0{,}009\,41$

{{< /qcm >}}

</div>
