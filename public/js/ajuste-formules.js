/* ═══════════════════════════════════════════════════════════════════
   Formules trop larges pour leur colonne (surtout sur téléphone).

   Une formule KaTeX en display ne se coupe jamais toute seule. Plutôt
   que de la laisser dépasser, ou d'obliger à la faire glisser du doigt
   sans qu'on voie qu'elle continue, on la réduit juste assez pour
   qu'elle tienne dans sa colonne. En dessous de 68 % on ne réduit
   plus, ce serait illisible : le défilement horizontal reprend alors
   la main.

   Le contenu n'est jamais modifié : seule la taille d'affichage
   change, et uniquement pour les formules qui en ont besoin.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var PLANCHER = 0.68;
  var MARGE = 2;
  var vigie = null;

  function ajusterUne(bloc) {
    var interieur = bloc.querySelector(".katex");
    if (!interieur) return;

    // on repart de la taille naturelle : la fonction doit pouvoir être
    // rappelée sans cumuler les réductions
    if (interieur.style.fontSize) interieur.style.fontSize = "";

    var dispo = bloc.clientWidth;
    if (!dispo) return; // pas encore affiché : on repassera à l'ouverture

    var voulu = bloc.scrollWidth;
    if (voulu <= dispo + MARGE) return;

    var facteur = dispo / voulu;
    if (facteur < PLANCHER) facteur = PLANCHER;
    interieur.style.fontSize = (facteur * 100).toFixed(1) + "%";
  }

  function ajusterTout() {
    // on suspend la surveillance : nos propres écritures de style ne
    // doivent pas déclencher une nouvelle passe
    if (vigie) vigie.disconnect();
    var blocs = document.querySelectorAll(".katex-display");
    for (var i = 0; i < blocs.length; i++) ajusterUne(blocs[i]);
    if (vigie) brancher();
  }

  var minuteur = null;
  function ajusterBientot() {
    clearTimeout(minuteur);
    minuteur = setTimeout(ajusterTout, 60);
  }

  function brancher() {
    vigie.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"], // ouverture d'une correction, changement d'onglet
    });
  }

  function demarrer() {
    vigie = new MutationObserver(ajusterBientot);
    brancher();
    ajusterTout();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", demarrer);
  } else {
    demarrer();
  }

  window.addEventListener("resize", ajusterBientot);
  window.addEventListener("orientationchange", ajusterBientot);

  // les polices KaTeX arrivent parfois après le premier calcul
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(ajusterBientot);
  }
  setTimeout(ajusterTout, 1500);
})();
