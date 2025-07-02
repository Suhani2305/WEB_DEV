// var name = "Suhani";
// for(let i =0;i< name.length; i++){
//     console.log(name[i]);
// }


// console.log(a);
// var a = 10;


 
// function fun(){
//     console.log("Hello World");
//     return "Hello World";   // when u does not return a value and in function calling u print itt then iss showing indefined

// }
// console.log(fun());



// // console.log(arrowFun());   //Error: Cannot access 'arrowFun' before initialization
// const arrowFun = () => {
//     console.log("Hello World");
//     return "Hello World";   // when u does not return a value and in function calling u print itt then iss showing indefined

// }
// // console.log(arrowFun());


// function one(para, fn){
//     console.log(fn);
//     console.log("Inside one function");
//     console.log(para);
//     fn();
//     console.log("Function one has finished executing");
// }

// function two(){
//     console.log("Inside two function");
// }
// one("Hello", two);  // Passing function two as a callback to function one



// lexical scoping: is a concept in JavaScript where a function can access variables from its parent scope, even after the parent function has finished executing.


//closer: is the combination of a function and the lexical environment within which that function was declared. It allows the function to remember the variables from its outer scope even after that outer scope has finished executing.



// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

function makeFunc(){
    const name = "Mozilla"; // name is a local variable created by makeFunc
    function displayName() {
        // displayName() is the inner function, that forms a closure
        console.log(name); // use variable declared in the parent function
        console.log(num2); // accessing num2 from the outer scope
    }
    const num2 = 45;
    return displayName; // return the inner function
}
const myFunc = makeFunc(); // myFunc is now a function that has access to the name variable
myFunc(); // "Mozilla" will be printed, along with 45

// makeFunc(); // sirf run kar ke chhod deta
