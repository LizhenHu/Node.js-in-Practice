//Listing 4.4 Removing listeners
const EventEmitter = require('events').EventEmitter;

class MusicPlayer{
	constructor(track){
		this.track = track;
		this.playing = false;

		for(let methodName in EventEmitter.prototype){
			this[methodName] = EventEmitter.prototype[methodName];
			console.log(methodName);
		}
	}

	toString(){
		if(this.playing){
			return 'Now playing: ' + this.track;
		} else {
			return 'Stopped';
		}
	}
};

const musicPlayer = new MusicPlayer('Girl Talk - Still Here');

musicPlayer.on('play', function(){
	this.playing = true;
	console.log(this.toString());
})

musicPlayer.emit('play');