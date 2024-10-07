// ++++++++++++++++++++++++++++++++ All about Array +++++++++++++++++++++++++++

// Arrays:- Arrays are a fundamental part of JavaScript, providing a way to store multiple values in a single variable. They are versatile and come with a wide range of methods for manipulation.

// # Characteristics of Arrays in JavaScript

// 1. Dynamic Size: Arrays in JavaScript are dynamic, meaning their size can grow or shrink as needed.You can add or remove elements without specifying the initial size.

// 2. Heterogeneous Elements: JavaScript arrays can store elements of different types (e.g., numbers, strings, objects).
let mixedArray = [1, "two", { key: "value" }, [3, 4]];

// 3. Zero-Based Indexing:
// a) Array indices start at 0.
// b) The first element is accessed with index 0, the second with index 1, and so on.

// 4. Array-Like Objects:- Arrays in JavaScript are essentially specialized objects with integer-based keys and a length property.
let arr = [10, 20, 30];
console.log(typeof arr); // "object"

// 5. Prototype-Based Methods:- Arrays inherit from Array.prototype, providing a range of built-in methods for manipulation.
let array = [1, 2, 3];
console.log(arr.push(4)); // 4 (new length of array)

// 6. Sparse Arrays:- Arrays can be sparse, meaning they can have "holes" where indices are skipped.
let sparseArray = [];
sparseArray[5] = "five";
console.log(sparseArray); // [ <5 empty items>, 'five' ]

// 7. Mutable:- Arrays are mutable, meaning elements can be changed or updated after the array is created.
let arrayOne = [1, 2, 3];
arrayOne[1] = 20;
console.log(arrayOne); // [1, 20, 3]

// 8. Length Property:-
// a) The length property of an array is dynamic and reflects the number of elements in the array.
// b) It can also be manually set to truncate or extend the array.
let arrayTwo = [1, 2, 3];
arrayTwo.length = 2;
console.log(arrayTwo); // [1, 2]

// +++++++++++++++++++++ Array Creation and It's Methods+++++++++++++++++++++++++
// 1. Creating Arrays:
// a) Using Array Literals:- The most common way to create arrays is using array literals, which are simply a comma-separated list of values enclosed in square brackets.
let fruitsOne = ["Apple", "Banana", "Cherry"];

// b) Using the Array Constructor:- Arrays can also be created using the Array constructor.
let numbers = new Array(10); // Creates an array with 10 undefined elements
let colors = new Array("Red", "Green", "Blue"); // Creates an array with three elements

// 2. Accessing Array Elements:- Array elements are accessed using their index, which starts at 0.
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"

// 3. Modifying Arrays:
// a) Changing Elements:- You can change an element by accessing its index and assigning a new value.
fruits[1] = "Blueberry";
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]

// b) Adding Elements:- You can add elements using the push method, which adds one or more elements to the end of the array.
fruits.push("Date");
console.log(fruits); // ["Apple", "Blueberry", "Cherry", "Date"]

// c) Removing Elements:- You can remove the last element using the pop method.
let lastFruit = fruits.pop();
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]
console.log(lastFruit); // "Date"

// ++++++++++++++++++++++++++++++ Common Array Methods ++++++++++++++++++++++++++

// 1. Length Property:- The length property of an array returns the number of elements in the array.
let fruitsTwo = ["Apple", "Blueberry", "Cherry"];
console.log(fruitsTwo.length); // 3

// 1. push:- Adds one or more elements to the end of the array.
fruitsTwo.push("Elderberry", "Fig");
console.log(fruitsTwo); // ["Apple", "Blueberry", "Cherry", "Elderberry", "Fig"]

// 2. pop:- Removes the last element from the array and returns it.
let last = fruitsTwo.pop();
console.log(fruitsTwo); // ["Apple", "Blueberry", "Cherry", "Elderberry"]
console.log(last); // "Fig"

// 3. shift:- Removes the first element from the array and returns it.
let first = fruitsTwo.shift();
console.log(fruitsTwo); // ["Blueberry", "Cherry", "Elderberry"]
console.log(first); // "Apple"

// 4. unshift:- Adds one or more elements to the beginning of the array.
fruitsTwo.unshift("Apricot", "Blackberry");
console.log(fruitsTwo); // ["Apricot", "Blackberry", "Blueberry", "Cherry", "Elderberry"]

// 5. concat:- Merges two or more arrays and returns a new array.
let moreFruits = ["Grape", "Honeydew"];
let allFruits = fruitsTwo.concat(moreFruits);
console.log(allFruits); // ["Apricot", "Blackberry", "Blueberry", "Cherry", "Elderberry", "Grape", "Honeydew"]

// 6. slice:- Returns a shallow copy of a portion of an array into a new array.
let someFruits = allFruits.slice(1, 4);
console.log(someFruits); // ["Blackberry", "Blueberry", "Cherry"]

// 7. splice:- Adds/removes items to/from an array and returns the removed items.
allFruits.splice(2, 1, "Blueberry", "Cantaloupe");
console.log(allFruits); // ["Apricot", "Blackberry", "Blueberry", "Cantaloupe", "Cherry", "Elderberry", "Grape", "Honeydew"]

// 8. indexOf:- Returns the first index at which a given element can be found, or -1 if it is not present.
console.log(allFruits.indexOf("Cherry")); // 4
console.log(allFruits.indexOf("Pineapple")); // -1

// 9. lastIndexOf:- Returns the last index at which a given element can be found, or -1 if it is not present.
console.log(allFruits.lastIndexOf("Cherry")); // 4

// 10. forEach:- Executes a provided function once for each array element.
allFruits.forEach(function (fruit) {
  console.log(fruit);
});

// 11. map:- Creates a new array with the results of calling a provided function on every element in the calling array.
let upperCaseFruits = allFruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log(upperCaseFruits); // ["APRICOT", "BLACKBERRY", "BLUEBERRY", "CANTALOUPE", "CHERRY", "ELDERBERRY", "GRAPE", "HONEYDEW"]

// 12. filter:- Creates a new array with all elements that pass the test implemented by the provided function.
let shortNamedFruits = allFruits.filter(function (fruit) {
  return fruit.length < 6;
});
console.log(shortNamedFruits); // ["Grape"]

// 13. reduce:- Executes a reducer function on each element of the array, resulting in a single output value.
let totalLength = allFruits.reduce(function (accumulator, fruit) {
  return accumulator + fruit.length;
}, 0);
console.log(totalLength); // 65

// 14. some:- Tests whether at least one element in the array passes the test implemented by the provided function.
let hasShortNamedFruit = allFruits.some(function (fruit) {
  return fruit.length <= 6;
});
console.log(hasShortNamedFruit); // true

// 15. every:- Tests whether all elements in the array pass the test implemented by the provided function.
let allLongNamedFruits = allFruits.every(function (fruit) {
  return fruit.length > 6;
});
console.log(allLongNamedFruits); // false

// 16. find:- Returns the value of the first element in the array that satisfies the provided testing function.
let foundFruit = allFruits.find(function (fruit) {
  return fruit.length > 6;
});
console.log(foundFruit); // "Apricot"

// 17. findIndex:- Returns the index of the first element in the array that satisfies the provided testing function.
let foundIndex = allFruits.findIndex(function (fruit) {
  return fruit.length > 6;
});
console.log(foundIndex); // 0

// 18. sort:- Sorts the elements of an array in place and returns the sorted array.
let sortedFruits = allFruits.sort();
console.log(sortedFruits); // ["Apricot", "Blackberry", "Blueberry", "Cantaloupe", "Cherry", "Elderberry", "Grape", "Honeydew"]

// 19. reverse:- Reverses the order of the elements in an array in place.
let reversedFruits = allFruits.reverse();
console.log(reversedFruits);

// 20. includes:- Tests whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(allFruits.includes("Apricot"));

// 21. join:- Joins the elements of an array in place and returns the joined array as a string representation of the array.
let joinedFruits = allFruits.join(", ");
console.log(joinedFruits); // Apricot, Blackberry, Blueberry, Cantaloupe, Cherry, Elderberry, Grape, Honeydew

