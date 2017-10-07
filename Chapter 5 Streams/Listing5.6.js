//Listing 5.6 A JSON line parser
const { Readable } = require('stream');
const util = require('util');
const fs = require('fs');

class JSONLineReader extends Readable{

	constructor(options, source){
		super(options);
		this._source = source;
		this._foundLineEnd = false;
		this._buffer = '';

		source.on('readable', () => {
			this.read();
		});

	}
	
	_read(size){
		let chunk,
			line,
			lineIndex,
			result;

		if(this._buffer.length === 0 ){
			chunk = this._source.read();
			this._buffer += chunk;
		}

		lineIndex = this._buffer.indexOf('\n');

		if(lineIndex != -1){
			line = this._buffer.slice(0, lineIndex);
			if(line){
				result = JSON.parse(line);
				this._buffer = this._buffer.slice(lineIndex + 1);
				this.emit('object', result);
				this.push(util.inspect(result));
			} else {
				this._buffer = this._buffer.slice(1);
			}
		}
	};
}

const input = fs.createReadStream(__dirname + '/json-lines.txt', {encoding: 'utf8'});


const jsonLineReader = new JSONLineReader({encoding: 'utf8'},input);

jsonLineReader.on('object', (obj) => {
	console.log('pos:', obj.position, '- letter:', obj.letter);
})
