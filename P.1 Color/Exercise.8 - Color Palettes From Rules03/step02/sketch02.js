//step 02
'use strict';

var colorCount = 20;
//Creating empty arrays for the hue, saturation, brightness
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;
var alphaValue = 27;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  //noStroke();
}

function draw() {
  noLoop();
  background(0);
  randomSeed(actRandomSeed);

  //Creating colour palette which will have a random hue and brightness or a random
  //saturation 
  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }

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

      var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
      var y = rowHeight * i;
      var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
      var h = rowHeight * 1.5;

      var index = counter % colorCount;
      var col1 = color(0);
      var col2 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
      fill(col2);
      rect(x, y, w, h);

      counter++;
    }
  }
}
