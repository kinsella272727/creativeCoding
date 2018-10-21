//step2 
function setup() {
    createCanvas(720, 720);
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
    //This will make it so there is no border going around the rectangle
    noStroke();
}

function draw() {
    background(360,100,100);
    fill(360-mouseY/2,100,100);
    //The rect will now increase and decrease in size depending on the mouse position
    rect(width/2, height/2, mouseX, mouseX);
}
