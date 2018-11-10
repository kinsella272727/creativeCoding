'use strict';

var actRandomSeed = 0;
var alphaValue = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  //noStroke();
}

function draw() {
  noLoop();
  background(0);
  randomSeed(actRandomSeed);

  var counter = 0;
  var rowCount = int(random(5, 30));
  var rowHeight = height / rowCount;

  for (var i = rowCount; i >= 0; i--) {
    var partCount = i + 1;
    var parts = [];

    for (var ii = 0; ii < partCount; ii++) {
      if (random() < 0.075) {
        var fragments = int(random(2, 20));
        partCount = partCount + fragments;
        for (var iii = 0; iii < fragments; iii++) {
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

    var sumPartsTotal = 0;
    for (var ii = 0; ii < partCount; ii++) {
      sumPartsTotal += parts[ii];
    }

    var sumPartsNow = 0;
    for (var ii = 0; ii < parts.length; ii++) {
      sumPartsNow += parts[ii];

      if (random() < 0.45) {
        var w = map(parts[ii], 0, sumPartsTotal, 0, width);
        var h = rowHeight * 1.5
        var px1 = map(sumPartsNow, 0, sumPartsTotal, 0, width);
        var px2 = px1 + w;
        var py1 = rowHeight * i;
        var py2 = py1 + h;

        fill('green');
        rect(px1, py1, w, h);
      }

      counter++;
    }
  }
}
