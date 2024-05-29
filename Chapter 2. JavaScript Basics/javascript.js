// constants and variables
// var username;
// let userName;
// let a, b, c;

// username = "Tom";
// var age, height;
// age = 21;
// height = 6;
// console.log(`Name: ${username}, age: ${age}, height: ${height}`);

// let name1 = "Robin", name2 = "Bob", name3 = "Sam";
// console.log(name1);  
// console.log(name2);
// console.log(name3);


// // data types
// // Number
// const x = 45;
// const y = 123.897;
// const z = -0.123;

// // определения числа в двоичной системе
// const num1 = 0b1011;
// console.log(num1);
// // определения числа в восьмеричной системе
// const num2 = 0o11
// console.log(num2);
// // определения числа в шестнадцатеричной системе
// const num3 = 0xff;
// console.log(num3);

// // BigInt
// const dimension = 9223372036854775801n;
// console.log(dimension);

// // Boolean
// const isAlive = true;
// const isDead = false;

//String
// const user = "Tom";
// const company = 'Microsoft';
// const language = 'JavaScript';

// console.log(user);
// console.log(company);
// console.log(language);

// const company2 = "Three Good and shine";
// const company3 = "Three 'Good and shine'";

// \n - new line
// \t - TAB button
// const text = "Hello METANIT.COM\nHello\tWorld";
// console.log(text);

// Interpolation
// const user = "Tom";
// const text = `Name: ${user}`;
// console.log(text);
// const age = 37;
// const isMarried = false;
// const text2 = `Name: ${user}, Age: ${age}, IsMarried: ${isMarried}`;
// console.log(text2);

// const poem = 
// `We all learned a little bit
// Something and somehow
// So upbringing, thank God,
// Its no wonder for us to shine.`
// console.log(poem);

// null and undefined
// let email;
// console.log(email);
// email = null;
// console.log(email);

// Object
// const user = {name: "Tom", age: 24};
// console.log(user.name);
// console.log(user.age);

// dynamic typing
// let id;  //  undefined
// console.log(id);
// id = 45;  //  number
// console.log(id);
// id = "45"; //  string
// console.log(id);

// typeof
// let id;
// console.log(typeof id); // undefined
// id=45;
// console.log(typeof id); // number
// id = 45n;
// console.log(typeof id); // bigint
// id = "45";
// console.log(typeof id); // string

// Arithmetic operations
// const x = 50 + 10;
// console.log(x);

// const y = 50 - 10;
// console.log(y);

// const z = 50 * 10;
// console.log(z);

// const c = 50 / 10;
// console.log(c);

// const v = 15 % 4; // returns the remainder of division
// console.log(v); // 3

// const b = 3 ** 3; // number to a certain degree
// console.log(b); // 27
// const a1 = 3;
// const a2 = 2;
// const b1 = a1 ** a2;
// console.log(b1);

// Increment

// prefix
// let x = 5;
// let z = ++x;
// console.log(x); // 6
// console.log(z); // 6 still +1

// postfix
// let a = 5;
// let b = a++;
// console.log(a); // 6
// console.log(b); // 5 return +1

// Decrement

//prefix
// let x = 5;
// let z = --x;
// console.log(x); // 4
// console.log(z); // 4

//postfix
// let a = 5;
// let b = --a;
// console.log(a); // 4
// console.log(b); // 5

// Arithmetic operations with assignment

// let a = 23;
// a += 5; // a = a + 5
// console.log(a);

// let b = 28;
// b -= 10; // b = b - 10
// console.log(b);

// let c = 20;
// c *= 2; // c = c * 2
// console.log(c);

// let d = 5;
// d **= 2; // d = 5^2
// console.log(d);

// let e = 40;
// e /= 4; // e = e / 4
// console.log(e);

// let f = 10;
// f %= 3; // f = f % 3
// console.log(f);

// Bitwise operations
// Binary representation of numbers
// 0b
// const num = 0b1101;
// console.log(num); // 13

// let num2 = 0b1100; // now 12
// num2 = ~num2; // inverted
// num2 = num2 + 1; // need +1 and then we get -12
// console.log(num2);

// shift left
// const res = 2 << 2;   // 10 on two steps to the left = 1000 - 8
// console.log(res);  // 8

// // arithmetic right shift
// const res1 = 16 >> 3;  // 10000 on three steps to the right = 10 or 2 in decimal system
// console.log(res1);  // 2

// const res4 = 8 << 2;  // equivalently 8 * 4
// console.log(res4);      // 32
// const res5 = 64 >> 4;  // equivalently 64 / 16
// console.log(res5);      // 4

// // logical shift right
// const res3 = -16 >>> 3; 
// console.log(res3);      // 536870910


// const a = 5 | 2; // 101 | 010 = 111  - 7, if 1 of 2 = 1 then take 1
// const b = 6 & 2; // 110 & 010 = 10  - 2, if both 1 then take 1
// const c = 5 ^ 2; // 101 ^ 010 = 111 - 7, if only 1 then take 1
// const d = ~9; // -10, inverted

// Conditional Expressions
// Comparison Operations

// const income = 100;
// const strIncome = "100";
// const result = income == strIncome;
// console.log(result);
// const result2 = income === strIncome;
// console.log(result2);

// const num1 = 3;
// const num2 = "3";
// const numbers = num1 != num2;
// console.log(numbers);
// const numbers2 = num1 !== num2;
// console.log(numbers2);

// Logical &&(and)

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false

// const money = 1000;
// const age = 21;
// const access1 = age > 18 && money > 100;
// console.log(access1);
// const access2 = age > 18 && money > 1000;
// console.log(access2);

// Logical ||(or)

// console.log(true || true);  // true
// console.log(true || false); // true
// console.log(false || false); // false

// const money = 1000;
// const age = 21;
// const access1 = age > 18 || money > 1000;
// console.log(access1);
// const access2 = age > 22 || money > 1000;
// console.log(access2);

// Logical negative
// console.log(!true);
// console.log(!false);

// const isAlive = true;
// const isDead = !isAlive;
// console.log(isDead);

// Ternary operation

// const a = 1;
// const b = 2;
// const result = a < b ? a : b;
// console.log(result); // 1

// Operator ??
// const result = "hello" ?? "world";
// console.log(result);    // hello

// Operator ??=
// const message = "Hello JavaScript";
// let text = "Hello work!"
// text ??= message;
// console.log(text);  // Hello work!

// const message = "Hello JavaScript";
// let text = null;
// text ??= message;
// console.log(text);  // Hello JavaScript

// Data Transformations
// parseInt()
// const number1 = "56";
// const number2 = 4;
// const result = parseInt(number1) + number2;
// console.log(result);

// const num1 = "123hello";
// const num2 = parseInt(num1);
// console.log(num2);

//parseFloat()
// const number1 = "46.07";
// const number2 = "4.98";
// let result = parseFloat(number1) + parseFloat(number2);
// console.log(result);

// Operator +
// const num1 = "56";
// const num2 = 4;
// let result = +num1 + num2;
// console.log(result);

// Arrays
// const myArray = ["one", "two", "three"];
// console.log(myArray);
// console.log(myArray[2]);
// const number2 = myArray[1]
// console.log(number2);
// myArray[3] = "four"; // add by index
// console.log(myArray);

// const doubleArray = [[1,2,3], [4,5,6]];
// const people = [
//     ["Tom", 25, false],
//     ["Bill", 38, true],
//     ["Alice", 21, false]
// ];
// console.log(people[2]);
// console.log("Name: ", people[2][0]);
// console.log("Age: ", people[2][1]);

// Conditionals(if,else, else if, switch...case, break)

// if
// const income = 100;
// const age = 21;
// if(income > 50 && age > 18) {
//     console.log("Income more than 50");
//     console.log("Age 18+");
// }

// let myVar = 89;
// if(myVar) {
//     console.log(`myVar have a number: ${myVar}`);
// }

// else
// const income = 45;
// if (income > 50) {
//     console.log("More than 50");
// } else {
//     console.log("Less than 50");
// }

// else if
// const income = 50;
// if(income > 50) {
//     console.log("More than 50");
// } else if(income === 50) {
//     console.log("Equals 50");
// } else {
//     console.log("Less then 50");
// }

// switch,case
// const income = 200;
// switch(income) {
//     case 100:
//         console.log("income = 100");
//         break;
//     case 200:
//         console.log("income = 200");
//         break;
//     case 300: 
//         console.log("income = 300");
//         break;
//     default:
//         console.log("Cant find income");
//         break;
// }

// cycles(for,for..in,for..of,while,do..while)

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log("End of work");

// const people = ["Sam","Tom","Robert"]
// for (let i = 0; i < 3; i++) {
//     console.log(people[i]);
// }

// const people2 = [["Tom", 39], ["Sam", 41], ["Bob", 34]]
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 2; j++) {
//         console.log(people2[i][j]);
//     }
//     console.log("======="); 
// }

// while
// let i = 1;
// while(i <= 5) {
//     console.log(i);
//     i++;
// }
// do..while
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while(i<=5);

// continue and break
// for(let i=1; i <= 6; i++) {
//     if(i===4) break;
//     console.log(i);
// }
// console.log("End of work");

// for(let j=1; j <= 6; j++) {
//     if(j===4) continue;
//     console.log(j);
// }
// console.log("End of work");

// for..in
// const person = {name: "Tom", age: 37}
// for (prop in person) {
//     // console.log(prop);
//     console.log(prop, person[prop]);
// }

//for..of
// const text = "Arthur";
// for(char of text) {
//     console.log(char);
// }
// const people = ["Tom", "Sam", "Bob"];
// for(const person of people) {
//     console.log(person);
// }

// Sorting an array of numbers

// const numbers = [5,3,6,2,5,1];
// for (let i = 0; i < numbers.length; i++) {

//     for(let j = 0; j < numbers.length; j++) {
//         if(numbers[i] > numbers[j]) {
//             const temp = numbers[j];
//             numbers[j] = numbers[i];
//             numbers[i] = temp;
//         }
//     }
// }
// console.log("numbers:", numbers);







