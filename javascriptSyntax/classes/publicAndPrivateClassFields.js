/* Public and Private Class Fields (ES2022)

Modern JavaScript allows you to define properties directly
within the class body.

  - Public Instance Fields: 
  Defined directly in the class body. Each instance will
  have its own copy. */

class Point {
  x = 0; // Public instance field
  y = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const point1 = new Point(10, 20);
console.log(point1.x, point1.y); // 10 20

/* Private Instance Fields: 

Defined with a `#` prefix. These properties are truly
private and can only be accessed from within the class
itself.*/

class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount(100);

/* SyntaxError: Private field '#balance' must be declared in an enclosing class */
// console.log(myAccount.#balance);

console.log(myAccount.getBalance()); // 100
