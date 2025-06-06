/* 

Task: Ask the user to enter a number (e.g., 7). Then, use a for
loop to print the multiplication table for that number from 1 to
10.

*/

function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

console.log(multiplicationTable(10));
