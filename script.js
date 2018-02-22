var clock = document.getElementById('clock');
var color = document.getElementById('color');

function hexoClock() {
  var time = new Date();
  var h = (time.getHours() % 12).toString();
  var m = time.getMinutes().toString();
  var s = time.getSeconds().toString();

  if(h.length < 2){
    h = '0' + h;
  }
  if(m.length < 2){
    m = '0' + m;
  }
  if(s.length < 2){
    s = '0' + s;
  }
}
