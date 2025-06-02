/*
  Challenge: Bank Transaction Analyzer

  Your task is to write a JavaScript function called 'analyzeTransactions'
  that takes two arguments:
  1. 'transactions': An array of transaction objects. Each object has:
     - 'type': A string ("deposit", "withdrawal", "fee", or "transfer").
     - 'amount': A number representing the transaction value.
  2. 'overdraftLimit': A number representing the maximum negative balance
     allowed before the bank stops processing further transactions.

  You need to perform the following analysis using various control flow structures:

  1.  Initialize `currentBalance` to 0.
  2.  Initialize `withdrawalCount` to 0.
  3.  Initialize `highFeeDetected` to `false`.
  4.  Initialize `overdraftBreached` to `false`.

  5.  **Iterate** through each transaction in the `transactions` array using a `for` loop.
      Inside the loop:
      a.  Use a **`switch` statement** (or `if/else if/else` if you prefer, but `switch` is encouraged here for practice) to handle different `transaction.type`s:
          * **"deposit"**: Add `amount` to `currentBalance`.
          * **"withdrawal"**: Subtract `amount` from `currentBalance`, and increment `withdrawalCount`.
          * **"fee"**: Subtract `amount` from `currentBalance`. If `amount` is greater than 10, set `highFeeDetected` to `true`.
          * **"transfer"**: Subtract `amount` from `currentBalance`. (Assume transfers are always outgoing for simplicity).
          * **Default (unknown type)**: Log a message to the console like "Unknown transaction type encountered: [type]".
      b.  **Crucial Control Flow**: After processing each transaction, **check if `currentBalance` falls below `-overdraftLimit`**.
          * If it does, immediately set `overdraftBreached` to `true`.
          * Then, **stop processing any further transactions** in the array. (Think about which control flow statement achieves this).

  6.  Finally, return an object containing the following properties:
      * `finalBalance`: The `currentBalance` at the end of processing.
      * `totalWithdrawals`: The `withdrawalCount`.
      * `highFeeDetected`: The `highFeeDetected` boolean.
      * `overdraftBreached`: The `overdraftBreached` boolean.

  This challenge focuses on:
  - `for` loops for iteration
  - `switch` statements for multi-way branching
  - `if` statements for conditional checks
  - `break` statement for loop control
  - Object creation and return
*/

function analyzeTransactions(transactions, overdraftLimit) {
  let currentBalance = 0;
  let withdrawalCount = 0;
  let highFeeDetected = false;
  let overdraftBreached = false;

  // Your main for loop and internal logic go here

  for (let eachTransaction of transactions) {
    switch (eachTransaction.type) {
      case "deposit":
        currentBalance += eachTransaction.amount;
        break;
      case "withdrawal":
        currentBalance -= eachTransaction.amount;
        withdrawalCount += 1;
        break;
      case "fee":
        currentBalance -= eachTransaction.amount;
        if (eachTransaction.amount > 10) {
          highFeeDetected = true;
        }
        break;
      case "transfer":
        currentBalance -= eachTransaction.amount;
        break;
      default:
        console.log(
          `Unknown transaction type encountered: ${eachTransaction.type}`
        );
    }
    if (currentBalance < -overdraftLimit) {
      overdraftBreached = true;
      break;
    }
  }

  return {
    finalBalance: currentBalance,
    totalWithdrawals: withdrawalCount,
    highFeeDetected: highFeeDetected,
    overdraftBreached: overdraftBreached,
  };
}

// --- Test Cases (Do not modify below this line) ---

// Test Case 1: Normal operations, no overdraft, no high fee
const transactions1 = [
  { type: "deposit", amount: 100 },
  { type: "withdrawal", amount: 30 },
  { type: "deposit", amount: 50 },
  { type: "fee", amount: 5 },
];
console.log("Test Case 1:", analyzeTransactions(transactions1, 50));
// Expected: { finalBalance: 115, totalWithdrawals: 1, highFeeDetected: false, overdraftBreached: false }

// Test Case 2: Overdraft breached
const transactions2 = [
  { type: "deposit", amount: 50 },
  { type: "withdrawal", amount: 80 }, // Balance becomes -30
  { type: "fee", amount: 25 }, // This transaction should NOT be processed as -30 is below -20 limit
  { type: "deposit", amount: 100 },
];
console.log("Test Case 2:", analyzeTransactions(transactions2, 20));
// Expected: { finalBalance: -30, totalWithdrawals: 1, highFeeDetected: false, overdraftBreached: true }

// Test Case 3: High fee detected
const transactions3 = [
  { type: "deposit", amount: 200 },
  { type: "withdrawal", amount: 50 },
  { type: "fee", amount: 12 }, // High fee
  { type: "transfer", amount: 10 },
];
console.log("Test Case 3:", analyzeTransactions(transactions3, 50));
// Expected: { finalBalance: 128, totalWithdrawals: 1, highFeeDetected: true, overdraftBreached: false }

// Test Case 4: Empty transactions array
const transactions4 = [];
console.log("Test Case 4:", analyzeTransactions(transactions4, 100));
// Expected: { finalBalance: 0, totalWithdrawals: 0, highFeeDetected: false, overdraftBreached: false }

// Test Case 5: Mix of types, includes unknown
const transactions5 = [
  { type: "deposit", amount: 10 },
  { type: "unknown", amount: 5 }, // Unknown type
  { type: "withdrawal", amount: 2 },
];
console.log("Test Case 5:", analyzeTransactions(transactions5, 10));
// Expected: { finalBalance: 8, totalWithdrawals: 1, highFeeDetected: false, overdraftBreached: false }
// (And a console log for "Unknown transaction type")
