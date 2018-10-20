//Step 04
'use strict'

var img;

var colors = [];

var sortMode = null;

function preload() {
    img = loadImage('image/pic1.jpg');
}

function setup(){
    createCanvas(600,600);
    noCursor();
    noStroke();
}

function draw() {
    var tileCount = floor(width / max(mouseX, 5));
    var rectSize = width / tileCount;

    img.loadPixels();

    colors = [];

    for(var gridY = 0; gridY < tileCount; gridY++) {
        for(var gridX = 0; gridX < tileCount; gridX++) {
            var px = int(gridX * rectSize);
            var py = int(gridY * rectSize);
            var i = (py * img.width + px) * 4;
            var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i+ 2], img.pixels[i + 3]);
            colors.push(c);
        }
    }

    gd.sortColors(colors, sortMode);

    var i = 0;
    for(var gridY = 0; gridY < tileCount; gridY++) {
        for(var gridX = 0; gridX < tileCount; gridX++) {
            fill(colors[i]);
            rect(gridX * rectSize, gridY * rectSize, rectSize,rectSize);
            i++;
        }
    }
}

//this is key functions which will sort the colors to the different hue,saturation etc
function keyReleased() {
    //Save the colour palette that is currently on screen as a ase file with the name being the current timestamp
    if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
    //Save a screenshot of the canvas as a png with the timestamp as the name
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

    //Load different images when the key is pressed
    if (key == '1') img = loadImage('data/pic1.jpg');
    if (key == '2') img = loadImage('data/pic2.jpg');
    if (key == '3') img = loadImage('data/pic3.jpg');
    if (key == '4') img = loadImage('data/pic4.jpg');

    if(key == '5') sortMode = null;
    //This will sort the colours by hue
    if(key == '6') sortMode = gd.HUE;
    //This will sort the colours by saturation
    if(key == '7') sortMode = gd.SATURATION;
    //This will sort the colours by brightness
    if(key == '8') sortMode = gd.BRIGHTNESS;
    //This will sort the colours by grayscale
    if(key == '9') sortMode = gd.GRAYSCALE;


}
