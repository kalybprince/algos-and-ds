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

/* Task: Write a JavaScript function called findFirstEven(numbers)
that takes an array of numbers. Use a while loop to iterate 
through the array. If you find the first even number, log it to 
the console and immediately exit the loop using break. If no even
number is found after checking all elements, log "No even number
found." */

console.log("\nFind first even:");

function findFirstEven(numbers) {
  let index = 0;
  let foundEven = false;

  while (index < numbers.length) {
    if (numbers[index] % 2 === 0) {
      console.log(numbers[index]);
      foundEven = true;
      break;
    }
    index++;
  }

  if (!foundEven) {
    console.log("No even number found.");
  }
}

findFirstEven([1, 3, 5, 4, 7, 9]);
// Expected: 4
findFirstEven([1, 3, 5, 7, 9]);
// Expected: No even number found.
findFirstEven([]);
// Expected: No even number found.
findFirstEven([1, 3, 5, 7, 9, 11, 24]);
// Expected: 24

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

/* Task: Write a JavaScript function called printRightTriangle
(height) that uses nested while loops to print a right-aligned
triangle pattern of asterisks. */

console.log("\nPrint a right triangle");

function printRightTriangle(height) {
  let row = 1;

  while (row < height) {
    let starsInRow = 1;
    let rowOutput = "";

    while (starsInRow <= row) {
      rowOutput += "*";
      starsInRow++;
    }
    console.log(rowOutput);
    row++;
  }
}

printRightTriangle(10);

/* Output:
Print a right triangle
*
**
***
****
*****
******
*******
********
*********
********** 
*/
