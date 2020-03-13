function isPangram(string){
  //...
  let arr = string.toLowerCase().split(' ').join('').split('').sort();
  arr = arr.filter((item, index) => arr.indexOf(item) === index);
  return arr.splice(-26).length === 26;
}
