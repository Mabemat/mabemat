---
title: "Exercices type brevet - Probabilités"
layout: "brevet"
level: "3e"
chapter: "chapitre-13-probabilites"
---
{{< brevet-exo num="1" source="DNB Décembre 2013 Nouvelle Calédonie" >}}
---INTRO---
<br><br>
 
Un restaurant propose cinq variétés de pizzas, voici leur carte :

<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:none"><strong>CLASSIQUE :</strong></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:none;border-right:1px solid #8B3C52">tomate, jambon, oeuf, champignons</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:none"><strong>MONTAGNARDE :</strong></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:none;border-right:1px solid #8B3C52">crème, jambon, pomme de terre, champignons</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:none"><strong>LAGON :</strong></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:none;border-right:1px solid #8B3C52">crème, crevettes, fromage</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:none"><strong>BROUSSARDE :</strong></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:none;border-right:1px solid #8B3C52">crème, chorizo, champignons, salami</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:none"><strong>PLAGE :</strong></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:none;border-right:1px solid #8B3C52">tomate, poivrons, chorizo</td>
</tr>
</table>
---Q---
Je commande une pizza au hasard, quelle est la probabilité qu'il y ait des champignons dedans ?
---CORR---
Sur les cinq variétés trois contiennent des champignons ; la probabilité est donc égale à $\dfrac{3}{5} = \dfrac{6}{10} = 0,6$.
---Q---
J'ai commandé une pizza à la crème, quelle est la probabilité d'avoir du jambon?
---CORR---
Sur les trois variété à la crème, une seule contient du jambon : la probabilité est donc égale à $\dfrac{1}{3}$.
---Q---
Il est possible de commander une grande pizza composée à moitié d'une variété et à moitié d'une autre. Quelle est la probabilité d'avoir des champignons sur toute la pizza ? On pourra s'aider d'un arbre des possibles.
---CORR---
&nbsp;

	m*
	l
	b*
	p
	

	c*
	l
	b*
	p
	

	c*
	m*
	b
	p
	

	c*
	m*
	l
	p
	

	c*
	m*
	l
	b*
	

On a marqué d'une étoile les variété qui contiennent des champignons. Sur les $5 \times 4 = 20$ choix possibles il y en a 6  qui contiennent chacune des champignons : la probabilité est donc de $\dfrac{6}{20} = \dfrac{3}{10} = 0,3$.
---Q---
On suppose que les pizzas sont de forme circulaire. La pizzeria propose deux tailles :

8mm 
<ul style="margin:0.5rem 0 0.5rem 1.2rem;"><li>moyenne : 30&nbsp;cm de diamètre</li><li>grande  : 44&nbsp;cm de diamètre.</li></ul>
0mm 
 
Si je commande deux pizzas moyennes, aurai-je plus à manger que si j'en commande une grande ? Justifier la réponse.

<br><br>
---CORR---
Aire de deux moyennes : $2 \times \pi \times 15^2 = 450\pi$.

Aire d'une grande $\pi \times 22^2 = 484\pi$. La grande donne plus à manger que deux moyennes.

<br><br>
{{< /brevet-exo >}}

{{< brevet-exo num="2" source="DNB Juin 2014 Polynésie" >}}
---INTRO---
<br>

On place des boules toutes indiscernables au toucher dans un sac. Sur chaque boule colorée est inscrite une lettre. Le tableau suivant présente la répartition des boules :

<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">LettreCouleur</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Rouge</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Vert</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Bleu</td>
</tr>
<tr>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">A</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">3</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">5</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">2</td>
</tr>
<tr>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">B</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">2</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">2</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">6</td>
</tr>
</table>
---Q---
Combien y a-t-il de boules dans le sac ?
---CORR---
Il y a :

$3 + 5 + 2 + 2 + 2 + 6 = 20$ boules dans le sac.
---Q---
On tire une boule au hasard, on note sa couleur et sa lettre.
---SUB-Q---
Vérifier qu'il y a une chance sur dix de tirer une boule bleue portant la lettre A.
---SUB-CORR---
Il y a 2 boules bleues portant la lettre A sur les 20, la probabilité est donc égale à 

$\dfrac{2}{20} = \dfrac{1}{10} = 0,1$.
---SUB-Q---
Quelle est la probabilité de tirer une boule rouge ?
---SUB-CORR---
Il y a 5 boules rouges, donc la probabilité est égale à $\dfrac{5}{20} = \dfrac{1}{4}$.
---SUB-Q---
A-t-on autant de chance de tirer une boule portant la lettre A que de tirer une boule portant la lettre B ?
<br><br>
---SUB-CORR---
Il y a 10 boules portant la lettre A et donc autant portant la lettre B. On a donc effectivement autant de chance de tirer une boule portant la lettre A que de tirer une boule portant la lettre B.

<br><br>
{{< /brevet-exo >}}

{{< brevet-exo num="3" source="DNB Juin 2013 Amérique du Nord" >}}
---INTRO---
<br>

Caroline souhaite s'équiper pour faire du roller.
 
Elle a le choix entre une paire de rollers gris à 87&nbsp;€ ? et une paire de rollers noirs à 99&nbsp;€.
 
Elle doit aussi acheter un casque et hésite entre trois modèles qui coûtent respectivement 45&nbsp;€, 22&nbsp;€ et 29&nbsp;€.

<br>
---Q---
Si elle choisit son équipement (un casque et une paire de rollers) au hasard, quelle est la probabilité pour que l'ensemble lui coûte moins de 130&nbsp;€?
---CORR---
&nbsp;

	45 $\to$ 132
	22   $\to$ 109
	29 $\to$ 116
	

	45  $\to$ 144
	22  $\to$ 121
	29  $\to$ 128
	

Sur les six possibilités quatre reviennent à moins de 130&nbsp;€. La probabilité est donc égale à : $\dfrac{4}{6} = \dfrac{2}{3}$.
---Q---
Elle s'aperçoit qu'en achetant la paire de rollers noirs et le casque à 45&nbsp;€, elle bénéficie d'une réduction de 20&thinsp;% sur l'ensemble.
---SUB-Q---
Calculer le prix en euros et centimes de cet ensemble après réduction.
---SUB-CORR---
Avoir 20&thinsp;% de réduction c'est payer 80&thinsp;% du prix initial soit : 

$0,80 \times 144 = 115,20$&nbsp;€.
---SUB-Q---
Cela modifie-t-il la probabilité obtenue à la question 1 ? Justifier la réponse.
<br><br>
---SUB-CORR---
Avec cette réduction le prix passe en dessous de 130&nbsp;€ ; la probabilité est donc maintenant égale à  $\dfrac{5}{6}$.

<br><br>
{{< /brevet-exo >}}

{{< brevet-exo num="4" source="DNB Septembre 2013 Métropole" >}}
---INTRO---
<br>

Tom lance cinquante fois deux dés à six faces parfaitement équilibrés. Il note dans une feuille de calcul les sommes obtenues à chaque lancer. Il obtient le tableau suivant : 

<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">2|c|B3</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">13l|=B2/M2</td>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
<tr>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">A</td>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">B</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">C</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">D</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">E</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">F</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">G</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">H</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">I</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">J</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">K</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">L</td>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">M</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">N</td>
</tr>
<tr>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">somme obtenue</td>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">2</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">3</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">4</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">5</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">6</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">7</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">8</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">9</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">10</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">11</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">12</td>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">total</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
<tr>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">2</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">nombre d'apparitions</td>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">3</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">4</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">6</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">9</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">9</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">7</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">3</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">5</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">3</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">0</td>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">50</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
<tr>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">3</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">fréquence d'apparition</td>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">0,06</td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:center;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:1px solid #8B3C52;border-bottom:1px solid #8B3C52;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
</table>
---Q---
Quelle formule a-t-il saisie dans la cellule M2 pour vérifier qu'il a bien relevé 50 résultats?
---CORR---
=SOMME(B2:L2)
---Q---
Tom a saisi dans la cellule B3 la formule $<div class="brevet-fbox">=B2/M2</div>$. Il obtient un message d'erreur quand il la tire dans la cellule C3. Pourquoi ?
---CORR---
Il devrait avoir dans C3 : B3/M3 ; or il y a 0 dans M3 et la division par 0 n'existe pas.
---Q---
Tom déduit de la lecture de ce tableau que s'il lance ces deux dés, il n'a aucune chance d'obtenir la somme 12. A-t-il tort ou raison ?

<br><br>
---CORR---
Il a tort car la sortie d'un double 6 est tout à fait possible. Il se trouve que sur les 50 lancers il n'y a pas eu ce tirage.

<br><br>
{{< /brevet-exo >}}

{{< brevet-exo num="5" source="DNB Novembre 2013 Amérique du sud" >}}
---INTRO---
<br>

Un jeu<sup>1</sup> est constitué des dix étiquettes suivantes toutes identiques au toucher qui sont mélangées dans un sac totalement opaque.

<br><br>

<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3
Deux angles droits seulement</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Quatre angles droits</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3
3c&nbsp;</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3
Côtés égaux deux à deux</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Deux côtés égaux seulement</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3
3c&nbsp;</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3
Quatre côtés égaux</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Côtés opposés parallèles</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3 
3c&nbsp;</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3
Deux côtés parallèles seulement</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Diagonales égales</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3 
3c&nbsp;</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3
Diagonales qui se coupent en leur milieu</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Diagonales perpendiculaires</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
</table> 

<br><br>
---Q---
On choisit au hasard une étiquette parmi les dix.
---SUB-Q---
Quelle est la probabilité de tirer l'étiquette « Diagonales égales » ?
---SUB-CORR---
Il y a une chance sur dix : $\dfrac{1}{10} = 0,1$.
---SUB-Q---
Quelle est la probabilité de tirer une étiquette sur laquelle est inscrit le mot « diagonales  » ?
---SUB-CORR---
Il y a trois chances sur dix : $\dfrac{3}{10} = 0,3$.
---SUB-Q---
Quelle est la probabilité de tirer une étiquette qui porte à la fois le mot « côtés » et le mot « diagonales  » ?
---SUB-CORR---
Il n'y a aucune étiquette qui comporte les deux mots. La probabilité est nulle.
---Q---
On choisit cette fois au hasard deux étiquettes parmi les dix et on doit essayer de dessiner un quadrilatère qui a ces deux propriétés.
---SUB-Q---
Madjid tire les deux étiquettes suivantes : 
		

<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3
Diagonales perpendiculaires</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Diagonales égales</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
</table>

Julie affirme que la figure obtenue est toujours un carré. Madjid a des doutes. Qui a raison ? Justifier la réponse.
---SUB-CORR---
Les diagonales sont perpendiculaires en leur milieu ; chacune est donc la médiatrice de l'autre ; on a donc un losange ; comme les diagonales ont la même longueur c'est aussi un rectangle ; c'est donc un carré : Julie a raison.
---SUB-Q---
Julie tire les deux étiquettes suivantes :
		 

<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3
Côtés opposés parallèles</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Quatre côtés égaux</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
</table>

Quel type de figure Julie est-elle sûre d'obtenir ?
---SUB-CORR---
Les côtés opposés sont parallèles : on a un parallélogramme ;

Les quatre côtés ont la même longueur : c'est un losange. On ne peut rien conclure de plus.
---Q---
Lionel tire les deux étiquettes suivantes :
		 

<table style="border-collapse:collapse;margin:0.6rem auto;font-size:0.95em;">
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3
Deux côtés égaux seulement</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">Quatre angles droits</td>
</tr>
<tr>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52">1-13-3</td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
<td style="text-align:left;padding:4px 10px;border-top:none;border-bottom:none;border-left:1px solid #8B3C52;border-right:1px solid #8B3C52"></td>
</tr>
</table>

Lionel est déçu. Expliquer pourquoi. 

<br>

1 D'après « Géométrie à l'Ecole » de François Boule. Savoir dire et savoir-faire, IREM de Bourgogne.

<br><br>
---CORR---
Si le quadrilatère a quatre angles droits, c'est un rectangle ; mais il ne peut avoir alors que deux côtés de même longueur. Un tel quadrilatère n'existe pas. Lionel ne peut rien dessiner.

<br><br>
{{< /brevet-exo >}}

{{< brevet-exo num="6" source="DNB Juillet 2019 Métropole" >}}
---INTRO---
<br>

On veut réaliser un dessin constitué de deux types
d'éléments (tirets et carrés) mis bout à bout.<br>
Chaque script ci-contre trace un élément, et déplace le stylo.<br>
On rappelle que « s'orienter à 90  » signifie qu'on
oriente le stylo vers la droite.

<span class="brevet-scratch">[Bloc Scratch — voir l'énoncé PDF]</span>

<span class="brevet-scratch">[Bloc Scratch — voir l'énoncé PDF]</span>
---Q---
En prenant 1 cm pour 2 pixels, représenter la figure obtenue si on exécute le script Carré.

Préciser les positions de départ et d'arrivée du stylo sur votre figure.

<br>

Pour tracer le dessin complet, on a réalisé 2 scripts qui se servent des blocs « Carré » et « Tiret  ».
ci-dessus :

Script 1<br> <br> <br> <br>

<span class="brevet-scratch">[Bloc Scratch — voir l'énoncé PDF]</span>

Script 2<br>
<span class="brevet-scratch">[Bloc Scratch — voir l'énoncé PDF]</span>

<br>
 
On exécute les deux scripts et on obtient les deux dessins ci-dessous.

<br>
---CORR---
Le script carré trace un carré en traçant 4 fois deux demi-côtés de 5 pixels, donc chaque côté du carré correspond à 10 pixels, donc à 5 cm.
---Q---
Attribuer à chaque script la figure dessinée. Justifier votre choix.
---CORR---
Le script 1 dessine 23 fois un carré suivi d'un tiret, donc le dessin B.

Le script 2 dessine 46 fois de manière aléatoire un carré ou un tiret, donc le dessin A.
---Q---
On exécute le script 2.
---SUB-Q---
Quelle est la probabilité que le premier élément tracé soit un carré ?
---SUB-CORR---
En exécutant le script 2, le premier élément tracé est un carré si le nombre aléatoire prend l'un des deux valeurs possible. La probabilité est $0,5$.
---SUB-Q---
Quelle est la probabilité que les deux premiers éléments soient des carrés ?
---SUB-CORR---
Pour les deux premiers éléments dessinés, il y a 4 possibilités équiprobables :
		
carré – carré ; carré – tiret ; tiret – carré ; tiret – tiret.

La probabilité que les deux premiers éléments dessinés soient des carrés est $\dfrac{1}{4}$, soit $0,25$.
---Q---
Dans le script 2, on aimerait que la couleur des différents éléments, tirets ou carrés, soit aléatoire, avec à chaque fois $50$&thinsp;% de chance d'avoir un élément noir et $50$&thinsp;% de chance d'avoir un élément rouge.
	
Écrire la suite d'instructions qu'il faut alors créer et préciser où l'insérer dans le script 2.
	
<strong>Indication </strong>: on pourra utiliser les instructions <span class="brevet-scratch">[Bloc Scratch — voir l'énoncé PDF]</span> 

et <span class="brevet-scratch">[Bloc Scratch — voir l'énoncé PDF]</span> pour choisir la couleur du stylo.

<br><br>
---CORR---
Au niveau de la ligne 7 du script 2, on peut insérer :

si nombre aléatoire entre 1 et 2 = 1 alors mettre la couleur du stylo à rouge
sinon 

mettre la couleur du stylo à noir.

<br><br>
{{< /brevet-exo >}}
