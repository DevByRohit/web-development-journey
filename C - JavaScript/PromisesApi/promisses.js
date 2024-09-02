// Promises :- Promises in JavaScript are a powerful tool for managing asynchronous operations. They represent a value that may be available now, in the future, or never. Promises are essential for handling operations like fetching data from a server, reading files, or performing any asynchronous task without blocking the main thread.

// 1. What is a Promise?
// A Promise is an object representing the eventual completion or failure of an asynchronous operation. It provides a way to attach handlers to an asynchronous action's eventual success value or failure reason.
// Parameters:
// resolve: A function called when the asynchronous operation completes successfully.
// reject: A function called when the asynchronous operation fails.

// Syntax:
let promiseOne = new Promise((resolve, reject) => {
  // Asynchronous operation
});

// 2. Promise States
// A promise can be in one of the following three states:

// a) Pending: The initial state, neither fulfilled nor rejected.
// b) Fulfilled: The operation completed successfully, and the promise has a value.
// c) Rejected: The operation failed, and the promise has a reason for failure (an error).

// Once a promise is either fulfilled or rejected, it cannot transition to any other state.
let promiseTwo = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("Operation was successful");
  } else {
    reject("Operation failed");
  }
});

// 3. Using Promises
// Consuming Promises with .then()
// The .then() method is used to handle the fulfillment of a promise. It takes two arguments: a callback function for the fulfilled case and another for the rejected case (which is optional).
// Syntax
promiseTwo.then(
  (result) => {
    console.log(result); // "Operation was successful"
  },
  (error) => {
    console.log(error); // "Operation failed"
  }
);

// Chaining Promises
// Promises can be chained to perform a sequence of asynchronous operations. The .then() method returns a new promise, which allows for chaining.

let promiseThree = new Promise((resolve, reject) => {
  resolve(1);
});

promiseThree
  .then((result) => {
    console.log(result); // 1
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 2
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 4
  });

// Handling Errors with .catch()
// The .catch() method is used to handle errors in promises. It acts like a .then() method with only a rejection handler.

let promiseFour = new Promise((resolve, reject) => {
  reject("An error occurred");
});

promiseFour
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); // "An error occurred"
  });

// passing parameters to promise
let promiseFive = new Promise((resolve, reject) => {
  resolve({ firstName: "Rohit", lastName: "Ahirwar" });
});
promiseFive.then((result) => {
  console.log(result);
});

// Executing Code Regardless of Promise Outcome with .finally()
// The .finally() method executes code after the promise has been settled (either fulfilled or rejected). It is used for clean-up operations like closing a loading indicator, regardless of the promise’s outcome.

// Example:
let promiseSix = new Promise((resolve, reject) => {
  resolve("Success");
});

promiseSix
  .then((result) => {
    console.log(result); // "Success"
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise settled"); // Always runs
  });

// 4. Advanced Usage
// Async/Await
// async and await are syntactic sugar built on promises, making asynchronous code look and behave like synchronous code.
// Example:

let promiseSeven = new Promise((resolve, reject) => {
  let userLoggedIn = true;
  if (userLoggedIn) {
    resolve("User is logged in");
  } else {
    reject("User is not logged in");
  }
});

let handlePromiseWithAsyncAwait = async () => {
  try {
    let data = await promiseSeven;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

handlePromiseWithAsyncAwait();

// get data by requesting url try and catch method
// https://jsonplaceholder.typicode.com/users

let fetchData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};
// fetchData();

async function getAllUsers() {
  try {
    let originalData = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    let formatedData = await originalData.json();
    console.log(formatedData);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

// getAllUsers();

// get data by requesting url .then() and .catch() method
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((usersData) => {
    // console.log(usersData);
    console.log(usersData[0].address.geo);
  })
  .catch((error) => {
    console.log(error);
  });
