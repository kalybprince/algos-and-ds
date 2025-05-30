// Basic Promise Creation and States

/* 
Promises in JavaScript are fundamental for managing asynchronous
operations, providing a more structured and readable alternative
to traditional callbacks. They represent the eventual completion
(or failure) of an asynchronous operation and its resulting
value.

A Promise can be in one of three states:

  - Pending: Initial state, neither fulfilled nor rejected.
  - Fulfilled (Resolved): The operation completed successfully.
  - Rejected: The operation failed. */

// Creating a simple Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an async operation
  const success = true; // Change to false to see 'rejected' case

  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!"); // Promise fulfilled
    } else {
      reject("Failed to fetch data."); // Promise rejected
    }
  }, 2000); // Simulates a 2-second delay
});

console.log("Promise created & currently pending...");

// Consuming the Promise using .then() and .catch()
myPromise
  .then((message) => {
    // This runs if the Promise is fulfilled
    console.log("Success:", message);
  })
  .catch((error) => {
    // This runs if the Promise is rejected
    console.error("Error:", error);
  })
  .finally(() => {
    // This block always runs, regardless of success or failure
    console.log("Promise operation completed.");
  });

console.log("Further operations after initiating the Promise...");
