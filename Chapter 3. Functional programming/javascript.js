// Functions
// function hello () {
//     console.log("Some function");
// }
// hello();

// const callFunction = hello;
// callFunction();

// Function expression
// const message = function(){
 
//     console.log("Hello JavaScript");
// }
// message();

// Local function
// function print() {
//     printHello();
//     printHello();
//     function printHello() {
//         console.log("Hello");
//     }
// }
// print();

// Function parameters
// function print(message) {
//     console.log(message);
// }
// print("First message");
// print("Second message");

// function sum(a,b) {
//     const result = a + b;
//     console.log(result);
// }
// sum(3,5);
// sum(10,34);

// Spread operator
// function printPerson(person) {
//     console.log("Name: ", person[0]);
//     console.log("Age: ", person[1]);
//     console.log("Email: ", person[2]);
//     console.log("===================");
// }
// const tom = ["Tom", 37, "tom@example.com"];
// const robert = ["Robert", 45, "robert@example.com"];
// printPerson(tom);
// printPerson(robert);

// function printPerson(username, age, email) {
//     console.log("Name: ", username);
//     console.log("Age: ", age);
//     console.log("Email: ", email);
//     console.log("===================");
// }
// const tom = ["Tom", 37, "tom@example.com"];
// const robert = ["Robert", 45, "robert@example.com"];
// printPerson(tom); // for comparison
// printPerson(...robert);

// Default values
// function sum(x = 5, y = 10) {
//     const result = x + y;
//     console.log(result);
// }
// sum(); // 15
// sum(6); // 16
// sum(7); // 17

// Arguments object
// function sum() {
//     let result = 0;
//     for( const n of arguments)
//         result += n;
//     console.log(result);
// }
// sum(6);
// sum(6,4); // add next parameter
// sum(6,4,1);

// Rest operator
// function sum(...numbers) {
//     let result = 0;
//     for (const n of numbers)
//         result += n;
//     console.log(result);
// }
// sum(1,2,3);

// function display(season, ...temps){
//     console.log(season);
//     for(index in temps){
//         console.log(temps[index]);
//     }
// }
// display("Spring", -2, -3, 4, 2, 5);
// display("Summer", 20, 23, 31);

// Array like parametr
// function sum(numbers) {
//     let result = 0;
//     for(const n of numbers)
//         result += n;
//     console.log("Result: ", result);
// }
// const nums = [4,6,8,10];
// sum(nums);

// Function as a parametr
// function sum(x, y){
//     return x + y;
// }
// function subtract(x, y){
//     return x - y;
// }
// function operation(x, y, func){
//     const result = func(x, y);
//     console.log(result);
// }
 
// console.log("Sum");
// operation(10, 6, sum);  // 16
// console.log("Subtract");
// operation(10, 6, subtract); // 4

// Return 
// function sum(a,b) {
//     return a + b;
// }
// let num1 = sum(2,4);
// console.log(num1);

// function rectangle(width, height) {
//     const perimeter = width*2 + height*2;
//     const area = width * height;
//     return [perimeter, area];
// }
// const rectangleData = rectangle(10,20);
// console.log("Perimeter: ",rectangleData[0]);
// console.log("Area: ", rectangleData[1]);

// Example from object
// function rectangle(width, height){
 
//     const rectPerimeter = width *2 + height * 2;
//     const rectArea = width * height;
//     return {perimeter: rectPerimeter, rectArea};
// }
 
// const rectangleData = rectangle(20, 30);
// console.log("Perimeter:", rectangleData.perimeter); // first option
// console.log("Area:", rectangleData.rectArea); // second option

// Returning a function from a function
// function menu(n){
  
//     if(n==1) return function(x, y){ return x + y;}
//     else if(n==2) return function(x, y){ return x - y;}
//     else if(n==3) return function(x, y){ return x * y;}
//     return function(){ return 0;}
// }
 
// let action = menu(1); // n==1
// const result = action(2, 5);  // receiver result
// console.log(result);

// let action2 = menu(3) // n==3
// console.log(action2(3,3));

// Arrows function
// const hello = () => console.log("Hello arrow");
// hello();

// const printMes = (mes) => console.log(mes);
// printMes("First message");
// printMes("Second message");

// const sum = (x,y) => console.log("Sum: ", x+y);
// sum(1,2);

//Return result
// const sum = (x,y) => x + y;
// console.log(sum(1,2));

// const hello = name => `Hello, ${name}`;
// console.log(hello("Tom"));              // Hello, Tom
// console.log(hello("Bob"));              // Hello, Bob
// console.log(hello("Frodo Baggins"));    // Hello, Frodo Baggins

//Return object
// const user = (userName, userAge) => ({name: userName, age: userAge})

// let tom = user("Tom", 34);
// let sam = user("Sam", 25);

// console.log("Name first guy: ", tom.name);
// console.log("Age second guy: ", sam.age);

// const square = n => {
//     const result = n * n;
//     console.log(result);
// }
// square(4);

// Closure
// function outer() {
//     let x = 5;
//     function inner() {
//         x++;
//         console.log(x);
//     }
//     return inner;
// }
// const fn1 = outer();
// const fn2 = outer();
// fn1(); // 6
// fn1(); // 7
// fn2(); // 6
// fn2(); // 7
// fn2(); // 8

// function multiply(n) {
//     let x = n;
//     return function(m) {return x * m}
// }
// const fn1 = multiply(5);
// const result = fn1(6) // 30
// console.log(result); // 30

// const fn2= multiply(4);
// const result2 = fn2(6); // 24
// console.log(result2); // 24

// function multiply(n){
//     let x = n;
//     return function(m){ return x * m;};
// }
// const result = multiply(5)(6); // 30
// console.log(result);

// function person(name, age){
//     console.log("Person", name, "created");
 
//     function print(){
//          console.log("Person ", name, " (" + age +")");
//     }
//     function work(){
//          console.log("Person ", name, " works");
//     }
//     function incrementAge(value){
//         age = age + value;
//         console.log("Person ", name, "take + ", value, "year(s)");
//     }
//     return [print, work, incrementAge];
// }
 
// const tom = person("Tom", 39);
// tom[0]();       // print, 0 index for array "return [...]"
// tom[1]();       // work
// tom[2](1);      // incrementAge, return take +1
// tom[0]();       // print, because return then age = 40

// Immediately Invoked Function Expression or IIFE
// (function(){
//     console.log("Im working myself");
// }())
// (function(a,b){
//     const result = a + b;
//     console.log(`${a} + ${b} = ${result}`);
// }(6,4))

// Recursive function
// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n-1)
//     }
// }
// const result =factorial(3); // 3*2*1
// console.log(result);

// function fibonachi(n) {
//     if (n === 0 || n === 1) {
//         return n;
//     } else {
//         return fibonachi(n - 1) + fibonachi (n - 2);
//     }
// }
// const result = fibonachi(8); // 21
// console.log(result); // 21

//Function Overriding
// function print() {
//     console.log("Turn ON");
//     print = function() {
//         console.log("Turn OFF");
//     }
// }
// const printFirstStatus = print; // freeze first status
// print(); // Turn ON
// print(); // Turn OFF
// print(); // Turn ON
// printFirstStatus(); // Turn ON
// printFirstStatus(); // Turn ON

// Hoisting example
// let foo;
// console.log(foo); // cant find foo = ...?
// foo = "Tom"; // assign foo
// console.log(foo); // now see foo

// Passing parameters

// function change(x) {
//     x = 2 * x;
//     console.log("x in change: ", x);
// }
// let n = 10;
// console.log("n before change: ", n); // 10
// change(20); // 40
// console.log("n after change: ", n); // 10, because have a copy

// function change(user) {
//     user.name = "Tom";
// }
// let bob = {
//     name: "Bob"
// }
// console.log("before change: ", bob.name);
// change(bob);
// console.log("after change: ", bob.name); // "link" copy on name