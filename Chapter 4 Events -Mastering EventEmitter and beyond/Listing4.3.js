//Listing 4.3 Adding multiple listeners
const EventEmitter = require('events').EventEmitter;

class MusicPlayer extends EventEmitter{
	constructor(){
		super();
		this.playing = false;
	}
}

const musicPlayer = new MusicPlayer();

musicPlayer.on('play', function(track){
	this.playing = true;
});

musicPlayer.on('stop', function(){
	this.playing = false;
});

musicPlayer.on('play', function(track){
	console.log('Track now playing:', track);
});


musicPlayer.emit('play','The Roots - The Fire');

setTimeout(() => {
	musicPlayer.emit('stop');
}, 1000);
