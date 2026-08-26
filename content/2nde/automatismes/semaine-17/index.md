---
title: "Semaine 17 - Racines carrées"
layout: "automatismes-2nde"
auto_number: 17
weight: 17
---

{{< auto2-seance type="classique" >}}

{{< auto2-exo numero="01" >}}
Écrire sous la forme $a\sqrt{b}$, avec $b$ le plus petit entier possible :

$$A=\sqrt{50}+\sqrt{18}$$
---CORR---
On cherche dans chaque nombre sous la racine le plus grand carré parfait qui le divise.

$$50=25\times 2 \qquad\text{donc}\qquad \sqrt{50}=\sqrt{25}\times\sqrt{2}=5\sqrt{2}$$

$$18=9\times 2 \qquad\text{donc}\qquad \sqrt{18}=\sqrt{9}\times\sqrt{2}=3\sqrt{2}$$

Les deux termes ont maintenant la même partie irrationnelle $\sqrt{2}$ : on peut les additionner comme des termes semblables.

$$A=5\sqrt{2}+3\sqrt{2}={\color{#4A5D7A}8\sqrt{2}}$$

Attention : $\sqrt{50}+\sqrt{18}$ n'est **pas** égal à $\sqrt{68}$. La racine d'une somme n'est pas la somme des racines.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Écrire sans racine carrée au dénominateur :

$$B=\dfrac{6}{\sqrt{3}}$$
---CORR---
On multiplie le numérateur et le dénominateur par $\sqrt{3}$, ce qui ne change pas la valeur du quotient :

$$B=\dfrac{6{\color{#4A5D7A}\boldsymbol{\times\sqrt{3}}}}{\sqrt{3}{\color{#4A5D7A}\boldsymbol{\times\sqrt{3}}}}=\dfrac{6\sqrt{3}}{3}$$

En effet, $\sqrt{3}\times\sqrt{3}=3$ : c'est ce qui fait disparaître la racine du dénominateur.

On simplifie enfin par $3$ :

$$B={\color{#4A5D7A}2\sqrt{3}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Calculer, en donnant un résultat sans racine carrée :

$$A=\sqrt{12}\times\sqrt{3} \qquad\text{et}\qquad B=\left(2\sqrt{5}\right)^2$$
---CORR---
Pour $A$, on utilise $\sqrt{a}\times\sqrt{b}=\sqrt{a\times b}$ :

$$A=\sqrt{12\times 3}=\sqrt{36}={\color{#4A5D7A}6}$$

Pour $B$, on élève au carré chacun des deux facteurs :

$$B=\left(2\sqrt{5}\right)^2=2^2\times\left(\sqrt{5}\right)^2=4\times 5={\color{#4A5D7A}20}$$

C'est la définition même de la racine carrée : $\left(\sqrt{5}\right)^2=5$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Donner l'écriture scientifique du nombre $358\,000$.
---CORR---
On déplace la virgule pour n'avoir qu'un seul chiffre non nul devant : on obtient $3{,}58$. La virgule a été déplacée de $5$ rangs vers la gauche, on compense par $10^{5}$.

$$358\,000={\color{#4A5D7A}3{,}58\times 10^{5}}$$

Le nombre étant plus grand que $10$, l'exposant est bien positif.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Le nombre $\dfrac{2^{10}}{2^{7}}$ est égal à :

**A.** $8$ &emsp; **B.** $2^{1{,}5}$ &emsp; **C.** $2^{17}$ &emsp; **D.** $1^{3}$
---CORR---
Pour un quotient de puissances de même base, on soustrait les exposants :

$$\dfrac{2^{10}}{2^{7}}=2^{10-7}=2^{3}={\color{#4A5D7A}8}$$

La réponse C additionne les exposants au lieu de les soustraire, et la réponse D vient de l'erreur consistant à simplifier les bases entre elles : on ne divise pas $2$ par $2$, on travaille sur les exposants.

<span class="rep">Réponse : A</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x)=-4x+7$ est :

**A.** croissante sur $\mathbb{R}$ &emsp; **B.** constante &emsp; **C.** décroissante sur $\mathbb{R}$ &emsp; **D.** croissante puis décroissante
---CORR---
Une fonction affine s'écrit $f(x)=mx+p$. Son sens de variation ne dépend que du signe du coefficient directeur $m$.

Ici $m=-4$, qui est strictement négatif :

$$f\ \text{est}\ {\color{#4A5D7A}\text{décroissante sur}\ \mathbb{R}}$$

L'ordonnée à l'origine $7$ ne joue aucun rôle : elle déplace la droite vers le haut, elle ne l'incline pas. Et une fonction affine garde le même sens de variation sur tout $\mathbb{R}$, ce qui élimine la réponse D.

<span class="rep">Réponse : C</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}

{{< auto2-seance type="devoir" >}}

{{< auto2-exo numero="01" >}}
Écrire sous la forme $a\sqrt{b}$, avec $b$ le plus petit entier possible :

$$A=\sqrt{75}+\sqrt{27}$$
---CORR---
On cherche dans chaque nombre sous la racine le plus grand carré parfait qui le divise.

$$75=25\times 3 \qquad\text{donc}\qquad \sqrt{75}=\sqrt{25}\times\sqrt{3}=5\sqrt{3}$$

$$27=9\times 3 \qquad\text{donc}\qquad \sqrt{27}=\sqrt{9}\times\sqrt{3}=3\sqrt{3}$$

Les deux termes ont maintenant la même partie irrationnelle $\sqrt{3}$ : on peut les additionner comme des termes semblables.

$$A=5\sqrt{3}+3\sqrt{3}={\color{#4A5D7A}8\sqrt{3}}$$

Attention : $\sqrt{75}+\sqrt{27}$ n'est **pas** égal à $\sqrt{102}$. La racine d'une somme n'est pas la somme des racines.
{{< /auto2-exo >}}

{{< auto2-exo numero="02" >}}
Écrire sans racine carrée au dénominateur :

$$B=\dfrac{10}{\sqrt{5}}$$
---CORR---
On multiplie le numérateur et le dénominateur par $\sqrt{5}$, ce qui ne change pas la valeur du quotient :

$$B=\dfrac{10{\color{#4A5D7A}\boldsymbol{\times\sqrt{5}}}}{\sqrt{5}{\color{#4A5D7A}\boldsymbol{\times\sqrt{5}}}}=\dfrac{10\sqrt{5}}{5}$$

En effet, $\sqrt{5}\times\sqrt{5}=5$ : c'est ce qui fait disparaître la racine du dénominateur.

On simplifie enfin par $5$ :

$$B={\color{#4A5D7A}2\sqrt{5}}$$
{{< /auto2-exo >}}

{{< auto2-exo numero="03" >}}
Calculer, en donnant un résultat sans racine carrée :

$$A=\sqrt{8}\times\sqrt{2} \qquad\text{et}\qquad B=\left(3\sqrt{2}\right)^2$$
---CORR---
Pour $A$, on utilise $\sqrt{a}\times\sqrt{b}=\sqrt{a\times b}$ :

$$A=\sqrt{8\times 2}=\sqrt{16}={\color{#4A5D7A}4}$$

Pour $B$, on élève au carré chacun des deux facteurs :

$$B=\left(3\sqrt{2}\right)^2=3^2\times\left(\sqrt{2}\right)^2=9\times 2={\color{#4A5D7A}18}$$

C'est la définition même de la racine carrée : $\left(\sqrt{2}\right)^2=2$.
{{< /auto2-exo >}}

{{< auto2-exo numero="04" >}}
Donner l'écriture scientifique du nombre $0{,}004\,26$.
---CORR---
On déplace la virgule pour n'avoir qu'un seul chiffre non nul devant : on obtient $4{,}26$. La virgule a été déplacée de $3$ rangs vers la droite, on compense par $10^{-3}$.

$$0{,}004\,26={\color{#4A5D7A}4{,}26\times 10^{-3}}$$

Le nombre étant plus petit que $1$, l'exposant est bien négatif.
{{< /auto2-exo >}}

{{< auto2-exo numero="05" >}}
Le nombre $\dfrac{3^{9}}{3^{6}}$ est égal à :

**A.** $3^{15}$ &emsp; **B.** $1^{3}$ &emsp; **C.** $3^{1{,}5}$ &emsp; **D.** $27$
---CORR---
Pour un quotient de puissances de même base, on soustrait les exposants :

$$\dfrac{3^{9}}{3^{6}}=3^{9-6}=3^{3}={\color{#4A5D7A}27}$$

La réponse A additionne les exposants au lieu de les soustraire, et la réponse B vient de l'erreur consistant à simplifier les bases entre elles : on ne divise pas $3$ par $3$, on travaille sur les exposants.

<span class="rep">Réponse : D</span>
{{< /auto2-exo >}}

{{< auto2-exo numero="06" >}}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x)=3x-8$ est :

**A.** décroissante sur $\mathbb{R}$ &emsp; **B.** croissante sur $\mathbb{R}$ &emsp; **C.** constante &emsp; **D.** décroissante puis croissante
---CORR---
Une fonction affine s'écrit $f(x)=mx+p$. Son sens de variation ne dépend que du signe du coefficient directeur $m$.

Ici $m=3$, qui est strictement positif :

$$f\ \text{est}\ {\color{#4A5D7A}\text{croissante sur}\ \mathbb{R}}$$

L'ordonnée à l'origine $-8$ ne joue aucun rôle : elle déplace la droite vers le bas, elle ne l'incline pas. Et une fonction affine garde le même sens de variation sur tout $\mathbb{R}$, ce qui élimine la réponse D.

<span class="rep">Réponse : B</span>
{{< /auto2-exo >}}

{{< /auto2-seance >}}
