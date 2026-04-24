# ScriptQCM — Guide de génération de QCM pour MaBémat

## Ce que tu dois faire quand Mathilde te demande de générer un QCM

Mathilde est professeure de maths. Elle te donne accès à deux fichiers dans le dossier du chapitre :
- `QCM.tex` : les exercices du QCM avec leurs **corrections** — c'est la source principale.
- `Chapitre XX - Nom.tex` : le cours complet — utile pour comprendre les notions et inventer des distracteurs.

Ton travail : adapter chaque exercice du `QCM.tex` en une question à choix multiple au format Hugo MaBémat.

---

## Format exact du fichier QCM

**Emplacement :** `mabemat/content/[niveau]/chapitre-XX-nom-qcm/index.md`
(le dossier `-qcm` existe déjà, il contient un `index.md` vide ou à remplacer)

**Frontmatter :**
```yaml
---
title: "QCM — [Titre du chapitre]"
layout: "qcm"
level: "[niveau]"        # ex: "6e", "3e", "2nde", "1re"
chapter: "chapitre-XX-nom"
---
```

**Structure de chaque question :**
```
{{< qcm correct="N" >}}
---Q---
[Texte de la question en Markdown. Maths avec $...$ ou $$...$$]

- [Option 0]
- [Option 1]
- [Option 2]
- Aucune réponse

---CORR---
[Correction fidèle au `QCM.tex`, avec la bonne réponse mise en gras (**...**). Maths autorisées. Pas d'explication des distracteurs.]
{{< /qcm >}}
```

**Règles importantes :**
- `correct="N"` : N est l'index (base 0) de la bonne réponse parmi les 4 options.
- Il y a toujours **exactement 4 options** : 3 réponses concrètes + "Aucune réponse" en dernier (index 3).
- "Aucune réponse" peut être la bonne réponse (correct="3") si aucune des 3 autres ne l'est.
- **Le nombre de questions = le nombre d'exercices dans le `QCM.tex`**. Ne pas en inventer, ne pas en supprimer.
- Varier la distribution des bonnes réponses : ne pas toujours mettre correct="0". Viser une répartition équilibrée entre 0, 1, 2, 3.
- La correction doit s'appuyer sur la **correction du `QCM.tex`** (voir section dédiée ci-dessous).

---

## ✅ RÈGLE 1 : utiliser les corrections du QCM.tex

Chaque exercice du `QCM.tex` contient une correction dans l'environnement `\begin{Correction}...\end{Correction}`. **C'est cette correction qui doit servir de base au bloc `---CORR---`**, adaptée en Markdown/KaTeX.

- Reprendre le raisonnement exact (passage à l'unité, soustraction de colonnes, etc.).
- Conserver les valeurs numériques et les étapes intermédiaires.
- **Ne pas** ajouter d'explication des distracteurs : la correction se limite strictement au raisonnement du `QCM.tex`.

---

## ✅ RÈGLE 2 : dessiner un vrai tableau HTML quand c'est nécessaire

Dès qu'une question ou une correction implique un **tableau de proportionnalité**, une **table de valeurs** ou un **tableau de données**, il faut dessiner un **vrai tableau HTML** — pas une liste, pas du texte tabulé.

**Format standard à utiliser** (adapter la couleur selon le niveau) :

```html
<div style="text-align:center;margin:0.8em 0;">
<table style="border-collapse:collapse;margin:0 auto;">
<tr>
<td style="border:1px solid [COULEUR];padding:5px 16px;background:[FOND];font-weight:bold;">Libellé ligne 1</td>
<td style="border:1px solid [COULEUR];padding:5px 16px;">val1</td>
<td style="border:1px solid [COULEUR];padding:5px 16px;">val2</td>
<td style="border:1px solid [COULEUR];padding:5px 16px;color:[COULEUR];font-weight:bold;">?</td>
</tr>
<tr>
<td style="border:1px solid [COULEUR];padding:5px 16px;background:[FOND];font-weight:bold;">Libellé ligne 2</td>
<td style="border:1px solid [COULEUR];padding:5px 16px;">val1</td>
<td style="border:1px solid [COULEUR];padding:5px 16px;">val2</td>
<td style="border:1px solid [COULEUR];padding:5px 16px;color:[COULEUR];font-weight:bold;">?</td>
</tr>
</table>
</div>
```

**Couleurs par niveau :**

| Niveau | `[COULEUR]` (bordures, valeurs manquantes) | `[FOND]` (en-têtes) |
|--------|-------------------------------------------|----------------------|
| 6e     | `#D36740`                                 | `#FDF5F0`            |
| 3e     | `#C5607A`                                 | `#FDF2F4`            |
| 2nde   | `#4A5D7A`                                 | `#F2F4F8`            |
| 1re    | `#758467`                                 | `#F4F6F1`            |

Les **valeurs manquantes** (`?`) doivent apparaître en couleur et en gras pour bien se distinguer.

Le tableau peut figurer **dans la question** (si l'énoncé s'appuie dessus) et/ou **dans la correction** (pour illustrer la méthode de résolution).

---

## ⚠️ RÈGLE 3 : les distracteurs sont des PIÈGES pédagogiques

C'est le cœur du travail. Chaque mauvaise réponse doit correspondre à une **erreur réelle et fréquente** que ferait un élève de ce niveau. Il ne s'agit pas d'inventer des réponses absurdes — il faut simuler le raisonnement d'un élève qui se trompe.

**Exemples de types d'erreurs à anticiper selon les chapitres :**

- **Calcul** : oubli de retenue, erreur de priorité opératoire (`2+3×4` → l'élève fait `5×4=20` au lieu de `14`), signe moins devant une parenthèse oublié
- **Fractions** : additionner les dénominateurs (`1/2 + 1/3 = 2/5`), oublier de réduire, inverser numérateur/dénominateur
- **Proportionnalité** : raisonnement additif au lieu de multiplicatif, confondre coefficient et différence, inverser le sens de l'échelle, mauvaise conversion d'unités
- **Géométrie** : confondre périmètre et aire, utiliser le mauvais théorème, oublier de prendre la moitié dans la formule de l'aire du triangle
- **Algèbre** : distribuer incorrectement (`(a+b)² = a²+b²`), confondre factoriser et développer, erreur de signe à la résolution d'équation
- **Vocabulaire** : confondre "produit" et "somme", "quotient" et "différence", "grandeur" et "unité"
- **Trigonométrie** : inverser sin et cos, appliquer une formule dans le mauvais triangle
- **Probabilités** : confondre probabilité et fréquence, oublier que la somme des probabilités = 1
- **Fonctions** : confondre image et antécédent, lire un graphique à l'envers

**Règle d'or :** avant de choisir un distracteur, demande-toi : *"Est-ce qu'un élève de [niveau] pourrait vraiment écrire ça ?"* Si oui, c'est un bon piège. Si c'est trop absurde, cherche une autre erreur plausible.

**Astuce :** utilise les erreurs liées au cours donné dans le `.tex`. Si le cours insiste sur une propriété particulière, c'est probablement parce qu'elle est souvent mal appliquée — mets-la en piège.

---

## Cas avec figure (tikz dans le .tex)

Quand une question nécessite une figure, Mathilde te fournit une **capture d'écran** (image PNG/JPG) de la figure tikz. Toi, tu la convertis en SVG (ou tu travailles avec le PNG directement) et tu la déposes dans :

```
/mabemat/figures/6e[niveau]/chapitre-XX/
```

Nomme les fichiers : `Q1.png`, `Q2.png`... pour les questions, `Q1C.png`, `Q2C.png`... pour les corrections (si la correction nécessite aussi une figure annotée).

Dans le `.md` du QCM, intègre l'image ainsi :
```html
<div style="text-align:center;">
  <img src="/figures/[niveau]/chapitre-XX/Q1.svg" alt="Figure" style="max-width:30%; height:auto;">
</div>
```

*(Voir chapitre-13-symetrie-axiale-qcm des 6e comme exemple de référence.)*

---

## Après avoir généré le QCM

Mettre `has_qcm: true` dans le fichier `index.md` **principal** du chapitre (le dossier sans `-qcm`), s'il est à `false`.

---

## Ce que Mathilde doit te dire pour démarrer

> "Lis `mabemat/ScriptQCM.md`, puis génère le QCM du chapitre [XX] des [niveau]."

Le fichier `QCM.tex` est dans `mabemat/content/[niveau]/chapitre-XX-nom/`.
Le fichier cours `.tex` est dans `2025-2026/[niveau]/Cours/Chapitres/Ch XX - Nom/`.

---

## Niveaux disponibles
`6e` · `3e` · `2nde` · `1re`

## Chemin racine du site
`/sessions/.../mnt/Mabémat/mabemat/`
(à résoudre dynamiquement via `ls /sessions/.../mnt/` si le chemin exact change entre sessions)
