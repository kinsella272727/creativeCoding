//Step01
'use strict';

//two new variables that will set up number of tiles along the x and y axis
var tileCountX = 10;
var tileCountY = 10;

function setup() {
  createCanvas(800, 800);
  //This will set the colormode as HSB with default values
  colorMode(HSB);
  //turned off to see the 10x10 grid created
  //noStroke();
}

function draw() {

  //dividing the width of the canvas by the tilecount in the x axis
  var tileWidth = width / tileCountX;
  //dividing the height of the canvas by the tilecount in the y axis
  var tileHeight = height / tileCountY;


  //nested for loop that will create the the grid system
  for (var gridY = 0; gridY < tileCountY; gridY++){
    for (var gridX = 0; gridX < tileCountX; gridX++) {

        //Two variables that will take the gridx and gridy and multiply them by the
        //the tilewidth and tileheight respectfully
        var posX = tileWidth * gridX;
        var posY = tileHeight * gridY;

        fill('blue');
        rect(posX, posY, tileWidth, tileHeight);
      }
    }
}
