//Listing 4.9 Keeping tabs on new listeners

const EventEmitter = require('events').EventEmitter;

class EventTracker extends EventEmitter{};

const eventTracker = new EventTracker();

eventTracker.on('newListener', (name, listener) => {
	console.log('Event name added:', name);
});

eventTracker.on('a listener', () => {
	// This will cause 'newListener' to fire
});