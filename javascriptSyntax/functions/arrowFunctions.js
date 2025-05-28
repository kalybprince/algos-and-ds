/* Arrow Functions (ES6+)

Arrow functions provide a more concise syntax for writing
function expressions, especially useful for short, single-line functions. They also have different behavior regarding the this keyword (which is an advanced topic). 

NOTE:  Arrow function are NOT HOISTED*/

// Basic syntax
const functionName = (parameter1, parameter2) => {
  return [parameter1, parameter2];
};

console.log(functionName("Hello", "World"));

// With a single parameter (parentheses are optional)
const singleParam = (param) => {
  return param;
};

console.log(singleParam("Hello, world!"));

// Concise body (implicit return)
const conciseSum = (a, b) => a + b; // No 'return' keyword

console.log(`A sum is: ${conciseSum(2, 2)}`);

// No parameters
const sayHi = () => {
  console.log("I have no parameters!");
};

sayHi();

//
// My examples
//

const createArray = (parameter1, parameter2) => {
  return [parameter1, parameter2];
};
console.log(createArray("Hello", "World"));

const returnAValue = (value) => {
  return value;
};
console.log(returnAValue("Hello, world!"));

const subtraction = (a, b) => a - b;
console.log(subtraction(2, 2));

const sayGoodbye = () => {
  console.log("Goodbye!");
};
sayGoodbye();
