---
title: "Leçon complète"
---

Dans cette partie, $f$ est une fonction définie sur un intervalle $I$. $a$ et $a+h$ sont deux points distincts de $I$ avec $h\neq 0 $.

<h2 class="subsection-title">3.1 Nombre dérivé de $f$ en $a$</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Le <strong>taux d'accroissement</strong> (ou <strong>taux de variation</strong>) de la fonction $f$ entre $a$ et $a+h$ est le quotient $\dfrac{f(a+h)-f(a)}{h}$.
</div>
</div>
<div style="display:flex; gap:12px; align-items:flex-start;">
<div style="flex:1 1 0; min-width:0;">
<strong>Interprétation graphique</strong> <br>
Notons $A$ le point de coordonnées $\left(a ; f(a)\right)$
et $B$ le point de coordonnées $\left(a + h ; f(a + h)\right)$.<br>
Le coefficient directeur de la sécante $(AB)$ est égal à $\dfrac{y_B-y_A}{x_B-x_A}$, c'est-à-dire $\dfrac{f(a+h)-f(a)}{h}$, qui est le taux d'accroissement.
</div>
<img src="/mabemat/figures/1re/chapitre-03/fig1.svg" alt="figure 1" style="flex:1 1 0; min-width:0; max-height:200px; object-fit:contain; align-self:flex-start;">
</div>

<div class="remarque">
En cinématique, la variable est le temps et dans ce cas, le taux d'accroissement est la vitesse moyenne du mobile entre les instants $a$ et $a + h$ (lorsque son mouvement est décrit par la fonction $f$).
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Si le quotient $\dfrac{f(a+h)-f(a)}{h}$ tend vers un nombre réel lorsque $h$ tend vers $0$, on dit alors que la fonction $f$ est <strong>dérivable</strong> en $a$.<br>
Le nombre « limite » de ce quotient est appelé <strong>nombre dérivé de $f$ en $a$</strong>. On le note $f'(a)$.<br>
<br>
En langage mathématique condensé, on écrit : $\underset{h\rightarrow 0}{\lim} \dfrac{f(a+h)-f(a)}{h}=f'(a)$.
</div>
</div>

<div class="remarque">
En cinématique, la variable étant le temps, le nombre $f'(t)$ est la vitesse instantanée du mobile à l'instant $t$.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit la fonction $f$ définie sur $\R$ par $f(x) = x^2 + 2x - 1$.<br> Calculer, s'il existe le nombre dérivé de la fonction $f$ en $4$.<br>
On calcule le taux d'accroissement de $f$ entre $4$ et $4 + h$ avec $h \neq 0$.<br>
$\dfrac{f(4+h)-f(4)}{h}=\dfrac{(4+h)^2+2(4+h)-1-23}{h}=\dfrac{h^2+10h}{h}=\dfrac{h(h+10)}{h}=h+10$.<br>
Lorsque $h\rightarrow 0$ alors $h+10\rightarrow 10$.<br>
Donc $\underset{h\rightarrow 0}{\lim} \dfrac{f(4+h)-f(4)}{h}=10$ donc le nombre dérivé de $f$ en $4$ existe et $f'(4)=10$.
</div>
</div>

<h2 class="subsection-title">3.2 Tangente à la courbe d'une fonction</h2>
<div style="display:flex; gap:12px; align-items:center;">
<div style="flex:4 1 0; min-width:0;">
Soit $f$ une fonction définie sur un intervalle $I$ et dérivable en un réel $a\in I$.<br>
Notons $A$ le point de coordonnées $( a ; f(a) )$
et $M$ le point de coordonnées $( a + h ; f(a + h) )$ qui se déplace sur la courbe.<br>
Nous savons que le coefficient directeur de la sécante $(AM)$ est égal à $\dfrac{f(a+h)-f(a)}{h}$.<br>
Lorsque $h\rightarrow 0$, $\dfrac{f(a+h)-f(a)}{h}\rightarrow f'(a)$ puisque $f$ est dérivable.<br>
Et géométriquement, lorsque $h \rightarrow 0$, le point $M$ se rapproche de $A$ et la droite $(AM)$ se rapproche de la tangente et a pour position « limite » la droite qui passe par $A$ et de coefficient directeur $f'(a)$.
</div>
<img src="/mabemat/figures/1re/chapitre-03/Tangente.png" alt="Tangente" style="flex:1 1 0; min-width:0; max-height:200px; object-fit:contain;">
</div>
<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La <strong>tangente à la courbe $\mathcal{C}$ au point $A$ d'abscisse $a$</strong> est la droite passant par $A$ dont le coefficient directeur est le nombre dérivé de $f$ en $a$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Son équation est : $y =f'(a)(x-a )+ f(a)$
</div>
</div>

Démonstration. <br>
L'équation d'une droite est de la forme $y = mx + p $.<br>
D'après ce qu'on a vu précédemment, le coefficient directeur de la tangente est égal au nombre dérivé $f'(a)$, donc $m = f'(a) $. L'équation de la tangente est donc de la forme $y = f'(a)x + p $.
Le point $A (a ; f(a))$ appartient à la tangente donc $f(a)= f'(a)\times a+ p $, d'où $p=f(a)-a\times f'(a)$.<br>
Donc l'équation de la tangente est $y=f'(a)x+f(a)-a\times f'(a)$ c'est-à-dire $y=f'(a)(x-a)+f(a)$.


<div class="remarque">
Si $f'(a) = 0$, la tangente est horizontale.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit la fonction $f$ définie sur $\R$ par $f(x) = x^2 + 2x - 1$.
Cherchons l'équation de la tangente $T$ à la courbe représentative de $f$ au point $A$ d'abscisse $4$.<br>
On a montré que $f$ est dérivable en $4$ et que $f'(4) = 10$.<br>
$T$ a pour coefficient directeur $10$ (car $f'(4) = 10$) et passe par le point $A(4 ; 23)$ (car $f(4) = 23$). <br>
L'équation de $T$ est donc $y=10(x-4)+ 23=10x-40+ 23=10x-17$.
</div>
</div>
