/* continue:
Skips the rest of the current loop iteration and proceeds 
to the next iteration. */

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
// Output: 0, 1, 3, 4

// My example

for (let i = 10; i > 0; i--) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`${i} is odd.`);
}
// Output:
// 9 is odd.
// 7 is odd.
// 5 is odd.
// 3 is odd.
// 1 is odd.
