// async function fun1(){
//     return "Hello";
// }
// let x = fun1();
// console.log(x); // This will log a Promise object


// function fun2() {
//     // return Promise.resolve("Hello, World!");
//     return new Promise(function(resolve, reject) {
//         resolve("Hello, World!");
//     });
// }

// // let y = fun2();
// // console.log(y); // This will also log a Promise object
// fun2().then(function(data) {
//     console.log(data); // This will log "Hello, World!" after the promise is resolved
// }).catch(function(error) {
//     console.error("Error:", error);
// });


// function pro(){
//     return new Promise(function pro1(resolve, reject) {
//         reject("Hello, World!");
//     });
// }
// async function fun3() {
//     let data = await pro(); // This will wait for the promise to resolve
//     console.log(data); // This will log "Hello, World!" after the promise is resolved
//     return data;
// }

// fun3().then(function(data) {
//     console.log("Data from fun3:", data);
// }).catch(function(error) {
//     console.error("Error:", error);
// });



function searchFood(item) {
    return new Promise(function fun1(res, rej) {
        console.log("searching start for", item, ".....");
        setTimeout(function timer1() {
            let data = `list of ${item}`;
            res({ item, data });
        }, 3000);
    });
}

function orderFood(item) {
    return new Promise(function fun2(res, rej) {
        console.log("Select ", item);
        setTimeout(function timer2() {
            let id = Math.floor(Math.random() * 999999);
            console.log("order created successfully with id no.", id);
            res({ id, item });
        }, 4000);
    });
}

function payment(item, id) {
    return new Promise(function fun3(res, rej) {
        console.log(`payment starting for ${item} with id no.`, id);
        setTimeout(function timer3() {
            let status = true;
            // console.log("Payment successfull with status", status);
            res(status);
        }, 6000);
    });
}

async function foodOrder(item) {
    let res1 = await searchFood(item);
    let res2 = await orderFood(res1.item);
    let res3 = await payment(res2.item, res2.id);
    return res3;
    console.log("Payment successfull with status", res3);
}

foodOrder("kadai panner").then((status) => {
    console.log("Payment successfull with status", status);
});

