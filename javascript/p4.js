const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('greet', () => {
    console.log('Hello event emitted...');
});

emitter.emit('greet'); 