// var color          = $('i');
// var line           = $('#line');
// var colors         = ['#ffbb33', '#00C851', '#33b5e5', '#aa66cc', '#3F729B']
var citites          = ['Amin', 'Sharaf', 'Mustafo', 'Parviz', 'Nozim'];

var cityText       = $('#city');
// var colorsLength   = colors.length;
var colorPosition  = 0;
var citiesPosition = 0;
// Start Writing
function writeCity(city) {
      cityText.text(cityText.text() + cities[citiesPosition][cityText.text().length]);
      color.css('color', colors[colorPosition]);
      if(cityText.text().length == cities[citiesPosition].length) {
             clearInterval(write);
             citiesPosition ++;
             colorPosition  ++;
             setTimeout(function () {
                   erase = setInterval(function () {
                         eraseCity(cityText.text());
                   }, 100);
             }, 1000);
      }
}

//Start Erasing
function eraseCity(city) {
      var txt = city;
      cityText.text(txt.substring(0, txt.length - 1));
      if(cityText.text().length == 0) {
              clearInterval(erase);
              setTimeout(function () {
                      write = setInterval(function () {
                            if(citiesPosition >= cities.length) citiesPosition = 0;
                            if(colorPosition >= colors.length)  colorPosition = 0;
                            writeCity(cities[citiesPosition]);
                            }, 200);
               }, 500);
      }
}

var write;
var erase = setInterval(function () {
    eraseCity(cityText.text());
}, 100);

setInterval(function () {
    var color = line.css('background-color');
    if(color == 'rgb(255, 255, 255)') color = '#1C2331';
    else color = 'rgb(255, 255, 255)';

    line.css('background-color', color)
}, 300);
