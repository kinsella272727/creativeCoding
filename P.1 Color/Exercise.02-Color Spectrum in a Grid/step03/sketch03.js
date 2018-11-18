//Step03 Colour Spectrum
'use strict';

function setup() {
    createCanvas(800, 400);
    //The Hue and Saturation will be the qidth and height of the saveCanvas
    //This will give the hue a full range of colours
    colorMode(HSB, width, height, 100);
    //This is now turned on as it is not needed anymore
    noStroke();
}

function draw() {

  for(var gridY = 0; gridY < height; gridY += 50) {
      for(var gridX = 0; gridX < width; gridX += 50){
        //The hue will now be whatever the position of gridX will be
        //The saturation will be height-gridY, this will ensure that the
        //colours with the highest saturation will be at the top of the canvas
        fill(gridX,height-gridY,100);
        rect(gridX,gridY,100,100);
      }
  }
}
//Similar to the previous exercise, this will save a screenshot off the canvas with the mouseX and mouseY position
//That will become important in the final step
function keyPressed() {
    if (key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
