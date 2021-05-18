

let array = [];

// don't do this
let book1 = 'Animal Farm';
let book2 = 'Gambler';
let book3 = '1984';

// do this
let books = ['Animal Farm', 'Gambler', '1984'];

// console.log(books); 
// // [ 'Animal Farm', 'Gambler', '1984' ]

// console.log(books[0]); // Animal Farm

// console.log(books[1]); // Gambler

// console.log(books[2]); // 1984

// console.log(books.length); // 3

// console.log(books.pop()); // 1984


books.push('clean code');
// [ 'Animal Farm', 'Gambler', '1984', 'clean code' ]

books.pop();
// [ 'Animal Farm', 'Gambler', '1984' ]

books.unshift('a book');
// [ 'a book', 'Animal Farm', 'Gambler', '1984' ]

books.shift();
// [ 'Animal Farm', 'Gambler', '1984' ]

books.forEach(function(value, index) {
    console.log(value + ' is index '+ index);
});
// Animal Farm is index 0
// Gambler is index 1
// 1984 is index 2