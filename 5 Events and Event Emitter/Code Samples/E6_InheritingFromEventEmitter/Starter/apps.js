var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    this.greeting = 'Hello world';
}

util.inherits(Greetr,EventEmitter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ' ' + data);
    this.emit('greet',data);
}

var grtr = new Greetr();
grtr.on('greet',function(data){
    console.log('Hello! '+ data);
});