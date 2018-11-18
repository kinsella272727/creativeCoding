//Step03
'use strict';

var segmentCount=360;

function setup() {
    createCanvas(800, 400);
    noStroke();
    colorMode(HSB, 360, 100, 100);
}

function draw() {

    var angleIncrement = 360/segmentCount;

    var radius = 200;

    beginShape(TRIANGLE_FAN);
        vertex(width/2, height/2);
        for(var angle = 0; angle <= 360; angle= angle+angleIncrement) {
            var vx = radius * cos(radians(angle)) + width/2;
            var vy = radius * sin(radians(angle)) + height/2;
              //This is going to set the hue at whatever the angle will be
              //This should create a rainbow of colours going around the circle
              //This is because the angle is less than or equal to 360 
            fill(angle, 100, 100);
            vertex(vx,vy);
        }
    endShape();
}
