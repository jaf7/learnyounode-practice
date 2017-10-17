module.exports = function( directory, extension, callback ) {
  var fs = require( 'fs' );
  var path = require( 'path' );

  fs.readdir( directory, function( err, files ) {
    if ( err ) {
      callback( err );
    } 
    else {
      let filteredListArray = files.filter(function( file ) {
        if ( path.extname( file ) == `.${extension}` ) {
          return file;
        }
      });
      callback( null, filteredListArray );
    }
  });
}
