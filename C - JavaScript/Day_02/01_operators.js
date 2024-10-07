// +++++++++++++++++++++++++++++++++ Arithmetic Operators +++++++++++++++++++++++++++++++++++++++

// Addition (+)
function add(num1, num2) {
  return num1 + num2;
}
// Subtraction (+)
function sub(num1, num2) {
  return num1 - num2;
}
// Multiplication (*)
function mul(num1, num2) {
  return num1 * num2;
}
// Division (/)
function div(num1, num2) {
  return num1 / num2;
}
// Modulus (%)
function mod(num1, num2) {
  return num1 % num2;
}
// Exponentiation (**)
function exponent(num1, num2) {
  return num1 ** num2;
}
//Increment (++) 
let i = 1; i++; // i = 2

//Decrement (--) 
let j = 1; j--; // i = 0

// +++++++++++++++++++++++++++++++++ Assignment Operators +++++++++++++++++++++++++++++++++++++++
//Assignment (=)
let x = 5;

//Addition Assignment (+=)
x += 3; // x = 8

//Subtraction Assignment (-=)
x -= 2; // x = 6

//Multiplication Assignment (*=)
x *= 2; // x = 12

//Division Assignment (/=)
x /= 2; // x = 6

//Modulus Assignment (%=)
x %= 4; // x = 2

//Exponentiation Assignment (**=)
x **= 2; // x = 4

// +++++++++++++++++++++++++++++++++ Comparison Operators +++++++++++++++++++++++++++++++++++++++
// Equal to (==)
5 == '5' // true

// Strict Equal to (===)
5 === '5' // false

// Not Equal (!=)
5 != '5' // false

// Strict Not Equal (!==)
5 !== '5' // true

// Greater Than (>)
5 > 3 // true

// Greater Than or Equal (>=)
5 >= 5 // true

// Less Than (<)
3 < 5 // true

// Less Than or Equal (<=)
3 <= 5 // true

// +++++++++++++++++++++++++++++++++ Logical Operators +++++++++++++++++++++++++++++++++++++++
// Logical AND (&&)
true && false // false

// Logical OR (||)
true || false // true

// Logical NOT (!)
!true // false

// +++++++++++++++++++++++++++++++++ Bitwise Operators +++++++++++++++++++++++++++++++++++++++
// Bitwise AND (&)
5 & 1 // 1

// Bitwise OR (|)
5 | 1 // 5

// Bitwise XOR (^)
5 ^ 1 // 4

// Bitwise NOT (~)
~5 // -6

// Left Shift (<<)
5 << 1 // 10

// Right Shift (>>)
5 >> 1 // 2

// Unsigned Right Shift (>>>)
5 >>> 1 // 2

// +++++++++++++++++++++++++++++++++ Conditional (Ternary) Operator +++++++++++++++++++++++++++++++++++++++
// condition ? expression1 : expression2
let age = 18;
let result = age >= 18 ? 'You are an adult' : 'You are a minor'; // 'You are an adult'