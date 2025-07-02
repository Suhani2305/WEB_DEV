function fun1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello!");
        }, 2000);
    });
}
function fun2(){
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve("World!");
        }, 5000);
    });
}
function fun3(){    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, World!");
        }, 4000);
    });
}

// let x = fun1();
// console.log(x); // This will log a Promise object

// let y = fun2();
// console.log(y); // This will also log a Promise object

// let z = fun3();
// console.log(z); // This will also log a Promise object


fun1().then(function(data) {
    console.log(data); // This will log "Hello, World!" after the promise is resolved
}).catch(function(error) {
    console.error("Error:", error);
});

fun2().then(function(data) {
    console.log(data); // This will log "Hello, World!" after the promise is resolved
}).catch(function(error) {
    console.error("Error:", error);
});


fun3().then(function(data) {
    console.log(data); // This will log "Hello, World!" after the promise is resolved
}).catch(function(error) {
    console.error("Error:", error);
});
