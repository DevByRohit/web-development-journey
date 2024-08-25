// 1. Conditional Statements

// If-Else Statements:- The if-else statement is used to execute a block of code based on a condition.

// Cyntax:
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// Else-If Statements:- The else-if statement allows you to check multiple conditions.

// Cyntax:
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Ternary Operator:- A shorthand for the if-else statement.

// Cyntax:
let isMember = true;
let discount = isMember ? "20%" : "0%";
console.log(discount); // "20%"

// 2. Switch Statement:- The switch statement is used for multi-way branching. It evaluates an expression and matches its value to a case label, executing the corresponding block of code.

// Cyntax:
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Wednesday":
    console.log("Midweek.");
    break;
  case "Friday":
    console.log("End of the work week.");
    break;
  default:
    console.log("Regular day.");
}

// Falsy values:- false, 0, -0, BigInt 0n, null, undefined, "", NaN

// truthy values:- "0",  'false', " ", [], {}, function(){}

// How to check array is empty or not
let array = [];
if (array.length === 0) {
  console.log("Array is empty");
}

// How to check object is empty or not
let emptyObj = {
  name: "Rohit",
};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
} else {
  console.log("Object is not empty");
}

console.log(false == 0);
console.log(false == "0");
console.log(0 == "");

// Nullish coalescing operators (??): null undefined
let value;
value = 12 ?? 23;
console.log(value);

value = null ?? true;
console.log(value);

value = null ?? 34;
console.log(value);

value = undefined ?? 345;
console.log(value);

