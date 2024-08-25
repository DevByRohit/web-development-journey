// Scope:- Scope determines the accessibility of variables, functions, and objects in various parts of your code.

// 1. Global Scope:- Variables declared outside any function or block are in the global scope. They are accessible from anywhere in the code.

// # Properties of Global Scope
// a) Variables in the global scope can be accessed and modified from anywhere in the code.
// b) Overusing global variables can lead to naming conflicts and unintended side effects.

// Example
let globalVar = "I'm global";

function accessGlobal() {
  console.log(globalVar); // Accessible
}

accessGlobal(); // "I'm global"
console.log(globalVar); // Accessible

// 2. Local Scope:- Variables declared inside a function are in the local scope of that function. They are accessible only within that function.

// # Properties of Local Scope
// a) Variables in the local scope are created when the function is called and destroyed when the function completes execution.
// b) They help prevent naming conflicts and keep the code modular and maintainable.

// Example
function localScopeExample() {
  let localVar = "I'm local";
  console.log(localVar); // Accessible
}

localScopeExample(); // "I'm local"
console.log(localVar); // ReferenceError: localVar is not defined

// 3. Block Scope:- Variables declared with let or const inside a block (e.g., inside {}) are in the block scope. They are accessible only within that block.

// # Properties of Block Scope
// a) Block scope is introduced in ES6 with the let and const keywords.
// b) Variables declared with var do not have block scope and are hoisted to the function or global scope.

// Example
if (true) {
  let blockVar = "I'm block scoped";
  console.log(blockVar); // Accessible
}

console.log(blockVar); // ReferenceError: blockVar is not defined

// 4. Function Scope:- Variables declared with var are function-scoped, meaning they are accessible within the function they are declared in.

// # Properties of Function Scope
// a) Function scope is limited to the function in which the variable is declared.
// b) Variables declared with var are hoisted to the top of their function scope.

// Example
function functionScopeExample() {
  if (true) {
    var functionVar = "I'm function scoped";
  }
  console.log(functionVar); // Accessible
}

functionScopeExample(); // "I'm function scoped"
console.log(functionVar); // ReferenceError: functionVar is not defined

// 5. Lexical Scope:- Lexical scope (or static scope) refers to the fact that the scope of a variable is determined by its position in the source code. Nested functions have access to variables declared in their outer scope.

// # Properties of Lexical Scope
// a) Functions create their own scope, but they also have access to variables from their outer (parent) scope.
// b) This creates a chain of scopes, known as the scope chain, which is used for variable resolution.

// Example
function outerFunction() {
  let outerVar = "I'm outer";

  function innerFunction() {
    console.log(outerVar); // Accessible
  }

  innerFunction();
}

outerFunction(); // "I'm outer"

// 6. Closures:- A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. Closures allow functions to retain access to variables from their outer scope even after the outer function has finished executing.

// # Properties of Closures
// a) Closures capture and remember the variables from their outer scope.
// b) They are commonly used for data encapsulation and creating private variables.

// Example
function outerFunction() {
  let outerVar = "I'm outer";

  return function innerFunction() {
    console.log(outerVar); // Accessible
  };
}

let closure = outerFunction();
closure(); // "I'm outer"

