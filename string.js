const txt = "Hello Worlds";

let len = txt.length;
let arr = txt.split(""); // convert to array
let txt3 = txt.slice(0, -3);
let txt4 = txt.substring(0, 3); // cant accept negative indexes!
let txt5 = txt.substr(0, 5); // 2nd param is length
let txt6 = txt.replace(/o/gi, "0"); // 'i'nsensitive and 'g'lobal
let txt7 = txt.charAt(6); // returns W
let txt8 = txt.concat(" ", "and univers");
let txt9 = txt.padStart(15, "#");
let txt10 = txt.padEnd(20, "-");
let txt11 = txt.includes("W"); // true
console.log(txt3);

// for (i = len-1; i > -1; i--) {
//     txt2 += txt1[i];
// }

// String Conversion
let value = true;
// console.log(typeof value);
value1 = String(value);
// console.log(typeof value);

const message = "    hey man!  ";
let trimed = message.trim(); // trim white spaces from begining and the end
// console.log(trimed);

let str = "As sly as a fox, as strong as an ox";
let target = "as";
let pos = -1;

while ((pos = str.indexOf(target, pos + 1)) != -1) {
  // console.log(pos);
}

function rndChar(n) {
  let rndChar = "";

  for (let i = 0; i < n; i++) {
    let rndAscii = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
    rndChar += String.fromCharCode(rndAscii);
  }

  return rndChar;
}
