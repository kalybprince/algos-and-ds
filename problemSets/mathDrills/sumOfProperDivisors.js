/*
  Mini-Drill: Sum of Proper Divisors

  Your task is to write a JavaScript function called 'getSumOfProperDivisors'
  that takes a single positive integer 'num' as input.

  The function should calculate and return the sum of all its proper positive divisors.
  Proper positive divisors are all positive divisors of a number,
  *excluding the number itself*.

  Example:
  - For num = 6, proper divisors are 1, 2, 3. Sum = 1 + 2 + 3 = 6.
  - For num = 10, proper divisors are 1, 2, 5. Sum = 1 + 2 + 5 = 8.
  - For num = 1, it has no proper positive divisors (excluding itself). Sum = 0.
  - For num = 7 (a prime number), its only proper divisor is 1. Sum = 1.

  You should use:
  - A `for` loop for iteration.
  - Conditional statements (`if`) for checking divisibility.
  - A variable to accumulate the sum.
*/

// Write your function here!

function getSumOfProperDivisors(num) {
  let sumOfDivisors = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sumOfDivisors += i;
    }
  }
  return sumOfDivisors;
}

// Remember to define the function name and its parameter.

// --- Test Cases (Do not modify below this line) ---
console.log("Test Case 1 (num=6):", getSumOfProperDivisors(6)); // Expected: 6
console.log("Test Case 2 (num=10):", getSumOfProperDivisors(10)); // Expected: 8
console.log("Test Case 3 (num=1):", getSumOfProperDivisors(1)); // Expected: 0
console.log("Test Case 4 (num=7):", getSumOfProperDivisors(7)); // Expected: 1 (Prime number)
console.log("Test Case 5 (num=28):", getSumOfProperDivisors(28)); // Expected: 28
console.log("Test Case 6 (num=12):", getSumOfProperDivisors(12)); // Expected: 1+2+3+4+6 = 16
