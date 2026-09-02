# Image clues — sourcing policy & manifest

## Policy (locked 2026-08-29): **paintings only, 100% public domain**
A deliberately strict, maintainable bright line so the content set can be stocked deep and **trusted without per-item review**:

- **Only paintings / artworks that are unambiguously public domain** — in practice, works whose creator died over 100 years ago (pre-~1900). These are PD worldwide with no fuss.
- **No photographs. No maps. No engravings of uncertain date. No CC-licensed anything.** If there's *any* rights question, it doesn't go in.
- Every image's licence is confirmed as **"Public domain"** via the Wikimedia Commons API before download, and attribution (artist + work + year) is stored on the puzzle as good practice.
- Natural consequence: **image clues skew to older puzzles** (there's a PD painting of the Great Fire but not of the Moon landing). Modern events are **text-only**. That's fine — aim for a pleasant text/painting *balance*, not an image on every puzzle.

## In use / wired up
| File | Puzzle | Painting | Artist (year) | Licence |
|------|--------|----------|---------------|---------|
| `bastille.jpg` | 1789 | Storming of the Bastille | Jean-Pierre Houël (1789) | Public domain |
| `great-fire-london.jpg` | 1666 | The Great Fire of London | Unknown (c.1675) | Public domain |

_Fetched at 800px via Commons `Special:FilePath/<File>?width=800` (≈130–210 KB each). If a file is ever missing, the clue falls back to text — the game does not break._

## How to add one (per painting)
1. Find a suitable **pre-~1900 painting** on Wikimedia Commons.
2. Confirm its licence is **"Public domain"** via the API:
   `https://commons.wikimedia.org/w/api.php?action=query&titles=File:<Name>&prop=imageinfo&iiprop=extmetadata&iiextmetadatafilter=LicenseShortName&format=json`
3. Download web-size: `curl -L -A "<descriptive UA>" -o <local>.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/<File>?width=800"`
4. Add `image`, `alt`, `attribution` (artist, work, year) to the clue in `../puzzles.js`.
