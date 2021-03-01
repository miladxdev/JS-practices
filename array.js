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

// Get the max or the min in an array of numbers
var numbs = [5, 12, 8, 44, 16, 18];
var maxNum = Math.max.apply(Math, numbs);
var minNum = Math.min.apply(Math, numbs);
//console.log(minNum);

// Empty an array
var days = ["sunday", "friday"];
days.length = 0;
// console.log(days);

// arraya for each
let ranks = ['A', 'B', 'C'];
// ranks.forEach(function (e) {
//     console.log(e);
// });

ranks.forEach(e => console.log(e));  // ES6