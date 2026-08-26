---
title: "Leçon complète"
---

<h2 class="subsection-title">9.1 Fonctions paires et fonctions impaires</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Soit $f$ une fonction définie sur un ensemble $D$ <strong>symétrique par rapport à $0$</strong> (c'est-à-dire que si $x\in D$ alors $-x\in D$).
<ul>
<li>$f$ est <strong>paire</strong> si pour tout $x\in D$, $f(-x)=f(x)$.</li>
<li>$f$ est <strong>impaire</strong> si pour tout $x\in D$, $f(-x)=-f(x)$.</li>
</ul>
</div>
</div>

<div class="remarque">
Une fonction peut n'être ni paire ni impaire : c'est même le cas le plus fréquent. Par exemple $f(x)=x^2+x$ n'est ni l'un ni l'autre.
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Dans un repère orthogonal, on note $\mathcal{C}_f$ la courbe représentative de $f$.
<ul>
<li>$f$ est paire si et seulement si $\mathcal{C}_f$ est <strong>symétrique par rapport à l'axe des ordonnées</strong>.</li>
<li>$f$ est impaire si et seulement si $\mathcal{C}_f$ est <strong>symétrique par rapport à l'origine</strong> $O$ du repère.</li>
</ul>
</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode :</div>
<div class="environment-content">
Pour étudier la parité d'une fonction $f$ :
<ol>
<li>Vérifier d'abord que l'ensemble de définition est symétrique par rapport à $0$ (sinon, $f$ n'est ni paire ni impaire) ;</li>
<li>Calculer $f(-x)$ et le simplifier ;</li>
<li>Comparer le résultat à $f(x)$ et à $-f(x)$.</li>
</ol>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemples</div>
<div class="environment-content">
Étudier la parité des fonctions suivantes.
<ol>
<li>Soit $f$ définie sur $\R$ par $f(x)=3x^4-x^2+5$. <br>
L'ensemble $\R$ est symétrique par rapport à $0$.<br>
$f(-x)=3(-x)^4-(-x)^2+5=3x^4-x^2+5=f(x)$. <br>
Donc $f$ est <strong>paire</strong> : sa courbe est symétrique par rapport à l'axe des ordonnées.</li>
<li>Soit $g$ définie sur $\R^*$ par $g(x)=x^3+\dfrac{1}{x}$. <br>
L'ensemble $\R^*$ est symétrique par rapport à $0$.<br>
$g(-x)=(-x)^3+\dfrac{1}{-x}=-x^3-\dfrac{1}{x}=-\left(x^3+\dfrac{1}{x}\right)=-g(x)$. <br>
Donc $g$ est <strong>impaire</strong> : sa courbe est symétrique par rapport à l'origine.</li>
<li>Soit $h$ définie sur $[0\,;\,+\infty[$ par $h(x)=\sqrt{x}$.<br>
L'ensemble de définition n'est pas symétrique par rapport à $0$ ($1$ y appartient mais pas $-1$) : $h$ n'est ni paire ni impaire.</li>
</ol>
</div>
</div>

<div class="remarque">
L'intérêt est pratique : si $f$ est paire ou impaire, il suffit d'étudier ses variations sur la partie positive de son ensemble de définition, puis de compléter la courbe par symétrie.
</div>

<h2 class="subsection-title">9.2 Exemples graphiques</h2>
<div style="display:flex; gap:20px;">

<div style="flex:1; text-align:center;">
<img src="/mabemat/figures/1re/chapitre-09/fonction_croissante.png" alt="fonction_croissante" style="max-height:200px; max-width:100%;"><br>
Toutes les tangentes ont un coefficient directeur positif ; autrement dit, tous les nombres dérivés sont positifs ; la courbe ne peut que « monter ».
</div>

<div style="flex:1; text-align:center;">
<img src="/mabemat/figures/1re/chapitre-09/fonction_decroissante.png" alt="fonction_decroissante" style="max-height:200px; max-width:100%;"><br>
Toutes les tangentes ont un coefficient directeur négatif ; autrement dit, tous les nombres dérivés sont négatifs ; la courbe ne peut que « descendre ».
</div>

</div>

<h2 class="subsection-title">9.3 Théorèmes fondamentaux</h2>

<div class="environment theoreme">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
Soit $f$ une fonction dérivable sur un intervalle $I$.
<ul>
<li>Si $f$ est <strong>croissante</strong> sur $I$, alors $f'$ est <strong>positive</strong> sur $I$.</li>
<li>Si $f$ est <strong>décroissante</strong> sur $I$, alors $f'$ est <strong>négative</strong> sur $I$.</li>
<li>Si $f$ est <strong>constante</strong> sur $I$, alors $f'$ est <strong>nulle</strong> en toute valeur de $I$.</li>
</ul>
</div>
</div>

<div class="environment theoreme">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
Soit $f$ une fonction dérivable sur un intervalle $I$.
<ul>
<li>Si $f'$ est <strong>positive</strong> sur $I$ alors $f$ est <strong>croissante</strong> sur $I$</li>
<li>Si $f'$ est <strong>négative</strong> sur $I$ alors $f$ est <strong>décroissante</strong> sur $I$</li>
<li>Si $f'$ est <strong>nulle</strong> sur $I$, alors $f$ est <strong>constante</strong> sur $I$.</li>
</ul>
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">

<ol>
<li>Soit sur $\R$, la fonction $f(x) = x^2$. Retrouver ses variations.
<br> On a $f'(x) = 2x$. On retrouve grâce au signe de la dérivée, le sens de variation de la fonction carrée.<br>

<div style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-09/1.png" alt="figure 1" style="max-height:150px; max-width:100%;">
</div>


</li>
<li>Déterminer le sens de variation de la fonction $f$ définie sur $]{-\infty};{1}[\cup]{1};{+\infty}[$ par $f(x)=\dfrac{-3x+2}{x-1}$.<br>On étudie le signe de $f'(x)=\dfrac{-3(x-1)-(-3x+2)\times 1}{(x-1)^2}=\dfrac{1}{(x-1)^2}$.<br>
On constate que, sur chacun des deux intervalles, $f'(x)> 0$.
La fonction $f$ est donc strictement croissante sur chacun des intervalles où elle est définie.</li>
</ol>
</div>
</div>

<h2 class="subsection-title">9.4 Extremum</h2>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $f$ une fonction dérivable sur un intervalle $I$.<br>
Si $f$ admet un extremum local en un point d'abscisse $a$ différent des extrémités de $I$, alors $f'(a)= 0$.
</div>
</div>

Graphiquement, cela signifie que, lorsque la courbe d'une fonction dérivable admet un maximum ou un minimum en dehors des bornes de son ensemble de définition, alors, en ce point, la tangente à la courbe est forcément horizontale.

<div class="remarque">
<strong>La réciproque est fausse</strong> : si $f'(a) = 0$ on ne peut pas déduire que $f$ admet un extremum local en $a$. <br>
(Exemple : fonction cube en $0$).
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Déterminer le tableau de variations de la fonction $f$ définie sur $[-2;2]$ par $f(x) = x^3 +2x^2+x-5$ et en déduire les extremums de $f$ sur cet intervalle.

On a $f'(x)=3x^2+4x+1$. C'est un polynôme du second degré.

Cherchons ses racines. $\Delta=b^2-4ac=16-4\times 3 \times 1=4$.

Ainsi, $x_1=\dfrac{-b-\sqrt{\Delta}}{2a}=\dfrac{-4-2}{6}=-1$ et $x_2=\dfrac{-b+\sqrt{\Delta}}{2a}=\dfrac{-4+2}{6}=\dfrac{-2}{6}=-\dfrac{1}{3}$.
<div style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-09/2.png" alt="figure 2" style="max-height:150px; max-width:100%;">
</div>
Ainsi, $f\left(-\dfrac{1}{3}\right)=-\dfrac{130}{27}$ est le minimum de la fonction $f$ sur $[-2;2]$ et ce minimum est atteint en $x = -\dfrac{1}{3}$.

Le maximum de $f$ sur $[-2;2]$ est atteint en $x=2$, et il vaut $f(2) = 13$.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Soit $f$ une fonction dérivable sur un intervalle $[a;b]$.<br>
Si la dérivée $f'$ <strong>s'annule en changeant de signe</strong>, la fonction $f$ admet un extremum sur $[a;b]$
</div>
</div>

<div style="text-align:center;">
<img src="/mabemat/figures/1re/chapitre-09/3.png" alt="figure 3" style="display:inline-block; vertical-align:top; width:calc(40% - 12px); max-height:200px; max-width:100%;"><img src="/mabemat/figures/1re/chapitre-09/4.png" alt="figure 4" style="display:inline-block; vertical-align:top; width:calc(40% - 12px); max-height:200px; max-width:100%;">
</div>
<div style="text-align:center;">
Dans les deux cas, la dérivée s'annule en $x_0$ en changeant de signe.
</div>
