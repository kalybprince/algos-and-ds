/* for...of loop (ES6+):
Iterates over the values of iterable objects (like Array, String, Map, Set, NodeList, etc.). This is the preferred way to iterate over array elements. */

const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// my example

const people = [
  { name: "john", age: 39 },
  { name: "jack", age: 25 },
  { name: "jill", age: 48 },
];

for (const person of people) {
  console.log(`${person.name} is ${person.age}`);
}
