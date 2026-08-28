/* WHAT YEAR?? — Session 2 core play loop.
   One hardcoded puzzle. 6 guesses. Clue unlocks on guesses 1/3/5.
   Exact-year win; too-early/too-late + "right decade!" feedback.
   No daily selection, no share, no stats yet — those are Sessions 3 & 5. */

(function () {
  'use strict';

  const MAX_GUESSES = 6;
  const MAX_AD = new Date().getFullYear(); // no guessing the future
  const MAX_BC = 6000;                      // generous lower bound
  const puzzle = PUZZLES[0];                // hardcoded for now

  // --- state ---
  const state = {
    era: 'AD',
    guesses: [],      // { year, era, signed, result: 'win'|'early'|'late', sameDecade }
    finished: false,
    won: false,
  };

  // --- helpers ---
  // BC years are negative; AD positive. History has no year 0.
  const signed = (year, era) => (era === 'BC' ? -year : year);
  const answerSigned = () => signed(puzzle.year, puzzle.era);
  // Decade bucket that works for negative years too.
  const decadeStart = (s) => Math.floor(s / 10) * 10;
  // Clues visible: 1 to start, +1 on guesses 3 and 5. (0-1 made -> 1, 2-3 -> 2, 4-5 -> 3)
  const cluesVisible = () => Math.min(puzzle.clues.length, 1 + Math.floor(state.guesses.length / 2));

  // --- DOM ---
  const el = {
    clues: document.getElementById('clues'),
    guessbar: document.getElementById('guessbar'),
    input: document.getElementById('yearInput'),
    guessBtn: document.getElementById('guessBtn'),
    hint: document.getElementById('hint'),
    history: document.getElementById('history'),
    endscreen: document.getElementById('endscreen'),
    guessCount: document.getElementById('guessCount'),
    eraBtns: Array.from(document.querySelectorAll('.era')),
  };

  // --- rendering ---
  function renderClues() {
    const visible = cluesVisible();
    el.clues.innerHTML = '';
    puzzle.clues.forEach((clue, i) => {
      const shown = i < visible;
      const li = document.createElement('div');
      li.className = 'clue' + (shown ? '' : ' locked');

      const n = document.createElement('div');
      n.className = 'n';
      n.textContent = shown ? String(i + 1) : '🔒';
      li.appendChild(n);

      const body = document.createElement('div');
      body.className = 'body';
      if (shown) {
        const kind = document.createElement('div');
        kind.className = 'kind';
        kind.textContent = clue.type;
        const text = document.createElement('div');
        text.className = 'text';
        text.textContent = clue.text; // textContent = no HTML injection
        body.append(kind, text);
      } else {
        const text = document.createElement('div');
        text.className = 'text';
        const unlockAt = i === 1 ? 3 : 5; // clue 2 -> guess 3, clue 3 -> guess 5
        text.textContent = `Unlocks on guess ${unlockAt}`;
        body.appendChild(text);
      }
      li.appendChild(body);
      el.clues.appendChild(li);
    });
  }

  function renderHistory() {
    el.history.innerHTML = '';
    state.guesses.forEach((g) => {
      const li = document.createElement('li');
      li.className = 'guess-row ' + g.result;

      const yr = document.createElement('span');
      yr.className = 'yr';
      yr.textContent = `${g.year} ${g.era}`;

      const fb = document.createElement('span');
      fb.className = 'fb';
      if (g.result === 'win') {
        fb.textContent = '🎯 Correct!';
      } else {
        if (g.sameDecade) {
          const tag = document.createElement('span');
          tag.className = 'decade-tag';
          tag.textContent = 'RIGHT DECADE';
          fb.appendChild(tag);
        }
        const dir = document.createElement('span');
        dir.textContent = g.result === 'early' ? 'Too early — later ↑' : 'Too late — earlier ↓';
        fb.appendChild(dir);
      }
      li.append(yr, fb);
      el.history.appendChild(li);
    });
  }

  function renderCount() {
    if (state.finished) { el.guessCount.textContent = ''; return; }
    const left = MAX_GUESSES - state.guesses.length;
    el.guessCount.textContent = `${left} guess${left === 1 ? '' : 'es'} left`;
  }

  function renderEnd() {
    if (!state.finished) { el.endscreen.hidden = true; return; }
    el.guessbar.hidden = true;
    el.hint.textContent = '';
    el.endscreen.hidden = false;
    el.endscreen.innerHTML = '';

    const h2 = document.createElement('h2');
    h2.textContent = state.won
      ? `Got it in ${state.guesses.length}/${MAX_GUESSES} 🎉`
      : 'Out of guesses';
    const ans = document.createElement('div');
    ans.className = 'answer';
    ans.textContent = `${puzzle.year} ${puzzle.era}`;

    const reveals = document.createElement('ul');
    reveals.className = 'reveals';
    puzzle.reveal.forEach((r, i) => {
      const li = document.createElement('li');
      li.setAttribute('data-n', (i + 1) + '.');
      li.textContent = r; // textContent = safe
      reveals.appendChild(li);
    });

    const ph = document.createElement('p');
    ph.className = 'placeholder';
    ph.textContent = 'Share card + streak land in Session 5. For now, that’s the loop.';

    el.endscreen.append(h2, ans, reveals, ph);
  }

  function render() {
    renderClues();
    renderHistory();
    renderCount();
    renderEnd();
  }

  // --- input handling ---
  function setEra(era) {
    state.era = era;
    el.eraBtns.forEach((b) => {
      const active = b.dataset.era === era;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    el.input.focus();
  }

  function flash(msg) {
    el.hint.textContent = msg;
  }

  function submitGuess() {
    if (state.finished) return;
    const raw = el.input.value.trim();
    if (raw === '') { flash('Type a year first.'); return; }

    const year = Number(raw);
    if (!Number.isInteger(year) || year < 1) {
      flash('Enter a whole year, like 1969.');
      return;
    }
    const cap = state.era === 'AD' ? MAX_AD : MAX_BC;
    if (year > cap) {
      flash(state.era === 'AD' ? `Keep it ${MAX_AD} or earlier.` : 'That’s further back than the game goes.');
      return;
    }

    const gSigned = signed(year, state.era);
    if (state.guesses.some((g) => g.signed === gSigned)) {
      flash('You’ve already tried that one.');
      return;
    }

    const ans = answerSigned();
    let result, sameDecade = false;
    if (gSigned === ans) {
      result = 'win';
    } else {
      result = gSigned < ans ? 'early' : 'late';
      sameDecade = decadeStart(gSigned) === decadeStart(ans);
    }

    state.guesses.push({ year, era: state.era, signed: gSigned, result, sameDecade });
    el.input.value = '';
    flash('');

    if (result === 'win') {
      state.finished = true;
      state.won = true;
    } else if (state.guesses.length >= MAX_GUESSES) {
      state.finished = true;
      state.won = false;
    }

    render();
    if (!state.finished) el.input.focus();
  }

  // --- wire up ---
  el.eraBtns.forEach((b) => b.addEventListener('click', () => setEra(b.dataset.era)));
  el.guessBtn.addEventListener('click', submitGuess);
  el.input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submitGuess(); });

  render();
  el.input.focus();
})();
