"use strict"; //treat all js code as newer version
// alert(14/2) we are using the nodejs not browser it is possible in browser

var firstName = "Rohit";
let lastName = "Ahirwar";
const fixedValue = 10621434;

//  Primitive types
let numberDataType = 2231;
let stringDataType = "String Data Type";
let booleanDataType = true;
let undefindDataType = undefined;
let nullDataType = null;
let symbolDataType = Symbol("Hi I am Symbol");
let bigIntDataType = BigInt(23134164346346377n);
let lontNumber = 999993493949394934939439493949394n;
// console.log(bigIntDataType);
// console.log(lontNumber);

// Reference types / Non-Primitive types
const myheros = ["Iron Man", "Thor", "Captain America"];
let myObj = {
  name: "Thor",
  age: 300,
  isAlive: true,
};
let myFunc = function () {
  console.log("Hello from function");
};

// ********************* Type Conversions *************************

// 1. implicit type conversions
let a = "5" + 2; // "52" String
let b = "5" - 2; // 3 Number
// console.log(a, b);

// 1. explicit type conversions
let str = "123";
let num = Number(str); // 123
let str2 = String(num); // "123"
// console.log(str, str2);

// "23" => 23 it convert easily string to number
// "23abc" => NaN it convert into not a number
// "Rohit" => NaN it convert into not a number
// true => it convert into 1
// false => it convert into 0
// null => into 0
// undefind => 0

// differences between var and let.
let value = 15;
var value1 = 12;
for (let i = 0; i < 1; i++) {
  // console.log(value);
  var value1 = 13;
  let value = 16;
  //   console.log(value1);
  //   console.log(value);
}
// console.log(value);
// console.log(value1);

// *************************** Operations *************************************
let randValue = 7;
let negValue = -randValue;
// console.log(negValue);
// console.log(2 ** 3);
//console.log("1" + 2);
// console.log("1" + 2 + 3);// if string datatype will come first then all values automatically converted into string.
// console.log(2 + 3 + "2");// if number datatype will come first then all values automatically converted into number and calculations will be done.

// ********************************* Memory ********************************************
// Stack Memory (All Primitive Data Type )
let userId = "rohit@123";
let anotherId = userId;
console.log(anotherId);
anotherId = "sandeep@123";
console.log(anotherId);
console.log(userId);

// Heap Memory (All Non-Primitive Data Type)
let myObject = {
  name: "Rohit",
  rollNo: 10621434,
  age: 21,
};

let anotherObject = myObject;
console.log(anotherObject.name);

anotherObject.name = "Sandeep";
console.log(myObject.name);
console.log(anotherObject.name);
