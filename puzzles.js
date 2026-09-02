// WHAT YEAR?? — puzzle data
// Session 4: the curated set (batch 1 = 16), fact-checked with Clem.
// Schema (locked in SPEC.md): each clue is its own object so types can mix,
// ordered hard -> easy by obscurity. `reveal` = one line per clue (answer screen).
// A clue MAY also carry an image/map: add `image` (path under img/), `alt`
// (screen-reader text), and `attribution` (shown as a caption). If the file is
// missing, the clue falls back to text-only — the game never breaks.

const PUZZLES = [
  {
    id: 1, year: 1969, era: 'AD',
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
    id: 2, year: 1789, era: 'AD',
    clues: [
      { type: 'person', text: 'Born this year: the novelist James Fenimore Cooper, later author of The Last of the Mohicans.' },
      { type: 'event',  text: 'George Washington is inaugurated as the first President of the United States.' },
      { type: 'event',  text: 'A Paris mob storms the Bastille, igniting the French Revolution.',
        image: 'img/bastille.jpg',
        alt: 'A crowd of armed figures storming the Bastille fortress in Paris amid smoke.',
        attribution: 'Storming of the Bastille, Jean-Pierre Houël (1789) — public domain' },
    ],
    reveal: [
      'James Fenimore Cooper was born on 15 September 1789.',
      'Washington was inaugurated in New York on 30 April 1789.',
      'The Bastille was stormed on 14 July 1789.',
    ],
  },
  {
    id: 3, year: 1215, era: 'AD',
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
    id: 4, year: 1876, era: 'AD',
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
    id: 5, year: 44, era: 'BC',
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
  {
    id: 6, year: 1492, era: 'AD',
    clues: [
      { type: 'event', text: 'The last Muslim emirate in Iberia, Granada, falls to the Catholic Monarchs.' },
      { type: 'event', text: 'Spain issues the Alhambra Decree, expelling its Jewish population.' },
      { type: 'event', text: 'Christopher Columbus makes landfall in the Americas.' },
    ],
    reveal: [
      'Granada fell on 2 January 1492.',
      'The Alhambra Decree was issued on 31 March 1492.',
      'Columbus made landfall on 12 October 1492.',
    ],
  },
  {
    id: 7, year: 1666, era: 'AD',
    clues: [
      { type: 'death', text: 'The Dutch master painter Frans Hals dies in Haarlem.' },
      { type: 'person', text: 'Isaac Newton, home from plague-closed Cambridge, does foundational work on gravity and light in his “year of wonders”.' },
      { type: 'event',  text: 'A fire rages for four days and destroys much of the City of London.',
        image: 'img/great-fire-london.jpg',
        alt: 'A night view of London engulfed in flames across the River Thames under a red sky.',
        attribution: 'The Great Fire of London, unknown painter (c.1675) — public domain' },
    ],
    reveal: [
      'Frans Hals was buried in September 1666.',
      'Newton’s “annus mirabilis” is traditionally dated to 1666.',
      'The Great Fire of London burned from 2–6 September 1666.',
    ],
  },
  {
    id: 8, year: 1815, era: 'AD',
    clues: [
      { type: 'person', text: 'Born this year: Ada Lovelace, later regarded as the first computer programmer.' },
      { type: 'event',  text: 'Mount Tambora erupts catastrophically in Indonesia, triggering the following “year without a summer”.' },
      { type: 'event',  text: 'Napoleon is defeated for the last time at the Battle of Waterloo.' },
    ],
    reveal: [
      'Ada Lovelace was born on 10 December 1815.',
      'Mount Tambora erupted in April 1815.',
      'The Battle of Waterloo was fought on 18 June 1815.',
    ],
  },
  {
    id: 9, year: 1843, era: 'AD',
    clues: [
      { type: 'event', text: 'The first commercial Christmas card is sent in Britain.' },
      { type: 'event', text: 'Brunel’s revolutionary iron steamship, the SS Great Britain, is launched in Bristol.' },
      { type: 'work',  text: 'Charles Dickens publishes A Christmas Carol.' },
    ],
    reveal: [
      'The first commercial Christmas card (Henry Cole’s) dates to 1843.',
      'The SS Great Britain was launched in Bristol on 19 July 1843.',
      'A Christmas Carol was published on 19 December 1843.',
    ],
  },
  {
    id: 10, year: 1863, era: 'AD',
    clues: [
      { type: 'event', text: 'The world’s first underground passenger railway opens in London.' },
      { type: 'event', text: 'Abraham Lincoln issues the Emancipation Proclamation.' },
      { type: 'event', text: 'Union and Confederate armies clash at the Battle of Gettysburg.' },
    ],
    reveal: [
      'The Metropolitan Railway opened on 10 January 1863.',
      'The Emancipation Proclamation took effect on 1 January 1863.',
      'The Battle of Gettysburg was fought on 1–3 July 1863.',
    ],
  },
  {
    id: 11, year: 1901, era: 'AD',
    clues: [
      { type: 'person', text: 'Born this year: Walt Disney, in Chicago.' },
      { type: 'event',  text: 'The first Nobel Prizes are awarded.' },
      { type: 'death',  text: 'Queen Victoria dies after 63 years on the throne.' },
    ],
    reveal: [
      'Walt Disney was born on 5 December 1901.',
      'The first Nobel Prizes were awarded on 10 December 1901.',
      'Queen Victoria died on 22 January 1901.',
    ],
  },
  {
    id: 12, year: 1912, era: 'AD',
    clues: [
      { type: 'person', text: 'Born this year: Alan Turing, a future pioneer of computing, in London.' },
      { type: 'event',  text: 'Captain Scott’s expedition reaches the South Pole, only to find Amundsen has beaten them to it.' },
      { type: 'event',  text: 'The “unsinkable” RMS Titanic sinks on her maiden voyage.' },
    ],
    reveal: [
      'Alan Turing was born on 23 June 1912.',
      'Scott reached the South Pole on 17 January 1912.',
      'The Titanic sank on 15 April 1912.',
    ],
  },
  {
    id: 13, year: 1953, era: 'AD',
    clues: [
      { type: 'work',  text: 'Watson and Crick describe the double-helix structure of DNA in Cambridge.' },
      { type: 'event', text: 'Edmund Hillary and Tenzing Norgay reach the summit of Mount Everest.' },
      { type: 'event', text: 'Queen Elizabeth II is crowned at Westminster Abbey.' },
    ],
    reveal: [
      'The DNA double-helix paper appeared in Nature on 25 April 1953.',
      'Everest was first summited on 29 May 1953.',
      'The coronation took place on 2 June 1953.',
    ],
  },
  {
    id: 14, year: 1955, era: 'AD',
    clues: [
      { type: 'person', text: 'Born this year: two future technology titans, Bill Gates and Steve Jobs.' },
      { type: 'event',  text: 'Disneyland opens its gates in California.' },
      { type: 'event',  text: 'Rosa Parks refuses to give up her bus seat in Montgomery, Alabama.' },
    ],
    reveal: [
      'Steve Jobs was born on 24 February 1955; Bill Gates on 28 October 1955.',
      'Disneyland opened on 17 July 1955.',
      'Rosa Parks was arrested on 1 December 1955.',
    ],
  },
  {
    id: 15, year: 1963, era: 'AD',
    clues: [
      { type: 'work',  text: 'The BBC science-fiction series Doctor Who airs its very first episode.' },
      { type: 'event', text: 'Martin Luther King Jr delivers his “I Have a Dream” speech in Washington.' },
      { type: 'event', text: 'President John F. Kennedy is assassinated in Dallas.' },
    ],
    reveal: [
      'Doctor Who first aired on 23 November 1963.',
      'The “I Have a Dream” speech was given on 28 August 1963.',
      'JFK was assassinated on 22 November 1963.',
    ],
  },
  {
    id: 16, year: 1997, era: 'AD',
    clues: [
      { type: 'event', text: 'Scientists announce Dolly the sheep, the first mammal cloned from an adult cell.' },
      { type: 'work',  text: 'The first Harry Potter book is published.' },
      { type: 'death', text: 'Diana, Princess of Wales, dies in a car crash in Paris.' },
    ],
    reveal: [
      'Dolly the sheep was announced on 22 February 1997.',
      'Harry Potter and the Philosopher’s Stone was published on 26 June 1997.',
      'Diana, Princess of Wales, died on 31 August 1997.',
    ],
  },
];
