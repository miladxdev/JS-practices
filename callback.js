// In JavaScript, a callback is a function passed into another function as an argument to be executed later.


function getUsers(callback) {
  setTimeout(() => {
    users = ["Tommy", "Joel", "Ellie"];
    callback();
  }, 2000);
}

getUsers(() => {
  console.log(users);
});


// let users = ["Tommy", "Ellie", "Joel"]; // Database

// function sendUser(username, callback) {
//     setTimeout(function() {
//         users.push(username);
//         callback();
//     }, 2000);
// }

// function getUsers() {
//     setTimeout(function() {
//         console.log(users);
//     }, 1000);
// }

// sendUser("Abbi", getUsers);


// // this is not working

// var users = ["Tommy", "Ellie", "Joel"];

// function addUser(username) {
//     setTimeout(function() {
//         users.push(username);
//     }, ping);
// }

// function getUsers() {
//     setTimeout(function() {
//         console.log(users);
//     }, 1000);
// }

// addUser("Abbi");

// getUsers();
