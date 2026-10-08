// =============================================
// 6. FINAL — Library (uses everything)
// =============================================
// 1. Print every book: "Title by Author (year) — available" or "— checked out".
// 2. Count how many books are available.
// 3. Count how many books were published before 2000.
// 4. Find the newest book.
//
// Expected output:
//   Season of Migration to the North by Tayeb Salih (1966) — available
//   Celestial Bodies by Jokha Alharthi (2010) — checked out
//   Men in the Sun by Ghassan Kanafani (1962) — available
//   Palace Walk by Naguib Mahfouz (1956) — available
//   Frankenstein in Baghdad by Ahmed Saadawi (2013) — checked out
//   The Prophet by Kahlil Gibran (1923) — available
//   Available books: 4
//   Published before 2000: 4
//   Newest book: Frankenstein in Baghdad (2013)

const books = [
  { title: "Season of Migration to the North", author: "Tayeb Salih", year: 1966, available: true },
  { title: "Celestial Bodies", author: "Jokha Alharthi", year: 2010, available: false },
  { title: "Men in the Sun", author: "Ghassan Kanafani", year: 1962, available: true },
  { title: "Palace Walk", author: "Naguib Mahfouz", year: 1956, available: true },
  { title: "Frankenstein in Baghdad", author: "Ahmed Saadawi", year: 2013, available: false },
  { title: "The Prophet", author: "Kahlil Gibran", year: 1923, available: true },
];

let availableBooks = 0;
let before2000 = 0;
let newestBook = books[0];

for (let i = 0; i < books.length; i++) {
    let book = books[i];

    // 1. Print every book
    let status;

    if (book.available) {
        status = "available";
        availableBooks++;
    } else {
        status = "checked out";
    }

    console.log(`${book.title} by ${book.author} (${book.year}) — ${status}`);

    // 3. Count books before 2000
    if (book.year < 2000) {
        before2000++;
    }

    // 4. Find newest book
    if (book.year > newestBook.year) {
        newestBook = book;
    }
}

// 2, 3 and 4. Print results
console.log(`Available books: ${availableBooks}`);
console.log(`Published before 2000: ${before2000}`);
console.log(`Newest book: ${newestBook.title} (${newestBook.year})`);

// your code here
