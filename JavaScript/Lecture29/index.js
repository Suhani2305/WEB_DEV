// let arr = [1, 2, 3, 4, 5];
// console.log(arr);  
// console.log(arr[3]+900);
// console.log(arr.length);
// console.log(typeof(arr));  // Output: object
// console.log(arr instanceof Array);  // Output: true


// let random = [1,"hello","sir",true,undefined,null,NaN,Symbol("codeThread"),BigInt(123)];
// console.log(random);
// console.log(typeof(random[0]));  // Output: object


let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.push([20,30,40]));  // Adds 6 to the end of the array
// console.log(arr);  // Output: [1, 2, 3, 4, 5, 6]
// console.log(arr.pop());  // Removes the last element (6) from the array
// console.log(arr);  // Output: [1, 2, 3, 4, 5]

// let arr2 = [10, 20, 30];
// console.log(arr.concat(arr2));  // Combines arr and arr2 into a new array
// console.log(arr.slice(1, 3));  // Extracts elements from index 1 to 2 (not including index 3)
// console.log(arr.splice(1, 2));  // Removes 2 elements starting from index 1

// let joined = arr.join("");
// console.log(joined);  // Joins the elements of arr into a string without any separator

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);  // Prints each element of the array
// }


// const obj = {
//     name: "CodeThread",
//     age: 3,
//     isActive: true,
//     courses: ["JavaScript", "Python", "Java"],
// }

// console.log(obj);
// console.log(typeof obj);  // Output: object
// // Accessing object properties
// console.log(obj.name);  // Output: CodeThread
// console.log(obj["age"]);  // Output: 3
// // Adding a new property
// obj.location = "Online";
// console.log(obj.location);  // Output: Online

// // Modifying an existing property
// obj.age = 4;
// console.log(obj.age);  // Output: 4
// console.log(obj);

// for(const i of arr) {
//     console.log(i);  // Prints each element of the array
// }

// // deletion property
// delete obj.age;  // Deletes the 'age' property from the object
// console.log(obj);  // Output: { name: 'CodeThread', isActive: true, courses: [ 'JavaScript', 'Python', 'Java' ], location: 'Online' }


let str = "Hello, World!";
console.log(`String: ${str}`);

//SPREAD OPERATOR
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
console.log(`Combined Array: ${combinedArr}`);  // Output: [1, 2, 3, 4, 5, 6]

// Object Spread Operator
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObj = { ...obj1, ...obj2 };
console.log(`Combined Object:`, combinedObj);  // Output: { a: 1, b: 2, c: 3, d: 4 }

// Function Spread Operator
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(`Sum: ${sum(...arr1)}`);  // Output: Sum: 6


//REST OPERATOR
function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}
console.log(`Multiplied Numbers: ${multiply(2, 1, 2, 3, 4)}`);  // Output: [2, 4, 6, 8]
