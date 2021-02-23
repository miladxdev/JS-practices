// Generate an array of numbers with numbers from 0 to max
var numsArray = [], max = 30;
for(let i = 0; i < max; i++) {
    numsArray.push(i);
}
console.log(numsArray);


//Shuffle an array of numbers
var numbers = [-20, -10, -5 , 0 , 5 , 10 , 20];
numbers = numbers.sort(function(){ return Math.random() - 0.5});
//console.log(numbers);

