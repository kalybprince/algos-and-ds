/* 

Function: reversePrintArray(arr)

    Description: Use a for loop to print the elements of the input
    array arr in reverse order.
    Example: reversePrintArray(["a", "b", "c"]) should print: 
    // c
    // b
    // a

    temp[]
    abc
*/

function reversePrintArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

reversePrintArray(["a", "b", "c"]);
