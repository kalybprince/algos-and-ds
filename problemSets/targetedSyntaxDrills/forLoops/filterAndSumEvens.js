/*
  Challenge: Filter and Sum Even Numbers

  Your task is to write a JavaScript function called 'filterAndSumEvens'
  that takes an array of numbers as input.

  Using a 'for' loop, iterate through the input array.
  Inside the loop, check if each number is even.
  If a number is even, add it to a running total.

  Finally, the function should return the sum of all even numbers found in the array.

  Example:
  filterAndSumEvens([1, 2, 3, 4, 5, 6]); // Should return 12 (2 + 4 + 6)
  filterAndSumEvens([10, 15, 20, 25]); // Should return 30 (10 + 20)
  filterAndSumEvens([1, 3, 5, 7]); // Should return 0
  filterAndSumEvens([]); // Should return 0
*/

function filterAndSumEvens(numbers) {
  let sumOfEvens = 0;

  // Your 'for' loop and logic go here
  // Remember to iterate through the 'numbers' array
  // and update 'sumOfEvens' accordingly.

  for (let number of numbers) {
    if (number % 2 === 0) {
      sumOfEvens += number;
    }
  }

  return sumOfEvens;
}

// --- Test Cases (Do not modify below this line) ---
console.log("Test Case 1:", filterAndSumEvens([1, 2, 3, 4, 5, 6])); // Expected: 12
console.log("Test Case 2:", filterAndSumEvens([10, 15, 20, 25])); // Expected: 30
console.log("Test Case 3:", filterAndSumEvens([1, 3, 5, 7])); // Expected: 0
console.log("Test Case 4:", filterAndSumEvens([])); // Expected: 0
console.log("Test Case 5:", filterAndSumEvens([2, 4, 6, 8, 10])); // Expected: 30
console.log("Test Case 6:", filterAndSumEvens([-2, 0, 3, 4])); // Expected: 2
