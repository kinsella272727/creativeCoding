'use strict';

var letters = [];
var density = 2.5;
var ribbonWidth = 92;
var fontSize = 800;
var pathSimplification = 0;
var pathSampleFactor = 0.1;

var textTyped = 'I';

var font;

function preload() {
  font = loadFont('data/NotoSans-Bold.ttf');

}

function setup() {
  createCanvas(1240, 1748);
  noFill();
  strokeWeight(1);

  createLetters();
}

function draw() {
  background(255);
  translate(100, height * 0.4);

  pathSampleFactor = 0.1 * pow(0.02, mouseX / width);
  ribbonWidth = map(mouseY, 0, height, 1, 200);

  for (var i = 0; i < letters.length; i++) {
    letters[i].draw();
  }
}

function createLetters() {
  letters = [];
  var chars = textTyped.split('');

  var x = 0;
  for (var i = 0; i < chars.length; i++) {
    if (i > 0) {
      var charsBefore = textTyped.substring(0, i);
      x = font.textBounds(charsBefore, 0, 0, fontSize).w;
    }
    var newLetter = new Letter(chars[i], x, 0);
    letters.push(newLetter);
  }
}

function Letter(char, x, y) {
  this.char = char;
  this.x = x;
  this.y = y;

  Letter.prototype.draw = function() {
    var path = font.textToPoints(this.char, this.x, this.y, fontSize, {sampleFactor: pathSampleFactor});
    stroke(0);

    for (var d = 0; d < ribbonWidth; d += density) {

      beginShape();

      for (var i = 0; i < path.length; i++) {
        var pos = path[i];
        var nextPos = path[i + 1];

        if (nextPos) {
          var p0 = createVector(pos.x, pos.y);
          var p1 = createVector(nextPos.x, nextPos.y);
          var v = p5.Vector.sub(p1, p0);
          var pneu = p5.Vector.add(p0, v);
          vertex(pneu.x, pneu.y);
        }
      }

      endShape(CLOSE);
    }
  }
}

function keyReleased() {
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
}
