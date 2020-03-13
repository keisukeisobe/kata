function comp(array1, array2){
  //your code here
  if (array1 === null || array2 === null) return false;
  if (array1.length === 0 && array2.length === 0) return true;
  array1.sort(function(a, b) {
    return a - b;
  });
  array2.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < array2.length; i++){
    if ((Math.pow(array1[i], 2) !== array2[i])){
      return false;
    } 
  }
  return true;
}