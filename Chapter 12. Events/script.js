//Events
//onclick
// addEventListener() and removeEventListener()
// let count = 0
// function btn_click() {
//     console.log("Clicked", count++);
// }
// const btn = document.getElementById("btn")
// btn.addEventListener("click", btn_click) // first event listener
// btn.addEventListener("click", function() { // second event listener
//     console.log("Button clicked");
// })
// btn.addEventListener("click", () => console.log("Element clicked!")) // third event listener

// Object event
// function btn_click(text) {
//     console.log(text);
// }

// this
// let clicks = 0;
// function btn_click(btn) {
//     btn.textContent = `Clicked ${++clicks}`
// }

// close access
// function a_click(anchor) {
//     console.log(anchor.href); // already true
//     return false; // turn off link, because need true
// }

// e-event 
// function btn_click(e){
//     console.log(e);
//     console.log("Type: ", e.type);
//     console.log("Target: ", e.target);
//     console.log("Timestamp: ", e.timeStamp);
// }

// addEventListener() + event 
// function btn_click(e){
//     console.log("Type:", e.type);
//     console.log("Target:", e.target);
//     console.log("Timestamp:", e.timeStamp);
// }
// const btn = document.getElementById("btn")
// btn.addEventListener("click", btn_click)

// preventDefault()
// function linkHandler(e) {
//     console.log("Link has been clicked");
//     e.preventDefault(); // stoping link
// }
// const link = document.getElementById("link")
// link.addEventListener("click", linkHandler)

// bubbling
// const redRect = document.getElementById("redRect")
// redRect.addEventListener("click", ()=> console.log("Event on redRect"))
// const blueRect = document.getElementById("blueRect")
// blueRect.addEventListener("click", ()=> console.log("Event on blueRect"))

// document.body.addEventListener("click", () => console.log("Event on body"))

//capturing
// const redRect = document.getElementById("redRect")
// redRect.addEventListener("click", function() {
//     console.log("Event on redRect");
// },true)
// const blueRect = document.getElementById("blueRect")
// blueRect.addEventListener("click", function(){
//     console.log("Event on blueRect");
// },true)
// document.body.addEventListener("click", function() {
//     console.log("Event on body");
// },true)

// mouseover and mouseout
// function setColor(e) {
//     if(e.type==="mouseover") {
//         e.target.style.backgroundColor = "red"
//     } else if(e.type==="mouseout") {
//         e.target.style.backgroundColor = "blue"
//     }
// }
// const blueRect = document.getElementById("blueRect")
// blueRect.addEventListener("mouseover",setColor)
// blueRect.addEventListener("mouseout",setColor)

// MouseEvent
// function handleClick(e) {
//     console.log("screenX: " + e.screenX);
//     console.log("screenY: " + e.screenY);
//     console.log("clientX: " + e.clientX);
//     console.log("clientY: " + e.clientY);
// }
// const blueRect = document.getElementById("blueRect")
// blueRect.addEventListener("click", handleClick)

// KeyboardEvent
// const blueRect = document.getElementById("blueRect")
// const blueRectStyle = window.getComputedStyle(blueRect)
// window.addEventListener("keydown", moveRect)

// function moveRect(e) {
//     const left = parseInt(blueRectStyle.marginLeft)
//     const top = parseInt(blueRectStyle.marginTop)

//     switch(e.key) {
//         case "ArrowLeft": // if pushed button left
//             if(left>0)
//                 blueRect.style.marginLeft = left - 10 + "px";
//             break;
//         case "ArrowUp": // if pushed button top
//             if(top>0)
//                 blueRect.style.marginTop = top - 10 + "px";
//             break;
//         case "ArrowRight": // if pushed button right
//             if(left < document.documentElement.clientWidth - 100)
//                 blueRect.style.marginLeft = left + 10 + "px"
//             break;
//         case "ArrowDown": // if pushed button down
//             if(top < document.documentElement.clientHeight - 100)
//                 blueRect.style.marginTop = top + 10 + "px";
//             break;
//     }
// }

//dispatchEvent()
// const link = document.getElementById("link")
// const event = new MouseEvent("click")
// link.dispatchEvent(event); // when you turm on, the website is turn on too automatically

// const link = document.getElementById("link")
// link.addEventListener("click", (e) => {
//     console.log("Link has been clicked");
//     e.preventDefault(); // warning the transition
// })
// const event = new MouseEvent("click", {cancelable:true});
// link.dispatchEvent(event);

// custom events
// const button = document.getElementById("btn")
// const myAcc = new Account(100)
// document.addEventListener("payment", ()=> console.log("Payment succeeded!"))
// button.addEventListener("click", ()=> myAcc.pay(50))

// function Account(money) {
//     _money = money;
//     this.pay = function(sum) {
//         if(_money >= sum) {
//             _money -= sum;
//             console.log(_money);
//             const event = new Event("payment") // define the event object
//             document.dispatchEvent(event) // generate an event for the entire document
//         }
//     }
// }

// const button = document.getElementById("btn");
// document.addEventListener("payment", (e)=>{
//     console.log("Payment succeeded!");
//     console.log("Payment Sum:", e.detail.paymentSum);   
//     console.log("Current balance:", e.detail.balance);
// });
// const myAcc = new Account(100)
// button.addEventListener("click", () => myAcc.pay(50))

// function Account(money) {
//     _money = money;
//     this.pay=function(sum){
//         if(_money >= sum){
//             _money -= sum;
            
//             const event = new CustomEvent("payment", {
//                 detail:{                
//                     paymentSum: sum, 
//                     balance: _money
//                 }
//             });
//             document.dispatchEvent(event);      
//         }
//     }
// }













