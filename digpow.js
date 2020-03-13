function digPow(n, p){
  // ...
  let arr = Array.from(String(n), Number);
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum = sum + Math.pow(arr[i], p);
    p++;
  }
  if (sum % n === 0){
    return sum/n;
  } else {
    return -1;
  }
}
