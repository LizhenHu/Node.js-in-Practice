//Listing 4.2 Inheriting from EventEmitter
const EventEmitter = require('events').EventEmitter;

const AudioDevice = {
	play: (track) => {
		// Stub: Trigger playback through iTunes, mpg123, etc.
	},
	stop: () =>{}
};

class MusicPlayer extends EventEmitter{
	constructor(){
		super();
		this.playing = false;
	}
}

const musicPlayer = new MusicPlayer();

musicPlayer.on('play', function(track){
	this.playing = true;
	AudioDevice.play(track);
});

musicPlayer.on('stop', function(){
	this.playing = false;
	AudioDevice.stop();
})

musicPlayer.emit('play','The Roots - The Fire');

setTimeout(() => {
	musicPlayer.emit('stop');
}, 1000);
