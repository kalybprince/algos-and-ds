/*
  Challenge: Find the First N Perfect Numbers

  Your task is to write a JavaScript function that takes a single number 'n'
  as input. This 'n' represents how many perfect numbers you need to find.

  The function should:
  1.  Start checking numbers from 1 upwards.
  2.  For each number, determine if it is a "perfect number".
      A **perfect number** is a positive integer that is equal to the sum
      of its proper positive divisors (that is, the sum of its positive
      divisors excluding the number itself).

      Examples of perfect numbers:
      - 6 (Proper divisors: 1, 2, 3;  1 + 2 + 3 = 6)
      - 28 (Proper divisors: 1, 2, 4, 7, 14;  1 + 2 + 4 + 7 + 14 = 28)
      - The next perfect number after 28 is 496.

  3.  Collect the first 'n' perfect numbers found into an array.
  4.  Return this array of perfect numbers.

  You should use:
  - An outer `for` or `while` loop to iterate through numbers to check.
  - An inner `for` loop to find the proper divisors of each number.
  - Conditional statements (`if`) for checking divisibility and summing divisors.
  - An array to store the found perfect numbers.
  - Logic to stop the outer loop once 'n' perfect numbers have been found.

  Consider edge cases:
  - If n is 0, return an empty array.
  - The smallest perfect number is 6.

  Example:
  // Assuming your function is named 'findFirstNPerfectNumbers'
  findFirstNPerfectNumbers(0); // Should return []
  findFirstNPerfectNumbers(1); // Should return [6]
  findFirstNPerfectNumbers(2); // Should return [6, 28]
  findFirstNPerfectNumbers(3); // Should return [6, 28, 496]
*/

// Write your function here!
// Remember to define the function name and its parameters.

function findFirstNPerfectNumbers(n) {
  let perfectNumbers = [];
  let candidateNumber = 1;

  if (n === 0) {
    return [];
  }

  while (perfectNumbers.length < n) {
    let sumOfProperDivisors = 0;
    for (let i = 0; i <= candidateNumber / 2; i++) {
      if (candidateNumber % i === 0) {
        sumOfProperDivisors += i;
      }
    }
    if (candidateNumber > 1 && sumOfProperDivisors === candidateNumber) {
      perfectNumbers.push(candidateNumber);
    }
    candidateNumber++;
  }
  return perfectNumbers;
}

// --- Test Cases (Do not modify below this line) ---
console.log("Test Case 1 (n=0):", findFirstNPerfectNumbers(0)); // Expected: []
console.log("Test Case 2 (n=1):", findFirstNPerfectNumbers(1)); // Expected: [6]
console.log("Test Case 3 (n=2):", findFirstNPerfectNumbers(2)); // Expected: [6, 28]
console.log("Test Case 4 (n=3):", findFirstNPerfectNumbers(3)); // Expected: [6, 28, 496]
// Note: Finding more perfect numbers can be computationally intensive.
// The 4th perfect number is 8128.
// The 5th perfect number is 33550336.
// For testing, stick to small 'n' values.
console.log("Test Case 5 (n=4):", findFirstNPerfectNumbers(4)); // Expected: [6, 28, 496, 8128]
