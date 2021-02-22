class Car {
    constructor(company, brand, year) {
        this.company = company;
        this.brand = brand;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
    info() {
        return `You have a ${this.company} ${this.brand} ${this.year}
        (build ${this.age()} years ago)`;
    }
}
let myCar1 = new Car('Ford', 'Mustang', 1969);

let carArr = JSON.stringify(myCar1);
console.log(typeof(carArr));

