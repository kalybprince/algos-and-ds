/* constructor() Method

Purpose: 
This is a special method within a class that is
automatically executed when a new object (instance) of
the class is created using the new keyword.

Initialization: 
Its primary role is to initialize the
object's properties.

`this` Keyword: 
Inside the constructor, this refers to the
newly created instance of the class. You use this.
propertyName = value to assign values to the instance's
properties.

Optional: 
If you don't define a constructor, a default
empty constructor is automatically provided.
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const alice = new Person("Alice", 30);
alice.introduce();
