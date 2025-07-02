// dom: document object model
// DOM is a programming interface for web documents
// It represents the structure of a document as a tree of objects
// DOM allows programming languages to manipulate the structure, style, and content of web pages
// DOM is a language-neutral interface, meaning it can be used with any programming language
// DOM is a standard that defines the structure of documents and how to access and manipulate them
// DOM is a W3C standard, meaning it is maintained by the World Wide Web Consortium


// console.log("heelo ")

// const heading = document.getElementById('heading')
// heading.innerText  = "from Js File"
// console.log(heading.innerText);

// const heading = document.getElementsByTagName('h1')
// heading.innerText  = "from Js File"
// console.log(heading)

// const heading = document.getElementsByClassName("heelo")
// heading[0].innerHTML  = "<s>heelo</s>"
// console.log(heading[0].innerText)

const heading = document.querySelector("h1")

// heading.style.backgroundColor = "red"
// heading.style.border = "1px solid black"
// heading.style.borderRadius = "10px"
// console.log(heading)

// heading.setAttribute("class" , "heelo heelo3")
// heading.setAttribute("style","background-color : red")

// heading.removeAttribute("id")

// const newTag = document.createElement("p");
// newTag.setAttribute("id","para")
// newTag.innerText = "Paragraph tag";

// // document.append(newTag)

// const body = document.getElementById("body")
// // console.log(body)
// body.appendChild(newTag)

// console.log(newTag)

let data = ["Monitor", "Laptop", "Mic", "Mouse", "Keyboard",  "Phone"];

const ul = document.getElementById("specs");
// const liTag = document.createElement('li')
// liTag.innerText = "Monitor"
// ul.append(liTag)

for (let i = 0; i < data.length; i++) {
    // console.log(data[i])
    const liTag = document.createElement("li");
    liTag.style.backgroundColor  ="pink"
    liTag.style.margin = "5px"
    liTag.style.padding = "5px"
    liTag.style.borderRadius = "5px"
    liTag.style.textAlign = "center"
    liTag.innerText = data[i];
    ul.appendChild(liTag);
    
}

heading.remove()