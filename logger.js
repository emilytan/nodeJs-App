
// (function (exports, require, module, __filename, __dirname) {

    console.log('filename: ', __filename);
    console.log('dirname: ',__dirname);

    var url = 'http://angular.at/api/flight?from=F';

    function log (message){
        console.log(message);
    }

    // export an object
    // module.exports.log = log;

    // export a single function
    module.exports = log;



// })
