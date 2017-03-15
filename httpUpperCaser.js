var http = require('http'),
    map = require('through2-map'),
    port = process.argv[2];

var server = http.createServer(function( req, res ) {
  req.pipe( map(function( chunk ) {
    return chunk.toString().toUpperCase();
  })).pipe( res );
});
server.listen( port );

/*
Official solution handles illegal request methods with a little gate-keeper:

message.method#
Only valid for request obtained from http.Server.
The request method as a string. Read only. Example: 'GET', 'DELETE'.
file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html#http_message_method

var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
*/
