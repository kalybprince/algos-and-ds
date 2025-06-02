/*
  Challenge: Count Character Occurrences in Array of Strings

  Your task is to write a JavaScript function called 'countCharacterOccurrences'
  that takes two arguments:
  1. 'strings': An array of strings.
  2. 'charToFind': A single character string (e.g., "a", "X", "p").

  Using 'for' loops (you might need nested loops or a single loop iterating through strings
  and then using string methods or another loop for characters),
  iterate through each string in the 'strings' array.
  For each string, count how many times 'charToFind' appears within it.
  The comparison should be CASE-INSENSITIVE (e.g., 'a' should match 'A' and 'a').

  Finally, the function should return the total count of 'charToFind'
  across ALL strings in the input array.

  Example:
  countCharacterOccurrences(["Hello", "World", "JavaScript"], "o"); // Should return 3 (one 'o' in Hello, one 'o' in World, zero in JavaScript)
  countCharacterOccurrences(["Apple", "Banana", "Cherry"], "a"); // Should return 4 (one 'a' in Apple, three 'a's in Banana, zero in Cherry)
  countCharacterOccurrences(["Programming", "is", "fun"], "g"); // Should return 2
  countCharacterOccurrences([], "x"); // Should return 0
  countCharacterOccurrences(["Test"], "t"); // Should return 2 (case-insensitive: 'T' and 't')
*/

function countCharacterOccurrences(strings, charToFind) {
  let totalCount = 0;

  // Your 'for' loops and logic go here
  // Remember to handle case-insensitivity.
  // Consider converting both the string characters and charToFind to a consistent case
  // (e.g., lowercase) before comparison.

  for (let string of strings) {
    for (let letter of string) {
      if (letter.toLowerCase() === charToFind.toLowerCase()) {
        totalCount += 1;
      }
    }
  }

  return totalCount;
}

// --- Test Cases (Do not modify below this line) ---
console.log(
  "Test Case 1:",
  countCharacterOccurrences(["Hello", "World", "JavaScript"], "o")
); // Expected: 3
console.log(
  "Test Case 2:",
  countCharacterOccurrences(["Apple", "Banana", "Cherry"], "a")
); // Expected: 4
console.log(
  "Test Case 3:",
  countCharacterOccurrences(["Programming", "is", "fun"], "g")
); // Expected: 2
console.log("Test Case 4:", countCharacterOccurrences([], "x")); // Expected: 0
console.log("Test Case 5:", countCharacterOccurrences(["Test"], "t")); // Expected: 2
console.log(
  "Test Case 6:",
  countCharacterOccurrences(["AaA", "bBb", "CcC"], "a")
); // Expected: 3
console.log("Test Case 7:", countCharacterOccurrences(["One Two Three"], "e")); // Expected: 3
console.log("Test Case 8:", countCharacterOccurrences(["NoMatch"], "z")); // Expected: 0
