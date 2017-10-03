//Listing 2.4 Loading modules with require
const myClass = require('./myclass');
const module2 = require('./module-2');

console.log(myClass.method());
console.log(module2.method());
console.log(module2.method2());