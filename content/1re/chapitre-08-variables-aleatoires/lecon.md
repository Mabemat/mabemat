---
title: "Leçon complète"
---

<h2 class="subsection-title">8.1 Variable aléatoire discrète</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $\Omega$ l'univers d'une expérience aléatoire. <br>
On définit une variable aléatoire sur $\Omega$ lorsqu'on associe un nombre réel à chacune des issues.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On lance un dé à six faces, et on considère le jeu suivant :
<ul>
<li>Si le résultat est pair on gagne 2 €.</li>
<li>Si le résultat est 1 on gagne 3 €.</li>
<li>Si le résultat est 3 ou 5 on perd 4 €.</li>
</ul>
On peut définir la variable aléatoire X qui à chaque issue associe le gain algébrique (c'est-à-dire le gain positif ou négatif). <br>
Quelles valeurs peut prendre la variable aléatoire X ? <br>[0.5em]
X peut prendre les valeurs $2,$ $3$ et $-4$.
</div>
</div>

<h2 class="subsection-title">8.2 Loi de probabilité</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $X$ une variable aléatoire.<br>
On appelle loi de probabilité de $X$ la donnée des probabilités de chaque valeur prise par $X$. <br>

Autrement dit, définir la loi de probabilité de $X$, c'est :
<ul>
<li>faire une partition de l'univers $\Omega$ avec les événements constitués par les différentes issues possibles de l'expérience : $x_1, x_2, ..., x_n$</li>
<li>déterminer les probabilités de chacun de ses événements : $p_1, p_2, ... , p_n$
et récapituler ces résultats dans un tableau tel que celui-ci :<table>
<tr>
<th>$x$</th>
<th>$x_1$</th>
<th>$x_2$</th>
<th>$\cdots$</th>
<th>$x_n$</th>
</tr>
<tr>
<td>$P(X=x)$</td>
<td>$p_1$</td>
<td>$p_2$</td>
<td>$\cdots$</td>
<td>$p_n$</td>
</tr>
</table>
</li>
</ul>
</div>
</div>

<div class="remarque">
On a $p_1+p_2+...+p_n=1$.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Suite de l'exemple : Déterminer la loi de probabilité de $X$.<br>

$ P(X=-4)=2 \times \dfrac{1}{6}=\dfrac{1}{3}$, $P(X=2)=3 \times \dfrac{1}{6}=\dfrac{1}{2}$ et $P(X=3)=\dfrac{1}{6} $ <br>

On résume souvent cela dans un tableau.<br>
Compléter le tableau en indiquant les probabilités associées à chaque valeur prise par $X$.


<table>
<tr>
<th>$x$</th>
<th>-4</th>
<th>2</th>
<th>3</th>
</tr>
<tr>
<td>$P(X=x)$</td>
<td>$\dfrac{1}{3}$</td>
<td>$\dfrac{1}{2}$</td>
<td>$\dfrac{1}{6}$</td>
</tr>
</table>

</div>
</div>

<h2 class="subsection-title">8.3 Espérance et variance</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $X$ une variable aléatoire, et soient $x_{1}, x_{2}, \ldots, x_{n}$ les valeurs prises par $X$. On appelle espérance de $X$ le nombre noté $E(X)$ défini par :

$$
E(X)=x_{1} \times p_1+x_{2} \times p_2+\ldots+x_{n} \times p_n
$$

qu'on peut aussi écrire :

$$
E(X)=\sum_{i=1}^{n} x_{i} p_i
$$

Elle détermine la valeur moyenne prise par $X$ sur un grand nombre d'expériences.
</div>
</div>


<div class="remarque">
L'espérance permet ainsi de savoir si un jeu fera gagner ou perdre de l'argent à un joueur sur long terme.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Dans notre exemple, <ol>
<li>Calculer l'espérance de la variable aléatoire $X$.</li>
</ol>

On a:

$$
\begin{aligned}
E(X) & =x_{1} \times p_1+x_{2} \times p_2+x_{3} \times p_3 \\\\
& =-4 \times \dfrac{1}{3}+2 \times \dfrac{1}{2}+3 \times \dfrac{1}{6} \\\\
& =-\dfrac{4}{3}+1+\dfrac{1}{2} \\\\
& =-\dfrac{8}{6}+\dfrac{6}{6}+\dfrac{3}{6} \\\\
& =\dfrac{1}{6}
\end{aligned}
$$

<ol>
<li>Que signifie ce résultat? Le jeu est-il intéressant? Quantifier la réponse.</li>
</ol>

Cela signifie que le jeu est intéressant car 
$\dfrac{1}{6} \approx 0,17$.<br>
Si on y joue un grand nombre de fois, on gagne en moyenne $0,17$€ par partie. Sur 100 parties (un assez grand nombre de parties) par exemple, on gagne en moyenne environ $17$€.
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
<strong>La variance de cette loi</strong> est le nombre noté V(X) défini par :<br> $$V(X)=(x_1-E(X))^2p_1+(x_2-E(X))^2p_2+\ldots + (x_n-E(X))^2p_n$$<br>
La variance est également obtenue par la formule $V(X)=x_1^2p_1+x_2^2p_2+\ldots +x_n^2p_n-[E(X)]^2$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Dans notre exemple, la variance est
$V(X)=(-4-\dfrac{1}{6})^2\times\dfrac{1}{3} +(2-\dfrac{1}{6})^2\times\dfrac{1}{2} +(3-\dfrac{1}{6})^2\times \dfrac{1}{6} = \dfrac{317}{36}\simeq 8,8$

ou <br>
$V(X)= (-4)^2\times \dfrac{1}{3} +2^2 \times \dfrac{1}{2}+ 3^2 \times \dfrac{1}{6} - (\dfrac{1}{6})^2= \dfrac{317}{36}\simeq 8,8$
</div>
</div>

<div class="remarque">

<ul>
<li>L'espérance est la valeur qu'on peut \og espérer \fg{} obtenir en moyenne quand on répète un grand nombre de fois l'expérience (cf moyenne en statistique)</li>
<li>La variance, comme en statistique, caractérise la dispersion des valeurs autour de l'espérance.</li>
</ul>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
<strong>L'écart-type</strong> de cette loi, noté $\sigma$ , est la racine carrée de la variance : $\sigma=\sqrt{V(X)}$.
</div>
</div>

<div class="remarque">

<ul>
<li>On a toujours $V(X)\geq 0$, on peut donc calculer $\sqrt{V(X)}$ c'est-à-dire $\sigma$. De plus, on a toujours $\sigma \geq 0$.</li>
<li>$\sigma=\sqrt{V(X)}$, c'est pourquoi V(X) est souvent noté $\sigma^2$.</li>
</ul>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Un jeu consiste à lancer $2$ dés tétraédriques et faire la somme des résultats obtenus sur chacune des faces.<br>
Le joueur empoche une somme équivalente à $2$ fois le résultat apparu si ce nombre est un multiple de $2$ et paye le montant affiché dans le cas contraire.
<ol>
<li>Donner la loi de probabilité associée au gain (positif ou négatif) de la partie.
<br> <br> <div style="display:inline-block; vertical-align:top; width:calc(66% - 12px);">
Lorsqu'on lance $2$ dés tétraédriques, l'ensemble des valeurs de la somme est : $S=\{2;3;4;5;6;7;8\}$.<br>
Les valeurs possibles du gain sont donc <br>$G = \{ 4 ; -3 ; 8 ; -5 ; 12 ; -7 ; 16 \}$.
La loi de probabilité est donc donnée par le tableau ci-dessous :<br>
<br>
<table>
<tr>
<th>$x$</th>
<th>$4$</th>
<th>$-3$</th>
<th>$8$</th>
<th>$-5$</th>
<th>$12$</th>
<th>$-7$</th>
<th>$16$</th>
</tr>
<tr>
<td>$P(G=x)$</td>
<td>$1/16$</td>
<td>$2/16$</td>
<td>$3/16$</td>
<td>$4/16$</td>
<td>$3/16$</td>
<td>$2/16$</td>
<td>$1/16$</td>
</tr>
</table>
</div><div style="display:inline-block; vertical-align:top; width:calc(32% - 12px);">
<table>
<tr>
<th>Somme</th>
<th>$\mathbf{1}$</th>
<th>$\mathbf{2}$</th>
<th>$\mathbf{3}$</th>
<th>$\mathbf{4}$</th>
</tr>
<tr>
<td>$\mathbf{1}$</td>
<td>$2$</td>
<td>$3$</td>
<td>$4$</td>
<td>$5$</td>
</tr>
<tr>
<td>$\mathbf{2}$</td>
<td>$3$</td>
<td>$4$</td>
<td>$5$</td>
<td>$6$</td>
</tr>
<tr>
<td>$\mathbf{3}$</td>
<td>$4$</td>
<td>$5$</td>
<td>$6$</td>
<td>$7$</td>
</tr>
<tr>
<td>$\mathbf{4}$</td>
<td>$5$</td>
<td>$6$</td>
<td>$7$</td>
<td>$8$</td>
</tr>
</table>
</div>
<br></li>
<li>Calculer l'espérance et l'écart-type de la loi déterminée ci-dessus.
<br> On a $E(X)=4\times \dfrac{1}{16}+ (-3)\times \dfrac{2}{16} +8\times \dfrac{3}{16}+ (-5)\times \dfrac{4}{16} +
12\times \dfrac{3}{16}+ (-7)\times \dfrac{2}{16} +16\times \dfrac{1}{16}=2,5$<br>
<br>
Cela signifie qu'en moyenne le joueur gagne 2,5 €.<br>
Par ailleurs, on a : <br>
$V(X)=4^2\times \dfrac{1}{16}+ (-3)^2\times \dfrac{2}{16} +8^2\times \dfrac{3}{16}+ (-5)^2\times \dfrac{4}{16} +
12^2\times \dfrac{3}{16}+ (-7)^2\times \dfrac{2}{16} +162\times \dfrac{1}{16}-2,5^2=63,25$.<br>
<br>
La variance de cette loi est de $63,25$, donc l'écart-type est de $\sqrt{63,25}\approx 7,95$.</li>
</ol>
</div>
</div>
