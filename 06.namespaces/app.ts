// we use namespace to not pollute the global namespace
// we give to namespace a name
// we need to export the function to be accessed outiside namespace

// import namespaces


// import CircleMath = MyMath.Circle;

import {calculateCircumference} from './math/circle'


// console.log(MyMath.calculateRectangle(10, 20))
console.log(calculateCircumference(3))