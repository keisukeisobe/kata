var moveZeros = function (arr) {
  // TODO: Program me
  zeroes = [];
  nonZeroes = [];
  arr.forEach(function(element){
    if (element === 0){
      zeroes.push(element);
    } else {
      nonZeroes.push(element); 
    }
  })
  return nonZeroes.concat(zeroes);
}
