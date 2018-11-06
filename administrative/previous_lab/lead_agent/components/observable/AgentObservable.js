const util = require('util');
const EventEmitter = require('events').EventEmitter;

function AgentObservable() {
    EventEmitter.call(this);
}

util.inherits(AgentObservable, EventEmitter);

AgentObservable.prototype.req = function(request){
    this.emit('req',request);
}