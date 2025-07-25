function api1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("api1");
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
        rej("rejected");
    }, 2000);
});

let x = Promise.allSettled([api1(), api2(), api3])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });


// The output will be an array of objects representing the results of each promise: