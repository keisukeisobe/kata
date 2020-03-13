function iqTest(numbers){
  // ...
  evens = [];
  odds = [];
  numbers = numbers.split(' ').map(element => Number(element)).forEach(function(element, i){
    if (element%2 === 0){
      evens.push(i+1);
    } else {
      odds.push(i+1);
    }    
  })
  return evens.length > odds.length ? odds[0] : evens[0];
}
