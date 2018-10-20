//Step03
'use strict';

var tileCountX = 10;
var tileCountY = 10;

//Setting up arrays for the different set of colours
//The colour on the left and the colour on the right will always remain the same
var colorsLeft = []
var colorsRight = [];
var colors = [];

var interpolateShortest = true;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  //Calling the function shakeColors
  shakeColors();
  }

function draw() {
  tileCountX = int(map(mouseX, 0, width, 2, 100));
  tileCountY = int(map(mouseY, 0, height, 2, 10));

  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;

  //Creating a variable intercol
  var interCol;
  //Calling the colors array
  colors = [];

  for (var gridY = 0; gridY < tileCountY; gridY++){
    //Creating two variables to store the colours in the left side of the grid and the
    //right side of the grid
    var col1 = colorsLeft[gridY];
    var col2 = colorsRight[gridY];
    for (var gridX = 0; gridX < tileCountX; gridX++) {
        var amount = map(gridX, 0, tileCountX - 1, 0, 1);

        if (interpolateShortest) {
          colorMode(RGB);
          //Lerpcolor will take col1 and col2 and interpolate the two of them,
          interCol = lerpColor(col1, col2, amount);
          colorMode(HSB);
        } else {
          interCol = lerpColor(col1, col2, amount);
        }

        //Fills the rectangles with the colour
        fill(interCol);

        var posX = tileWidth * gridX;
        var posY = tileHeight * gridY;

        rect(posX, posY, tileWidth, tileHeight);
        colors.push(interCol);
      }
    }
}

//This function will fill the colorsleft and the colorsright arrays with random colors
function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}
// When the mouse button is pressed then the colours will rerandomize
//This is because the it is calling the shakecolors function
function mouseReleased() {
  shakeColors();
}
