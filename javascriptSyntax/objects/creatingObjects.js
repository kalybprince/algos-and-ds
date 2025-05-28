// Ways to Create Objects


/* 1. Object Literal (Most Common):

As discussed in the previous answer, this is the simplest
and most direct way using curly braces {} */

const myBook = {
  title: "Harry Potter",
  author: "JK Rowling"
};

/* 2. new Object() Constructor:

Less common for plain objects, but functionally similar to
object literals. */

const anotherBook = new Object();
anotherBook.title = "1984";
anotherBook.author = "George Orwell";

/* 3. Constructor Functions (Pre-ES6 Classes):

Used to create multiple objects of the same "type" with 
shared properties and methods. */

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.getInfo = function() {
    return `${this.title} by ${this.author}`;
  };
}

const book1 = new Book("Moby Dick", "Herman Melville");
const book2 = new Book("Pride and Prejudice", "Jane Austen");
console.log(book1.getInfo());

/* 4. Classes (ES6+ Syntactic Sugar):

Introduced in ES6, classes provide a cleaner, more 
object-oriented syntax for creating constructor functions 
and managing prototypes. They are essentially syntactic 
sugar over JavaScript's existing prototype-based 
inheritance. */

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  drive() {
    console.log(`Driving the ${this.make} ${this.model}`)
  }
}

const myCar = new Car("Honda", "Civic");
myCar.drive();

/* 5. Object.create():

Allows you to create a new object, explicitly specifying its 
prototype object. This is a more advanced way to handle 
inheritance. */

const protoUser = {
  greet() {
    console.log(`Hello, ${this.name}`)
  }
};

const newUser = Object.create(protoUser);
newUser.name = "Charlie";
newUser.greet(); // "Hello, Charlie"