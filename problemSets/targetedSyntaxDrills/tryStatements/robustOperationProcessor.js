/*
  Challenge: Robust Operation Processor

  Your task is to write a JavaScript function called 'processOperations'
  that takes an array of operation objects as input.

  Each operation object will have a `type` property and other properties
  depending on the operation type. Your function must attempt to perform
  each operation and robustly handle any errors that occur using `try...catch`.

  Input:
  - `operations`: An array of operation objects. Each object has:
    - `type`: string (e.g., "parseJson", "divide", "accessProperty", "customError")
    - Other properties specific to the `type` (e.g., `data`, `numerator`, `denominator`, `obj`, `propName`, `message`)

  You need to perform the following steps:

  1.  Initialize an empty array called `results`. This array will store an object
      for each operation, indicating whether it succeeded or failed, and relevant details.

  2.  **Iterate** through each `operation` in the `operations` array.
      Inside the loop, for each `operation`:

      a.  **Use a `try...catch...finally` block.**

      b.  **Inside the `try` block**:
          * Use an `if/else if/else` (or `switch`) statement to determine the operation `type`.
          * **"parseJson"**:
              * Attempt `JSON.parse(operation.data)`.
              * Log `console.log("Parsed JSON successfully:", parsedData);`
              * Push a success object to `results`: `{ success: true, operationType: 'parseJson', parsedData }`.
          * **"divide"**:
              * Check if `operation.denominator` is `0`. If it is, `throw new Error("Division by zero is not allowed.");`
              * Calculate `result = operation.numerator / operation.denominator`.
              * Log `console.log("Division result:", result);`
              * Push a success object to `results`: `{ success: true, operationType: 'divide', result }`.
          * **"accessProperty"**:
              * Attempt to access `operation.obj[operation.propName]`.
              * Log `console.log("Accessed property value:", value);`
              * Push a success object to `results`: `{ success: true, operationType: 'accessProperty', value }`.
          * **"customError"**:
              * `throw new Error(operation.message || "A custom error occurred.");`
          * **Default (unknown type)**:
              * `throw new Error("Unknown operation type: " + operation.type);`

      c.  **Inside the `catch (error)` block**:
          * Log `console.error("Operation failed:", error.message);`
          * Push a failure object to `results`: `{ success: false, operationType: operation.type, errorMessage: error.message, errorName: error.name }`.

      d.  **Inside the `finally` block**:
          * Log `console.log("--- Operation attempt complete for type:", operation.type, "---");`
          * This block should always execute, regardless of success or failure.

  3.  Finally, return the `results` array.

  This challenge focuses on:
  -   Implementing `try...catch...finally` blocks.
  -   Handling different types of errors (built-in like `SyntaxError`, `TypeError`, and custom `Error` objects).
  -   Throwing custom errors (`throw new Error()`).
  -   Structured logging for success and failure.
  -   Aggregating results into an array.
*/

// Write your function here!
// Remember to define the function name and its parameter.
function processOperations(operations) {
  // The result of each operation
  let results = [];

  for (const eachOperation of operations) {
    try {
      if (eachOperation.type === "parseJson") {
        let parsedData = JSON.parse(eachOperation.data);
        console.log("Parsed JSON successfully:", parsedData);
        results.push({
          success: true,
          operationType: eachOperation.type,
          parsedData,
        });
      } else if (eachOperation.type === "divide") {
        if (eachOperation.denominator === 0) {
          throw new Error("Division by zero is not allowed.");
        }
        let result = eachOperation.numerator / eachOperation.denominator;
        console.log("Division result:", result);
        results.push({
          success: true,
          operationType: eachOperation.type,
          result,
        });
      } else if (eachOperation.type === "accessProperty") {
        let value = eachOperation.obj[eachOperation.propName];
        console.log("Accessed property value:", value);
        results.push({
          success: true,
          operationType: eachOperation.type,
          value,
        });
      } else if (eachOperation.type === "customError") {
        throw new Error(eachOperation.message || "A custom error occurred.");
      } else {
        throw new Error("Unknown error type: " + eachOperation.type);
      }
    } catch (error) {
      console.error("Operation failed:", error.message);
      results.push({
        success: false,
        operationType: eachOperation.type,
        errorMessage: error.message,
        errorName: error.name,
      });
    } finally {
      console.log(
        "--- Operation attempt complete for type:",
        eachOperation.type,
        "---"
      );
    }
  }
  return results;
}

// --- Test Cases (Do not modify below this line) ---
const operationsToProcess = [
  // Successful operations
  { type: "parseJson", data: '{"name": "Alice", "age": 30}' },
  { type: "divide", numerator: 10, denominator: 2 },
  { type: "accessProperty", obj: { id: 123, name: "Test" }, propName: "name" },
  { type: "divide", numerator: 7, denominator: 3 }, // Floating point result

  // Operations that will cause errors
  { type: "parseJson", data: '{"name": "Bob", "age":}' }, // Invalid JSON
  { type: "divide", numerator: 5, denominator: 0 }, // Division by zero
  { type: "accessProperty", obj: null, propName: "address" }, // Accessing property of null
  { type: "customError", message: "Something went wrong intentionally!" },
  { type: "accessProperty", obj: { data: "value" }, propName: "nonExistent" }, // Accessing non-existent property (will be undefined, not error)
  { type: "unknownOperation", value: "some data" }, // Unknown type
];

console.log("--- Starting Operation Processing ---");
const processingResults = processOperations(operationsToProcess);
console.log("\n--- Final Processing Summary ---");
console.log(processingResults);

/* Expected structure of results array:
[
  { success: true, operationType: 'parseJson', parsedData: { name: 'Alice', age: 30 } },
  { success: true, operationType: 'divide', result: 5 },
  { success: true, operationType: 'accessProperty', value: 'Test' },
  { success: true, operationType: 'divide', result: 2.333... },

  { success: false, operationType: 'parseJson', errorMessage: 'Unexpected token } in JSON at position ...', errorName: 'SyntaxError' },
  { success: false, operationType: 'divide', errorMessage: 'Division by zero is not allowed.', errorName: 'Error' },
  { success: false, operationType: 'accessProperty', errorMessage: "Cannot read properties of null (reading 'address')", errorName: 'TypeError' },
  { success: false, operationType: 'customError', errorMessage: 'Something went wrong intentionally!', errorName: 'Error' },
  { success: true, operationType: 'accessProperty', value: undefined }, // Accessing non-existent property returns undefined, not an error
  { success: false, operationType: 'unknownOperation', errorMessage: 'Unknown operation type: unknownOperation', errorName: 'Error' }
]
*/
