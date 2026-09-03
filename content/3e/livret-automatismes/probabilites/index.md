---
title: "Probabilités"
layout: "livret"
level: "3e"
weight: 16
domaine: "Données et probabilités"
niveau_origine: "6e · 5e · 4e"
nb_exercices: 7
has_livretCorr: false
coming_soon: false
coopmaths: "https://coopmaths.fr/alea/?uuid=2b600&id=6P2A&n=1&d=10&s=3&cd=1&uuid=4703c&id=4S20-1&uuid=69e1f&id=6P2B-1&n=1&d=10&cd=1&uuid=850b0&id=5S21-1&n=1&d=10&cd=1&uuid=24db8&id=4S20-4&uuid=7ba64&id=4S20&n=1&d=10&cd=1&uuid=76231&id=3S22&v=eleve&es=1111001&title=Probabilit%C3%A9s"
---

{{< livret-exo num="1" >}}
---INTRO---
Placer la lettre correspondant à chaque évènement sur l'axe des probabilités ci-dessous.<br>A : Obtenir une carte rouge dans un jeu traditionnel de 52 cartes.<br>B : Obtenir 54 avec un dé à 100 faces.<br>C : Aux USA, trouver des pierres qui roulent et qui amassent de la mousse.<br>D : Que le prochain président de la République Française ait plus de 40 ans.<br> <img src="probabilites-01.svg" alt="figure 1" class="livret-fig">
---Q---

---CORR---
**A** : sur $52$ cartes, $26$ sont rouges, donc $P(A) = \dfrac{26}{52} = {\color{#EB7F73}\boldsymbol{0{,}5}}$. On place **A** au milieu de l'axe.<br><br>**B** : un dé à $100$ faces ne porte pas le nombre $54$... si, il le porte : $P(B) = \dfrac{1}{100} = {\color{#EB7F73}\boldsymbol{0{,}01}}$, **B** se place tout près de $0$.<br><br>**C** : « pierre qui roule n'amasse pas mousse », l'événement est impossible, $P(C) = {\color{#EB7F73}\boldsymbol{0}}$, **C** se place sur $0$.<br><br>**D** : la Constitution impose $18$ ans au minimum, mais aucun président n'a jamais eu moins de $40$ ans ; l'événement est très probable sans être certain, **D** se place près de $1$.
{{< /livret-exo >}}

{{< livret-exo num="2" >}}
---INTRO---
Compléter avec les mots : issues, impossible, équiprobabilité, aléatoire, certain.
---Q---
Les résultats possibles d'une expérience aléatoire s'appellent les ...
---CORR---
Les résultats possibles d'une expérience aléatoire s'appellent les ${\color{#EB7F73}\boldsymbol{issues}}$.
---Q---
Une expérience liée au hasard est une expérience …
---CORR---
Une expérience liée au hasard est une expérience ${\color{#EB7F73}\boldsymbol{aléatoire}}$.
---Q---
Un événement qui ne se réalise jamais est un événement ...
---CORR---
Un événement qui ne se réalise jamais est un événement ${\color{#EB7F73}\boldsymbol{impossible}}$.
---Q---
Lorsque toutes les issues ont la même probabilité de se produire, on dit qu'il y a …
---CORR---
Lorsque toutes les issues ont la même probabilité, on dit qu'il y a ${\color{#EB7F73}\boldsymbol{équiprobabilité}}$.
---Q---
Un événement qui se réalise quelle que soit l'issue est un événement …
---CORR---
Un événement qui se réalise quelle que soit l'issue est un événement ${\color{#EB7F73}\boldsymbol{certain}}$.
{{< /livret-exo >}}

{{< livret-exo num="3" >}}
---INTRO---
Dans un paquet de bonbons, il y a 13 nounours. 4 sont rouges, 2 sont verts, 2 sont bleus, 3 sont noirs et 2 sont jaunes.<br> Karole choisit au hasard l'un d'entre eux.<br> <strong>a.</strong> Quelle est la probabilité que son choix tombe sur l'un des nounours bleus ? <br><strong>b.</strong> Quelle est la probabilité que son choix tombe sur l'un des nounours rouges ?<br><strong>c.</strong> Quelle est la probabilité que son choix ne tombe pas sur l'un des nounours jaunes ?<br><strong>d.</strong> Quelle est la probabilité que son choix tombe sur l'un des nounours bleus ou rouges ?
---Q---

---CORR---
Il y a $13$ nounours en tout.<br><br>**a.** $2$ sont bleus : $\dfrac{2}{13} = {\color{#EB7F73}\boldsymbol{\dfrac{2}{13}}}$<br><br>**b.** $4$ sont rouges : $\dfrac{4}{13} = {\color{#EB7F73}\boldsymbol{\dfrac{4}{13}}}$<br><br>**c.** $2$ sont jaunes, donc $13 - 2 = 11$ ne le sont pas : $\dfrac{11}{13} = {\color{#EB7F73}\boldsymbol{\dfrac{11}{13}}}$<br><br>**d.** $2 + 4 = 6$ sont bleus ou rouges : $\dfrac{6}{13} = {\color{#EB7F73}\boldsymbol{\dfrac{6}{13}}}$
{{< /livret-exo >}}

{{< livret-exo num="4" >}}
---INTRO---
Lors d'un match de rugby, l'équipe qui reçoit un adversaire a une probabilité de $ 0{,}23$ de gagner son match et $0{,}16$ de faire un match nul.<br><strong>a.</strong> Quelle est la probabilité, pour cette équipe, de ne pas perdre le match ?<br><strong>b.</strong> Quelle est la probabilité, pour cette équipe, de perdre le match ?
---Q---

---CORR---
**a.** Ne pas perdre, c'est gagner ou faire match nul :<br>$0{,}23 + 0{,}16 = {\color{#EB7F73}\boldsymbol{0{,}39}}$<br><br>**b.** Perdre est l'événement contraire :<br>$1 - 0{,}39 = {\color{#EB7F73}\boldsymbol{0{,}61}}$
{{< /livret-exo >}}

{{< livret-exo num="5" >}}
---INTRO---
On tire une carte dans un jeu de 32 cartes.<br>Calculer la probabilité d'obtenir chacun des événements suivants.
---Q---
Tirer une carte autre qu'un Valet de couleur Noire.
---CORR---
Dans un jeu de $32$ cartes il y a $2$ Valets noirs (trèfle et pique), donc $32 - 2 = 30$ autres cartes.<br>$\dfrac{30}{32} = \dfrac{15}{16} = {\color{#EB7F73}\boldsymbol{\dfrac{15}{16}}}$
---Q---
Tirer un Roi de couleur Rouge.
---CORR---
Il y a $2$ Rois rouges (cœur et carreau).<br>$\dfrac{2}{32} = \dfrac{1}{16} = {\color{#EB7F73}\boldsymbol{\dfrac{1}{16}}}$
---Q---
Tirer une carte qui ne soit pas une figure.
---CORR---
Les figures sont les Valets, Dames et Rois, soit $3 \times 4 = 12$ cartes. Il reste $32 - 12 = 20$ cartes.<br>$\dfrac{20}{32} = \dfrac{5}{8} = {\color{#EB7F73}\boldsymbol{\dfrac{5}{8}}}$
---Q---
Tirer une autre carte qu'un Sept.
---CORR---
Il y a $4$ Sept, donc $32 - 4 = 28$ autres cartes.<br>$\dfrac{28}{32} = \dfrac{7}{8} = {\color{#EB7F73}\boldsymbol{\dfrac{7}{8}}}$
---Q---
Tirer un Trèfle.
---CORR---
Il y a $8$ trèfles.<br>$\dfrac{8}{32} = \dfrac{1}{4} = {\color{#EB7F73}\boldsymbol{\dfrac{1}{4}}}$
{{< /livret-exo >}}

{{< livret-exo num="6" >}}
---INTRO---
Dans une urne, il y a 18 boules. 3 sont rouges, 3 sont vertes, 4 sont bleues, 5 sont noires et 3 sont blanches.<br> Wendy choisit au hasard l'une d'entre elles. Elle regarde la couleur.<br><strong>a.</strong> Est-ce que c'est une expérience aléatoire ? Pourquoi ?<br><strong>b.</strong> Quelles sont les issues ?<br><strong>c.</strong> Quelles issues réalisent l'événement «  Tomber sur l'une des boules noires ou blanches  » ?<br><strong>d.</strong> Quel est l'événement contraire de «  Tomber sur l'une des boules noires ou blanches  » ?
---Q---

---CORR---
**a.** Oui, c'est une ${\color{#EB7F73}\boldsymbol{expérience aléatoire}}$ : on ne peut pas prévoir la couleur de la boule tirée.<br><br>**b.** Les issues sont les cinq couleurs possibles : ${\color{#EB7F73}\boldsymbol{rouge, verte, bleue, noire, blanche}}$.<br><br>**c.** Les issues favorables sont ${\color{#EB7F73}\boldsymbol{« noire » et « blanche »}}$, soit $5 + 3 = 8$ boules sur $18$.<br><br>**d.** L'événement contraire est ${\color{#EB7F73}\boldsymbol{« Tomber sur une boule qui n'est ni noire ni blanche »}}$.
{{< /livret-exo >}}

{{< livret-exo num="7" >}}
---INTRO---
On choisit au hasard une fleur dans un bouquet de roses et de tulipes.
---Q---
Compléter le tableau des effectifs suivants :<br><table class="livret-tab"><tbody><tr><td>$~$</td><td>Tulipes</td><td>Roses</td><td>Total</td></tr><tr><td>Rouges</td><td>9</td><td>7</td><td></td></tr><tr><td>Jaunes</td><td></td><td></td><td>16</td></tr><tr><td>Total</td><td>15</td><td></td><td></td></tr></tbody></table>
---CORR---
On complète par lignes et par colonnes :<br>$9 + 7 = 16$ rouges ; $15 - 9 = 6$ tulipes jaunes ; $16 - 6 = 10$ roses jaunes ; $7 + 10 = 17$ roses ; $15 + 17 = 32$ fleurs en tout.<br><table class="livret-tab"><tbody><tr><td></td><td>Tulipes</td><td>Roses</td><td>Total</td></tr><tr><td>Rouges</td><td>9</td><td>7</td><td>${\color{#EB7F73}\boldsymbol{16}}$</td></tr><tr><td>Jaunes</td><td>${\color{#EB7F73}\boldsymbol{6}}$</td><td>${\color{#EB7F73}\boldsymbol{10}}$</td><td>16</td></tr><tr><td>Total</td><td>15</td><td>${\color{#EB7F73}\boldsymbol{17}}$</td><td>${\color{#EB7F73}\boldsymbol{32}}$</td></tr></tbody></table>
---Q---
Quelle est la probabilité que la fleur choisie soit une tulipe rouge ou une rose rouge ?
---CORR---
Il y a $16$ fleurs rouges sur $32$.<br>$\dfrac{16}{32} = \dfrac{1}{2} = {\color{#EB7F73}\boldsymbol{\dfrac{1}{2}}}$
---Q---
Quelle est la probabilité que la fleur choisie soit une rose ?
---CORR---
Il y a $17$ roses sur $32$.<br>$\dfrac{17}{32} = {\color{#EB7F73}\boldsymbol{\dfrac{17}{32}}}$
---Q---
On sait que la fleur choisie est une tulipe. Quelle est la probabilité que ce soit une tulipe rouge ?
---CORR---
On sait que c'est une tulipe : il n'y a plus que $15$ fleurs possibles, dont $9$ rouges.<br>$\dfrac{9}{15} = \dfrac{3}{5} = {\color{#EB7F73}\boldsymbol{\dfrac{3}{5}}}$
{{< /livret-exo >}}

