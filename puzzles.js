// WHAT YEAR?? — puzzle data
// Session 3: a small EXAMPLE set so different days show different puzzles.
// These are real & checked, but the curated ~30–40 set is Session 4's job.
// Schema (locked in SPEC.md): each clue is its own object so types can mix,
// ordered hard -> easy by obscurity. `reveal` = one line per clue, shown on the answer screen.

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
  {
    id: 2,
    year: 1789,
    era: 'AD',
    clues: [
      { type: 'person', text: 'Born this year: the novelist James Fenimore Cooper, later author of The Last of the Mohicans.' },
      { type: 'event',  text: 'George Washington is inaugurated as the first President of the United States.' },
      { type: 'event',  text: 'A Paris mob storms the Bastille, igniting the French Revolution.' },
    ],
    reveal: [
      'James Fenimore Cooper was born on 15 September 1789.',
      'Washington was inaugurated in New York on 30 April 1789.',
      'The Bastille was stormed on 14 July 1789.',
    ],
  },
  {
    id: 3,
    year: 1215,
    era: 'AD',
    clues: [
      { type: 'person', text: 'Born this year: Kublai Khan, a future emperor of the Mongol Empire and of China.' },
      { type: 'event',  text: 'The Fourth Lateran Council convenes in Rome under Pope Innocent III.' },
      { type: 'event',  text: 'King John seals a charter of liberties at Runnymede — Magna Carta.' },
    ],
    reveal: [
      'Kublai Khan was born on 23 September 1215.',
      'The Fourth Lateran Council met in November 1215.',
      'Magna Carta was sealed on 15 June 1215.',
    ],
  },
  {
    id: 4,
    year: 1876,
    era: 'AD',
    clues: [
      { type: 'person', text: 'Born this year: the writer Jack London, later author of The Call of the Wild.' },
      { type: 'event',  text: 'US cavalry under George Custer are defeated at the Battle of the Little Bighorn.' },
      { type: 'event',  text: 'Alexander Graham Bell is granted a patent for the telephone.' },
    ],
    reveal: [
      'Jack London was born on 12 January 1876.',
      'The Battle of the Little Bighorn took place on 25–26 June 1876.',
      'Bell received US telephone patent No. 174,465 on 7 March 1876.',
    ],
  },
  {
    id: 5,
    year: 44,
    era: 'BC',
    clues: [
      { type: 'event', text: 'A brilliant comet blazes over Rome for seven days and is read as a dead leader’s soul ascending to the gods.' },
      { type: 'event', text: 'The month of Quintilis is renamed in honour of a recently assassinated Roman statesman.' },
      { type: 'event', text: 'Julius Caesar is stabbed to death by senators on the Ides of March.' },
    ],
    reveal: [
      'The “Caesar’s Comet” appeared in July 44 BC.',
      'Quintilis was renamed Julius (July) after Julius Caesar in 44 BC.',
      'Caesar was assassinated on 15 March (the Ides of March) 44 BC.',
    ],
  },
];
