/* 

Function: sumArray(numbers)

    Description: Use a for loop to calculate and return the sum of
    all numbers in the numbers array.
    Example: sumArray([10, 20, 30]) should return 60.

*/

function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumArray([10, 20, 30])); // 60
