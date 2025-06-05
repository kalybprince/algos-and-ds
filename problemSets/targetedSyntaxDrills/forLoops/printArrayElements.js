/* 

Function: printArrayElements(arr)

    Description: Use a for loop to print each element of the input
    array arr to the console.
    Example: printArrayElements(["apple", "banana", "cherry"])
    should print:

    // apple
    // banana
    // cherry

*/

function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArrayElements(["apple", "banana", "cherry"]);
