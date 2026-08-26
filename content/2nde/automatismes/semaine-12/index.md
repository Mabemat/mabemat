---
title: "Semaine 12 - Variations et signe d'une fonction"
layout: "automatismes-2nde"
auto_number: 12
weight: 12
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Ci-dessous la courbe représentative d'une fonction $f$ définie sur $[-4\,;\,4]$.

<img src="/mabemat/images/automatismes/2nde/s12-q01.svg" alt="Courbe représentative de f sur [-4 ; 4]" style="display:block;margin:1rem auto;width:100%;max-width:420px;">

Résoudre graphiquement l'inéquation $f(x)\leqslant 0$.
---CORR---
Résoudre $f(x)\leqslant 0$, c'est chercher les abscisses des points de la courbe situés **sur ou en dessous** de l'axe des abscisses.

On repère d'abord les points où la courbe coupe cet axe : ils ont pour abscisses $-3$, $1$ et $3$.

La courbe est en dessous de l'axe entre $-4$ et $-3$, puis entre $1$ et $3$. Ailleurs, elle est au-dessus. Comme l'inégalité est large, les valeurs qui annulent $f$ sont incluses.

$$S={\color{#4A5D7A}\left[-4\,;\,-3\right]\cup\left[1\,;\,3\right]}$$

L'ensemble solution est fait d'abscisses, pas de hauteurs.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Avec la même courbe, combien l'équation $f(x)=1$ a-t-elle de solutions ?
---CORR---
On trace mentalement la droite horizontale d'équation $y=1$ et on compte ses points d'intersection avec la courbe.

Cette droite rencontre la courbe une fois sur la partie montante de gauche, une fois sur la partie descendante qui suit le sommet, et une fois sur la partie montante de droite.

L'équation $f(x)=1$ a donc ${\color{#4A5D7A}3}$ solutions.

Aucune de ces trois abscisses ne tombe sur une graduation : on ne demande pas de les lire, compter les intersections suffit.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Toujours avec la même courbe, dresser le tableau de variations de $f$ sur $[-4\,;\,4]$.
---CORR---
On parcourt la courbe de gauche à droite et on repère les endroits où elle change de sens.

Elle monte de $x=-4$ jusqu'à $x=-1$, où elle atteint son point le plus haut, à la hauteur $2$.

Elle descend ensuite de $x=-1$ jusqu'à $x=2$, où elle atteint son point le plus bas, à la hauteur $-1$.

Elle remonte enfin de $x=2$ jusqu'à $x=4$, où elle vaut $2$.

Aux deux bords : $f(-4)=-2$ et $f(4)=2$.

$$\begin{array}{cccccccc}
x & -4 & & -1 & & 2 & & 4 \\ \hline
f(x) & -2 & \nearrow & 2 & \searrow & -1 & \nearrow & 2
\end{array}$$

$f$ est ${\color{#4A5D7A}\text{croissante sur }[-4\,;\,-1]\text{, décroissante sur }[-1\,;\,2]\text{, croissante sur }[2\,;\,4]}$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Après une baisse de $15\,\%$, un article coûte $68$ €.

Quel était son prix avant la baisse ?
---CORR---
Une baisse de $15\,\%$ correspond au coefficient multiplicateur $1-0{,}15=0{,}85$. En notant $P$ le prix initial :

$$P\times 0{,}85=68$$

On divise par le coefficient multiplicateur :

$$P=\dfrac{68}{0{,}85}={\color{#4A5D7A}80}$$

Le prix avant la baisse était donc de $80$ €. Vérification : $80\times 0{,}85=68$.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On considère les trois nombres suivants :

$$A=0{,}62 \qquad B=\dfrac{58}{100} \qquad C=\dfrac{3}{5}$$

Le classement par ordre croissant est :

**A.** $C < B < A$ &emsp; **B.** $B < C < A$ &emsp; **C.** $A < B < C$ &emsp; **D.** $B < A < C$
---CORR---
Pour comparer, on écrit tout sous forme décimale.

$$B=\dfrac{58}{100}=0{,}58 \qquad C=\dfrac{3}{5}=\dfrac{6}{10}=0{,}6$$

On range ensuite les trois décimaux :

$$\begin{aligned}0{,}58 < 0{,}6 < 0{,}62 & \\ \text{c'est-à-dire}\quad {\color{#4A5D7A}B < C < A} &\end{aligned}$$

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Un sac contient $5$ jetons numérotés de $1$ à $5$. On en tire un au hasard.

La probabilité d'obtenir un numéro supérieur ou égal à $4$ est :

**A.** $\dfrac{1}{5}$ &emsp; **B.** $\dfrac{3}{5}$ &emsp; **C.** $\dfrac{2}{5}$ &emsp; **D.** $\dfrac{4}{5}$
---CORR---
Les jetons sont indiscernables : les $5$ issues sont équiprobables.

Les numéros supérieurs ou égaux à $4$ sont $4$ et $5$ : il y a $2$ cas favorables.

$$P={\color{#4A5D7A}\dfrac{2}{5}}$$

La réponse A ne compte que le jeton $5$, en oubliant que $4$ vérifie aussi « supérieur ou égal à $4$ ».

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Ci-dessous la courbe représentative d'une fonction $f$ définie sur $[-4\,;\,4]$.

<img src="/mabemat/images/automatismes/2nde/s12d-q01.svg" alt="Courbe représentative de f sur [-4 ; 4]" style="display:block;margin:1rem auto;width:100%;max-width:420px;">

Résoudre graphiquement l'inéquation $f(x)>0$.
---CORR---
Résoudre $f(x)>0$, c'est chercher les abscisses des points de la courbe situés **strictement au-dessus** de l'axe des abscisses.

On repère d'abord les points où la courbe coupe cet axe : ils ont pour abscisses $-2$, $0$ et $3$.

La courbe est au-dessus de l'axe entre $-2$ et $0$, puis à partir de $3$ jusqu'au bord droit du domaine. Ailleurs, elle est en dessous.

Comme l'inégalité est **stricte**, les valeurs qui annulent $f$ sont exclues : les crochets sont ouverts en $-2$, $0$ et $3$. En revanche $4$ est la borne du domaine, où la courbe est bien au-dessus de l'axe, donc ce crochet reste fermé.

$$S={\color{#4A5D7A}\left]-2\,;\,0\right[\cup\left]3\,;\,4\right]}$$

L'ensemble solution est fait d'abscisses, pas de hauteurs.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Avec la même courbe, résoudre graphiquement l'équation $f(x)=2$.
---CORR---
On trace mentalement la droite horizontale d'équation $y=2$ et on repère ses points d'intersection avec la courbe.

Cette droite est tangente au sommet de la première bosse, au point $(-1\,;\,2)$, et rencontre à nouveau la courbe à l'extrémité droite, au point $(4\,;\,2)$. Entre les deux, la courbe reste toujours en dessous de la hauteur $2$.

$$S={\color{#4A5D7A}\lbrace -1\,;\,4\rbrace}$$

Le sommet ne compte que pour une seule solution, même si la courbe y « touche » la droite sans la traverser.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Toujours avec la même courbe :

**a.** Sur quel intervalle $f$ est-elle décroissante ?

**b.** Donner le minimum de $f$ sur $[-4\,;\,4]$ et la valeur en laquelle il est atteint.
---CORR---
**a.** On cherche la portion de courbe qui descend quand on la parcourt de gauche à droite.

La courbe monte jusqu'à $x=-1$, puis descend jusqu'à $x=1$, puis remonte.

$$f\ \text{est décroissante sur }{\color{#4A5D7A}[-1\,;\,1]}$$

**b.** Le minimum est la plus petite valeur atteinte par $f$, c'est-à-dire l'ordonnée du point le plus bas de la courbe.

Ce point est le creux situé en $x=1$, à la hauteur $-2$. Il faut le comparer au bord gauche, où $f(-4)=-3$ : c'est ce bord qui est le plus bas.

$$\text{Le minimum de }f\ \text{vaut }{\color{#4A5D7A}-3}\text{, atteint en }{\color{#4A5D7A}x=-4}$$

Le minimum est une **ordonnée**, la valeur en laquelle il est atteint est une **abscisse** : il ne faut pas les intervertir.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Après une hausse de $12\,\%$, un article coûte $84$ €.

Quel était son prix avant la hausse ?
---CORR---
Une hausse de $12\,\%$ correspond au coefficient multiplicateur $1+0{,}12=1{,}12$. En notant $P$ le prix initial :

$$P\times 1{,}12=84$$

On divise par le coefficient multiplicateur :

$$P=\dfrac{84}{1{,}12}={\color{#4A5D7A}75}$$

Le prix avant la hausse était donc de $75$ €. Vérification : $75\times 1{,}12=84$.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On considère les trois nombres suivants :

$$A=0{,}48 \qquad B=\dfrac{51}{100} \qquad C=\dfrac{9}{20}$$

Le classement par ordre croissant est :

**A.** $A < C < B$ &emsp; **B.** $C < B < A$ &emsp; **C.** $B < A < C$ &emsp; **D.** $C < A < B$
---CORR---
Pour comparer, on écrit tout sous forme décimale.

$$\begin{aligned}B &= \dfrac{51}{100} \\ &= 0{,}51 \qquad C \\ &= \dfrac{9}{20} \\ &= \dfrac{45}{100} \\ &= 0{,}45\end{aligned}$$

On range ensuite les trois décimaux :

$$\begin{aligned}0{,}45 < 0{,}48 < 0{,}51 & \\ \text{c'est-à-dire}\quad {\color{#4A5D7A}C < A < B} &\end{aligned}$$

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Un sac contient $8$ jetons numérotés de $1$ à $8$. On en tire un au hasard.

La probabilité d'obtenir un numéro supérieur ou égal à $6$ est :

**A.** $\dfrac{3}{8}$ &emsp; **B.** $\dfrac{5}{8}$ &emsp; **C.** $\dfrac{1}{8}$ &emsp; **D.** $\dfrac{2}{8}$
---CORR---
Les jetons sont indiscernables : les $8$ issues sont équiprobables.

Les numéros supérieurs ou égaux à $6$ sont $6$, $7$ et $8$ : il y a $3$ cas favorables.

$$P={\color{#4A5D7A}\dfrac{3}{8}}$$

La réponse D oublie que $6$ vérifie aussi « supérieur ou égal à $6$ ».

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
