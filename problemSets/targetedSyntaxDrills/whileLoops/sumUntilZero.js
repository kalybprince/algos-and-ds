/* Simulate user input using an array of numbers. Write a 
JavaScript function called sumUntilZero(numbers) that iterates
through the numbers array. It should sum all the numbers it 
encounters until it finds a 0. Once 0 is encountered, the loop 
should stop, and the function should return the accumulated sum 
(excluding the 0). */

console.log("\nSum until zero:");

function sumUntilZero(numbers) {
  let index = 0;
  let sum = 0;

  while (numbers[index] !== 0 && index !== numbers.length) {
    sum += numbers[index];
    index++;
  }

  return sum;
}

console.log(sumUntilZero([5, 2, 8, 0, 10, 3]));
// Expected: 15
console.log(sumUntilZero([1, 2, 3, 4, 5]));
// Expected: 15 (if no 0, sum all)
console.log(sumUntilZero([0, 10, 20]));
// Expected: 0
