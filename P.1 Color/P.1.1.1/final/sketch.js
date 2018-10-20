//Final Colour Spectrum
'use strict';

function setup() {
    createCanvas(800, 400);
    colorMode(HSB, width, height, 100);
    noStroke();
}

function draw() {

    //This will count the number of tiles in the xaxis and the number of rows in the yaxis
    var numberofCols = mouseX + 2;
    var numberofRows = mouseY + 2;

    //This will step in the nested for loop, the stepX and stepY will be used to increment
    //And will be the width and the height of each rectangle
    var stepX = width/numberofCols;
    var stepY = width/numberofRows;

    for(var gridY = 0; gridY < height; gridY += stepY) {
        for(var gridX = 0; gridX < width; gridX += stepX) {
            fill(gridX,height-gridY,100);
            rect(gridX,gridY,stepX,stepY);
        }
    }
}

//When the key is pressed this will save the canvas as a png with the name being the mouseX and mouseY position
function keyPressed() {
    if (key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY, 'png');
}
