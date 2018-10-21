## Final Step

This is key functions which will sort the colors to the different hue,saturation etc

```js
function keyReleased()
```

Save the colour palette that is currently on screen as a ase file with the name being the current timestamp

```js
if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
```

Save a screenshot of the canvas as a png with the timestamp as the name

```js
if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
```

Load different images when the key is pressed

```js
if (key == '1') img = loadImage('data/pic1.jpg');
if (key == '2') img = loadImage('data/pic2.jpg');
if (key == '3') img = loadImage('data/pic3.jpg');
if (key == '4') img = loadImage('data/pic4.jpg');
```

This will sort the colours by hue

```js
if(key == '6') sortMode = gd.HUE;
```

This will sort the colours by saturation

```js
if(key == '7') sortMode = gd.SATURATION;
```

This will sort the colours by brightness

```js
if(key == '8') sortMode = gd.BRIGHTNESS;
```

This will sort the colours by grayscale

```js
if(key == '9') sortMode = gd.GRAYSCALE;
```
