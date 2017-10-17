function sumArguments( argumentArray ) {
  let sum = 0;
  for (let i = 2; i < argumentArray.length; i++ ) {
    sum += parseInt( argumentArray[i], 10 );
  }
  console.log( sum );
}
sumArguments( process.argv );
