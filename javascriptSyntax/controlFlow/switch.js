/* switch statement:
Evaluates an expression and executes code associated 
with a matching case value. It's often a more readable
alternative to a long if-else if chain when checking a
single variable against multiple discrete values. */

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break; // Important: Exits the switch block
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Just a regular day.");
}

// my example

let animal = "zebra"; // degrees in Fahrenheit

switch (animal) {
  case "dog":
    console.log("Woof!");
    break;
  case "cat":
    console.log("Meow!");
    break;
  case "zebra":
    console.log("Look man -- I already told you... I'm an elephant.");
    break;
  default:
    console.log("What kind of animal is that!?");
}
