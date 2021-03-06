//Step1
//This will setup code, it will be called once the index page is opened up
function setup() {
  //This will set up the canvas for the size 720,720
    createCanvas(720, 720);
    //This will set up the color mode as HSB(Hue, Saturation, Brightness)
    //hue is set to 360 which will give a full range of colours, while Saturation
    //and brightness is set to 100 
    colorMode(HSB, 360, 100, 100);
    //the first two values of rect will be the center point, the last two values will be the width and height
    rectMode(CENTER);
    noStroke();
}

function draw() {
    fill(360,100,100);
    //This will take the first two values as the center point which is width/2 and height/2
    //This is draw the rectangle from these points as the center points
    rect(width/2, height/2, 100, 100);
}
