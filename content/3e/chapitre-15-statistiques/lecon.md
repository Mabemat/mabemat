---
title: "Leçon complète"
---

<h2 class="subsection-title">15.1 Série statistique</h2>

Voici les séries de notes obtenues par 3 élèves :
<ul>
<li>Jérôme : $\quad 4 \quad; \quad 6 \quad; \quad 18 \quad; \quad 7 \quad; \quad 17 \quad ; \quad 12 \quad ; \quad 12 \quad ;\quad  18$</li>
<li>Bertrand : $\quad 13 \quad ; \quad 13\quad ; \quad 12 \quad ; \quad 10 \quad ; \quad 12 \quad ; \quad 3\quad ; \quad 14 \quad ; \quad 12 \quad ; \quad 14 \quad ; \quad 15$</li>
<li>Julie: $\quad 15 \quad ; \quad 9 \quad ; \quad 14 \quad ; \quad 13 \quad ; \quad 10 \quad ; \quad 12 \quad ; \quad 12 \quad ; \quad 11 \quad ; \quad 10$</li>
</ul>

<h2 class="subsection-title">15.2 Moyenne</h2>

Calculer la moyenne pour chaque série de notes de Jérôme, de Bertrand et de Julie.

<div>
$$\text{M}_{(\text{Jérôme})} =\dfrac{4+6+18+7+17+12+12+18}{8}\approx 11,8$$ 
$$\text{M}_{(\text{Bertrand})} =\dfrac{13+13+12+10+12+3+14+12+14+15}{10}=11,8 $$
$$\text{M}_{(\text{Julie})} =\dfrac{15+9+14+13+10+12+12+11+10}{9}\approx 11,8$$
</div>   <!-- ← MANQUAIT -->


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

<h2 class="subsection-title">15.3 Médiane</h2>

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
Pour déterminer les notes médianes, il faut ordonner les séries. La médiane partage l'effectif en deux. <br>
Calculer la médiane pour chaque série de notes de Jérôme, de Bertrand et de Julie. <br>
<strong>Jérôme :</strong> 
$\underbrace{4 ~ ~ 6 ~~ 7 ~~ \textcolor{#E6B459}{12}}_{4 \text{ données}} ~~~~  \underbrace{\textcolor{#E6B459}{12} ~~ 17 ~~ 18 ~~ 18}_{4 \text{ données}}$<br>
Donc $Me_{(\text{Jérôme})}=\textcolor{#E6B459}{12}$<br>
<strong>Bertrand :</strong> 
$\underbrace{3 ~ ~ 10 ~~ 12 ~~ 12 ~~\textcolor{orange}{12}}_{5 \text{ données}} ~~~~  \underbrace{\textcolor{#A5C03F}{13} ~~ 13 ~~ 14 ~~ 14 ~~15}_{5 \text{ données}}$<br>
Donc $Me_{(\text{Bertrand})}=\dfrac{\textcolor{orange}{12}+\textcolor{#A5C03F}{13}}{2}=12,5$<br>
<strong>Julie :</strong> 
$\underbrace{9 ~ ~ 10 ~~ 10 ~~ 11}_{4 \text{ données}} ~~\textcolor{pink}{\textbf{12}}~~  \underbrace{12 ~~ 13 ~~ 14 ~~15}_{4 \text{ données}}$<br>
Donc $Me_{(\text{Julie})}=\textcolor{pink}{\textbf{12}}$
</div>
</div>

<h2 class="subsection-title">15.4 Étendue</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
L'<strong>étendue</strong> d'une série statistique est la différence entre la plus grande valeur et la plus petite valeur de la série. <br>
L'<strong>étendue</strong> est une caractéristique de dispersion.
</div>
</div>

Calculer l'étendue pour chaque série de notes de Jérôme, de Bertrand et de Julie.

<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:2rem;">

<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\text{E}_{(\text{Jérôme})} =18-4=14$</li>
</ul>

<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\text{E}_{(\text{Bertrand})} =15-3=12$</li>
</ul>

<ul style="list-style:disc inside; margin:0; padding:0;">
<li>$\text{E}_{(\text{Julie})} =15-9=6$</li>
</ul>

</div>


La note minimale de Bertrand est $3$ pourtant, cela ne représente pas vraiment la série de notes de Bertrand. 

<div class="remarque">
Conclusion : l'étendue est un paramètre de dispersion absolue qui est simple à calculer mais très fragile puisqu'il ne dépend que de deux valeurs de la distribution. Ce paramètre n'a guère de signification lorsqu'une distribution comporte des valeurs exceptionnelles.
</div>

<h2 class="subsection-title">15.5 Interprétations</h2>

<table>
<tr>
<th>${\color{#E6B459}{\text{M}_{(\text{Jérôme})}\approx 11,8}}$</th>
<th>${\color{#EB7F73}{\text{Me}_{(\text{Jérôme})}= 12}}$</th>
<th>${\color{#cf90a2}{\text{E}_{(\text{Jérôme})}=14}}$</th>
</tr>
<tr>
<td>${\color{#E6B459}{\text{M}_{(\text{Bertrand})} =11,8}} $</td>
<td>$\text{Me}_{(\text{Bertrand})} =12,5 $</td>
<td>${\color{#cf90a2}{\text{E}_{(\text{Bertrand})} =12}} $</td>
</tr>
<tr>
<td>${\color{#E6B459}{\text{M}_{(\text{Julie})} \approx 11,8}}$</td>
<td>$\text{Me}_{(\text{Julie})} = 12$</td>
<td>${\color{#cf90a2}{\text{E}_{(\text{Julie})} = 6}}$</td>
</tr>
</table>

<span style="color:#E6B459;">Les moyennes sont environ égales</span>
et pourtant
<span style="color:#cf90a2;">
les notes ne se répartissent pas de la même manière autour de cette caractéristique de position. Les étendues sont très différentes
</span>.
<br>
<span style="color:#EB7F73;">
Jérôme a une médiane égale à $12$ donc il a obtenu autant de notes au-dessus de 12 que de notes en-dessous de 12.
</span>
