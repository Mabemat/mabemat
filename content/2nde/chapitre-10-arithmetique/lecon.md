---
title: "Leçon complète"
---

<h2 class="subsection-title">10.1 Rappels : nombres entiers</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
L'ensemble des nombres <strong>entiers naturels</strong>, noté $\mathbb{N}$, est l'ensemble des nombres entiers positifs ou
nul.<br>
L'ensemble des nombres <strong>entiers relatifs</strong>, noté $\mathbb{Z}$, est l'ensemble des nombres entiers positifs,
négatifs ou nul.
</div>
</div>

<div class="remarque" style="display:inline-block; vertical-align:middle; width:calc(52% );">
Tout nombre entier naturel est un entier relatif. <br>On a $\mathbb{N}\subset\mathbb{Z}$.
</div><img src="/mabemat/figures/2nde/chapitre-10/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:middle; width:calc(30%); max-height:100px; max-width:100%;">

<h2 class="subsection-title">10.2 Multiples et diviseurs</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soient $a$ et $b$ deux entiers. <br>On dit que $a$ est un <strong>multiple</strong> de $b$ s'il existe un entier $k$
tel que $a = k\times b$. On dit alors que $b$ est un <strong>diviseur</strong> de $a$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>$15$ est un multiple de $3$, car $15 = 5 \times 3$.</li>
<li>$10$ est un diviseur de $80$, car $80 = 8 \times 10$.</li>
<li>Par contre, $13$ n'est pas un multiple de $3$ car il n'existe pas d'entier $k$ tel que $13 = k \times 3$.</li>
</ul>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soient $a$, $n$ et $m$ trois entiers relatifs.
<br>Si $n$ et $m$ sont deux multiples de $a$, alors leur somme $(n+m)$, leur différence $(n-m)$ et leur
produit $n\times m$ sont aussi des multiples de $a$.
</div>
</div>

Démonstration :
<div class="environment-content">
Pour la somme : $n$ et $m$ sont des multiples de $a$. Donc il existe $k$ et $q$ des entiers relatifs tel que $m=k\times a$ et $n=q\times a$. <br>Alors $m+n=k\times a+q\times a=(k+q)\times a$. Or, $k+q\in \mathbb{Z}$, donc $m+n$ est un multiple de $a$.

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
$54$ et $90$ sont des multiples de $9$. Donc $54+90=144$ est un multiple de $9$. En effet, $144=16\times 9$.
</div>
</div>

<strong>Retour sur la propriété : $\dfrac{1}{3}$ n'est pas décimal.</strong>

Démonstration :
<div class="environment-content">
Démontrons que le nombre rationnel $\dfrac{1}{3}$ n'est pas décimal.<br>
On va effectuer une démonstration par l'absurde en supposant que $\dfrac{1}{3}$ est décimal.<br>
Si notre démonstration aboutit à une absurdité, cela prouvera que notre hypothèse de départ est fausse. <br>

Supposons donc que $\dfrac{1}{3}$ est décimal.
Alors il s'écrit sous la forme $\dfrac{1}{3}=\dfrac{a}{10^p}$ avec $a$ entier et $p$ entier naturel. <br>

Donc $10^p = 3a$ et donc $10^p$ est divisible par $3$.
Un nombre est divisible par $3$ lorsque la somme de ses chiffres est divisible par $3$.
Or, ceci est impossible car la somme des chiffres de $10^p$ est $1$, et $1$ n'est pas divisible par $3$.<br>
Donc l'hypothèse posée au départ est fausse et donc $\dfrac{1}{3}$ n'est pas décimal.

<h2 class="subsection-title">10.3 Nombres pairs et impairs</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
On considère un entier relatif $n$.
On dit que $n$ est <strong>pair s'il est divisible par</strong> $2$, alors il existe $k\in \mathbb{Z}$ tel que $n=2\times k$.
Sinon on dit que $n$ est <strong>impair</strong>, alors il existe $k\in \mathbb{Z}$ tel que $n=2\times k +1$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul style="column-count:2; column-gap:2rem;">
<li>$18$ est pair car $18=2\times 9$.</li>
<li>$0$ est pair car $0=2\times 0$.</li>
<li>$17$ est impair car $17=2\times 8+1$.</li>
<li>$1$ est impair car $1=2\times 0 +1$.</li>
</ul>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La somme (ou la différence) de deux nombres pairs est un nombre pair.<br>
La somme (ou la différence) de deux nombres impairs est un nombre pair.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
$46$ et $28$ sont des nombres pairs et $46+28=64$ et $46-28=18$ sont aussi des nombres pairs.<br>
$15$ et $37$ sont des nombres impairs et $37+15=52$ et $15-37=-22$ sont des nombres pairs.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $n\in \mathbb{Z}$. <br>
Si $n$ est pair, alors le carré $n^2$ est pair.<br>
Si $n$ est impair, alors le carré $n^2$ est impair.
</div>
</div>

Démonstration :
<div class="environment-content">
Pour le carré d'un nombre impair :<br>
$n$ est un nombre impair, donc il existe $k\in \mathbb{Z}$ tel que $n=2k+1$. <br>Alors $n^2=(2k+1)^2=(2k)^2+2\times 2k\times 1 +1^2=4k^2+4k+1=2\times (2k^2+2k)+1=2K+1$, avec $K=2k^2+2k \in \mathbb{Z}$. <br>Donc $n^2$ est impair.

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>$11$ est impair et $11^2=121$ est impair.</li>
<li>$12$ est pair et $12^2=144$ est pair.</li>
</ul>
</div>
</div>

<h2 class="subsection-title">10.4 Nombres premiers</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Un nombre entier naturel est premier s'il possède que deux diviseurs positifs distincts qui sont $1$ et lui-même.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>$2,3,5,7,11,13,17,19,23,...$ sont des nombres premiers, cette liste est infinie.</li>
<li>$1$ n'est pas premier car son seul diviseur positif est $1$.</li>
</ul>
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
On dit que deux nombres sont premiers entre eux lorsque leur seul
diviseur commun est $1$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Tout nombre supérieur ou égal à $2$ peut se décomposer en produits de facteurs premiers. Cette décomposition est unique à l'ordre des facteurs près.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
$300=2\times 2\times 3\times 5\times 5$ et $77=7\times 11$. <br>Ainsi, le seul diviseur commun à $300$ et $77$ est $1$ donc $300$ et $77$ sont premiers entre eux.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
On dit qu'une fraction est irréductible, lorsque son numérateur et son dénominateur sont premiers entre eux.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode : Rendre une fraction irréductible.</div>
<div class="environment-content">
Rendre irréductible la fraction $\dfrac{210}{196}$.<br>
Décomposons d'abord le numérateur et le dénominateur en produits de facteurs premiers.<br>
<img src="/mabemat/figures/2nde/chapitre-10/fig2.svg" alt="figure 2" style="display:inline-block; vertical-align:middle; width:calc(32% - 12px); max-height:200px; max-width:100%;"><div style="display:inline-block; vertical-align:middle; width:calc(66% - 12px);">
Ainsi, $210=2\times 3\times 5 \times 7$ et $196=2\times 2\times 7\times 7$. <br>
Donc $\dfrac{210}{196}=\dfrac{{\color{orange}{2}}\times 3\times 5 \times {\color{orange}{7}}}{{\color{orange}{2}}\times 2\times {\color{orange}{7}}\times 7}=\dfrac{3\times 5}{2\times 7}=\dfrac{15}{14}$. <br>
$15$ et $14$ sont premiers entre eux donc, $\dfrac{15}{14}$ est la fraction irréductible de $\dfrac{210}{196}$.
</div>
</div>
</div>

<strong>Retour sur la propriété : $\sqrt{2}$ est un nombre irrationnel.</strong><br>

Démonstration :
<div class="environment-content">
On va effectuer une démonstration par l'absurde en supposant que $\sqrt{2}$ est rationnel. <br>Si notre démonstration aboutit à une absurdité, cela prouvera que notre hypothèse de départ est fausse.
Supposons donc que $\sqrt{2}$ est un rationnel.
Il s'écrit alors $\sqrt{2}=\dfrac{p}{q}$ avec $p$ et $q$ entiers naturels premiers entre eux, $q$ non nul.<br>
Ainsi, $\dfrac{p^2}{q^2}=\left(\sqrt{2}\right)^2=2$ soit $p^2=2q^2$.
On en déduit que $p^2$ est pair, ce qui entraîne que $p$ est pair.
<br>En effet, si $p$ était impair, alors $p^2$ serait impair.
Puisque $p$ est pair, il existe un entier naturel $k$ tel que $p = 2k$. <br>Comme, $p^2=2q^2$, on a $(2k)^2=2q^2$, soit $4k^2=2q^2$, qui se simplifie en $q^2=2k^2$. On en déduit que $q^2$ est pair, ce qui entraîne que $q$ est pair. Or, $p$ et $q$ sont premiers entre eux, donc ils ne peuvent pas être pairs simultanément. <br>On aboutit à une absurdité. Donc, $\sqrt{2}$ n'est pas un rationnel. Finalement, $\sqrt{2}$ est un irrationnel.
</div>
