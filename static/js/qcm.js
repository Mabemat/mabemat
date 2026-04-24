/* ═══════════════════════════════════════════════════
   QCM engine — MaBémath nouveau design
   ═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── KaTeX helper ── */
  function renderMath(el) {
    if (window.renderMathInElement) {
      renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  }

  /* ── Initialisation ── */
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.qcm-container').forEach(function (container) {
      var auto = container.querySelector('.qcm-auto');
      if (auto) {
        initLegacy(container);   // automatismes — ancien comportement conservé
      } else {
        initNew(container);      // QCM standard — nouveau design
      }
    });
  });

  /* ══════════════════════════════════════════════════
     NOUVEAU DESIGN
     ══════════════════════════════════════════════════ */
  function initNew(container) {
    /* 1. Extraire les données depuis le HTML du shortcode */
    var rawQs = container.querySelectorAll('.qcm-q');
    if (!rawQs.length) return;

    var questions = [];
    rawQs.forEach(function (qEl) {
      var correct = parseInt(qEl.dataset.correct, 10);
      var questionHTML = qEl.querySelector('.qcm-question').innerHTML.trim();
      var opts = [];
      qEl.querySelectorAll('.qcm-o').forEach(function (o) {
        var span = o.querySelector('span:not(.qcm-letter):not(.rd)');
        opts.push(span ? span.innerHTML.trim() : o.innerHTML.trim());
      });
      var corrEl = qEl.querySelector('.qcm-correction');
      var explain = corrEl ? corrEl.innerHTML.trim() : '';
      questions.push({ q: questionHTML, options: opts, correct: correct, explain: explain });
    });

    /* Masquer le HTML brut du shortcode */
    rawQs.forEach(function (q) { q.style.display = 'none'; });

    /* URL de retour au chapitre */
    var chapterUrl = container.dataset.chapterUrl || '';

    /* 2. État */
    var currentIdx = 0;
    var answers = {};

    /* 3. Rendu */
    function render() {
      container.innerHTML = '';
      if (currentIdx >= questions.length) {
        renderResult();
      } else {
        renderQuestion(currentIdx);
      }
    }

    function makePips() {
      var div = document.createElement('div');
      div.className = 'qcm-progress';
      questions.forEach(function (_, i) {
        var pip = document.createElement('div');
        var c = 'pip';
        if (i === currentIdx) c += ' current';
        else if (i in answers) c += (answers[i] === questions[i].correct) ? ' done-ok' : ' done-ko';
        pip.className = c;
        div.appendChild(pip);
      });
      return div;
    }

    function renderQuestion(idx) {
      var q = questions[idx];
      var locked = idx in answers;
      var selected = answers[idx];
      var letters = ['A', 'B', 'C', 'D', 'E'];

      /* En-tête */
      var head = document.createElement('div');
      head.className = 'qcm-head';
      head.innerHTML =
        '<div></div>' +
        '<div class="qcm-meta-right">' +
          '<span class="qcm-qnum">Question ' +
          String(idx + 1).padStart(2, '0') + '\u00a0/ ' +
          String(questions.length).padStart(2, '0') +
          '</span>' +
        '</div>';
      container.appendChild(head);
      container.appendChild(makePips());

      /* Carte */
      var card = document.createElement('div');
      card.className = 'q-card';

      var ghost = document.createElement('div');
      ghost.className = 'q-num';
      ghost.textContent = String(idx + 1).padStart(2, '0');
      card.appendChild(ghost);

      var lbl = document.createElement('div');
      lbl.className = 'label';
      lbl.textContent = 'Question ' + (idx + 1);
      card.appendChild(lbl);

      var qh2 = document.createElement('h2');
      qh2.innerHTML = q.q;
      card.appendChild(qh2);

      /* Options */
      var optsDiv = document.createElement('div');
      optsDiv.className = 'options';
      q.options.forEach(function (opt, i) {
        var o = document.createElement('div');
        var cls = 'opt';
        if (locked) {
          if (i === q.correct) cls += ' correct';
          else if (i === selected) cls += ' wrong';
          cls += ' locked';
        } else if (selected === i) {
          cls += ' selected';
        }
        o.className = cls;
        o.innerHTML = '<div class="mark">' + letters[i] + '</div><div class="txt">' + opt + '</div>';
        if (!locked) {
          (function (choice) {
            o.addEventListener('click', function () {
              answers[idx] = choice;
              render();
            });
          }(i));
        }
        optsDiv.appendChild(o);
      });
      card.appendChild(optsDiv);

      /* Feedback */
      if (locked) {
        var ok = (selected === q.correct);
        var fb = document.createElement('div');
        fb.className = 'feedback ' + (ok ? 'ok' : 'ko');
        fb.innerHTML =
          '<div class="h">' + (ok ? '✓\u00a0Bonne réponse' : '✗\u00a0Pas tout à fait') + '</div>' +
          '<div class="fb-body">' + q.explain + '</div>';
        card.appendChild(fb);
      }

      /* Navigation */
      var nav = document.createElement('div');
      nav.className = 'q-nav';

      var prevBtn = document.createElement('button');
      prevBtn.className = 'btn btn-ghost';
      prevBtn.textContent = '← Précédente';
      prevBtn.disabled = (idx === 0);
      if (idx === 0) prevBtn.style.opacity = '0.4';
      prevBtn.addEventListener('click', function () { currentIdx = Math.max(0, currentIdx - 1); render(); });

      var hint = document.createElement('div');
      hint.className = 'hint';
      hint.textContent = locked ? '' : 'choisis une réponse pour continuer';

      var nextBtn = document.createElement('button');
      if (locked) {
        nextBtn.className = 'btn btn-accent';
        nextBtn.textContent = (idx === questions.length - 1) ? 'Voir le score →' : 'Suivante →';
        nextBtn.addEventListener('click', function () {
          if (idx < questions.length - 1) { currentIdx = idx + 1; }
          else { currentIdx = questions.length; }
          render();
        });
      } else {
        nextBtn.className = 'btn btn-ghost';
        nextBtn.textContent = 'Suivante →';
        nextBtn.disabled = true;
        nextBtn.style.opacity = '0.4';
      }

      nav.appendChild(prevBtn);
      nav.appendChild(hint);
      nav.appendChild(nextBtn);
      card.appendChild(nav);
      container.appendChild(card);

      renderMath(container);
    }

    function renderResult() {
      var total = questions.length;
      var correctCount = 0;
      for (var i = 0; i < questions.length; i++) {
        if (answers[i] === questions[i].correct) correctCount++;
      }

      var msg, sub;
      if (correctCount === total) {
        msg = 'Sans faute\u00a0!';
        sub = 'Tu maîtrises le chapitre. Passe au suivant quand tu veux.';
      } else if (correctCount >= Math.ceil(total * 0.7)) {
        msg = 'Très <em>bien</em>.';
        sub = 'Quelques petites erreurs — relis la section correspondante dans la leçon et retente.';
      } else if (correctCount >= Math.ceil(total * 0.5)) {
        msg = 'Pas <em>mal</em>.';
        sub = 'Tu as compris le début. Reprends calmement les sections où tu as bloqué.';
      } else {
        msg = 'Il faut <em>relire</em>.';
        sub = 'Pas de panique — relis la leçon, puis retente le QCM. C\'est comme ça qu\'on progresse.';
      }

      var res = document.createElement('div');
      res.className = 'result';

      var scoreDiv = document.createElement('div');
      scoreDiv.className = 'score';
      scoreDiv.innerHTML =
        '<span>' + correctCount + '</span>' +
        '<span class="sep">/</span>' +
        '<span style="color:var(--ink-3)">' + total + '</span>';
      res.appendChild(scoreDiv);

      var h2 = document.createElement('h2');
      h2.innerHTML = msg;
      res.appendChild(h2);

      var p = document.createElement('p');
      p.textContent = sub;
      res.appendChild(p);

      var actions = document.createElement('div');
      actions.className = 'actions';
      var restartBtn = document.createElement('button');
      restartBtn.className = 'btn btn-accent';
      restartBtn.textContent = '↻ Refaire le QCM';
      restartBtn.addEventListener('click', function () {
        answers = {};
        currentIdx = 0;
        render();
      });
      actions.appendChild(restartBtn);
      if (chapterUrl) {
        var backLink = document.createElement('a');
        backLink.className = 'btn btn-ghost';
        backLink.href = chapterUrl;
        backLink.textContent = '← Retour au chapitre';
        actions.appendChild(backLink);
      }
      res.appendChild(actions);

      /* Grille récapitulative */
      var review = document.createElement('div');
      review.className = 'review';
      questions.forEach(function (q, i) {
        var ok = (answers[i] === q.correct);
        var chip = document.createElement('div');
        chip.className = 'chip-q ' + (ok ? 'ok' : 'ko');
        chip.textContent = 'Q' + String(i + 1).padStart(2, '0') + ' ' + (ok ? '✓' : '✗');
        review.appendChild(chip);
      });
      res.appendChild(review);
      container.appendChild(res);

      renderMath(container);
    }

    render();
  }

  /* ══════════════════════════════════════════════════
     ANCIEN COMPORTEMENT — automatismes (qcm-auto)
     ══════════════════════════════════════════════════ */
  function initLegacy(container) {
    var questions = container.querySelectorAll('.qcm-q');
    var total = questions.length;
    if (!total) return;

    var noScore = container.dataset.noScore === 'true';
    var isDevoir = container.dataset.mode === 'devoir';
    container._qcm = { answered: 0, correct: 0, total: total };

    questions.forEach(function (q, i) {
      q._qcmContainer = container;
      var num = document.createElement('div');
      num.className = 'qcm-num';
      num.textContent = 'Question ' + (i + 1);
      q.insertBefore(num, q.firstChild);
    });

    if (!noScore && !isDevoir) {
      container.insertAdjacentHTML('afterbegin',
        '<div class="qcm-header">' +
          '<span class="qcm-meta">Question <span class="qcm-cur">1</span> sur ' + total + '</span>' +
          '<span class="qcm-score">Score\u00a0: <span class="qcm-sc">0</span>/' + total + '</span>' +
        '</div>'
      );
    }
  }

  window.qcmCheck = function (el) {
    var q = el.closest('.qcm-q');
    if (q.classList.contains('done')) return;
    var container = q._qcmContainer;
    if (!container) return;
    var state = container._qcm;
    var noScore = container.dataset.noScore === 'true';
    var isDevoir = container.dataset.mode === 'devoir';
    var correctIdx = parseInt(q.dataset.correct, 10);
    var selectedIdx = parseInt(el.dataset.index, 10);
    var isCorrect = (selectedIdx === correctIdx);
    q.classList.add('done');
    state.answered++;

    if (isDevoir) {
      el.classList.add('chosen');
      if (isCorrect) state.correct++;
      if (state.answered === state.total) {
        container.insertAdjacentHTML('beforeend',
          '<div class="qcm-result"><div class="qcm-result-score">Score\u00a0: ' + state.correct + '\u00a0/\u00a0' + state.total + '</div></div>'
        );
      }
      return;
    }

    var corr = q.querySelector('.qcm-correction');
    var hasCorr = corr && corr.innerHTML.trim() !== '';
    var exp = q.querySelector('.qcm-exp');
    if (exp && hasCorr) {
      exp.style.display = 'block';
      exp.style.fontWeight = 'bold';
      exp.textContent = 'Explications\u00a0:';
      exp.style.color = isCorrect ? '#819171' : '#B85C5C';
    }
    if (corr && hasCorr) corr.style.display = 'block';

    if (isCorrect) {
      el.classList.add('ok');
      state.correct++;
    } else {
      el.classList.add('ko');
      var correctEl = q.querySelector('[data-index="' + correctIdx + '"]');
      if (correctEl) correctEl.classList.add('ok');
    }

    if (!noScore) {
      var sc = container.querySelector('.qcm-sc');
      if (sc) sc.textContent = state.correct;
      var cur = container.querySelector('.qcm-cur');
      if (cur) cur.textContent = Math.min(state.answered + 1, state.total);
    }

    if (state.answered === state.total && !noScore && !isDevoir) {
      var pct = Math.round((state.correct / state.total) * 100);
      container.insertAdjacentHTML('beforeend',
        '<div class="qcm-result done">' +
          '<div class="qcm-result-score">' + state.correct + ' / ' + state.total + ' (' + pct + ' %)</div>' +
          '<div class="qcm-result-msg">' + (pct >= 80 ? '🎉 Excellent !' : pct >= 60 ? '👍 Bien joué.' : '📖 Relis le cours.') + '</div>' +
        '</div>'
      );
    }
  };

  /* ══════════════════════════════════════════════════
     AUTOMATISMES 3e — toggle correction
     ══════════════════════════════════════════════════ */
  window.toggleCorr = function (btn) {
    var exo = btn.closest('.auto3-exo');
    if (!exo) return;
    var corr = exo.querySelector('.auto3-corr');
    if (!corr) return;
    var visible = corr.style.display !== 'none';
    if (visible) {
      corr.style.display = 'none';
      btn.innerHTML = '&#9658; Voir la correction';
    } else {
      corr.style.display = 'block';
      btn.innerHTML = '&#9660; Masquer la correction';
      if (window.renderMathInElement) {
        renderMathInElement(corr, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }
  };

}());
