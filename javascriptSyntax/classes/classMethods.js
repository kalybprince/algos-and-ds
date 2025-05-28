/* Class Methods

- Definition: 
Functions defined directly within the class body (outside
the constructor).

- Prototype Methods: 
These methods are actually added to the class's prototype
object, meaning they are shared by all instances of the
class. This saves memory as the method itself isn't
duplicated for each instance.

- `this` Context: 
Inside a class method, this typically refers to the
instance on which the method was called. */

class Dog {
  constructor(name) {
    this.name = name;
  }

  // This is a class method
  bark() {
    console.log(`${this.name} barks!`);
  }
}

const rex = new Dog("Rex");
rex.bark();
