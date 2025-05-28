/* `instanceof` Operator 

Checks if an object is an instance of a particular class
(or a class derived from it). */

class Parent {}
class Child extends Parent {}

const obj1 = new Parent();
const obj2 = new Child();

console.log(obj1 instanceof Parent); // true
console.log(obj2 instanceof Parent); // true
console.log(obj2 instanceof Child); // true
console.log(obj1 instanceof Child); // false