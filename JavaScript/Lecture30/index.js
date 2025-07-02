// function sum(a,b,c){
//     let total = a+b+c;
//     return total;
// }

// console.log(sum(10,20,30));


// function sum2(a, ...num){
//     let total = a;
//     for(let i=0; i<num.length; i++){
//         total += num[i];
//     }
//     return total;
// }

// console.log(sum2(10,20,30,40,50,60));


// let obj ={
//     title:"JavaScript",
//     tags:["JavaScript", "Programming", "Web Development"],
//     display: function(){
//         console.log(this.title);
//         console.log(this.tags);
//     }
// };
// // obj.display();
// // let {title, ...remaining} = obj;
// // console.log(title);
// // console.log(remaining);
// function obj2(title, tags, display){
//     console.log(title);
//     console.log(tags);  
// }
// obj2(obj);



// //rest operator : group of values
// //spread operator : spread the values/destructuring the values
// let arr = [10,20,30,40,50];
// let arr2 = [...arr, 60, 70, 80]; // spread operator
// console.log(arr2);




// //map , reduce, filter : map is used to iterate over an array and return a new array, reduce is used to reduce an array to a single value, filter is used to filter an array based on a condition


// // argument iss when we pass values to a function, call is when we call a function, apply is when we call a function with an array of arguments, bind is used to create a new function with a specific context
// let arr = [10,20,30,40,50];
// arr.forEach(function(val){
//     val = val * 2; // this will not change the original array
//     console.log(val);
// })

// // forEach: it is not a method of the array, it is a method of the object, it is used to iterate over an array and perform an action on each element, it does not return a new array, it returns undefined broo iskee andr hi print krwanaa pdegaa return nhi krwataa for Each method, 

// const hello = () =>{
//     console.log("Hello World");
// }
// hello(); // this will call the function and print "Hello World"

// const hello2 =(arr)=>{
//     console.log(arr);
// }
// hello2(arr);  
// const hello3 =(arr) => console.log(arr);
// hello3(arr); // this will call the function and print the array


// arr.forEach((val) => console.log(val * 2)); // this will call the function and print the array with each element multiplied by 2



arr = [10,20,30,40,50];
// // const newArr = arr.map(function(val){
// //     console.log(val * 2); // this will print each element multiplied by 2
// //     return val;
// // }); // this will return a new array with each element multiplied by 2

// // console.log(newArr); 

// // const newArr =  arr.map((val)=> console.log(val * 2));  
// // //agr isme tumhe return krna h to curly braces lgwane pdengee orrr print krne ke liye curly braces nhi lgwane pdegee

// // console.log(newArr); // this will return a new array with each element multiplied by 2, but since we are not returning anything, it will return undefined


// const newArr = arr.filter((val) => {
//     return val > 20; // this will filter the array and return a new array with elements greater than 20
// })
// console.log(newArr); // this will return a new array with elements greater than 20

// const newArr2 = arr.reduce((acc, val) => {
//     return acc + val; // this will reduce the array to a single value by adding all the elements
// }, 677688); // the second argument is the initial value of the accumulator
// console.log(newArr2); // this will return the sum of all the elements in the array




let val = [
    {
        name: "John",
        age: 30,
        city: "New York"

    },
    {
        name: "Jane",
        age: 25,
        city: "Los Angeles"
    },
    {
        name: "Mike",
        age: 35,
        city: "Chicago"
    },
    {
        name: "Sara",
        age: 28,
        city: "Miami"
    },
    {
        name: "Tom",
        age: 40,
        city: "Seattle"
    },
    {
        name: "Anna",
        age: 22,
        city: "San Francisco"
    }
];
const newArr  = val.filter((val) => {
    return val.age > 30;  
})
console.log(newArr); 


const newArr2 = val.map((val) => {
    return {
        name: val.name,
        age: val.age + 5, // incrementing age by 5
        city: val.city
    };
})
console.log(newArr2); // this will return a new array with each element's age incremented by 5

const newArr3 = val.reduce((acc, val) => {
    acc[val.name] = val.age; // creating an object with name as key and age as value
    return acc;
}, {}); // the second argument is the initial value of the accumulator, which is an empty object
console.log(newArr3); // this will return an object with name as key and age as value

// chaining  of map, filter , reduce
const result = val
    .filter((val) => val.age > 30) // filter out people older than 30
    .map((val) => ({ name: val.name, age: val.age + 5 })) // increment age by 5
    .reduce((acc, val) => {
        acc[val.name] = val.age; // create an object with name as key and age as value
        return acc;
    }, {}); // initial value is an empty object
console.log(result); // this will return an object with name as key and age as value for people older than 30, with age incremented by 5