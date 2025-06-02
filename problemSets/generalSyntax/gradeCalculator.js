/*
  Challenge: Basic Syntax Drill - Grade Calculator

  Your task is to write a JavaScript function called 'assignLetterGrade'
  that takes a single argument:
  1. 'score': A number representing a student's numerical score (0-100).

  You need to perform the following steps:
  1. Based on the input 'score', determine the corresponding letter grade.
  2. Return a descriptive string indicating the grade.

  Grading Scale:
  - 90-100: "Your grade is A."
  - 80-89:  "Your grade is B."
  - 70-79:  "Your grade is C."
  - 60-69:  "Your grade is D."
  - Below 60: "Your grade is F."

  This challenge focuses on:
  - Variable declaration (if you choose to use one for the grade)
  - Comparison operators
  - Conditional statements (if/else if/else)
  - Returning formatted string values (consider template literals for cleanliness)
*/

function assignLetterGrade(score) {
  let letterGrade = "";

  // Your conditional logic goes here to determine the grade
  // and assign the correct message to 'gradeMessage'.

  if (score >= 90) {
    letterGrade = "A";
  } else if (score >= 80 && score <= 89) {
    letterGrade = "B";
  } else if (score >= 70 && score <= 79) {
    letterGrade = "C";
  } else if (score >= 60 && score <= 69) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  // Return the appropriate grade message string.
  return `Your grade is ${letterGrade}.`; // Placeholder, replace with your logic
}

// --- Test Cases (Do not modify below this line) ---
console.log("Test Case 1 (A):", assignLetterGrade(95)); // Expected: "Your grade is A."
console.log("Test Case 2 (B):", assignLetterGrade(82)); // Expected: "Your grade is B."
console.log("Test Case 3 (C):", assignLetterGrade(70)); // Expected: "Your grade is C."
console.log("Test Case 4 (D):", assignLetterGrade(68)); // Expected: "Your grade is D."
console.log("Test Case 5 (F):", assignLetterGrade(55)); // Expected: "Your grade is F."
console.log("Test Case 6 (Edge A):", assignLetterGrade(100)); // Expected: "Your grade is A."
console.log("Test Case 7 (Edge B):", assignLetterGrade(89)); // Expected: "Your grade is B."
console.log("Test Case 8 (Edge C):", assignLetterGrade(79)); // Expected: "Your grade is C."
console.log("Test Case 9 (Edge D):", assignLetterGrade(60)); // Expected: "Your grade is D."
console.log("Test Case 10 (Edge F):", assignLetterGrade(0)); // Expected: "Your grade is F."
