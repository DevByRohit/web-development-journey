class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let personOne = new Human("Rohit", "21 years old");
console.log(personOne);

class Vehicle {
  fillDetails(carName, carCom, carColor) {
    this.carName = carName;
    this.carComp = carCom;
    this.carColor = carColor;
  }
}

let carOne = new Vehicle();
carOne.fillDetails("BMW", "BMW", "Black");
console.log(carOne);

// About Inheritance
class ToyotaCar {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  start() {
    console.log("Toyota car has started");
  }
}

class BMWCar {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  start() {
    console.log("BMW car has started");
  }
}

// Practice question
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}

class Admin extends User {
  // constructor(name, email) {
  //   super(name, email);
  // }
  editData() {
    console.log("Data has been edited");
  }
}
let userOne = new User("Rohit Ahirwar", "rohit@example.com");
// userOne.viewData();
console.log(userOne);


let adminOne = new Admin("admin", "admin@gmail.com");
console.log(adminOne);
