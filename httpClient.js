var http = require('http'),
    url = process.argv[2];

http.get( url, function( res ) {
  res.setEncoding( 'utf-8' );
  res.on( 'data', function( chunk ) {
    console.log( chunk );
  });
});

/*
What?? Instructions said nothing about handling errors here.  That's why I omitted it.  Also, instructions should at very least include a pointer to explanation of this kind of .on() event handler use.

var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
*/
