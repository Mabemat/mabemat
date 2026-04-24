---
title: "Leçon complète"
---

<h2 class="subsection-title">6.1 Développer et factoriser</h2>

<h3 class="subsubsection-title">6.1.1 Simple et double distributivité</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
<strong>Développer</strong> un produit signifie écrire ce produit sous la forme d'une somme (ou différence) de termes. <br>
<strong>Factoriser</strong> une somme signifie écrire cette somme sous forme d'un produit de facteurs.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soient $a$ et $b$ et $k$ trois réels :
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-06/fig1.svg" alt="figure 1" style="max-height:200px; max-width:100%;">
</div>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>$3(x+1)=3x+3$</li>
<li>$7(2y-5)=14y-35$</li>
<li>$(-2z^2-1)\times 8z=-16z^3-8z$</li>
<li>$-6(t^2-9t)=-6t^2+54t$</li>
</ul>
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soient $a$, $b$, $c$ et $d$ quatre réels :
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-06/fig2.svg" alt="figure 2" style="max-height:200px; max-width:100%;">
</div>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>$(x+1)(2x+5)=2x^2+5x+2x+5=2x^2+7x+5$</li>
<li>$(2y-3)(3y+5)=6y^2+10y-9y-15=6y^2+y-15$</li>
<li>$(3z-7)(2z-4)=6z^2-12z-14z+28=6z^2-26z+28$</li>
<li>$(5t^2-2t)(-3t-4)=-15t^3-20t^2+6t^2+8t=-15t^3-14t^2+8t$</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">6.1.2 Identités remarquables</h3>

<div class="environment theoreme">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
Soient $a$ et $b$ deux réels alors :
<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:2rem;">

<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$(a+b)^2=a^2+2\times a \times b+b^2$</li>
</ul>

<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$(a-b)^2=a^2-2\times a \times b+b^2$</li>
</ul>

<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$(a+b)(a-b)=a^2 - b^2$</li>
</ul>

</div>

</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Développer les expressions suivantes :
<ul>
<li>$(x-5)^2 =x^2 -2\times x\times 5+5^2 = x^2-10x +25$</li>
<li>$(2x-1)(2x+1)=(2x)^2 -1^2 =4x^2 -1$.</li>
<li>$(x+3)^2=x^2+2\times x \times 3 +3^2 =x^2 +6x+9$</li>
</ul>
</div>
</div>

<div style="display:flex;align-items:center;gap:12px;">
<div style="width:66%;">
Démonstration : On considère un carré bleu de côté $a$ et d'aire $a^2$, un carré rouge de côté $b$ et d'aire $b^2$, et un carré noire de côté $a+b$ et d'aire $(a+b)^2$. En pavant le carré noire avec le carré bleu et le carré rouge, on peut constater qu'il reste deux rectangles non occupés (vert) de largeur $a$ et de longueur $b$ (donc d'aire $a\times b$). En additionnant les aires correspondantes, on en déduit : $(a+b)^2={\color{#8A9CC1}{a^2}}+{\color{#E6B459}{b^2}}+2{\color{#D36740}{ab}}$<br>
On a la formule $(a-b)^2=a^2-2\times a \times b+b^2$ en considérant l'autre figure. <br>
Par ailleurs, par double distributivité, on a : <br>
$(a+b)(a-b)=a^2-ab+ba-b^2=a^2-b^2$. <br>
</div>
<div style="display:flex;flex-direction:column;align-items:center;width:32%;gap:12px;">
<img src="/mabemat/figures/2nde/chapitre-06/fig3.png" alt="figure 3" style="max-height:200px;max-width:100%;">
<img src="/mabemat/figures/2nde/chapitre-06/fig4.png" alt="figure 4" style="max-height:200px;max-width:100%;">
</div>
</div>


<div class="environment methode">
<div class="environment-title">Méthode - Développer une expression</div>
<div class="environment-content">
Développer, réduire et ordonner l'expression suivante :
$A=(x+2)(4x-3)-x(7-x)^2$.
On a :
<div class="math-display">
$$
\begin{align*}
A&=4x^2-3x+8x-6-x(7^2-2\times 7 \times x+x^2)\\
&=4x^2+5x-6-x(49-14x+x^2)\\
&=4x^2+5x-6-49x-14x^2-x^3\\
&=-x^3-10x^2-44x-6
\end{align*}
$$
</div>
</div>
</div>

<h3 class="subsubsection-title">6.1.3 Factoriser</h3>

Pour factoriser, il faut trouver dans chacun des termes de l'expression un <span style="color:#D36740;">facteur commun</span>.



<div class="environment methode">
<div class="environment-title">Méthode - Factoriser une expression</div>
<div class="environment-content">
Factoriser les expressions suivantes :<br>
${\color{#8A9CC1}{\bullet}}B = 3(2 + 3x) - (5 + 2x)(2 + 3x)$ \quad ${\color{#8A9CC1}{\bullet}}C=(2-5x)^2 -(2-5x)(1+x)$ \quad $ {\color{#8A9CC1}{\bullet}}D = 5(1 - 2x) - (4 + 3x)(2x - 1)$ \quad $ {\color{#8A9CC1}{\bullet}}E=3x^2 -x$
<div class="math-display" style="display:inline-block; vertical-align:top; width:calc(49% - 10px); margin:0 5px 5px 0;">
$$
\begin{align*}
B&={\color{#8A9CC1}{3}}{\color{#D36740}{(2 + 3x)}} {\color{#8A9CC1}{- (5 + 2x)}}{\color{#D36740}{(2 + 3x)}}\\
&={\color{#D36740}{(2 + 3x)}}{\color{#8A9CC1}{(3- (5 + 2x))}}\\
&=(2+3x)(3-5-2x)\\
&=(2+3x)(-2-2x)
\end{align*}
$$
</div><div class="math-display" style="display:inline-block; vertical-align:top; width:calc(49% - 10px); margin:0 5px 5px 0;">
$$
\begin{align*}
C&={\color{#D36740}{(2-5x)}}{\color{#8A9CC1}{(2 - 5x)}} {\color{#8A9CC1}{-}}{\color{#D36740}{(2-5x)}}{\color{#8A9CC1}{(1+x)}}\\
&={\color{#D36740}{(2 -5x)}}{\color{#8A9CC1}{((2-5x)- (1+x))}}\\
&=(2-5x)(2-5x-1-x)\\
&=(2-5x)(1-6x)
\end{align*}
$$
</div>
<div class="math-display" style="display:inline-block; vertical-align:top; width:calc(49% - 10px); margin:0 5px 5px 0;">
$$
\begin{align*}
D&=5(1-2x){\color{#A8C68A}{-}}(4+3x){\color{#A8C68A}{(2x-1)}}\\
&=5(1-2x){\color{#A8C68A}{+}}(4+3x){\color{#A8C68A}{(1-2x})}\\
&={\color{#D36740}{(1-2x)}}{\color{#8A9CC1}{(5+(4+3x))}}\\
&=(1-2x)(9+3x)
\end{align*}
$$
</div><div class="math-display" style="display:inline-block; vertical-align:top; width:calc(49% - 10px); margin:0 5px 5px 0;">
$$
\begin{align*}
E&=3x^2-x\\
&=3x^2-x{\color{#A8C68A}{\times 1}}\\
&={\color{#D36740}{x}}{\color{#8A9CC1}{(3x-1)}}\\
\end{align*}
$$
</div>
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode : Factoriser en utilisant une identité remarquable</div>
<div class="environment-content">
Factoriser les expressions suivantes :
${\color{#A8C68A}{\bullet}}F = 16x^2-40x+25$ $\quad\quad\quad$ ${\color{#A8C68A}{\bullet}}G=(3x+1)^2-49$
<div style="display:inline-block; vertical-align:middle; width:calc(55% - 12px);">
Pour $F$ : on reconnaît une identité remarquable du type $a^2-2ab+b^2=(a-b)^2$ avec $a=4x$ et $b=5$.<br>
Donc $F=16x^2-40x+25=(4x-5)^2$.<br>

Pour $G$ : on reconnaît une identité remarquable du type $a^2 - b^2 = (a + b)(a - b)$ avec $a=3x+1$ et $ b=7$.
</div><div class="math-display" style="display:inline-block; vertical-align:middle; width:calc(43% - 12px);">
$$
\begin{align*}
G&=(3x+1)^2 -49 \\
&= {\color{#D36740}{(3x+1)}}^2- {\color{#8A9CC1}{7}}^2 \\
&=( {\color{#D36740}{(3x+1)}}+ {\color{#8A9CC1}{7}})({\color{#D36740}{(3x+1)}}- {\color{#8A9CC1}{7}})\\
&=( (3x+1)+ 7)((3x+1)- 7)\\
&=(3x+8)(3x-6)
\end{align*}
$$
</div>
</div>
</div>

<h2 class="subsection-title">6.2 Équations et inéquations produit et quotient</h2>

<h3 class="subsubsection-title">6.2.1 Équation-produit</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Toute équation du type $P(x) \times Q(x) = 0$, où $P(x)$ et $Q(x)$ sont des expressions algébriques, est appelée <strong>équation-produit</strong>.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<ul>
<li>Dire qu'un produit de facteurs est nul, équivaut à dire que l'un au moins des facteurs est nul.</li>
<li>Le cas particulier de l'équation-produit $(ax + b)(cx + d) = 0$ équivaut à $ax+b=0$ ou $cx+d=0$.</li>
</ul>
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode - Résoudre une équation en se ramenant à une équation-produit</div>
<div class="environment-content">
Résoudre dans $\R$ les équations suivantes :
<ol>
<li>$(5 + 2x)(2 - 3x)=0$</li>
<li>$(3x+1)(1-6x)-(3x+7)(3x+1)=0$</li>
<li>$ 5x^2-4x=0$</li>
</ol>
<ol>
<li>$(5 + 2x)(2 - 3x)=0$ donc soit :
<div class="math-display">
$$
\begin{align*}
5+2x=0 & \text{ ou } 2-3x=0 \\
2x=-5 & \text{ ou } -3x=-2 \\
x=\dfrac{-5}{2} & \text{ ou } x=\dfrac{2}{3} \\
\end{align*}
$$
</div>
<u>Vérification</u> : $5+2\times \dfrac{-5}{2}=5-5=0$ et $2-3\times\dfrac{2}{3}=2-2=0$. Donc $S=\left\{\dfrac{-5}{2} \text{ ; } \dfrac{2}{3}\right\}$</li>
<li>On commence par factoriser l'expression pour se ramener à une équation-produit :<br>
<div class="math-display" style="display:inline-block; vertical-align:top; width:calc(49% - 12px);">
$$
\begin{align*}
&(3x + 1)(1 - 6x) - (3x + 7)(3x + 1) = 0 \\
&(3x + 1)[(1 - 6x) - (3x + 7)] = 0\\
&(3x + 1)(1 - 6x -3x - 7) = 0\\
&(3x + 1)(- 9x - 6) = 0
\end{align*}
$$
</div><div class="math-display" style="display:inline-block; vertical-align:top; width:calc(49% - 12px);">
$$
\begin{align*}
\text{ Soit } 3x + 1 = 0 &\text{ ou } - 9x - 6 = 0\\
3x = -1 &\text{ ou } - 9x = 6\\
x=\dfrac{-1}{3} &\text{ ou } x=\dfrac{6}{-9}=\dfrac{-2}{3}
\end{align*}
$$
</div>
<u>Vérification</u> : $\left(3\times \dfrac{-1}{3} + 1\right)\left(1 - 6\times \dfrac{-1}{3}\right) - \left(3\times \dfrac{-1}{3} + 7\right)\left(3\times \dfrac{-1}{3} + 1\right) =0$ et <br>$\left(3\times \dfrac{-2}{3} + 1\right)\left(1 - 6\times \dfrac{-2}{3}\right) - \left(3\times\dfrac{-2}{3} + 7\right)\left(3\times \dfrac{-2}{3} + 1\right) = 0$. Donc $S=\left\{\dfrac{-1}{3} \text{ ; } \dfrac{-2}{3}\right\}$
</li>
<li>On commence par factoriser l'expression pour se ramener à une équation-produit :<br>
<div class="math-display" style="display:inline-block; vertical-align:top; width:calc(49% - 12px);">
$$
\begin{align*}
5x^2-4x&=0\\
x(5x-4)&=0
\end{align*}
$$
</div><div class="math-display" style="display:inline-block; vertical-align:top; width:calc(49% - 12px);">
$$
\begin{align*}
\text{ Soit } x = 0 &\text{ ou } 5x-4 = 0 \\
&\text{ ou } 5x = 4\\
&\text{ ou } x=\dfrac{4}{5}
\end{align*}
$$
</div>
<u>Vérification</u> : $5\times 0^2-4\times 0=0$ et $5\times \dfrac{4}{5}^2-4\times \dfrac{4}{5} = \dfrac{20}{25}-\dfrac{20}{25}=0$. Donc $S=\left\{0 \text{ ; } \dfrac{4}{5}\right\}$<br>
<br></li>
</ol>
</div>
</div>

<h3 class="subsubsection-title">6.2.2 Équations quotient</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Toute équation du type $\dfrac{P(x)}{Q(x)} = 0$, où $P(x)$ et $ Q(x)$ sont des expressions algébriques (avec $Q(x) \neq 0$), est appelée équation-quotient.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Pour tout $x$ qui n'annule pas l'expression $Q(x)$, l'équation-quotient $\dfrac{P(x)}{Q(x)}= 0$ équivaut à $P(x) = 0$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Résoudre dans $\R$ les équations suivantes :
<ol>
<li>$\dfrac{x+2}{x+3} = 0 $. L'équation n'est pas définie pour $x = -3$.<br>Pour $x\neq -3$, l'équation $\dfrac{x+2}{x+3} = 0 $ équivaut à $x+2=0$. D'où $x=-2$, $S=\left\{-2\right\}$.
<br></li>
<li>$\dfrac{3x+5}{x-1}=0$ .
L'équation n'est pas définie pour $x = 1$.<br>
Pour $x\neq 1$, l'équation $\dfrac{3x+5}{x-1} = 0 $ équivaut à $3x+5=0$. D'où $x=\dfrac{-5}{3}$, $S=\left\{\dfrac{-5}{3}\right\}$.
<br></li>
<li>$\dfrac{(2x+1)(x-3)}{x-4}=0$ .
L'équation n'est pas définie pour $x = 4$. <br>
Pour $x\neq 4$, l'équation $\dfrac{(2x+1)(x-3)}{x-4} = 0 $ équivaut à $(2x+1)(x-3)=0$. Soit $2x+1=0$ ou $x-3=0$.<br>
Donc $S=\left\{-\dfrac{1}{2} \text{ ; } 3\right\}$.
<br></li>
<li>$\dfrac{x^2-9}{x+3}$ .
L'équation n'est pas définie pour $x = -3$.<br>
Pour $x\neq -3$, l'équation $\dfrac{x^2-9}{x+3} = 0 $ équivaut à $x^2-9=0$. D'où $x=3$ ou $x=-3$, ainsi, $S=\{-3\text{ ; } 3\}$.</li>
</ol>
</div>
</div>

<h3 class="subsubsection-title">6.2.3 Inéquations produit et quotient</h3>

<div class="environment methode">
<div class="environment-title">Méthode : Résoudre une inéquation en étudiant le signe d'un produit</div>
<div class="environment-content">
Résoudre dans $\R$ l'inéquation suivante : $(3-6x)(x+2)>0$<br>
Le signe de $(3 - 6x)(x + 2)$ dépend du signe de chaque facteur $3 - 6x$ et $x + 2$
<div class="math-display">
$$
\begin{align*}
3-6x=0 &\text{  ou  } x+2=0 \\
6x=3 &\text{  ou  } x=-2 \\
x=\dfrac{3}{6}=\dfrac{1}{2}
\end{align*}
$$
</div>
Résumons dans un même tableau de signes les résultats pour les deux facteurs. En appliquant la règle des signes, on en déduit le signe du produit $(3-6x)(x + 2)$.<br>
<img src="/mabemat/figures/2nde/chapitre-06/t1.png" alt="figure 5" style="display:inline-block;vertical-align:middle;max-height:150px;height:auto;width:auto;max-width:100%;">

<div style="display:inline-block; vertical-align:middle; width:calc(49% - 12px);">
On en déduit que $(3-6x)(x+2)>0$ pour $x\in \left] -2 \text{ ; } \dfrac{1}{2}\right[$.<br>
L'ensemble des solutions de l'inéquation $(3-6x)(x + 2) > 0$ est <br> $S= \left] -2 \text{ ; } \dfrac{1}{2}\right[$.
</div>
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode : Résoudre une inéquation en étudiant le signe d'un quotient</div>
<div class="environment-content">
Résoudre dans $\R$ l'inéquation suivante : $\dfrac{2-6x}{3x-2}\leq 0$<br>
L'équation n'est pas définie pour $3x-2=0$, soit $x=\dfrac{2}{3}$.<br>
Il faudra éventuellement exclure cette valeur de l'ensemble des solutions. <br>
<br>
Le signe de $\dfrac{2-6x}{3x-2}$ dépend du signe des expressions de $2-6x$ et $3x-2$. $2-6x=0$ équivaut à $x=\dfrac{1}{3}$.<br>
<br>
Résumons dans un même tableau de signes les résultats pour les deux expressions. <br>
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-06/t2.png" alt="figure 6" style="max-height:180px; max-width:100%;">
</div>
La double-barre dans le tableau signifie que le quotient n'est pas défini pour $x=\dfrac{2}{3}$.<br>
<br>
On en déduit que $\dfrac{2-6x}{3x-2}\leq 0$ pour $x\in \left] -\infty \text{ ; } \dfrac{1}{3}\right] \cup \left] \dfrac{2}{3} \text{ ; } +\infty \right]$.<br>
<br>
L'ensemble des solutions de l'inéquation $\dfrac{2-6x}{3x-2}\leq 0$ est $S= \left] -\infty \text{ ; } \dfrac{1}{3}\right] \cup \left] \dfrac{2}{3} \text{ ; } +\infty \right]$.
</div>
</div>
