/* for...in loop:
Iterates over the enumerable property names (keys) of 
an object. It's generally not recommended for iterating 
over arrays due to potential issues with order and 
inherited properties. */

const person = { name: "Alive", age: 30 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 30

// my example

const person2 = {
  name: "John",
  age: 35,
  professions: ["Programmer", "Axe-thrower"],
  pets: { dog1: "Andy", dog2: "Pip" },
};

for (let key in person2) {
  console.log(`${key}: ${person2[key]}`);
}

console.log(`${person2.name} the ${person2.professions[0]} and ${person2.professions[1]} has a dog named ${person2.pets.dog1}`);