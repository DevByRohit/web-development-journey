const user = {
  userName: "Rohit",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.userName} , Welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage();
console.log(this);

// # Arrow function
// when we will use the curly brackets then do not forget to use return keyword.
const arrowFunction = (ele) => {
  return ele;
};
console.log(arrowFunction(12));

// when we will use parentheses() then there is no need to write return keyword.
let withoutReturnKeyword = (num1, num2) => num1 + num2;
console.log(withoutReturnKeyword(12, 3));

// IIFE:- Immediately Invoked Function Expressions
(function ImmediatelyInvokedFunction() {
  console.log("IIFE");
})();

(() => {
  console.log("IIFE with arrow function");
})();

// IIFE with arguments
((name) => {
  console.log(`${name}`);
})("IIFE with arguments");

