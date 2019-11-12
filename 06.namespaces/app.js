"use strict";
// we use namespace to not pollute the global namespace
// we give to namespace a name
// we need to export the function to be accessed outiside namespace
Object.defineProperty(exports, "__esModule", { value: true });
// import namespaces
// import CircleMath = MyMath.Circle;
var circle_1 = require("./math/circle");
// console.log(MyMath.calculateRectangle(10, 20))
console.log(circle_1.calculateCircumference(3));
