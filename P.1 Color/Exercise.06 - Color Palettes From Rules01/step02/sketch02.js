//Step2
'use strict';

var tileCountX = 50;
var tileCountY = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  //noStroke();
}

function draw() {

  //This will constrain the changes to the rectangles to the canvas
  var mX = constrain(mouseX, 0, width);
  var mY = constrain(mouseY, 0, height);

  //variable sets up counter
  var counter = 0;

  //this will map the tilecount with the constraints
  var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
  var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));
  //This has changed from dividing by the tilecount to dividing by the currentTileCount
  var tileWidth = width / currentTileCountX;
  var tileHeight = height / currentTileCountY;

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      var index = counter % currentTileCountX;

      fill('blue');
      rect(posX, posY, tileWidth, tileHeight);
      counter++;
    }
  }
}
