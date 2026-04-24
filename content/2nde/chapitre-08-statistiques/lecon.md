---
title: "Leçon complète"
---

<h2 class="subsection-title">8.1 Caractéristiques d'une série statistique</h2>

<h3 class="subsubsection-title">8.1.1 Série statistique</h3>

Voici les séries de notes obtenues par 3 élèves :
<ul>
<li>Jérôme : $\quad 4 \quad; \quad 6 \quad; \quad 18 \quad; \quad 7 \quad; \quad 17 \quad ; \quad 12 \quad ; \quad 12 \quad ;\quad  18$</li>
<li>Bertrand : $\quad 13 \quad ; \quad 13\quad ; \quad 12 \quad ; \quad 10 \quad ; \quad 12 \quad ; \quad 3\quad ; \quad 14 \quad ; \quad 12 \quad ; \quad 14 \quad ; \quad 15$</li>
<li>Julie: $\quad 15 \quad ; \quad 9 \quad ; \quad 14 \quad ; \quad 13 \quad ; \quad 10 \quad ; \quad 12 \quad ; \quad 12 \quad ; \quad 11 \quad ; \quad 10$</li>
</ul>

<h3 class="subsubsection-title">8.1.2 Moyenne</h3>

Calculer la moyenne pour chaque série de notes de Jérôme, de Bertrand et de Julie.<br>

$$\text{M}_{(\text{Jérôme})} =\dfrac{4+6+18+7+17+12+12+18}{8}\approx 11,8$$<br>

$$\text{M}_{(\text{Bertrand})} =\dfrac{13+13+12+10+12+3+14+12+14+15}{10}=11,8 $$<br>

$$\text{M}_{(\text{Julie})} =\dfrac{15+9+14+13+10+12+12+11+10}{9}\approx 11,8$$<br>

Une autre manière de calculer la moyenne est d'utiliser la moyenne pondérée :

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La <strong>moyenne</strong> d'une série statistique dont les valeurs sont $x_1, x_2 , ..., x_k$ et les effectifs correspondants $n_1$, $n_2$, ..., $n_k$ est notée $\overline{x}$ et est égale à : $$ \overline{x} = \dfrac{n_1x_1 + n_2x_2 + \cdots +n_kx_k}{n_1+n_2+\cdots +n_k}$$<br>
La <strong>moyenne</strong> est une caractéristique de position.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode :</div>
<div class="environment-content">
Il faut d'abord ranger les valeurs dans l'ordre croissant. <br>
Dans notre exemple, on a :
$$\text{M}_{(\text{Jérôme})} =\dfrac{4+6+7+2\times 12+17+2\times 18}{8}\approx 11,8$$
$$\text{M}_{(\text{Bertrand})} =\dfrac{3 + 10 +3\times 12 + 2 \times 13+2\times 14+15}{10}=11,8 $$
$$\text{M}_{(\text{Julie})} =\dfrac{9 + 2\times 10 +11+2\times 12+13 +14+15}{9}\approx 11,8$$
</div>
</div>

<h3 class="subsubsection-title">8.1.3 Médiane</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La <strong>médiane</strong> $Me$ est une valeur telle que la moitié au moins de l'effectif ait des valeurs inférieures ou égales à $Me$, l'autre moitié des valeurs supérieures ou égales à $Me$.<br>
La <strong>médiane</strong> est une caractéristique de position.
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode :</div>
<div class="environment-content">
Pour déterminer les notes médianes, il faut ordonner les séries. <br>
La médiane partage l'effectif en deux. <br>
Calculer la médiane pour chaque série de notes de Jérôme, de Bertrand et de Julie. <br>

<strong>Jérôme :</strong><br>

$$\overbrace{4 \quad 6 \quad 7 \quad {\color{#D36740}12}}^{4 \text{ données}} \quad \overbrace{{\color{#D36740}12} \quad 17 \quad 18 \quad 18}^{4 \text{ données}}$$

$\text{Donc } Me_{(\text{Jérôme})}=\color{#D36740}{12}$ <br><br>

<strong>Bertrand :</strong><br>

$$\overbrace{3 \quad 10 \quad 12 \quad 12 \quad {\color{#D36740}12}}^{5 \text{ données}} \quad \overbrace{{\color{#A8C68A}13} \quad 13 \quad 14 \quad 14 \quad 15}^{5 \text{ données}}$$

$\text{Donc } Me_{(\text{Bertrand})}=\dfrac{\color{#D36740}{12}+\color{#A8C68A}{13}}{2}=12,5$<br><br>

<strong>Julie :</strong><br>

$$\overbrace{9 \quad 10 \quad 10 \quad 11}^{4 \text{ données}} \quad {\color{#E6B459}\mathbf{12}} \quad \overbrace{12 \quad 13 \quad 14 \quad 15}^{4 \text{ données}}$$

$\text{Donc } Me_{(\text{Julie})}=\color{#E6B459}{\mathbf{12}}$
</div>
</div>

<h3 class="subsubsection-title">8.1.4 Étendue</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
L'<strong>étendue</strong> d'une série statistique est la différence entre la plus grande valeur et la plus petite valeur de la série. <br>
L'<strong>étendue</strong> est une caractéristique de dispersion.
</div>
</div>

Calculer l'étendue pour chaque série de notes de Jérôme, de Bertrand et de Julie.

<div style="display:flex; justify-content:space-around; flex-wrap:wrap;">
<span>$\text{E}_{(\text{Jérôme})} =18-4=14$</span>
<span>$\text{E}_{(\text{Bertrand})} =15-3=12$</span>
<span>$\text{E}_{(\text{Julie})} =15-9=6$</span>
</div>

La note minimale de Bertrand est $3$ pourtant, cela ne représente pas vraiment la série de notes de Bertrand.

<div class="remarque">
Conclusion : l'étendue est un paramètre de dispersion absolue qui est simple à calculer mais très fragile puisqu'il ne dépend que de deux valeurs de la distribution. Ce paramètre n'a guère de signification lorsqu'une distribution comporte des valeurs exceptionnelles.
</div>

<h3 class="subsubsection-title">8.1.5 Quartiles, écart interquartile</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Le <strong>premier quartile</strong> $(Q_1)$ est la plus petite valeur de la série telle qu'au moins $25 \%$ des autres valeurs de la série sont inférieures ou égales à cette valeur.<br>
Le <strong>troisième quartile</strong> $(Q_3)$ est la plus petite valeur de la série telle qu'au moins $75 \%$ des autres valeurs de la série sont inférieures ou égales à cette valeur.<br>
Les <strong>quartiles</strong> sont des caractéristiques de position.
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
L'<strong>écart interquartile</strong> d'une série statistique de premier quartile $Q_1$ et de troisième quartile $Q_3$ est égal à la différence $Q_3 - Q_1$. <br>
L'<strong>écart interquartile</strong> est une caractéristique de dispersion.
</div>
</div>

<div class="remarque">
L'écart interquartile d'une série mesure la dispersion autour de la médiane. Il contient au moins $50\%$ des valeurs de la série.
L'écart interquartile n'est pas influencé par les valeurs extrêmes de la série.
</div>

<div class="environment methode">
<div class="environment-title">Méthode :</div>
<div class="environment-content">
Calculer les quartiles pour chaque série de notes de Jérôme de Bertrand et de Julie.<br>
Pour déterminer les quartiles, il faut ordonner les séries.<br>
Le premier quartile est la donnée de la série se trouvant au quart de l'effectif.<br>
Le troisième quartile est la donnée de la série se trouvant au trois-quarts de l'effectif.<br>

<strong>Jérôme :</strong>
$ 4 \quad \color{#D36740}{6} \quad 7 \quad 12 \quad 12 \quad \color{#A8C68A}{17} \quad 18 \quad 18 $<br>
$ \dfrac{1}{4}\times 8=2 $ le premier quartile est la <span style="color:#D36740;">2e donnée</span> de la série.<br>
$ \dfrac{3}{4}\times 8=6 $ le troisième quartile est la <span style="color:#A8C68A;">6e donnée</span> de la série.<br>
$ Q_{1(\text{Jérôme})} = 6 $ et $ Q_{3(\text{Jérôme})} = 17 $<br>
L'écart interquartile est égal à $ E_{Q(\text{Jérôme})}= Q_{3(\text{Jérôme})}-Q_{1(\text{Jérôme})}=17-6=11$
<br><br>

<strong>Bertrand :</strong>
$ 3 \quad 10 \quad \color{#D36740}{12} \quad 12 \quad 12 \quad 13 \quad 13 \quad \color{#A8C68A}{14} \quad 14 \quad 15 $<br>
$ \dfrac{1}{4}\times 10=2,5 $ le premier quartile est la <span style="color:#D36740;">3e donnée</span> de la série.<br>
$ \dfrac{3}{4}\times 10=7,5 $ le troisième quartile est la <span style="color:#A8C68A;">8e donnée</span> de la série.<br>
$ Q_{1(\text{Bertrand})} = 12 $ et $ Q_{3(\text{Bertrand})} = 14 $<br>
L'écart interquartile est égal à $ E_{Q(\text{Bertrand})}= Q_{3(\text{Bertrand})}-Q_{1(\text{Bertrand})}=14-12=2$<br><br>

<strong>Julie :</strong>
$ 9 \quad 10 \quad \color{#D36740}{10} \quad 11 \quad 12 \quad 12 \quad \color{#A8C68A}{13} \quad 14 \quad 15 $<br>
$ \dfrac{1}{4}\times 9=2,25 $ le premier quartile est la <span style="color:#D36740;">3e donnée</span> de la série.<br>
$ \dfrac{3}{4}\times 9=6,75 $ le troisième quartile est la <span style="color:#A8C68A;">7e donnée</span> de la série.<br>
$ Q_{1(\text{Julie})} = 10 $ et $ Q_{3(\text{Julie})} = 13 $<br>
L'écart interquartile est égal à $ E_{Q(\text{Julie})}= Q_{3(\text{Julie})}-Q_{1(\text{Julie})}=13-10=3$
</div>
</div>

<h3 class="subsubsection-title">8.1.6 Interprétations</h3>

<table>
<tr>
<td>${\color{#4A5D7A}{\text{M}_{(\text{Jérôme})}\approx 11,8}}$</td>
<td>${\color{#A8C68A}{\text{Me}_{(\text{Jérôme})}= 12}}$</td>
<td>${\color{#D36740}{\text{E}_{(\text{Jérôme})}=14}}$</td>
<td>${\text{Q}_1}_{(\text{Jérôme})}=6$</td>
<td>${\text{Q}_3}_{(\text{Jérôme})}=17$</td>
<td>${\color{#E6B459}{{\text{E}_Q}_{(\text{Jérôme})}=11}}$</td>
</tr>
<tr>
<td>${\color{#4A5D7A}{\text{M}_{(\text{Bertrand})} =11,8}} $</td>
<td>$\text{Me}_{(\text{Bertrand})} =12,5 $</td>
<td>${\color{#D36740}{\text{E}_{(\text{Bertrand})} =12}} $</td>
<td>${\color{#8A9CC1}{{\text{Q}_1}_{(\text{Bertrand})} =12}} $</td>
<td>${\text{Q}_3}_{(\text{Bertrand})} =14 $</td>
<td>${\text{E}_Q}_{(\text{Bertrand})} =2 $</td>
</tr>
<tr>
<td>${\color{#4A5D7A}{\text{M}_{(\text{Julie})} \approx 11,8}}$</td>
<td>$\text{Me}_{(\text{Julie})} = 12$</td>
<td>${\color{#D36740}{\text{E}_{(\text{Julie})} = 6}}$</td>
<td>${\text{Q}_1}_{(\text{Julie})} = 10$</td>
<td>${\color{#8A9CC1}{{\text{Q}_3}_{(\text{Julie})} = 13}}$</td>
<td>${\text{E}_Q}_{(\text{Julie})} = 3$</td>
</tr>
</table>

<br>
<span style="color:#4A5D7A;">Les moyennes sont environ égales</span> et pourtant <span style="color:#D36740;">les notes ne se répartissent pas de la même manière autour de cette caractéristique de position. Les étendues sont très différentes</span>.<br>
<span style="color:#A8C68A;">Jérôme a une médiane égale à $12$ donc il a obtenu autant de notes au-dessus de $12$ que de notes en-dessous de $12$.</span><br>
<span style="color:#8A9CC1;">Le premier quartile de Bertrand est égal à $12$ donc au moins un quart des notes de Bertrand sont inférieures à $12$.</span><br>
<span style="color:#8A9CC1;">Le troisième quartile de Julie est égal à $13$ donc au moins trois quarts des notes de Julie sont inférieures à $13$.</span><br>
<span style="color:#E6B459;">L'écart interquartile de Jérôme est égal à $11$ donc il a au moins $50\%$ des notes comprises entre $6$ et $17$ (les quartiles).</span>

<div style="text-align:center;">
<img src="/mabemat/figures/2nde/chapitre-08/fig1.svg" alt="figure 1" style="max-height:300px; max-width:100%;">
</div>

<h2 class="subsection-title">8.2 Cas de pondération d'une série statistique</h2>

<h3 class="subsubsection-title">8.2.1 Série statistique</h3>

Tailles des élèves de 2nde2 en cm : <br>
<span class="pointille" style="display:block; width:100%; border-bottom:1px dotted #000; margin:0.6em 0;">&nbsp;</span>
<span class="pointille" style="display:block; width:100%; border-bottom:1px dotted #000; margin:0.6em 0;">&nbsp;</span>

<h3 class="subsubsection-title">8.2.2 Regroupement par classe</h3>

Regrouper cette série de tailles par classes de longueur 10 cm et calculer les fréquences
arrondies au centième :
<table>
<tr>
<th>Tailles</th>
<th>$\phantom{1205}$</th>
<th>$\phantom{1205}$</th>
<th>$\phantom{1205}$</th>
<th>$\phantom{1205}$</th>
<th>$\phantom{1205}$</th>
<th>$\phantom{1205}$</th>
</tr>
<tr>
<td>Effectifs</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Effectifs cumulés croissants</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Fréquences (en $\%$)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Fréquences cumulées croissantes (en $\%$)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

<h3 class="subsubsection-title">8.2.3 Moyenne pondérée</h3>

<table>
<tr>
<th>Classe centrées $x_i$</th>
<th>$\phantom{1205}$</th>
<th>$\phantom{1205}$</th>
<th>$\phantom{1205}$</th>
<th>$\phantom{1205}$</th>
<th>$\phantom{1205}$</th>
<th>$\phantom{1205}$</th>
</tr>
<tr>
<td>Effectifs $n_i$</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

Il s'agit d'un calcul de moyenne pondéré car des effectifs différents $n_i$ sont associés à chaque valeur $x_i$.<br>

$$\overline{x}=\dfrac{\phantom{1205}\phantom{1205}\phantom{1205}\phantom{1205}\phantom{1205}\phantom{1205}\phantom{1205}\phantom{1205}\phantom{1205}\phantom{1205}\phantom{1205}}{}=\dfrac{\phantom{1205}}{}=\phantom{1205}$$

<h3 class="subsubsection-title">8.2.4 Linéarité de la moyenne</h3>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Si une série de valeurs $x_i$ a pour moyenne $\overline{x}$ alors la série de valeurs $ax_i+b$, avec $a$ et $b$ réels, a pour moyenne $a\overline{x}+b$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(46% - 12px);">
<table>
<tr style="border:none;">
<td colspan="4" style=" background:none;"></td>
<td style="border:none; background:none; text-align:center;"><strong>Moyennes</strong></td>
</tr>
<tr>
<th>$x_i$</th>
<th>$4$</th>
<th>$7$</th>
<th>$-2$</th>
<th>$\dfrac{4 + 7 - 2}{3} = 3$</th>
</tr>
<tr>
<td>$2x_i - 5$</td>
<td>$3$</td>
<td>$9$</td>
<td>$-9$</td>
<td>$\dfrac{3 + 9 - 9}{3} = 1$</td>
</tr>
</table>
</div><div style="display:inline-block; vertical-align:middle; width:calc(52% - 12px);">
On a $\overline{x}= 3$, et donc en appliquant la propriété, la moyenne de la série $2x_i - 5$ est égale à : <br>
$2\overline{x}-5= 2 \times 3 - 5 = 1$. <br>
On retrouve bien le résultat calculé dans le tableau.
</div>
</div>
</div>

<h3 class="subsubsection-title">8.2.5 Variance, écart-type</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
<ol>
<li>La variance $V$ d'une série statistique de moyenne $\overline{x}$ dont les valeurs du caractère sont $x_1$, $x_2$, $x_3$, ..., $x_k$ et les effectifs correspondants sont $n_1$, $n_2$, $n_3$, ..., $n_k$ est $$V=\dfrac{n_1\times (x_1-\overline{x})^2+n_2\times (x_2-\overline{x})^2+\cdots+n_k\times (x_k-\overline{x})^2}{n_1+n_2+\cdots+n_k}$$</li>
<li>L'écart-type $\sigma$ d'une série statistique de variance $V$ est égal à : $\sigma =\sqrt{V}$.</li>
</ol>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Ainsi en reprenant l'exemple des tailles de la 2nde2, la variance est égale à : <br>

$V=$ <br>

Donc $\sigma\approx$<br>
L'écart-type possède la même unité que les valeurs de la série. <br>
Ainsi pour la série étudiée, l'écart-type est environ égal à $\dots$ cm.
</div>
</div>

<div class="remarque">
L'écart-type exprime la dispersion des valeurs d'une série statistique autour de sa moyenne. <br>
Les valeurs extrêmes influencent l'écart-type.
</div>
