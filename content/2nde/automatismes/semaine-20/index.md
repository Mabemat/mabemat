---
title: "Semaine 20 - Repère orthonormé et fonction carrée"
layout: "automatismes-2nde"
auto_number: 20
weight: 20
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Dans un repère orthonormé, on donne $A(1\,;\,-1)$, $B(7\,;\,1)$ et $C(0\,;\,2)$.

Démontrer que le triangle $ABC$ est rectangle en $A$.
---CORR---
On calcule les carrés des trois longueurs, avec $XY^2=(x_Y-x_X)^2+(y_Y-y_X)^2$. Travailler avec les carrés évite toutes les racines.

$$\begin{aligned}AB^2 &= (7-1)^2+(1-(-1))^2 \\ &= 6^2+2^2 \\ &= 36+4 \\ &= 40\end{aligned}$$

$$\begin{aligned}AC^2 &= (0-1)^2+(2-(-1))^2 \\ &= (-1)^2+3^2 \\ &= 1+9 \\ &= 10\end{aligned}$$

$$\begin{aligned}BC^2 &= (0-7)^2+(2-1)^2 \\ &= (-7)^2+1^2 \\ &= 49+1 \\ &= 50\end{aligned}$$

Le plus grand est $BC^2$ : si le triangle est rectangle, c'est en $A$, le sommet opposé à $[BC]$.

$$AB^2+AC^2=40+10=50=BC^2$$

D'après la réciproque du théorème de Pythagore, le triangle $ABC$ est ${\color{#4A5D7A}\text{rectangle en }A}$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Soit $f$ la fonction carrée, définie sur $\mathbb{R}$ par $f(x)=x^2$.

**a.** Calculer $f(-7)$ et $f(0{,}5)$.

**b.** Le point $A\,(-3\,;\,9)$ appartient-il à la parabole représentant $f$ ?
---CORR---
**a.** On remplace $x$ par la valeur demandée, entre parenthèses :

$$\begin{aligned}f(-7) &= (-7)^2 \\ &= {\color{#4A5D7A}49} \qquad f(0{,}5) \\ &= 0{,}5^2 \\ &= {\color{#4A5D7A}0{,}25}\end{aligned}$$

Le carré d'un nombre négatif est positif, et le carré d'un nombre entre $0$ et $1$ est plus petit que lui.

**b.** Un point appartient à la courbe si son ordonnée est l'image de son abscisse. On calcule donc $f(-3)$ :

$$f(-3)=(-3)^2=9$$

C'est bien l'ordonnée de $A$, donc ${\color{#4A5D7A}A\ \text{appartient à la parabole}}$.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Ranger dans l'ordre croissant les nombres suivants :

$$(-3)^2 \qquad 2^2 \qquad (-1{,}5)^2$$
---CORR---
On calcule chaque carré. Le carré d'un nombre négatif est positif :

$$\begin{aligned}(-3)^2 &= 9 \qquad 2^2 \\ &= 4 \qquad (-1{,}5)^2 \\ &= 2{,}25\end{aligned}$$

On range ensuite les résultats :

$${\color{#4A5D7A}(-1{,}5)^2<2^2<(-3)^2}$$

On remarque que l'ordre des carrés n'est pas celui des nombres de départ : la fonction carrée n'est pas croissante sur $\mathbb{R}$ tout entier. Elle est décroissante sur $\left]-\infty\,;\,0\right]$ et croissante sur $\left[0\,;\,+\infty\right[$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Écrire sous la forme $3^n$, où $n$ est un entier relatif :

$$A=\dfrac{3^{5}\times 3^{-2}}{3^{4}}$$
---CORR---
On regroupe d'abord le numérateur, avec $a^m\times a^n=a^{m+n}$ :

$$3^{5}\times 3^{-2}=3^{5+(-2)}=3^{3}$$

On divise ensuite, avec $\dfrac{a^m}{a^n}=a^{m-n}$ :

$$A=\dfrac{3^{3}}{3^{4}}=3^{3-4}={\color{#4A5D7A}3^{-1}}$$

Vérification : $3^{-1}=\dfrac{1}{3}$, et $\dfrac{243\times\frac{1}{9}}{81}=\dfrac{27}{81}=\dfrac{1}{3}$.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Combien de solutions réelles possède l'équation $6=-x^2+31$ ?

**A.** $0$ solution &emsp; **B.** $1$ solution &emsp; **C.** $2$ solutions &emsp; **D.** une infinité de solutions
---CORR---
On isole $x^2$. On ajoute $x^2$ à chaque membre, puis on retranche $6$ :

$$x^2+6=31 \qquad\text{donc}\qquad x^2=25$$

Comme $25$ est strictement positif, l'équation admet deux solutions opposées, $-5$ et $5$.

Il y a donc ${\color{#4A5D7A}2}$ solutions.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
L'opération qui permet de calculer $35\,\%$ de $420$ est :

**A.** $\dfrac{35+420}{100}$ &emsp; **B.** $\dfrac{35\times 420}{100}$ &emsp; **C.** $35\times 420$ &emsp; **D.** $\dfrac{420\times 100}{35}$
---CORR---
Prendre $35\,\%$ d'une quantité, c'est la multiplier par la fraction $\dfrac{35}{100}$ :

$$\dfrac{35}{100}\times 420={\color{#4A5D7A}\dfrac{35\times 420}{100}}$$

La réponse D correspondrait à la question inverse (« $420$ est $35\,\%$ de quel nombre ? ») et la réponse C oublie la division par $100$, ce qui donnerait un résultat cent fois trop grand.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Dans un repère orthonormé, on donne $A(-2\,;\,3)$, $B(2\,;\,1)$ et $C(4\,;\,5)$.

Démontrer que le triangle $ABC$ est rectangle et isocèle en $B$.
---CORR---
On calcule les carrés des trois longueurs, avec $XY^2=(x_Y-x_X)^2+(y_Y-y_X)^2$. Travailler avec les carrés évite toutes les racines.

$$\begin{aligned}BA^2 &= (-2-2)^2+(3-1)^2 \\ &= (-4)^2+2^2 \\ &= 16+4 \\ &= 20\end{aligned}$$

$$\begin{aligned}BC^2 &= (4-2)^2+(5-1)^2 \\ &= 2^2+4^2 \\ &= 4+16 \\ &= 20\end{aligned}$$

$$\begin{aligned}AC^2 &= (4-(-2))^2+(5-3)^2 \\ &= 6^2+2^2 \\ &= 36+4 \\ &= 40\end{aligned}$$

Comme $BA^2=BC^2$, les deux longueurs sont égales : le triangle est ${\color{#4A5D7A}\text{isocèle en }B}$.

Le plus grand carré est $AC^2$, et :

$$BA^2+BC^2=20+20=40=AC^2$$

D'après la réciproque du théorème de Pythagore, le triangle est aussi ${\color{#4A5D7A}\text{rectangle en }B}$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Soit $f$ la fonction carrée, définie sur $\mathbb{R}$ par $f(x)=x^2$.

**a.** Calculer $f(-1{,}5)$ et $f(6)$.

**b.** Le point $B\,(4\,;\,-16)$ appartient-il à la parabole représentant $f$ ?
---CORR---
**a.** On remplace $x$ par la valeur demandée, entre parenthèses :

$$\begin{aligned}f(-1{,}5) &= (-1{,}5)^2 \\ &= {\color{#4A5D7A}2{,}25} \qquad f(6) \\ &= 6^2 \\ &= {\color{#4A5D7A}36}\end{aligned}$$

Le carré d'un nombre négatif est positif : $f(-1{,}5)$ n'est pas $-2{,}25$.

**b.** Un point appartient à la courbe si son ordonnée est l'image de son abscisse. On calcule donc $f(4)$ :

$$f(4)=4^2=16 \neq -16$$

Donc ${\color{#4A5D7A}B\ \text{n'appartient pas à la parabole}}$. On pouvait conclure sans calcul : un carré n'est jamais négatif, aucun point de la parabole n'a une ordonnée négative.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Ranger dans l'ordre croissant les nombres suivants :

$$(-4)^2 \qquad 3^2 \qquad (-2{,}5)^2$$
---CORR---
On calcule chaque carré. Le carré d'un nombre négatif est positif :

$$\begin{aligned}(-4)^2 &= 16 \qquad 3^2 \\ &= 9 \qquad (-2{,}5)^2 \\ &= 6{,}25\end{aligned}$$

On range ensuite les résultats :

$${\color{#4A5D7A}(-2{,}5)^2<3^2<(-4)^2}$$

On remarque que l'ordre des carrés n'est pas celui des nombres de départ : la fonction carrée n'est pas croissante sur $\mathbb{R}$ tout entier. Elle est décroissante sur $\left]-\infty\,;\,0\right]$ et croissante sur $\left[0\,;\,+\infty\right[$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Écrire sous la forme $5^n$, où $n$ est un entier relatif :

$$A=\dfrac{5^{-3}\times 5^{6}}{5^{5}}$$
---CORR---
On regroupe d'abord le numérateur, avec $a^m\times a^n=a^{m+n}$ :

$$5^{-3}\times 5^{6}=5^{-3+6}=5^{3}$$

On divise ensuite, avec $\dfrac{a^m}{a^n}=a^{m-n}$ :

$$A=\dfrac{5^{3}}{5^{5}}=5^{3-5}={\color{#4A5D7A}5^{-2}}$$

Vérification : $5^{-2}=\dfrac{1}{25}$, et $\dfrac{125}{3125}=\dfrac{1}{25}$.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Combien de solutions réelles possède l'équation $9=-x^2+58$ ?

**A.** $2$ solutions &emsp; **B.** $1$ solution &emsp; **C.** $0$ solution &emsp; **D.** une infinité de solutions
---CORR---
On isole $x^2$. On ajoute $x^2$ à chaque membre, puis on retranche $9$ :

$$x^2+9=58 \qquad\text{donc}\qquad x^2=49$$

Comme $49$ est strictement positif, l'équation admet deux solutions opposées, $-7$ et $7$.

Il y a donc ${\color{#4A5D7A}2}$ solutions.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
L'opération qui permet de calculer $45\,\%$ de $260$ est :

**A.** $\dfrac{260\times 100}{45}$ &emsp; **B.** $\dfrac{45+260}{100}$ &emsp; **C.** $45\times 260$ &emsp; **D.** $\dfrac{45\times 260}{100}$
---CORR---
Prendre $45\,\%$ d'une quantité, c'est la multiplier par la fraction $\dfrac{45}{100}$ :

$$\dfrac{45}{100}\times 260={\color{#4A5D7A}\dfrac{45\times 260}{100}}$$

La réponse A correspondrait à la question inverse (« $260$ est $45\,\%$ de quel nombre ? ») et la réponse C oublie la division par $100$, ce qui donnerait un résultat cent fois trop grand.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
