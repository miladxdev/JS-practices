// Generate an array of numbers with numbers from 0 to max
var numsArray = [], max = 30;
for(let i = 0; i < max; i++) {
    numsArray.push(i);
}
// console.log(numsArray);


// typeof vs instanceof Array
var array = ["A", "B", "C"];
// onsole.log(typeof(arr)); // object
// console.log(arr instanceof Array); // true


//Shuffle an array of numbers
var numbers = [-20, -10, -5 , 0 , 5 , 10 , 20];
numbers = numbers.sort(function(){ return Math.random() - 0.5});
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
})

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
let ranks = ['A', 'B', 'C'];
// ranks.forEach(function (e) {
//     console.log(e);
// });
// ranks.forEach(e => console.log(e));  // ES6

// string is an array
let animal = 'sheep';
// console.log(animal[1]); // h

// reverse an string (1)
function myReverse(str) {
    let stack = [];
    len = str.length-1;
    while (len > -1) {
        stack.push(str[len]);
        len--;
    }
    console.log(stack.join(''));
}
//myReverse('hello');

// reverse an string (2)
function reverse(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reversestr = '';
    while(stack.length > 0) {
        reversestr += stack.pop();
    }
    console.log(reversestr);
}
// reverse('France');


// Deleting elements using JavaScript Array’s splice() method
let score = [25, 45, 55, 66];
deletedScore = score.splice(0, 3);
// console.log(deletedScore,score);

// extract subset elements of an array and add them to the new array
let allColors = ['red', 'green', 'blue', 'yellow', 'purple'];
let rgb = allColors.slice(0, 3); //doesn’t change the source array.
//console.log(rgb, allColors);

// Clone an array
let angles = [0, 45, 90, 135];
let cloneAngles = angles.slice();
//console.log(cloneAngles);

// Convert array-like objects into arrays
// var list = [].slice.call(document.querySelectorAll('p'));


// every() tests every element in an array.
let planet = [3, 5, 8];
// let myResult = planet.every(function (v) {
//     return v > 2;
// });
let myResult = planet.every( v => v > 4); // ES6
//console.log(myResult);


// In this example, we pass the range object to the every() 
// method as the second argument. And inside the callback() function,
// we reference the range object using the this keyword.
let range = {
    min: 0,
    max: 360
};
let radian = [0, 30, 60, 90, 120, 180];

let isInRange = radian.every(function(v) {
    return v >= this.min && v <= this.max;
}, range);

console.log(isInRange);