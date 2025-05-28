/* What is a Class? (Syntactic Sugar for Prototypes)

A class is a blueprint for creating objects (instances).
It encapsulates data (properties) and functions that 
operate on that data (methods). 


Core Idea: Instead of defining a constructor function and 
then separately adding methods to its prototype property,
classes bundle all this definition into a single, more
readable block using the class keyword. */

//
// Example (Pre-ES6 vs. ES6 Class):
//

// Pre-ES6: Constructor Function & Prototype
function OldCar(make, model) {
  this.make = make;
  this.model = model;
}
OldCar.prototype.drive = function () {
  console.log(`Driving the ${this.make} ${this.model}.`);
};
const oldHonda = new OldCar("Honda", "Civic");
oldHonda.drive();
// Output:
// Driving the Honda Civic.

// ES6+: Class Syntax

class NewCar {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log(`Driving the ${this.make} ${this.model}.`);
  }
}

const newHonda = new NewCar("Honda", "CR-V");
newHonda.drive();
// Output:
// Driving the Honda CR-V

/* In summary:
Both achieve the same result, but the class syntax is
clearer about the relationship between properties and
methods. */
