//select DOM for reference

const body = document.querySelector("body");

//DOM manipulation

//create div for content
const div = document.createElement("div");
div.classList.add("container");
body.appendChild(div);

const pRed = document.createElement("p");
pRed.style.color = "red";
pRed.textContent = "I'm red";
div.appendChild(pRed);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3";
div.appendChild(h3);

const divColor = document.createElement("div");
divColor.style.backgroundColor = "pink";
divColor.style.border = "1px solid black";
const h1 = document.createElement("h1");
const p = document.createElement("p");
h1.textContent = "I'm a div";
p.textContent = "ME TOO!";
divColor.appendChild(h1);
divColor.appendChild(p);
div.appendChild(divColor);

//append to DOM
