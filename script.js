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



// Encapsulation
class Person {
    constructor(name, age) {
        this._name = name; // Private property
        this._age = age; // Private property
    }

    getName() {
        return this._name; // Public method
    }

    getAge() {
        return this._age; // Public method
    }
}

let person = new Person('John', 30);
console.log(person.getName());
console.log(person.getAge()); 



// Polymorphism 
class Animal {
    makeSound() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Woof!');
    }
}

class Cat extends Animal {
    makeSound() {
        console.log('Meow!');
    }
}

let myDog = new Dog();
let myCat = new Cat();

myDog.makeSound();
myCat.makeSound(); 

