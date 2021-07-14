// undefined vs null
var x; // variable has been declared but has not yet been assigned a value
var y = null; //  is an assignment value. It can be assigned to a variable as a representation of no value
// console.log(typeof(x)); // undefined
// console.log(typeof(y)); // null

// --- Get a random number in a specific range
var min = 5;
var max = 10;
var randNum = Math.floor(Math.random() * (max - min + 1)) + min;

// randon character [1] >
function generateRandomAlphaNum(len) {
  var rdmString = "";
  for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
  return rdmString.substr(0, len);
}
// console.log(generateRandomAlphaNum(10));

// --- randon chatacter [2]
function rndChar(n) {
  if (arguments.length == 0) {
    let rndAscii = Math.floor(Math.random() * (122 - 97 + 1)) + 97; // (max - min + 1) + min
    let rndChar = String.fromCharCode(rndAscii);
    return rndChar;
  } else {
    let rndChar = "";
    for (let i = 0; i < n; i++) {
      let rndAscii = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
      rndChar += String.fromCharCode(rndAscii);
    }
    return rndChar;
  }
}

// --- Numberic Conversion
let str = "123"; // typeof str --> string
str = Number(str); // typeof str --> number
