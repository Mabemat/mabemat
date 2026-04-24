---
title: "Leçon complète"
---

<h2 class="subsection-title">9.1 Exemples graphiques</h2>
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

<h2 class="subsection-title">9.2 Théorèmes fondamentaux</h2>

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

Démonstration. <br>
<ul>
<li>Dans le cas où $f$ est croissante sur $I$ : <br>
Par définition, pour tout réel $a$ de $I$ : $f'(a) =\underset{h\rightarrow 0}{\lim} \left(\dfrac{f(a+h)-f(a)}{h}\right)$.<br>
Si $h>0$ alors $a+h>a$ et, comme $f$ est croissante sur $I$, $f(a+h)\geq f(a)$. Du coup, $\dfrac{f(a+h)-f(a)}{h}\geq 0$.<br>
Si $h<0$ alors $a+h<a$ et, comme $f$ est croissante sur $I$, $f(a+h)\leq f(a)$. Du coup, $\dfrac{f(a+h)-f(a)}{h}\geq 0$.<br>
Ainsi, $f'(a)$ est la limite, quand $h$ tend vers $0$, de nombres tous positifs ou nuls ; on admet que leur limite $f'(a)$ est aussi positive ou nulle.</li>
<li>Dans le cas où la fonction est décroissante sur $I$, la démonstration est tout à fait similaire.</li>
<li>Dans le cas où $f$ est constante sur $I$ : Pour tout réel $a$ de $I$ et tout $h\neq 0 : f(a+h)=f(a)$ ;ainsi $f'(a)$
est la limite, quand $h$ tend vers $0$, de nombres tous nuls, ce qui implique que $f'(a) = 0$.</li>
</ul>


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

<h2 class="subsection-title">9.3 Extremum</h2>

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
