// to not repete the code we create an interface
interface NamedPerson {
  firstName: string;
  // ? optional argument
  age? : number;
  // [] for proprties that you don't know the name yet
  [propName: string]: any;
  // method
  greet(lastName: string): void;
}

// ################ Interface used as argument Type ################
function greets(person: NamedPerson) {
  console.log("Hello " + person.firstName);
}

function changeName(person: NamedPerson) {
  person.firstName = "Cristina"
}


// ################ Object type Interface ################
const person: NamedPerson = {
  firstName: "Sorin",
  // this is the unknown propName, wich is an array
  hobbies: ['sports', 'music'],
  // age: 39
  greet(lastName: string) {
    console.log("I am " + this.firstName + " " + lastName);
  }
}

// if we pass an obj here and not a const with an obj
// typescript will stricly check each prop if was defined
// greet({firstName: 'Dan', age: 27});

greets(person); // Hello Sorin
changeName(person); // Hello Cristina
greets(person); // I am Cristina Dragomir
person.greet("Dragomir");


// ################ Class implements Interface ################
// we need to make sure that we implement all props and methods defined in interface
class Person implements NamedPerson {
  firstName: string = '';
  lastName: string = '';
  greet(lastName: string) {
    console.log("I am " + this.firstName + " " + lastName);
  };
}

const myPerson = new Person();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Doubth";
greets(myPerson); // Hello Maximilian
myPerson.greet(myPerson.lastName); // I am Maximilian Doubth


// ################ Function Types ################
interface DoubleValueFunc {
  // setup a function type
  (number1: number, number2: number): number;
}

let myDoubleFunc: DoubleValueFunc;
myDoubleFunc = function (number1: number, number2: number): number {
  return (number1 + number2) * 2;
}

console.log(myDoubleFunc(10, 20))


// ################ Interface Inheritance ################
interface AgedPerson extends NamedPerson {
  // all props and methods from NamedPerson are required and we ca add more
  // above age was optional, here we make it required
  age: number
}

const oldPerson: AgedPerson = {
  age: 27,
  firstName: 'Kiddo',
  // we don't have to have hoobies because this is optional
  // hobbies: ['sports', 'music'],
  greet(lastName: string) {
    console.log("Hello Mr " +  lastName);
  }
}

console.log(oldPerson)