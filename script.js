var clock = document.getElementById('clock');


function hexoClock() {
  var time = new Date();
  var h = (time.getHours()).toString();
  // Создаем переменную "Час" Метод getHours() возвращает часы указанной даты по местному времени. и переводим в String
  var m = time.getMinutes().toString();
  // аналогично "Минуты"
  var s = time.getSeconds().toString();
  // аналогично "Секунды"

// Добавление нуля если число одно
  if(h.length < 2){
    h = '0' + h;
  }
  if(m.length < 2){
    m = '0' + m;
  }
  if(s.length < 2){
    s = '0' + s;
  }

// создание переменной с временем
  var clockString = h + ':' + m + ':' + s;
    //var colorString = '#' + h + m + s;

// вывод в переменную часов
  clock.textContent = clockString;
    //color.textContent = colorString;
    //document.body.style.background = colorString;

// переменные для создания  Hex кода
  var hh = (h * 2).toString(16);
  var mh = (m * 2).toString(16);
  var sh = (s * 2).toString(16);

// Их обьединение
  var colorHex = '#' + hh + mh + sh;
  console.log(colorHex);
// Присвоение переменной Хекс переменной для увеличения его длинны
  var ff = colorHex;
  if (colorHex.length == 6 ){
    ff = colorHex + 1;
  }
  if (colorHex.length <= 5) {
    ff = colorHex + 10;
  }

  // вывод в Стайл 'body'
  document.body.style.background = ff;

  // Вывод в #color
  var color = document.getElementById('color');
  var colorString = ff;
  color.textContent = colorString;

  console.log(ff);
}

hexoClock();
setInterval(hexoClock, 1000)
