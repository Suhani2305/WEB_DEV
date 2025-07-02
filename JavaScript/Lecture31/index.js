// scope : {}
//types: global, function, block
// global scope: Its is the outermost scope, variables declared outside of any function or block are in the global scope.
// function scope: Variables declared within a function are in the function scope, and they are not accessible outside that function.
// block scope: Variables declared within a block (enclosed by curly braces {}) are in the block scope, and they are not accessible outside that block.


// {
//     var x = 10; // block scope variable
//     console.log("Inside Block Scope:", x);
// }
// console.log("Outside Global Scope:", x); // undefined, x is not accessible here

// //let is block scoped, var is global scoped
// // const is block scoped, var is global scoped

// var y = 20; // global scope variable
// function myFunction() {
//     var z = 30; // function scope variable
//     console.log("Inside Function Scope:", z);
// }
// myFunction(); // this will print 30
// console.log(y); // undefined, z is not accessible here



function heelo1(){
    const channelName = "CodeThread"
    console.log("inside function")
    
    function helllo2 () {
        const naam  = "Nishant"
        console.log(channelName)

        {
            console.log(naam)
        }
    }

    
    helllo2()
    
}
heelo1()
