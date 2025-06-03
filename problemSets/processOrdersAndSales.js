/*
  Challenge: Process Customer Orders and Summarize Sales

  Your task is to write a JavaScript function called 'processOrders'
  that takes an array of customer order objects as input.

  The function should analyze these orders based on their status and customer type,
  apply discounts where applicable, and then return a summary object.

  Input:
  - `orders`: An array of order objects. Each order object has:
    - `orderId`: string (e.g., "ORD001")
    - `items`: array of item objects. Each item object has:
        - `productId`: string (e.g., "P101")
        - `quantity`: number (e.g., 2)
        - `unitPrice`: number (e.g., 15.00)
    - `status`: string ("pending", "completed", "cancelled", or other)
    - `customerType`: string ("standard", "premium")

  You need to perform the following steps:

  1.  Initialize summary counters/arrays:
      * `totalRevenue`: Sum of `finalAmount` for "completed" orders (after discounts).
      * `pendingOrdersCount`: Number of "pending" orders.
      * `cancelledOrdersRevenueLoss`: Sum of `subtotal` for "cancelled" orders (before any discounts, as they were cancelled).
      * `processedOrdersDetails`: An array to store details of "completed" orders. Each entry should be an object: `{ orderId, finalAmount, discountApplied }`.

  2.  **Iterate** through each `order` in the `orders` array using a `for...of` loop.
      Inside the loop:
      a.  **Calculate Order Subtotal**:
          * For the current `order`, iterate through its `items` array (e.g., using another `for...of` loop).
          * Calculate `item.quantity * item.unitPrice` for each item and sum these to get the `orderSubtotal`.

      b.  **Conditional Processing based on `order.status`**:
          * Use an `if/else if/else` structure (or `switch`) to handle different statuses:

          * **If `order.status` is "completed"**:
              * Initialize `finalAmount` to `orderSubtotal`.
              * Initialize `discountApplied` to `false`.
              * **Apply Discount**: If `order.customerType` is "premium":
                  * Calculate `discountPercentage` as 0.10 (10%).
                  * `finalAmount = orderSubtotal - (orderSubtotal * discountPercentage)`.
                  * Set `discountApplied` to `true`.
              * Add `finalAmount` to `totalRevenue`.
              * Add an object `{ orderId: order.orderId, finalAmount, discountApplied }` to `processedOrdersDetails`.

          * **If `order.status` is "pending"**:
              * Increment `pendingOrdersCount`.
              * Do not contribute to `totalRevenue`.

          * **If `order.status` is "cancelled"**:
              * Add `orderSubtotal` (before any potential discount) to `cancelledOrdersRevenueLoss`.
              * Do not contribute to `totalRevenue`.

          * **Default (unknown status)**:
              * Log a warning to the console: `console.warn("Unknown order status encountered for orderId:", order.orderId, order.status);`

  3.  Finally, return an object containing all the summarized properties:
      * `totalRevenue`
      * `pendingOrdersCount`
      * `cancelledOrdersRevenueLoss`
      * `processedOrdersDetails`

  This challenge focuses on:
  - Nested `for...of` loops for iterating through arrays of objects.
  - Complex `if/else if/else` (or `switch`) for multi-level conditional logic.
  - Object property access and manipulation.
  - Aggregating data into summary variables and arrays.
  - Handling different data types (numbers, strings, booleans, arrays, objects).
*/

// Write your function here!
// Remember to define the function name and its parameter.
function processOrders(orders) {
  let totalRevenue = 0;
  let pendingOrdersCount = 0;
  let cancelledOrdersRevenueLoss = 0;
  let processedOrdersDetails = [];

  // Outer loop: Iterate through each order in the "orders" array
  for (const eachOrder of orders) {
    let orderSubtotal = 0;

    // Inner loop: Calculate the subtotal for the current order
    for (const eachItem of eachOrder.items) {
      orderSubtotal += eachItem.quantity * eachItem.unitPrice;
    }

    // Conditional processing based on order status
    if (eachOrder.status === "completed") {
      let finalAmount = orderSubtotal;
      let discountApplied = false;

      // Apply discount if customerType is "premium"
      if (eachOrder.customerType === "premium") {
        const discountPercentage = 0.1; // 10% discount
        finalAmount = orderSubtotal - orderSubtotal * discountPercentage;
        discountApplied = true;
      }

      totalRevenue += finalAmount; // Add final amount to total revenue

      processedOrdersDetails.push({
        orderId: eachOrder.orderId,
        finalAmount,
        discountApplied,
      });
    } else if (eachOrder.status === "pending") {
      pendingOrdersCount += 1; // Incremement pending orders count
    } else if (eachOrder.status === "cancelled") {
      cancelledOrdersRevenueLoss += orderSubtotal; // Add subtotal to revenue loss
    } else {
      // Log a warning for unknown statuses
      console.warn(
        "Unknown order status encountered for orderID:",
        eachOrder.orderId,
        eachOrder.status
      );
    }
  }

  // Return the final summary object
  return {
    totalRevenue,
    pendingOrdersCount,
    cancelledOrdersRevenueLoss,
    processedOrdersDetails,
  };
}

// --- Test Cases (Do not modify below this line) ---

const sampleOrders = [
  {
    orderId: "ORD001",
    items: [
      { productId: "P101", quantity: 2, unitPrice: 10.0 },
      { productId: "P102", quantity: 1, unitPrice: 25.0 },
    ],
    status: "completed",
    customerType: "standard",
  },
  {
    orderId: "ORD002",
    items: [{ productId: "P103", quantity: 1, unitPrice: 100.0 }],
    status: "completed",
    customerType: "premium", // Should get 10% discount
  },
  {
    orderId: "ORD003",
    items: [{ productId: "P104", quantity: 3, unitPrice: 5.0 }],
    status: "pending",
    customerType: "standard",
  },
  {
    orderId: "ORD004",
    items: [
      { productId: "P105", quantity: 1, unitPrice: 50.0 },
      { productId: "P106", quantity: 1, unitPrice: 20.0 },
    ],
    status: "cancelled",
    customerType: "premium",
  },
  {
    orderId: "ORD005",
    items: [{ productId: "P107", quantity: 2, unitPrice: 10.0 }],
    status: "completed",
    customerType: "premium", // Should get 10% discount
  },
  {
    orderId: "ORD006",
    items: [{ productId: "P108", quantity: 1, unitPrice: 5.0 }],
    status: "unknown", // Unknown status
    customerType: "standard",
  },
];

console.log("--- Analyzing Sample Orders ---");
const analysisResult = processOrders(sampleOrders);
console.log(analysisResult);

/* Expected Output (approximate values for final amounts due to floating point):
{
  totalRevenue: 145, // (ORD001: 45) + (ORD002: 90) + (ORD005: 18) = 153. No, 45 + 90 + 18 = 153.
                     // ORD001: (2*10 + 1*25) = 45. Standard. Final: 45.
                     // ORD002: (1*100) = 100. Premium. Discount: 10. Final: 90.
                     // ORD005: (2*10) = 20. Premium. Discount: 2. Final: 18.
                     // totalRevenue = 45 + 90 + 18 = 153.
  pendingOrdersCount: 1, // ORD003
  cancelledOrdersRevenueLoss: 70, // ORD004: (1*50 + 1*20) = 70
  processedOrdersDetails: [
    { orderId: 'ORD001', finalAmount: 45, discountApplied: false },
    { orderId: 'ORD002', finalAmount: 90, discountApplied: true },
    { orderId: 'ORD005', finalAmount: 18, discountApplied: true }
  ]
}
*/
