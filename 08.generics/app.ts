// ################ Simple Generic ################

// the problem is that with any we can return any data
function echo(data: any) {
  return data;
}
console.log("################ Simple Generic ################");
console.log(echo('Sorin').length);
console.log(echo(27));
console.log(echo({name: "Sorin", age: 27}));


// ################ Better Generic ################

// we can use in for data the T, data will be the type T
// T comes from type, and can be any letter
// this construction tells to typescript that this is a generic type
function betterEcho<T>(data: T) {
  return data;
}
console.log("################ Better Generic ################");
console.log(betterEcho('Sorin').length);
console.log(betterEcho<string | number>("27"));
console.log(betterEcho({name: "Sorin", age: 27}));


// ################ Built-in Generics: Array ################
// type of generic(default): Array
// type of array: number
const testResults: Array<number | string> = [1.94, 2.33];
testResults.push(-2.99);
testResults.push("-2.99");
console.log("################ Built-in Generics: Array ################");
console.log(testResults);


// ################ Arrays ################
// assign a generic type to be an array
// the arguments will be an array
function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}
console.log("################ Arrays ################");
printAll<string>(["Apples", "Mangos", "Oranges"]);


// ################ Generic Types ################

// we create a new const  and assign it a type
// everything after colon(:), but before type equal sign(=) is a type assignment
// this is a type: <T>(data: T) => T
// is a generic type, because we have <T>
// so we tell to ts that this const will hold a function, where the input is one argument
// of type <T>, the type user specifyies, and this function will return somethig of that input type
// betterEcho function is defined above
const echo2: <T>(data: T) => T = betterEcho;
console.log("################ Generic Types ################")
console.log(echo2<string>("Somenthig"));


// ################ Generic Class ################

// <T> tell to ts this is a generic class and the user should specify the type
// that will be stored in this T type
// with extends we specify what types should be allowed( we called constrain )
// using T exends number | string
// T should be type number or string
class SimpleMath<T extends number | string, U extends number | string> {
  // baseValue and multipleValue should e of type T
  baseValue: T;
  multipleValue: U;
  calculate(): number {
    return +this.baseValue * +this.multipleValue;
  }
}

// create a generic class with numbers and strings
// T should be a string and U should be a number
const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multipleValue = 20;
console.log("################ Generic Class ################")  
console.log(simpleMath.calculate());


// ################ Exercise ################
// A generic map is a collection object where you store key - value pairs, like an object
class MyMap <T extends number | string> {
  // [] for proprties that you don't know the name yet
  // we setup this to be an empty object
  private items: {[key: string]: T} = {};

  // should create a new key-value pair ('bananas', 10)
  setItem(key: string, item: T): void {
    this.items[key] = item;
  }
  
  // should retrieve the value of the provided key
  getItem(key: string) {
    return this.items[key];
  }

  // should remove all key-value pairs
  clear() {
    return this.items = {};
  }

  // should output key-value pairs
  printMap() {
    // for(let key in this.items) {
    //   console.log(key, this.items[key]);
    // }
    const itemsAsString = Object
      .getOwnPropertyNames(this.items)
      .map(key => `'${key}': ${this.getItem(key)}`)
      .join(", ");
    return console.log(`{ ${itemsAsString} }`);
  }
}
console.log("################ Exercise ################")  

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
console.log(numberMap.getItem("apples"))
console.log(numberMap.clear());
numberMap.printMap();

 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
console.log(numberMap.clear());
numberMap.printMap();