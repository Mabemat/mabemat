---
title: "Semaine 29 - Systèmes et positions relatives de droites"
layout: "automatismes-2nde"
auto_number: 29
weight: 29
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Résoudre le système suivant par substitution :

$$\begin{cases} y=2x-1 \\ 3x+y=9 \end{cases}$$
---CORR---
La première équation donne déjà $y$ en fonction de $x$ : on remplace $y$ par $2x-1$ dans la seconde.

$$3x+(2x-1)=9$$

On réduit puis on résout :

$$5x-1=9 \qquad\text{donc}\qquad 5x=10 \qquad\text{donc}\qquad x=2$$

On remonte dans la première équation pour obtenir $y$ :

$$y=2\times 2-1=3$$

$$S={\color{#4A5D7A}\lbrace (2\,;\,3)\rbrace}$$

Vérification dans la seconde équation : $3\times 2+3=9$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Résoudre le système suivant par combinaison linéaire :

$$\begin{cases} 2x+3y=13 \\ 2x-y=1 \end{cases}$$
---CORR---
Les deux équations ont le même coefficient devant $x$ : en les soustrayant, ce terme disparaît.

$$(2x+3y)-(2x-y)=13-1$$

$$2x+3y-2x+y=12 \qquad\text{soit}\qquad 4y=12 \qquad\text{donc}\qquad y=3$$

On remplace $y$ par $3$ dans la seconde équation :

$$2x-3=1 \qquad\text{donc}\qquad 2x=4 \qquad\text{donc}\qquad x=2$$

$$S={\color{#4A5D7A}\lbrace (2\,;\,3)\rbrace}$$

Attention au signe lors de la soustraction : $-(-y)=+y$.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Les droites $(d)\,:\ y=3x-5$ et $(d')\,:\ 6x-2y+7=0$ sont-elles parallèles ?
---CORR---
Pour comparer, il faut écrire les deux droites sous la même forme. On met $(d')$ sous forme réduite en isolant $y$ :

$$-2y=-6x-7 \qquad\text{donc}\qquad y=3x+3{,}5$$

Les deux droites ont le même coefficient directeur $3$, mais des ordonnées à l'origine différentes ($-5$ et $3{,}5$) :

$${\color{#4A5D7A}(d)\ \text{et}\ (d')\ \text{sont parallèles et distinctes}}$$

Si les ordonnées à l'origine avaient été égales, les droites auraient été confondues.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
On considère la série statistique suivante, rangée dans l'ordre croissant :

$$3\ ;\ 5\ ;\ 5\ ;\ 8\ ;\ 9\ ;\ 12\ ;\ 15\ ;\ 15$$

Déterminer sa médiane et sa moyenne.
---CORR---
La série compte $8$ valeurs, un effectif pair : la médiane est la moyenne des valeurs de rang $4$ et $5$.

$$\text{Médiane}=\dfrac{8+9}{2}={\color{#4A5D7A}8{,}5}$$

Pour la moyenne, on additionne toutes les valeurs et on divise par $8$ :

$$\dfrac{3+5+5+8+9+12+15+15}{8}=\dfrac{72}{8}={\color{#4A5D7A}9}$$

Moyenne et médiane sont deux indicateurs différents : ici la moyenne est tirée vers le haut par les deux valeurs $15$.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On lance un dé équilibré à six faces. La probabilité d'obtenir au moins $5$ est :

**A.** $\dfrac{1}{6}$ &emsp; **B.** $\dfrac{1}{3}$ &emsp; **C.** $\dfrac{5}{6}$ &emsp; **D.** $\dfrac{2}{3}$
---CORR---
« Au moins $5$ » signifie $5$ ou $6$ : l'événement compte $2$ issues favorables sur $6$ issues équiprobables.

$$P=\dfrac{2}{6}={\color{#4A5D7A}\dfrac{1}{3}}$$

La réponse A ne compte qu'une seule issue, en oubliant que $6$ est aussi « au moins $5$ ».

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Le nombre $\dfrac{\left(10^{3}\right)^{2}}{10^{-2}}$ est égal à :

**A.** $10^{4}$ &emsp; **B.** $10^{6}$ &emsp; **C.** $10^{8}$ &emsp; **D.** $10^{-8}$
---CORR---
Pour une puissance de puissance, on **multiplie** les exposants :

$$\left(10^{3}\right)^{2}=10^{3\times 2}=10^{6}$$

Pour un quotient de puissances de même base, on soustrait les exposants :

$$\dfrac{10^{6}}{10^{-2}}=10^{6-(-2)}=10^{6+2}={\color{#4A5D7A}10^{8}}$$

La réponse A additionne les exposants du carré au lieu de les multiplier, et la réponse B oublie le dénominateur.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Résoudre le système suivant par substitution :

$$\begin{cases} y=3x+2 \\ 2x+y=12 \end{cases}$$
---CORR---
La première équation donne déjà $y$ en fonction de $x$ : on remplace $y$ par $3x+2$ dans la seconde.

$$2x+(3x+2)=12$$

On réduit puis on résout :

$$5x+2=12 \qquad\text{donc}\qquad 5x=10 \qquad\text{donc}\qquad x=2$$

On remonte dans la première équation pour obtenir $y$ :

$$y=3\times 2+2=8$$

$$S={\color{#4A5D7A}\lbrace (2\,;\,8)\rbrace}$$

Vérification dans la seconde équation : $2\times 2+8=12$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Résoudre le système suivant par combinaison linéaire :

$$\begin{cases} 3x+2y=17 \\ 3x-y=5 \end{cases}$$
---CORR---
Les deux équations ont le même coefficient devant $x$ : en les soustrayant, ce terme disparaît.

$$(3x+2y)-(3x-y)=17-5$$

$$3x+2y-3x+y=12 \qquad\text{soit}\qquad 3y=12 \qquad\text{donc}\qquad y=4$$

On remplace $y$ par $4$ dans la seconde équation :

$$3x-4=5 \qquad\text{donc}\qquad 3x=9 \qquad\text{donc}\qquad x=3$$

$$S={\color{#4A5D7A}\lbrace (3\,;\,4)\rbrace}$$

Attention au signe lors de la soustraction : $-(-y)=+y$.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Les droites $(d)\,:\ y=4x-1$ et $(d')\,:\ 8x-2y+5=0$ sont-elles parallèles ?
---CORR---
Pour comparer, il faut écrire les deux droites sous la même forme. On met $(d')$ sous forme réduite en isolant $y$ :

$$-2y=-8x-5 \qquad\text{donc}\qquad y=4x+2{,}5$$

Les deux droites ont le même coefficient directeur $4$, mais des ordonnées à l'origine différentes ($-1$ et $2{,}5$) :

$${\color{#4A5D7A}(d)\ \text{et}\ (d')\ \text{sont parallèles et distinctes}}$$

Si les ordonnées à l'origine avaient été égales, les droites auraient été confondues.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
On considère la série statistique suivante, rangée dans l'ordre croissant :

$$2\ ;\ 5\ ;\ 7\ ;\ 9\ ;\ 11\ ;\ 13\ ;\ 16\ ;\ 17$$

Déterminer sa médiane et sa moyenne.
---CORR---
La série compte $8$ valeurs, un effectif pair : la médiane est la moyenne des valeurs de rang $4$ et $5$.

$$\text{Médiane}=\dfrac{9+11}{2}={\color{#4A5D7A}10}$$

Pour la moyenne, on additionne toutes les valeurs et on divise par $8$ :

$$\dfrac{2+5+7+9+11+13+16+17}{8}=\dfrac{80}{8}={\color{#4A5D7A}10}$$

Ici les deux indicateurs coïncident, ce qui traduit une série assez symétrique. Ce n'est pas toujours le cas.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On lance un dé équilibré à six faces. La probabilité d'obtenir au moins $3$ est :

**A.** $\dfrac{5}{6}$ &emsp; **B.** $\dfrac{1}{3}$ &emsp; **C.** $\dfrac{1}{2}$ &emsp; **D.** $\dfrac{2}{3}$
---CORR---
« Au moins $3$ » signifie $3$, $4$, $5$ ou $6$ : l'événement compte $4$ issues favorables sur $6$ issues équiprobables.

$$P=\dfrac{4}{6}={\color{#4A5D7A}\dfrac{2}{3}}$$

On peut aussi passer par l'événement contraire, « obtenir au plus $2$ », de probabilité $\dfrac{2}{6}=\dfrac{1}{3}$, puis calculer $1-\dfrac{1}{3}=\dfrac{2}{3}$.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Le nombre $\dfrac{\left(10^{4}\right)^{2}}{10^{-3}}$ est égal à :

**A.** $10^{11}$ &emsp; **B.** $10^{5}$ &emsp; **C.** $10^{8}$ &emsp; **D.** $10^{-11}$
---CORR---
Pour une puissance de puissance, on **multiplie** les exposants :

$$\left(10^{4}\right)^{2}=10^{4\times 2}=10^{8}$$

Pour un quotient de puissances de même base, on soustrait les exposants :

$$\dfrac{10^{8}}{10^{-3}}=10^{8-(-3)}=10^{8+3}={\color{#4A5D7A}10^{11}}$$

La réponse B additionne les exposants du carré au lieu de les multiplier, et la réponse C oublie le dénominateur.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
