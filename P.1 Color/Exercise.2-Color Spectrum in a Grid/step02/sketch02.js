//Step02 Colour Spectrum
'use strict';

function setup() {
    createCanvas(800, 400);
    colorMode(HSB, 360, 100, 100);
    //Decided to turn off stroke so users can see the grid that has been created
    //noStroke();
}

function draw() {

//This is a loop within a loop, this will create a grid of squares covering the canvas
//It will be 16 in the xaxis and and 8 in the yaxis, This is because 50 that is in eachloop
//will divide into 800 = 16 times and will divide into 400 = 8 times
  for(var gridY = 0; gridY < height; gridY += 50) {
      for(var gridX = 0; gridX < width; gridX += 50){
        fill('blue');
        rect(gridX,gridY,100,100);
      }
  }
}
