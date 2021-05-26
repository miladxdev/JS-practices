class Car {
    constructor(company, year) {
        this.company = company;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
    get info() {
        return `\n You have a ${this.company} ${this.brand} ${this.year}
        (build ${this.age()} years ago) \n`;
    }
}

class Model extends Car {
    constructor(company, brand, year) {
        super(company, year); // inherit this
        this.brand = brand;
    }
}

let myCar1 = new Model('Ford', 'Mustang', 1989);
let myCar2 = new Model('BMW', 'Jenna', 2006);

// -----------------------------------------------------

const pi = 3.14;

class Cricle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() { // d = 2r
        return 2 * this.radius;
    }
    get circumference() { // C = 2πr 
        return 2 * pi * this.radius;
    }
    get area() { // A = πr^2
        return pi * this.radius**2;
    }
}

circle1 = new Cricle(5);
circle2 = new Cricle(6);
// console.log(circle1.area);




class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs ${this.speed} km/h`);
    }
    stop() {
        console.log(`${this.name} stoped!`);
    }
    sound() {
        console.log('no sound!...');
    }
}

let animal = new Animal('Dog');
// animal.run(20);

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    sound() { console.log(`${this.name + this.color} says meeww...`) }
}

let cat = new Cat('catie', 'black');
cat.sound();




// prototype inheritance------------- only object or null and its read only

let _animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};

let _rabbit = {
    jumps: true,
    __proto__: _animal // animal is the prototype of rabbit
};

// rabbit.walk();
// console.log(Object.entries(rabbit));
