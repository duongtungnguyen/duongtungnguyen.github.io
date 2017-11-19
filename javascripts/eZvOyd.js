
var par = document.getElementById('par');
var div = document.getElementById('div');
var w = 400;
div.style.width = w + 'px';
var s = 0;
function movefunction() {
  
  par.style.left = s +'px';
  if (s <= 0 - w+1) {
  s = w-1;
}else {
  s=s-1;
}
  console.log(div.style.width);
}


window.onload = setInterval(movefunction,30);