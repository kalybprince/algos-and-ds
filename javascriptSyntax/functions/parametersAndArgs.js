/* Parameters and Arguments

Parameters: 
  The named variables listed in the function definition. They are placeholders for the values the function expects.

Arguments: 
  The actual values passed to the function when it is called.

---

Default Parameters (ES6+): 

You can assign default values
to parameters, which will be used if no argument is 
provided for that parameter or if undefined is passed. */

function greetUser(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greetUser("World"); // Output: Hello, World!
greetUser(); // Output: Hello, Guest!
greetUser(undefined); // Output: Hello, Guest!
greetUser(null); // Output: Hello, null!

// My example

const coolestPerson = (name = "me") => {
  console.log(`The coolest person is ${name}`);
};
coolestPerson("you");
coolestPerson();

//
//
/* Rest Parameters (ES6+):

Allows a function to accept an indefinite number of arguments as an array. */
//
//

function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3)); // Output: 6
console.log(sumAll(10, 20, 30, 40)); // Output: 100

// My example

function concatArray(...elements) {
  return elements.reduce((acc, words) => acc + words, "");
}

console.log(concatArray(["Hello", " world!"]));
// Output:
// Hello, world!
