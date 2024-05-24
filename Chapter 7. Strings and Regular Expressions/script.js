//Strings
// const message = String("hello ")
// console.log(message);
// console.log(message[0]);
// console.log(message.length);
// console.log(message.repeat(4));

// indexOf/lastIndexOf()
// const hello = "Hello world. bye world";
// const key = "world";
// const firstPos = hello.indexOf(key);
// const lastPos = hello.lastIndexOf(key);
// console.log("First pos: ", firstPos);    // 6
// console.log("Last pos: ", lastPos);  // 17

// includes()
// const hello = "Hello world. Bye world";
// console.log(hello.includes("world")); // true
// console.log(hello.includes("World")); // false

// substring() and slice()
// const hello = "Hello world. Bye world"
// const world = hello.substring(6,11)
// console.log(world);
// const lastWords = hello.substring(13)
// console.log(lastWords);

// const hello = "Hello world. Bye world."
// const bye1 = hello.slice(-10, -1) // if -, then from last index
// console.log(bye1); // Bye world
// const bye2 = hello.substring(-10,-1)
// console.log(bye2); // doesnt work

// toLowerCase() and toUpperCase()
// const hello = "Hello world"
// console.log(hello.toLowerCase());
// console.log(hello.toUpperCase());

// // charAt() and charCodeAt()
// const hello = "Hello Tom"
// console.log(hello.charAt(2)); // l
// console.log(hello.charCodeAt(2)); // 108, numeric code of this symbol

// trim()
// let hello = "   Hello Tom   "
// const beforeLength = hello.length
// hello = hello.trim()
// const afterLength = hello.length
// console.log("Length before: ", beforeLength);
// console.log("Length after: ", afterLength);

// concat()
// let hello = "Hello ";
// const world = "world";
// hello = hello.concat(world);
// console.log(hello); // Hello world

//replacce()
// let hello = "one two three"
// hello = hello.replace("one", "four")
// console.log(hello); // four two three

// let world = "not not need not not not need not not"
// world = world.replaceAll("need", "changed")
// console.log(world); // not not changed not not not changed not not

// split()
// const mesasge = "Today is good day!"
// const messageParts = mesasge.split(" ")
// console.log(messageParts); // ['Today', 'is', 'good', 'day!']

// stratsWith() and endsWith()
// const hello = "let me speak from my heart";
// console.log(hello.startsWith("let"));       // true
// console.log(hello.startsWith("Let"));       // false
// console.log(hello.startsWith("lets"));      // false
 
// console.log(hello.endsWith("heart"));       // true
// console.log(hello.startsWith("bart"));      // false

//padStart() and padEnd()
// let hello = "hello".padStart(8);// "   hello"
// console.log(hello);
// hello = "hello".padEnd(8); // "hello   "
// console.log(hello);

// let hello = "123".padStart(6, "0"); // "000123"
// hello = "123".padEnd(7, "4");  // "1234444"

// Interpolation
// const guy = "Tom";
// const hello = `Hello ${guy}`;
// console.log(hello);
// const question = "Are you good?"
// const helloUpd = `Hello ${guy}. ${question}`
// console.log(helloUpd);

// const tom = {
//     name: "Tom",
//     age: 37
// }
// const tomInfo = `${tom.name} is ${tom.age} years old`
// console.log(tomInfo);

//Object RegExp
//test()
// const initialText = "hello world!";     // string for search
// const exp = /hello/;    // regular expression
// const result = exp.test(initialText);   
// console.log(result); // true   
// const initialText2 = "Hi all";
// const result2 = exp.test(initialText2);
// console.log(result2); // false - in "Hi all" dont have "hello"

// const exp = /......../; // 8
// const pass1 = 1234567890
// const pass2 = "qwerty"
// console.log(exp.test(pass1)); // >8
// console.log(exp.test(pass2)); // <8

// const exp = /work|world/
// const str1 = "Hello world"
// const str2 = "Hello word"
// const str3 = "Hello work"
// console.log(exp.test(str1));
// console.log(exp.test(str2));
// console.log(exp.test(str3));

// const exp = /[0-9][0-9][0-9][0-9]/
// const pin1 = "1234"
// const pin2 = "er56"
// const pin3 = "0987"
// console.log(exp.test(pin1));
// console.log(exp.test(pin2));
// console.log(exp.test(pin3));

//Quantifiers
//?
// const exp = /\d-?\d\d\d-?\d\d\d-?\d\d\d\d/; 
// const phone1 = "+1-234-567-8901";
// const phone2 = "12345678901";
// const phone3 = "1-2345678901";
// console.log(exp.test(phone1));   // true
// console.log(exp.test(phone2));   // true
// console.log(exp.test(phone3));   // true

//*
// const exp = /;*/;    // any qty symbols
// const str1 = "number1 = 3";
// const str2 = "number2 = 4;";
// const str3 = "number3 = 5;;;";
// console.log(exp.test(str1));   // true
// console.log(exp.test(str2));   // true
// console.log(exp.test(str3));   // true

//+
// const exp = /;+/;    // 1 and more
// const str1 = "number1 = 3";
// const str2 = "number2 = 4;";
// const str3 = "number3 = 5;;;";
// console.log(exp.test(str1));   // false
// console.log(exp.test(str2));   // true
// console.log(exp.test(str3));   // true

//{n}
// const exp = /\d{11}/; 
// const phone1 = "+12345678901";
// const phone2 = "1-2345678901";
// const phone3 = "12345678901";
// console.log(exp.test(phone1));   // true
// console.log(exp.test(phone2));   // false
// console.log(exp.test(phone3));   // true