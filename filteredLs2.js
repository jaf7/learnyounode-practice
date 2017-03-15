var flsMod = require('./filteredLs2Module'), // local module
    dir = process.argv[2],
    ext = process.argv[3];

flsMod( dir, ext, function( err, fileList ) {
  if ( err ) { // if no errors, err == null
    return console.error( 'error thrown: ', err );
  }
  fileList.forEach( function( filename ) {
    console.log( filename );
  });
});
