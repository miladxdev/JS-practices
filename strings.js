const txt = 'Hello Worlds';

let len = txt.length;
let arr =  txt.split(''); // convert to array
let txt3 = txt.slice(0, -1);
let txt4 = txt.substring(0, 3); // cant accept negative indexes!
let txt5 = txt.substr(0, 5); // 2nd param is length
let txt6 = txt.replace(/o/ig, '0'); // 'i'nsensitive and 'g'lobal
let txt7 = txt.charAt(6); // returns W

// for (i = len-1; i > -1; i--) {
//     txt2 += txt1[i];
// }

console.log(txt6);