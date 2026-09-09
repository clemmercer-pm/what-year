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
        attribution: 'Storming of the Bastille, Jean-Pierre Houël (1789) - public domain' },
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
        attribution: 'The Great Fire of London, unknown painter (c.1675) - public domain' },
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
        attribution: 'The Coronation of Napoleon, Jacques-Louis David (1807) - public domain' },
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
        attribution: 'Liberty Leading the People, Eugène Delacroix (1830) - public domain' },
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
        attribution: 'Sunflowers, Vincent van Gogh (1888) - public domain' },
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
];
