
var layout = [[200, 200, 50, 50]]

var player = { x: 0, y: 0, weapon: null, speed: 10}

var box = jQuery('.box');	// reference to the HTML .box element
var board = jQuery('.board');	// reference to the HTML .board element
var boardWidth = board.width();	// the maximum X-Coordinate of the screen
var boardHeight = board.innerHeight(); // the maximum Y-Coordinate of the screen
console.log(boardWidth + ", " + boardHeight)

var c = document.getElementById("CanvasTest");
var ctx = c.getContext("2d");
const context = c.getContext('2d');


var map = {}; // maps all buttons being currently pressed

//Common Func Setup

function randi(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

document.addEventListener('keydown', myKeyPress);

function myKeyPress(e) {
    var keynum;

    if (window.event) { // IE                  
        keynum = e.keyCode;
    } else if (e.which) { // Netscape/Firefox/Opera                 
        keynum = e.which;
    }

};

function rect(rX, rY, sX, sY, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.rect(rX, rY, sX, sY);
    ctx.stroke();
};

function elipses(eX, eY, size, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.ellipse(eX, eY, 12 * size, 12 * size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
};

function clear() {

    ctx.clearRect(0, 0, c.width, c.height);

}

function draw(text, tX, tY, px) {
    var c = document.getElementById("CanvasTest");
    var ctx = c.getContext("2d");
    ctx.font = px + "px " + "Courier New";
    ctx.strokeText(text, tX, tY);
};

function lineTo(x, y, fromX, fromY) {
ctx.beginPath();
ctx.moveTo(x, x);
ctx.lineTo(fromX, fromY);
ctx.stroke();
}

function line3D(x, y, z, fromX, fromY, fromZ) {

    lineTo((Math.sin(turn1) * x) + (Math.cos(turn1) * z * -1), (Math.cos(turn1) * x) + Math.sign(turn1) * z * Math.cos(turn2) + y * Math.sin(turn2), (Math.sin(turn1) * fromX) + (Math.cos(turn1) * fromZ * -1), (Math.cos(turn1) * fromX) + Math.sign(turn1) * fromZ * Math.cos(turn2) + fromY * Math.sin(turn2))


}

// starts here.

//Process Setup
var lastUpdate = Date.now(); //deltatime handler
var now = Date.now();
var dt = now - lastUpdate;
setInterval(process, dt)

//start here

var turn1 = 0
var turn2 = 0



function process() {
    try {
    //clear()
    input()
    //player()
    stamp()
    } catch (err) {
        document.getElementById("dt").innerHTML = err.toString() + " at: " + err.lineNumber
    }

    
}

function getpress() {
    onkeydown = onkeyup = function (e) {
        e = e || event; // to deal with IE
        map[e.keyCode] = e.type == 'keydown';
    };

    if (map[38]) { //p1up

        player.y += 1
    } else if (map[40]) { //p1down

        player.y -= 1
    } else if (map[39]) { //p1left

        player.x += 1
    } else if (map[37]) { //p1right
        player.x -= 1
    } else if (map[68]) { //debug value

        debug()
    };

};

function player() {



}

function stamp() {

    //lineTo(20, 20, 50, 50)

    //line3D(30, 30, 1, 90, 90, 1)

    enemy(49, 49, 49)

    raycast()
}

function raycast() {

}

function input() {

}

function player() {

}

function enemy(x, y, z) {

rect(x/z, y/z, 40/z, 100/z)

}

function cube(color, sX, sY) {


    


}