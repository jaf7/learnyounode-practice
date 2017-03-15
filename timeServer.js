var net = require('net'),
    strftime = require('strftime'),
    port = process.argv[2],
    currentTime = strftime('%F %H:%M');

var server = net.createServer(function( socket ) {
  socket.write( currentTime + '\n' );
  socket.end();
});
server.listen( port );


// Official solution

// var net = require('net')
//
// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }
//
// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }
//
// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })
//
// server.listen(Number(process.argv[2]))
