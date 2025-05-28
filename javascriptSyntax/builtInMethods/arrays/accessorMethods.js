// --- Accessor Methods (Do Not Modify the Original Array)

// -- concat() - Merge two/more arrays, returns new array
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let combinedArr = arr1.concat(arr2, arr3);
console.log(
  `concat():
  Original arr1: ${arr1}
  Combined: ${combinedArr}
  `
);
// Output : arr1: [1, 2] Combined: [1, 2, 3, 4, 5, 6]

// -- slice() - Return shallow copy of a portion of an
//              array into a new array
let sliceArr = [10, 20, 30, 40, 50];
let sliced1 = sliceArr.slice(1, 4);
let sliced2 = sliceArr.slice(2);
let sliced3 = sliceArr.slice(-3);
let slicedCopy = sliceArr.slice();

console.log("slice(): Original:", sliceArr);
// Output: [10, 20, 30, 40, 50]
console.log("slice(): sliced1 (1,4):", sliced1);
// Output: [20, 30, 40]
console.log("slice(): sliced2 (2):", sliced2);
// Output: [30, 40, 50]
console.log("slice(): sliced3 (-3):", sliced3);
// Output: [30, 40, 50]
console.log("slice(): slicedCopy ():", slicedCopy);
// Output: [10, 20, 30, 40, 50]

// -- indexOf() - returns the first index of an element, or -1
let fruits = ["apple", "banana", "cherry", "date", "banana"];
console.log("indexOf(): 'banana' in fruits:", fruits.indexOf("banana"));
// Output: indexOf(): 'banana' in fruits: 1
console.log(
  "indexOf(): 'banana' from index 2 in fruits",
  fruits.indexOf("banana", 2)
);
// Output: indexOf(): 'banana' from index 2 in fruits 4
console.log("indexOf(): 'grape' in fruits:", fruits.indexOf("grape"));
// Output: indexOf(): 'grape' in fruits: -1

// -- lastIndexOf() - Returns the first index of an element, or -1

console.log("lastIndexOf(): 'banana' in fruits:", fruits.lastIndexOf("banana"));
// Output: lastIndexOf(): 'banana' in fruits: 4
console.log(
  "lastIndexOf(): 'banana' from index 3 (backwards) in fruits:",
  fruits.lastIndexOf("banana", 3)
);
// Output: lastIndexOf(): 'banana' from index 3 (backwards) in fruits 1

// -- includes() - Checks if an array contains an element

let numbers = [10, 20, 30, 40, 50];

console.log("includes(): numbers includes 30?", numbers.includes(30)); // Output: true
console.log("includes(): numbers includes 99?", numbers.includes(99)); // Output: false

// -- join() - Joins all elements into a string

console.log("join(): fruits joined with '-':", fruits.join("-"));
// Output: apple-banana-cherry-date-banana
console.log("join(): numbers joined (default ','):", numbers.join());
// Output: 10,20,30,40,50

// at() - Gets element at index, supports negative indexing

console.log("at(): numbers.at(2):", numbers.at(2));
// Output: 30
console.log("at(): numbers.at(-1):", numbers.at(-1));
// Output: 50 (last element)
