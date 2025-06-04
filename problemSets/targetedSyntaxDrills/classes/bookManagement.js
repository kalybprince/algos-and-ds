/*
  Challenge: JavaScript Class Basics - Book Management

  Your task is to define a JavaScript class called 'Book' that represents
  a book with essential information and basic actions.

  Class Requirements:

  1.  **Class Name:** `Book`

  2.  **Constructor:**
      * The constructor should accept three parameters: `title`, `author`, and `isbn`.
      * It should initialize instance properties for `title`, `author`, and `isbn` using the values passed to the constructor.
      * It should also initialize a default property `isAvailable` to `true` (a boolean) for every new book instance.

  3.  **Methods:**
      You need to define the following instance methods within the `Book` class:

      a.  `displayBookInfo()`:
          * This method should return a formatted string containing the book's title, author, ISBN, and its current availability status.
          * Example return: `"Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 978-0743273565, Available: Yes"`
          * (You can use "Yes" or "No" for availability, or "true"/"false" directly).

      b.  `borrowBook()`:
          * This method simulates borrowing the book.
          * If the book `isAvailable` (i.e., `true`), it should set `isAvailable` to `false`.
          * It should log a message to the console indicating whether the book was successfully borrowed or if it was already borrowed.
          * It should return `true` if the book was successfully borrowed, `false` otherwise.

      c.  `returnBook()`:
          * This method simulates returning the book.
          * If the book `isAvailable` is `false` (i.e., it was borrowed), it should set `isAvailable` to `true`.
          * It should log a message to the console indicating whether the book was successfully returned or if it was not borrowed in the first place.
          * It should return `true` if the book was successfully returned, `false` otherwise.

  This challenge focuses on:
  -   `class` keyword syntax.
  -   `constructor` method.
  -   Defining instance properties (`this.property`).
  -   Defining instance methods.
  -   Using `console.log` within methods.
  -   Returning values from methods.
*/

// Write your Book class definition here!
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }

  displayBookInfo() {
    // Returns formatted string containing books information
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Available: ${this.isAvailable}`;
  }

  borrowBook() {
    // This method simulates borrowing the book
    if (this.isAvailable === true) {
      this.isAvailable = false;
      console.log("The book has been successfully borrowed.");
      return true;
    } else {
      console.log("The book was already borrowed.");
      return false;
    }
  }

  returnBook() {
    // This method simulates returning the book
    if (this.isAvailable === false) {
      this.isAvailable = true;
      console.log("The book has been successfully returned.");
      return true;
    } else {
      console.log("The book was not borrowed in the first place.");
      return false;
    }
  }
}

// --- Test Cases (Do not modify below this line) ---
console.log("--- Testing Book Class ---");

// Create instances of the Book class
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "978-0345339683");
const book2 = new Book("1984", "George Orwell", "978-0451524935");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", "978-0061120084");

console.log("\nInitial Book Info:");
console.log("Book 1:", book1.displayBookInfo());
console.log("Book 2:", book2.displayBookInfo());
console.log("Book 3:", book3.displayBookInfo());

console.log("\n--- Borrowing and Returning ---");

// Test borrowing book1 (should succeed)
console.log("\nAttempting to borrow The Hobbit:");
const borrowed1 = book1.borrowBook();
console.log("Borrow success:", borrowed1);
console.log("Book 1 Info after borrow:", book1.displayBookInfo());

// Test borrowing book1 again (should fail)
console.log("\nAttempting to borrow The Hobbit again:");
const borrowed2 = book1.borrowBook();
console.log("Borrow success:", borrowed2);
console.log(
  "Book 1 Info after second borrow attempt:",
  book1.displayBookInfo()
);

// Test returning book2 (should fail as it wasn't borrowed)
console.log("\nAttempting to return 1984 (not borrowed):");
const returned1 = book2.returnBook();
console.log("Return success:", returned1);
console.log("Book 2 Info after return attempt:", book2.displayBookInfo());

// Test borrowing book2 (should succeed)
console.log("\nAttempting to borrow 1984:");
book2.borrowBook();
console.log("Book 2 Info after borrow:", book2.displayBookInfo());

// Test returning book2 (should succeed)
console.log("\nAttempting to return 1984:");
const returned2 = book2.returnBook();
console.log("Return success:", returned2);
console.log("Book 2 Info after return:", book2.displayBookInfo());

console.log("\n--- Final Book Info ---");
console.log("Book 1:", book1.displayBookInfo());
console.log("Book 2:", book2.displayBookInfo());
console.log("Book 3:", book3.displayBookInfo()); // Should still be available
