var http = require('http'),
    url = process.argv[2],
    stream = "";

http.get( url, function( res ) {
  res.setEncoding( 'utf-8' );
  res.on( 'data', function( chunk ) {
    stream += chunk;
  }).on( 'end', function() {
    console.log( stream.length );
    console.log( stream );
  });
});
