/* ============================================================
   MaBémat — Mode projection (focus)
   À déposer dans : themes/mabemath/static/js/projection.js
   Chargé uniquement par le layout automatismes.
   Réutilise les cartes .exo déjà présentes (KaTeX déjà rendu) :
   aucune dépendance, aucun re-rendu mathématique.
   ============================================================ */
(function () {
  'use strict';

  var btn = document.getElementById('btn-project');
  var panels = [].slice.call(document.querySelectorAll('#auto-seance-content .seance-panel'));
  if (!btn || !panels.length) return;

  /* ── Références vers les cartes (lues à l'affichage, pas au chargement,
        pour que KaTeX ait fini de rendre les formules) ── */
  var data = panels.map(function (panel) {
    return {
      titre: panel.getAttribute('data-titre') || 'Séance',
      exos: [].slice.call(panel.querySelectorAll('.exo')).map(function (exo) {
        return {
          numEl: exo.querySelector('.exo-num'),
          qNode: exo.querySelector('.exo-enonce'),
          cNode: exo.querySelector('.exo-corr')
        };
      })
    };
  });

  /* ── État ── */
  var SCALE_KEY = 'mabemat-proj-scale';
  var scale = parseInt(localStorage.getItem(SCALE_KEY), 10);
  if (!scale || scale < 12 || scale > 30) scale = 18;
  var seance = 0, q = 0;
  var revealed = {};

  /* ── Icônes SVG ── */
  var SVG_EXPAND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>';
  var SVG_CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

  /* ── Construction de l'overlay ── */
  var ov = document.createElement('div');
  ov.className = 'proj-overlay';
  ov.setAttribute('data-theme', 'clair');
  ov.innerHTML =
    '<div class="proj-bar">' +
      '<div class="pb-brand"><span class="brand-ma">Ma</span><span class="brand-bemat">Bémat</span></div>' +
      '<div class="pb-sub" data-sub></div>' +
      '<div class="pb-spacer"></div>' +
      '<div class="pb-seances" data-seances></div>' +
      '<div class="pb-divider"></div>' +
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

  var subEl = ov.querySelector('[data-sub]');
  var seancesEl = ov.querySelector('[data-seances]');
  var numEl = ov.querySelector('[data-num]');
  var tagEl = ov.querySelector('[data-tag]');
  var qEl = ov.querySelector('[data-q]');
  var cEl = ov.querySelector('[data-c]');
  var cBody = ov.querySelector('[data-cbody]');
  var focusEl = ov.querySelector('[data-focus]');

  /* Sous-titre (n° de semaine si dispo) */
  var crumbWeek = document.querySelector('.crumbs span:last-child');
  subEl.textContent = 'Automatismes' + (crumbWeek ? ' · ' + crumbWeek.textContent.trim() : '');

  /* Pastilles séances */
  var pills = data.map(function (s, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = s.titre.replace('Séance ', 'S');
    b.addEventListener('click', function () { gotoSeance(i); });
    seancesEl.appendChild(b);
    return b;
  });

  /* ── Rendu (lit le HTML rendu par KaTeX au moment de l'affichage) ── */
  function render() {
    var ex = data[seance].exos[q];
    if (!ex) return;
    var corrHtml = ex.cNode ? ex.cNode.innerHTML.trim() : '';
    ov.style.setProperty('--proj-scale', scale);
    numEl.textContent = ex.numEl ? ex.numEl.textContent.trim() : '';
    tagEl.textContent = data[seance].titre + ' · Question ' + (q + 1) + ' / ' + data[seance].exos.length;
    qEl.innerHTML = ex.qNode ? ex.qNode.innerHTML : '';
    var isRev = !!revealed[seance + '-' + q];
    if (isRev && corrHtml) { cBody.innerHTML = corrHtml; cEl.hidden = false; }
    else { cEl.hidden = true; cBody.innerHTML = ''; }
    focusEl.style.cursor = corrHtml ? 'pointer' : 'default';
    pills.forEach(function (p, i) { p.classList.toggle('active', i === seance); });
  }

  /* ── Navigation ── */
  function nextQ() {
    if (q < data[seance].exos.length - 1) { q++; }
    else if (seance < data.length - 1) { seance++; q = 0; }
    render();
  }
  function prevQ() {
    if (q > 0) { q--; }
    else if (seance > 0) { seance--; q = data[seance].exos.length - 1; }
    render();
  }
  function gotoSeance(i) { seance = i; q = 0; render(); }
  function toggleReveal() { revealed[seance + '-' + q] = !revealed[seance + '-' + q]; render(); }
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
    var act = -1;
    panels.forEach(function (p, i) { if (p.classList.contains('active')) act = i; });
    seance = act >= 0 ? act : 0;
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
    var ex = data[seance].exos[q];
    if (ex && ex.cNode && ex.cNode.innerHTML.trim()) toggleReveal();
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
      if (e.key === 'p' || e.key === 'P') { e.preventDefault(); requirePin(open); }
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
          if (i < data[seance].exos.length) { q = i; render(); }
        }
    }
  });

  /* Lancement direct via ?projection ou #projection dans l'URL */
  if (/[?#].*proj/i.test(location.href)) open();
})();
