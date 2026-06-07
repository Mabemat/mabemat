/* ============================================================
   MaBémat — Mode projection 1re (focus)
   Chargé par le layout automatismes-1re.
   Les cartes sont du QCM : affiche question + choix A/B/C/D,
   espace/entrée révèle la bonne réponse et la correction.
   Projette les deux panneaux : Séance + Devoir.
   ============================================================ */
(function () {
  'use strict';

  var btn = document.getElementById('btn-project');
  var seanceCards = document.getElementById('seance-cards');
  var devoirCards = document.getElementById('devoir-cards');
  if (!btn || (!seanceCards && !devoirCards)) return;

  var LETTERS = ['A', 'B', 'C', 'D'];

  /* ── Lecture des données par panneau ── */
  function readPanel(container) {
    if (!container) return [];
    return [].slice.call(container.querySelectorAll('.auto1re-card')).map(function (card) {
      var correct   = parseInt(card.dataset.correct, 10);
      var numEl     = card.querySelector('.auto1re-num');
      var qNode     = card.querySelector('.auto1re-enonce');
      var choices   = [].slice.call(card.querySelectorAll('.auto1re-choice .auto1re-body'));
      var corrEl    = card.querySelector('.auto1re-corr > div');
      return { numEl: numEl, qNode: qNode, choices: choices, correct: correct, corrEl: corrEl };
    });
  }

  var panels = [
    { titre: 'Séance', slug: 'S', data: readPanel(seanceCards) },
    { titre: 'Devoir', slug: 'D', data: readPanel(devoirCards) }
  ].filter(function (p) { return p.data.length > 0; });

  if (!panels.length) return;

  /* ── État ── */
  var SCALE_KEY = 'mabemat-proj-scale';
  var scale = parseInt(localStorage.getItem(SCALE_KEY), 10);
  if (!scale || scale < 12 || scale > 30) scale = 18;
  var panel = 0, q = 0;
  var revealed = {};
  /* ── Guard PIN ── */
  var _projUnlocked = false;
  function buildPinDialog(onSuccess) {
    var wd = document.createElement('div');
    wd.className = 'proj-pin-overlay';
    wd.innerHTML =
      '<div class="proj-pin-box">' +
        '<h2>Mode projection</h2>' +
        '<p>Entrez le code pour accéder<br>aux corrections.</p>' +
        '<input class="proj-pin-input" type="password" inputmode="numeric" maxlength="6" autocomplete="off" placeholder="····">' +
        '<div class="proj-pin-err" aria-live="polite"></div>' +
        '<button class="proj-pin-submit" type="button">Valider</button>' +
      '</div>';
    document.body.appendChild(wd);

    var inp  = wd.querySelector('.proj-pin-input');
    var err  = wd.querySelector('.proj-pin-err');
    var sbmt = wd.querySelector('.proj-pin-submit');
    var pin  = (window.PROJ_PIN || '0000').toString();

    function attempt() {
      if (inp.value === pin) {
        _projUnlocked = true;
        wd.classList.remove('open');
        setTimeout(function(){ document.body.removeChild(wd); onSuccess(); }, 300);
      } else {
        inp.classList.add('error');
        err.textContent = 'Code incorrect';
        inp.value = '';
        setTimeout(function(){ inp.classList.remove('error'); }, 500);
        inp.focus();
      }
    }

    sbmt.addEventListener('click', attempt);
    inp.addEventListener('keydown', function(e){ if (e.key === 'Enter') attempt(); });
    wd.addEventListener('keydown', function(e){ if (e.key === 'Escape') { wd.classList.remove('open'); setTimeout(function(){ document.body.removeChild(wd); }, 300); } });

    requestAnimationFrame(function(){ wd.classList.add('open'); inp.focus(); });
  }

  function requirePin(onSuccess) {
    if (_projUnlocked) { onSuccess(); return; }
    buildPinDialog(onSuccess);
  }


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
          '<div class="proj-choices" data-choices></div>' +
          '<div class="pf-c" data-c hidden><span class="pf-c-label">Correction</span><div class="proj-c" data-cbody></div></div>' +
        '</div>' +
      '</div>' +
    '</div></div>';
  document.body.appendChild(ov);

  var subEl     = ov.querySelector('[data-sub]');
  var seancesEl = ov.querySelector('[data-seances]');
  var numElOv   = ov.querySelector('[data-num]');
  var tagEl     = ov.querySelector('[data-tag]');
  var qEl       = ov.querySelector('[data-q]');
  var choicesEl = ov.querySelector('[data-choices]');
  var cEl       = ov.querySelector('[data-c]');
  var cBody     = ov.querySelector('[data-cbody]');
  var focusEl   = ov.querySelector('[data-focus]');

  /* Sous-titre semaine */
  var crumbWeek = document.querySelector('.crumbs span:last-child');
  subEl.textContent = 'Automatismes 1re' + (crumbWeek ? ' · ' + crumbWeek.textContent.trim() : '');

  /* Pills panneaux */
  var pills = panels.map(function (p, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = p.slug;
    b.title = p.titre;
    b.addEventListener('click', function () { gotoPanel(i); });
    seancesEl.appendChild(b);
    return b;
  });

  /* ── Rendu ── */
  function render() {
    var ex = panels[panel].data[q];
    if (!ex) return;
    ov.style.setProperty('--proj-scale', scale);
    numElOv.textContent = ex.numEl ? ex.numEl.textContent.trim() : '';
    tagEl.textContent = panels[panel].titre + ' · Question ' + (q + 1) + ' / ' + panels[panel].data.length;
    qEl.innerHTML = ex.qNode ? ex.qNode.innerHTML : '';

    /* Choix A/B/C/D */
    var key = panel + '-' + q;
    var isRev = !!revealed[key];
    choicesEl.innerHTML = '';
    ex.choices.forEach(function (ch, i) {
      var btn = document.createElement('div');
      btn.className = 'proj-choice';
      if (isRev && i === ex.correct) btn.classList.add('correct');
      btn.innerHTML = '<span class="proj-choice-letter">' + LETTERS[i] + '</span>'
                    + '<span class="proj-choice-body">' + ch.innerHTML + '</span>';
      choicesEl.appendChild(btn);
    });

    /* Correction */
    var corrHtml = ex.corrEl ? ex.corrEl.innerHTML.trim() : '';
    if (isRev && corrHtml) { cBody.innerHTML = corrHtml; cEl.hidden = false; }
    else { cEl.hidden = true; cBody.innerHTML = ''; }

    focusEl.style.cursor = 'pointer';
    pills.forEach(function (p, i) { p.classList.toggle('active', i === panel); });
  }

  /* ── Navigation ── */
  function nextQ() {
    if (q < panels[panel].data.length - 1) { q++; }
    else if (panel < panels.length - 1) { panel++; q = 0; }
    render();
  }
  function prevQ() {
    if (q > 0) { q--; }
    else if (panel > 0) { panel--; q = panels[panel].data.length - 1; }
    render();
  }
  function gotoPanel(i) { panel = i; q = 0; render(); }
  function toggleReveal() { var key = panel + '-' + q; revealed[key] = !revealed[key]; render(); }
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
    var activeTab = document.querySelector('.mode-tabs button.active');
    if (activeTab && activeTab.dataset.tab === 'devoir') panel = 1;
    else panel = 0;
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
  btn.addEventListener('click', function(){ requirePin(open); });
  focusEl.addEventListener('click', toggleReveal);

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
          if (i < panels[panel].data.length) { q = i; render(); }
        }
    }
  });

  if (/[?#].*proj/i.test(location.href)) open();
})();
