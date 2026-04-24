---
title: "Leçon complète"
---

<h2 class="subsection-title">5.1 Fonctions dérivées</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Dire qu'une fonction est dérivable sur un intervalle $I$ signifie que la fonction est dérivable en tout point $x$ de l'intervalle $I$.<br>
Alors la fonction qui à chaque réel $x$ de $I$ associe le nombre dérivé $f'(x)$ est appelée la fonction dérivée de $f$ et est notée $f'$.
</div>
</div>

<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; align-items:center;">

<!-- Colonne 1 : tableau -->
<div>
<table>
<tr>
<th>Fonction $f$</th>
<th>Définie sur...</th>
<th>Dérivable sur...</th>
<th>Dérivée $f'$</th>
</tr>
<tr>
<td>$c$ (constante)</td>
<td>$\R$</td>
<td>$\R$</td>
<td>$0$</td>
</tr>
<tr>
<td>$mx+p$</td>
<td>$\R$</td>
<td>$\R$</td>
<td>$m$</td>
</tr>
<tr>
<td>$x^2$</td>
<td>$\R$</td>
<td>$\R$</td>
<td>$2x$</td>
</tr>
<tr>
<td>$x^3$</td>
<td>$\R$</td>
<td>$\R$</td>
<td>$3x^2$</td>
</tr>
<tr>
<td>$x^n$ avec $n\in\N$</td>
<td>$\R$</td>
<td>$\R$</td>
<td>$nx^{n-1}$</td>
</tr>
<tr>
<td>$\sqrt{x}$</td>
<td>$[0;+\infty[$</td>
<td>$]0;+\infty[$</td>
<td>$\dfrac{1}{2\sqrt{x}}$</td>
</tr>
<tr>
<td>$\dfrac{1}{x}$</td>
<td>$\R^*$</td>
<td>$\R^*$</td>
<td>$-\dfrac{1}{x^2}$</td>
</tr>
</table>
</div>

<!-- Colonne 2 : remarque -->
<div>
<div class="remarque">
<ul>
<li>$\sqrt{x}$ est la seule fonction usuelle dont le domaine de définition diffère du domaine de dérivabilité.</li>
<li>Les démonstrations de ce tableau sont en dernière page du chapitre.</li>
</ul>
</div>
</div>

</div>


<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit $f(x)=\dfrac{1}{x}$ et $\mathcal{C}_f$ sa courbe représentative.<br>
Déterminer l'équation de la tangente à $\mathcal{C}_f$ au point d'abscisse $2$.
<br> Pour tout $x\in \R^\ast$, $f'(x)=-\dfrac{1}{x^2}$.<br>
Le coefficient directeur de la tangente au point d'abscisse $2$ est donc $f'(2)=-\dfrac{1}{2^2}=-\dfrac{1}{4}$.<br>
De plus, $f(2)=\dfrac{1}{2}$. Il reste à appliquer la formule donnant l'équation de la tangente : <br>$y=f'(2)(x-2)+f(2)$ donc l'équation est : $y=-\dfrac{1}{4}(x-2)+\dfrac{1}{2}=-\dfrac{1}{4}x+\dfrac{2}{4}+\dfrac{1}{2}=-\dfrac{1}{4}x+1$.
</div>
</div>

<h2 class="subsection-title">5.2 Opérations sur les fonctions dérivables</h2>

Soient $u$ et $v$ deux fonctions dérivables sur $D$. Soit $a$ un réel de $D$ et $h\neq 0$ un réel tel que $a+h$ appartient à $D$.

<h3 class="subsubsection-title">5.2.1 Somme de fonctions</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Si $f(x)=u(x)+v(x)$ alors $f$ est dérivable sur $D$, et, pour tout $x$ de $D$ : $f'(x)=u'(x)+v'(x)$.
</div>
</div>

Démonstration. <br>
Pour tout $a$ de $D$ : $\dfrac{f(a+h)-f(a)}{h}=\dfrac{u(a+h)+v(a+h)-u(a)-v(a)}{h}=\dfrac{u(a+h)-u(a)}{h}+\dfrac{v(a+h)-v(a)}{h}$.<br>
Or, $\underset{h\rightarrow 0}{\lim}\left( \dfrac{u(a+h)-u(a)}{h}\right)=u'(a)$ et $\underset{h\rightarrow 0}{\lim}\left( \dfrac{v(a+h)-v(a)}{h}\right)=v'(a)$ donc $\underset{h\rightarrow 0}{\lim}\left( \dfrac{f(a+h)-f(a)}{h}\right)=u'(a)+v'(a)$.<br>
D'où, pour tout $x$ de $D$ : $f'(x)=u'(x)+v'(x)$.
 

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Calculons la dérivée de $f(x)=2x^2+5x+3$.
<br> Il suffit de dériver chaque composant de $f$ : $f'(x)=2\times (2x)+5\times 1 + 0$ donc $f'(x)=4x+5$.
</div>
</div>

<h3 class="subsubsection-title">5.2.2 Produit de fonctions</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Si $f(x)= u(x).v(x)$, alors $f$ est dérivable sur $D$, et, pour tout $x$ de $D$ : $f'(x)= u'(x) v(x)+ u(x) v'(x)$.
</div>
</div>

Démonstration.

Pour tout $a$ de $D$ : $\tau(h)=\dfrac{f(a+h)-f(a)}{h}=\dfrac{u(a+h)v(a+h)-u(a)v(a)}{h}$.<br>
Pour faire apparaître des quotients dont on connaît la limite $\left(\dfrac{u(a+h)-u(a)}{h} \text{ et } \dfrac{v(a+h)-v(a)}{h}\right)$, on ajoute et on soustrait $u(a) v(a+ h)$ au numérateur.<br>
Ainsi, $\tau(h)=\dfrac{u(a+h)v(a+h)-u(a) v(a+ h)+u(a) v(a+ h)-u(a)v(a)}{h}=\\ \dfrac{[u(a+h)-u(a)]v(a+h)+u(a)[v(a+h)-v(a)]}{h}=\left(\dfrac{u(a+h)-u(a)}{h}\right)\times v(a+h) +u(a)\times \left(\dfrac{v(a+h)-v(a)}{h}\right)$.
<br>Or, $\underset{h\rightarrow 0}{\lim}\left( \dfrac{u(a+h)-u(a)}{h}\right)=u'(a)$ et $\underset{h\rightarrow 0}{\lim}\left( \dfrac{v(a+h)-v(a)}{h}\right)=v'(a)$. De plus, on admet que $\underset{h\rightarrow 0}{\lim} v(a+h)=v(a)$.<br>
On obtient alors $\tau(h)=u'(a)v(a)+u(a)v'(a)$, d'où pour tout $x$ de $D$ : $f'(x)=u'(x)v(x)+u(x)v'(x)$.

 

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit $f(x)=(2x-3)(x^2+ 5x-4)$.
<br> On a alors $f(x)=u(x)v(x)$ avec $u(x)=2x-3$ et $v(x)=x^2+5x-4$. <br>
Or $u'(x)=2$ et $v'(x)=2x+5$.<br>
D'après la propriété : $f'(x)=u'(x)v(x)+u(x)v'(x)=2(x^2+5x-4)+(2x-3)(2x+5)=6x^2+14x-23$. <br>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété - Produit d'une fonction par un réel $k$ non nul.</div>
<div class="environment-content">
Soit $k$ un réel non nul.<br>
Si $f(x)=ku(x)$, alors $f$ est dérivable sur $D$ et, pour tout $x$ de $D$ : $f'(x)=ku'(x)$.
</div>
</div>

<h3 class="subsubsection-title">5.2.3 Inverse d'une fonction</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
On suppose que $u(x)$ ne s'annule pas sur l'ensemble $D$.<br>
Si $f=\dfrac{1}{u}$ alors $f$ est dérivable sur $D$, et pour tout $x$ de $D$ : $f'(x)=\dfrac{-u'(x)}{u(x)^2}$.
</div>
</div>

Démonstration.
On a $u=\dfrac{1}{v}$ donc $uv=1$ d'où $(uv)'=0$, soit $u'v+uv'=0$, c'est-à-dire $u'v=-uv'=-\dfrac{1}{v}v'$, donc $u'=-\dfrac{v'}{v^2}$.
 

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit $f(x)=\dfrac{1}{3x-4}$ définie et dérivable sur $\R \setminus \left\{\dfrac{4}{3}\right\}$.
<br> On a alors $f(x)=\dfrac{1}{u(x)}$ avec $u(x)=3x-4$. Or, $u'(x)=3$. D'après la propriété : $f'(x)=\dfrac{-3}{(3x-4)^2}$.
</div>
</div>

<h3 class="subsubsection-title">5.2.4 Quotient de deux fonctions</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
On suppose que $v(x)$ ne s'annule pas sur l'ensemble $D$.<br>
Si $f=\dfrac{u}{v}$ alors $f$ est dérivable sur $D$, et pour tout $x$ de $D$ : $f'(x)=\dfrac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}$.
</div>
</div>

Démonstration.
Il suffit d'écrire $f=u\times \dfrac{1}{v}$ et d'appliquer les propriétés précédentes.<br>
D'après ces propriétés, $f$ est dérivable sur $D$, et, pour tout $x$ de $D$ : $\left(\dfrac{u}{v}\right)'=u'\times \dfrac{1}{v}+u\times \dfrac{-v'}{v^2}=\dfrac{u'v-uv'}{v^2}$.
 

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Calculons la dérivée de $f(x)=\dfrac{2x+1}{5x+3}$ définie et dérivable sur $\R\setminus \left\{\dfrac{-3}{5}\right\}$.
<br> On a $f(x)=\dfrac{u(x)}{v(x)}$ avec $u(x)=2x+1$ et $v(x)=5x+3$. On a du coup, $v'(x)=5$ et $u'(x)=2$.<br>
$f'(x)=\dfrac{u'v+uv'}{v^2}=\dfrac{2(5x+3)-5(2x+1)}{(5x+3)^2}=\dfrac{1}{(5x+3)^2}$.
</div>
</div>

<h3 class="subsubsection-title">5.2.5 Composée de fonction avec une affine</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Si $g$ est une fonction dérivable sur un intervalle $I$ et $J$ est un intervalle tel que, pour tout réel $x$ de $J$, $ax+b$ appartient à $I$, alors la fonction définie sur $J$ par $f(x)=g(ax+b)$ est dérivable sur $J$. <br>
De plus, pour tout $x\in J$, $f'(x)=[g(ax+b)]'=ag'(ax+b)$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit $f$ la fonction définie sur $[\dfrac{4}{5};{+\infty}[$ par $f(x)=\sqrt{5x-4}$, elle est dérivable sur $[\dfrac{4}{5};+\infty[$. <br>On a $(5x-4)'=5$ et $\left(\sqrt{x}\right)'=\dfrac{1}{2\sqrt{x}}$.<br>
Ainsi, $f'(x)=5\dfrac{1}{2\sqrt{5x-4}}=\dfrac{5}{2\sqrt{5x-4}}$.
</div>
</div>

<h2 class="subsection-title">5.3 Autres dérivées</h2>

<h3 class="subsubsection-title">5.3.1 Fonction dérivée de $x\mapsto x^n$, où $n\in \Z$</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $n$ un entier relatif non nul. On considère la fonction $f$ définie par $f(x)=x^n$.<br>
Si $n\geq 0$, alors la fonction $f$ est définie et dérivable sur $\R$.<br>
Si $n<0$ alors, $f$ est définie et dérivable sur $\R^\ast$.<br>
Dans les deux cas, la dérivée est $f'(x)=nx^{n-1}$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit $f$ la fonction définie sur $\R$ par $f(x)=x^8$. $f$ est dérivable sur $\R$ et pour tout $x$, $f'(x)=8x^7$.<br>
Soit $g$ la fonction définie pour tout $x\in \R^\ast$ par $g(x)=\dfrac{1}{x^2}$. On remarque que $g(x)=x^{-2}$. <br>
Ainsi, $g$ est dérivable sur $\R^\ast$ et pour tout $x \in \R^\ast$, $g'(x)=-2x^{-2-1}=-2x^{-3}=\dfrac{-2}{x^3}$.

</div>
</div>

<h3 class="subsubsection-title">5.3.2 Fonction valeur absolue</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
On appelle "fonction valeur absolue" la fonction $f$ définie sur $\R$ par $f(x)=\vert x \vert$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">

<ul style="column-count:3; column-gap:2rem; margin:0; padding:0; list-style:disc inside;">
<li>$\lvert 4 \rvert = 4$.</li> <br>

<li>$\lvert -2 \rvert = 2$.</li>

<li>
$\lvert x-5 \rvert =
\begin{cases}
x-5 & \text{si } x\ge 5 \\
5-x & \text{si } x\le 5
\end{cases}$
</li>
</ul>


</div>
</div>

<div style="display:inline-block; vertical-align:middle; width:calc(49% - 12px);">
La représentation graphique de la fonction valeur absolue dans un repère $(O;\vec{i};\vec{j})$ d'origine $O$ est la réunion de deux demi-droites $d_1$ et $d_2$ d'origine $O$ et situées au-dessus de l'axe des abscisses.
</div><img src="/mabemat/figures/1re/chapitre-05/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:middle; width:calc(49% - 12px); max-height:200px; max-width:100%;">

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $f$ la fonction valeur absolue.
Pour tout $x\neq 0$, $f$ est dérivable.<br>
Si $x<0$, alors $f'(x)=-1$.<br>
Si $x>0$, alors $f'(x)=1$.<br>
La valeur absolue n'est pas dérivable en $0$.
</div>
</div>

Démonstration. Tableau du 5.1 
<ol>
<li>Soit $f$ la fonction constante définie sur $\R$ par $f(x) = k$ avec $k\in \R$. Pour tout réel $a$ et $h\neq 0$, on a :<br>
$\dfrac{f(a+h)-f(a)}{h}=\dfrac{k-k}{h}=0$.</li>
<li>Soit $f$ la fonction définie sur $\R$ par $f(x) = mx+p$. Pour tout réel $a$ et $h\neq 0$, on a :<br>
$\dfrac{f(a+h)-f(a)}{h}=\dfrac{m(a+h)+p-(ma+p)}{h}=\dfrac{ma+mh+p-ma-p}{h}=\dfrac{mh}{h}=m$.<br>
Or lorsque $h$ tend vers $0$, $m$ tend vers $m$. Donc $f'(x) = m$ sur $\R$.</li>
<li>Soit $f$ la fonction définie sur $\R$ par $f(x) = x^2$. Pour tout réel $a$ et $h\neq 0$, on a :<br>
$\dfrac{f(a+h)-f(a)}{h}=\dfrac{(a+h)^2-a^2}{h}=\dfrac{a^2+2ah+h^2-a^2}{h}=\dfrac{2ah+h^2}{h}=2a+h$.<br>
Or lorsque $h$ tend vers $0$, $2a+h$ tend vers $2a$. Donc $f'(x) = 2x$ sur $\R$.</li>
<li>Soit $f$ la fonction définie sur $\R$ par $f(x) = x^3$. Pour tout réel $a$ et $h\neq 0$, on a :<br>
$\dfrac{f(a+h)-f(a)}{h}=\dfrac{(a+h)^3-a^3}{h}=\dfrac{a^3+3a^2h+3ah^2+h^3-a^3}{h}=\dfrac{3a^2h+3ah^2+h^3}{h}=3a^2+3ah+h^2$.<br>
Or lorsque $h$ tend vers $0$, $3a^2+3ah+h^2$ tend vers $3a^2$. Donc $f'(x) = 3x^2$ sur $\R$.</li>
<li>Soit $f$ la fonction définie sur $[0;{+\infty}[$ par $f(x) = \sqrt{x}$. Pour tout réel $a>0$ et $h\neq 0$, on a :<br>
$\dfrac{f(a+h)-f(a)}{h}=\dfrac{\sqrt{a+h}-\sqrt{a}}{h}=\dfrac{\left(\sqrt{a+h}-\sqrt{a}\right)\left(\sqrt{a+h}+\sqrt{a}\right)}{h\left(\sqrt{a+h}+\sqrt{a}\right)}=\dfrac{\left(\sqrt{a+h}\right)^2-\left(\sqrt{a}\right)^2}{h\left(\sqrt{a+h}+\sqrt{a}\right)}\\=\dfrac{a+h-a}{h\left(\sqrt{a+h}+\sqrt{a}\right)}=\dfrac{1}{\sqrt{a+h}+\sqrt{a}}$. Or lorsque $h$ tend vers $0$, $\sqrt{a+h}+\sqrt{a}$ tend vers $2\sqrt{a}$. <br>En $0$, on a $\dfrac{f(0+h)-f(0)}{h}=\dfrac{\sqrt{h}}{h}=\dfrac{1}{\sqrt{h}}\underset{h\longrightarrow 0}{\longrightarrow} +\infty$. Donc $f'(x) = \dfrac{1}{2\sqrt{x}}$ sur $[0;+\infty[$.</li>
<li>Soit $f$ la fonction définie sur $\R^\ast$ par $f(x) = \dfrac{1}{x}$. Pour tout réel $a\neq 0$ et $h\neq 0$, on a :<br>
$\dfrac{f(a+h)-f(a)}{h}=\dfrac{\dfrac{1}{a+h}-\dfrac{1}{a}}{h}=\dfrac{\dfrac{-h}{a(a+h)}}{h}=\dfrac{-h}{a(a+h)}\times \dfrac{1}{h}=\dfrac{-1}{a(a+h)}$.<br>
Or lorsque $h$ tend vers $0$, $\dfrac{-1}{a(a+h)}$ tend vers $-\dfrac{1}{a^2}$. Donc $f'(x) = -\dfrac{1}{x^2}$ sur $\R^\ast$.</li>
</ol>

 
