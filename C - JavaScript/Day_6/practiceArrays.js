let marval_heros = ["Thor", "Iron-man", "Captain-america"];
let dc_heros = ["Super-man", "Flash", "Bat-man"];

// We can push elements into the array but is not good practice.
/*
marval_heros.push(dc_heros);
console.log(marval_heros);
console.log(marval_heros[3][0]);
*/

// We can use concat method to merge two arrays it will be good practice.
let all_heros = marval_heros.concat(dc_heros);
console.log(all_heros);

// We can also use spread method to merge two arrays it is alternative to concatenation.
let allNewHeros = [...marval_heros, ...dc_heros];
console.log(allNewHeros);

let newArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11], 12], 13];

// We can use flat() method to flatten the array.
let usableArray = newArray.flat(2); // Infinity keyword can be used instead of depth number.
console.log(usableArray);

// We can use isArray() method to check if the passed value is an array.
console.log(Array.isArray("Rohit"));

// We can use Array.from() method to convert a string into an array.
console.log(Array.from("Rohit"));

// Array.from() can not convert a object into an array we have to tell them to convert it's values or keys into arrays. Ohter wise it will return the empty array
console.log(Array.from({ name: "Rohit", roll: 10621434 })); // Interesting case

// We can use Array.of() method to create an array with given variable's values.
let score1 = 10;
let score2 = 20;
let score3 = 30;
console.log(Array.of(score1, score2, score3));