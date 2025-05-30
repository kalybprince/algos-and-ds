// --- Static Methods (Called Directly on Array Constructor)

// Primary array for demonstrations
let numbers = [10, 20, 30, 40, 50];
let fruits = ["apple", "banana", "cherry", "date", "banana"];
let mixed = [1, "two", true, null, undefined, { id: 1 }, [7, 8]];
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let sparseArray = [1, , , 4];

// -- Array.isArray() - Checks if a value is an array

console.log("Array.isArray(): is numbers an array?", Array.isArray(numbers)); // Output: true
console.log("Array.isArray(): is 'hello' an array?", Array.isArray("hello")); // Output: false
console.log("Array.isArray(): is {} an array?", Array.isArray({})); // Output: false

// -- Array.from() - Creates a new Array instance from an array-like or iterable object

let arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
let newArrayFromLike = Array.from(arrayLike);
console.log("Array.from(): From array-like object:", newArrayFromLike); // Output: ['a', 'b', 'c']

let set = new Set([1, 2, 3, 2, 1]);
let newArrayFromSet = Array.from(set);
console.log("Array.from(): From Set:", newArrayFromSet);
// Output: [1, 2, 3]

// Array.of() - Creates a new Array instance with a variable number of arguments

let newArrayOf = Array.of(1, 2, 3, "hello");
console.log("Array.of():", newArrayOf);
// Output: [1, 2, 3, 'hello']
