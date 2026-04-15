const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

// Events
emitter.on('userRegistered', (name) => {
    console.log(`User Registered: ${name}`);
});

emitter.on('orderPlaced', (item) => {
    console.log(`Order Placed: ${item}`);
});

module.exports = emitter;