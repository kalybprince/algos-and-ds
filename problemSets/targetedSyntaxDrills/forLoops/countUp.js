/* Function: countUp(limit)

    Description: Use a for loop to print numbers from 1 up to
    limit (inclusive).
    Example: countUp(5) should print: 1, 2, 3, 4, 5 (each on a new
    line or separated by spaces). */

function countUp(limit) {
  for (let i = 1; i < limit + 1; i++) {
    console.log(i);
  }
}

countUp(10);
