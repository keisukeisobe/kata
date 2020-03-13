function songDecoder(song){
  for (let i = 0; i < song.length;){
    if(song.substring(i, i + 3) === "WUB"){
      song = song.substring(0, i) + ' ' + song.substring(i+3);
    } else {
      i++;
    }
  }
  let arr = song.split(' ');
  arr.forEach(element => element.trim());
  return arr.filter(element => element !== '').join(' ');
}
