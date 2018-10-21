//Final
'use strict';
var segmentCount=360;

function setup() {
    createCanvas(800, 400);
    noStroke();
    colorMode(HSB, 360, 100, 100);
}

function draw() {

    //This background will redraw when a key is pressed
    //This is to prevent the circle from redrawing over itself
    //and the background will redraw as the circle does
    background(50,100,100);

    var angleIncrement = 360/segmentCount;
    var radius = 200;

    beginShape(TRIANGLE_FAN);
        vertex(width/2, height/2);
        for(var angle = 0; angle <= 360; angle= angle+angleIncrement) {
            var vx = radius * cos(radians(angle)) + width/2;
            var vy = radius * sin(radians(angle)) + height/2;
            fill(angle, 100, 100);
            vertex(vx,vy);
        }
    endShape();
}


function keyPressed() {
  //When the s key is pressed the canvas will save a pgn
    if (key =='s' || key == 'S') saveCanvas(gd.timestamp(), '.png');

    //in this switch statement when one of the numbers is pressed it will change
    //the number of vertexs thus changing the angle
    switch (key) {
            case '1':
            segmentCount = 360;
            break;
            case '2':
            segmentCount = 45;
            break;
            case '3':
            segmentCount = 24;
            break;
            case '4':
            segmentCount = 12;
            break;
            case '5':
            segmentCount = 6;
            break;
    }
}
