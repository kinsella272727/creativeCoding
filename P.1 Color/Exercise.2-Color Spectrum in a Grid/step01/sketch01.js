//Step01-Colour Spectrum
'use strict';

function setup() {
    createCanvas(800, 400);
    colorMode(HSB, 360, 100, 100);
    noStroke();
}

function draw() {
  //The rect will be the colour blue this is just to give it a colour.
  fill('blue');
  //Creating a single red square to begin, this will create it at xpos: 100 ypos:100
  //This will be step 1 in creating the colour spectrum
  rect(100,100,100,100);
}
