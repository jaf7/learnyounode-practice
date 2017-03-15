// Responses are not necessarily in the same order as url args passed

// In the 'end' event handler, instead of pushing the streams to the array in order of responses received, use the current arguments index (from the for loop iteration) to assign each stream to it's correct place in the array: this way stream order corresponds to arguments passed order and not responses received order.

var http = require('http'),
    args = process.argv,
    streamsArr = [],
    count = 0;

var getStream = function( url, index ) {
  var stream = '';
  http.get( url, function( res ) {
    res.setEncoding( 'utf-8' );
    res.on( 'data', function( chunk ) {
      stream += chunk;
    }).on( 'end', function() {
      streamsArr[index] = stream;
      count++;
      if ( count == 3 ) {
        streamsArr.forEach( function( stream ) {
          console.log( stream );
        });
      }
    });
  });
};

for ( var i = 2; i < args.length; i++ ) {
  getStream( args[i], i );
}


// this version is not logging the streams in the order of url's received
// var http = require('http'),
//     bl = require('bl'),
//     args = process.argv;
//
// var getStream = function( url ) {
//   http.get( url, function( res ) {
//     res.setEncoding( 'utf-8' );
//     res.pipe( bl(function( err, data ) {
//       if ( err ) { console.error( err ); }
//       console.log( 'stream for ' + url + ': ', data.toString() );
//     }));
//   });
// };
//
// console.log( args );
//
// for ( var i = 2; i < args.length; i++ ) {
//   getStream( args[i] );
// }


// Official solution
// # PASS Your solution to JUGGLING ASYNC passed!
//
// Here's the official solution in case you want to compare notes:
//
// ─────────────────────────────────────────────────────────────────────────────
//
//    var http = require('http')
//    var bl = require('bl')
//    var results = []
//    var count = 0
//
//    function printResults () {
//      for (var i = 0; i < 3; i++) {
//        console.log(results[i])
//      }
//    }
//
//    function httpGet (index) {
//      http.get(process.argv[2 + index], function (response) {
//        response.pipe(bl(function (err, data) {
//          if (err) {
//            return console.error(err)
//          }
//
//          results[index] = data.toString()
//          count++
//
//          if (count === 3) {
//            printResults()
//          }
//        }))
//      })
//    }
//
//    for (var i = 0; i < 3; i++) {
//      httpGet(i)
//    }
