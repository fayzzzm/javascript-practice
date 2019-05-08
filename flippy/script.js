var container        = $('.container');
var bird             = $('#bird');
var block            = $('.block');
var block_top        = $('#block_top');
var block_bottom     = $('#block_bottom');
var bird_score       = $('#score_br');
var bird_speed       = $('#speed_br');
var grass            = $('#grass');

var container_width  = parseInt(container.width());
var container_height = parseInt(container.css('height'));
var block_position   = parseInt(block.css('right'));
var grass_position   = parseInt(block.css('left'));
var block_height     = parseInt(block.css('height'));
var bird_left        = parseInt(bird.css('left'));
var bird_height      = parseInt(bird.css('height'));
var speed            = 10;
var score            = 0;

var up = false;
var terminated = false;

var game = setInterval(function () {
    var current_position = parseInt(block.css('right'));
    // Checking for collision if it is stop the game
    if(collision(bird, block_top) || collision(bird, block_bottom) || parseInt(bird.css('top')) > container_height - bird_height - 90 || parseInt(bird.css('top')) <= 10) overGame();
    if (current_position > container_width) {
            var new_height = parseInt(Math.random() * 100);        //we choose random height;
            block_top.css('height', block_height + new_height);    //we put this value on one;
            block_bottom.css('height', block_height - new_height); //then gonna subtr from another
            current_position = block_position;                     //setting new position: right:-50px;
            speed += 1;                                            //changing speed too
            bird_speed.text(speed);
    }

    block.css('right', current_position + speed);
    // grass.css('left', parseInt(grass.css('left')) + 10);
    if (speed > 20)  block.css('background', 'cornflowerblue');
    if (speed > 30) speed = 30;
    if (up === false) downB();

}, 40);

// Over game function looks like
function overGame() { clearInterval(game) };

// On up press it should change interval
// in order to get height
$(document).on('keydown', function(e){
    var key = e.keyCode;
    console.log(key);
    if(key === 38 && up === false) up = setInterval(upB, 50);
    bird.css('background-image', 'url("../images/flippy_up.png")');
});
//---------------------------------//
$(document).on('keyup', function(e){
    clearInterval(up);
    up = false;
    bird.css('background-image', 'url("../images/flippy_nor.png")');
})
// --------------------------------//

// Down Function for flying
function downB() {bird.css('top', parseInt(bird.css('top')) + 5);}
// Up Function for flying
function upB() {bird.css('top', parseInt(bird.css('top')) - 10);}

// Collision of the 2 object we should
// check them !!
function collision(object, danger) {
    var x1 = object.offset().left;
    var y1 = object.offset().top;
    var h1 = object.outerHeight(true);
    var w1 = object.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = danger.offset().left;
    var y2 = danger.offset().top;
    var w2 = danger.outerWidth(true);
    var h2 = danger.outerHeight(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;

    return true;
}
