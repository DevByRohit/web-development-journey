// Object De-Structure
let course = {
  courseName: "Web Development",
  duration: "4 hours",
  instructor: "Rohit",
  students: 30,
  subjects: ["HTML", "CSS", "JavaScript"],
  price: 999,
};

// 1. first way to access the value of object
console.log(course.instructor);

// 2. second way to access the value of object
let { courseName } = course;
console.log(courseName);

// 3. we can also make the short name of the object keys
let { courseName: Course } = course;
console.log(Course);

let {courseName: caurse, duration, instructor} = course;
console.log(caurse);
console.log(duration);
console.log(instructor);

