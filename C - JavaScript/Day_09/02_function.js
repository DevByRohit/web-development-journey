// Pass an object as an argument to the function
let project = {
  name: "Rohit",
  id: 123,
  roll: 10621434,
  section: "A",
  subjects: ["English", "Physics", "Chemistry", "Mathematics"],
};

function changeObjectDetails(obj) {
  obj.name = "Sandeep";
}

// 1st way to pass object as an argument
changeObjectDetails(project);
console.log(project.name);

// 2nd way to pass object as an argument
function printObjectDetails(obj) {
  for (let keys in obj) {
    console.log(`${keys}: ${obj[keys]}`);
  }
}
printObjectDetails({
  name: "Rohit",
  id: 123,
  roll: 10621434,
  section: "A",
  subjects: ["English", "Physics", "Chemistry", "Mathematics"],
});

// Pass an Array as an argument to the function
let students = ["Rohit", "Sandeep", "Rajesh", "Priya"];
function changeStudents(arr) {
  arr[0] = "Manish";
}

// 1st way to pass Array as an argument
changeStudents(students);
console.log(students[0]);

// 2nd way to pass Array as an argument
function printStudents(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printStudents(["Rohit", "Sandeep", "Rajesh", "Suraj"]);

// basic functions
function basicFunction(num) {
  return num + 1;
}
console.log(basicFunction(5)); // 6

holdFunction(5);
// function expression
let holdFunction = function (num) {
  return num * 2;
};