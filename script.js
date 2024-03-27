// class in JavaScript

class Car {

    // Custom Constructor
    constructor(averagePetrol) {
        this.averagePetrol = averagePetrol
        console.log('Creating New Objects')
    }

    // Methods
    start() {
        console.log('start')
    }

    stop() {
        console.log('stop')
    }

    printbrand(brand) {
        this.brand = brand
    }

}

// Objects
let fortuner = new Car('20'); //Constructor Invoked automatically with new keyword
let Lexus = new Car('30'); //Constructor Invoked automatically with new keyword
fortuner.brand = 'Fortuner'
console.log(fortuner)


// Inheritance in JavaScript

class Parent {

    hello() {
        console.log('hello function')
    }
}

class Child extends Parent {};

let obj = new Child();

// inherit method from parent class
console.log(obj.hello())


// If child and parent have same method 
// child method will be used (Method Overriding)