console.log("Hello, World!");
console.log("This is a JavaScript file.");


// in let we only update the value of the variable
let x;  // declaration of variable x
x = 10;  // reassigning value to x
let y = 20;   // declaration of variable y


//in var we can update and redeclare the variable
var a = 30;  // declaration of variable a
var a = 40;  // redeclaring variable a
console.log(a);  // Output: 40

// in const we cannot update or redeclare the variable
const b = 50;  // declaration of variable b

// b = 60;  // This will throw an error because we cannot reassign a const variable
console.log(b);  // Output: 50