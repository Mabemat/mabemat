---
title: "Leçon complète"
---

<h2 class="subsection-title">12.1 Cercle trigonométrique et radian</h2>

<h3 class="subsubsection-title">12.1.1 Cercle trigonométrique</h3>
<div style="display:flex; align-items:center; gap:20px;">
<div style="display:inline-block; vertical-align:middle; width:calc(59% - 12px);">
Sur un cercle, deux sens de parcours sont possibles.<br>
On appelle <strong>plan orienté</strong>, un plan dans lequel tous les cercles sont orientés dans le sens contraire des aiguilles d'une montre, appelé <strong>sens direct ou sens trigonométrique</strong>. L'autre sens (celui des aiguilles d'une montre) est appelé sens indirect ou sens anti-trigonométrique.

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Un <strong>cercle trigonométrique</strong> est un cercle de centre $O$, de rayon $1$ et orienté dans le sens direct.
</div>
</div>
</div><img src="/mabemat/figures/1re/chapitre-12/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:middle; width:calc(39% - 12px); max-height:300px; max-width:100%;">
</div>
<h3 class="subsubsection-title">12.1.2 Enroulement de la droite des réels et radian</h3>
<div style="display:flex; align-items:center; gap:20px;">
<div style="display:inline-block; vertical-align:middle; width:calc(60% - 12px);">
Soit $(O,I,J)$ un repère orthonormé du plan.
$\mathcal{C}$ est le cercle trigonométrique de centre $O$.
$d$ est la tangente au cercle $\mathcal{C}$ en $I$.
On considère la droite graduée $d$ comme la droite des réels avec pour origine $I$.<br>
À tout réel de la droite $d$, on fait correspondre un point sur le cercle trigonométrique en « enroulant » la droite sur le cercle (comme une bobine de fil).
Les réels positifs s'enroulent dans le sens de rotation direct et les réels négatifs dans le sens indirect. L'association entre $x$ et $M$ s'exprime en disant : 
<ul>
<li>le réel $x$ repère le point</li>
<li>$M$ est l'image de $x$ par enroulement de la droite réelle sur le cercle trigonométrique</li>
</ul>
</div><img src="/mabemat/figures/1re/chapitre-12/fig2.svg" alt="figure 2" style="display:inline-block; vertical-align:middle; width:calc(35%); max-height:400px; max-width:100%;">
</div>
<div style="display:flex; align-items:center; gap:20px;">
<div class="environment definition" style="display:inline-block; vertical-align:middle; width:calc(70% - 12px);">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Dans un cercle trigonométrique, la <strong>mesure d'un angle en radian</strong> est donnée par la longueur de l'arc qu'il intercepte.<br>
En particulier, 1 radian est la mesure de l'angle $\widehat{IOM}$ si la longueur de l'arc $\overset{\frown}{IM}$ est égal à $1$ (dans le sens direct).
</div>
</div><img src="/mabemat/figures/1re/chapitre-12/fig3.svg" alt="figure 3" style="display:inline-block; vertical-align:middle; width:calc(25% - 12px); max-height:200px;min-height:200px; max-width:100%;">
</div>
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


Quelques mesures d'angles remarquables et leurs positions sur le cercle trigonométrique 
<div style="display:flex; align-items:center; gap:20px;">
<div style="display:inline-block; vertical-align:middle; width:calc(75%);">
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
</div><img src="/mabemat/figures/1re/chapitre-12/fig4.svg" alt="figure 4" style="display:inline-block; vertical-align:middle; width:calc(25%); max-height:400px; max-width:100%;">
</div>


<h2 class="subsection-title">12.2 Cosinus et sinus d'un réel</h2>

<h3 class="subsubsection-title">12.2.1 Définition</h3>
<div style="display:flex; align-items:center; gap:20px;">
<div class="environment definition" style="display:inline-block; vertical-align:middle; width:calc(69% - 12px);">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $x$ un nombre réel et $M$ le point associé à $x$ sur le cercle trigonométrique. Alors dans le repère $(O,I,J)$ :
<ul>
<li>Le cosinus de $x$, noté $\cos(x)$, est l'abscisse du point $M$.</li>
<li>Le sinus de $x$, noté $\sin(x)$, est l'ordonnée du point $M$.</li>
</ul>
</div>
</div><img src="/mabemat/figures/1re/chapitre-12/fig5.svg" alt="figure 5" style="display:inline-block; vertical-align:middle; width:calc(29% - 12px); max-height:300px; max-width:100%;">
</div>
<h3 class="subsubsection-title">12.2.2 Propriétés</h3>
<div style="display:flex; align-items:center; gap:20px;">
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
</div><img src="/mabemat/figures/1re/chapitre-12/fig6.svg" alt="figure 6" style="display:inline-block; vertical-align:middle; width:calc(45% - 12px); max-height:300px; max-width:100%;">
</div>

<div style="display:flex; align-items:center; gap:20px;">

<img src="/mabemat/figures/1re/chapitre-12/fig7.svg" alt="figure 7" style="width:45%; max-height:300px; max-width:100%;">

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

<h3 class="subsubsection-title">12.2.3 Valeurs remarquables</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem;">
<div>$\cos\left(\dfrac{\pi}{4}\right)=\sin\left(\dfrac{\pi}{4}\right)=\dfrac{\sqrt{2}}{2}$</div>
<div>$\cos\left(\dfrac{\pi}{3}\right)=\dfrac{1}{2}$ et $\sin\left(\dfrac{\pi}{3}\right)=\dfrac{\sqrt{3}}{2}$</div>
</div>
</div>
</div>

<div style="display:flex; gap:12px; justify-content:center; align-items:flex-start;">
<img src="/mabemat/figures/1re/chapitre-12/pi4.svg" alt="valeurs en pi/4" style="flex:1 1 0; min-width:0; max-height:260px; object-fit:contain;">
<img src="/mabemat/figures/1re/chapitre-12/pi3.svg" alt="valeurs en pi/3" style="flex:1 1 0; min-width:0; max-height:260px; object-fit:contain;">
</div>

Démonstration. <br>
<strong>Valeurs en $\dfrac{\pi}{4}$.</strong> Soit $M$ le point image de $\dfrac{\pi}{4}$ sur le cercle trigonométrique.<br>
Comme $\dfrac{\pi}{4}$ est la moitié de $\dfrac{\pi}{2}$, la demi-droite $[OM)$ est la bissectrice de l'angle droit formé par les deux demi-axes : le point $M$ appartient donc à la droite d'équation $y=x$. Ses deux coordonnées sont égales, c'est-à-dire $\cos\left(\dfrac{\pi}{4}\right)=\sin\left(\dfrac{\pi}{4}\right)$.<br>
En reportant dans $\cos^2(x)+\sin^2(x)=1$, on obtient $2\cos^2\left(\dfrac{\pi}{4}\right)=1$, donc $\cos^2\left(\dfrac{\pi}{4}\right)=\dfrac{1}{2}$.<br>
Le point $M$ est dans le premier quadrant, donc $\cos\left(\dfrac{\pi}{4}\right)>0$ et finalement
$\cos\left(\dfrac{\pi}{4}\right)=\sqrt{\dfrac{1}{2}}=\dfrac{1}{\sqrt{2}}=\dfrac{\sqrt{2}}{2}$. <br>
Il en va de même pour le sinus.<br><br>
<strong>Valeurs en $\dfrac{\pi}{3}$.</strong> Soit $M$ le point image de $\dfrac{\pi}{3}$ et $A$ celui de $0$, c'est-à-dire $A(1\,;\,0)$.<br>
Le triangle $OAM$ vérifie $OA=OM=1$ (ce sont deux rayons du cercle) : il est isocèle en $O$. Son angle au sommet mesure $\dfrac{\pi}{3}$, donc ses deux angles à la base mesurent chacun $\dfrac{1}{2}\left(\pi-\dfrac{\pi}{3}\right)=\dfrac{\pi}{3}$.<br>
Ses trois angles sont égaux : le triangle $OAM$ est donc <strong>équilatéral</strong>, de côté $1$.<br>
Notons $H$ le pied de la hauteur issue de $M$. Dans un triangle équilatéral, cette hauteur est aussi une médiane, donc $H$ est le milieu de $[OA]$ et $OH=\dfrac{1}{2}$.<br>
Or $H$ a la même abscisse que $M$, donc $\cos\left(\dfrac{\pi}{3}\right)=\dfrac{1}{2}$.<br>
Enfin, $\cos^2(x)+\sin^2(x)=1$ donne $\sin^2\left(\dfrac{\pi}{3}\right)=1-\dfrac{1}{4}=\dfrac{3}{4}$. <br>
Le point $M$ est dans le premier quadrant, donc $\sin\left(\dfrac{\pi}{3}\right)>0$ et $\sin\left(\dfrac{\pi}{3}\right)=\sqrt{\dfrac{3}{4}}=\dfrac{\sqrt{3}}{2}$.

<div class="remarque">
Les valeurs en $\dfrac{\pi}{6}$ s'en déduisent avec les relations de déphasage :
$$\cos\left(\dfrac{\pi}{6}\right)=\cos\left(\dfrac{\pi}{2}-\dfrac{\pi}{3}\right)=\sin\left(\dfrac{\pi}{3}\right)=\dfrac{\sqrt{3}}{2}
\quad \text{ et } \quad
\sin\left(\dfrac{\pi}{6}\right)=\sin\left(\dfrac{\pi}{2}-\dfrac{\pi}{3}\right)=\cos\left(\dfrac{\pi}{3}\right)=\dfrac{1}{2}.$$
</div>

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
    <img src="/mabemat/figures/1re/chapitre-12/fig8.svg" alt="figure 8" style="max-height:400px; max-width:100%;">
</div>

<h2 class="subsection-title">12.3 Résolution d'équations par lecture du cercle</h2>

Résoudre une équation du type $\cos(x)=a$ revient à chercher les points du cercle trigonométrique dont l'<strong>abscisse</strong> vaut $a$, puis à lire les réels qui les repèrent.

<div class="environment methode">
<div class="environment-title">Méthode - Résoudre $\cos(x)=a$ sur un intervalle.</div>
<div class="environment-content">
<ul>
<li>On place le nombre $a$ sur l'axe des abscisses et on trace la droite <strong>verticale</strong> passant par ce point.</li>
<li>Cette droite coupe le cercle en $0$, $1$ ou $2$ points.</li>
<li>On lit les réels associés à ces points, en ne gardant que ceux qui appartiennent à l'intervalle demandé.</li>
</ul>
Pour $\sin(x)=a$, on procède de même avec la droite <strong>horizontale</strong>, puisque le sinus est une ordonnée.
</div>
</div>

<div class="remarque">
L'équation $\cos(x)=a$ n'a <strong>aucune</strong> solution lorsque $a<-1$ ou $a>1$, puisque $-1\leq \cos(x)\leq 1$. <br>
Il en va de même pour le sinus.<br>
Les solutions dépendent de l'<strong>intervalle de résolution</strong> : il faut toujours commencer par repérer cet intervalle sur le cercle.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:flex; align-items:center; gap:20px;">
<div style="flex:1;">
Résoudre $\cos(x)=\dfrac{\sqrt{2}}{2}$ sur $]-\pi\,;\,\pi]$.<br>
On trace la droite verticale d'équation $x=\dfrac{\sqrt{2}}{2}$ : elle coupe le cercle en deux points (figure ci-contre).<br>
Le premier est le point image de $\dfrac{\pi}{4}$. Le second est son symétrique par rapport à l'axe des abscisses : c'est donc le point image de $-\dfrac{\pi}{4}$, ce qui est cohérent avec $\cos(-x)=\cos(x)$.<br>
Ces deux réels appartiennent bien à $]-\pi\,;\,\pi]$, donc $S=\left\lbrace -\dfrac{\pi}{4}\,;\,\dfrac{\pi}{4}\right\rbrace$.
</div>
<img src="/mabemat/figures/1re/chapitre-12/eq-cos.svg" alt="résolution de cos(x)=racine de 2 sur 2" style="width:36%; max-height:280px; object-fit:contain;">
</div>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:flex; align-items:center; gap:20px;">
<div style="flex:1;">
Résoudre $2\sin(x)+1=0$ sur $]-\pi\,;\,\pi]$.<br>
On isole d'abord le sinus : l'équation s'écrit $\sin(x)=-\dfrac{1}{2}$.<br>
On trace la droite <strong>horizontale</strong> d'équation $y=-\dfrac{1}{2}$ : elle coupe le cercle en deux points.<br>
Le premier est le point image de $-\dfrac{\pi}{6}$, car
$\sin\left(-\dfrac{\pi}{6}\right)=-\sin\left(\dfrac{\pi}{6}\right)=-\dfrac{1}{2}$.<br>
Le second est son symétrique par rapport à l'axe des <strong>ordonnées</strong> ; d'après la relation $\sin(\pi-x)=\sin(x)$, c'est le point image de $\pi-\left(-\dfrac{\pi}{6}\right)=\dfrac{7\pi}{6}$.<br>
Or $\dfrac{7\pi}{6}$ n'appartient pas à $]-\pi\,;\,\pi]$ : on lui retire un tour complet, ce qui donne $\dfrac{7\pi}{6}-2\pi=-\dfrac{5\pi}{6}$.<br>
Finalement $S=\left\lbrace -\dfrac{5\pi}{6}\,;\,-\dfrac{\pi}{6}\right\rbrace$.
</div>
<img src="/mabemat/figures/1re/chapitre-12/eq-sin.svg" alt="résolution de sin(x)=-1/2" style="width:36%; max-height:280px; object-fit:contain;">
</div>
</div>
</div>

<div class="remarque">
Un même point du cercle est repéré par une infinité de réels, qui diffèrent d'un nombre entier de tours. C'est pourquoi on ajoute ou on retire des $2\pi$ jusqu'à tomber dans l'intervalle demandé, comme dans le second exemple.
</div>
