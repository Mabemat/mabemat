---
title: "Leçon complète"
---

<h2 class="subsection-title">6.1 Suites arithmétiques</h2>

<h3 class="subsubsection-title">6.1.1 Définition</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $r$ un nombre réel. Une  <strong>suite arithmétique </strong> $(u_n)_{n\geq n_0}$ de  <strong>raison </strong> $r$ est une suite numérique dont  <strong>chaque terme s'obtient en ajoutant au précédent le nombre réel $r$ </strong>. <br>
Pour tout entier naturel $n\geq n_0$, on a la relation de récurrence suivante : $u_{n+1}=u_n+r$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>Soit $(u_n)$ la suite de premier terme $u_0=1$ et de raison $-2$.<br>
Alors $u_0=1$, $u_1=-1$, $u_2=-3$, $u_3=-5$, ...
(on soustrait $2$ au terme précédent afin d'obtenir le suivant).</li>
<li>La suite des nombres entiers naturels pairs est une suite arithmétique de terme initial $u_0 = 0$ et de raison $2$.</li>
<li>La suite des nombres entiers naturels impairs est une suite arithmétique de terme initial $u_0 = 1$ et de raison $2$.</li>
</ul>
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode : </div>
<div class="environment-content">
Pour montrer qu'une suite $(u_n)_{n\geq n_0}$ est arithmétique, il suffit de montrer que pour tout entier naturel $n\geq n_0$, <br>
$u_{n+1}-u_n$ est  <strong>constante </strong>. Cette constante est la raison $r$ de la suite.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
La suite $(u_n)$ définie par $u_n=4n-7$ est arithmétique de raison $4$.<br>
En effet, pour tout $n\in \N$, $u_{n+1}-u_n=4(n+1)-7-(4n-7)=4n+4-7-4n+7=4$.
</div>
</div>

<h3 class="subsubsection-title">6.1.2 Propriétés</h3>

<div class="environment propriete">
<div class="environment-title">Propriété - Expression en fonction de $n$ du terme général d'une suite arithmétique.</div>
<div class="environment-content">
Soit $(u_n)$ une suite arithmétique de raison $r$ et de premier terme $u_0$. <br>
Pour tout entier naturel $n$, on a :
$u_n=u_0+nr$
</div>
</div>

<div class="remarque">

<ul>
<li>Si le premier terme de la suite est $u_1$, on a pour tout entier naturel $n$, on a :
$u_n=u_1+(n-1)r$.</li>
<li>Plus généralement, pour tous entiers naturels $n$ et $p$, on a : $u_n=u_p+(n-p)r$.</li>
</ul>
</div>

Démonstration. <br>
<ul>
<li>Par la formule de récurrence, on a $u_n=u_{n-1}+r=(u_{n-2}+r)+r=(u_{n-3}+r)+r+r=...=u_0+nr$.</li>
<li>On a donc $u_n=u_0+nr$ et $u_p=u_0+pr$, d'où $u_0=u_p-pr$. Donc $u_n=(u_p-pr)+nr=u_p+(n-p)r$.</li>
</ul>
 

<h3 class="subsubsection-title">6.1.3 Variations</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $(u_n)$ une suite arithmétique de raison $r$ et de premier terme $u_0$.<br>
Alors, pour tout $n\in \N$, $u_{n+1}-u_n=r$. Le sens de variation dépend du signe de $r$.
<ul>
<li>Si  <strong>$r>0$ </strong> alors la suite $(u_n)$ est  <strong>croissante </strong> et tend vers $+\infty$.</li>
<li>Si  <strong>$r<0$ </strong> alors la suite $(u_n)$ est  <strong>décroissante </strong> et tend vers $-\infty$.</li>
<li>Si  <strong>$r=0$ </strong> alors la suite $(u_n)$ est  <strong>constante </strong> égale à $u_0$.</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">6.1.4 Somme des premiers termes</h3>

<div class="environment theoreme">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
La somme de termes consécutifs d'une suite arithmétique est $$\dfrac{(\text{premier terme }+\text{ dernier terme}) \times (\text{nombre de termes})}{2}$$ En particulier, pour $(u_k)$ une suite arithmétique de premier terme $u_0$. Soit $n$ un entier naturel alors : 

$$ \sum_{k=0}^n u_k = u_0 + . . . + u_n = \dfrac{(u_0+u_n)\times (n+1)}{2}$$
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Corollaire - Somme des entiers strictement positifs.</div>
<div class="environment-content">
$$\sum_{k=1}^n k= 1+2+3+...+(n-1)+n=\dfrac{n(n+1)}{2}$$
</div>
</div>

Démonstration. <br>
La suite $(k)$ des entiers naturels est arithmétique de raison $1$. <br>
La somme $1+2+\ldots+n$ a pour premier terme $1$, pour dernier terme $n$, et comporte $n$ termes.<br>
D'après le théorème, elle vaut $\dfrac{(1+n)\times n}{2}=\dfrac{n(n+1)}{2}$.

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On veut réaliser un forage de $150$ m. Le premier mètre coûte $30$ €, le $2^{\text{ième}}$ mètre coûte $38$ €, le $3^{\text{ième}}$ mètre coûte $46$ €, et ainsi de suite en augmentant de $8$ € à chaque nouveau mètre. <br>
Pour tout entier $n\geq 1$, on note $u_n$ le prix du $n^{\text{ième}}$ mètre foré.
<ol>
<li>Justifier que $(u_n)$ est une suite arithmétique et préciser son premier terme et sa raison.<br>
Chaque mètre coûte $8$ € de plus que le précédent : pour tout entier $n\geq 1$, $u_{n+1}=u_n+8$.<br>
La suite $(u_n)$ est donc arithmétique de premier terme $u_1=30$ et de raison $r=8$.</li>
<li>Combien coûte le $150^{\text{ième}}$ mètre ?<br>
Ici le premier terme est $u_1$ (et non $u_0$), on utilise donc la formule $u_n=u_1+(n-1)r$ :
$$u_{150}=30+8\times (150-1)=30+8\times 149=1222.$$
Le $150^{\text{ième}}$ mètre coûte donc $1\,222$ €.</li>
<li>Quel est le coût total du forage ?<br>
Le coût total est la somme des prix de tous les mètres forés, soit $150$ termes, de $u_1$ à $u_{150}$ :
$$S=\sum_{k=1}^{150} u_k= \dfrac{(u_1 + u_{150})\times 150}{2}=\dfrac{(30 + 1222)\times 150}{2}=93\,900.$$
Le coût total du forage est de $93\,900$ €.</li>
</ol>
</div>
</div>

<h2 class="subsection-title">6.2 Suites géométriques</h2>

<h3 class="subsubsection-title">6.2.1 Définition</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $q$ un nombre réel. Une  <strong>suite géométrique </strong> $(u_n)_{n\geq n_0}$ de  <strong>raison $q$ </strong> est une suite numérique dont chaque terme s'obtient en multipliant le terme précédent par le nombre réel $q$.<br>
Pour tout entier naturel $n\geq n_0$, on a la relation de récurrence suivante : $u_{n+1}=q\times u_n$.
</div>
</div>

<div class="remarque">
Si $u_{n_0} = 0$, alors tous les termes de la suite sont nuls <br>
Si $q=0$, $u_n=0$ pour tout $n\geq n_0+1$.<br>
Ainsi, dans toute la suite de cette partie, on supposera le premier terme et la raison non nuls.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>Soit $(u_n)$ la suite géométrique de premier terme $u_0=1$ et de raison $-2$.<br>
Alors $u_0=1$, $u_1=-2$, $u_2=4$, $u_3=-8$, ...
(on multiplie par $-2$ le terme précédent afin d'obtenir le suivant).</li>
<li>La suite des puissances successives de $2$ : $1,2,4,8,16,32...$ est une suite géométrique de terme initial $u_0 = 1$ et de raison $2$.</li>
<li>La suite $(u_n)$ de terme général $u_n=(-1)^n$ est une suite géométrique de terme initial $u_0 = 1$ et de raison $-1$.</li>
</ul>
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode : </div>
<div class="environment-content">
Pour montrer qu'une suite $(u_n)_{n\geq n_0}$ est géométrique, il suffit de montrer que pour tout entier naturel $n\geq n_0$ $\dfrac{u_{n+1}}{u_n}$ est  <strong>constante </strong>. Cette constante est la raison $q$ de la suite.<br>
<u>Attention</u> : Il faut d'abord vérifier que pour tout $n\in \N$, $u_n\neq 0$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
La suite $(u_n)$ définie par $u_n=5\times 3^n$ est géométrique de raison $3$.<br>
En effet, $u_n=5\times 3^n\neq 0$ pour tout $n\in\N$, et $\dfrac{u_{n+1}}{u_n}=\dfrac{5\times 3^{n+1}}{5\times 3^n}=\dfrac{3^{n+1}}{3^n}=3$. <br>
Son premier terme est $u_0=5\times 3^0=5$.
</div>
</div>

<h3 class="subsubsection-title">6.2.2 Propriétés</h3>

<div class="environment propriete">
<div class="environment-title">Propriété - Expression en fonction de $n$ du terme général d'une suite géométrique.</div>
<div class="environment-content">
Soit $(u_n)$ une suite géométrique de raison $q$ et de premier terme $u_0$. Pour tout entier naturel $n$, on a : $u_n=u_0\times q^n$
</div>
</div>

<div class="remarque">

<ul>
<li>Si le premier terme de la suite est $u_1$, on a pour tout entier naturel $n$, on a : $u_n=u_1\times q^{(n-1)}$.</li>
<li>Plus généralement, pour tous entiers naturels $n$ et $p$, on a : $u_n=u_p\times q^{(n-p)}$.</li>
</ul>
</div>

Démonstration. <br>

<ul>
<li>Par la formule de récurrence, on a $u_n=u_{n-1}\times q=(u_{n-2}\times q)\times q=(u_{n-3}\times q)\times q \times q=...=u_0\times q^n$.</li>
<li>On a donc $u_n=u_0 q^n$ et $u_p=u_0q^p$, d'où $u_0=\dfrac{u_p}{q^p}$. Donc $u_n=\dfrac{u_p}{q^p}q^n=u_pq^{n-p}$.</li>
</ul>
 

<h3 class="subsubsection-title">6.2.3 Variations</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $(u_n)$ une suite géométrique de raison $q$ et de premier terme $u_0$. <br>
Pour tout $n\in \N$, $\dfrac{u_{n+1}}{u_n}=q$. Il faut donc comparer $q$ à $1$.
<ul>
<li>Si ${q>1}$ alors la suite $(u_n)$ est  <strong>croissante </strong> et tend vers $+\infty$ si $u_0>0$ et  <strong>décroissante </strong> et tend vers $-\infty$ si $u_0<0$</li>
<li>Si ${ 0 &lt; q &lt; 1}$ alors la suite $(u_n)$ est  <strong>décroissante </strong> et tend vers $0$ si $u_0>0$ et  <strong>croissante </strong> et tend vers $0$ si $u_0 &lt; 0$.</li>
<li>Si $ {q=1}$ alors la suite $(u_n)$ est  <strong>constante </strong> égale à $u_0$.</li>
<li>Si $ {q<0}$ alors la suite $(u_n)$ n'est <strong>ni croissante ni décroissante</strong> : ses termes changent de signe alternativement.</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">6.2.4 Somme des premiers termes</h3>

<div class="environment theoreme">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
La somme de termes consécutifs d'une suite géométrique est $$\text{premier terme }\times \dfrac{1-\text{raison}^\text{nombre de termes}}{1-\text{raison}}$$ En particulier, pour $(u_k)$ une suite géométrique de premier terme $u_0$ et de raison $q\neq 1$. Soit $n\in \N$ alors : 

$$ \sum_{k=0}^n u_k = u_0 + . . . + u_n = u_0\times \dfrac{1-{q}^{n+1}}{1-{q}}$$
</div>
</div>

Démonstration. <br>
On considère la suite $(u_n)$ définie, pour tout entier naturel $n$, par $u_n=q^n$ avec $q\neq 0$ et $q\neq 1$.<br>
Calculons la somme $S=1+q+q^2+...+q^{n-1}+q^n$.<br>
Alors, on a $qS=q+q^2+q^3+...+q^n+q^{n+1}$.<br>
Par soustraction membre à membre, on obtient :
$S-qS=1-q^{n+1}$. C'est-à-dire $(1-q)S=1-q^{n+1}$ et donc $S=\dfrac{1-q^{n+1}}{1-q}$.

 

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Une entreprise produisait $45$ tonnes de déchets non recyclables en $2016$. Chaque année, elle diminue cette masse de $4\%$ par rapport à l'année précédente. Pour tout entier naturel $n$, on note $p_n$ la masse de déchets non recyclables produite l'année $2016+n$.
<ol>
<li>Justifier que $(p_n)$ est une suite géométrique et préciser son premier terme et sa raison.<br>
Une diminution de $4\%$ revient à multiplier par le coefficient multiplicateur $1-\dfrac{4}{100}=0,96$.<br>
Donc, pour tout entier naturel $n$, $p_{n+1}=0,96\,p_n$ : la suite $(p_n)$ est géométrique de raison $q=0,96$ et de premier terme $p_0=45$.</li>
<li>Exprimer $p_n$ en fonction de $n$ et donner le sens de variation de la suite.<br>
On a $p_n=45\times 0,96^n$ pour tout entier naturel $n$.<br>
Comme $0<q<1$ et $p_0>0$, la suite $(p_n)$ est décroissante et tend vers $0$ : la décroissance est exponentielle.</li>
<li>Justifier qu'entre $2016$ et $2027$ inclus, l'entreprise a produit plus de $400$ tonnes de déchets non recyclables.<br>
L'année $2027$ correspond à $n=2027-2016=11$. La masse totale produite est donc la somme des termes de $p_0$ à $p_{11}$, soit $12$ termes :
$$\sum_{k=0}^{11}p_k=p_0\times \dfrac{1-q^{12}}{1-q}=45\times \dfrac{1-0,96^{12}}{1-0,96}\approx 435,7\text{ tonnes.}$$
Comme $435,7>400$, l'entreprise a bien produit plus de $400$ tonnes de déchets non recyclables sur cette période.</li>
</ol>
</div>
</div>
