var fs = require( 'fs' );
var path = require( 'path' );
var dir = process.argv[2];
var extension = process.argv[3];

fs.readdir( dir, function( err, files ) {
  if ( err ) { return console.log( `Error ${err}` ) }

  for ( let i = 0; i < files.length; i++ ) {
    if ( path.extname( files[i] ) == `.${extension}` ) {
      console.log( `${files[i]}` );
    }
  } 
});
