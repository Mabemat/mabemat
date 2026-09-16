/* ============================================================
   MaBémat — Mode projection « document agrandi »
   Cible automatiquement :
     · l'overlay leçon        (#lesson-overlay > #lesson-main)
     · les pages d'exercices  (.exercices-brevet : brevet,
                               objectif lycée, livret d'automatismes)

   Réglages, mémorisés dans le navigateur :
     · taille    A− / A+ / touches + et −, de 100 % à 300 %,
                 une valeur distincte pour les leçons et les exercices
     · contraste bouton dédié, ou touche C
   Raccourcis : + − (taille) · 0 (taille par défaut) · C (contraste)
                F (plein écran) · Échap (quitter)
   ============================================================ */
(function () {
  'use strict';

  var MIN = 1, MAX = 3, STEP = 0.1, DEF = 1.4;
  var KEY_CONTRAST = 'mabemat-mp-contrast';
  var html = document.documentElement;

  var bar = null, valEl = null, subEl = null;
  var btnMinus = null, btnPlus = null, btnContrast = null;
  var zoneEl = null, curKey = null, zoom = DEF;

  /* ── Stockage local, tolérant aux navigations privées ── */
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function readZoom(key) {
    var v = parseFloat(read('mabemat-mp-zoom-' + key));
    if (!v || v < MIN || v > MAX) v = DEF;
    return Math.round(v * 10) / 10;
  }

  /* ── Icônes ── */
  var SVG_PROJ = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="9" cy="12" r="3"></circle><line x1="16" y1="10" x2="19" y2="10"></line><line x1="5" y1="21" x2="7" y2="18"></line><line x1="19" y1="21" x2="17" y2="18"></line></svg>';
  var SVG_CONTRAST = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"></circle><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" stroke="none"></path></svg>';
  var SVG_FULL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>';
  var SVG_CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

  /* ── Quelle zone projeter ? ── */
  function context() {
    var ov = document.getElementById('lesson-overlay');
    if (ov && ov.classList.contains('open')) {
      var z = document.getElementById('lesson-main') || ov.querySelector('.lesson-content');
      if (z) {
        var t = ov.querySelector('.lesson-h1');
        return { zone: z, key: 'lecon', sub: 'Leçon' + (t ? ' · ' + t.textContent.trim() : '') };
      }
    }
    if (document.querySelector('.exercices-brevet')) {
      var eyebrow = document.querySelector('.br-hero .eyebrow');
      var title = document.querySelector('.br-hero h1');
      var sub = eyebrow ? eyebrow.textContent.trim()
                        : (title ? title.textContent.trim() : 'Exercices');
      return { zone: document.querySelector('.container') || document.querySelector('.exercices-brevet'),
               key: 'exos', sub: sub };
    }
    return null;
  }

  /* ── Barre d'outils ── */
  function buildBar() {
    bar = document.createElement('div');
    bar.className = 'mp-bar';
    bar.innerHTML =
      '<div class="mp-brand">MaBémat</div>' +
      '<div class="mp-sub" data-sub></div>' +
      '<div class="mp-spacer"></div>' +
      '<div class="mp-group">' +
        '<button class="mp-btn" type="button" data-act="minus" title="Réduire le texte (−)">A−</button>' +
        '<span class="mp-val" data-val>140 %</span>' +
        '<button class="mp-btn" type="button" data-act="plus" title="Agrandir le texte (+)">A+</button>' +
      '</div>' +
      '<button class="mp-btn" type="button" data-act="contrast" title="Haut contraste (C)">' +
        SVG_CONTRAST + '<span class="mp-lbl">Contraste</span></button>' +
      '<button class="mp-btn" type="button" data-act="full" title="Plein écran (F)">' + SVG_FULL + '</button>' +
      '<button class="mp-btn mp-close" type="button" data-act="close" title="Quitter (Échap)">' + SVG_CLOSE + '</button>';
    document.body.appendChild(bar);

    valEl = bar.querySelector('[data-val]');
    subEl = bar.querySelector('[data-sub]');
    btnMinus = bar.querySelector('[data-act="minus"]');
    btnPlus = bar.querySelector('[data-act="plus"]');
    btnContrast = bar.querySelector('[data-act="contrast"]');

    bar.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('.mp-btn') : null;
      if (!b) return;
      var act = b.getAttribute('data-act');
      if (act === 'minus') setZoom(zoom - STEP);
      else if (act === 'plus') setZoom(zoom + STEP);
      else if (act === 'contrast') setContrast(!isContrast(), true);
      else if (act === 'full') toggleFull();
      else if (act === 'close') close();
    });
  }

  /* ── Taille ── */
  function setZoom(v) {
    v = Math.round(Math.max(MIN, Math.min(MAX, v)) * 10) / 10;
    zoom = v;
    if (curKey) save('mabemat-mp-zoom-' + curKey, v);
    applyZoom();
  }
  /* Au-dela d'un certain grossissement, les listes en colonnes du
     livret ne tiennent plus : on retombe sur 2 colonnes, puis sur 1. */
  function colsForZoom(z) {
    if (z >= 1.9) return '1';
    if (z >= 1.5) return '2';
    return '0';
  }

  function applyZoom() {
    html.style.setProperty('--mp-zoom', zoom);
    html.setAttribute('data-mp-cols', colsForZoom(zoom));
    if (valEl) valEl.textContent = Math.round(zoom * 100) + ' %';
    if (btnMinus) btnMinus.disabled = zoom <= MIN + 0.001;
    if (btnPlus) btnPlus.disabled = zoom >= MAX - 0.001;
  }

  /* ── Contraste ── */
  function isContrast() { return html.getAttribute('data-mp-contrast') === 'on'; }
  function setContrast(on, persist) {
    if (on) html.setAttribute('data-mp-contrast', 'on');
    else html.removeAttribute('data-mp-contrast');
    if (btnContrast) btnContrast.classList.toggle('mp-on', !!on);
    if (persist) save(KEY_CONTRAST, on ? 'on' : 'off');
  }

  function toggleFull() {
    if (!document.fullscreenElement) {
      if (html.requestFullscreen) html.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  /* ── Ouverture / fermeture ── */
  function open() {
    var c = context();
    if (!c || !c.zone) return;
    if (!bar) buildBar();
    if (zoneEl) zoneEl.classList.remove('mp-zone');
    zoneEl = c.zone;
    curKey = c.key;
    zoneEl.classList.add('mp-zone');
    if (subEl) subEl.textContent = c.sub || '';
    zoom = readZoom(curKey);
    html.setAttribute('data-mp', 'on');
    applyZoom();
    setContrast(read(KEY_CONTRAST) === 'on', false);
    window.scrollTo(0, 0);
    if (c.key === 'lecon') {
      var ov = document.getElementById('lesson-overlay');
      if (ov) ov.scrollTop = 0;
    }
  }

  function close() {
    html.removeAttribute('data-mp');
    html.removeAttribute('data-mp-contrast');
    html.removeAttribute('data-mp-cols');
    if (zoneEl) { zoneEl.classList.remove('mp-zone'); zoneEl = null; }
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
  }

  /* ── Clavier (en capture : Échap ne doit pas fermer la leçon d'abord) ── */
  document.addEventListener('keydown', function (e) {
    if (html.getAttribute('data-mp') !== 'on') return;
    var tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    var k = e.key;
    if (k === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); }
    else if (k === '+' || k === '=') { e.preventDefault(); setZoom(zoom + STEP); }
    else if (k === '-' || k === '_') { e.preventDefault(); setZoom(zoom - STEP); }
    else if (k === '0') { e.preventDefault(); setZoom(DEF); }
    else if (k === 'c' || k === 'C') { e.preventDefault(); setContrast(!isContrast(), true); }
    else if (k === 'f' || k === 'F') { e.preventDefault(); toggleFull(); }
  }, true);

  /* ── Boutons « Projeter » ── */
  function makeLaunch(cls) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = cls;
    b.innerHTML = SVG_PROJ + '<span>Projeter</span>';
    b.setAttribute('aria-label', 'Lancer le mode projection');
    b.addEventListener('click', open);
    return b;
  }

  function init() {
    if (document.querySelector('.exercices-brevet')) {
      var hero = document.querySelector('.br-hero');
      if (hero && !hero.querySelector('.mp-launch')) hero.appendChild(makeLaunch('mp-launch'));
    }
    var ov = document.getElementById('lesson-overlay');
    if (ov && !ov.querySelector('.mp-launch')) ov.appendChild(makeLaunch('mp-launch mp-launch-float'));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.MaBematProjection = { open: open, close: close };
})();
