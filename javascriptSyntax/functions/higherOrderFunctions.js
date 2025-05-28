/* Higher-Order Functions and Callbacks

A function that takes another function as an argument or returns a function is called a higher-order function. Functions passed as arguments are called callback functions. This is fundamental to asynchronous programming and many modern JavaScript patterns. */

// Example of a higher-order function (forEach) using a callback
const colors = ["red", "green", "blue"];

colors.forEach(function (color) {
  console.log(`My favorite color is ${color}`);
});

// A custom higher-order function
function doOperation(num1, num2, operation) {
  return operation(num1, num2);
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(doOperation(10, 5, multiply)); // Output: 50
console.log(doOperation(10, 5, divide)); // Output: 2
