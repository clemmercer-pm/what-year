// WHAT YEAR?? — puzzle data
// Session 2: a single hardcoded puzzle to build the core loop against.
// Schema (locked in SPEC.md): each clue is its own object so types can mix,
// ordered hard -> easy by obscurity. Daily selection + a full set come later.

const PUZZLES = [
  {
    id: 1,
    year: 1969,
    era: 'AD',
    clues: [
      { type: 'work',   text: 'A new children’s TV show — Sesame Street — airs its very first episode in the United States.' },
      { type: 'person', text: 'Born this year: the actor Matthew McConaughey and the rapper Jay-Z.' },
      { type: 'event',  text: 'Apollo 11 lands the first humans on the Moon.' },
    ],
    reveal: [
      'Sesame Street premiered on 10 November 1969.',
      'Matthew McConaughey (4 Nov) and Jay-Z (4 Dec) were both born in 1969.',
      'Apollo 11 — Armstrong and Aldrin walked on the Moon on 20 July 1969.',
    ],
  },
];
