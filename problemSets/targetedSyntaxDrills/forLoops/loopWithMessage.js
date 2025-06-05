/* 

Function: loopWithMessage(count, message)

    Description: Use a for loop to print a given message count 
    times.
    Example: loopWithMessage(3, "Hello!") should print: 
    // Hello!
    // Hello!
    // Hello!

*/

function loopWithMessage(count, message) {
  for (let i = 1; i < count + 1; i++) {
    console.log(message);
  }
}

loopWithMessage(5, "hello, world!");