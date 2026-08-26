---
title: "Semaine 11 - Lectures graphiques et variations"
layout: "automatismes-2nde"
auto_number: 11
weight: 11
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Ci-dessous la courbe représentative d'une fonction $f$ définie sur $[-4\,;\,4]$.

<img src="/mabemat/images/automatismes/2nde/s11-q01.svg" alt="Courbe représentative de f sur [-4 ; 4]" style="display:block;margin:1rem auto;width:100%;max-width:420px;">

Lire graphiquement $f(-3)$ et $f(2)$.
---CORR---
Pour lire une image, on part de la valeur sur l'axe des abscisses, on monte (ou on descend) jusqu'à la courbe, puis on lit la hauteur sur l'axe des ordonnées.

Pour $x=-3$, la courbe passe par le point $(-3\,;\,0)$ :

$$f(-3)={\color{#4A5D7A}0}$$

Pour $x=2$, la courbe passe par le point $(2\,;\,2)$ :

$$f(2)={\color{#4A5D7A}2}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Avec la courbe de la question précédente, résoudre graphiquement l'équation $f(x)=2$.
---CORR---
Résoudre $f(x)=2$, c'est chercher tous les points de la courbe situés à la hauteur $2$. On trace donc mentalement la droite horizontale d'équation $y=2$ et on repère ses points d'intersection avec la courbe.

Cette droite coupe la courbe en trois points, d'abscisses $-4$, $2$ et $4$.

$$S={\color{#4A5D7A}\lbrace -4\,;\,2\,;\,4\rbrace}$$

On donne bien les **abscisses** des points d'intersection : ce sont elles, les solutions.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Toujours avec la même courbe :

**a.** Donner le maximum de $f$ sur $[-4\,;\,4]$ et la valeur en laquelle il est atteint.

**b.** Donner l'intervalle sur lequel $f$ est croissante.
---CORR---
**a.** Le maximum est la plus grande hauteur atteinte par la courbe. Le point le plus haut est le sommet de coordonnées $(3\,;\,4)$.

Le maximum de $f$ vaut ${\color{#4A5D7A}4}$, atteint pour $x={\color{#4A5D7A}3}$.

Attention à ne pas confondre les deux : le maximum est la valeur de $f$, pas l'abscisse.

**b.** La courbe descend jusqu'au point le plus bas, d'abscisse $-2$, puis monte jusqu'au sommet d'abscisse $3$.

$$f\ \text{est croissante sur}\ {\color{#4A5D7A}\left[-2\,;\,3\right]}$$

Elle est décroissante sur $[-4\,;\,-2]$ et sur $[3\,;\,4]$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Le prix d'un article passe de $250$ € à $200$ €.

Déterminer le taux d'évolution de ce prix, en pourcentage.
---CORR---
Le taux d'évolution se calcule en comparant la variation à la valeur de départ :

$$t=\dfrac{\text{valeur d'arrivée}-\text{valeur de départ}}{\text{valeur de départ}}$$

$$t=\dfrac{200-250}{250}=\dfrac{-50}{250}=-0{,}2$$

$$t={\color{#4A5D7A}-20\,\%}$$

Le prix a donc baissé de $20\,\%$. Le dénominateur est bien le prix de départ, $250$, et non le prix d'arrivée.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Le prix d'un sac a baissé de $19\,\%$. Il coûte maintenant $298$ euros.

Le prix initial, en euros, est donné par le calcul :

<div class="qcm-choix">
<span><strong>A.</strong> $298\times 0{,}81$</span>
<span><strong>B.</strong> $\dfrac{298}{1{,}19}$</span>
<span><strong>C.</strong> $298\times 1{,}19$</span>
<span><strong>D.</strong> $\dfrac{298}{0{,}81}$</span>
</div>
---CORR---
Une baisse de $19\,\%$ correspond au coefficient multiplicateur $1-0{,}19=0{,}81$.

En notant $P$ le prix initial, on a donc :

$$P\times 0{,}81=298$$

Pour retrouver $P$, on **divise** par le coefficient multiplicateur :

$$P={\color{#4A5D7A}\dfrac{298}{0{,}81}}$$

Les réponses A et C appliquent une évolution au lieu de la défaire, et la réponse B utilise le coefficient d'une hausse de $19\,\%$, qui n'est pas le coefficient réciproque d'une baisse de $19\,\%$.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
On considère la fonction $f$ définie par $f(x)=(3x-1)(2x+5)$.

L'image de $-2$ par la fonction $f$ est égale à :

<div class="qcm-choix">
<span><strong>A.</strong> $-1$</span>
<span><strong>B.</strong> $7$</span>
<span><strong>C.</strong> $-7$</span>
<span><strong>D.</strong> $-14$</span>
</div>
---CORR---
Inutile de développer : on remplace directement $x$ par $-2$ dans chaque parenthèse.

$$f(-2)=\bigl(3\times(-2)-1\bigr)\bigl(2\times(-2)+5\bigr)$$

On calcule chaque parenthèse séparément :

$$\begin{aligned}3\times(-2)-1 &= -7 \\ \text{et}\quad 2\times(-2)+5 &= 1\end{aligned}$$

Puis on multiplie les deux résultats :

$$f(-2)=-7\times 1={\color{#4A5D7A}-7}$$

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Ci-dessous la courbe représentative d'une fonction $f$ définie sur $[-4\,;\,4]$.

<img src="/mabemat/images/automatismes/2nde/s11d-q01.svg" alt="Courbe représentative de f sur [-4 ; 4]" style="display:block;margin:1rem auto;width:100%;max-width:420px;">

Lire graphiquement $f(-1)$ et $f(3)$.
---CORR---
Pour lire une image, on part de la valeur sur l'axe des abscisses, on monte (ou on descend) jusqu'à la courbe, puis on lit la hauteur sur l'axe des ordonnées.

Pour $x=-1$, la courbe passe par le point $(-1\,;\,2)$ :

$$f(-1)={\color{#4A5D7A}2}$$

Pour $x=3$, la courbe passe par le point $(3\,;\,4)$ :

$$f(3)={\color{#4A5D7A}4}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Avec la courbe de la question précédente, résoudre graphiquement l'équation $f(x)=4$.
---CORR---
Résoudre $f(x)=4$, c'est chercher tous les points de la courbe situés à la hauteur $4$. On trace donc mentalement la droite horizontale d'équation $y=4$ et on repère ses points d'intersection avec la courbe.

Cette droite coupe la courbe en trois points, d'abscisses $-4$, $1$ et $3$.

$$S={\color{#4A5D7A}\lbrace -4\,;\,1\,;\,3\rbrace}$$

On donne bien les **abscisses** des points d'intersection : ce sont elles, les solutions.
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Toujours avec la même courbe :

**a.** Donner le maximum de $f$ sur $[-4\,;\,4]$ et la valeur en laquelle il est atteint.

**b.** Donner l'intervalle sur lequel $f$ est croissante.
---CORR---
**a.** Le maximum est la plus grande hauteur atteinte par la courbe. Le point le plus haut est le sommet de coordonnées $(2\,;\,6)$.

Le maximum de $f$ vaut ${\color{#4A5D7A}6}$, atteint pour $x={\color{#4A5D7A}2}$.

Attention à ne pas confondre les deux : le maximum est la valeur de $f$, pas l'abscisse.

**b.** La courbe descend jusqu'au point le plus bas, d'abscisse $-2$, puis monte jusqu'au sommet d'abscisse $2$.

$$f\ \text{est croissante sur}\ {\color{#4A5D7A}\left[-2\,;\,2\right]}$$

Elle est décroissante sur $[-4\,;\,-2]$ et sur $[2\,;\,4]$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Le prix d'un article passe de $150$ € à $186$ €.

Déterminer le taux d'évolution de ce prix, en pourcentage.
---CORR---
Le taux d'évolution se calcule en comparant la variation à la valeur de départ :

$$t=\dfrac{\text{valeur d'arrivée}-\text{valeur de départ}}{\text{valeur de départ}}$$

$$t=\dfrac{186-150}{150}=\dfrac{36}{150}=0{,}24$$

$$t={\color{#4A5D7A}+24\,\%}$$

Le prix a donc augmenté de $24\,\%$. Le dénominateur est bien le prix de départ, $150$, et non le prix d'arrivée.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Le prix d'un manteau a baissé de $23\,\%$. Il coûte maintenant $154$ euros.

Le prix initial, en euros, est donné par le calcul :

<div class="qcm-choix">
<span><strong>A.</strong> $\dfrac{154}{0{,}77}$</span>
<span><strong>B.</strong> $\dfrac{154}{1{,}23}$</span>
<span><strong>C.</strong> $154\times 0{,}77$</span>
<span><strong>D.</strong> $154\times 1{,}23$</span>
</div>
---CORR---
Une baisse de $23\,\%$ correspond au coefficient multiplicateur $1-0{,}23=0{,}77$.

En notant $P$ le prix initial, on a donc :

$$P\times 0{,}77=154$$

Pour retrouver $P$, on **divise** par le coefficient multiplicateur :

$$P={\color{#4A5D7A}\dfrac{154}{0{,}77}}$$

Les réponses C et D appliquent une évolution au lieu de la défaire, et la réponse B utilise le coefficient d'une hausse de $23\,\%$, qui n'est pas le coefficient réciproque d'une baisse de $23\,\%$.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
On considère la fonction $f$ définie par $f(x)=(2x+3)(4x-1)$.

L'image de $-3$ par la fonction $f$ est égale à :

<div class="qcm-choix">
<span><strong>A.</strong> $-39$</span>
<span><strong>B.</strong> $39$</span>
<span><strong>C.</strong> $9$</span>
<span><strong>D.</strong> $-9$</span>
</div>
---CORR---
Inutile de développer : on remplace directement $x$ par $-3$ dans chaque parenthèse.

$$f(-3)=\bigl(2\times(-3)+3\bigr)\bigl(4\times(-3)-1\bigr)$$

On calcule chaque parenthèse séparément :

$$\begin{aligned}2\times(-3)+3 &= -3 \\ \text{et}\quad 4\times(-3)-1 &= -13\end{aligned}$$

Puis on multiplie les deux résultats. Le produit de deux nombres négatifs est positif :

$$f(-3)=-3\times(-13)={\color{#4A5D7A}39}$$

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
