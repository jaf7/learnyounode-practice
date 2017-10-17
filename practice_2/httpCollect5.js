var http = require( 'http' );
var bl = require( 'bl' );
var url = process.argv[2];

http.get( url, function( response ) {
  response.pipe( bl(function( err, data ) {
    if ( err ) {
      return console.error( `Error: ${err}` );
    }
    let dataString = data.toString();
    console.log( `${dataString.length}\n${dataString}` );
  }));
});
