// Dates
let date = new Date();
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString()); // it returns whole time 
console.log(typeof date);

let anotherDate = new Date(2024, 0, 7);
console.log(anotherDate.toDateString());

let dateWithTime = new Date(2024, 0, 7, 5, 3);
console.log(dateWithTime.toLocaleString());

let dateInDDYYMM = new Date("2024-03-8");
console.log(dateInDDYYMM.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // in milliseconds

console.log(date.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});
