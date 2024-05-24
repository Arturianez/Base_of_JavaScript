//Arrays
// const newArray = [1,2,3,4,5,6,7,8];
// console.log(newArray);

// const users = new Array("Tom", "Bill", "Alice");
// const people = ["Sam","John","Kate"];
// console.log(users);
// console.log(people);

// const users = [];
// users[1] = "Tom";
// users[2] = "Kate";
// console.log(users[1]); // Tom
// console.log(users[2]); // Kate

// Array.from
// const array = Array.from("Arthur");
// console.log(array); //  ['A', 'r', 't', 'h', 'u', 'r']

// const numbers = [1,2,3,4];
// const array = Array.from(numbers, n => n * n);
// console.log(array);

//Length
// const fruit = [];
// fruit[0] = "Apple";
// fruit[1] = "Pear";
// fruit[2] = "Plum";
 
// console.log("In array fruit ", fruit.length, " elements");
// for(let i=0; i < fruit.length; i++)
//     console.log(fruit[i]);

//Arrays and spread
// const users = ["Tom","Sam","Bob"];
// console.log(...users); // Tom Sam Bob
// console.log(users); // ['Tom', 'Sam', 'Bob']

// const men = ["Charlie", "Ron"];
// const women = ["Monika", "Bella"];
// const people = [...men, "Alex", ...women]
// console.log(people);

// const people = ["Andy", "Nicole","Matt"];
// function print(first, second, third) {
//     console.log(first);
//     console.log(second);
//     console.log(third);
// }
// print(...people);

//Copy arrays
// const people = ["Sam","Tom","Bob"];
// const employees = [...people];
// employees[0] = "Dan";
// console.log(employees); // ["Dan", "Tom", "Bob"]
// console.log(people); //  ["Sam", "Tom", "Bob"]

// const people = [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}];
// const employees = [...people];
// employees[0].name = "Dan"; // if used {name: "Dan"} then changed
// console.log(employees);     //  [{name:"Dan"}, {name:"Tom"}, {name:"Bob"}]
// console.log(people);        //  same, because copy object/link{}

// Array Operations:

//Push
// const people = [];
// people.push("Tom")
// people.push("Sam")
// people.push("Mike", "Bob")
// console.log("In array people elements: ", people.length);
// console.log(people);

//unshift()
// const people = ["Bob"]
// people.unshift("First element")
// console.log(people);
// people.unshift("new first element", "new second first element")
// console.log(people);

//splice()
// const people = ["Tom", "Sam"]
// people.splice(3,4,"third element", "fourth element")
// console.log(people);

//pop()
// const people = ["Tom","Sam","Bob","Mike"]
// const lastPerson = people.pop()  // remove last element
// console.log(lastPerson); // show remove element
// console.log(people);

//shift()
// const people = ["Tom", "Sam", "Bob", "Mike"];
// const first = people.shift(); // remove first element
// console.log(first);
// console.log(people);

//splice()
// const people = ["Tom", "Sam", "Bill", "Alice", "Kate"];
// const deleted = people.splice(3);
// console.log(deleted); // remove from index 3(incl)
// console.log(people);
// remove and replace
// const people = ["Tom", "Sam", "Bob", "Alice", "Kate"];
// const deleted = people.splice(1,3,"Alex","Mike")
// console.log(deleted); // ["Sam", "Bob", "Alice"]
// console.log(people); // ["Tom", "Alex", "Mike", "Kate"]

//slice()
// const users = ["Tom", "Sam", "Bill"];
// console.log(users);
// const people = users.slice();
// people[1]="Mike"
// console.log(users);
// console.log(people);

// const users = ["Tom", "Sam", "Bill", "Alice", "Kate"];
// const people = users.slice(2,4)
// console.log(people);

//copyWithin()
// const users = ["Tom", "Sam", "Bob", "Alice", "Kate"];
// const people = users.copyWithin(1,3,5);
// console.log(people); // ["Tom", "Alice", "Kate", "Alice", "Kate"]

//toSpliced()
// const people = ["Tom", "Sam", "Bill", "Alice", "Kate"];
// const range = people.toSpliced(1,3) // excluded
// console.log(range);
// console.log(people);

//concat()
// const men = ["Tom", "Sam","Bob"]
// const women = ["Alice", "Kate"]
// const people = men.concat(women)
// console.log(people);

//join()
// const people = ["Tom", "Sam", "Bob"];
// const peopleToString = people.join("; ");
// console.log(peopleToString); // Tom; Sam; Bob

//sort() and toSorted()
// const people = ["Tom", "Sam", "Bob"];
// people.sort()
// console.log(people);
// const numbers = [200, 15, 5, 35];
// const sorted = numbers.toSorted( (a, b) =>  a - b);
// console.log(sorted);  // [5, 15, 35, 200]

//reverse() and toReversed()
// const people = ["Tom", "Sam", "Bob"];
// people.reverse();
// console.log(people); // ["Bob", "Sam", "Tom"]
//without changed
// const people = ["Tom", "Sam", "Bob"];
// const reversed = people.toReversed();
// console.log(people);  // ["Tom", "Sam", "Bob"]
// console.log(reversed); // ["Bob", "Sam", "Tom"]

//indexOf() and lastIndexOf()
// const people = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
// const firstIndex = people.indexOf("Tom");
// const lastIndex = people.lastIndexOf("Tom");
// const otherIndex = people.indexOf("Mike");
// console.log(firstIndex); // 0
// console.log(lastIndex);  // 3
// console.log(otherIndex); // -1, if dont have element

//includes()
// const people = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
// console.log(people.includes("Tom"));  // true - Tom here
// console.log(people.includes("Kate"))  // false - Kate not here

// const people = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
// console.log(people.includes("Bob", 2)); // true
// console.log(people.includes("Bob", 4))  // false

//every()
// const numbers = [1,-12,8,-4,25,42]
// const passed = numbers.every(n => n > 0)
// console.log(passed); // false

//some()
// const numbers = [ 1, -12, 8, -4, 25, 42 ];
// const passed = numbers.some(n => n > 0);
// console.log(passed); // true, if 1 element of array correct

//filter()
// filter(callbackFn)
// const numbers = [1,-12,8,-4,25,42]
// const filterNumbers = numbers.filter(n => n > 0)
// console.log(filterNumbers); // [1, 8, 25, 42]

//forEach()
// const numbers = [1,2,3,4,5,6]
// numbers.forEach( n => 
//     console.log("Square of ",n,"equal", n*n)
// );

//map()
// const numbers = [ 1, 2, 3, 4, 5, 6];
// const squares = numbers.map(n => n*n)
// console.log(squares);

//find()
// const numbers = [1, 2, 3, 5, 8, 13, 21, 34];
// let found = numbers.find(n => n > 10)
// console.log(found); // only first correct element

//findLast()
// const numbers = [1, 2, 3, 5, 8, 13, 21, 34];
// let found = numbers.find(n => n < 10 );
// console.log(found); // only last correct element

//findIndex()
// const numbers = [1, 2, 3, 5, 8, 13, 21, 34];
// let foundIndex = numbers.findIndex(n => n > 10 );
// console.log(foundIndex); // only index + logic like find()

//findLastIndex()
// const numbers = [1, 2, 3, 5, 8, 13, 21, 34];
// let foundIndex = numbers.findLastIndex(n => n < 10 );
// console.log(foundIndex);  // only index + logic like findLast()

//flat()
// const people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
// const flattenPeople = people.flat(); // level default
// console.log(flattenPeople); // ["Tom", "Bob", "Alice", "Kate", ["Sam", "Ann"]]

// const people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
// const flattenPeople = people.flat(2); // level 2 or "Infinity", if dont know how many levels
// console.log(flattenPeople); // ["Tom", "Bob", "Alice", "Kate", "Sam", "Ann"]

//with()
// const people = ["Tom", "Bob", "Sam"];
// const modified = people.with(0, "changed")
// console.log(people); // ["Tom", "Bob", "Sam"]
// console.log(modified); // ["changed", "Bob", "Sam"]

//reduce()
// const numbers = [1,2,3,4,5]
// const sum = numbers.reduce((prev,current) => prev += current) // prev - first element
// console.log(sum); // 15

// const numbers = [1,2,3,4,5]
// const sum = numbers.reduce((prev, current) => prev +current, +10) // start from 10
// console.log(sum); // 25

//Combination of methods
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// const people = [
//     new Person("Tom", 38), new Person("Kate", 31), 
//     new Person("Bob", 42), new Person("Alice", 34), 
//     new Person("Sam", 25)
// ];
// const isAgeMoreThan33 = (p)=>p.age > 33;
// const getPersonName = (p)=>p.name;
// const printPersonName = (p)=>console.log(p);
 
// const view = people
//                 .filter(isAgeMoreThan33)
//                 .map(getPersonName)
//                 .forEach(printPersonName);

//Inheritance
// simple
// const team1 = ["Tom", "Sam", "Bob"];
// for(const person of team1) {
//     console.log(person);
// }
// medium 
// const team2 = { 
//     name: "Barcelona",              // name
//     members: ["Tom", "Sam", "Bob"]  // players
// };
// for(const person of team2.members) {
//     console.log(person);
// }
//hard
// class Team extends Array{
     
//     constructor(name, ...members){
//         super(...members);
//         this.name = name;
//     }
// }
// // create object team
// const barcelona = new Team("Barcelona", "Tom", "Sam", "Bob");
// console.log(barcelona);     // Team(3) ["Tom", "Sam", "Bob"]
 
// for(const person of barcelona) {
//     console.log(person);
// }
// barcelona.push("Tim");      // add one element
// console.log(barcelona);     // Team(4) ["Tom", "Sam", "Bob", "Tim"]
// barcelona.splice(1, 1);     // remove second element, 1 - index
// console.log(barcelona);     // Team(3) ["Tom", "Bob", "Tim"]