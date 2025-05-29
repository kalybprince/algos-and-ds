// --- 3. Iteration Methods (Higher-Order Functions - take callbacks)

// Primary array for demonstrations
let numbers = [10, 20, 30, 40, 50];
let fruits = ["apple", "banana", "cherry", "date", "banana"];
let mixed = [1, "two", true, null, undefined, { id: 1 }, [7, 8]];
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let sparseArray = [1, , , 4];

// -- forEach() - Executes a function for each element

console.log("forEach():");
numbers.forEach((num, index) => {
  console.log(`Element at index ${index}: ${num}`);
});

/* Output:

forEach():
  Element at index 0: 10
  Element at index 1: 20
  Element at index 2: 30
  Element at index 3: 40
  Element at index 4: 50 */

/* -- map() - Creates a new array with the results of
              calling a function on every element */

let doubedNumbers = numbers.map((num) => num * 2);
console.log("map(): Doubled numbers:", doubedNumbers);
// Output: map(): Doubled numbers: [ 20, 40, 60, 80, 100 ]

// -- filter() - Creates new array with elements that pass a test

let longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log("filter(): Fruits with length > 5:", longFruits);
// Output: filter(): Fruits with length > 5: [ 'banana', 'cherry', 'banana' ]

/* -- reduce() - Applies a function against an accumulator and
                 each element to reduce it to a single value */

let sum = numbers.reduce((acc, curVal) => acc + curVal, 0);
console.log("reduce(): Sum of numbers:", sum);
// Output: 150

