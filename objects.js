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
console.log(user.age);