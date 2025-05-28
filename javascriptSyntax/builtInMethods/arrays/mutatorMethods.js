// --- 1. Mutator Methods (Modify the Original Array) ---

// NOTE:  Mutator Methods are not idiomatic

// -- push() - Adds elements to the end

let pushNumbers = [1, 2];

console.log(
  `push(): 
  Before: ${pushNumbers}`
);

let newLengthPush = pushNumbers.push(3, 4);

console.log(
  `push(): 
  After: ${pushNumbers}
  New Length: ${newLengthPush}
  `
);
// Output: [1, 2, 3, 4] New Length: 4

// pop() - Removes the last element

let popNumbers = [1, 2, 3];
console.log(
  `pop(): 
  Before: ${popNumbers}`
);
let removedPop = popNumbers.pop();
console.log(
  `pop(): 
  After: ${popNumbers}
  Removed: ${removedPop}
  `
);
// Output: [1, 2] Removed: 3

// -- unshift() - Adds elements to the beginning

let unshiftNumbers = [3, 4];
console.log(
  `unshift():
  Before: ${unshiftNumbers}`
);
let newLengthUnshift = unshiftNumbers.unshift(1, 2);
console.log(
  `unshift():
  After: ${unshiftNumbers}
  New Length: ${newLengthUnshift}
  `
);
// Output: [1, 2, 3, 4] New Length: 4

// -- shift() - Removes the first element

let shiftNumbers = [1, 2, 3];
console.log(
  `shift():
  Before: ${shiftNumbers}`
);
let removedShift = shiftNumbers.shift();
console.log(
  `shift():
  After: ${shiftNumbers}
  Removed: ${removedShift}
  `
);
// Output: [2, 3] Removed: 1

// -- splice() - removing/replacing/adding elements

let spliceArr = [1, 2, 3, 4, 5];
console.log(
  `splice(): 
  Before: ${spliceArr}`
);
// At index 2, remove 1 element, add 'a', 'b'
let removedSplice = spliceArr.splice(2, 1, "a", "b");
console.log(
  `splice()
  After: removing only: ${spliceArr}
  Removed: ${removedSplice}
  `
);
// Output: [1, 2, 'a', 'b', 4, 5] Removed: [3]

// -- sort() - Sorts elements in place

let sortNumbers = [3, 1, 4, 1, 5, 9];
console.log(
  `sort()
  Before (numbers): ${sortNumbers}`
);
sortNumbers.sort((a, b) => a - b); // Numeric sort
console.log(
  `sort()
  After (numbers, numeric): ${sortNumbers};
  `
);
// Output: 1,1,3,4,5,9

let sortStrings = ["banana", "apple", "cherry"];
console.log(
  `sort()
  Before (strings): ${sortStrings}`
);
sortStrings.sort(); // Lexicographical sort
console.log(
  `sort()
  After (strings): ${sortStrings}
  `
);
// Output: ['apple', 'banana', 'cherry']

// -- reverse() - Reverses the order of elements in place

let reverseArr = [1, 2, 3, 4];
console.log(
  `reverse()
  Before: ${reverseArr}`
);
reverseArr.reverse();
console.log(
  `reverse()
  After: ${reverseArr}
  `
);
// Output: [4, 3, 2, 1]

// -- fill() - Fills array elements with a static value

let fillArr = [1, 2, 3, 4, 5];
console.log(
  `fill()
  Before: ${fillArr}`
);
// 0s from index 1 up to (but not including) index 4
fillArr.fill(0, 1, 4);
console.log(
  `fill():
  After: ${fillArr}
  `
);
// Output: 1,0,0,0,5

// -- copyWithin() - Copies part of an array to another
//  location in the same array
let copyWithinArr = [1, 2, 3, 4, 5];
console.log(
  `copyWithin():
  Before: ${copyWithinArr}`
);
// Copy from index 3 (value 4) to index 0
copyWithinArr.copyWithin(0, 3);
console.log(
  `copyWithin():
  After (target 0, start 3): ${copyWithinArr}
  `
);
// Output: [4, 5, 3, 4, 5]
