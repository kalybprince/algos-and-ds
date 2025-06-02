/*
  Challenge: Advanced Text Analyzer

  Your task is to write a JavaScript function called 'analyzeText'
  that takes a single string 'text' as input.

  The function should analyze the input string and return an object
  containing various counts and information about the text.

  You need to perform the following steps:
  1.  Initialize counters for:
      * `vowels` (case-insensitive: a, e, i, o, u)
      * `consonants` (case-insensitive)
      * `spaces`
      * `punctuation` (.,!?;:'")
      * `digits` (0-9)
      * `otherCharacters` (anything not covered above)
  2.  Initialize a `characterFrequency` object to store counts of each letter (case-insensitive).

  3.  **Iterate** through each character in the input `text` string using a `for` loop.
      Inside the loop:
      a.  Convert the current character to lowercase for case-insensitive checks.
      b.  Use a series of `if/else if/else` statements (or a `switch` if you prefer, though `if/else if` might be more natural here) to categorize each character:
          * If it's a vowel, increment `vowels` count.
          * If it's a consonant, increment `consonants` count.
          * If it's a space, increment `spaces` count.
          * If it's punctuation, increment `punctuation` count.
          * If it's a digit, increment `digits` count.
          * Otherwise, increment `otherCharacters` count.

  4.  Return an object with all the calculated counts.

  This challenge focuses on:
  - `for` loops for string iteration.
  - Complex `if/else if/else` (or `switch`) for categorization.
  - String methods (`toLowerCase()`, `includes()`).
  - Handling various character types.

  Example:
  // Assuming your function is named 'analyzeText'
  analyzeText("Hello, World! 123");
  // Expected output (approximate):
  // {
  //   vowels: 3, (e, o, o)
  //   consonants: 7, (h, l, l, w, r, l, d)
  //   spaces: 2,
  //   punctuation: 2, (,, !)
  //   digits: 3, (1, 2, 3)
  //   otherCharacters: 0,
  //   mostFrequentLetter: 'l' (or 'o' if tie-breaking is different)
  // }
*/

// Write your function here!
// Remember to define the function name and its parameter.
function analyzeText(text) {
  // counters
  let vowels = 0;
  let consonants = 0;
  let spaces = 0;
  let punctuation = 0;
  let digits = 0;
  let otherCharacters = 0;

  let lowerText = text.toLowerCase();

  const VOWELCHECKSTRING = "aeiou";
  const CONSONANTCHECKSTRING = "bcdfghjklmnpqrstvwxyz";
  const SPACECHECKSTRING = " ";
  const PUNCTUATIONCHECKSTRING = ".,!?;:'\"";
  const DIGITCHECKSTRING = "0123456789";

  // Object to store counts for each letter
  characterFrequency = {
    vowels,
    consonants,
    spaces,
    punctuation,
    digits,
    otherCharacters,
  };

  for (let eachCharacter of lowerText) {
    if (VOWELCHECKSTRING.includes(eachCharacter)) {
      characterFrequency.vowels += 1;
    } else if (CONSONANTCHECKSTRING.includes(eachCharacter)) {
      characterFrequency.consonants += 1;
    } else if (SPACECHECKSTRING.includes(eachCharacter)) {
      characterFrequency.spaces += 1;
    } else if (PUNCTUATIONCHECKSTRING.includes(eachCharacter)) {
      characterFrequency.punctuation += 1;
    } else if (DIGITCHECKSTRING.includes(eachCharacter)) {
      characterFrequency.digits += 1;
    } else {
      characterFrequency.otherCharacters += 1;
    }
  }

  return characterFrequency;
}

// --- Test Cases (Do not modify below this line) ---
console.log("Test Case 1: 'Hello, World! 123'");
console.log(analyzeText("Hello, World! 123"));
// Expected: { vowels: 3, consonants: 7, spaces: 2, punctuation: 2, digits: 3, otherCharacters: 0};

console.log("\nTest Case 2: 'JavaScript is FUN.'");
console.log(analyzeText("JavaScript is FUN."));
// Expected: { vowels: 5, consonants: 9, spaces: 3, punctuation: 1, digits: 0, otherCharacters: 0 };

console.log("\nTest Case 3: 'A quick brown fox jumps over the lazy dog.'");
console.log(analyzeText("A quick brown fox jumps over the lazy dog."));
// Expected: { vowels: 12, consonants: 23, spaces: 8, punctuation: 1, digits: 0, otherCharacters: 0};

console.log("\nTest Case 4: '' (Empty string)");
console.log(analyzeText(""));
// Expected: { vowels: 0, consonants: 0, spaces: 0, punctuation: 0, digits: 0, otherCharacters: 0}

console.log("\nTest Case 5: '12345!@#$%'");
console.log(analyzeText("12345!@#$%"));
// Expected: { vowels: 0, consonants: 0, spaces: 0, punctuation: 1, digits: 5, otherCharacters: 4};
