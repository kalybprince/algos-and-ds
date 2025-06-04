/* Task: Write a JavaScript function called countUp(limit) that
uses a while loop to print numbers from 1 up to (and including)
the limit provided as an argument. Log each number to the console. */

console.log("\nCount up:");

function countUp(limit) {
  let counter = 1;

  while (counter <= limit) {
    console.log(counter);
    counter++;
  }
}

countUp(10);
