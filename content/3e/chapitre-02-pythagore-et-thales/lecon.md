---
title: "Leçon complète"
---

<h2 class="subsection-title">2.1 Pythagore</h2>

<h3 class="subsubsection-title">2.1.1 Le théorème de Pythagore</h3>

<div class="environment theoreme" style="display:inline-block; vertical-align:top; width:calc(73% - 12px);">
<div class="environment-title">Théorème - Théorème de Pythagore</div>
<div class="environment-content">
<ul>
<li>Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.</li>
<li>Si un triangle ABC est rectangle en B, alors 
$ AC^2 = BC^2 + AB^2 $</li>
</ul>
</div>
</div><img src="/mabemat/figures/3e/chapitre-02/fig1.svg" alt="figure 1" style="display:inline-block; vertical-align:top; width:calc(25% - 12px); max-height:200px; max-width:100%;">

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
<div style="display:inline-block; vertical-align:top; width:calc(55% - 12px);">
Le triangle ABC est un triangle rectangle en A tel que $ AB = 12 \, \text{cm} $ et $ AC = 5 \, \text{cm} $. <br>
On veut calculer la longueur du troisième côté. <br>

<img src="/mabemat/figures/3e/chapitre-02/fig2.svg" alt="figure 2" style="max-height:200px; max-width:100%;">
</div><div style="display:inline-block; vertical-align:top; width:calc(40% - 12px);">
Je sais que $ ABC $ est un triangle rectangle en A.<br>

D'après le théorème de Pythagore :

<div class="math-display">
$$
\begin{align*}
BC^2 &= AB^2 + AC^2 \\
BC^2 &= 12^2 + 5^2\\
BC^2 &= 144 + 25 \\
BC^2 &= 169 
\end{align*}
$$
</div>

Donc : $ BC = \sqrt{169} = 13 \, \text{cm} $
</div>

</div>
</div>

<h3 class="subsubsection-title">2.1.2 La réciproque du théorème de Pythagore</h3>

<div class="environment propriete">
<div class="environment-title">Propriété - Réciproque du théorème de Pythagore</div>
<div class="environment-content">
Si le carré de la longueur du plus grand côté d'un triangle est égal à la somme des carrés des longueurs des deux autres côtés, alors ce triangle est rectangle.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit le triangle $ABC$ tel que $BC = 17$ cm, $AB = 15$ cm et $AC = 8$ cm.<br>
Montrer que le triangle est rectangle.
<ul>
<li>D'une part : Le côté le plus long est $BC$ et on a $BC^2 = 17^2 = 289$.</li>
<li>D'autre part : 

<div class="math-display">
$$
\begin{align*}    
AB^2 + AC^2 &= 15^2 + 8^2 \\
&= 225 + 64 \\
&= 289
\end{align*}
$$
</div></li>
</ul>
Ainsi, on a : $BC^2 = AB^2 + AC^2$. <br>
Donc, d'après la réciproque du théorème de Pythagore, le triangle $ABC$ est rectangle en $A$.
</div>
</div>

<div class="remarque">

La contraposée du théorème de Pythagore permet de montrer qu'un triangle n'est pas rectangle.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit PCB un triangle tel que : $ PC =6,5 $ cm, $ BC =2,4 $ cm et $ PB =6,9 $ cm. Le triangle PCB est-il rectangle ?

<ul>
<li>D'une part : Le côté le plus long est $PB$ et on a $PB^2 = 6,9^2 = 47,61$.<br></li>
<li>D'autre part : 

<div class="math-display">
$$
\begin{align*}    
PC^2 + CB^2 &= 6,5^2 + 2,4^2 \\
&= 48,01
\end{align*}
$$
</div></li>
</ul>
Ainsi, on a : $PB^2 \neq PC^2 + CB^2$. <br>
Donc, d'après la contraposée du théorème de Pythagore, le triangle $PCB$ n'est pas rectangle.
</div>
</div>

<h2 class="subsection-title">2.2 Thalès</h2>

<h3 class="subsubsection-title">2.2.1 Le théorème de Thalès</h3>

<div class="environment theoreme">
<div class="environment-title">Théorème - Théorème de Thalès</div>
<div class="environment-content">
Soit ABC un triangle. Si les droites (BM) et (CN) sont sécantes et si les droites (MN) et (BC) sont parallèles, alors :
$
\dfrac{AM}{AB} = \dfrac{AN}{AC} = \dfrac{MN}{BC}
$
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Soit le triangle ABC ci-dessous tel que (MN) // (BC). Calculer AN. <br>

<img src="/mabemat/figures/3e/chapitre-02/fig3.svg" alt="figure 3" style="max-height:200px; max-width:100%; display:block; margin:auto;">


On sait que les droites (BM) et (CN) sont sécantes en A et que les droites (MN) et (BC) sont parallèles.<br>
Or, d'après le théorème de Thalès,<br><br>
$ \dfrac{AM}{AB} = \dfrac{AN}{AC} = \dfrac{MN}{BC}$ <br> <br>
$ \dfrac{2}{5} = \dfrac{AN}{4} $ <br> <br>
$ AN = \dfrac{2 \times 4}{5} = 1,6 $ <br> <br>

Donc : $AN = 1,6$ cm.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content">
Sur la figure suivante, $EG=5~\text{cm}$, $EF=7~\text{cm}$, $GH=2~\text{cm}$, $GI=4{,}4~\text{cm}$ et $(EF)//(HI)$.<br>Calculer $HI$ et $GF$.

<img src="/mabemat/figures/3e/chapitre-02/fig4.svg" alt="figure 4" style="max-height:200px; max-width:100%;display:block; margin:auto;">

Les droites $(EH)$ et $(FI)$ sont sécantes en $G$ et $(EF)//(HI)$ <br> donc d'après le théorème de Thalès, on a : <br><br>
$\dfrac{GH}{GE}=\dfrac{GI}{GF}=\dfrac{HI}{EF}$ <br><br>
$\dfrac{2}{5}=\dfrac{4{,}4}{GF}=\dfrac{HI}{7}$<br><br>
Ainsi, $HI=\dfrac{2\times7}{5}=2{,}8$ cm et $GF=\dfrac{4{,}4\times5}{2}=11$ cm
</div>
</div>

<h3 class="subsubsection-title">2.2.2 La réciproque du théorème de Thalès</h3>

<div class="environment propriete">
<div class="environment-title">Propriété : Réciproque du théorème de Thalès</div>
<div class="environment-content">
(BM) et (CN) sont deux droites sécantes en A. <br>
Si les points A, M, B sont alignés <strong>dans le même ordre</strong> que les points A, N, C et si
$ \dfrac{AM}{AB} = \dfrac{AN}{AC} $
alors les droites (MN) et (BC) sont parallèles.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content"  style="display:inline-block; vertical-align:top; width:calc(73% - 12px);">
Sur la figure ci-contre, on a : <ul>
<li>$NH = 4$ cm</li>
<li>$NW = 6$ cm</li>
<li>$WU = 2{,}4$ cm</li>
<li>$HT = 1{,}6$ cm</li>
</ul> 
Les droites $(HW)$ et $(TU)$ sont-elles parallèles ?<br> 
</div>


<img src="/mabemat/figures/3e/chapitre-02/fig5.svg" alt="figure 5" style="display:inline-block; vertical-align:top; width:calc(25% - 12px); max-height:200px; max-width:100%;">
<div class="environment-content">
On sait que $NU=NW-WU=6-2{,}4=3{,}6$ cm.<br>
On sait aussi que $NT=NH-HT=4-1{,}6=2{,}4$ cm.<br>
D'une part on a $\dfrac{NH}{NT}=\dfrac{4}{2{,}4}=\dfrac{4\times{\color{#819171}\boldsymbol{3{,}6}}}{2{,}4\times{\color{#819171}\boldsymbol{3{,}6}}}=\dfrac{14{,}4}{8{,}64}$.<br>
D'autre part on a $\dfrac{NW}{NU}=\dfrac{6}{3{,}6}=\dfrac{6\times{\color{#819171}\boldsymbol{2{,}4}}}{3{,}6\times{\color{#819171}\boldsymbol{2{,}4}}}=\dfrac{14{,}4}{8{,}64}$.<br>
On a donc, $\dfrac{NH}{NT}=\dfrac{NW}{NU}$ et $N$,$T$,$H$ et on a $N$,$U$,$W$ qui sont alignés dans le même ordre.<br>
Donc d'après la réciproque du théorème de Thalès, les droites $(HW)$ et $(TU)$ sont parallèles.
</div>
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content" style="display:inline-block; vertical-align:top; width:calc(73% - 12px);">
Sur la figure ci-contre, on a : <ul>
<li>$FP=6$ cm</li>
<li>$FO=5$ cm</li>
<li>$FV=2$ cm</li>
<li>$FE=2{,}4$ cm</li>
</ul> Les droites $(PO)$ et $(EV)$ sont-elles parallèles ?
</div>
<img src="/mabemat/figures/3e/chapitre-02/fig6.svg" alt="figure 6" style="display:inline-block; vertical-align:top; width:calc(25% - 12px); max-height:200px; max-width:100%;">

D'une part on a $\dfrac{FP}{FE}=\dfrac{6}{2{,}4}=\dfrac{6\times{\color{#819171}\boldsymbol{2}}}{2{,}4\times{\color{#819171}\boldsymbol{2}}}=\dfrac{12}{4{,}8}$.<br>
D'autre part on a $\dfrac{FO}{FV}=\dfrac{5}{2}=\dfrac{5\times{\color{#819171}\boldsymbol{2{,}4}}}{2\times{\color{#819171}\boldsymbol{2{,}4}}}=\dfrac{12}{4{,}8}$.<br>
On a donc $\dfrac{FP}{FE}=\dfrac{FO}{FV}$ et on a $E$,$F$,$P$ et $V$,$F$,$O$ qui sont alignés dans le même ordre.<br>
Donc d'après la réciproque du théorème de Thalès, les droites $(PO)$ et $(EV)$ sont parallèles.<br>
</div>
</div>

<div class="remarque">

La contraposée du théorème de Thalès permet de montrer que deux droites ne sont pas parallèles.
</div>

<div class="environment exemple">
<div class="environment-title">Exemple</div>
<div class="environment-content" style="display:inline-block; vertical-align:top; width:calc(73% - 12px);">
Sur la figure ci-contre, on a : <ul>
<li>$WS=5$ cm</li>
<li>$WQ=6$ cm</li>
<li>$WH=4{,}8$ cm</li>
<li>$WF=3{,}6$ cm</li>
</ul> Les droites $(SQ)$ et $(FH)$ sont-elles parallèles ?<br> 
</div>

<img src="/mabemat/figures/3e/chapitre-02/fig7.svg" alt="figure 7" style="display:inline-block; vertical-align:top; width:calc(25% - 12px); max-height:200px; max-width:100%;">

D'une part on a $\dfrac{WS}{WF}=\dfrac{5}{3{,}6}=\dfrac{5\times{\color{#819171}\boldsymbol{4{,}8}}}{3{,}6\times{\color{#819171}\boldsymbol{4{,}8}}}=\dfrac{24}{17{,}28}$.<br>
D'autre part on a $\dfrac{WQ}{WH}=\dfrac{6}{4{,}8}=\dfrac{6\times{\color{#819171}\boldsymbol{3{,}6}}}{4{,}8\times{\color{#819171}\boldsymbol{3{,}6}}}=\dfrac{21{,}6}{17{,}28}$.<br>
On a donc $\dfrac{WS}{WF}\not=\dfrac{WQ}{WH}$.<br>
Donc d'après la contraposée du théorème de Thalès, les droites $(SQ)$ et $(FH)$ ne sont pas parallèles.<br>
</div>
