/* Static Methods and Properties (ES2015 for methods,
ES2022 for properties) 

  - Static Methods: 
  Methods defined with the `static` keyword
  belong to the class itself, not to instances of the
  class. You call them directly on the class name. They
  are often used for utility functions that don't rely on
  instance-specific data. */

class Calculator {
  // Static method (ES2015)
  static add(a, b) {
    return a + b;
  }
  // Static property (ES2022)
  static PI = 3.14159;
}

console.log(Calculator.add(5, 3)); // 8
console.log(Calculator.PI); // 3.14159

// const calc = new Calculator();
// calc.add(1, 2); // Error: calc.add is not a function
