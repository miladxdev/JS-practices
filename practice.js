









// undefined vs null
var x; // variable has been declared but has not yet been assigned a value
var y = null; //  is an assignment value. It can be assigned to a variable as a representation of no value
// console.log(typeof(x)); // undefined
// console.log(typeof(y)); // null



// Get a random number in a specific range
var min = 5;
var max = 10;
var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
//console.log(randNum);

/*
function generateRandomAlphaNum(len) {
    var rdmString = "";
    for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
    return  rdmString.substr(0, len);

}
console.log(generateRandomAlphaNum(10));
*/

// eval( ) finction
//console.log(eval("2+3"));

// let yourName = prompt('Enter your name: ','john doe');
// console.log(yourName);

// let question = confirm("do you like apple?");
// console.log(question);


// Numberic Conversion
let str = "123";
console.log(typeof str);

str = Number(str);
console.log(typeof str);