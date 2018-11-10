//Step1
'use strict';

//Variables for the tile count
var tileCountX = 50;
var tileCountY = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  //noStroke();
}

function draw() {
  //This will prevent the rest of the code executing in the draw function
  noLoop();

  var counter = 0;
  //This variable will set a row count with a random number between 5 and 30
  //The int will ensure that the number won't end in a decimal
  var rowCount = int(random(5, 30));
  //This will divide the height and the rowcount to make sure that the height isn't
  //the same for each row
  var rowHeight = height / rowCount;

  //this for loop will begin the count for the row
  for (var i = rowCount; i >= 0; i--) {
    var partCount = i + 1;
    //Creates an empty array to store
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

    //This will add all the sub parts together
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
      var h = rowHeight;

      fill('blue');
      rect(x, y, w, h);

      counter++;
    }
  }
}
