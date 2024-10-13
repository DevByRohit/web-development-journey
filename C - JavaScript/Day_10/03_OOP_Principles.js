// OOP Principles in JavaScript

// 1. Inheritance
// Inheritance allows a class to inherit properties and methods from another class. It promotes code reuse and logical hierarchy.

// Syntax: class ChildClass extends ParentClass
// Example:
class Animal {
  constructor(name) {
    this.name = name;
  }
  quality(name) {
    console.log(`${name} dog is so cute`);
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} barks`);
  }
}

let dog = new Dog("Buddy");
dog.makeSound(); // "Buddy barks"
dog.quality("Tommy");
// Note: If parent and child classes have same methods so in this case child's methods will be used and this is called 'method overriding'.

// 1. Encapsulation
// Encapsulation is the practice of keeping an object's properties and methods private and exposing only necessary parts via a public interface.

// Private Properties & Methods: Private fields are defined using the # symbol.

// Example
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
//   console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
