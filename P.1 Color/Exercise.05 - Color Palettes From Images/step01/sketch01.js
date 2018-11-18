//Step 01
'use strict'

var img;

function preload() {
    //This will load an image from the file path and creates an image for it
    img = loadImage('image/pic1.jpg');
}

function setup(){
    createCanvas(600,600);
    noCursor();
    noStroke();

    //Prevent the draw function from continously looping
    noLoop();
}

function draw() {
    img.loadPixels();

    //This will return a value of the color in the array
    console.log(img.pixels[1]);
    console.log(img);
}
