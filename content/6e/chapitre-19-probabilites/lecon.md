---
title: "Leçon — Probabilités"
weight: 1
---

<h2>I. Vocabulaire</h2>

<div class="environment definition">
  <div class="environment-title">Définitions</div>
  <div class="environment-content">
    <ul>
      <li>Une expérience est <strong>aléatoire</strong> lorsqu'on ne peut pas en prévoir le résultat.</li>
      <li>Une <strong>issue</strong> est un résultat possible d'une expérience aléatoire.</li>
      <li>Un <strong>événement</strong> d'une expérience aléatoire est un ensemble d'issues.</li>
    </ul>
  </div>
</div>

<div class="environment exemple">
  <div class="environment-title">Exemple</div>
  <div class="environment-content">
    <p>Sur un jeu de 13 cartes indiscernables au toucher, on écrit sur chaque carte une lettre du mot « mathématiques » : M A T H E M A T I Q U E S. <br>
    On retourne toutes les cartes et on demande à une personne d'en piocher une au hasard.</p>
    <ul>
      <li>Cette expérience est <strong>aléatoire</strong> car on ne sait pas quelle lettre sera piochée (puisque les cartes sont retournées).</li>
      <li>Les <strong>issues</strong> de l'expérience sont : M, A, T, H, E, I, Q, U, S.</li>
      <li>Un <strong>événement</strong> possible est : « Tirer une voyelle ». Il y a plusieurs issues qui réalisent cet événement : A, E, I, U.</li>
    </ul>
  </div>
</div>

<h2>II. Probabilité d'un événement</h2>

<div class="environment definition">
  <div class="environment-title">Définition</div>
  <div class="environment-content">
    Dans une expérience aléatoire, la <strong>probabilité</strong> d'un événement donne une mesure de la « chance » que cet événement se produise. <br>
    La probabilité d'un événement est un nombre compris entre $0$ et $1$.
  </div>
</div>

<div style="text-align:center; margin:1.2em 0;">
  <img src="/mabemat/figures/6e/chapitre-19/fig1.svg" alt="Échelle des probabilités de 0 à 1" style="max-height:140px; max-width:100%;">
</div>

<div class="environment propriete">
  <div class="environment-title">Propriété</div>
  <div class="environment-content">
    Dans une situation d'<strong>équiprobabilité</strong>, la probabilité d'un événement est la proportion du nombre d'issues favorables par rapport au nombre total d'issues possibles :
    $$P(\text{événement}) = \dfrac{\text{Nombre d'issues favorables}}{\text{Nombre total d'issues possibles}}$$
  </div>
</div>

<div class="environment exemple">
  <div class="environment-title">Exemple</div>
  <div class="environment-content">
    On lance un dé équilibré à 6 faces.<br>
    Quelle est la probabilité d'obtenir un nombre supérieur ou égal à 5 ?<br>
    Cet événement possède 2 issues favorables sur 6 issues (« 5 » et « 6 »).<br>
    On a donc 2 chances sur 6, c'est-à-dire une probabilité égale à $\dfrac{2}{6} = \dfrac{1}{3}$.
  </div>
</div>
