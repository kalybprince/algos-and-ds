/* Task: Write a JavaScript function called printRightTriangle
(height) that uses nested while loops to print a right-aligned
triangle pattern of asterisks. */

console.log("\nPrint a right triangle");

function printRightTriangle(height) {
  let row = 1;

  while (row < height) {
    let starsInRow = 1;
    let rowOutput = "";

    while (starsInRow <= row) {
      rowOutput += "*";
      starsInRow++;
    }
    console.log(rowOutput);
    row++;
  }
}

printRightTriangle(10);

/* Output:
Print a right triangle
*
**
***
****
*****
******
*******
********
*********
********** 
*/
