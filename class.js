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
// cat.sound();



class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
    static createToday() {
        return new this("Today's digest", new Date());
    }
}
// that’s not a method of an article, but a method of the whole class.
let article = Article.createToday();
// console.log( article );



// --- Private and protected properties and methods ---
// Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.
// External interface – methods and properties, accessible also from outside the class.

// Let’s make a simple coffee machine class first:
class CoffeeMachine1 {
    waterAmount = 0; // public property

    constractor(power) {
        this.power = power;  // public property
        console.log(`created a coffee-machine, power: ${power}`);
    }

}
// create the coffee machine
let coffeeMachine1 = new CoffeeMachine1(100);

// add water
coffeeMachine1.waterAmount = 200;
// console.log(coffeeMachine1);



// --- Protected properties ---
class CoffeeMachine2 {
    _waterAmount = 0; // _Protected properties 

    set waterAmount(value) {
        if(value < 0) {
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount() {
        return this.waterAmount;
    }

    constructor(power) {
        this._power = power;
    }

    get power() { // Read-only “power” can't change it - no set just get
        return this._power;
    }
}

let coffeeMachine2 = new CoffeeMachine2(100);

// add water
coffeeMachine2.waterAmount = -10; 
coffeeMachine2.power = 1500;
// console.log(coffeeMachine2); 
// CoffeeMachine { _waterAmount: 0, _power: 100 }
// Now the access is under control, so setting the water amount below zero becomes impossible.



// --- Getter/setter functions ---
class CoffeeMachine {
    _waterAmount = 0;

    setWaterAmount(value) {
        if(value < 0) value = 0;
        this._waterAmount = value;
    }

    getWaterAmount() {
        return this._waterAmount;
    }
}

let coffeeMachine = new CoffeeMachine();
coffeeMachine.setWaterAmount(100);
console.log(coffeeMachine);


// --- Private “#waterLimit ---”
// Privates should start with #. They are only accessible from inside the class.
