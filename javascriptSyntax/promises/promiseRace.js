/* `Promise.race()` (First to Settle)

`Promise.race()` also takes an array of Promises and returns a
single Promise.  This new Promise:

  - Resolves or rejects as soon as *any* of the Promises in the
  input array resolves or rejects.

The value or error of the first settled Promise is the value or error of the `Promise.race()` result.
*/

function networkCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from network!");
    }, 1500);
  });
}

function cacheCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from cache (faster)!");
    }, 500);
  });
}

function databaseCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Database error!"); // This one rejects, but might not win the race
    }, 2000);
  });
}

console.log("Racing network, cache, and database calls...");

Promise.race([networkCall(), cacheCall(), databaseCall()])
  .then((result) => {
    console.log("The first one to finish is:", result);
  })
  .catch((error) => {
    console.error("The first one to fail is:", error);
  });

/* Output:
Racing network, cache, and database calls...
The first one to finish is: Data from cache (faster)!
(The network call and database call might complete later in the background but won't 
affect the Promise.race outcome)
*/
