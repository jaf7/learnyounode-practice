var filteredLsModule = require( './filteredLs4Module' );
var dir = process.argv[2];
var ext = process.argv[3];

filteredLsModule( dir, ext, function( err, fileList ) {
  if ( err ) {
    return console.error( `Error: ${err}` );
  } else {
    fileList.forEach(function( file ) {
      console.log( file );
    });
  }
});
