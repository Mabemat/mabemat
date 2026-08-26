---
title: "Semaine 16 - Fonctions affines, puissances et notation scientifique"
layout: "automatismes-2nde"
auto_number: 16
weight: 16
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Écrire sous la forme $2^n$, où $n$ est un entier relatif :

$$A=\dfrac{2^{7}\times 2^{-3}}{2^{-2}}$$
---CORR---
On utilise deux règles : pour un produit de puissances de même base, on additionne les exposants ; pour un quotient, on les soustrait.

Au numérateur :

$$2^{7}\times 2^{-3}=2^{7+(-3)}=2^{4}$$

Puis le quotient :

$$A=\dfrac{2^{4}}{2^{-2}}=2^{4-(-2)}=2^{4+2}={\color{#4A5D7A}2^{6}}$$

Attention à la double soustraction : $4-(-2)=4+2=6$. On peut vérifier : $2^6=64$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Déterminer la fonction affine $f$ telle que $f(2)=1$ et $f(5)=10$.
---CORR---
Une fonction affine s'écrit $f(x)=mx+p$. On calcule d'abord le coefficient directeur :

$$m=\dfrac{f(5)-f(2)}{5-2}=\dfrac{10-1}{3}=\dfrac{9}{3}=3$$

On a donc $f(x)=3x+p$. Pour trouver $p$, on utilise l'une des deux informations, par exemple $f(2)=1$ :

$$3\times 2+p=1 \quad\Longrightarrow\quad 6+p=1 \quad\Longrightarrow\quad p=-5$$

$$f(x)={\color{#4A5D7A}3x-5}$$

Vérification avec l'autre donnée : $f(5)=3\times 5-5=10$.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Calculer et donner le résultat en écriture scientifique :

$$B=\dfrac{6\times 10^{5}\times 4\times 10^{-8}}{3\times 10^{-2}}$$
---CORR---
On sépare les nombres et les puissances de dix.

Pour les nombres :

$$\dfrac{6\times 4}{3}=\dfrac{24}{3}=8$$

Pour les puissances de dix :

$$\dfrac{10^{5}\times 10^{-8}}{10^{-2}}=\dfrac{10^{-3}}{10^{-2}}=10^{-3-(-2)}=10^{-1}$$

D'où :

$$B={\color{#4A5D7A}8\times 10^{-1}}$$

Le nombre $8$ vérifie bien $1\leqslant 8<10$ : c'est donc l'écriture scientifique. On peut vérifier : $B=0{,}8$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Dresser le tableau de signes de la fonction $f$ définie sur $\mathbb{R}$ par $f(x)=5x-15$.
---CORR---
On cherche la racine :

$$5x-15=0 \quad\Longrightarrow\quad 5x=15 \quad\Longrightarrow\quad x=3$$

Le coefficient directeur $5$ est positif, donc $f$ est croissante : négative avant sa racine, positive après.

| $x$ | $-\infty$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|
| signe de $f(x)$ | | $-$ | $0$ | $+$ | |

$${\color{#4A5D7A}f(x)<0\ \text{sur}\ \left]-\infty\,;\,3\right[ \qquad f(x)>0\ \text{sur}\ \left]3\,;\,+\infty\right[}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On considère le nombre $N=\dfrac{10^{6}}{5^{3}}$. On a :

**A.** $N=2^{3}$ &emsp; **B.** $N=20$ &emsp; **C.** $N=\dfrac{1}{10^{3}}$ &emsp; **D.** $N=8\times 10^{3}$
---CORR---
On décompose $10$ en produit de facteurs premiers pour faire apparaître le $5$ du dénominateur :

$$10^{6}=(2\times 5)^{6}=2^{6}\times 5^{6}$$

On simplifie :

$$N=\dfrac{2^{6}\times 5^{6}}{5^{3}}=2^{6}\times 5^{6-3}=2^{6}\times 5^{3}$$

On regroupe ensuite $2^3$ avec $5^3$ pour reformer une puissance de dix :

$$N=2^{3}\times 2^{3}\times 5^{3}=8\times(2\times 5)^{3}={\color{#4A5D7A}8\times 10^{3}}$$

On peut vérifier : $\dfrac{1\,000\,000}{125}=8\,000$.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Un article coûte $40$ €. Son prix augmente de $15\,\%$.

Son nouveau prix, en euros, est :

**A.** $6$ &emsp; **B.** $55$ &emsp; **C.** $46$ &emsp; **D.** $41{,}5$
---CORR---
Augmenter de $15\,\%$ revient à multiplier par $1+0{,}15=1{,}15$ :

$$40\times 1{,}15={\color{#4A5D7A}46}$$

La réponse A donne la hausse seule ($15\,\%$ de $40$), sans l'ajouter au prix de départ, et la réponse B ajoute $15$ € au lieu de $15\,\%$.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Écrire sous la forme $3^n$, où $n$ est un entier relatif :

$$A=\dfrac{3^{8}\times 3^{-5}}{3^{-1}}$$
---CORR---
On utilise deux règles : pour un produit de puissances de même base, on additionne les exposants ; pour un quotient, on les soustrait.

Au numérateur :

$$3^{8}\times 3^{-5}=3^{8+(-5)}=3^{3}$$

Puis le quotient :

$$A=\dfrac{3^{3}}{3^{-1}}=3^{3-(-1)}=3^{3+1}={\color{#4A5D7A}3^{4}}$$

Attention à la double soustraction : $3-(-1)=3+1=4$. On peut vérifier : $3^4=81$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Déterminer la fonction affine $f$ telle que $f(1)=-1$ et $f(5)=7$.
---CORR---
Une fonction affine s'écrit $f(x)=mx+p$. On calcule d'abord le coefficient directeur :

$$m=\dfrac{f(5)-f(1)}{5-1}=\dfrac{7-(-1)}{4}=\dfrac{8}{4}=2$$

On a donc $f(x)=2x+p$. Pour trouver $p$, on utilise l'une des deux informations, par exemple $f(1)=-1$ :

$$2\times 1+p=-1 \quad\Longrightarrow\quad 2+p=-1 \quad\Longrightarrow\quad p=-3$$

$$f(x)={\color{#4A5D7A}2x-3}$$

Vérification avec l'autre donnée : $f(5)=2\times 5-3=7$.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Calculer et donner le résultat en écriture scientifique :

$$B=\dfrac{8\times 10^{7}\times 3\times 10^{-9}}{4\times 10^{-3}}$$
---CORR---
On sépare les nombres et les puissances de dix.

Pour les nombres :

$$\dfrac{8\times 3}{4}=\dfrac{24}{4}=6$$

Pour les puissances de dix :

$$\dfrac{10^{7}\times 10^{-9}}{10^{-3}}=\dfrac{10^{-2}}{10^{-3}}=10^{-2-(-3)}=10^{1}$$

D'où :

$$B={\color{#4A5D7A}6\times 10^{1}}$$

Le nombre $6$ vérifie bien $1\leqslant 6<10$ : c'est donc l'écriture scientifique. On peut vérifier : $B=60$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Dresser le tableau de signes de la fonction $f$ définie sur $\mathbb{R}$ par $f(x)=6x-24$.
---CORR---
On cherche la racine :

$$6x-24=0 \quad\Longrightarrow\quad 6x=24 \quad\Longrightarrow\quad x=4$$

Le coefficient directeur $6$ est positif, donc $f$ est croissante : négative avant sa racine, positive après.

| $x$ | $-\infty$ | | $4$ | | $+\infty$ |
|---|---|---|---|---|---|
| signe de $f(x)$ | | $-$ | $0$ | $+$ | |

$${\color{#4A5D7A}f(x)<0\ \text{sur}\ \left]-\infty\,;\,4\right[ \qquad f(x)>0\ \text{sur}\ \left]4\,;\,+\infty\right[}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
On considère le nombre $N=\dfrac{10^{5}}{2^{3}}$. On a :

**A.** $N=5^{3}$ &emsp; **B.** $N=1{,}25\times 10^{4}$ &emsp; **C.** $N=12{,}5$ &emsp; **D.** $N=\dfrac{1}{2^{2}}$
---CORR---
On décompose $10$ en produit de facteurs premiers pour faire apparaître le $2$ du dénominateur :

$$10^{5}=(2\times 5)^{5}=2^{5}\times 5^{5}$$

On simplifie :

$$N=\dfrac{2^{5}\times 5^{5}}{2^{3}}=2^{5-3}\times 5^{5}=4\times 3\,125=12\,500$$

En écriture scientifique :

$$N={\color{#4A5D7A}1{,}25\times 10^{4}}$$

La réponse C est le résultat divisé par mille : l'ordre de grandeur ne colle pas.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Un article coûte $60$ €. Son prix augmente de $25\,\%$.

Son nouveau prix, en euros, est :

**A.** $75$ &emsp; **B.** $85$ &emsp; **C.** $15$ &emsp; **D.** $62{,}5$
---CORR---
Augmenter de $25\,\%$ revient à multiplier par $1+0{,}25=1{,}25$ :

$$60\times 1{,}25={\color{#4A5D7A}75}$$

La réponse C donne la hausse seule ($25\,\%$ de $60$), sans l'ajouter au prix de départ, et la réponse B ajoute $25$ € au lieu de $25\,\%$.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
