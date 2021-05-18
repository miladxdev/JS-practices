
var myObj = {
    name: "milad",
    age: 25,
    city: "Iran"
};

// ...convert into JSON
var myJson =  JSON.stringify(myObj);

// ...convert into Object
var object = JSON.parse(myJson);

// console.log(typeof(myJson));

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);
console.log(typeof json);

let user = {
  sayHi() { // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined, // ignored
  name: '11'
};

// console.log(JSON.stringify(user));

let meetups = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"]
  }
};

// console.log( JSON.stringify(meetups));
/* The whole structure is stringified: */


// The important limitation: there must be no circular references.

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "john"}, {name: "ann"}],

  
};

meetup.place = room;      // meetup references room
room.occupiedBy = meetup; // room references meetup

// console.log(JSON.stringify(meetup)); // Error: Converting circular structure to JSON
// console.log( JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number'])); // fix problem

// JSON parse -------------------------------
let userData = '{"name": "john", "age": 35}';
let userEnc  = JSON.parse(userData);
// console.log(userEnc);

let strServer = '{"title": "conference", "date": "2017-11-30T12:00:00.000Z"}';
let meetupLoc = JSON.parse(strServer);
console.log(meetupLoc);
// console.log(meetupLoc.date.getDate()); // TypeError: meetupLoc.date.getDate is not a function
// fixing the problem
let meetupFix = JSON.parse(strServer, function(key, value) { // reviver function
  if (key == 'date') return new Date(value);
  return value;
});
console.log(meetupFix.date.getFullYear()); 