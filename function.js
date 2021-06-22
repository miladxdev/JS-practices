function sayHello(fname, lname) {
  console.log(`Hello ${fname} ${lname}. welcome back!`);
}

sayHello("Walter", "White");
console.log(sayHello.length); // 0 : number of the paramrters

// the rest parameters
function sumAll(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

console.log(sumAll(1, 5, 10, 4));

// Named Function Expression NFE -------------------
let sayHi = function func(who) {
  // func is the name
  alert(`Hello, ${who}`);
};
// There are two special things about the name func, that are the reasons for it:
// It allows the function to reference itself internally.
// It is not visible outside of the function.

// let login = function(name) {
//     if (name) {
//         console.log( `hello ${name}` );
//     } else {
//         login("guest");
//     }
// };
// let welcome = login;
// login = null;
// welcome(); // Error, the nested sayHi call doesn't work any more!

// FIX
let login = function nested_login(name) {
  if (name) {
    console.log(`hello ${name}`);
  } else {
    nested_login("guest"); // nested function
  }
};

let welcome = login;
login = null;
welcome(); // works
