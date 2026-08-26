---
title: "Semaine 6 - Évolutions réciproques et tableaux croisés"
layout: "automatismes-2nde"
auto_number: 6
weight: 6
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Après une hausse de $25\,\%$, un article coûte $75$ €.

Quel était son prix avant la hausse ?
---CORR---
On note $P$ le prix avant la hausse. Une hausse de $25\,\%$ revient à multiplier par $1{,}25$ :

$$P\times 1{,}25=75$$

Pour revenir en arrière, on **divise** par le coefficient multiplicateur :

$$P=\dfrac{75}{1{,}25}={\color{#4A5D7A}60}$$

Le prix avant la hausse était donc de $60$ €.

Vérification : $60\times 1{,}25=75$. Attention à ne pas baisser le prix de $25\,\%$, ce qui donnerait $56{,}25$ € et non $60$ €.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Dans un groupe de $200$ personnes, il y a $120$ femmes, dont $30$ portent des lunettes. Parmi les hommes, $50$ portent des lunettes.

**a.** Quelle est la fréquence des porteurs de lunettes dans le groupe ?

**b.** Quelle est la fréquence des porteuses de lunettes parmi les femmes ?
---CORR---
**a.** Nombre total de porteurs de lunettes :

$$30+50=80$$

La fréquence se calcule par rapport à l'effectif total du groupe :

$$f=\dfrac{80}{200}=0{,}4={\color{#4A5D7A}40\,\%}$$

**b.** Ici, la population de référence change : ce sont les $120$ femmes.

$$f=\dfrac{30}{120}=\dfrac{1}{4}=0{,}25={\color{#4A5D7A}25\,\%}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Le tableau suivant donne la répartition des $200$ élèves d'un lycée selon leur langue vivante 2 et leur niveau.

| | Espagnol | Allemand | Total |
|---|---|---|---|
| Seconde | 78 | | 110 |
| Première | | 28 | |
| Total | 140 | | 200 |

Recopier et compléter le tableau.
---CORR---
On complète case par case, en utilisant le fait que chaque total est la somme de sa ligne ou de sa colonne.

Ligne « Seconde » : $110-78={\color{#4A5D7A}32}$ élèves de seconde font allemand.

Colonne « Espagnol » : $140-78={\color{#4A5D7A}62}$ élèves de première font espagnol.

Ligne « Première » : $62+28={\color{#4A5D7A}90}$ élèves en première.

Colonne « Allemand » : $32+28={\color{#4A5D7A}60}$ élèves font allemand.

| | Espagnol | Allemand | Total |
|---|---|---|---|
| Seconde | 78 | 32 | 110 |
| Première | 62 | 28 | 90 |
| Total | 140 | 60 | 200 |

Deux vérifications indépendantes : $110+90=200$ pour les lignes, et $140+60=200$ pour les colonnes.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Un prix augmente de $10\,\%$, puis augmente de $20\,\%$.

Déterminer le taux d'évolution global, en pourcentage.
---CORR---
On multiplie les coefficients multiplicateurs :

$$1{,}10\times 1{,}20=1{,}32$$

Comme $1{,}32=1+0{,}32$, le prix a augmenté de ${\color{#4A5D7A}32\,\%}$ au total, et non de $30\,\%$.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Le taux d'évolution associé à un coefficient multiplicateur de $0{,}25$ est :

**A.** $-0{,}25\,\%$ &emsp; **B.** $-25\,\%$ &emsp; **C.** $-75\,\%$ &emsp; **D.** $-2{,}5\,\%$
---CORR---
Le coefficient multiplicateur et le taux sont liés par la relation :

$$\text{CM}=1+\dfrac{t}{100}$$

Ici $\text{CM}=0{,}25$, donc :

$$0{,}25=1+\dfrac{t}{100} \qquad\text{d'où}\qquad \dfrac{t}{100}=0{,}25-1=-0{,}75$$

$$t={\color{#4A5D7A}-75}$$

Le coefficient étant inférieur à $1$, il s'agit bien d'une baisse. Multiplier par $0{,}25$, c'est diviser par $4$ : on ne garde qu'un quart de la valeur, on en perd donc les trois quarts.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
$20\,\%$ de $N$ est égal à $14$. On a :

**A.** $N=70$ &emsp; **B.** $N=2{,}8$ &emsp; **C.** $N=280$ &emsp; **D.** $N=0{,}7$
---CORR---
On traduit l'énoncé par une égalité :

$$\dfrac{20}{100}\times N=14 \qquad\text{soit}\qquad 0{,}2\times N=14$$

On divise chaque membre par $0{,}2$ :

$$N=\dfrac{14}{0{,}2}=\dfrac{140}{2}={\color{#4A5D7A}70}$$

Vérification : $20\,\%$ de $70$ vaut $\dfrac{20\times 70}{100}=14$.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Après une baisse de $20\,\%$, un article coûte $96$ €.

Quel était son prix avant la baisse ?
---CORR---
On note $P$ le prix avant la baisse. Une baisse de $20\,\%$ revient à multiplier par $0{,}80$ :

$$P\times 0{,}80=96$$

Pour revenir en arrière, on **divise** par le coefficient multiplicateur :

$$P=\dfrac{96}{0{,}80}={\color{#4A5D7A}120}$$

Le prix avant la baisse était donc de $120$ €.

Vérification : $120\times 0{,}80=96$. Attention à ne pas augmenter le prix de $20\,\%$, ce qui donnerait $115{,}20$ € et non $120$ €.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Dans un groupe de $250$ personnes, il y a $150$ femmes, dont $45$ portent des lunettes. Parmi les hommes, $40$ portent des lunettes.

**a.** Quelle est la fréquence des porteurs de lunettes dans le groupe ?

**b.** Quelle est la fréquence des porteuses de lunettes parmi les femmes ?
---CORR---
**a.** Nombre total de porteurs de lunettes :

$$45+40=85$$

La fréquence se calcule par rapport à l'effectif total du groupe :

$$f=\dfrac{85}{250}=0{,}34={\color{#4A5D7A}34\,\%}$$

**b.** Ici, la population de référence change : ce sont les $150$ femmes.

$$f=\dfrac{45}{150}=\dfrac{3}{10}=0{,}3={\color{#4A5D7A}30\,\%}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Le tableau suivant donne la répartition des $250$ adhérents d'un club selon leur activité et leur âge.

| | Tennis | Natation | Total |
|---|---|---|---|
| Moins de 18 ans | 64 | | 150 |
| 18 ans ou plus | | 45 | |
| Total | 119 | | 250 |

Recopier et compléter le tableau.
---CORR---
On complète case par case, en utilisant le fait que chaque total est la somme de sa ligne ou de sa colonne.

Ligne « Moins de 18 ans » : $150-64={\color{#4A5D7A}86}$ adhérents de moins de 18 ans font de la natation.

Colonne « Tennis » : $119-64={\color{#4A5D7A}55}$ adhérents de 18 ans ou plus font du tennis.

Ligne « 18 ans ou plus » : $55+45={\color{#4A5D7A}100}$ adhérents de 18 ans ou plus.

Colonne « Natation » : $86+45={\color{#4A5D7A}131}$ adhérents font de la natation.

| | Tennis | Natation | Total |
|---|---|---|---|
| Moins de 18 ans | 64 | 86 | 150 |
| 18 ans ou plus | 55 | 45 | 100 |
| Total | 119 | 131 | 250 |

Deux vérifications indépendantes : $150+100=250$ pour les lignes, et $119+131=250$ pour les colonnes.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Un prix diminue de $10\,\%$, puis augmente de $50\,\%$.

Déterminer le taux d'évolution global, en pourcentage.
---CORR---
On multiplie les coefficients multiplicateurs :

$$0{,}90\times 1{,}50=1{,}35$$

Comme $1{,}35=1+0{,}35$, le prix a augmenté de ${\color{#4A5D7A}35\,\%}$ au total, et non de $40\,\%$.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Le taux d'évolution associé à un coefficient multiplicateur de $1{,}08$ est :

**A.** $+0{,}8\,\%$ &emsp; **B.** $+8\,\%$ &emsp; **C.** $+1{,}08\,\%$ &emsp; **D.** $+108\,\%$
---CORR---
Le coefficient multiplicateur et le taux sont liés par la relation :

$$\text{CM}=1+\dfrac{t}{100}$$

Ici $\text{CM}=1{,}08$, donc :

$$1{,}08=1+\dfrac{t}{100} \qquad\text{d'où}\qquad \dfrac{t}{100}=1{,}08-1=0{,}08$$

$$t={\color{#4A5D7A}+8}$$

Le coefficient étant supérieur à $1$, il s'agit bien d'une hausse. La réponse D confond le coefficient exprimé en pourcentage avec le taux d'évolution.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
$25\,\%$ de $N$ est égal à $18$. On a :

**A.** $N=4{,}5$ &emsp; **B.** $N=450$ &emsp; **C.** $N=0{,}72$ &emsp; **D.** $N=72$
---CORR---
On traduit l'énoncé par une égalité :

$$\dfrac{25}{100}\times N=18 \qquad\text{soit}\qquad 0{,}25\times N=18$$

Prendre $25\,\%$, c'est prendre le quart : on retrouve $N$ en multipliant par $4$.

$$N=\dfrac{18}{0{,}25}=18\times 4={\color{#4A5D7A}72}$$

Vérification : $25\,\%$ de $72$ vaut $\dfrac{72}{4}=18$.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
