"use strict";
// ################ Interface used as argument Type ################
function greets(person) {
    console.log("Hello " + person.firstName);
}
function changeName(person) {
    person.firstName = "Cristina";
}
// ################ Object type Interface ################
var person = {
    firstName: "Sorin",
    // this is the unknown propName, wich is an array
    hobbies: ['sports', 'music'],
    // age: 39
    greet: function (lastName) {
        console.log("I am " + this.firstName + " " + lastName);
    }
};
// if we pass an obj here and not a const with an obj
// typescript will stricly check each prop if was defined
// greet({firstName: 'Dan', age: 27});
greets(person); // Hello Sorin
changeName(person); // Hello Cristina
greets(person); // I am Cristina Dragomir
person.greet("Dragomir");
// ################ Class implements Interface ################
// we need to make sure that we implement all props and methods defined in interface
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = '';
        this.lastName = '';
    }
    Person.prototype.greet = function (lastName) {
        console.log("I am " + this.firstName + " " + lastName);
    };
    ;
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Doubth";
greets(myPerson); // Hello Maximilian
myPerson.greet(myPerson.lastName); // I am Maximilian Doubth
var myDoubleFunc;
myDoubleFunc = function (number1, number2) {
    return (number1 + number2) * 2;
};
console.log(myDoubleFunc(10, 20));
var oldPerson = {
    age: 27,
    firstName: 'Kiddo',
    // we don't have to have hoobies because this is optional
    // hobbies: ['sports', 'music'],
    greet: function (lastName) {
        console.log("Hello Mr " + lastName);
    }
};
console.log(oldPerson);
