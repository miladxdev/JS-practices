// In JavaScript, a callback is a function passed into another function as an argument to be executed later.
var users = ["Yara", "Ellie", "Joel"]; // Database

function sendUser(username, callback) {

    setTimeout(function() {
        users.push(username);
        callback();
    }, 2000);
}

function getUsers() {
    setTimeout(function() {
        console.log(users);
    }, 1000);
}

sendUser("Abbi", getUsers);


// // this is not working

// var users = ["Tommy", "Ellie", "Joel"];

// function addUser(username) {
//     setTimeout(function() {
//         users.push(username);
//     }, 2000);
// }

// function getUsers() {
//     setTimeout(function() {
//         console.log(users);
//     }, 1000);
// }

// addUser("Abbi");

// getUsers();

