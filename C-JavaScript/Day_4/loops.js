// 1. For Loop:- The for loop is the most common and versatile loop in JavaScript. It's used when you know in advance how many times you want to execute a statement or a block of statements.

// Cyntax:
for (initialization; condition; increment) {
  // Code to be executed
}

// Example:
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
}

// 2. While Loop:- The while loop repeats a block of code as long as a specified condition is true. The condition is evaluated before the execution of the loop body.

// Syntax:
while (condition) {
  // Code to be executed
}

// Example:
let i = 0;
while (i < 5) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
  i++;
}

// 3. Do-While Loop:- The do-while loop is similar to the while loop, but it guarantees that the loop body will be executed at least once, even if the condition is "false" initially. This is because the condition is evaluated after the execution of the loop body.

// Syntax:
do {
  // Code to be executed
} while (condition);

// Example:
let j = 0;
do {
  console.log(j); // Outputs: 0, 1, 2, 3, 4
  j++;
} while (j < 5);

// 4. For-In Loop:- The for-in loop iterates over the enumerable properties of an object. It is mainly used for iterating over object properties.

// Syntax:
for (key in object) {
  // Code to be executed
}

// Example:
let person = { name: "Alice", age: 25, profession: "Developer" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Outputs:
// name: Alice
// age: 25
// profession: Developer

// 5. For-Of Loop:- The for-of loop iterates over iterable objects (like arrays, strings, maps, sets, etc.). It provides a cleaner and more readable syntax for iterating over array elements or other iterable objects.

// Syntax:
for (variable of iterable) {
  // Code to be executed
}

// Example:
let array = [10, 20, 30, 40, 50];
for (let value of array) {
  console.log(value);
}
// Outputs: 10, 20, 30, 40, 50

// 6. Nested Loops:- Nested loops are loops inside other loops. They are useful for working with multi-dimensional arrays or performing more complex iterative tasks.

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
// Outputs:
// i = 1, j = 1
// i = 1, j = 2
// i = 1, j = 3
// i = 2, j = 1
// i = 2, j = 2
// i = 2, j = 3
// i = 3, j = 1
// i = 3, j = 2
// i = 3, j = 3

// 7. Control Statements in Loops

// 1. Break Statement:- The "break" statement is used to exit a loop prematurely.

// Example:
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exits the loop when i is 5
  }
  console.log(i); // Outputs: 0, 1, 2, 3, 4
}

// 2. Continue Statement:- The "continue" statement skips the current iteration and continues with the next iteration of the loop.

// Example:
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skips the rest of the code inside loop for iteration when i is 2
  }
  console.log(i); // Outputs: 0, 1, 3, 4
}

