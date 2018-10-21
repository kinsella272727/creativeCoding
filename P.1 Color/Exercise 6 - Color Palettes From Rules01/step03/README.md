## Step 3

//Creating arrays for each of the HSB values

```js
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
```

//For loop that will give a random value for each tile count

```js
for (var i = 0; i < tileCountX; i++) {
  hueValues[i] = random(360);
  saturationValues[i] = random(100);
  brightnessValues[i] = random(100);
}
```

//White background to continously redraw the the background so the rectangles don't draw over
themselves

```js
background(0, 0, 100);
```

//puts the index value into the array for each

```js
fill(hueValues[index], saturationValues[index], brightnessValues[index]);
```
