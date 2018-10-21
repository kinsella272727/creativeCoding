## Step 1 

The canvas width and height are set to the width and height of the browser window

```js
createCanvas(windowWidth, windowHeight);
```

The color mode is set to HSB, with the Hue set to 360, saturation and brightness
set to 100 and the alpha set to 10

```js
colorMode(HSB, 360, 100, 100, 100);
```

This will divide the width by the tilecount which is the width of the browser

```js
var tileWidth = width / tileCountX;
```

This will divide the height by the tilecount which is the height of the browser

```js
var tileHeight = height / tileCountY;
```

This will divide the tile width and height by the gridx and gridyY

```js
var posX = tileWidth * gridX;
var posY = tileHeight * gridY;
```
