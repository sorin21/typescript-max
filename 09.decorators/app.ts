// Decorators are function that we can attach to class, method, properties
// and work with these classes, methods, etc, or transform them
// Decorators lets to extends a class, adding an extra functionality

// TS passes to decorators only 1 argument: the construction function of this class
function logged(constructorFn: Function) {
  console.log(constructorFn);
}
console.log("################ Simple Decorator ################");

@logged
class Person {
  constructor() {
    console.log("Hello");
  }
}


// ################ Factory ################

function logging(value: boolean): any {
  // if value is true return the looged function from above
  // we attach to class Car the result of this logging function, so the logged function
  return value ? logged : null;
}
console.log("################ Factory Decorator ################");

@logging(true)
class Car {

}


// ################ Advanced ################

function pritable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    // each object created based on a class, that has the printable decorator
    // will automatically receive the print method
    console.log(this);
  }
}
console.log("################ Advanced Decorator ################");

@logging(true)
@pritable
class Plant {
  name = "Green Plant";
}

const plant = new Plant();
// we must put any otherwise ts will not recognize print() method
(<any>plant).print();


// ################ Method and Property Decorator ################
// factory decorator
// decriptor is from js and allows to add or modify an obj's property
function editable(value: boolean) {
  // target is either the constructor fc in a scatic class or prototype in an instanciated one
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    // depending of the value the mehod calcBudget() can be editable or not
    descriptor.writable = value;
  }
}

function overwritable(value: boolean) {
  return function(target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    }
    return newDescriptor;
  }
}

class Project {
  @overwritable(true)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }
  
  // on false this calcBudget cant be editable
  @editable(true)
  calcBudget() {
    console.log(1000);
  }
}
console.log("################ Method Decorator ################");

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function() {
  console.log(2000);
}
project.calcBudget();
console.log(project)

console.log("################ Parameter Decorator ################");
// target is like above, method si method name
// paramIndex is what position has this param in the param list
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log("Target", target);
  console.log("Method", methodName);
  console.log("Index", paramIndex);
}

class Course {
  name: string = '';
  constructor(name: string) {
    this.name = name;
  }

  // the index in this case is zero, because the param list is an array
  printStundentNr(@printInfo printAll: boolean, mode: string) {
    if(printAll) {
      console.log(100000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course("Super Dooper");
course.printStundentNr(true, "React");
course.printStundentNr(false, "Javscript");
