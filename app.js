/* note:
 node is a single thread
 use asynchronous because it in non-blocking
 */

function sayHello(name){
    console.log('Hello ' + name);
}
sayHello('Emily');

// console.log(module);

/* call the object */
// const logger = require('./logger.js');
// logger.log('message print here');

/* call the function directly */
const log = require('./logger.js');
log('message print here');


const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);


const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`total memory: ${totalMemory}`);
console.log(`free  memory: ${freeMemory}`);


const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);
fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});


//variable first letter of every word is a class
const EventEmitter = require('events'); // class 
const emitter = new EventEmitter(); // object

// Register a listner
emitter.on('messageLogged', (args) => {
    console.log('Listener called', args);
});
// Raise an event; .emit() signal that an event has happen
emitter.emit('messageLogged', {id: 1 , url: 'http://'});


emitter.on('messageReceive', function(arg){
    console.log('Received called', arg);
});
emitter.emit('messageReceive', {id: 2 , url: 'http://'});
emitter.emit('messageLogged', {id: 3 , url: 'http://'});


const http = require('http');
const server = http.createServer( (request, resp) =>{
    if (request.url === '/'){
        resp.write('Hello World');
        resp.end();
    }
    if (request.url === '/api/courses'){
        resp.write(JSON.stringify([1,2,3,4]));
        resp.end();
    }
});
server.listen(3000);
console.log('listening on port 3000');


