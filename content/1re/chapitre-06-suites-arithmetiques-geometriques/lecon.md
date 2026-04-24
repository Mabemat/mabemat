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
 

<div class="remarque">
Cette formule permet de calculer n'importe quel terme d'une suite arithmétique dès que l'on connaît la raison et un terme quelconque ( il n'est pas nécessaire de connaître $u_0$).<br>
Cette formule permet aussi de calculer la raison d'une suite arithmétique dont on connaît $2$ termes.
</div>

<h3 class="subsubsection-title">6.1.3 Représentation graphique et variations</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Si $(u_n)$ est une suite arithmétique, les points de la représentation graphique de $(u_n)$ sont alignés.
</div>
</div>

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

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">

<ol>
<li>Soit $(t_n)$ la suite arithmétique de premier terme $t_0=19$ et de raison $r=5$. Déterminer $\displaystyle S_{10}=\sum_{k=0}^{10} t_k $.
<br>Le premier terme est $t_0=19$. Cette somme comporte $11$ termes (la somme commence à $k=0$ et finit à $k=10$). Le dernier terme est : $t_{10}= t_0 + 5n=19+5\times 10= 69$.
Donc $S_{10}=\dfrac{(19+69)\times 11}{2}=484$</li>
<li>On veut réaliser un forage de $120$m. Le premier mètre coûte $20$€, le $2^{\text{ième}}$ mètre coûte $25$€, le $3^{\text{ième}}$ mètre coûte $30$€... ainsi de suite en augmentant de $5$€ à chaque nouveau mètre.

\begin{enumerate}</li>
<li>Combien coûte le $120^{\text{ième}}$ mètre ?<br>
Il s'agit d'une suite arithmétique de premier terme $u_1=20$ et de raison $r=5$. <br>
Ainsi, $u_{120}=u_1+(n-1)\times r=20+5\times 119=615$ Ainsi, le $120^{\text{ième}}$ mètre coûte $615$€.</li>
<li>Quel est le coût total du forage ?<br>
On veut calculer la somme des $120$ termes de la suite $(u_n)$. $$S=\sum_{k=1}^{120} u_k= \dfrac{(u_1 + u_{120})\times 120}{2}=\dfrac{(20 + 615)\times 120}{2}=38100$$. Le coût total du forage est de $38100$ €.</li>
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
La suite $(u_n)$ définie par $u_n=5\times 3^n$ avec $u_0=4$. $u_0\neq 0$ donc $u_n\neq 0$ pour tout $n$. <br>
Donc, $\dfrac{u_{n+1}}{u_n}=\dfrac{5\times 3^{n+1}}{5\times 3^n}=\dfrac{3^{n+1}}{3^n}=3$.
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
<li>Si ${ 0 &lt q &lt1}$ alors la suite $(u_n)$ est  <strong>décroissante </strong> et tend vers $0$ si $u_0>0$ et  <strong>croissante </strong> et tend vers $0$ si $u_0 &lt0$.</li>
<li>Si $ {q=1}$ alors la suite $(u_n)$ est  <strong>constante </strong> égale à $u_0$.</li>
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

<ol>
<li>Soit $(u_n)$ la suite géométrique de premier terme $u_1=\dfrac{1}{8}$ et de raison $q=3$. Déterminer $\displaystyle S_{8}=\sum_{k=1}^{8} u_k $.
<ul>
<li>Le premier terme est $u_1=\dfrac{1}{8}$.</li>
<li>Cette somme comporte $8$ termes (la somme commence à $k=1$ et finit à $k=8$).</li>
<li>La raison est $q=3$.</li>
</ul> 
$$S_{8}=\dfrac{1}{8}\times\dfrac{1-3^8}{1-3}=\dfrac{1}{8}\times\dfrac{-6560}{-2}=\dfrac{1}{8}\times 3280=410$$</li>
<li>Une entreprise produisait $30$ tonnes de déchets non recyclables en $2015$. Chaque année l'entreprise diminue la masse de déchets non recyclables de $3\%$ par rapport à l'année précédente. <br>
Pour tout entier $n\geq 0$, on pose $p_n$ la masse de déchets non recyclables à l'année $2015+n$.<br>
Justifier qu'en $2026$, la quantité de déchets non recyclables produit par l'entreprise depuis $2015$ dépasse les $300$ tonnes.<br>
$(p_n)$ est une suite géométrique, car chaque année la masse de déchet est multipliée par $0,97$ et $p_0=30$. On a $2026-2015=11$. On veut donc calculer la somme $$\sum_{k=0}^{11}p_k=p_0\times \dfrac{1-q^{11+1}}{1-q}=30\times \dfrac{1-0,97^{12}}{1-0,97}\approx 306,158\text{ tonnes.}$$</li>
</ol>
</div>
</div>
