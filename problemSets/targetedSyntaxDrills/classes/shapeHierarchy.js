/*
  Challenge: JavaScript Advanced Classes - Shape Hierarchy with Polymorphism

  Your task is to define a hierarchy of classes:
  - `Shape` (base class)
  - `TwoDShape` (intermediate class, extends `Shape`)
  - `Circle` (derived class, extends `TwoDShape`)
  - `Rectangle` (derived class, extends `TwoDShape`)

  This challenge focuses on:
  -   Deep understanding of `extends` keyword for multi-level inheritance.
  -   Precise use of `super()` in constructors across the hierarchy.
  -   Method overriding and calling `super.methodName()` effectively.
  -   Implementing "abstract" methods (methods that must be overridden by concrete subclasses).
  -   Defining and using a `static` method as a factory.
  -   Polymorphism in action (calling the same method on different objects, getting different behavior).
*/

// --- 1. Base Class: Shape ---
// Represents a generic geometric shape.
class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  // This method should be overridden by concrete subclasses.
  // A generic Shape doesn't have a calculable area.
  getArea() {
    throw new Error(
      "Method 'getArea()' must be implemented by a concrete subclass."
    );
  }

  // This method should be overridden by concrete subclasses.
  // A generic Shape doesn't have a calculable perimeter.
  getPerimeter() {
    throw new Error(
      "Method 'getPerimeter()' must be implemented by a concrete subclass."
    );
  }

  // Provides a generic description of the shape.
  describe() {
    return `This is a ${this.color} shape.`;
  }

  // Static factory method to create random concrete shapes.
  // It should randomly return an instance of Circle or Rectangle.
  static createRandomShape() {
    const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
    const borderColors = ["Black", "White", "Gray", "Brown"];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomBorderColor =
      borderColors[Math.floor(Math.random() * borderColors.length)];

    const shapeType = Math.random() < 0.5 ? "circle" : "rectangle";

    if (shapeType === "circle") {
      const randomRadius = Math.floor(Math.random() * 10) + 1; // Radius between 1 and 10
      return new Circle(randomColor, randomBorderColor, randomRadius);
    } else {
      const randomWidth = Math.floor(Math.random() * 15) + 5; // Width between 5 and 19
      const randomHeight = Math.floor(Math.random() * 15) + 5; // Height between 5 and 19
      return new Rectangle(
        randomColor,
        randomBorderColor,
        randomWidth,
        randomHeight
      );
    }
  }
}

// --- 2. Intermediate Class: TwoDShape ---
// Represents a 2D shape with a border. Extends Shape.
// - Constructor: Accepts color, borderColor.
// - Properties: `borderColor`.
// - Methods:
//   - `getBorderColor()`: Returns the border color.
//   - `describe()`: Overrides parent's `describe()` to include border color.
//   - `getArea()`: Still throws an error (not concrete enough to calculate area).
//   - `getPerimeter()`: Still throws an error (not concrete enough to calculate perimeter).

// --- 3. Derived Class: Circle ---
// Represents a circle. Extends TwoDShape.
// - Constructor: Accepts color, borderColor, radius.
// - Properties: `radius`.
// - Methods:
//   - `getArea()`: Calculates and returns the area (π * radius^2).
//   - `getPerimeter()`: Calculates and returns the circumference (2 * π * radius).
//   - `describe()`: Overrides parent's `describe()` to include radius and specify it's a circle.

// --- 4. Derived Class: Rectangle ---
// Represents a rectangle. Extends TwoDShape.
// - Constructor: Accepts color, borderColor, width, height.
// - Properties: `width`, `height`.
// - Methods:
//   - `getArea()`: Calculates and returns the area (width * height).
//   - `getPerimeter()`: Calculates and returns the perimeter (2 * (width + height)).
//   - `describe()`: Overrides parent's `describe()` to include dimensions and specify it's a rectangle.

// --- Test Cases (Do not modify below this line) ---
console.log("--- Testing Shape Hierarchy ---");

// Test Base Shape (should throw errors for area/perimeter)
console.log("\n--- Testing Base Shape ---");
const genericShape = new Shape("transparent");
console.log(genericShape.describe());
try {
  genericShape.getArea();
} catch (e) {
  console.error("Expected Error for genericShape.getArea():", e.message);
}
try {
  genericShape.getPerimeter();
} catch (e) {
  console.error("Expected Error for genericShape.getPerimeter():", e.message);
}

// Test TwoDShape (should throw errors for area/perimeter)
console.log("\n--- Testing TwoDShape ---");
const twoDShape = new TwoDShape("yellow", "blue");
console.log(twoDShape.describe());
console.log("Border Color:", twoDShape.getBorderColor());
try {
  twoDShape.getArea();
} catch (e) {
  console.error("Expected Error for twoDShape.getArea():", e.message);
}
try {
  twoDShape.getPerimeter();
} catch (e) {
  console.error("Expected Error for twoDShape.getPerimeter():", e.message);
}

// Test Circle
console.log("\n--- Testing Circle ---");
const myCircle = new Circle("red", "black", 5);
console.log(myCircle.describe());
console.log("Circle Area:", myCircle.getArea().toFixed(2));
console.log("Circle Perimeter:", myCircle.getPerimeter().toFixed(2));
console.log("Circle Color:", myCircle.getColor());
console.log("Circle Border Color:", myCircle.getBorderColor());

// Test Rectangle
console.log("\n--- Testing Rectangle ---");
const myRectangle = new Rectangle("blue", "white", 10, 4);
console.log(myRectangle.describe());
console.log("Rectangle Area:", myRectangle.getArea());
console.log("Rectangle Perimeter:", myRectangle.getPerimeter());
console.log("Rectangle Color:", myRectangle.getColor());
console.log("Rectangle Border Color:", myRectangle.getBorderColor());

console.log("\n--- Testing Static Factory Method and Polymorphism ---");
const shapes = [];
for (let i = 0; i < 5; i++) {
  shapes.push(Shape.createRandomShape());
}

shapes.forEach((shape, index) => {
  console.log(`\nShape ${index + 1}:`);
  console.log(shape.describe());
  try {
    console.log(`Area: ${shape.getArea().toFixed(2)}`);
  } catch (e) {
    console.log(`Area: (N/A - ${e.message})`);
  }
  try {
    console.log(`Perimeter: ${shape.getPerimeter().toFixed(2)}`);
  } catch (e) {
    console.log(`Perimeter: (N/A - ${e.message})`);
  }
});
