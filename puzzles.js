// WHAT YEAR?? - puzzle data
// Session 4: the curated set (batch 1 = 16), fact-checked with Clem.
// Schema (locked in SPEC.md): each clue is its own object so types can mix,
// ordered hard -> easy by obscurity. `reveal` = one line per clue (answer screen).
// A clue MAY also carry an image/map: add `image` (path under img/), `alt`
// (screen-reader text), and `attribution` (shown as a caption). If the file is
// missing, the clue falls back to text-only - the game never breaks.

const PUZZLES = [
  {
    id: 1, year: 1969, era: 'AD',
    clues: [
      { type: 'work',   text: 'A new children’s TV show - Sesame Street - airs its very first episode in the United States.' },
      { type: 'person', text: 'Born this year: the actor Matthew McConaughey and the rapper Jay-Z.' },
      { type: 'event',  text: 'Apollo 11 lands the first humans on the Moon.' },
    ],
    reveal: [
      'Sesame Street premiered on 10 November 1969.',
      'Matthew McConaughey (4 Nov) and Jay-Z (4 Dec) were both born in 1969.',
      'Apollo 11 - Armstrong and Aldrin walked on the Moon on 20 July 1969.',
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
        attribution: 'The Storming of the Bastille by Jean-Pierre Houël (public domain)' },
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
      { type: 'event',  text: 'King John seals a charter of liberties at Runnymede - Magna Carta.' },
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
        attribution: 'The Great Fire of London, unknown painter (public domain)' },
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

  // ---- Batch 2 (17–50): reviewed by an independent agent, no wrong facts found ----
  {
    id: 17, year: 1066, era: 'AD',
    clues: [
      { type: 'event', text: 'Halley’s Comet blazes over England and is taken as an evil omen.' },
      { type: 'death', text: 'Edward the Confessor dies childless, sparking a fight over the English throne.' },
      { type: 'event', text: 'William of Normandy defeats King Harold at the Battle of Hastings.' },
    ],
    reveal: [
      'Halley’s Comet appeared over England in the spring of 1066.',
      'Edward the Confessor died on 5 January 1066.',
      'The Battle of Hastings was fought on 14 October 1066.',
    ],
  },
  {
    id: 18, year: 1509, era: 'AD',
    clues: [
      { type: 'event',  text: 'A Portuguese fleet wins the Battle of Diu, securing control of Indian Ocean trade.' },
      { type: 'person', text: 'The theologian John Calvin is born in France.' },
      { type: 'event',  text: 'Henry VIII becomes King of England.' },
    ],
    reveal: [
      'The Battle of Diu was fought on 3 February 1509.',
      'John Calvin was born on 10 July 1509.',
      'Henry VIII acceded to the throne on 21 April 1509.',
    ],
  },
  {
    id: 19, year: 1519, era: 'AD',
    clues: [
      { type: 'event', text: 'Magellan’s expedition sets sail on the first attempt to circumnavigate the globe.' },
      { type: 'event', text: 'Hernán Cortés enters the Aztec capital, Tenochtitlan.' },
      { type: 'death', text: 'Leonardo da Vinci dies in France.' },
    ],
    reveal: [
      'Magellan’s fleet set sail on 20 September 1519.',
      'Cortés entered Tenochtitlan on 8 November 1519.',
      'Leonardo da Vinci died on 2 May 1519.',
    ],
  },
  {
    id: 20, year: 1543, era: 'AD',
    clues: [
      { type: 'event', text: 'Portuguese traders become the first Europeans to reach Japan.' },
      { type: 'work',  text: 'Andreas Vesalius publishes his groundbreaking atlas of human anatomy.' },
      { type: 'work',  text: 'Copernicus publishes his theory that the Earth orbits the Sun.' },
    ],
    reveal: [
      'The Portuguese reached Tanegashima, Japan, in 1543.',
      'Vesalius’ De humani corporis fabrica was published in 1543.',
      'Copernicus’ De revolutionibus appeared in 1543.',
    ],
  },
  {
    id: 21, year: 1564, era: 'AD',
    clues: [
      { type: 'person', text: 'Galileo Galilei is born in Pisa.' },
      { type: 'death',  text: 'Michelangelo dies in Rome.' },
      { type: 'person', text: 'William Shakespeare is born in Stratford-upon-Avon.' },
    ],
    reveal: [
      'Galileo was born on 15 February 1564.',
      'Michelangelo died on 18 February 1564.',
      'Shakespeare was baptised on 26 April 1564.',
    ],
  },
  {
    id: 22, year: 1600, era: 'AD',
    clues: [
      { type: 'death', text: 'The philosopher Giordano Bruno is burned at the stake in Rome.' },
      { type: 'event', text: 'The Battle of Sekigahara paves the way for the Tokugawa shogunate in Japan.' },
      { type: 'event', text: 'Queen Elizabeth I charters the East India Company.' },
    ],
    reveal: [
      'Giordano Bruno was executed on 17 February 1600.',
      'The Battle of Sekigahara was fought on 21 October 1600.',
      'The East India Company was chartered on 31 December 1600.',
    ],
  },
  {
    id: 23, year: 1607, era: 'AD',
    clues: [
      { type: 'work',  text: 'Monteverdi’s L’Orfeo, an early landmark of opera, premieres.' },
      { type: 'event', text: 'Henry Hudson sets sail in search of a northern sea passage.' },
      { type: 'event', text: 'English settlers found Jamestown, the first permanent English colony in America.' },
    ],
    reveal: [
      'L’Orfeo premiered in February 1607.',
      'Hudson’s first voyage set out in 1607.',
      'Jamestown was founded in May 1607.',
    ],
  },
  {
    id: 24, year: 1620, era: 'AD',
    clues: [
      { type: 'work',  text: 'Francis Bacon publishes Novum Organum, a manifesto for the scientific method.' },
      { type: 'event', text: 'Catholic forces crush a Protestant army at the Battle of White Mountain.' },
      { type: 'event', text: 'The Pilgrims arrive in America aboard the Mayflower.' },
    ],
    reveal: [
      'Novum Organum was published in 1620.',
      'The Battle of White Mountain was fought on 8 November 1620.',
      'The Mayflower reached America in November 1620.',
    ],
  },
  {
    id: 25, year: 1776, era: 'AD',
    clues: [
      { type: 'work',  text: 'Adam Smith publishes The Wealth of Nations.' },
      { type: 'work',  text: 'Edward Gibbon publishes the first volume of The Decline and Fall of the Roman Empire.' },
      { type: 'event', text: 'The Thirteen Colonies sign the Declaration of Independence.' },
    ],
    reveal: [
      'The Wealth of Nations was published in March 1776.',
      'Gibbon’s first volume appeared in February 1776.',
      'The Declaration of Independence was signed on 4 July 1776.',
    ],
  },
  {
    id: 26, year: 1804, era: 'AD',
    clues: [
      { type: 'event', text: 'Haiti declares independence, becoming the first free Black republic.' },
      { type: 'event', text: 'Lewis and Clark set out to explore the American West.' },
      { type: 'event', text: 'Napoleon crowns himself Emperor of the French.',
        image: 'img/coronation-1804.jpg',
        alt: 'A grand painting of Napoleon’s coronation in a cathedral, crowded with richly dressed figures.',
        attribution: 'The Coronation of Napoleon by Jacques-Louis David (public domain)' },
    ],
    reveal: [
      'Haiti declared independence on 1 January 1804.',
      'The Lewis and Clark Expedition departed in May 1804.',
      'Napoleon crowned himself Emperor on 2 December 1804.',
    ],
  },
  {
    id: 27, year: 1830, era: 'AD',
    clues: [
      { type: 'event', text: 'The Liverpool & Manchester Railway, the first inter-city passenger line, opens.' },
      { type: 'event', text: 'Greece is recognised as an independent nation.' },
      { type: 'event', text: 'France’s July Revolution topples King Charles X.',
        image: 'img/liberty-1830.jpg',
        alt: 'A painting of a bare-breasted woman holding a tricolour flag and leading armed revolutionaries over a barricade.',
        attribution: 'Liberty Leading the People by Eugène Delacroix (public domain)' },
    ],
    reveal: [
      'The Liverpool & Manchester Railway opened on 15 September 1830.',
      'Greek independence was recognised by the London Protocol of February 1830.',
      'The July Revolution took place in July 1830.',
    ],
  },
  {
    id: 28, year: 1837, era: 'AD',
    clues: [
      { type: 'event', text: 'Samuel Morse demonstrates his electric telegraph.' },
      { type: 'work',  text: 'Charles Dickens begins publishing Oliver Twist.' },
      { type: 'event', text: 'Victoria becomes Queen of the United Kingdom.' },
    ],
    reveal: [
      'Morse demonstrated his telegraph in 1837.',
      'Oliver Twist began serialisation in 1837.',
      'Victoria acceded to the throne on 20 June 1837.',
    ],
  },
  {
    id: 29, year: 1848, era: 'AD',
    clues: [
      { type: 'work',  text: 'Marx and Engels publish The Communist Manifesto.' },
      { type: 'event', text: 'A wave of revolutions sweeps across Europe.' },
      { type: 'event', text: 'The discovery of gold sparks the California Gold Rush.' },
    ],
    reveal: [
      'The Communist Manifesto was published in February 1848.',
      'The Revolutions of 1848 spread across Europe that year.',
      'Gold was discovered in California in January 1848.',
    ],
  },
  {
    id: 30, year: 1859, era: 'AD',
    clues: [
      { type: 'event', text: 'Construction begins on the Suez Canal.' },
      { type: 'work',  text: 'Charles Dickens publishes A Tale of Two Cities.' },
      { type: 'work',  text: 'Charles Darwin publishes On the Origin of Species.' },
    ],
    reveal: [
      'Work on the Suez Canal began in April 1859.',
      'A Tale of Two Cities was published in 1859.',
      'On the Origin of Species was published on 24 November 1859.',
    ],
  },
  {
    id: 31, year: 1861, era: 'AD',
    clues: [
      { type: 'event', text: 'Tsar Alexander II emancipates Russia’s serfs.' },
      { type: 'event', text: 'The Kingdom of Italy is proclaimed under Victor Emmanuel II.' },
      { type: 'event', text: 'The American Civil War begins.' },
    ],
    reveal: [
      'The serfs were emancipated in March 1861.',
      'The Kingdom of Italy was proclaimed on 17 March 1861.',
      'The American Civil War began in April 1861.',
    ],
  },
  {
    id: 32, year: 1865, era: 'AD',
    clues: [
      { type: 'event', text: 'Gregor Mendel presents the laws of inheritance.' },
      { type: 'work',  text: 'Lewis Carroll publishes Alice’s Adventures in Wonderland.' },
      { type: 'death', text: 'Abraham Lincoln is assassinated.' },
    ],
    reveal: [
      'Mendel presented his laws of heredity in 1865.',
      'Alice’s Adventures in Wonderland was published in 1865.',
      'Lincoln was assassinated on 14 April 1865.',
    ],
  },
  {
    id: 33, year: 1888, era: 'AD',
    clues: [
      { type: 'work',  text: 'Vincent van Gogh paints his Sunflowers in Arles.',
        image: 'img/sunflowers-1888.jpg',
        alt: 'A painting of a vase of bright yellow sunflowers against a yellow background.',
        attribution: 'Sunflowers by Vincent van Gogh (public domain)' },
      { type: 'event', text: 'The Football League, the world’s first, is founded in England.' },
      { type: 'event', text: 'Kodak’s first roll-film camera goes on sale, bringing photography to the masses.' },
    ],
    reveal: [
      'Van Gogh painted his Sunflowers series in August 1888.',
      'The Football League was founded in 1888.',
      'The first Kodak camera went on sale in 1888.',
    ],
  },
  {
    id: 34, year: 1908, era: 'AD',
    clues: [
      { type: 'event', text: 'A vast explosion flattens hundreds of square miles of forest at Tunguska, Siberia.' },
      { type: 'event', text: 'Ford’s Model T motorcar goes on sale.' },
      { type: 'event', text: 'London hosts the Olympic Games.' },
    ],
    reveal: [
      'The Tunguska event occurred on 30 June 1908.',
      'The Ford Model T went on sale in October 1908.',
      'The 1908 Summer Olympics were held in London.',
    ],
  },
  {
    id: 35, year: 1911, era: 'AD',
    clues: [
      { type: 'event', text: 'The Mona Lisa is stolen from the Louvre.' },
      { type: 'event', text: 'A revolution topples China’s last imperial dynasty.' },
      { type: 'event', text: 'Roald Amundsen becomes the first person to reach the South Pole.' },
    ],
    reveal: [
      'The Mona Lisa was stolen on 21 August 1911.',
      'The Xinhai Revolution began in October 1911.',
      'Amundsen reached the South Pole on 14 December 1911.',
    ],
  },
  {
    id: 36, year: 1918, era: 'AD',
    clues: [
      { type: 'event', text: 'British women over 30 win the right to vote.' },
      { type: 'event', text: 'A deadly influenza pandemic sweeps the globe.' },
      { type: 'event', text: 'The armistice ends the First World War.' },
    ],
    reveal: [
      'The Representation of the People Act passed in February 1918.',
      'The 1918 influenza pandemic raged that year.',
      'The Armistice was signed on 11 November 1918.',
    ],
  },
  {
    id: 37, year: 1922, era: 'AD',
    clues: [
      { type: 'work',  text: 'James Joyce publishes his novel Ulysses.' },
      { type: 'event', text: 'The BBC is founded.' },
      { type: 'event', text: 'Howard Carter discovers the tomb of Tutankhamun.' },
    ],
    reveal: [
      'Ulysses was published in February 1922.',
      'The BBC was founded in October 1922.',
      'Tutankhamun’s tomb was discovered on 4 November 1922.',
    ],
  },
  {
    id: 38, year: 1927, era: 'AD',
    clues: [
      { type: 'event', text: 'Babe Ruth hits 60 home runs in a single season.' },
      { type: 'work',  text: 'The Jazz Singer, the first feature-length “talkie”, opens.' },
      { type: 'event', text: 'Charles Lindbergh makes the first solo non-stop transatlantic flight.' },
    ],
    reveal: [
      'Babe Ruth hit 60 home runs in 1927.',
      'The Jazz Singer opened in October 1927.',
      'Lindbergh’s solo flight was in May 1927.',
    ],
  },
  {
    id: 39, year: 1928, era: 'AD',
    clues: [
      { type: 'event', text: 'Amelia Earhart becomes the first woman to cross the Atlantic by plane.' },
      { type: 'event', text: 'Alexander Fleming discovers penicillin.' },
      { type: 'work',  text: 'Mickey Mouse debuts in the cartoon Steamboat Willie.' },
    ],
    reveal: [
      'Earhart crossed the Atlantic in June 1928.',
      'Fleming discovered penicillin in September 1928.',
      'Steamboat Willie premiered on 18 November 1928.',
    ],
  },
  {
    id: 40, year: 1936, era: 'AD',
    clues: [
      { type: 'event', text: 'The BBC launches the world’s first regular high-definition television service.' },
      { type: 'event', text: 'The Spanish Civil War breaks out.' },
      { type: 'event', text: 'King Edward VIII abdicates to marry Wallis Simpson.' },
    ],
    reveal: [
      'The BBC television service launched in November 1936.',
      'The Spanish Civil War began in July 1936.',
      'Edward VIII abdicated on 11 December 1936.',
    ],
  },
  {
    id: 41, year: 1945, era: 'AD',
    clues: [
      { type: 'event', text: 'The United Nations is founded.' },
      { type: 'event', text: 'Atomic bombs are dropped on Hiroshima and Nagasaki.' },
      { type: 'event', text: 'The Second World War ends.' },
    ],
    reveal: [
      'The United Nations was founded in October 1945.',
      'The atomic bombs were dropped in August 1945.',
      'The Second World War ended in 1945.',
    ],
  },
  {
    id: 42, year: 1957, era: 'AD',
    clues: [
      { type: 'event', text: 'Six nations sign the Treaty of Rome, founding the European Economic Community.' },
      { type: 'work',  text: 'Dr. Seuss publishes The Cat in the Hat.' },
      { type: 'event', text: 'The Soviet Union launches Sputnik, the first artificial satellite.' },
    ],
    reveal: [
      'The Treaty of Rome was signed in March 1957.',
      'The Cat in the Hat was published in 1957.',
      'Sputnik was launched on 4 October 1957.',
    ],
  },
  {
    id: 43, year: 1961, era: 'AD',
    clues: [
      { type: 'event', text: 'A US-backed invasion fails at Cuba’s Bay of Pigs.' },
      { type: 'event', text: 'East Germany begins building the Berlin Wall.' },
      { type: 'event', text: 'Yuri Gagarin becomes the first human in space.' },
    ],
    reveal: [
      'The Bay of Pigs invasion took place in April 1961.',
      'Construction of the Berlin Wall began in August 1961.',
      'Gagarin flew into space on 12 April 1961.',
    ],
  },
  {
    id: 44, year: 1971, era: 'AD',
    clues: [
      { type: 'event', text: 'Intel releases the first commercial microprocessor.' },
      { type: 'event', text: 'Britain switches to decimal currency.' },
      { type: 'event', text: 'Walt Disney World opens in Florida.' },
    ],
    reveal: [
      'The Intel 4004 was released in November 1971.',
      'Decimal Day in Britain was 15 February 1971.',
      'Walt Disney World opened on 1 October 1971.',
    ],
  },
  {
    id: 45, year: 1979, era: 'AD',
    clues: [
      { type: 'event', text: 'Sony launches the Walkman personal cassette player.' },
      { type: 'event', text: 'Revolution in Iran topples the Shah.' },
      { type: 'event', text: 'Margaret Thatcher becomes Britain’s first woman Prime Minister.' },
    ],
    reveal: [
      'The Sony Walkman went on sale in July 1979.',
      'The Iranian Revolution came to a head in February 1979.',
      'Thatcher became Prime Minister in May 1979.',
    ],
  },
  {
    id: 46, year: 1985, era: 'AD',
    clues: [
      { type: 'event', text: 'Mikhail Gorbachev becomes leader of the Soviet Union.' },
      { type: 'event', text: 'The wreck of the Titanic is discovered on the seabed.' },
      { type: 'event', text: 'The Live Aid concerts raise funds for famine relief.' },
    ],
    reveal: [
      'Gorbachev took power in March 1985.',
      'The Titanic wreck was found on 1 September 1985.',
      'Live Aid took place on 13 July 1985.',
    ],
  },
  {
    id: 47, year: 1989, era: 'AD',
    clues: [
      { type: 'event', text: 'Tim Berners-Lee proposes what becomes the World Wide Web.' },
      { type: 'event', text: 'Pro-democracy protests fill Beijing’s Tiananmen Square.' },
      { type: 'event', text: 'The Berlin Wall falls.' },
    ],
    reveal: [
      'Berners-Lee wrote his Web proposal in March 1989.',
      'The Tiananmen Square protests took place in mid-1989.',
      'The Berlin Wall fell on 9 November 1989.',
    ],
  },
  {
    id: 48, year: 1990, era: 'AD',
    clues: [
      { type: 'event', text: 'The Hubble Space Telescope is launched into orbit.' },
      { type: 'event', text: 'East and West Germany reunify.' },
      { type: 'event', text: 'Nelson Mandela is freed after 27 years in prison.' },
    ],
    reveal: [
      'Hubble was launched in April 1990.',
      'German reunification took effect on 3 October 1990.',
      'Mandela was released on 11 February 1990.',
    ],
  },
  {
    id: 49, year: 1994, era: 'AD',
    clues: [
      { type: 'event', text: 'Amazon is founded as an online bookshop.' },
      { type: 'event', text: 'The Channel Tunnel opens between Britain and France.' },
      { type: 'event', text: 'Nelson Mandela is elected President of South Africa.' },
    ],
    reveal: [
      'Amazon was founded in July 1994.',
      'The Channel Tunnel opened on 6 May 1994.',
      'Mandela became president in May 1994.',
    ],
  },
  {
    id: 50, year: 2001, era: 'AD',
    clues: [
      { type: 'event', text: 'Wikipedia launches.' },
      { type: 'event', text: 'Apple releases the first iPod.' },
      { type: 'event', text: 'Coordinated attacks strike New York and Washington on 11 September.' },
    ],
    reveal: [
      'Wikipedia launched on 15 January 2001.',
      'The first iPod was released on 23 October 2001.',
      'The September 11 attacks occurred in 2001.',
    ],
  },

  // ---- Batch 3 (51–100): independently reviewed; duplicate-anchor fixes applied ----
  {
    id: 51, year: 1453, era: 'AD',
    clues: [
      { type: 'event', text: 'England’s King Henry VI suffers the first bout of the madness that helps spark the Wars of the Roses.' },
      { type: 'event', text: 'The Hundred Years’ War ends as France defeats England at the Battle of Castillon.' },
      { type: 'event', text: 'Constantinople falls to the Ottomans, ending the Byzantine Empire.' },
    ],
    reveal: [
      'Henry VI’s first mental collapse came in August 1453.',
      'The Battle of Castillon was fought on 17 July 1453.',
      'Constantinople fell on 29 May 1453.',
    ],
  },
  {
    id: 52, year: 1485, era: 'AD',
    clues: [
      { type: 'work',  text: 'William Caxton prints Sir Thomas Malory’s Le Morte d’Arthur.' },
      { type: 'event', text: 'A mysterious “sweating sickness” breaks out in England for the first time.' },
      { type: 'event', text: 'Henry Tudor defeats Richard III at Bosworth, ending the Wars of the Roses.' },
    ],
    reveal: [
      'Caxton printed Le Morte d’Arthur in 1485.',
      'The first sweating-sickness epidemic struck England in 1485.',
      'The Battle of Bosworth was fought on 22 August 1485.',
    ],
  },
  {
    id: 53, year: 1520, era: 'AD',
    clues: [
      { type: 'death', text: 'The painter Raphael dies young in Rome.' },
      { type: 'event', text: 'Suleiman the Magnificent becomes ruler of the Ottoman Empire.' },
      { type: 'event', text: 'Henry VIII and Francis I of France meet in splendour at the Field of the Cloth of Gold.' },
    ],
    reveal: [
      'Raphael died on 6 April 1520.',
      'Suleiman the Magnificent acceded in 1520.',
      'The Field of the Cloth of Gold took place in June 1520.',
    ],
  },
  {
    id: 54, year: 1521, era: 'AD',
    clues: [
      { type: 'event', text: 'Martin Luther refuses to recant his writings at the Diet of Worms.' },
      { type: 'death', text: 'The explorer Ferdinand Magellan is killed in the Philippines.' },
      { type: 'event', text: 'Cortés and his allies capture the Aztec capital, Tenochtitlan.' },
    ],
    reveal: [
      'The Diet of Worms confronted Luther in April 1521.',
      'Magellan was killed on 27 April 1521.',
      'Tenochtitlan fell in August 1521.',
    ],
  },
  {
    id: 55, year: 1533, era: 'AD',
    clues: [
      { type: 'event',  text: 'Ivan the Terrible becomes ruler of Russia as a three-year-old boy.' },
      { type: 'person', text: 'The future Elizabeth I is born to Anne Boleyn.' },
      { type: 'event',  text: 'Henry VIII secretly marries Anne Boleyn.' },
    ],
    reveal: [
      'Ivan IV became Grand Prince of Moscow in 1533.',
      'Elizabeth I was born on 7 September 1533.',
      'Henry VIII married Anne Boleyn in January 1533.',
    ],
  },
  {
    id: 56, year: 1547, era: 'AD',
    clues: [
      { type: 'event',  text: 'Ivan the Terrible is crowned the first Tsar of all Russia.' },
      { type: 'person', text: 'Miguel de Cervantes, future author of Don Quixote, is born in Spain.' },
      { type: 'death',  text: 'Henry VIII of England dies.' },
    ],
    reveal: [
      'Ivan IV was crowned Tsar in January 1547.',
      'Cervantes was born in 1547.',
      'Henry VIII died on 28 January 1547.',
    ],
  },
  {
    id: 57, year: 1558, era: 'AD',
    clues: [
      { type: 'event', text: 'England loses Calais, its last foothold on the European mainland.' },
      { type: 'death', text: 'The Holy Roman Emperor Charles V dies in a Spanish monastery.' },
      { type: 'event', text: 'Elizabeth I becomes Queen of England.' },
    ],
    reveal: [
      'Calais was lost to France in January 1558.',
      'Charles V died on 21 September 1558.',
      'Elizabeth I acceded on 17 November 1558.',
    ],
  },
  {
    id: 58, year: 1588, era: 'AD',
    clues: [
      { type: 'person', text: 'Thomas Hobbes, future author of Leviathan, is born in England.' },
      { type: 'event',  text: 'In France, King Henri III has the powerful Duke of Guise assassinated.' },
      { type: 'event',  text: 'The Spanish Armada is defeated by England.' },
    ],
    reveal: [
      'Thomas Hobbes was born on 5 April 1588.',
      'The Duke of Guise was assassinated on 23 December 1588.',
      'The Spanish Armada was defeated in the summer of 1588.',
    ],
  },
  {
    id: 59, year: 1603, era: 'AD',
    clues: [
      { type: 'event', text: 'Tokugawa Ieyasu is named shogun, beginning over 250 years of Tokugawa rule in Japan.' },
      { type: 'death', text: 'Queen Elizabeth I dies, ending the Tudor dynasty.' },
      { type: 'event', text: 'James VI of Scotland also becomes James I of England, uniting the crowns.' },
    ],
    reveal: [
      'The Tokugawa shogunate began in 1603.',
      'Elizabeth I died on 24 March 1603.',
      'The Union of the Crowns took place in 1603.',
    ],
  },
  {
    id: 60, year: 1610, era: 'AD',
    clues: [
      { type: 'work',  text: 'Galileo publishes Sidereus Nuncius, revealing Jupiter’s moons through his telescope.' },
      { type: 'death', text: 'King Henri IV of France is assassinated in Paris.' },
      { type: 'event', text: 'Henry Hudson explores the great North American bay that now bears his name.' },
    ],
    reveal: [
      'Sidereus Nuncius was published in 1610.',
      'Henri IV was assassinated on 14 May 1610.',
      'Hudson explored Hudson Bay in 1610.',
    ],
  },
  {
    id: 61, year: 1642, era: 'AD',
    clues: [
      { type: 'death',  text: 'Galileo Galilei dies under house arrest in Italy.' },
      { type: 'person', text: 'Isaac Newton is born in England (by the old calendar, on Christmas Day).' },
      { type: 'event',  text: 'The English Civil War breaks out between King and Parliament.' },
    ],
    reveal: [
      'Galileo died on 8 January 1642.',
      'Newton was born on 25 December 1642 (Old Style).',
      'The English Civil War began in August 1642.',
    ],
  },
  {
    id: 62, year: 1649, era: 'AD',
    clues: [
      { type: 'event', text: 'The Maryland colony passes an early law promising religious toleration.' },
      { type: 'event', text: 'Cromwell’s forces storm the Irish town of Drogheda.' },
      { type: 'death', text: 'King Charles I is beheaded outside his palace in London.' },
    ],
    reveal: [
      'The Maryland Toleration Act passed in April 1649.',
      'The Storming of Drogheda took place in September 1649.',
      'Charles I was beheaded on 30 January 1649.',
    ],
  },
  {
    id: 63, year: 1688, era: 'AD',
    clues: [
      { type: 'work',  text: 'Aphra Behn, one of the first professional women writers in English, publishes Oroonoko.' },
      { type: 'event', text: 'Seven bishops are put on trial and acquitted for defying the King.' },
      { type: 'event', text: 'The “Glorious Revolution” puts William and Mary on the English throne.' },
    ],
    reveal: [
      'Oroonoko was published in 1688.',
      'The Seven Bishops were tried and acquitted in June 1688.',
      'The Glorious Revolution took place in 1688.',
    ],
  },
  {
    id: 64, year: 1707, era: 'AD',
    clues: [
      { type: 'person', text: 'Henry Fielding, future author of Tom Jones, is born in England.' },
      { type: 'event',  text: 'Mount Fuji erupts in Japan for the last time in recorded history.' },
      { type: 'event',  text: 'The Acts of Union join England and Scotland into the Kingdom of Great Britain.' },
    ],
    reveal: [
      'Henry Fielding was born on 22 April 1707.',
      'The Hōei eruption of Mount Fuji occurred in December 1707.',
      'The Acts of Union took effect on 1 May 1707.',
    ],
  },
  {
    id: 65, year: 1755, era: 'AD',
    clues: [
      { type: 'person', text: 'Marie Antoinette, a future queen of France, is born in Austria.' },
      { type: 'work',  text: 'Samuel Johnson publishes his great Dictionary of the English Language.' },
      { type: 'event',  text: 'A catastrophic earthquake and tsunami destroy Lisbon.' },
    ],
    reveal: [
      'Marie Antoinette was born on 2 November 1755.',
      'Johnson’s Dictionary was published in April 1755.',
      'The Lisbon earthquake struck on 1 November 1755.',
    ],
  },
  {
    id: 66, year: 1759, era: 'AD',
    clues: [
      { type: 'work',  text: 'Voltaire publishes his satirical novel Candide.' },
      { type: 'event', text: 'The British Museum opens to the public in London.' },
      { type: 'event', text: 'Britain takes Quebec as General Wolfe dies in the moment of victory.' },
    ],
    reveal: [
      'Candide was published in 1759.',
      'The British Museum opened in January 1759.',
      'The Battle of the Plains of Abraham was fought on 13 September 1759.',
    ],
  },
  {
    id: 67, year: 1769, era: 'AD',
    clues: [
      { type: 'event',  text: 'James Watt patents a greatly improved steam engine.' },
      { type: 'person', text: 'The future Duke of Wellington is born, the same year as the man he will one day defeat.' },
      { type: 'person', text: 'Napoleon Bonaparte is born on the island of Corsica.' },
    ],
    reveal: [
      'Watt patented his steam engine in 1769.',
      'The Duke of Wellington was born in 1769.',
      'Napoleon was born on 15 August 1769.',
    ],
  },
  {
    id: 68, year: 1781, era: 'AD',
    clues: [
      { type: 'event', text: 'William Herschel discovers the planet Uranus.' },
      { type: 'work',  text: 'Immanuel Kant publishes his Critique of Pure Reason.' },
      { type: 'event', text: 'British forces surrender at Yorktown, effectively ending the American Revolutionary War.' },
    ],
    reveal: [
      'Uranus was discovered on 13 March 1781.',
      'The Critique of Pure Reason appeared in 1781.',
      'The surrender at Yorktown came in October 1781.',
    ],
  },
  {
    id: 69, year: 1799, era: 'AD',
    clues: [
      { type: 'event', text: 'French soldiers in Egypt unearth the Rosetta Stone.' },
      { type: 'death', text: 'George Washington dies at his home, Mount Vernon.' },
      { type: 'event', text: 'Napoleon seizes power in France in a coup.' },
    ],
    reveal: [
      'The Rosetta Stone was found in 1799.',
      'Washington died on 14 December 1799.',
      'The Coup of 18 Brumaire came in November 1799.',
    ],
  },
  {
    id: 70, year: 1805, era: 'AD',
    clues: [
      { type: 'person', text: 'Hans Christian Andersen, future author of fairy tales, is born in Denmark.' },
      { type: 'event',  text: 'Napoleon crushes the Austrians and Russians at the Battle of Austerlitz.' },
      { type: 'death',  text: 'Admiral Nelson dies defeating the French and Spanish fleets at Trafalgar.' },
    ],
    reveal: [
      'Hans Christian Andersen was born on 2 April 1805.',
      'The Battle of Austerlitz was fought on 2 December 1805.',
      'The Battle of Trafalgar was fought on 21 October 1805.',
    ],
  },
  {
    id: 71, year: 1812, era: 'AD',
    clues: [
      { type: 'person', text: 'Charles Dickens is born in England.' },
      { type: 'event',  text: 'Britain and the United States go to war once again.' },
      { type: 'event',  text: 'Napoleon’s Grande Armée invades Russia and is destroyed by winter and retreat.' },
    ],
    reveal: [
      'Charles Dickens was born on 7 February 1812.',
      'The War of 1812 began in June 1812.',
      'The French invasion of Russia took place in 1812.',
    ],
  },
  {
    id: 72, year: 1819, era: 'AD',
    clues: [
      { type: 'work',   text: 'The poet John Keats writes a series of his greatest odes.' },
      { type: 'event',  text: 'Cavalry charge a peaceful reform crowd at Peterloo in Manchester.' },
      { type: 'person', text: 'The future Queen Victoria is born.' },
    ],
    reveal: [
      'Keats wrote his great odes in 1819.',
      'The Peterloo Massacre took place on 16 August 1819.',
      'Victoria was born on 24 May 1819.',
    ],
  },
  {
    id: 73, year: 1840, era: 'AD',
    clues: [
      { type: 'event', text: 'Māori chiefs and the British Crown sign the Treaty of Waitangi in New Zealand.' },
      { type: 'event', text: 'Britain issues the world’s first adhesive postage stamp, the Penny Black.' },
      { type: 'event', text: 'Queen Victoria marries Prince Albert.' },
    ],
    reveal: [
      'The Treaty of Waitangi was signed on 6 February 1840.',
      'The Penny Black went into use in May 1840.',
      'Victoria and Albert married on 10 February 1840.',
    ],
  },
  {
    id: 74, year: 1851, era: 'AD',
    clues: [
      { type: 'event', text: 'The New York Times publishes its first edition.' },
      { type: 'work',  text: 'Herman Melville publishes his novel Moby-Dick.' },
      { type: 'event', text: 'London’s Great Exhibition opens in the Crystal Palace.' },
    ],
    reveal: [
      'The first New York Times edition appeared on 18 September 1851.',
      'Moby-Dick was published in 1851.',
      'The Great Exhibition opened on 1 May 1851.',
    ],
  },
  {
    id: 75, year: 1867, era: 'AD',
    clues: [
      { type: 'event', text: 'Alfred Nobel patents dynamite.' },
      { type: 'work',  text: 'Karl Marx publishes the first volume of Das Kapital.' },
      { type: 'event', text: 'Canada becomes a self-governing dominion.' },
    ],
    reveal: [
      'Dynamite was patented in 1867.',
      'The first volume of Das Kapital appeared in 1867.',
      'Canadian Confederation took effect on 1 July 1867.',
    ],
  },
  {
    id: 76, year: 1869, era: 'AD',
    clues: [
      { type: 'work',  text: 'Dmitri Mendeleev presents the first periodic table of the elements.' },
      { type: 'event', text: 'The Suez Canal opens, linking the Mediterranean and the Red Sea.' },
      { type: 'event', text: 'The first railroad across the United States is completed.' },
    ],
    reveal: [
      'Mendeleev presented the periodic table in 1869.',
      'The Suez Canal opened in November 1869.',
      'The US transcontinental railroad was completed on 10 May 1869.',
    ],
  },
  {
    id: 77, year: 1871, era: 'AD',
    clues: [
      { type: 'event', text: 'The journalist Henry Stanley finds the missing explorer David Livingstone in Africa.' },
      { type: 'event', text: 'A great fire destroys much of Chicago.' },
      { type: 'event', text: 'The German Empire is proclaimed in the Hall of Mirrors at Versailles.' },
    ],
    reveal: [
      'Stanley found Livingstone in November 1871.',
      'The Great Chicago Fire broke out in October 1871.',
      'The German Empire was proclaimed on 18 January 1871.',
    ],
  },
  {
    id: 78, year: 1889, era: 'AD',
    clues: [
      { type: 'person', text: 'The comic actor Charlie Chaplin is born in London.' },
      { type: 'work',   text: 'Vincent van Gogh paints The Starry Night.' },
      { type: 'event',  text: 'Gustave Eiffel’s tower is completed for the Paris World’s Fair.' },
    ],
    reveal: [
      'Charlie Chaplin was born on 16 April 1889.',
      'Van Gogh painted The Starry Night in 1889.',
      'The Eiffel Tower was completed in March 1889.',
    ],
  },
  {
    id: 79, year: 1893, era: 'AD',
    clues: [
      { type: 'death', text: 'The composer Pyotr Ilyich Tchaikovsky dies in Russia.' },
      { type: 'event', text: 'New Zealand becomes the first country to grant women the vote.' },
      { type: 'event', text: 'A great World’s Fair, the Columbian Exposition, opens in Chicago.' },
    ],
    reveal: [
      'Tchaikovsky died on 6 November 1893.',
      'New Zealand granted women the vote on 19 September 1893.',
      'The World’s Columbian Exposition opened in 1893.',
    ],
  },
  {
    id: 80, year: 1903, era: 'AD',
    clues: [
      { type: 'event', text: 'The first Tour de France cycling race is held.' },
      { type: 'event', text: 'Henry Ford founds the Ford Motor Company.' },
      { type: 'event', text: 'The Wright brothers make the first powered aeroplane flight.' },
    ],
    reveal: [
      'The first Tour de France was held in July 1903.',
      'The Ford Motor Company was founded in June 1903.',
      'The Wright brothers flew on 17 December 1903.',
    ],
  },
  {
    id: 81, year: 1905, era: 'AD',
    clues: [
      { type: 'event', text: 'A failed revolution shakes Tsar Nicholas II’s rule in Russia.' },
      { type: 'event', text: 'Norway peacefully gains independence from Sweden.' },
      { type: 'work',  text: 'Einstein publishes the theory of special relativity in his “miracle year”.' },
    ],
    reveal: [
      'The Russian Revolution of 1905 shook the Tsar’s rule.',
      'Norway gained independence in 1905.',
      'Einstein’s “miracle year” papers appeared in 1905.',
    ],
  },
  {
    id: 82, year: 1914, era: 'AD',
    clues: [
      { type: 'event', text: 'The Panama Canal opens to shipping.' },
      { type: 'death', text: 'Archduke Franz Ferdinand is assassinated in Sarajevo.' },
      { type: 'event', text: 'The First World War begins.' },
    ],
    reveal: [
      'The Panama Canal opened in August 1914.',
      'Franz Ferdinand was assassinated on 28 June 1914.',
      'The First World War began in 1914.',
    ],
  },
  {
    id: 83, year: 1917, era: 'AD',
    clues: [
      { type: 'event', text: 'Britain’s Balfour Declaration backs a Jewish homeland in Palestine.' },
      { type: 'event', text: 'The United States enters the First World War.' },
      { type: 'event', text: 'The Bolsheviks seize power in the Russian Revolution.' },
    ],
    reveal: [
      'The Balfour Declaration was issued in November 1917.',
      'The US entered the war in April 1917.',
      'The October Revolution took place in 1917.',
    ],
  },
  {
    id: 84, year: 1920, era: 'AD',
    clues: [
      { type: 'event', text: 'The League of Nations holds its first meeting.' },
      { type: 'event', text: 'American women win the right to vote.' },
      { type: 'event', text: 'Prohibition, banning alcohol, begins in the United States.' },
    ],
    reveal: [
      'The League of Nations first met in 1920.',
      'The 19th Amendment took effect in August 1920.',
      'Prohibition began in January 1920.',
    ],
  },
  {
    id: 85, year: 1924, era: 'AD',
    clues: [
      { type: 'work',  text: 'George Gershwin premieres his composition Rhapsody in Blue.' },
      { type: 'death', text: 'The Soviet leader Vladimir Lenin dies.' },
      { type: 'event', text: 'The first Winter Olympic Games are held, in France.' },
    ],
    reveal: [
      'Rhapsody in Blue premiered in February 1924.',
      'Lenin died on 21 January 1924.',
      'The first Winter Olympics were held in 1924.',
    ],
  },
  {
    id: 86, year: 1929, era: 'AD',
    clues: [
      { type: 'person', text: 'Anne Frank, whose wartime diary will become famous, is born.' },
      { type: 'event',  text: 'The very first Academy Awards are presented in Hollywood.' },
      { type: 'event',  text: 'The Wall Street Crash triggers the Great Depression.' },
    ],
    reveal: [
      'Anne Frank was born on 12 June 1929.',
      'The first Academy Awards were held in May 1929.',
      'The Wall Street Crash came in October 1929.',
    ],
  },
  {
    id: 87, year: 1933, era: 'AD',
    clues: [
      { type: 'work',  text: 'The film King Kong premieres.' },
      { type: 'event', text: 'Prohibition on alcohol ends in the United States.' },
      { type: 'event', text: 'Adolf Hitler becomes Chancellor of Germany.' },
    ],
    reveal: [
      'King Kong premiered in 1933.',
      'Prohibition was repealed in December 1933.',
      'Hitler became Chancellor on 30 January 1933.',
    ],
  },
  {
    id: 88, year: 1939, era: 'AD',
    clues: [
      { type: 'work',  text: 'The films The Wizard of Oz and Gone with the Wind are released.' },
      { type: 'event', text: 'The New York World’s Fair opens to huge crowds.' },
      { type: 'event', text: 'Germany invades Poland, beginning the Second World War in Europe.' },
    ],
    reveal: [
      'Both landmark films were released in 1939.',
      'The New York World’s Fair opened in April 1939.',
      'Germany invaded Poland on 1 September 1939.',
    ],
  },
  {
    id: 89, year: 1941, era: 'AD',
    clues: [
      { type: 'work',  text: 'Orson Welles releases his film Citizen Kane.' },
      { type: 'event', text: 'Germany launches a massive surprise invasion of the Soviet Union.' },
      { type: 'event', text: 'Japan attacks Pearl Harbor, bringing the United States into the war.' },
    ],
    reveal: [
      'Citizen Kane was released in 1941.',
      'Operation Barbarossa began in June 1941.',
      'Pearl Harbor was attacked on 7 December 1941.',
    ],
  },
  {
    id: 90, year: 1948, era: 'AD',
    clues: [
      { type: 'death', text: 'Mahatma Gandhi is assassinated in India.' },
      { type: 'event', text: 'Britain founds the National Health Service.' },
      { type: 'event', text: 'The state of Israel is established.' },
    ],
    reveal: [
      'Gandhi was assassinated on 30 January 1948.',
      'The NHS was founded on 5 July 1948.',
      'Israel was established on 14 May 1948.',
    ],
  },
  {
    id: 91, year: 1954, era: 'AD',
    clues: [
      { type: 'work',  text: 'J.R.R. Tolkien publishes the first volume of The Lord of the Rings.' },
      { type: 'event', text: 'The US Supreme Court outlaws school segregation in Brown v. Board of Education.' },
      { type: 'event', text: 'Roger Bannister runs the first sub-four-minute mile.' },
    ],
    reveal: [
      'The Fellowship of the Ring was published in 1954.',
      'Brown v. Board was decided in May 1954.',
      'Bannister ran the four-minute mile on 6 May 1954.',
    ],
  },
  {
    id: 92, year: 1959, era: 'AD',
    clues: [
      { type: 'event', text: 'The Barbie doll goes on sale for the first time.' },
      { type: 'event', text: 'Alaska and Hawaii become the 49th and 50th US states.' },
      { type: 'event', text: 'Fidel Castro’s revolutionaries seize power in Cuba.' },
    ],
    reveal: [
      'Barbie launched in March 1959.',
      'Alaska and Hawaii became states in 1959.',
      'The Cuban Revolution triumphed in January 1959.',
    ],
  },
  {
    id: 93, year: 1962, era: 'AD',
    clues: [
      { type: 'work',  text: 'The first James Bond film, Dr. No, premieres.' },
      { type: 'work',  text: 'The Beatles release their first single, Love Me Do.' },
      { type: 'event', text: 'The Cuban Missile Crisis brings the world to the brink of nuclear war.' },
    ],
    reveal: [
      'Dr. No premiered in October 1962.',
      'Love Me Do was released in October 1962.',
      'The Cuban Missile Crisis unfolded in October 1962.',
    ],
  },
  {
    id: 94, year: 1966, era: 'AD',
    clues: [
      { type: 'work',  text: 'The television series Star Trek airs its first episode.' },
      { type: 'event', text: 'Mao launches the Cultural Revolution in China.' },
      { type: 'event', text: 'England win football’s World Cup at Wembley.' },
    ],
    reveal: [
      'Star Trek premiered in September 1966.',
      'The Cultural Revolution began in 1966.',
      'England won the World Cup on 30 July 1966.',
    ],
  },
  {
    id: 95, year: 1968, era: 'AD',
    clues: [
      { type: 'event', text: 'The “Prague Spring” reform movement is crushed by Soviet tanks.' },
      { type: 'death', text: 'Senator Robert F. Kennedy is assassinated.' },
      { type: 'death', text: 'The civil-rights leader Martin Luther King Jr. is assassinated.' },
    ],
    reveal: [
      'The Prague Spring was crushed in August 1968.',
      'Robert F. Kennedy was assassinated on 6 June 1968.',
      'Martin Luther King Jr. was assassinated on 4 April 1968.',
    ],
  },
  {
    id: 96, year: 1972, era: 'AD',
    clues: [
      { type: 'event', text: 'A break-in at the Watergate complex begins a scandal that will topple a US president.' },
      { type: 'event', text: 'Palestinian militants attack Israeli athletes at the Munich Olympics.' },
      { type: 'event', text: 'Apollo 17 makes the last crewed landing on the Moon.' },
    ],
    reveal: [
      'The Watergate break-in took place in June 1972.',
      'The Munich Olympics attack came in September 1972.',
      'Apollo 17 landed on the Moon in December 1972.',
    ],
  },
  {
    id: 97, year: 1977, era: 'AD',
    clues: [
      { type: 'work',  text: 'The first Star Wars film is released.' },
      { type: 'death', text: 'Elvis Presley dies at his Graceland home.' },
      { type: 'event', text: 'Queen Elizabeth II celebrates her Silver Jubilee.' },
    ],
    reveal: [
      'Star Wars was released in May 1977.',
      'Elvis Presley died on 16 August 1977.',
      'The Silver Jubilee was celebrated in 1977.',
    ],
  },
  {
    id: 98, year: 1981, era: 'AD',
    clues: [
      { type: 'event', text: 'The music channel MTV launches in the United States.' },
      { type: 'event', text: 'NASA launches the first reusable Space Shuttle.' },
      { type: 'event', text: 'Charles and Diana marry at St Paul’s Cathedral.' },
    ],
    reveal: [
      'MTV launched on 1 August 1981.',
      'The first Space Shuttle flew in April 1981.',
      'The royal wedding took place on 29 July 1981.',
    ],
  },
  {
    id: 99, year: 1998, era: 'AD',
    clues: [
      { type: 'event', text: 'Two students found the search engine Google.' },
      { type: 'event', text: 'Northern Ireland’s Good Friday Agreement is signed.' },
      { type: 'event', text: 'France win football’s World Cup on home soil.' },
    ],
    reveal: [
      'Google was founded in September 1998.',
      'The Good Friday Agreement was signed on 10 April 1998.',
      'France won the World Cup in July 1998.',
    ],
  },
  {
    id: 100, year: 2012, era: 'AD',
    clues: [
      { type: 'event', text: 'Physicists announce the discovery of the Higgs boson.' },
      { type: 'event', text: 'NASA’s Curiosity rover lands on Mars.' },
      { type: 'event', text: 'London hosts the Summer Olympic Games.' },
    ],
    reveal: [
      'The Higgs boson discovery was announced in July 2012.',
      'Curiosity landed on Mars in August 2012.',
      'The London Olympics were held in July and August 2012.',
    ],
  },
];
