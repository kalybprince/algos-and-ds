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

let longestFruit = fruits.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, "");
console.log("reduce(): Longest fruit:", longestFruit);
// Output: reduce(): Longest fruit:  banana

// -- every() - Tests if all elements pass a test
let allEven = [2, 4, 6].every((num) => num % 2 === 0);
let someOdd = [1, 2, 3].every((num) => num % 2 === 0);
console.log("every(); All [2,4,6] are even?", allEven);
// Output: true
console.log("every(); All [1,2,3] are even?", someOdd);
// Output: false

// -- some() - Tests if at least one of the elements passes the test

let hasEven = [1, 2, 3].some((num) => num % 2 === 0);
let hasNegative = [1, 3, 5].some((num) => num < 0);
console.log("some(): [1,2,3] has an even number?", hasEven);
// Output: true
console.log("some: [1,3,5] has a negative number?", hasNegative);
// Output: false

// -- find() - Returns the value of the first element that satisfies a test
let foundNum = numbers.find((num) => num > 30);
console.log("find(): First number > 30:", foundNum);
// Output: 40

// -- findIndex() - Returns the index of the first element that satisfies a test
let foundIndex = numbers.findIndex((num) => num < 25);
console.log("findIndex(): Index of first number < 25:", foundIndex);

// -- flat() - Creates a new array with all sub-array elements concatenated into it recursively

console.log("flat(): Original nestedArray:", nestedArray);
let flattenedOnce = nestedArray.flat();
console.log("flat(): Flattened once:", flattenedOnce);
// Output: [1, 2, 3, 4, [5, 6]]
let flattenedTwice = nestedArray.flat(2); // Flatten to depth 2
console.log("flat(): Flattened twice:", flattenedTwice);
// Output: [1, 2, 3, 4, 5, 6]
let flattenedAll = nestedArray.flat(Infinity); // Flatten all levels
console.log("flat(): Flattened all:", flattenedAll);
// Output:  [1, 2, 3, 4, 5, 6]

// -- flatMap() - Maps then flattens one level
let words = ["hello world", "how are you"];
let characters = words.flatMap((word) => word.split(""));
console.log("flatMap(): Characters from words:", characters);
/* Output: 
flatMap(): Characters from words: [
  'h', 'e', 'l', 'l', 'o',
  ' ', 'w', 'o', 'r', 'l',
  'd', 'h', 'o', 'w', ' ',
  'a', 'r', 'e', ' ', 'y',
  'o', 'u'
]
*/
