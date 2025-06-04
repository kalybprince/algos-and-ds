/*
  Challenge: JavaScript Advanced Classes - Vehicle Hierarchy (Inheritance)

  Your task is to define a base class 'Vehicle' and then extend it
  to create two specialized classes: 'Car' and 'Motorcycle'.

  This challenge focuses on:
  -   Class inheritance (`extends` keyword).
  -   Calling parent constructor (`super()`).
  -   Method overriding (redefining a method in a subclass).
  -   Calling parent methods from subclasses (`super.methodName()`).
  -   Adding unique properties and behaviors to subclasses.
*/

// 1. Define the Base Class: Vehicle
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false; // Default state
  }

  // Starts the vehicle
  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      console.log(`${this.make} ${this.model} (${this.year}) started.`);
      return true;
    } else {
      console.log(`${this.make} ${this.model} is already running.`);
      return false;
    }
  }

  // Stops the vehicle
  stop() {
    if (this.isRunning) {
      this.isRunning = false;
      console.log(`${this.make} ${this.model} (${this.year}) stopped.`);
      return true;
    } else {
      console.log(`${this.make} ${this.model} is already stopped.`);
      return false;
    }
  }

  // Returns basic vehicle information
  getInfo() {
    return `Vehicle: ${this.make} ${this.model} (${this.year}), Running: ${
      this.isRunning ? "Yes" : "No"
    }`;
  }
}

// 2. Define the Derived Class: Car
//    Cars have an additional property: `numDoors`.
//    - Constructor should accept make, model, year, and numDoors.
//    - Override `getInfo()`: Call `super.getInfo()` and append `numDoors`.
//    - Override `start()`: Call `super.start()` and add a car-specific console log
//      (e.g., "Engine purrs smoothly."). This log should only appear if the car successfully starts.
// 2. Define the Derived Class: Car
//    Cars have an additional property: `numDoors`.
//    - Constructor should accept make, model, year, and numDoors.
//    - Override `getInfo()`: Call `super.getInfo()` and append `numDoors`.
//    - Override `start()`: Call `super.start()` and add a car-specific console log
//      (e.g., "Engine purrs smoothly."). This log should only appear if the car successfully starts.
class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year); // Call the parent Vehicle constructor
    this.numDoors = numDoors; // Add Car-specific property
  }

  // Override getInfo to include number of doors
  getInfo() {
    const vehicleInfo = super.getInfo(); // Get base info from parent
    return `${vehicleInfo}, Doors: ${this.numDoors}`; // Return the combined string
  }

  // Override start to add car-specific message
  start() {
    const successfulStart = super.start(); // Call parent's start method
    if (successfulStart) {
      // If the parent method returned true (meaning it started)
      console.log("Engine purrs smoothly."); // Add car-specific log
    }
    return successfulStart; // Return the result from the parent's method
  }
}

// 3. Define the Derived Class: Motorcycle
//    Motorcycles have an additional property: `hasSidecar` (boolean).
//    - Constructor should accept make, model, year, and hasSidecar.
//    - Override `getInfo()`: Call `super.getInfo()` and append `hasSidecar` status.
//    - Override `start()`: Call `super.start()` and add a motorcycle-specific console log
//      (e.g., "Vroom vroom!"). This log should only appear if the motorcycle successfully starts.
class Motorcycle extends Vehicle {
  constructor(make, model, year, hasSidecar) {
    super(make, model, year); // Call the parent Vehicle constructor
    this.hasSidecar = hasSidecar; // Add Motorcycle-specific property
  }

  // Override getInfo to include sidecar status
  getInfo() {
    const vehicleInfo = super.getInfo(); // Get base info from parent
    return `${vehicleInfo}, Has Sidecar: ${this.hasSidecar ? "Yes" : "No"}`; // Return the combined string
  }

  // Override start to add motorcycle-specific message
  start() {
    const successfulStart = super.start(); // Call parent's start method
    if (successfulStart) {
      // If the parent method returned true (meaning it started)
      console.log("Vroom vroom!"); // Add motorcycle-specific log
    }
    return successfulStart; // Return the result from the parent's method
  }
}
// --- Test Cases (Do not modify below this line) ---
console.log("--- Testing Vehicle Hierarchy Classes ---");

// Create instances of each class
const myCar = new Car("Honda", "Civic", 2020, 4);
const myMotorcycle = new Motorcycle("Harley-Davidson", "Iron 883", 2022, false);
const myTruck = new Vehicle("Ford", "F-150", 2018); // Base vehicle for comparison

console.log("\n--- Initial Info ---");
console.log("My Car:", myCar.getInfo());
console.log("My Motorcycle:", myMotorcycle.getInfo());
console.log("My Truck:", myTruck.getInfo());

console.log("\n--- Starting Vehicles ---");

console.log("\nAttempting to start My Car:");
myCar.start();
console.log("My Car:", myCar.getInfo());
console.log("Attempting to start My Car again:");
myCar.start(); // Should show already running message

console.log("\nAttempting to start My Motorcycle:");
myMotorcycle.start();
console.log("My Motorcycle:", myMotorcycle.getInfo());
console.log("Attempting to start My Motorcycle again:");
myMotorcycle.start(); // Should show already running message

console.log("\nAttempting to start My Truck:");
myTruck.start();
console.log("My Truck:", myTruck.getInfo());

console.log("\n--- Stopping Vehicles ---");

console.log("\nAttempting to stop My Car:");
myCar.stop();
console.log("My Car:", myCar.getInfo());
console.log("Attempting to stop My Car again:");
myCar.stop(); // Should show already stopped message

console.log("\nAttempting to stop My Motorcycle:");
myMotorcycle.stop();
console.log("My Motorcycle:", myMotorcycle.getInfo());

console.log("\n--- Final Info ---");
console.log("My Car:", myCar.getInfo());
console.log("My Motorcycle:", myMotorcycle.getInfo());
console.log("My Truck:", myTruck.getInfo());
