'use strict';

//Creating Global variables/arrays
//Letters array to store the letters that are created
var letters = [];
//Creating the density of the moire effect
var density = 1.5;
var ribbonWidth = 92;
var fontSize = 800;
var pathSimplification = 0;
var pathSampleFactor = 0.1;

//This will set the first default letter to whatever textTyped is equal to
var textTyped = 'G';
//Creates a variable to store the font
var font;

var randomColor;
var colors = [];


/* INTERPOLATION CODE */
// var interpolateShortest = true;

function preload() {
  //Loading the font which will be used for the while drawing the letters
  font = loadFont('data/NotoSans-Bold.ttf');
}

function setup() {
  //blendMode(BLEND);
  //Creates the canvas size so the dimensions for a book cover
  createCanvas(1240, 1748);

  //This will disable the need to fill the shape with color
  noFill();

  //Sets the color mode to HSB(Hue, Satutation, Brightness)
  //and the hue is set to 360 to give a full range of colours
  colorMode(HSB, 360);
  //Sets the width of the stroke
  strokeWeight(1);

  //Calls the createLetters function in the setup
  createLetters();
}

function draw() {
  //blendMode(BLEND);
  //Sets the background to white to allow the curvevertex to to constantly redraw
  background(360);

  //blendMode(DIFFERENCE);
  //This controls the position of the letter that is on screen
  translate(75, height * 0.4);


  //the pow function will allow the mulitplication of multiple numbers
  //the pathSampleFactor is 0.1 times .02 with mouseX divided by width
  pathSampleFactor = 0.1 * pow(0.02, mouseX / width);
  ribbonWidth = map(mouseY, 0, height, 1, 200);

  //For loop pushes variable i into the letters array to control the draw
  //Without this the letters would not draw on screen
  for (var i = 0; i < letters.length; i++) {
    letters[i].draw();
  }
}

function createLetters() {
  //Loads the letters array and makes it equal to nothing
  letters = [];
  //creates variable to load the textTyped which has been set above
  //the split function will break the textTyped string into pieces
  //At the moment the value is nothing so an empty space
  var chars = textTyped.split('');

  var x = 0;
  //For loop
  for (var i = 0; i < chars.length; i++) {
    if (i > 0) {
      //If the variable i is greater than one
      var charsBefore = textTyped.substring(0, i);
      x = font.textBounds(charsBefore, 0, 0, fontSize).w;
    }
    //As the name suggests when a newletter is created it pushes that new letters
    //into the letters array it also makes it equal to the letters function
    var newLetter = new Letter(chars[i], x, 0);
    letters.push(newLetter);
  }
}

//The function expects 3 variables char, x, y
function Letter(char, x, y) {
  //This will call the char and x variables from the createLetters function
  //and make them equal to the variables declared above
  this.char = char;
  this.x = x;
  this.y = y;
  colors = [];

  /* INTERPOLATION CODE */
  // var interCol;

  Letter.prototype.draw = function() {
    //The text to points will add up the array of points following the path
    //of the letter that is created
    var path = font.textToPoints(this.char, this.x, this.y, fontSize, {sampleFactor: pathSampleFactor});
    for (var d = 0; d < ribbonWidth; d += density) {

      /* INTERPOLATION CODE */
      // var col1 = colors[ribbonWidth];
      // var col2 = colors[ribbonWidth];


      //Creates a random color
      randomColor = color(random(255),255,255);
      //Creates a stroke of random colors so each line will constantly be a
      //different color
      stroke(randomColor);

      //As the name suggests this will begin the drawing of complex shapes
      //inbetween beginShape() and closeShape()
      beginShape();
      //For loop that will begin the drawing of the shape
      for (var i = 0; i < path.length; i++) {
        var amount = map(i, 0, path.length - 1, 0, 1);
        //Stores teh current letter position
        var pos = path[i];
        //stores the next position of the next letter
        var nextPos = path[i + 1];

        /* INTERPOLATION CODE */
        // if (interpolateShortest) {
        //   colorMode(RGB);
        //   interCol = lerpColor(col1, col2, amount);
        //   colorMode(HSB);
        // } else {
        //   interCol = lerpColor(col1, col2, amount);
        // }

        if (nextPos) {
          var p0 = createVector(pos.x, pos.y);
          var p1 = createVector(nextPos.x, nextPos.y);
          var v = p5.Vector.sub(p1, p0);
          //this will normalize the p5.Vector to a length of 1
          v.normalize();
          //This will rotate the object around half_pi
          v.rotate(HALF_PI);
          //This will multiply the given number
          v.mult(d);
          var pneu = p5.Vector.add(p0, v);

          curveVertex(pneu.x, pneu.y);
        }
      }
      colors.push(randomColor);
      //End of the shape drawing
      endShape(CLOSE);
    }
    gd.sortColors(colors);
  }
}

function keyReleased() {
  //This will save the canvas as a png image to show progress
  //keyCode is a p5 function
  if (keyCode == CONTROL) saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');


  if (keyCode == SHIFT) writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  //This will will multiply the density which will result in less lines appearing
  //on screen
  if (keyCode == LEFT_ARROW) density *= 1.25;
  //this will divide the density which will increase the number of lines appearing
  //on screen
  if (keyCode == RIGHT_ARROW) density /= 1.25;

  //This will increase the size of the font
  if (keyCode == UP_ARROW) {
    fontSize *= 1.1;
    createLetters();
  }
  //this will decrease the size of the font
  if (keyCode == DOWN_ARROW) {
    fontSize /= 1.1;
    createLetters();
  }
  if (keyCode == ENTER) createLetters();

}

function keyPressed() {
  //If the backarrow or the delete button is pressed then the letters furtherest on
  //the left will be removed
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    if (textTyped.length > 0) {
      //if the buttons is pressed then the text that has been typed will be -1
      textTyped = textTyped.substring(0, textTyped.length - 1);
      createLetters();
    }
  }
}

function keyTyped() {
  //if the keyCode equals 32 which is the spacebar it will create a gap
  //inbetween the letters
  if (keyCode >= 32) {
    textTyped += key;
    createLetters();
  }
}
