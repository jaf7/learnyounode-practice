var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    filePath = process.argv[3];

var server = http.createServer(function( req, res ) {
  var fileStream = fs.createReadStream( filePath );
  fileStream.pipe( res );
});
server.listen( port );

/*
Official solution uses res.writeHead() to supply statusCode & content-type.
(Wasn't necessary to pass tests)
(= "Being a good web citizen")
file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html#http_response_writehead_statuscode_reasonphrase_headers

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/

/*
http.createServer([requestListener])
Returns a new web server object.
The requestListener is a function which is automatically added to the 'request' event.


Event: 'request'
function (request, response) { }

Emitted each time there is a request. Note that there may be multiple requests per connection (in the case of keep-alive connections). request is an instance of http.IncomingMessage and response is an instance of http.ServerResponse.


Class: http.ServerResponse
This object is created internally by a HTTP server--not by the user. It is passed as the second parameter to the 'request' event.

The response implements the Writable Stream interface. This is an EventEmitter with the following events ...

file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html#http_class_http_serverresponse
file:///usr/local/lib/node_modules/learnyounode/node_apidoc/stream.html#stream_class_stream_writable
*/

// https://nodejs.org/api/stream.html#stream_readable_streams
