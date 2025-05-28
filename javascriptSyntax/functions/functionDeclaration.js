/* Basic Function Syntax (Function Declaration)

This is the traditional and most common way to 
define a function.

NOTE:  Standard function declarations ARE HOISTED */

function functionName(parameter1, parameter2) {
  // Code to the executed

  return [parameter1, parameter2]; // Return value optional
}

for (let eachWord of functionName("hello", "world")) {
  console.log(`A word: ${eachWord}`);
}

// Output:
// A word: hello
// A word: world
