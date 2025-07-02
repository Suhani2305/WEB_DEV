// function totalSum(a,b,c){
//     let sum = a+b+c;
//     console.log("The total sum is: " + sum);

// }

// totalSum(5, 10, 15);

// function totalSum(a,b,c,name){
//     let sum = a+b+c;
//     console.log("The total sum is: " + sum);
//     console.log("The name is: " + name);

// }

// totalSum(5, 10, 15., "John Doe");


// let a = 2000;
// console.log(a.toPrecision(2));  

// let num = new Number(10);
// console.log(typeof num);  // Output: object

// let str = "Hello, World!";
// console.log(typeof str);  // Output: string
// console.log(str);
// console.log(str.replace("World", "CodeThread"));  // Output: Hello, CodeThread!
// console.log(str.split(" "));  // Output: [ 'Hello', 'World!' ]
// console.log(str.toUpperCase());  // Output: HELLO, WORLD!
// console.log(str.toLowerCase());  // Output: hello, world!
// console.log(str.length);  // Output: 13
// console.log(str.charAt(0));  // Output: H
// console.log(str.indexOf("World"));  // Output: 7
// console.log(str.lastIndexOf("o"));  // Output: 8
// console.log(str.includes("World"));  // Output: true
// console.log(str.startsWith("Hello"));  // Output: true
// console.log(str.endsWith("!"));  // Output: true
// console.log(str.trim());  // Output: Hello, World!
// console.log(str.slice(0, 5));  // Output: Hello
// console.log(str.substring(0, 5));  // Output: Hello
// console.log(str.replace(/World/g, "CodeThread"));  // Output: Hello, CodeThread!
// console.log(str.search("World"));  // Output: 7
// console.log(str.match(/o/g));  // Output: [ 'o', 'o' ]
// console.log(str.concat(" How are you?"));  // Output: Hello, World! How are you?
// console.log(str.split(" "));  // Output: [ 'Hello,', 'World!' ]
// console.log(str.localeCompare("Hello, World!"));  // Output: 0 (indicating they are equal)
// console.log(str.localeCompare("Hello, CodeThread!"));  // Output: -1 (indicating "Hello, CodeThread!" is greater)
// console.log(str.localeCompare("Hello, World!"));  // Output: 0 (indicating they are equal)



// let randomNum = Math.floor(Math.random() * 10) ;  // Random number between 1 and 100
// console.log(randomNum);
// console.log(Math.random());  // Random number between 0 and 1
// console.log(Math.PI);  // Output: 3.141592653589793
// console.log(Math.abs(-5));  // Output: 5
// console.log(Math.ceil(4.2));  // Output: 5
// console.log(Math.floor(4.8));  // Output: 4
// console.log(Math.round(4.5));  // Output: 5
// console.log(Math.max(1, 2, 3, 4, 5));  // Output: 5
// console.log(Math.min(1, 2, 3, 4, 5));  // Output: 1
// console.log(Math.pow(2, 3));  // Output: 8 (2 raised to the power of 3)
// console.log(Math.sqrt(16));  // Output: 4 (square root of 16)
// console.log(Math.log(10));  // Output: 2.302585092994046 (natural logarithm of 10)
// console.log(Math.exp(1));  // Output: 2.718281828459045 (e raised to the power of 1)
// console.log(Math.sin(Math.PI / 2));  // Output: 1 (sine of 90 degrees)
// console.log(Math.cos(0));  // Output: 1 (cosine of 0 degrees)
// console.log(Math.tan(Math.PI / 4));  // Output: 1 (tangent of 45 degrees)
// console.log(Math.random() * 100);  // Random number between 0 and 100
// console.log(Math.floor(Math.random() * 100));  // Random integer between 0 and 99
// console.log(Math.floor(Math.random() * 100) + 1);  // Random integer between 1 and 100



// date and time operations
let currentDate = new Date();
console.log(currentDate);  // Current date and time
console.log(currentDate.getFullYear());  // Current year
console.log(currentDate.getMonth());  // Current month (0-11, where 0 is January)
console.log(currentDate.getDate());  // Current day of the month (1-31)
console.log(currentDate.getDay());  // Current day of the week (0-6, where 0 is Sunday)
console.log(currentDate.getHours());  // Current hour (0-23)
console.log(currentDate.getMinutes());  // Current minutes (0-59)
console.log(currentDate.getSeconds());  // Current seconds (0-59)
console.log(currentDate.getMilliseconds());  // Current milliseconds (0-999)
console.log(currentDate.toISOString());  // ISO string representation of the date
console.log(currentDate.toLocaleDateString());  // Local date string representation
console.log(currentDate.toLocaleTimeString());  // Local time string representation
console.log(currentDate.toString());  // String representation of the date
console.log(currentDate.getTime());  // Time in milliseconds since January 1, 1970  
console.log(new Date(2023, 9, 1));  // Create a new date (October 1, 2023)
console.log(new Date("2023-10-01T00:00:00Z"));  // Create a date from a string
console.log(currentDate.setFullYear(2025));  // Set the year to 2025
console.log(currentDate.setMonth(11));  // Set the month to December (11)