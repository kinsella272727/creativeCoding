//Andrew Kinsella - N00151561

//Font variables
let font;
let fontSize = 250;
let textImg;
let pointDensity = 8;
let circleRadius = 5;
let lineLength = 5;
let lineThickness = 1;

//Sliders
let radiusSlider;
let densitySlider;
let lineSlider;
let fontSlider;
let strokeSlider;
let rotateSlider;
let degreeSlider;
let rotateBox;
let rotateDegree = 0;
let rotateSpeed = 3;

//Checkboxes
let checkbox;
let lineBox;

let shapes;
let filled;

let textTyped = 'ABC';
let inputBox;

let img;

let startArray = [];
let finishArray = [];
let lerpAmount;
let xPos;
let yPos;

function preload() {
  font = loadFont('data/FreeSansBold.ttf');
  img = loadImage('images/gradImg.jpg');
}

function setup() {
  rectMode(CENTER);

  let canvas = createCanvas(730, 500);
  canvas.parent('canvasHolder');

  radiusSlider = createSlider(1, 20, circleRadius);
    radiusSlider.parent('radiusController');
    radiusSlider.mouseReleased(update);

  densitySlider = createSlider(1, 20, pointDensity);
    densitySlider.parent('densityController');
    densitySlider.mouseReleased(update);

  fontSlider = createSlider(50, 300, fontSize);
    fontSlider.parent('fontController');
    fontSlider.mouseReleased(update);

  lineSlider = createSlider(1, 20, lineLength);
    lineSlider.parent('lengthController');
    lineSlider.mouseReleased(update);

  strokeSlider = createSlider(1, 30, lineThickness);
    strokeSlider.parent('strokeController');
    strokeSlider.changed(update);

  rotateSlider = createSlider(1, 20, rotateSpeed);
    rotateSlider.parent('rotateController');
    rotateSlider.changed(update);

  degreeSlider = createSlider(0, 180, rotateDegree);
    degreeSlider.parent('degreeController');
    degreeSlider.changed(update);

  checkbox = createCheckbox('Fill', true);
    checkbox.parent('fillController');
    checkbox.changed(update);

  lineBox = createCheckbox('Line or Square', true);
    lineBox.parent('lineController');
    lineBox.changed(update);

  inputBox = createInput(textTyped);
    inputBox.parent('inputController');
    inputBox.changed(update);

  img.loadPixels();
  setUpText();
}

function draw() {
  background(255);
  for (let x = 0; x < textImg.width; x = x + pointDensity) {
    for (let y = 0; y < textImg.height; y = y + pointDensity) {
      let index = (x + y * textImg.width) * 4;

      let r = textImg.pixels[index];
      if (r < 128) {
        var rValue = img.pixels[index];
        var gValue = img.pixels[index + 1];
        var bValue = img.pixels[index + 3];
        var fillColor = color(rValue, gValue, bValue);
        if (filled) {
          push();
          translate(x, y);
          fill(fillColor);
          rotate(radians(frameCount * rotateSpeed));
          rotate(radians(frameCount % rotateDegree));
          noStroke();
          if (shapes) {
            strokeWeight(lineThickness);
            line(0, 0, lineLength, lineLength);
          } else {
            rect(0, 0, circleRadius, circleRadius);
          }
          pop();
        } else {
          push();
          translate(x, y);
          noFill();
          rotate(radians(frameCount * rotateSpeed));
          rotate(radians(frameCount % rotateDegree));
          stroke(fillColor);
          if (shapes) {
            strokeWeight(lineThickness);
            line(0, 0, lineLength, lineLength);
          } else {
            rect(0, 0, circleRadius, circleRadius);
          }
          pop();
        }
      }
    }
  }
}

function setUpText() {
  textImg = createGraphics(width, height);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font);
  textImg.textSize(fontSize);
  textImg.text(textTyped, 100, fontSize + 50);
  textImg.loadPixels();
}

function update() {
  //Shapes
  circleRadius = radiusSlider.value();
  pointDensity = densitySlider.value();

  //Line
  lineLength = lineSlider.value();
  lineThickness = strokeSlider.value();

  //Rotation
  rotateSpeed = rotateSlider.value();
  rotateDegree = degreeSlider.value();

  //Font
  fontSize = fontSlider.value();
  textTyped = inputBox.value();
  setUpText();

  if (checkbox.checked() == 1) {
    filled = 1;
  } else {
    filled = 0;
  }
  if (lineBox.checked() == 1) {
    shapes = 1;
  } else {
    shapes = 0;
  }
}
