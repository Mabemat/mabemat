---
title: "Semaine 22 — Probabilités et calculs"
layout: "automatismes-1re"
level: "1re"
auto_number: 22
weight: 22
---

<div class="auto1-open" data-mode="seance">

{{< auto1-exo numero="01" >}}
On dispose d'une urne A contenant $4$ boules numérotées $2$ ; $13$ ; $26$ ; $30$ et d'une urne B contenant $6$ boules numérotées $6$ ; $15$ ; $17$ ; $19$ ; $20$ ; $27$. Les boules sont indiscernables au toucher.

Dans quelle urne la probabilité d'obtenir une boule portant un nombre premier est-elle la plus grande ?
---CORR---
Dans l'urne A, les nombres premiers sont $2$ et $13$ : la probabilité est $\dfrac{2}{4}=\dfrac{1}{2}$.

Dans l'urne B, les nombres premiers sont $17$ et $19$ : la probabilité est $\dfrac{2}{6}=\dfrac{1}{3}$.

Comme $\dfrac{1}{2}>\dfrac{1}{3}$, la probabilité d'obtenir un nombre premier est plus grande avec l'**urne A**.
{{< /auto1-exo >}}

{{< auto1-exo numero="02" >}}
On lance un dé cubique truqué quatre fois de suite. La probabilité d'obtenir au moins une fois $6$ lors des quatre lancers est égale à $0{,}518$.

Quelle est la probabilité de n'obtenir aucun $6$ lors des quatre lancers ?
---CORR---
On note $A$ l'événement "obtenir au moins un 6" et $B$ l'événement "n'obtenir aucun 6".<br>
Les événements $A$ et $B$ sont contraires.<br>
Donc : $P(B) = 1 - P(A)$.<br>
$P(B) = 1 - 0,518 = 0,482$
{{< /auto1-exo >}}

{{< auto1-exo numero="03" >}}
Soit $n$ un entier non nul.

Simplifier $4^n+4^n$.
---CORR---
$4^n+4^n=2\times 4^n$
{{< /auto1-exo >}}

{{< auto1-exo numero="04" >}}
Combien de solutions réelles l'équation $4=-x^2+15$ possède-t-elle ?
---CORR---
L'équation est équivalente à $-x^2=4-15$, soit $x^2=11$.<br>
$11$ étant strictement positif, cette équation a $2$ solutions : $\sqrt11$ et  $-\sqrt11$.
{{< /auto1-exo >}}

{{< auto1-exo numero="05" >}}
Calculer, en $\text{hm}^2$, l'aire d'un carré de côté $300\ \text{m}$.
---CORR---
$300$ $\text {m}$ $= 3$ $\text{hm}$<br>
L'aire du carré est : $3 \text { hm}\times 3 \text { hm} = 9 \text{ hm}^2$ .
{{< /auto1-exo >}}

{{< auto1-exo numero="06" >}}
Voici la répartition des notes sur 10 d'une classe de première.

<img src="graphe_s04_2.png" alt="Diagramme en barres" style="display:block;margin:1rem auto;max-width:420px">

Quel pourcentage des élèves a obtenu la note $5$ ?
---CORR---
Le pourcentage d'élèves ayant obtenu la note 5 est calculé en divisant l'effectif de cette note par l'effectif total, puis en multipliant par 100.<br>
L'effectif total est le nombre de notes représentées dans l'histogramme.<br>
Ici, on trouve un effectif total de $20$ élèves.<br>
L'effectif des élèves ayant obtenu la note 5 est de $12$.<br>
$\dfrac1220 \times 100 = 60$<br>
Donc le pourcentage est de $60$ %.
{{< /auto1-exo >}}

</div>

<div class="auto1-open" data-mode="devoir">

{{< auto1-exo numero="01" >}}
On dispose d'une urne A contenant $6$ boules numérotées $6$ ; $7$ ; $9$ ; $10$ ; $15$ ; $16$ et d'une urne B contenant $5$ boules numérotées $5$ ; $12$ ; $23$ ; $25$ ; $29$. Les boules sont indiscernables au toucher.

Dans quelle urne la probabilité d'obtenir une boule portant un multiple de $3$ est-elle la plus grande ?
---CORR---
Dans l'urne A, les issues favorables sont : $6, 9, 15$.<br>
$P_A = \dfrac{3}{6} = \dfrac{1}{2}$<br>
Dans l'urne B, il n'y a qu'une seule issue favorable : $12$.<br>
$P_B = \dfrac{1}{5}$<br>
On a $\dfrac{1}{2} = \dfrac{5}{10}$ et $\dfrac{1}{5} = \dfrac{2}{10}$ et comme $\dfrac{1}{2} > \dfrac{1}{5}$, donc :<br>
La probabilité d'obtenir une boule portant un multiple de 3 est plus grande en choisissant l'urne A.
{{< /auto1-exo >}}

{{< auto1-exo numero="02" >}}
Dans une production, $10\ $% des pièces sont défectueuses. On prélève quatre pièces au hasard. La probabilité qu'aucune pièce ne soit défectueuse est environ $0{,}656$.

Quelle est la probabilité qu'au moins une pièce soit défectueuse ?
---CORR---
On note $A$ l'événement «  au moins une pièce est défectueuse  » et $B$ l'événement «  aucune pièce n'est défectueuse  ».<br>
Les événements $A$ et $B$ sont contraires.<br>
Donc : $P(A) = 1 - P(B)$.<br>
$P(A) = 1 - 0{,}656 = 0{,}344$
{{< /auto1-exo >}}

{{< auto1-exo numero="03" >}}
Soit $n$ un entier non nul.

Simplifier $3^n+3^n$.
---CORR---
$$
\begin{aligned} 3^{n}+3^n&=2\times 3^{n}\end{aligned}
$$
{{< /auto1-exo >}}

{{< auto1-exo numero="04" >}}
Combien de solutions réelles l'équation $19=-x^2+9$ possède-t-elle ?
---CORR---
L'équation est équivalente à $-x^2=19-9$, soit $x^2=-10$.<br>
Cette équation a $\boldsymbol{0}$ solution réelle car $-10<0$.
{{< /auto1-exo >}}

{{< auto1-exo numero="05" >}}
Calculer, en $\text{dam}^2$, l'aire d'un carré de côté $80\ \text{m}$.
---CORR---
$80$ $\text{ m}$ $= 8$ $\text{dam}$<br>
L'aire du carré est : $8 \text{ dam}\times 8 \text{ dam} = \boldsymbol{64\textbf{ dam}^2}$ .
{{< /auto1-exo >}}

{{< auto1-exo numero="06" >}}
Voici la répartition des notes sur 20 d'une classe de première.

<img src="graphe_s04_2_devoir.png" alt="Diagramme en barres" style="display:block;margin:1rem auto;max-width:420px">

Quel pourcentage des élèves a obtenu la note $9$ ?
---CORR---
Le pourcentage d'élèves ayant obtenu la note 9 est calculé en divisant l'effectif de cette note par l'effectif total, puis en multipliant par 100.<br>
L'effectif total est le nombre de notes représentées dans l'histogramme.<br>
Ici, on trouve un effectif total de $25$ élèves.<br>
L'effectif des élèves ayant obtenu la note 9 est de $6$.<br>
$\dfrac{6}{25} \times 100 = 24$<br>
Donc le pourcentage est de $24~\%$.
{{< /auto1-exo >}}

</div>
