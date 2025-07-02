let api1 =  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello!");
        }, 2000);
    });

let api2 = new Promise((resolve, reject) => {
        setInterval(() => {
            resolve("World!");
        }, 5000);
    });
let api3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Hello, World!");
        }, 4000);
    });


let x = Promise.all([api1, api2, api3]).then(data => {
    console.log(data); // This will log ["Hello!", "World!", "Hello, World!"] after all promises are resolved
}).catch(error => {
    console.error("Error:", error);
});

// time taken by x
// let startTime = Date.now();
// x.then(() => {
//     let endTime = Date.now();
//     console.log("Total time taken:", endTime - startTime, "ms");
// }).catch(error => {
//     console.error("Error:", error);
// });

// time taken by x in min
// let startTime = Date.now();
// x.then(() => {  
//     let endTime = Date.now();
//     console.log("Total time taken:", (endTime - startTime) / 60000, "min");
// }).catch(error => {
//     console.error("Error:", error);
// });


