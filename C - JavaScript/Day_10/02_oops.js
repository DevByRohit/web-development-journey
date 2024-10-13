// Object-Oriented Programming (OOP) in JavaScript is a paradigm that revolves around objects, making it easier to model real-world entities. OOP in JavaScript is built around four key principles: Encapsulation, Abstraction, Inheritance, and Polymorphism. Even though JavaScript is a prototype-based language, it supports OOP through its objects and the 'class' keyword introduced in ES6.

// 1. Objects in JavaScript
// What is an Object?
// In JavaScript, an object is a collection of related data and functions. Objects contain properties (data) and methods (functions).

// Example
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function () {
    console.log("The car has started");
  },
};

console.log(car.brand); // "Toyota"
car.start(); // "The car has started"

// 2. Classes and Objects
// In ES6, JavaScript introduced the class keyword to define object blueprints. Classes are templates for creating objects (instances).

// Defining Classes
// A class in JavaScript defines the structure of an object, including its properties and methods.

// Example
class RailwayForm {
  submit() {
    console.log("Form submitted successfully");
  }
  cancel() {
    console.log("Form canceled");
  }
}

// Creating Objects
let formOne = new RailwayForm();
let formTwo = new RailwayForm();
formOne.submit();
formTwo.cancel();

// Example
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} ${this.model} has started.`);
  }
}

// Creating Objects
let myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.brand); // "Toyota"
myCar.start(); // "Toyota Corolla has started."

// 3. Constructor Method
// The 'constructor' method is a special method in a class used to initialize an object's properties. It's called automatically when creating an object using 'new'.

class Constructor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let personOne = new Constructor("Rohit Ahirwar", 21);
console.log(personOne.name); // "Rohit Ahirwar"

// 4. Methods in Classes
// Methods are functions that belong to a class and define the behaviors of the objects.

// Example
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
}

let calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2

// super keyword
// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
// OR
// The 'super' keyword is used to call the constructor or methods of a parent class.

class Person {
  constructor(name) {
    this.species = "Homo Sapiens";
    this.parentName = name;
  }

  eat() {
    console.log("They are eating");
  }

  sleep() {
    console.log("They are sleeping");
  }
}

class Engineer extends Person {
  constructor(name, branch) {
    super(name); // Calls the constructor of the parent class (Person)
    this.branch = branch;
    this.name = name;
  }
  work() {
    super.eat(); // we can also access the parent class's properties and methods with the help of super keyword.
    console.log("They can solve problems and build something");
  }
}

let engineer = new Engineer("Rohit", "Computer Science Engineer");
console.log(engineer);
engineer.work();
