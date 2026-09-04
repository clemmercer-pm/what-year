/* WHAT YEAR?? — core play loop + daily selection (Sessions 2–3).
   Session 3 adds: a deterministic daily puzzle (same for everyone, by date, no backend),
   a puzzle number, and per-day localStorage so a game in progress restores and a
   finished day stays finished. Share + streak/stats are still Session 5. */

(function () {
  'use strict';

  const MAX_GUESSES = 6;
  const MAX_AD = new Date().getFullYear(); // no guessing the future
  const MAX_BC = 6000;                      // generous lower bound
  const DAY_MS = 86400000;

  // Puzzle No. 1 = this launch date. Provisional — re-pin at ship (Session 6)
  // once the real content order is set. Kept early so today shows a positive number.
  const EPOCH = { y: 2026, m: 8, d: 13 };
  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  // --- date -> puzzle (deterministic, no backend) ---
  // We treat a player's LOCAL calendar date as "today", but do the day-count in UTC
  // so daylight-saving never shifts the boundary by an hour.
  const toUTC = (p) => Date.UTC(p.y, p.m - 1, p.d);

  function today() {
    const n = new Date();
    return { y: n.getFullYear(), m: n.getMonth() + 1, d: n.getDate() };
  }

  function playDate() {
    // ?date=YYYY-MM-DD lets us preview any day locally. Anything malformed or
    // not a real calendar date is ignored — we fall back to the actual today.
    const q = new URLSearchParams(location.search).get('date');
    if (!q) return today();

    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(q);
    if (!match) { console.warn('Ignoring ?date — expected YYYY-MM-DD, got:', q); return today(); }

    const y = +match[1], m = +match[2], d = +match[3];
    // Verify it round-trips to the same calendar date (rejects 2026-02-30, month 13, etc.).
    const test = new Date(Date.UTC(y, m - 1, d));
    const real = test.getUTCFullYear() === y && test.getUTCMonth() === m - 1 && test.getUTCDate() === d;
    if (!real) { console.warn('Ignoring ?date — not a real date:', q); return today(); }

    return { y, m, d };
  }

  const pd = playDate();
  const dateKey = `${pd.y}-${String(pd.m).padStart(2, '0')}-${String(pd.d).padStart(2, '0')}`;
  const dayNumber = Math.floor((toUTC(pd) - toUTC(EPOCH)) / DAY_MS);
  const puzzleNumber = dayNumber + 1;
  const N = PUZZLES.length;
  const puzzleIndex = ((puzzleNumber - 1) % N + N) % N; // safe modulo, wraps for any integer
  const puzzle = PUZZLES[puzzleIndex];

  const STORE_KEY = `whatyear:progress:${dateKey}`;
  // Provisional GitHub Pages URL — confirm/finalise at deploy (Session 6 checklist).
  const SHARE_URL = 'https://clemmercer-pm.github.io/what-year/';

  // --- state ---
  const state = {
    era: 'AD',
    guesses: [],      // { year, era, signed, result: 'win'|'early'|'late', sameDecade }
    finished: false,
    won: false,
  };

  // --- persistence (per day) ---
  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({
        guesses: state.guesses, finished: state.finished, won: state.won,
      }));
    } catch (e) { /* private mode / storage off — game still plays, just won't persist */ }
  }
  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return;
      const s = JSON.parse(raw);
      if (s && Array.isArray(s.guesses)) {
        state.guesses = s.guesses;
        state.finished = !!s.finished;
        state.won = !!s.won;
      }
    } catch (e) { /* ignore corrupt/missing */ }
  }

  // --- share (spoiler-free: reveals your hunt, never the year or the events) ---
  function guessGlyph(g) {
    if (g.result === 'win') return '🟩';   // correct
    if (g.sameDecade) return '🟨';          // right decade, wrong year
    return g.result === 'early' ? '⬆️' : '⬇️'; // ⬆️ too early / ⬇️ too late
  }
  // Clues that were showing when the deciding guess was made (unlock on guesses 3 & 5).
  function cluesUsed() {
    return Math.min(puzzle.clues.length, 1 + Math.floor((state.guesses.length - 1) / 2));
  }
  function buildShareText() {
    const score = state.won ? `${state.guesses.length}/${MAX_GUESSES}` : `X/${MAX_GUESSES}`;
    const mark = state.won ? '✅' : '❌';
    const grid = state.guesses.map(guessGlyph).join('');
    return `WHAT YEAR?? No.${puzzleNumber} — ${score} ${mark}\n${grid}\n🔎 ${cluesUsed()}/${puzzle.clues.length} clues\n${SHARE_URL}`;
  }
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback for older / mobile browsers without the async clipboard API.
    return new Promise((resolve, reject) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); resolve(); }
      catch (e) { reject(e); }
      finally { document.body.removeChild(ta); }
    });
  }

  // --- helpers ---
  const signed = (year, era) => (era === 'BC' ? -year : year);
  const answerSigned = () => signed(puzzle.year, puzzle.era);
  const decadeStart = (s) => Math.floor(s / 10) * 10;
  const cluesVisible = () => Math.min(puzzle.clues.length, 1 + Math.floor(state.guesses.length / 2));

  // --- DOM ---
  const el = {
    puzznum: document.getElementById('puzznum'),
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
  function renderMeta() {
    el.puzznum.textContent = `No. ${puzzleNumber} · ${pd.d} ${MONTHS[pd.m - 1]} ${pd.y}`;
  }

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

        // Optional image/map. Degrades gracefully: if the file is missing or
        // fails to load, we drop the figure and keep the text clue.
        if (clue.image) {
          const fig = document.createElement('figure');
          fig.className = 'clue-fig';
          const img = document.createElement('img');
          img.src = clue.image;
          img.alt = clue.alt || '';
          img.loading = 'lazy';
          img.addEventListener('error', () => fig.remove());
          fig.appendChild(img);
          if (clue.attribution) {
            const cap = document.createElement('figcaption');
            cap.textContent = clue.attribution; // textContent = safe
            fig.appendChild(cap);
          }
          body.appendChild(fig);
        }
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

    // Spoiler-free share
    const share = document.createElement('div');
    share.className = 'share';
    const grid = document.createElement('div');
    grid.className = 'share-grid';
    grid.textContent = state.guesses.map(guessGlyph).join('');
    const cluesLine = document.createElement('div');
    cluesLine.className = 'share-clues';
    cluesLine.textContent = `🔎 ${cluesUsed()}/${puzzle.clues.length} clues`;
    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = 'Copy result';
    const copyNote = document.createElement('span');
    copyNote.className = 'copy-note';
    copyNote.setAttribute('role', 'status');
    copyNote.setAttribute('aria-live', 'polite');
    copyBtn.addEventListener('click', () => {
      copyText(buildShareText())
        .then(() => { copyNote.textContent = 'Copied — paste it into the group chat!'; })
        .catch(() => { copyNote.textContent = 'Couldn’t copy automatically — long-press to select.'; });
    });
    share.append(grid, cluesLine, copyBtn, copyNote);

    const tomorrow = document.createElement('p');
    tomorrow.className = 'placeholder';
    tomorrow.textContent = 'Come back tomorrow for a new one.';

    el.endscreen.append(h2, ans, reveals, share, tomorrow);
  }

  function render() {
    renderMeta();
    renderClues();
    renderHistory();
    renderCount();
    renderEnd();
  }

  // --- input handling ---
  function setEra(era) {
    if (state.finished) return;
    state.era = era;
    el.eraBtns.forEach((b) => {
      const active = b.dataset.era === era;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    el.input.focus();
  }

  function flash(msg) { el.hint.textContent = msg; }

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

    save();
    render();
    if (!state.finished) el.input.focus();
  }

  // --- wire up ---
  el.eraBtns.forEach((b) => b.addEventListener('click', () => setEra(b.dataset.era)));
  el.guessBtn.addEventListener('click', submitGuess);
  el.input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submitGuess(); });

  load();
  render();
  if (!state.finished) el.input.focus();
})();
