const EventEmitter = require('events').EventEmitter;

class Pulsar extends EventEmitter {
  constructor(speed, times){
    super();
    this.speed = speed;
    this.times = times;
    this.on('newListener', function(eventName, listener) {
      if (eventName === 'pulse') {
        this.start();
      }
    }); 
  }

  start() {

    const self = this;
    const id = setInterval(() => {
      self.emit('pulse');
      self.times--;
      if (self.times === 0) {
        clearInterval(id);
        }
      }, self.speed);
  };
}

const pulsar = new Pulsar(500, 5);

pulsar.on('pulse', () => {
  console.log('.');
})
