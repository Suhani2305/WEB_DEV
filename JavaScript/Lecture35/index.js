let a =2;
let b ="3";
let c = a + b; // JavaScript will convert the number to a string and concatenate them
console.log(c); // Output: "23"
console.log(typeof c); // Output: "string"

console.log(9+5+"8" + 2 + 1); // Output: "14821"

console.log(7 + null);
console.log("7"+null); // Output: "7null"
console.log(7 + undefined); // Output: NaN
console.log("7" + undefined); // Output: "7undefined"
console.log(7 + true); // Output: 8
console.log("7" + true); // Output: "7true"
console.log(7 + false); // Output: 7
console.log("7" + false); // Output: "7false"
console.log(5 -"56"); // Output: -51
console.log("5" - "56"); // Output: -51
console.log("hello" - 4); // Output: NaN
console.log("hello" - "4"); // Output: NaN
console.log([] - 4); // Output: -4
console.log("5" - []); // Output: 5
console.log("5" - ""); // Output: 5



//ABSTRACT OPERATION : langugae interally 