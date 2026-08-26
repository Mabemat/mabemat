---
title: "Semaine 4 - Factorisation et expressions fractionnaires"
layout: "automatismes-2nde"
auto_number: 4
weight: 4
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Factoriser :

$$A=(2x+1)(x-3)+(2x+1)(4x+5)$$
---CORR---
Les deux termes de la somme contiennent le facteur commun $(2x+1)$. On le met en évidence :

$$A=(2x+1)\Bigl[(x-3)+(4x+5)\Bigr]$$

On réduit ensuite le contenu du crochet :

$$(x-3)+(4x+5)=x+4x-3+5=5x+2$$

D'où :

$$A={\color{#4A5D7A}(2x+1)(5x+2)}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Factoriser :

$$B=9x^2-30x+25$$
---CORR---
Trois termes, dont deux sont des carrés : on cherche l'identité remarquable $a^2-2ab+b^2=(a-b)^2$.

On écrit les carrés :

$$9x^2=(3x)^2 \qquad\text{et}\qquad 25=5^2$$

On vérifie le double produit :

$$2\times 3x\times 5=30x$$

C'est bien le terme du milieu, au signe près. Donc, avec $a=3x$ et $b=5$ :

$$B={\color{#4A5D7A}(3x-5)^2}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Soit $x$ un réel non nul. Écrire sous la forme d'un seul quotient :

$$C=\dfrac{3}{x}+\dfrac{x-2}{2x}$$
---CORR---
Le dénominateur commun est $2x$. On transforme la première fraction :

$$\dfrac{3}{x}=\dfrac{3{\color{#4A5D7A}\boldsymbol{\times 2}}}{x{\color{#4A5D7A}\boldsymbol{\times 2}}}=\dfrac{6}{2x}$$

On additionne les deux numérateurs :

$$C=\dfrac{6}{2x}+\dfrac{x-2}{2x}=\dfrac{6+x-2}{2x}={\color{#4A5D7A}\dfrac{x+4}{2x}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
On donne les intervalles $I=\left]-\infty\,;\,4\right[$ et $J=\left[-1\,;\,7\right]$.

Déterminer $I\cap J$.
---CORR---
On traduit par des inégalités : $x\in I$ signifie $x<4$, et $x\in J$ signifie $-1\leqslant x\leqslant 7$.

On place les deux intervalles sur une droite graduée, $I$ en bleu et $J$ en rouge :

<img src="/mabemat/images/automatismes/2nde/s04-q04.svg" alt="Droite graduée : I en bleu, J en rouge, leur intersection" style="display:block;margin:1rem auto;width:100%;max-width:560px;">

Un réel appartient à $I\cap J$ s'il vérifie les deux conditions à la fois, donc si $-1\leqslant x<4$. C'est la zone où les deux traits se superposent.

$$I\cap J={\color{#4A5D7A}\left[-1\,;\,4\right[}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Une simplification de $6x-\dfrac{x}{6}$ est :

**A.** $\dfrac{37}{6}x$ &emsp; **B.** $-\dfrac{35}{6}x$ &emsp; **C.** $\dfrac{35}{6}x$ &emsp; **D.** $\dfrac{5}{6}x$
---CORR---
Les deux termes contiennent $x$ : il s'agit d'une soustraction de fractions de dénominateur $6$.

$$6x=\dfrac{36x}{6}$$

Donc :

$$6x-\dfrac{x}{6}=\dfrac{36x}{6}-\dfrac{x}{6}=\dfrac{36x-x}{6}={\color{#4A5D7A}\dfrac{35}{6}x}$$

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
On donne la relation $7a+4y=3$. On cherche à isoler $a$. On a :

**A.** $a=\dfrac{3}{7}-4y$ &emsp; **B.** $a=\dfrac{4y-3}{7}$ &emsp; **C.** $a=-4y+3$ &emsp; **D.** $a=\dfrac{3-4y}{7}$
---CORR---
On isole d'abord le terme contenant $a$, en retranchant $4y$ dans chaque membre :

$$7a=3-4y$$

On divise ensuite chaque membre par $7$. Attention : c'est **tout** le membre de droite qui est divisé par $7$, d'où la barre de fraction qui englobe les deux termes.

$$a={\color{#4A5D7A}\dfrac{3-4y}{7}}$$

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Factoriser :

$$A=(3x-2)(x+4)+(3x-2)(2x-1)$$
---CORR---
Les deux termes de la somme contiennent le facteur commun $(3x-2)$. On le met en évidence :

$$A=(3x-2)\Bigl[(x+4)+(2x-1)\Bigr]$$

On réduit ensuite le contenu du crochet :

$$(x+4)+(2x-1)=x+2x+4-1=3x+3$$

D'où :

$$A={\color{#4A5D7A}(3x-2)(3x+3)}$$

On peut encore factoriser par $3$ le second facteur : $A=3(3x-2)(x+1)$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Factoriser :

$$B=4x^2+28x+49$$
---CORR---
Trois termes, dont deux sont des carrés : on cherche l'identité remarquable $a^2+2ab+b^2=(a+b)^2$.

On écrit les carrés :

$$4x^2=(2x)^2 \qquad\text{et}\qquad 49=7^2$$

On vérifie le double produit :

$$2\times 2x\times 7=28x$$

C'est bien le terme du milieu. Donc, avec $a=2x$ et $b=7$ :

$$B={\color{#4A5D7A}(2x+7)^2}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Soit $x$ un réel non nul. Écrire sous la forme d'un seul quotient :

$$C=\dfrac{5}{x}+\dfrac{x+3}{3x}$$
---CORR---
Le dénominateur commun est $3x$. On transforme la première fraction :

$$\dfrac{5}{x}=\dfrac{5{\color{#4A5D7A}\boldsymbol{\times 3}}}{x{\color{#4A5D7A}\boldsymbol{\times 3}}}=\dfrac{15}{3x}$$

On additionne les deux numérateurs :

$$C=\dfrac{15}{3x}+\dfrac{x+3}{3x}=\dfrac{15+x+3}{3x}={\color{#4A5D7A}\dfrac{x+18}{3x}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
On donne les intervalles $I=\left]-\infty\,;\,2\right]$ et $J=\left[-3\,;\,6\right[$.

Déterminer $I\cap J$.
---CORR---
On traduit par des inégalités : $x\in I$ signifie $x\leqslant 2$, et $x\in J$ signifie $-3\leqslant x<6$.

On place les deux intervalles sur une droite graduée, $I$ en bleu et $J$ en rouge :

<img src="/mabemat/images/automatismes/2nde/s04d-q04.svg" alt="Droite graduée : I en bleu, J en rouge, leur intersection" style="display:block;margin:1rem auto;width:100%;max-width:560px;">

Un réel appartient à $I\cap J$ s'il vérifie les deux conditions à la fois, donc si $-3\leqslant x\leqslant 2$. C'est la zone où les deux traits se superposent.

$$I\cap J={\color{#4A5D7A}\left[-3\,;\,2\right]}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Une simplification de $10x-\dfrac{x}{10}$ est :

**A.** $\dfrac{99}{10}x$ &emsp; **B.** $\dfrac{101}{10}x$ &emsp; **C.** $\dfrac{9}{10}x$ &emsp; **D.** $-\dfrac{99}{10}x$
---CORR---
Les deux termes contiennent $x$ : il s'agit d'une soustraction de fractions de dénominateur $10$.

$$10x=\dfrac{100x}{10}$$

Donc :

$$10x-\dfrac{x}{10}=\dfrac{100x}{10}-\dfrac{x}{10}=\dfrac{100x-x}{10}={\color{#4A5D7A}\dfrac{99}{10}x}$$

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
On donne la relation $5x-3c=2$. On cherche à isoler $x$. On a :

**A.** $x=\dfrac{2-3c}{5}$ &emsp; **B.** $x=\dfrac{2+3c}{5}$ &emsp; **C.** $x=\dfrac{2}{5}+3c$ &emsp; **D.** $x=2+3c$
---CORR---
On isole d'abord le terme contenant $x$, en ajoutant $3c$ dans chaque membre :

$$5x=2+3c$$

On divise ensuite chaque membre par $5$. Attention : c'est **tout** le membre de droite qui est divisé par $5$, d'où la barre de fraction qui englobe les deux termes.

$$x={\color{#4A5D7A}\dfrac{2+3c}{5}}$$

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
