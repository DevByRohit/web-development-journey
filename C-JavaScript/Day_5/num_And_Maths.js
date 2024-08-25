// implicitly javaScript converts this variable to a number
const score = 400;
console.log(score);

// Explicitly convert to a number
const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const number = 123.4323;
console.log(number.toPrecision(3));

const hundred = 1000000;
console.log(hundred.toLocaleString("en-IN"));

// +++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++====

/*
console.log(Math);

console.log(Math.PI);
console.log(Math.abs(-10)); // 10
console.log(Math.sqrt(16)); // 4
console.log(Math.round(5.6)); // 6
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.3)); // 4
console.log(Math.max(10, 20, 30, 40)); // 40
console.log(Math.min(10, 20, 30, 40)); // 10
console.log(Math.random() * 10); // random number between 0 and 9
console.log(Math.random() * (50 - 10) + 10); // random number between 10 and 50
*/

// remove 0 from generated numbers
console.log(Math.random() * 10 + 1);

// how to generate numbers in range
// number generating between 10 and 20
let min = 10;
let max = 20;
let generatedNumber = Math.floor(Math.random() * (max - min) + 1 + min);
console.log(`Generated number is: ${generatedNumber}`);