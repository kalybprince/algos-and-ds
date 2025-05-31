/* Handling Errors in Chains (`.catch()`)

`catch()` is used to handle error that occur anywhere in the
Promise chain.  When a Promise in the chain is rejected,
constrol immediately jumps to the nearest `catch` handler. */

function mightFailStep1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = true; // Set `false` for successful chain
      if (shouldFail) {
        reject("Error: Step 1 failed!");
      } else {
        console.log("MightFail Step 1 complete.");
        resolve("Success from Step 1");
      }
    }, 800);
  });
}

function alwaysSuccessfulStep2(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`alwaysSuccessful Step 2 complete, received: ${data}`);
      resolve("Successful from Step 2");
    }, 600);
  });
}

console.log("Starting a potentially failing chain...");

mightFailStep1()
  .then((result1) => alwaysSuccessfulStep2(result1))
  .then((result2) => {
    console.log("Chain completed sucessful with:", result2);
  })
  .catch((error) => {
    console.error("Caught an error in the chain", error);
  })
  .finally(() => {
    console.log("Chain process finished");
  });

/* Output:
(shouldFail = false;)

Starting a potentially failing chain...
Caught an error in the chain Error: Step 1 failed!
Chain process finished */

/* Output:
(shouldFail = true;)

Starting a potentially failing chain...
MightFail Step 1 complete.
alwaysSuccessful Step 2 complete, received: Success from Step 1
Chain completed sucessful with: Successful from Step 2
Chain process finished */
