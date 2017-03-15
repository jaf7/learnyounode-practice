var fs = require('fs'),
    filePath = process.argv[2],
    buf = ( fs.readFileSync(filePath) ).toString(), // method returns instance of the Buffer class
    bufArr = buf.split('\n');
// console.log( 'buf: ', buf );
// console.log( 'bufArr: ', bufArr );
console.log( bufArr.length - 1 );

/*
Official solution is cleaner & semantic, chains 3 methods, logs
contents of a var:

var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
*/
