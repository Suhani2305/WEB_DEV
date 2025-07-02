// //promise: it is a object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// const promise1 = new Promise(function fun1(resolve, reject) {
//     // console.log("inside promise");
//     // return "hello";  // This will not be logged immediately
//     resolve("hello"); // This will resolve the promise with the value "hello"
//     // reject("Error occurred"); // This will reject the promise with an error message
//     // // resolve: ye as a return k trh kaam krta hai prr return nhi kartaa



// });
// console.log(promise1); // This will log a Promise object

// //how to consume a promise
// promise1.then(function fun2(data) {
//     console.log("Promise resolved with data: " + data);
// });
// promise1.catch(function fun3(error) {
//     console.log("Promise rejected with error: " + error);
// });



// function isData(item) {
//     return new Promise(function (resolve, reject) {
//         console.log("Checking data for: " + item);
//         setTimeout(function timer() {
//             if (item === "pizza") {
//                 resolve(`Data for ${item} found`);  // ye task queue me chala jaega
//             } else {
//                 reject(`Data for ${item} not found`);
//             }
//         }, 2000);
//     });
// }

// // Consuming the promise
// isData("pizza")
//     .then(function (data) {
//         console.log(data);   //ye microtask queue me chala jaega
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// isData("burger")
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// // This code defines a function `isData` that returns a promise.
// // The promise resolves if the item is "pizza" and rejects otherwise.
// // The function is then called with two different items, "pizza" and "burger",
// // demonstrating how to handle both resolved and rejected promises using `.then()` and `.catch()`.
// // The output will show the result of checking for "pizza" and "burger" after a delay of 2 seconds each.
// // This is a simple example of how promises work in JavaScript.
// // The `isData` function simulates an asynchronous operation that checks for data related to a given item.
// // The promise is resolved with a success message if the item is "pizza" and rejected with an error message otherwise.
// // The `.then()` method is used to handle the resolved value, while the `.catch()` method handles any errors.
// // This code demonstrates the use of promises in JavaScript to handle asynchronous operations.


// // Note: The `setTimeout` function is used to simulate an asynchronous operation that takes 2 seconds to complete.


// const x = Promise.resolve(5); // This creates a resolved promise with the value 5
// console.log("end");
// console.log(x); // This will log the promise object
// // console.log("end");

function isData(item) {
    return new Promise((resolve, reject) => {
        if (item) {
            resolve("promise resolve");
        } else {
            reject("data is empty");
        }
    });
}

isData("rbgdfgc")
    .then((result) => {
        console.log(result);
        return "hello from .then()";
    })
    .then((next) => {
        console.log(next);
        return "nishant";
    })
    .then((final) => {
        console.log("data", final);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
