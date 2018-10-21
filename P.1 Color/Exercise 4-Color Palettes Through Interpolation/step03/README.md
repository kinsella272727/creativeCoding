## Step 3

Setting up arrays for the different set of colours
the colour on the left and the colour on the right will always remain the same

```js
var colorsLeft = []
var colorsRight = [];
var colors = [];
```

Calling the function shakeColors

```js
shakeColors();
```

Creating a variable intercol

```js
var interCol;
```

Calling the colors array

```js
  colors = [];
```

Creating two variables to store the colours in the left side of the grid and the
right side of the grid

```js
var col1 = colorsLeft[gridY];
var col2 = colorsRight[gridY];
```

Lerpcolor will take col1 and col2 and interpolate the two of them,

```js
interCol = lerpColor(col1, col2, amount);
```

Fills the rectangles with the colour

```js
fill(interCol);
```

This function will fill the colorsleft and the colorsright arrays with random colors

```js
function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}
```

When the mouse button is pressed then the colours will rerandomize
this is because the it is calling the shakecolors function

```js
function mouseReleased() {
  shakeColors();
}
```
