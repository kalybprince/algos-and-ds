/* try...catch...finally statement:

try: Defines a block of code to be tested for errors while it is being executed.

catch: Defines a block of code to be executed if an error occurs in the try block.

finally: Defines a block of code that is executed regardless of whether an error occurred or not. */

try {
  let result = nonExistentVariable * 2;
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Execution finished (cleanup / final logging)")
}

// Output:
// An error occurred: nonExistentVariable is not defined
// Execution finished (cleanup / final logging)

// My example

try {
  let person = johnMcDougal;
  console.log(person);
} catch (error) {
  console.log(`Error message: ${error.message}`);
} finally {
  console.log("Test complete.")
}

// Output:
// Error message: johnMcDougal is not defined
// Test complete.