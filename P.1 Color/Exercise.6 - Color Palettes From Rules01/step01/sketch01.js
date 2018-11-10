//Step1
'use strict';

var tileCountX = 50;
var tileCountY = 10;

function setup() {
  //The canvas width and height are set to the width and height of the browser window
  createCanvas(windowWidth, windowHeight);
  //The color mode is set to HSB, with the Hue set to 360, saturation and brightness
  //Set to 100 and the alpha set to 10
  colorMode(HSB, 360, 100, 100, 100);
  //noStroke();
}

function draw() {

  //This will divide the width by the tilecount which is the width of the browser
  var tileWidth = width / tileCountX;
  //This will divide the height by the tilecount which is the height of the browser
  var tileHeight = height / tileCountY;

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      //This will divide the tile width and height by the gridx and gridyY
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      fill('blue');
      rect(posX, posY, tileWidth, tileHeight);
    }
  }
}
