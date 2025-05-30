/* Chaining Promises (.then()) 

Promises allow for sequential execution of asynchronous operations
through chaining .then() calls. The result of one .then()
callback is passed as an argument to the next .then() callback.*/

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 complete.");
      resolve("Result from step 1");
    }, 1000);
  });
}

function step2(dataFromStep1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step 2 complete, received: ${dataFromStep1}`);
      resolve("Result from Step 2");
    }, 1500);
  });
}

function step3(dataFromStep2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step 3 complete, received: ${dataFromStep2}`);
      resolve("Result from Step 3");
    }, 500);
  });
}

console.log("Starting a chain of asynch operations...");

step1()
  .then((result1) => step2(result1)) // Pass result 1 to step2
  .then((result2) => step3(result2)) // Pass result2 to step3
  .then((finalResult) => {
    console.log("All steps complete. Final Result:", finalResult);
  })
  .catch((error) => {
    console.log("An error occured in the chain:", error);
  });

/* Output:
Starting a chain of asynch operations...
Step 1 complete.
Step 2 complete, received: Result from step 1
Step 3 complete, received: Result from Step 2
All steps complete. Final Result: Result from Step 3 */
