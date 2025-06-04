/* Task: Write a JavaScript function called countdown(start) that
uses a while loop to print numbers from start down to 1
(inclusive). Log each number to the console. */

console.log("\nCount down:");

function countDown(start) {
  while (start >= 1) {
    console.log(start);
    start--;
  }
}

countDown(10);
