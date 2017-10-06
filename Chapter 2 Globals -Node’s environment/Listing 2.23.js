//Listing 2.23 Creating the illusion of an always asynchronous API
const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
let content;

function readFileIfRequired(cb){
	if(!content){
		fs.readFile(__filename, 'utf8', (err, data) => {
			content = data;
			console.log('readFileIfRequired: readFile');
			cb(err, content);
		});
	} else {
		process.nextTick(() => {
			console.log('readFileIfRequired: cached');
			cb(null, content);
		});
	}
}
readFileIfRequired((err, data) => {
	console.log('1. length:', data.length);

	readFileIfRequired((err, data2) => {
		console.log('2. length', data2.length);
	});

	console.log('Reading file again...');
});

console.log('Reading file...');