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
    
    //Stop loop effortof the draw function, otherwise it will continously loop the draw function
    noLoop();
}

function draw() {
    img.loadPixels();
    
    //This will return a value of the color in the arrray
    console.log(img.pixels[1]);
    //console.log(img.width);
    console.log(img);
}