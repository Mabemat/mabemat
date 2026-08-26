---
title: "Semaine 31 - Épreuve blanche d'automatismes"
layout: "automatismes-2nde"
auto_number: 31
weight: 31
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
On considère $A=\dfrac{3}{4}+\dfrac{7}{100}$. On a :

<div class="qcm-choix">
<span><b>A.</b> $A=\dfrac{10}{104}$</span>
<span><b>B.</b> $A=0{,}757$</span>
<span><b>C.</b> $A=0{,}82$</span>
<span><b>D.</b> $A=1{,}45$</span>
</div>
---CORR---
On écrit chaque fraction sous forme décimale :

$$\dfrac{3}{4}=0{,}75 \qquad\text{et}\qquad \dfrac{7}{100}=0{,}07$$

On additionne :

$$A=0{,}75+0{,}07={\color{#4A5D7A}0{,}82}$$

La réponse A additionne numérateurs et dénominateurs, ce qui n'est jamais une addition de fractions.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Dans un groupe de $250$ personnes, $40\,\%$ sont des femmes, et $25\,\%$ de ces femmes sont cadres.

Le nombre de femmes cadres est :

<div class="qcm-choix">
<span><b>A.</b> $65$</span>
<span><b>B.</b> $100$</span>
<span><b>C.</b> $62{,}5$</span>
<span><b>D.</b> $25$</span>
</div>
---CORR---
On enchaîne les deux proportions, la seconde ne portant que sur les femmes :

$$\begin{aligned}250\times 0{,}40 &= 100\ \text{femmes} \\ \text{puis}\quad 100\times 0{,}25 &= {\color{#4A5D7A}25}\end{aligned}$$

La réponse B s'arrête à la première étape, et la réponse A additionne les deux pourcentages au lieu de les enchaîner.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Un prix baisse de $30\,\%$, puis augmente de $50\,\%$. L'évolution globale est :

<div class="qcm-choix">
<span><b>A.</b> une hausse de $5\,\%$</span>
<span><b>B.</b> une baisse de $5\,\%$</span>
<span><b>C.</b> une hausse de $20\,\%$</span>
<span><b>D.</b> une hausse de $15\,\%$</span>
</div>
---CORR---
On multiplie les coefficients multiplicateurs :

$$0{,}70\times 1{,}50=1{,}05$$

Comme $1{,}05=1+0{,}05$, il s'agit d'une hausse de ${\color{#4A5D7A}5\,\%}$.

La réponse C additionne les taux ($-30+50$), ce qui est toujours faux.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Soit $f$ la fonction définie par $f(x)=(x-4)(x+2)$. Les antécédents de $0$ par $f$ sont :

<div class="qcm-choix">
<span><b>A.</b> $\lbrace -4\,;\,2\rbrace$</span>
<span><b>B.</b> $\lbrace 4\,;\,-2\rbrace$</span>
<span><b>C.</b> $\lbrace -8\rbrace$</span>
<span><b>D.</b> $\lbrace 0\rbrace$</span>
</div>
---CORR---
Chercher les antécédents de $0$ revient à résoudre $f(x)=0$, c'est-à-dire une équation produit :

$$(x-4)(x+2)=0$$

Un produit est nul si et seulement si l'un de ses facteurs est nul :

$$\begin{aligned}x-4 &= 0 \quad\text{donc}\quad x=4 \\ \text{ou}\quad x+2 &= 0 \quad\text{donc}\quad x=-2\end{aligned}$$

$${\color{#4A5D7A}\lbrace 4\,;\,-2\rbrace}$$

La réponse A est le piège classique : on lit les nombres de l'énoncé sans changer leur signe. La réponse C donne $f(0)$, pas les antécédents de $0$.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
La moyenne de la série $2\ ;\ 5\ ;\ 5\ ;\ 8\ ;\ 10\ ;\ 12$ est :

<div class="qcm-choix">
<span><b>A.</b> $6{,}5$</span>
<span><b>B.</b> $5$</span>
<span><b>C.</b> $7$</span>
<span><b>D.</b> $8$</span>
</div>
---CORR---
On additionne les six valeurs :

$$2+5+5+8+10+12=42$$

On divise par l'effectif :

$$\dfrac{42}{6}={\color{#4A5D7A}7}$$

La réponse A est la médiane $\dfrac{5+8}{2}=6{,}5$, et la réponse B le mode : trois indicateurs différents à ne pas confondre.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
On tire une carte au hasard dans un jeu de $32$ cartes. La probabilité d'obtenir un pique ou un roi est :

<div class="qcm-choix">
<span><b>A.</b> $\dfrac{11}{32}$</span>
<span><b>B.</b> $\dfrac{3}{8}$</span>
<span><b>C.</b> $\dfrac{1}{32}$</span>
<span><b>D.</b> $\dfrac{12}{32}$</span>
</div>
---CORR---
Le jeu contient $8$ piques et $4$ rois. Mais le roi de pique appartient aux deux catégories : si on additionne $8$ et $4$, on le compte deux fois.

$$8+4-1=11$$

D'où :

$$P={\color{#4A5D7A}\dfrac{11}{32}}$$

C'est la formule $P(A\cup B)=P(A)+P(B)-P(A\cap B)$. La réponse D oublie de retrancher l'intersection.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
On considère $A=\dfrac{2}{5}+\dfrac{9}{100}$. On a :

<div class="qcm-choix">
<span><b>A.</b> $A=\dfrac{11}{105}$</span>
<span><b>B.</b> $A=0{,}49$</span>
<span><b>C.</b> $A=0{,}409$</span>
<span><b>D.</b> $A=1{,}3$</span>
</div>
---CORR---
On écrit chaque fraction sous forme décimale :

$$\dfrac{2}{5}=0{,}4 \qquad\text{et}\qquad \dfrac{9}{100}=0{,}09$$

On additionne :

$$A=0{,}4+0{,}09={\color{#4A5D7A}0{,}49}$$

La réponse A additionne numérateurs et dénominateurs, ce qui n'est jamais une addition de fractions.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Dans un groupe de $320$ personnes, $25\,\%$ sont des femmes, et $40\,\%$ de ces femmes sont cadres.

Le nombre de femmes cadres est :

<div class="qcm-choix">
<span><b>A.</b> $80$</span>
<span><b>B.</b> $128$</span>
<span><b>C.</b> $32$</span>
<span><b>D.</b> $65$</span>
</div>
---CORR---
On enchaîne les deux proportions, la seconde ne portant que sur les femmes :

$$\begin{aligned}320\times 0{,}25 &= 80\ \text{femmes} \\ \text{puis}\quad 80\times 0{,}40 &= {\color{#4A5D7A}32}\end{aligned}$$

La réponse A s'arrête à la première étape, et la réponse D additionne les deux pourcentages au lieu de les enchaîner.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Un prix baisse de $40\,\%$, puis augmente de $50\,\%$. L'évolution globale est :

<div class="qcm-choix">
<span><b>A.</b> une hausse de $10\,\%$</span>
<span><b>B.</b> une baisse de $90\,\%$</span>
<span><b>C.</b> une hausse de $5\,\%$</span>
<span><b>D.</b> une baisse de $10\,\%$</span>
</div>
---CORR---
On multiplie les coefficients multiplicateurs :

$$0{,}60\times 1{,}50=0{,}9$$

Comme $0{,}9=1-0{,}1$, il s'agit d'une baisse de ${\color{#4A5D7A}10\,\%}$.

La réponse A additionne les taux ($-40+50$), ce qui est toujours faux.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Soit $f$ la fonction définie par $f(x)=(x+5)(x-3)$. Les antécédents de $0$ par $f$ sont :

<div class="qcm-choix">
<span><b>A.</b> $\lbrace -5\,;\,3\rbrace$</span>
<span><b>B.</b> $\lbrace 5\,;\,-3\rbrace$</span>
<span><b>C.</b> $\lbrace -15\rbrace$</span>
<span><b>D.</b> $\lbrace 2\rbrace$</span>
</div>
---CORR---
Chercher les antécédents de $0$ revient à résoudre $f(x)=0$, c'est-à-dire une équation produit :

$$(x+5)(x-3)=0$$

Un produit est nul si et seulement si l'un de ses facteurs est nul :

$$\begin{aligned}x+5 &= 0 \quad\text{donc}\quad x=-5 \\ \text{ou}\quad x-3 &= 0 \quad\text{donc}\quad x=3\end{aligned}$$

$${\color{#4A5D7A}\lbrace -5\,;\,3\rbrace}$$

La réponse B est le piège classique : on lit les nombres de l'énoncé sans changer leur signe. La réponse C donne $f(0)$, pas les antécédents de $0$.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
La moyenne de la série $3\ ;\ 4\ ;\ 6\ ;\ 9\ ;\ 11\ ;\ 15$ est :

<div class="qcm-choix">
<span><b>A.</b> $6$</span>
<span><b>B.</b> $8$</span>
<span><b>C.</b> $9$</span>
<span><b>D.</b> $7{,}5$</span>
</div>
---CORR---
On additionne les six valeurs :

$$3+4+6+9+11+15=48$$

On divise par l'effectif :

$$\dfrac{48}{6}={\color{#4A5D7A}8}$$

La réponse D est la médiane $\dfrac{6+9}{2}=7{,}5$ : ce n'est pas la même notion que la moyenne, même si les deux valeurs sont ici proches.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
On tire une carte au hasard dans un jeu de $52$ cartes. La probabilité d'obtenir un cœur ou une dame est :

<div class="qcm-choix">
<span><b>A.</b> $\dfrac{17}{52}$</span>
<span><b>B.</b> $\dfrac{1}{52}$</span>
<span><b>C.</b> $\dfrac{1}{4}$</span>
<span><b>D.</b> $\dfrac{4}{13}$</span>
</div>
---CORR---
Le jeu contient $13$ cœurs et $4$ dames. Mais la dame de cœur appartient aux deux catégories : si on additionne $13$ et $4$, on la compte deux fois.

$$13+4-1=16$$

D'où :

$$P=\dfrac{16}{52}=\dfrac{4\times \cancel{4}}{13\times \cancel{4}}={\color{#4A5D7A}\dfrac{4}{13}}$$

C'est la formule $P(A\cup B)=P(A)+P(B)-P(A\cap B)$. La réponse A oublie de retrancher l'intersection.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
