/* 

Function: findMax(numbers)

    Description: Use a for loop to find and return the largest
    number in the numbers array. Assume the array is not empty.
    Example: findMax([5, 12, 3, 8]) should return 12.

*/

function findMax(numArray) {
  let maxValue = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > maxValue) {
      maxValue = numArray[i];
      continue;
    }
    return maxValue;
  }
}

console.log(findMax([5, 12, 3, 8])); // 12
