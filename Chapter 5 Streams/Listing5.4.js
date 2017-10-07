//Listing 5.4 An Express application that uses streams
const { Readable } = require('stream');
const util = require('util');
const express = require('express');
const app = express();

class StatStream extends Readable{

	constructor(limit){
		super(options);
		this.limit = limit;
	}

	_read(size){
		if(this.limit === 0){
			//Done
			this.push();
		} else {
			this.push(util.inspect(process.memoryUsage()));
			this.push('n');
			this.limit--;
		}
	};
}

app.get('/', (req, res) => {
	const statStream = new StatStream(10);
	statStream.pipe(res);
});

app.listen(3000);

