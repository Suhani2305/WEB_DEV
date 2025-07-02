function api1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("rejected");
        }, 5000);
    });
}

function api2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("api2");
        }, 7000);
    });
}

let api3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("api3");
    }, 9000);
});

let x = Promise.race([api1(), api2(), api3])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });


// The output will be "rejected" after 5 seconds, as api1 is the first to reject.
// If api1 were to resolve first, it would output "api2" after 7