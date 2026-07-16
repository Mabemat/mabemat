---
title: "Leçon complète"
---

<h2 class="subsection-title">6.1 Généralités sur les fonctions</h2>

<h3 class="subsubsection-title">6.1.1 Vocabulaire</h3>

<h4 class="subsubsection-title" style="padding-left:150px;">6.1.1.1 Définition et exemples</h4>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $D$ une partie de l'ensemble des réels $\R$. Définir une fonction sur $D$, c'est associer à chaque réel $x$ de $D$ un UNIQUE nombre réel, noté $f(x)$. <br>
$D$ est appelé domaine de définition de $f$.
</div>
</div>

<div class="environment notation">
<div class="environment-title">Notation :</div>
<div class="environment-content">
On notera $f : x \mapsto f(x)$ pour la fonction qui à $x$ associe $f(x)$.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode</div>
<div class="environment-content">
Trouver l'ensemble de définition $D$ d'une fonction $f$ revient à chercher toutes les valeurs de $x$ telles que $f(x)$ existe.
</div>
</div>

<div class="remarque">
Les valeurs de $x$ qui n'appartiennent pas à $D$ sont appelées les <strong>valeurs interdites</strong> de la fonction $f$.<br>
En classe de 2nde, vous devez savoir qu'il est interdit de diviser par 0 et de mettre un nombre négatif dans une racine carré.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit $f$ la fonction définie par $x \mapsto f(x) = \sqrt{2x - 6}$.<br>
On cherche l'ensemble de définition $D$ de la fonction $f$.<br>
Seuls les nombres positifs ont une racine carrée, donc $f(x)$ existe si et seulement si $2x - 6 \geqslant 0$.<br>
On résout donc l'inéquation $2x - 6 \geqslant 0$ :
<div style="text-align:center;">
$2x - 6 \geqslant 0$ c'est-à-dire $x \geqslant 3$
</div>
Tous les nombres réels $x$ supérieurs ou égaux à $3$ ont donc une image par la fonction $f$.<br>
On a donc $D = [3\,;\,+\infty[$.
</div>
</div>

<h4 class="subsubsection-title" style="padding-left:150px;">6.1.1.2 Image, antécédents</h4>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $f$ une fonction définie sur un domaine de définition $D$. Soit $x \in D$.
<ul>
<li>On dit que $f(x)$ est <strong>l'</strong>image de $x$ par $f$.</li>
<li>On dit que $x$ est <strong>un</strong> antécédent de $f(x)$ par $f$.</li>
</ul>
</div>
</div>

L'antécédent doit TOUJOURS appartenir au domaine de définition !

<div class="remarque">
Attention un nombre peut avoir plusieurs antécédents mais ne peut avoir qu'une UNIQUE image.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère la fonction $g$ définie par $g(x) = 2x + 3$ sur $\R$.
<div style="display:flex; align-items:flex-start; gap:3%; margin:0.5rem 0;">
<div style="flex:0 0 49%;">
<ul>
<li>$g(0) = 3$ : 3 est l'image de 0 par $g$ et 0 est un antécédent de 3 par $g$.</li>
<li>On cherche un antécédent de 7 par $g$. On cherche donc à résoudre l'équation $g(x) = 7$.</li>
</ul>
</div>
<div style="flex:0 0 49%;">
$$\begin{align*}
g(x) &= 7 \\
2x + 3 &= 7 \\
2x &= 4 \\
x &= 2
\end{align*}$$
De plus, $2 \in \R$, ainsi 2 est un antécédent de 7 par $g$.
</div>
</div>
</div>
</div>

<h2 class="subsection-title">6.2 Représentation graphique</h2>

Dans toute la suite, on se place dans un repère $(O, \overrightarrow{i}, \overrightarrow{j})$ orthonormé.

<h3 class="subsubsection-title">6.2.1 Courbe représentative</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $f$ une fonction et $D$ son domaine de définition. On appelle représentation graphique de $f$ (ou courbe représentative de $f$) l'ensemble des points $M$ de coordonnées $(x, f(x))$, pour tout $x \in D$. On note en général cette courbe $C_f$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On trace la représentation graphique d'une certaine fonction $h$.
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-02/Ex5.png" alt="Ex5" style="max-height:250px; max-width:100%;">
</div>
<ol>
<li>Donner le domaine de définition de $h$.<br>
Le domaine de définition de $h$ est $] -4, 8]$.</li>
<li>Le point de coordonnées $(-1, -2)$ est-il sur la courbe ? Quelle égalité peut-on en déduire ?<br>
Comme point de coordonnées $(-1, -2)$ est sur la courbe, on peut écrire que $h(-1) = -2$.</li>
<li>Lire graphiquement l'image de $1$ par $h$.<br>
$h(1)=3$</li>
<li>Quels sont les antécédents de $-2$ par $h$ ? De $6$ ?<br>
$-2$ a trois antécédents par $h$ : $-1$, $5$ et $7$. $6$ n'a pas d'antécédent par $h$.</li>
</ol>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère la fonction $f$ définie sur $\mathbb{R}$ par $f(x) = x^2 - 3x + 1$
et on note $\mathscr{C}_f$ sa courbe représentative dans le plan muni d'un repère.
<ol>
<li>
<ol type="a">
<li>Le point $A(1\,;\,-1)$ appartient-il à $\mathscr{C}_f$ ?<br>
On détermine l'image de $1$ par $f$ : $f(1) = 1^2 - 3 \times 1 + 1 = -1$.<br>
$-1$ est l'image de $1$ par $f$, donc le point $A(1\,;\,-1)$ appartient à $\mathscr{C}_f$.</li>
<li>Le point $B(-3\,;\,20)$ appartient-il à $\mathscr{C}_f$ ?<br>
On détermine l'image de $-3$ par $f$ :
$f(-3) = (-3)^2 - 3 \times (-3) + 1 = 19$.<br>
$20$ n'est pas l'image de $-3$ par $f$, donc le point $B(-3\,;\,20)$ n'appartient pas à $\mathscr{C}_f$.</li>
</ol>
</li>
<li>Le point $E$ appartient à $\mathscr{C}_f$ et l'abscisse de $E$ est $5$.
Quelle est l'ordonnée de $E$ ?<br>
Le point $E$ appartient à $\mathscr{C}_f$, donc son ordonnée est l'image de son abscisse par $f$.<br>
$f(5) = 5^2 - 3 \times 5 + 1 = 11$, donc $E$ a pour coordonnées $(5\,;\,11)$.</li>
<li>En quel point $\mathscr{C}_f$ coupe-t-elle l'axe des ordonnées ?<br>
On détermine le point de $\mathscr{C}_f$ d'abscisse $0$.<br>
$f(0) = 0^2 - 3 \times 0 + 1 = 1$. La courbe $\mathscr{C}_f$ coupe l'axe des ordonnées au point de coordonnées $(0\,;\,1)$.</li>
</ol>
</div>
</div>

<h3 class="subsubsection-title">6.2.2 Résolutions graphiques</h3>

<strong>Équation $f(x) = k$ ou inéquation $f(x) > k$</strong>

<div class="environment methode">
<div class="environment-title">Méthode</div>
<div class="environment-content">
Soit $f$ définie sur $I = [-4, 2]$ par $f(x) = x^2 + 2x - 1$.
<div style="display:flex; align-items:center; gap:20px;">
<img src="/mabemat/figures/2nde/chapitre-02/Ex6.png" alt="Ex6" style="width:40%; max-width:250px; height:auto;">
<div style="width:60%;">
On donne la courbe représentative de $f$ ci-contre.

Pour résoudre l'équation $f(x) = 2$ sur $I$, c'est-à-dire déterminer les antécédents de $2$ par $f$, on regarde les points de la courbe dont l'ordonnée vaut $2$. Les antécédents de $2$ par $f$ sont $-3$ et $1$. Les solutions de $x^2 + 2x - 1 = 2$ sur $I$ sont donc $-3$ et $1$.

Résoudre l'inéquation $f(x) > 2$ sur $I$ revient à déterminer l'ensemble des abscisses des points de la courbe représentative de $f$ dont l'ordonnée est supérieure ou égale à $2$. Dans notre cas, l'ensemble des solutions est $S = [-4, -3] \cup [1, 2]$.
</div>
</div>
</div>
</div>

<strong>Équation $f(x) = g(x)$ ou inéquation $f(x) \leq g(x)$</strong>

<div class="environment methode">
<div class="environment-title">Méthode</div>
<div class="environment-content">
<div style="display:flex; align-items:center; gap:20px;">
<img src="/mabemat/figures/2nde/chapitre-02/Ex7.png" alt="Ex7" style="width:40%; max-width:200px; height:auto;">
<div style="width:60%;">
Soit $f$ et $g$ définies sur $I = [-2; 6]$ par $f(x) = x^2 - 5x - 3$ et $g(x) = -2x - 1$. On donne les courbes représentatives de $f$ et $g$ ci-contre.

Pour résoudre l'équation $f(x) = g(x)$ sur $I$, on cherche les $x$ correspondants aux points d'intersection des courbes représentatives de ces deux fonctions.

Ici, les courbes se croisent pour $x = -1$ et $x = 4$. Les solutions de $f(x) = g(x)$, c'est-à-dire $x^2 - 5x - 3 = -2x - 1$ sur $I$ sont donc $-1$ et $4$.

Résoudre l'inéquation $f(x) > g(x)$ sur $I$ revient à déterminer l'ensemble des abscisses pour lesquelles la courbe de $f$ est au-dessus de celle de $g$.

Dans notre cas, l'ensemble des solutions est $S = [-2; -1] \cup [4; 6]$.
</div>
</div>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère deux fonctions $f$ et $g$ définies sur $[-2\,;\,4]$ dont les courbes représentatives $\mathscr{C}_f$ et $\mathscr{C}_g$ sont données ci-dessous.
<div style="display:flex; align-items:center; gap:20px; margin:0.8rem 0;">
<div style="width:50%;">
<ol>
<li>Résoudre l'équation $f(x) = 3$.<br>$\mathcal{S} = \{0\,;\,2\}$</li>
<li>Résoudre l'inéquation $f(x) \geqslant 0$.<br>$\mathcal{S} = [-1\,;\,3]$</li>
<li>Résoudre l'équation $f(x) = g(x)$.<br>$\mathcal{S} = \{-1\,;\,2\}$</li>
<li>Résoudre l'inéquation $f(x) < g(x)$.<br>$\mathcal{S} = [-2\,;\,-1[\,\cup\,]2\,;\,4]$</li>
</ol>
</div>
<div style="width:50%; text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-02/Ex9.svg" alt="Ex9" style="max-height:280px; max-width:100%;">
</div>
</div>
</div>
</div>

<h2 class="subsection-title">6.3 Variations d'une fonction</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $f$ une fonction définie sur un intervalle $I$.
<ul>
<li>On dit que $f$ est croissante lorsque, pour tout $a$ et $b$ dans $I$, si $a < b$, alors $f(a) \leq f(b)$. <br>
Autrement dit, $f$ conserve l'ordre sur $I$.</li>
<li>On dit que $f$ est décroissante lorsque, pour tout $a$ et $b$ dans $I$, si $a < b$, alors $f(a) \geq f(b)$. <br>
Autrement dit, $f$ renverse l'ordre sur $I$.</li>
</ul>
</div>
</div>

<div class="remarque">
Si les inégalités sont strictes, on parlera de fonction strictement croissante ou décroissante.
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Avec les mêmes notations, on dit que $f$ est constante sur $I$ si, pour tout $a$ et $b$ dans $I$, on a $f(a) = f(b)$.
</div>
</div>

<h3 class="subsubsection-title">6.3.1 Interprétation graphique</h3>

Si la fonction est croissante sur un intervalle $I$, sa courbe représentative "monte" de gauche à droite. Si la fonction est décroissante, la courbe descend.

Si la courbe est horizontale, la fonction est constante sur l'intervalle correspondant.

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:flex; align-items:center; gap:20px;">
<img src="/mabemat/figures/2nde/chapitre-02/Ex8.png" alt="Ex8" style="width:30%; max-width:30%; height:auto;">
<div style="width:70%;">
On considère une fonction $f$ dont la courbe représentative est donnée ci-dessous.<br><br>
Le domaine de définition de $f$ est $] -4; 6]$.<br><br>
$f$ est croissante sur $] -4; -1]$, puis décroissante sur $[-1; 1]$, puis constante sur $[1; 4]$, puis croissante sur $[4; 5]$, puis décroissante sur $[5; 6]$.
</div>
</div>
</div>
</div>

<h3 class="subsubsection-title">6.3.2 Tableau de variation</h3>

On peut résumer les variations d'une fonction $f$ dans un tableau de variations. Pour la courbe donnée précédemment, le tableau de variations se présente ainsi :

<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-02/tab1.png" alt="figure 1" style="max-height:100px; max-width:100%;">
</div>

La double barre en -4 traduit le fait que -4 n'est pas dans l'ensemble de définition.

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère une fonction $f$ dont le tableau de variations est le suivant : <br><br>
<img src="/mabemat/figures/2nde/chapitre-02/tab2.png" alt="figure 2" style="display:inline-block; vertical-align:middle; width:calc(40% - 12px); max-height:200px; max-width:100%;"><div style="display:inline-block; vertical-align:middle; width:calc(52% - 12px);">
<ul>
<li>Le domaine de définition se lit sur la première ligne : $D = [-4; 5]$</li>
<li>$f(-4) = 2$, $f(0) = -1$, $f(2) = 0$, $f(5) = -2$</li>
<li>On souhaite encadrer $f(1)$. On sait que $1 \in [0; 2]$ et $f$ est croissante sur cet intervalle. <br>
On a donc $f(0) \leq f(1) \leq f(2)$, c'est-à-dire $-1 \leq f(1) \leq 0$.</li>
</ul>
</div>
</div>
</div>

<h2 class="subsection-title">6.4 Extremum</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $f$ une fonction définie sur un intervalle $I$ et $a \in I$ :
<ul>
<li>On dit que $f$ admet un minimum en $a$ sur $I$ si, pour tout $x$ dans $I$, on a $f(a) \leq f(x)$.</li>
<li>On dit que $f$ admet un maximum en $a$ sur $I$ si, pour tout $x$ dans $I$, on a $f(a) \geq f(x)$.</li>
<li>On dit que $f$ admet un extremum en $a$ si $f$ admet un minimum ou un maximum en $a$.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère une fonction $f$ dont la représentation graphique est donnée ci-dessous :<br><br>
<div style="display:flex; align-items:center; gap:20px;">
<img src="/mabemat/figures/2nde/chapitre-02/Ex11.png" alt="Ex11" style="width:30%; max-width:30%; height:auto;">
<div style="width:70%;">
<ul>
<li>Le domaine de définition de $f$ est $D = [-5; 5]$.</li>
<li>Le maximum de $f$ sur $D$ est atteint en $-4$ et vaut $4$.</li>
<li>Le minimum de $f$ sur $D$ est atteint en $4$ et vaut $-3$.</li>
<li>Le maximum de $f$ sur $[0; 4]$ est atteint en $2$ et vaut $1$.</li>
</ul>
</div>
</div>
</div>
</div>

<h2 class="subsection-title">6.5 Signe d'une fonction</h2>

<div class="remarque">
Il est également possible de faire un tableau de signes pour une fonction. Lorsque la fonction est définie par une expression algébrique, on peut procéder comme au chapitre précédent. Graphiquement, cela revient à donner la position relative de la courbe par rapport à l'axe des abscisses.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère la fonction $f$ définie sur $\R$ et dont la courbe représentative dans un repère orthonormé est donnée ci-dessous.
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-02/Ex10.png" alt="Ex10" style="max-height:250px; max-width:100%;">
</div>
<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-02/tab3.png" alt="figure 3" style="max-height:150px; max-width:100%;">
</div>
</div>
</div>
