/*
  Challenge: Reverse an Array In Place

  Your task is to write a JavaScript function called 'reverseArrayInPlace'
  that takes an array as input.

  Using a 'for' loop, you must reverse the order of the elements in the
  input array *without creating a new array*. This means you should
  modify the original array directly.

  Hint: Think about swapping elements. You might need to iterate only
  up to the middle of the array.

  Example:
  let arr1 = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arr1); // arr1 should now be [5, 4, 3, 2, 1]

  let arr2 = ["a", "b", "c", "d"];
  reverseArrayInPlace(arr2); // arr2 should now be ["d", "c", "b", "a"]

  let arr3 = [10];
  reverseArrayInPlace(arr3); // arr3 should now be [10]

  let arr4 = [];
  reverseArrayInPlace(arr4); // arr4 should now be []
*/

function reverseArrayInPlace(arr) {
  // Your 'for' loop and logic go here.
  // Remember to modify the 'arr' directly (in place).

  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  // No return statement is strictly necessary for this function
  // if you're modifying the array in place, but you can return arr
  // for convenience in testing if you wish.
}

// --- Test Cases (Do not modify below this line) ---

// Test Case 1
let testArr1 = [1, 2, 3, 4, 5];
reverseArrayInPlace(testArr1);
console.log("Test Case 1:", testArr1); // Expected: [5, 4, 3, 2, 1]

// Test Case 2
let testArr2 = ["a", "b", "c", "d"];
reverseArrayInPlace(testArr2);
console.log("Test Case 2:", testArr2); // Expected: ["d", "c", "b", "a"]

// Test Case 3
let testArr3 = [10];
reverseArrayInPlace(testArr3);
console.log("Test Case 3:", testArr3); // Expected: [10]

// Test Case 4
let testArr4 = [];
reverseArrayInPlace(testArr4);
console.log("Test Case 4:", testArr4); // Expected: []

// Test Case 5
let testArr5 = [1, 2, 3, 4, 5, 6]; // Even number of elements
reverseArrayInPlace(testArr5);
console.log("Test Case 5:", testArr5); // Expected: [6, 5, 4, 3, 2, 1]

// Test Case 6
let testArr6 = ["hello", "world"];
reverseArrayInPlace(testArr6);
console.log("Test Case 6:", testArr6); // Expected: ["world", "hello"]
