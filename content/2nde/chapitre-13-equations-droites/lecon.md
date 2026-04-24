---
title: "Leçon complète"
---

<h2 class="subsection-title">13.1 Équation cartésienne d'une droite</h2>

Dans tout le chapitre, le plan est muni d'un repère orthonormé $(O;\overrightarrow{i},\overrightarrow{j})$.

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
On appelle vecteur directeur d'une droite $d$ tout vecteur non nul dont la direction est celle de $d$.
</div>
</div>

<div class="remarque">
Une droite a une infinité de vecteurs directeurs, tous colinéaires.<br>
Si $A$ et $B$ sont deux points distincts de la droite $d$, alors le vecteur $\overrightarrow{AB}$ est un vecteur directeur de $d$.
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Toute droite $d$ a une équation de la forme $ax+by+c=0$, avec $(a;b)\neq(0;0)$ appelée <strong>équation cartésienne</strong> de $d$.
Le vecteur $\overrightarrow{u}\begin{pmatrix} -b \\ a \end{pmatrix}$ est un vecteur directeur de $d$.
</div>
</div>

Démonstration. <br>
Soit $d$ la droite passant par le point $A(x_A;y_A)$ et de vecteur directeur $\overrightarrow{u}\begin{pmatrix} \alpha \\ \beta \end{pmatrix}$.<br>
Le point $M$ de coordonnées $(x;y)$ appartient à $d$ si, et seulement si, $\overrightarrow{AM}$ et $\overrightarrow{u}$ sont colinéaires, ce qui équivaut à $\begin{vmatrix} x-x_A & \alpha \\ y-y_A & \beta \end{vmatrix}=0$. Cela équivaut à $\beta(x-x_A)-\alpha(y-y_A)=0$, soit $\beta x -\alpha y -\beta x_A +\alpha y_A=0$. <br>
Cette équation est de la forme $ax+by+c=0$ avec $a=\beta$, $b=-\alpha$ et $c=-\beta x_A +\alpha y_A$. <br>
Ainsi, $\begin{pmatrix} \alpha \\ \beta \end{pmatrix}=\begin{pmatrix} -b \\ a \end{pmatrix}$ ; donc un vecteur directeur de $d$ est $\overrightarrow{u}\begin{pmatrix} -b \\ a \end{pmatrix}$. <br>Or, un vecteur directeur est non nul, donc $(a;b)\neq(0;0)$.

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère la droite $(d)$ qui passe par le point $A$ de coordonnées $(5\,;\,-1)$ et qui a le vecteur $\vec u \begin{pmatrix}1\\2\end{pmatrix}$ comme vecteur directeur. Déterminer une équation cartésienne de la droite $(d)$.<br>

Avec les données de l'énoncé, $\vec u \begin{pmatrix}1\\2\end{pmatrix}$, on en déduit donc que : $-b = 1$ (soit $b=-1$) et $a=2$. <br>L'équation cartésienne est donc de la forme : $ 2 x - y + c=0$. <br>Comme $A\in (d)$, ses coordonnées $(5\,;\,-1)$ vérifient l'équation de la droite $(d)$. <br>
$$\begin{aligned} 2 \times 5 -1 \times (-1)+ c&=0 \\ 10 +1 + c&=0 \\ c&= -11 \end{aligned}$$
Une équation cartésienne de la droite $(d)$ est donc de la forme : $\boldsymbol{2x-y-11=0}$.
</div>
</div>

<div class="remarque">
Une droite a une infinité d'équations cartésiennes. À partir d'une, on peut obtenir les autres en multipliant par le même réel non nul les coefficients $a$, $b$, et $c$.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
L'ensemble des points $M(x;y)$ tels que $2x-3y+1=0$ est une droite $d$ de vecteur directeur $\overrightarrow{u}\begin{pmatrix} 3 \\ 2 \end{pmatrix}$. <br>Une autre équation cartésienne de $d$ est, par exemple, $-2(2x-3y+1)=0$ c'est à dire $-4x+6y-2=0$.<br> On trouve donc que $\overrightarrow{v}\begin{pmatrix} -6 \\ -4 \end{pmatrix}=-2\overrightarrow{u}$ est aussi un vecteur directeur de la droite $d$.
</div>
</div>

<strong>Cas particuliers : $a=0$ et $b=0$</strong>
<ul>
<li>Une droite d'équation $y=k$ est une droite parallèle à l'axe des abscisses. <br>Un de ses vecteurs directeurs est $\overrightarrow{i}\begin{pmatrix} 1 \\ 0 \end{pmatrix}$.</li>
<li>Une droite d'équation $x=k$ est une droite parallèle à l'axe des ordonnées. <br>Un de ses vecteurs directeurs est $\overrightarrow{j}\begin{pmatrix} 0 \\ 1 \end{pmatrix}$.</li>
</ul>

<h2 class="subsection-title">13.2 Équation réduite d'une droite</h2>

<h3 class="subsubsection-title">13.2.1 Rappels</h3>

<div style="display:inline-block; vertical-align:middle; width:calc(65% - 12px);">
Soit $d$ une droite d'équation réduite $y=mx+p$. <br>
Soit $A(x_A;y_A)$ et $B(x_B;y_B)$.<br>
$m$ est le coefficient directeur et $m=\dfrac{y_B-y_A}{x_B-x_A}$.<br>
$p$ est l'ordonnée à l'origine.
</div><img src="/mabemat/figures/2nde/chapitre-13/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:middle; width:calc(30% - 12px); max-height:250px; max-width:100%;">

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Déterminer une équation réduite de la droite $(AB)$ avec $A(3\,;\,4)$ et $B(7\,;\,-5)$. <br>
On commence par calculer le coefficient directeur $m$ :<br> $m=\dfrac{y_B-y_A}{x_B-x_A}=\dfrac{-5-4}{7-3}=\dfrac{-9}{4}=-\dfrac{9}{4}$. <br>

L'équation de la droite $(AB)$ est donc de la forme : $y=-\dfrac{9}{4} \times x+p$<br>

Comme $A \in (AB)$, les coordonnées du point $A$ vérifient l'équation, donc :<br>
$4=-\dfrac{9}{4} \times 3 +p\iff p=4+\dfrac{9}{4} \times 3\iff p=\dfrac{43}{4}$<br>
Au final, $(AB) : y = {\boldsymbol{-\dfrac{9}{4}x+\dfrac{43}{4}}}$.
</div>
</div>

<h3 class="subsubsection-title">13.2.2 Lien entre l'équation cartésienne et l'équation réduite</h3>

<div class="environment methode">
<div class="environment-title">Méthode - Passer d'une équation à l'autre.</div>
<div class="environment-content">
Soit $d$ une droite non parallèle à l'axe des ordonnées d'équation cartésienne $ax+by+c=0$ et d'équation réduite $y=mx+p$. <br>
On a donc $b\neq 0$ (non parallèle à l'axe des ordonnées).<br>
Alors $y=\dfrac{-a}{b}x+\dfrac{-c}{b}$. Ainsi, $m=\dfrac{-a}{b}$ et $p=\dfrac{-c}{b}$.<br>
Si $b=0$, alors $ax+c=0$ donc $x=\dfrac{-c}{a}$ est une droite parallèle à l'axe des ordonnées.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $d$ une droite d'équation réduite $y=mx+p$ alors $\overrightarrow{u}\begin{pmatrix} 1 \\ m \end{pmatrix}$ est un vecteur directeur de la droite $d$.
</div>
</div>

Démonstration. <br>
On a $d$ qui s'écrit aussi $ax+by+c=0$ avec $b\neq 0$ et $m=\dfrac{-a}{b}$ et $p=\dfrac{-c}{b}$.<br>
Or, $\overrightarrow{v}\begin{pmatrix} -b \\ a \end{pmatrix}$ est un vecteur directeur de la droite $d$. <br>
Comme $b\neq 0$, $\overrightarrow{u}=\dfrac{-1}{b}\times\overrightarrow{v}\begin{pmatrix} 1 \\ \dfrac{-a}{b} \end{pmatrix}=\begin{pmatrix} 1 \\ m \end{pmatrix}$ est aussi un vecteur directeur de la droite $d$.

<h2 class="subsection-title">13.3 Systèmes de deux équations linéaires à deux inconnues</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Un système de deux équations linéaires du premier degré à deux inconnues $x$ et $y$ est de la forme $\left\{ \begin{array}{ll} ax+by=c \\ a'x+b'y=c' \end{array} \right.$, où $a,b,c,a',b'$ et $c'$ sont des réels et $(x;y)$ le couple des inconnues.
</div>
</div>

<div class="remarque">
<strong>Résoudre</strong> ce système revient à <strong>déterminer tous les couples solutions</strong>, c'est à dire tous les couples vérifiant <strong>simultanément</strong> les deux équations du système.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit le système $\left\{ \begin{array}{ll} 3x-2y=6 \\ -4x+5y=-1 \end{array} \right.$. <br>Puisque $3\times {\color{#EA8556}{4}}-2\times {\color{#8A9CC1}{3}} =6 $ et $-4\times {\color{#EA8556}{4}}+5\times {\color{#8A9CC1}{3}}=-1$, le couple $({\color{#EA8556}{4}};{\color{#8A9CC1}{3}})$ est une solution de ce système.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode - Par substitution.</div>
<div class="environment-content">
Résoudre le système
$(S)\left\{ \begin{array}{ll} 3x-y=5 \\ 2x+3y=7 \end{array} \right.$<br>
La première équation permet d'exprimer $y$ en fonction de $x$. <br>Le système $(S)$ est donc équivalent à $\left\{ \begin{array}{ll} {\color{#EA8556}{y=3x-5}} \\ 2x+3y=7 \end{array} \right.$.<br>
On substitue l'expression de $y$ dans la deuxième équation, et le système $(S)$ équivaut à
$\left\{ \begin{array}{ll} {\color{#EA8556}{y=3x-5}} \\ 2x+3( {\color{#EA8556}{3x-5}} )=7 \end{array} \right.$. On résout la deuxième équation où ne figure que l'inconnue $x$ : $2x+3( {\color{#EA8556}{3x-5}} )=7$ équivaut à $2x+9x-15=7$, soit à $11x=22$, c'est à dire à $x=2$.<br>
On remplace $x$ par sa valeur dans l'expression de $y$. On a donc $y=3\times 2-5=1$.<br>
<u>Vérification</u> : $3\times 2-1=6-1=5$ et $2\times 2+3\times 1=4+3=7$ <br>
Le système $(S)$ admet donc une unique solution le couple $(2;1)$.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode : Par combinaison.</div>
<div class="environment-content">
Résoudre le système
$(S)\left\{ \begin{array}{ll} 2x-5y=1 \\ 3x+2y=11 \end{array} \right.$ <br>
On multiplie la première équation par ${\color{#EA8556}{2}}$ et la seconde par ${\color{#8A9CC1}{5}}$.<br>
Le système $(S)$ équivaut à $(S)\left\{ \begin{array}{ll} 4x-10y=2 \\ 15x+10y=55 \end{array} \right.$. <br>On additionne les deux équations membre à membre pour éliminer $y$.<br>
On obtient $4x-10y+(15x+10y)=2+55$, soit $19x=57$, c'est à dire $x=3$.<br>
On remplace $x$ par sa valeur dans la première équation. On obtient $2\times 3-5y=1$, c'est à dire $6-1=5y$, soit $y=1$.<br>
<u>Vérification</u> : $2\times 3 -5\times 1=6-5=1$ et $3\times 3 +2\times 1=9+2=11$<br>
Le système $(S)$ admet donc une unique solution le couple $(3;1)$.<br>
<div class="remarque">
On peut aussi soustraire les deux équations termes à termes en multipliant par exemple, la première équation par $3$ et la deuxième par $2$ et en faisant la première moins la deuxième pour supprimer les $x$.
</div>
</div>
</div>

<h2 class="subsection-title">13.4 Parallélisme et intersection de deux droites</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
<ul>
<li>Deux droites $d$ et $d'$ sont <strong>parallèles</strong> quand elles ont la même direction.</li>
<li>Deux droites non parallèles sont dites <strong>sécantes</strong>.</li>
</ul>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Deux droites $d$ et $d'$ sont parallèles si, et seulement si, deux de leurs vecteurs directeurs sont colinéaires.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit $d$ et $d'$ des droites d'équations respectives $4x-2y=0$ et $-12x+6y-3=0$.
<br>
Alors $\overrightarrow{u}\begin{pmatrix} 2 \\ 4 \end{pmatrix}$ est un vecteur directeur de $d$ et  $\overrightarrow{v}\begin{pmatrix} -6 \\ -12 \end{pmatrix}$ est un vecteur directeur de $d'$.<br>
$\det(\overrightarrow{u},\overrightarrow{v})=\begin{vmatrix} 2 & -6 \\ 4 & -12 \end{vmatrix}=2\times (-12)-4\times(-6)=-24+24=0$. <br>
Puisque leur déterminant est nul, $\overrightarrow{u}$ et $\overrightarrow{v}$ sont colinéaires, donc les droites $d$ et $d'$ sont parallèles.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Deux droites $d$ et $d'$ d'équations réduites $y=mx+p$ et $y=m'x+p'$ sont parallèles si, et seulement si, leurs pentes sont égales $m=m'$.
</div>
</div>

Démonstration. <br>
$\overrightarrow{u}\begin{pmatrix} 1 \\\\ m \end{pmatrix}$ est un vecteur directeur de $d$ et  $\overrightarrow{v}\begin{pmatrix} 1 \\\\ m' \end{pmatrix}$ est un vecteur directeur de $d'$.<br>
Ainsi, les droites $d$ et $d'$ sont parallèles si, et seulement si, les vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ sont colinéaires, ce qui équivaut à $\det(\overrightarrow{u},\overrightarrow{v})=\begin{vmatrix} 1 & 1 \\\\ m & m' \end{vmatrix}= m'-m=0$, c'est à dire $m'=m$.

<div class="remarque">
Deux droites confondues sont parallèles et elles ont des équations cartésiennes multiples l'une de l'autre.<br>
$x-2y+1=0$ et $4x-8y+4=0$ sont les équations cartésiennes de 2 droites confondues, car $4(x-2y+1)=4x-8y+4$.
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<ul>
<li>Si deux droites $d$ et $d'$ sont sécantes, alors les coordonnées de leur point d'intersection est l'unique couple solution du système formé par une équation de $d$ et une équation de $d'$.</li>
<li>Résoudre le système $(S)\left\{ \begin{array}{ll} ax+by=c \\ a'x+b'y=c' \end{array} \right.$, revient à étudier l'intersection de deux droites du plan.<br>
Le système $(S)$ admet soit une unique solution, soit aucune solution, soit une infinité de solutions.</li>
</ul>
</div>
</div>

<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-13/intersection_chap_11.png" alt="intersection_chap_11" style="max-height:300px; max-width:100%;">
</div>
