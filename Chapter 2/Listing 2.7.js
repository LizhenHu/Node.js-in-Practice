//Listing 2.7 A file loading the group of modules
const group = require('./group');

group.one();
group.two();

console.log(__dirname);
console.log(__filename);