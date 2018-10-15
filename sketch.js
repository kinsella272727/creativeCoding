//This stricts the common coding errors that you may encounter.
'use strict';

//Global variable which will be used to store the loaded image in
var img;
//Global array to store the colours of the images 
var colors = [];
//This will sets the sortmode to null and it will be used to change the colormode
//Will later be used in sortColor which is from the generative design library
var sortMode = null;

//Objects can be preloaded in here for further use
function preload() {
    //the image is loaded from the file path, it is preloaded in the varible img for further use 
  img = loadImage('data/pic1.jpg');
}

//This will setup stuff for later use.
function setup() {
    //This will create a canvas on the screen at 600px by 600px in the browser
  createCanvas(600, 600);
    //There will be no cursor while the user hovers over the canvas
  noCursor();
    //There will be no border that will appear around shapes
  noStroke();
}

//this will be used to draw objects
function draw() {
    /*Floor means that if the number ends in 10.3 it will be floored to 10,max will find the max value from mouseX 
    and 5 so if 5 is bigger than mouseX than 5 will be used*/
  var tileCount = floor(width / max(mouseX, 5));
    //This variable will make the the width of the canvas divided by the declared variable tilecount to create the rectangle
  var rectSize = width / tileCount;
    
    //This will load the pixels into the img variable
  img.loadPixels();
    //Calling the array which will be used in the draw function to fill up with the colours from the pixels
  colors = [];
//This will determine the number of tiles in the Y axis depending on the mouse position which is from tileCount
  for (var gridY = 0; gridY < tileCount; gridY++) {
      //This will determine the number of tiles in the X axis depending on the mouse position
    for (var gridX = 0; gridX < tileCount; gridX++) {
        //This will multiply the gridX by rectSize which will mean that it will be a whole number, the rectangles will all be the same size
      var px = int(gridX * rectSize); 
         //This will multiply the gridY by rectSize which will mean that it will be a whole number
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
        //Pushes the colours created into the array
      colors.push(c);
    }
  }

    //This is pulling the sortcolors function from the generative design library
  gd.sortColors(colors, sortMode);

    //Creates a variable (i) which will be used in the colors array 
  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
        //This will fill the rectangle with the colours that are in the colours array
      fill(colors[i]);
        /*Creates a rectangle with the X position of gridX by rectsize and Y position 
        of gridY by rectsize, the width and height will just be rectsize, rectsize
        equals width divided by tileCount*/
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
        //increments i to increase its value
      i++;
    }
  }
}

//Using the keyReleased function from p5, which sets functions to different key presses
function keyReleased() {
    //if c is pressed it will write the ascii code for the colours on screen for use in Photoshop, this is from the generative design library
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
    //if S is pressed this will save a screenshot of what the canvas looks like at the moment, this is from the generative design library
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

    //Pressing 1 will load the first image
  if (key == '1') img = loadImage('data/pic1.jpg');
    //Pressing 2 will load the second image
  if (key == '2') img = loadImage('data/pic2.jpg');
    //Pressing 3 will load the third image
  if (key == '3') img = loadImage('data/pic3.jpg');
    //Pressing 4 will load the fourth image
  if (key == '4') img = loadImage('data/pic4.jpg');

    //pressing 5 will make the sortmode will make no colour sorting 
  if (key == '5') sortMode = null;
    //pressing 6 will sort the color mode to hue, this is from the generative design library
  if (key == '6') sortMode = gd.HUE;
    //pressing 7 will sort the color mode to saturation, this is from the generative design library
  if (key == '7') sortMode = gd.SATURATION;
    //pressing 8 will sort the color mode to brightness, this is from the generative design library
  if (key == '8') sortMode = gd.BRIGHTNESS;
    //pressing 9 will sort the color mode to grayscale, this is from the generative design library
  if (key == '9') sortMode = gd.GRAYSCALE;
}
