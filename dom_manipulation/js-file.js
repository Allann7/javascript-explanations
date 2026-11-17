const container = document.querySelector("#container");

const content = document.createElement("p");
content.classList.add("content");
content.textContent = "hey i'm red";

container.appendChild(content);
content.style.color="red";

//________________________------_______-----_______------______-----______------___-

const content2 = document.createElement("h3");
content2.classList.add("content");
content2.textContent = "hey i'm blue";

container.appendChild(content2);
content2.style.color="blue";

//________________________------_______-----_______------______-----______------___-

const content3 = document.createElement("div");
content3.classList.add("content");

content3.style.borderColor="black";
content3.style.borderWidth= "3px";
content3.style.backgroundColor="pink";

const content31 = document.createElement("h1");
content3.appendChild(content31);
content3.firstChild.textContent= "hi im inside a div";

const content32 = document.createElement("p");
content3.appendChild(content32);
content32.textContent = "ME TOO!" //content32 and content31 text is defined in diferent ways but work the same. 

container.appendChild(content3);

//________________________------_______-----_______------______-----______------___-

const btn = document.querySelector("#btn1");
btn.onclick = () => alert("Hello World"); //this is a arrow function, the function is declaresafter de dot in the elemet btn.
//let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }
//lear more on how to use arrow functions and function expressions.

//________________________------_______-----_______------______-----______------___-

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});

//________________________------_______-----_______------______-----______------___-

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", alertFunction);

//________________________------_______-----_______------______-----______------___-

const btn4 = document.querySelector("#btn4");

// btn4.addEventListener("click", function (e) {
//   console.log(e);
// });

// btn4.addEventListener("click", function (e) {
//   console.log(e.target);
// });

btn4.addEventListener("click", function (e) {
  e.target.style.background = "pink";
});
