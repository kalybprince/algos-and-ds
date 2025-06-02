/*
  Challenge: The Haunted Mansion Adventure

  Your task is to write a JavaScript function called 'startMansionAdventure'
  that simulates a simple text-based adventure game.

  The function takes one argument:
  1.  'initialHealth': A number representing the adventurer's starting health.

  The game proceeds turn by turn until a winning or losing condition is met.

  Game Mechanics:
  * Initialize `currentHealth` to `initialHealth`.
  * Initialize `itemsCollected` as an empty array. The target items are "Key", "Torch", "Map".
  * Initialize `turnsTaken` to 0.
  * Set a `MAX_TURNS` constant (e.g., 20) to prevent infinite loops.

  Control Flow:
  * Use a `while` loop to continue the adventure as long as:
      * `currentHealth` is greater than 0.
      * The number of `itemsCollected` (unique) is less than 3.
      * `turnsTaken` is less than `MAX_TURNS`.

  * Inside the `while` loop (each turn):
      1.  Increment `turnsTaken`.
      2.  Generate a random event type (e.g., "findItem", "encounterGhost", "rest").
          You can use `Math.random()` and `if/else if/else` or a `switch` statement
          based on a random number range.
          Helper for random integer: `Math.floor(Math.random() * max) + min`
          (e.g., for 0-2: `Math.floor(Math.random() * 3)`).
      3.  **Handle Events (using `switch` or `if/else if/else`):**
          * **"findItem"**:
              * Randomly pick one of the target items: "Key", "Torch", "Map".
              * If the item is *not already* in `itemsCollected`, add it.
              * Log a message to the console like "You found a [Item Name]!"
          * **"encounterGhost"**:
              * Decrease `currentHealth` by a random amount between 5 and 15 (inclusive).
              * Log a message like "A ghost attacked! You lost [damage] health."
          * **"rest"**:
              * Increase `currentHealth` by a random amount between 3 and 8 (inclusive).
              * Ensure `currentHealth` does not exceed `initialHealth`.
              * Log a message like "You rested and recovered [healing] health."
          * **Default/Unknown**: Log "Nothing happened this turn."

      4.  **Check Game End Conditions**:
          * After processing the event, check if `currentHealth <= 0`. If so, set `outcome` to "Defeated" and `break` the loop.
          * Check if `itemsCollected.length === 3`. If so, set `outcome` to "Victory" and `break` the loop.

  * **Return Value**:
      Return an object with the following properties:
      * `finalHealth`: The health at the end of the game.
      * `itemsFound`: The array of unique items collected.
      * `turns`: The number of turns taken.
      * `outcome`: A string: "Defeated", "Victory", or "Aborted - Max Turns Reached" (if the loop finishes because `turnsTaken` reached `MAX_TURNS` without win/loss).

  This challenge focuses on:
  - `while` loops.
  - `if/else if/else` or `switch` for complex branching.
  - `break` for early loop termination.
  - Array methods (`push`, `includes`).
  - Random number generation.
*/

// Write your function here!
// Remember to define the function name and its parameter.

function startMansionAdventure(initialHealth) {
  let currentHealth = initialHealth;
  let itemsCollected = [];
  let turnsTaken = 0;
  let outcome = "";
  const itemsList = ["Key", "Torch", "Map"];
  const MAX_TURNS = 20;

  // Helper function for random integer within a range [min, max] (inclusive)
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  while (
    currentHealth > 0 &&
    itemsCollected.length < 3 &&
    turnsTaken < MAX_TURNS
  ) {
    turnsTaken++;
    let randomEventVal = getRandom(0, 3); // Generates 0, 1, 2, or 3 (inclusive)
    switch (randomEventVal) {
      case 0: // findItem
        let gainedItemIndex = Math.floor(Math.random() * 3);
        let possibleGainedItem = itemsList[gainedItemIndex];
        if (!itemsCollected.includes(possibleGainedItem)) {
          itemsCollected.push(possibleGainedItem);
          console.log(`You found a ${possibleGainedItem}`);
        }
        break;

      case 1: // encounterGhost
        let damage = getRandom(5, 15);
        currentHealth -= damage;
        console.log(`A ghost attack!  You lost ${damage}.`);
        break;

      case 2: // rest
        let addedHealth = getRandom(3, 8);
        currentHealth = Math.min(initialHealth, currentHealth + addedHealth);
        console.log(`You rested and recovered ${addedHealth} health.`);
        break;

      default: // This will catch randomEventVal === 3 (or any other unexpected value)
        console.log("Nothing happened this turn.");
        break;
    }

    // Check game end conditions immediately after processing the turn's event
    if (currentHealth <= 0) {
      outcome = "Defeated";
      break;
    } else if (itemsCollected.length === 3) {
      outcome = "Victory!";
      break;
    }
  }

  // Determine outcome if loop finished due to MAX_TURNS
  if (outcome === "" && turnsTaken === MAX_TURNS) {
    outcome = "Aborted - Max Turns Reached";
  }

  return {
    finalHealth: currentHealth,
    itemsFound: itemsCollected,
    turns: turnsTaken,
    outcome: outcome,
  };
}

// --- Test Cases (Do not modify below this line) ---
console.log("--- Starting Adventure Simulations ---");

// Simulate a few games to see different outcomes
console.log("\nSimulation 1 (High Health):");
console.log(startMansionAdventure(100));

console.log("\nSimulation 2 (Low Health):");
console.log(startMansionAdventure(20));

console.log("\nSimulation 3 (Medium Health):");
console.log(startMansionAdventure(50));

console.log("\nSimulation 4 (Very Low Health - likely defeated quickly):");
console.log(startMansionAdventure(10));

console.log(
  "\nSimulation 5 (High Health, but limited turns to see 'Aborted' outcome):"
);
// Temporarily modify MAX_TURNS inside your function for this specific test if you want to force it.
// Or just run it multiple times and hope for an aborted outcome naturally.
console.log(startMansionAdventure(70));

console.log("--- End of Adventure Simulations ---");
