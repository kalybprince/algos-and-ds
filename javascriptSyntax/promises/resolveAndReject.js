/* `Promise.resolve()` and `Promise.reject()`

Convenience methods to immediately create Promises that are
already resolved or rejected.
*/

// Immediately resolve Promise
Promise.resolve("Hell instantly!").then((message) =>
  console.log("Resolved:", message)
);

// Immediately rejected Promise
Promise.reject(new Error("Something went wrong instantly!")).catch((error) =>
  console.error("Rejected:", error.message)
);

// Using Promise.resolve() to wrap a non-Promise value
function getData() {
  const data = "Some immediate data";
  return Promise.resolve(data); // Returns a Promise that resolves with `data`
}

getData().then((data) => console.log("Got immediate data:", data));
