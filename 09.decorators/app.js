"use strict";
// Decorators are function that we can attach to class, method, properties
// and work with these classes, methods, etc, or transform them
// Decorators lets to extends a class, adding an extra functionality
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// TS passes to decorators only 1 argument: the construction function of this class
function logged(constructorFn) {
    console.log(constructorFn);
}
console.log("################ Simple Decorator ################");
var Person = /** @class */ (function () {
    function Person() {
        console.log("Hello");
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// ################ Factory ################
function logging(value) {
    // if value is true return the looged function from above
    // we attach to class Car the result of this logging function, so the logged function
    return value ? logged : null;
}
console.log("################ Factory Decorator ################");
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        logging(true)
    ], Car);
    return Car;
}());
// ################ Advanced ################
function pritable(constructorFn) {
    constructorFn.prototype.print = function () {
        // each object created based on a class, that has the printable decorator
        // will automatically receive the print method
        console.log(this);
    };
}
console.log("################ Advanced Decorator ################");
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Green Plant";
    }
    Plant = __decorate([
        logging(true),
        pritable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
// we must put any otherwise ts will not recognize print() method
plant.print();
// ################ Method and Property Decorator ################
// factory decorator
// decriptor is from js and allows to add or modify an obj's property
function editable(value) {
    // target is either the constructor fc in a scatic class or prototype in an instanciated one
    return function (target, propName, descriptor) {
        // depending of the value the mehod calcBudget() can be editable or not
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    // on false this calcBudget cant be editable
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(true)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
console.log("################ Method Decorator ################");
var project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project);
console.log("################ Parameter Decorator ################");
// target is like above, method si method name
// paramIndex is what position has this param in the param list
function printInfo(target, methodName, paramIndex) {
    console.log("Target", target);
    console.log("Method", methodName);
    console.log("Index", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = '';
        this.name = name;
    }
    // the index in this case is zero, because the param list is an array
    Course.prototype.printStundentNr = function (printAll, mode) {
        if (printAll) {
            console.log(100000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(0, printInfo)
    ], Course.prototype, "printStundentNr", null);
    return Course;
}());
var course = new Course("Super Dooper");
course.printStundentNr(true, "React");
course.printStundentNr(false, "Javscript");
