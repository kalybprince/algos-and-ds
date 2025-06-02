/*
  Challenge: Basic Syntax Drill - BMI Calculator and Categorizer

  Your task is to write a JavaScript function called 'calculateBMICategory'
  that takes two arguments:
  1. 'weightKg': A number representing a person's weight in kilograms.
  2. 'heightMeters': A number representing a person's height in meters.

  You need to perform the following steps:
  1. Calculate the Body Mass Index (BMI) using the formula:
     BMI = weight (kg) / (height (m) * height (m))
  2. Based on the calculated BMI, return a string categorizing the BMI:
     - If BMI is less than 18.5, return "Underweight"
     - If BMI is between 18.5 and 24.9 (inclusive), return "Normal weight"
     - If BMI is between 25.0 and 29.9 (inclusive), return "Overweight"
     - If BMI is 30.0 or greater, return "Obesity"

  This challenge focuses on:
  - Variable declaration (let/const)
  - Arithmetic operators
  - Comparison operators
  - Conditional statements (if/else if/else)
  - Returning string values
*/

function calculateBMICategory(weightKg, heightMeters) {
  // Declare variables here for BMI calculation and categorization.
  let yourWeight = "";

  // 1. Calculate BMI here.
  let BMI = weightKg / (heightMeters * heightMeters);

  // 2. Implement the conditional logic to categorize BMI here.
  if (BMI < 18.5) {
    yourWeight = "Underweight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    yourWeight = "Normal weight";
  } else if (BMI >= 25 && BMI <= 29.9) {
    yourWeight = "Overweight";
  } else {
    yourWeight = "Obesity";
  }

  // Return the appropriate category string.
  return yourWeight; // Placeholder, replace with your logic
}

// --- Test Cases (Do not modify below this line) ---
console.log("Test Case 1 (Underweight):", calculateBMICategory(50, 1.75)); // Expected: "Underweight" (BMI ~16.33)
console.log("Test Case 2 (Normal weight):", calculateBMICategory(70, 1.75)); // Expected: "Normal weight" (BMI ~22.86)
console.log("Test Case 3 (Overweight):", calculateBMICategory(85, 1.75)); // Expected: "Overweight" (BMI ~27.76)
console.log("Test Case 4 (Obesity):", calculateBMICategory(100, 1.75)); // Expected: "Obesity" (BMI ~32.65)
console.log("Test Case 5 (Edge case - Normal):", calculateBMICategory(60, 1.8)); // Expected: "Normal weight" (BMI ~18.52)
console.log(
  "Test Case 6 (Edge case - Overweight):",
  calculateBMICategory(81, 1.8)
); // Expected: "Overweight" (BMI ~25.0)
console.log(
  "Test Case 7 (Edge case - Obesity):",
  calculateBMICategory(97.2, 1.8)
); // Expected: "Obesity" (BMI ~30.0)
