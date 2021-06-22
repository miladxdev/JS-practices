// Generate an array of numbers with numbers from 0 to max
var numsArray = [],
  max = 30;
for (let i = 0; i < max; i++) {
  numsArray.push(i);
}
// console.log(numsArray);

// typeof vs instanceof Array
var array = ["A", "B", "C"];
// onsole.log(typeof(arr)); // object
// console.log(arr instanceof Array); // true

//Shuffle an array of numbers
var numbers = [-20, -10, -5, 0, 5, 10, 20];
numbers = numbers.sort(function () {
  return Math.random() - 0.5;
});
//console.log(numbers);

// Get a random item from an array
var items = [1, 2, 3, 4, 5, 6, 7, 8];
var randomItem = items[Math.floor(Math.random() * items.length)];
// console.log(randomItem);

// concat two or more arrays
var arr1 = ["A", "B", "C"];
var arr2 = ["D", "E", "F"];
var arr3 = arr1.concat(arr2);
// console.log(arr3);

// for each loop
var names = ["Ellie", "Joel", "Abbi"];
names.forEach((value, index, arr) => {
  // console.table(`${arr} ${index} ${value}`);
});

// Get the max / min values in an array of numbers
var numbs = [5, 12, 8, 44, 16, 18];
var maxNum = Math.max.apply(Math, numbs);
var minNum = Math.min.apply(Math, numbs);
//console.log(minNum);

// Empty an array
var days = ["sunday", "friday"];
days.length = 0;
// console.log(days);

// for each loop

let ranks = ["A", "B", "C"];

ranks.forEach(function (e) {
  // console.log(e);
});

// ranks.forEach(e => console.log(e));  // ES6

// string is an array
let animal = "sheep";
// console.log(animal[1]); // h

// reverse an string (1)
function myReverse(str) {
  let stack = [];
  len = str.length - 1;
  while (len > -1) {
    stack.push(str[len]);
    len--;
  }
  console.log(stack.join(""));
}
//myReverse('hello');

// reverse an string (2)
function reverse(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversestr = "";
  while (stack.length > 0) {
    reversestr += stack.pop();
  }
  // console.log(reversestr);
}
// reverse('France');

// -------- splice -------- [delete]
// Deleting elements using JavaScript Array’s splice() method
let score = [25, 30, 40, 55, 66, 70];
let deletedScore = score.splice(1, 2); // from index 1, delete 2 item
// let delScore = score.splice(2, 4, 'new', 'new'); // from index 2, remove 4 item and replace with new items
// score.splice(3, 0, 'new'); // remove 0 item and insert new item
// score.splice(-1, 0, 100, 200); // from index -1 delete 0 and insert 11 and 22
// console.log(deletedScore,score);
// console.log(score);

// -------- slice -------- [copy]
// extract subset elements of an array and add them to the new array
let allColors = ["red", "green", "blue", "yellow", "purple"];
let rgb = allColors.slice(0, 3); //doesn’t change the source array.
// console.log(rgb, allColors);

// -------- Split -------- [string -> array]
let games = "GTA V, Evil 4, Witcher 3";
let arr_games = games.split(",");
let str_games = arr_games.join("/"); // array -> string
// console.log(str_games);
// for (let game of arr_games) console.log(game.trim());

// Clone an array
let angles = [0, 45, 90, 135];
let cloneAngles = angles.slice();
//console.log(cloneAngles);

// Convert array-like objects into arrays
// var list = [].slice.call(document.querySelectorAll('p'));

// every() tests every element in an array. stops when result is false
let planet = [3, 5, 8];
let myResult = planet.every(function (v) {
  // console.log(v);
  return v > 2;
});
// let myResult = planet.every( v => v > 4); // ES6
// console.log(myResult);

// In this example, we pass the range object to the every()
// method as the second argument. And inside the callback() function,
// we reference the range object using the this keyword.

let range = {
  min: 0,
  max: 360,
};

let radian = [0, 30, 60, 90, 120, 180];

let isInRange = radian.every(function (v) {
  return v >= this.min && v <= this.max;
}, range);

// console.log(isInRange);

// find and findIndex
// If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.
let student = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 2, name: "Pete2" },
  { id: 3, name: "Mary" },
];
let search_st = student.find((item) => item.id == 2); // return one match or undefined
let filter_st = student.filter((item) => item.id < 3); // return an array
// console.log(filter_st);

// ---------- MAP
// returns the new value instead of item
let character = ["Bilbo", "Gandalf", "Nazgul"];
// character.map(item => console.log(item.length));

// sort(fn)
let shuffle_numbers = [10, -5, 5, 15, 8, 2];
shuffle_numbers.sort((a, b) => a - b);
// console.log(shuffle_numbers);

let countries = ["Österreich", "Andorra", "Vietnam"];
// console.log(countries.sort( (a, b) => a.localeCompare(b)));

function sum(arr) {
  let reducer = (sum, val) => sum + val;
  return arr.reduce(reducer);
}

// console.log(sum([1, 5, 4]));

// let user01 = {
//     name: 'milad',
//     email: 'milad@gmail.com'
// }
// let user02 = {
//     name: 'jack',
//     email: 'jack@gmail.com'
// }
// let user03 = {
//     name: 'monica',
//     email: 'monica@gmail.com'
// }

// deleting user using filter method
let allUsers = [
  {
    name: "milad",
    email: "milad@gmail.com",
  },
  {
    name: "jack",
    email: "jack@gmail.com",
  },
  {
    name: "monica",
    email: "monica@gmail.com",
  },
];

allUsers = allUsers.filter((value) => {
  return value.name != "milad"; // filter milad [user01]
});

console.log(allUsers);
// [
//   { name: 'jack', email: 'jack@gmail.com' },
//   { name: 'monica', email: 'monica@gmail.com' }
// ]

// ----- Spread syntax (...) ----
let numberStore = [0, 1, 2];
let newNumbers = [4, 5];
numberStore = [...numberStore, 3, ...newNumbers];
// console.log(numberStore);

let fruits = ["strawberry", "pear", "cherry"];
fruits = [...fruits, "blackberry"];
console.log(fruits);

// clone array
let artists = ["Antrax", "Metallica", "Megadeath"];
let singers = [...artists];
artists.push("Adele"); // singers = artist -> will change both!!!
// console.log(artists, singers);
