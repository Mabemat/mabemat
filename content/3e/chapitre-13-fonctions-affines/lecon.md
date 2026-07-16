---
title: "Leçon complète"
---

<h2 class="subsection-title">13.1 Généralités sur les fonctions affines</h2>

<h3 class="subsubsection-title">13.1.1 Forme générale d'une fonction affine</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soient $a$ et $b$ deux nombres donnés. La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = ax + b$ est appelée fonction affine, elle est représentée par une droite où :
<ul>
<li>le nombre $a$ est le coefficient directeur de cette droite</li>
<li>le nombre $b$ est l'ordonnée à l'origine</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
<ul>
<li>$f(x) = 2x + 1$ : fonction affine avec $a = 2$ et $b = 1$</li>
<li>$g(x) = -3x + 5$ : fonction affine avec $a = -3$ et $b = 5$</li>
<li>$h(x) = 8x$ : fonction affine avec $a = 8$ et $b = 0$</li>
<li>$i(x) = 3$ : fonction affine avec $a = 0$ et $b = 3$</li>
<li>$j(x) = \dfrac{3}{x} + 2$ : fonction non affine</li>
<li>$k(x) = x^2 + 2x + 9$ : fonction non affine</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">13.1.2 Représentation graphique</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
La représentation graphique d'une fonction affine est une droite non verticale.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
$f(x) = 2x + 1$. <br>
<div style="display:inline-block; vertical-align:top; width:calc(49% - 12px);">
La représentation graphique de $f$ est une droite, donc seuls deux points sont nécessaires.
<table>
<tr>
<th>$x$</th>
<th>0</th>
<th>2</th>
</tr>
<tr>
<td>$f(x)$</td>
<td>1</td>
<td>5</td>
</tr>
</table>
</div><img src="/mabemat/figures/3e/chapitre-12/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:top; width:calc(49% - 12px); max-height:300px; max-width:100%;">

</div>
</div>

<div class="remarque">
On a choisi $0$ et $2$ mais on aurait pu choisir deux autres nombres.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:top; width:calc(65% - 12px);">
<br><br>Représenter graphiquement les fonctions suivantes :
<ul>
<li>$\mathcal{C}_1: f(x) = x + 1$</li>
<li>$\mathcal{C}_2: g(x) = 2$</li>
<li>$\mathcal{C}_3: h(x) = -3x - 2$</li>
<li>$\mathcal{C}_4: i(x) = \dfrac{3}{4}x - 3$</li>
</ul>
</div><div style="display:inline-block; vertical-align:top; width:calc(35% - 12px);">

<img src="/mabemat/figures/3e/chapitre-12/fig2.png" alt="figure 2" style="max-height:300px; max-width:100%;">
</div>

</div>
</div>

<h2 class="subsection-title">13.2 Détermination des coefficients</h2>

<h3 class="subsubsection-title">13.2.1 Graphiquement</h3>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Donner l'expression de la fonction affine $f$ à partir de sa représentation graphique.<br>
<div style="display:inline-block; vertical-align:top; width:calc(59% - 12px);">
<ol>
<li>Détermination de $b$ : ordonnée à l'origine.<br>
L'ordonnée à l'origine est l'ordonnée du point d'abscisse $0$. Ainsi, $b = 1$.</li>
<li>Détermination de $a$ : coefficient directeur.
<ul>
<li>Placer deux points de la droite aux coordonnées faciles à lire.</li>
<li>Compter le nombre de carreau pour le déplacement vertical, puis horizontal pour pour aller d'un de ces deux points à l'autre.</li>
<li>$a = \dfrac{\text{déplacement vertical}}{\text{déplacement horizontal}}$</li>
</ul>
Ainsi, $a =\dfrac{+2}{+1} =2$.</li>
</ol>
Donc $f(x) = 2x + 1$.
</div><img src="/mabemat/figures/3e/chapitre-12/fig3.svg" alt="figure 3" style="display:inline-block; vertical-align:top; width:calc(39% - 12px); max-height:250px; max-width:100%;">

</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Donner l'expression de la fonction affine $f$ à partir de sa représentation graphique.<br>
<div style="display:inline-block; vertical-align:top; width:calc(64% - 12px);">
<ol>
<li>Détermination de $b$ : ordonnée à l'origine.<br>
L'ordonnée à l'origine est l'ordonnée du point d'abscisse $0$. <br>
Ainsi, $b = -1$.</li>
<li>Détermination de $a$ : coefficient directeur. <br>
$a = \dfrac{\text{déplacement vertical}}{\text{déplacement horizontal}}=\dfrac{1}{3}$</li>
</ol>
Donc $f(x) = \dfrac{1}{3}x - 1$.
</div><img src="/mabemat/figures/3e/chapitre-12/fig4.svg" alt="figure 4" style="display:inline-block; vertical-align:top; width:calc(34% - 12px); max-height:200px; max-width:100%;">

</div>
</div>

<h3 class="subsubsection-title">13.2.2 Algébriquement</h3>

<div class="environment methode">
<div class="environment-title">Méthode :</div>
<div class="environment-content">
Pour déterminer algébriquement l'expression d'une fonction affine $f$ à partir de deux points de sa droite représentative :
<ol>
<li>Calcule le coefficient directeur $a$ grâce au taux d'accroissement :
$$a = \dfrac{f(x_B) - f(x_A)}{x_B - x_A}$$</li>
<li>Écris $f(x) = ax + b$ en remplaçant $a$ par sa valeur.</li>
<li>Remplace $x$ et $f(x)$ par les coordonnées d'un des deux points pour trouver $b$.</li>
<li>Conclus avec l'expression finale.</li>
</ol>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
La fonction $f$ est une fonction affine et on sait que les points $\mathrm{E}(2\,;\,3)$ et $\mathrm{F}(4\,;\,9)$ appartiennent à sa droite représentative. Déterminer algébriquement l'expression de $f$.
<ul>
<li><em>1<sup>re</sup> étape : Pour déterminer le coefficient directeur $a$, on calcule le taux d'accroissement :</em>
$$a = \dfrac{f(x_F) - f(x_E)}{x_F - x_E} = \dfrac{9 - 3}{4 - 2} = \dfrac{6}{2} = 3.$$</li>
<li><em>2<sup>e</sup> étape : Écrire l'expression</em><br>
On obtient donc l'expression $f(x) = 3x + b$.</li>
<li><em>3<sup>e</sup> étape : Pour déterminer l'ordonnée à l'origine $b$, on choisit le point E ou le point F et on intègre ses coordonnées dans l'expression.</em><br>
On choisit par exemple le point F. On a $f(x) = 3x + b$, on remplace $x$ par $4$ et $f(x)$ par $9$.<br>
On obtient $9 = 3 \times 4 + b$, on résout alors l'équation :
$$\begin{align*}
9 &= 12 + b \\
9 - 12 &= 12 + b - 12 \\
b &= -3
\end{align*}$$</li>
<li><em>4<sup>e</sup> étape : Conclure</em><br>
L'expression de la fonction affine $f$ est donc $f(x) = 3x - 3$.</li>
</ul>
</div>
</div>
