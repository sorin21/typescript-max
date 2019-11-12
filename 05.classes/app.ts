class Person {
  public name: string;
  private type: string = "man";
  protected age: number = 27;

  // in ts we can create a property in the constructor, like we created username
  constructor(name: string, public username: string) {
    // this.name reffers to public name from above
    // the name after equal reffers to name received by constructor
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("Old person")
  }

  // if we want to set the type from outside
  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

let person = new Person("Sorin", "Kiddo");
// console.log(person);
// we can access only name and username, because they are public
// console.log(person.name, person.username);

// person.printAge();
// won't work with private method
// person.setType("Cool gentelman ");


// INHERITANCE
class Cristina extends Person {
  // name = "Cristina";
  
  constructor(username: string) {
    // super reffers to parent class
    super("Cristina", username);
    this.age = 21;
  }
}

const cristina = new Cristina("Gaina");
// console.log(cristina);


// GETTERS  AND SETTERS
class Plant {
  private _species: string = "Default 0";

  // to read a prop use get
  get species() {
    return this._species;
  }

  // ts will pass this value parameter
  // to set a prop use set
  set species(value: string) {
    if(value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

const plant = new Plant();
// console.log(plant.species);
plant.species = "Musetel";
// console.log(plant.species);


// STATIS PROPERTIES AND METHODS
class Helpers {
  static PI: number = 3.14;
  static calcCircumferince(diameter: number):number {
    return this.PI * diameter;
  }
}

// console.log(Helpers.PI);
// console.log(Helpers.calcCircumferince(8));


// ABSTRACT CLASSES
// you can't instanciete
// you can only inherit from it, it used like blue print
abstract class Project {
  projectName: string = "Default";
  budget: number = 1000;

  // we can't implement any logic, so we only define how the function will look like
  // when we extend the abstract class we are obligated to use this method and add logic to it
  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}


class ITProject extends Project {
  changeName(name: string):void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super Javascript project!");
console.log(newProject);


// PRIVATE CONSTRUCTOR
// singleton class
class OnlyOne {
  private static instance: OnlyOne;
  public readonly name: string;
  // this is available only in this class
  // private constructor(public readonly name: string) {}
  private constructor(name: string) {
    this.name = name;
  }

  static getInstance() {
    // check if this class was instantiated
    if(!OnlyOne.instance) {
      // otherwise create a new instance
      OnlyOne.instance = new OnlyOne('The only one');
    }

    // if it was instantiated return the instance
    return OnlyOne.instance;
  }
};

// this class can't be intantiated 
// let wrong = new OnlyOne("The only one!");
let right = OnlyOne.getInstance();

console.log(right.name);
// because name is a public property
// right.name = "Something else";
// console.log(right.name);




