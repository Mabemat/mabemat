(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.qcm-container').forEach(function(container) {
      initContainer(container);
    });
  });

  function initContainer(container) {
    const questions = container.querySelectorAll('.qcm-q');
    const total = questions.length;
    if (!total) return;

    const noScore  = container.dataset.noScore === 'true';
    const isDevoir = container.dataset.mode === 'devoir';

    container._qcm = { answered: 0, correct: 0, total: total };

    // Numérotation "Question 1", "Question 2"…
    questions.forEach(function(q, i) {
      q._qcmContainer = container;
      const num = document.createElement('div');
      num.className = 'qcm-num';
      num.textContent = 'Question ' + (i + 1);
      num.style.fontWeight = 'bold';
      num.style.marginBottom = '0.5rem';
      q.insertBefore(num, q.firstChild);
    });

    // En-tête score uniquement pour les QCM classiques
    if (!noScore && !isDevoir) {
      container.insertAdjacentHTML('afterbegin',
        '<div class="qcm-header">' +
          '<span class="qcm-meta">Question <span class="qcm-cur">1</span> sur ' + total + '</span>' +
          '<span class="qcm-score">Score\u00a0: <span class="qcm-sc">0</span>/' + total + '</span>' +
        '</div>'
      );
    }
  }

  window.qcmCheck = function(el) {
    const q = el.closest('.qcm-q');
    if (q.classList.contains('done')) return;

    const container = q._qcmContainer;
    const state     = container._qcm;
    const noScore   = container.dataset.noScore === 'true';
    const isDevoir  = container.dataset.mode === 'devoir';

    const correctIdx  = parseInt(q.dataset.correct);
    const selectedIdx = parseInt(el.dataset.index);
    const isCorrect   = selectedIdx === correctIdx;

    q.classList.add('done');
    state.answered++;

    if (isDevoir) {
      // Mode devoir : marquer la réponse choisie de façon neutre, rien d'autre
      el.classList.add('chosen');
      if (isCorrect) state.correct++;

      // Score total uniquement quand toutes les questions sont répondues
      if (state.answered === state.total) {
        container.insertAdjacentHTML('beforeend',
          '<div class="qcm-result">' +
            '<div class="qcm-result-score">Score\u00a0: ' + state.correct + '\u00a0/\u00a0' + state.total + '</div>' +
          '</div>'
        );
      }
      return;
    }

    // Mode normal : afficher correction + couleurs
    const corr = q.querySelector('.qcm-correction');
    const hasCorr = corr && corr.innerHTML.trim() !== '';

    const exp = q.querySelector('.qcm-exp');
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
      q.querySelectorAll('.qcm-o')[correctIdx].classList.add('ok');
    }

    if (!noScore) {
      const scEl  = container.querySelector('.qcm-sc');
      const curEl = container.querySelector('.qcm-cur');
      if (scEl)  scEl.textContent  = state.correct;
      if (curEl) curEl.textContent = Math.min(state.answered + 1, state.total);
    }

    if (state.answered === state.total && !noScore) showResult(container, state);
  };

  function showResult(container, state) {
    const pct = Math.round((state.correct / state.total) * 100);
    let msg;
    if (pct === 100)     msg = 'Parfait\u00a0! Toutes les r\u00e9ponses sont correctes.';
    else if (pct >= 80)  msg = 'Tr\u00e8s bien\u00a0! Continue comme \u00e7a.';
    else if (pct >= 60)  msg = 'Bien, encore quelques points \u00e0 revoir.';
    else if (pct >= 40)  msg = 'Courage, r\u00e9vise les comp\u00e9tences du chapitre.';
    else                 msg = 'Reprends le cours avant de retenter le QCM.';

    container.insertAdjacentHTML('beforeend',
      '<div class="qcm-result">' +
        '<div class="qcm-result-score">' + state.correct + '/' + state.total + ' (' + pct + '%)</div>' +
        '<div class="qcm-result-msg">' + msg + '</div>' +
        '<button class="btn" onclick="location.reload()" ' +
        'style="color:var(--text-sec);border-color:var(--border);margin-top:0.8rem;">\u21ba Recommencer</button>' +
      '</div>'
    );
  }

})();
