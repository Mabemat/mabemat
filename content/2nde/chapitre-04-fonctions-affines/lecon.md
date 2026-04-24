---
title: "Leçon complète"
---

<h2 class="subsection-title">4.1 Définition et représentation graphique</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
$a$ et $b$ sont deux réels donnés.<br>
La fonction définie sur $\R$ par $f : x\mapsto ax+b$ est appelée <strong><u>fonction affine</u></strong>, elle est représentée par une droite (non verticale) où :
<ul>
<li>Le réel $a$ est le <strong>coefficient directeur</strong> de cette droite,</li>
<li>Le réel $b$ est <strong>l'ordonnée à l'origine</strong>.</li>
</ul>
Dans le cas où $b=0$, la fonction est appelée<strong> <u>fonction linéaire</u></strong>, représentée par un droite passant par l'origine.
</div>
</div>

Comme pour n'importe quelle fonction, pour tracer une fonction affine, on choisit des points que l'on place dans un repère (deux suffisent, éventuellement un troisième pour vérifier !)

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(49% - 12px);">
Pour chacune des fonctions affines suivantes, déterminer $a$ et $b$ puis représenter les graphiquement :
<ul>
<li>$f(x)=x+1$ $\quad\quad$ $a=1$ et $b=1$</li>
<li>$g(x)=2$ $\quad\quad\quad\quad$ $a=0$ et $b=2$</li>
<li>$h(x)=-3x-2$ $\quad\quad$ $a=-3$ et $b=-2$</li>
<li>$k(x)=\dfrac{3}{4}x-3$ $\quad\quad$ $a=\dfrac{3}{4}$ et $b=-3$</li>
</ul>
</div><img src="/mabemat/figures/2nde/chapitre-04/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:middle; width:calc(49% - 12px); max-height:300px; max-width:100%;">
</div>
</div>

<h2 class="subsection-title">4.2 Sens de variation</h2>

<div class="environment propriete">
<div class="environment-title">Propriétés :</div>
<div class="environment-content">
Soit $f$ une fonction affine définie par $f(x)=ax+b$, alors :
<ul>
<li>Si $a>0$, $f$ est croissante sur $\R$,</li>
<li>Si $a<0$, $f$ est décroissante sur $\R$,</li>
<li>Si $a=0$, $f$ est constante sur $\R$.</li>
</ul>
</div>
</div>

<div class="remarque">
Soient $m$ et $p$ deux nombres réels tels que $m < p$. $f(p)-f(m) = (ap +b ) - (am + b) = a(p - m)$. <br>
On sait que $m < p$ donc $p - m > 0$.
Le signe de $f(p) - f(m)$ est le même que celui de $a$.
<ul>
<li>Si $a>0$, alors $f(p)-f(m)>0$ soit $f(m)<f(p)$.
Donc $f$ est croissante sur $\R$.</li>
<li>Si $a<0$, alors $f(p)-f(m)<0$ soit $f(m)>f(p)$.
Donc $f$ est décroissante sur $\R$.</li>
<li>Si $a=0$, alors $f(p)-f(m)=0$ soit $f(m)=f(p)$.</li>
</ul>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
<ul>
<li>La fonction $f$ définie par $f(x)=3x+2$ est croissante car $ a=3>0 $.</li>
<li>La fonction $f$ définie par $f(x)=-2x+3$ est décroissante car $ a=-2<0 $.</li>
<li>La fonction $f$ définie par $f(x)=5$ est constante car $ a=0 $.</li>
</ul>
</div>
</div>

<h2 class="subsection-title">4.3 Signe de $f:x\mapsto ax+b$</h2>

Suivant le signe du coefficient directeur $a$, on obtient les tableaux de signes suivants : <br>
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-04/1.png" alt="figure 1" style="max-height:180px; max-width:100%;">
<img src="/mabemat/figures/2nde/chapitre-04/2.png" alt="figure 2" style="max-height:250px; max-width:100%; margin-top:10px;">
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Tableau de signes des fonctions définies sur $\R$ par $f(x)=2x+4$ et $g(x)=-x+3$ :<br>
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-04/3.png" alt="figure 3" style="max-height:200px; max-width:100%;">
</div>
</div>
</div>

<h2 class="subsection-title">4.4 Méthodes</h2>

<h3 class="subsubsection-title">4.4.1 Déterminer les coefficients à partir de la représentation graphique</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Si $A(x_A ; y_A)$ et $ B(x_B ; y_B)$ sont deux points distincts de la droite $(d)$ représentant la
fonction $f$ définie sur $\R$ par $f(x)=ax+b$ alors : $a=\dfrac{y_B-y_A}{x_B-x_A}$
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthodes :</div>
<div class="environment-content">
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-04/fig7.svg" alt="figure 7" style="max-height:400px; max-width:100%;">
</div>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
<ul style="margin:0;">
<li>
Pour $(d')$ : <br>
Le coefficient directeur est $\color{#A8C68A}{a=\dfrac{+2}{+1}=2}$. <br>
L'ordonnée à l'origine est $\color{violet}{+2}$. <br>
La fonction $f$ représentée par la droite $(d')$ est <br>
définie par $f(x) = {\color{#A8C68A}{2}}x + \color{violet}{2}$. <br>
</li>
</ul>
<ul style="margin:0;">
<li>
Pour $(d)$ : <br>
Le coefficient directeur est $\color{#E6B459}{a=\dfrac{-1}{+2}=-0,5}$. <br>
L'ordonnée à l'origine est $\color{#EA8556}{-1}$. <br>
La fonction $g$ représentée par la droite $(d)$ est <br>
définie par $g(x) = {\color{#E6B459}{-0,5}}x \color{#EA8556}{-1}$. <br>
</li>
</ul>
</div>
</div>
</div>

<h3 class="subsubsection-title">4.4.2 Déterminer l'expression d'une fonction affine</h3>

<div class="environment methode">
<div class="environment-title">Méthodes : Déterminer une fonction affine par le calcul</div>
<div class="environment-content">
Déterminer par le calcul une expression de la fonction $f$ telle que $f (-2) = 4$ et $f (3) = 1$.<br>
La représentation graphique correspondant à la fonction affine $f$ passe donc par les
points $A(-2 ; 4)$ et $B(3 ; 1)$.
$$a=\dfrac{y_B-y_A}{x_B-x_A}=\dfrac{1-4}{3-(-2)}=\dfrac{-3}{5}$$
Donc $f(x)=\dfrac{-3}{5} x+b$. <br>
Comme $A$ est un point de la droite, on a : $f (-2) = 4$, donc : <br>
$$4=\dfrac{-3}{5} \times (-2)+b$$
donc
$$b=4-\dfrac{6}{5}=\dfrac{14}{5}$$
Finalement, $f(x)=\dfrac{-3}{5} x+\dfrac{14}{5}$.
<div class="remarque">
Le graphique permet de lire des valeurs approchées de $a$ et $b$.
Cette méthode graphique n'est pas précise mais permet d'avoir un ordre de grandeur des valeurs cherchées.
</div>
</div>
</div>
