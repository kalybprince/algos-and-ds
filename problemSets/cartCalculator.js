/*
  Challenge: E-commerce Cart Calculator with Discounts and Shipping

  Your task is to write a JavaScript function called 'calculateCartTotal'
  that takes two arguments:
  1. 'cartItems': An array of objects. Each object represents an item in the cart
     and has the following properties:
     - 'name': A string (e.g., "Laptop", "Mouse").
     - 'price': A number representing the price per unit (e.g., 1200.00, 25.50).
     - 'quantity': A number representing the quantity of this item (e.g., 1, 2).
  2. 'discountPercentage': A number representing a percentage discount to apply
     to the subtotal (e.g., 0.10 for 10%). If 0 or not provided, no discount.

  You need to perform the following steps:

  1.  Initialize `subtotal` to 0.
  2.  Initialize `discountAmount` to 0.
  3.  Initialize `shippingCost` to 0.
  4.  Initialize `totalAmount` to 0.

  5.  **Calculate Subtotal**:
      * Use a `for` loop to iterate through each `item` in the `cartItems` array.
      * For each item, calculate its individual cost (`item.price * item.quantity`).
      * Add this individual cost to the `subtotal`.

  6.  **Apply Discount**:
      * If `discountPercentage` is greater than 0, calculate `discountAmount`
          as `subtotal * discountPercentage`.
      * Otherwise, `discountAmount` remains 0.

  7.  **Calculate Shipping Cost**:
      * Use an `if/else` statement:
          * If `subtotal` is greater than or equal to 100, `shippingCost` is 0 (free shipping).
          * Otherwise, `shippingCost` is 5.00.

  8.  **Calculate Total Amount**:
      * `totalAmount` = `subtotal` - `discountAmount` + `shippingCost`.

  9.  Finally, return an object containing the following properties:
      * `subtotal`: The calculated subtotal before discount.
      * `discountApplied`: The calculated discount amount.
      * `shipping`: The calculated shipping cost.
      * `finalTotal`: The final total amount after discount and shipping.

  This challenge focuses on:
  - `for` loops for iteration over objects in an array
  - Arithmetic operations for calculations
  - `if/else` statements for conditional logic
  - Object creation and return
*/

function calculateCartTotal(cartItems, discountPercentage = 0) {
  // Default discount to 0
  let subtotal = 0;
  let discountAmount = 0;
  let shippingCost = 0;
  let totalAmount = 0;

  // Your code goes here to calculate subtotal, discount, shipping, and total.

  for (let eachItem of cartItems) {
    subtotal += eachItem.price * eachItem.quantity;
  }

  if (discountPercentage > 0) {
    discountAmount += subtotal * discountPercentage;
  }

  if (subtotal >= 100) {
    shippingCost = 0;
  } else {
    shippingCost = 5;
  }

  totalAmount = subtotal - discountAmount + shippingCost;

  return {
    subtotal: subtotal,
    discountApplied: discountAmount,
    shipping: shippingCost,
    finalTotal: totalAmount,
  };
}

// --- Test Cases (Do not modify below this line) ---

// Test Case 1: Basic cart, no discount, paid shipping
const cart1 = [
  { name: "Book", price: 15.0, quantity: 2 },
  { name: "Pen Set", price: 8.5, quantity: 1 },
];
console.log("Test Case 1:", calculateCartTotal(cart1));
// Expected: { subtotal: 38.5, discountApplied: 0, shipping: 5, finalTotal: 43.5 }
// (15*2 + 8.5*1 = 30 + 8.5 = 38.5)

// Test Case 2: Cart with discount, free shipping
const cart2 = [
  { name: "Laptop", price: 1200.0, quantity: 1 },
  { name: "Webcam", price: 50.0, quantity: 1 },
];
console.log("Test Case 2:", calculateCartTotal(cart2, 0.1)); // 10% discount
// Expected: { subtotal: 1250, discountApplied: 125, shipping: 0, finalTotal: 1125 }
// (1200+50 = 1250; 1250 * 0.10 = 125; 1250 - 125 + 0 = 1125)

// Test Case 3: Empty cart
const cart3 = [];
console.log("Test Case 3:", calculateCartTotal(cart3, 0.05));
// Expected: { subtotal: 0, discountApplied: 0, shipping: 5, finalTotal: 5 }

// Test Case 4: Cart just under free shipping threshold, no discount
const cart4 = [{ name: "Headphones", price: 95.0, quantity: 1 }];
console.log("Test Case 4:", calculateCartTotal(cart4));
// Expected: { subtotal: 95, discountApplied: 0, shipping: 5, finalTotal: 100 }

// Test Case 5: Cart exactly at free shipping threshold, with discount
const cart5 = [{ name: "Keyboard", price: 50.0, quantity: 2 }];
console.log("Test Case 5:", calculateCartTotal(cart5, 0.05)); // 5% discount
// Expected: { subtotal: 100, discountApplied: 5, shipping: 0, finalTotal: 95 }
// (50*2 = 100; 100 * 0.05 = 5; 100 - 5 + 0 = 95)
