---
title: "Semaine 21 - Équations avec x² et fonction inverse"
layout: "automatismes-2nde"
auto_number: 21
weight: 21
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Comparer, sans calculatrice :

**a.** $\dfrac{1}{5}$ et $\dfrac{1}{8}$ &emsp;&emsp; **b.** $\dfrac{1}{-8}$ et $\dfrac{1}{-5}$
---CORR---
La fonction inverse est décroissante sur $\left]0\,;\,+\infty\right[$ et décroissante sur $\left]-\infty\,;\,0\right[$, mais **pas** sur $\mathbb{R}$ tout entier : il faut donc travailler intervalle par intervalle.

**a.** $5$ et $8$ sont tous deux positifs. Comme $5 < 8$ et que la fonction inverse renverse l'ordre sur les positifs :

$${\color{#4A5D7A}\dfrac{1}{5}>\dfrac{1}{8}}$$

Autrement dit, plus on divise $1$ par un grand nombre, plus le résultat est petit.

**b.** $-8$ et $-5$ sont tous deux négatifs. Comme $-8 < -5$ et que la fonction inverse renverse aussi l'ordre sur les négatifs :

$${\color{#4A5D7A}\dfrac{1}{-8}>\dfrac{1}{-5}}$$

On vérifie : $-0{,}125>-0{,}2$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Résoudre dans $\mathbb{R}$ les deux équations suivantes :

$$x^2=49 \qquad\text{et}\qquad x^2=-9$$
---CORR---
**Première équation.** $49$ est positif, donc l'équation $x^2=49$ admet deux solutions opposées :

$$\begin{aligned}x &= -\sqrt{49}=-7 \\ \text{ou}\quad x &= \sqrt{49}=7\end{aligned}$$

$$S_1={\color{#4A5D7A}\lbrace -7\,;\,7\rbrace}$$

**Seconde équation.** Le carré d'un nombre réel est toujours positif ou nul, il ne peut donc jamais valoir $-9$ :

$$S_2={\color{#4A5D7A}\varnothing}$$

Retenir : $x^2=k$ a deux solutions si $k>0$, une seule ($0$) si $k=0$, aucune si $k<0$.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Résoudre dans $\mathbb{R}$ l'équation :

$$3x^2-5=43$$
---CORR---
On isole d'abord $x^2$. On ajoute $5$ à chaque membre :

$$3x^2=48$$

On divise par $3$ :

$$x^2=16$$

Comme $16>0$, il y a deux solutions opposées :

$$S={\color{#4A5D7A}\lbrace -4\,;\,4\rbrace}$$

Erreur fréquente : n'écrire que $x=4$. La solution négative compte autant.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
On donne les vecteurs $\overrightarrow{u}\,(4\,;\,-6)$ et $\overrightarrow{v}\,(-6\,;\,9)$.

Ces deux vecteurs sont-ils colinéaires ?
---CORR---
Deux vecteurs $\overrightarrow{u}\,(x\,;\,y)$ et $\overrightarrow{v}\,(x'\,;\,y')$ sont colinéaires si et seulement si leur déterminant est nul :

$$xy'-yx'=0$$

On calcule :

$$4\times 9-(-6)\times(-6)=36-36={\color{#4A5D7A}0}$$

Le déterminant est nul, donc les deux vecteurs sont ${\color{#4A5D7A}\text{colinéaires}}$.

On le voit aussi directement : $\overrightarrow{v}=-\dfrac{3}{2}\,\overrightarrow{u}$.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Dans une série de $10$ valeurs rangées dans l'ordre croissant, la médiane est :

<div class="qcm-choix">
<span><b>A.</b> la $5^\text{e}$ valeur</span>
<span><b>B.</b> la $6^\text{e}$ valeur</span>
<span><b>C.</b> la moyenne des $5^\text{e}$ et $6^\text{e}$ valeurs</span>
<span><b>D.</b> la moyenne de toutes les valeurs</span>
</div>
---CORR---
L'effectif $10$ est **pair** : il n'y a pas de valeur unique au milieu, mais deux valeurs centrales, celles de rang $5$ et $6$. La médiane est leur moyenne.

$${\color{#4A5D7A}\text{Médiane}=\dfrac{5^\text{e}+6^\text{e}}{2}}$$

Il y a bien $5$ valeurs de chaque côté. La réponse D confond médiane et moyenne : ce sont deux indicateurs différents.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Dans une commune, le tarif de l'eau comprend un abonnement annuel de $48$ € et $3{,}50$ € par mètre cube consommé.

Le prix payé, en euros, pour $x$ mètres cubes est :

<div class="qcm-choix">
<span><b>A.</b> $48x+3{,}5$</span>
<span><b>B.</b> $3{,}5x+48$</span>
<span><b>C.</b> $51{,}5x$</span>
<span><b>D.</b> $\dfrac{48}{x}+3{,}5$</span>
</div>
---CORR---
L'abonnement est payé une seule fois, quelle que soit la consommation : c'est un terme constant.

Le prix au mètre cube est multiplié par le nombre de mètres cubes consommés :

$$\text{prix}={\color{#4A5D7A}3{,}5x+48}$$

La réponse A intervertit les deux rôles, et la réponse C additionne l'abonnement et le tarif au mètre cube, ce qui reviendrait à repayer l'abonnement à chaque mètre cube.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Comparer, sans calculatrice :

**a.** $\dfrac{1}{4}$ et $\dfrac{1}{9}$ &emsp;&emsp; **b.** $\dfrac{1}{-9}$ et $\dfrac{1}{-4}$
---CORR---
La fonction inverse est décroissante sur $\left]0\,;\,+\infty\right[$ et décroissante sur $\left]-\infty\,;\,0\right[$, mais **pas** sur $\mathbb{R}$ tout entier : il faut donc travailler intervalle par intervalle.

**a.** $4$ et $9$ sont tous deux positifs. Comme $4 < 9$ et que la fonction inverse renverse l'ordre sur les positifs :

$${\color{#4A5D7A}\dfrac{1}{4}>\dfrac{1}{9}}$$

Autrement dit, plus on divise $1$ par un grand nombre, plus le résultat est petit.

**b.** $-9$ et $-4$ sont tous deux négatifs. Comme $-9 < -4$ et que la fonction inverse renverse aussi l'ordre sur les négatifs :

$${\color{#4A5D7A}\dfrac{1}{-9}>\dfrac{1}{-4}}$$

On vérifie : $-0{,}111\ldots>-0{,}25$.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Résoudre dans $\mathbb{R}$ les deux équations suivantes :

$$x^2=64 \qquad\text{et}\qquad x^2=-16$$
---CORR---
**Première équation.** $64$ est positif, donc l'équation $x^2=64$ admet deux solutions opposées :

$$\begin{aligned}x &= -\sqrt{64}=-8 \\ \text{ou}\quad x &= \sqrt{64}=8\end{aligned}$$

$$S_1={\color{#4A5D7A}\lbrace -8\,;\,8\rbrace}$$

**Seconde équation.** Le carré d'un nombre réel est toujours positif ou nul, il ne peut donc jamais valoir $-16$ :

$$S_2={\color{#4A5D7A}\varnothing}$$

Retenir : $x^2=k$ a deux solutions si $k>0$, une seule ($0$) si $k=0$, aucune si $k<0$.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Résoudre dans $\mathbb{R}$ l'équation :

$$5x^2-7=38$$
---CORR---
On isole d'abord $x^2$. On ajoute $7$ à chaque membre :

$$5x^2=45$$

On divise par $5$ :

$$x^2=9$$

Comme $9>0$, il y a deux solutions opposées :

$$S={\color{#4A5D7A}\lbrace -3\,;\,3\rbrace}$$

Erreur fréquente : n'écrire que $x=3$. La solution négative compte autant.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
On donne les vecteurs $\overrightarrow{u}\,(3\,;\,-5)$ et $\overrightarrow{v}\,(-9\,;\,16)$.

Ces deux vecteurs sont-ils colinéaires ?
---CORR---
Deux vecteurs $\overrightarrow{u}\,(x\,;\,y)$ et $\overrightarrow{v}\,(x'\,;\,y')$ sont colinéaires si et seulement si leur déterminant est nul :

$$xy'-yx'=0$$

On calcule :

$$3\times 16-(-5)\times(-9)=48-45={\color{#4A5D7A}3}$$

Le déterminant n'est pas nul, donc les deux vecteurs ${\color{#4A5D7A}\text{ne sont pas colinéaires}}$.

Attention au piège : $-9=3\times(-3)$ mais $16\neq -5\times(-3)=15$. Il suffit d'un écart sur une seule coordonnée.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Dans une série de $14$ valeurs rangées dans l'ordre croissant, la médiane est :

<div class="qcm-choix">
<span><b>A.</b> la moyenne des $7^\text{e}$ et $8^\text{e}$ valeurs</span>
<span><b>B.</b> la $8^\text{e}$ valeur</span>
<span><b>C.</b> la $7^\text{e}$ valeur</span>
<span><b>D.</b> la moyenne de toutes les valeurs</span>
</div>
---CORR---
L'effectif $14$ est **pair** : il n'y a pas de valeur unique au milieu, mais deux valeurs centrales, celles de rang $7$ et $8$. La médiane est leur moyenne.

$${\color{#4A5D7A}\text{Médiane}=\dfrac{7^\text{e}+8^\text{e}}{2}}$$

Il y a bien $7$ valeurs de chaque côté. La réponse D confond médiane et moyenne : ce sont deux indicateurs différents.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
Dans une commune, le tarif de l'eau comprend un abonnement annuel de $62$ € et $2{,}80$ € par mètre cube consommé.

Le prix payé, en euros, pour $x$ mètres cubes est :

<div class="qcm-choix">
<span><b>A.</b> $\dfrac{62}{x}+2{,}8$</span>
<span><b>B.</b> $64{,}8x$</span>
<span><b>C.</b> $62x+2{,}8$</span>
<span><b>D.</b> $2{,}8x+62$</span>
</div>
---CORR---
L'abonnement est payé une seule fois, quelle que soit la consommation : c'est un terme constant.

Le prix au mètre cube est multiplié par le nombre de mètres cubes consommés :

$$\text{prix}={\color{#4A5D7A}2{,}8x+62}$$

La réponse C intervertit les deux rôles, et la réponse B additionne l'abonnement et le tarif au mètre cube, ce qui reviendrait à repayer l'abonnement à chaque mètre cube.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
