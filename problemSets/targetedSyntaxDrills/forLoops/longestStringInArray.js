/*
  Challenge: Find the Longest String in an Array

  Your task is to write a JavaScript function called 'findLongestString'
  that takes an array of strings as input.

  Using a 'for' loop, iterate through the input array.
  Your goal is to find and return the longest string in the array.
  If the array is empty, return an empty string ("").
  If there are multiple strings with the same maximum length,
  you can return the first one encountered.

  Example:
  findLongestString(["apple", "banana", "kiwi", "grapefruit"]); // Should return "grapefruit"
  findLongestString(["cat", "dog", "elephant", "fish"]); // Should return "elephant"
  findLongestString(["a", "bb", "ccc"]); // Should return "ccc"
  findLongestString([]); // Should return ""
  findLongestString(["hello"]); // Should return "hello"
*/

function findLongestString(strings) {
  // Handle the edge case of an empty array first
  if (strings.length === 0) {
    return "";
  }

  let longestString = ""; // Initialize with an empty string or the first element

  // Your 'for' loop and logic go here
  // Remember to iterate through the 'strings' array,
  // compare lengths, and update 'longestString' accordingly.

  for (let string of strings) {
    if (string.length > longestString.length) {
      longestString = string;
    }
  }

  return longestString;
}

// --- Test Cases (Do not modify below this line) ---
console.log(
  "Test Case 1:",
  findLongestString(["apple", "banana", "kiwi", "grapefruit"])
); // Expected: "grapefruit"
console.log(
  "Test Case 2:",
  findLongestString(["cat", "dog", "elephant", "fish"])
); // Expected: "elephant"
console.log("Test Case 3:", findLongestString(["a", "bb", "ccc"])); // Expected: "ccc"
console.log("Test Case 4:", findLongestString([])); // Expected: ""
console.log("Test Case 5:", findLongestString(["hello"])); // Expected: "hello"
console.log(
  "Test Case 6:",
  findLongestString(["short", "longer", "longest", "longer_again"])
); // Expected: "longest"
console.log("Test Case 7:", findLongestString(["one", "two", "three", "four"])); // Expected: "three" (or "four", depending on implementation, but "three" is fine if it's the first encountered)
