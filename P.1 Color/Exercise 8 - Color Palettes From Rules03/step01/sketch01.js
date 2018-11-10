//Step 01
'use strict';

//Declaring global variables for later use
var actRandomSeed = 0;
var alphaValue = 27;

function setup() {
  //This will make the canvas the entire width and height of the browser window
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  //noStroke();
}

function draw() {
  //This will prevent the code from continuously looping in the draw function
  noLoop();
  //This will make the background white
  background(0);

  //Adds a counter to be used further down in the color
  var counter = 0;
  //The rowCount is will be a random number between 5 - 30 with the int
  //Making sure its not a decimal,
  var rowCount = int(random(5, 30));
  //This will make the height of the row the height of the canvas divided by
  //the row count
  var rowHeight = height / rowCount;

  //This for loop will begin the drawing of the rect
  for (var i = rowCount; i >= 0; i--) {
    var partCount = i + 1;
    //creates an empty parts array
    var parts = [];

    //Seperating the rows
    for (var ii = 0; ii < partCount; ii++) {
      //if random is declared that is less than 0.075 than a random number of
      //fragments will be created between 2-20, this can be seen in the line below
      //this will also be an integer so the number will not be a decimal
      if (random() < 0.075) {
        var fragments = int(random(2, 20));
        partCount = partCount + fragments;
        for (var iii = 0; iii < fragments; iii++) {
          parts.push(random(2));
        }
        //if the number is more than 0.075 then it is pushed into parts
      } else {
        parts.push(random(2, 20));
      }
    }
    //This variable will be used to store all the parts
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

      fill('blue')
      rect(x, y, w, h);

      //The counter that was created earlier will increment after each loop
      counter++;
    }
  }
}
