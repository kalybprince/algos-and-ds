/* Immediately Invoked Function Expressions (IIFEs)

An IIFE is a function that runs as soon as it is defined.
They are often used to create a private scope for 
variables. */

(function() {
  const secretMessage = "This is private!";
  console.log(secretMessage);
})();

// console.log(secretMessage);
// Output:
// Error: secretMessage is not defined

