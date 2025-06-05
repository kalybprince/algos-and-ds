/* 

Function: printEvenOrOdd(start, end)

    Description: Use a for loop to iterate from start to end
    (inclusive). For each number, print whether it's "Even" or
    "Odd".
    Hint: Use the modulo operator (%).
    Example: printEvenOrOdd(1, 4) should print: 
    // 1 is Odd
    // 2 is Even
    // 3 is Odd
    // 4 is Even

*/

function printEvenOrOdd(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even.`);
    } else {
      console.log(`${i} is odd.`);
    }
  }
}

printEvenOrOdd(1, 4);
