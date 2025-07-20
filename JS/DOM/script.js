// document.getElementById("title").innerHTML = "Hello World";
// document.getElementById("subtitle").innerHTML = "Sub heading";
document.querySelector("#title").innerHTML = "Hello World updated by querySelector";
document.querySelector("#subtitle").innerHTML = "Sub heading updated by querySelector";

document.getElementsByClassName("par")[0].innerHTML = "Paragraph 1 updated by par [0]";
document.getElementsByClassName("par")[1].innerHTML = "Paragraph 2  updated by par [1]";
document.getElementsByClassName("par")[2].innerHTML = "Paragraph 3 updated by par [2]";

console.log(document.querySelector("#title").innerHTML);
console.log(document.querySelector("#subtitle").innerHTML);

title = document.querySelector("#title");

title.style.backgroundColor = "red";
title.style.border = "5px solid black";


title.setAttribute("id", "title2");
console.log(title.getAttribute("id"));

const heading2 = document.createElement("h2");
heading2.innerHTML = "New Heading 2";

const body = document.querySelector("body");
body.appendChild(heading2);


const button = document.querySelector("button");
console.log(button)
button.addEventListener("click" , ()=>{
    console.log("Button clicked");
})