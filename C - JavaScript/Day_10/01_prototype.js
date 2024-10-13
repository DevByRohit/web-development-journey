// 1. What is a Prototype?
// In JavaScript, every object has a hidden internal property called [[Prototype]]. This property either points to another object, known as the prototype, or null. When trying to access a property or method on an object, JavaScript will look at the object itself first, and if the property is not found, it will look at its prototype, and continue up the chain of prototypes until it either finds the property or reaches null.

let obj = {}; // An empty object
console.log(obj.__proto__); // Object.prototype

let prototype = {
  greet: function () {
    console.log("Hello, I am an object!");
  },
};

let prototypeTwo = {
  greetTwo: function () {
    console.log("Hello, I am another object!");
  },
};

obj.__proto__ = prototype; // obj inherits from prototype
obj.greet();

// 2. Creating Objects with Prototypes
// Constructor Functions
// In JavaScript, objects can be created using constructor functions, which use prototypes to inherit properties and methods.

// Example:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let alice = new Person("Alice", 30);
let bob = new Person("Bob", 25);

alice.greet(); // "Hello, my name is Alice"
bob.greet(); // "Hello, my name is Bob"

// In this example:
// Person is a constructor function.
// Person.prototype.greet is a method that all Person objects will inherit.

// The new Keyword
// When you use the new keyword with a constructor function:
// 1. A new object is created.
// 2. The prototype of this new object is set to the prototype property of the constructor function.
// 3. The constructor function is called with this bound to the newly created object.
// 4. The object is returned automatically if no other object is returned explicitly.
