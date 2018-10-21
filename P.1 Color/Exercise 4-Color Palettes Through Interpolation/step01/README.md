## Step 1 

//Two new variables that will set up number of tiles along the x and y axis

```js
var tileCountX = 10;
var tileCountY = 10;
```

//This will set the colormode as HSB with default values

```js
colorMode(HSB);
```

//dividing the width of the canvas by the tilecount in the x axis

```js
var tileWidth = width / tileCountX;
```

//dividing the height of the canvas by the tilecount in the y axis

```js
var tileHeight = height / tileCountY;
```

//nested for loop that will create the the grid system

```js
for (var gridY = 0; gridY < tileCountY; gridY++)
    for (var gridX = 0; gridX < tileCountX; gridX++) 
```

//Two variables that will take the gridx and gridy and multiply them by the
the tilewidth and tileheight respectfully


```js
var posX = tileWidth * gridX;
var posY = tileHeight * gridY;
```
