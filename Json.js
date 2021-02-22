
var myObj = {
    name: "milad",
    age: 25,
    city: "Iran"
};

// ...convert into JSON
var myJson =  JSON.stringify(myObj);

// ...convert into Object
var object = JSON.parse(myJson);

console.log(typeof(myJson));