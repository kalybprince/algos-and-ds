/* Task: Simulate a scenario where you need to repeatedly ask for
valid input. Write a JavaScript function called 
validatePositiveNumber(inputAttempts) that takes an array of 
numbers representing user input attempts. The function should 
iterate through these attempts using a while loop. It should only
stop (return the number) when a positive number (greater than 0)
is encountered. If all attempts are non-positive, return -1. */

console.log("\nValidate positive number");

function validatePositiveNumber(inputAttempts) {
  let index = 0;

  while (true) {
    if (inputAttempts[index] > 0) {
      return inputAttempts[index];
    } else if (index === inputAttempts.length) {
      return -1;
    } else {
      index++;
    }
  }
}

console.log(validatePositiveNumber([-1, 0, -5, 10, -2]));
// Expected: 10
console.log(validatePositiveNumber([-1, 0, -5]));
// Expected: -1
console.log(validatePositiveNumber([5]));
// Expected: 5
