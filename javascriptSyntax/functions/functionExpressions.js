/* Function Expressions

A function expression defines a function as part of an expression, often assigned to a variable.  

NOTE:  The variable name is NOT HOISTED

*/

const add = function (a, b) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8

// My example

const createArray = function (a, b) {
  return [a, b];
};

console.log(createArray("Hello", "World"));
// Output:
// [ 'Hello', 'World' ]
