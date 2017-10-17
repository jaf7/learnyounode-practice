var fs = require( 'fs' );
fs.readFile( process.argv[2], function( err, fileData ) {
  if ( err ) { 
    return console.log( `Error: ${err}` )
  }
  console.log( fileData.toString().split( '\n' ).length - 1 );
});

// my original solution didn't return a console.log invocation,
//it just directly logged to console. Official solution returns
// console.log. Is this in order to break on error?
