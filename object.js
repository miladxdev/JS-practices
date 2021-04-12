/*
class Person { // ES6
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}
*/

// Create an object constructor
// same as Class
function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}
Person.prototype.age = 25;
var myUser = new Person("milad", "gharibi");
// console.log(myUser.age);

// copy an object
let user1 = { name: 'john'};
let user2 = user1;
user2.name = 'mike'; // !!! this will change user1.name property
// console.log(user1);


// clone an object [1]
let admin = {
    name: 'john',
    age: 30
};
let clone = {}; // new empty object
// copy all user properties
for (let key in admin) {
    clone[key] = user1[key];
}
clone.name = "jess"; // this doesnt effect on the original object
// console.log(admin);


// clone an object [2]
let book1 = { 
    name1: 'animal farm',
    author: 'George Orwell',
    year: 1945
}
let book2 = {
    name: 1984,
    author: 'George Orwell',
    year: 1949,
    pages: 328
}
let novels = {}; // new empty objct
// Object.assign(novels, book1, book2); // copies all properties from book1 & book2 into novels. If the copied property name already exists, it gets overwritten.
// console.log(novels);
let cloneBook = Object.assign({}, book2);
// console.log(cloneBook.name in cloneBook);
let cars = {};
for (let key in cars) {
    //console.log(key);
}

// Object constractor
function City(name) { // can convert to class
    this.name = name;  
    this.sayCity = function() {
        // console.log("this is "+this.name);
    }
}
let myCity = new City('fooladshahr');
myCity.sayCity();


// let fname = "John";
// let lname = "Doe";
// let password = 123456;
// let isAdmin = false;

let user = {
    fname: 'John',
    lname: 'Doe',
    fullName: function() {
        return this.fname + " " 
        + this.lname;
    },
    password: 123456,
    isAdmin: false
}

// "object constructor" syntax
//let user = new Object(); 

// "object literal" syntax
//let user = {};  

for (key in user) {
    // console.log(user[key]);
} 


// MAP and SET - Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
let john = { name: "John" };

let map = new Map();
map.set('1', 'srt1');
map.set(1, 1234);
map.set(true, 'bool1');
map.set(john, 555); // object as key

// console.log(map.size);
// console.log(map.get(john));


// Iteration over Map
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',     50]
]);

for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}

for (let amount of recipeMap.values()) {
    console.log(amount);
}

for (let entry of recipeMap) {
    console.log(entry);
}
recipeMap.forEach( (value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});