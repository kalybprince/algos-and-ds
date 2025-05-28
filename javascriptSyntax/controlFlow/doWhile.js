/* do...while loop:
Similar to while, but the block of code is executed at 
least once before the condition is evaluated. The 
condition is evaluated after each iteration. */

let i = 0;
do {
  console.log("Do-while count: " + i);
  i++;
} while (i < 0); // Falsy
// Output:
// Do-while count: 0

// My example

let testStatus = true;
do {
  console.log(`Test ran = ${testStatus}`);
} while (testStatus === false);
