//Show basic info + how it works(DOM)
// console.log(document.documentElement);
// console.log(document.title);
// console.log(document.lastModified);
// console.log(document.domain);
// console.log(document.URL);

// //Example of receive images(now we dont have)
// const images = document.images
// images[0].src = "picture_4.jpg"
// images[0].alt = "New picture"
// for (img of images) {
//     console.log(`Url: "${img.src}" Alt: "${img.alt}"`);
// }

//Receive links
// const links = document.links
// for (link of links) {
//     console.log(`Href: "${link.href}" Text: "${link.innerText}"`);
// }

//id
// const headerElement = document.getElementById("header")
// console.log("Text: ", headerElement.innerText);

//tag
// const paragraphs = document.getElementsByTagName("p")
// for (p of paragraphs) {
//     console.log(p.innerText);
// }
// =====================================================
// const paragraphs = document.getElementsByTagName("p");
// for (let i=0; i < paragraphs.length; i++) {
//     console.log(paragraphs[i].innerText);
// }

//class
// const contacts = document.getElementsByClassName("contacts")
// for(c of contacts) {
//     console.log(c.innerText);
// }

//name
// const langs = document.getElementsByName("lang")
// for (lang of langs) {
//     console.log(lang.value);
// }

//selector CSS
// const elem = document.querySelector(".annotation p")
// console.log(elem.innerText);
//All "p"
// const elem = document.querySelectorAll(".text p")
// for (e of elem) {
//     console.log(e.innerText);
// }

//Included in tags
// const article = document.getElementById("article")
// const articleContent = article.getElementsByClassName("text")
// for (p of articleContent) {
//     console.log(p.innerText);
// }

// Node objects

//nodeName and nodeType
// const article = document.getElementById("article")
// console.log(article.nodeName); // div
// console.log(article.nodeType); // 1, because: 1 = element, 2 = attribute, 3 = text

// parentNode and parentElement
// const header = document.getElementById("header")
// const headerParent = header?.parentElement
// or 
// const headerParent = header?.parentNode
// console.log(headerParent);

//hasChildNodes()
// const article = document.querySelector("div")
// if(article.hasChildNodes()) {
//     console.log("There are child nodes");
// } else {
//     console.log("No child nodes");
// }

//children
// const article = document.getElementById("article")
// for (elem of article.children) {
//     console.log(elem);
// }

//childNodes
// const article = document.getElementById("article")
// for(node of article.childNodes) {
//     let type = "";
//     if(node.nodeType === 1) type = "element";
//     else if(node.nodeType === 2) type = "attribute";
//     else if(node.nodeType === 3) type = "text";

//     console.log(node.nodeName, ": ", type);
// }

//firstChild/firstElementChild and lastChild/lastElementChild
// const article = document.getElementById("article")
// console.log("First Child: ", article.firstElementChild);
// console.log("Last Child: ", article.lastElementChild);

//childElementCount
// const article = document.getElementById("article")
// console.log(article.childElementCount); 
// console.log(article.children.length); // same ^

//previousSibling/previousElementSibling and nextSibling/nextElementSibling
// const article = document.getElementById("article")
// let tempNode = article.firstElementChild
// while(tempNode != null) {
//     console.log(tempNode);
//     tempNode = tempNode.nextElementSibling
// }

//nodeValue
// const pageText = document.getElementById("text")
// console.log(pageText.nodeValue); // null
// for(textNode of pageText.childNodes) {
//     console.log(textNode.nodeValue);
// }

//Object.getPrototypeOf()
// const header = document.getElementById("header")
// console.log(Object.getPrototypeOf(header)); //// HTMLHeadingElement

//tagName
// const header = document.getElementById("header")
// console.log(header.tagName); // H1

//textContent
// const header = document.getElementById("header")
// console.log(header.textContent); // Home Page
// header.textContent = "Hello world"; // change text example 1
// header.innerText = "Hello World2" // change text example 2

//innerHTML
// const header = document.getElementById("header");
// console.log(header.innerHTML); //Home Page
// header.innerHTML = '<span style="color:navy;">Hello World</span>'; // change color

//createElement
// const header = document.createElement("h1")
// console.log(header);

//createTextNode
// const headerText = document.createTextNode("Hello world")
// console.log(headerText.data);

// appendChild()
// const header = document.createElement("h1")
// const headerText = document.createTextNode("Hello world")
// header.appendChild(headerText) // add in h1 textNode
// console.log(header); // <h1>Hello World</h1>

// insertBefore()
// const header = document.createElement("h1")
// header.textContent = "Page Header" // text of element
// const firstP = document.body.firstElementChild; // receiver first paragraph
// document.body.insertBefore(header,firstP) // add <h1> before p's

// cloneNode()
// const article = document.getElementById("article");
// const lastP = article.lastElementChild; // receiver last paragraph
// const newLastP = lastP.cloneNode(true) // clone lastP // if "true" then copy with all child nodes
// newLastP.textContent = "Publicated Date: 05/29/2024" // change text
// article.appendChild(newLastP) // add to the end element

// replaceChild(newNode, oldNode)
// const article = document.getElementById("article");
// const oldNode = article.firstElementChild; // first element
// const newNode = document.createElement("h6") //new element
// newNode.textContent = "Hello world!"; // text of new element
// article.replaceChild(newNode, oldNode); // change element new on old

// removeChild()
// const article = document.getElementById("article");
// const lastP = article.lastElementChild;
// article.removeChild(lastP)

// getAttribute()
// const element = document.getElementById("home")
// console.log(element.getAttribute("id")); // home
// // or 
// // console.log(element.id); // same 
// console.log(element.getAttribute("class")); // link
// console.log(element.getAttribute("href")); // index.html

// setAttribute(attr, value)
// const element = document.getElementById("home");
// element.setAttribute("href", "https://metanit.com")
// element.setAttribute("style", "color:red;")

// removeAttribute()
// const element = document.getElementById("home")
// element.removeAttribute("style")

// style
// const header = document.getElementById("header");
// console.log(header.style.color); // empty line
// header.style.color = "navy"
// console.log(header.style.color);

//className
// const header = document.getElementById("header");
// console.log(header.className); // header-font
// header.className = "header-color" 
// console.log(header.className); // header-color

// classList
// const header = document.getElementById("header");
// header.classList.remove("header-size")
// header.classList.add("header-font")
// header.classList.toggle("header-color")
