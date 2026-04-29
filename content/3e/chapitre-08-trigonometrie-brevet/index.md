---
title: "Exercices type brevet - Trigonométrie"
layout: "brevet"
level: "3e"
chapter: "chapitre-08-trigonometrie"
has_brevetcorr: true
---
{{< brevet-exo num="1" source="DNB Septembre 2025 Métropole" >}}
---INTRO---
<div style="display:flex; justify-content:flex-start; align-items:flex-start; gap:12rem; margin:1rem 0;">

    <!-- Colonne texte -->
    <div style="max-width:500px;">
        <ul style="margin:0.5rem 0 0.5rem 1.2rem;">
            <li>ABC un triangle rectangle en B ;</li>
            <li>les points B, E et C sont alignés ainsi que les points A, D, F et C ;</li>
            <li>les droites (BD) et (EF) sont parallèles ;</li>
            <li>AB = 10 cm, BC = 7,5 cm, BE = 3 cm, BD = 6 cm et CF = 2,7 cm.</li>
        </ul>
    </div>

    <!-- Colonne image -->
    <div>
        <img src="/mabemat/figures/3e/chapitre-08/1-1.svg"
             alt="figure 1"
             style="max-height:400px; max-width:100%;">
    </div>

</div>

---Q---

---SUB-Q---
Montrer que CE $= 4 ,5$ cm.
---SUB-CORR---
De BE + EC = BC, soit $3 + \text{EC} = 7,5$, on déduit que EC = CE $= 7,5 - 3 = 4,5$&nbsp;cm.
---SUB-Q---
Démontrer que la longueur EF est égale à $3,6$ cm.
---SUB-CORR---
C, E et B d'une part, C, F et D sont alignés et les droites (EF) et (BD) sont parallèles.<br>
D'après le théorème de Thalès :<br>

$\dfrac{\text{CE}}{\text{CB}} = \dfrac{\text{CF}}{\text{CD}}$, soit $\dfrac{4,5}{7,5} = \dfrac{\text{EF}}{6}$.<br>

On en déduit que EF $ = 6 \times \dfrac{4,5}{7,5} = 3,6$&nbsp;cm.
---Q---
Démontrer que le triangle CEF est rectangle en F.
---CORR---
On a CF$^2 = 2,7^2 = 7,29$ ; <br>

EF$^2 = 3,6^2 = 12,96$ ;
<br>
CE$^2 = 4,5^2 = 20,25$.<br>

Or $7,29 + 12,96 = 20,25$ ou encore $\text{EF}^2 + \text{CE}^2 = \text{CE}^2$.<br>
D'après la réciproque du théorème de Pythagore, cette égalité montre que EFC est un triangle rectangle en F.
---Q---

---SUB-Q---
Calculer la mesure de l'angle $\widehat{\text{BCA}}$. Arrondir au degré.
---SUB-CORR---
Dans le triangle ABC rectangle en B, on a $\tan \widehat{\text{BCA}} = \dfrac{\text{AB}}{\text{BC}} = \dfrac{10}{7,5} \approx 1,333$.<br>

La calculatrice donne $\widehat{\text{BCA}} \approx 53,12$&nbsp;°, soit environ $53$ ° au degré près.
---SUB-Q---
Les triangles ABC et CEF sont-ils semblables ?

---SUB-CORR---
Les triangles ABC et EFC ont deux angles de même mesure : les angles droits en B et respectivement et l'angle $\widehat{\text{C}}$.<br>
Leurs troisièmes angles ont donc même mesure et ces deux triangles sont semblables.


{{< /brevet-exo >}}

{{< brevet-exo num="2" source="DNB Septembre 2024 Polynésie" >}}
---INTRO---
<div style="display:flex; justify-content:flex-start; align-items:flex-start; gap:12rem; margin:1rem 0;">

    <!-- Colonne texte -->
    <div style="max-width:500px;">
        Sur la figure ci-contre, qui n'est pas à l'échelle,

        <ul style="margin:0.5rem 0 0.5rem 1.2rem;">
            <li>le triangle ONM est rectangle en N,</li>
            <li>le triangle OPQ est rectangle en P,</li>
            <li>le triangle ORS est rectangle en R,</li>
            <li>ON = 6 cm et $\widehat{\text{MON}} = 32°$.</li>
            <li>P est un point du segment [OM] et R est un point du segment [OQ].</li>
        </ul>
    </div>

    <!-- Colonne image -->
    <div>
        <img src="/mabemat/figures/3e/chapitre-08/2-1.svg"
             alt="figure 1"
             style="max-height:400px; max-width:100%;">
    </div>

</div>

---Q---
Calculer la mesure de la longueur MN. On donnera une valeur approchée au millimètre près.
---CORR---
Dans le triangle OMN rectangle en N, on a :<br>

$\tan \left (\widehat{\text{MON}}\right ) = \dfrac{\text{MN}}{\text{ON}}$<br> 
Donc
$\text{MN} = \text{ON}\times \tan \left (\widehat{\text{MON}}\right ) = 6 \times \tan \left (32\right ) \approx 3,7$.
---Q---
On donne PQ $= 2,5$ cm et OQ $= 6,5$ cm. Montrer que OP $= 6$ cm.
---CORR---
On applique le théorème de Pythagore dans le triangle OPQ rectangle en P :<br>

$\text{OP}^2 + \text{PQ}^2 =\text{OQ}^2$
<br>On a : $\text{OP}^2 =\text{OQ}^2 -\text{PQ}^2 = 6,5^2-2,5^2 = 42,25 - 6,25 = 36$ <br>
Donc $\text{OP} = 6$&nbsp;cm.
---Q---
Montrer que les triangles ONM et OPQ ne sont pas des triangles égaux.
---CORR---
$\text{ON} = \text{OP} = 6$ mais $\text{MN}\approx 3,7$ et$\text{PQ}=2,5$ <br>
Donc $\text{MN} \neq \text{PQ}$.<br>
Les triangles rectangles ONM et OPQ n'ont pas leurs côtés de l'angle droit égaux, donc ce ne sont pas des triangles égaux.
---Q---
Sachant que le triangle OPQ est un agrandissement du triangle ORS et que OS $= 3,25$ cm, calculer l'aire du triangle ORS.

---CORR---
On sait que le triangle OPQ est un agrandissement du triangle ORS et que OS $= 3,25$ cm.<br>

OS est l'hypoténuse du triangle ORS et OS $=3,25$&nbsp;cm. <br>
OQ est l'hypoténuse du triangle OPQ et OQ $=6,5$&nbsp;cm. <br>
Comme $6,5=2\times 3,25$, on peut dire que le triangle OPQ est un agrandissement du triangle ORS de facteur 2, et donc que l'aire du triangle OPQ est 4 fois plus grande que l'aire du triangle ORS.<br>

L'aire du triangle OPQ est: $\dfrac{\text{OP}\times \text{PQ}}{2} = \dfrac{6\times 2,5}{2}= 7,5$.<br>

L'aire du triangle OPQ est 4 fois plus grande que l'aire du triangle ORS donc l'aire du triangle ORS est 4 fois plus petite que l'aire du triangle OPQ, donc est égale à:<br>
$\dfrac{7,5}{4}$ c'est-à-dire $1{,}875$&nbsp;cm$^2$.

{{< /brevet-exo >}}

{{< brevet-exo num="3" source="DNB Juin 2024 Polynésie" >}}
---INTRO---
<br>

La construction du Centre Aquatique Olympique de Saint-Denis a débuté en 2021 pour accueillir les épreuves de natation artistique des jeux Olympiques de Paris 2024.<br>

Alyssa et Jules visitent le Centre Aquatique Olympique et s'installent dans les gradins.<br>

On a schématisé leurs positions par rapport à la piscine olympique sur la figure ci-dessous, qui modélise la situation : Alyssa est installée dans les gradins Nord au point A et Jules est assis dans les gradins Sud au point J.<br>

<em>La figure n'est pas à l'échelle.</em><br>

<img src="/mabemat/figures/3e/chapitre-08/3-1.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:700px; max-width:100%;">


On donne : AC = FJ $= 15$ m ; BC $= 27$ m ; FH $= 7$ m ; EF $= 18$ m.<br>

Les points F, J et D sont alignés.<br>

Les points F, H, et E sont alignés.<br>

Les points C, B, D, E sont alignés.

   
---Q---
Jules et Alyssa discutent entre eux pour savoir qui est le mieux placé pour assister à l'événement.
---SUB-Q---
Calculer la distance entre Alyssa et le bord de la piscine, c'est-à-dire calculer la longueur AB.<br>
		
Arrondir le résultat au mètre près.
---SUB-CORR---
Dans le triangle ABC rectangle en C, le théorème de Pythagore permet d'obtenir :<br>
$AB^2 =  AC^2 +  CB^2 = 15^2 + 27^2 = 225 + 729 = 954$, <br>
D'où QB $= \sqrt{954} = \sqrt{9 \times 106} = \sqrt{6} \times \sqrt{106} = 3\sqrt{6} \approx 30,9$&nbsp;m soit 31&nbsp;m au mètre près.
---SUB-Q---
Vérifier que la distance entre Jules et le bord de la piscine, c'est-à-dire la longueur JD, est de $24$&nbsp;m, arrondie au mètre près.
---SUB-CORR---
D'après la figure les droites (JH) et (DE) toutes deux perpendiculaires à la droite (EF) sont parallèles.<br>
		
Avec l'alignement respectif des points F, J D d'une part et F, H et E de l'autre nous avons don une configuration de Thalès qui permet d'écrire en particulier :<br>

$\dfrac{\text{FJ}}{\text{FD}} = \dfrac{\text{FH}}{\text{FE}}$ <br>
On a : $\dfrac{15}{\text{FD}} = \dfrac{7}{18}$ <br>
D'où $15 \times 18 = 7 \text{FD}$ <br>
On a donc $\text{FD} : \dfrac{15 \times 18}{7}$.<br>

On en déduit que JD $ = \text{FD} - \text{FJ}$<br>
Soit JD $= \dfrac{15 \times 18}{7} - 15 = \dfrac{15 \times 18 - 15 \times 7}{7} = \dfrac{15 \times, 11}{7} \approx 23,6$, soit environ 24&nbsp;m.
---SUB-Q---
En déduire lequel des deux amis est le plus proche d'un bord de la piscine.
---SUB-CORR---
Jules est donc le plus proche de la piscine.
---Q---
Pour respecter les normes de sécurité, l'angle d'inclinaison $\widehat{\text{ABC}}$ des gradins Nord ne doit pas dépasser $35$ °. <br>
Les gradins Nord respectent-ils cette norme ?
---CORR---
Dans le triangle ABC rectangle en C, on a : $\tan \widehat{\text{ABC}} = \dfrac{\text{AC}}{\text{BC}} = \dfrac{15}{27} = \dfrac59$.<br>

La calculatrice donne $\widehat{\text{ABC}} \approx 29,1 < 35$ : la norme est respectée
---Q---
Le toit du Centre Aquatique Olympique a une surface de 5&thinsp;000&nbsp;m$^2$.<br>

On estime que 4&thinsp;678,4&nbsp;m$^2$ de ce toit est recouvert de panneaux photovoltaïques. <br>

Voici les caractéristiques d'un panneau photovoltaïque standard fournies par le constructeur:<br>

<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:none"><img src="/mabemat/figures/3e/chapitre-08/3-2.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:300px; max-width:100%;"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:none;border-right:1px solid #8B3C52"><strong>Dimensions :</strong> 1 m de large et 1,7 m de long 

<strong>Énergie produite:</strong> environ $350$&nbsp;kWh par an</td>
</tr>
</table>

Montrer que la quantité annuelle d'énergie produite par l'ensemble des panneaux photovoltaïques du toit du Centre Aquatique Olympique est de 963&thinsp;200 kilowattheures (kWh).
---CORR---
Un panneau a une aire de 1,7&nbsp;m$^2$, donc  $\dfrac{4\,678{,}4}{1,7}  = 2\,752$ est le nombre de panneaux.<br>

Ces 2&thinsp;752 panneaux produiront $2\,752 \times 350 = 963\,200$&nbsp;kWh par an.
---Q---
La température règlementaire de l'eau contenue dans la piscine lors des jeux Olympiques doit être comprise entre 25°s et 28°s. Pour respecter cette réglementation, on souhaite que l'eau contenue dans la piscine olympique de Saint-Denis soit à une température de 26°s. <br>
On admet que l'eau contenue dans cette piscine occupe un pavé droit dont les dimensions sont :<br>

<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>Longueur : 50 m</li><li>Largeur: 25 m</li><li>Profondeur: 3 m</li></ul>

On suppose qu'avant la première mise en chauffe de la piscine olympique, l'eau est à 18°s.<br>

On estime qu'il faut environ $9,3$ kWh pour chauffer 1 m$^3$ d'eau de 18°s jusqu'à 26°s.<br>

Quelle quantité d'énergie, en kWh, sera nécessaire pour chauffer toute l'eau de la piscine olympique jusqu'à 26°s ?


---CORR---
Le volume d'eau dans  la piscine est : $50 \times 25 \times 3 = 1\,250 \times 3 = 3\,750~\text{m}^3$.<br>

Chaque m$^3$ d'eau nécessitant 9,3&nbsp;kWh, il faudra pour chauffer la piscine :

$$3\,750 \times 9,3 = 34\,875~\text{kWh}.$$


{{< /brevet-exo >}}

{{< brevet-exo num="4" source="DNB Juin 2023 Métropole" >}}
---INTRO---
On veut fabriquer un escalier en bois de hauteur 272 cm.<br>

La figure ci-dessous représente une vue de profil de cet escalier.<br>

La hauteur d'une marche est de 17 cm.<br>

La profondeur d'une marche pour poser le pied mesure 27 cm.

    <img src="/mabemat/figures/3e/chapitre-08/4-1.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:500px; max-width:100%;">
---Q---

---SUB-Q---
Montrer qu'il faut prévoir 16 marches pour construire cet escalier.
---SUB-CORR---
Il faut compter $\dfrac{272}{17} = 16$ marches.
---SUB-Q---
Montrer que la longueur AB est égale à 432 cm.
---SUB-CORR---
16 marches d'une profondeur de 27&nbsp;cm donne une longueur AB $= 16 \times 27 = 432$&nbsp;cm.
---Q---
Pour permettre une montée agréable, l'angle $\widehat{\mathrm{BAC}}$ doit être compris entre $25^{\circ}$ et $40^{\circ}$.
---SUB-Q---
Calculer la mesure de l'angle $\widehat{\mathrm{BAC}}$, arrondie au degré près.
---SUB-CORR---
Dans le triangle ABC, rectangle en B, la définition de la tangente  nous permet d'écrire :
$$\tan \widehat{\text{BAC}} = \dfrac{\text{BC}}{\text{AB}} = \dfrac{272}{432} \approx 0{,}6296$$

La calculatrice donne alors $\widehat{\text{BAC}} \approx 32,2$, d'où : $\widehat{\text{BAC}} \approx 32$ ° au degré près.
---SUB-Q---
L'escalier permet-il une montée agréable ?
---SUB-CORR---
Comme $25 < 32 < 40$, on peut prévoir une montée agréable.
---Q---
On rédige le programme ci-contre avec le logiciel Scratch pour dessiner cet escalier.<br>
	(1 cm dans la réalité est représenté par 1 pas dans le programme.)<br>

	<strong>Recopier</strong> les lignes $5,6,7$ et 9 <strong>sur la copie</strong> en les complétant.
	
	<span class="brevet-scratch"><img src="/mabemat/figures/3e/chapitre-08/4-2.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:400px; max-width:100%;">
</span>
---CORR---
5 &emsp; Répéter 16 fois<br>

6 &emsp; Tourner de 90 degrés<br>

7 &emsp; avancer de 17 pas<br>

8 &emsp; tourner de 90 degrés<br>

9 &emsp; avancer de 27 pas.<br>
{{< /brevet-exo >}}
