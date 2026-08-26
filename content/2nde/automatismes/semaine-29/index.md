---
title: "Semaine 29 - Révisions : calcul, évolutions et fonctions"
layout: "automatismes-2nde"
auto_number: 29
weight: 29
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Calculer et donner le résultat sous forme d'une fraction irréductible :

$$A=\dfrac{5}{6}-\dfrac{2}{9}\times\dfrac{3}{4}$$
---CORR---
La multiplication est prioritaire sur la soustraction : on commence par elle.

$$\dfrac{2}{9}\times\dfrac{3}{4}=\dfrac{2\times 3}{9\times 4}=\dfrac{6}{36}=\dfrac{1}{6}$$

On effectue ensuite la soustraction, les deux fractions ayant déjà le même dénominateur :

$$A=\dfrac{5}{6}-\dfrac{1}{6}=\dfrac{4}{6}=\dfrac{2\times \cancel{2}}{3\times \cancel{2}}={\color{#4A5D7A}\dfrac{2}{3}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Un prix augmente de $25\,\%$, puis diminue de $12\,\%$.

Déterminer le taux d'évolution global, en pourcentage.
---CORR---
On multiplie les coefficients multiplicateurs :

$$1{,}25\times 0{,}88=1{,}1$$

Comme $1{,}1=1+0{,}1$, il s'agit d'une hausse de ${\color{#4A5D7A}10\,\%}$.

On note au passage que $25-12=13$ ne donne pas le bon résultat : les taux ne s'additionnent jamais.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x)=x^2-2x-3$.

**a.** Calculer $f(-2)$.

**b.** Vérifier que $3$ est un antécédent de $0$ par $f$.
---CORR---
**a.** On remplace $x$ par $-2$, entre parenthèses :

$$f(-2)=(-2)^2-2\times(-2)-3=4+4-3={\color{#4A5D7A}5}$$

**b.** Dire que $3$ est un antécédent de $0$ signifie que $f(3)=0$. On calcule :

$$f(3)=3^2-2\times 3-3=9-6-3={\color{#4A5D7A}0}$$

L'égalité est vérifiée : $3$ est bien un antécédent de $0$ par $f$.
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
Calculer et donner le résultat sous forme d'une fraction irréductible :

$$A=\dfrac{7}{10}-\dfrac{3}{8}\times\dfrac{4}{5}$$
---CORR---
La multiplication est prioritaire sur la soustraction : on commence par elle.

$$\dfrac{3}{8}\times\dfrac{4}{5}=\dfrac{3\times 4}{8\times 5}=\dfrac{12}{40}=\dfrac{3}{10}$$

On effectue ensuite la soustraction, les deux fractions ayant alors le même dénominateur :

$$A=\dfrac{7}{10}-\dfrac{3}{10}=\dfrac{4}{10}=\dfrac{2\times \cancel{2}}{5\times \cancel{2}}={\color{#4A5D7A}\dfrac{2}{5}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Un prix augmente de $20\,\%$, puis diminue de $25\,\%$.

Déterminer le taux d'évolution global, en pourcentage.
---CORR---
On multiplie les coefficients multiplicateurs :

$$1{,}20\times 0{,}75=0{,}9$$

Comme $0{,}9=1-0{,}1$, il s'agit d'une baisse de ${\color{#4A5D7A}10\,\%}$.

On note au passage que $20-25=-5$ ne donne pas le bon résultat : les taux ne s'additionnent jamais.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x)=x^2-4x+3$.

**a.** Calculer $f(-2)$.

**b.** Vérifier que $3$ est un antécédent de $0$ par $f$.
---CORR---
**a.** On remplace $x$ par $-2$, entre parenthèses :

$$f(-2)=(-2)^2-4\times(-2)+3=4+8+3={\color{#4A5D7A}15}$$

**b.** Dire que $3$ est un antécédent de $0$ signifie que $f(3)=0$. On calcule :

$$f(3)=3^2-4\times 3+3=9-12+3={\color{#4A5D7A}0}$$

L'égalité est vérifiée : $3$ est bien un antécédent de $0$ par $f$.
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
