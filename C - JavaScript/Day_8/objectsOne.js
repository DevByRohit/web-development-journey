// Objects:- Objects are a fundamental part of JavaScript, used to store collections of data and more complex entities. They allow you to model real-world entities by grouping related data and functions together.

// 1. Creating Objects:
// a) Object Literals:- The most common way to create an object is using object literals, which are simply key-value pairs enclosed in curly braces {}.
let personOne = {
  name: "Rohit",
  age: 21,
  profession: "Developer",
  city: "Delhi",
};

// b) Using the Object Constructor:- Objects can also be created using the Object constructor 'Object()'.
let personTwo = new Object();
personTwo.name = "Sandeep";
personTwo.age = 16;
personTwo.profession = "Student";

// c) Using the Object.create Method:- This method allows you to create a new object with a specified prototype object and properties.
let proto = {
  greet: function () {
    console.log("Hello!");
  },
};
let personThree = Object.create(proto);
personThree.name = "Alice";
personThree.age = 30;

// 2. Accessing and Modifying Properties
// a) Dot Notation:- Access properties using the dot (.) notation.
console.log(personOne.name);
console.log(personOne.age);

// b) Bracket Notation:- Access properties using bracket ('[]') notation, useful for property names that are not valid identifiers or are stored in variables.
console.log(personOne["name"]);
console.log(personOne["age"]);

// Declare a symbol and us it in object as a key and assign the value to it.
let symbol = Symbol("Key1");

let ObjWithSymbol = {
  name: "Rohit",
  age: 21,
  [symbol]: "MySymbol",
  squareNotation: "access me",
  location: "Holambi Kalan",
  block: "A - Block",
};
// access the symbol's value
console.log(ObjWithSymbol[symbol]);
console.log(typeof ObjWithSymbol[symbol]);

// access the string keys
console.log(ObjWithSymbol["squareNotation"]);

// 3. Adding and Removing Properties
// a) Adding Properties:- You can add properties to an object using dot notation or bracket notation.
ObjWithSymbol.name = "Manish";
ObjWithSymbol["age"] = 22;

// b) Removing Properties:- Use the 'delete' operator to remove properties from an object.
delete ObjWithSymbol.block;
console.log(ObjWithSymbol);

// we can also freeze the objects after freezing the object we can not reassign or change the values.
// Object.freeze(ObjWithSymbol);

// 4. Object Methods
// a) Adding Methods to Objects:- Methods are functions stored as properties in objects.
ObjWithSymbol.greeting = function () {
  console.log("Hello JavaScript!");
};
ObjWithSymbol.greeting();

// b) 'this' Keyword:- Within methods, the this keyword refers to the object that called the method.
ObjWithSymbol.greetingTwo = function () {
  console.log(`Hello JavaScript users I am ${this.name}`);
};
ObjWithSymbol.greetingTwo();

let personFour = {
  name: "Suraj",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
personFour.greet(); // "Hello, my name is Suraj"

// 5. Nested Objects
let personFive = {
  fullName: {
    firstName: "Rohit",
    lastName: "Verma",
    academic: {
      branch: "Computer Science Engineering",
      semester: "4th",
    },
  },
};
console.log(personFive.fullName.academic.branch);

// add objects
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

let obj1 = { 1: "a", 2: "b" };
let obj2 = { 3: "c", 4: "d" };

let obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }

let obj4 = Object.assign(obj1, obj2);
console.log(obj4); // { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }

let obj5 = Object.assign({}, obj1, obj2);
console.log(obj5); // { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }

// we can extract the keys from the object as well as the values with the help of' Object.keys(Pass object as argument)' and 'Object.values(Pass object as argument)'.
let project = {
  name: "Rohit",
  id: 123,
  roll: 10621434,
  grade: "A",
  subjects: ["English", "Physics", "Chemistry", "Mathematics"],
};
console.log(Object.keys(project));
console.log(Object.values(project));
console.log(Object.entries(project));
console.log(project.hasOwnProperty("roll"));