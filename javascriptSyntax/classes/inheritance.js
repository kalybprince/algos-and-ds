/*  Inheritance (`extends` and `super`) 

Classes support single inheritance, meaning a class can
inherit properties and methods from one other class.

- `extends` keyword: 
Used to declare that a class inherits
from another class. 

- `super()` keyword:
  
  * In the constructor of a subclass, you must call 
  `super()` before using `this`. `super()` calls the constructor of the parent class, ensuring that the
  parent's properties are initialized on the instance.

  * In a method of a subclass, super can be used to call a method of the parent class. */

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// Cat inherits from Animal
class Cat extends Animal {
  constructor(name, breed) {
    // Call the parent (Animal) constructor with 'name'
    super(name);
    this.breed = breed;
  }
  // Override the parent's speak method
  speak() {
    console.log(`${this.name} meows.`);
  }
  purr() {
    console.log(`${this.name} purrs contentedly.`);
  }
}

const whiskers = new Cat("Whiskers", "Siamese");
whiskers.speak(); // Whiskers meows. (Overridden method)
whiskers.purr(); // Whiskers purrs contentedly.
