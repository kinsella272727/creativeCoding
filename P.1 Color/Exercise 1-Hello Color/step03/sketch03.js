//step3
function setup() {
    createCanvas(720, 720);
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
    noStroke();
}

function draw() {
    //The background colour will now change based on the mouseY position
    //The saturation and the brightness will stay at 100
    background(mouseY/2,100,100);
    fill(360-mouseY/2,100,100);
    rect(width/2, height/2, 100, 100);
}
