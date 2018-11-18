'use strict';

var shapes = [];
var minRadius = 5;
var maxRadius = 250;
var density = 5;

var shapeColor;

var newShape;

function setup() {
  createCanvas(800, 800);
  noFill();

  shapeColor = color(0);

  shapes.push(new Shape(width / 2, height / 2, width, shapeColor));

}

function draw() {
  background(255);
  shapes.forEach(function(shape) {
    shape.draw();
  });

  if(newShape) {
    newShape.x = mouseX;
    newShape.y = mouseY;
    //newShape.r = (minRadius, maxRadius);
    newShape.c = shapeColor;
    newShape.draw();
  }

}

function Shape(x, y, r, c) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.c = c;

  Shape.prototype.draw = function() {
    stroke(this.c);
    for (var i = 0; i < this.r; i += density) {
      ellipse(this.x, this.y, i);
    }
  };
}

function mousePressed() {
  newShape = new Shape(mouseX, mouseY, random(minRadius, maxRadius), shapeColor);
}

function mouseReleased() {
  shapes.push(newShape);
  newShape = undefined;
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') shapeColor = color(255, 0, 0);
  if (key == '2') shapeColor = color(0, 255, 0);
  if (key == '3') shapeColor = color(0, 0, 255);
  if (key == '4') shapeColor = color(0);

  if (keyCode == UP_ARROW) shapeHeight += density;
  if (keyCode == DOWN_ARROW) shapeHeight -= density;
}
