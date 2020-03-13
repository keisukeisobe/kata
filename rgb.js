function rgb(r, g, b){
  // complete this function
  let red = '';
  let green = '';
  let blue = '';
  if (r <= 0){
    red = '00'
  } else if (r > 255){
    red = 'FF';
  } else if (r > 0 && r < 16){
    red = '0' + hexhex(r);
  } else {
    red = hex(r);
  }
  if (g <= 0){
    green = '00'
  } else if (g > 255){
    green = 'FF';
  } else if (g > 0 && g < 16){
    green = '0' + hexhex(g);
  } else {
    green = hex(g);
  }
  if (b <= 0){
    blue = '00'
  } else if (b > 255){
    blue = 'FF';
  } else if (b > 0 && b < 16){
    blue = '0' + hexhex(b);
  }  else {
    blue = hex(b);
  }
  return red + green + blue;
}

function hex(value){
  if (value / 16 >= 1){ 
    return hexhex(Math.floor(value/16)) + hex(value % 16); 
  } else {
    return hexhex(value);
  }
}

function hexhex(value){
  if (value === 0) return '0';
  if (value === 1) return '1';
  if (value === 2) return '2';
  if (value === 3) return '3';
  if (value === 4) return '4';
  if (value === 5) return '5';
  if (value === 6) return '6';
  if (value === 7) return '7';
  if (value === 8) return '8';
  if (value === 9) return '9';
  if (value === 10) return 'A';
  if (value === 11) return 'B';
  if (value === 12) return 'C';
  if (value === 13) return 'D';
  if (value === 14) return 'E';
  if (value === 15) return 'F';
}
