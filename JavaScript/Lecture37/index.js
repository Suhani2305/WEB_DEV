// const btn = document.getElementById("btn");
// btn.onClick=() => {
//     console.log("Button Clicked");
// }


// //evevnt listener
// btn.addEventListener("click", () => {
//     console.log("Button Clicked");
// });


// const body = document.getElementById("body");
// btn.addEventListener("click", (e) => {
//     btn.innerText = "Clicked";
//     console.log("Button Clicked");
//     console.log(e);
//     console.log(e.target);
//     e.target.style.backgroundColor = "red";
//     e.target.style.color = "white";
//     e.target.style.border = "1px solid black";
//     e.target.style.borderRadius = "5px";
//     // body.style.backgroundColor = "black";
//     // body.style.color = "white";

// });


// btn.addEventListener("click", (e) =>{
//         const isChanged = confirm("Do you want to change the button style?");
//         if (isChanged) {
//             e.target.style.backgroundColor = "red";
//             e.target.style.color = "white";
//             e.target.style.border = "1px solid black";
//             e.target.style.borderRadius = "5px";
//         } else {
//             alert("Button style not changed.");
//         }
//         console.log("Button Clicked");
//         console.log(e);
//         console.log(e.target);});

// btn.addEventListener("click", (e) => {
//     const isChanged = confirm("Do you want to chnges style off button?");
//     if(isChanged){
//         const newColor = prompt("Enter a new color for the button:");
//         if (newColor) {
//             e.target.style.backgroundColor = newColor;
//             e.target.style.color = "white";
//             e.target.style.border = "1px solid black";
//             e.target.style.borderRadius = "5px";
//         } else {
//             alert("No color entered, button style not changed.");
//         }

//     }else{
//         alert("Button style not changed.");
//     }
//     console.log("Button Clicked");
//     console.log(e);
//     console.log(e.target);


// });

// const submit = document.getElementById("submit");
// const colorName = document.getElementById("colorName")

// let p = document.createElement("p")

// colorName.addEventListener('input' , (e) => {
//     e.preventDefault();
//     // console.log(e)
//     // body.style.backgroundColor = `${colorName.value}`
//     // console.log(colorName.value)
    
//     p.innerText = colorName.value
//     document.body.appendChild(p)
// })


const btn = document.querySelector("#btn");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

    
