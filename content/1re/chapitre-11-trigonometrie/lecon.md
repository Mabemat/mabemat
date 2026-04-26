---
title: "Leçon complète"
---

<h2 class="subsection-title">11.1 Cercle trigonométrique et radian</h2>

<h3 class="subsubsection-title">11.1.1 Cercle trigonométrique</h3>

<div style="display:inline-block; vertical-align:middle; width:calc(59% - 12px);">
Sur un cercle, deux sens de parcours sont possibles.<br>
On appelle <strong>plan orienté</strong>, un plan dans lequel tous les cercles sont orientés dans le sens contraire des aiguilles d'une montre, appelé <strong>sens direct ou sens trigonométrique</strong>. L'autre sens (celui des aiguilles d'une montre) est appelé sens indirect ou sens anti-trigonométrique.

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Un <strong>cercle trigonométrique</strong> est un cercle de centre $O$, de rayon $1$ et orienté dans le sens direct.
</div>
</div>
</div><img src="/mabemat/figures/1re/chapitre-11/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:middle; width:calc(39% - 12px); max-height:300px; max-width:100%;">

<h3 class="subsubsection-title">11.1.2 Enroulement de la droite des réels et radian</h3>

<div style="display:inline-block; vertical-align:middle; width:calc(73% - 12px);">
Soit $(O,I,J)$ un repère orthonormé du plan.
$\mathcal{C}$ est le cercle trigonométrique de centre $O$.
$d$ est la tangente au cercle $\mathcal{C}$ en $I$.
On considère la droite graduée $d$ comme la droite des réels avec pour origine $I$.<br>
À tout réel de la droite $d$, on fait correspondre un point sur le cercle trigonométrique en \og enroulant \fg{} la droite sur le cercle (comme une bobine de fil).
Les réels positifs s'enroulent dans le sens de rotation direct et les réels négatifs dans le sens indirect. L'association entre $x$ et $M$ s'exprime en disant :
<ul>
<li>le réel $x$ repère le point</li>
<li>$M$ est l'image de $x$ par enroulement de la droite réelle sur le cercle trigonométrique</li>
</ul>
</div><img src="/mabemat/figures/1re/chapitre-11/fig2.svg" alt="figure 2" style="display:inline-block; vertical-align:middle; width:calc(25% - 12px); max-height:200px; max-width:100%;">

<div class="environment definition" style="display:inline-block; vertical-align:middle; width:calc(83% - 12px);">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Dans un cercle trigonométrique, la <strong>mesure d'un angle en radian</strong> est donnée par la longueur de l'arc qu'il intercepte.<br>
En particulier, 1 radian est la mesure de l'angle $\widehat{IOM}$ si la longueur de l'arc $\overset{\frown}{IM}$ est égal à $1$ (dans le sens direct).
</div>
</div><img src="/mabemat/figures/1re/chapitre-11/fig3.svg" alt="figure 3" style="display:inline-block; vertical-align:middle; width:calc(15% - 12px); max-height:200px; max-width:100%;">

<div class="remarque">
Si le réel $x$ repère un point $M$, la longueur du cercle étant de $2\pi$, il est clair que les réels $x + 2\pi, x + 4\pi, x + 6\pi, x + 8\pi, ... ,$ ainsi que $x- 2\pi, x- 4\pi, ... $, repèrent le même point $M$.<br>
Par conséquent, si $x$ repère $M$ sur le cercle trigonométrique, alors tous les nombres de la forme $x + 2k\pi$, avec $k$ appartenant à $\Z$, repèrent le même point $M$.
</div>

<div class="environment methode">
<div class="environment-title">Méthode - Passage d'une mesure en degrés à une mesure en radian.</div>
<div class="environment-content">
La mesure d'un angle plat en radians est $\pi$ ( longueur d'un demi-cercle de rayon $1$). <br>
Donc à $180^\circ$ correspondent $\pi$ radians et inversement.
On a donc le tableau de proportionnalité :
<table>
<tr>
<th><strong>Mesure en degrés</strong></th>
<th>180</th>
</tr>
<tr>
<td>

<strong>Mesure en radians</strong></td>
<td>$\pi$</td>
</tr>
<tr>
</tr>
</table>

</div>
</div>


Quelques mesures d'angles remarquables et leurs positions sur le cercle trigonométrique <br>
<div style="display:inline-block; vertical-align:middle; width:calc(55% - 12px);">
<table>
<tr>
<th><strong>Mesure en degrés</strong></th>
<th>$0$</th>
<th>$30$</th>
<th>$45$</th>
<th>$60$</th>
<th>$90$</th>
<th>$120$</th>
<th>$180$</th>
<th>$360$</th>
</tr>
<tr>
<td><strong>Mesure en radians</strong></td>
<td>$0$</td>
<td>$\dfrac{\pi}{6}$</td>
<td>$\dfrac{\pi}{4}$</td>
<td>$\dfrac{\pi}{3}$</td>
<td>$\dfrac{\pi}{2}$</td>
<td>$\dfrac{2\pi}{3}$</td>
<td>$\pi$</td>
<td>$2\pi$</td>
</tr>
</table>
</div><img src="/mabemat/figures/1re/chapitre-11/fig4.svg" alt="figure 4" style="display:inline-block; vertical-align:middle; width:calc(43% - 12px); max-height:400px; max-width:100%;">



<h2 class="subsection-title">11.2 Cosinus et sinus d'un réel</h2>

<h3 class="subsubsection-title">11.2.1 Définition</h3>

<div class="environment definition" style="display:inline-block; vertical-align:middle; width:calc(69% - 12px);">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $x$ un nombre réel et $M$ le point associé à $x$ sur le cercle trigonométrique. Alors dans le repère $(O,I,J)$ :
<ul>
<li>Le cosinus de $x$, noté $\cos(x)$, est l'abscisse du point $M$.</li>
<li>Le sinus de $x$, noté $\sin(x)$, est l'ordonnée du point $M$.</li>
</ul>
</div>
</div><img src="/mabemat/figures/1re/chapitre-11/fig5.svg" alt="figure 5" style="display:inline-block; vertical-align:middle; width:calc(29% - 12px); max-height:300px; max-width:100%;">

<h3 class="subsubsection-title">11.2.2 Propriétés</h3>

<div style="display:inline-block; vertical-align:middle; width:calc(50% - 12px);">
<strong>Relation de symétrie</strong>  

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<strong>Avec l'angle opposé :</strong> 
<ul>
<li>$\sin(-x)=-\sin(x)$ </li>
<li>$\cos(-x)=\cos(x)$</li>
</ul>
<strong>Avec l'angle supplémentaire :</strong> 
<ul>
<li>$\sin(\pi-x)=\sin(x)$ </li>
<li>$\cos(\pi-x)=-\cos(x)$</li>
</ul>
  
<strong>Avec l'angle diamétralement opposé :</strong> 
<ul>
<li>$\sin(\pi+x)=-\sin(x)$ </li>
<li>$\cos(\pi+x)=-\cos(x)$</li>
</ul>
</div>
</div>
</div><img src="/mabemat/figures/1re/chapitre-11/fig6.svg" alt="figure 7" style="width:45%; max-height:300px; max-width:100%;">
<br>

<div style="display:flex; align-items:center; gap:20px;">

<img src="/mabemat/figures/1re/chapitre-11/fig7.svg" alt="figure 7" style="width:45%; max-height:300px; max-width:100%;">

<div style="width:50%;"> 
<strong>Relation de déphasage</strong>
<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<strong>Avec le complémentaire :</strong> 
<ul>
<li>$\sin\left(\dfrac{\pi}{2}-x\right)=\cos(x)$</li>
<li>$\cos\left(\dfrac{\pi}{2}-x\right)=\sin(x)$</li>
</ul>

<strong>Avec un déphasage d'un quart de tour :</strong> 
<ul>
<li>$\sin\left(\dfrac{\pi}{2}+x\right)=\cos(x)$ </li>
<li>$\cos\left(\dfrac{\pi}{2}+x\right)=-\sin(x)$</li>
</ul>
</div>
</div>
</div>

</div>


<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Simplifier l'expression :
$A=\cos\left(x+\dfrac{\pi}{2}\right)-3\cos\left(-\dfrac{\pi}{2}-x\right)-4\sin(\pi-x)$
<br>$A=-\sin(x)-3\cos\left(\dfrac{\pi}{2}+x\right)-4\sin(x)=-\sin(x)+3\sin(x)-4\sin(x)=-2\sin(x)$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout réel $x$, <br>
<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:2rem;">

<div>
$\textcolor{#B8C5A6}{\bullet}\;-1\leq \cos(x) \leq 1$
</div>

<div>
$\textcolor{#B8C5A6}{\bullet}\;-1\leq \sin(x) \leq 1$
</div>

<div>
$\textcolor{#B8C5A6}{\bullet}\;\cos^2(x)+\sin^2(x)=1$
</div>

</div>

</div>
</div>

Démonstration. <br>
Les deux premières inégalités sont évidentes (les points du cercle trigonométrique ont une abscisse et une ordonnée comprises entre $-1$ et $ 1$).<br>
Soit $B$ un point du cercle trigonométrique image du nombre réel $x$. On a $OB^2=1$. <br>Et dans un repère orthonormé, $OB^2=x_B^2+y_B^2=\cos^2(x)+\sin^2(x)$. Donc $\cos^2(x)+\sin^2(x)=1$.


<h3 class="subsubsection-title">11.2.3 Valeurs remarquables</h3>

On obtient donc le <strong>tableau des valeurs remarquables</strong> suivant :
<table>
<tr>
<th>Radians</th>
<th>$0$</th>
<th>$\dfrac{\pi}{6}$</th>
<th>$\dfrac{\pi}{4}$</th>
<th>$\dfrac{\pi}{3}$</th>
<th>$\dfrac{\pi}{2}$</th>
<th>$\pi$</th>
</tr>
<tr>
<td>Cosinus</td>
<td>$1$</td>
<td>$\dfrac{\sqrt{3}}{2}$</td>
<td>$\dfrac{\sqrt{2}}{2}$</td>
<td>$\dfrac{1}{2}$</td>
<td>$0$</td>
<td>$-1$</td>
</tr>
<tr>
<td>Sinus</td>
<td>$0$</td>
<td>$\dfrac{1}{2}$</td>
<td>$\dfrac{\sqrt{2}}{2}$</td>
<td>$\dfrac{\sqrt{3}}{2}$</td>
<td>$1$</td>
<td>$0$</td>
</tr>
</table>

On se servira ensuite du cercle trigonométrique pour obtenir les valeurs des cosinus et sinus d'angles supérieurs à $\dfrac{\pi}{2}$ ou inférieurs à $0$.

<div style="text-align:center;">
    <img src="/mabemat/figures/1re/chapitre-11/fig8.svg" alt="figure 8" style="max-height:400px; max-width:100%;">
</div>


<h2 class="subsection-title">11.3 Fonctions sinus et cosinus</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
On dit qu'une fonction $f$ est : 
<ul>
<li>paire si son ensemble de définition ($D_f$) est symétrique par rapport à $0$ et si pour tout $x\in D_f$, $f(-x)=f(x)$.<br></li>
<li>impaire si son ensemble de définition ($D_f$) est symétrique par rapport à $0$ et si pour tout $x\in D_f$, $f(-x)=-f(x)$.</li>
</ul>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Une fonction est paire (resp. impaire) si et seulement si sa courbe représentative est symétrique par rapport à l'axe des ordonnées (resp. à l'origine).
</div>
</div>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; align-items:center;">

<div>
<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La fonction <strong>cosinus</strong> définie sur $\R$ par $f(x)=\cos(x)$, est continue et dérivable, paire, $2\pi$-périodique et bornée par $-1$ et $1$.<br>
Pour tout $x\in \R$, $\cos'(x)=-\sin(x)$.
</div>
</div>
<div style="text-align:center;">
<u>Tableau de variations</u></div><br><br>
<div style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-11/t1.png" alt="tableau cosinus" style="max-height:150px; max-width:100%;">
</div></div>

<div>
<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La fonction <strong>sinus</strong> définie sur $\R$ par $f(x)=\sin(x)$, est continue et dérivable, impaire, $2\pi$-périodique et bornée par $-1$ et $1$.<br>
Pour tout $x\in \R$, $\sin'(x)=\cos(x)$.
</div>
</div>
<div style="text-align:center;">
<u>Tableau de variations</u></div><br><br>
<div style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-11/t2.png" alt="tableau sinus" style="max-height:150px; max-width:100%;">
</div></div>

</div>

<div style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-11/fig11.svg" alt="figure 11" style="max-height:200px; max-width:100%;">
</div>

