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
var user = new Person("milad", "gharibi");
// console.log(user.age);

// copy an object
let user1 = { name: 'john'};
let user2 = user1;
user2.name = 'mike'; // !!! this will change user1.name property
// console.log(user1);


// clone an object
let admin = {
    name: 'john',
    age: 30
};
let clone = {}; // new empty object
// copy all user properties
for (let key in admin) {
    clone[key] = user[key];
}
clone.name = "jess"; // this doesnt effect the original object
// console.log(admin);


