---
title: "Leçon complète"
---

<h2 class="subsection-title">7.1 Séries statistiques à une variable</h2>

<h3 class="subsubsection-title">7.1.1 Vocabulaire</h3>

<div class="environment definition">
<div class="environment-title">Définitions :</div>
<div class="environment-content">
<ul>
<li>Une <strong>série statistique</strong> est un ensemble de données recueillies sur une <strong>population</strong> (ensemble d'individus ou d'objets étudiés).</li>
<li>Le <strong>caractère</strong> est la propriété observée sur chaque individu.</li>
<li>Les <strong>valeurs</strong> (ou <strong>modalités</strong>) sont les différentes données observées.</li>
<li>Les <strong>effectifs</strong> $n_i$ le nombre de fois où chaque valeur apparaît, et l'<strong>effectif total</strong> $N$ est la somme des $n_i$.</li>
<li>La <strong>fréquence</strong> d'une valeur est le rapport $f_i = \dfrac{n_i}{N}$ (souvent exprimée en $\%$).</li>
</ul>
</div>
</div>

<h3 class="subsubsection-title">7.1.2 Regroupement par classes</h3>

Lorsque les valeurs du caractère sont nombreuses et dispersées, on les regroupe en <strong>classes</strong> $[a\,;\,b[$.<br>
La <strong>longueur</strong> (ou amplitude) d'une classe $[a\,;\,b[$ est $b - a$.

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Le <strong>centre de classe</strong> d'une classe $[a\,;\,b[$ est la valeur $c_i = \dfrac{a+b}{2}$, utilisée pour représenter toutes les valeurs de la classe dans les calculs.
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définitions :</div>
<div class="environment-content">
<ul>
<li>L'<strong>effectif cumulé croissant</strong> (ECC) associé à une valeur $x_i$ est la somme des effectifs de toutes les valeurs inférieures ou égales à $x_i$.</li>
<li>La <strong>fréquence cumulée croissante</strong> (FCC) est le rapport de l'effectif cumulé croissant sur $N$.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On mesure la taille (en cm) des 30 élèves de 2<sup>nde</sup>2. On regroupe les données par classes de longueur 10 cm.<br>
Compléter le tableau de distribution, avec les ECC et les FCC, puis interpréter.

<div style="overflow-x:auto; margin:0.8rem 0;">
<table style="border-collapse:collapse; width:100%; text-align:center;">
<tr>
<th style="border:1px solid #888; padding:6px;">Classe</th>
<th style="border:1px solid #888; padding:6px;">$[150\,;\,160[$</th>
<th style="border:1px solid #888; padding:6px;">$[160\,;\,170[$</th>
<th style="border:1px solid #888; padding:6px;">$[170\,;\,180[$</th>
<th style="border:1px solid #888; padding:6px;">$[180\,;\,190[$</th>
<th style="border:1px solid #888; padding:6px;">$[190\,;\,200[$</th>
<th style="border:1px solid #888; padding:6px;">$[200\,;\,210[$</th>
</tr>
<tr>
<td style="border:1px solid #888; padding:6px;">Centre $c_i$</td>
<td style="border:1px solid #888; padding:6px;">$155$</td>
<td style="border:1px solid #888; padding:6px;">$165$</td>
<td style="border:1px solid #888; padding:6px;">$175$</td>
<td style="border:1px solid #888; padding:6px;">$185$</td>
<td style="border:1px solid #888; padding:6px;">$195$</td>
<td style="border:1px solid #888; padding:6px;">$205$</td>
</tr>
<tr>
<td style="border:1px solid #888; padding:6px;">Effectif $n_i$</td>
<td style="border:1px solid #888; padding:6px;">$3$</td>
<td style="border:1px solid #888; padding:6px;">$6$</td>
<td style="border:1px solid #888; padding:6px;">$12$</td>
<td style="border:1px solid #888; padding:6px;">$6$</td>
<td style="border:1px solid #888; padding:6px;">$3$</td>
<td style="border:1px solid #888; padding:6px;">$0$</td>
</tr>
<tr>
<td style="border:1px solid #888; padding:6px;">ECC</td>
<td style="border:1px solid #888; padding:6px;">$3$</td>
<td style="border:1px solid #888; padding:6px;">$9$</td>
<td style="border:1px solid #888; padding:6px;">$21$</td>
<td style="border:1px solid #888; padding:6px;">$27$</td>
<td style="border:1px solid #888; padding:6px;">$30$</td>
<td style="border:1px solid #888; padding:6px;">$30$</td>
</tr>
<tr>
<td style="border:1px solid #888; padding:6px;">Fréquence $f_i$ (en $\%$)</td>
<td style="border:1px solid #888; padding:6px;">$10$</td>
<td style="border:1px solid #888; padding:6px;">$20$</td>
<td style="border:1px solid #888; padding:6px;">$40$</td>
<td style="border:1px solid #888; padding:6px;">$20$</td>
<td style="border:1px solid #888; padding:6px;">$10$</td>
<td style="border:1px solid #888; padding:6px;">$0$</td>
</tr>
<tr>
<td style="border:1px solid #888; padding:6px;">FCC (en $\%$)</td>
<td style="border:1px solid #888; padding:6px;">$10$</td>
<td style="border:1px solid #888; padding:6px;">$30$</td>
<td style="border:1px solid #888; padding:6px;">$70$</td>
<td style="border:1px solid #888; padding:6px;">$90$</td>
<td style="border:1px solid #888; padding:6px;">$100$</td>
<td style="border:1px solid #888; padding:6px;">$100$</td>
</tr>
</table>
</div>

La FCC de $70\,\%$ pour la classe $[170\,;\,180[$ signifie que $70\,\%$ des élèves mesurent moins de $180$ cm.<br>
La classe la plus représentée est $[170\,;\,180[$ avec $40\,\%$ des élèves.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On relève la distance (en km) de $21$ courses en taxi effectuées dans une ville en une semaine.
Compléter le tableau d'effectifs et d'ECC.

<div style="overflow-x:auto; margin:0.8rem 0;">
<table style="border-collapse:collapse; width:100%; text-align:center;">
<tr>
<th style="border:1px solid #888; padding:6px;">Distance $x_i$ (en km)</th>
<th style="border:1px solid #888; padding:6px;">$2$</th>
<th style="border:1px solid #888; padding:6px;">$4$</th>
<th style="border:1px solid #888; padding:6px;">$6$</th>
<th style="border:1px solid #888; padding:6px;">$8$</th>
<th style="border:1px solid #888; padding:6px;">$10$</th>
<th style="border:1px solid #888; padding:6px;">$12$</th>
<th style="border:1px solid #888; padding:6px;">$14$</th>
</tr>
<tr>
<td style="border:1px solid #888; padding:6px;">Effectif $n_i$</td>
<td style="border:1px solid #888; padding:6px;">$1$</td>
<td style="border:1px solid #888; padding:6px;">$2$</td>
<td style="border:1px solid #888; padding:6px;">$4$</td>
<td style="border:1px solid #888; padding:6px;">$7$</td>
<td style="border:1px solid #888; padding:6px;">$4$</td>
<td style="border:1px solid #888; padding:6px;">$2$</td>
<td style="border:1px solid #888; padding:6px;">$1$</td>
</tr>
<tr>
<td style="border:1px solid #888; padding:6px;">ECC</td>
<td style="border:1px solid #888; padding:6px;">$1$</td>
<td style="border:1px solid #888; padding:6px;">$3$</td>
<td style="border:1px solid #888; padding:6px;">$7$</td>
<td style="border:1px solid #888; padding:6px;">$14$</td>
<td style="border:1px solid #888; padding:6px;">$18$</td>
<td style="border:1px solid #888; padding:6px;">$20$</td>
<td style="border:1px solid #888; padding:6px;">$21$</td>
</tr>
</table>
</div>

On a $N = 21$. La distance la plus fréquente est $8$ km, pour $7$ courses ($\approx 33\,\%$).<br>
L'ECC de $14$ pour $8$ km signifie que $14$ courses (soit $\approx 67\,\%$) font au plus $8$ km.
</div>
</div>

<h3 class="subsubsection-title">7.1.3 Représentations graphiques</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
<ul>
<li>Le <strong>diagramme en bâtons</strong> représente chaque valeur $x_i$ par un segment vertical de hauteur proportionnelle à l'effectif (ou à la fréquence).</li>
<li>L'<strong>histogramme</strong> représente des classes par des rectangles dont la <strong>surface</strong> est proportionnelle à l'effectif.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<strong>Retour sur les tailles.</strong><br>
Représenter la distribution des tailles des élèves de 2<sup>nde</sup>2 par un histogramme.
<div style="text-align:center; margin:0.8rem 0;">
<img src="/mabemat/figures/2nde/chapitre-07-statistiques/histo-tailles.svg" alt="Histogramme des tailles" style="max-height:300px; max-width:100%;">
</div>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<strong>Retour sur les trajets.</strong><br>
Représenter la distribution des distances de courses par un diagramme en bâtons.
<div style="text-align:center; margin:0.8rem 0;">
<img src="/mabemat/figures/2nde/chapitre-07-statistiques/batons-trajets.svg" alt="Diagramme en bâtons des trajets" style="max-height:300px; max-width:100%;">
</div>
</div>
</div>

<h2 class="subsection-title">7.2 Indicateurs de tendance centrale</h2>

Les indicateurs de tendance centrale (ou <strong>indicateurs de position</strong>) permettent de résumer une série par une valeur centrale représentative.

<h3 class="subsubsection-title">7.2.1 Moyenne</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La <strong>moyenne</strong> d'une série statistique dont les valeurs sont $x_1, x_2, \dots, x_k$ avec les effectifs correspondants $n_1, n_2, \dots, n_k$ (et $N = n_1 + \cdots + n_k$) est :
$$\overline{x} = \dfrac{n_1 x_1 + n_2 x_2 + \cdots + n_k x_k}{N}$$
Pour des données regroupées par classes, on utilise les <strong>centres de classe</strong> $c_i$ à la place des valeurs $x_i$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<strong>Retour sur les tailles.</strong><br>
On utilise les centres de classe $c_i$ et les effectifs $n_i$ :
$$\overline{x} = \dfrac{3 \times 155 + 6 \times 165 + 12 \times 175 + 6 \times 185 + 3 \times 195}{30}$$
$$\overline{x} = \dfrac{465 + 990 + 2100 + 1110 + 585}{30} = \dfrac{5250}{30} = 175 \text{ cm}$$
En moyenne, les élèves de 2<sup>nde</sup>2 mesurent $175$ cm.
</div>
</div>

<div class="remarque">
La moyenne calculée avec les centres de classe est une <strong>valeur approchée</strong> de la vraie moyenne, car on suppose que toutes les valeurs d'une classe sont concentrées en son centre.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<strong>Retour sur les trajets.</strong><br>
Calculer la distance moyenne d'une course.<br>
On calcule la moyenne pondérée :
$$\overline{x} = \dfrac{1 \times 2 + 2 \times 4 + 4 \times 6 + 7 \times 8 + 4 \times 10 + 2 \times 12 + 1 \times 14}{21} = \dfrac{168}{21} = 8 \text{ km}$$
En moyenne, une course en taxi dans cette ville fait $8$ km.
</div>
</div>

<h3 class="subsubsection-title">7.2.2 Linéarité de la moyenne</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Si une série de valeurs $x_i$ a pour moyenne $\overline{x}$, alors la série de valeurs $ax_i + b$ (avec $a$ et $b$ réels) a pour moyenne $a\overline{x} + b$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<strong>Retour sur les trajets.</strong><br>
La distance moyenne d'une course est $8$ km. Le taxi facture $2$€ par km et $4$€ de prise en charge. Calculer le prix moyen d'une course.<br>
En appliquant la propriété pour ne pas avoir à recalculer course par course :
$$2\overline{x} + 4 = 2 \times 8 + 4 = 20 \text{ €}$$
En moyenne, une course dans cette ville coûte $20$ €.
</div>
</div>

<h3 class="subsubsection-title">7.2.3 Médiane</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La <strong>médiane</strong> $Me$ est une valeur telle qu'au moins $50\,\%$ des données sont inférieures ou égales à $Me$, et au moins $50\,\%$ sont supérieures ou égales à $Me$.<br>
La médiane partage la série ordonnée en deux groupes d'effectifs égaux.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode</div>
<div class="environment-content">
Pour déterminer la médiane d'une série de $N$ valeurs rangées dans l'ordre croissant :
<ul>
<li>Si $N$ est impair, la médiane est la valeur de rang $\dfrac{N+1}{2}$.</li>
<li>Si $N$ est pair, la médiane est la moyenne des valeurs de rangs $\dfrac{N}{2}$ et $\dfrac{N}{2}+1$.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<strong>Retour sur les tailles.</strong><br>
Déterminer la médiane de la distribution des tailles.<br><br>
On a $N = 30$ (pair) : on cherche la moyenne des valeurs de rangs $15$ et $16$.<br>
D'après l'ECC, les rangs $15$ et $16$ se trouvent tous les deux dans la classe $[170\,;\,180[$. C'est la <strong>classe médiane</strong>.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<strong>Retour sur les trajets.</strong><br>
Déterminer la médiane des distances de courses et interpréter.<br>
On a $N = 21$ (impair) : la médiane est la valeur de rang $\dfrac{21+1}{2} = 11$.<br>
D'après l'ECC, le rang $11$ se trouve dans le groupe des courses de $8$ km.
$$Me = 8 \text{ km}$$
Au moins la moitié des courses font au plus $8$ km, l'autre moitié au moins $8$ km.
</div>
</div>

<h2 class="subsection-title">7.3 Indicateurs de dispersion</h2>

Les indicateurs de dispersion mesurent l'étalement des valeurs autour d'un indicateur de position.

<h3 class="subsubsection-title">7.3.1 Étendue</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
L'<strong>étendue</strong> d'une série statistique est la différence entre la valeur maximale et la valeur minimale de la série.
$$e = x_{\max} - x_{\min}$$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<strong>Retour sur les trajets.</strong><br>
Calculer l'étendue de la série.<br>
La distance minimale est $2$ km et la distance maximale est $14$ km, donc :
$$e = 14 - 2 = 12 \text{ km}$$
Il y a $12$ km d'écart entre la course la plus courte et la plus longue.
</div>
</div>

<h3 class="subsubsection-title">7.3.2 Quartiles et écart interquartile</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
<ul>
<li>Le <strong>premier quartile</strong> $Q_1$ est la plus petite valeur de la série telle qu'au moins $25\,\%$ des données soient inférieures ou égales à $Q_1$.</li>
<li>Le <strong>troisième quartile</strong> $Q_3$ est la plus petite valeur de la série telle qu'au moins $75\,\%$ des données soient inférieures ou égales à $Q_3$.</li>
<li>L'<strong>écart interquartile</strong> est $Q_3 - Q_1$.</li>
</ul>
L'écart interquartile contient au moins $50\,\%$ des valeurs et n'est <strong>pas influencé</strong> par les valeurs extrêmes.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<strong>Retour sur les tailles.</strong><br>
Dans quelles classes se trouvent les quartiles $Q_1$ et $Q_3$ ?<br>
On utilise les ECC ($N = 30$) :

<div style="overflow-x:auto; margin:0.8rem 0;">
<table style="border-collapse:collapse; width:100%; text-align:center;">
<tr>
<th style="border:1px solid #888; padding:6px;">Classe</th>
<th style="border:1px solid #888; padding:6px;">$[150\,;\,160[$</th>
<th style="border:1px solid #888; padding:6px;"><strong>$[160\,;\,170[$</strong></th>
<th style="border:1px solid #888; padding:6px;">$[170\,;\,180[$</th>
<th style="border:1px solid #888; padding:6px;"><strong>$[180\,;\,190[$</strong></th>
<th style="border:1px solid #888; padding:6px;">$[190\,;\,200[$</th>
<th style="border:1px solid #888; padding:6px;">$[200\,;\,210[$</th>
</tr>
<tr>
<td style="border:1px solid #888; padding:6px;">ECC</td>
<td style="border:1px solid #888; padding:6px;">$3$</td>
<td style="border:1px solid #888; padding:6px;"><strong>$9$</strong></td>
<td style="border:1px solid #888; padding:6px;">$21$</td>
<td style="border:1px solid #888; padding:6px;"><strong>$27$</strong></td>
<td style="border:1px solid #888; padding:6px;">$30$</td>
<td style="border:1px solid #888; padding:6px;">$30$</td>
</tr>
</table>
</div>

<strong>Calcul de $Q_1$ :</strong> Comme $\dfrac{30}{4} = 7{,}5$, on prend la 8<sup>e</sup> valeur.<br>
$Q_1$ se trouve donc dans $[160\,;\,170[$.<br><br>
<strong>Calcul de $Q_3$ :</strong> Comme $\dfrac{3 \times 30}{4} = 22{,}5$, on prend la 23<sup>e</sup> valeur.<br>
$Q_3$ se trouve donc dans $[180\,;\,190[$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<strong>Retour sur les trajets.</strong><br>
Donner les valeurs des quartiles, puis de l'écart interquartile.<br><br>
<strong>Calcul de $Q_1$ :</strong> Comme $\dfrac{N}{4} = 5{,}25$, $Q_1$ est la 6<sup>e</sup> valeur.<br>
D'après les ECC, le rang $6$ se trouve dans le groupe $6$ km.<br>
Donc $Q_1 = 6 \text{ km}$.<br><br>
<strong>Calcul de $Q_3$ :</strong> Comme $\dfrac{3 \times 21}{4} = 15{,}75$, $Q_3$ est la 16<sup>e</sup> valeur.<br>
D'après les ECC, le rang $16$ se trouve dans le groupe $10$ km.<br>
Donc $Q_3 = 10 \text{ km}$.<br><br>
Ainsi, l'écart interquartile vaut $10 - 6 = 4$ km.<br><br>
Au moins $25\,\%$ des courses font au plus $6$ km, et au moins $75\,\%$ font au plus $10$ km. La moitié centrale des courses a une distance comprise entre $6$ et $10$ km.
</div>
</div>

<div style="text-align:center; margin:0.8rem 0;">
<img src="/mabemat/figures/2nde/chapitre-07-statistiques/boite-moustaches.svg" alt="Boîte à moustaches" style="max-height:200px; max-width:100%;">
</div>

<h3 class="subsubsection-title">7.3.3 Variance et écart-type</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit une série de valeurs $x_1, x_2, \dots, x_k$ d'effectifs $n_1, n_2, \dots, n_k$ et de moyenne $\overline{x}$.
<ol>
<li>La <strong>variance</strong> est :
$$V = \dfrac{n_1(x_1-\overline{x})^2 + n_2(x_2-\overline{x})^2 + \cdots + n_k(x_k-\overline{x})^2}{N}$$</li>
<li>L'<strong>écart-type</strong> est $\sigma = \sqrt{V}$. Il s'exprime dans la même unité que les données.</li>
</ol>
</div>
</div>

<div class="remarque">
Plus $\sigma$ est grand, plus les valeurs sont dispersées autour de la moyenne.<br>
Contrairement à l'écart interquartile, l'écart-type est <strong>sensible aux valeurs extrêmes</strong>.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<strong>Retour sur les tailles.</strong><br>
Calculer la variance et l'écart-type de la distribution des tailles.<br><br>
On utilise les centres de classe et $\overline{x} = 175$ cm.
$$V = \dfrac{3(155-175)^2 + 6(165-175)^2 + 12(175-175)^2 + 6(185-175)^2 + 3(195-175)^2}{30}$$
$$V = \dfrac{3 \times 400 + 6 \times 100 + 12 \times 0 + 6 \times 100 + 3 \times 400}{30} = \dfrac{3600}{30} = 120$$
$$\sigma = \sqrt{120} \approx 11 \text{ cm}$$
Les tailles s'écartent en moyenne de $11$ cm de la moyenne de $175$ cm.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<strong>Retour sur les trajets.</strong><br>
Calculer la variance et l'écart-type des distances de courses.<br>
On utilise $\overline{x} = 8$ km.
$$V = \dfrac{1(2-8)^2 + 2(4-8)^2 + 4(6-8)^2 + 7(8-8)^2 + 4(10-8)^2 + 2(12-8)^2 + 1(14-8)^2}{21}$$
$$V = \dfrac{1 \times 36 + 2 \times 16 + 4 \times 4 + 7 \times 0 + 4 \times 4 + 2 \times 16 + 1 \times 36}{21} = \dfrac{168}{21} = 8$$
$$\sigma = \sqrt{8} \approx 2{,}8 \text{ km}$$
Les distances s'écartent en moyenne de $2{,}8$ km de la moyenne de $8$ km.
</div>
</div>
