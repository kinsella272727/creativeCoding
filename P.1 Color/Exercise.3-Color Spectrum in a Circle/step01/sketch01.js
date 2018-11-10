//Step01
'use strict';

function setup() {
    createCanvas(800, 400);
    noStroke();
    //These will give a full range of colours when used
    colorMode(HSB, 360, 100, 100);
}

function draw() {
    fill('red')

    //The beginShape() and the endShape() will allow the user to create more complex shapes
    //Instead of using rect(100,100,100,100) to create a shape
    //beginShape will need a parameter in this case it is a TRIANGLE_FAN, this will tell
    //what you are trying to create with the vertexs,
    beginShape(TRIANGLE_FAN);
      vertex(57.5, 50);
      vertex(57.5, 15);
      vertex(92, 50);
      vertex(57.5, 85);
      vertex(22, 50);
      vertex(57.5, 15);
    endShape();
}
