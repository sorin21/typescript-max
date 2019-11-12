console.log('it is wroking');
// NUMBER
  let myRealAge1: number;
  myRealAge1 = 27;

// STRING 
let myName: string = 'Max';
// myName = 28;

// ARRAY
// any makes this array to be with 
// strings or numbers
let hobbies: any[] = ["Footbal", "Cooking"];
hobbies = [100];
// console.log('hobbies', hobbies[0]);

// TUPLES
// tuples are arrays with mixt types, with a fixed number of elements 
// so this array can have only 2 items, 1st string, 2nd number
let address: [string, number] = ["My street", 77];

// ENUM
// enum makes number more expresive
// these values Gray, Blue, etc stands for integers, numbers
enum Color {
  Gray, // 0
  Blue = 100,
  Red // 101
}

let myColor: Color = Color.Gray;
// console.log(myColor);

// ANY
let car: any = "Audi"
// console.log(car);
car = {brand: 'BMW', series: 3}
// console.log(car);


//FUNCTIONS
// string type here refers alwasy to returned value, to myName
function returnMyName():string {
  return myName
}
// console.log(returnMyName());

// VOID
// void means this fn should 
// not return anythig
function sayHello():void {
  console.log('Hello !!!');
  // return myName;
}
// console.log(sayHello());


// ARGUMENT TYPES
function multipply(value1:number, value2:number): number {
  return value1 * value2;
}
// console.log(multipply(2, 7)); 


// FUNCTION TYPES
// functions are types  on their own
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multipply;
// console.log(myMultiply(2,3));


// OBJECTS
let userData: {name: string, age: number} = {
  name: "Max",
  age: 27
};

// userData = {}

// COMPLEX OBJECTS
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function (all: boolean): number[] {
    return this.data;
  }
}
// we can't reasign to a a simply obj because doesn't satisfy the above conditions
// complex = {}


// TYPE ALIAS
// type tells typescript to create a new type that you can use it everywhere, 
// even above let complex = Complex
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
}

// UNION TYPES
let myRealAge: number | string = 27;
myRealAge = "27";
// myRealAge = true;

// CHECK TYPES
let finalValue = "A string";
if(typeof finalValue == "number") {
  // will not be output because finalValue is not a number
  console.log("Value is a number");
}

// NEVER 
// never returns anything
function neverReturns(): never {
  throw new Error('An error!');
}

// NULLABLE TYPES
// first in tsconfig.js enable strictNullChecks
// not allowed to assign null to types
let cantBenull: number = 12;
// cantBenull = null;

// workaround
let canBenull: number | null = 12;

// here canAlsoBeNull will be type any by default
let canAlsoBeNull;
canAlsoBeNull = null;

// here is not any anymore
// will be only type null
let canThisBeAny = null;
canBenull = 22;

let canThisBeAny2: any = null;
canThisBeAny2 = 22;

// SPREAD OPERATOR
const numberss = [1, 4, 33, 99];
// when we use a function and pass it to it,it calls spread
// because will spread out an array in individual items
console.log(Math.max(...numberss));

// REST 
// when we don't know how many parameters we receive
// when we create our function, it calls rest
// because will take all parameters in put into an array
function makeArray(...args: number[]) {
  return args
}
// console.log(makeArray(2, 4, 55));


// REST & TUPLES(typescript ver 3)
const printInfo = (name: string, age: number) => {
  console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}

const printInfoTuples = (...info: [string, number]) => {
  console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
printInfoTuples('Max', 3);