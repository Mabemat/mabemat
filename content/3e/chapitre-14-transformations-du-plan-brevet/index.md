---
title: "Exercices type brevet - Transformations du plan"
layout: "brevet"
level: "3e"
chapter: "chapitre-14-transformations-du-plan"
---
{{< brevet-exo num="1" source="DNB Septembre 2022 Métropole" >}}
---INTRO---
La figure ci-dessous est un pavage constitué de cerfs-volants. <br>

Les triangles SLP et PLA ainsi formés sont des triangles équilatéraux.

<img src="/mabemat/figures/3e/chapitre-14/brevet1.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:200px; max-width:100%;">

---Q---
---PART---
Partie A
---Q---
Déterminer la mesure de l'angle $\widehat{\text{PSL}}$.
---CORR---
Tous les angles d'un triangle équilatéral ont pour mesure $\dfrac{180}{3} = 60°$C.
---Q---
Quelle est l'image du cerf-volant 2 par la symétrie d'axe $(PL)$? On ne demande pas de justification.
---CORR---
L'image du cerf-volant 2 par la symétrie d'axe (PL) est le cerf-volant 5.
---Q---
Déterminer par quelle transformation du plan le cerf-volant 1 devient le cerf-volant 6 ? On ne demande pas de justification.
---CORR---
Le cerf-volant 1 devient le cerf-volant 6  par la symétrie de centre J.
---Q---
---PART---
Partie B
---Q---
Dans cette partie, on se propose de construire le cerf-volant ci-dessous.
<img src="/mabemat/figures/3e/chapitre-14/brevet2.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:200px; max-width:100%;">


Essya, Nicolas et Tiago souhaitent construire cette figure à l'aide d'un logiciel de programmation. <br>

Ils écrivent tous un programme « Cerf-volant  » différent.

<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Programme de Essya</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Programme de Nicolas</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Programme de Tyago</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"><img src="/mabemat/figures/3e/chapitre-14/scratch1.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:200px; max-width:100%;"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"><img src="/mabemat/figures/3e/chapitre-14/scratch2.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:200px; max-width:100%;"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"><img src="/mabemat/figures/3e/chapitre-14/scratch3.svg" alt="figure 1" style="display:block; margin:0 auto; max-height:200px; max-width:100%;"></td>
</tr>
</table>

Tracer le programme « Cerf-Volant  » de Nicolas, en prenant $1$&nbsp;cm pour $100$ pas.
---CORR---
<br><br>

<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Programme de Essya</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Programme de Nicolas</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Programme de Tyago</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"><span class="brevet-scratch">[Bloc Scratch — voir l'énoncé PDF]</span></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"><span class="brevet-scratch">[Bloc Scratch — voir l'énoncé PDF]</span></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"><span class="brevet-scratch">[Bloc Scratch — voir l'énoncé PDF]</span></td>
</tr>
</table>

Le programme de Nicolas permet de dessiner un triangle équilatéral de côté 300 pas.
---Q---
Un élève a écrit le script correct. Donner le nom de cet élève en justifiant la réponse.

---CORR---
Le programme de Tyago ne convient pas car après avoir dessiné un petit côté et tourner de $60\degres{}$ on avance de 300 pas au lieu de 173 pas à nouveau.

Si on part du petit côté supérieur il faut ensuite tourner à gauche de $90\degres{}$ et non de $60\degres{}$.

Ce n'est pas le programme de Nicolas : il ne reste plus que le programme d'Essya.
{{< /brevet-exo >}}

{{< brevet-exo num="2" source="DNB Septembre 2022 Polynésie" >}}
---INTRO---
On utilise un logiciel de programmation.  <br>

On rappelle que « s'orienter à $0\degres{}$  » signifie qu'on oriente le stylo vers le haut. <br>

On considère les deux scripts suivants: <br>

<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none">1cScript 1</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none">1cScript 2</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none"><span class="brevet-scratch">[Bloc Scratch — voir l'énoncé PDF]</span></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none"><span class="brevet-scratch">[Bloc Scratch — voir l'énoncé PDF]</span></td>
</tr>
</table>

<br>
---Q---
On exécute le script 1 ci-dessus. <br>

Représenter le chemin parcouru par le stylo sur le document à rendre avec la copie. <br>



Chaque côté de carreau mesure 20 pixels. <br>

La position de départ du stylo est indiquée sur la figure ci-contre.
---CORR---
On exécute le script 1 ci-dessus. <br>

Représenter le chemin parcouru par le stylo sur le document à rendre avec la copie. <br>

Le tracé est en rouge. <br>



Chaque côté de carreau mesure 20 pixels. <br>

La position de départ du stylo est indiquée sur la figure ci-contre.
---Q---
Quel dessin parmi les trois ci-dessous correspond au script 2 ?  <br>

On expliquera pourquoi les deux autres dessins ne correspondent pas au script 2. <br>

Chaque côté de carreau mesure 20 pixels. <br>

<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none"><strong>Dessin 1</strong></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none"><strong>Dessin 2</strong></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none"><strong>Dessin 3</strong></td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none"></td>
</tr>
</table>
---CORR---
Le dessin 1  n'est  pas correct car après avoir avancé deux fois de 20 on doit avancer de 40. <br>

Le dessin 3  n'est  pas correct car on ne sedirige pas au départ vers le haut.
 <br>
Il reste donc le dessin 2 seul correct. <br>

<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none"><strong>Dessin 1</strong></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none"><strong>Dessin 2</strong></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none"><strong>Dessin 3</strong></td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:none;border-right:none"></td>
</tr>
</table>
---Q---
On souhaite maintenant obtenir le motif représenté sur le dessin 4 :  <br>

Compléter sans justifier les trois cases du script 3 donné en document à rendre avec la copie, permettant d'obtenir le dessin 4.

	
---CORR---
On souhaite maintenant obtenir le motif représenté sur le dessin 4 : 

	
	
	
	

	Compléter sans justifier les trois cases du script 3 donné à rendre avec la copie, permettant d'obtenir le dessin 4.

	Les compléments sont en rouge.

	

---Q---
À partir du motif représenté sur le dessin 4, on peut obtenir le pavage ci-dessous : <br>

Répondre aux questions suivantes sur votre copie en indiquant le numéro du motif qui convient (on ne demande pas de justifier la réponse) :
---SUB-Q---
Quelle est l'image du motif 1 par la translation qui transforme le point B en E ?
---SUB-CORR---
Quelle est l'image du motif 1 par la translation qui transforme le point B en E ? Le motif 5.
---SUB-Q---
Quelle est l'image du motif 1 par la symétrie de centre B ?
---SUB-CORR---
Quelle est l'image du motif 1 par la symétrie de centre B ? Le motif 9.
---SUB-Q---
Quelle est l'image du motif 16 par la symétrie de centre G ?
---SUB-CORR---
Quelle est l'image du motif 16 par la symétrie de centre G ? Le motif 12.
---SUB-Q---
Quelle est l'image du motif 2 par la symétrie d'axe (CG) ?
<br><br>
---SUB-CORR---
Quelle est l'image du motif 2 par la symétrie d'axe (CG) ? Le motif 5.

<br><br>
{{< /brevet-exo >}}

{{< brevet-exo num="3" source="DNB Juin 2021 Amérique du Nord" >}}
---INTRO---
<em>Dans cet exercice, aucune justification n'est demandée.</em>
		
		On a construit un carré ABCD. 
		
		
		
		On a construit le point O sur la droite (DB), à
		l'extérieur du segment [DB] et tel que : OB = AB.
		
		
		
		Le point H est le symétrique de D par rapport à O.
		
		<br><br>
		
		On a obtenu la figure ci-contre en utilisant plusieurs
		fois la même rotation de centre O et d'angle $45^{\circ}$.
		
		<br><br>
		
		La figure obtenue est symétrique par rapport à l'axe
		(DB) et par rapport au point O.
---Q---
Donner deux carrés différents, images l'un de l'autre par la symétrie axiale d'axe (DB).
---CORR---
Les carrés 8 et 2,  les carrés 6 et 4, les carrés 7 et 3 sont symétriques autour de l'axe (DB).
---Q---
Le carré [baseline=(x.base)](0,0) circle (7pt) node (x) 3; est-il l'image du carré [baseline=(x.base)](0,0) circle (7pt) node (x) 8; par la symétrie centrale de centre O ?
---CORR---
Les carrés 8 et 3 ne sont pas symétriques autour de O (leurs centres ne sont pas alignés avec O).
---Q---
On considère la rotation de centre O qui transforme le carré [baseline=(x.base)](0,0) circle (7pt) node (x) 1; en le carré [baseline=(x.base)](0,0) circle (7pt) node (x) 2;.
		
		Quelle est l'image du carré [baseline=(x.base)](0,0) circle (7pt) node (x) 8; par cette rotation ?
---CORR---
L'image du carré 8 par la rotation de centre O et d'angle $45^{\circ}$ est le carré 1.
---Q---
On considère la rotation de centre O qui transforme le carré [baseline=(x.base)](0,0) circle (7pt) node (x) 2; en le carré [baseline=(x.base)](0,0) circle (7pt) node (x) 5;.
		
		Préciser l'image du segment [EF] par cette rotation.

<br><br>
---CORR---
La rotation est la rotation de centre O et d'angle $135^{\circ}$. E donne H et F donne I, donc l'image de [EF] est le segment [HI].

<br><br>
{{< /brevet-exo >}}

{{< brevet-exo num="4" source="DNB Septembre 2020 Antilles - Guyane" >}}
---INTRO---
<br>

Dans cet exercice, le carré ABCD n'est pas représenté en vraie grandeur.

Aucune justification n'est attendue pour les questions 1. et 2. On attend des réponses justifiées pour la question 3.

<br>
---Q---
&nbsp;

On considère le carré ABCD de centre O représenté ci-contre, partagé en quatre polygones superposables, numérotés 1, 2, 3, et 4.
---SUB-Q---
Quelle est l'image du polygone 1 par la symétrie centrale de centre O ?
---SUB-CORR---
L'image du polygone 1 par la symétrie centrale de centre O est le polygone 3.
---SUB-Q---
Quelle est l'image du polygone 4 par la rotation de centre O qui transforme le polygone 1 en le polygone 2 ?

0.5cm
---SUB-CORR---
L'image du polygone 4 par la rotation de centre O qui transforme le polygone 1 en le polygone 2 est le polygone 1.
---Q---
La figure ci-dessous est une partie de pavage dont un motif de base est le carré ABCD de la question 1.

Quelle transformation partant du polygone 1 permet d'obtenir le polygone 5 ?
---CORR---
On passe du polygone 1 au  polygone 5 par la translation qui transforme $A$ en $B$.
---Q---
On souhaite faire imprimer ces motifs sur un tissu rectangulaire de longueur $315$ cm et de largeur $270$ cm.

On souhaite que le tissu soit entièrement recouvert par les carrés identiques à ABCD, sans découpe et de sorte que le côté du carré mesure un nombre entier de centimètres.
---SUB-Q---
Montrer qu'on peut choisir des carrés de 9&nbsp;cm de côté.
---SUB-CORR---
Il faut que la longueur côté du carré divise 315 et aussi 270.

Or $315 = 5 \times 63 = 5 \times 7 \times 9 = 3^2 \times 5 \times 7$ et 

$270 = 27 \times 10 = 3^3 \times 2 \times 5 = 2 \times 3^3 \times 5$.

On constate que $3^2 = 9$ est un diviseur commun à 315 et à 270 : on peut donc imprimer des carrés de côté 9&nbsp;cm.
---SUB-Q---
Dans ce cas, combien de carrés de 9&nbsp;cm de côté seront imprimés sur le tissu?
<br><br>
---SUB-CORR---
On a $315 = 9 \times 35$ : il rentre 35 carrés dans la longueur ;

$270 = 9 \times 30$ : il rentre 30 carrés dans la largeur.

Il y a donc $35 \times 30 = 1\,050$ motifs imprimés sur le tissu.

<br><br>
{{< /brevet-exo >}}
