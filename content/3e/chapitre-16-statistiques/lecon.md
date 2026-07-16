---
title: "Leçon complète"
---

<h2 class="subsection-title">16.1 Moyenne</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La <strong>moyenne</strong> $\overline{x}$ d'une série statistique dont les valeurs sont $x_1, x_2, \ldots, x_k$ avec les effectifs $n_1, n_2, \ldots, n_k$ est :
$$\overline{x} = \dfrac{n_1 x_1 + n_2 x_2 + \cdots + n_k x_k}{n_1+n_2+\cdots+n_k}$$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On a relevé le temps de trajet (en minutes) domicile-collège des 30 élèves d'une classe de 3ème.

<table>
<tr>
<th>Temps de trajet (min)</th>
<th>5</th><th>10</th><th>15</th><th>20</th><th>30</th><th>45</th><th>Total</th>
</tr>
<tr>
<td>Effectif</td>
<td>4</td><td>8</td><td>10</td><td>5</td><td>2</td><td>1</td><td>30</td>
</tr>
</table>

Quel est le temps de trajet moyen d'un élève de cette classe ?
$$\overline{x} = \dfrac{4\times 5 + 8\times 10 + 10\times 15 + 5\times 20 + 2\times 30 + 1\times 45}{30} = \dfrac{415}{30} \approx 13{,}8 \text{ min}$$
Donc en moyenne, les élèves mettent environ 14 minutes pour venir au collège.
</div>
</div>

<h2 class="subsection-title">16.2 Étendue</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
L'<strong>étendue</strong> d'une série statistique est la différence entre la plus grande valeur et la plus petite valeur de la série.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
$\text{Étendue} = 45 - 5 = 40$ minutes.<br>
Il y a un écart de 40 minutes entre l'élève qui habite le plus près et celui qui habite le plus loin.
</div>
</div>

<h2 class="subsection-title">16.3 Effectifs cumulés croissants</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
L'<strong>effectif cumulé croissant</strong> (ECC) d'une valeur est le nombre total d'individus ayant cette valeur <strong>ou une valeur inférieure</strong>.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Compléter le tableau ci-dessous :

<table>
<tr>
<th>Temps de trajet (min)</th>
<th>5</th><th>10</th><th>15</th><th>20</th><th>30</th><th>45</th><th>Total</th>
</tr>
<tr>
<td>Effectif</td>
<td>4</td><td>8</td><td>10</td><td>5</td><td>2</td><td>1</td><td>30</td>
</tr>
<tr>
<td>Effectif cumulé croissant</td>
<td>4</td><td>12</td><td>22</td><td>27</td><td>29</td><td>30</td><td>30</td>
</tr>
</table>
</div>
</div>

<h2 class="subsection-title">16.4 Médiane et quartiles</h2>

<h3 class="subsubsection-title">16.4.1 Médiane</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La <strong>médiane</strong> $M$ est une valeur qui partage la série ordonnée en deux groupes de même effectif : au moins la moitié des valeurs sont inférieures ou égales à $M$, et au moins la moitié des valeurs sont supérieures ou égales à $M$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Pour les 30 élèves, la médiane se trouve entre la 15e et la 16e valeur.<br>
D'après le tableau, la 15e et la 16e valeur sont dans la colonne « 15 min ».<br>
Donc $M = 15$ minutes.<br><br>
<strong>Interprétation :</strong> Au moins la moitié des élèves mettent au plus 15 minutes pour venir au collège.<br>
Autrement dit : au moins 50&nbsp;% des élèves habitent à moins de 15 minutes.
</div>
</div>

<div class="remarque">
La médiane est moins sensible aux valeurs extrêmes que la moyenne $\overline{x}$. Si l'élève qui met 45 minutes déménage et met désormais 2 heures, la médiane ne change pas mais la moyenne augmente.
</div>

<h3 class="subsubsection-title">16.4.2 Quartiles</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Le <strong>premier quartile</strong> $(Q_1)$ est la plus petite valeur de la série telle qu'au moins $25\,\%$ des valeurs de la série sont inférieures ou égales à cette valeur.<br>
Le <strong>troisième quartile</strong> $(Q_3)$ est la plus petite valeur de la série telle qu'au moins $75\,\%$ des valeurs de la série sont inférieures ou égales à cette valeur.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Calculer et interpréter pour les 30 élèves le premier et le troisième quartile :
<ul>
<li>Pour $Q_1$ : Comme $\dfrac{30}{4} = 7{,}5$.<br>
Le premier quartile est la 8e valeur de la série statistique.<br>
D'après le tableau des ECC : $\textcolor{#EB7F73}{Q_1 = 10}$.</li>
<li>Pour $Q_3$ : Comme $\dfrac{3 \times 30}{4} = 22{,}5$.<br>
Le troisième quartile est la 23e valeur de la série statistique.<br>
D'après le tableau des ECC : $\textcolor{#EB7F73}{Q_3 = 20}$.</li>
<li>Pour l'écart interquartile : $Q_3 - Q_1 = 20 - 10 = 10$ minutes.</li>
</ul>
<strong>Interprétations :</strong>
<ul>
<li>$Q_1 = 10$ : au moins 25&nbsp;% des élèves mettent au plus 10 minutes pour venir au collège.</li>
<li>$Q_3 = 20$ : au moins 75&nbsp;% des élèves mettent au plus 20 minutes pour venir au collège. Autrement dit, au plus 25&nbsp;% des élèves mettent plus de 20 minutes.</li>
<li>L'écart interquartile vaut 10 : les 50&nbsp;% d'élèves « du milieu » ont un trajet compris entre 10 et 20 minutes.</li>
</ul>
</div>
</div>

<div class="remarque">
Lors du calcul de la position d'un quartile, on arrondit toujours le résultat à l'entier supérieur.
</div>

<h2 class="subsection-title">16.5 Boîte à moustaches</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Une <strong>boîte à moustaches</strong> (ou diagramme en boîte) est un graphique qui représente visuellement les cinq valeurs caractéristiques d'une série :

<img src="/mabemat/figures/3e/chapitre-15/fig1.svg" alt="Boîte à moustaches" style="display:block; margin:1rem auto; max-width:100%; max-height:200px;">
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On a également relevé le temps de trajet des 30 élèves d'une classe de 4ème du même collège. Voici le diagramme en boîte correspondant :

<img src="/mabemat/figures/3e/chapitre-15/fig2.svg" alt="Comparaison 3e et 4e" style="display:block; margin:1rem auto; max-width:100%; max-height:260px;">

Répondre aux questions suivantes en justifiant à l'aide des diagrammes :
<ol>
<li>Tracer le diagramme en boîte de la classe de 3e.</li>
<li>Quelle classe a le trajet médian le plus long ? Interpréter.<br>
La 4ème a le trajet médian le plus long : $M_{4e} = 20$ min contre $M_{3e} = 15$ min. Au moins la moitié des élèves de 4ème mettent plus de 20 minutes pour venir au collège, contre 15 minutes pour les élèves de 3ème.</li>
<li>Comparer les étendues des deux séries. Qu'en déduire ?<br>
Étendue 3ème : $45 - 5 = 40$ min. Étendue 4ème : $40 - 5 = 35$ min. Les trajets de la 3ème sont légèrement plus dispersés dans l'ensemble.</li>
<li>Calculer l'écart interquartile de chaque classe. Les trajets sont-ils plus dispersés en 3ème ou en 4ème pour les 50&nbsp;% du milieu ?<br>
$EI_{3e} = Q_3 - Q_1 = 20 - 10 = 10$ min. $EI_{4e} = 25 - 15 = 10$ min. Les écarts interquartiles sont identiques : les 50&nbsp;% du milieu sont tout aussi dispersés dans les deux classes (10 minutes d'écart dans les deux cas).</li>
<li>Peut-on affirmer que les élèves de 4ème habitent plus loin du collège que les élèves de 3ème ? Justifier.<br>
Non, pas pour tous les élèves. Cependant, la médiane et les quartiles de la 4ème sont tous supérieurs à ceux de la 3ème ($M$, $Q_1$, $Q_3$ tous plus grands). On peut donc dire qu'en général les élèves de 4ème ont des trajets plus longs, mais pas dans tous les cas : le minimum est identique (5 min) dans les deux classes.</li>
</ol>
</div>
</div>

<h2 class="subsection-title">16.6 Données groupées en classes</h2>

Lorsqu'une série comporte de nombreuses valeurs différentes, on les regroupe en <strong>classes</strong> (intervalles).<br>
On ne travaille alors plus avec des valeurs exactes mais avec des intervalles du type $[a\,;\,b[$.

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On a relevé le temps passé sur les écrans (en heures par semaine) par 40 adolescents.

<table>
<tr>
<th>Temps d'écran (h/sem.)</th>
<th>$[0\,;\,5[$</th><th>$[5\,;\,10[$</th><th>$[10\,;\,15[$</th><th>$[15\,;\,20[$</th><th>$[20\,;\,25[$</th><th>Total</th>
</tr>
<tr>
<td>Effectif</td>
<td>3</td><td>10</td><td>14</td><td>9</td><td>4</td><td>40</td>
</tr>
<tr>
<td>Effectif cumulé croissant</td>
<td>3</td><td>13</td><td>27</td><td>36</td><td>40</td><td>40</td>
</tr>
</table>

Calculer et interpréter la moyenne, la médiane et les quartiles.
<ul>
<li><strong>Moyenne :</strong> Avec des données groupées en classes, on approche la moyenne en remplaçant chaque classe par son <strong>centre</strong> (milieu de l'intervalle).
$$\overline{x} = \dfrac{3\times 2{,}5 + 10\times 7{,}5 + 14\times 12{,}5 + 9\times 17{,}5 + 4\times 22{,}5}{40} = \dfrac{505}{40} \approx 12{,}6 \text{ h/sem.}$$
<strong>Interprétation :</strong> En moyenne, les adolescents passent environ 12h36 par semaine sur les écrans.</li>

<li><strong>Médiane :</strong> Comme il y a 40 valeurs, la médiane est entre la 20ème et la 21ème valeur de la série.<br>
D'après le tableau, la 20ème et la 21ème valeur se trouvent dans la classe $[10\,;\,15[$.<br>
Donc $\textcolor{#EB7F73}{M \in [10\,;\,15[}$.<br>
<strong>Interprétation :</strong> Au moins la moitié des adolescents passent moins de 15 heures par semaine sur les écrans.</li>

<li>Pour $Q_1$ : Comme $\dfrac{40}{4} = 10$, $Q_1$ est la 10ème valeur de la série.<br>
D'après le tableau, la 10ème valeur se trouve dans la classe $[5\,;\,10[$.<br>
Donc $\textcolor{#EB7F73}{Q_1 \in [5\,;\,10[}$.<br>
<strong>Interprétation :</strong> Au moins 25&nbsp;% des adolescents passent moins de 10 heures par semaine sur les écrans.</li>

<li>Pour $Q_3$ : Comme $\dfrac{3 \times 40}{4} = 30$, $Q_3$ est la 30ème valeur de la série.<br>
D'après le tableau, la 30ème valeur se trouve dans la classe $[15\,;\,20[$.<br>
Donc $\textcolor{#EB7F73}{Q_3 \in [15\,;\,20[}$.<br>
<strong>Interprétation :</strong> Au moins 75&nbsp;% des adolescents passent moins de 20 heures par semaine sur les écrans. Autrement dit, au plus 25&nbsp;% des adolescents passent plus de 20 heures sur les écrans par semaine.</li>
</ul>
</div>
</div>
