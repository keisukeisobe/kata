function descendingOrder(n){
  //...
  let arr = [];
  let str = n.toString();
  for (let char of str){
    arr.push(Number(char));
  }
  arr.sort(function(a, b){return b-a});
  str = arr.join('');
  return Number(str);
}
