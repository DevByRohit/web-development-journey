/*
#Variables and Data Types

1. Variables:
In JavaScript, variables are used to store data that can be referenced and manipulated in your code. 
Variables are declared using three keywords: var, let, and const.

a) var:
Hoisting: Variables declared with "var" are hoisted to the top of their scope and initialized with "undefined".
Scope: function-scope.
var x = 10;
console.log(x); // 10

b) let:
Hoisting: Variables declared with "let" are hoisted to the top of their scope but not initialized.
Scope: block-scope.
let y = 20;
console.log(y); // 20

c) const:
Hoisting: Variables declared with "const" are hoisted to the top of their scope but not initialized.
Scope: block-scope.
const z = 30;
console.log(z); // 30

2. Data Types:
JavaScript is a dynamically typed language, meaning you don't have to specify data types explicitly. The types are determined automatically during runtime.

a) Primitive Data Types:
JavaScript has six primitive data types:

1. Number ( Represent integer and floating-point numbers).
let num = 100;
let pi = 3.14;

2. String ( Represent sequences of characters ).
let str = "Hello, world!";

3. Boolean ( Represent logical entities true or false values ).
let isActive = true;

4. Undefined (A variable that has been declared but not assigned a value ).
let und;
console.log(und); // undefined

5. Null (A variable that has been assigned the value null ).
let nullVar = null;

6. Symbol (Introduced in ES6, represents a unique identifier ).
let sym = Symbol("description");

b) Complex Data Types / Object Data Type

1. Object
A collection of key-value pairs.
Can include primitive values, other objects, or functions.
let obj = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hello");
  }
};

2. Array
A special type of object used for storing ordered collections.
let arr = [1, 2, 3, 4, 5];

3. Function
A block of code designed to perform a particular task.
Functions are first-class objects in JavaScript.
function add(a, b) {
  return a + b;
}

*/