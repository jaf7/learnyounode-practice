var http = require('http'),
    url = require('url'),
    port = process.argv[2];

var server = http.createServer(function( req, res ) {
  var parsedUrl = url.parse(req.url, true),
      isoTime = parsedUrl.query.iso,
      currentDate = new Date( isoTime ),
      currentUnixDate = Date.parse( isoTime ),
      hmsData = {
        "hour": currentDate.getHours(),
        "minute": currentDate.getMinutes(),
        "second": currentDate.getSeconds()
      },
      unixData = {
        "unixtime": currentUnixDate
      };

  if ( req.method !== 'GET' ) {
    return res.end( 'Send a \'GET\'\n' );
  }
  res.writeHead( 200, {'content-type':'application/json'} );

  if ( parsedUrl.pathname == '/api/parsetime' ) {
    return res.end( JSON.stringify(hmsData) );
  } else if ( parsedUrl.pathname == '/api/unixtime' ) {
    return res.end(JSON.stringify(unixData) );
  }

});
server.listen( port );

/*
Official solution is better, more semantic and succinct. Uses functions to abstract parsetime & unixtime, and handles illegal requests elegantly by checking if result === true.
Also uses RegExp.prototype.test() to test for match against request url which will be a String.

var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))


file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html#http_message_url

af-> node -pe "require('url').parse('/test?q=1', true)"

Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?q=1',
  query: { q: '1' },
  pathname: '/test',
  path: '/test?q=1',
  href: '/test?q=1' }
*/
