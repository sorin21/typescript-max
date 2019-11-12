"use strict";
console.log('it is wroking');
// NUMBER
var myRealAge1;
myRealAge1 = 27;
// STRING 
var myName = 'Max';
// myName = 28;
// ARRAY
// any makes this array to be with 
// strings or numbers
var hobbies = ["Footbal", "Cooking"];
hobbies = [100];
// console.log('hobbies', hobbies[0]);
// TUPLES
// tuples are arrays with mixt types, with a fixed number of elements 
// so this array can have only 2 items, 1st string, 2nd number
var address = ["My street", 77];
// ENUM
// enum makes number more expresive
// these values Gray, Blue, etc stands for integers, numbers
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Blue"] = 100] = "Blue";
    Color[Color["Red"] = 101] = "Red"; // 101
})(Color || (Color = {}));
var myColor = Color.Gray;
// console.log(myColor);
// ANY
var car = "Audi";
// console.log(car);
car = { brand: 'BMW', series: 3 };
// console.log(car);
//FUNCTIONS
// string type here refers alwasy to returned value, to myName
function returnMyName() {
    return myName;
}
// console.log(returnMyName());
// VOID
// void means this fn should 
// not return anythig
function sayHello() {
    console.log('Hello !!!');
    // return myName;
}
// console.log(sayHello());
// ARGUMENT TYPES
function multipply(value1, value2) {
    return value1 * value2;
}
// console.log(multipply(2, 7)); 
// FUNCTION TYPES
// functions are types  on their own
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multipply;
// console.log(myMultiply(2,3));
// OBJECTS
var userData = {
    name: "Max",
    age: 27
};
// userData = {}
// COMPLEX OBJECTS
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// UNION TYPES
var myRealAge = 27;
myRealAge = "27";
// myRealAge = true;
// CHECK TYPES
var finalValue = "A string";
if (typeof finalValue == "number") {
    // will not be output because finalValue is not a number
    console.log("Value is a number");
}
// NEVER 
// never returns anything
function neverReturns() {
    throw new Error('An error!');
}
// NULLABLE TYPES
// first in tsconfig.js enable strictNullChecks
// not allowed to assign null to types
var cantBenull = 12;
// cantBenull = null;
// workaround
var canBenull = 12;
// here canAlsoBeNull will be type any by default
var canAlsoBeNull;
canAlsoBeNull = null;
// here is not any anymore
// will be only type null
var canThisBeAny = null;
canBenull = 22;
var canThisBeAny2 = null;
canThisBeAny2 = 22;
// SPREAD OPERATOR
var numberss = [1, 4, 33, 99];
// when we use a function and pass it to it,it calls spread
// because will spread out an array in individual items
console.log(Math.max.apply(Math, numberss));
// REST 
// when we don't know how many parameters we receive
// when we create our function, it calls rest
// because will take all parameters in put into an array
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
// console.log(makeArray(2, 4, 55));
// REST & TUPLES(typescript ver 3)
function printInfo(name, age) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
function printInfoTuples() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
printInfoTuples('Max', 3);
