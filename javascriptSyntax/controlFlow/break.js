/* break:
Terminates the current loop (or switch statement) and
transfers control to the statement immediately 
following the loop. */

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

// My example

for (let i = 10; i > 0; i--) {
  if (i === 1) {
    console.log(`${i} has been reached -- Goodbye!`);
    break;
  }
  
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}
