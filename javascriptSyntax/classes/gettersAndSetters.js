/* Getters and Setters

- Allow you to define object properties that function like
"computed properties" or "accessors." They provide a way
to execute code when a property is read (getter) or
written to (setter).*/

class Circle {
  constructor(radius) {
    // Convention to use '_' for private-like properties
    this._radius = radius;
  }

  // Getter
  get radius() {
    console.log("Getting radius...");
    return this._radius;
  }

  // Setter
  set radius(newRadius) {
    if (newRadius > 0) {
      console.log("Setting radius...");
      this._radius = newRadius;
    } else {
      console.log("Radius must be positive.");
    }
  }

  get diameter() {
    return this.radius * 2;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.radius);
myCircle.radius = 10;
console.log(myCircle.diameter);
myCircle.radius = -2;
