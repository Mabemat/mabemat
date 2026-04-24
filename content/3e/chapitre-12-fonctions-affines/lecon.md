---
title: "Leçon complète"
---

<h2 class="subsection-title">12.1 Généralités sur les fonctions affines</h2>

<h3 class="subsubsection-title">12.1.1 Forme générale d'une fonction affine</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soient $a$ et $b$ deux réels donnés. La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = ax + b$ est appelée fonction affine, elle est représentée par une droite où :
<ul>
<li>le réel $a$ est le coefficient directeur de cette droite</li>
<li>le réel $b$ est l'ordonnée à l'origine</li>
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

<h3 class="subsubsection-title">12.1.2 Représentation graphique</h3>

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

<h2 class="subsection-title">12.2 Détermination des coefficients</h2>

<h3 class="subsubsection-title">12.2.1 Graphiquement</h3>

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

<h3 class="subsubsection-title">12.2.2 Algébriquement</h3>

<div class="environment methode">
<div class="environment-title">Méthode :</div>
<div class="environment-content">
Cas particulier : Une des valeurs données est $f(0)$.
<ol>
<li><strong>Écris</strong> la forme générale : $f(x) = ax + b$.</li>
<li><strong>Utilise</strong> $f(0)$ pour trouver $b$ directement car $f(0) = a \times 0 + b = b$.</li>
<li><strong>Remplace</strong> $b$ par sa valeur dans l'expression : $f(x) = ax + b$.</li>
<li><strong>Utilise</strong> la deuxième donnée pour calculer $a$, en faisant une équation.</li>
<li><strong>Conclus</strong> avec l'expression finale.</li>
</ol>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
La fonction $f$ est une fonction affine et on sait que $f(0)=3$ et $f(-2)=-1$.<br>
Déterminer la forme algébrique de la fonction $f$. <br>

Soit $f(x)=ax+b$. Nous savons que $f(0)=3=b$.<br>
Donc $f(x)=ax+3$. <br>
En utilisant la donnée $f(-2)=-1$ on obtient : $a \times (-2)+3=-1$ d'où $a \times (-2)=-1-3=-4$.<br>
Donc $a=\dfrac{-4}{-2}=2$.<br>
Ainsi $f(x)=2x+3$.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode :</div>
<div class="environment-content">
Cas général.
<ol>
<li><strong>Écris</strong> la forme générale : $f(x) = ax + b$.</li>
<li><strong>Traduis</strong> chaque donnée en équation.</li>
<li><strong>Exprime</strong> $b$ en fonction de $a$ dans chaque équation.</li>
<li><strong>Égalise</strong> les deux expressions de $b$ (identification).</li>
<li><strong>Résous</strong> l'équation pour trouver $a$.</li>
<li><strong>Calcule</strong> $b$ en remplaçant $a$ par sa valeur dans une des deux expressions.</li>
<li><strong>Conclus</strong> avec l'expression finale.</li>
</ol>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
La fonction $f$ est une fonction affine et on sait que $f(4)=3$ et $f(-1)=-7$.<br>Déterminer la forme algébrique de la fonction $f$. <br>

Soit $f(x)=ax+b$. En utilisant les données de l'énoncé, on obtient : <br>
$f(4)=3=a \times 4+b$ et $f(-1)=-7=a \times (-1)+b$<br>Donc d'une part : $b=3+a\times (-4)$ et d'autre part : $b=-7+a\times 1$.<br>Par identification, on obtient : $3+a\times (-4)=-7+a\times 1$.<br>On en déduit que $3+7=a(4+1)$ soit $10=5a$.<br>Donc $a=\dfrac{10}{5}=2$.<br>Donc $b=3+2\times (-4)=3-8=-5$.<br>Ainsi $f(x)=2x-5$.
</div>
</div>
