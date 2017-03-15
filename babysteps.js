var inputs = process.argv,
    output = 0;
for ( var i = 2; i < inputs.length; i++ ) {
  console.log( 'input: ', inputs[i], 'typeof input: ', typeof inputs[i] );
  output += +inputs[i];
}
console.log( output );
