---
title: "Exercices type brevet - Fonctions affines"
layout: "brevet"
level: "3e"
chapter: "chapitre-12-fonctions-affines"
has_brevetcorr: true
---
{{< brevet-exo num="1" source="DNBPRO Juin 2023 Polynésie" >}}
---INTRO---
Un agriculteur souhaiterait louer un camion pour transporter tous ses matériaux agricoles. Il hésite entre deux entreprises.

<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>Tarif de l'entreprise A : 450 F par kilomètre.</li><li>Tarif de l'entreprise B : un forfait de 8&thinsp;400 F et 250 F par kilomètre.</li></ul>
---Q---
Pour l'entreprise A et l'entreprise B, calculer le prix qu'il devra payer pour une distance de 100 km.
---CORR---
<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>le prix qu'il devra payer pour l'entreprise A est $450\times 100$ soit 45000 F;</li><li>le prix qu'il devra payer pour l'entreprise B est $250\times 100+8\,400$ soit 33400 F.</li></ul>
---Q---
On appelle $x$ la distance exprimée en kilomètre.

<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>La fonction $f$ représente le tarif de l'entreprise A</li><li>La fonction $g$ représente le tarif de l'entreprise B</li><li>Les fonctions $f$ et $g$ sont définies, pour toute valeur de $x$ sur l'intervalle $[0\,;\,150]$, par: 

$f(x) = 450 x \text{ et } g(x) = 250 x + 8\,400$&nbsp;</li></ul>

Les fonctions $f$ et $g$ sont représentées graphiquement ci-dessous.

<img src="/mabemat/figures/3e/chapitre-12/1-1.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:400px; max-width:100%;">

Indiquer le nom de chaque fonction représentée dans le graphique précédent.
---CORR---
<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>La fonction $f$ représente le tarif de l'entreprise A</li><li>La fonction $g$ représente le tarif de l'entreprise B</li><li>Les fonctions $f$ et $g$ sont définies, pour toute valeur de $x$ sur l'intervalle $[0\,;\,150]$, par:  $f(x) = 450 x \text{ et } g(x) = 250 x + 8\,400$.</li></ul>

Les fonctions $f$ et $g$ sont représentées graphiquement ci-dessous.

<img src="/mabemat/figures/3e/chapitre-12/1c-1.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:200px; max-width:100%;">


On a indiqué le nom de chaque fonction représentée dans le graphique.
---Q---
À l'aide du graphique:
---SUB-Q---
Déterminer le tarif pour lequel le prix payé est proportionnel à la distance exprimée en kilomètre. Justifier la réponse.
---SUB-CORR---
Si le prix est proportionnel à la distance, on doit payer 0&nbsp;F pour 0&nbsp;km; cela correspond donc à la droite qui passe par le point de coordonnées $(0\,,\,0)$ donc celle représentant $f$.
---SUB-Q---
Déterminer l'entreprise qui a le tarif le moins cher si la distance à parcourir est de 30 km. Tracer les traits de lecture sur le graphique.
---SUB-CORR---
L'entreprise qui a le tarif le moins cher si la distance à parcourir est de 30 km est l'entreprise A (voir graphique).
---SUB-Q---
Déterminer la distance exprimée en kilomètre pour laquelle les deux tarifs sont égaux.
---SUB-CORR---
La distance  pour laquelle les deux tarifs sont égaux est le nombre $x$ tel que $f(x)=g(x)$. On résout cette équation.<br>

$$\begin{aligned}
f(x)&=g(x) \\
450x &= 250 x + 8\,400 \\
450x - 250 x &= 8\,400 \\
200x &= 8\,400 \\
x&=\dfrac{8\,400}{200} \\
x&=42
\end{aligned}$$
Donc pour une distance de 42&nbsp;km, les deux tarifs sont égaux.
---SUB-Q---
Indiquer le tarif le moins cher en fonction de la distance parcourue, exprimée en kilomètre.
---SUB-CORR---
On déduit que, pour une distance inférieure à 42&nbsp;km c'est l'entreprise A qui a le tarif le plus bas, et que pour une distance supérieure à 42&nbsp;km c'est l'entreprise B.
{{< /brevet-exo >}}

{{< brevet-exo num="2" source="DNB Juillet 2019 Métropole" >}}
---INTRO---

Void deux programmes de calcul :

<img src="/mabemat/figures/3e/chapitre-12/2-1.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:400px; max-width:100%;">



---Q---
Vérifier que si on choisit 5 comme nombre de départ.

<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>le résultat du programme 1 vaut $16$.</li><li>le résultat du programme 2 vaut $28$.</li></ul>


On appelle $A(x)$ le résultat du programme 1 en fonction du nombre $x$ choisi au départ.<br>

La fonction $B$  :  $x \longmapsto  (x - 1)(x + 2)$ donne le résultat du programme 2 en fonction du nombre $x$ choisi au départ.
---CORR---
Avec le programme 1, on a :

$5 \to  3 \times 5 = 15 \to 15 + 1 = 16$<br>

Le résultat du programme 1 vaut 16.<br>
 
Avec le programme 2, on a :

$5 \to 5 - 1 = 4$ (à gauche) et  $5 + 2 = 7 $(à droite) $\to  4 \times 7 = 28$.<br>

Le résultat du programme 2 vaut $28$.
---Q---

---SUB-Q---
Exprimer $A(x)$ en fonction de $x$.
---SUB-CORR---
Pour le programme 1, on a $x \to  3x \to  3x + 1$, donc on a $A(x) = 3x + 1$.
---SUB-Q---
Déterminer le nombre que l'on doit choisir au départ pour obtenir 0 comme résultat du programme 1.
---SUB-CORR---
On veut $A(x) = 0$, ce qui donne successivement :
		
$3x + 1 = 0 ;\: 3x = 0 - 1 ; \:3x = -1  ;\: x = - \dfrac{1}{3}$.<br>

On doit choisir $- \dfrac{1}{3}$ au départ pour obtenir $0$ comme résultat du programme 1.
---Q---
Développer et réduire l'expression :
	
$$B(x) = (x - 1)(x + 2).$$
---CORR---
$B(x) = (x - 1)(x + 2) = x^2 + 2x – x – 2 = x^2 + x – 2$.
---Q---

---SUB-Q---
Montrer que $B(x) - A(x) = (x + 1)(x - 3)$.
---SUB-CORR---
On a : $B(x) – A(x) = x^2 + x – 2 - (3x + 1) = x^2 + x - 2 - 3x – 1 = x^2 - 2x - 3$<br>
Et $(x + 1)(x - 3) = x^2 - 3x + x - 3 = x^2 - 2x - 3$.<br>

On a bien $B(x) – A(x) = (x + 1)(x - 3)$.
---SUB-Q---
Quels nombres doit-on choisir au départ pour que le programme 1 et le programme 2 donnent le même résultat ? Expliquer la démarche.
---SUB-CORR---
On veut $B(x) = A(x)$, soit $B(x) – A(x) = 0$ ou encore $(x + 1)(x - 3) = 0$ <br>
Soit $x + 1 = 0$ ou $x – 3 = 0$.<br>

On a donc $x = - 1$ ou $x = 3$.<br>

Il faut choisir $- 1$ ou $3$ au départ pour que le programme 1 et le programme 2 donnent le même résultat.
{{< /brevet-exo >}}

{{< brevet-exo num="3" source="DNB Novembre 2021 Amérique du sud" >}}
---INTRO---
Une mère et sa fille rentrent chez elles à pied en empruntant le même trajet de
10 kilomètres. La mère décide de s'y rendre en marchant et sa fille en courant.<br>

Le graphique ci-dessous modélise les parcours de la mère et de la fille depuis leur départ.

<img src="/mabemat/figures/3e/chapitre-12/3-1.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:400px; max-width:100%;">

---Q---

---SUB-Q---
Indiquer le temps mis par la mère pour rentrer chez elle, avec la précision que permet la lecture du graphique.
---SUB-CORR---
La droite représentant le trajet de la mère passe par le point de coordonnées $(2~;~10)$ donc  le temps mis par la mère pour faire les 10&nbsp;km pour rentrer chez elle est de 2 heures.
---SUB-Q---
Déterminer la vitesse moyenne en km/h de la mère sur l'ensemble de son parcours.
---SUB-CORR---
La mère fait 10&nbsp;km en 2&nbsp;h donc sa vitesse moyenne est de $\dfrac{10}{2}$ soit 5&nbsp;km/h.
---SUB-Q---
La distance parcourue par la mère est-elle proportionnelle au temps ?
---SUB-CORR---
Le trajet de la mère est une droite passant par l'origine, donc la distance  parcourue par la mère est proportionnelle au temps.
---Q---
La fille est partie à $16$&nbsp;h et est arrivée chez elle à $17$&nbsp;h $50$. Elle a fait une pause durant sa course.
---SUB-Q---
Indiquer la durée de la pause de la fille, avec la précision que permet la lecture graphique.
---SUB-CORR---
La durée de la pause de la fille est de 30 minutes.
---SUB-Q---
Quand a-t-elle couru le plus vite: avant ou après sa pause ?
---SUB-CORR---
<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>Les 15 premières minutes, elle parcourt 3&nbsp;km, ce qui fait une vitesse de 12&nbsp;km/h.</li><li>Les 30 minutes suivantes, elle fait une pause.</li><li>Elle parcourt 7&nbsp;km dans la 3 partie. Son trajet total se déroule de 16&nbsp;h à 17&nbsp;h&nbsp;50, donc dure 1&nbsp;h&nbsp;50. La 3 partie dure donc 1&nbsp;h&nbsp;05.

En parcourant 7&nbsp;km en 1&nbsp;h&nbsp;05, la vitesse est inférieure à 7&nbsp;km/h donc inférieure à 12&nbsp;km/h.</li></ul>		

La fille a donc couru plus vite avant sa pause qu'après.
---Q---
Combien de fois la mère et la fille se sont retrouvées au même endroit et au même moment, au cours de leur trajet ?
---CORR---
Les graphiques représentant les deux trajets de la mère et de la fille se coupent en deux points, donc  la mère et la fille se sont retrouvées deux fois au même endroit et au même moment, au cours de leur trajet.
---Q---
Dans cette question, on note $f$ la fonction qui, au temps de parcours $x$ (exprimé en heure) de la mère depuis le départ, associe la distance parcourue (exprimée en kilomètre) par la mère depuis le départ.<br>

Parmi les propositions suivantes, recopier sans justification l'expression de $f(x)$ :

$$f(x) = \dfrac{1}{5}x \quad;\quad  f(x) = 5x \quad;\quad  f(x) = x +5.$$

---CORR---
Dans cette question, on note $f$ la fonction qui, au temps de parcours $x$ (exprimé en heure) de la mère depuis le départ, associe la distance parcourue (exprimée en kilomètre) par la mère depuis le départ.<br>
Parmi les propositions suivantes, l'expression de $f(x)$ est: $f(x) = 5x$ 
{{< /brevet-exo >}}

{{< brevet-exo num="4" source="DNB Décembre 2020 Nouvelle Calédonie" >}}
---INTRO---
Nolan souhaite construire une habitation.<br>

Il hésite entre une <strong>case</strong> et une <strong>maison</strong> en forme de prisme droit.<br>

La case est représentée par un cylindre droit d'axe (OO$'$) surmontée d'un cône de révolution de sommet S.<br>

Les dimensions sont données sur les figures suivantes.<br>

$x$ représente à la fois le diamètre de la case et la longueur AB du prisme droit.

<div style="display:flex; align-items:flex-start; gap:2rem; width:fit-content; margin:0 auto;">

    <div>
        <img src="/mabemat/figures/3e/chapitre-12/4-1.png"
             alt="figure 1"
             style="max-height:200px; max-width:100%;">
    </div>

    <div>
        <img src="/mabemat/figures/3e/chapitre-12/4-2.png"
             alt="figure 2"
             style="max-height:200px; max-width:100%;">
    </div>

</div>

---Q---
---PART---
<strong>Partie 1 :</strong>

<br>

Dans cette partie, on considère que $x = 6$ m.

<br>
---Q---
Montrer que le volume exact de la partie cylindrique de la case est $18\pi$ m$^3$.
---CORR---
Le diamètre a une longueur de 6&nbsp;m. Donc avec $r = 3$, le volume du cylindre est égal à :

$\pi \times 3^2 \times 2 = 18\pi$&nbsp;m$^3$.
---Q---
Calculer le volume de la partie conique. Arrondir à l'unité.
---CORR---
Le volume de la partie conique est égale à : 

$\dfrac{1}{3} \times \pi \times 3^2 \times 1 = 3\pi$&nbsp;m$^3$, soit $\approx 9,42$ ou 9&nbsp;m$^3$ à l'unité près.
---Q---
En déduire que le volume total de la case est environ $66$&nbsp;m$^3$.


<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:none;border-left:1px solid #8B3C52;border-right:none"><strong>Rappels :</strong></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:none;border-left:none;border-right:none">Cylindre rayon de base $r$ et de hauteur $h$</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:none;border-left:none;border-right:1px solid #8B3C52">Cône
rayon de base $r$ et de hauteur $h$</td>
</tr>

</tr>
<tr>
<td style="text-align:center;padding:4px 10px;border-top:none;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:none"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:1px solid #8B3C52;border-left:none;border-right:none">$\text{Volume} =\pi \times r^2 \times h$</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:1px solid #8B3C52;border-left:none;border-right:1px solid #8B3C52">$\text{Volume} =\dfrac{1}{3} \times \pi \times r^2 \times h$</td>
</tr>
</table>
---CORR---
Le volume de la case est donc égal à : 

$18\pi + 3\pi = 21\pi \approx 65,97$, soit $\approx 66$&nbsp;m$^3$ à l'unité près.

---Q---
---PART---
<strong>Partie 2 :</strong>

Dans cette partie, le diamètre est exprimé en mètre, le volume en m$^3$.

---Q---
Sur le graphique ci-dessous, on a représenté la fonction qui donne le volume total de la case en fonction de son diamètre $x$.<br>
    <strong>Volume de la case en fonction de</strong> $x$ :
<img src="/mabemat/figures/3e/chapitre-12/4-5.png" alt="figure 1" style="display:block; margin:0 auto; max-height:400px; max-width:100%;">

Par lecture graphique, donner une valeur approchée du volume d'une case de $7$ m de diamètre.<br>

Tracer des pointillés permettant la lecture.
---CORR---
On lit sur le graphique ci-dessus $V(7) \approx 90$&nbsp;m$^3$.
---Q---
La fonction qui donne le volume de la maison en forme de prisme droit est définie par 

$$V(x) = 12,5 x.$$

Calculer l'image de 8 par la fonction $V$.
---CORR---
On a $V(8) = 12,5 \times 8 = 100$&nbsp;m$^3$.
---Q---
Quelle est la nature de la fonction $V$ ?
---CORR---
La fonction $V$ est une fonction linéaire.
---Q---
Sur le graphique ci-dessus, tracer la représentation graphique de la fonction $V$.
---CORR---
La représentation graphique de la fonction linéaire $V$ est une droite contenant l'origine.
<img src="/mabemat/figures/3e/chapitre-12/4c-1.png" alt="figure 1" style="display:block; margin:0 auto; max-height:400px; max-width:100%;">
---Q---
Pour des raisons pratiques, la valeur maximale de $x$ est de $6$ m. Nolan souhaite choisir la construction qui lui offre le plus grand volume.<br>

Quelle construction devra-t-il choisir ? Justifier.
---CORR---
$\bullet$  Le plus grand volume de la maison est donc $V(6) = 12,5 \times 6 = 75$&nbsp;m$^3$.<br>

$\bullet$  Le plus grand volume de la case est donc $V(6) \approx 66$&nbsp;m$^3$.<br>

Nolan choisira donc la maison.
{{< /brevet-exo >}}
