/* 
Function: countByTwos(limit)

    Description: Use a for loop to print even numbers from 2 up to
    limit (inclusive).
    Example: countByTwos(10) should print: 2, 4, 6, 8, 10.

*/

function countByTwos(limit) {
  for (let i = 2; i < limit + 1; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

countByTwos(10);
