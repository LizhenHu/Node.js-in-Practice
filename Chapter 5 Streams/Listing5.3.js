//Listing 5.3 Catching errors during streaming
Catching errors during streaming
const fs = require('fs');
const stream = fs.createReadStream('not-found');

stream.on('error', (err) => {
	console.trace();
	console.error('Stack:', err.stack);
	console.error('The error raised was:', err);
});