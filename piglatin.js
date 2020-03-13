function pigIt(str){
  //Code here
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++){
    if (arr[i].match(/[a-zA-Z]/i)) {
      arr[i] = arr[i].slice(1) + arr[i].slice(0, 1) + 'ay';    
    }
  }
  return arr.join(' ');
}