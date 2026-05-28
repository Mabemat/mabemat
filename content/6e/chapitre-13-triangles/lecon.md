---
title: "Leçon — Triangles"
weight: 1
---

<h2>I. Généralités sur les triangles</h2>

<div class="environment definition">
  <div class="environment-title">Définition</div>
  <div class="environment-content">
    Un <strong>triangle</strong> est un polygone à trois côtés qui possède donc trois angles.
  </div>
</div>

<div class="environment propriete">
  <div class="environment-title">Propriété — Inégalité triangulaire</div>
  <div class="environment-content">
    Dans un triangle $ABC$ non plat, on a les inégalités suivantes :
    <ol style="column-count:3; column-gap:1em;">
      <li>$AB &lt; AC + CB$</li>
      <li>$AC &lt; AB + BC$</li>
      <li>$BC &lt; BA + AC$</li>
    </ol>
  </div>
</div>

<div class="environment propriete">
  <div class="environment-title">Propriété</div>
  <div class="environment-content">
    Un triangle est constructible lorsque la longueur de son plus grand côté est strictement inférieure à la somme des longueurs des deux autres côtés.
  </div>
</div>

<div class="environment methode">
  <div class="environment-title">Méthode — Tracer un triangle connaissant les mesures des trois côtés</div>
  <div class="environment-content">
    <p>Tracer le triangle $MAT$ tel que $MA = 5$ cm, $MT = 4$ cm et $AT = 6$ cm.</p>
    <div style="text-align:center; margin: 1em 0;">
      <img src="/mabemat/figures/6e/chapitre-13/fig6.svg" alt="Triangle MAT — trois côtés" style="max-width:280px;">
    </div>
  </div>
</div>

<div class="environment methode">
  <div class="environment-title">Méthode — Tracer un triangle connaissant les mesures de deux côtés et d'un angle</div>
  <div class="environment-content">
    <p>Tracer le triangle $RST$ tel que $RT = 5$ cm, $ST = 3$ cm et $\widehat{RTS} = 60$°.</p>
    <div style="text-align:center; margin: 1em 0;">
      <img src="/mabemat/figures/6e/chapitre-13/fig7.svg" alt="Triangle RST — deux côtés et un angle" style="max-width:280px;">
    </div>
  </div>
</div>

<div class="environment methode">
  <div class="environment-title">Méthode — Tracer un triangle connaissant les mesures de deux angles et d'un côté</div>
  <div class="environment-content">
    <p>Tracer le triangle $EFG$ tel que $EF = 7$ cm, $\widehat{FEG} = 35$° et $\widehat{EFG} = 40$°.</p>
    <div style="text-align:center; margin: 1em 0;">
      <img src="/mabemat/figures/6e/chapitre-13/fig8.svg" alt="Triangle EFG — deux angles et un côté" style="max-width:320px;">
    </div>
  </div>
</div>

<div class="environment propriete">
  <div class="environment-title">Propriété</div>
  <div class="environment-content">
    Dans un triangle, la somme des angles est égale à $180$°.<br>
    Les trois angles d'un triangle sont donc supplémentaires.
  </div>
</div>

<div class="environment exemple">
  <div class="environment-title">Exemple</div>
  <div class="environment-content">
    <div style="display:flex; align-items:center; gap:2em; flex-wrap:wrap;">
      <div style="flex:1; min-width:200px;">
        <p>Calculer la mesure de $\widehat{ACB}$.</p>
        <p>On sait que $\widehat{ABC} + \widehat{BCA} + \widehat{CAB} = 180$°.</p>
        <p>Puisque $\widehat{BAC} + \widehat{ABC} = 78° + 60° = 138°$, alors $\widehat{ACB} = 180° - 138° = 42°$.</p>
      </div>
      <div style="text-align:center;">
        <img src="/mabemat/figures/6e/chapitre-13/fig1.svg" alt="Triangle ABC — somme des angles" style="max-width:200px;">
      </div>
    </div>
  </div>
</div>

<div style="display:flex; align-items:flex-start; gap:2em; flex-wrap:wrap; margin: 1.5em 0;">
  <div style="flex:2; min-width:260px;">
    <div class="environment definition">
      <div class="environment-title">Définition</div>
      <div class="environment-content">
        Le <strong>cercle circonscrit</strong> à un triangle est le cercle passant par les trois sommets du triangle.
      </div>
    </div>
    <div class="environment propriete">
      <div class="environment-title">Propriété</div>
      <div class="environment-content">
        Le centre du cercle circonscrit à un triangle est le point de concours des trois <strong>médiatrices</strong> de ce triangle.
      </div>
    </div>
  </div>
  <div style="text-align:center; flex:1; min-width:180px;">
    <img src="/mabemat/figures/6e/chapitre-13/fig2.svg" alt="Cercle circonscrit — médiatrices" style="max-width:220px;">
  </div>
</div>

<div class="remarque">
  Le centre du cercle circonscrit peut se trouver à l'extérieur du triangle.
</div>

<div class="environment exemple">
  <div class="environment-title">Exemple</div>
  <div class="environment-content">
    <p>Tracer le cercle circonscrit au triangle $RST$.</p>
    <div style="text-align:center; margin: 1em 0;">
      <img src="/mabemat/figures/6e/chapitre-13/fig9.svg" alt="Cercle circonscrit au triangle RST" style="max-width:240px;">
    </div>
  </div>
</div>

<h2>II. Triangles rectangles</h2>

<div class="environment definition">
  <div class="environment-title">Définition</div>
  <div class="environment-content">
    Un <strong>triangle rectangle</strong> est un triangle possédant un angle droit.<br>
    Le côté opposé à l'angle droit s'appelle l'<strong>hypoténuse</strong>.
  </div>
</div>

<div class="environment propriete">
  <div class="environment-title">Propriété</div>
  <div class="environment-content">
    Dans un triangle rectangle, l'hypoténuse est toujours le plus grand côté.
  </div>
</div>

<div class="environment exemple">
  <div class="environment-title">Exemple</div>
  <div class="environment-content">
    <div style="display:flex; align-items:center; gap:2em; flex-wrap:wrap;">
      <div style="flex:1; min-width:220px;">
        <p>$DEF$ est un triangle rectangle en $F$. L'angle $\widehat{DFE}$ est un angle droit, l'hypoténuse est le segment $[DE]$.</p>
        <p>On sait alors que $\widehat{FDE} + \widehat{DEF} = 90°$, c'est-à-dire $30° + \widehat{DEF} = 90°$.</p>
        <p>Par conséquent, $\widehat{DEF} = 90° - 30° = 60°$.</p>
      </div>
      <div style="text-align:center;">
        <img src="/mabemat/figures/6e/chapitre-13/fig3.svg" alt="Triangle rectangle DEF" style="max-width:200px;">
      </div>
    </div>
  </div>
</div>

<h2>III. Triangles isocèles et équilatéraux</h2>

<div class="environment definition">
  <div class="environment-title">Définition</div>
  <div class="environment-content">
    Un triangle <strong>isocèle</strong> est un triangle possédant deux côtés de même longueur.<br>
    Le sommet commun aux deux côtés de même longueur s'appelle le <strong>sommet principal</strong>.<br>
    Le côté opposé au sommet principal s'appelle la <strong>base</strong>.
  </div>
</div>

<div class="environment propriete">
  <div class="environment-title">Propriété</div>
  <div class="environment-content">
    Dans un triangle isocèle, les angles à la base ont la même mesure.
  </div>
</div>

<div class="environment exemple">
  <div class="environment-title">Exemple</div>
  <div class="environment-content">
    <div style="display:flex; align-items:center; gap:2em; flex-wrap:wrap;">
      <div style="flex:1; min-width:220px;">
        <p>$ABC$ est isocèle en $C$ (le sommet principal), sa base est le côté $[AB]$.</p>
        <p>Les angles $\widehat{CAB}$ et $\widehat{ABC}$ ont la même mesure.</p>
      </div>
      <div style="text-align:center;">
        <img src="/mabemat/figures/6e/chapitre-13/fig4.svg" alt="Triangle isocèle ABC en C" style="max-width:220px;">
      </div>
    </div>
  </div>
</div>

<div class="remarque">
  Il est possible que l'angle situé au niveau du sommet principal d'un triangle isocèle soit un angle droit. Dans ce cas, on dit que c'est un triangle <strong>isocèle rectangle</strong>.
</div>

<div style="display:flex; align-items:flex-start; gap:2em; flex-wrap:wrap; margin: 1.5em 0;">
  <div style="flex:2; min-width:260px;">
    <div class="environment definition">
      <div class="environment-title">Définition</div>
      <div class="environment-content">
        Un triangle <strong>équilatéral</strong> est un triangle possédant trois côtés de même longueur.
      </div>
    </div>
    <div class="environment propriete">
      <div class="environment-title">Propriété</div>
      <div class="environment-content">
        Dans tout triangle équilatéral, chaque angle mesure $60$°.
      </div>
    </div>
  </div>
  <div style="text-align:center; flex:1; min-width:180px;">
    <img src="/mabemat/figures/6e/chapitre-13/fig5.svg" alt="Triangle équilatéral ABC" style="max-width:200px;">
  </div>
</div>
