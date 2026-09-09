# WHAT YEAR??

A daily history guessing game. Every day, everyone gets the **same** puzzle: **three clues, each a different thing that happened in the same year** - an event, a birth or death, a painting - and you guess the **year**.

**Play:** https://clemmercer-pm.github.io/what-year/

## How to play
- You get three clues (they start with one and unlock more as you miss).
- Guess the **exact year**, using the **BC / AD** toggle.
- **6 guesses.** A new clue unlocks on your 3rd and 5th guess.
- Each guess tells you **too early ↑ / too late ↓**, and whether you're in the **right decade**.
- When you're done, copy a **spoiler-free result** to share - it shows how you did, never the answer.

## How it's built
A small **static site** - plain HTML, CSS and vanilla JavaScript, no build step and no backend. The daily puzzle is chosen deterministically from the date, so everyone sees the same one without a server. Your progress is kept in `localStorage`.

- `index.html` - markup
- `styles.css` - styles
- `app.js` - game logic (daily selection, guessing, feedback, share)
- `puzzles.js` - the puzzle data
- `img/` - public-domain painting clues (see `img/README.md` for the sourcing policy)

Puzzle facts were checked with an independent review pass. Image clues are **public-domain paintings only**, with attribution.

It's a hobby project, vibe-coded for fun - and, being a static site, the answers live in the page source. That's fine for a game you play with family. 🙂
