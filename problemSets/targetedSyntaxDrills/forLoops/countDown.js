/* 
Function: countDown(start)

    Description: Use a for loop to print numbers from start down
    to 1 (inclusive).
    Example: countDown(5) should print: 5, 4, 3, 2, 1.

*/

function countDown(start) {
  for (let i = start; i > 0; i--) {
    console.log(i);
  }
}

countDown(10);
