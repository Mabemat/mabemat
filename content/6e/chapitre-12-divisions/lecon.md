---
title: "Leçon complète"
---

<h2 class="subsection-title">I. Division euclidienne</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
On se donne deux nombres entiers $a$ et $b \neq 0$. On dit que $a$ est <strong>divisible</strong> par $b$ lorsqu'il existe un nombre entier $q$ tel que $a = b \times q$. On appelle le nombre $q$ le <strong>quotient</strong> de la division de $a$ par $b$. On dit alors que $a$ est un <strong>multiple</strong> de $b$ et que $b$ est un <strong>diviseur</strong> de $a$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
$56 = 7 \times 8$ donc $56$ est divisible par $7$ ; $56$ est un multiple de $7$ et $7$ est un diviseur de $56$.<br>
On peut aussi dire que $56$ est divisible par $8$ ; $56$ est un multiple de $8$ et $8$ est un diviseur de $56$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété - <strong>Critères de divisibilité</strong></div>
<div class="environment-content">
Un nombre entier est divisible par :
<ul>
<li>$2$ si, et seulement si, son chiffre des unités est $0$, $2$, $4$, $6$ ou $8$ ;</li>
<li>$3$ si, et seulement si, la somme des chiffres qui le composent est un multiple de $3$ ;</li>
<li>$4$ si, et seulement si, le nombre formé par ses deux derniers chiffres est un multiple de $4$ ;</li>
<li>$5$ si, et seulement si, son chiffre des unités est $0$ ou $5$ ;</li>
<li>$9$ si, et seulement si, la somme des chiffres qui le composent est un multiple de $9$ ;</li>
<li>$10$ si, et seulement si, son chiffre des unités est $0$.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
<ul>
<li>$432$ : le chiffre des unités de $432$ est $2$ donc $432$ est divisible par $2$, mais pas par $5$ ni par $10$. De plus, $32=4\times8$ donc $432$ est divisible par 4. <br>
Et $4+3+2=9$, donc $432$ est divisible par 3 et par 9.</li>
<li>$25$ : le chiffre des unités de $25$ est $5$ donc $25$ est divisible par $5$, mais pas par $2$ ni par $10$.</li>
<li>$80$ : le chiffre des unités de $80$ est $0$ donc $80$ est divisible par $2$, $5$ et $10$.</li>
</ul>
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Effectuer la <strong>division euclidienne</strong> d'un nombre entier (le <strong>dividende</strong>) par un nombre entier différent de $0$ (le <strong>diviseur</strong>), c'est déterminer les deux uniques nombres entiers, le <strong>quotient</strong> et le <strong>reste</strong>, tels que <strong>dividende = diviseur $\times$ quotient + reste</strong>, avec reste < diviseur.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(65% - 12px);">
Grâce à la division posée ci-contre, on peut écrire la division euclidienne $3875 = 13 \times 298 + 1$.<br>
La division euclidienne de $3875$ par $13$ a pour quotient $298$ et pour reste $1$ (on a bien $1 < 13$).
</div><img src="/mabemat/figures/6e/chapitre-12/fig2.png" alt="Division 3875 ÷ 13" style="display:inline-block;vertical-align:middle;max-height:200px;max-width:33%;height:auto;width:auto;margin-left:12px;">

</div>
</div>

<h2 class="subsection-title">II. Division décimale</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Effectuer la <strong>division décimale</strong> d'un nombre décimal (le <strong>dividende</strong>) par un nombre entier différent de $0$ (le <strong>diviseur</strong>), c'est effectuer l'algorithme qui détermine, jusqu'à l'arrêt, l'unique nombre (le <strong>quotient décimal</strong>) tel que : <strong>dividende = diviseur $\times$ quotient décimal</strong>.<br>
Lorsque l'algorithme ne s'arrête pas, la division décimale permet de déterminer une valeur approchée du quotient à n'importe quel rang.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(65% - 12px);">
<ul>
<li>$4,5 = 3 \times 1,5$ donc le quotient décimal de $4,5$ par $3$ est $1,5$.</li>
<li>Il peut être nécessaire de rajouter des $0$ dans la partie décimale de l'écriture du dividende afin de pouvoir terminer la division. Ci-contre, l'algorithme de la division euclidienne de $194$ par $8$ s'arrête.<br>
$194 = 8 \times 24,25$ donc la fraction $\dfrac{194}{8}$ est un nombre décimal : $\dfrac{194}{8} = 24,25$.</li>
</ul>
</div><img src="/mabemat/figures/6e/chapitre-12/fig3.png" alt="Division 3875 ÷ 13" style="display:inline-block;vertical-align:middle;max-height:200px;max-width:33%;height:auto;width:auto;margin-left:12px;">

<ul>
<li>Quand on obtient un reste qu'on avait déjà obtenu, cela signifie que les opérations vont toujours se répéter et que les restes vont se répéter. La division ne se terminera jamais : il est donc inutile de continuer.<br>
<div style="text-align:center;">
<img src="/mabemat/figures/6e/chapitre-12/fig1.svg" alt="figure 1" style="max-height:400px; max-width:100%;">
</div>
Cette division ne se termine jamais, le quotient de $166$ par $3$ a une infinité de chiffres après la virgule : ce n'est pas un nombre décimal. La fraction $\dfrac{166}{3}$ n'est pas un nombre décimal.<br>
On peut dire en revanche que $166 \div 3 \approx 55$. Le nombre $55$ est une valeur approchée à l'unité du quotient de $166$ par $3$.</li>
</ul>
</div>
</div>
