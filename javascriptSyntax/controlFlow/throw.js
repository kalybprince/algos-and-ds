// throw statement: Allows you to create custom errors.

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(`Error: ${error.message}`);
}

// Output:
// Error: Cannot divide by zero!

// My example

function addNaturalNumbers(a, b) {
  if (a <= 0) {
    throw new Error("Can only add natural numbers!");
  }
  return a + b;
}

try {
  console.log(addNaturalNumbers(-5, 1));
} catch (error) {
  console.log(`Error: ${error.message}`);
} finally {
  console.log("Sum complete.");
}

// Output:
// Error: Can only add natural numbers!
// Sum complete.
