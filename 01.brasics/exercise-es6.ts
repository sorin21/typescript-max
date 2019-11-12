// Exercise 1 - Maybe use an Arrow Function?
// var double = function(value) {
//   return value * 2;
// };
// console.log(double(10));

var double = (value: number):number => {
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

var greet = (name: string = 'Dan') => {
  if (name === undefined) { name = "Max"; }
  console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
// var numbers = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbers));

var numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 - I have to think about Exercise 3 ...
// var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
// console.log(newArray);

var newArray = [55, 20];
const myArray = [...newArray, ...numbers];
console.log(myArray)

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);