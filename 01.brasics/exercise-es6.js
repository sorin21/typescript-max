"use strict";
// Exercise 1 - Maybe use an Arrow Function?
// var double = function(value) {
//   return value * 2;
// };
// console.log(double(10));
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var double = function (value) {
    return value * 2;
};
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
// var greet = function (name) {
//   if (name === undefined) { name = "Max"; }
//   console.log("Hello, " + name);
// };
// greet();
// greet("Anna");
var greet = function (name) {
    if (name === void 0) { name = 'Dan'; }
    if (name === undefined) {
        name = "Max";
    }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
// var numbers = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbers));
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4 - I have to think about Exercise 3 ...
// var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
// console.log(newArray);
var newArray = [55, 20];
var myArray = __spreadArrays(newArray, numbers);
console.log(myArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
