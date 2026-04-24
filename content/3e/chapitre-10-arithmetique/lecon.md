---
title: "Leçon complète"
---

<h2 class="subsection-title">10.1 Divisibilité</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Un nombre entier $a$ est divisible par un nombre entier $b$ si le reste de la division euclidienne de $a$ par $b$ est nul.

Dans ce cas, $a$ est un multiple de $b$ et $b$ est un diviseur de $a$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
$72$ est divisible par $24$.

En effet, $72 = 3 \times 24 + 0$ donc le reste de la division euclidienne de $72$ par $24$ est nul.

On peut donc dire que $72$ est un multiple de $24$ et de $3$ ou que $24$ est un diviseur de $72$.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode : Critères de divisibilité.</div>
<div class="environment-content">
<ul>
<li>Un nombre est divisible par $2$ s'il se termine par $0$, $2$, $4$, $6$ ou $8$</li>
<li>Un nombre est divisible par $3$ si la somme de ses chiffres est divisible par $3$</li>
<li>Un nombre est divisible par $4$ si le nombre formé par ses deux derniers chiffres est un multiple de $4$</li>
<li>Un nombre est divisible par $5$ s'il se termine par $0$ ou $5$</li>
<li>Un nombre est divisible par $9$ si la somme de ses chiffres est divisible par $9$</li>
</ul>
</div>
</div>

<h2 class="subsection-title">10.2 Nombres premiers</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Un nombre est premier s'il possède exactement deux diviseurs qui sont 1 et lui même.
</div>
</div>

<div class="remarque">
Liste des nombres premiers inférieurs à 100 :<br>
$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97$<br>
Vous devez connaître tous les nombres premiers inférieurs à 30.
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
<ol>
<li>Comme 252 est pair, il admet donc au moins trois diviseurs qui sont 1, 2 et lui-même, <span style="color:#EB7F73;">252 n'est donc pas premier</span>.</li>
<li>En effectuant la division euclidienne de 17 par tous les nombres premiers inférieurs à $\sqrt{17}$, c'est-à-dire par les nombres 2 et 3, le reste n'est jamais nul, <span style="color:#EB7F73;">17 est donc un nombre premier</span>.</li>
<li>Comme 2 + 3 + 1 = 6 est un multiple de 3 donc 231 aussi, il admet donc au moins trois diviseurs qui sont 1, 3 et lui-même, <br><span style="color:#EB7F73;">231 n'est donc pas premier</span>.</li>
<li>Comme le chiffre des unités de 955 est un 5, alors 955 est divisible par 5, il admet donc au moins trois diviseurs qui sont 1, 5 et lui-même, <span style="color:#EB7F73;">955 n'est donc pas premier</span>.</li>
</ol>
</div>
</div>


<h2 class="subsection-title">10.3 Décomposition en produit de facteurs premiers</h2>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
On peut toujours décomposer un nombre non premier en produit de plusieurs facteurs premiers. Cette décomposition est unique.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:top; width:calc(31% - 12px);">
<table style="border-collapse:collapse; border:none;">
<tr>
<td style="border:none; background:none; border-right:2px solid black;">324</td>
<td style="border:none; background:none;">2</td>
</tr>
<tr>
<td style="border:none; background:none; border-right:2px solid black;">162</td>
<td style="border:none; background:none;">2</td>
</tr>
<tr>
<td style="border:none; background:none; border-right:2px solid black;">81</td>
<td style="border:none; background:none;">3</td>
</tr>
<tr>
<td style="border:none; background:none; border-right:2px solid black;">27</td>
<td style="border:none; background:none;">3</td>
</tr>
<tr>
<td style="border:none; background:none; border-right:2px solid black;">9</td>
<td style="border:none; background:none;">3</td>
</tr>
<tr>
<td style="border:none; background:none; border-right:2px solid black;">3</td>
<td style="border:none; background:none;">3</td>
</tr>
<tr>
<td style="border:none; background:none; border-right:2px solid black;">1</td>
<td style="border:none; background:none;"></td>
</tr>
</table>

</div><div style="display:inline-block; vertical-align:top; width:calc(67% - 12px);">
<br><br><br>
La décomposition en produit de facteurs premiers de $324$ est : 
$$324 = 2 \times 2 \times 3 \times 3 \times 3 \times 3=2^2 \times 3^4$$
</div>

</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode - Trouver le plus grand diviseur commun.</div>
<div class="environment-content">
<ol>
<li><strong>Décompose</strong> chaque nombre en facteurs premiers.</li>
<li><strong>Garde</strong> tous les facteurs communs.</li>
<li><strong>Multiplie</strong> les entre eux.</li>
</ol>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Quel est le plus grand diviseur commun de $72$ et $48$ ?

<div class="math-display">
$$
\begin{align*}
72 &= 2\times2\times2 \times 3 \times3 \\
48 &= 2\times2\times2\times2 \times 3
\end{align*}
$$
</div>

Facteurs communs : $2^3$ et $3$<br>
Or $ 2^3 \times 3 = 8 \times 3 = 24$<br>
Donc le plus grand diviseur commun de $72$ et $48$ est $24$.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode - Trouver le plus petit multiple commun.</div>
<div class="environment-content">
<ol>
<li><strong>Décompose</strong> chaque nombre en facteurs premiers.</li>
<li><strong>Garde</strong> tous les facteurs premiers qui apparaissent, <strong>avec leur plus grand exposant</strong>.</li>
<li><strong>Multiplie</strong> les entre eux.</li>
</ol>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Quel est le plus petit multiple commun de $72$ et $48$ ?

<div class="math-display">
$$
\begin{align*}
72 &= 2\times2\times2 \times 3 \times3 \\
48 &= 2\times2\times2\times2 \times 3
\end{align*}
$$
</div>

Tous les facteurs avec leur plus grand exposant : $2^4$ et $3^2$ <br>
Or $2^4 \times 3^2 = 16 \times 9 = 144$ <br>
Donc le plus petit commun multiple de 72 et 48 est 144.
</div>
</div>
