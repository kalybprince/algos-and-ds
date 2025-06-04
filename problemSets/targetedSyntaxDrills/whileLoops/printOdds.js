/* Task: Write a JavaScript function called printOdds(limit) that
uses a while loop to print all odd numbers from 1 up to limit
(inclusive). If a number is even, use the continue statement to
skip printing it and move to the next iteration. */

console.log("\nPrint odds:");

function printOdds(limit) {
  let count = 1;

  while (count <= limit) {
    if (count % 2 === 0) {
      count++;
      continue;
    }

    console.log(count);
    count++;
  }
}

printOdds(10);
