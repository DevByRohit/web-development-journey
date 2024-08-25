// Strings:- Strings in JavaScript are a fundamental data type used to represent and manipulate text. A string is essentially a sequence of characters enclosed in single ('Ram'), double ("Ram"), or backticks (`Ram`). Let's dive into the details of how strings work in JavaScript, covering their creation, manipulation, and the various methods available.

// 1. Creation of strings:- In JavaScript, there are several ways to create strings. Each method has its own use cases and benefits. Let's go over the different methods.

// a) Using Single Quotes:- You can create a string by enclosing it in single quotes ('Ram').
let singleQuoteString = "Hello, World!";

// b) Using Double Quotes:- Strings can also be created using double quotes ("Ram"). This is functionally the same as using single quotes.
let doubleQuoteString = "Hello, World!";

// c) Using Backticks (Template Literals):- Template literals allow for multi-line strings and embedding expressions using `${}`. They are enclosed in backticks (`Ram`).
let names = "Alice";
let templateLiteralString = `Hello, ${names}! Welcome to JavaScript.`;

// d) Using the `String` Constructor:- Strings can be created using the `String` constructor. This method can be used to convert other types into strings.
let stringObject = new String("Hello, World!");
let primitiveString = String(12345); // "12345"

// * It's important to note that using the "new String()" creates an "object", not a "primitive string". This distinction can have implications in comparisons and type checking.

// Example:
let primitive = "Hello";
let objectString = new String("Hello");

console.log(typeof primitive); // "string"
console.log(typeof objectString); // "object"

console.log(primitive === objectString); // false
console.log(primitive == objectString); // true

// 2. String Properties:
// Length:- The "length" property of a string returns the number of characters in the string.
let text = "JavaScript";
console.log(text.length); // 10

// 3. String Methods:- JavaScript provides a plethora of built-in methods to manipulate strings. Here are some of the most commonly used methods:

// 1. charAt(index):- Returns the character at the specified index.
let str = "JavaScript";
console.log(str.charAt(0)); // "J"

// 2. charCodeAt(index):- Returns the Unicode of the character at the specified index.
console.log(str.charCodeAt(0)); // 74

// 3. concat(...strings):- Concatenates the specified strings to the calling string and returns a new string.
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"

// 4. includes(substring, start):- Determines whether the string contains the specified substring, returning "true" or "false".
let sentence = "The quick brown fox";
console.log(sentence.includes("quick")); // true

// 5. endsWith(substring, length):- Determines if the string ends with the specified substring.
let filename = "report.pdf";
console.log(filename.endsWith(".pdf")); // true

// 6. indexOf(substring, fromIndex):- Returns the index of the first occurrence of the specified substring.
let text2 = "JavaScript";
console.log(text2.indexOf("Script")); // 4

// 7. lastIndexOf(substring, fromIndex):- Returns the index of the last occurrence of the specified substring.
let sentence2 = "The quick brown fox jumps over the lazy dog";
console.log(sentence2.lastIndexOf("the")); // 31

// 8. padStart(targetLength, padString):- Pads the current string from the start to the target length.
let str_3 = "5";
console.log(str_3.padStart(3, "0")); // "005"

// 9. padEnd(targetLength, padString):- Pads the current string from the end to the target length.
let str_4 = "5";
console.log(str_4.padEnd(3, "0")); // "500"

// 10. repeat(count):- Returns a new string with a specified number of copies of the original string.
let word = "Hello";
console.log(word.repeat(3)); // "HelloHelloHello"

// 11. replace(searchValue, newValue) :- Replaces the first occurrence of a substring with a new substring.
let sentence_1 = "The quick brown fox jumps over the lazy dog";
let newSentence = sentence_1.replace("fox", "cat");
console.log(newSentence); // "The quick brown cat jumps over the lazy dog"

// 12. replaceAll(searchValue, newValue):- Replaces all occurrences of a substring with a new substring.

let sentence_2 = "The quick brown fox jumps over the fox";
let newSentence_1 = sentence_2.replaceAll("fox", "cat");
console.log(newSentence_1); // "The quick brown cat jumps over the cat"

// 13. slice(start, end):- Extracts a section of a string and returns it as a new string.
let sentence_3 = "The quick brown fox";
console.log(sentence_3.slice(4, 9)); // "quick"

// 14. split(separator, limit):- Splits a string into an array of substrings based on a specified separator.

let sentence_4 = "The,quick,brown,fox";
let words = sentence_4.split(",");
console.log(words); // ["The", "quick", "brown", "fox"]

// 15. startsWith(substring, length):- Determines if the string starts with the specified substring.
let sentence_5 = "The quick brown fox";
console.log(sentence_5.startsWith("The")); // true