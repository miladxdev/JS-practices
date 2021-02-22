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
        super(company, year);
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
circle3 = new Cricle(7);

console.log(myCar1);
