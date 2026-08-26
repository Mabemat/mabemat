---
title: "Semaine 3 - Intervalles et calcul littéral"
layout: "automatismes-2nde"
auto_number: 3
weight: 3
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
On donne les intervalles $I=\left]-4\,;\,3\right]$ et $J=\left[0\,;\,+\infty\right[$.

Déterminer $I\cap J$ puis $I\cup J$.
---CORR---
On traduit chaque intervalle par une inégalité : $x\in I$ signifie $-4 < x\leqslant 3$, et $x\in J$ signifie $x\geqslant 0$.

On place les deux intervalles sur une droite graduée, $I$ en bleu et $J$ en rouge :

<img src="/mabemat/images/automatismes/2nde/s03-q01.svg" alt="Droite graduée : I en bleu, J en rouge, leur intersection et leur réunion" style="display:block;margin:1rem auto;width:100%;max-width:560px;">

**Intersection** : les réels qui sont dans $I$ **et** dans $J$ vérifient à la fois $-4 < x\leqslant 3$ et $x\geqslant 0$, donc $0\leqslant x\leqslant 3$. C'est la zone où les deux traits se superposent.

$$I\cap J={\color{#4A5D7A}\left[0\,;\,3\right]}$$

**Réunion** : les réels qui sont dans $I$ **ou** dans $J$. Comme les deux intervalles se chevauchent (ils ont $\left[0\,;\,3\right]$ en commun), leur réunion est d'un seul tenant, de la plus petite borne à la plus grande.

$$I\cup J={\color{#4A5D7A}\left]-4\,;\,+\infty\right[}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Développer et réduire :

$$B=(2x-5)(3x+4)$$
---CORR---
On utilise la double distributivité : chaque terme de la première parenthèse multiplie chaque terme de la seconde.

$$B=2x\times 3x+2x\times 4+(-5)\times 3x+(-5)\times 4$$

$$B=6x^2+8x-15x-20$$

On réduit en regroupant les termes en $x$ :

$$B={\color{#4A5D7A}6x^2-7x-20}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Développer et réduire :

$$C=(3x+7)^2-(2x-1)(2x+1)$$
---CORR---
On reconnaît deux identités remarquables.

Pour la première, $(a+b)^2=a^2+2ab+b^2$ avec $a=3x$ et $b=7$ :

$$\begin{aligned}(3x+7)^2 &= (3x)^2+2\times 3x\times 7+7^2 \\ &= 9x^2+42x+49\end{aligned}$$

Pour la seconde, $(a-b)(a+b)=a^2-b^2$ avec $a=2x$ et $b=1$ :

$$(2x-1)(2x+1)=(2x)^2-1^2=4x^2-1$$

On soustrait, en faisant attention au signe devant la parenthèse :

$$\begin{aligned}C &= 9x^2+42x+49-\left(4x^2-1\right) \\ &= 9x^2+42x+49-4x^2+1\end{aligned}$$

$$C={\color{#4A5D7A}5x^2+42x+50}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
**a.** Traduire par un intervalle l'ensemble des réels $x$ tels que $x>-\dfrac{1}{2}$.

**b.** Le nombre $-0{,}5$ appartient-il à cet intervalle ?
---CORR---
**a.** L'inégalité est stricte, donc la borne $-\dfrac{1}{2}$ est exclue : crochet ouvert. Il n'y a pas de borne supérieure.

$$x\in{\color{#4A5D7A}\left]-\dfrac{1}{2}\,;\,+\infty\right[}$$

**b.** On a $-0{,}5=-\dfrac{1}{2}$ : c'est exactement la borne de l'intervalle. Comme le crochet est ouvert, cette borne n'appartient pas à l'intervalle.

$${\color{#4A5D7A}-0{,}5\notin\left]-\dfrac{1}{2}\,;\,+\infty\right[}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Une factorisation de $16x^2-49$ est :

**A.** $(16x+49)(16x-49)$ &emsp; **B.** $(4x-7)(4x+7)$ &emsp; **C.** $(4x-7)^2$ &emsp; **D.** $(16x+7)(16x-7)$
---CORR---
On reconnaît une différence de deux carrés, qui se factorise avec l'identité remarquable :

$$a^2-b^2=(a-b)(a+b)$$

Ici, il faut écrire chaque terme comme un carré :

$$16x^2=(4x)^2 \qquad\text{et}\qquad 49=7^2$$

On applique donc l'identité avec $a=4x$ et $b=7$ :

$$16x^2-49={\color{#4A5D7A}(4x-7)(4x+7)}$$

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
$p\,\%$ de $80$ est égal à $6$. On a :

**A.** $p=0{,}75$ &emsp; **B.** $p=13{,}3$ &emsp; **C.** $p=75$ &emsp; **D.** $p=7{,}5$
---CORR---
Prendre $p\,\%$ de $80$, c'est calculer $\dfrac{p}{100}\times 80$. On traduit l'énoncé par une égalité :

$$\dfrac{p}{100}\times 80=6$$

On isole $p$ :

$$\begin{aligned}p\times 80 &= 6\times 100 \\ \text{donc}\quad p &= \dfrac{600}{80}={\color{#4A5D7A}7{,}5}\end{aligned}$$

On vérifie : $7{,}5\,\%$ de $80$ vaut $\dfrac{7{,}5\times 80}{100}=\dfrac{600}{100}=6$.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
On donne les intervalles $I=\left[-2\,;\,5\right[$ et $J=\left]-\infty\,;\,1\right]$.

Déterminer $I\cap J$ puis $I\cup J$.
---CORR---
On traduit chaque intervalle par une inégalité : $x\in I$ signifie $-2\leqslant x<5$, et $x\in J$ signifie $x\leqslant 1$.

On place les deux intervalles sur une droite graduée, $I$ en bleu et $J$ en rouge :

<img src="/mabemat/images/automatismes/2nde/s03d-q01.svg" alt="Droite graduée : I en bleu, J en rouge, leur intersection et leur réunion" style="display:block;margin:1rem auto;width:100%;max-width:560px;">

**Intersection** : les réels qui sont dans $I$ **et** dans $J$ vérifient à la fois $-2\leqslant x<5$ et $x\leqslant 1$, donc $-2\leqslant x\leqslant 1$. C'est la zone où les deux traits se superposent.

$$I\cap J={\color{#4A5D7A}\left[-2\,;\,1\right]}$$

**Réunion** : les réels qui sont dans $I$ **ou** dans $J$. Comme les deux intervalles se chevauchent (ils ont $\left[-2\,;\,1\right]$ en commun), leur réunion est d'un seul tenant, de la plus petite borne à la plus grande.

$$I\cup J={\color{#4A5D7A}\left]-\infty\,;\,5\right[}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Développer et réduire :

$$B=(3x-2)(5x+3)$$
---CORR---
On utilise la double distributivité : chaque terme de la première parenthèse multiplie chaque terme de la seconde.

$$B=3x\times 5x+3x\times 3+(-2)\times 5x+(-2)\times 3$$

$$B=15x^2+9x-10x-6$$

On réduit en regroupant les termes en $x$ :

$$B={\color{#4A5D7A}15x^2-x-6}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Développer et réduire :

$$C=(2x+5)^2-(3x-2)(3x+2)$$
---CORR---
On reconnaît deux identités remarquables.

Pour la première, $(a+b)^2=a^2+2ab+b^2$ avec $a=2x$ et $b=5$ :

$$\begin{aligned}(2x+5)^2 &= (2x)^2+2\times 2x\times 5+5^2 \\ &= 4x^2+20x+25\end{aligned}$$

Pour la seconde, $(a-b)(a+b)=a^2-b^2$ avec $a=3x$ et $b=2$ :

$$(3x-2)(3x+2)=(3x)^2-2^2=9x^2-4$$

On soustrait, en faisant attention au signe devant la parenthèse :

$$\begin{aligned}C &= 4x^2+20x+25-\left(9x^2-4\right) \\ &= 4x^2+20x+25-9x^2+4\end{aligned}$$

$$C={\color{#4A5D7A}-5x^2+20x+29}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
**a.** Traduire par un intervalle l'ensemble des réels $x$ tels que $x\leqslant\dfrac{3}{4}$.

**b.** Le nombre $0{,}75$ appartient-il à cet intervalle ?
---CORR---
**a.** L'inégalité est large, donc la borne $\dfrac{3}{4}$ est incluse : crochet fermé. Il n'y a pas de borne inférieure.

$$x\in{\color{#4A5D7A}\left]-\infty\,;\,\dfrac{3}{4}\right]}$$

**b.** On a $0{,}75=\dfrac{3}{4}$ : c'est exactement la borne de l'intervalle. Comme le crochet est fermé, cette borne appartient à l'intervalle.

$${\color{#4A5D7A}0{,}75\in\left]-\infty\,;\,\dfrac{3}{4}\right]}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Une factorisation de $25x^2-64$ est :

**A.** $(25x+8)(25x-8)$ &emsp; **B.** $(5x-8)^2$ &emsp; **C.** $(5x-8)(5x+8)$ &emsp; **D.** $(25x+64)(25x-64)$
---CORR---
On reconnaît une différence de deux carrés, qui se factorise avec l'identité remarquable :

$$a^2-b^2=(a-b)(a+b)$$

Ici, il faut écrire chaque terme comme un carré :

$$25x^2=(5x)^2 \qquad\text{et}\qquad 64=8^2$$

On applique donc l'identité avec $a=5x$ et $b=8$ :

$$25x^2-64={\color{#4A5D7A}(5x-8)(5x+8)}$$

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
$p\,\%$ de $150$ est égal à $9$. On a :

**A.** $p=6$ &emsp; **B.** $p=60$ &emsp; **C.** $p=1{,}5$ &emsp; **D.** $p=0{,}6$
---CORR---
Prendre $p\,\%$ de $150$, c'est calculer $\dfrac{p}{100}\times 150$. On traduit l'énoncé par une égalité :

$$\dfrac{p}{100}\times 150=9$$

On isole $p$ :

$$\begin{aligned}p\times 150 &= 9\times 100 \\ \text{donc}\quad p &= \dfrac{900}{150}={\color{#4A5D7A}6}\end{aligned}$$

On vérifie : $6\,\%$ de $150$ vaut $\dfrac{6\times 150}{100}=\dfrac{900}{100}=9$.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
