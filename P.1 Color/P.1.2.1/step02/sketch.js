//Step02
'use strict';

var tileCountX = 10;
var tileCountY = 10;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  //noStroke();
}

function draw() {
  //This will map the mouseX to the width
  tileCountX = int(map(mouseX, 0, width, 2, 100));
  //This will map the mouseY to the height
  tileCountY = int(map(mouseY, 0, height, 2, 10));

  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;

  for (var gridY = 0; gridY < tileCountY; gridY++){
    for (var gridX = 0; gridX < tileCountX; gridX++) {
        var amount = map(gridX, 0, tileCountX - 1, 0, 1);

        var posX = tileWidth * gridX;
        var posY = tileHeight * gridY;

        fill('blue');
        rect(posX, posY, tileWidth, tileHeight);
      }
    }
}
