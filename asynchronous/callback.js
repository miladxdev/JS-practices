// In JavaScript, a callback is a function passed into another function as an argument to be executed later.
var users = ["Yara", "Ellie", "Joel"];

function addUser(username, callback) {

    setTimeout(function() {
        users.unshift(username);
        callback();
    }, 2000);
}

function getUsers() {
    setTimeout(function() {
        console.log(users);
    }, 1000);
}

addUser("Abbi", getUsers);

/*
// this is not working

var users = ["sam", "Ellie", "Joel"];

function addUser(username) {
    setTimeout(function() {
        users.push(username);
    }, 2000);
}

function getUsers() {
    setTimeout(function() {
        console.log(users);
    }, 1000);
}

addUser("Abbi");

getUsers();

*/