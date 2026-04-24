---
title: "Leçon complète"
---

<h2 class="subsection-title">2.1 Généralités sur les suites</h2>

<h3 class="subsubsection-title">2.1.1 Définitions</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Une <strong>suite numérique $u$</strong> est une fonction de $\N$ dans $\R$, qui a tout entier naturel $n$, associe son image $u(n)$, souvent notée $u_n$.<br>
$u_n$ est le terme de rang $n$ ; on lit « $u$ indice $n$ ».<br>
La suite est notée $(u_n)$ ou parfois $(u_n)_{n\in\N}$.
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $n_0$ un entier naturel donné. Si une suite $(u_n)$ est définie uniquement pour les entiers naturels $n$ tels que $n\geq n_0$, on dit que $u_{n_0}$ est le <strong>terme initial</strong> de la suite $(u_n)$.
</div>
</div>

<div class="remarque">
<ul>
<li>En général, $n_0$ vaut $0$ ou $1$.</li>
<li>Si $u_n$ est le terme de rang $n$ d'une suite, alors $u_{n-1}$ est son <strong>terme précédent</strong> et $u_{n+1}$ est son <strong>terme suivant</strong>.</li>
</ul>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
La suite des nombres entiers impairs est une suite numérique. <br>
Le $1^{\text{er}}$ terme est $1$, le $2^{\text{ème}}$ terme est $3$, le $5^{\text{ème}}$ terme est $9$.
</div>
</div>

<h3 class="subsubsection-title">2.1.2 Suite définie par une relation de récurrence</h3>

Une suite $(u_n)$ est définie par <strong>récurrence</strong> si elle est définie par la donnée de son <strong>premier terme</strong> et par une relation permettant de calculer <strong>chaque terme à partir du terme précédent</strong> (ou parfois des précédents).

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $f$ une fonction définie sur un intervalle $I$, à valeurs dans $I$, $a$ un réel de $I$ et $n_0$ un entier naturel.<br>
La suite $(u_n)$ définie pour tout entier $n \geq n_0$ par : 
$\left\{
\begin{array}{ll}
u_{n_0}=a \qquad &\text{ (terme initial de la suite)} \\
u_{n+1}=f(u_n) \qquad &\text{ (relation de récurrence)} 
\end{array}
\right.$
est une <strong>suite récurrente</strong> associée à la fonction $f$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit la suite $(u_n)$ définie par : $\left\{
\begin{array}{ll}
&u_0 =5 \\
&u_{n+1}=(u_n)^2 -1 
\end{array}
\right.$ <br>
C'est une suite récurrente associée à la fonction $f:x\mapsto x^2-1$ <br>[1em]
<div style="display:inline-block; vertical-align:top; width:calc(49% - 12px);">
On a $u_1=(u_0)^2-1=5^2-1=24$ ;<br> $u_2=(u_1)^2-1=24^2-1=575$ ;<br> $u_3=(u_2)^2-1=575^2-1=330624$ ...
</div><div style="display:inline-block; vertical-align:top; width:calc(49% - 12px);">
<table>
<tr>
<th>$u_0$</th>
<th>$u_1$</th>
<th>$u_2$</th>
<th>$u_3$</th>
</tr>
<tr>
<td>$5$</td>
<td>$24$</td>
<td>$575$</td>
<td>$330624$</td>
</tr>
</table>
</div>

</div>
</div>

<div class="remarque">
Ce type de définition ne permet pas de calculer rapidement des termes d'indices élevés car chaque terme se calcule à l'aide du précédent.
</div>

<h3 class="subsubsection-title">2.1.3 Suite définie par une formule explicite</h3>

<div class="remarque">
On peut calculer directement n'importe quel terme de la suite en remplaçant $n$ par la valeur voulue. Il s'agit dans ce cas d'un calcul d'image.
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Si $f$ est une fonction définie sur un intervalle $[a;+\infty[$ avec $a$ réel positif ou nul, on peut définir une suite numérique $(u_n)$, associée à la fonction $f$, en posant pour tout entier $n\geq a$ : $u_n = f(n)$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Les suites $(u_n)_{n\geq 0}$ et $(v_n)_{n\geq 2}$ définies par $u_n=2n+5$ et $v_n=\sqrt{2n-4}$ sont définies explicitement (pour la première $f:x\mapsto 2x+5$ et pour la seconde $f:x\mapsto \sqrt{2x-4}$.<br>
Alors $u_0=2\times 0 +5=5$, $u_7=2\times 7 +5=19$ et 
$v_2=\sqrt{2\times 2-4}=\sqrt{0}=0$, $v_{10}=\sqrt{2\times 10 -4}=\sqrt{16}=4$.
</div>
</div>

<h2 class="subsection-title">2.2 Représentation graphique des termes d'une suite</h2>

<h3 class="subsubsection-title">2.2.1 Suites définies explicitement</h3>

Lorsqu'une suite $(u_n)$ est définie par $u_n = f(n)$, la représentation graphique de cette suite est l'ensemble des points de la courbe $\mathcal{C}_f$ ayant pour abscisse un nombre entier.

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Pour représenter la suite $(u_n)_{n\geq 2}$ définie par $u_n = \sqrt{2n - 4}$ , on peut construire un tableau de valeurs en se limitant aux images des nombres entiers naturels.<br>
On place alors les points de coordonnées $(n;\sqrt{2n - 4})$.
</div>
</div>

<div class="remarque">
Surtout on ne relie pas ces points : on ne représente pas la fonction définie sur $[2;+\infty[$ mais un nuage de points car une suite n'est définie que pour les entiers naturels.
</div>

<p style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-02/fig1.svg" alt="figure 1" style="max-height:400px; max-width:100%;">
</p>
<h3 class="subsubsection-title">2.2.2 Suites définies par récurrence</h3>

Pour une suite récurrente définie par $u_{n + 1} = f(u_n)$ , on représente les différents termes de la suite sur l'axe des abscisses.

<div class="environment methode">
<div class="environment-title">Méthode :</div>
<div class="environment-content">
On suppose ici que $n_0 =0$ (il faut suivre la même méthode si $n_0 =1$).<br>
Pour représenter graphiquement une suite récurrente définie par $u_{n + 1} = f(u_n)$ il faut :
<ol>
<li>Tracer sur un même graphique la courbe de la fonction $f $ et la droite d'équation $y=x$.</li>
<li>Placer le premier terme $u_0$ sur l'axe des abscisses et considérer le point $A_0$ de la courbe $\mathcal{C}_f$ d'abscisse $u_0$ : son ordonnée est $u_1 = f(u_0) $.</li>
<li>Pour obtenir $u_1$ sur l'axe des abscisses, on utilise la droite d'équation $y = x$ : on « rabat » $u_1$ sur l'axe des abscisses.</li>
<li>On répète le procédé avec $u_1$ pour obtenir $u_2$ etc...</li>
</ol>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit $(u_n)$ la suite définie pour tout entier naturel $n$ par : $\left\{
\begin{array}{ll}
&u_0=1 \\
& u_{n+1}=-0,1(u_n)^2+2u_n+0,8
\end{array}
\right.$<br>
$(u_n)$ est une suite définie par récurrence associée à la fonction $f(x)=-0,1x^2+2x+0,8$.<br>
<p style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-02/fig2.svg" alt="figure 2" style="max-height:400px; max-width:100%;">
</p>
</div>
</div>

<h2 class="subsection-title">2.3 Sens de variation d'une suite</h2>

<div class="environment definition">
<div class="environment-title">Définition : $ $</div>
<div class="environment-content">
<ul>
<li>Une suite $(u_n)$ est <strong>croissante</strong> si pour tout entier naturel $n$, $u_{n+1}\geq u_n$.</li>
<li>Une suite $(u_n)$ est <strong>décroissante</strong> si pour tout entier naturel $n$, $u_{n+1}\leq u_n$.</li>
<li>Une suite $(u_n)$ est <strong>constante</strong> si pour tout entier naturel $n$, $u_{n+1}=u_n$.</li>
</ul>
Si $(u_n)$ est croissante ou décroissante, on dit qu'elle est <strong>monotone</strong>.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $(u_n)_{n\geq n_0}$ une suite définie par $u_n=f(n)$ où $f$ est une fonction définie sur $I=[a;+\infty[$ avec $n_0\geq a$. Si la fonction $f$ est croissante (resp. décroissante) sur $I$, alors $(u_n)$ est croissante (resp. décroissante).
</div>
</div>

<div class="remarque">
<ul>
<li>Graphiquement, on peut émettre une conjecture sur le sens de variation de la suite.</li>
<li>Certaines suites ne sont ni croissante, ni décroissante. Par exemple, la suite $u_n=(-1)^n$, a ses termes consécutifs de signes contraires. 
<p style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-02/fig3.svg" alt="figure 3" style="max-height:200px; max-width:100%;">
</p>
</li>
<li>On parle aussi de suite croissante (ou décroissante) à partir d'un certain rang $p$ :
on dit qu'une suite $(u_n)$ est croissante (resp. décroissante) à partir d'un rang $p$, si pour tout entier naturel $n\geq p$, $u_{n+1} \geq u_n$ (resp. $u_{n+1} \leq u_n$).</li>
<li>Comme pour les fonctions, on définit la notion de suite strictement croissante et strictement décroissante en remplaçant les inégalités larges de la définition, par des inégalités strictes.</li>
</ul>
</div>

<div class="environment methode">
<div class="environment-title">Méthode :</div>
<div class="environment-content">
Pour étudier le sens de variation d'une suite, une méthode consiste à étudier <strong>le signe de $u_{n+1}-u_n$</strong>.
<ul>
<li>Si pour tout $n\in \N$, $u_{n+1}-u_n\geq 0$, la suite $(u_n)$ est <strong>croissante</strong>.</li>
<li>Si pour tout $n\in \N$, $u_{n+1}-u_n\leq 0$, la suite $(u_n)$ est <strong>décroissante</strong>.</li>
<li>Si pour tout $n\in \N$, $u_{n+1}-u_n= 0$, la suite $(u_n)$ est <strong>constante</strong>.</li>
</ul>

Si la suite est à termes strictement positifs et si la formule définissant la suite comporte des produits et des quotients, il est souvent facile de calculer le rapport $\dfrac{u_{n+1}}{u_n}$.
<ul>
<li>Si $\dfrac{u_{n+1}}{u_n}\geq 1$, la suite $(u_n)$ est <strong>croissante</strong>.</li>
<li>Si $\dfrac{u_{n+1}}{u_n}\leq 1$, la suite $(u_n)$ est <strong>décroissante</strong>.</li>
<li>Si $\dfrac{u_{n+1}}{u_n}=1$, la suite $(u_n)$ est <strong>constante</strong>.</li>
</ul>

<ol>
<li>
On considère la suite $(u_n)$ définie pour tout entier naturel $n$ par
$\left\{
\begin{array}{ll}
&u_0 =1 \\
&u_{n+1}=2+u_n
\end{array}
\right.$
<br>
<span style="color:#78985b;">$u_{n+1}-u_n=2+u_n-u_n=2>0$ pour tout $n\in \N$, donc la suite $(u_n)$ est <strong>croissante</strong>.</span>
</li>

<li>
On considère la suite $(u_n)$ définie pour tout entier naturel $n$ par $u_n=4-3n$.
<br>
<span style="color:#78985b;">Pour tout $n\in \N$, $u_{n}=f(n)$ où $f:x\mapsto 4-3x$ est décroissante donc la suite $(u_n)$ est <strong>décroissante</strong>.</span>
</li>

<li>
On considère la suite $(u_n)$ définie pour tout entier naturel non nul $n$ par $u_{n}=\dfrac{1}{n(n+1)}$.
<br>
<span style="color:#78985b;">Pour tout $n\in \N$, $\dfrac{u_{n+1}}{u_n}=\dfrac{\dfrac{1}{(n+1)(n+2)}}{\dfrac{1}{n(n+1)}}=\dfrac{n(n+1)}{(n+1)(n+2)}=\dfrac{n}{n+2}$. Or, $0\leq n\leq n+2$, on a $\dfrac{u_{n+1}}{u_n}\leq 1$ et donc $u_{n+1}\leq u_n$, donc la suite $(u_n)$ est <strong>décroissante</strong>.</span>
</li>
</ol>

</div>
</div>

<h2 class="subsection-title">2.4 Notion de limite d'une suite</h2>

<h3 class="subsubsection-title">2.4.1 Suite convergente</h3>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Pour tout $n\in \N^*$, on considère la suite $(u_n)$ définie par $u_n=\dfrac{2n+1}{n}$.<br>
On construit le tableau de valeurs avec des termes de la suite : <table>
<tr>
<th>$n$</th>
<th>$1$</th>
<th>$2$</th>
<th>$3$</th>
<th>$4$</th>
<th>$5$</th>
<th>$10$</th>
<th>$15$</th>
<th>$50$</th>
<th>$500$</th>
</tr>
<tr>
<td>$u_n$</td>
<td>$3$</td>
<td>$2,5$</td>
<td>$2,333$</td>
<td>$2,25$</td>
<td>$2,2$</td>
<td>$2,1$</td>
<td>$2,067$</td>
<td>$2,02$</td>
<td>$2,002$</td>
</tr>
</table>
Plus $n$, devient grand, plus les termes de la suite semblent se rapprocher de $2$.<br>
On dit que la suite $(u_n)$ converge vers $2$ et on note : $\underset{n\rightarrow +\infty}{\lim} u_n=2$.
</div>
</div>

<h3 class="subsubsection-title">2.4.2 Suite divergente</h3>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>Pour tout $n\in \N$, on considère la suite $(u_n)$ définie par $u_n=n^2+1$. <br>
Calculons quelques termes de cette suite : <br>
$u_0=0^2+1=1$, $u_1=1^2+1=2$, $u_2=2^2+1=5$, $u_{10}=10^2+1=101$, $u_{100}=100^2+1=10001$.<br>
Plus $n$ devient grand, plus les termes de la suite semblent devenir grand.<br>
On dit que la suite $(u_n)$ diverge vers $+\infty$ et on note : $\underset{n\rightarrow +\infty}{\lim} u_n=+\infty$.</li>
<li>Pour tout $n\in \N$, on considère la suite $(v_n)$ définie par $v_{n+1}=(-1)^nv_n$ et $v_0=2$. <br> Calculons les premiers termes de cette suite : <br>
$v_1=(-1)^0v_0=2$, $v_2=(-1)^1v_1=-2$, $v_3=(-1)^2v_2=2$, $v_4=(-1)^3v_3=-2$, $v_5=(-1)^4v_4=2$.<br>
Plus $n$ devient grand, les termes de la suite ne semblent pas se rapprocher vers une valeur unique. On dit que la suite $(v_n)$ diverge.</li>
</ul>
</div>
</div>
