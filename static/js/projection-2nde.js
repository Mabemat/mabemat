/* ============================================================
   MaBémat — Mode projection 2nde (focus)
   À déposer dans : themes/mabemath/static/js/projection-2nde.js
   Chargé uniquement par le layout automatismes-2nde.
   Réutilise les cartes .auto1re-card déjà présentes (KaTeX rendu) :
   aucune dépendance, aucun re-rendu mathématique.
   ============================================================ */
(function () {
  'use strict';

  var btn = document.getElementById('btn-project');
  /* On projette uniquement la séance classique (pas les devoirs) */
  var panel = document.getElementById('panel-seance');
  if (!btn || !panel) return;

  var cards = [].slice.call(panel.querySelectorAll('.auto1re-card'));
  if (!cards.length) return;

  /* ── Lecture des données (après rendu KaTeX) ── */
  var data = cards.map(function (card) {
    var numEl   = card.querySelector('.auto1re-num');
    var qNode   = card.querySelector('.auto1re-enonce');
    var corrDiv = card.querySelector('.auto1re-corr > div');
    return { numEl: numEl, qNode: qNode, corrDiv: corrDiv };
  });

  /* ── État ── */
  var SCALE_KEY = 'mabemat-proj-scale';
  var scale = parseInt(localStorage.getItem(SCALE_KEY), 10);
  if (!scale || scale < 12 || scale > 30) scale = 18;
  var q = 0;
  var revealed = {};

  /* ── Icônes SVG ── */
  var SVG_EXPAND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>';
  var SVG_CLOSE  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

  /* ── Construction de l'overlay ── */
  var ov = document.createElement('div');
  ov.className = 'proj-overlay';
  ov.setAttribute('data-theme', 'clair');
  ov.innerHTML =
    '<div class="proj-bar">' +
      '<div class="pb-brand"><span class="brand-ma">Ma</span><span class="brand-bemat">Bémat</span></div>' +
      '<div class="pb-sub" data-sub></div>' +
      '<div class="pb-spacer"></div>' +
      '<div class="pb-tools">' +
        '<button class="pb-btn" type="button" data-act="minus" title="Réduire le texte (−)">A−</button>' +
        '<button class="pb-btn" type="button" data-act="plus" title="Agrandir le texte (+)">A+</button>' +
        '<button class="pb-btn" type="button" data-act="full" title="Plein écran (F)">' + SVG_EXPAND + '</button>' +
        '<div class="pb-divider"></div>' +
        '<button class="pb-btn pb-close" type="button" data-act="close" title="Quitter (Échap)">' + SVG_CLOSE + '</button>' +
      '</div>' +
    '</div>' +
    '<div class="proj-stage"><div class="proj-stage-inner">' +
      '<div class="proj-focus" data-focus>' +
        '<div class="pf-num" data-num></div>' +
        '<div class="pf-inner">' +
          '<div class="pf-tag" data-tag></div>' +
          '<div class="pf-q proj-q" data-q></div>' +
          '<div class="pf-c" data-c hidden><span class="pf-c-label">Correction</span><div class="proj-c" data-cbody></div></div>' +
        '</div>' +
      '</div>' +
    '</div></div>';
  document.body.appendChild(ov);

  var subEl   = ov.querySelector('[data-sub]');
  var numElOv = ov.querySelector('[data-num]');
  var tagEl   = ov.querySelector('[data-tag]');
  var qEl     = ov.querySelector('[data-q]');
  var cEl     = ov.querySelector('[data-c]');
  var cBody   = ov.querySelector('[data-cbody]');
  var focusEl = ov.querySelector('[data-focus]');

  /* Sous-titre semaine */
  var crumbWeek = document.querySelector('.crumbs span:last-child');
  subEl.textContent = 'Automatismes 2nde' + (crumbWeek ? ' · ' + crumbWeek.textContent.trim() : '');

  /* ── Rendu ── */
  function render() {
    var ex = data[q];
    if (!ex) return;
    var corrHtml = ex.corrDiv ? ex.corrDiv.innerHTML.trim() : '';
    ov.style.setProperty('--proj-scale', scale);
    numElOv.textContent = ex.numEl ? ex.numEl.textContent.trim() : '';
    tagEl.textContent = 'Séance · Question ' + (q + 1) + ' / ' + data.length;
    qEl.innerHTML = ex.qNode ? ex.qNode.innerHTML : '';
    var isRev = !!revealed[q];
    if (isRev && corrHtml) { cBody.innerHTML = corrHtml; cEl.hidden = false; }
    else { cEl.hidden = true; cBody.innerHTML = ''; }
    focusEl.style.cursor = corrHtml ? 'pointer' : 'default';
  }

  /* ── Navigation ── */
  function nextQ() { if (q < data.length - 1) { q++; render(); } }
  function prevQ() { if (q > 0) { q--; render(); } }
  function toggleReveal() { revealed[q] = !revealed[q]; render(); }
  function setScale(d) {
    scale = Math.max(12, Math.min(30, scale + d));
    localStorage.setItem(SCALE_KEY, scale);
    ov.style.setProperty('--proj-scale', scale);
  }
  function toggleFull() {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) { document.exitFullscreen(); }
  }

  /* ── Ouverture / fermeture ── */
  function open() {
    q = 0;
    render();
    ov.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    ov.classList.remove('open');
    document.body.style.overflow = '';
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
  }
  function isOpen() { return ov.classList.contains('open'); }

  /* ── Événements ── */
  btn.addEventListener('click', open);

  focusEl.addEventListener('click', function () {
    var ex = data[q];
    if (ex && ex.corrDiv && ex.corrDiv.innerHTML.trim()) toggleReveal();
  });

  ov.querySelector('.pb-tools').addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]');
    if (!b) return;
    var act = b.getAttribute('data-act');
    if (act === 'minus') setScale(-1);
    else if (act === 'plus') setScale(1);
    else if (act === 'full') toggleFull();
    else if (act === 'close') close();
  });

  document.addEventListener('keydown', function (e) {
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    if (!isOpen()) {
      if (e.key === 'p' || e.key === 'P') { e.preventDefault(); open(); }
      return;
    }
    switch (e.key) {
      case 'Escape': close(); break;
      case 'f': case 'F': toggleFull(); break;
      case '+': case '=': e.preventDefault(); setScale(1); break;
      case '-': case '_': e.preventDefault(); setScale(-1); break;
      case ' ': case 'Enter': e.preventDefault(); toggleReveal(); break;
      case 'ArrowRight': case 'PageDown': e.preventDefault(); nextQ(); break;
      case 'ArrowLeft': case 'PageUp': e.preventDefault(); prevQ(); break;
      default:
        if (e.key >= '1' && e.key <= '9') {
          var i = parseInt(e.key, 10) - 1;
          if (i < data.length) { q = i; render(); }
        }
    }
  });

  /* Lancement direct via ?projection ou #projection dans l'URL */
  if (/[?#].*proj/i.test(location.href)) open();
})();
