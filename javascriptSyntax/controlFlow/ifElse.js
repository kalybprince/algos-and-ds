/* if...else if...else statement:
Executes a block of code if a specified condition is true. else if allows for multiple conditions, and else provides a fallback if none of the preceding if or else if conditions are met.*/

let temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature > 20) {
  console.log("It's warm and pleasant.");
} else {
  console.log("It's a bit chilly.");
}

// my example

let time = 20; // metric time (ie. 10:30am)

if (time >= 7.0 && time < 12.0) {
  console.log("Working");
} else if (time >= 12.0 && time < 12.5) {
  console.log("At lunch");
} else if (time > 12.5 && time < 17.0) {
  console.log("Working");
} else {
  console.log("At home");
}

// refactorization

let newTime = 20;

if ((time >= 7.0 && time < 12.0) || (time > 12.5 && time < 17.0)) {
  console.log("Working");
} else if (time >= 12.0 && time <= 12.5) {
  console.log("At lunch");
} else {
  console.log("At home.");
}
