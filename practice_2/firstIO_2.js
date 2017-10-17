var fs = require( 'fs' );

// var fileBuffer = fs.readFileSync( process.argv[2] );
// var fileString = fileBuffer.toString();
// var fileArray = fileString.split('\n');
// console.log( fileArray.length - 1 );

// console.log( fs.readFileSync( process.argv[2] ).toString().split('\n').length - 1 );
console.log( fs.readFileSync( process.argv[2], 'utf8' ).split('\n').length - 1 );

