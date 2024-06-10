// setTimeout()
// function asyncFunction() {
//     setTimeout(() => {
//         let result = 22;
//         console.log("Result: ", result); // second in console
//     }, 1000)
// }
// asyncFunction()
// console.log("End of programm"); // firts in console

// function asyncFunction(callback) {
//     console.log("Before call callback"); // 1
//     callback();
//     console.log("After call callback"); // 3
// }
// function callbackFunc() {
//     console.log("Call callback"); // 2
// }
// asyncFunction(callbackFunc)



//Promise
// const myPromise = new Promise(function() {
//     console.log("Asynchronous operation is done");
// })

// const myPromise3000 = new Promise(function() {
//     console.log("[myPromise3000] execution now"); // first
//     setTimeout(() => console.log("[myPromise3000] execution is done"),3000) // 3 sec and done
// });
// const myPromise1000 = new Promise(function() {
//     console.log("[myPromise1000] execution now"); // second
//     setTimeout(() => console.log("[myPromise1000] execution is done"), 1000) // 1 sec and done
// })
// const myPromise2000 = new Promise(function () {
//     console.log("[myPromise2000] execution now"); // third
//     setTimeout(() => console.log("[myPromise2000] execution is done"), 2000) // 2 sec and done
// })


//resolve
// const myPromise = new Promise(function(resolve){
//     console.log("Execution async operation");
     
//     resolve("Hello world!")
// });

//reject
// const myPromise1 = new Promise(function(resolve, reject){
//     console.log("Execution async operation");
//     reject("Uncorrected data transmitted");
// });


// const x = 4;
// const y = 1;
// const myPromise = new Promise(function(resolve, reject) {
//     if(y===0) {
//         reject('Uncorrected data')
//     } else {
//         const z = x / y;
//         resolve(z);
//         console.log(z);
//     }
// })


//then, resolve
// const myPromise = new Promise(function(resolve) {
//     console.log("Execution async operation");
//     resolve("Hello world")
// })
// myPromise.then(function(value) {
//     console.log(`From promise receive data: ${value}`);
// })

// const myPromise3000 = new Promise(function(resolve){
//     console.log("[myPromise3000] Execution async operation");
//     setTimeout(()=>{resolve("[myPromise3000] Hello world!")}, 3000);
// });
// const myPromise1000 = new Promise(function(resolve){
//     console.log("[myPromise1000] Execution async operation");
//     setTimeout(()=>{resolve("[myPromise1000] Hello world!")}, 1000);
// });
// const myPromise2000 = new Promise(function(resolve){
//     console.log("[myPromise2000] Execution async operation");
//     setTimeout(()=>{resolve("[myPromise2000] Hello world!")}, 2000);
// });

// myPromise3000.then((value) => console.log(value))
// myPromise1000.then((value) => console.log(value))
// myPromise2000.then((value) => console.log(value))

// const x = 4;
// const y = 8;
// const myPromise = new Promise(function() {
//     console.log("Execution async operation");
//     const z = x + y;
//     console.log(`Result of operation: ${z}`);
// })
// myPromise.then()


//Promise.resolve()
// const myPromise = Promise.resolve("Hello world")
// myPromise.then(value => console.log(value))

// function sum(x, y) {
//     return new Promise(function(resolve) {
//         const result = x + y;
//         resolve(result);
//     }) // or here  .then(function(value){ console.log("Result of operation: ", value);})
// }
// sum(3,5).then(function(value){ console.log("Result of operation: ", value);})
// sum(25,4).then(function(value) { console.log("Sum of numbers", value);})


// catch()
// const myPromise = new Promise(function(resolve, reject) {
//     console.log("Execution async operation");
//     reject("Received uncorrected data")
// })
// myPromise.catch( function(error) {
//     console.log(error);
// })


//try..catch
// const myPromise = new Promise(function(resolve, reject) {
//     try {
//         console.log("Execution async operation");
//         getSomeWork();
//         resolve("Hello world!")
//     } catch (error) {
//         reject(`Error: ${error.message}`)
//     }
// })
// myPromise.catch(function(error) {
//     console.log(error);
// })


// error, then()
// function generateNumber(str){ 
//     return new Promise(function(resolve, reject){
//         const parsed = parseInt(str);
//         if (isNaN(parsed))  reject("is not a number")
//         else resolve(parsed);
//     })
//     .then(function(value){ console.log("Result of operation:", value);}, 
//         function(error){ console.log("Error:", error);});
// }
// generateNumber("23");
// generateNumber("hello");


	
// promise.then(..).then(..).then(..)
// const helloPromise = new Promise(function(resolve) {
//     resolve("Hello")
// })
// const worldPromise = helloPromise.then(function(value) {
//     return value + " world"
// })
// const spacePromise = worldPromise.then(function(value) {
//     return value + " from space!"
// })
// spacePromise.then(function(finalValue) {
//     console.log(finalValue);
// })


// finally()
// function generateNumber(str){
//     return new Promise((resolve, reject) => {
//         const parsed = parseInt(str);
//         if (isNaN(parsed)) reject("Not a number");
//         else resolve(parsed);
//     });
// };
// function printNumber(str){
//     generateNumber(str)
//     .then(value => console.log(value))
//     .catch(error => console.log(error))
//     .finally(() => console.log("End")) // twice
//     .then(() => console.log("Promise still working"))
// }
 
// printNumber("3");
// printNumber("triuy");


// Promise.all()
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve,1000, "Hello")
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "World")
// })
// // promise1.then((value) => console.log(value)) // Hello - after 1 sec
// // promise2.then((value) => console.log(value)) // World - after 0.5 sec
// Promise.all([promise1, promise2])
//     .then(values => {
//         const [promise1data, promise2data] = values;
//         console.log(promise1data, promise2data); // Hello World 
//     })


// Promise.allSettled()
// const promise1 = new Promise((resolve,reject) => {
//     reject("System error");
//     setTimeout(resolve, 500, "Hello");
// });
// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(resolve, 1000, "World");
// });
  
// Promise.allSettled([promise1, promise2])
//     .then(values => {
//         const [promise1data, promise2data] = values;
//         console.log(promise1data);  // {status: "rejected", reason: "System error"}
//         console.log(promise2data);  // {status: "fulfilled", value: "World"}
// });


// Promise.race()
// const promise1 = new Promise((resolve) => {
//     setTimeout(resolve, 500, "Hello");
// });
// const promise2 = new Promise((resolve) => {
//     setTimeout(resolve, 1000, "World");
// });
// Promise.race([promise1, promise2])
//     .then(value => console.log(value))   // Hello
//     .catch(error => console.log(error));


// Promise.any()
// const promise1 = new Promise((resolve, reject) => {
//     reject("error in promise1");
//     setTimeout(resolve, 500, "Hello");
// });
// const promise2 = new Promise((resolve) => {
//     setTimeout(resolve, 1000, "World");
// });
// Promise.any([promise1, promise2])
//     .then(value => console.log(value))  // World
//     .catch(error => console.log(error));


// async/await
// function sum(x,y) {
//     return new Promise(function(resolve) {
//         const result = x + y;
//         resolve(result)
//     })
// }
// async function calculate() {
//     const value = await sum(5,3)
//     console.log("Result of async operation: ", value);
// }
// calculate()
// or 
// function sum(x, y){ 
//     return new Promise(function(resolve){
//         const result = x + y;
//         resolve(result);
//     });
// }
 
// async function calculate(){
//     const result = await sum(5, 3);
//     return result;
// }
// calculate().then(value=> console.log("Result of async operation:", value));

// function sum(x, y){ 
//     return new Promise(function(resolve){
//         const result = x + y;
//         resolve(result);
//     });
// }
// async function calculate(){
//     const value1 = await sum(5, 3);
//     console.log("Result of async operation number 1:", value1);
//     const value2 = await sum(6, 4);
//     console.log("Result of async operation number 2:", value2);
//     const value3 = await sum(7, 5);
//     console.log("Result of async operation number 3:", value3);
// }
// calculate(); 

// function square(str){
//     return new Promise((resolve, reject) => {
//         const n = parseInt(str);
//         if (isNaN(n)) reject("Not a number");
//         else resolve(n * n);
//     })
// };
// async function calculate(str){
//     try{
//         const value = await square(str);
//         console.log("Result: ", value);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// calculate("g8");  // Not a number 
// calculate("4");   // Result:  16


// for-await-of
// const dataSource = ["Tom", "Sam", "Bob"];
// async function readData(){
//     for await (const item of dataSource) {
//         console.log(item);
//     }
// }
// readData();
// // Tom
// // Sam
// // Bob
