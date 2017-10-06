//Listing 4.7 Event-based errors
const EventEmitter = require('events').EventEmitter;


class MusicPlayer extends EventEmitter{}

const musicPlayer = new MusicPlayer();

musicPlayer.on('play', function(track){
	this.emit('error', 'unable to play!');
});

musicPlayer.on('error', function(err){
	console.error('Error:', err);
});

setTimeout(()=> {
	musicPlayer.emit('play', 'Little Comets -Jennifer');
}, 1000);
