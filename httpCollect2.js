var http = require('http'),
    bl = require('bl'),
    url = process.argv[2];

http.get( url, function( res ) {
  res.pipe( bl(function( err, data ) {
    if ( err ) {
      console.error( err );
    }
    data = data.toString();
    console.log( data.length );
    console.log( data );
  }));
});

// why assign data.toString() to a var here? more efficient?
// (didn't do this at first, saw that official solution did)
