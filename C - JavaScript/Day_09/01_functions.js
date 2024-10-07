// Functions:- Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

// 1. Creating Functions
// a) Function Declaration:- A function declaration defines a named function.
// Cyntax:- A function declaration
function functionName(parameters) {
  // function body
}

// Example:
function square(number) {
  return number * number;
}
// The function square takes one parameter, called number. The function consists of one statement that says to return the parameter of the function (that is, number) multiplied by itself. The return statement specifies the value returned by the function, which is number * number.

// Pass an Object as a parameter
// When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar); // function call
console.log(mycar.make); // "Toyota"

// Pass an array as a parameter
// When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function, as shown in the following example:
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr); // function call
console.log(arr[0]); // 30

// Set default values of function
function sayName(name = "Sandeep") {
  return `${name} just loged in`;
}
console.log(sayName("Rohit"));

// how to pass multiple arguments to the function at once by rest operators
function calculateCartPrice(...number) {
  return number;
}
console.log(calculateCartPrice(1, 2, 3,  4, 5));
