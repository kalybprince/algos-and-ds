// --- Iterator Methods (Return Iterator Objects)

// Primary array for demonstrations
let numbers = [10, 20, 30, 40, 50];
let fruits = ["apple", "banana", "cherry", "date", "banana"];
let mixed = [1, "two", true, null, undefined, { id: 1 }, [7, 8]];
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let sparseArray = [1, , , 4];

// -- values() - Returns a new Array Iterator object that contains the values for each index

let valuesIterator = fruits.values();
console.log("values(): First value:", valuesIterator.next().value); // Output: apple
console.log("values(): Second value:", valuesIterator.next().value); // Output: banana

// -- keys() - Returns a new Array Iterator object that contains the keys (indices)

let keysIterator = fruits.keys();
console.log("keys(): First key:", keysIterator.next().value); // Output: 0
console.log("keys(): Second key:", keysIterator.next().value); // Output: 1

// -- entries() - Returns a new Array Iterator object that contains the key/value pairs

let entriesIterator = fruits.entries();
console.log("entries(): First entry:", entriesIterator.next().value);  // Output: [0, 'apple']
console.log("entries(): Second entry:", entriesIterator.next().value); // Output: [1, 'banana']