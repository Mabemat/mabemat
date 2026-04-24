---
title: "Leçon complète"
---

<h2 class="subsection-title">3.1 Vocabulaire sur les fonctions</h2>

<h3 class="subsubsection-title">3.1.1 Définition</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Une fonction est un procédé qui permet, à partir d'un nombre de départ, d'obtenir un unique nombre d'arrivée.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Voici un programme de calcul : 
<ul>
<li>Choisir un nombre</li>
<li>Multiplier par 6</li>
<li>Ajouter 11</li>
<li>Multiplier par 7</li>
</ul>Si on note $x$ le nombre de départ, quel est le résultat du programme de calcul ? <br>
$$x\xrightarrow{\times  6} 6x\xrightarrow{+11}6x+11 \xrightarrow{\times  7}(6x+11)\times 7=42x+77$$<br>
Le résultat du programme est donc $42x+77$. <br>

On dit que $f(x)=42x+77$ est une fonction.
</div>
</div>

<h3 class="subsubsection-title">3.1.2 Image et antécédent</h3>

<div class="environment vocabulaire">
<div class="environment-title">Vocabulaire</div>
<div class="environment-content">
Soit $f$ une fonction telle que $f(4) = 8$.
<ul>
<li>8 est l'image de 4 par la fonction $f$.</li>
<li>4 est un antécédent de 8 par la fonction $f$.</li>
</ul>
</div>
</div>

<h2 class="subsection-title">3.2 Calculer l'image et les antécédents</h2>

<h3 class="subsubsection-title">3.2.1 Calcul de l'image</h3>

<div class="environment methode">
<div class="environment-title">Méthode - Calculer l'image d'un nombre par une fonction revient à remplacer $x$ par ce nombre.</div>
<div class="environment-content">
Calculer l'image de 3 par la fonction $f$ où $f(x) = 5x - 2$. On remplace $x$ par 3.

<div class="math-display">
$$
\begin{align*}
f(3) &= 5 \times 3 - 2 \\
f(3) &= 15 - 2 \\
f(3) &= 13
\end{align*}
$$
</div>

L'image de 3 par la fonction $f$ est 13.
</div>
</div>

<div class="remarque">
On obtient toujours un seul nombre à l'arrivée : l'image d'un nombre par une fonction est donc <strong>unique</strong> !
</div>

<h3 class="subsubsection-title">3.2.2 Calcul des antécédents</h3>

<div class="environment methode">
<div class="environment-title">Méthode - Calculer le ou les antécédent(s) d'un nombre par une fonction revient à résoudre une équation.</div>
<div class="environment-content">
Calculer le ou les antécédent(s) de 8 par la fonction $f$ définie par $f(x) = 5x - 2$. <br>
On résout l'équation $f(x) = 8$.

<div class="math-display">
$$
\begin{align*}
f(x) &= 8 \\
5x - 2 &= 8 \\
5x &= 10 \\
x &= 2
\end{align*}
$$
</div>

L'antécédent de 8 par la fonction $f$ est 2.
</div>
</div>

<div class="remarque">
Un nombre peut posséder plusieurs antécédents par une fonction.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
On considère la fonction $g$ définie par $g(x) = x^2 - 4$.
<ul>
<li>$g(3) = 3^2 - 4 = 5$ ; 3 est un antécédent de 5 par $g$.</li>
<li>$g(-3) = (-3)^2 - 4 = 9 - 4 = 5$ ; -3 est un antécédent de 5 par $g$.</li>
</ul>
Donc 5 a deux antécédents par $g$ !
</div>
</div>

<h2 class="subsection-title">3.3 Tableau de valeurs</h2>

Un tableau de valeurs d'une fonction est un tableau à deux lignes qui contient :
<ul>
<li>des valeurs de $x$ sur la 1ère ligne ;</li>
<li>les valeurs de $f(x)$ sur la 2ème ligne (les images de la 1ère ligne).</li>
</ul>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Compléter le tableau de valeurs de la fonction $f$ définie par $f(x) = 5x - 2$.

<table>
<tr>
<th>
$ x $</th>
<th>$ -2 $</th>
<th>$ 2 $</th>
<th>$ 3 $</th>
</tr>
<tr>
<td>$ f(x) $</td>
<td>$ -12 $</td>
<td>$ 8 $</td>
<td>$ 13 $</td>
</tr>
</table>

<ul>
<li>On cherche la valeur de la 2ème ligne, donc l'image de -2 par $f$ : $f(-2) = 5 \times (-2) - 2 = -12$.</li>
<li>On cherche la valeur de la 1ère ligne, donc un antécédent de 8 par la fonction $f$ : il s'agit de 2 (déjà calculé).</li>
<li>On cherche la valeur de la 2ème ligne, donc l'image de 3 par la fonction $f$ : $f(3) = 13$ (déjà calculé).</li>
</ul>
</div>
</div>

<h2 class="subsection-title">3.4 Représentation graphique d'une fonction</h2>

<h3 class="subsubsection-title">3.4.1 Courbe représentative</h3>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Dans un repère, la courbe représentative d'une fonction $f$ (notée $C_f$) est l'ensemble des points de coordonnées $(x; f(x))$ où $x$ est un nombre.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Ci-dessous, on a tracé la courbe représentative de la fonction $f$.

<ol>
<li>Sachant que $f(0)=-1$, donnez les coordonnées d'un point de la courbe $C_f$ ?</li>
<li>Est ce que $f(-2)=1$ ?</li>
<li>Est ce que $f(3)=-1$ ?</li>
</ol>

<img src="/mabemat/figures/3e/chapitre-03/fig1.svg" alt="figure 1" style="height:400px; max-width:100%; display:block; margin:auto;">

<ol>
<li>Comme $f(0)=-1$, on a $(0;-1) \in C_F$.</li>
<li>Pour savoir si $f(-2)=1$, il suffit de regarder sur le graphique sir le point qui a pour coordonnées $(-2;1)$ appartient à la courbe de $f$. <br>
Ici, $(-2;1)\in C_f$ donc $f(-2)=1$.</li>
<li>Pour savoir si $f(3)=-1$, il suffit de regarder sur le graphique sir le point qui a pour coordonnées $(3;-1)$ appartient à la courbe de $f$. <br>
Ici, $(3;-1)\notin C_f$ donc $f(3)\neq -1$.</li>
</ol>
</div>
</div>

<h3 class="subsubsection-title">3.4.2 Lectures graphiques</h3>

<div class="environment methode">
<div class="environment-title">Méthode - Lire graphiquement une image.</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:top; width:calc(49% - 12px);">
<br><br><br><strong>Image de $-2$ par la fonction $f$</strong>
<ul>
<li>Partir de $-2$ sur l'axe des abscisses</li>
<li>Se déplacer verticalement jusqu'à $C_f$</li>
<li>Lire l'ordonnée du point rencontré</li>
</ul>
<strong>L'image de $-2$ par $f$ est $1$</strong>
</div><img src="/mabemat/figures/3e/chapitre-03/fig2.svg" alt="figure 2" style="display:inline-block; vertical-align:top; width:calc(49% - 12px); maw-height:300px; max-width:100%;">

</div>
</div>

<div class="environment methode">
<div class="environment-title">Méthode - Lire graphiquement des antécédents.</div>
<div class="environment-content"> 
<div style="display:inline-block; vertical-align:top; width:calc(49% - 12px);">
<br><br><br><strong>Antécédents de $-1$ par la fonction $f$.</strong>
<ul>
<li>Tracer une droite passant par le $-1$ de l'axe des ordonnées</li>
<li>Marquer les points d'intersection de cette droite avec $C_f$</li>
<li>Lire les abscisses des points d'intersection</li>
</ul>
<strong>Les antécédents de $-1$ par $f$ sont $0$ et $4$</strong>
</div><img src="/mabemat/figures/3e/chapitre-03/fig3.svg" alt="figure 3" style="display:inline-block; vertical-align:top; width:calc(49% - 12px); height:300px; max-width:100%;">
<br>

</div>
</div>

<h3 class="subsubsection-title">3.4.3 Construire la courbe représentative d'une fonction</h3>

<div class="environment methode">
<div class="environment-title">Méthode :</div>
<div class="environment-content">
Construire la courbe représentative de la fonction $g$ définie par $g(x) = x^2 - 2x$.<br>

<div style="display:inline-block; vertical-align:top; width:calc(60% - 12px);">
<br><br><br><ol>
<li>On construit un tableau de valeurs de la fonction.
<table>
<tr>
<th>$x$</th>
<th>-1</th>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
</tr>
<tr>
<td>$g(x)$</td>
<td>3</td>
<td>0</td>
<td>-1</td>
<td>0</td>
<td>3</td>
</tr>
</table>
</li>
<li>On place les points dans un repère : $(-1; 3)$, $(0; 0)$, $(1; -1)$, $(2; 0)$, $(3; 3)$.</li>
<li>On relie les points à la main (et on prolonge si nécessaire).</li>
</ol>
</div><img src="/mabemat/figures/3e/chapitre-03/fig4.svg" alt="figure 4" style="display:inline-block; vertical-align:top; width:calc(39% - 12px); max-height:400px; max-width:100%;">

</div>
</div>
