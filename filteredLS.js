var path = require('path'),
    fs = require('fs'),
    directory = process.argv[2],
    ext = '.' + process.argv[3];

fs.readdir( directory, function( err, list ) {
  if ( err ) return console.error( err );
  for ( var i = 0; i < list.length; i++ ) {
    var file = list[i],
        fileType = path.extname( file );
    if ( fileType === ext ) {
      console.log( file );
    }
    // console.log( 'file: ', list[i], 'extension: ', path.extname(list[i]) );
    // console.log( 'file type: ', fileType );

  }
});

/*
Official solution much more succinct using forEach()
& no unnecessary vars:

fs.readdir( directory, function( err, list ) {
  list.forEach(function( file ) {
    if ( path.extname(file) == ext ) {
      console.log( file );
    }
  });
});
*/
