---
title: "Exercices type brevet - Pythagore et Thalès"
layout: "brevet"
level: "3e"
chapter: "chapitre-02-pythagore-et-thales"
has_brevetcorr: false
---
{{< brevet-exo num="1" source="DNB Juin 2014 Polynésie" >}}
---INTRO---
Pour construire un mur vertical, il faut parfois utiliser un coffrage et un étayage qui maintiendra la structure verticale le temps que le béton sèche. Cet étayage peut se représenter par le schéma ci-dessous.<br><br>
Les poutres de fer sont coupées et fixées de façon que :
<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>les segments [AB] et [AE] sont perpendiculaires ;</li><li>C est situé sur la barre [AB] ;</li><li>D est situé sur la barre [BE] ;</li><li>AB = 3,5 m ; AE = 2,625 m et CD = 1,5 m.</li></ul>
<img src="/mabemat/figures/3e/chapitre-02/1-1.svg" alt="Schéma de l'étayage" style="display:block; margin:1rem auto; max-height:240px; max-width:100%;">
---Q---
Calculer BE.
---CORR---
Les segments [AB] et [AE] sont perpendiculaires, donc le triangle ABE est rectangle en A.<br><br>
D'après le théorème de Pythagore :
$$\begin{aligned}
\text{BE}^2 &= \text{AB}^2 + \text{AE}^2 \\
\text{BE}^2 &= 3{,}5^2 + 2{,}625^2 \\
\text{BE}^2 &= 12{,}25 + 6{,}890625 \\
\text{BE}^2 &= 19{,}140625
\end{aligned}$$
Donc $\text{BE} = \sqrt{19{,}140625} = 4{,}375$.<br><br>
La longueur BE est égale à 4,375 m.
---Q---
Les barres [CD] et [AE] doivent être parallèles.<br><br>
À quelle distance de B faut-il placer le point C ?
---CORR---
Le point C appartient au segment [BA] et le point D appartient au segment [BE] ; de plus, les droites (CD) et (AE) sont parallèles.<br><br>
D'après le théorème de Thalès :
$$\dfrac{\text{BC}}{\text{BA}} = \dfrac{\text{BD}}{\text{BE}} = \dfrac{\text{CD}}{\text{AE}}$$
c'est-à-dire :
$$\dfrac{\text{BC}}{3{,}5} = \dfrac{\text{BD}}{4{,}375} = \dfrac{1{,}5}{2{,}625}$$
En utilisant la première et la troisième fraction :
$$\text{BC} = \dfrac{3{,}5 \times 1{,}5}{2{,}625} = \dfrac{5{,}25}{2{,}625} = 2$$
Il faut donc placer le point C à 2 m du point B sur la barre [AB].
{{< /brevet-exo >}}

{{< brevet-exo num="2" source="DNB Septembre 2015 Polynésie" >}}
---INTRO---
Germaine souhaite réaliser un escalier pour monter à l'étage de son appartement.<br><br>
Elle a besoin pour cela de connaître les dimensions du limon (planche dans laquelle viendront se fixer les marches de cet escalier). Elle réalise le croquis ci-dessous.
<img src="/mabemat/figures/3e/chapitre-02/2-1.svg" alt="Croquis de l'escalier et du limon" style="display:block; margin:1rem auto; max-height:280px; max-width:100%;">
Sur ce croquis :
<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>le limon est représenté par le quadrilatère ACDE ;</li><li>les droites (AC) et (ED) sont parallèles ;</li><li>les points E, A et B sont alignés ;</li><li>les points B, C et D sont alignés.</li></ul>
---Q---
Prouver que ED = 450 cm.
---CORR---
Le point C se situe à la hauteur sous plafond et le point D au-dessus de la dalle, donc :
$$\text{BD} = \text{BC} + \text{CD} = 250 + 20 = 270 \text{ cm}$$
Le triangle BDE est rectangle en B. D'après le théorème de Pythagore :
$$\begin{aligned}
\text{ED}^2 &= \text{EB}^2 + \text{BD}^2 \\
\text{ED}^2 &= 360^2 + 270^2 \\
\text{ED}^2 &= 129\,600 + 72\,900 \\
\text{ED}^2 &= 202\,500
\end{aligned}$$
Donc $\text{ED} = \sqrt{202\,500} = 450$ cm.
---Q---
Calculer les deux dimensions AC et AE de cette planche. Arrondir les résultats au centimètre.
---CORR---
Les points E, A, B sont alignés, les points D, C, B sont alignés et les droites (AC) et (ED) sont parallèles.<br><br>
D'après le théorème de Thalès :
$$\dfrac{\text{BA}}{\text{BE}} = \dfrac{\text{BC}}{\text{BD}} = \dfrac{\text{AC}}{\text{ED}}$$
c'est-à-dire :
$$\dfrac{\text{BA}}{360} = \dfrac{250}{270} = \dfrac{\text{AC}}{450}$$
En utilisant la deuxième et la troisième fraction :
$$\text{AC} = \dfrac{250 \times 450}{270} = \dfrac{112\,500}{270} \approx 416{,}67$$
La longueur AC mesure environ 417 cm.<br><br>
En utilisant la première et la deuxième fraction :
$$\text{BA} = \dfrac{360 \times 250}{270} = \dfrac{90\,000}{270} \approx 333{,}33$$
Comme A appartient au segment [BE], on en déduit :
$$\text{AE} = \text{BE} - \text{BA} \approx 360 - 333{,}33 \approx 26{,}67$$
La longueur AE mesure environ 27 cm.
{{< /brevet-exo >}}

{{< brevet-exo num="3" source="DNB Septembre 2016 Métropole" >}}
---INTRO---
Sur la figure ci-dessous, le point J appartient au segment [IM] et le point K appartient au segment [IL].<br><br>
Les longueurs sont données en mètres.
<img src="/mabemat/figures/3e/chapitre-02/3-1.svg" alt="Figure des triangles IKJ et ILM" style="display:block; margin:1rem auto; max-height:300px; max-width:100%;">
---Q---
Montrer que IKJ est un triangle rectangle.
---CORR---
D'une part : $\text{IJ}^2 = 4^2 = 16$.<br><br>
D'autre part : $\text{IK}^2 + \text{KJ}^2 = 3{,}2^2 + 2{,}4^2 = 10{,}24 + 5{,}76 = 16$.<br><br>
On a donc $\text{IJ}^2 = \text{IK}^2 + \text{KJ}^2$ : d'après la réciproque du théorème de Pythagore, le triangle IKJ est rectangle en K.
---Q---
Montrer que LM est égal à 3,75 m.
---CORR---
Les droites (KJ) et (LM) sont toutes les deux perpendiculaires à la droite (IL), donc elles sont parallèles.<br><br>
De plus, le point K appartient au segment [IL] et le point J appartient au segment [IM].<br><br>
D'après le théorème de Thalès :
$$\dfrac{\text{IK}}{\text{IL}} = \dfrac{\text{IJ}}{\text{IM}} = \dfrac{\text{KJ}}{\text{LM}}$$
c'est-à-dire :
$$\dfrac{3{,}2}{5} = \dfrac{4}{\text{IM}} = \dfrac{2{,}4}{\text{LM}}$$
En utilisant la première et la troisième fraction :
$$\text{LM} = \dfrac{2{,}4 \times 5}{3{,}2} = \dfrac{12}{3{,}2} = 3{,}75$$
La longueur LM est bien égale à 3,75 m.
---Q---
Calculer la longueur KM au centimètre près.
---CORR---
Comme K appartient au segment [IL], on a $\text{KL} = \text{IL} - \text{IK} = 5 - 3{,}2 = 1{,}8$ m.<br><br>
Le triangle KLM est rectangle en L. D'après le théorème de Pythagore :
$$\begin{aligned}
\text{KM}^2 &= \text{KL}^2 + \text{LM}^2 \\
\text{KM}^2 &= 1{,}8^2 + 3{,}75^2 \\
\text{KM}^2 &= 3{,}24 + 14{,}0625 \\
\text{KM}^2 &= 17{,}3025
\end{aligned}$$
Donc $\text{KM} = \sqrt{17{,}3025} \approx 4{,}16$ m au centimètre près.
{{< /brevet-exo >}}

{{< brevet-exo num="4" source="DNB Décembre 2017 Wallis-et-Futuna" >}}
---INTRO---
Pour soutenir la lutte contre l'obésité, un collège décide d'organiser une course.<br><br>
Un plan est remis aux élèves participant à l'épreuve. Les élèves doivent partir du point A et se rendre au point E en passant par les points B, C et D.<br><br>
C est le point d'intersection des droites (AE) et (BD). La figure ci-dessous résume le plan, elle n'est pas à l'échelle.
<img src="/mabemat/figures/3e/chapitre-02/4-1.svg" alt="Plan du parcours ABCDE" style="display:block; margin:1rem auto; max-height:260px; max-width:100%;">
On donne AC $=400$ m, EC $=1\,000$ m et AB $=300$ m.
---Q---
Calculer BC.
---CORR---
Le triangle ABC est rectangle en A. D'après le théorème de Pythagore :
$$\begin{aligned}
\text{BC}^2 &= \text{AB}^2 + \text{AC}^2 \\
\text{BC}^2 &= 300^2 + 400^2 \\
\text{BC}^2 &= 90\,000 + 160\,000 \\
\text{BC}^2 &= 250\,000
\end{aligned}$$
Donc $\text{BC} = \sqrt{250\,000} = 500$ m.
---Q---
Montrer que ED $=750$ m.
---CORR---
Les droites (AB) et (ED) sont toutes les deux perpendiculaires à la droite (AE), donc elles sont parallèles.<br><br>
De plus, les points A, C, E sont alignés et les points B, C, D sont alignés.<br><br>
D'après le théorème de Thalès :
$$\dfrac{\text{CA}}{\text{CE}} = \dfrac{\text{CB}}{\text{CD}} = \dfrac{\text{AB}}{\text{ED}}$$
c'est-à-dire :
$$\dfrac{400}{1\,000} = \dfrac{500}{\text{CD}} = \dfrac{300}{\text{ED}}$$
En utilisant la première et la troisième fraction :
$$\text{ED} = \dfrac{300 \times 1\,000}{400} = \dfrac{300\,000}{400} = 750$$
La longueur ED est bien égale à 750 m.
---Q---
Déterminer la longueur réelle du parcours ABCDE.
---CORR---
En utilisant la première et la deuxième fraction de l'égalité précédente :
$$\text{CD} = \dfrac{500 \times 1\,000}{400} = \dfrac{500\,000}{400} = 1\,250$$
La longueur du parcours est donc :
$$\text{AB} + \text{BC} + \text{CD} + \text{DE} = 300 + 500 + 1\,250 + 750 = 2\,800$$
Le parcours ABCDE mesure 2 800 m, c'est-à-dire 2,8 km.
{{< /brevet-exo >}}

{{< brevet-exo num="5" source="DNB Septembre 2017 Métropole" >}}
---INTRO---
<em>Pour illustrer l'exercice, la figure ci-dessous a été faite à main levée.</em>
<img src="/mabemat/figures/3e/chapitre-02/5-1.svg" alt="Figure à main levée" style="display:block; margin:1rem auto; max-height:300px; max-width:100%;">
Les points D, F, A et B sont alignés, ainsi que les points E, G, A et C.<br><br>
De plus, les droites (DE) et (FG) sont parallèles.
---Q---
Montrer que le triangle AFG est un triangle rectangle.
---CORR---
D'une part : $\text{AF}^2 = 5^2 = 25$.<br><br>
D'autre part : $\text{AG}^2 + \text{GF}^2 = 4^2 + 3^2 = 16 + 9 = 25$.<br><br>
On a donc $\text{AF}^2 = \text{AG}^2 + \text{GF}^2$ : d'après la réciproque du théorème de Pythagore, le triangle AFG est rectangle en G.
---Q---
Calculer la longueur du segment [AD]. En déduire la longueur du segment [FD].
---CORR---
La droite (AG) est perpendiculaire à la droite (FG) ; or les droites (FG) et (DE) sont parallèles, donc la droite (AG) est aussi perpendiculaire à la droite (DE).<br><br>
Comme les points E, G, A sont alignés, la droite (AG) est aussi la droite (AE) : le triangle ADE est donc rectangle en E.<br><br>
Comme G appartient au segment [EA], on a $\text{AE} = \text{EG} + \text{GA} = 6{,}8 + 4 = 10{,}8$ cm.<br><br>
D'après le théorème de Pythagore :
$$\begin{aligned}
\text{AD}^2 &= \text{AE}^2 + \text{ED}^2 \\
\text{AD}^2 &= 10{,}8^2 + 8{,}1^2 \\
\text{AD}^2 &= 116{,}64 + 65{,}61 \\
\text{AD}^2 &= 182{,}25
\end{aligned}$$
Donc $\text{AD} = \sqrt{182{,}25} = 13{,}5$ cm.<br><br>
Comme F appartient au segment [AD], on en déduit :
$$\text{FD} = \text{AD} - \text{AF} = 13{,}5 - 5 = 8{,}5 \text{ cm}$$
---Q---
Les droites (FG) et (BC) sont-elles parallèles ? Justifier.
---CORR---
On calcule séparément les deux quotients :
$$\dfrac{\text{AG}}{\text{AC}} = \dfrac{4}{5} = 0{,}8
\qquad \text{et} \qquad
\dfrac{\text{AF}}{\text{AB}} = \dfrac{5}{6{,}25} = 0{,}8$$
On a donc $\dfrac{\text{AG}}{\text{AC}} = \dfrac{\text{AF}}{\text{AB}}$.<br><br>
De plus, les points G, A, C d'une part et les points F, A, B d'autre part sont alignés dans le même ordre.<br><br>
D'après la réciproque du théorème de Thalès, les droites (FG) et (BC) sont parallèles.
{{< /brevet-exo >}}
