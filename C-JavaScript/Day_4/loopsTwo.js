// ["", "", ""]
// [{}, {}, {}]

let arr = [1, 2, 3, 4, 5, 6];
for (const element of arr) {
  //   console.log(element);
}

let string = "Rohit Ahirwar";
for (const char of string) {
  //   console.log(char);
}

let map = new Map();
map.set("name", "Rohit");
map.set("email", "rohit@gmail.com");
map.set("password", "rohit@123");

for (const [keys, values] of map) {
  //   console.log(`${keys}:- ${values}`);
}

let object = {
  js: "JavaScript",
  cpp: "C++",
  java: "Java",
  rb: "Ruby",
};

for (const key in object) {
  //   console.log(`${key}: ${object[key]}`);
}

let secondArray = ["js", "cpp", "java", "rb", "ruby", "html"];
for (const key in secondArray) {
  //   console.log(key + ": " + secondArray[key]);
}

secondArray.forEach(function (item) {
  //   console.log(item);
});

secondArray.forEach((items) => {
  //   console.log(items);
});

function printItems(items) {
  //   console.log(items);
}
secondArray.forEach(printItems);

// callback function extract multiple things from a array like values, indexs, whole array
secondArray.forEach((item, index, array) => {
  //   console.log(item, index, array);
});

let languages = [
  {
    languageName: "JavaScript",
    extention: ".js",
  },
  {
    languageName: "Java",
    extention: ".java",
  },
  {
    languageName: "Python",
    extention: ".py",
  },
];

languages.forEach((item) => {
  //   console.log(item.languageName);
});

// return values from array based on condition
let demoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let returnValues = demoArray.filter((elem) => elem > 5);
// console.log(returnValues);

let anotherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredArray = anotherArray.filter((element) => {
  return element > 5;
});
// console.log(filteredArray);

let newNums = [];
demoArray.forEach(function (elem) {
  if (elem > 5) {
    newNums.push(elem);
  }
});
// console.log(newNums);

let myNumbers = [1, 2, 3, 4, 5, 6, 7];
let newNumbers = myNumbers.map((num) => num + 10);
// console.log(newNumbers);

// chaining of methods with arrays
let chainingOfMethods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let chainArray = chainingOfMethods
  .map((elem) => elem * 10)
  .map((elem) => elem / 2)
  .filter((elem) => elem > 25);
// console.log(chainArray);

// reduce methods with arrays
let arrayOne = [1, 2, 3, 4];
let reduceArray = arrayOne.reduce((previousValue, currentValue) => {
  console.log(
    `previousValue: ${previousValue} and currentValue: ${currentValue}`
  );
  return previousValue + currentValue;
}, 0);
console.log(reduceArray);

