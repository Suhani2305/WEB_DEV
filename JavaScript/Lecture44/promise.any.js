function api1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("rejected 1");
        }, 5000);
    });
}

function api2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("rejected 2");
        }, 7000);
    });
}

let api3 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("rejected 3");
    }, 2000);
});

let x = Promise.any([api1(), api2(), api3])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err.errors);
    });


// The output will be "rejected 3" after 2 seconds, as api3 is the first to reject.
// If api3 were to resolve first, it would output the resolved value of api3.