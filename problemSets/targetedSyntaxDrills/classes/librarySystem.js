/*
  Challenge: JavaScript Advanced Classes - Library System (Inheritance)

  Your task is to define a base class 'Book' and then extend it
  to create two specialized classes: 'Ebook' and 'Audiobook'.

  This challenge focuses on:
  -   Class inheritance (`extends` keyword).
  -   Calling parent constructor (`super()`).
  -   Method overriding (redefining a method in a subclass).
  -   Calling parent methods from subclasses (`super.methodName()`).
  -   Adding unique properties and behaviors to subclasses.
*/

// 1. Define the Base Class: Book
//    This class should be similar to your previous Book class,
//    but we'll make its 'getDetails' method extensible.
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true; // Default availability
  }

  // Returns a basic string of book details.
  getDetails() {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${
      this.isbn
    }, Available: ${this.isAvailable ? "Yes" : "No"}`;
  }

  // Simulates borrowing the book.
  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`"${this.title}" has been borrowed.`);
      return true;
    } else {
      console.log(`"${this.title}" is currently unavailable.`);
      return false;
    }
  }

  // Simulates returning the book.
  return() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`"${this.title}" has been returned.`);
      return true;
    } else {
      console.log(`"${this.title}" was not borrowed.`);
      return false;
    }
  }
}

// 2. Define the Derived Class: Ebook
//    Ebooks are books with additional properties: fileSizeKB and format.
//    They also have specific behavior when borrowed.
//    - Constructor should accept title, author, isbn, fileSizeKB, format.
//    - Override `getDetails()` to include Ebook-specific info.
//    - Override `borrow()` to add a console log "Initiating download..." if successful.
class Ebook extends Book {
  constructor(title, author, isbn, fileSizeKB, format) {
    super(title, author, isbn);
    this.fileSizeKB = fileSizeKB;
    this.format = format;
  }

  // Overrides parent method (Book) to include audiobook-specific details
  getDetails() {
    const baseDetails = super.getDetails();
    return `${baseDetails}, File Size: ${this.fileSizeKB}, Format: ${this.format}`;
  }

  borrow() {
    const borrowedSuccessfully = super.borrow();
    if (borrowedSuccessfully) {
      console.log(
        `Initiating download for "${this.title}" (${this.format})...`
      );
    }
    return borrowedSuccessfully;
  }
}

class Audiobook extends Book {
  constructor(title, author, isbn, durationMinutes, narrator) {
    super(title, author, isbn);
    this.durationMinutes = durationMinutes;
    this.narrator = narrator;
  }

  getDetails() {
    const baseDetails = super.getDetails();
    return `${baseDetails}, Duration: ${this.durationMinutes} mins, Narrator: ${this.narrator}`;
  }

  borrow() {
    const borrowedSuccessfully = super.borrow();
    if (borrowedSuccessfully) {
      console.log(
        `Starting stream for "${this.title}" narrated by ${this.narrator}...`
      );
    }
    return borrowedSuccessfully;
  }
}
// 3. Define the Derived Class: Audiobook
//    Audiobooks are books with additional properties: durationMinutes and narrator.
//    They also have specific behavior when borrowed.
//    - Constructor should accept title, author, isbn, durationMinutes, narrator.
//    - Override `getDetails()` to include Audiobook-specific info.
//    - Override `borrow()` to add a console log "Starting stream..." if successful.

// --- Test Cases (Do not modify below this line) ---
console.log("--- Testing Library System Classes ---");

// Create instances of each class
const classicBook = new Book("Moby Dick", "Herman Melville", "978-0142437247");
const techEbook = new Ebook(
  "Clean Code",
  "Robert C. Martin",
  "978-0132350884",
  5000,
  "PDF"
);
const fantasyAudiobook = new Audiobook(
  "The Hobbit",
  "J.R.R. Tolkien",
  "978-0345339683",
  670,
  "Andy Serkis"
);

console.log("\n--- Initial Details ---");
console.log("Classic Book:", classicBook.getDetails());
console.log("Tech Ebook:", techEbook.getDetails());
console.log("Fantasy Audiobook:", fantasyAudiobook.getDetails());

console.log("\n--- Borrowing Operations ---");

// Test borrowing Classic Book
console.log("\nAttempting to borrow Moby Dick:");
classicBook.borrow();
console.log("Classic Book:", classicBook.getDetails());
console.log("Attempting to borrow Moby Dick again:");
classicBook.borrow(); // Should show unavailable message

// Test borrowing Ebook
console.log("\nAttempting to borrow Clean Code Ebook:");
techEbook.borrow();
console.log("Tech Ebook:", techEbook.getDetails());
console.log("Attempting to borrow Clean Code Ebook again:");
techEbook.borrow(); // Should show unavailable message

// Test borrowing Audiobook
console.log("\nAttempting to borrow The Hobbit Audiobook:");
fantasyAudiobook.borrow();
console.log("Fantasy Audiobook:", fantasyAudiobook.getDetails());
console.log("Attempting to borrow The Hobbit Audiobook again:");
fantasyAudiobook.borrow(); // Should show unavailable message

console.log("\n--- Returning Operations ---");

// Test returning Classic Book
console.log("\nAttempting to return Moby Dick:");
classicBook.return();
console.log("Classic Book:", classicBook.getDetails());
console.log("Attempting to return Moby Dick again (already available):");
classicBook.return(); // Should show not borrowed message

// Test returning Ebook
console.log("\nAttempting to return Clean Code Ebook:");
techEbook.return();
console.log("Tech Ebook:", techEbook.getDetails());

// Test returning Audiobook
console.log("\nAttempting to return The Hobbit Audiobook:");
fantasyAudiobook.return();
console.log("Fantasy Audiobook:", fantasyAudiobook.getDetails());

console.log("\n--- Final Details ---");
console.log("Classic Book:", classicBook.getDetails());
console.log("Tech Ebook:", techEbook.getDetails());
console.log("Fantasy Audiobook:", fantasyAudiobook.getDetails());
