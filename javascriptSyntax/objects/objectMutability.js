/* Objects are mutable (Changeable):

Unlike primitive values (like strings, numbers, booleans) 
which are immutable, objects are mutable. This means you can
change their properties, add new ones, or delete existing 
ones after the object has been created. */

const myPet = { type: "Dog", name: "Buddy" };
console.log(myPet.name);

myPet.name = "Max"; // Change `name` property
myPet.age = 3; // Create new property
delete myPet.type; // Delete a property

console.log(myPet);
