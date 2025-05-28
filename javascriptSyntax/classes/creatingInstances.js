/* Creating Instances (new Keyword)

You create new objects (instances) from a class using the
`new` keyword followed by the class name and any arguments
required by its `constructor`. */

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productDetails() {
    console.log(`${this.name} costs ${this.price} dollars.`);
  }
}

// Laptop is an instance of Product
const laptop = new Product("Gaming Laptop", 1500);
// Mouse is another instance of Product
const mouse = new Product("Wireless Mouse", 100);

laptop.productDetails();
mouse.productDetails();

/* Output:

Gaming Laptop costs 1500 dollars.
Wireless Mouse costs 100 dollars. */
