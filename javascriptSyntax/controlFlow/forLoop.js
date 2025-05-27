/* for loop:
The most common loop, used when you know (or can calculate)
the number of iterations in advance. It consists of an initialization, a condition, and an increment/decrement
expression. */

for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

// Output:
// Iteration 0
// Iteration 1
// Iteration 2
// Iteration 3
// Iteration 4

// My example:

for (let i = 5; i > 0; i--) {
  console.log(`Iteration ${i}`);
}

// Output:
// Iteration 5
// Iteration 4
// Iteration 3
// Iteration 2
// Iteration 1
