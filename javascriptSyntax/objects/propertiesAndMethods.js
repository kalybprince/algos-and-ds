/* Collection of Key-Value Pairs (Properties and Methods):

An object stores data as properties, which are essentially
named slots that hold values. Each property has a key (a
string or Symbol, essentially its name) and a value (which
can be any JavaScript data type, including other objects,
arrays, or functions).

When a property's value is a function, that property is
called a method. Methods define the behavior or actions
an object can perform. */

const car = {
  // Properties (data)
  make: "Toyota",
  model: "Camry",
  year: 2023,
  color: "Blue",
  isElectric: false,
  carIsRunning: false,
  carIsDriving: false,

  // Methods (functionality)
  startEngine: function () {
    this.carIsRunning = true;
    console.log("Starting engine! \n");
  },

  driveCar: function () {
    if (this.carIsRunning === true) {
      this.carIsDriving = true;
      console.log("Driving car! \n");
    } else if (this.carIsRunning === false) {
      console.log("Drive attempted: The car isn't on! \n");
    } else {
      console.log("Schrodinger's car!");
    }
  },

  // Get car status
  vehicleInfo() {
    console.log(
      `Vehicle Info:
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}
      Color: ${this.color}
      `
    );
  },

  // Get engine status
  engineStatus() {
    console.log(
      `Vehicle Status:
      Running: ${this.carIsRunning}
      Driving: ${this.carIsDriving}
      `
    );
  },

  // Method shorthand (ES6+)
  honkHorn() {
    console.log("Honking horn: Honk! Honk!");
  },
};

car.vehicleInfo(); // Display info about the vehicle
car.engineStatus(); // Display engine status
car.driveCar(); // Can't drive without the engine on!
car.startEngine();
car.engineStatus();
car.driveCar();
car.engineStatus();
car.honkHorn();
