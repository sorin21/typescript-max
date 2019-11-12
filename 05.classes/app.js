"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // in ts we can create a property in the constructor, like we created username
    function Person(name, username) {
        this.username = username;
        this.type = "man";
        this.age = 27;
        // this.name reffers to public name from above
        // the name after equal reffers to name received by constructor
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old person");
    };
    // if we want to set the type from outside
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Sorin", "Kiddo");
// console.log(person);
// we can access only name and username, because they are public
// console.log(person.name, person.username);
// person.printAge();
// won't work with private method
// person.setType("Cool gentelman ");
// INHERITANCE
var Cristina = /** @class */ (function (_super) {
    __extends(Cristina, _super);
    // name = "Cristina";
    function Cristina(username) {
        var _this = 
        // super reffers to parent class
        _super.call(this, "Cristina", username) || this;
        _this.age = 21;
        return _this;
    }
    return Cristina;
}(Person));
var cristina = new Cristina("Gaina");
// console.log(cristina);
// GETTERS  AND SETTERS
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default 0";
    }
    Object.defineProperty(Plant.prototype, "species", {
        // to read a prop use get
        get: function () {
            return this._species;
        },
        // ts will pass this value parameter
        // to set a prop use set
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
// console.log(plant.species);
plant.species = "Musetel";
// console.log(plant.species);
// STATIS PROPERTIES AND METHODS
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumferince = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
// console.log(Helpers.PI);
// console.log(Helpers.calcCircumferince(8));
// ABSTRACT CLASSES
// you can't instanciete
// you can only inherit from it, it used like blue print
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super Javascript project!");
console.log(newProject);
// PRIVATE CONSTRUCTOR
// singleton class
var OnlyOne = /** @class */ (function () {
    // this is available only in this class
    // private constructor(public readonly name: string) {}
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        // check if this class was instantiated
        if (!OnlyOne.instance) {
            // otherwise create a new instance
            OnlyOne.instance = new OnlyOne('The only one');
        }
        // if it was instantiated return the instance
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
;
// this class can't be intantiated 
// let wrong = new OnlyOne("The only one!");
var right = OnlyOne.getInstance();
console.log(right.name);
// because name is a public property
// right.name = "Something else";
// console.log(right.name);
