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


// get property values of the object:

console.log( user.fullName() ); // John Doe
console.log( user.password ); // 123456
console.log( user['isAdmin'] ); // false

for (key in user) {
    console.log(key);
} 
// fname
// lname
// fullName
// password
// isAdmin