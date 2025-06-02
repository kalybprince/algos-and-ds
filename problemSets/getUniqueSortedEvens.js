/*
  Challenge: Extract and Sort Unique Even Numbers

  Your task is to write a JavaScript function that takes an array of numbers
  as input.

  The function should:
  1.  Iterate through the input array.
  2.  Identify all numbers that are **even**.
  3.  From those even numbers, collect only the **unique** ones (no duplicates).
  4.  Finally, return a **new array** containing these unique even numbers,
      sorted in **ascending order**.

  You should use:
  - A `for` loop for iteration.
  - Conditional statements (`if`).
  - Logic to handle uniqueness (think about how to prevent duplicates).
  - Array methods for adding elements and potentially sorting.

  Consider edge cases like empty arrays, arrays with no even numbers,
  or arrays with only duplicates.

  Example:
  // Assuming your function is named 'getUniqueSortedEvens'
  getUniqueSortedEvens([1, 2, 3, 4, 2, 5, 6, 4]); // Should return [2, 4, 6]
  getUniqueSortedEvens([10, 20, 10, 30, 20]);    // Should return [10, 20, 30]
  getUniqueSortedEvens([1, 3, 5, 7]);           // Should return []
  getUniqueSortedEvens([]);                     // Should return []
  getUniqueSortedEvens([2, 2, 2, 2]);           // Should return [2]
  getUniqueSortedEvens([-4, 0, 4, -2]);         // Should return [-4, -2, 0, 4]
*/

// Write your function here!
// Remember to define the function name and its parameters.
function getUniqueSortedEvens(arr) {
  let newArray = [];

  for (let num of arr) {
    if (num % 2 === 0 && !newArray.includes(num)) {
      newArray.push(num);
    }
  }

  return newArray.sort((a, b) => a - b);
}

// --- Test Cases (Do not modify below this line) ---
console.log("Test Case 1:", getUniqueSortedEvens([1, 2, 3, 4, 2, 5, 6, 4])); // Expected: [2, 4, 6]
console.log("Test Case 2:", getUniqueSortedEvens([10, 20, 10, 30, 20])); // Expected: [10, 20, 30]
console.log("Test Case 3:", getUniqueSortedEvens([1, 3, 5, 7])); // Expected: []
console.log("Test Case 4:", getUniqueSortedEvens([])); // Expected: []
console.log("Test Case 5:", getUniqueSortedEvens([2, 2, 2, 2])); // Expected: [2]
console.log("Test Case 6:", getUniqueSortedEvens([-4, 0, 4, -2])); // Expected: [-4, -2, 0, 4]
console.log("Test Case 7:", getUniqueSortedEvens([7, 8, 9, 8, 10])); // Expected: [8, 10]
