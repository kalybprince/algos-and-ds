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
