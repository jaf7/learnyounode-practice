module.exports = function( dir, ext, func ) {
  var fs = require('fs'),
      path = require('path'),
      filteredList = [];

  fs.readdir( dir, function( err, files ) {
    // handle any errors early, pass to callback, return callback
    if ( err ) {
      return func( err );
    }
    // accumulate filtered array of filenames
    files.forEach( function(file) {
      if ( path.extname(file) == '.' + ext ) {
        filteredList.push( file );
      }
      // console.log( 'filteredList: ', filteredList );
    });
    // no errors, pass filtered array to callback, return callback
    return func( null, filteredList );
  });

};

/*
fs.readdir( path, callback )
The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.

These four things are the contract that your module must follow:
 1. Export a single function that takes exactly the arguments described.
 2. Call the callback exactly once with an error or some data as described.
 3. Don't change anything else, like global variables or stdout.
 4. Handle all the errors that may occur and pass them to the callback.


--> The official solution module uses array.prototype.filter() and saves the step of creating an empty array. It also declares vars fs & path (globally?) outside the function scope of the module.exports function. Why?

 # PASS Your solution to MAKE IT MODULAR passed!
Here's the official solution in case you want to compare notes:
─────────────────────────────────────────────────────────────────────────────
_/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti
on/solution.js_ :

   var filterFn = require('./solution_filter.js')
   var dir = process.argv[2]
   var filterStr = process.argv[3]

   filterFn(dir, filterStr, function (err, list) {
     if (err) {
       return console.error('There was an error:', err)
     }

     list.forEach(function (file) {
       console.log(file)
     })
   })
─────────────────────────────────────────────────────────────────────────────
_/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti
on/solution_filter.js_ :

   var fs = require('fs')
   var path = require('path')

   module.exports = function (dir, filterStr, callback) {
     fs.readdir(dir, function (err, list) {
       if (err) {
         return callback(err)
       }

       list = list.filter(function (file) {
         return path.extname(file) === '.' + filterStr
       })

       callback(null, list)
     })
   }
 */
