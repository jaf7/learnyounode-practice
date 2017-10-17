var http = require( 'http' );
var url = process.argv[2];
var collectedData = [];

http.get( url, function( response ) {
  response.setEncoding( 'utf8' ).on( 'data', function( data ) {
    collectedData.push( data );
  });
  response.on( 'end', function() {
    let dataString = collectedData.join('');
    console.log( `${dataString.length}\n${dataString}`);
  });
});
