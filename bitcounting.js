var countBits = function(n) {
  // Program Me
  n = n.toString(2).split('').map(element => Number(element));
  let sum = 0;
  for (let i = 0; i < n.length; i++){
    sum = sum + Number(n[i]);
  }
  return sum;
};
