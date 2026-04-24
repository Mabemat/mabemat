---
title: "Leçon complète"
---

<h2 class="subsection-title">I. Vocabulaire et notations</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Un <strong>point</strong> est le plus petit élément du plan : il n'a ni longueur ni largeur. Il est représenté par une croix.<br>
En général, on nomme les points à l'aide de lettres majuscules : A, B, C, etc.
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(75% - 12px);">
Par deux points distincts, il passe une <strong>unique droite</strong>.
</div><img src="/mabemat/figures/6e/chapitre-02/fig1.svg" alt="Droite passant par A et B" style="display:inline-block; vertical-align:middle; width:calc(23% - 12px); max-height:70px; max-width:100%;">
</div>
</div>

<div class="environment notation">
<div class="environment-title">Notation :</div>
<div class="environment-content">
La droite qui passe par les points A et B est nommée en utilisant le nom de ces deux points entre parenthèses. On écrit : la droite (AB) ou la droite (BA).
</div>
</div>

<div class="remarque">
<ul>
<li>$(d)$ est un autre nom possible pour la droite (AB).</li>
<li>Une droite est composée d'une infinité de points.</li>
<li>On peut prolonger la droite (AB) aussi loin que l'on veut au-delà de A et de B.</li>
</ul>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Lorsque l'on place un point C sur une droite (AB), on définit deux <strong>demi-droites</strong> d'origine C.<br>
Les points A, B et C sont dits <strong>alignés</strong>.
</div>
</div>

<div class="environment notation">
<div class="environment-title">Notation :</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(75% - 12px);">
On note [CB) la demi-droite d'origine C passant par le point B.<br>
On note [CA) la demi-droite d'origine C passant par A.
</div><img src="/mabemat/figures/6e/chapitre-02/fig2.svg" alt="Demi-droites [CB) et [CA)" style="display:inline-block; vertical-align:middle; width:calc(23% - 12px); max-height:70px; max-width:100%;">
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
Lorsqu'un point A appartient à la droite $(d)$, on note $A \in (d)$.<br>
Dans le cas contraire, on dit que A n'appartient pas à la droite $(d)$ et on note $A \notin (d)$.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(69% - 12px);">
Sur la figure, il y a six points : A, B, C, D, E et F.
<ul>
<li>La droite (CD) a d'autres noms : (CB) ou encore (DB) par exemple.<br>
B est le <strong>point d'intersection</strong> de (CB) et de (FA). On dit aussi que ces droites sont <strong>sécantes</strong> en B.</li>
<li>Le point B appartient à la droite (CD). On note $B \in (CD)$.<br>
Autrement dit, les points B, C et D sont alignés.</li>
<li>Le point C n'appartient pas à la demi-droite [BD). On note $C \notin [BD)$.</li>
<li>Le point A n'appartient pas à la droite (FD). On note $A \notin (FD)$.<br>
Autrement dit, les points A, F et D ne sont pas alignés.</li>
<li>Le point E n'appartient à aucune des deux droites. On note $E \notin (CD)$ et $E \notin (FA)$.</li>
</ul>
</div><img src="/mabemat/figures/6e/chapitre-02/fig3.svg" alt="Six points A B C D E F" style="display:inline-block; vertical-align:middle; width:calc(29% - 12px); max-height:200px; max-width:100%;">
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(75% - 12px);">
Un <strong>segment</strong> est une partie de droite délimitée par deux points, appelés <strong>extrémités</strong> du segment.
</div><img src="/mabemat/figures/6e/chapitre-02/fig4.svg" alt="Segment [AB]" style="display:inline-block; vertical-align:middle; width:calc(23% - 12px); max-height:80px; max-width:100%;">
</div>
</div>

<div class="environment notation">
<div class="environment-title">Notation :</div>
<div class="environment-content">
Le segment de droite d'extrémités A et B est nommé en utilisant le nom de ces points entre crochets. On écrit : le segment [AB].<br>
Il ne faut donc pas confondre le segment [AB] avec la droite (AB) et la demi-droite [AB).
</div>
</div>

<div class="environment propriete">
<div class="environment-title">Propriété :</div>
<div class="environment-content">
Le segment [AB] est le plus court chemin pour aller du point A au point B.
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définitions — Rappels :</div>
<div class="environment-content">
<ul>
<li>Deux droites sont <strong>sécantes</strong> si elles possèdent un unique point commun appelé point d'intersection.</li>
<li>Deux droites sécantes sont <strong>perpendiculaires</strong> si elles forment un angle droit.</li>
<li>Deux droites sont <strong>parallèles</strong> si elles ne sont pas sécantes.</li>
</ul>
</div>
</div>

<h2 class="subsection-title">II. Longueur et distance</h2>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
La <strong>distance</strong> entre deux points A et B est la longueur du segment [AB].<br>
Cette longueur est notée AB.
</div>
</div>

<div class="environment definition">
<div class="environment-title">Définition :</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(75% - 12px);">
Le <strong>milieu</strong> d'un segment est le point qui appartient à ce segment et qui est à égale distance des extrémités de ce segment.
</div><img src="/mabemat/figures/6e/chapitre-02/fig5.svg" alt="Milieu J du segment [ST]" style="display:inline-block; vertical-align:middle; width:calc(23% - 12px); max-height:90px; max-width:100%;">
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Le point J est équidistant (à égale distance) de S et de T et il appartient au segment [ST] : J est donc le milieu de [ST].
</div>
</div>

<div class="remarque">
Une droite est illimitée : elle n'a ni longueur ni milieu.
</div>

<div class="environment propriete">
<div class="environment-title">Propriété — Inégalité triangulaire :</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:middle; width:calc(75% - 12px);">
Pour tous points A, B et C, 
<span style="color:#A5C03F;">AC + BC</span> ≥ <span style="color:#D36740;">AB</span>.<br>
De plus, <span style="color:#A5C03F;">AC + BC</span> = <span style="color:#D36740;">AB</span> si, et seulement si, C ∈ [AB].

</div><img src="/mabemat/figures/6e/chapitre-02/fig6.svg" alt="Inégalité triangulaire" style="display:inline-block; vertical-align:middle; width:calc(23% - 12px); max-height:90px; max-width:100%;">
</div>
</div>
