---
title: "Leçon complète"
---

<h2 class="subsection-title">13.1 Transformation de l'expression $\overrightarrow{MA}.\overrightarrow{MB}$</h2>

<div style="display:flex; align-items:center; gap:20px;">
<div class="environment theoreme" style="display:inline-block; vertical-align:top; width:calc(66% - 12px);">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
Soit deux points $A$ et $B$ et $I$ le milieu de $[AB]$.<br>
Alors pour tout point $M$ du plan, on a $\overrightarrow{MA}.\overrightarrow{MB}=MI^2-\dfrac{AB^2}{4}$.
</div>
</div><img src="/mabemat/figures/1re/chapitre-13/fig1.svg" alt="triangle AMB et milieu I" style="display:inline-block; vertical-align:top; width:calc(32% - 12px); max-height:200px; max-width:100%;">
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit $A$ et $B$ deux points tels que $AB=6$ et $I$ le milieu de $[AB]$.<br>
Déterminer l'ensemble des points $M$ du plan tels que $\overrightarrow{MA}.\overrightarrow{MB}=7$.<br>
D'après le théorème, $\overrightarrow{MA}.\overrightarrow{MB}=MI^2-\dfrac{6^2}{4}=MI^2-9$.<br>
Donc $\overrightarrow{MA}.\overrightarrow{MB}=7 \Leftrightarrow MI^2-9=7 \Leftrightarrow MI^2=16 \Leftrightarrow MI=4$ (car $MI\geq 0$).<br>
L'ensemble cherché est le cercle de centre $I$ et de rayon $4$.
</div>
</div>

<h2 class="subsection-title">13.2 Formule d'Al-Kashi</h2>

Ces formules permettent de calculer la longueur du côté d'un triangle lorsqu'on connaît l'angle opposé et les deux autres longueurs des côtés, ou de calculer les angles d'un triangle dont on connaît les longueurs des trois côtés.

<div style="display:flex; align-items:center; gap:20px;">
<div class="environment theoreme" style="display:inline-block; vertical-align:top; width:calc(55% - 12px);">
<div class="environment-title">Théorème :</div>
<div class="environment-content">
On pose $AB = c$, $BC = a$ et $CA = b$. Alors :
<ul>
<li>$a^2=b^2+c^2-2bc\cos(\widehat{A})$</li>
<li>$b^2=a^2+c^2-2ac\cos(\widehat{B})$</li>
<li>$c^2=a^2+b^2-2ab\cos(\widehat{C})$</li>
</ul>
</div>
</div><img src="/mabemat/figures/1re/chapitre-13/fig2.svg" alt="triangle ABC et notations d'Al-Kashi" style="display:inline-block; vertical-align:top; width:calc(43% - 12px); max-height:200px; max-width:100%;">
</div>

Démonstration. <br>
D'après la relation de Chasles, $\overrightarrow{BC}=\overrightarrow{BA}+\overrightarrow{AC}=\overrightarrow{AC}-\overrightarrow{AB}$ <br>
donc $ \overrightarrow{BC}^2=  \left(\overrightarrow{AC}-\overrightarrow{AB}\right)^2=\overrightarrow{AC}^2+\overrightarrow{AB}^2-2\overrightarrow{AC}.\overrightarrow{AB}$.<br>
Or, $\overrightarrow{AC}.\overrightarrow{AB}=AC\times AB\times \cos(\widehat{A})$. <br>
D'où, $a^2=b^2+c^2-2bc\cos(\widehat{A})$.

<div class="remarque">
En isolant le cosinus, la formule d'Al-Kashi permet aussi de calculer un angle à partir des trois longueurs :
$$\cos(\widehat{A})=\dfrac{b^2+c^2-a^2}{2bc}$$
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<ul>
<li>$AB=3, AC=4$ et $\widehat{A}=\dfrac{\pi}{6}$. Calculer $BC$.
<br>On a $BC^2=AC^2+AB^2-2AC.AB\cos(\widehat{A})=4^2+3^2-2\times4\times 3\cos\left(\dfrac{\pi}{6}\right)=25-24\times \dfrac{\sqrt{3}}{2}=25-12\sqrt{3}$ d'où $BC=\sqrt{25-12\sqrt{3}}\approx 2,1$.</li>
<li>$AB=5, AC=9$ et $BC=8$. Calculer les angles de $ABC$ (en degrés, arrondis à l'unité).<br>
On a $\cos(\widehat{A})=\dfrac{AB^2+AC^2-BC^2}{2AB.AC}=\dfrac{25+81-64}{90}=\dfrac{7}{15}$ d'où $\widehat{A}\approx 62^\circ$.<br>
De même, $\cos(\widehat{B})=\dfrac{AB^2+BC^2-AC^2}{2AB.BC}=\dfrac{25+64-81}{80}=\dfrac{1}{10}$ d'où $\widehat{B}\approx 84^\circ$.<br>
Enfin, la somme des angles d'un triangle valant $180^\circ$, on obtient $\widehat{C}\approx 34^\circ$.</li>
</ul>
</div>
</div>
